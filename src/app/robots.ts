import type { MetadataRoute } from "next";
import { basePath } from "@/lib/base-path";
import { siteUrl } from "@/lib/site";

export const dynamic = "force-static";

export default function robots(): MetadataRoute.Robots {
  const isStatic = process.env.STATIC_EXPORT === "1";
  const disallow = (isStatic ? ["/saved", "/random"] : ["/admin", "/saved", "/random"]).map((p) => basePath + p);
  return { rules: [{ userAgent: "*", allow: `${basePath}/`, disallow }], sitemap: `${siteUrl}/sitemap.xml` };
}
