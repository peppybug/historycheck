import Link from "next/link";
import type { EventPage } from "@/lib/queries";
import { ArchiveImage, NoImage } from "./archive-image";
import { yearOf } from "./event-card";

type Rel = EventPage["before"]["causedBy"][number];

const LINE = {
  solid: <line x1="0" y1="4" x2="28" y2="4" stroke="var(--thread)" strokeWidth="2.5" />,
  dashed: <line x1="0" y1="4" x2="28" y2="4" stroke="var(--thread)" strokeWidth="2" strokeDasharray="6 4" />,
  dotted: <line x1="0" y1="4" x2="28" y2="4" stroke="var(--line-strong)" strokeWidth="2" strokeDasharray="1.5 4" strokeLinecap="round" />,
};

function Group({ title, style, items }: { title: string; style: keyof typeof LINE; items: Rel[] }) {
  if (!items.length) return null;
  return (
    <div>
      <h4 className="flex items-center gap-2 text-sm font-semibold text-ink">
        <svg width="28" height="8" aria-hidden="true">{LINE[style]}</svg>
        {title}
      </h4>
      <ul className="mt-2 grid gap-2">
        {items.map((r) => (
          <li key={r.card.slug + r.type}>
            <Link href={`/event/${r.card.slug}`} className="card-link group flex gap-3 rounded-sm border border-line bg-surface p-2.5">
              <span className="h-14 w-14 shrink-0 overflow-hidden rounded-xs bg-sunken">
                {r.card.image ? <ArchiveImage image={r.card.image} sizes="56px" /> : <NoImage year="" label=" " />}
              </span>
              <span className="min-w-0">
                <span className="block text-xs text-muted tabular">{yearOf(r.card)}</span>
                <span className="card-title block font-serif text-base leading-snug">{r.card.title}</span>
                {r.note ? <span className="mt-0.5 block text-xs text-ink-2">{r.note}</span> : null}
              </span>
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}

function Arrow({ className = "" }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" className={`h-6 w-6 text-thread ${className}`} aria-hidden="true">
      <path d="M4 12h15m-5-5 5 5-5 5" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

export function BeforeAfter({ ev }: { ev: EventPage }) {
  const { before, after } = ev;
  const hasBefore = before.causedBy.length + before.contributing.length + before.precededBy.length > 0;
  const hasAfter = after.ledTo.length + after.contributedTo.length + after.followedBy.length > 0;
  return (
    <div className="grid items-start gap-6 lg:grid-cols-[1fr_auto_minmax(0,0.8fr)_auto_1fr] lg:gap-4">
      <div className="grid gap-5">
        <h3 className="font-sans text-xs font-semibold text-muted">What came before</h3>
        {hasBefore ? (
          <>
            <Group title="Caused by" style="solid" items={before.causedBy} />
            <Group title="Contributing causes" style="dashed" items={before.contributing} />
            <Group title="Preceded by" style="dotted" items={before.precededBy} />
          </>
        ) : (
          <p className="text-sm text-ink-2">No earlier event in the record is linked to this one yet. The causes are described in the historical context above.</p>
        )}
      </div>
      <Arrow className="mx-auto rotate-90 lg:mt-24 lg:rotate-0" />
      <div className="rounded-sm border-2 border-ink bg-surface p-4 lg:mt-14">
        <p className="text-xs text-muted tabular">{yearOf(ev)}</p>
        <p className="mt-0.5 font-serif text-xl leading-snug">{ev.title}</p>
        <p className="mt-2 text-xs text-ink-2">{ev.locationLabel}</p>
      </div>
      <Arrow className="mx-auto rotate-90 lg:mt-24 lg:rotate-0" />
      <div className="grid gap-5">
        <h3 className="font-sans text-xs font-semibold text-muted">What happened next</h3>
        {hasAfter ? (
          <>
            <Group title="Led to" style="solid" items={after.ledTo} />
            <Group title="Contributed to" style="dashed" items={after.contributedTo} />
            <Group title="Followed by" style="dotted" items={after.followedBy} />
          </>
        ) : (
          <p className="text-sm text-ink-2">No later event in the record is linked yet. The consequences are listed above.</p>
        )}
      </div>
    </div>
  );
}
