import Link from "next/link";
import { withBase } from "@/lib/base-path";
import { MAP_H as H, MAP_W as W, projection } from "@/lib/world-geometry";

export interface MapPoint {
  slug: string;
  name: string;
  lat: number;
  lng: number;
  weight?: number;
}

/**
 * Static world map rendered on the server (Natural Earth 1:110m land,
 * Equal Earth projection). Points link to place pages. No tiles, no
 * third-party requests, works without JavaScript.
 */
export function WorldMap({
  points,
  highlight,
  label,
  showLabels = false,
  zoomTo,
}: {
  points: MapPoint[];
  highlight?: string[];
  label: string;
  showLabels?: boolean;
  /** Crop the view to these points (with padding). */
  zoomTo?: MapPoint[];
}) {
  let viewBox = `0 0 ${W} ${H}`;
  if (zoomTo?.length) {
    const xy = zoomTo.map((p) => projection([p.lng, p.lat])!).filter(Boolean);
    const xs = xy.map((p) => p[0]);
    const ys = xy.map((p) => p[1]);
    const pad = 70;
    let x0 = Math.min(...xs) - pad,
      x1 = Math.max(...xs) + pad,
      y0 = Math.min(...ys) - pad,
      y1 = Math.max(...ys) + pad;
    // keep a pleasant aspect ratio and a minimum zoom extent
    const minW = 320;
    if (x1 - x0 < minW) {
      const c = (x0 + x1) / 2;
      x0 = c - minW / 2;
      x1 = c + minW / 2;
    }
    const wantH = (x1 - x0) * 0.56;
    if (y1 - y0 < wantH) {
      const c = (y0 + y1) / 2;
      y0 = c - wantH / 2;
      y1 = c + wantH / 2;
    }
    viewBox = `${Math.max(0, x0)} ${Math.max(0, y0)} ${Math.min(W, x1 - x0)} ${Math.min(H, y1 - y0)}`;
  }
  const maxW = Math.max(1, ...points.map((p) => p.weight ?? 1));
  const scale = zoomTo?.length ? 0.55 : 1;
  return (
    <figure className="overflow-hidden rounded-sm border border-line bg-surface">
      <svg viewBox={viewBox} role="img" aria-label={label} className="block h-auto w-full">
        <use href={withBase("/data/world.svg#sphere")} fill="var(--sunken)" />
        <use href={withBase("/data/world.svg#land")} fill="var(--paper)" stroke="var(--line-strong)" strokeWidth={0.6 * scale} />
        {points.map((p) => {
          const xy = projection([p.lng, p.lat]);
          if (!xy) return null;
          const hl = highlight?.includes(p.slug);
          const r = (2.6 + 4.5 * Math.sqrt((p.weight ?? 1) / maxW)) * scale * (hl ? 1.3 : 1);
          return (
            <Link key={p.slug} href={`/place/${p.slug}`} aria-label={p.name}>
              <g className="group">
                <circle cx={xy[0]} cy={xy[1]} r={r + 6 * scale} fill="transparent" />
                <circle
                  cx={xy[0]}
                  cy={xy[1]}
                  r={r}
                  fill={hl || !highlight ? "var(--thread)" : "var(--ink-2)"}
                  fillOpacity={hl || !highlight ? 0.85 : 0.45}
                  stroke="var(--surface)"
                  strokeWidth={1 * scale}
                  className="transition-[fill-opacity] group-hover:fill-opacity-100"
                />
                {showLabels || hl ? (
                  <text
                    x={xy[0] + r + 4 * scale}
                    y={xy[1] + 4 * scale}
                    fontSize={12 * scale}
                    fill="var(--ink)"
                    stroke="var(--surface)"
                    strokeWidth={3 * scale}
                    paintOrder="stroke"
                    className="font-sans"
                  >
                    {p.name}
                  </text>
                ) : (
                  <title>{p.name}</title>
                )}
              </g>
            </Link>
          );
        })}
      </svg>
      <figcaption className="border-t border-line px-3 py-2 text-xs text-muted">
        Land outlines: Natural Earth (public domain). Coordinates from Wikidata.
      </figcaption>
    </figure>
  );
}
