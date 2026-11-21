import Link from "next/link";
import { asc, sql } from "drizzle-orm";
import { db } from "@/db";
import * as s from "@/db/schema";
import { CreatePlaceForm } from "@/components/admin/forms";
import { taxonomyOptions } from "@/lib/admin-data";

export const metadata = { title: "Places" };

export default async function AdminPlaces() {
  const [{ regions }, rows] = await Promise.all([
    taxonomyOptions(),
    db.select({ id: s.places.id, name: s.places.name, country: s.places.modernCountry, lat: s.places.latitude, status: s.places.status, events: sql<number>`(SELECT count(*)::int FROM event_places ep WHERE ep.place_id = "places"."id")` }).from(s.places).orderBy(asc(s.places.name)),
  ]);
  return (
    <div>
      <h1 className="text-2xl">Places</h1>
      <div className="mt-4"><CreatePlaceForm regions={regions} /></div>
      <div className="mt-6 overflow-x-auto rounded-sm border border-line bg-surface">
        <table className="w-full text-sm">
          <thead className="border-b border-line bg-sunken text-left text-xs"><tr><th className="px-3 py-2">Name</th><th className="px-3 py-2">Country</th><th className="px-3 py-2">Coordinates</th><th className="px-3 py-2 text-right">Events</th><th className="px-3 py-2">Status</th></tr></thead>
          <tbody className="divide-y divide-line">
            {rows.map((r) => (
              <tr key={r.id}>
                <td className="px-3 py-2"><Link className="link font-medium" href={`/admin/places/${r.id}`}>{r.name}</Link></td>
                <td className="px-3 py-2">{r.country ?? "—"}</td>
                <td className="px-3 py-2">{r.lat != null ? "Yes" : <span className="text-thread-ink">Missing</span>}</td>
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
