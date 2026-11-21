import type { Metadata } from "next";
import { SavedList } from "@/components/stored-events";

export const metadata: Metadata = { title: "Saved events", robots: { index: false } };

export default function SavedPage() {
  return (
    <div className="container-page max-w-4xl pt-10">
      <h1 className="text-3xl">Saved events</h1>
      <p className="mt-3 text-ink-2">Events you saved in this browser.</p>
      <div className="mt-8"><SavedList /></div>
    </div>
  );
}
