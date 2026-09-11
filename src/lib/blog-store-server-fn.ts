import { createServerFn } from "@tanstack/react-start";
import { getSession } from "@tanstack/react-start/server";
import { getStore } from "@netlify/blobs";
import type { PublishedRecord } from "@/content/types";

// Live-editable blog posts, stored in Netlify Blobs (no separate database —
// Netlify's built-in key/value+JSON store, available to any Netlify
// Function). These are additive to the 12 posts sourced from the master
// spec doc (src/content/records.json), which stay static/build-time.
// Netlify Blobs' auto-configuration only works inside an actual deployed
// Netlify Function (or `netlify dev`) — calls below fail gracefully under
// plain `vite dev`, matching the honest-failure pattern used elsewhere.

export type CustomBlogPost = {
  slug: string;
  title: string;
  description: string;
  h1: string;
  category: string;
  primaryCtaPath: string;
  bodyMarkdown: string;
  status: "draft" | "published";
  createdAt: string;
  updatedAt: string;
};

const STORE_NAME = "blog-posts";

function store() {
  return getStore({ name: STORE_NAME, consistency: "strong" });
}

function slugify(value: string): string {
  return value
    .toLowerCase()
    .trim()
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-+|-+$/g, "")
    .slice(0, 80);
}

export function customPostToRecord(post: CustomBlogPost): PublishedRecord {
  return {
    // PublishedRecord's status is about public-route visibility
    // (published/inactive), distinct from the admin's draft/published
    // editorial state — a draft post simply isn't routable yet.
    status: post.status === "published" ? "published" : "inactive",
    bodyMarkdown: post.bodyMarkdown,
    metadata: {
      id: `custom-${post.slug}`,
      type: "blog",
      path: `/blog/${post.slug}`,
      title: post.title,
      description: post.description,
      h1: post.h1,
      sourceStatus: "Published from the admin panel",
      publicationRequirement: "",
      primaryCtaPath: post.primaryCtaPath || "/contact",
      canonicalOnPublication: `https://ecomtik.com/blog/${post.slug}`,
      primaryKeyword: null,
      supportingKeywords: [],
      bodyWordCount: post.bodyMarkdown.trim().split(/\s+/).filter(Boolean).length,
      ...(post.category ? { category: post.category } : {}),
    },
  };
}

async function requireAdmin(): Promise<void> {
  const password = process.env["ADMIN_SESSION_SECRET"];
  if (!password || password.length < 32) throw new Error("not_authenticated");
  const session = await getSession<{ authenticated?: boolean }>({
    password,
    name: "admin",
  });
  if (session.data.authenticated !== true) throw new Error("not_authenticated");
}

// --- Public reads (no auth — used by the live /blog pages) ---

export const listPublishedCustomPosts = createServerFn({ method: "GET" }).handler(
  async (): Promise<CustomBlogPost[]> => {
    try {
      const { blobs } = await store().list();
      const posts = await Promise.all(
        blobs.map((b) => store().get(b.key, { type: "json" }) as Promise<CustomBlogPost>)
      );
      return posts.filter((p) => p && p.status === "published");
    } catch (error) {
      console.error("[blog-store] listPublishedCustomPosts failed", error);
      return [];
    }
  }
);

export const getPublishedCustomPost = createServerFn({ method: "GET" })
  .validator((data: { slug: string }) => data)
  .handler(async ({ data }): Promise<CustomBlogPost | null> => {
    try {
      const post = (await store().get(data.slug, { type: "json" })) as CustomBlogPost | null;
      return post && post.status === "published" ? post : null;
    } catch (error) {
      console.error("[blog-store] getPublishedCustomPost failed", error);
      return null;
    }
  });

// --- Admin reads/writes (session-gated) ---

export const adminListCustomPosts = createServerFn({ method: "GET" }).handler(
  async (): Promise<CustomBlogPost[]> => {
    await requireAdmin();
    const { blobs } = await store().list();
    const posts = await Promise.all(
      blobs.map((b) => store().get(b.key, { type: "json" }) as Promise<CustomBlogPost>)
    );
    return posts.filter(Boolean).sort((a, b) => b.updatedAt.localeCompare(a.updatedAt));
  }
);

export const adminGetCustomPost = createServerFn({ method: "GET" })
  .validator((data: { slug: string }) => data)
  .handler(async ({ data }): Promise<CustomBlogPost | null> => {
    await requireAdmin();
    return (await store().get(data.slug, { type: "json" })) as CustomBlogPost | null;
  });

export type SaveBlogPostInput = {
  slug?: string;
  title: string;
  description: string;
  h1: string;
  category: string;
  primaryCtaPath: string;
  bodyMarkdown: string;
  status: "draft" | "published";
};

export const adminSaveCustomPost = createServerFn({ method: "POST" })
  .validator((data: SaveBlogPostInput) => data)
  .handler(async ({ data }): Promise<{ ok: true; slug: string } | { ok: false; reason: string }> => {
    await requireAdmin();

    const slug = slugify(data.slug || data.title);
    if (!slug) return { ok: false, reason: "invalid_slug" };
    if (!data.title.trim() || !data.h1.trim() || !data.bodyMarkdown.trim()) {
      return { ok: false, reason: "missing_fields" };
    }

    const existing = (await store().get(slug, { type: "json" })) as CustomBlogPost | null;
    const now = new Date().toISOString();
    const post: CustomBlogPost = {
      slug,
      title: data.title.trim(),
      description: data.description.trim(),
      h1: data.h1.trim(),
      category: data.category.trim(),
      primaryCtaPath: data.primaryCtaPath.trim() || "/contact",
      bodyMarkdown: data.bodyMarkdown,
      status: data.status,
      createdAt: existing?.createdAt || now,
      updatedAt: now,
    };

    await store().setJSON(slug, post);
    return { ok: true, slug };
  });

export const adminDeleteCustomPost = createServerFn({ method: "POST" })
  .validator((data: { slug: string }) => data)
  .handler(async ({ data }): Promise<{ ok: true }> => {
    await requireAdmin();
    await store().delete(data.slug);
    return { ok: true };
  });
