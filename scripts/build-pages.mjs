/**
 * Static build for GitHub Pages.
 *
 * GitHub Pages cannot run server code, so the routes that need a server
 * (the /admin workspace and its auth middleware) are moved aside for the
 * duration of the build and restored afterwards, even if the build fails.
 * Output: ./out (with .nojekyll so Pages serves the _next/ folder).
 */
import { spawnSync } from "node:child_process";
import { existsSync, mkdirSync, renameSync, rmSync, writeFileSync } from "node:fs";
import { join } from "node:path";

const root = process.cwd();
const stash = join(root, ".static-stash");
const serverOnly = ["src/app/admin", "src/components/admin", "src/middleware.ts"];

if (existsSync(stash)) {
  console.error("A previous static build left .static-stash behind. Restore its contents into src/ and delete it, then retry.");
  process.exit(1);
}
mkdirSync(stash);
const moved = [];
let status = 1;
try {
  for (const rel of serverOnly) {
    const from = join(root, rel);
    if (!existsSync(from)) continue;
    const to = join(stash, rel.replace(/\//g, "__"));
    renameSync(from, to);
    moved.push([from, to]);
  }
  rmSync(join(root, ".next"), { recursive: true, force: true });
  const r = spawnSync("npx", ["next", "build"], { stdio: "inherit", env: { ...process.env, STATIC_EXPORT: "1" } });
  status = r.status ?? 1;
  if (status === 0) writeFileSync(join(root, "out", ".nojekyll"), "");
} finally {
  for (const [from, to] of moved.reverse()) renameSync(to, from);
  rmSync(stash, { recursive: true, force: true });
}
process.exit(status);
