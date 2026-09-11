import { createFileRoute, Link } from "@tanstack/react-router";
import { requireAdminLoader } from "@/lib/require-admin";
import { AdminShell } from "@/components/admin/AdminShell";

export const Route = createFileRoute("/admin/")({
  loader: () => requireAdminLoader(),
  head: () => ({
    meta: [{ title: "Admin | Ecomtik" }, { name: "robots", content: "noindex, nofollow" }],
  }),
  component: AdminDashboard,
});

function AdminDashboard() {
  return (
    <AdminShell title="Dashboard">
      <div className="grid gap-6 sm:grid-cols-2">
        <div className="rounded-[20px] border border-ink/8 bg-white p-6">
          <h2 className="text-base font-semibold text-ink">Visitor statistics</h2>
          <p className="mt-2 text-sm leading-relaxed text-graphite/70">
            Traffic is tracked with Google Analytics (GA4). View pageviews, visitors, traffic
            sources and lead conversions in the full GA4 dashboard.
          </p>
          <a
            href="https://analytics.google.com/analytics/web/"
            target="_blank"
            rel="noreferrer"
            className="mt-4 inline-flex items-center gap-2 text-sm font-semibold text-brand hover:text-brand-amber"
          >
            Open Google Analytics →
          </a>
        </div>

        <div className="rounded-[20px] border border-ink/8 bg-white p-6">
          <h2 className="text-base font-semibold text-ink">Blog posts</h2>
          <p className="mt-2 text-sm leading-relaxed text-graphite/70">
            Write and publish new articles directly — they go live immediately, no code deploy
            needed.
          </p>
          <Link
            to="/admin/blog"
            className="mt-4 inline-flex items-center gap-2 text-sm font-semibold text-brand hover:text-brand-amber"
          >
            Manage blog posts →
          </Link>
        </div>
      </div>
    </AdminShell>
  );
}
