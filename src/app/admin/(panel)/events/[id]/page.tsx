import Link from "next/link";
import { notFound } from "next/navigation";
import { asc, eq, or } from "drizzle-orm";
import { db } from "@/db";
import * as s from "@/db/schema";
import { EventForm } from "@/components/admin/event-form";
import { taxonomyOptions, toDateString } from "@/lib/admin-data";
import {
  addEventImageAction, addEventPersonAction, addEventPlaceAction, addRelationAction, addSourceAction, deleteEventAction,
  removeEventImageAction, removeEventPersonAction, removeEventPlaceAction, removeEventSourceAction, removeRelationAction, setFeaturedImageAction,
} from "../../../actions";

const REL_LABEL: Record<string, string> = { led_to: "led to", contributed_to: "contributed to", followed_by: "was followed by", part_of: "is part of", occurred_during: "occurred during", related_to: "is related to" };
const input = "rounded-sm border border-line-strong bg-surface px-2.5 py-1.5 text-base";
const btn = "rounded-sm border border-line-strong px-3 py-1.5 text-sm font-medium hover:border-ink";
const small = "text-xs text-ink-2 underline underline-offset-2 hover:text-thread-ink";

export default async function EditEvent({ params, searchParams }: { params: Promise<{ id: string }>; searchParams: Promise<{ msg?: string; created?: string; error?: string }> }) {
  const id = Number((await params).id);
  const sp = await searchParams;
  if (!Number.isInteger(id)) notFound();
  const ev = await db.query.events.findFirst({
    where: eq(s.events.id, id),
    with: {
      milestones: { orderBy: (m, { asc }) => [asc(m.sort)] },
      people: { with: { person: true } },
      places: { with: { place: true } },
      sources: { with: { source: true } },
      images: { with: { image: true } },
      featuredImage: true,
    },
  });
  if (!ev) notFound();
  const [opts, allPeople, allPlaces, allEvents, rels] = await Promise.all([
    taxonomyOptions(),
    db.select({ id: s.people.id, name: s.people.name }).from(s.people).orderBy(asc(s.people.name)),
    db.select({ id: s.places.id, name: s.places.name }).from(s.places).orderBy(asc(s.places.name)),
    db.select({ id: s.events.id, title: s.events.title, startYear: s.events.startYear }).from(s.events).orderBy(asc(s.events.sortKey)),
    db.select().from(s.eventRelations).where(or(eq(s.eventRelations.fromEventId, id), eq(s.eventRelations.toEventId, id))),
  ]);
  const titleOf = new Map(allEvents.map((e) => [e.id, e.title]));

  return (
    <div>
      <div className="flex flex-wrap items-baseline justify-between gap-3">
        <h1 className="text-2xl">{ev.title}</h1>
        {ev.status === "published" ? <Link className="link text-sm" href={`/event/${ev.slug}`} target="_blank">View public page</Link> : <span className="text-sm text-muted">Not public</span>}
      </div>
      {sp.created ? <p className="mt-3 rounded-sm bg-verified-soft px-3 py-2 text-sm text-verified" role="status">Event created as a draft.</p> : null}
      {sp.msg ? <p className="mt-3 rounded-sm bg-sunken px-3 py-2 text-sm" role="status">{sp.msg}</p> : null}

      <div className="mt-6">
        <EventForm
          {...opts}
          initial={{
            id: ev.id, slug: ev.slug, title: ev.title, altNames: ev.altNames.join(", "), summary: ev.summary, overview: ev.overview, context: ev.context,
            narrative: ev.narrative, causes: ev.causes.join("\n"), consequences: ev.consequences.join("\n"), keywords: ev.keywords.join(", "),
            date: toDateString(ev.startYear, ev.startMonth, ev.startDay, ev.datePrecision),
            end: ev.endYear != null ? toDateString(ev.endYear, ev.endMonth, ev.endDay, ev.endDay ? "day" : ev.endMonth ? "month" : "year") : "",
            dateNote: ev.dateNote ?? "", locationLabel: ev.locationLabel, periodId: ev.periodId, categoryId: ev.categoryId, regionId: ev.regionId,
            status: ev.status, verification: ev.verification, reviewNotes: ev.reviewNotes ?? "", wikidataId: ev.wikidataId ?? "", wikipediaTitle: ev.wikipediaTitle ?? "",
            isFeatured: ev.isFeatured, isDiscovery: ev.isDiscovery,
            milestones: ev.milestones.map((m) => [toDateString(m.year, m.month, m.day, m.precision), m.label, m.description ?? ""].join(" | ").replace(/ \| $/, "")).join("\n"),
          }}
        />
      </div>

      <div id="links" className="mt-10 grid scroll-mt-6 gap-6 xl:grid-cols-2">
        {/* People */}
        <section className="rounded-sm border border-line bg-surface p-5">
          <h2 className="font-sans text-base font-semibold">People</h2>
          <ul className="mt-3 divide-y divide-line text-sm">
            {ev.people.map(({ person, role }) => (
              <li key={person.id} className="flex items-start justify-between gap-3 py-2">
                <span><Link className="link font-medium" href={`/admin/people/${person.id}`}>{person.name}</Link> <span className="text-ink-2">· {role}</span></span>
                <form action={removeEventPersonAction}><input type="hidden" name="eventId" value={id} /><input type="hidden" name="personId" value={person.id} /><button className={small}>Remove</button></form>
              </li>
            ))}
          </ul>
          <form action={addEventPersonAction} className="mt-3 grid gap-2 sm:grid-cols-[1fr_1fr_auto]">
            <input type="hidden" name="eventId" value={id} />
            <label className="sr-only" htmlFor="ap">Person</label>
            <select id="ap" name="personId" className={input} defaultValue=""><option value="" disabled>Choose a person…</option>{allPeople.map((p) => <option key={p.id} value={p.id}>{p.name}</option>)}</select>
            <label className="sr-only" htmlFor="ar">Role</label>
            <input id="ar" name="role" placeholder="Role in this event" className={input} />
            <button className={btn}>Link</button>
          </form>
          <p className="mt-2 text-xs text-muted">Not listed? <Link className="link" href="/admin/people">Add a person from Wikipedia</Link>.</p>
        </section>

        {/* Places */}
        <section className="rounded-sm border border-line bg-surface p-5">
          <h2 className="font-sans text-base font-semibold">Places</h2>
          <ul className="mt-3 divide-y divide-line text-sm">
            {ev.places.map(({ place }) => (
              <li key={place.id} className="flex justify-between gap-3 py-2">
                <Link className="link" href={`/admin/places/${place.id}`}>{place.name}</Link>
                <form action={removeEventPlaceAction}><input type="hidden" name="eventId" value={id} /><input type="hidden" name="placeId" value={place.id} /><button className={small}>Remove</button></form>
              </li>
            ))}
          </ul>
          <form action={addEventPlaceAction} className="mt-3 flex gap-2">
            <input type="hidden" name="eventId" value={id} />
            <label className="sr-only" htmlFor="apl">Place</label>
            <select id="apl" name="placeId" className={`${input} flex-1`} defaultValue=""><option value="" disabled>Choose a place…</option>{allPlaces.map((p) => <option key={p.id} value={p.id}>{p.name}</option>)}</select>
            <button className={btn}>Link</button>
          </form>
        </section>

        {/* Connections */}
        <section className="rounded-sm border border-line bg-surface p-5 xl:col-span-2">
          <h2 className="font-sans text-base font-semibold">Connections</h2>
          <p className="mt-1 text-xs text-muted">Use “led to” and “contributed to” only for causation supported by the sources. Use “followed by” for sequence.</p>
          <ul className="mt-3 divide-y divide-line text-sm">
            {rels.map((r) => (
              <li key={r.id} className="flex items-start justify-between gap-3 py-2">
                <span>
                  {r.fromEventId === id ? <strong className="font-medium">This event</strong> : <Link className="link" href={`/admin/events/${r.fromEventId}`}>{titleOf.get(r.fromEventId)}</Link>}{" "}
                  <span className="text-thread-ink">{REL_LABEL[r.type]}</span>{" "}
                  {r.toEventId === id ? <strong className="font-medium">this event</strong> : <Link className="link" href={`/admin/events/${r.toEventId}`}>{titleOf.get(r.toEventId)}</Link>}
                  {r.note ? <span className="block text-xs text-ink-2">{r.note}</span> : null}
                </span>
                <form action={removeRelationAction}><input type="hidden" name="eventId" value={id} /><input type="hidden" name="relationId" value={r.id} /><button className={small}>Remove</button></form>
              </li>
            ))}
          </ul>
          <form action={addRelationAction} className="mt-3 grid gap-2 md:grid-cols-[auto_auto_1fr] lg:grid-cols-[auto_auto_1fr_1fr_auto]">
            <input type="hidden" name="eventId" value={id} />
            <label className="sr-only" htmlFor="rd">Direction</label>
            <select id="rd" name="direction" className={input}><option value="out">This event</option><option value="in">Other event</option></select>
            <label className="sr-only" htmlFor="rt">Relationship</label>
            <select id="rt" name="type" className={input}>{Object.entries(REL_LABEL).map(([k, v]) => <option key={k} value={k}>{v}</option>)}</select>
            <label className="sr-only" htmlFor="rtg">Other event</label>
            <select id="rtg" name="targetId" className={input} defaultValue=""><option value="" disabled>Other event…</option>{allEvents.filter((e) => e.id !== id).map((e) => <option key={e.id} value={e.id}>{e.startYear < 0 ? `${-e.startYear} BCE` : e.startYear} · {e.title}</option>)}</select>
            <label className="sr-only" htmlFor="rn">Explanation</label>
            <input id="rn" name="note" placeholder="One sentence explaining the link" className={input} />
            <button className={btn}>Add</button>
          </form>
        </section>

        {/* Sources */}
        <section className="rounded-sm border border-line bg-surface p-5 xl:col-span-2">
          <h2 className="font-sans text-base font-semibold">Sources</h2>
          <ul className="mt-3 divide-y divide-line text-sm">
            {ev.sources.map(({ source, note }) => (
              <li key={source.id} className="flex items-start justify-between gap-3 py-2">
                <span className="min-w-0">
                  <a className="link font-medium" href={source.url} target="_blank" rel="noopener noreferrer">{source.title}</a>
                  <span className="block text-xs text-ink-2">{source.publisher} · {source.sourceType} · link check: {source.httpStatus ?? "not checked"}{note ? ` · ${note}` : ""}</span>
                </span>
                <form action={removeEventSourceAction}><input type="hidden" name="eventId" value={id} /><input type="hidden" name="sourceId" value={source.id} /><button className={small}>Remove</button></form>
              </li>
            ))}
          </ul>
          <form action={addSourceAction} className="mt-3 grid gap-2 md:grid-cols-2 lg:grid-cols-[2fr_2fr_1.4fr_1fr_auto]">
            <input type="hidden" name="eventId" value={id} />
            <label className="sr-only" htmlFor="su">URL</label><input id="su" name="url" type="url" placeholder="https://…" className={input} />
            <label className="sr-only" htmlFor="st">Title</label><input id="st" name="title" placeholder="Title of the page or document" className={input} />
            <label className="sr-only" htmlFor="sp">Publisher</label><input id="sp" name="publisher" placeholder="Institution" className={input} />
            <label className="sr-only" htmlFor="sty">Type</label>
            <select id="sty" name="sourceType" className={input}>{s.sourceType.enumValues.map((t) => <option key={t} value={t}>{t.replace("_", " ")}</option>)}</select>
            <button className={btn}>Check and add</button>
          </form>
          <p className="mt-2 text-xs text-muted">The link is fetched before it is saved; unreachable sources are rejected.</p>
        </section>

        {/* Images */}
        <section id="images" className="scroll-mt-6 rounded-sm border border-line bg-surface p-5 xl:col-span-2">
          <h2 className="font-sans text-base font-semibold">Images</h2>
          <div className="mt-3 grid gap-4 sm:grid-cols-[160px_1fr]">
            <div className="aspect-[4/3] overflow-hidden rounded-xs bg-sunken">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              {ev.featuredImage ? <img src={ev.featuredImage.smallUrl ?? ev.featuredImage.thumbUrl} alt="" className="h-full w-full object-cover" /> : null}
            </div>
            <div className="text-sm">
              <p className="font-medium">Featured image</p>
              <p className="text-ink-2">{ev.featuredImage ? `${ev.featuredImage.caption} · ${ev.featuredImage.license} · matched by ${ev.featuredImage.matchMethod}` : "None. The public page states that no image could be verified."}</p>
            </div>
          </div>
          <ul className="mt-4 grid grid-cols-2 gap-3 sm:grid-cols-4 lg:grid-cols-6">
            {ev.images.map(({ image, caption }) => (
              <li key={image.id} className="text-xs">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img src={image.smallUrl ?? image.thumbUrl} alt="" className="aspect-square w-full rounded-xs object-cover" loading="lazy" />
                <p className="mt-1 line-clamp-2 text-ink-2">{caption ?? image.caption}</p>
                <div className="mt-1 flex gap-3">
                  <form action={setFeaturedImageAction}><input type="hidden" name="eventId" value={id} /><input type="hidden" name="imageId" value={image.id} /><button className={small}>Make featured</button></form>
                  <form action={removeEventImageAction}><input type="hidden" name="eventId" value={id} /><input type="hidden" name="imageId" value={image.id} /><button className={small}>Remove</button></form>
                </div>
              </li>
            ))}
          </ul>
          <form action={addEventImageAction} className="mt-4 grid gap-2 md:grid-cols-[2fr_2fr_auto_auto]">
            <input type="hidden" name="eventId" value={id} />
            <label className="sr-only" htmlFor="if">Commons file</label><input id="if" name="file" placeholder="Commons file name or URL, e.g. File:Apollo 11 Crew.jpg" className={input} />
            <label className="sr-only" htmlFor="ic">Caption</label><input id="ic" name="caption" placeholder="Caption in the context of this event" className={input} />
            <label className="flex items-center gap-2 text-sm"><input type="checkbox" name="featured" className="h-4 w-4" /> Featured</label>
            <button className={btn}>Verify and add</button>
          </form>
          <p className="mt-2 text-xs text-muted">Only Wikimedia Commons files with licence metadata are accepted. Check that the file depicts this exact event before adding it.</p>
        </section>

        {/* Danger zone */}
        <section className="rounded-sm border border-thread/40 bg-surface p-5 xl:col-span-2">
          <h2 className="font-sans text-base font-semibold">Delete this event</h2>
          <p className="mt-1 text-sm text-ink-2">Deleting removes the event and its links permanently. To hide it temporarily, set its status to Draft instead.</p>
          {sp.error === "confirm" ? <p className="mt-2 text-sm text-thread-ink" role="alert">Type “delete” to confirm.</p> : null}
          <form action={deleteEventAction} className="mt-3 flex flex-wrap gap-2">
            <input type="hidden" name="id" value={id} />
            <label className="sr-only" htmlFor="confirm">Type delete to confirm</label>
            <input id="confirm" name="confirm" placeholder='Type "delete"' className={input} autoComplete="off" />
            <button className="rounded-sm border border-thread px-3 py-1.5 text-sm font-medium text-thread-ink hover:bg-thread hover:text-white">Delete permanently</button>
          </form>
        </section>
      </div>
    </div>
  );
}
