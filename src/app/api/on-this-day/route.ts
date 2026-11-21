import { NextResponse } from "next/server";
import { z } from "zod";
import { onThisDay } from "@/lib/queries";

const schema = z.object({ m: z.coerce.number().int().min(1).max(12), d: z.coerce.number().int().min(1).max(31) });

export async function GET(req: Request) {
  const params = Object.fromEntries(new URL(req.url).searchParams);
  const parsed = schema.safeParse(params);
  if (!parsed.success) return NextResponse.json({ error: "Provide a month (m=1–12) and day (d=1–31)." }, { status: 400 });
  try {
    const data = await onThisDay(parsed.data.m, parsed.data.d);
    return NextResponse.json(data, { headers: { "Cache-Control": "public, s-maxage=3600, stale-while-revalidate=86400" } });
  } catch (e) {
    console.error("on-this-day failed", e);
    return NextResponse.json({ error: "The record could not be loaded." }, { status: 500 });
  }
}
