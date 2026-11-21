import Link from "next/link";
import type { EventCardData } from "@/lib/queries";
import { centuryLabel } from "@/lib/dates";
import { EventCard } from "./event-card";

/** Events grouped under century headings, in chronological order. */
export function EventsByCentury({ events }: { events: EventCardData[] }) {
  if (!events.length) return <p className="text-ink-2">No published events in this collection yet.</p>;
  const groups = new Map<string, EventCardData[]>();
  for (const e of events) {
    const k = centuryLabel(e.startYear);
    groups.set(k, [...(groups.get(k) ?? []), e]);
  }
  return (
    <div className="grid gap-12">
      {[...groups].map(([label, list]) => (
        <section key={label} aria-label={label}>
          <h2 className="flex items-baseline gap-3 border-b border-line pb-2 text-xl">
            {label[0].toUpperCase() + label.slice(1)}
            <span className="font-sans text-sm font-normal text-muted tabular">{list.length}</span>
          </h2>
          <div className="mt-4 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {list.map((e) => <EventCard key={e.slug} event={e} />)}
          </div>
        </section>
      ))}
    </div>
  );
}

export function CollectionHeader({
  crumbs,
  title,
  kicker,
  description,
  count,
  children,
}: {
  crumbs: { href: string; label: string }[];
  title: string;
  kicker?: string;
  description?: string | null;
  count: number;
  children?: React.ReactNode;
}) {
  return (
    <header className="border-b border-line bg-surface">
      <div className="container-page py-10">
        <nav aria-label="Breadcrumb" className="text-sm text-muted">
          {crumbs.map((c, i) => (
            <span key={c.href}>
              {i ? " / " : ""}
              <Link className="hover:text-ink" href={c.href}>{c.label}</Link>
            </span>
          ))}
        </nav>
        {kicker ? <p className="mt-6 text-sm text-ink-2 tabular">{kicker}</p> : null}
        <h1 className={`${kicker ? "mt-1" : "mt-6"} text-[2.25rem] leading-tight sm:text-3xl`}>{title}</h1>
        {description ? <p className="mt-4 max-w-2xl text-lg text-ink-2">{description}</p> : null}
        <p className="mt-4 text-sm text-muted tabular">{count} event{count === 1 ? "" : "s"} in the record</p>
        {children}
      </div>
    </header>
  );
}
