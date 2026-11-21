import { NextResponse } from "next/server";
import { suggest } from "@/lib/search";

export async function GET(req: Request) {
  const q = new URL(req.url).searchParams.get("q") ?? "";
  if (q.length > 80) return NextResponse.json({ items: [] });
  try {
    const items = await suggest(q);
    return NextResponse.json({ items }, { headers: { "Cache-Control": "public, s-maxage=300, stale-while-revalidate=3600" } });
  } catch (e) {
    console.error("suggest failed", e);
    return NextResponse.json({ items: [], error: "Suggestions are unavailable." }, { status: 500 });
  }
}
