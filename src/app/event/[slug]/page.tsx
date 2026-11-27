import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArchiveImage, ImageCredit } from "@/components/archive-image";
import { BeforeAfter } from "@/components/before-after";
import { SaveButton, ShareButton, TrackView } from "@/components/event-actions";
import { EventCard, EventRow, yearOf } from "@/components/event-card";
import { ImageGallery, type GalleryItem } from "@/components/image-gallery";
import { RelationLegend } from "@/components/relation-legend";
import { VerificationBadge } from "@/components/verification-badge";
import { WorldMap } from "@/components/world-map";
import { formatDate, formatRange, lifespan, precisionNote } from "@/lib/dates";
import { getEvent, getEventBeliefs, staticSlugs } from "@/lib/queries";
import { openGraph, shareImage, siteUrl } from "@/lib/site";

export async function generateStaticParams() {
  return staticSlugs("event");
}

type Props = { params: Promise<{ slug: string }> };

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const ev = await getEvent(slug);
  if (!ev) return { title: "Event not found" };
  const date = yearOf(ev);
  return {
    title: `${ev.title} (${date})`,
    description: ev.summary,
    alternates: { canonical: `/event/${ev.slug}` },
    openGraph: openGraph({
      title: `${ev.title} (${date})`,
      description: ev.summary,
      type: "article",
      image: shareImage(ev.featuredImage, ev.title),
    }),
  };
}

const SOURCE_TYPE: Record<string, string> = {
  encyclopedia: "Reference work",
  museum: "Museum",
  archive: "Archive",
  library: "Library",
  government: "Government",
  academic: "Academic",
  primary_document: "Primary document",
  database: "Database",
  institution: "Institution",
};

const paragraphs = (t: string) => t.split(/\n\s*\n/).filter(Boolean);

export default async function EventPage({ params }: Props) {
  const { slug } = await params;
  const ev = await getEvent(slug);
  if (!ev) notFound();
  const faith = await getEventBeliefs(ev.id);

  const start = { year: ev.startYear, month: ev.startMonth, day: ev.startDay, precision: ev.datePrecision };
  const end = ev.endYear != null ? { year: ev.endYear, month: ev.endMonth, day: ev.endDay } : null;
  const dateText = formatRange(start, end);
  const pNote = precisionNote(ev.datePrecision);

  const gallery: GalleryItem[] = ev.images.map((x) => ({ ...x.image, caption: x.caption ?? x.image.caption }));
  const mapPoints = ev.places
    .filter((p) => p.place.latitude != null && p.place.longitude != null)
    .map((p) => ({ slug: p.place.slug, name: p.place.name, lat: p.place.latitude!, lng: p.place.longitude! }));
  const sources = [...ev.sources].sort((a, b) => {
    const order = (n: string | null) => (n?.startsWith("Selected") ? 0 : n?.startsWith("Encyclopedia") ? 1 : n?.startsWith("Structured") ? 2 : 3);
    return order(a.note) - order(b.note);
  });

  const toc = [
    ["overview", "Overview"],
    ["context", "Historical context"],
    ["what-happened", "What happened"],
    ev.milestones.length ? ["timeline", "Timeline"] : null,
    ["before-after", "Before and after"],
    ev.people.length ? ["people", "People involved"] : null,
    ev.places.length ? ["places", "Places"] : null,
    gallery.length ? ["images", "Historical images"] : null,
    ["sources", "Sources"],
  ].filter(Boolean) as [string, string][];

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Event",
    name: ev.title,
    description: ev.summary,
    url: `${siteUrl}/event/${ev.slug}`,
    ...(ev.startYear > 0 && ev.datePrecision === "day"
      ? { startDate: `${String(ev.startYear).padStart(4, "0")}-${String(ev.startMonth).padStart(2, "0")}-${String(ev.startDay).padStart(2, "0")}` }
      : {}),
    location: { "@type": "Place", name: ev.locationLabel },
    image: ev.featuredImage?.thumbUrl,
    sameAs: [ev.wikidataId ? `https://www.wikidata.org/wiki/${ev.wikidataId}` : null].filter(Boolean),
  };

  return (
    <article>
      <TrackView event={{ slug: ev.slug, title: ev.title, year: yearOf(ev), thumb: ev.featuredImage?.smallUrl ?? null }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd).replace(/</g, "\\u003c") }} />

      {/* Header ---------------------------------------------------------- */}
      <header className="border-b border-line bg-surface">
        <div className="container-page pb-10 pt-6">
          <nav aria-label="Breadcrumb" className="text-sm text-muted">
            <ol className="flex flex-wrap gap-x-2">
              <li><Link className="hover:text-ink" href="/">Home</Link> /</li>
              <li><Link className="hover:text-ink" href={`/period/${ev.period.slug}`}>{ev.period.name}</Link> /</li>
              <li><Link className="hover:text-ink" href={`/category/${ev.category.slug}`}>{ev.category.name}</Link></li>
            </ol>
          </nav>

          <div className="mt-6 grid gap-8 lg:grid-cols-[1fr_340px] lg:gap-14">
            <div>
              {ev.links.partOf.length ? (
                <p className="mb-3 text-sm text-ink-2">
                  {ev.links.partOf.map((r, i) => (
                    <span key={r.card.slug}>
                      {i ? " · " : ""}
                      {r.type === "part_of" ? "Part of " : "During "}
                      <Link className="link font-medium" href={`/event/${r.card.slug}`}>{r.card.title}</Link>
                    </span>
                  ))}
                </p>
              ) : null}
              <h1 className="text-[2.25rem] leading-[1.08] sm:text-3xl">{ev.title}</h1>
              {ev.altNames.length ? <p className="mt-2 text-sm text-muted">Also known as {ev.altNames.join(", ")}</p> : null}
              <p className="mt-5 max-w-2xl font-serif text-lg leading-relaxed text-ink-2 sm:text-xl">{ev.summary}</p>
              <div className="mt-6 flex flex-wrap gap-2">
                <SaveButton event={{ slug: ev.slug, title: ev.title, year: yearOf(ev), thumb: ev.featuredImage?.smallUrl ?? null }} />
                <ShareButton title={ev.title} />
                <Link href={`/connections/${ev.slug}`} className="inline-flex h-10 items-center rounded-sm border border-line-strong bg-surface px-3.5 text-sm font-medium text-ink hover:border-ink">
                  View connections
                </Link>
              </div>
            </div>

            <dl className="grid content-start gap-x-4 gap-y-3 border-t border-line pt-5 text-sm sm:grid-cols-[auto_1fr] lg:border-l lg:border-t-0 lg:pl-8 lg:pt-0">
              <dt className="text-muted">Date</dt>
              <dd>
                <span className="font-medium tabular">{dateText}</span>
                {pNote ? <span className="block text-xs text-muted">{pNote}</span> : null}
                {ev.dateNote ? <span className="mt-1 block text-xs text-ink-2">{ev.dateNote}</span> : null}
              </dd>
              <dt className="text-muted">Location</dt>
              <dd>
                {ev.primaryPlace ? <Link className="link" href={`/place/${ev.primaryPlace.slug}`}>{ev.locationLabel}</Link> : ev.locationLabel}
              </dd>
              <dt className="text-muted">Period</dt>
              <dd><Link className="link" href={`/period/${ev.period.slug}`}>{ev.period.name}</Link></dd>
              <dt className="text-muted">Category</dt>
              <dd><Link className="link" href={`/category/${ev.category.slug}`}>{ev.category.name}</Link></dd>
              <dt className="text-muted">Region</dt>
              <dd><Link className="link" href={`/region/${ev.region.slug}`}>{ev.region.name}</Link></dd>
              {ev.civilizations.length ? (
                <>
                  <dt className="text-muted">Civilization</dt>
                  <dd>
                    {ev.civilizations.map((c, i) => (
                      <span key={c.civilization.slug}>
                        {i ? ", " : ""}
                        <Link className="link" href={`/civilization/${c.civilization.slug}`}>{c.civilization.name}</Link>
                      </span>
                    ))}
                  </dd>
                </>
              ) : null}
              {faith.beliefs.length || faith.deities.length ? (
                <>
                  <dt className="text-muted">Beliefs</dt>
                  <dd>
                    {[...faith.beliefs.map((b) => ({ ...b, href: `/belief/${b.slug}` })), ...faith.deities.map((d) => ({ ...d, href: `/deity/${d.slug}` }))].map((x, i) => (
                      <span key={x.href}>
                        {i ? ", " : ""}
                        <Link className="link" href={x.href}>{x.name}</Link>
                      </span>
                    ))}
                  </dd>
                </>
              ) : null}
              <dt className="text-muted">Record</dt>
              <dd><VerificationBadge status={ev.verification} /> <a href="#verification" className="link ml-1 text-xs text-ink-2">Details</a></dd>
            </dl>
          </div>
        </div>
      </header>

      {/* Featured image ------------------------------------------------- */}
      {ev.featuredImage ? (
        <figure className="border-b border-line bg-sunken">
          <div className="container-page flex justify-center py-6">
            <div className="max-h-[72vh]" style={{ aspectRatio: `${ev.featuredImage.thumbWidth} / ${ev.featuredImage.thumbHeight}` }}>
              <ArchiveImage image={ev.featuredImage} priority fit="contain" sizes="(min-width: 1240px) 1180px, 100vw" className="max-h-[72vh]" />
            </div>
          </div>
          <figcaption className="container-page pb-5 text-sm text-ink-2">
            <span className="block max-w-3xl">{ev.featuredImage.caption}</span>
            <span className="mt-1 block text-xs text-muted">
              <ImageCredit image={ev.featuredImage} />
            </span>
          </figcaption>
        </figure>
      ) : (
        <div className="border-b border-line bg-sunken">
          <p className="container-page py-4 text-sm text-muted">No image could be verified for this event, so none is shown.</p>
        </div>
      )}

      {/* Body ------------------------------------------------------------ */}
      <div className="container-page mt-12 grid gap-12 lg:grid-cols-[200px_1fr] xl:gap-16">
        <div className="hidden lg:block">
          <nav aria-label="On this page" className="sticky top-6">
            <p className="text-xs font-semibold text-muted">On this page</p>
            <ol className="mt-3 grid gap-2 border-l border-line text-sm">
              {toc.map(([id, label]) => (
                <li key={id}>
                  <a href={`#${id}`} className="-ml-px block border-l border-transparent pl-3 text-ink-2 hover:border-thread hover:text-ink">
                    {label}
                  </a>
                </li>
              ))}
            </ol>
          </nav>
        </div>

        <div className="min-w-0">
          <section aria-labelledby="overview" className="scroll-mt-6">
            <h2 id="overview" className="text-xl">Overview</h2>
            <div className="prose-history mt-4">
              {paragraphs(ev.overview).map((p, i) => <p key={i}>{p}</p>)}
            </div>
          </section>

          <section aria-labelledby="context" className="mt-14 scroll-mt-6">
            <h2 id="context" className="text-xl">Historical context</h2>
            <div className="prose-history mt-4">
              {paragraphs(ev.context).map((p, i) => <p key={i}>{p}</p>)}
            </div>
            <div className="mt-8 grid max-w-[68ch] gap-8 sm:grid-cols-2">
              <div>
                <h3 className="font-sans text-sm font-semibold">Causes</h3>
                <ul className="mt-3 grid gap-2.5 text-[0.98rem] text-ink-2">
                  {ev.causes.map((c) => (
                    <li key={c} className="flex gap-2.5">
                      <span aria-hidden="true" className="mt-[0.6em] h-1.5 w-1.5 shrink-0 rounded-full bg-thread" />
                      {c}
                    </li>
                  ))}
                </ul>
              </div>
              {ev.people.length ? (
                <div>
                  <h3 className="font-sans text-sm font-semibold">Key people</h3>
                  <ul className="mt-3 grid gap-2.5 text-[0.98rem]">
                    {ev.people.slice(0, 5).map(({ person, role }) => (
                      <li key={person.slug}>
                        <Link className="link font-medium" href={`/person/${person.slug}`}>{person.name}</Link>
                        <span className="text-ink-2">: {role}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              ) : null}
            </div>
          </section>

          <section aria-labelledby="what-happened" className="mt-14 scroll-mt-6">
            <h2 id="what-happened" className="text-xl">What happened</h2>
            <div className="prose-history mt-4">
              {paragraphs(ev.narrative).map((p, i) => <p key={i}>{p}</p>)}
            </div>
            <div className="mt-8 max-w-[68ch]">
              <h3 className="font-sans text-sm font-semibold">Consequences</h3>
              <ul className="mt-3 grid gap-2.5 text-[0.98rem] text-ink-2">
                {ev.consequences.map((c) => (
                  <li key={c} className="flex gap-2.5">
                    <span aria-hidden="true" className="mt-[0.45em] shrink-0 text-thread">
                      <svg viewBox="0 0 12 12" className="h-3 w-3"><path d="M2 6h7M6.5 3 9.5 6l-3 3" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" /></svg>
                    </span>
                    {c}
                  </li>
                ))}
              </ul>
            </div>
          </section>

          {ev.milestones.length ? (
            <section aria-labelledby="timeline" className="mt-14 scroll-mt-6">
              <h2 id="timeline" className="text-xl">Timeline</h2>
              <ol className="relative mt-6 max-w-[68ch] border-l-2 border-line pl-6">
                {ev.milestones.map((m) => (
                  <li key={m.id} className="relative pb-6 last:pb-0">
                    <span aria-hidden="true" className="absolute -left-[31px] top-1.5 h-3 w-3 rounded-full border-2 border-paper bg-ink" />
                    <p className="text-sm font-semibold tabular text-ink">{formatDate({ year: m.year, month: m.month, day: m.day, precision: m.precision })}</p>
                    <p className="mt-0.5 font-serif text-lg leading-snug">{m.label}</p>
                    {m.description ? <p className="mt-0.5 text-sm text-ink-2">{m.description}</p> : null}
                  </li>
                ))}
              </ol>
            </section>
          ) : null}

          <section aria-labelledby="before-after" className="mt-16 scroll-mt-6 border-t border-line pt-10">
            <div className="flex flex-wrap items-end justify-between gap-6">
              <div className="max-w-2xl">
                <h2 id="before-after" className="text-2xl">Before and after</h2>
                <p className="mt-2 text-ink-2">How this event connects to the rest of the record. Red lines are causal links; grey dotted lines show sequence only.</p>
              </div>
              <Link href={`/connections/${ev.slug}`} className="link text-sm font-medium">Open in the connections explorer</Link>
            </div>
            <div className="mt-8">
              <BeforeAfter ev={ev} />
            </div>
            {ev.links.includes.length || ev.links.related.length ? (
              <div className="mt-10 grid gap-8 md:grid-cols-2">
                {ev.links.includes.length ? (
                  <div>
                    <h3 className="font-sans text-sm font-semibold">Events within this one</h3>
                    <ul className="mt-3 grid gap-2">
                      {ev.links.includes.map((r) => <li key={r.card.slug}><EventRow event={r.card} note={r.note} /></li>)}
                    </ul>
                  </div>
                ) : null}
                {ev.links.related.length ? (
                  <div>
                    <h3 className="font-sans text-sm font-semibold">Related</h3>
                    <ul className="mt-3 grid gap-2">
                      {ev.links.related.map((r) => <li key={r.card.slug}><EventRow event={r.card} note={r.note} /></li>)}
                    </ul>
                  </div>
                ) : null}
              </div>
            ) : null}
            <details className="mt-8 max-w-xl text-sm">
              <summary className="cursor-pointer font-medium text-ink-2">How to read these lines</summary>
              <RelationLegend className="mt-3" />
            </details>
          </section>

          {ev.meanwhile.length ? (
            <section aria-labelledby="meanwhile-h" className="mt-14">
              <h2 id="meanwhile-h" className="text-xl">Meanwhile, elsewhere in the world</h2>
              <p className="mt-2 max-w-prose text-ink-2">Events in other regions around the same time. These are shown for context, not because they are connected.</p>
              <div className="mt-5 grid gap-4 sm:grid-cols-2 xl:grid-cols-4">
                {ev.meanwhile.map((m) => <EventCard key={m.slug} event={m} sizes="(min-width: 1280px) 20vw, (min-width: 640px) 45vw, 100vw" />)}
              </div>
            </section>
          ) : null}

          {ev.people.length ? (
            <section aria-labelledby="people" className="mt-16 scroll-mt-6">
              <h2 id="people" className="text-xl">People involved</h2>
              <ul className="mt-5 grid gap-4 md:grid-cols-2">
                {ev.people.map(({ person, role }) => {
                  const life = lifespan(
                    person.birthYear != null ? { year: person.birthYear, month: person.birthMonth, day: person.birthDay, precision: person.birthPrecision } : null,
                    person.deathYear != null ? { year: person.deathYear, month: person.deathMonth, day: person.deathDay, precision: person.deathPrecision } : null,
                  );
                  return (
                    <li key={person.slug}>
                      <Link href={`/person/${person.slug}`} className="card-link group flex h-full gap-4 rounded-sm border border-line bg-surface p-4">
                        <span className="h-24 w-20 shrink-0 overflow-hidden rounded-xs bg-sunken">
                          {person.portrait ? <ArchiveImage image={person.portrait} sizes="80px" className="object-top" /> : null}
                        </span>
                        <span className="min-w-0">
                          <span className="card-title block font-serif text-lg leading-snug">{person.name}</span>
                          {life ? <span className="block text-xs text-muted tabular">{life}</span> : null}
                          <span className="mt-1.5 block text-sm font-medium text-ink">{role}</span>
                          <span className="mt-1 line-clamp-2 block text-sm text-ink-2">{person.shortDescription}</span>
                        </span>
                      </Link>
                    </li>
                  );
                })}
              </ul>
            </section>
          ) : null}

          {ev.places.length ? (
            <section aria-labelledby="places" className="mt-16 scroll-mt-6">
              <h2 id="places" className="text-xl">Places</h2>
              <div className="mt-5 grid gap-6 lg:grid-cols-[1fr_1.1fr]">
                <ul className="grid content-start gap-3">
                  {ev.places.map(({ place }) => (
                    <li key={place.slug}>
                      <Link href={`/place/${place.slug}`} className="card-link group flex gap-3 rounded-sm border border-line bg-surface p-3">
                        <span className="h-16 w-20 shrink-0 overflow-hidden rounded-xs bg-sunken">
                          {place.image ? <ArchiveImage image={place.image} sizes="80px" /> : null}
                        </span>
                        <span className="min-w-0">
                          <span className="card-title block font-medium">{place.name}</span>
                          <span className="block text-xs text-muted">{[place.modernCountry, place.significance].filter(Boolean).join(" · ")}</span>
                          {place.latitude != null ? (
                            <span className="block text-xs text-muted tabular">
                              {Math.abs(place.latitude).toFixed(2)}°{place.latitude >= 0 ? "N" : "S"}, {Math.abs(place.longitude!).toFixed(2)}°{place.longitude! >= 0 ? "E" : "W"}
                            </span>
                          ) : null}
                        </span>
                      </Link>
                    </li>
                  ))}
                </ul>
                {mapPoints.length ? (
                  <WorldMap points={mapPoints} highlight={mapPoints.map((p) => p.slug)} zoomTo={mapPoints} label={`Map showing ${mapPoints.map((p) => p.name).join(", ")}`} />
                ) : null}
              </div>
            </section>
          ) : null}

          {gallery.length ? (
            <section aria-labelledby="images" className="mt-16 scroll-mt-6">
              <h2 id="images" className="text-xl">Historical images</h2>
              <p className="mt-2 max-w-prose text-ink-2">
                Paintings, photographs, maps and objects used in the encyclopedia article about this event, with the article&apos;s own captions. Select an image for its full record.
              </p>
              <div className="mt-6">
                <ImageGallery items={gallery} />
              </div>
            </section>
          ) : null}

          <section aria-labelledby="sources" className="mt-16 scroll-mt-6 border-t border-line pt-10">
            <h2 id="sources" className="text-xl">Sources</h2>
            <ol className="mt-5 grid max-w-3xl gap-4">
              {sources.map(({ source, note }) => (
                <li key={source.id} className="grid gap-0.5 border-b border-line pb-4 last:border-b-0">
                  <a href={source.url} target="_blank" rel="noopener noreferrer" className="link font-medium text-ink">
                    {source.title}
                  </a>
                  <span className="text-sm text-ink-2">
                    {source.publisher} · {SOURCE_TYPE[source.sourceType] ?? source.sourceType}
                  </span>
                  {note ? <span className="text-xs text-muted">{note}</span> : null}
                </li>
              ))}
            </ol>

            <div id="verification" className="mt-10 max-w-3xl scroll-mt-6 rounded-sm border border-line bg-surface p-5">
              <div className="flex flex-wrap items-center gap-3">
                <h3 className="font-sans text-base font-semibold">How this record was checked</h3>
                <VerificationBadge status={ev.verification} />
              </div>
              <ul className="mt-3 grid gap-1.5 text-sm text-ink-2">
                <li>Anchored to {ev.wikidataId ? <a className="link" href={`https://www.wikidata.org/wiki/${ev.wikidataId}`} target="_blank" rel="noopener noreferrer">Wikidata {ev.wikidataId}</a> : "an encyclopedia article"}.</li>
                {ev.reviewNotes ? <li className="whitespace-pre-line">{ev.reviewNotes}</li> : null}
                <li>Images were matched to this subject through Wikidata and the event&apos;s own article, and every image link was checked before publication.</li>
                <li>Last updated {ev.updatedAt.toISOString().slice(0, 10)}.</li>
              </ul>
              <p className="mt-3 text-xs text-muted">
                Spotted an error? Records are reviewed by editors before changes are published. <Link className="link" href="/about#corrections">How corrections work</Link>.
              </p>
            </div>
          </section>

          <nav aria-label="Chronological" className="mt-16 grid gap-3 border-t border-line pt-8 sm:grid-cols-2">
            {ev.prev ? (
              <Link href={`/event/${ev.prev.slug}`} className="card-link rounded-sm border border-line bg-surface p-4">
                <span className="text-xs text-muted">Earlier in the record · {yearOf(ev.prev)}</span>
                <span className="mt-1 block font-serif text-lg leading-snug">{ev.prev.title}</span>
              </Link>
            ) : <span />}
            {ev.next ? (
              <Link href={`/event/${ev.next.slug}`} className="card-link rounded-sm border border-line bg-surface p-4 sm:text-right">
                <span className="text-xs text-muted">Later in the record · {yearOf(ev.next)}</span>
                <span className="mt-1 block font-serif text-lg leading-snug">{ev.next.title}</span>
              </Link>
            ) : null}
          </nav>
        </div>
      </div>
    </article>
  );
}
