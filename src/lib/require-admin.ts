import { redirect } from "@tanstack/react-router";
import { checkAdminSession } from "./admin-auth-server-fn";

export async function requireAdminLoader(): Promise<void> {
  const { authenticated } = await checkAdminSession();
  if (!authenticated) {
    throw redirect({ to: "/admin/login" });
  }
}
