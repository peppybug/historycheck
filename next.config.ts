import type { NextConfig } from "next";

/**
 * Two build modes:
 *  - default: Node server (`next start`) with the /admin editorial workspace.
 *  - STATIC_EXPORT=1: fully static site for GitHub Pages (see scripts/build-pages.mjs).
 *    Every page is pre-rendered from the database at build time and the site
 *    is served under NEXT_PUBLIC_BASE_PATH (e.g. /historycheck).
 */
const isStatic = process.env.STATIC_EXPORT === "1";
const basePath = process.env.NEXT_PUBLIC_BASE_PATH || "";

const securityHeaders = [
  { key: "X-Content-Type-Options", value: "nosniff" },
  { key: "Referrer-Policy", value: "strict-origin-when-cross-origin" },
  { key: "X-Frame-Options", value: "SAMEORIGIN" },
  { key: "Permissions-Policy", value: "camera=(), microphone=(), geolocation=()" },
];

const nextConfig: NextConfig = {
  poweredByHeader: false,
  basePath: basePath || undefined,
  ...(isStatic
    ? { output: "export", trailingSlash: true, images: { unoptimized: true } }
    : {
        async headers() {
          return [{ source: "/:path*", headers: securityHeaders }];
        },
      }),
};

export default nextConfig;
