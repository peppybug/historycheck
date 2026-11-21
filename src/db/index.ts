import { drizzle } from "drizzle-orm/postgres-js";
import postgres from "postgres";
import * as schema from "./schema";

const globalForDb = globalThis as unknown as { pg?: ReturnType<typeof postgres> };

function client() {
  const url = process.env.DATABASE_URL;
  if (!url) throw new Error("DATABASE_URL is not set. See README → Environment variables.");
  return postgres(url, { max: 10, idle_timeout: 20, prepare: false });
}

// Reuse one pool across hot reloads in development.
const sqlClient = globalForDb.pg ?? client();
if (process.env.NODE_ENV !== "production") globalForDb.pg = sqlClient;

export const db = drizzle(sqlClient, { schema });
export { schema };
