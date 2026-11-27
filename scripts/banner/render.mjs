// Renders the Historycheck banner in several sizes: node scripts/banner/render.mjs
import { createRequire } from "node:module";
import { mkdirSync } from "node:fs";
import { dirname, join } from "node:path";
import { fileURLToPath, pathToFileURL } from "node:url";

// Playwright is pre-installed globally here; resolve it through require.
const { chromium } = createRequire(import.meta.url)("playwright");
const here = dirname(fileURLToPath(import.meta.url));
const out = join(here, "..", "..", "public", "brand");
mkdirSync(out, { recursive: true });

const sizes = [
  { name: "banner-1500x500", w: 1500, h: 500 }, // X/Twitter header, README
  { name: "banner-1584x396", w: 1584, h: 396 }, // LinkedIn cover
  // Link previews must match their declared size exactly (og:image:width/height) and stay small for WhatsApp.
  { name: "og-1200x630", w: 1200, h: 630, scale: 1 }, // link previews (Open Graph)
  { name: "social-1280x640", w: 1280, h: 640, scale: 1 }, // GitHub social preview
];

const browser = await chromium.launch();
for (const s of sizes) {
  for (const theme of ["light", "dark"]) {
    const page = await browser.newPage({ viewport: { width: s.w, height: s.h }, deviceScaleFactor: s.scale ?? 2 });
    await page.goto(`${pathToFileURL(join(here, "banner.html"))}?w=${s.w}&h=${s.h}&theme=${theme}`);
    await page.waitForSelector("body[data-ready]");
    const file = join(out, `${s.name}${theme === "dark" ? "-dark" : ""}.png`);
    await page.screenshot({ path: file });
    console.log(file);
    await page.close();
  }
}
await browser.close();
