import { createFileRoute, useNavigate } from "@tanstack/react-router";
import { FormEvent, useState } from "react";
import { adminLogin } from "@/lib/admin-auth-server-fn";

export const Route = createFileRoute("/admin/login")({
  head: () => ({
    meta: [{ title: "Admin Login | Ecomtik" }, { name: "robots", content: "noindex, nofollow" }],
  }),
  component: AdminLoginPage,
});

function AdminLoginPage() {
  const navigate = useNavigate();
  const [password, setPassword] = useState("");
  const [error, setError] = useState<string | null>(null);
  const [pending, setPending] = useState(false);

  const onSubmit = async (e: FormEvent) => {
    e.preventDefault();
    setPending(true);
    setError(null);
    try {
      const result = await adminLogin({ data: { password } });
      if (result.ok) {
        void navigate({ to: "/admin" });
      } else if (result.reason === "not_configured") {
        setError("Admin login isn't configured yet (missing ADMIN_PASSWORD / ADMIN_SESSION_SECRET).");
      } else {
        setError("Incorrect password.");
      }
    } catch {
      setError("Something went wrong. Try again.");
    } finally {
      setPending(false);
    }
  };

  return (
    <div className="flex min-h-screen items-center justify-center bg-ink px-4">
      <form
        onSubmit={onSubmit}
        className="w-full max-w-sm rounded-[24px] bg-graphite p-8 shadow-[0_40px_80px_-40px_rgba(0,0,0,0.6)]"
      >
        <h1 className="font-display text-xl font-semibold text-white">Ecomtik Admin</h1>
        <p className="mt-2 text-sm text-white/55">Sign in to manage the site.</p>

        <label className="mt-6 block text-[12px] font-semibold tracking-wide text-white/55">
          Password
        </label>
        <input
          type="password"
          required
          autoFocus
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          className="mt-1.5 w-full rounded-2xl border border-white/15 bg-white/[0.06] px-5 py-4 text-sm text-white outline-none transition-colors focus:border-brand/70"
        />

        {error && (
          <p role="alert" className="mt-3 text-sm font-medium text-red-400">
            {error}
          </p>
        )}

        <button
          type="submit"
          disabled={pending}
          className="mt-6 w-full rounded-full bg-brand px-6 py-3 text-sm font-semibold text-ink transition-all duration-300 hover:bg-brand-amber disabled:cursor-not-allowed disabled:opacity-60"
        >
          {pending ? "Signing in…" : "Sign in"}
        </button>
      </form>
    </div>
  );
}
