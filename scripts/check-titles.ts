// Checks that every Wikipedia anchor (events, people, places, civilizations)
// resolves to a real, non-disambiguation article with a Wikidata item,
// and that every person/place slug used by an event is registered.
import { allEvents } from "../content/events";
import { peopleRegistry } from "../content/people";
import { placesRegistry } from "../content/places";
import { civilizations } from "../content/taxonomy";
const UA = "HistorycheckBot/1.0 (educational history database; https://github.com/peppybug/historycheck)";

async function check(label: string, titles: string[]) {
  let bad = 0;
  for (let i = 0; i < titles.length; i += 45) {
    const batch = titles.slice(i, i + 45);
    const url = `https://en.wikipedia.org/w/api.php?action=query&format=json&redirects=1&prop=pageprops&titles=${encodeURIComponent(batch.join("|"))}`;
    const j = await (await fetch(url, { headers: { "User-Agent": UA } })).json();
    for (const p of Object.values<any>(j.query.pages)) {
      if (p.missing !== undefined || !p.pageprops?.wikibase_item) { bad++; console.log(`[${label}] MISSING:`, p.title); }
      else if (p.pageprops.disambiguation !== undefined) { bad++; console.log(`[${label}] DISAMBIG:`, p.title); }
    }
    for (const r of j.query.redirects ?? []) console.log(`[${label}] redirect: ${r.from} -> ${r.to}${r.tofragment ? "#" + r.tofragment : ""}`);
  }
  console.log(`[${label}] checked ${titles.length}, problems ${bad}`);
}

async function main() {
  const usedPeople = new Set(allEvents.flatMap((e) => (e.people ?? []).map(([s]) => s)));
  const usedPlaces = new Set(allEvents.flatMap((e) => e.places ?? []));
  for (const s of usedPeople) if (!peopleRegistry[s]) console.log("UNREGISTERED PERSON", s);
  for (const s of usedPlaces) if (!placesRegistry[s]) console.log("UNREGISTERED PLACE", s);
  const pw = (r: any) => (typeof r === "string" ? r : r.wiki);
  await check("events", [...new Set(allEvents.map((e) => e.wiki))]);
  await check("people", [...new Set(Object.values(peopleRegistry).map(pw))]);
  await check("places", [...new Set(Object.values(placesRegistry).map((p) => p.wiki))]);
  await check("civs", civilizations.map((c) => c.wiki));
}
main();
