import { NextResponse } from "next/server";
import { randomEventSlug } from "@/lib/queries";

export const dynamic = "force-dynamic";

export async function GET(req: Request) {
  const slug = await randomEventSlug();
  return NextResponse.redirect(new URL(slug ? `/event/${slug}` : "/explore", req.url), { status: 307, headers: { "Cache-Control": "no-store" } });
}
