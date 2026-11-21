import Link from "next/link";
import { notFound } from "next/navigation";
import { eq } from "drizzle-orm";
import { db } from "@/db";
import * as s from "@/db/schema";
import { PlaceEditForm } from "@/components/admin/forms";

export default async function AdminPlace({ params }: { params: Promise<{ id: string }> }) {
  const id = Number((await params).id);
  const p = Number.isInteger(id) ? await db.query.places.findFirst({ where: eq(s.places.id, id) }) : null;
  if (!p) notFound();
  return (
    <div className="max-w-3xl">
      <div className="flex items-baseline justify-between gap-3"><h1 className="text-2xl">{p.name}</h1><Link className="link text-sm" href={`/place/${p.slug}`} target="_blank">Public page</Link></div>
      <div className="mt-6"><PlaceEditForm p={p} /></div>
    </div>
  );
}
