import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { ArchiveImage, ImageCredit } from "@/components/archive-image";
import { CollectionHeader, EventsByCentury } from "@/components/collection";
import { getCivilization } from "@/lib/queries";

export const dynamic = "force-dynamic";
type Props = { params: Promise<{ slug: string }> };

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const c = await getCivilization((await params).slug);
  return c ? { title: c.name, description: c.description, alternates: { canonical: `/civilization/${c.slug}` } } : { title: "Civilization not found" };
}

export default async function CivilizationPage({ params }: Props) {
  const c = await getCivilization((await params).slug);
  if (!c) notFound();
  return (
    <>
      <CollectionHeader crumbs={[{ href: "/", label: "Home" }, { href: "/explore#civilizations", label: "Civilizations" }]} kicker={c.dateLabel ?? undefined} title={c.name} description={c.description} count={c.events.length}>
        {c.image ? (
          <figure className="mt-8 max-w-3xl">
            <div className="max-h-[420px] overflow-hidden rounded-xs bg-sunken" style={{ aspectRatio: `${c.image.thumbWidth} / ${c.image.thumbHeight}` }}>
              <ArchiveImage image={c.image} priority sizes="768px" />
            </div>
            <figcaption className="mt-2 text-xs text-muted">
              <span className="block text-ink-2">{c.image.caption}</span>
              <ImageCredit image={c.image} />
            </figcaption>
          </figure>
        ) : null}
      </CollectionHeader>
      <div className="container-page mt-10"><EventsByCentury events={c.events} /></div>
    </>
  );
}
