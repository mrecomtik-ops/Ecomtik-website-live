import { Link, useNavigate } from "@tanstack/react-router";
import { type ReactNode } from "react";
import { adminLogout } from "@/lib/admin-auth-server-fn";

export function AdminShell({ title, children }: { title: string; children: ReactNode }) {
  const navigate = useNavigate();

  const onLogout = async () => {
    await adminLogout();
    void navigate({ to: "/admin/login" });
  };

  return (
    <div className="min-h-screen bg-softgray">
      <header className="border-b border-ink/8 bg-white">
        <div className="mx-auto flex max-w-[1100px] items-center justify-between px-6 py-4">
          <div className="flex items-center gap-6">
            <Link to="/admin" className="font-display text-lg font-semibold text-ink">
              Ecomtik Admin
            </Link>
            <nav className="flex items-center gap-4 text-sm font-semibold text-graphite/70">
              <Link to="/admin" className="hover:text-brand" activeOptions={{ exact: true }}>
                Dashboard
              </Link>
              <Link to="/admin/blog" className="hover:text-brand">
                Blog posts
              </Link>
            </nav>
          </div>
          <button
            type="button"
            onClick={onLogout}
            className="text-sm font-semibold text-graphite/60 hover:text-ink"
          >
            Sign out
          </button>
        </div>
      </header>
      <main className="mx-auto max-w-[1100px] px-6 py-10">
        <h1 className="font-display text-2xl font-semibold text-ink">{title}</h1>
        <div className="mt-8">{children}</div>
      </main>
    </div>
  );
}
