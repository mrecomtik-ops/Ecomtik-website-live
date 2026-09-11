import { createFileRoute, Link, useRouter } from "@tanstack/react-router";
import { requireAdminLoader } from "@/lib/require-admin";
import { AdminShell } from "@/components/admin/AdminShell";
import { adminListCustomPosts, adminDeleteCustomPost } from "@/lib/blog-store-server-fn";
import { getRecordsByType } from "@/content/registry";

export const Route = createFileRoute("/admin/blog/")({
  loader: async () => {
    await requireAdminLoader();
    const customPosts = await adminListCustomPosts();
    const staticPosts = getRecordsByType("blog");
    return { customPosts, staticPosts };
  },
  head: () => ({
    meta: [{ title: "Blog Posts | Ecomtik Admin" }, { name: "robots", content: "noindex, nofollow" }],
  }),
  component: AdminBlogList,
});

function AdminBlogList() {
  const { customPosts, staticPosts } = Route.useLoaderData();
  const router = useRouter();

  const onDelete = async (slug: string) => {
    if (!window.confirm(`Delete "${slug}"? This can't be undone.`)) return;
    await adminDeleteCustomPost({ data: { slug } });
    router.invalidate();
  };

  return (
    <AdminShell title="Blog posts">
      <div className="mb-6 flex items-center justify-between">
        <p className="text-sm text-graphite/60">
          {customPosts.length} custom post{customPosts.length === 1 ? "" : "s"},{" "}
          {staticPosts.length} from the original spec import (read-only here).
        </p>
        <Link
          to="/admin/blog/new"
          className="rounded-full bg-brand px-5 py-2.5 text-sm font-semibold text-ink transition-colors hover:bg-brand-amber"
        >
          New post
        </Link>
      </div>

      <div className="overflow-hidden rounded-[16px] border border-ink/8 bg-white">
        <table className="w-full text-left text-sm">
          <thead className="bg-softgray text-[11px] font-semibold tracking-wide text-graphite/60 uppercase">
            <tr>
              <th className="px-5 py-3">Title</th>
              <th className="px-5 py-3">Status</th>
              <th className="px-5 py-3">Updated</th>
              <th className="px-5 py-3" />
            </tr>
          </thead>
          <tbody>
            {customPosts.map((post) => (
              <tr key={post.slug} className="border-t border-ink/6">
                <td className="px-5 py-3.5 font-medium text-ink">{post.title}</td>
                <td className="px-5 py-3.5">
                  <span
                    className={`rounded-full px-2.5 py-1 text-[11px] font-semibold ${
                      post.status === "published"
                        ? "bg-brand/15 text-brand"
                        : "bg-graphite/10 text-graphite/70"
                    }`}
                  >
                    {post.status}
                  </span>
                </td>
                <td className="px-5 py-3.5 text-graphite/60">
                  {new Date(post.updatedAt).toLocaleDateString()}
                </td>
                <td className="px-5 py-3.5 text-right">
                  <Link
                    to="/admin/blog/$slug"
                    params={{ slug: post.slug }}
                    className="mr-4 font-semibold text-brand hover:text-brand-amber"
                  >
                    Edit
                  </Link>
                  <button
                    type="button"
                    onClick={() => onDelete(post.slug)}
                    className="font-semibold text-red-500 hover:text-red-600"
                  >
                    Delete
                  </button>
                </td>
              </tr>
            ))}
            {staticPosts.map((post) => (
              <tr key={post.metadata.id} className="border-t border-ink/6 opacity-60">
                <td className="px-5 py-3.5 font-medium text-ink">{post.metadata.title}</td>
                <td className="px-5 py-3.5">
                  <span className="rounded-full bg-graphite/10 px-2.5 py-1 text-[11px] font-semibold text-graphite/70">
                    spec import
                  </span>
                </td>
                <td className="px-5 py-3.5 text-graphite/60">—</td>
                <td className="px-5 py-3.5 text-right text-graphite/40">Not editable here</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </AdminShell>
  );
}
