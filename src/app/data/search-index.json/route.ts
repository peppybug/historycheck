import { buildSearchIndex } from "@/lib/search-index";

/** Search index generated from the database at build time (/data/search-index.json). */
export const dynamic = "force-static";

export async function GET() {
  return Response.json(await buildSearchIndex());
}
