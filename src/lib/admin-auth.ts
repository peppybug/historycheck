import "server-only";
import { createHash, timingSafeEqual } from "node:crypto";
import { cookies, headers } from "next/headers";
import { redirect } from "next/navigation";
import { SESSION_COOKIE, SESSION_TTL_MS, adminConfigured, signSession, verifySession } from "./session";

/** Call at the top of every admin server action and page. */
export async function requireAdmin() {
  const token = (await cookies()).get(SESSION_COOKIE)?.value;
  if (!(await verifySession(token))) redirect("/admin/login");
}

const attempts = new Map<string, { n: number; until: number }>();

export async function checkPassword(password: string): Promise<{ ok: true } | { ok: false; error: string }> {
  if (!adminConfigured()) return { ok: false, error: "The editorial area is disabled because ADMIN_PASSWORD and SESSION_SECRET are not configured." };
  const ip = (await headers()).get("x-forwarded-for")?.split(",")[0]?.trim() ?? "local";
  const a = attempts.get(ip);
  if (a && a.until > Date.now()) return { ok: false, error: "Too many attempts. Wait a few minutes and try again." };
  const h = (s: string) => createHash("sha256").update(s).digest();
  const ok = timingSafeEqual(h(password), h(process.env.ADMIN_PASSWORD!));
  if (!ok) {
    const n = (a?.n ?? 0) + 1;
    attempts.set(ip, { n, until: n >= 5 ? Date.now() + 5 * 60_000 : 0 });
    await new Promise((r) => setTimeout(r, 600));
    return { ok: false, error: "That password is not correct." };
  }
  attempts.delete(ip);
  (await cookies()).set(SESSION_COOKIE, await signSession(), {
    httpOnly: true,
    secure: process.env.NODE_ENV === "production",
    sameSite: "strict",
    path: "/",
    maxAge: SESSION_TTL_MS / 1000,
  });
  return { ok: true };
}

export async function endSession() {
  (await cookies()).delete(SESSION_COOKIE);
}
