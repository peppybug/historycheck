"use client";

import { useActionState } from "react";
import { saveEventAction } from "@/app/admin/actions";

export interface EventFormValues {
  id?: number;
  slug: string;
  title: string;
  altNames: string;
  summary: string;
  overview: string;
  context: string;
  narrative: string;
  causes: string;
  consequences: string;
  keywords: string;
  date: string;
  end: string;
  dateNote: string;
  locationLabel: string;
  periodId: number | "";
  categoryId: number | "";
  regionId: number | "";
  status: "draft" | "in_review" | "published";
  verification: "verified" | "partial" | "unverified";
  reviewNotes: string;
  wikidataId: string;
  wikipediaTitle: string;
  isFeatured: boolean;
  isDiscovery: boolean;
  milestones: string;
}

type Opt = { id: number; name: string };

export function EventForm({ initial, periods, categories, regions }: { initial: EventFormValues; periods: Opt[]; categories: Opt[]; regions: Opt[] }) {
  const [state, action, pending] = useActionState(saveEventAction, null);
  const err = (k: string) => state?.errors?.[k];
  const val = (k: keyof EventFormValues) => (state?.values && k in state.values ? state.values[k] : String(initial[k] ?? ""));
  const checked = (k: "isFeatured" | "isDiscovery") => (state?.values ? state.values[k] === "on" : initial[k]);

  const field = (name: keyof EventFormValues, label: string, opts: { hint?: string; rows?: number; required?: boolean; mono?: boolean } = {}) => {
    const id = `ev-${name}`;
    const e = err(name);
    const common = {
      id,
      name,
      defaultValue: val(name),
      required: opts.required,
      "aria-invalid": !!e,
      "aria-describedby": `${id}-hint ${id}-err`,
      className: `mt-1 w-full rounded-sm border bg-surface px-2.5 py-2 text-base ${e ? "border-thread" : "border-line-strong"}`,
    };
    return (
      <div>
        <label htmlFor={id} className="text-sm font-semibold">{label}</label>
        {opts.rows ? <textarea {...common} rows={opts.rows} /> : <input {...common} />}
        {opts.hint ? <p id={`${id}-hint`} className="mt-1 text-xs text-muted">{opts.hint}</p> : null}
        <p id={`${id}-err`} className="text-sm text-thread-ink" role={e ? "alert" : undefined}>{e ?? ""}</p>
      </div>
    );
  };

  const select = (name: "periodId" | "categoryId" | "regionId", label: string, opts: Opt[]) => (
    <div>
      <label htmlFor={`ev-${name}`} className="text-sm font-semibold">{label}</label>
      <select id={`ev-${name}`} name={name} defaultValue={val(name)} required className="mt-1 w-full rounded-sm border border-line-strong bg-surface px-2.5 py-2 text-base">
        <option value="">Choose…</option>
        {opts.map((o) => <option key={o.id} value={o.id}>{o.name}</option>)}
      </select>
      <p className="text-sm text-thread-ink">{err(name) ?? ""}</p>
    </div>
  );

  return (
    <form action={action} className="grid gap-8" noValidate>
      {initial.id ? <input type="hidden" name="id" value={initial.id} /> : null}

      <fieldset className="grid gap-4 rounded-sm border border-line bg-surface p-5">
        <legend className="px-1 font-sans text-base font-semibold">Identity</legend>
        <div className="grid gap-4 md:grid-cols-2">
          {field("title", "Title", { required: true })}
          {field("slug", "URL slug", { hint: "Appears in /event/your-slug. Lowercase, hyphenated.", required: true })}
        </div>
        {field("altNames", "Alternative names", { hint: "Comma-separated. Used by search." })}
        <div className="grid gap-4 md:grid-cols-2">
          {field("wikipediaTitle", "Wikipedia article title", { hint: "The exact article about this event." })}
          {field("wikidataId", "Wikidata ID", { hint: "For example Q43653." })}
        </div>
      </fieldset>

      <fieldset className="grid gap-4 rounded-sm border border-line bg-surface p-5">
        <legend className="px-1 font-sans text-base font-semibold">When and where</legend>
        <div className="grid gap-4 md:grid-cols-3">
          {field("date", "Start date", { required: true, hint: "1989-11-09 · 1989-11 · 1989 · -44-03-15 (BCE) · ~-2560 (approximate) · D1950 · C5" })}
          {field("end", "End date (optional)")}
          {field("locationLabel", "Location label", { required: true })}
        </div>
        {field("dateNote", "Date note for readers", { hint: "Explain traditional, disputed or calendar-dependent dates." })}
        <div className="grid gap-4 md:grid-cols-3">
          {select("periodId", "Period", periods)}
          {select("categoryId", "Category", categories)}
          {select("regionId", "Region", regions)}
        </div>
      </fieldset>

      <fieldset className="grid gap-4 rounded-sm border border-line bg-surface p-5">
        <legend className="px-1 font-sans text-base font-semibold">Text</legend>
        {field("summary", "Summary", { rows: 3, required: true, hint: "One or two sentences. Shown on cards and in search results." })}
        {field("overview", "Overview", { rows: 4, required: true })}
        {field("context", "Historical context", { rows: 6, required: true, hint: "Separate paragraphs with a blank line." })}
        {field("narrative", "What happened", { rows: 10, required: true, hint: "Separate paragraphs with a blank line." })}
        <div className="grid gap-4 md:grid-cols-2">
          {field("causes", "Causes", { rows: 5, hint: "One per line." })}
          {field("consequences", "Consequences", { rows: 5, hint: "One per line." })}
        </div>
        {field("milestones", "Timeline milestones", { rows: 6, hint: "One per line: date | label | optional description. Example: 1989-11-09 | Wall opens | Crossings overwhelmed." })}
        {field("keywords", "Search keywords", { hint: "Comma-separated." })}
      </fieldset>

      <fieldset className="grid gap-4 rounded-sm border border-line bg-surface p-5">
        <legend className="px-1 font-sans text-base font-semibold">Publication</legend>
        <div className="grid gap-4 md:grid-cols-2">
          <div>
            <label htmlFor="ev-status" className="text-sm font-semibold">Status</label>
            <select id="ev-status" name="status" defaultValue={val("status")} className="mt-1 w-full rounded-sm border border-line-strong bg-surface px-2.5 py-2 text-base">
              <option value="draft">Draft (not public)</option>
              <option value="in_review">In review (not public)</option>
              <option value="published">Published</option>
            </select>
          </div>
          <div>
            <label htmlFor="ev-verification" className="text-sm font-semibold">Verification</label>
            <select id="ev-verification" name="verification" defaultValue={val("verification")} className="mt-1 w-full rounded-sm border border-line-strong bg-surface px-2.5 py-2 text-base">
              <option value="verified">Dates verified</option>
              <option value="partial">Partially verified</option>
              <option value="unverified">Unverified</option>
            </select>
          </div>
        </div>
        {field("reviewNotes", "Review notes", { rows: 3, hint: "Shown on the public page under “How this record was checked”." })}
        <div className="flex flex-wrap gap-6 text-sm">
          <label className="flex items-center gap-2"><input type="checkbox" name="isFeatured" defaultChecked={checked("isFeatured")} className="h-4 w-4" /> Featured on the homepage</label>
          <label className="flex items-center gap-2"><input type="checkbox" name="isDiscovery" defaultChecked={checked("isDiscovery")} className="h-4 w-4" /> Show under “Less familiar chapters”</label>
        </div>
      </fieldset>

      <div className="sticky bottom-0 flex flex-wrap items-center gap-4 border-t border-line bg-paper py-4">
        <button disabled={pending} className="rounded-sm bg-ink px-5 py-2.5 font-medium text-paper hover:bg-thread disabled:opacity-60">
          {pending ? "Saving…" : initial.id ? "Save changes" : "Create event"}
        </button>
        <p role="status" aria-live="polite" className={`text-sm ${state?.ok ? "text-verified" : "text-thread-ink"}`}>{state?.message ?? ""}</p>
      </div>
    </form>
  );
}
