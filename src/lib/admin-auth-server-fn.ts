import { createServerFn } from "@tanstack/react-start";
import { getSession, updateSession, clearSession } from "@tanstack/react-start/server";

// Simple shared-password admin auth. One password (ADMIN_PASSWORD) checked
// server-side; on success we store an authenticated flag in an encrypted,
// httpOnly session cookie (TanStack Start's built-in session helper, sealed
// with ADMIN_SESSION_SECRET). No accounts, no signup — fits a single-owner
// site. Kept out of a directory literally named "server" (see
// contact-server-fn.ts for why).

type AdminSessionData = { authenticated?: boolean };

function sessionConfig() {
  const password = process.env["ADMIN_SESSION_SECRET"];
  if (!password || password.length < 32) return null;
  return { password, name: "admin", maxAge: 60 * 60 * 24 * 7 };
}

export const adminLogin = createServerFn({ method: "POST" })
  .validator((data: { password: string }) => data)
  .handler(async ({ data }): Promise<{ ok: boolean; reason?: string }> => {
    const adminPassword = process.env["ADMIN_PASSWORD"];
    const config = sessionConfig();
    if (!adminPassword || !config) {
      console.error("[admin] ADMIN_PASSWORD / ADMIN_SESSION_SECRET not configured");
      return { ok: false, reason: "not_configured" };
    }
    if (data.password !== adminPassword) {
      return { ok: false, reason: "invalid_password" };
    }
    await updateSession<AdminSessionData>(config, { authenticated: true });
    return { ok: true };
  });

export const adminLogout = createServerFn({ method: "POST" }).handler(async () => {
  const config = sessionConfig();
  if (config) await clearSession(config);
  return { ok: true };
});

export const checkAdminSession = createServerFn({ method: "GET" }).handler(
  async (): Promise<{ authenticated: boolean }> => {
    const config = sessionConfig();
    if (!config) return { authenticated: false };
    const session = await getSession<AdminSessionData>(config);
    return { authenticated: session.data.authenticated === true };
  }
);
