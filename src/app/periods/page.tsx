import type { Metadata } from "next";
import Link from "next/link";
import { PeriodStrip } from "@/components/period-strip";
import { formatYear } from "@/lib/dates";
import { getPeriodsWithCounts } from "@/lib/queries";

export const metadata: Metadata = { title: "Historical periods", description: "Nine periods of world history, from the first cities to the present.", alternates: { canonical: "/periods" } };

export default async function PeriodsPage() {
  const periods = await getPeriodsWithCounts();
  return (
    <div className="container-page pt-10">
      <h1 className="text-3xl">Historical periods</h1>
      <p className="mt-3 max-w-2xl text-lg text-ink-2">
        Period boundaries are conventions, not facts. These nine follow common usage in world history and overlap where historians disagree;
        each event belongs to the period in which it began.
      </p>
      <div className="mt-8"><PeriodStrip periods={periods} /></div>
      <ol className="mt-12 grid gap-px overflow-hidden rounded-sm border border-line bg-line md:grid-cols-2 lg:grid-cols-3">
        {periods.map((p) => (
          <li key={p.slug} className="bg-surface">
            <Link href={`/period/${p.slug}`} className="group block h-full p-6 hover:bg-sunken">
              <p className="text-sm text-muted tabular">{formatYear(p.startYear)} – {p.endYear > 2025 ? "today" : formatYear(p.endYear)}</p>
              <h2 className="mt-1 text-xl group-hover:underline group-hover:decoration-thread group-hover:underline-offset-4">{p.name}</h2>
              <p className="mt-2 text-sm text-ink-2">{p.description}</p>
              <p className="mt-3 text-xs font-medium text-ink tabular">{p.count} events</p>
            </Link>
          </li>
        ))}
      </ol>
    </div>
  );
}
