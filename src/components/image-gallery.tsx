"use client";

import { useEffect, useRef, useState } from "react";

export interface GalleryItem {
  thumbUrl: string;
  smallUrl: string | null;
  thumbWidth: number;
  thumbHeight: number;
  caption: string;
  description: string | null;
  creator: string | null;
  dateText: string | null;
  license: string;
  licenseUrl: string | null;
  sourceUrl: string;
  matchMethod: string;
}

const METHOD: Record<string, string> = {
  wikidata_p18: "Image attached to this subject on Wikidata",
  wikipedia_lead: "Lead image of the subject's encyclopedia article",
  article_media: "Used in the subject's encyclopedia article with this caption",
  curated: "Selected and reviewed by Historycheck editors",
};

function Credit({ item }: { item: GalleryItem }) {
  const creator = item.creator && !/^unknown/i.test(item.creator) ? item.creator : "Unknown creator";
  return (
    <dl className="grid grid-cols-[auto_1fr] gap-x-3 gap-y-1 text-xs text-muted">
      <dt>Creator</dt>
      <dd className="text-ink-2">{creator}</dd>
      {item.dateText ? (
        <>
          <dt>Date</dt>
          <dd className="text-ink-2">{item.dateText}</dd>
        </>
      ) : null}
      <dt>Licence</dt>
      <dd className="text-ink-2">
        {item.licenseUrl ? (
          <a href={item.licenseUrl} className="link" target="_blank" rel="noopener noreferrer license">
            {item.license}
          </a>
        ) : (
          item.license
        )}
      </dd>
      <dt>Source</dt>
      <dd>
        <a href={item.sourceUrl} className="link text-ink-2" target="_blank" rel="noopener noreferrer">
          Wikimedia Commons file page
        </a>
      </dd>
      <dt>Matched by</dt>
      <dd className="text-ink-2">{METHOD[item.matchMethod] ?? "Editorial selection"}</dd>
    </dl>
  );
}

export function ImageGallery({ items: all }: { items: GalleryItem[] }) {
  const dialog = useRef<HTMLDialogElement>(null);
  // Images that fail to load are removed rather than shown broken.
  const [failed, setFailed] = useState<Set<string>>(new Set());
  const items = all.filter((i) => !failed.has(i.thumbUrl));
  const drop = (url: string) => setFailed((f) => new Set(f).add(url));
  const listRef = useRef<HTMLUListElement>(null);
  useEffect(() => {
    listRef.current?.querySelectorAll("img").forEach((img) => {
      if (img.complete && img.naturalWidth === 0 && img.dataset.thumb) drop(img.dataset.thumb);
    });
  }, []);
  const [index, setIndex] = useState<number | null>(null);

  useEffect(() => {
    const d = dialog.current;
    if (!d) return;
    if (index !== null && !d.open) d.showModal();
    if (index === null && d.open) d.close();
  }, [index]);

  useEffect(() => {
    if (index === null) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "ArrowRight") setIndex((i) => (i === null ? i : (i + 1) % items.length));
      if (e.key === "ArrowLeft") setIndex((i) => (i === null ? i : (i - 1 + items.length) % items.length));
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [index, items.length]);

  const cur = index !== null ? items[index] : null;

  return (
    <>
      <ul ref={listRef} className="columns-1 gap-5 sm:columns-2 lg:columns-3">
        {items.map((it, i) => (
          <li key={it.thumbUrl} className="mb-5 break-inside-avoid">
            <figure>
              <button
                type="button"
                onClick={() => setIndex(i)}
                className="img-zoom block w-full overflow-hidden rounded-xs bg-sunken"
                aria-label={`Enlarge image: ${it.caption}`}
              >
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src={it.smallUrl ?? it.thumbUrl}
                  width={it.thumbWidth}
                  height={it.thumbHeight}
                  alt={it.caption}
                  loading="lazy"
                  decoding="async"
                  data-thumb={it.thumbUrl}
                  onError={() => drop(it.thumbUrl)}
                  className="h-auto w-full"
                />
              </button>
              <figcaption className="mt-2 text-sm text-ink-2">{it.caption}</figcaption>
              <p className="mt-1 text-xs text-muted">
                {it.creator && !/^unknown/i.test(it.creator) ? `${it.creator} · ` : ""}
                {it.dateText ? `${it.dateText} · ` : ""}
                {it.license}
              </p>
            </figure>
          </li>
        ))}
      </ul>

      <dialog
        ref={dialog}
        onClose={() => setIndex(null)}
        onClick={(e) => e.target === dialog.current && setIndex(null)}
        className="m-auto max-h-[94vh] w-[min(1100px,94vw)] rounded-sm bg-surface p-0 text-ink shadow-lift backdrop:bg-black/70"
        aria-label="Image viewer"
      >
        {cur ? (
          <div className="grid max-h-[94vh] md:grid-cols-[1fr_300px]">
            <div className="flex items-center justify-center bg-sunken">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img src={cur.thumbUrl} alt={cur.caption} className="max-h-[70vh] w-auto object-contain md:max-h-[94vh]" />
            </div>
            <div className="flex flex-col gap-4 overflow-auto p-5">
              <div className="flex items-center justify-between gap-2">
                <span className="text-xs text-muted tabular">
                  {index! + 1} of {items.length}
                </span>
                <div className="flex gap-1">
                  <button type="button" onClick={() => setIndex((index! - 1 + items.length) % items.length)} className="rounded-sm px-3 py-2 text-sm hover:bg-sunken">
                    Previous
                  </button>
                  <button type="button" onClick={() => setIndex((index! + 1) % items.length)} className="rounded-sm px-3 py-2 text-sm hover:bg-sunken">
                    Next
                  </button>
                  <button type="button" onClick={() => setIndex(null)} className="rounded-sm px-3 py-2 text-sm font-medium hover:bg-sunken" autoFocus>
                    Close
                  </button>
                </div>
              </div>
              <p className="font-serif text-lg leading-snug">{cur.caption}</p>
              {cur.description && cur.description !== cur.caption ? <p className="text-sm text-ink-2">{cur.description}</p> : null}
              <Credit item={cur} />
            </div>
          </div>
        ) : null}
      </dialog>
    </>
  );
}
