import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { CollectionHeader, EventsByCentury } from "@/components/collection";
import { formatYear } from "@/lib/dates";
import { getPeriod } from "@/lib/queries";

export const dynamic = "force-dynamic";
type Props = { params: Promise<{ slug: string }> };

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const d = await getPeriod((await params).slug);
  return d ? { title: d.period.name, description: d.period.description, alternates: { canonical: `/period/${d.period.slug}` } } : { title: "Period not found" };
}

export default async function PeriodPage({ params }: Props) {
  const d = await getPeriod((await params).slug);
  if (!d) notFound();
  const { period, events, prev, next } = d;
  return (
    <>
      <CollectionHeader
        crumbs={[{ href: "/", label: "Home" }, { href: "/periods", label: "Periods" }]}
        kicker={`${formatYear(period.startYear)} – ${period.endYear > 2025 ? "today" : formatYear(period.endYear)}`}
        title={period.name}
        description={period.description}
        count={events.length}
      >
        <div className="mt-6 flex flex-wrap gap-x-6 gap-y-2 text-sm">
          {prev ? <Link className="link" href={`/period/${prev.slug}`}>Earlier: {prev.name}</Link> : null}
          {next ? <Link className="link" href={`/period/${next.slug}`}>Later: {next.name}</Link> : null}
          <Link className="link" href={`/timeline?from=${period.startYear}&to=${Math.min(period.endYear, 2025)}`}>See this period on the timeline</Link>
        </div>
      </CollectionHeader>
      <div className="container-page mt-10"><EventsByCentury events={events} /></div>
    </>
  );
}
