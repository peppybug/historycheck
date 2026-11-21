import Link from "next/link";
import { asc, ilike, sql } from "drizzle-orm";
import { db } from "@/db";
import * as s from "@/db/schema";
import { CreatePersonForm } from "@/components/admin/forms";
import { formatYear } from "@/lib/dates";

export const metadata = { title: "People" };

export default async function AdminPeople({ searchParams }: { searchParams: Promise<{ q?: string }> }) {
  const { q } = await searchParams;
  const rows = await db
    .select({ id: s.people.id, name: s.people.name, birthYear: s.people.birthYear, deathYear: s.people.deathYear, status: s.people.status, hasPortrait: sql<boolean>`${s.people.portraitImageId} IS NOT NULL`, events: sql<number>`(SELECT count(*)::int FROM event_people ep WHERE ep.person_id = "people"."id")` })
    .from(s.people)
    .where(q ? ilike(s.people.name, `%${q}%`) : undefined)
    .orderBy(asc(s.people.name));
  return (
    <div>
      <h1 className="text-2xl">People</h1>
      <div className="mt-4"><CreatePersonForm /></div>
      <form className="mt-6 flex gap-2" role="search"><label htmlFor="q" className="sr-only">Search people</label><input id="q" name="q" defaultValue={q} placeholder="Search people" className="w-64 rounded-sm border border-line-strong bg-surface px-2.5 py-1.5 text-base" /><button className="rounded-sm border border-line-strong px-3 text-sm font-medium">Search</button></form>
      <div className="mt-4 overflow-x-auto rounded-sm border border-line bg-surface">
        <table className="w-full text-sm">
          <thead className="border-b border-line bg-sunken text-left text-xs"><tr><th className="px-3 py-2">Name</th><th className="px-3 py-2">Life</th><th className="px-3 py-2">Portrait</th><th className="px-3 py-2 text-right">Events</th><th className="px-3 py-2">Status</th></tr></thead>
          <tbody className="divide-y divide-line">
            {rows.map((r) => (
              <tr key={r.id}>
                <td className="px-3 py-2"><Link className="link font-medium" href={`/admin/people/${r.id}`}>{r.name}</Link></td>
                <td className="px-3 py-2 tabular">{r.birthYear != null ? formatYear(r.birthYear) : "?"}–{r.deathYear != null ? formatYear(r.deathYear) : ""}</td>
                <td className="px-3 py-2">{r.hasPortrait ? "Yes" : "None"}</td>
                <td className="px-3 py-2 text-right tabular">{r.events}</td>
                <td className="px-3 py-2">{r.status}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
