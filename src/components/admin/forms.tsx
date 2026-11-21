"use client";

import { useActionState } from "react";
import { createPersonAction, createPlaceAction, updatePersonAction, updatePlaceAction, type FormState } from "@/app/admin/actions";

const input = "mt-1 w-full rounded-sm border border-line-strong bg-surface px-2.5 py-2 text-base";

function Status({ state }: { state: FormState }) {
  return <p role="status" aria-live="polite" className={`text-sm ${state?.ok ? "text-verified" : "text-thread-ink"}`}>{state?.message ?? ""}</p>;
}

export function CreatePersonForm() {
  const [state, action, pending] = useActionState(createPersonAction, null);
  return (
    <form action={action} className="grid gap-3 rounded-sm border border-line bg-surface p-5 md:grid-cols-[2fr_1.4fr_auto] md:items-end">
      <div>
        <label htmlFor="pw" className="text-sm font-semibold">Wikipedia article title</label>
        <input id="pw" name="wikipediaTitle" placeholder="e.g. Hatshepsut" className={input} aria-describedby="pw-e" />
        <p id="pw-e" className="text-sm text-thread-ink">{state?.errors?.wikipediaTitle ?? ""}</p>
      </div>
      <div>
        <label htmlFor="pa" className="text-sm font-semibold">Associated with (optional)</label>
        <input id="pa" name="affiliation" placeholder="e.g. Ancient Egypt" className={input} />
        <p className="text-sm">&nbsp;</p>
      </div>
      <div>
        <button disabled={pending} className="rounded-sm bg-ink px-4 py-2 font-medium text-paper hover:bg-thread disabled:opacity-60">{pending ? "Importing…" : "Import person"}</button>
        <p className="text-sm">&nbsp;</p>
      </div>
      <p className="text-xs text-muted md:col-span-3">Dates, portrait and a short biography are imported from Wikidata, Wikipedia and Commons, then can be edited.</p>
    </form>
  );
}

export function CreatePlaceForm({ regions }: { regions: { id: number; name: string }[] }) {
  const [state, action, pending] = useActionState(createPlaceAction, null);
  return (
    <form action={action} className="grid gap-3 rounded-sm border border-line bg-surface p-5 md:grid-cols-[2fr_1.4fr_auto] md:items-end">
      <div>
        <label htmlFor="plw" className="text-sm font-semibold">Wikipedia article title</label>
        <input id="plw" name="wikipediaTitle" placeholder="e.g. Great Zimbabwe" className={input} />
        <p className="text-sm text-thread-ink">{state?.errors?.wikipediaTitle ?? ""}</p>
      </div>
      <div>
        <label htmlFor="plr" className="text-sm font-semibold">Region</label>
        <select id="plr" name="regionId" className={input} defaultValue=""><option value="" disabled>Choose…</option>{regions.map((r) => <option key={r.id} value={r.id}>{r.name}</option>)}</select>
        <p className="text-sm text-thread-ink">{state?.errors?.regionId ?? ""}</p>
      </div>
      <div>
        <button disabled={pending} className="rounded-sm bg-ink px-4 py-2 font-medium text-paper hover:bg-thread disabled:opacity-60">{pending ? "Importing…" : "Import place"}</button>
        <p className="text-sm">&nbsp;</p>
      </div>
    </form>
  );
}

export function PersonEditForm({ p }: { p: { id: number; name: string; shortDescription: string; biography: string; affiliation: string | null; status: string } }) {
  const [state, action, pending] = useActionState(updatePersonAction, null);
  return (
    <form action={action} className="grid gap-4">
      <input type="hidden" name="id" value={p.id} />
      <div className="grid gap-4 md:grid-cols-2">
        <div><label htmlFor="n" className="text-sm font-semibold">Name</label><input id="n" name="name" defaultValue={p.name} className={input} /></div>
        <div><label htmlFor="a" className="text-sm font-semibold">Associated with</label><input id="a" name="affiliation" defaultValue={p.affiliation ?? ""} className={input} /></div>
      </div>
      <div><label htmlFor="d" className="text-sm font-semibold">Short description</label><input id="d" name="shortDescription" defaultValue={p.shortDescription} className={input} /></div>
      <div><label htmlFor="b" className="text-sm font-semibold">Biography</label><textarea id="b" name="biography" defaultValue={p.biography} rows={6} className={input} /></div>
      <div>
        <label htmlFor="st" className="text-sm font-semibold">Status</label>
        <select id="st" name="status" defaultValue={p.status} className={`${input} max-w-xs`}><option value="published">Published</option><option value="in_review">In review</option><option value="draft">Draft</option></select>
      </div>
      <div className="flex items-center gap-4"><button disabled={pending} className="rounded-sm bg-ink px-4 py-2 font-medium text-paper hover:bg-thread disabled:opacity-60">Save</button><Status state={state} /></div>
    </form>
  );
}

export function PlaceEditForm({ p }: { p: { id: number; name: string; significance: string | null; description: string; modernCountry: string | null; latitude: number | null; longitude: number | null; status: string } }) {
  const [state, action, pending] = useActionState(updatePlaceAction, null);
  return (
    <form action={action} className="grid gap-4">
      <input type="hidden" name="id" value={p.id} />
      <div className="grid gap-4 md:grid-cols-2">
        <div><label htmlFor="n" className="text-sm font-semibold">Name</label><input id="n" name="name" defaultValue={p.name} className={input} /></div>
        <div><label htmlFor="c" className="text-sm font-semibold">Modern country</label><input id="c" name="modernCountry" defaultValue={p.modernCountry ?? ""} className={input} /></div>
      </div>
      <div><label htmlFor="sg" className="text-sm font-semibold">Significance</label><input id="sg" name="significance" defaultValue={p.significance ?? ""} className={input} /></div>
      <div><label htmlFor="d" className="text-sm font-semibold">Description</label><textarea id="d" name="description" defaultValue={p.description} rows={5} className={input} /></div>
      <div className="grid gap-4 md:grid-cols-3">
        <div><label htmlFor="lat" className="text-sm font-semibold">Latitude</label><input id="lat" name="latitude" inputMode="decimal" defaultValue={p.latitude ?? ""} className={input} /></div>
        <div><label htmlFor="lng" className="text-sm font-semibold">Longitude</label><input id="lng" name="longitude" inputMode="decimal" defaultValue={p.longitude ?? ""} className={input} /></div>
        <div><label htmlFor="st" className="text-sm font-semibold">Status</label><select id="st" name="status" defaultValue={p.status} className={input}><option value="published">Published</option><option value="in_review">In review</option><option value="draft">Draft</option></select></div>
      </div>
      <div className="flex items-center gap-4"><button disabled={pending} className="rounded-sm bg-ink px-4 py-2 font-medium text-paper hover:bg-thread disabled:opacity-60">Save</button><Status state={state} /></div>
    </form>
  );
}
