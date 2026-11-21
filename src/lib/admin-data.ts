import "server-only";
import { asc } from "drizzle-orm";
import { db } from "@/db";
import * as s from "@/db/schema";

export async function taxonomyOptions() {
  const [periods, categories, regions] = await Promise.all([
    db.select({ id: s.periods.id, name: s.periods.name }).from(s.periods).orderBy(asc(s.periods.sortOrder)),
    db.select({ id: s.categories.id, name: s.categories.name }).from(s.categories).orderBy(asc(s.categories.name)),
    db.select({ id: s.regions.id, name: s.regions.name }).from(s.regions).orderBy(asc(s.regions.id)),
  ]);
  return { periods, categories, regions };
}

export function toDateString(y: number | null, m: number | null, d: number | null, p: string | null): string {
  if (y == null) return "";
  if (p === "approximate") return `~${y}`;
  if (p === "decade") return `D${y}`;
  if (p === "century") return `C${y > 0 ? Math.floor((y - 1) / 100) + 1 : Math.floor(y / 100)}`;
  const mm = m ? `-${String(m).padStart(2, "0")}` : "";
  const dd = m && d ? `-${String(d).padStart(2, "0")}` : "";
  return `${y}${mm}${dd}`;
}
