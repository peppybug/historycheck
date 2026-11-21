import Link from "next/link";
import type { EventCardData } from "@/lib/queries";
import { formatRange, yearLabel } from "@/lib/dates";
import { ArchiveImage, NoImage } from "./archive-image";

const dateOf = (e: EventCardData, short = false) =>
  formatRange(
    { year: e.startYear, month: e.startMonth, day: e.startDay, precision: e.datePrecision },
    e.endYear != null ? { year: e.endYear, month: e.endMonth, day: e.endDay } : null,
    { short },
  );
type DateBits = Pick<EventCardData, "startYear" | "endYear" | "datePrecision">;
const yearOf = (e: DateBits) =>
  yearLabel({ year: e.startYear, precision: e.datePrecision }, e.endYear != null ? { year: e.endYear } : null);

/** Large card with image on top — used for featured events. */
export function EventCardFeature({ event, priority = false, sizes }: { event: EventCardData; priority?: boolean; sizes?: string }) {
  return (
    <Link href={`/event/${event.slug}`} className="card-link group flex h-full flex-col overflow-hidden rounded-sm border border-line bg-surface">
      <div className="img-zoom aspect-[3/2] overflow-hidden bg-sunken">
        {event.image ? (
          <ArchiveImage image={event.image} alt={event.image.caption} priority={priority} sizes={sizes ?? "(min-width: 1024px) 40vw, 100vw"} />
        ) : (
          <NoImage year={yearOf(event)} />
        )}
      </div>
      <div className="flex flex-1 flex-col gap-2 p-5">
        <p className="text-xs text-muted tabular">
          <time>{dateOf(event)}</time> · {event.locationLabel}
        </p>
        <h3 className="card-title text-xl leading-snug">{event.title}</h3>
        <p className="text-sm text-ink-2">{event.summary}</p>
        <p className="mt-auto pt-2 text-xs font-medium text-muted">{event.categoryName}</p>
      </div>
    </Link>
  );
}

/** Standard grid card. */
export function EventCard({ event, sizes }: { event: EventCardData; sizes?: string }) {
  return (
    <Link href={`/event/${event.slug}`} className="card-link group flex h-full flex-col overflow-hidden rounded-sm border border-line bg-surface">
      <div className="img-zoom aspect-[4/3] overflow-hidden bg-sunken">
        {event.image ? (
          <ArchiveImage image={event.image} sizes={sizes ?? "(min-width: 1024px) 25vw, (min-width: 640px) 50vw, 100vw"} />
        ) : (
          <NoImage year={yearOf(event)} />
        )}
      </div>
      <div className="flex flex-1 flex-col gap-1.5 p-4">
        <p className="text-xs text-muted tabular">{dateOf(event, true)}</p>
        <h3 className="card-title text-lg leading-snug">{event.title}</h3>
        <p className="text-xs text-muted">{event.locationLabel}</p>
      </div>
    </Link>
  );
}

/** Horizontal row — lists, search results, relations. */
export function EventRow({ event, note, children }: { event: EventCardData; note?: string | null; children?: React.ReactNode }) {
  return (
    <Link href={`/event/${event.slug}`} className="card-link group flex gap-4 rounded-sm border border-line bg-surface p-3">
      <div className="h-20 w-24 shrink-0 overflow-hidden rounded-xs bg-sunken sm:h-24 sm:w-32">
        {event.image ? <ArchiveImage image={event.image} sizes="128px" /> : <NoImage year={yearOf(event)} label=" " className="p-2 [&>span:first-child]:text-base" />}
      </div>
      <div className="min-w-0 flex-1 py-0.5">
        <p className="text-xs text-muted tabular">
          {dateOf(event, true)} · {event.locationLabel}
        </p>
        <h3 className="card-title mt-0.5 text-lg leading-snug">{event.title}</h3>
        {note ? <p className="mt-1 text-sm text-ink-2">{note}</p> : <p className="mt-1 line-clamp-2 text-sm text-ink-2">{event.summary}</p>}
        {children}
      </div>
    </Link>
  );
}

export { dateOf, yearOf };
