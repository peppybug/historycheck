import Link from "next/link";
import { notFound } from "next/navigation";
import { eq } from "drizzle-orm";
import { db } from "@/db";
import * as s from "@/db/schema";
import { PersonEditForm } from "@/components/admin/forms";

export default async function AdminPerson({ params, searchParams }: { params: Promise<{ id: string }>; searchParams: Promise<{ created?: string }> }) {
  const id = Number((await params).id);
  const p = Number.isInteger(id) ? await db.query.people.findFirst({ where: eq(s.people.id, id), with: { portrait: true } }) : null;
  if (!p) notFound();
  const created = (await searchParams).created;
  return (
    <div className="max-w-3xl">
      <div className="flex items-baseline justify-between gap-3"><h1 className="text-2xl">{p.name}</h1><Link className="link text-sm" href={`/person/${p.slug}`} target="_blank">Public page</Link></div>
      {created ? <p className="mt-3 rounded-sm bg-verified-soft px-3 py-2 text-sm text-verified">Imported from Wikipedia and Wikidata. Review the text before linking to events.</p> : null}
      <div className="mt-4 flex gap-4 text-sm text-ink-2">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        {p.portrait ? <img src={p.portrait.smallUrl ?? p.portrait.thumbUrl} alt="" className="h-28 w-24 rounded-xs object-cover object-top" /> : null}
        <dl className="grid grid-cols-[auto_1fr] gap-x-4 gap-y-1">
          <dt className="text-muted">Wikidata</dt><dd>{p.wikidataId ?? "—"}</dd>
          <dt className="text-muted">Born</dt><dd>{p.birthYear ?? "?"} ({p.birthPrecision ?? "unknown precision"})</dd>
          <dt className="text-muted">Died</dt><dd>{p.deathYear ?? "?"} ({p.deathPrecision ?? "unknown precision"})</dd>
        </dl>
      </div>
      <div className="mt-6"><PersonEditForm p={p} /></div>
    </div>
  );
}
