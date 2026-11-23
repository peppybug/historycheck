import type { Metadata } from "next";
import { openGraph } from "@/lib/site";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArchiveImage, ImageCredit } from "@/components/archive-image";
import { EventRow } from "@/components/event-card";
import { formatDate } from "@/lib/dates";
import { getPerson, staticSlugs } from "@/lib/queries";

export async function generateStaticParams() {
  return staticSlugs("person");
}
type Props = { params: Promise<{ slug: string }> };

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const p = await getPerson((await params).slug);
  if (!p) return { title: "Person not found" };
  return {
    title: p.name,
    description: `${p.shortDescription}. ${p.events.length} event${p.events.length === 1 ? "" : "s"} in the Historycheck record.`,
    alternates: { canonical: `/person/${p.slug}` },
    openGraph: openGraph({ title: p.name, description: p.shortDescription, type: "article", image: p.portrait ? { url: p.portrait.thumbUrl, width: p.portrait.thumbWidth, height: p.portrait.thumbHeight, alt: p.name } : null }),
  };
}

export default async function PersonPage({ params }: Props) {
  const p = await getPerson((await params).slug);
  if (!p) notFound();
  const born = p.birthYear != null ? formatDate({ year: p.birthYear, month: p.birthMonth, day: p.birthDay, precision: p.birthPrecision }) : null;
  const died = p.deathYear != null ? formatDate({ year: p.deathYear, month: p.deathMonth, day: p.deathDay, precision: p.deathPrecision }) : null;
  const wiki = p.sources.find((s) => s.source.publisher.startsWith("Wikipedia"))?.source;

  return (
    <div className="container-page pt-8">
      <nav aria-label="Breadcrumb" className="text-sm text-muted">
        <Link className="hover:text-ink" href="/">Home</Link> / <Link className="hover:text-ink" href="/explore#people">People</Link>
      </nav>
      <div className="mt-6 grid gap-10 lg:grid-cols-[minmax(0,340px)_1fr] lg:gap-16">
        <div>
          {p.portrait ? (
            <figure>
              <div className="overflow-hidden rounded-xs bg-sunken" style={{ aspectRatio: `${p.portrait.thumbWidth} / ${p.portrait.thumbHeight}` }}>
                <ArchiveImage image={p.portrait} priority sizes="340px" fit="contain" />
              </div>
              <figcaption className="mt-2 text-xs text-muted">
                <span className="block text-ink-2">{p.portrait.caption}</span>
                <ImageCredit image={p.portrait} />
              </figcaption>
            </figure>
          ) : (
            <div className="flex aspect-[4/5] items-end rounded-xs bg-sunken p-4 text-xs text-muted">No verified portrait is available.</div>
          )}
        </div>

        <div>
          <h1 className="text-[2.25rem] leading-tight sm:text-3xl">{p.name}</h1>
          <p className="mt-2 text-lg text-ink-2">{p.shortDescription}</p>
          <dl className="mt-6 grid max-w-lg grid-cols-[auto_1fr] gap-x-6 gap-y-2 text-sm">
            {born ? (<><dt className="text-muted">Born</dt><dd className="tabular">{born}</dd></>) : null}
            {died ? (<><dt className="text-muted">Died</dt><dd className="tabular">{died}</dd></>) : null}
            {p.affiliation ? (<><dt className="text-muted">Associated with</dt><dd>{p.affiliation}</dd></>) : null}
            <dt className="text-muted">In the record</dt>
            <dd>{p.events.length} event{p.events.length === 1 ? "" : "s"}</dd>
          </dl>

          <section aria-labelledby="bio" className="mt-10">
            <h2 id="bio" className="text-xl">Biography</h2>
            <div className="prose-history mt-3"><p>{p.biography}</p></div>
            {p.biographySource && wiki ? (
              <p className="mt-3 text-xs text-muted">
                Text from <a className="link" href={wiki.url} target="_blank" rel="noopener noreferrer">{p.biographySource}</a>, available under{" "}
                <a className="link" href="https://creativecommons.org/licenses/by-sa/4.0/" target="_blank" rel="license noopener noreferrer">CC BY-SA 4.0</a>.
                Birth and death dates from Wikidata, shown only as precisely as they are recorded.
              </p>
            ) : null}
          </section>

          <section aria-labelledby="events-h" className="mt-12">
            <h2 id="events-h" className="text-xl">Events in chronological order</h2>
            <ol className="mt-4 grid gap-3">
              {p.events.map((e) => (
                <li key={e.slug}>
                  <EventRow event={e}>
                    <span className="mt-1.5 block text-xs font-medium text-ink">Role: {e.role}</span>
                  </EventRow>
                </li>
              ))}
            </ol>
          </section>

          {p.associates.length ? (
            <section aria-labelledby="assoc-h" className="mt-12">
              <h2 id="assoc-h" className="text-xl">Appears alongside</h2>
              <ul className="mt-4 grid gap-3 sm:grid-cols-2">
                {p.associates.map((a) => (
                  <li key={a.slug}>
                    <Link href={`/person/${a.slug}`} className="card-link group flex items-center gap-3 rounded-sm border border-line bg-surface p-2.5">
                      <span className="h-12 w-12 shrink-0 overflow-hidden rounded-full bg-sunken">
                        {/* eslint-disable-next-line @next/next/no-img-element */}
                        {a.thumb ? <img src={a.thumb} alt="" className="h-full w-full object-cover object-top" loading="lazy" /> : null}
                      </span>
                      <span className="min-w-0">
                        <span className="card-title block font-medium">{a.name}</span>
                        <span className="block truncate text-xs text-muted">{a.shared} shared event{a.shared === 1 ? "" : "s"} · {a.shortDescription}</span>
                      </span>
                    </Link>
                  </li>
                ))}
              </ul>
            </section>
          ) : null}

          <section aria-labelledby="src-h" className="mt-12 border-t border-line pt-6">
            <h2 id="src-h" className="font-sans text-sm font-semibold">Sources</h2>
            <ul className="mt-2 grid gap-1 text-sm">
              {p.sources.map(({ source }) => (
                <li key={source.id}>
                  <a className="link" href={source.url} target="_blank" rel="noopener noreferrer">{source.title}</a>
                  <span className="text-muted"> · {source.publisher}</span>
                </li>
              ))}
            </ul>
          </section>
        </div>
      </div>
    </div>
  );
}
