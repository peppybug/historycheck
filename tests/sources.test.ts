import assert from "node:assert/strict";
import { test } from "node:test";
import { classifySource } from "../scripts/lib/source-allowlist";

test("reputable institutions are classified", () => {
  assert.equal(classifySource("https://avalon.law.yale.edu/18th_century/declare.asp")?.type, "primary_document");
  assert.equal(classifySource("https://www.britannica.com/event/Battle-of-Hastings")?.publisher, "Encyclopaedia Britannica");
  assert.equal(classifySource("https://history.nasa.gov/ap11ann/introduction.htm")?.publisher, "NASA");
  assert.equal(classifySource("https://www.history.ac.uk/x")?.type, "academic");
});

test("mirrors, aggregators and homepages are rejected", () => {
  assert.equal(classifySource("https://web.archive.org/web/2010/http://nasa.gov/x"), null);
  assert.equal(classifySource("https://books.google.com/books?id=1"), null);
  assert.equal(classifySource("https://www.nasa.gov/"), null);
  assert.equal(classifySource("https://example.com/history"), null);
  assert.equal(classifySource("https://www.loc.gov/file.pdf"), null);
});
