import type { EventSeed } from "../types";

export const ancientEvents: EventSeed[] = [
  {
    slug: "invention-of-cuneiform",
    title: "Invention of cuneiform writing",
    alt: ["Origins of writing", "Sumerian writing"],
    date: "~-3200",
    period: "ancient-world",
    category: "technology",
    region: "middle-east",
    location: "Uruk, Sumer (southern Iraq)",
    places: ["uruk"],
    civ: ["mesopotamia"],
    wiki: "Cuneiform",
    discovery: false,
    keywords: ["writing", "clay tablets", "Sumerians", "proto-cuneiform", "literacy"],
    summary:
      "In the cities of southern Mesopotamia, scribes began pressing marks into clay tablets to record goods and labour — the earliest known full writing system.",
    overview:
      "Cuneiform began around 3200 BCE as proto-cuneiform accounting signs at Uruk and developed over centuries into a script of wedge-shaped impressions. It was used for some three thousand years to write Sumerian, Akkadian, Hittite and other languages.",
    context:
      "By the late fourth millennium BCE, Uruk had grown into one of the largest settlements on earth. Temple and palace institutions managed grain, livestock, textiles and workers on a scale that memory alone could not track. Clay tokens and sealed envelopes had long been used to count goods, and the step to marking signs directly on clay tablets emerged from these administrative needs.",
    narrative:
      "The earliest tablets, found in the Eanna precinct at Uruk, are lists: quantities of barley, beer rations, sheep and labourers, written with pictographic signs and numerical notations. Over time scribes used a cut reed to impress signs, and the pictures became abstract clusters of wedges — the feature that gives the script its modern name, from the Latin cuneus, 'wedge'.\n\nAs signs came to represent sounds as well as things, cuneiform could record language itself: royal inscriptions, law codes, letters, contracts, medical and astronomical texts, and literature such as the Epic of Gilgamesh. Scribal schools trained writers for centuries. The script fell out of use around the first century CE, and its decipherment by scholars in the nineteenth century reopened Mesopotamian history.",
    causes: [
      "Growth of large urban institutions that needed to track goods and labour",
      "Earlier counting systems using clay tokens and sealed envelopes",
      "Abundant river clay as a cheap, durable writing surface",
    ],
    consequences: [
      "Enabled administration, law and long-distance correspondence across Near Eastern states",
      "Preserved the world's earliest literature, including the Epic of Gilgamesh",
      "Shaped later writing systems and record-keeping across the region",
    ],
    timeline: [
      ["~-3200", "Proto-cuneiform tablets at Uruk", "Administrative records of goods and labour."],
      ["~-2600", "Signs become phonetic", "Cuneiform is used to write Sumerian language, not only accounts."],
      ["~-1754", "Code of Hammurabi", "A major legal text is inscribed in Akkadian cuneiform."],
      ["~75", "Last known cuneiform tablet", "An astronomical text marks the end of the tradition."],
    ],
    relations: [["contributed_to", "code-of-hammurabi", "Written law depended on a mature writing system."]],
  },
  {
    slug: "indus-valley-cities",
    title: "Rise of the Indus Valley cities",
    alt: ["Harappan civilisation", "Mature Harappan period"],
    date: "~-2600",
    end: "~-1900",
    period: "ancient-world",
    category: "culture",
    region: "south-asia",
    location: "Indus river basin (Pakistan and northwest India)",
    places: ["mohenjo-daro", "harappa"],
    civ: ["indus-valley"],
    wiki: "Indus Valley Civilisation",
    keywords: ["Harappa", "Mohenjo-daro", "urban planning", "Bronze Age", "Indus script"],
    summary:
      "Planned cities with grid streets, brick houses and covered drains flourished along the Indus for roughly seven centuries — one of the three earliest urban civilisations.",
    overview:
      "During its mature phase, from about 2600 to 1900 BCE, the Indus Valley Civilisation spread over a larger area than contemporary Egypt or Mesopotamia. Its cities shared standardised bricks and weights, sophisticated water management and a script that has never been deciphered.",
    context:
      "Farming villages had existed in the region since at least the seventh millennium BCE, at sites such as Mehrgarh. The fertile floodplains of the Indus and the now-dry Ghaggar-Hakra river system supported surplus agriculture, and trade networks reached as far as Mesopotamia, where Indus seals have been found.",
    narrative:
      "Mohenjo-daro and Harappa, the best-known sites, were laid out with streets on a rough grid, houses of uniform fired brick, private wells and bathing areas, and drains that ran beneath the streets. Mohenjo-daro's 'Great Bath', a watertight brick pool, is one of the earliest public water tanks known. Craft workers produced carnelian beads, copper tools and carved stone seals bearing animals and short inscriptions.\n\nUnusually, archaeologists have found little evidence of palaces, royal tombs or monumental temples, and how the civilisation was governed remains debated. From around 1900 BCE the large cities were gradually abandoned. Scholars point to a combination of factors, including shifting rivers, changing monsoon patterns and the breakdown of trade, rather than a single catastrophe.",
    causes: [
      "Fertile floodplains supporting agricultural surplus",
      "Long tradition of settled farming in the region",
      "Trade networks across South Asia and with Mesopotamia",
    ],
    consequences: [
      "Demonstrated advanced urban planning and sanitation in the Bronze Age",
      "Gradual de-urbanisation after c. 1900 BCE, possibly linked to climate and river change",
      "Left an undeciphered script that remains one of archaeology's open questions",
    ],
    timeline: [
      ["~-3300", "Early Harappan phase", "Towns emerge across the Indus basin."],
      ["~-2600", "Mature Harappan phase begins", "Large planned cities appear."],
      ["~-1900", "Decline of the major cities", "Population disperses to smaller settlements."],
      ["1921", "Excavations at Harappa", "Archaeologists identify the civilisation in modern times."],
    ],
  },
  {
    slug: "great-pyramid-of-giza",
    title: "Construction of the Great Pyramid of Giza",
    alt: ["Pyramid of Khufu", "Pyramid of Cheops"],
    date: "~-2560",
    period: "ancient-world",
    category: "culture",
    region: "middle-east",
    location: "Giza, Egypt",
    places: ["giza-pyramid-complex"],
    civ: ["ancient-egypt"],
    wiki: "Great Pyramid of Giza",
    featured: true,
    keywords: ["Khufu", "Old Kingdom", "Fourth Dynasty", "pyramid", "Seven Wonders"],
    summary:
      "Built as a tomb for the Fourth Dynasty pharaoh Khufu, the Great Pyramid was the tallest human-made structure on earth for more than three thousand years.",
    overview:
      "Completed around 2560 BCE, the Great Pyramid originally rose about 146 metres and contained an estimated 2.3 million stone blocks. It is the oldest of the Seven Wonders of the Ancient World and the only one still largely standing.",
    context:
      "Egypt's Old Kingdom was a centralised state in which the king was regarded as divine. Pyramid building had developed from the step pyramid of Djoser at Saqqara through the experiments of Khufu's father, Sneferu, whose Bent and Red pyramids show builders learning to construct true smooth-sided pyramids.",
    narrative:
      "The pyramid was built over roughly two decades. Limestone for the core was quarried on the Giza plateau itself; fine white limestone for the outer casing came from Tura across the Nile, and granite for the King's Chamber from Aswan, some 800 kilometres upriver. Papyri discovered at Wadi al-Jarf in 2013, including the logbook of an official named Merer, record crews transporting Tura limestone by boat during Khufu's reign.\n\nArchaeological work at a nearby workers' settlement indicates that the builders were organised, fed and housed labourers — not enslaved masses, as was long popularly assumed. The pyramid formed part of a larger complex with temples, a causeway, smaller pyramids for royal women and boat pits. Its exact construction methods, particularly how blocks were raised, are still debated.",
    causes: [
      "Royal ideology linking the pharaoh's afterlife to the welfare of Egypt",
      "Decades of architectural experimentation under Djoser and Sneferu",
      "A centralised state able to organise labour and resources",
    ],
    consequences: [
      "Set the template for the Giza necropolis, including the pyramids of Khafre and Menkaure",
      "Became a lasting symbol of ancient Egypt and a focus of study and travel",
      "Workers' records and settlements transformed understanding of how Egypt organised labour",
    ],
    timeline: [
      ["~-2670", "Step Pyramid of Djoser", "The first large-scale stone pyramid is built at Saqqara."],
      ["~-2600", "Sneferu's Red Pyramid", "The first successful smooth-sided pyramid."],
      ["~-2560", "Great Pyramid completed", "Khufu's tomb rises at Giza."],
      ["2013", "Wadi al-Jarf papyri found", "The oldest known inscribed papyri describe stone transport for the pyramid."],
    ],
    people: [["khufu", "Pharaoh for whom the pyramid was built"]],
    relations: [["related_to", "discovery-of-tutankhamun", "Both illuminate royal burial practice in ancient Egypt, a millennium apart."]],
  },
  {
    slug: "code-of-hammurabi",
    title: "Code of Hammurabi",
    alt: ["Hammurabi's laws"],
    date: "~-1754",
    period: "ancient-world",
    category: "politics",
    region: "middle-east",
    location: "Babylon, Mesopotamia (Iraq)",
    places: ["babylon"],
    civ: ["mesopotamia"],
    wiki: "Code of Hammurabi",
    keywords: ["law", "Babylon", "stele", "eye for an eye", "Akkadian"],
    summary:
      "King Hammurabi of Babylon issued one of the longest and best-preserved law collections of the ancient world, inscribed on a black basalt stele.",
    overview:
      "The code contains 282 laws covering trade, property, family, labour and personal injury, framed by a prologue and epilogue proclaiming Hammurabi as a just king. It is dated to around 1754 BCE, late in his reign.",
    context:
      "Hammurabi ruled Babylon from about 1792 to 1750 BCE and, through war and diplomacy, united much of Mesopotamia under his control. Earlier law collections, such as those of Ur-Nammu and Lipit-Ishtar, show that written law had a long tradition in the region.",
    narrative:
      "The laws are written as conditional statements: if a person does this, then this is the consequence. Penalties often depended on the social status of the victim and offender — free person, commoner or slave — and many reflect the principle of retaliation later summarised as 'an eye for an eye'. Other provisions set wages, fixed liability for builders whose houses collapsed and regulated interest on loans.\n\nThe best-known copy is a 2.25-metre stele topped by a relief of Hammurabi standing before the sun god Shamash, the god of justice. It was carried off to Susa as war booty in the twelfth century BCE, where French archaeologists excavated it in 1901–1902. It is now in the Louvre. Scholars debate whether the code functioned as binding legislation or as a royal statement of ideal justice.",
    causes: [
      "Hammurabi's unification of Mesopotamia under Babylon",
      "A long Mesopotamian tradition of written law collections",
      "Royal ideology presenting the king as a guardian of justice",
    ],
    consequences: [
      "Became a model text copied by scribes for centuries",
      "Provides detailed evidence of Babylonian society and economy",
      "Influenced understanding of the history of law after its rediscovery in 1901",
    ],
    timeline: [
      ["~-1792", "Hammurabi becomes king", "He inherits a small city-state."],
      ["~-1754", "The code is inscribed", "Laws are publicly displayed on stelae."],
      ["~-1150", "Stele taken to Susa", "An Elamite king carries it off as booty."],
      ["1901", "Rediscovery at Susa", "French excavators unearth the stele."],
    ],
    people: [["hammurabi", "King of Babylon who issued the code"]],
    sources: [
      { url: "https://avalon.law.yale.edu/ancient/hamframe.asp", title: "The Code of Hammurabi (translation by L. W. King)", publisher: "Avalon Project, Yale Law School", type: "primary_document" },
    ],
  },
  {
    slug: "battle-of-kadesh",
    title: "Battle of Kadesh",
    date: "~-1274",
    period: "ancient-world",
    category: "conflict",
    region: "middle-east",
    location: "Kadesh, on the Orontes River (Syria)",
    places: ["kadesh"],
    civ: ["ancient-egypt"],
    wiki: "Battle of Kadesh",
    keywords: ["Ramesses II", "Hittites", "chariots", "Muwatalli", "peace treaty"],
    summary:
      "Egypt under Ramesses II and the Hittite Empire under Muwatalli II fought one of the largest chariot battles in history over control of Syria.",
    overview:
      "Fought around 1274 BCE near the city of Kadesh, the battle is the earliest for which detailed tactical accounts survive. Despite Ramesses' claims of victory, it ended inconclusively and was followed years later by one of the earliest known peace treaties.",
    context:
      "In the Late Bronze Age, Egypt and the Hittite kingdom of Anatolia competed for influence over the city-states of the Levant. Kadesh, a strategic city on the Orontes River, had shifted between the two spheres. Ramesses II, early in his reign, marched north to reassert Egyptian control.",
    narrative:
      "According to Egyptian accounts, Ramesses was misled by two Bedouin who claimed the Hittite army was far away. In fact Muwatalli's forces were concealed behind Kadesh, and Hittite chariots smashed into one of Ramesses' divisions and then his camp. The arrival of Egyptian reinforcements allowed Ramesses to counterattack and avoid disaster.\n\nRamesses publicised the battle as a personal triumph in reliefs and texts at temples including Abu Simbel, Karnak and the Ramesseum. Hittite sources tell a different story, and Kadesh remained in Hittite hands. Around 1259 BCE the two powers concluded a peace treaty, copies of which survive in both Egyptian hieroglyphs and Akkadian cuneiform.",
    causes: [
      "Rivalry between Egypt and the Hittites over the Levant",
      "Strategic importance of Kadesh on the route into Syria",
      "Ramesses II's ambition to restore Egyptian power in the north",
    ],
    consequences: [
      "No decisive victory; Kadesh stayed under Hittite influence",
      "Led eventually to the Egyptian–Hittite peace treaty of c. 1259 BCE",
      "Became a centrepiece of Ramesses II's royal propaganda",
    ],
    timeline: [
      ["~-1279", "Ramesses II becomes pharaoh", "Begins a reign of over sixty years."],
      ["~-1274", "Battle of Kadesh", "Chariot armies clash on the Orontes."],
      ["~-1259", "Egyptian–Hittite peace treaty", "One of the earliest surviving peace treaties."],
    ],
    people: [["ramesses-ii", "Pharaoh who commanded the Egyptian army"]],
    relations: [["followed_by", "late-bronze-age-collapse", "Both great powers were later swept up in the regional collapse."]],
  },
  {
    slug: "shang-oracle-bones",
    title: "Shang dynasty oracle bone inscriptions",
    alt: ["Oracle bone script", "Jiaguwen"],
    date: "~-1250",
    end: "~-1046",
    period: "ancient-world",
    category: "culture",
    region: "east-asia",
    location: "Anyang (Yin), Henan, China",
    places: ["yinxu"],
    civ: ["ancient-china"],
    wiki: "Oracle bone script",
    discovery: true,
    keywords: ["divination", "Chinese writing", "Yinxu", "turtle shells", "Shang"],
    summary:
      "Diviners at the Shang royal court carved questions to the ancestors on turtle shells and ox bones — the earliest substantial body of Chinese writing.",
    overview:
      "The inscriptions, dating from about the reign of King Wu Ding (c. 1250 BCE) to the end of the Shang, record royal divinations about harvests, weather, warfare, childbirth and sacrifices. Their script is the direct ancestor of modern Chinese characters.",
    context:
      "The Shang dynasty ruled the middle Yellow River valley in the second millennium BCE. Kings legitimised their rule through communication with royal ancestors, and divination by heat-cracking bone was a central practice of court religion.",
    narrative:
      "Diviners prepared shells and shoulder blades by carving hollows into them, then applied heat until cracks formed. The king or a specialist interpreted the cracks as answers, and engravers recorded the question — and sometimes the outcome — on the bone. More than 150,000 inscribed fragments have been found, mostly at Yinxu near Anyang, the last Shang capital.\n\nThe bones resurfaced in the late nineteenth century, when local farmers were selling them as 'dragon bones' for traditional medicine. Scholars recognised the writing around 1899, and systematic excavations from 1928 confirmed the site as the Shang capital. The texts transformed the Shang from a semi-legendary dynasty in later histories into a documented historical state.",
    causes: [
      "Royal ancestor worship and the need for divine guidance",
      "A developed writing system at the Shang court",
      "Centralised religious and political authority at Anyang",
    ],
    consequences: [
      "Preserved the earliest substantial records of Chinese language and history",
      "Confirmed the historical existence of Shang kings named in later texts",
      "Established a script continuous with modern Chinese characters",
    ],
    timeline: [
      ["~-1250", "Reign of Wu Ding", "Earliest large body of inscriptions."],
      ["~-1046", "Fall of the Shang", "The Zhou dynasty overthrows the Shang."],
      ["1899", "Inscriptions recognised", "Scholars identify writing on 'dragon bones'."],
      ["1928", "Excavations at Yinxu", "Systematic digs confirm the Shang capital."],
    ],
    relations: [["related_to", "invention-of-cuneiform", "An independent invention of writing in another river civilisation."]],
  },
  {
    slug: "late-bronze-age-collapse",
    title: "Late Bronze Age collapse",
    date: "~-1200",
    end: "~-1150",
    period: "ancient-world",
    category: "disaster",
    region: "middle-east",
    location: "Eastern Mediterranean and Near East",
    places: ["ugarit"],
    civ: ["ancient-egypt", "mesopotamia"],
    wiki: "Late Bronze Age collapse",
    discovery: true,
    keywords: ["Sea Peoples", "Hittites", "Mycenaean", "systems collapse", "Ugarit"],
    summary:
      "Within a few decades, the interconnected palace states of the eastern Mediterranean — Hittite, Mycenaean and many Levantine cities — collapsed or were destroyed.",
    overview:
      "Between roughly 1200 and 1150 BCE, the Hittite Empire disintegrated, Mycenaean palaces in Greece were burned and abandoned, and cities such as Ugarit were destroyed. Egypt survived but was weakened. The causes remain one of the great debates of ancient history.",
    context:
      "The Late Bronze Age world was a network of kingdoms linked by diplomacy, royal marriages and trade in copper, tin, grain and luxury goods. Clay tablets such as the Amarna letters show kings addressing one another as 'brother'. This interdependence made the system vulnerable to shocks.",
    narrative:
      "Egyptian inscriptions at Medinet Habu describe invasions by coalitions of 'Sea Peoples' in the reign of Ramesses III, and letters from Ugarit's final days plead for help against enemy ships. Yet archaeologists now see the Sea Peoples as part of a wider crisis rather than its sole cause.\n\nProposed contributing factors include prolonged drought (supported by pollen and sediment studies), earthquakes, famine, internal revolt, disruption of trade routes for tin and copper, and migration. Many historians favour a 'systems collapse' model in which multiple stresses cascaded through an interconnected network. In the aftermath, writing disappeared from Greece for centuries, while iron-working spread and new states, including Israel, Phoenician cities and the Neo-Assyrian Empire, emerged.",
    causes: [
      "Probable prolonged drought and resulting famine",
      "Movements of peoples, including the 'Sea Peoples' recorded in Egyptian texts",
      "Breakdown of long-distance trade in tin and copper",
      "Internal unrest and earthquakes in several regions",
    ],
    consequences: [
      "Fall of the Hittite Empire and Mycenaean palace civilisation",
      "A 'dark age' in Greece in which writing fell out of use",
      "Spread of iron technology and the rise of new states in the Iron Age",
    ],
    timeline: [
      ["~-1274", "Battle of Kadesh", "Egypt and the Hittites at the height of their rivalry."],
      ["~-1185", "Destruction of Ugarit", "A major Levantine trading city is burned."],
      ["~-1177", "Ramesses III fights the Sea Peoples", "Recorded in reliefs at Medinet Habu; the date is approximate."],
    ],
    people: [["ramesses-iii", "Pharaoh who recorded battles against the Sea Peoples"]],
  },
  {
    slug: "first-olympic-games",
    title: "First recorded Olympic Games",
    alt: ["Ancient Olympics"],
    date: "-776",
    period: "classical-antiquity",
    category: "culture",
    region: "europe",
    location: "Olympia, Greece",
    places: ["olympia"],
    civ: ["ancient-greece"],
    wiki: "Ancient Olympic Games",
    keywords: ["Olympia", "Zeus", "athletics", "Coroebus", "stadion"],
    dateNote: "776 BCE is the traditional date, calculated by later Greek writers; archaeology suggests activity at Olympia began earlier.",
    summary:
      "According to Greek tradition, the first Olympic Games were held at the sanctuary of Zeus at Olympia in 776 BCE, beginning a festival that lasted over a thousand years.",
    overview:
      "The ancient Olympics were a religious festival in honour of Zeus held every four years. Their traditional founding date of 776 BCE became so important that later Greeks counted years in 'Olympiads'.",
    context:
      "Greece in the eighth century BCE was emerging from centuries of decline after the Bronze Age collapse. Population was growing, city-states (poleis) were forming, and Panhellenic sanctuaries like Olympia and Delphi became meeting places for Greeks from rival communities.",
    narrative:
      "Tradition held that the only event at the first games was the stadion, a foot race of about 192 metres, won by Coroebus of Elis. Over time the programme grew to include longer races, wrestling, boxing, the pentathlon, chariot races and the pankration, a brutal combat sport. Only freeborn Greek men could compete, and a sacred truce allowed athletes and spectators to travel safely.\n\nThe list of victors compiled by the sophist Hippias of Elis around 400 BCE underpins the 776 BCE date, but modern scholars regard the earliest entries with caution. The games continued under Roman rule and are generally thought to have ended in the late fourth century CE, during the reign of Theodosius I. They inspired the modern Olympic Games, first held in Athens in 1896.",
    causes: [
      "The cult of Zeus at the sanctuary of Olympia",
      "Growth of Panhellenic identity among competing Greek cities",
      "Aristocratic culture prizing athletic excellence",
    ],
    consequences: [
      "Established a shared Greek calendar based on Olympiads",
      "Created a lasting tradition of Panhellenic festivals",
      "Inspired the revival of the modern Olympic Games in 1896",
    ],
    timeline: [
      ["-776", "Traditional first Olympiad", "Coroebus of Elis wins the stadion race."],
      ["~-400", "Hippias compiles victor lists", "The basis for the traditional founding date."],
      ["~393", "Games end", "Traditionally associated with Theodosius I."],
      ["1896", "Modern Olympics", "The first modern Games are held in Athens."],
    ],
  },
  {
    slug: "founding-of-rome",
    title: "Founding of Rome",
    date: "-753-04-21",
    period: "classical-antiquity",
    category: "politics",
    region: "europe",
    location: "Palatine Hill, Rome",
    places: ["rome"],
    civ: ["ancient-rome"],
    wiki: "Founding of Rome",
    keywords: ["Romulus and Remus", "Palatine", "Natale di Roma", "legend"],
    dateNote: "21 April 753 BCE is the traditional date fixed by the Roman scholar Varro; it reflects legend, not a documented event.",
    summary:
      "Roman tradition held that Romulus founded the city on the Palatine Hill on 21 April 753 BCE. Archaeology shows settlements on Rome's hills from well before that date.",
    overview:
      "The founding story of Romulus and Remus — twins raised by a she-wolf — was central to Roman identity. The traditional date was calculated in the first century BCE and is still celebrated in Rome every 21 April.",
    context:
      "In the early first millennium BCE, central Italy was home to Latin, Sabine and Etruscan communities. Rome's hills, beside a ford on the Tiber and near salt routes, attracted settlement. Iron Age huts on the Palatine date to around the tenth to eighth centuries BCE.",
    narrative:
      "In the legend, Romulus and Remus were sons of the god Mars and Rhea Silvia. Abandoned on the Tiber, they were suckled by a she-wolf and raised by a shepherd. As adults they quarrelled over where to found a city; Romulus killed Remus and became Rome's first king. Roman writers such as Livy, writing centuries later, presented these stories while acknowledging their uncertainty.\n\nArchaeologists have found traces of walls and huts on the Palatine from roughly the eighth century BCE, which some scholars link to an early process of state formation. Most historians see Rome as emerging gradually from the joining of hilltop villages rather than from a single founding act. Rome was ruled by kings until, according to tradition, the monarchy was overthrown in 509 BCE and the Republic established.",
    causes: [
      "Strategic site at a Tiber crossing and near trade routes",
      "Consolidation of Latin hilltop villages",
      "Later Roman need for a unifying origin story",
    ],
    consequences: [
      "Rome grew into the centre of a Mediterranean empire",
      "The founding date became the basis of the Roman 'ab urbe condita' year count",
      "The she-wolf legend became an enduring symbol of the city",
    ],
    timeline: [
      ["~-900", "Iron Age huts on the Palatine", "Archaeological evidence of early settlement."],
      ["-753-04-21", "Traditional founding", "Date fixed later by Varro."],
      ["-509", "Traditional founding of the Republic", "The last king is expelled."],
    ],
    relations: [["followed_by", "crossing-the-rubicon", "Centuries of Roman expansion created the Republic Caesar would overturn."]],
  },
  {
    slug: "fall-of-jerusalem-587-bce",
    title: "Babylonian destruction of Jerusalem",
    alt: ["Siege of Jerusalem (587 BC)", "Destruction of the First Temple", "Babylonian exile"],
    date: "-587",
    period: "classical-antiquity",
    category: "conflict",
    region: "middle-east",
    location: "Jerusalem, Kingdom of Judah",
    places: ["jerusalem"],
    civ: ["mesopotamia"],
    wiki: "Siege of Jerusalem (587 BC)",
    dateNote: "Scholars date the fall to 587 or 586 BCE.",
    keywords: ["Nebuchadnezzar II", "Solomon's Temple", "Babylonian captivity", "Judah"],
    summary:
      "The Neo-Babylonian king Nebuchadnezzar II captured Jerusalem, destroyed the First Temple and deported much of Judah's elite to Babylon.",
    overview:
      "After a long siege, Babylonian forces breached Jerusalem's walls in 587 or 586 BCE. The destruction of Solomon's Temple and the exile that followed became defining moments in Jewish history and scripture.",
    context:
      "Judah was a small kingdom caught between Egypt and the expanding Neo-Babylonian Empire. After an earlier rebellion, Nebuchadnezzar had captured Jerusalem in 597 BCE and installed Zedekiah as a vassal king. When Zedekiah also rebelled, Babylon returned in force.",
    narrative:
      "The siege lasted many months and caused severe famine in the city. When the walls were breached, Zedekiah fled but was captured; his sons were executed before him and he was blinded and taken to Babylon. The Babylonian commander Nebuzaradan burned the Temple, the royal palace and much of the city.\n\nLarge numbers of Judeans were deported to Babylonia. In exile, Jewish communities preserved and developed their religious traditions, and many scholars believe important parts of the Hebrew Bible were compiled or edited during this period. After the Persian king Cyrus conquered Babylon in 539 BCE, exiles were permitted to return, and a Second Temple was completed around 516 BCE.",
    causes: [
      "Judah's revolt against Babylonian overlordship",
      "Rivalry between Babylon and Egypt for control of the Levant",
      "Nebuchadnezzar II's campaigns to secure his western frontier",
    ],
    consequences: [
      "Destruction of the First Temple and the end of the Davidic kingdom",
      "The Babylonian exile, which reshaped Jewish religious identity",
      "Return of exiles after the Persian conquest of Babylon",
    ],
    timeline: [
      ["-597", "First Babylonian capture of Jerusalem", "King Jehoiachin is taken to Babylon."],
      ["-587", "Jerusalem falls", "The Temple is destroyed."],
      ["-539", "Cyrus conquers Babylon", "Exiles are later allowed to return."],
      ["~-516", "Second Temple completed", "Rebuilding under Persian rule."],
    ],
    people: [["nebuchadnezzar-ii", "King of Babylon who besieged the city"]],
    relations: [["followed_by", "fall-of-babylon", "Babylon's fall to Persia ended the exile."]],
  },
  {
    slug: "fall-of-babylon",
    title: "Cyrus the Great conquers Babylon",
    alt: ["Fall of Babylon"],
    date: "-539",
    period: "classical-antiquity",
    category: "conflict",
    region: "middle-east",
    location: "Babylon, Mesopotamia",
    places: ["babylon"],
    civ: ["persia", "mesopotamia"],
    wiki: "Fall of Babylon",
    keywords: ["Achaemenid", "Cyrus Cylinder", "Nabonidus", "Persia"],
    summary:
      "The Persian king Cyrus II took Babylon, ending the Neo-Babylonian Empire and making Persia the dominant power of the Near East.",
    overview:
      "In October 539 BCE, Persian forces defeated the Babylonian army at Opis and entered Babylon with little resistance. Cyrus presented himself as a restorer of order chosen by the god Marduk, a claim recorded on the Cyrus Cylinder.",
    context:
      "Cyrus had founded the Achaemenid Empire by overthrowing the Medes (c. 550 BCE) and conquering Lydia (c. 547 BCE). Babylon's king Nabonidus was unpopular with parts of the priesthood for elevating the moon god Sin and spending years away in Arabia.",
    narrative:
      "Babylonian chronicles record a battle at Opis on the Tigris, followed by the capture of Sippar and then the entry of Persian troops into Babylon itself. Cyrus arrived some days later. The Greek historian Herodotus later told of the Persians diverting the Euphrates to enter the city, but this story is not confirmed by Babylonian sources.\n\nThe Cyrus Cylinder, a clay cylinder inscribed in cuneiform and discovered in 1879, proclaims Cyrus's piety and describes the return of displaced peoples and their gods to their homes. It has sometimes been called the first charter of human rights, though historians see it as a traditional Mesopotamian royal inscription. The Hebrew Bible remembers Cyrus favourably for allowing Judean exiles to return to Jerusalem.",
    causes: [
      "Rapid expansion of the Achaemenid Empire under Cyrus",
      "Internal discontent with Nabonidus's religious policies",
      "Babylonian military defeat at Opis",
    ],
    consequences: [
      "End of the Neo-Babylonian Empire",
      "Persian rule over Mesopotamia, the Levant and beyond",
      "Return of Judean exiles and the rebuilding of the Temple in Jerusalem",
    ],
    timeline: [
      ["~-550", "Cyrus defeats the Medes", "Foundation of the Achaemenid Empire."],
      ["-539", "Battle of Opis and fall of Babylon", "Persian forces enter the city."],
      ["1879", "Cyrus Cylinder discovered", "Excavated at Babylon by Hormuzd Rassam."],
    ],
    people: [["cyrus-the-great", "Founder of the Achaemenid Empire and conqueror of Babylon"]],
    relations: [
      ["contributed_to", "battle-of-marathon", "Persian expansion west eventually brought the empire into conflict with Greek cities."],
    ],
    sources: [
      { url: "https://www.britishmuseum.org/collection/object/W_1880-0617-1941", title: "The Cyrus Cylinder", publisher: "British Museum", type: "museum" },
    ],
  },
  {
    slug: "athenian-democracy",
    title: "Reforms of Cleisthenes and Athenian democracy",
    alt: ["Birth of democracy", "Cleisthenic reforms"],
    date: "-508",
    period: "classical-antiquity",
    category: "politics",
    region: "europe",
    location: "Athens, Greece",
    places: ["athens"],
    civ: ["ancient-greece"],
    wiki: "Athenian democracy",
    keywords: ["demokratia", "Cleisthenes", "ostracism", "assembly", "citizenship"],
    summary:
      "The reforms of Cleisthenes reorganised Athenian citizens into new tribes and gave power to a popular assembly, laying the foundations of Athenian democracy.",
    overview:
      "In 508/507 BCE Cleisthenes restructured Athens' political system, breaking the power of aristocratic clans. Over the following century the system developed into a direct democracy in which adult male citizens voted on laws and policy.",
    context:
      "Athens had been ruled by the tyrant Peisistratus and his sons until 510 BCE. In the power struggle that followed, the aristocrat Cleisthenes won popular support by proposing reforms, while his rival Isagoras sought help from Sparta.",
    narrative:
      "Cleisthenes divided the citizen body into ten new tribes, each mixing people from the city, the coast and the inland countryside, weakening regional and family factions. Local units called demes became the basis of citizenship, and a Council of 500, chosen by lot, prepared business for the Assembly. The practice of ostracism, allowing citizens to exile a politician for ten years by vote, is often attributed to him.\n\nDemocracy at its height, under leaders like Pericles in the fifth century, involved thousands of citizens attending the Assembly and serving on juries. Participation was limited to free adult men of Athenian descent; women, enslaved people and resident foreigners were excluded. Athenian democracy lasted, with interruptions, until 322 BCE and became a central reference point for later political thought.",
    causes: [
      "The overthrow of the Peisistratid tyranny in 510 BCE",
      "Factional struggle between Cleisthenes and Isagoras",
      "Earlier reforms by Solon that broadened political participation",
    ],
    consequences: [
      "Created institutions of direct citizen government",
      "Fostered a political culture that shaped classical Athens",
      "Became a lasting model and point of debate for democratic theory",
    ],
    timeline: [
      ["~-594", "Reforms of Solon", "Debt relief and wider political rights."],
      ["-510", "End of the tyranny", "The Peisistratids are expelled."],
      ["-508", "Reforms of Cleisthenes", "New tribes and the Council of 500."],
      ["-322", "Democracy suppressed", "Macedon imposes oligarchy on Athens."],
    ],
    people: [["cleisthenes", "Athenian statesman credited with the reforms"]],
    relations: [["followed_by", "trial-of-socrates", "The democracy Cleisthenes founded would later condemn Socrates."]],
  },
  {
    slug: "battle-of-marathon",
    title: "Battle of Marathon",
    date: "-490",
    period: "classical-antiquity",
    category: "conflict",
    region: "europe",
    location: "Plain of Marathon, Attica, Greece",
    places: ["marathon"],
    civ: ["ancient-greece", "persia"],
    wiki: "Battle of Marathon",
    keywords: ["Greco-Persian Wars", "Miltiades", "hoplites", "Darius I", "Pheidippides"],
    summary:
      "Athenian and Plataean hoplites defeated a Persian invasion force on the plain of Marathon, ending the first Persian invasion of Greece.",
    overview:
      "In 490 BCE, a Persian expedition sent by Darius I landed at Marathon to punish Athens for supporting the Ionian Revolt. A smaller Greek army led by the generals including Miltiades won a decisive victory.",
    context:
      "Greek cities in Ionia, on the coast of Asia Minor, had revolted against Persian rule between 499 and 493 BCE, with help from Athens and Eretria. After crushing the revolt, Darius sent a fleet across the Aegean, which destroyed Eretria before landing in Attica.",
    narrative:
      "The two armies faced each other for several days. The Athenians, joined by soldiers from Plataea, eventually attacked, strengthening their wings while keeping the centre thin. The Greek wings routed their opponents and then turned inward, enveloping the Persian centre. Herodotus reports 6,400 Persian dead against 192 Athenians, figures historians treat with some caution.\n\nThe Persians sailed for Athens but found the army returned before them and withdrew to Asia. The later legend of a messenger running from Marathon to Athens to announce the victory inspired the modern marathon race, though Herodotus instead tells of the runner Pheidippides running to Sparta before the battle to ask for help.",
    causes: [
      "Athenian support for the Ionian Revolt against Persia",
      "Persian expansion into the Aegean under Darius I",
      "Darius's aim to install a friendly regime in Athens",
    ],
    consequences: [
      "Ended the first Persian invasion of Greece",
      "Boosted Athenian confidence and prestige",
      "Prompted a larger Persian invasion under Xerxes ten years later",
    ],
    timeline: [
      ["-499", "Ionian Revolt begins", "Greek cities in Asia Minor rebel against Persia."],
      ["-490", "Battle of Marathon", "Persian landing force defeated."],
      ["-480", "Second Persian invasion", "Xerxes leads a massive army into Greece."],
    ],
    people: [
      ["miltiades", "Athenian general credited with the victory"],
      ["darius-i", "Persian king who ordered the expedition"],
    ],
    relations: [["contributed_to", "battle-of-thermopylae", "Defeat at Marathon prompted Xerxes' far larger invasion."]],
  },
  {
    slug: "battle-of-thermopylae",
    title: "Battle of Thermopylae",
    date: "-480",
    period: "classical-antiquity",
    category: "conflict",
    region: "europe",
    location: "Pass of Thermopylae, Greece",
    places: ["thermopylae"],
    civ: ["ancient-greece", "persia"],
    wiki: "Battle of Thermopylae",
    keywords: ["Leonidas", "300 Spartans", "Xerxes", "Greco-Persian Wars", "Salamis"],
    summary:
      "A small Greek force led by King Leonidas of Sparta held a narrow coastal pass against the army of Xerxes for three days before being outflanked and destroyed.",
    overview:
      "Fought in August or September 480 BCE, Thermopylae was a Persian victory, but the Greek last stand became one of history's most famous examples of courage against overwhelming odds.",
    context:
      "Ten years after Marathon, Xerxes I led a vast army and fleet into Greece. An alliance of Greek city-states, led by Sparta and Athens, sought to block the Persians at the narrow pass of Thermopylae while their fleet fought at nearby Artemisium.",
    narrative:
      "The Greek force numbered perhaps 7,000, including 300 Spartans. In the confined pass the Persians' numbers counted for little, and for two days the Greek hoplites repelled repeated assaults, including by Xerxes' elite 'Immortals'. Then a local man, Ephialtes, reportedly showed the Persians a mountain path that led behind the Greek lines.\n\nLearning they would be surrounded, Leonidas dismissed most of the army but stayed with the Spartans, Thespians and Thebans. They were killed fighting. The Persians went on to burn Athens, whose population had been evacuated. Weeks later, the Greek fleet defeated the Persians at Salamis, and in 479 BCE the Greek victory at Plataea ended the invasion.",
    causes: [
      "Xerxes' campaign to conquer Greece after the defeat at Marathon",
      "The Hellenic League's strategy of blocking the Persians at narrow points",
      "Discovery of a mountain path that outflanked the pass",
    ],
    consequences: [
      "Persian advance into central Greece and the burning of Athens",
      "Bought time for the Greek naval victory at Salamis",
      "Became an enduring symbol of resistance and sacrifice",
    ],
    timeline: [
      ["-480", "Battles of Thermopylae and Artemisium", "Greek forces delay the Persian advance."],
      ["-480", "Battle of Salamis", "The Greek fleet defeats Xerxes' navy."],
      ["-479", "Battle of Plataea", "Persian land army defeated; invasion ends."],
    ],
    people: [
      ["leonidas-i", "Spartan king who commanded the Greek rearguard"],
      ["xerxes-i", "Persian king who led the invasion"],
    ],
    relations: [["followed_by", "peloponnesian-war", "Victory over Persia was followed by rivalry between Athens and Sparta."]],
  },
  {
    slug: "peloponnesian-war",
    title: "Peloponnesian War",
    date: "-431",
    end: "-404",
    period: "classical-antiquity",
    category: "conflict",
    region: "europe",
    location: "Greece and the Aegean",
    places: ["athens", "sparta"],
    civ: ["ancient-greece"],
    wiki: "Peloponnesian War",
    keywords: ["Athens", "Sparta", "Thucydides", "Sicilian Expedition", "Delian League"],
    summary:
      "A 27-year war between Athens and its empire and the Spartan-led Peloponnesian League ended in Athens' defeat and reshaped the Greek world.",
    overview:
      "The war, chronicled by the historian Thucydides, lasted from 431 to 404 BCE. It involved plague, failed expeditions and shifting alliances, and ended with Sparta's victory and the temporary end of Athenian democracy.",
    context:
      "After the Persian Wars, Athens turned the Delian League, an alliance against Persia, into a maritime empire. Its growing power alarmed Sparta and its allies. Thucydides argued that 'the growth of the power of Athens, and the alarm which this inspired in Sparta, made war inevitable.'",
    narrative:
      "In the first phase, Sparta invaded Attica each year while Pericles kept Athenians behind their walls and relied on the navy. A devastating plague struck crowded Athens in 430 BCE, killing a large part of the population, including Pericles. The Peace of Nicias in 421 BCE brought a temporary truce.\n\nIn 415 BCE Athens launched a massive expedition to Sicily, which ended in catastrophe in 413 BCE with the loss of its fleet and army. Sparta, now funded by Persia, built a navy, and its commander Lysander destroyed the Athenian fleet at Aegospotami in 405 BCE. Besieged and starving, Athens surrendered in 404 BCE, its walls were torn down, and an oligarchy known as the Thirty Tyrants briefly ruled.",
    causes: [
      "Rising Athenian imperial power and Spartan fear of it",
      "Disputes over Corcyra, Potidaea and the Megarian Decree",
      "Rival political systems and alliance networks",
    ],
    consequences: [
      "Defeat of Athens and a short period of Spartan hegemony",
      "Weakening of the Greek city-states, later exploited by Macedon",
      "Thucydides' account became a founding work of historical writing",
    ],
    timeline: [
      ["-431", "War begins", "Sparta invades Attica."],
      ["-430", "Plague of Athens", "Epidemic devastates the besieged city."],
      ["-415", "Sicilian Expedition", "Athens' ill-fated invasion of Sicily."],
      ["-404", "Athens surrenders", "Walls demolished; Thirty Tyrants installed."],
    ],
    people: [
      ["pericles", "Athenian leader at the start of the war"],
      ["thucydides", "Athenian general and historian of the war"],
    ],
    relations: [["contributed_to", "trial-of-socrates", "Post-war political tensions in Athens shaped the prosecution of Socrates."]],
  },
  {
    slug: "trial-of-socrates",
    title: "Trial and death of Socrates",
    date: "-399",
    period: "classical-antiquity",
    category: "culture",
    region: "europe",
    location: "Athens, Greece",
    places: ["athens"],
    civ: ["ancient-greece"],
    wiki: "Trial of Socrates",
    keywords: ["philosophy", "hemlock", "Plato", "Apology", "impiety"],
    summary:
      "An Athenian jury convicted the philosopher Socrates of impiety and corrupting the youth, and he was executed by drinking hemlock.",
    overview:
      "Socrates, aged about seventy, was tried in 399 BCE before a jury of 500 citizens. His death, described by his student Plato, became one of the most influential episodes in the history of philosophy.",
    context:
      "Athens had just emerged from defeat in the Peloponnesian War and the brutal rule of the Thirty Tyrants. Some of Socrates' associates, including Critias and Alcibiades, had been linked to oligarchic and anti-democratic causes, which may have fuelled suspicion against him.",
    narrative:
      "Socrates was accused by Meletus, Anytus and Lycon of not recognising the gods of the city, introducing new divinities and corrupting the young. According to Plato's Apology, Socrates defended his practice of questioning people about virtue and knowledge, describing himself as a gadfly stinging the city awake.\n\nHe was found guilty by a narrow margin. When asked to propose a penalty, he provocatively suggested free meals at public expense, and the jury voted for death. Plato's dialogues Crito and Phaedo describe Socrates refusing a chance to escape and spending his final day discussing the immortality of the soul before drinking hemlock. Socrates wrote nothing himself; what is known of him comes mainly from Plato, Xenophon and Aristophanes.",
    causes: [
      "Political tensions after Athens' defeat and the Thirty Tyrants",
      "Socrates' public questioning of prominent citizens",
      "His association with figures seen as enemies of democracy",
    ],
    consequences: [
      "Plato devoted his work to Socrates' memory and founded the Academy",
      "Socrates became a model of philosophical integrity",
      "The trial is still debated as a case of free speech versus civic order",
    ],
    timeline: [
      ["-404", "Thirty Tyrants take power", "Oligarchy imposed after Athens' defeat."],
      ["-403", "Democracy restored", "An amnesty is declared."],
      ["-399", "Trial and execution", "Socrates drinks hemlock."],
      ["~-387", "Plato founds the Academy", "A school of philosophy in Athens."],
    ],
    people: [
      ["socrates", "Philosopher tried and executed"],
      ["plato", "Student who recorded the trial in the Apology"],
    ],
    sources: [
      { url: "https://plato.stanford.edu/entries/socrates/", title: "Socrates", publisher: "Stanford Encyclopedia of Philosophy", type: "academic" },
    ],
  },
  {
    slug: "battle-of-gaugamela",
    title: "Battle of Gaugamela",
    date: "-331-10-01",
    period: "classical-antiquity",
    category: "conflict",
    region: "middle-east",
    location: "Near Erbil, northern Iraq",
    places: ["gaugamela"],
    civ: ["ancient-greece", "persia"],
    wiki: "Battle of Gaugamela",
    keywords: ["Alexander the Great", "Darius III", "Macedon", "phalanx", "Achaemenid"],
    summary:
      "Alexander the Great defeated the Persian king Darius III in a decisive battle that led to the fall of the Achaemenid Empire.",
    overview:
      "On 1 October 331 BCE, Alexander's Macedonian army, though heavily outnumbered, broke the Persian line at Gaugamela. Darius fled, and within months Alexander had taken Babylon, Susa and Persepolis.",
    context:
      "Alexander had invaded the Persian Empire in 334 BCE and won victories at the Granicus and Issus. Darius III assembled a new army and chose a wide plain where his chariots and cavalry could use their numbers.",
    narrative:
      "Darius had the ground levelled for his scythed chariots. Alexander advanced obliquely to the right, drawing Persian cavalry after him and opening a gap in the Persian line. He then led his Companion cavalry in a wedge directly toward Darius. Darius fled the field, and his army collapsed.\n\nThe date is known with unusual precision because Babylonian astronomical diaries record a lunar eclipse eleven days before the battle and note the Persian defeat. After Gaugamela, Alexander was proclaimed King of Asia. Darius was murdered by his own satrap Bessus in 330 BCE. Alexander's campaigns continued to Central Asia and India, spreading Greek culture and founding cities across the conquered lands.",
    causes: [
      "Alexander's invasion of the Persian Empire in 334 BCE",
      "Persian defeats at the Granicus and Issus",
      "Darius III's attempt to stop Alexander with a larger army",
    ],
    consequences: [
      "Collapse of the Achaemenid Empire",
      "Alexander's conquest of Mesopotamia and Persia",
      "Beginning of the Hellenistic age across the Near East",
    ],
    timeline: [
      ["-334", "Alexander crosses into Asia", "Victory at the Granicus River."],
      ["-333", "Battle of Issus", "Darius is defeated and flees."],
      ["-331-10-01", "Battle of Gaugamela", "Decisive Macedonian victory."],
      ["-323", "Death of Alexander", "He dies in Babylon aged 32."],
    ],
    people: [
      ["alexander-the-great", "King of Macedon who led the invasion"],
      ["darius-iii", "Last Achaemenid king of Persia"],
    ],
    relations: [["followed_by", "kalinga-war", "Alexander's withdrawal from India preceded the rise of the Maurya Empire, which later fought Kalinga."]],
  },
  {
    slug: "kalinga-war",
    title: "Kalinga War",
    date: "~-261",
    period: "classical-antiquity",
    category: "conflict",
    region: "south-asia",
    location: "Kalinga (modern Odisha, India)",
    places: ["kalinga"],
    civ: ["maurya"],
    wiki: "Kalinga War",
    keywords: ["Ashoka", "Maurya", "Buddhism", "edicts", "Dhauli"],
    summary:
      "The Maurya emperor Ashoka conquered Kalinga in a war so bloody that, by his own account, it led him to renounce conquest and embrace dharma.",
    overview:
      "Fought around 261 BCE, the Kalinga War completed Mauryan control over most of the Indian subcontinent. Ashoka's Thirteenth Rock Edict describes the suffering it caused and his remorse.",
    context:
      "The Maurya Empire had been founded by Chandragupta Maurya around 322 BCE, in the aftermath of Alexander the Great's campaigns in northwest India. By Ashoka's reign it covered most of South Asia, but the coastal kingdom of Kalinga remained independent.",
    narrative:
      "Ashoka's edict states that 150,000 people were deported, 100,000 killed and many more died. He wrote that he felt 'deep remorse' for the conquest. In its aftermath, Ashoka promoted dharma — a moral code emphasising non-violence, tolerance and respect for all life — and supported Buddhism, sending missionaries as far as Sri Lanka and the Hellenistic kingdoms.\n\nAshoka's edicts, carved on rocks and pillars across his empire in Prakrit using the Brahmi and Kharosthi scripts, are among the earliest deciphered written records from India. They were read in the 1830s by James Prinsep. The lion capital of Ashoka's pillar at Sarnath is today the national emblem of India.",
    causes: [
      "Mauryan imperial expansion",
      "Kalinga's strategic position on the eastern coast and its trade",
      "Kalinga's independence from Mauryan rule",
    ],
    consequences: [
      "Ashoka's turn toward dharma and support for Buddhism",
      "Spread of Buddhism across Asia through Mauryan missions",
      "Production of the Edicts of Ashoka, a key historical source",
    ],
    timeline: [
      ["~-322", "Maurya Empire founded", "Chandragupta Maurya takes power."],
      ["~-268", "Ashoka becomes emperor", "Accession date is approximate."],
      ["~-261", "Kalinga War", "Conquest of the eastern kingdom."],
      ["1837", "Edicts deciphered", "James Prinsep reads the Brahmi script."],
    ],
    people: [["ashoka", "Maurya emperor who conquered Kalinga"]],
  },
  {
    slug: "qin-unification-of-china",
    title: "Qin unification of China",
    alt: ["Qin's wars of unification", "First Emperor"],
    date: "-221",
    period: "classical-antiquity",
    category: "politics",
    region: "east-asia",
    location: "China",
    places: ["xianyang"],
    civ: ["ancient-china"],
    wiki: "Qin's wars of unification",
    keywords: ["Qin Shi Huang", "Warring States", "Legalism", "standardisation", "Great Wall"],
    summary:
      "The state of Qin conquered its six rivals, ending the Warring States period, and its king proclaimed himself Qin Shi Huang, the First Emperor of China.",
    overview:
      "Between 230 and 221 BCE, Qin defeated Han, Zhao, Wei, Chu, Yan and Qi. The unified empire introduced standard script, coinage, weights and measures that shaped China for two millennia.",
    context:
      "For over two centuries, China had been divided among competing states. Qin, in the west, had been transformed by the Legalist reforms of Shang Yang in the fourth century BCE, which created a centralised, militarised bureaucracy that rewarded soldiers and farmers.",
    narrative:
      "King Zheng of Qin conquered the rival states in a decade of campaigns, ending with Qi in 221 BCE. He took the new title Huangdi, 'emperor', and replaced feudal territories with commanderies run by appointed officials. Writing, currency, weights, measures and even axle widths were standardised, and roads and canals were built. Earlier walls were linked into a northern frontier defence, a forerunner of the later Great Wall.\n\nThe regime was also harsh. Later historians, especially Sima Qian, describe the burning of books and persecution of scholars. Qin Shi Huang died in 210 BCE and was buried in a vast tomb complex guarded by the Terracotta Army. His dynasty collapsed within four years, but the Han dynasty that followed kept the unified imperial system.",
    causes: [
      "Legalist reforms that made Qin a powerful, centralised state",
      "Long conflict of the Warring States period",
      "Military leadership and resources of King Zheng",
    ],
    consequences: [
      "Creation of a unified Chinese empire under one emperor",
      "Standardisation of script, money and measures",
      "Rapid collapse of the Qin and rise of the Han dynasty in 202 BCE",
    ],
    timeline: [
      ["-230", "Conquest of Han", "The first rival state falls."],
      ["-221", "Conquest of Qi; unification", "King Zheng becomes the First Emperor."],
      ["-210", "Death of Qin Shi Huang", "Buried near modern Xi'an."],
      ["-202", "Han dynasty founded", "Liu Bang establishes a lasting imperial dynasty."],
    ],
    people: [["qin-shi-huang", "First Emperor of a unified China"]],
    relations: [
      ["contributed_to", "opening-of-the-silk-road", "The unified Han empire that inherited Qin's system sponsored westward contacts."],
      ["related_to", "terracotta-army-discovery", "The Terracotta Army guards the First Emperor's tomb."],
    ],
  },
  {
    slug: "battle-of-cannae",
    title: "Battle of Cannae",
    date: "-216-08-02",
    period: "classical-antiquity",
    category: "conflict",
    region: "europe",
    location: "Cannae, Apulia, Italy",
    places: ["cannae"],
    civ: ["ancient-rome"],
    wiki: "Battle of Cannae",
    keywords: ["Hannibal", "Second Punic War", "Carthage", "double envelopment"],
    summary:
      "Hannibal's Carthaginian army encircled and destroyed a much larger Roman army in one of the most studied tactical victories in history.",
    overview:
      "On 2 August 216 BCE, during the Second Punic War, Hannibal used a double envelopment to surround the Roman legions at Cannae. Tens of thousands of Romans were killed in a single day.",
    context:
      "Hannibal had crossed the Alps into Italy in 218 BCE and won victories at the Trebia and Lake Trasimene. Rome raised an exceptionally large army under the consuls Lucius Aemilius Paullus and Gaius Terentius Varro to confront him.",
    narrative:
      "Hannibal arranged his infantry in a convex crescent, placing his African veterans on the flanks. As the Roman legions pushed into the centre, it bent back, drawing them in. The African infantry then turned inward on the Roman flanks, while Carthaginian cavalry, having driven off the Roman horse, attacked from the rear.\n\nThe Romans were trapped and slaughtered; ancient sources give casualty figures ranging from about 50,000 to 70,000, including Paullus. Several Italian allies defected to Carthage. Yet Rome refused to negotiate, avoided further pitched battles in Italy, and eventually carried the war to Africa, where Scipio Africanus defeated Hannibal at Zama in 202 BCE.",
    causes: [
      "Hannibal's invasion of Italy during the Second Punic War",
      "Rome's decision to seek a decisive battle with a massive army",
      "Hannibal's tactical skill and superior cavalry",
    ],
    consequences: [
      "One of the heaviest defeats in Roman history",
      "Defections of southern Italian cities, including Capua",
      "Rome's resilience led to eventual victory at Zama in 202 BCE",
    ],
    timeline: [
      ["-218", "Hannibal crosses the Alps", "The Second Punic War begins."],
      ["-216-08-02", "Battle of Cannae", "Roman army destroyed."],
      ["-202", "Battle of Zama", "Scipio defeats Hannibal in Africa."],
    ],
    people: [
      ["hannibal", "Carthaginian general"],
      ["scipio-africanus", "Roman general who later defeated Hannibal at Zama"],
    ],
    relations: [["contributed_to", "destruction-of-carthage", "Roman memory of Hannibal fuelled hostility that ended in Carthage's destruction."]],
  },
  {
    slug: "opening-of-the-silk-road",
    title: "Opening of the Silk Road",
    alt: ["Zhang Qian's mission", "Silk Routes"],
    date: "~-130",
    period: "classical-antiquity",
    category: "economy",
    region: "east-asia",
    location: "Central Asia, from Chang'an westward",
    places: ["chang-an"],
    civ: ["ancient-china"],
    wiki: "Silk Road",
    keywords: ["Han dynasty", "Zhang Qian", "trade routes", "Central Asia", "silk"],
    summary:
      "Han Chinese missions to Central Asia, led by the envoy Zhang Qian, opened sustained overland connections between China and the lands to the west.",
    overview:
      "The Silk Road was not a single road but a network of routes linking China, Central Asia, Persia, India and the Mediterranean. Its traditional opening is linked to the Han dynasty's westward expansion in the late second century BCE.",
    context:
      "The Han dynasty faced constant pressure from the Xiongnu confederation on its northern frontier. Emperor Wu sought allies against them in Central Asia, and the horses of Ferghana were prized for the Han cavalry.",
    narrative:
      "Zhang Qian set out around 138 BCE to find the Yuezhi people. Captured by the Xiongnu, he spent about a decade in captivity before escaping and reaching Central Asia. He returned around 126 BCE with reports of Ferghana, Bactria and Parthia, which encouraged Han expansion into the Tarim Basin and the establishment of trade and diplomatic links.\n\nOver the following centuries, silk, paper, ceramics and spices travelled west, while horses, glass, precious metals and new crops travelled east. Ideas moved too: Buddhism spread from India into China along these routes, and later Christianity, Manichaeism and Islam. The term 'Silk Road' (Seidenstraße) was coined by the German geographer Ferdinand von Richthofen in 1877.",
    causes: [
      "Han need for allies and horses against the Xiongnu",
      "Emperor Wu's expansionist policy",
      "Demand in the west for Chinese silk and in China for Central Asian goods",
    ],
    consequences: [
      "Sustained trade between East Asia and the Mediterranean world",
      "Spread of Buddhism into China and of Chinese inventions westward",
      "Exchange of crops, technologies and, later, diseases across Eurasia",
    ],
    timeline: [
      ["~-138", "Zhang Qian sets out", "Mission to the Yuezhi."],
      ["~-126", "Zhang Qian returns", "Reports on Central Asian kingdoms."],
      ["1877", "'Silk Road' named", "Ferdinand von Richthofen coins the term."],
    ],
    people: [
      ["zhang-qian", "Han envoy whose missions opened contact with Central Asia"],
      ["emperor-wu-of-han", "Han emperor who sponsored westward expansion"],
    ],
    relations: [["related_to", "invention-of-paper", "Papermaking later spread west along these routes."]],
  },
  {
    slug: "destruction-of-carthage",
    title: "Destruction of Carthage",
    alt: ["Siege of Carthage", "Third Punic War"],
    date: "-146",
    period: "classical-antiquity",
    category: "conflict",
    region: "middle-east",
    location: "Carthage (near modern Tunis, Tunisia)",
    places: ["carthage"],
    civ: ["ancient-rome"],
    wiki: "Siege of Carthage (Third Punic War)",
    keywords: ["Punic Wars", "Scipio Aemilianus", "Cato", "Carthago delenda est"],
    summary:
      "After a three-year siege, Roman forces under Scipio Aemilianus captured and destroyed Carthage, ending the Punic Wars.",
    overview:
      "In spring 146 BCE Rome stormed Carthage, killed or enslaved its population and razed the city. Rome created the province of Africa from Carthaginian territory.",
    context:
      "Carthage had been greatly reduced after the Second Punic War but recovered economically. Roman hostility persisted; the senator Cato the Elder famously ended speeches by urging that Carthage must be destroyed. A conflict between Carthage and the Numidian king Masinissa gave Rome a pretext for war in 149 BCE.",
    narrative:
      "Carthage refused Rome's final demand that its people abandon the city and move inland. The city's defenders held out for three years behind massive walls. Scipio Aemilianus took command in 147 BCE, blockaded the harbour and in 146 BCE broke into the city. Fighting continued street by street for six days.\n\nThe survivors, said to number about 50,000, were sold into slavery and the city was burned. The popular story that the Romans sowed the ground with salt is a modern invention with no ancient source. In the same year Rome destroyed Corinth in Greece. Carthage was later refounded as a Roman colony and became one of the largest cities of the Roman West.",
    causes: [
      "Lasting Roman hostility after the Second Punic War",
      "Carthage's economic recovery and conflict with Numidia",
      "Roman ambition to control the western Mediterranean",
    ],
    consequences: [
      "End of Carthage as an independent power",
      "Creation of the Roman province of Africa",
      "Confirmed Rome's dominance of the Mediterranean",
    ],
    timeline: [
      ["-149", "Third Punic War begins", "Rome declares war on Carthage."],
      ["-146", "Carthage destroyed", "City razed after a six-day assault."],
      ["-146", "Corinth destroyed", "Rome tightens control over Greece."],
    ],
    people: [["scipio-aemilianus", "Roman commander who captured Carthage"]],
  },
  {
    slug: "crossing-the-rubicon",
    title: "Caesar crosses the Rubicon",
    alt: ["Crossing the Rubicon", "Caesar's Civil War"],
    date: "-49-01-10",
    period: "classical-antiquity",
    category: "politics",
    region: "europe",
    location: "Rubicon River, northern Italy",
    places: ["rubicon"],
    civ: ["ancient-rome"],
    wiki: "Crossing the Rubicon",
    keywords: ["Julius Caesar", "alea iacta est", "Pompey", "civil war", "Roman Republic"],
    dateNote: "10 January 49 BCE is the generally accepted date (pre-Julian Roman calendar); some scholars propose 11 January.",
    summary:
      "Julius Caesar led an army across the Rubicon, the boundary of Italy, breaking Roman law and starting a civil war against Pompey and the Senate.",
    overview:
      "By leading a legion across the small river separating Cisalpine Gaul from Italy in January 49 BCE, Caesar committed an act of insurrection. 'Crossing the Rubicon' has since come to mean passing a point of no return.",
    context:
      "Caesar had conquered Gaul over eight years and become enormously wealthy and popular. His opponents in the Senate, allied with Pompey, demanded that he give up his command and return to Rome as a private citizen, where he could be prosecuted.",
    narrative:
      "Roman law forbade a general from bringing an army into Italy. When the Senate ordered Caesar to disband his forces, he chose to march. According to Suetonius, he said 'alea iacta est' — 'the die is cast' — as he crossed; Plutarch reports that he spoke the phrase in Greek.\n\nPompey and much of the Senate fled Italy to Greece. Caesar defeated Pompey at Pharsalus in 48 BCE; Pompey fled to Egypt, where he was murdered. Caesar fought further campaigns in Egypt, Asia Minor, Africa and Spain before returning to Rome as dictator.",
    causes: [
      "Political conflict between Caesar and the senatorial elite",
      "Senate's demand that Caesar give up his command",
      "Caesar's fear of prosecution if he returned as a private citizen",
    ],
    consequences: [
      "Civil war between Caesar and Pompey",
      "Caesar's rise to the position of dictator",
      "Accelerated the collapse of the Roman Republic",
    ],
    timeline: [
      ["-58", "Gallic Wars begin", "Caesar campaigns in Gaul."],
      ["-49-01-10", "Rubicon crossed", "Civil war begins."],
      ["-48-08-09", "Battle of Pharsalus", "Caesar defeats Pompey."],
    ],
    people: [
      ["julius-caesar", "Roman general who crossed the Rubicon"],
      ["pompey", "Caesar's rival and commander of senatorial forces"],
    ],
    relations: [["contributed_to", "assassination-of-julius-caesar", "Caesar's victory and dictatorship provoked the conspiracy against him."]],
  },
  {
    slug: "assassination-of-julius-caesar",
    title: "Assassination of Julius Caesar",
    alt: ["Ides of March"],
    date: "-44-03-15",
    period: "classical-antiquity",
    category: "politics",
    region: "europe",
    location: "Curia of Pompey, Rome",
    places: ["theatre-of-pompey", "rome"],
    civ: ["ancient-rome"],
    wiki: "Assassination of Julius Caesar",
    featured: true,
    keywords: ["Ides of March", "Brutus", "Cassius", "Senate", "dictator perpetuo"],
    summary:
      "A group of Roman senators stabbed Julius Caesar to death at a meeting of the Senate, hoping to restore the Republic. Instead, they set off another round of civil wars.",
    overview:
      "On the Ides of March, 15 March 44 BCE, about 60 conspirators led by Marcus Junius Brutus and Gaius Cassius Longinus attacked Caesar in the Curia of Pompey. He was stabbed 23 times.",
    context:
      "After his civil war victory, Caesar held unprecedented power. In early 44 BCE he was named dictator perpetuo — dictator for life. Many senators feared he intended to become king, a title Romans had rejected for centuries, and resented the loss of their influence.",
    narrative:
      "The Senate met that day in a hall attached to the Theatre of Pompey, because the regular Senate house was being rebuilt. As Caesar sat, Tillius Cimber approached with a petition and pulled at his toga; Publius Servilius Casca struck the first blow. Suetonius records that a physician later found only one of the 23 wounds was fatal. The famous words 'Et tu, Brute?' come from Shakespeare; ancient sources disagree on whether Caesar said anything at all.\n\nThe conspirators, calling themselves Liberators, expected the Republic to revive. Instead, Caesar's funeral turned the Roman crowd against them. Mark Antony and Caesar's adopted heir Octavian defeated Brutus and Cassius at Philippi in 42 BCE. Their own rivalry would end the Republic altogether.",
    causes: [
      "Caesar's appointment as dictator for life",
      "Senatorial fear that Caesar sought to become king",
      "Resentment at the loss of the Senate's traditional power",
    ],
    consequences: [
      "A new series of civil wars",
      "Defeat of the conspirators at Philippi in 42 BCE",
      "Rise of Octavian, who became the first Roman emperor",
    ],
    timeline: [
      ["-44-02", "Caesar named dictator for life", "Fears of monarchy grow."],
      ["-44-03-15", "Ides of March", "Caesar is assassinated in the Senate."],
      ["-43-11", "Second Triumvirate", "Antony, Octavian and Lepidus share power."],
      ["-42-10", "Battle of Philippi", "Brutus and Cassius are defeated."],
    ],
    people: [
      ["julius-caesar", "Roman dictator, killed by the conspirators"],
      ["marcus-junius-brutus", "Leading conspirator"],
      ["gaius-cassius-longinus", "Organiser of the conspiracy"],
      ["mark-antony", "Caesar's ally, who turned public opinion against the assassins"],
      ["augustus", "Caesar's heir Octavian, later Rome's first emperor"],
    ],
    relations: [["contributed_to", "battle-of-actium", "The power struggle after the murder ended in war between Octavian and Antony."]],
  },
  {
    slug: "battle-of-actium",
    title: "Battle of Actium",
    date: "-31-09-02",
    period: "classical-antiquity",
    category: "conflict",
    region: "europe",
    location: "Ambracian Gulf, western Greece",
    places: ["actium"],
    civ: ["ancient-rome", "ancient-egypt"],
    wiki: "Battle of Actium",
    keywords: ["Octavian", "Mark Antony", "Cleopatra", "Agrippa", "naval battle"],
    summary:
      "Octavian's fleet, commanded by Marcus Agrippa, defeated the forces of Mark Antony and Cleopatra, deciding the final war of the Roman Republic.",
    overview:
      "On 2 September 31 BCE, Antony and Cleopatra broke out of a blockade at Actium, but their fleet was defeated. They fled to Egypt, where both died by suicide the following year.",
    context:
      "After Philippi, Antony governed Rome's eastern provinces and formed a political and personal alliance with Cleopatra VII of Egypt. Octavian, who controlled the West, portrayed Antony as under the spell of a foreign queen, and in 32 BCE Rome declared war on Cleopatra.",
    narrative:
      "Antony's army and fleet were trapped in the Ambracian Gulf by Agrippa's naval blockade, suffering from disease and desertion. Attempting to break out, Antony's ships engaged Agrippa's fleet. During the fighting, Cleopatra's squadron sailed through a gap and fled south, and Antony followed with some ships. Much of his remaining fleet and army surrendered.\n\nIn 30 BCE Octavian invaded Egypt. Antony and Cleopatra took their own lives in Alexandria, and Egypt became a Roman province under Octavian's personal control. Octavian was now the unchallenged master of the Roman world.",
    causes: [
      "Rivalry between Octavian and Antony after the Second Triumvirate",
      "Antony's alliance with Cleopatra and grants of Roman territory to her children",
      "Octavian's propaganda war and Rome's declaration of war on Egypt",
    ],
    consequences: [
      "Deaths of Antony and Cleopatra in 30 BCE",
      "Annexation of Ptolemaic Egypt by Rome",
      "Octavian's sole rule and the end of the Republic",
    ],
    timeline: [
      ["-32", "Rome declares war on Cleopatra", "Final break between Octavian and Antony."],
      ["-31-09-02", "Battle of Actium", "Antony and Cleopatra's fleet defeated."],
      ["-30-08", "Fall of Alexandria", "Antony and Cleopatra die; Egypt annexed."],
    ],
    people: [
      ["augustus", "Octavian, victor at Actium"],
      ["mark-antony", "Roman general allied with Cleopatra"],
      ["cleopatra", "Queen of Ptolemaic Egypt"],
      ["marcus-vipsanius-agrippa", "Octavian's admiral"],
    ],
    relations: [["led_to", "augustus-becomes-emperor", "Victory left Octavian without rivals."]],
  },
  {
    slug: "augustus-becomes-emperor",
    title: "Octavian receives the name Augustus",
    alt: ["Beginning of the Roman Empire", "Principate", "First Settlement"],
    date: "-27-01-16",
    period: "classical-antiquity",
    category: "politics",
    region: "europe",
    location: "Rome",
    places: ["rome"],
    civ: ["ancient-rome"],
    wiki: "Principate",
    keywords: ["Augustus", "Roman Empire", "princeps", "Pax Romana"],
    summary:
      "The Senate granted Octavian the name Augustus, a moment conventionally taken as the start of the Roman Empire.",
    overview:
      "In January 27 BCE, Octavian formally 'restored' the Republic while retaining control of key provinces and armies. The Senate voted him the honorific Augustus. He ruled as princeps — 'first citizen' — until his death in 14 CE.",
    context:
      "After Actium, Octavian was the only remaining power in Rome. Mindful of Caesar's fate, he avoided the titles of king or dictator and instead accumulated powers within the framework of republican offices.",
    narrative:
      "In the 'First Settlement', Octavian handed back his extraordinary powers, and the Senate responded by granting him command over provinces with most of the legions, as well as the name Augustus, meaning 'revered'. Further adjustments in 23 BCE gave him tribunician power and authority over provincial governors.\n\nAugustus's long reign brought relative peace, the Pax Romana, to the Mediterranean. He reformed the army, taxation and administration, rebuilt much of Rome and promoted traditional religion and morality. His system, the Principate, shaped Roman government for over two centuries, although it was effectively a monarchy.",
    causes: [
      "Octavian's victory in the civil wars",
      "Exhaustion after decades of conflict",
      "The need for a political form that concealed monarchy within republican tradition",
    ],
    consequences: [
      "Establishment of the Roman imperial system",
      "Beginning of roughly two centuries of the Pax Romana",
      "The month of August was later named in his honour",
    ],
    timeline: [
      ["-31-09-02", "Battle of Actium", "Octavian defeats Antony."],
      ["-27-01-16", "Name Augustus conferred", "Conventional start of the Empire."],
      ["14-08-19", "Death of Augustus", "Tiberius succeeds him."],
    ],
    people: [["augustus", "First Roman emperor"]],
    relations: [["followed_by", "eruption-of-vesuvius", "A century of imperial rule later saw the destruction of Pompeii."]],
  },
  {
    slug: "crucifixion-of-jesus",
    title: "Crucifixion of Jesus",
    date: "~30",
    period: "classical-antiquity",
    category: "culture",
    region: "middle-east",
    location: "Jerusalem, Roman Judaea",
    places: ["jerusalem"],
    civ: ["ancient-rome"],
    wiki: "Crucifixion of Jesus",
    keywords: ["Christianity", "Pontius Pilate", "Judaea", "Gospels"],
    dateNote: "Most scholars date the crucifixion to between 30 and 33 CE.",
    summary:
      "Jesus of Nazareth was executed by crucifixion in Jerusalem under the Roman prefect Pontius Pilate — an event at the centre of Christian belief.",
    overview:
      "The crucifixion is recorded in the four Gospels and mentioned by the Roman historian Tacitus and, in a passage of debated authenticity, by Josephus. Historians widely accept it as a historical event, dated to around 30–33 CE.",
    context:
      "Judaea was under Roman rule, governed by prefects in cooperation with the Temple authorities in Jerusalem. Messianic expectations and tensions with Rome were high, and crucifixion was a common Roman punishment for rebels and slaves.",
    narrative:
      "According to the Gospels, Jesus was arrested after the Passover meal, questioned by the high priest Caiaphas and handed to Pilate, who ordered his execution. He was crucified outside the city walls alongside two others. Tacitus, writing around 116 CE, records that 'Christus' was executed under Pilate during the reign of Tiberius.\n\nJesus' followers proclaimed that he had risen from the dead, and the movement spread through the eastern Mediterranean, carried by figures such as Paul of Tarsus. Within three centuries, Christianity would become the favoured religion of the Roman Empire.",
    causes: [
      "Tensions between Jesus and the Temple authorities",
      "Roman concern about unrest during Passover",
      "Pilate's authority over capital punishment in Judaea",
    ],
    consequences: [
      "Became the central event of Christian theology",
      "Spread of the early Christian movement across the Roman world",
      "Ultimately led to Christianity becoming a world religion",
    ],
    timeline: [
      ["26", "Pilate becomes prefect of Judaea", "He governs until about 36 CE."],
      ["~30", "Crucifixion", "Scholarly estimates range from 30 to 33 CE."],
      ["~116", "Tacitus records the execution", "In his Annals, Book 15."],
    ],
    people: [
      ["jesus", "Religious teacher executed in Jerusalem"],
      ["pontius-pilate", "Roman prefect who ordered the execution"],
    ],
    relations: [["followed_by", "edict-of-milan", "The movement that grew after the crucifixion was legalised in 313."]],
  },
  {
    slug: "eruption-of-vesuvius",
    title: "Eruption of Mount Vesuvius",
    alt: ["Destruction of Pompeii", "Eruption of Mount Vesuvius in 79 AD"],
    date: "79",
    period: "classical-antiquity",
    category: "disaster",
    region: "europe",
    location: "Bay of Naples, Italy",
    places: ["pompeii", "herculaneum"],
    civ: ["ancient-rome"],
    wiki: "Eruption of Mount Vesuvius in 79 AD",
    featured: false,
    keywords: ["Pompeii", "Herculaneum", "Pliny the Younger", "volcano", "pyroclastic flow"],
    dateNote: "The traditional date is 24 August 79; archaeological evidence, including an inscription found in 2018, supports a date in October or later.",
    summary:
      "A catastrophic eruption buried the Roman towns of Pompeii and Herculaneum under ash and pumice, preserving them for nearly 1,700 years.",
    overview:
      "In 79 CE Vesuvius erupted with enormous force, sending a column of ash high into the sky before pyroclastic surges swept over nearby towns. Pliny the Younger's eyewitness letters are the first detailed description of a volcanic eruption.",
    context:
      "Pompeii and Herculaneum were prosperous towns on the Bay of Naples, a favoured region for wealthy Romans. Few realised Vesuvius was an active volcano; an earthquake in 62 CE had caused damage that was still being repaired.",
    narrative:
      "The eruption began around midday with a towering column of ash and pumice that rained down on Pompeii for hours, collapsing roofs. Overnight and the next morning, pyroclastic surges — fast-moving clouds of superheated gas and debris — reached Herculaneum and then Pompeii, killing those who remained. Pliny the Elder, commander of the fleet at Misenum, died while attempting a rescue.\n\nThe towns lay buried until excavations began at Herculaneum in 1738 and Pompeii in 1748. Archaeologists later poured plaster into cavities left by bodies in the ash, creating haunting casts. The sites provide an unparalleled snapshot of everyday Roman life — houses, shops, graffiti, frescoes and food.",
    causes: [
      "Volcanic activity of Vesuvius above the subducting African plate",
      "Accumulated pressure after centuries of dormancy",
    ],
    consequences: [
      "Destruction of Pompeii, Herculaneum, Stabiae and Oplontis",
      "Preservation of an exceptional record of Roman daily life",
      "Pliny the Younger's account gave its name to 'Plinian' eruptions",
    ],
    timeline: [
      ["62", "Pompeii earthquake", "Severe damage, still being repaired in 79."],
      ["79", "Eruption", "Pompeii and Herculaneum are buried."],
      ["1748", "Excavation of Pompeii begins", "Under Bourbon rule."],
    ],
    people: [
      ["pliny-the-younger", "Eyewitness whose letters describe the eruption"],
      ["pliny-the-elder", "Naturalist and admiral who died in the rescue attempt"],
    ],
  },
  {
    slug: "invention-of-paper",
    title: "Cai Lun's papermaking",
    alt: ["Invention of paper"],
    date: "105",
    period: "classical-antiquity",
    category: "technology",
    region: "east-asia",
    location: "Luoyang, Han China",
    places: ["luoyang"],
    civ: ["ancient-china"],
    wiki: "Cai Lun",
    discovery: true,
    keywords: ["paper", "Han dynasty", "printing", "writing materials"],
    summary:
      "The Han court official Cai Lun presented an improved method of making paper from bark, hemp, rags and fishing nets to Emperor He in 105 CE.",
    overview:
      "Paper existed in China before Cai Lun — fragments date to the second century BCE — but official history credits him with refining and standardising its manufacture. Paper eventually replaced bamboo, wood and silk as China's main writing material.",
    context:
      "Under the Eastern Han dynasty, the imperial bureaucracy produced vast quantities of documents. Bamboo slips were heavy and bulky, and silk was expensive. A cheaper, lighter material was highly valuable.",
    narrative:
      "According to the Book of the Later Han, Cai Lun, a court eunuch in charge of manufacturing instruments, made paper from tree bark, hemp waste, old rags and fishing nets, and reported his method to the emperor in 105. The fibres were soaked, pounded into pulp, spread on screens and dried into sheets.\n\nPapermaking spread across East Asia, reaching Korea and Japan by the seventh century. Tradition holds that Chinese papermakers captured after the Battle of Talas in 751 taught the craft in Samarkand, though historians debate this. Paper mills spread through the Islamic world and reached Europe by the twelfth century, eventually making the printing revolution possible.",
    causes: [
      "Administrative demand for writing material in the Han bureaucracy",
      "Earlier experiments with fibre-based paper",
      "Cai Lun's position overseeing imperial workshops",
    ],
    consequences: [
      "Paper became the dominant writing material in China",
      "Spread across Asia, the Islamic world and Europe",
      "Laid the foundation for printing and mass literacy",
    ],
    timeline: [
      ["~-150", "Earliest paper fragments", "Found at sites in northwest China."],
      ["105", "Cai Lun reports his method", "Recorded in the Book of the Later Han."],
      ["~1150", "Paper mills in Europe", "In Islamic Spain (al-Andalus)."],
    ],
    people: [["cai-lun", "Han official credited with improving papermaking"]],
    relations: [["contributed_to", "gutenberg-printing-press", "Cheap paper made mass printing economically viable."]],
  },
  {
    slug: "edict-of-milan",
    title: "Edict of Milan",
    date: "313",
    period: "classical-antiquity",
    category: "culture",
    region: "europe",
    location: "Milan (Mediolanum), Roman Empire",
    places: ["milan"],
    civ: ["ancient-rome"],
    wiki: "Edict of Milan",
    keywords: ["Constantine", "Licinius", "religious tolerance", "Christianity"],
    summary:
      "The emperors Constantine and Licinius agreed to grant religious freedom throughout the Roman Empire, ending the persecution of Christians.",
    overview:
      "In February 313, meeting in Milan, the two emperors agreed on a policy of toleration for all religions and the restoration of confiscated Christian property. The 'edict' survives in letters quoted by Lactantius and Eusebius.",
    context:
      "Christians had suffered intermittent persecution, culminating in the Great Persecution under Diocletian from 303. In 311 the emperor Galerius issued an edict of toleration. In 312 Constantine defeated his rival Maxentius at the Milvian Bridge, a victory he attributed to the Christian God.",
    narrative:
      "The agreement declared that Christians and all others should have 'the free power to follow whatever religion each one wished', and ordered that churches and property confiscated during the persecutions be returned. Historians note that it was not strictly an edict but a set of instructions issued to provincial governors.\n\nConstantine went on to support the Church with funds, buildings and legal privileges, and called the Council of Nicaea in 325 to settle doctrinal disputes. In 380, under Theodosius I, Nicene Christianity became the state religion of the Empire.",
    causes: [
      "Failure of the Great Persecution to suppress Christianity",
      "Constantine's conversion following the Battle of the Milvian Bridge",
      "Political alliance between Constantine and Licinius",
    ],
    consequences: [
      "Legal toleration of Christianity across the Empire",
      "Rapid growth of the Church under imperial patronage",
      "Path to Christianity becoming the state religion in 380",
    ],
    timeline: [
      ["303", "Great Persecution", "Diocletian targets Christians."],
      ["312-10-28", "Battle of the Milvian Bridge", "Constantine defeats Maxentius."],
      ["313", "Edict of Milan", "Religious toleration agreed."],
      ["325", "Council of Nicaea", "First ecumenical council."],
    ],
    people: [["constantine-the-great", "Emperor who championed toleration of Christians"]],
    relations: [["followed_by", "founding-of-constantinople", "Constantine went on to found a new Christian capital."]],
  },
  {
    slug: "founding-of-constantinople",
    title: "Founding of Constantinople",
    date: "330-05-11",
    period: "classical-antiquity",
    category: "politics",
    region: "europe",
    location: "Byzantium (Istanbul, Turkey)",
    places: ["constantinople"],
    civ: ["ancient-rome", "byzantine"],
    wiki: "Constantinople",
    keywords: ["Constantine", "New Rome", "Byzantium", "Bosporus"],
    summary:
      "Constantine the Great dedicated a new imperial capital on the site of Byzantium, which became Constantinople — capital of the Eastern Roman Empire for more than 1,100 years.",
    overview:
      "On 11 May 330, Constantine inaugurated the city, rebuilt on a grand scale and named after himself. Strategically located on the Bosporus between Europe and Asia, it became one of the largest and wealthiest cities of the medieval world.",
    context:
      "By the fourth century, the Roman Empire's political and military centre of gravity had shifted east, toward the Danube and Persian frontiers. Rome itself was no longer the practical seat of government.",
    narrative:
      "Constantine chose the ancient Greek city of Byzantium, which controlled the sea route between the Black Sea and the Mediterranean and was easily defensible. He expanded its walls, built a forum, palace, hippodrome and churches, and brought statues and treasures from across the Empire. A senate was established on the Roman model.\n\nAfter the division of the Empire, Constantinople became the capital of the Eastern Roman — later called Byzantine — Empire. The massive Theodosian Walls, built in the fifth century, protected it from repeated sieges. It remained the Empire's capital until its conquest by the Ottomans in 1453.",
    causes: [
      "Shift of imperial priorities toward the eastern frontiers",
      "Strategic location controlling trade between Europe and Asia",
      "Constantine's desire for a new, Christian capital",
    ],
    consequences: [
      "Created the long-lived capital of the Byzantine Empire",
      "Preserved Roman law and Greek learning through the Middle Ages",
      "Became Istanbul, capital of the Ottoman Empire, after 1453",
    ],
    timeline: [
      ["324", "Constantine chooses Byzantium", "After defeating Licinius."],
      ["330-05-11", "City dedicated", "Inaugurated as the new capital."],
      ["~413", "Theodosian Walls completed", "Defences that held for a millennium."],
      ["1453-05-29", "Ottoman conquest", "The city falls to Mehmed II."],
    ],
    people: [["constantine-the-great", "Emperor who founded the city"]],
    relations: [["followed_by", "fall-of-constantinople", "The city stood for more than eleven centuries before falling to the Ottomans."]],
  },
  {
    slug: "sack-of-rome-410",
    title: "Visigothic sack of Rome",
    alt: ["Sack of Rome (410)"],
    date: "410-08-24",
    period: "classical-antiquity",
    category: "conflict",
    region: "europe",
    location: "Rome",
    places: ["rome"],
    civ: ["ancient-rome"],
    wiki: "Sack of Rome (410)",
    keywords: ["Alaric", "Visigoths", "Honorius", "Augustine", "City of God"],
    summary:
      "Visigoths led by Alaric I entered and sacked Rome for three days — the first time in eight centuries that the city had fallen to a foreign enemy.",
    overview:
      "On 24 August 410, Alaric's forces entered Rome through the Salarian Gate. Though the Western capital had moved to Ravenna, the shock to the Roman world was profound.",
    context:
      "The Visigoths had entered the Empire in 376, fleeing the Huns. After years of uneasy alliance and conflict, Alaric sought land and an official command for his people. The Western emperor Honorius, safe in Ravenna, refused to negotiate.",
    narrative:
      "Alaric besieged Rome three times between 408 and 410. On the third occasion his troops entered the city, looting for three days. Sources report that churches were largely spared, particularly the basilicas of St Peter and St Paul, which served as places of sanctuary.\n\nThe event stunned contemporaries. Jerome wrote from Bethlehem that 'the city which had taken the whole world was itself taken.' Augustine of Hippo responded to pagan claims that Rome fell for abandoning its gods by writing The City of God. Alaric died soon after, and the Visigoths later settled in Gaul and Spain.",
    causes: [
      "Unresolved settlement of the Visigoths within the Empire",
      "Honorius's refusal to negotiate with Alaric",
      "Weakness of the Western Roman army",
    ],
    consequences: [
      "A profound psychological blow to the Roman world",
      "Inspired Augustine's The City of God",
      "Foreshadowed the collapse of Western Roman authority",
    ],
    timeline: [
      ["376", "Goths cross the Danube", "Fleeing the Huns."],
      ["378-08-09", "Battle of Adrianople", "Emperor Valens is killed by the Goths."],
      ["410-08-24", "Rome sacked", "Alaric's forces enter the city."],
    ],
    people: [
      ["alaric-i", "King of the Visigoths"],
      ["augustine-of-hippo", "Theologian who responded with The City of God"],
    ],
    relations: [["contributed_to", "fall-of-the-western-roman-empire", "One of a series of blows that undermined Western Roman authority."]],
  },
  {
    slug: "fall-of-the-western-roman-empire",
    title: "Fall of the Western Roman Empire",
    alt: ["Deposition of Romulus Augustulus", "Decline of Rome"],
    date: "476-09-04",
    period: "classical-antiquity",
    category: "politics",
    region: "europe",
    location: "Ravenna, Italy",
    places: ["ravenna", "rome"],
    civ: ["ancient-rome"],
    wiki: "Fall of the Western Roman Empire",
    featured: true,
    keywords: ["Odoacer", "Romulus Augustulus", "barbarian invasions", "late antiquity"],
    summary:
      "The Germanic general Odoacer deposed Romulus Augustulus, the last emperor in the West, a date traditionally used to mark the end of the Western Roman Empire.",
    overview:
      "The fall of the Western Empire was a gradual process over the fifth century, but 476 is its conventional end point. Odoacer did not claim the imperial title, instead ruling Italy as king while nominally recognising the emperor in Constantinople.",
    context:
      "Through the fifth century, the Western Empire lost territory to Visigoths, Vandals, Franks, Burgundians and others. Its armies increasingly depended on Germanic soldiers and commanders, and real power often lay with generals rather than emperors. The Eastern Empire, wealthier and better defended, survived.",
    narrative:
      "In 475, the general Orestes overthrew the emperor Julius Nepos and placed his young son Romulus on the throne. The following year, Odoacer, leading Germanic soldiers in Italy who were demanding land, killed Orestes and deposed Romulus, sparing his life and sending him to live in Campania. Odoacer sent the imperial regalia to Constantinople.\n\nHistorians continue to debate the causes and nature of the 'fall'. Explanations include military pressure from migrating peoples, the loss of tax revenue from provinces such as North Africa, civil wars, economic strain and political instability. Some scholars emphasise transformation rather than collapse, as Roman law, Latin and the Church continued under the new kingdoms.",
    causes: [
      "Military pressure from migrating and invading peoples",
      "Loss of tax-rich provinces, especially North Africa to the Vandals",
      "Repeated civil wars and political instability",
      "Dependence on federated barbarian armies",
    ],
    consequences: [
      "Emergence of Germanic successor kingdoms in Western Europe",
      "The Eastern Roman (Byzantine) Empire continued for nearly a thousand years",
      "Traditionally marks the start of the European Middle Ages",
    ],
    timeline: [
      ["410-08-24", "Sack of Rome by the Visigoths", "A shock to the Roman world."],
      ["439", "Vandals take Carthage", "The West loses its richest province."],
      ["455", "Vandals sack Rome", "A second sack of the city."],
      ["476-09-04", "Romulus Augustulus deposed", "Odoacer becomes king of Italy."],
    ],
    people: [
      ["odoacer", "Germanic general who deposed the last Western emperor"],
      ["romulus-augustulus", "Last emperor of the Western Roman Empire"],
    ],
    relations: [
      ["followed_by", "justinian-code", "In the East, the Roman state endured and codified its law under Justinian."],
      ["followed_by", "coronation-of-charlemagne", "The idea of a Western empire was revived with Charlemagne in 800."],
    ],
  },
];
