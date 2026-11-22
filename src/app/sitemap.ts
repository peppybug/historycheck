import type { MetadataRoute } from "next";
import { sitemapEntries } from "@/lib/queries";
import { siteUrl } from "@/lib/site";

export const dynamic = "force-static";

// Static hosting serves directories, so URLs end in "/" to match canonical links.
const slash = process.env.STATIC_EXPORT === "1" ? "/" : "";
const url = (p: string) => `${siteUrl}${p}${slash}`;

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const { ev, pe, pl, pr, ca, ci, re, be, de } = await sitemapEntries();
  const fixed = ["", "/explore", "/timeline", "/periods", "/connections", "/beliefs", "/about", "/search"].map((p) => ({ url: url(p), changeFrequency: "weekly" as const, priority: p === "" ? 1 : 0.7 }));
  return [
    ...fixed,
    ...ev.map((e) => ({ url: url(`/event/${e.slug}`), lastModified: e.updated, priority: 0.9 })),
    ...ev.map((e) => ({ url: url(`/connections/${e.slug}`), priority: 0.4 })),
    ...pe.map((e) => ({ url: url(`/person/${e.slug}`), lastModified: e.updated, priority: 0.6 })),
    ...pl.map((e) => ({ url: url(`/place/${e.slug}`), lastModified: e.updated, priority: 0.5 })),
    ...pr.map((e) => ({ url: url(`/period/${e.slug}`), priority: 0.6 })),
    ...ca.map((e) => ({ url: url(`/category/${e.slug}`), priority: 0.5 })),
    ...ci.map((e) => ({ url: url(`/civilization/${e.slug}`), priority: 0.6 })),
    ...re.map((e) => ({ url: url(`/region/${e.slug}`), priority: 0.5 })),
    ...be.map((e) => ({ url: url(`/belief/${e.slug}`), priority: 0.6 })),
    ...de.map((e) => ({ url: url(`/deity/${e.slug}`), priority: 0.5 })),
  ];
}
