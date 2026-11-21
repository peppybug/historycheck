import Link from "next/link";
import { asc, desc, ilike, ne, or, eq, and, sql, type SQL } from "drizzle-orm";
import { db } from "@/db";
import * as s from "@/db/schema";
import { yearLabel } from "@/lib/dates";

const STATUS_LABEL = { draft: "Draft", in_review: "In review", published: "Published" } as const;
const VER_LABEL = { verified: "Verified", partial: "Partial", unverified: "Unverified" } as const;

type SP = { q?: string; status?: string; sort?: string; dir?: string; deleted?: string };

export default async function AdminEvents({ searchParams }: { searchParams: Promise<SP> }) {
  const sp = await searchParams;
  const where: SQL[] = [];
  if (sp.q) where.push(or(ilike(s.events.title, `%${sp.q}%`), ilike(s.events.slug, `%${sp.q}%`))!);
  if (sp.status === "review") where.push(ne(s.events.status, "published"));
  else if (sp.status && ["draft", "in_review", "published"].includes(sp.status)) where.push(eq(s.events.status, sp.status as "draft"));
  const cols = { title: s.events.title, date: s.events.sortKey, status: s.events.status, verification: s.events.verification, updated: s.events.updatedAt } as const;
  const sortKey = (sp.sort && sp.sort in cols ? sp.sort : "date") as keyof typeof cols;
  const dir = sp.dir === "desc" ? desc : asc;
  const rows = await db
    .select({
      id: s.events.id,
      slug: s.events.slug,
      title: s.events.title,
      startYear: s.events.startYear,
      endYear: s.events.endYear,
      datePrecision: s.events.datePrecision,
      status: s.events.status,
      verification: s.events.verification,
      hasImage: sql<boolean>`${s.events.featuredImageId} IS NOT NULL`,
      sources: sql<number>`(SELECT count(*)::int FROM event_sources es WHERE es.event_id = "events"."id")`,
      rels: sql<number>`(SELECT count(*)::int FROM event_relations r WHERE r.from_event_id = "events"."id" OR r.to_event_id = "events"."id")`,
    })
    .from(s.events)
    .where(where.length ? and(...where) : undefined)
    .orderBy(dir(cols[sortKey]));

  const th = (key: keyof typeof cols, label: string, cls = "") => {
    const active = sortKey === key;
    const nextDir = active && sp.dir !== "desc" ? "desc" : "asc";
    const q = new URLSearchParams({ ...(sp.q ? { q: sp.q } : {}), ...(sp.status ? { status: sp.status } : {}), sort: key, dir: nextDir });
    return (
      <th scope="col" aria-sort={active ? (sp.dir === "desc" ? "descending" : "ascending") : "none"} className={`px-3 py-2 text-left font-semibold ${cls}`}>
        <Link href={`/admin/events?${q}`} className="hover:underline">{label}{active ? (sp.dir === "desc" ? " ↓" : " ↑") : ""}</Link>
      </th>
    );
  };

  return (
    <div>
      <div className="flex flex-wrap items-end justify-between gap-4">
        <h1 className="text-2xl">Events</h1>
        <Link href="/admin/events/new" className="rounded-sm bg-ink px-3.5 py-2 text-sm font-medium text-paper hover:bg-thread">New event</Link>
      </div>
      {sp.deleted ? <p className="mt-3 rounded-sm bg-verified-soft px-3 py-2 text-sm text-verified" role="status">The event was deleted.</p> : null}
      <form className="mt-4 flex flex-wrap items-end gap-3" role="search">
        <div>
          <label htmlFor="q" className="text-xs font-semibold">Search titles</label>
          <input id="q" name="q" defaultValue={sp.q} className="mt-1 block w-64 rounded-sm border border-line-strong bg-surface px-2.5 py-1.5 text-base" />
        </div>
        <div>
          <label htmlFor="status" className="text-xs font-semibold">Status</label>
          <select id="status" name="status" defaultValue={sp.status ?? ""} className="mt-1 block rounded-sm border border-line-strong bg-surface px-2.5 py-1.5 text-base">
            <option value="">Any</option>
            <option value="review">Not published</option>
            <option value="published">Published</option>
            <option value="in_review">In review</option>
            <option value="draft">Draft</option>
          </select>
        </div>
        <button className="rounded-sm border border-line-strong px-3 py-1.5 text-sm font-medium hover:border-ink">Filter</button>
        <span className="text-sm text-muted tabular">{rows.length} event{rows.length === 1 ? "" : "s"}</span>
      </form>

      <div className="mt-4 overflow-x-auto rounded-sm border border-line bg-surface">
        <table className="w-full text-sm">
          <thead className="border-b border-line bg-sunken text-xs">
            <tr>
              {th("title", "Title")}
              {th("date", "Date")}
              {th("status", "Status")}
              {th("verification", "Verification")}
              <th scope="col" className="px-3 py-2 text-right font-semibold">Image</th>
              <th scope="col" className="px-3 py-2 text-right font-semibold">Sources</th>
              <th scope="col" className="px-3 py-2 text-right font-semibold">Links</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-line">
            {rows.map((r) => (
              <tr key={r.id} className="hover:bg-sunken/60">
                <td className="px-3 py-2"><Link className="link font-medium" href={`/admin/events/${r.id}`}>{r.title}</Link></td>
                <td className="whitespace-nowrap px-3 py-2 tabular">{yearLabel({ year: r.startYear, precision: r.datePrecision }, r.endYear != null ? { year: r.endYear } : null)}</td>
                <td className="px-3 py-2">{STATUS_LABEL[r.status]}</td>
                <td className="px-3 py-2">{VER_LABEL[r.verification]}</td>
                <td className="px-3 py-2 text-right">{r.hasImage ? "Yes" : <span className="text-thread-ink">None</span>}</td>
                <td className="px-3 py-2 text-right tabular">{r.sources}</td>
                <td className="px-3 py-2 text-right tabular">{r.rels}</td>
              </tr>
            ))}
            {!rows.length ? (
              <tr><td colSpan={7} className="px-3 py-6 text-center text-ink-2">{sp.q || sp.status ? "No events match these filters." : "The record is empty. Run the seed script or create the first event."}</td></tr>
            ) : null}
          </tbody>
        </table>
      </div>
    </div>
  );
}
