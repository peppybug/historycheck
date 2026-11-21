import type { ImageRow } from "@/lib/queries";

type Img = Pick<ImageRow, "thumbUrl" | "thumbWidth" | "thumbHeight" | "caption"> & {
  smallUrl?: string | null;
};

/**
 * Renders a verified archival image from Wikimedia Commons using the
 * pre-sized renditions stored by the enrichment pipeline (500px / 1280px).
 * Commons thumbnails are served directly (not re-proxied) to respect
 * Wikimedia's hotlinking and User-Agent policies.
 */
export function ArchiveImage({
  image,
  alt,
  sizes = "(min-width: 1024px) 50vw, 100vw",
  className = "",
  priority = false,
  fit = "cover",
}: {
  image: Img;
  alt?: string;
  sizes?: string;
  className?: string;
  priority?: boolean;
  fit?: "cover" | "contain";
}) {
  const small = image.smallUrl && image.smallUrl !== image.thumbUrl ? image.smallUrl : null;
  const srcSet = small ? `${small} 500w, ${image.thumbUrl} ${image.thumbWidth}w` : undefined;
  return (
    // eslint-disable-next-line @next/next/no-img-element
    <img
      src={small && !priority ? small : image.thumbUrl}
      srcSet={srcSet}
      sizes={srcSet ? sizes : undefined}
      width={image.thumbWidth}
      height={image.thumbHeight}
      alt={alt ?? image.caption}
      loading={priority ? "eager" : "lazy"}
      fetchPriority={priority ? "high" : undefined}
      decoding="async"
      className={`h-full w-full ${fit === "cover" ? "object-cover" : "object-contain"} ${className}`}
    />
  );
}

/** A clearly labelled fallback used when no image could be verified for a record. */
export function NoImage({ label, year, className = "" }: { label?: string; year?: string; className?: string }) {
  return (
    <div
      className={`flex h-full w-full flex-col justify-between bg-sunken p-4 text-muted ${className}`}
      role="img"
      aria-label="No verified image available"
    >
      <span className="font-serif text-2xl text-ink-2 tabular">{year}</span>
      <span className="text-xs">{label ?? "No verified image for this record"}</span>
    </div>
  );
}

export function ImageCredit({ image }: { image: Pick<ImageRow, "creator" | "license" | "sourceUrl" | "dateText"> }) {
  const creator = image.creator && !/^unknown/i.test(image.creator) ? image.creator : "Unknown creator";
  return (
    <span>
      {creator}
      {image.dateText ? `, ${image.dateText}` : ""} · {image.license} ·{" "}
      <a href={image.sourceUrl} className="link" target="_blank" rel="noopener noreferrer">
        Wikimedia Commons
      </a>
    </span>
  );
}
