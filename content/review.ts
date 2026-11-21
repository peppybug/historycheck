/**
 * Editorial review of automated date-check discrepancies.
 *
 * When scripts/enrich.ts finds that an authored date differs from Wikidata,
 * the event is held back (status "in_review") until an editor either fixes
 * the content or records here why the authored date stands. Each note is
 * stored with the event, shown on its public page under "How this record
 * was checked", and the event is published as "partially verified".
 */
export const reviewedDates: Record<string, string> = {
  // Wikidata describes a broader process or a different milestone than this event.
  "indus-valley-cities":
    "Wikidata dates the civilisation as a whole; this record covers its mature urban phase, conventionally c. 2600–1900 BCE. Both are approximate.",
  "justinian-code":
    "The codification commission was appointed in 528; the first Codex was issued in 529 and the work completed in 534. This record dates the published code.",
  "plague-of-justinian":
    "Wikidata's end date (750) covers the whole first plague pandemic with its recurrences; this record covers the initial outbreak of 541–549.",
  "black-death":
    "Scholarly accounts end the main pandemic wave in 1351, 1352 or 1353 depending on the region counted; the difference is one year.",
  "glorious-revolution":
    "William of Orange landed in November 1688; Wikidata dates the revolution from James II's flight in December. Both mark the same events.",
  "eruption-of-tambora":
    "Wikidata dates the start of renewed volcanic activity (1812–1813); this record dates the climactic eruption of 10 April 1815.",
  "decipherment-of-hieroglyphs":
    "Wikidata's item covers centuries of decipherment attempts; this record dates Champollion's announcement of 27 September 1822.",
  "first-opium-war":
    "Wikidata starts the war with Lin Zexu's blockade of foreign traders in March 1839; this record starts with the first armed clash, at Kowloon on 4 September 1839.",
  "italian-unification":
    "Wikidata's item covers the whole Risorgimento from 1815; this record is the proclamation of the Kingdom of Italy on 17 March 1861.",
  "emancipation-proclamation":
    "Lincoln issued a preliminary proclamation on 22 September 1862; this record dates the final proclamation, which took effect on 1 January 1863.",
  "unification-of-germany":
    "Wikidata's item covers the unification process from 1866; this record is the proclamation of the German Empire on 18 January 1871.",
  "antikythera-mechanism-discovery":
    "Wikidata's date (c. 100 BCE) is when the mechanism was made; this record is its recovery from the shipwreck in 1901.",
  "treaty-of-versailles":
    "The treaty was signed on 28 June 1919 and entered into force on 10 January 1920, the date Wikidata records.",
  "founding-of-the-united-nations":
    "The Charter was signed on 26 June 1945 and entered into force on 24 October 1945, the date celebrated as United Nations Day and used here.",
  "maastricht-treaty":
    "The treaty was signed on 7 February 1992 and entered into force, creating the European Union, on 1 November 1993, the date used here.",
  "cold-war":
    "Historians date the start variously from 1945 to 1947 (see the date note). Gorbachev resigned on 25 December 1991; the Soviet Union formally ceased to exist on 26 December.",

  // Calendar conversions and differing conventions for the same moment.
  "siege-of-orleans":
    "The dates 12 October 1428 – 8 May 1429 are in the Julian calendar used at the time; Wikidata's dates are nine days later, matching their Gregorian equivalents.",
  "first-battle-of-panipat":
    "21 April 1526 is the Julian date; 1 May 1526, recorded in Wikidata, is its Gregorian equivalent.",
  "magellan-circumnavigation":
    "The fleet left Seville on 10 August 1519 and sailed from Sanlúcar de Barrameda on 20 September; the Victoria reached Sanlúcar on 6 September 1522 and Seville on 8 September. This record uses the Sanlúcar dates.",
  "haitian-revolution":
    "The Bois Caïman ceremony is traditionally dated 14 August 1791; the uprising itself began on the night of 21–22 August, the date used here.",
  "congress-of-vienna":
    "Delegations gathered and negotiations began in September 1814; the Congress was formally convened on 1 November 1814.",
  "indian-rebellion-of-1857":
    "Major fighting ended with the recapture of Gwalior on 20 June 1858; this record ends with the Crown's proclamation of 1 November 1858, which ended Company rule.",
  "carrington-event":
    "Geomagnetic disturbances began on 28 August 1859 with an earlier solar eruption; Carrington observed the great flare on 1 September, the date used here.",
  "american-civil-war":
    "Lee surrendered at Appomattox on 9 April 1865; the last major Confederate army in the west surrendered on 26 May 1865, the end date used here.",
  "assassination-of-franz-ferdinand":
    "Contemporary sources date the assassination to 28 June 1914 in Sarajevo; Wikidata's entry is one day later.",
  "christmas-truce":
    "The truces began on Christmas Eve and continued through Boxing Day in places; Wikidata records only Christmas Day.",
  "battle-of-the-somme":
    "Sources end the battle on 18 November 1916 (the official end of operations) or 17 November; the difference is one day.",
  "partition-of-india":
    "Pakistan became independent on 14 August and India on 15 August 1947; this record spans both dates.",
  "berlin-blockade":
    "The Soviet authorities cut the land routes during the night of 23–24 June 1948; sources use either date.",
  "cuban-missile-crisis":
    "A U-2 photographed the missile sites on 14 October 1962; President Kennedy was briefed on 16 October, the conventional start of the thirteen-day crisis.",
  "end-of-apartheid":
    "Voting ran from 26 to 29 April 1994. Special voting began on 26 April; general voting took place on 27 April, now Freedom Day.",
  "arab-spring":
    "Mohamed Bouazizi set himself on fire on 17 December 2010; the protests in Sidi Bouzid began the next day.",
};
