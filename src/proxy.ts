import { NextResponse, type NextRequest } from "next/server";
import { SESSION_COOKIE, verifySession } from "@/lib/session";

/** Protects the editorial area. Server actions re-check the session independently. */
export async function proxy(req: NextRequest) {
  const { pathname } = req.nextUrl;
  if (pathname === "/admin/login") return NextResponse.next();
  const ok = await verifySession(req.cookies.get(SESSION_COOKIE)?.value);
  if (!ok) {
    const url = req.nextUrl.clone();
    url.pathname = "/admin/login";
    url.search = pathname !== "/admin" ? `?next=${encodeURIComponent(pathname)}` : "";
    return NextResponse.redirect(url);
  }
  const res = NextResponse.next();
  res.headers.set("X-Robots-Tag", "noindex, nofollow");
  res.headers.set("Cache-Control", "no-store");
  return res;
}

export const config = { matcher: ["/admin", "/admin/:path*"] };
