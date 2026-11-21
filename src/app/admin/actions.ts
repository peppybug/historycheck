"use server";

import { and, eq, sql } from "drizzle-orm";
import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";
import { z } from "zod";
import { db } from "@/db";
import * as s from "@/db/schema";
import { checkPassword, endSession, requireAdmin } from "@/lib/admin-auth";
import { checkLink, fetchCommonsImage, fetchWikiSubject, type CommonsImage } from "@/lib/wikimedia";
import { parseDate, sortKey } from "../../../content/types";

export type FormState = { ok?: boolean; message?: string; errors?: Record<string, string>; values?: Record<string, string> } | null;

/* ------------------------------------------------------------------ */
/* Session                                                             */
/* ------------------------------------------------------------------ */

export async function loginAction(_: FormState, form: FormData): Promise<FormState> {
  const password = String(form.get("password") ?? "");
  const next = String(form.get("next") ?? "/admin");
  if (!password) return { errors: { password: "Enter the editor password." } };
  const r = await checkPassword(password);
  if (!r.ok) return { message: r.error };
  redirect(next.startsWith("/admin") ? next : "/admin");
}

export async function logoutAction() {
  await endSession();
  redirect("/admin/login");
}

/* ------------------------------------------------------------------ */
/* Events                                                              */
/* ------------------------------------------------------------------ */

const dateString = z
  .string()
  .trim()
  .refine((v) => {
    try {
      parseDate(v);
      return true;
    } catch {
      return false;
    }
  }, "Use a date like 1989-11-09, 1989-11, 1989, -44-03-15 (BCE), ~-2560 (approximate), D1950 (decade) or C5 (century).");

const lines = (v: string) => v.split("\n").map((l) => l.trim()).filter(Boolean);

const eventSchema = z.object({
  id: z.coerce.number().int().optional(),
  slug: z.string().trim().regex(/^[a-z0-9]+(?:-[a-z0-9]+)*$/, "Lowercase letters, numbers and hyphens only.").max(100),
  title: z.string().trim().min(3, "Give the event a title.").max(200),
  altNames: z.string().max(500).transform((v) => v.split(",").map((x) => x.trim()).filter(Boolean)),
  summary: z.string().trim().min(20, "Write a one- or two-sentence summary (at least 20 characters).").max(600),
  overview: z.string().trim().min(20, "The overview is too short.").max(4000),
  context: z.string().trim().min(20, "Describe the historical context.").max(6000),
  narrative: z.string().trim().min(20, "Describe what happened.").max(12000),
  causes: z.string().transform(lines).pipe(z.array(z.string().max(400)).min(1, "List at least one cause, one per line.")),
  consequences: z.string().transform(lines).pipe(z.array(z.string().max(400)).min(1, "List at least one consequence, one per line.")),
  keywords: z.string().max(500).transform((v) => v.split(",").map((x) => x.trim()).filter(Boolean)),
  date: dateString,
  end: z.union([z.literal(""), dateString]),
  dateNote: z.string().trim().max(500),
  locationLabel: z.string().trim().min(2, "Where did it happen?").max(200),
  periodId: z.coerce.number().int().positive("Choose a period."),
  categoryId: z.coerce.number().int().positive("Choose a category."),
  regionId: z.coerce.number().int().positive("Choose a region."),
  status: z.enum(["draft", "in_review", "published"]),
  verification: z.enum(["verified", "partial", "unverified"]),
  reviewNotes: z.string().max(4000),
  wikidataId: z.union([z.literal(""), z.string().regex(/^Q\d+$/, "A Wikidata ID looks like Q12345.")]),
  wikipediaTitle: z.string().trim().max(200),
  isFeatured: z.boolean(),
  isDiscovery: z.boolean(),
  milestones: z.string().max(8000),
});

function parseMilestones(raw: string) {
  const out: { year: number; month: number | null; day: number | null; precision: s.Event["datePrecision"]; label: string; description: string | null }[] = [];
  const errors: string[] = [];
  lines(raw).forEach((line, i) => {
    const [d, label, desc] = line.split("|").map((x) => x.trim());
    try {
      if (!label) throw new Error("missing label");
      const p = parseDate(d);
      out.push({ ...p, label, description: desc || null });
    } catch {
      errors.push(`Line ${i + 1}: use “date | label | optional description”.`);
    }
  });
  return { out, errors };
}

export async function saveEventAction(_: FormState, form: FormData): Promise<FormState> {
  await requireAdmin();
  const raw = Object.fromEntries(form);
  // Echo the submission back on errors: React resets forms after an action.
  const values = Object.fromEntries(Object.entries(raw).map(([k, v]) => [k, String(v)]));
  const parsed = eventSchema.safeParse({ ...raw, isFeatured: form.get("isFeatured") === "on", isDiscovery: form.get("isDiscovery") === "on" });
  if (!parsed.success) {
    const errors: Record<string, string> = {};
    for (const i of parsed.error.issues) errors[String(i.path[0])] ??= i.message;
    return { errors, values, message: "Some fields need attention." };
  }
  const v = parsed.data;
  const ms = parseMilestones(v.milestones);
  if (ms.errors.length) return { errors: { milestones: ms.errors.join(" ") }, values, message: "Some fields need attention." };
  const start = parseDate(v.date);
  const end = v.end ? parseDate(v.end) : null;
  if (end && end.year < start.year) return { errors: { end: "The end date is before the start date." }, values, message: "Some fields need attention." };

  const dup = await db.select({ id: s.events.id }).from(s.events).where(eq(s.events.slug, v.slug));
  if (dup.length && dup[0].id !== v.id) return { errors: { slug: "Another event already uses this URL slug." }, values, message: "Some fields need attention." };

  const row = {
    slug: v.slug,
    title: v.title,
    altNames: v.altNames,
    summary: v.summary,
    overview: v.overview,
    context: v.context,
    narrative: v.narrative,
    causes: v.causes,
    consequences: v.consequences,
    keywords: v.keywords,
    startYear: start.year,
    startMonth: start.month,
    startDay: start.day,
    endYear: end?.year ?? null,
    endMonth: end?.month ?? null,
    endDay: end?.day ?? null,
    datePrecision: start.precision,
    sortKey: sortKey(start),
    dateNote: v.dateNote || null,
    locationLabel: v.locationLabel,
    periodId: v.periodId,
    categoryId: v.categoryId,
    regionId: v.regionId,
    status: v.status,
    verification: v.verification,
    reviewNotes: v.reviewNotes || null,
    wikidataId: v.wikidataId || null,
    wikipediaTitle: v.wikipediaTitle || null,
    isFeatured: v.isFeatured,
    isDiscovery: v.isDiscovery,
  };

  let id = v.id;
  await db.transaction(async (tx) => {
    if (id) await tx.update(s.events).set(row).where(eq(s.events.id, id));
    else id = (await tx.insert(s.events).values(row).returning({ id: s.events.id }))[0].id;
    await tx.delete(s.eventMilestones).where(eq(s.eventMilestones.eventId, id!));
    if (ms.out.length) await tx.insert(s.eventMilestones).values(ms.out.map((m, i) => ({ ...m, eventId: id!, sort: i })));
  });
  revalidatePath("/", "layout");
  if (!v.id) redirect(`/admin/events/${id}?created=1`);
  return { ok: true, message: v.status === "published" ? "Saved and published." : "Saved. This event is not public until it is published." };
}

export async function setEventStatusAction(form: FormData) {
  await requireAdmin();
  const id = z.coerce.number().int().parse(form.get("id"));
  const status = z.enum(["draft", "in_review", "published"]).parse(form.get("status"));
  await db.update(s.events).set({ status }).where(eq(s.events.id, id));
  revalidatePath("/", "layout");
}

export async function deleteEventAction(form: FormData) {
  await requireAdmin();
  const id = z.coerce.number().int().parse(form.get("id"));
  if (form.get("confirm") !== "delete") redirect(`/admin/events/${id}?error=confirm`);
  await db.delete(s.events).where(eq(s.events.id, id));
  revalidatePath("/", "layout");
  redirect("/admin/events?deleted=1");
}

/* People, places, relations, sources, images linked to an event ------ */

const back = (id: number, msg?: string) => redirect(`/admin/events/${id}${msg ? `?msg=${encodeURIComponent(msg)}` : ""}#links`);

export async function addEventPersonAction(form: FormData) {
  await requireAdmin();
  const eventId = z.coerce.number().int().parse(form.get("eventId"));
  const personId = z.coerce.number().int().safeParse(form.get("personId"));
  const role = z.string().trim().min(2).max(200).safeParse(form.get("role"));
  if (!personId.success || !role.success) return back(eventId, "Choose a person and describe their role.");
  await db.insert(s.eventPeople).values({ eventId, personId: personId.data, role: role.data, sort: 99 }).onConflictDoUpdate({ target: [s.eventPeople.eventId, s.eventPeople.personId], set: { role: role.data } });
  back(eventId, "Person linked.");
}

export async function removeEventPersonAction(form: FormData) {
  await requireAdmin();
  const eventId = z.coerce.number().int().parse(form.get("eventId"));
  const personId = z.coerce.number().int().parse(form.get("personId"));
  await db.delete(s.eventPeople).where(and(eq(s.eventPeople.eventId, eventId), eq(s.eventPeople.personId, personId)));
  back(eventId, "Person removed.");
}

export async function addEventPlaceAction(form: FormData) {
  await requireAdmin();
  const eventId = z.coerce.number().int().parse(form.get("eventId"));
  const placeId = z.coerce.number().int().safeParse(form.get("placeId"));
  if (!placeId.success) return back(eventId, "Choose a place.");
  await db.insert(s.eventPlaces).values({ eventId, placeId: placeId.data, sort: 99 }).onConflictDoNothing();
  back(eventId, "Place linked.");
}

export async function removeEventPlaceAction(form: FormData) {
  await requireAdmin();
  const eventId = z.coerce.number().int().parse(form.get("eventId"));
  const placeId = z.coerce.number().int().parse(form.get("placeId"));
  await db.delete(s.eventPlaces).where(and(eq(s.eventPlaces.eventId, eventId), eq(s.eventPlaces.placeId, placeId)));
  back(eventId, "Place removed.");
}

export async function addRelationAction(form: FormData) {
  await requireAdmin();
  const eventId = z.coerce.number().int().parse(form.get("eventId"));
  const target = z.coerce.number().int().safeParse(form.get("targetId"));
  const type = z.enum(s.relationType.enumValues).safeParse(form.get("type"));
  const direction = form.get("direction") === "in" ? "in" : "out";
  const note = String(form.get("note") ?? "").trim().slice(0, 400) || null;
  if (!target.success || !type.success) return back(eventId, "Choose a relationship type and an event.");
  if (target.data === eventId) return back(eventId, "An event cannot be linked to itself.");
  const [from, to] = direction === "out" ? [eventId, target.data] : [target.data, eventId];
  await db.insert(s.eventRelations).values({ fromEventId: from, toEventId: to, type: type.data, note }).onConflictDoUpdate({
    target: [s.eventRelations.fromEventId, s.eventRelations.toEventId, s.eventRelations.type],
    set: { note },
  });
  back(eventId, "Connection saved.");
}

export async function removeRelationAction(form: FormData) {
  await requireAdmin();
  const eventId = z.coerce.number().int().parse(form.get("eventId"));
  const id = z.coerce.number().int().parse(form.get("relationId"));
  await db.delete(s.eventRelations).where(eq(s.eventRelations.id, id));
  back(eventId, "Connection removed.");
}

export async function addSourceAction(form: FormData) {
  await requireAdmin();
  const eventId = z.coerce.number().int().parse(form.get("eventId"));
  const parsed = z
    .object({
      url: z.string().trim().url(),
      title: z.string().trim().min(3).max(300),
      publisher: z.string().trim().min(2).max(200),
      sourceType: z.enum(s.sourceType.enumValues),
    })
    .safeParse(Object.fromEntries(form));
  if (!parsed.success) return back(eventId, "Enter a valid URL, title, publisher and source type.");
  const status = await checkLink(parsed.data.url);
  if (status === 0 || status >= 400) return back(eventId, `The source could not be reached (HTTP ${status || "no response"}). It was not added.`);
  const [src] = await db
    .insert(s.sources)
    .values({ ...parsed.data, httpStatus: status, lastCheckedAt: new Date() })
    .onConflictDoUpdate({ target: s.sources.url, set: { httpStatus: status, lastCheckedAt: new Date() } })
    .returning({ id: s.sources.id });
  await db.insert(s.eventSources).values({ eventId, sourceId: src.id, note: "Selected by Historycheck editors" }).onConflictDoNothing();
  back(eventId, "Source checked and added.");
}

export async function removeEventSourceAction(form: FormData) {
  await requireAdmin();
  const eventId = z.coerce.number().int().parse(form.get("eventId"));
  const sourceId = z.coerce.number().int().parse(form.get("sourceId"));
  await db.delete(s.eventSources).where(and(eq(s.eventSources.eventId, eventId), eq(s.eventSources.sourceId, sourceId)));
  back(eventId, "Source removed from this event.");
}

async function upsertCommonsImage(img: CommonsImage, entity: string | null) {
  const [row] = await db
    .insert(s.images)
    .values({
      url: img.url,
      thumbUrl: img.thumbUrl,
      thumbWidth: img.thumbWidth,
      thumbHeight: img.thumbHeight,
      smallUrl: img.smallUrl,
      width: img.width,
      height: img.height,
      commonsTitle: img.file,
      caption: img.caption,
      description: img.description,
      creator: img.creator,
      dateText: img.dateText,
      sourceUrl: img.sourceUrl,
      sourceName: "Wikimedia Commons",
      license: img.license,
      licenseUrl: img.licenseUrl,
      attribution: `${[img.creator, img.license].filter(Boolean).join(", ")}, via Wikimedia Commons`,
      attributionRequired: img.attributionRequired,
      mime: img.mime,
      matchMethod: "curated",
      matchedEntity: entity,
      httpStatus: 200,
      verifiedAt: new Date(),
    })
    .onConflictDoUpdate({ target: s.images.url, set: { verifiedAt: new Date(), httpStatus: 200 } })
    .returning({ id: s.images.id });
  return row.id;
}

export async function addEventImageAction(form: FormData) {
  await requireAdmin();
  const eventId = z.coerce.number().int().parse(form.get("eventId"));
  const file = String(form.get("file") ?? "");
  const caption = String(form.get("caption") ?? "").trim().slice(0, 400);
  const asFeatured = form.get("featured") === "on";
  let img: CommonsImage;
  try {
    img = await fetchCommonsImage(file);
  } catch (e) {
    return back(eventId, (e as Error).message);
  }
  const [ev] = await db.select({ title: s.events.title }).from(s.events).where(eq(s.events.id, eventId));
  const imageId = await upsertCommonsImage(img, ev?.title ?? null);
  if (asFeatured) await db.update(s.events).set({ featuredImageId: imageId }).where(eq(s.events.id, eventId));
  else
    await db
      .insert(s.eventImages)
      .values({ eventId, imageId, caption: caption || img.caption, sort: 99 })
      .onConflictDoUpdate({ target: [s.eventImages.eventId, s.eventImages.imageId], set: { caption: caption || img.caption } });
  back(eventId, asFeatured ? "Featured image replaced." : "Image added to the gallery.");
}

export async function setFeaturedImageAction(form: FormData) {
  await requireAdmin();
  const eventId = z.coerce.number().int().parse(form.get("eventId"));
  const imageId = z.coerce.number().int().parse(form.get("imageId"));
  await db.update(s.events).set({ featuredImageId: imageId }).where(eq(s.events.id, eventId));
  back(eventId, "Featured image updated.");
}

export async function removeEventImageAction(form: FormData) {
  await requireAdmin();
  const eventId = z.coerce.number().int().parse(form.get("eventId"));
  const imageId = z.coerce.number().int().parse(form.get("imageId"));
  await db.delete(s.eventImages).where(and(eq(s.eventImages.eventId, eventId), eq(s.eventImages.imageId, imageId)));
  back(eventId, "Image removed from the gallery.");
}

/* ------------------------------------------------------------------ */
/* People and places                                                   */
/* ------------------------------------------------------------------ */

const slugify = (t: string) =>
  t
    .normalize("NFKD")
    .replace(/[̀-ͯ]/g, "")
    .toLowerCase()
    .replace(/\(.*?\)/g, "")
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-|-$/g, "");

export async function createPersonAction(_: FormState, form: FormData): Promise<FormState> {
  await requireAdmin();
  const title = String(form.get("wikipediaTitle") ?? "").trim();
  if (!title) return { errors: { wikipediaTitle: "Enter the exact Wikipedia article title." } };
  let w;
  try {
    w = await fetchWikiSubject(title);
  } catch (e) {
    return { errors: { wikipediaTitle: (e as Error).message } };
  }
  if (!w.isHuman) return { errors: { wikipediaTitle: `Wikidata does not describe “${w.title}” as a person.` } };
  const slug = slugify(w.title);
  if ((await db.select({ id: s.people.id }).from(s.people).where(eq(s.people.slug, slug))).length) return { errors: { wikipediaTitle: "This person is already in the record." } };
  let portraitId: number | null = null;
  const file = w.p18 ?? w.leadImage;
  if (file) {
    try {
      portraitId = await upsertCommonsImage(await fetchCommonsImage(file), w.qid);
    } catch {}
  }
  const [row] = await db
    .insert(s.people)
    .values({
      slug,
      name: w.title.replace(/\s*\(.*\)$/, ""),
      shortDescription: w.shortDescription ? w.shortDescription[0].toUpperCase() + w.shortDescription.slice(1) : "Historical figure",
      biography: w.extract ?? "Biography not yet available.",
      biographySource: w.extract ? `Wikipedia — ${w.title}` : null,
      birthYear: w.birth?.year ?? null,
      birthMonth: w.birth?.month ?? null,
      birthDay: w.birth?.day ?? null,
      birthPrecision: w.birth?.precision ?? null,
      deathYear: w.death?.year ?? null,
      deathMonth: w.death?.month ?? null,
      deathDay: w.death?.day ?? null,
      deathPrecision: w.death?.precision ?? null,
      affiliation: String(form.get("affiliation") ?? "").trim() || null,
      portraitImageId: portraitId,
      wikidataId: w.qid,
      wikipediaTitle: w.title,
      status: "published",
    })
    .returning({ id: s.people.id });
  const [src] = await db
    .insert(s.sources)
    .values({ url: w.url, title: w.title, publisher: "Wikipedia (Wikimedia Foundation)", sourceType: "encyclopedia", httpStatus: 200, lastCheckedAt: new Date() })
    .onConflictDoUpdate({ target: s.sources.url, set: { lastCheckedAt: new Date() } })
    .returning({ id: s.sources.id });
  await db.insert(s.personSources).values({ personId: row.id, sourceId: src.id }).onConflictDoNothing();
  redirect(`/admin/people/${row.id}?created=1`);
}

export async function updatePersonAction(_: FormState, form: FormData): Promise<FormState> {
  await requireAdmin();
  const parsed = z
    .object({
      id: z.coerce.number().int(),
      name: z.string().trim().min(2).max(200),
      shortDescription: z.string().trim().min(3).max(300),
      biography: z.string().trim().min(10).max(5000),
      affiliation: z.string().trim().max(200),
      status: z.enum(["draft", "in_review", "published"]),
    })
    .safeParse(Object.fromEntries(form));
  if (!parsed.success) return { message: "Check the fields: name, description and biography are required." };
  const { id, ...v } = parsed.data;
  await db.update(s.people).set({ ...v, affiliation: v.affiliation || null }).where(eq(s.people.id, id));
  revalidatePath("/", "layout");
  return { ok: true, message: "Person saved." };
}

export async function createPlaceAction(_: FormState, form: FormData): Promise<FormState> {
  await requireAdmin();
  const title = String(form.get("wikipediaTitle") ?? "").trim();
  const regionId = z.coerce.number().int().safeParse(form.get("regionId"));
  if (!title) return { errors: { wikipediaTitle: "Enter the exact Wikipedia article title." } };
  if (!regionId.success) return { errors: { regionId: "Choose a region." } };
  let w;
  try {
    w = await fetchWikiSubject(title);
  } catch (e) {
    return { errors: { wikipediaTitle: (e as Error).message } };
  }
  const slug = slugify(w.title);
  if ((await db.select({ id: s.places.id }).from(s.places).where(eq(s.places.slug, slug))).length) return { errors: { wikipediaTitle: "This place is already in the record." } };
  let imageId: number | null = null;
  const file = w.p18 ?? w.leadImage;
  if (file) {
    try {
      imageId = await upsertCommonsImage(await fetchCommonsImage(file), w.qid);
    } catch {}
  }
  const [row] = await db
    .insert(s.places)
    .values({
      slug,
      name: w.title.replace(/\s*\(.*\)$/, "").replace(/,.*$/, ""),
      description: w.extract ?? w.shortDescription ?? w.title,
      descriptionSource: w.extract ? `Wikipedia — ${w.title}` : null,
      significance: w.shortDescription,
      latitude: w.lat,
      longitude: w.lng,
      regionId: regionId.data,
      imageId,
      wikidataId: w.qid,
      wikipediaTitle: w.title,
      status: "published",
    })
    .returning({ id: s.places.id });
  redirect(`/admin/places/${row.id}?created=1`);
}

export async function updatePlaceAction(_: FormState, form: FormData): Promise<FormState> {
  await requireAdmin();
  const parsed = z
    .object({
      id: z.coerce.number().int(),
      name: z.string().trim().min(2).max(200),
      significance: z.string().trim().max(300),
      description: z.string().trim().min(10).max(5000),
      modernCountry: z.string().trim().max(120),
      latitude: z.union([z.literal(""), z.coerce.number().min(-90).max(90)]),
      longitude: z.union([z.literal(""), z.coerce.number().min(-180).max(180)]),
      status: z.enum(["draft", "in_review", "published"]),
    })
    .safeParse(Object.fromEntries(form));
  if (!parsed.success) return { message: "Check the fields. Latitude must be between −90 and 90, longitude between −180 and 180." };
  const { id, latitude, longitude, ...v } = parsed.data;
  await db
    .update(s.places)
    .set({ ...v, significance: v.significance || null, modernCountry: v.modernCountry || null, latitude: latitude === "" ? null : latitude, longitude: longitude === "" ? null : longitude })
    .where(eq(s.places.id, id));
  revalidatePath("/", "layout");
  return { ok: true, message: "Place saved." };
}

export async function recheckSourceAction(form: FormData) {
  await requireAdmin();
  const id = z.coerce.number().int().parse(form.get("id"));
  const [src] = await db.select().from(s.sources).where(eq(s.sources.id, id));
  if (src) await db.update(s.sources).set({ httpStatus: await checkLink(src.url), lastCheckedAt: new Date() }).where(eq(s.sources.id, id));
  revalidatePath("/admin/sources");
}

export async function recountSearchAction() {
  await requireAdmin();
  // Touch every row so the search triggers rebuild tsvectors after bulk edits.
  await db.execute(sql`UPDATE events SET title = title`);
  revalidatePath("/admin");
}
