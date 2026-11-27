export const siteUrl = (process.env.NEXT_PUBLIC_SITE_URL ?? "http://localhost:3000").replace(/\/$/, "");

export const DEFAULT_SHARE_IMAGE = {
  url: `${siteUrl}/brand/og-1200x630.png`,
  width: 1200,
  height: 630,
  alt: "Historycheck: Explore the past. Understand the present.",
};

type ShareImage = { url: string; width?: number; height?: number; alt?: string };

/**
 * Open Graph metadata for a page. Next.js replaces (rather than merges) the
 * layout's openGraph object when a page sets its own, so every page goes
 * through this helper to keep the site name, locale and a fallback image.
 */
export function openGraph(o: { title?: string; description?: string; type?: "website" | "article"; image?: ShareImage | null } = {}) {
  return {
    siteName: "Historycheck",
    locale: "en_GB",
    type: o.type ?? "website",
    ...(o.title ? { title: o.title } : {}),
    ...(o.description ? { description: o.description } : {}),
    images: [o.image ?? DEFAULT_SHARE_IMAGE],
  };
}

/**
 * Link-preview version of an archive image. Uses the ~500px rendition: large
 * enough for WhatsApp, iMessage, X and Facebook cards, and small enough
 * (typically under 200 KB) that WhatsApp does not drop the image.
 */
export function shareImage(
  img: { thumbUrl: string; smallUrl: string | null; thumbWidth: number; thumbHeight: number } | null | undefined,
  alt: string,
): ShareImage | null {
  if (!img) return null;
  const small = img.smallUrl && img.smallUrl !== img.thumbUrl;
  const width = small ? Math.min(500, img.thumbWidth) : img.thumbWidth;
  return { url: small ? img.smallUrl! : img.thumbUrl, width, height: Math.round((img.thumbHeight * width) / img.thumbWidth), alt };
}
