import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArchiveImage, ImageCredit } from "@/components/archive-image";
import { EventRow } from "@/components/event-card";
import { WorldMap } from "@/components/world-map";
import { getPlace, staticSlugs } from "@/lib/queries";

export async function generateStaticParams() {
  return staticSlugs("place");
}
type Props = { params: Promise<{ slug: string }> };

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const p = await getPlace((await params).slug);
  if (!p) return { title: "Place not found" };
  return {
    title: p.name,
    description: `${p.significance ?? p.name}. ${p.events.length} event${p.events.length === 1 ? "" : "s"} in the Historycheck record.`,
    alternates: { canonical: `/place/${p.slug}` },
  };
}

export default async function PlacePage({ params }: Props) {
  const p = await getPlace((await params).slug);
  if (!p) notFound();
  const wiki = p.sources.find((s) => s.source.publisher.startsWith("Wikipedia"))?.source;
  const here = p.latitude != null ? [{ slug: p.slug, name: p.name, lat: p.latitude, lng: p.longitude! }] : [];
  const near = p.nearby.filter((n) => n.lat != null).map((n) => ({ slug: n.slug, name: n.name, lat: n.lat!, lng: n.lng! }));

  return (
    <div className="container-page pt-8">
      <nav aria-label="Breadcrumb" className="text-sm text-muted">
        <Link className="hover:text-ink" href="/">Home</Link> / <Link className="hover:text-ink" href="/explore#map">Places</Link>
      </nav>
      <div className="mt-6 grid gap-10 lg:grid-cols-[1fr_1fr] lg:gap-14">
        <div>
          <h1 className="text-[2.25rem] leading-tight sm:text-3xl">{p.name}</h1>
          {p.significance ? <p className="mt-2 text-lg text-ink-2">{p.significance}</p> : null}
          <dl className="mt-6 grid grid-cols-[auto_1fr] gap-x-6 gap-y-2 text-sm">
            {p.modernCountry ? (<><dt className="text-muted">Today in</dt><dd>{p.modernCountry}</dd></>) : null}
            {p.region ? (<><dt className="text-muted">Region</dt><dd><Link className="link" href={`/region/${p.region.slug}`}>{p.region.name}</Link></dd></>) : null}
            {p.latitude != null ? (
              <>
                <dt className="text-muted">Coordinates</dt>
                <dd className="tabular">{Math.abs(p.latitude).toFixed(3)}°{p.latitude >= 0 ? "N" : "S"}, {Math.abs(p.longitude!).toFixed(3)}°{p.longitude! >= 0 ? "E" : "W"}</dd>
              </>
            ) : null}
          </dl>
          <div className="prose-history mt-8"><p>{p.description}</p></div>
          {p.descriptionSource && wiki ? (
            <p className="mt-3 text-xs text-muted">
              Text from <a className="link" href={wiki.url} target="_blank" rel="noopener noreferrer">{p.descriptionSource}</a>,{" "}
              <a className="link" href="https://creativecommons.org/licenses/by-sa/4.0/" target="_blank" rel="license noopener noreferrer">CC BY-SA 4.0</a>.
            </p>
          ) : null}
        </div>
        <div className="grid content-start gap-6">
          {p.image ? (
            <figure>
              <div className="overflow-hidden rounded-xs bg-sunken" style={{ aspectRatio: `${p.image.thumbWidth} / ${p.image.thumbHeight}` }}>
                <ArchiveImage image={p.image} priority sizes="(min-width: 1024px) 45vw, 100vw" />
              </div>
              <figcaption className="mt-2 text-xs text-muted">
                <span className="block text-ink-2">{p.image.caption}</span>
                <ImageCredit image={p.image} />
              </figcaption>
            </figure>
          ) : null}
          {here.length ? <WorldMap points={[...here, ...near]} highlight={[p.slug]} zoomTo={[...here, ...near.slice(0, 2)]} showLabels label={`Map of ${p.name} and nearby places in the record`} /> : null}
        </div>
      </div>

      <section aria-labelledby="ev-h" className="mt-14 max-w-4xl">
        <h2 id="ev-h" className="text-xl">What happened here</h2>
        <ol className="mt-4 grid gap-3">
          {p.events.map((e) => <li key={e.slug}><EventRow event={e} /></li>)}
        </ol>
      </section>

      {p.nearby.length ? (
        <section aria-labelledby="near-h" className="mt-12 max-w-4xl">
          <h2 id="near-h" className="text-xl">Nearby in the record</h2>
          <ul className="mt-3 flex flex-wrap gap-2 text-sm">
            {p.nearby.map((n) => (
              <li key={n.slug}>
                <Link href={`/place/${n.slug}`} className="block rounded-sm border border-line-strong bg-surface px-3 py-1.5 hover:border-ink">
                  {n.name}{n.modernCountry ? <span className="text-muted"> · {n.modernCountry}</span> : null}
                </Link>
              </li>
            ))}
          </ul>
        </section>
      ) : null}
    </div>
  );
}
