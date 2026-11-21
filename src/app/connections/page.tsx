import type { Metadata } from "next";
import { ConnectionsView } from "@/components/connections-view";

export const metadata: Metadata = {
  title: "Historical connections",
  description: "Follow how historical events caused, contributed to and followed one another, with causation clearly separated from sequence.",
  alternates: { canonical: "/connections/" },
};

export default function ConnectionsPage() {
  return <ConnectionsView slug="world-war-i" />;
}
