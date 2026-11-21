import { asc, desc, sql } from "drizzle-orm";
import { db } from "@/db";
import * as s from "@/db/schema";
import { recheckSourceAction } from "../../actions";

export const metadata = { title: "Sources" };

export default async function AdminSources({ searchParams }: { searchParams: Promise<{ broken?: string }> }) {
  const { broken } = await searchParams;
  const rows = await db
    .select({ id: s.sources.id, title: s.sources.title, url: s.sources.url, publisher: s.sources.publisher, type: s.sources.sourceType, status: s.sources.httpStatus, checked: s.sources.lastCheckedAt, uses: sql<number>`(SELECT count(*)::int FROM event_sources es WHERE es.source_id = "sources"."id")` })
    .from(s.sources)
    .where(broken ? sql`${s.sources.httpStatus} >= 400 OR ${s.sources.httpStatus} = 0` : sql`${s.sources.publisher} NOT IN ('Wikidata', 'Wikipedia (Wikimedia Foundation)')`)
    .orderBy(desc(sql`coalesce(${s.sources.httpStatus}, 0) >= 400`), asc(s.sources.publisher));
  return (
    <div>
      <h1 className="text-2xl">Sources</h1>
      <p className="mt-1 text-sm text-ink-2">
        {broken ? "Sources whose last link check failed." : "Institutional sources (Wikipedia and Wikidata anchors are not listed)."} Status 403/429 means the publisher refuses automated checks; the link was kept because the citing article vouches for it.
      </p>
      <div className="mt-4 overflow-x-auto rounded-sm border border-line bg-surface">
        <table className="w-full text-sm">
          <thead className="border-b border-line bg-sunken text-left text-xs"><tr><th className="px-3 py-2">Source</th><th className="px-3 py-2">Type</th><th className="px-3 py-2 text-right">Events</th><th className="px-3 py-2">Link check</th><th className="px-3 py-2"><span className="sr-only">Actions</span></th></tr></thead>
          <tbody className="divide-y divide-line">
            {rows.map((r) => (
              <tr key={r.id}>
                <td className="max-w-md px-3 py-2"><a className="link font-medium" href={r.url} target="_blank" rel="noopener noreferrer">{r.title}</a><span className="block truncate text-xs text-muted">{r.publisher}</span></td>
                <td className="px-3 py-2">{r.type}</td>
                <td className="px-3 py-2 text-right tabular">{r.uses}</td>
                <td className={`whitespace-nowrap px-3 py-2 tabular ${r.status && r.status >= 400 && r.status !== 403 && r.status !== 429 ? "text-thread-ink" : ""}`}>{r.status ?? "—"}{r.checked ? ` · ${r.checked.toISOString().slice(0, 10)}` : ""}</td>
                <td className="px-3 py-2"><form action={recheckSourceAction}><input type="hidden" name="id" value={r.id} /><button className="text-xs underline underline-offset-2">Recheck</button></form></td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
