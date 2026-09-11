import { createFileRoute } from "@tanstack/react-router";
import { requireAdminLoader } from "@/lib/require-admin";
import { AdminShell } from "@/components/admin/AdminShell";
import { BlogPostForm } from "@/components/admin/BlogPostForm";

export const Route = createFileRoute("/admin/blog/new")({
  loader: () => requireAdminLoader(),
  head: () => ({
    meta: [{ title: "New Post | Ecomtik Admin" }, { name: "robots", content: "noindex, nofollow" }],
  }),
  component: NewBlogPostPage,
});

function NewBlogPostPage() {
  return (
    <AdminShell title="New post">
      <BlogPostForm />
    </AdminShell>
  );
}
