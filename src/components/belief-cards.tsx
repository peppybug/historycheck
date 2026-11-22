import Link from "next/link";
import type { ImageRow } from "@/lib/queries";
import { ArchiveImage } from "./archive-image";

/** Portrait-format card used for belief systems and mythological figures. */
export function PortraitCard({
  href,
  title,
  detail,
  image,
}: {
  href: string;
  title: string;
  detail?: string | null;
  image: ImageRow | null;
}) {
  return (
    <Link href={href} className="group block">
      <span className="img-zoom block aspect-[4/5] overflow-hidden rounded-xs bg-sunken">
        {image ? (
          <ArchiveImage image={image} alt="" sizes="(min-width: 1024px) 200px, 45vw" />
        ) : (
          <span className="flex h-full items-end p-3 text-xs text-muted" aria-hidden="true">No image on record</span>
        )}
      </span>
      <span className="mt-2 block font-serif text-lg leading-tight group-hover:underline group-hover:decoration-thread group-hover:underline-offset-4">{title}</span>
      {detail ? <span className="block text-xs text-muted">{detail}</span> : null}
    </Link>
  );
}

/** Sources box shared by belief and deity pages. */
export function WikiSources({ title, qid }: { title: string | null; qid: string | null }) {
  if (!title && !qid) return null;
  return (
    <section aria-labelledby="src-h" className="mt-12 border-t border-line pt-6">
      <h2 id="src-h" className="font-sans text-sm font-semibold">Sources</h2>
      <ul className="mt-2 grid gap-1 text-sm">
        {title ? (
          <li>
            <a className="link" href={`https://en.wikipedia.org/wiki/${encodeURIComponent(title.replace(/ /g, "_"))}`} target="_blank" rel="noopener noreferrer">{title}</a>
            <span className="text-muted"> · Wikipedia</span>
          </li>
        ) : null}
        {qid ? (
          <li>
            <a className="link" href={`https://www.wikidata.org/wiki/${qid}`} target="_blank" rel="noopener noreferrer">{qid}</a>
            <span className="text-muted"> · Wikidata</span>
          </li>
        ) : null}
      </ul>
    </section>
  );
}
