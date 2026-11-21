import { geoEqualEarth, geoPath } from "d3-geo";
import type { FeatureCollection } from "geojson";
import { feature } from "topojson-client";
import land110 from "world-atlas/land-110m.json";

/** Shared Equal Earth projection for the static world map. */
export const MAP_W = 960;
export const MAP_H = 470;
export const projection = geoEqualEarth().fitExtent([[8, 8], [MAP_W - 8, MAP_H - 8]], { type: "Sphere" });

export function worldPaths() {
  const path = geoPath(projection).digits(1);
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const land = feature(land110 as any, (land110 as any).objects.land) as unknown as FeatureCollection;
  return { land: path(land) ?? "", sphere: path({ type: "Sphere" }) ?? "" };
}
