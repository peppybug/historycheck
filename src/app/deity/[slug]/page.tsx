import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArchiveImage, ImageCredit } from "@/components/archive-image";
import { PortraitCard, WikiSources } from "@/components/belief-cards";
import { EventRow } from "@/components/event-card";
import { getDeity, staticSlugs } from "@/lib/queries";

export async function generateStaticParams() {
  return staticSlugs("deity");
}
type Props = { params: Promise<{ slug: string }> };

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const d = await getDeity((await params).slug);
  return d
    ? { title: `${d.name}, ${d.domain.charAt(0).toLowerCase()}${d.domain.slice(1)}`, description: d.summary, alternates: { canonical: `/deity/${d.slug}` }, openGraph: { images: d.image ? [{ url: d.image.thumbUrl }] : undefined } }
    : { title: "Figure not found" };
}

export default async function DeityPage({ params }: Props) {
  const d = await getDeity((await params).slug);
  if (!d) notFound();
  return (
    <div className="container-page pt-8">
      <nav aria-label="Breadcrumb" className="text-sm text-muted">
        <Link className="hover:text-ink" href="/">Home</Link> / <Link className="hover:text-ink" href="/beliefs">Beliefs</Link> /{" "}
        <Link className="hover:text-ink" href={`/belief/${d.belief.slug}`}>{d.belief.name}</Link>
      </nav>
      <div className="mt-6 grid gap-10 lg:grid-cols-[minmax(0,340px)_1fr] lg:gap-16">
        <div>
          {d.image ? (
            <figure>
              <div className="overflow-hidden rounded-xs bg-sunken" style={{ aspectRatio: `${d.image.thumbWidth} / ${d.image.thumbHeight}` }}>
                <ArchiveImage image={d.image} priority sizes="340px" fit="contain" />
              </div>
              <figcaption className="mt-2 text-xs text-muted">
                <span className="block text-ink-2">{d.image.caption}</span>
                <ImageCredit image={d.image} />
              </figcaption>
            </figure>
          ) : (
            <div className="flex aspect-[4/5] items-end rounded-xs bg-sunken p-4 text-xs text-muted">No image on record.</div>
          )}
        </div>

        <div>
          <p className="text-sm text-ink-2">Figure of {d.belief.name.toLowerCase()} and myth</p>
          <h1 className="mt-1 text-[2.25rem] leading-tight sm:text-3xl">{d.name}</h1>
          <p className="mt-2 text-lg text-ink-2">{d.domain}</p>
          <p className="mt-5 max-w-2xl rounded-sm border border-line bg-surface px-4 py-3 text-sm text-ink-2">
            {d.name} is a figure of religion and mythology, not a historical person. What is known comes from ancient poems, plays, art and the remains of temples and cults.
          </p>
          <dl className="mt-6 grid max-w-xl grid-cols-[auto_1fr] gap-x-6 gap-y-2 text-sm">
            <dt className="text-muted">Domain</dt>
            <dd>{d.domain}</dd>
            {d.romanName ? (<><dt className="text-muted">Roman name</dt><dd>{d.romanName}</dd></>) : null}
            {d.parents ? (<><dt className="text-muted">Parents in myth</dt><dd>{d.parents}</dd></>) : null}
            {d.symbols ? (<><dt className="text-muted">Symbols</dt><dd>{d.symbols}</dd></>) : null}
          </dl>

          <section aria-labelledby="about-h" className="mt-10 max-w-2xl">
            <h2 id="about-h" className="text-xl">In myth and worship</h2>
            <div className="prose-history mt-3"><p>{d.summary}</p></div>
          </section>

          {d.events.length ? (
            <section aria-labelledby="ev-h" className="mt-12">
              <h2 id="ev-h" className="text-xl">In the historical record</h2>
              <ol className="mt-4 grid gap-3">
                {d.events.map((e) => (
                  <li key={e.slug}><EventRow event={e} /></li>
                ))}
              </ol>
            </section>
          ) : null}

          <WikiSources title={d.wikipediaTitle} qid={d.wikidataId} />
        </div>
      </div>

      {d.others.length ? (
        <section aria-labelledby="others-h" className="mt-16">
          <h2 id="others-h" className="text-xl">More figures of {d.belief.name.toLowerCase()}</h2>
          <ul className="mt-4 grid grid-cols-2 gap-x-5 gap-y-8 sm:grid-cols-4 lg:grid-cols-7">
            {d.others.map((o) => (
              <li key={o.slug}>
                <PortraitCard href={`/deity/${o.slug}`} title={o.name} detail={o.domain} image={o.image} />
              </li>
            ))}
          </ul>
        </section>
      ) : null}
    </div>
  );
}
