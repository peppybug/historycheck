import assert from "node:assert/strict";
import { test } from "node:test";
import { parseDate, sortKey } from "../content/types";
import { centuryLabel, formatDate, formatRange, parseYearQuery, yearLabel } from "../src/lib/dates";

test("parseDate keeps precision explicit", () => {
  assert.deepEqual(parseDate("1989-11-09"), { year: 1989, month: 11, day: 9, precision: "day" });
  assert.deepEqual(parseDate("-44-03-15"), { year: -44, month: 3, day: 15, precision: "day" });
  assert.deepEqual(parseDate("1917-11"), { year: 1917, month: 11, day: null, precision: "month" });
  assert.equal(parseDate("~-2560").precision, "approximate");
  assert.equal(parseDate("D1780").precision, "decade");
  assert.deepEqual(parseDate("C16"), { year: 1501, month: null, day: null, precision: "century" });
  assert.throws(() => parseDate("0"), /Year zero/);
  assert.throws(() => parseDate("1989-13-01"));
});

test("sortKey orders BCE before CE and days within a year", () => {
  assert.ok(sortKey(parseDate("-44-03-15")) < sortKey(parseDate("79")));
  assert.ok(sortKey(parseDate("1989-11-09")) > sortKey(parseDate("1989-06-04")));
});

test("formatDate never shows more precision than known", () => {
  assert.equal(formatDate({ year: -44, month: 3, day: 15, precision: "day" }), "15 March 44 BCE");
  assert.equal(formatDate({ year: 1066, precision: "year" }), "1066");
  assert.equal(formatDate({ year: 476, month: 9, day: 4, precision: "day" }), "4 September 476 CE");
  assert.equal(formatDate({ year: -2560, precision: "approximate" }), "c. 2560 BCE");
  assert.equal(formatDate({ year: 1780, precision: "decade" }), "1780s");
  assert.equal(centuryLabel(-450), "5th century BCE");
  assert.equal(centuryLabel(1501), "16th century");
});

test("formatRange collapses shared parts", () => {
  assert.equal(formatRange({ year: 1929, month: 10, day: 24, precision: "day" }, { year: 1929, month: 10, day: 29 }), "24–29 October 1929");
  assert.equal(formatRange({ year: -431, precision: "year" }, { year: -404 }), "431 – 404 BCE");
  assert.equal(formatRange({ year: 1914, month: 7, day: 28, precision: "day" }, { year: 1918, month: 11, day: 11 }), "28 July 1914 – 11 November 1918");
  assert.equal(yearLabel({ year: -27 }, null), "27 BCE");
});

test("parseYearQuery understands common forms", () => {
  assert.deepEqual(parseYearQuery("44 BC"), { from: -44, to: -44, label: "44 BCE" });
  assert.deepEqual(parseYearQuery("1989"), { from: 1989, to: 1989, label: "1989" });
  assert.deepEqual(parseYearQuery("1960s"), { from: 1960, to: 1969, label: "1960s" });
  assert.equal(parseYearQuery("15th century")?.from, 1401);
  assert.equal(parseYearQuery("1914-1918")?.to, 1918);
  assert.equal(parseYearQuery("Napoleon"), null);
  assert.equal(parseYearQuery("11"), null, "bare short numbers are not years");
});
