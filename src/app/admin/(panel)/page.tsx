import Link from "next/link";
import { desc, ne, sql } from "drizzle-orm";
import { db } from "@/db";
import * as s from "@/db/schema";

export default async function AdminHome() {
  const [counts] = await db.execute<{ published: number; review: number; draft: number; verified: number; partial: number; noimage: number; people: number; places: number; badsources: number }>(sql`
    SELECT
      count(*) FILTER (WHERE status = 'published')::int AS published,
      count(*) FILTER (WHERE status = 'in_review')::int AS review,
      count(*) FILTER (WHERE status = 'draft')::int AS draft,
      count(*) FILTER (WHERE verification = 'verified')::int AS verified,
      count(*) FILTER (WHERE verification = 'partial')::int AS partial,
      count(*) FILTER (WHERE featured_image_id IS NULL)::int AS noimage,
      (SELECT count(*)::int FROM people) AS people,
      (SELECT count(*)::int FROM places) AS places,
      (SELECT count(*)::int FROM sources WHERE http_status >= 400 AND http_status NOT IN (403, 429)) AS badsources
    FROM events`);
  const queue = await db
    .select({ id: s.events.id, title: s.events.title, status: s.events.status, notes: s.events.reviewNotes })
    .from(s.events)
    .where(ne(s.events.status, "published"))
    .orderBy(desc(s.events.updatedAt))
    .limit(10);
  const recent = await db.select({ id: s.events.id, title: s.events.title, updated: s.events.updatedAt }).from(s.events).orderBy(desc(s.events.updatedAt)).limit(8);
  const noImage = await db.select({ id: s.events.id, title: s.events.title }).from(s.events).where(sql`${s.events.featuredImageId} IS NULL`).limit(10);

  const cells: [string, number, string?][] = [
    ["Published events", counts.published, "/admin/events?status=published"],
    ["Awaiting review", counts.review, "/admin/events?status=review"],
    ["Drafts", counts.draft, "/admin/events?status=draft"],
    ["Dates verified", counts.verified],
    ["Partially verified", counts.partial],
    ["Without an image", counts.noimage],
    ["People", counts.people, "/admin/people"],
    ["Places", counts.places, "/admin/places"],
    ["Broken source links", counts.badsources, "/admin/sources?broken=1"],
  ];

  return (
    <div>
      <h1 className="text-2xl">Overview</h1>
      <dl className="mt-5 grid grid-cols-2 gap-px overflow-hidden rounded-sm border border-line bg-line sm:grid-cols-3">
        {cells.map(([label, n, href]) => (
          <div key={label} className="bg-surface p-4">
            <dt className="text-xs text-muted">{label}</dt>
            <dd className="mt-1 text-xl font-semibold tabular">{href ? <Link className="hover:underline" href={href}>{n}</Link> : n}</dd>
          </div>
        ))}
      </dl>

      <div className="mt-8 grid gap-8 xl:grid-cols-2">
        <section>
          <h2 className="font-sans text-base font-semibold">Review queue</h2>
          {queue.length ? (
            <ul className="mt-2 divide-y divide-line rounded-sm border border-line bg-surface">
              {queue.map((q) => (
                <li key={q.id} className="p-3 text-sm">
                  <Link className="link font-medium" href={`/admin/events/${q.id}`}>{q.title}</Link>
                  <span className="ml-2 text-xs text-muted">{q.status === "in_review" ? "In review" : "Draft"}</span>
                  {q.notes ? <p className="mt-1 line-clamp-2 text-xs text-ink-2">{q.notes}</p> : null}
                </li>
              ))}
            </ul>
          ) : (
            <p className="mt-2 text-sm text-ink-2">Nothing waiting. Every record is published.</p>
          )}
        </section>
        <section>
          <h2 className="font-sans text-base font-semibold">Recently changed</h2>
          <ul className="mt-2 divide-y divide-line rounded-sm border border-line bg-surface">
            {recent.map((r) => (
              <li key={r.id} className="flex justify-between gap-3 p-3 text-sm">
                <Link className="link" href={`/admin/events/${r.id}`}>{r.title}</Link>
                <span className="shrink-0 text-xs text-muted tabular">{r.updated.toISOString().slice(0, 16).replace("T", " ")}</span>
              </li>
            ))}
          </ul>
          {noImage.length ? (
            <>
              <h2 className="mt-8 font-sans text-base font-semibold">Events without a verified image</h2>
              <ul className="mt-2 grid gap-1 text-sm">
                {noImage.map((r) => <li key={r.id}><Link className="link" href={`/admin/events/${r.id}#images`}>{r.title}</Link></li>)}
              </ul>
            </>
          ) : null}
        </section>
      </div>
    </div>
  );
}
