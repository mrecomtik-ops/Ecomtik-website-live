import { useNavigate } from "@tanstack/react-router";
import { FormEvent, useState } from "react";
import { adminSaveCustomPost, type CustomBlogPost } from "@/lib/blog-store-server-fn";

const field =
  "w-full rounded-xl border border-ink/12 bg-white px-4 py-2.5 text-sm text-ink outline-none transition-colors focus:border-brand";
const label = "mb-1.5 block text-[12px] font-semibold tracking-wide text-graphite/60";

export function BlogPostForm({ initial }: { initial?: CustomBlogPost }) {
  const navigate = useNavigate();
  const [slug, setSlug] = useState(initial?.slug ?? "");
  const [title, setTitle] = useState(initial?.title ?? "");
  const [description, setDescription] = useState(initial?.description ?? "");
  const [h1, setH1] = useState(initial?.h1 ?? "");
  const [category, setCategory] = useState(initial?.category ?? "");
  const [primaryCtaPath, setPrimaryCtaPath] = useState(initial?.primaryCtaPath ?? "/contact");
  const [bodyMarkdown, setBodyMarkdown] = useState(initial?.bodyMarkdown ?? "");
  const [status, setStatus] = useState<"draft" | "published">(initial?.status ?? "draft");
  const [pending, setPending] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const isEditing = Boolean(initial);

  const onSubmit = async (e: FormEvent) => {
    e.preventDefault();
    setPending(true);
    setError(null);
    try {
      const result = await adminSaveCustomPost({
        data: {
          slug: isEditing ? initial!.slug : slug,
          title,
          description,
          h1,
          category,
          primaryCtaPath,
          bodyMarkdown,
          status,
        },
      });
      if (result.ok) {
        void navigate({ to: "/admin/blog" });
      } else {
        setError(`Couldn't save: ${result.reason}`);
      }
    } catch {
      setError("Something went wrong. Try again.");
    } finally {
      setPending(false);
    }
  };

  return (
    <form onSubmit={onSubmit} className="max-w-3xl space-y-5">
      <div>
        <label className={label}>Title</label>
        <input
          required
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          className={field}
        />
      </div>

      {!isEditing && (
        <div>
          <label className={label}>URL slug (optional — derived from title if left blank)</label>
          <input
            value={slug}
            onChange={(e) => setSlug(e.target.value)}
            placeholder="e.g. my-new-article"
            className={field}
          />
        </div>
      )}
      {isEditing && (
        <div>
          <label className={label}>URL</label>
          <p className="text-sm text-graphite/60">/blog/{initial!.slug}</p>
        </div>
      )}

      <div>
        <label className={label}>H1 (page heading)</label>
        <input required value={h1} onChange={(e) => setH1(e.target.value)} className={field} />
      </div>

      <div>
        <label className={label}>Meta description</label>
        <textarea
          required
          rows={2}
          value={description}
          onChange={(e) => setDescription(e.target.value)}
          className={`${field} resize-none`}
        />
      </div>

      <div className="grid gap-5 sm:grid-cols-2">
        <div>
          <label className={label}>Category</label>
          <input
            value={category}
            onChange={(e) => setCategory(e.target.value)}
            placeholder="e.g. Advertising"
            className={field}
          />
        </div>
        <div>
          <label className={label}>Primary CTA link</label>
          <input
            value={primaryCtaPath}
            onChange={(e) => setPrimaryCtaPath(e.target.value)}
            placeholder="/contact"
            className={field}
          />
        </div>
      </div>

      <div>
        <label className={label}>Body (Markdown)</label>
        <textarea
          required
          rows={18}
          value={bodyMarkdown}
          onChange={(e) => setBodyMarkdown(e.target.value)}
          placeholder={"# Heading\n\nWrite the article in Markdown. Standard formatting (headings, links, lists, bold) is supported."}
          className={`${field} resize-y font-mono text-[13px]`}
        />
      </div>

      <div>
        <label className={label}>Status</label>
        <select
          value={status}
          onChange={(e) => setStatus(e.target.value as "draft" | "published")}
          className={field}
        >
          <option value="draft">Draft (not visible on the live site)</option>
          <option value="published">Published (live now)</option>
        </select>
      </div>

      {error && (
        <p role="alert" className="text-sm font-medium text-red-500">
          {error}
        </p>
      )}

      <button
        type="submit"
        disabled={pending}
        className="rounded-full bg-brand px-6 py-3 text-sm font-semibold text-ink transition-colors hover:bg-brand-amber disabled:cursor-not-allowed disabled:opacity-60"
      >
        {pending ? "Saving…" : isEditing ? "Save changes" : "Create post"}
      </button>
    </form>
  );
}
