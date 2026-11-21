import type { MetadataRoute } from "next";
import { sitemapEntries } from "@/lib/queries";
import { siteUrl } from "@/lib/site";

export const dynamic = "force-dynamic";

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const { ev, pe, pl, pr, ca, ci, re } = await sitemapEntries();
  const fixed = ["", "/explore", "/timeline", "/periods", "/connections", "/about", "/search"].map((p) => ({ url: `${siteUrl}${p}`, changeFrequency: "weekly" as const, priority: p === "" ? 1 : 0.7 }));
  return [
    ...fixed,
    ...ev.map((e) => ({ url: `${siteUrl}/event/${e.slug}`, lastModified: e.updated, priority: 0.9 })),
    ...pe.map((e) => ({ url: `${siteUrl}/person/${e.slug}`, lastModified: e.updated, priority: 0.6 })),
    ...pl.map((e) => ({ url: `${siteUrl}/place/${e.slug}`, lastModified: e.updated, priority: 0.5 })),
    ...pr.map((e) => ({ url: `${siteUrl}/period/${e.slug}`, priority: 0.6 })),
    ...ca.map((e) => ({ url: `${siteUrl}/category/${e.slug}`, priority: 0.5 })),
    ...ci.map((e) => ({ url: `${siteUrl}/civilization/${e.slug}`, priority: 0.6 })),
    ...re.map((e) => ({ url: `${siteUrl}/region/${e.slug}`, priority: 0.5 })),
  ];
}
