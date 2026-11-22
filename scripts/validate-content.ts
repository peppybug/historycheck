// Static validation of curated content: references, dates, duplicates.
import { allEvents } from "../content/events";
import { extraRelations } from "../content/relations";
import { parseDate } from "../content/types";
import { periods, categories, regions, civilizations } from "../content/taxonomy";
import { beliefs, deities } from "../content/beliefs";
let errors = 0;
const err = (m: string) => { errors++; console.log("ERROR", m); };
const slugs = new Set<string>();
for (const e of allEvents) { if (slugs.has(e.slug)) err(`duplicate slug ${e.slug}`); slugs.add(e.slug); }
const P = new Set<string>(periods.map(p=>p.slug)), C = new Set<string>(categories.map(c=>c.slug)), R = new Set<string>(regions.map(r=>r.slug)), V = new Set<string>(civilizations.map(c=>c.slug));
const people = new Set<string>(), places = new Set<string>();
for (const e of allEvents) {
  if (!P.has(e.period)) err(`${e.slug}: period ${e.period}`);
  if (!C.has(e.category)) err(`${e.slug}: category ${e.category}`);
  if (!R.has(e.region)) err(`${e.slug}: region ${e.region}`);
  e.civ?.forEach(c => V.has(c) || err(`${e.slug}: civ ${c}`));
  try { const s = parseDate(e.date); if (e.end) { const en = parseDate(e.end); if (en.year < s.year) err(`${e.slug}: end before start`);} e.timeline.forEach(t=>parseDate(t[0])); } catch (x) { err(`${e.slug}: ${(x as Error).message}`); }
  e.relations?.forEach(([, t]) => slugs.has(t) || err(`${e.slug}: relation target ${t} missing`));
  e.people?.forEach(([p]) => people.add(p));
  e.places?.forEach(p => places.add(p));
  if (e.causes.length < 1 || e.consequences.length < 1) err(`${e.slug}: causes/consequences`);
}
for (const [a, , b] of extraRelations) { if (!slugs.has(a)) err(`relations.ts: ${a}`); if (!slugs.has(b)) err(`relations.ts: ${b}`); }
const B = new Set(beliefs.map((b) => b.slug));
if (B.size !== beliefs.length) err("beliefs: duplicate slug");
for (const b of beliefs) {
  if (!R.has(b.region)) err(`belief ${b.slug}: region ${b.region}`);
  if (b.parent && !B.has(b.parent)) err(`belief ${b.slug}: parent ${b.parent}`);
  b.events.forEach((x) => slugs.has(x) || err(`belief ${b.slug}: event ${x} missing`));
}
const D = new Set(deities.map((d) => d.slug));
if (D.size !== deities.length) err("deities: duplicate slug");
for (const d of deities) {
  if (!B.has(d.belief)) err(`deity ${d.slug}: belief ${d.belief}`);
  d.events?.forEach((x) => slugs.has(x) || err(`deity ${d.slug}: event ${x} missing`));
}
console.log(`events=${allEvents.length} beliefs=${beliefs.length} deities=${deities.length} people=${people.size} places=${places.size} errors=${errors}`);
if (process.argv.includes("--list")) { console.log("PEOPLE", [...people].sort().join(" ")); console.log("PLACES", [...places].sort().join(" ")); }
process.exit(errors ? 1 : 0);
