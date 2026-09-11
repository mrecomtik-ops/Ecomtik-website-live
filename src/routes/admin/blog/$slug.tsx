import { createFileRoute, notFound } from "@tanstack/react-router";
import { requireAdminLoader } from "@/lib/require-admin";
import { AdminShell } from "@/components/admin/AdminShell";
import { BlogPostForm } from "@/components/admin/BlogPostForm";
import { adminGetCustomPost } from "@/lib/blog-store-server-fn";

export const Route = createFileRoute("/admin/blog/$slug")({
  loader: async ({ params }) => {
    await requireAdminLoader();
    const post = await adminGetCustomPost({ data: { slug: params.slug } });
    if (!post) throw notFound();
    return post;
  },
  head: ({ loaderData }) => ({
    meta: [
      { title: loaderData ? `Edit ${loaderData.title} | Ecomtik Admin` : "Edit Post" },
      { name: "robots", content: "noindex, nofollow" },
    ],
  }),
  component: EditBlogPostPage,
});

function EditBlogPostPage() {
  const post = Route.useLoaderData();
  return (
    <AdminShell title={`Edit: ${post.title}`}>
      <BlogPostForm initial={post} />
    </AdminShell>
  );
}
