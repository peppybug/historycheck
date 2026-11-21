/**
 * Reputable-source allowlist.
 *
 * External links cited in an event's Wikipedia article are only promoted to
 * Historycheck sources when they point at a recognised museum, archive,
 * library, university, government body or established reference work.
 * Lower rank = preferred.
 */
export interface SourceClass {
  publisher: string;
  type: "encyclopedia" | "museum" | "archive" | "library" | "government" | "academic" | "primary_document" | "database" | "institution";
  rank: number;
  domain: string;
  /** Host is known to reject automated link checks (403) even though links are valid. */
  blocksBots?: boolean;
}

type Rule = [RegExp, Omit<SourceClass, "domain">];

const RULES: Rule[] = [
  [/(^|\.)avalon\.law\.yale\.edu$/, { publisher: "Avalon Project, Yale Law School", type: "primary_document", rank: 1 }],
  [/(^|\.)history\.state\.gov$/, { publisher: "Office of the Historian, U.S. Department of State", type: "government", rank: 1 }],
  [/(^|\.)archives\.gov$/, { publisher: "U.S. National Archives", type: "archive", rank: 1 }],
  [/(^|\.)nationalarchives\.gov\.uk$/, { publisher: "The National Archives (UK)", type: "archive", rank: 1 }],
  [/(^|\.)loc\.gov$/, { publisher: "Library of Congress", type: "library", rank: 1, blocksBots: true }],
  [/(^|\.)bl\.uk$/, { publisher: "British Library", type: "library", rank: 1 }],
  [/(^|\.)bnf\.fr$/, { publisher: "Bibliothèque nationale de France", type: "library", rank: 1 }],
  [/(^|\.)europeana\.eu$/, { publisher: "Europeana", type: "database", rank: 2 }],
  [/(^|\.)metmuseum\.org$/, { publisher: "The Metropolitan Museum of Art", type: "museum", rank: 1, blocksBots: true }],
  [/(^|\.)britishmuseum\.org$/, { publisher: "British Museum", type: "museum", rank: 1, blocksBots: true }],
  [/(^|\.)louvre\.fr$/, { publisher: "Musée du Louvre", type: "museum", rank: 1 }],
  [/(^|\.)rijksmuseum\.nl$/, { publisher: "Rijksmuseum", type: "museum", rank: 1 }],
  [/(^|\.)si\.edu$/, { publisher: "Smithsonian Institution", type: "museum", rank: 1 }],
  [/(^|\.)ushmm\.org$/, { publisher: "United States Holocaust Memorial Museum", type: "museum", rank: 1 }],
  [/(^|\.)yadvashem\.org$/, { publisher: "Yad Vashem", type: "museum", rank: 1 }],
  [/(^|\.)iwm\.org\.uk$/, { publisher: "Imperial War Museums", type: "museum", rank: 1, blocksBots: true }],
  [/(^|\.)awm\.gov\.au$/, { publisher: "Australian War Memorial", type: "museum", rank: 1 }],
  [/(^|\.)nationalww2museum\.org$/, { publisher: "The National WWII Museum", type: "museum", rank: 2 }],
  [/(^|\.)nasa\.gov$/, { publisher: "NASA", type: "government", rank: 1 }],
  [/(^|\.)esa\.int$/, { publisher: "European Space Agency", type: "institution", rank: 1 }],
  [/(^|\.)home\.cern$|(^|\.)cern\.ch$/, { publisher: "CERN", type: "institution", rank: 1 }],
  [/(^|\.)nps\.gov$/, { publisher: "U.S. National Park Service", type: "government", rank: 2 }],
  [/(^|\.)parliament\.uk$/, { publisher: "UK Parliament", type: "government", rank: 2 }],
  [/(^|\.)nzhistory\.govt\.nz$/, { publisher: "NZHistory, Ministry for Culture and Heritage", type: "government", rank: 2 }],
  [/(^|\.)un\.org$/, { publisher: "United Nations", type: "institution", rank: 2 }],
  [/(^|\.)unesco\.org$/, { publisher: "UNESCO", type: "institution", rank: 1, blocksBots: true }],
  [/(^|\.)who\.int$/, { publisher: "World Health Organization", type: "institution", rank: 2 }],
  [/(^|\.)nobelprize\.org$/, { publisher: "Nobel Prize Outreach", type: "institution", rank: 2 }],
  [/(^|\.)genome\.gov$/, { publisher: "National Human Genome Research Institute", type: "government", rank: 1 }],
  [/(^|\.)federalreservehistory\.org$/, { publisher: "Federal Reserve History", type: "government", rank: 2 }],
  [/(^|\.)cia\.gov$/, { publisher: "CIA Reading Room", type: "archive", rank: 3 }],
  [/(^|\.)digitalarchive\.wilsoncenter\.org$/, { publisher: "Wilson Center Digital Archive", type: "archive", rank: 1 }],
  [/(^|\.)plato\.stanford\.edu$/, { publisher: "Stanford Encyclopedia of Philosophy", type: "academic", rank: 1 }],
  [/(^|\.)britannica\.com$/, { publisher: "Encyclopaedia Britannica", type: "encyclopedia", rank: 2, blocksBots: true }],
  [/(^|\.)worldhistory\.org$|(^|\.)ancient\.eu$/, { publisher: "World History Encyclopedia", type: "encyclopedia", rank: 3, blocksBots: true }],
  [/(^|\.)iranicaonline\.org$/, { publisher: "Encyclopædia Iranica", type: "encyclopedia", rank: 2 }],
  [/(^|\.)sahistory\.org\.za$/, { publisher: "South African History Online", type: "encyclopedia", rank: 3 }],
  [/(^|\.)bbc\.co\.uk$|(^|\.)bbc\.com$/, { publisher: "BBC", type: "institution", rank: 3 }],
  [/(^|\.)jstor\.org$/, { publisher: "JSTOR", type: "academic", rank: 2, blocksBots: true }],
  [/(^|\.)nature\.com$/, { publisher: "Nature", type: "academic", rank: 2, blocksBots: true }],
  [/(^|\.)science\.org$/, { publisher: "Science (AAAS)", type: "academic", rank: 2, blocksBots: true }],
  [/(^|\.)ncbi\.nlm\.nih\.gov$/, { publisher: "U.S. National Library of Medicine", type: "academic", rank: 2 }],
  [/(^|\.)cambridge\.org$/, { publisher: "Cambridge University Press", type: "academic", rank: 2, blocksBots: true }],
  [/(^|\.)oup\.com$|(^|\.)oxfordreference\.com$/, { publisher: "Oxford University Press", type: "academic", rank: 2, blocksBots: true }],
  [/\.edu$/, { publisher: "", type: "academic", rank: 3 }],
  [/\.ac\.uk$/, { publisher: "", type: "academic", rank: 3 }],
];

// Never promote mirrors, aggregators or link shorteners.
const DENY = /(web\.archive\.org|archive\.(org|is|today|ph)|books\.google|google\.com|wikipedia\.org|wikimedia|wikidata|youtube|facebook|twitter|x\.com|amazon\.|worldcat\.org|doi\.org|handle\.net|issn\.org|viaf\.org|isni\.org|geohack|toolforge|bit\.ly)/i;

export function classifySource(url: string): SourceClass | null {
  let u: URL;
  try {
    u = new URL(url);
  } catch {
    return null;
  }
  if (!/^https?:$/.test(u.protocol)) return null;
  if (DENY.test(u.host) || DENY.test(url)) return null;
  if (u.pathname === "/" || u.pathname === "") return null; // homepages are not citations
  if (/\.(pdf|jpg|png|gif|zip|djvu)$/i.test(u.pathname)) return null; // binary documents can't be titled reliably
  const host = u.host.toLowerCase().replace(/^www\./, "");
  for (const [re, cls] of RULES) {
    if (re.test(host)) {
      const publisher = cls.publisher || universityName(host);
      return { ...cls, publisher, domain: host.split(".").slice(-3).join(".") };
    }
  }
  return null;
}

function universityName(host: string): string {
  const base = host.replace(/\.(edu|ac\.uk)$/, "").split(".").pop() ?? host;
  return `${base.toUpperCase().length <= 5 ? base.toUpperCase() : base.charAt(0).toUpperCase() + base.slice(1)} (${host})`;
}
