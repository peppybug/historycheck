import { onThisDay } from "@/lib/queries";

/**
 * Static JSON for each calendar day (/data/on-this-day/MM-DD.json), generated
 * at build time so "On this day" works on static hosting. The browser picks
 * the file for the visitor's local date.
 */
export const dynamic = "force-static";

const DAYS = [31, 29, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];

export function generateStaticParams() {
  return DAYS.flatMap((n, m) =>
    Array.from({ length: n }, (_, d) => ({ date: `${String(m + 1).padStart(2, "0")}-${String(d + 1).padStart(2, "0")}.json` })),
  );
}

export async function GET(_req: Request, { params }: { params: Promise<{ date: string }> }) {
  const { date } = await params;
  const m = /^(\d{2})-(\d{2})\.json$/.exec(date);
  if (!m) return Response.json({ error: "Use MM-DD.json" }, { status: 404 });
  return Response.json(await onThisDay(Number(m[1]), Number(m[2])));
}
