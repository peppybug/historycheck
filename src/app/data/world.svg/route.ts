import { MAP_H, MAP_W, worldPaths } from "@/lib/world-geometry";

/**
 * Land outlines (Natural Earth 1:110m, public domain) served once as a cached
 * static file. Map components reference #land and #sphere with <use>, so the
 * geometry isn't repeated in every page and fills still follow the theme.
 */
export const dynamic = "force-static";

export function GET() {
  const { land, sphere } = worldPaths();
  const svg = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 ${MAP_W} ${MAP_H}"><defs><path id="sphere" d="${sphere}"/><path id="land" d="${land}"/></defs></svg>`;
  return new Response(svg, { headers: { "Content-Type": "image/svg+xml", "Cache-Control": "public, max-age=86400" } });
}
