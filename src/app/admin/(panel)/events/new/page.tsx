import { EventForm } from "@/components/admin/event-form";
import { taxonomyOptions } from "@/lib/admin-data";

export const metadata = { title: "New event" };

export default async function NewEvent() {
  const opts = await taxonomyOptions();
  return (
    <div>
      <h1 className="text-2xl">New event</h1>
      <p className="mt-1 text-sm text-ink-2">New events start as drafts. Add people, places, sources and images after the first save.</p>
      <div className="mt-6">
        <EventForm
          {...opts}
          initial={{
            slug: "", title: "", altNames: "", summary: "", overview: "", context: "", narrative: "", causes: "", consequences: "", keywords: "",
            date: "", end: "", dateNote: "", locationLabel: "", periodId: "", categoryId: "", regionId: "", status: "draft", verification: "unverified",
            reviewNotes: "", wikidataId: "", wikipediaTitle: "", isFeatured: false, isDiscovery: false, milestones: "",
          }}
        />
      </div>
    </div>
  );
}
