import type { EventSeed } from "../types";

/**
 * History of the Low Countries and the Netherlands, from the Batavian revolt
 * against Rome to the twenty-first century. Kept as a themed collection;
 * periods and relations tie each event into the wider record.
 */
export const netherlandsEvents: EventSeed[] = [
  {
    slug: "batavian-revolt",
    title: "Revolt of the Batavi",
    alt: ["Batavian rebellion", "Batavian revolt"],
    date: "69",
    end: "70",
    period: "classical-antiquity",
    category: "conflict",
    region: "europe",
    location: "Rhine delta, Roman province of Germania Inferior",
    places: ["nijmegen"],
    civ: ["ancient-rome"],
    wiki: "Revolt of the Batavi",
    keywords: ["Batavians", "Julius Civilis", "Roman Empire", "Year of the Four Emperors", "Rhine frontier"],
    summary:
      "The Batavi, a Germanic people of the Rhine delta who supplied Rome with elite soldiers, rose in revolt under Gaius Julius Civilis during Rome's civil war of 69 CE.",
    overview:
      "The uprising spread to other tribes and Gaulish communities and destroyed several legionary camps on the Rhine before Roman forces under Quintus Petillius Cerialis restored control in 70 CE. Tacitus's Histories is the main account.",
    context:
      "The Batavi lived on the island between the Rhine and the Waal and were Roman allies, exempt from tribute in return for providing troops, including the emperor's mounted bodyguard. In 68–69 CE, after Nero's death, rival generals fought for the throne in the Year of the Four Emperors, and heavy recruitment and abuses by Roman officials caused resentment among the Batavi.",
    narrative:
      "Julius Civilis, a Batavian noble and Roman auxiliary commander, at first presented his revolt as support for Vespasian against Vitellius. When Vespasian prevailed, the revolt continued as a bid for independence. Batavian and allied forces besieged the legionary fortress of Vetera (near Xanten), whose garrison surrendered and was massacred, and several Gaulish leaders proclaimed an 'Empire of the Gauls'.\n\nIn 70 CE Cerialis arrived with fresh legions, defeated the rebels near Trier and at Vetera, and negotiated a settlement. Tacitus's narrative breaks off before the outcome of Civilis is known. Rome rebuilt its frontier, and the Batavi again supplied auxiliary troops. From the Renaissance the Batavians were adopted as legendary ancestors of the Dutch, a symbolism that culminated in the name of the Batavian Republic of 1795.",
    causes: [
      "Heavy recruitment of Batavian soldiers and abuses by Roman officials",
      "Roman civil war during the Year of the Four Emperors",
      "Civilis's personal grievances and ambition",
    ],
    consequences: [
      "Roman control of the Rhine frontier was restored and strengthened",
      "Batavian units continued to serve in the Roman army",
      "The Batavians became a founding myth of Dutch national identity",
    ],
    timeline: [
      ["69", "Revolt begins", "Civilis rises, nominally in support of Vespasian."],
      ["70", "Fall of Vetera", "The besieged legionary fortress surrenders."],
      ["70", "Cerialis restores Roman control", "Rebels defeated near Trier and at Vetera."],
    ],
    people: [["gaius-julius-civilis", "Batavian leader of the revolt"]],
    relations: [["related_to", "batavian-revolution", "The revolutionaries of 1795 named their republic after the Batavi."]],
  },
  {
    slug: "st-elizabeths-flood",
    title: "St Elizabeth's flood",
    alt: ["Sint-Elisabethsvloed", "St. Elisabeth's flood (1421)"],
    date: "1421-11-18",
    end: "1421-11-19",
    period: "middle-ages",
    category: "disaster",
    region: "europe",
    location: "Grote Waard, near Dordrecht, County of Holland",
    places: ["dordrecht"],
    wiki: "St. Elizabeth's flood (1421)",
    discovery: true,
    keywords: ["storm surge", "dikes", "Biesbosch", "Holland", "flood"],
    summary:
      "A storm surge broke the dikes of the Grote Waard in southern Holland, flooding a large polder and permanently separating Dordrecht from the surrounding land.",
    overview:
      "On the night of 18–19 November 1421, the feast of St Elizabeth, the sea broke through dikes that had already been weakened by neglect and war. Villages in the Grote Waard were lost, and the area eventually became the Biesbosch wetland and the Hollands Diep estuary.",
    context:
      "Much of the medieval Low Countries had been reclaimed from the sea and rivers by building dikes and draining land. Maintenance depended on local authorities, and in the early fifteenth century the Hook and Cod wars, a civil conflict in Holland, disrupted upkeep. Peat extraction had also lowered the land.",
    narrative:
      "The flood inundated a large polder south of Dordrecht. Later chronicles gave very high death tolls, but modern historians consider these exaggerated and estimate a much lower number; many inhabitants fled to higher ground or to Dordrecht. Some parts of the area were drained again within decades, but much remained under water for centuries.\n\nThe disaster entered Dutch folklore, including the legend of a cradle with a baby and a cat floating to safety, recorded in later paintings. It shows how political conflict and poor maintenance could turn a storm into a catastrophe, a lesson repeated in later Dutch floods.",
    causes: [
      "A powerful storm surge on the North Sea",
      "Dikes weakened by poor maintenance during civil conflict",
      "Land lowered by peat extraction",
    ],
    consequences: [
      "Permanent loss of much of the Grote Waard polder",
      "Formation of the Biesbosch wetlands",
      "Dordrecht became separated from the surrounding land",
    ],
    timeline: [
      ["1421-11-18", "Dikes break", "Night of 18–19 November."],
      ["C16", "Partial reclamation", "Some land is diked and drained again."],
    ],
    relations: [["related_to", "north-sea-flood-1953", "Both floods exposed weaknesses in the defences of the southwestern Netherlands."]],
  },
  {
    slug: "eighty-years-war",
    title: "The Eighty Years' War",
    alt: ["Dutch Revolt", "Dutch War of Independence"],
    date: "1568-05-23",
    end: "1648-01-30",
    period: "early-modern",
    category: "conflict",
    region: "europe",
    location: "The Seventeen Provinces of the Low Countries",
    places: ["leiden", "antwerp"],
    civ: ["dutch-republic"],
    wiki: "Eighty Years' War",
    featured: true,
    keywords: ["Dutch Revolt", "William of Orange", "Spain", "Habsburg Netherlands", "independence"],
    summary:
      "Provinces of the Habsburg Netherlands rebelled against the rule of Philip II of Spain, beginning a long war that ended with Spain's recognition of the independent Dutch Republic in 1648.",
    overview:
      "Conventionally dated from the Battle of Heiligerlee on 23 May 1568 to the Peace of Münster in 1648, the war split the Low Countries: the northern provinces became the Dutch Republic, while the southern provinces, roughly modern Belgium and Luxembourg, remained under Spanish rule.",
    context:
      "Philip II ruled the Seventeen Provinces from Spain. Opposition grew over high taxes, the centralisation of government at the expense of local privileges, and the persecution of Protestants. In 1566 a wave of iconoclasm swept through churches, and Philip sent the Duke of Alba with an army to restore order. Alba's 'Council of Troubles' executed more than a thousand people.",
    narrative:
      "William of Orange, a leading nobleman, led the resistance from exile. A turning point came in 1572 when rebel 'Sea Beggars' captured Brielle and much of Holland and Zeeland joined the revolt. The relief of Leiden in 1574 became a celebrated victory. In 1579 the northern provinces bound themselves together in the Union of Utrecht, and in 1581 they renounced Philip's rule in the Act of Abjuration. William was assassinated in Delft in 1584 by Balthasar Gérard.\n\nSpanish forces under Alexander Farnese reconquered much of the south, including Antwerp in 1585, but the north held under Maurice of Nassau and Johan van Oldenbarnevelt. A Twelve Years' Truce began in 1609. Fighting resumed in 1621 within the wider Thirty Years' War, and Spain finally recognised Dutch independence in the Peace of Münster, signed on 30 January 1648 and ratified that May.",
    causes: [
      "Heavy taxation and the curtailing of local privileges",
      "Persecution of Protestants under Philip II",
      "Alba's repression and the Council of Troubles",
    ],
    consequences: [
      "Independence of the Dutch Republic, recognised in 1648",
      "Lasting division between the northern and southern Netherlands",
      "Emigration from the south that fuelled the Dutch Golden Age",
    ],
    timeline: [
      ["1566-08", "Iconoclastic Fury", "Churches stripped of images across the provinces."],
      ["1568-05-23", "Battle of Heiligerlee", "Conventional start of the war."],
      ["1572-04-01", "Capture of Brielle", "Sea Beggars take the port; revolt spreads in Holland and Zeeland."],
      ["1584-07-10", "Assassination of William of Orange", "Shot in Delft by Balthasar Gérard."],
      ["1609-04-09", "Twelve Years' Truce", "A pause in the fighting."],
      ["1648-01-30", "Peace of Münster signed", "Spain recognises the Dutch Republic."],
    ],
    people: [
      ["william-the-silent", "Prince of Orange and leader of the revolt"],
      ["philip-ii-of-spain", "King of Spain and ruler of the Netherlands"],
      ["duke-of-alba", "Spanish governor whose repression fuelled the revolt"],
    ],
    relations: [
      ["led_to", "peace-of-westphalia", "The war ended with the Peace of Münster, part of the Westphalian settlement."],
      ["contributed_to", "dutch-golden-age", "Independence and migration from the south underpinned the Republic's rise."],
      ["related_to", "thirty-years-war", "From 1621 the war merged with the wider European conflict."],
    ],
  },
  {
    slug: "siege-of-leiden",
    title: "Siege and relief of Leiden",
    alt: ["Siege of Leiden", "Leidens Ontzet"],
    date: "1573-10",
    end: "1574-10-03",
    period: "early-modern",
    category: "conflict",
    region: "europe",
    location: "Leiden, County of Holland",
    places: ["leiden"],
    civ: ["dutch-republic"],
    wiki: "Siege of Leiden",
    keywords: ["Leidens Ontzet", "Sea Beggars", "dikes", "hutspot", "Leiden University"],
    summary:
      "Spanish troops besieged Leiden for months until rebels broke the dikes and sailed a relief fleet over the flooded land, lifting the siege on 3 October 1574.",
    overview:
      "The relief of Leiden became one of the most celebrated episodes of the Dutch Revolt. It is still marked in the city every 3 October, and the following year William of Orange founded Leiden University.",
    context:
      "By 1573 rebel Holland was the heart of the revolt, and Spanish forces sought to split it by taking Leiden. A first siege from October 1573 was interrupted in March 1574; the second began in late May 1574, and the city, short of food, faced famine and plague.",
    narrative:
      "William of Orange ordered the dikes to be cut so that the countryside would flood and a fleet of flat-bottomed boats of the Sea Beggars could reach the city. Progress was slow until a storm and a change of wind in late September raised the water. The Spanish abandoned their positions, and the fleet entered Leiden on 3 October 1574, bringing herring and white bread to the starving citizens.\n\nAccording to tradition, a boy found a pot of stew, hutspot, in the abandoned Spanish camp, which remains the traditional meal on 3 October. In 1575 William founded the University of Leiden, the oldest in the Netherlands, as a reward and a centre of Protestant learning.",
    causes: [
      "Spanish strategy to divide rebel Holland",
      "Leiden's strategic position",
      "William of Orange's decision to flood the land",
    ],
    consequences: [
      "Survival of rebel Holland",
      "Founding of Leiden University in 1575",
      "An annual celebration still held on 3 October",
    ],
    timeline: [
      ["1573-10", "First siege begins", "Spanish troops surround Leiden."],
      ["1574-05-26", "Second siege begins", "After a pause in the spring."],
      ["1574-10-03", "Relief of Leiden", "The relief fleet reaches the city."],
      ["1575-02-08", "Leiden University founded", "The first university in the northern Netherlands."],
    ],
    people: [["william-the-silent", "Prince of Orange, who ordered the dikes cut"]],
    relations: [["part_of", "eighty-years-war", "A turning point in the early years of the revolt."]],
  },
  {
    slug: "union-of-utrecht",
    title: "Union of Utrecht",
    date: "1579-01-23",
    period: "early-modern",
    category: "politics",
    region: "europe",
    location: "Utrecht, Habsburg Netherlands",
    places: ["utrecht"],
    civ: ["dutch-republic"],
    wiki: "Union of Utrecht",
    keywords: ["Dutch Republic", "alliance", "freedom of conscience", "provinces", "Union of Arras"],
    summary:
      "The rebel northern provinces signed a treaty of alliance against Spain, which became the founding document of the Dutch Republic.",
    overview:
      "Signed on 23 January 1579, the Union of Utrecht bound Holland, Zeeland, Utrecht and other provinces to act together in war, taxation and foreign policy while keeping their own privileges. It guaranteed freedom of conscience, though not freedom of public worship.",
    context:
      "The Pacification of Ghent (1576) had briefly united all seventeen provinces against Spanish troops, but religious and political divisions grew. In January 1579 several southern provinces formed the Union of Arras, reconciling with Philip II. The northern provinces responded with their own union.",
    narrative:
      "The treaty was drafted under the leadership of John of Nassau, William of Orange's brother. Its articles provided for common defence and decisions on war and peace, and stated that no one should be persecuted for their religion. Other provinces and cities joined over the following months, including for a time some in the south such as Ghent and Antwerp.\n\nThough intended as a military alliance, the union served as the constitutional basis of the Dutch Republic of the Seven United Provinces until 1795. Its decentralised structure, with sovereignty resting in the provinces, shaped Dutch politics for two centuries.",
    causes: [
      "Breakdown of the Pacification of Ghent",
      "Formation of the pro-Spanish Union of Arras",
      "Need for a lasting military alliance against Spain",
    ],
    consequences: [
      "Became the founding constitution of the Dutch Republic",
      "Established a decentralised federation of provinces",
      "Embedded freedom of conscience in the Republic's foundations",
    ],
    timeline: [
      ["1576-11-08", "Pacification of Ghent", "All provinces unite against Spanish troops."],
      ["1579-01-06", "Union of Arras", "Southern provinces reconcile with Spain."],
      ["1579-01-23", "Union of Utrecht signed", "Northern provinces ally."],
    ],
    people: [["william-the-silent", "Leader of the revolt, who joined the union in 1579"]],
    relations: [
      ["part_of", "eighty-years-war", "A founding political act of the revolt."],
      ["contributed_to", "act-of-abjuration", "The union provided the framework for formally rejecting Philip II."],
    ],
  },
  {
    slug: "act-of-abjuration",
    title: "Act of Abjuration",
    alt: ["Plakkaat van Verlatinghe"],
    date: "1581-07-26",
    period: "early-modern",
    category: "politics",
    region: "europe",
    location: "The Hague, County of Holland",
    places: ["the-hague"],
    civ: ["dutch-republic"],
    wiki: "Act of Abjuration",
    keywords: ["Plakkaat van Verlatinghe", "declaration of independence", "Philip II", "tyranny"],
    summary:
      "The States General of the rebel provinces declared that Philip II had forfeited his right to rule them, in effect a declaration of independence from Spain.",
    overview:
      "Adopted on 26 July 1581, the Act argued that a prince who oppresses his subjects instead of protecting them is a tyrant who may lawfully be deposed. It is often cited as a forerunner of the American Declaration of Independence.",
    context:
      "After the Union of Utrecht, the rebel provinces still nominally recognised Philip II while fighting his armies. They sought a new sovereign, offering the title to Francis, Duke of Anjou, brother of the French king, and needed to justify renouncing their allegiance.",
    narrative:
      "The text lists Philip's violations of the provinces' ancient privileges and his attempts to impose the Inquisition, concluding that the king had 'forfeited' his sovereignty. Officials were required to swear a new oath to the States.\n\nThe search for a foreign prince failed: Anjou's attempt to seize power in 1583 ended in disaster, and after William of Orange's assassination the provinces offered sovereignty to Elizabeth I, who declined. From 1588 the States General governed as a republic. The idea that rulers derive authority from the protection of their subjects influenced later political thought.",
    causes: [
      "Continued war with Philip II",
      "Need to legitimise a new sovereign",
      "Theories of resistance to tyranny",
    ],
    consequences: [
      "Formal break with Spanish rule",
      "Path to the Dutch Republic governed by the States General",
      "Influence on later declarations of independence",
    ],
    timeline: [
      ["1579-01-23", "Union of Utrecht", "Northern provinces ally."],
      ["1581-07-26", "Act of Abjuration", "Philip II declared deposed."],
      ["1588", "Republic established", "The States General assumes sovereignty."],
    ],
    people: [
      ["william-the-silent", "Leader of the revolt"],
      ["philip-ii-of-spain", "The king renounced by the Act"],
    ],
    relations: [
      ["part_of", "eighty-years-war", "The rebels' formal rejection of Spanish sovereignty."],
      ["related_to", "declaration-of-independence", "Historians have compared the two documents' justifications for rejecting a monarch."],
    ],
  },
  {
    slug: "fall-of-antwerp",
    title: "Fall of Antwerp",
    alt: ["Siege of Antwerp (1584–1585)"],
    date: "1585-08-17",
    period: "early-modern",
    category: "conflict",
    region: "europe",
    location: "Antwerp, Duchy of Brabant",
    places: ["antwerp"],
    wiki: "Fall of Antwerp",
    keywords: ["Alexander Farnese", "Scheldt", "migration", "Amsterdam", "Spanish Netherlands"],
    summary:
      "Spanish forces under Alexander Farnese took Antwerp after a year-long siege, prompting a mass emigration of Protestants and merchants to the northern provinces.",
    overview:
      "Antwerp surrendered on 17 August 1585. The rebels then blockaded the Scheldt, cutting the city off from the sea, and much of its trade and talent moved north, especially to Amsterdam.",
    context:
      "Antwerp had been the commercial capital of northern Europe in the sixteenth century. It joined the revolt, but Farnese, Philip II's governor-general, methodically reconquered the southern provinces in the early 1580s.",
    narrative:
      "Farnese built a fortified bridge across the Scheldt to cut the city's supply line. The defenders sent fireships and an explosive vessel known as the 'Hellburner' against it, causing heavy losses, but the bridge was repaired and the city starved into surrender. Protestants were given several years to settle their affairs or leave.\n\nTens of thousands left Antwerp and the southern Netherlands for the north, bringing capital, skills and trade networks. Combined with the Dutch closure of the Scheldt, maintained into the eighteenth century, the exodus helped Amsterdam become the hub of world trade in the following century.",
    causes: [
      "Spanish reconquest of the southern Netherlands under Farnese",
      "Antwerp's strategic and economic importance",
      "The siege bridge cutting off the Scheldt",
    ],
    consequences: [
      "Antwerp returned to Spanish rule",
      "Mass emigration of Protestants and merchants to the north",
      "Amsterdam rose as Europe's commercial centre",
    ],
    timeline: [
      ["1584-07", "Siege begins", "Farnese surrounds Antwerp."],
      ["1585-04-04", "The 'Hellburner' attack", "An explosive ship damages the siege bridge."],
      ["1585-08-17", "Antwerp surrenders", "Protestants given time to leave."],
    ],
    people: [["alexander-farnese", "Spanish governor-general who took the city"]],
    relations: [
      ["occurred_during", "eighty-years-war", "A major Spanish success in the south."],
      ["contributed_to", "dutch-golden-age", "Emigrants from Antwerp helped fuel Amsterdam's rise."],
    ],
  },
  {
    slug: "dutch-golden-age",
    title: "The Dutch Golden Age",
    date: "~1588",
    end: "1672",
    period: "early-modern",
    category: "economy",
    region: "europe",
    location: "Dutch Republic",
    places: ["amsterdam"],
    civ: ["dutch-republic"],
    wiki: "Dutch Golden Age",
    featured: true,
    keywords: ["Amsterdam", "trade", "painting", "science", "VOC", "Rembrandt", "Vermeer"],
    dateNote: "The Golden Age has no fixed dates; it is usually placed between the founding of the Republic in 1588 and the disaster year of 1672.",
    summary:
      "For most of the seventeenth century the small Dutch Republic was among the richest and most influential states in the world, a leader in trade, finance, science and art.",
    overview:
      "Built on shipping, trade and finance, the Republic produced painters such as Rembrandt, Vermeer and Frans Hals, scientists such as Christiaan Huygens and Antonie van Leeuwenhoek, and pioneering institutions like the Dutch East India Company and the Amsterdam stock exchange. Its prosperity also rested on colonial exploitation and the slave trade.",
    context:
      "Independence from Spain, an influx of capital and skilled migrants from the southern Netherlands, and a dominant position in the Baltic grain trade gave the Republic a strong commercial base. Relative religious tolerance and a decentralised, merchant-led government encouraged trade and publishing.",
    narrative:
      "Amsterdam became a world entrepôt. The VOC (1602) and the West India Company (1621) traded and conquered across Asia, Africa and the Americas, and the Amsterdam Exchange Bank (1609) became a model financial institution. Painting flourished on an open market, with genres from landscapes to still lifes, and Dutch printers published works banned elsewhere, including writings by Descartes and Spinoza.\n\nThe era had a darker side: the Dutch were deeply involved in the Atlantic slave trade and in colonial violence, from the Banda Islands to Brazil and the Caribbean. Wars with England and France strained the Republic, and the French invasion of 1672, the 'disaster year', is commonly seen as the end of its golden age.",
    causes: [
      "Independence and a merchant-led republican government",
      "Migration of capital and skills from the southern Netherlands",
      "Dominance in shipping and the Baltic trade",
    ],
    consequences: [
      "A lasting legacy in art, science and finance",
      "Global trading networks and colonial empire",
      "Dutch involvement in the slave trade and colonial violence",
    ],
    timeline: [
      ["1588", "Republic established", "The States General governs without a king."],
      ["1602-03-20", "VOC founded", "The Dutch East India Company is chartered."],
      ["1642", "The Night Watch", "Rembrandt completes his militia painting."],
      ["1672", "Disaster year", "Invasion by France and its allies."],
    ],
    people: [
      ["rembrandt", "Painter of the Golden Age"],
      ["christiaan-huygens", "Scientist and inventor"],
    ],
    relations: [["followed_by", "rampjaar", "The Golden Age is usually considered to end with the disaster year of 1672."]],
  },
  {
    slug: "duyfken-landing-australia",
    title: "Duyfken expedition: first recorded European landing in Australia",
    alt: ["Duyfken", "Willem Janszoon in Australia"],
    date: "1606",
    period: "early-modern",
    category: "exploration",
    region: "oceania",
    location: "West coast of Cape York Peninsula, Australia",
    places: ["cape-york-peninsula"],
    wiki: "Willem Janszoon",
    discovery: true,
    keywords: ["Willem Janszoon", "Duyfken", "VOC", "Cape York", "Aboriginal Australians"],
    dateNote: "The landing took place in early 1606; accounts commonly place it in February or March, but the exact date is not recorded with certainty.",
    summary:
      "The VOC ship Duyfken, under Willem Janszoon, charted part of the coast of Cape York Peninsula, the first recorded landing in Australia by Europeans.",
    overview:
      "Janszoon was searching for trade opportunities in New Guinea and believed the coast he charted was part of it. The expedition's encounters with Aboriginal people were violent, and members of the crew were killed. Aboriginal Australians had lived on the continent for tens of thousands of years.",
    context:
      "The VOC had recently established itself in the Indonesian archipelago and sent ships to explore surrounding lands in search of gold, spices and trading partners. The Duyfken sailed from Bantam in late 1605.",
    narrative:
      "Following the south coast of New Guinea, the Duyfken crossed what is now the Torres Strait area without recognising it as a strait and reached the western coast of Cape York Peninsula, charting more than 300 kilometres of coastline. Janszoon named a cape 'Keerweer' ('Turnabout') where the ship turned back.\n\nJanszoon reported that the land was largely unsuitable for trade. Later Dutch voyages mapped the western and northern coasts of the continent, which became known as New Holland. Abel Tasman's voyages of 1642–1644 reached Tasmania and New Zealand. The British colonisation of Australia began in 1788.",
    causes: [
      "VOC search for trade opportunities around the Indonesian archipelago",
      "Belief that New Guinea might hold gold and spices",
    ],
    consequences: [
      "First European charting of part of the Australian coastline",
      "Later Dutch mapping of 'New Holland'",
      "Violent first encounters with Aboriginal people",
    ],
    timeline: [
      ["1605-11", "Duyfken sails from Bantam", "Exploring toward New Guinea."],
      ["1606", "Landing on Cape York Peninsula", "Coast charted; violent encounters."],
      ["1642-11-24", "Tasman sights Tasmania", "Later Dutch exploration."],
    ],
    people: [["willem-janszoon", "Commander of the Duyfken"]],
    relations: [["related_to", "dutch-east-india-company", "The voyage was a VOC expedition."]],
  },
  {
    slug: "new-amsterdam",
    title: "New Amsterdam",
    alt: ["New Netherland", "Purchase of Manhattan"],
    date: "1625",
    end: "1664-09-08",
    period: "early-modern",
    category: "exploration",
    region: "north-america",
    location: "Manhattan Island, New Netherland",
    places: ["manhattan"],
    civ: ["dutch-republic"],
    wiki: "New Amsterdam",
    keywords: ["New Netherland", "Peter Minuit", "Peter Stuyvesant", "Lenape", "New York", "West India Company"],
    summary:
      "The Dutch West India Company founded a settlement at the southern tip of Manhattan, capital of New Netherland, which the English captured in 1664 and renamed New York.",
    overview:
      "Fort Amsterdam was laid out in 1625. In 1626 director Peter Minuit acquired Manhattan from the Lenape in exchange for goods valued at 60 guilders, although the two sides probably understood the transaction differently.",
    context:
      "Henry Hudson, sailing for the VOC in 1609, explored the river later named after him. The West India Company, chartered in 1621, organised the fur trade and settlement of New Netherland along the Hudson.",
    narrative:
      "New Amsterdam grew into a diverse port town where a variety of languages were spoken. Enslaved Africans, brought by the company from 1626, built much of its infrastructure. Under director-general Peter Stuyvesant from 1647, the colony expanded and built the defensive wall that gave Wall Street its name.\n\nIn August 1664, during tensions that led to the Second Anglo-Dutch War, an English fleet arrived and Stuyvesant surrendered without a fight in early September. The town was renamed New York after the Duke of York. The Dutch briefly retook it in 1673, but returned it to England in 1674.",
    causes: [
      "Dutch interest in the North American fur trade",
      "Hudson's 1609 voyage for the VOC",
      "Chartering of the West India Company",
    ],
    consequences: [
      "Foundation of the city that became New York",
      "Lasting Dutch place names and legal customs in the region",
      "English control of the colony from 1664",
    ],
    timeline: [
      ["1609-09", "Hudson explores the river", "Sailing for the VOC."],
      ["1625", "Fort Amsterdam laid out", "On the southern tip of Manhattan."],
      ["1626", "Manhattan purchase", "Peter Minuit's transaction with the Lenape."],
      ["1664-09-08", "English capture", "Gregorian date; renamed New York."],
    ],
    people: [
      ["peter-minuit", "Director who made the 1626 purchase"],
      ["peter-stuyvesant", "Last director-general of New Netherland"],
    ],
    relations: [
      ["occurred_during", "dutch-golden-age", "Part of the Republic's global expansion."],
      ["followed_by", "treaty-of-breda", "The treaty confirmed English possession of the colony."],
    ],
  },
  {
    slug: "tulip-mania",
    title: "Tulip mania",
    alt: ["Tulipomania"],
    date: "1636",
    end: "1637-02",
    period: "early-modern",
    category: "economy",
    region: "europe",
    location: "Dutch Republic, especially Haarlem",
    places: ["haarlem"],
    civ: ["dutch-republic"],
    wiki: "Tulip mania",
    discovery: true,
    keywords: ["tulips", "speculation", "bubble", "futures", "Haarlem"],
    summary:
      "Prices of rare tulip bulbs in the Dutch Republic rose to extraordinary levels before collapsing suddenly in February 1637, often cited as the first recorded speculative bubble.",
    overview:
      "Contracts for bulbs of prized varieties such as 'Semper Augustus' changed hands for very high sums in the winter of 1636–1637. The market collapsed in early February 1637. Modern historians argue that the wider economic damage was much smaller than later legend suggests.",
    context:
      "Tulips, introduced from the Ottoman Empire in the sixteenth century, became luxury goods in the prosperous Republic. Varieties with striking 'broken' colour patterns, caused by a virus, were especially prized and rare.",
    narrative:
      "Trading took place largely in taverns, through informal futures contracts for bulbs still in the ground. During the winter of 1636–1637 prices for some bulbs rose rapidly, and buyers who were not florists entered the market. At an auction in Haarlem in early February 1637, buyers failed to appear, and prices collapsed.\n\nAuthorities later allowed many contracts to be settled for a fraction of their value. The episode became famous through moralising pamphlets and Charles Mackay's 1841 book Extraordinary Popular Delusions and the Madness of Crowds. Historians such as Anne Goldgar have shown that few people were ruined and that the economy was not seriously affected.",
    causes: [
      "Prosperity and demand for luxury goods",
      "Rarity of virus-patterned tulip varieties",
      "Informal futures trading in bulbs",
    ],
    consequences: [
      "Sudden collapse of bulb prices in 1637",
      "A lasting symbol of speculative bubbles",
      "Historical debate about the scale of the mania",
    ],
    timeline: [
      ["1636", "Prices climb", "Speculative trading spreads."],
      ["1637-02", "Market collapses", "Buyers vanish at an auction in Haarlem."],
      ["1841", "Mackay popularises the story", "Extraordinary Popular Delusions."],
    ],
    relations: [
      ["occurred_during", "dutch-golden-age", "A product of the Republic's prosperity and markets."],
      ["related_to", "wall-street-crash", "Both are classic reference points in the history of speculative bubbles."],
    ],
  },
  {
    slug: "dejima-trading-post",
    title: "The Dutch trading post at Dejima",
    alt: ["Dejima", "Deshima"],
    date: "1641",
    end: "1859",
    period: "early-modern",
    category: "economy",
    region: "east-asia",
    location: "Dejima, Nagasaki, Japan",
    places: ["dejima"],
    wiki: "Dejima",
    discovery: true,
    keywords: ["sakoku", "VOC", "Nagasaki", "rangaku", "Tokugawa"],
    summary:
      "For more than two centuries, a small artificial island in Nagasaki harbour was the only place where Europeans, in the form of the Dutch East India Company, could trade with Japan.",
    overview:
      "In 1641 the Tokugawa shogunate moved the VOC's trading post from Hirado to Dejima, built earlier for Portuguese traders, who had been expelled. Through Dejima, Dutch books and knowledge reached Japan and gave rise to rangaku, 'Dutch learning'.",
    context:
      "The Tokugawa shogunate restricted foreign contact from the 1630s in a policy later called sakoku, banning Christianity and expelling the Portuguese. The Protestant Dutch, who had helped suppress the Shimabara Rebellion and did not proselytise, were allowed to remain under strict conditions.",
    narrative:
      "The fan-shaped island, about 120 by 75 metres, was connected to the city by a guarded bridge. The Dutch traded silver, copper and porcelain for silk, sugar and other goods, and the head of the post travelled to Edo to pay respects to the shogun. Japanese scholars studied Dutch texts on medicine, astronomy and other sciences.\n\nAfter Japan was forced to open to the West in the 1850s, Dejima lost its special role, and the Dutch post closed in 1859. The area was later absorbed by land reclamation. Since the 1990s Nagasaki has been reconstructing the site.",
    causes: [
      "Tokugawa restrictions on foreign contact and Christianity",
      "Expulsion of the Portuguese in 1639",
      "Dutch willingness to trade without missionary activity",
    ],
    consequences: [
      "Japan's main window on Europe for over two centuries",
      "Development of rangaku (Dutch learning) in Japan",
      "Profitable but restricted trade for the VOC",
    ],
    timeline: [
      ["1636", "Dejima built", "Originally for Portuguese merchants."],
      ["1641", "VOC moved to Dejima", "From Hirado, by order of the shogunate."],
      ["1859", "Dutch trading post closes", "After the opening of Japan."],
    ],
    relations: [
      ["related_to", "dutch-east-india-company", "Dejima was operated by the VOC."],
      ["related_to", "battle-of-sekigahara", "The Tokugawa shogunate founded after Sekigahara limited European trade to Dejima."],
    ],
  },
  {
    slug: "the-night-watch",
    title: "Rembrandt paints The Night Watch",
    alt: ["The Night Watch", "Militia Company of District II under the Command of Captain Frans Banninck Cocq"],
    date: "1642",
    period: "early-modern",
    category: "culture",
    region: "europe",
    location: "Amsterdam, Dutch Republic",
    places: ["rijksmuseum", "amsterdam"],
    civ: ["dutch-republic"],
    wiki: "The Night Watch",
    keywords: ["Rembrandt", "civic guard", "Rijksmuseum", "Baroque", "Golden Age painting"],
    summary:
      "Rembrandt completed a large group portrait of an Amsterdam civic militia company, transforming a conventional genre into a dramatic scene of movement and light.",
    overview:
      "Painted for the hall of the Kloveniersdoelen, the militia's headquarters, the work shows Captain Frans Banninck Cocq and his lieutenant leading their company. Its popular name dates from later centuries, when darkened varnish made it look like a night scene.",
    context:
      "Civic militia companies commissioned group portraits to display their status. Most such paintings showed rows of men posed formally. Rembrandt, by then Amsterdam's most sought-after portraitist, received the commission around 1639.",
    narrative:
      "Rembrandt depicted the company in motion as it prepares to march, with dramatic contrasts of light and shadow and a mysterious girl in gold. In 1715 the canvas was trimmed on all sides to fit a wall in Amsterdam's town hall. It has survived several attacks, including a knife attack in 1975.\n\nThe painting is the centrepiece of the Rijksmuseum. Since 2019 it has been studied and restored in public view in the 'Operation Night Watch' research project.",
    causes: [
      "Tradition of militia group portraits in Amsterdam",
      "Rembrandt's prominence as a portraitist",
    ],
    consequences: [
      "Became one of the most famous paintings in the world",
      "Symbol of the Dutch Golden Age",
      "Centrepiece of the Rijksmuseum",
    ],
    timeline: [
      ["1642", "Painting completed", "For the Kloveniersdoelen."],
      ["1715", "Canvas trimmed", "To fit the Amsterdam town hall."],
      ["1885", "Moves to the Rijksmuseum", "Displayed in the new building."],
      ["2019-07-08", "Operation Night Watch begins", "Research and restoration in public view."],
    ],
    people: [["rembrandt", "Painter"]],
    relations: [["occurred_during", "dutch-golden-age", "A masterpiece of Golden Age painting."]],
  },
  {
    slug: "dutch-cape-colony",
    title: "Founding of the Dutch Cape Colony",
    alt: ["Cape Colony", "Jan van Riebeeck at the Cape"],
    date: "1652-04-06",
    period: "early-modern",
    category: "exploration",
    region: "africa",
    location: "Table Bay, Cape of Good Hope",
    places: ["cape-town"],
    wiki: "Dutch Cape Colony",
    keywords: ["Jan van Riebeeck", "VOC", "Cape Town", "Khoikhoi", "Boers", "slavery"],
    summary:
      "Jan van Riebeeck landed at Table Bay to establish a VOC supply station for ships sailing between Europe and Asia, the beginning of Cape Town and of European settlement in South Africa.",
    overview:
      "The station supplied passing fleets with fresh water, vegetables and meat. It grew into a colony of company employees, free burghers and enslaved people brought from Asia and Africa, and expanded at the expense of the Khoikhoi and San peoples.",
    context:
      "VOC ships faced months-long voyages around the Cape of Good Hope, and scurvy was a major killer. The Cape's harbour and climate made it a natural place to resupply.",
    narrative:
      "Van Riebeeck's party built a fort and gardens. From 1657 some company employees were released to farm as free burghers. Disputes with the Khoikhoi over land and cattle led to wars in 1659–1660 and 1673–1677. The colony imported enslaved people from Madagascar, Mozambique, India and the Indonesian archipelago, who by the eighteenth century outnumbered free settlers.\n\nSettler farmers, later known as Boers, moved inland, dispossessing Indigenous peoples. Britain occupied the Cape in 1795 and again in 1806, and it formally became British in 1814. The colonial society created at the Cape shaped the later history of South Africa, including the system of racial segregation.",
    causes: [
      "VOC need for a supply station on the route to Asia",
      "High mortality from scurvy on long voyages",
    ],
    consequences: [
      "Founding of Cape Town",
      "Dispossession of the Khoikhoi and San",
      "A slave society and the origins of the Afrikaner community",
    ],
    timeline: [
      ["1652-04-06", "Van Riebeeck lands", "Supply station founded."],
      ["1657", "First free burghers", "Company employees allowed to farm."],
      ["1795", "First British occupation", "During the French Revolutionary Wars."],
      ["1814", "Cape ceded to Britain", "Confirmed by treaty."],
    ],
    people: [["jan-van-riebeeck", "VOC commander who founded the station"]],
    relations: [
      ["related_to", "end-of-apartheid", "The colonial society founded at the Cape was a distant root of the racial order that apartheid formalised and that ended in 1994."],
    ],
  },
  {
    slug: "pendulum-clock",
    title: "Huygens invents the pendulum clock",
    alt: ["Pendulum clock"],
    date: "1656",
    period: "early-modern",
    category: "science",
    region: "europe",
    location: "The Hague, Dutch Republic",
    places: ["the-hague"],
    wiki: "Pendulum clock",
    keywords: ["Christiaan Huygens", "timekeeping", "pendulum", "Horologium", "Scientific Revolution"],
    dateNote: "Huygens built his first pendulum clock at Christmas 1656 and was granted a patent in June 1657.",
    summary:
      "Christiaan Huygens built the first pendulum clock, improving the accuracy of mechanical clocks from minutes to seconds a day.",
    overview:
      "Building on Galileo's observations of pendulums, Huygens designed a clock regulated by a swinging pendulum. The clockmaker Salomon Coster of The Hague built clocks to his design, and Huygens described the invention in Horologium (1658).",
    context:
      "Mechanical clocks of the time typically lost or gained a quarter of an hour or more each day. Accurate timekeeping mattered for astronomy and, above all, for determining longitude at sea.",
    narrative:
      "Huygens realised that a pendulum's regular period could control a clock's escapement. In Horologium Oscillatorium (1673), he showed mathematically that a pendulum swinging along a cycloidal path keeps exactly equal time regardless of amplitude.\n\nPendulum clocks remained the most accurate timekeepers for nearly three centuries. They did not solve the longitude problem at sea, because ships' motion disturbs a pendulum; that was achieved by John Harrison's marine chronometers in the eighteenth century.",
    causes: [
      "Galileo's study of pendulum motion",
      "Demand for accurate timekeeping in astronomy and navigation",
      "Huygens's mathematical and mechanical skill",
    ],
    consequences: [
      "Clock accuracy improved dramatically",
      "Pendulum clocks remained the standard for nearly 300 years",
      "Advanced the mathematics of oscillation",
    ],
    timeline: [
      ["1656-12", "First pendulum clock", "Built by Huygens at Christmas 1656."],
      ["1657-06-16", "Patent granted", "By the States General."],
      ["1673", "Horologium Oscillatorium", "Mathematical theory of the pendulum."],
    ],
    people: [["christiaan-huygens", "Inventor of the pendulum clock"]],
    relations: [
      ["occurred_during", "dutch-golden-age", "Part of the Republic's scientific flowering."],
      ["followed_by", "newton-principia", "Huygens's work on motion informed the physics Newton synthesised."],
    ],
  },
  {
    slug: "raid-on-the-medway",
    title: "Raid on the Medway",
    alt: ["Battle of Chatham", "Tocht naar Chatham"],
    date: "1667-06-19",
    end: "1667-06-24",
    period: "early-modern",
    category: "conflict",
    region: "europe",
    location: "River Medway and Chatham Dockyard, England",
    places: ["chatham-dockyard"],
    civ: ["dutch-republic"],
    wiki: "Raid on the Medway",
    keywords: ["Michiel de Ruyter", "Second Anglo-Dutch War", "Royal Charles", "Chatham"],
    dateNote: "Dates are Gregorian (used in the Dutch Republic); English sources use the Julian dates 9–14 June 1667.",
    summary:
      "A Dutch fleet under Michiel de Ruyter sailed up the Thames estuary and the Medway, burned English warships at Chatham and towed away the flagship Royal Charles.",
    overview:
      "The raid was one of the worst defeats in the history of the Royal Navy and helped end the Second Anglo-Dutch War on terms favourable to the Republic in the Treaty of Breda.",
    context:
      "England and the Dutch Republic fought three wars over trade and maritime supremacy between 1652 and 1674. By 1667 a cash-starved England had laid up much of its fleet while negotiating peace. Johan de Witt, leader of the Republic, planned a strike to force a settlement.",
    narrative:
      "The Dutch captured Sheerness, broke through a chain across the Medway and attacked the anchored fleet. Several of the largest English warships were burned, and the Royal Charles was captured and taken to the Republic, where its stern ornament remains in the Rijksmuseum. Panic spread in London.\n\nThe humiliation hastened peace. The Treaty of Breda was signed weeks later, and the raid made De Ruyter a national hero.",
    causes: [
      "Anglo-Dutch rivalry over trade and the seas",
      "England's decision to lay up its fleet",
      "Johan de Witt's plan to force peace",
    ],
    consequences: [
      "Severe English naval losses and capture of the Royal Charles",
      "Hastened the Treaty of Breda",
      "Michiel de Ruyter became a Dutch national hero",
    ],
    timeline: [
      ["1665-03", "Second Anglo-Dutch War begins", "England declares war."],
      ["1667-06-20", "Sheerness captured", "Dutch forces land."],
      ["1667-06-23", "Attack on Chatham", "Warships burned; Royal Charles captured."],
      ["1667-07-31", "Treaty of Breda", "Peace concluded."],
    ],
    people: [
      ["michiel-de-ruyter", "Admiral who led the raid"],
      ["johan-de-witt", "Grand Pensionary who planned it"],
    ],
    relations: [["contributed_to", "treaty-of-breda", "The humiliation pushed England to conclude peace."]],
  },
  {
    slug: "treaty-of-breda",
    title: "Treaty of Breda",
    date: "1667-07-31",
    period: "early-modern",
    category: "politics",
    region: "europe",
    location: "Breda, Dutch Republic",
    places: ["breda"],
    civ: ["dutch-republic"],
    wiki: "Treaty of Breda (1667)",
    keywords: ["Second Anglo-Dutch War", "Suriname", "New Amsterdam", "Navigation Acts"],
    summary:
      "England and the Dutch Republic ended the Second Anglo-Dutch War. Each kept what it held, so New Netherland stayed English and Suriname stayed Dutch.",
    overview:
      "Signed on 31 July 1667, together with treaties involving France and Denmark, the peace relaxed English navigation rules in the Republic's favour and confirmed the colonial exchanges of the war.",
    context:
      "The war had seen England seize New Amsterdam in 1664, and Dutch forces take Suriname from England in 1667. After the raid on the Medway, England was eager to make peace.",
    narrative:
      "The principle of uti possidetis, keeping what each side held, meant that the Republic gave up New Netherland while keeping Suriname, with its sugar plantations, and the nutmeg island of Run in the Banda Islands. The treaty also modified the English Navigation Acts, allowing Dutch ships to carry goods from Germany to England.\n\nAt the time, Suriname appeared the more valuable possession. The exchange is often described as Manhattan being traded for Suriname, although the treaty simply confirmed what each side held.",
    causes: [
      "Exhaustion of both sides in the Second Anglo-Dutch War",
      "The Dutch raid on the Medway",
    ],
    consequences: [
      "New Netherland remained English as New York",
      "Suriname remained a Dutch colony until 1975",
      "Easing of English navigation restrictions on Dutch shipping",
    ],
    timeline: [
      ["1664-09-08", "English capture of New Amsterdam", "Gregorian date."],
      ["1667-02-27", "Dutch take Suriname", "From the English."],
      ["1667-07-31", "Treaty signed", "At Breda."],
    ],
    relations: [["followed_by", "rampjaar", "Five years later, England and France attacked the Republic together."]],
  },
  {
    slug: "rampjaar",
    title: "The Disaster Year of 1672",
    alt: ["Rampjaar", "Year of Disaster"],
    date: "1672",
    period: "early-modern",
    category: "conflict",
    region: "europe",
    location: "Dutch Republic",
    places: ["the-hague"],
    civ: ["dutch-republic"],
    wiki: "Rampjaar",
    keywords: ["Franco-Dutch War", "Louis XIV", "De Witt brothers", "William III", "Dutch Water Line"],
    summary:
      "France, England and two German bishoprics attacked the Dutch Republic at once. The government collapsed, the De Witt brothers were murdered, and William III of Orange took power.",
    overview:
      "In 1672 French armies overran much of the Republic, stopped only when the Dutch flooded land along the Holland Water Line. The year marked the end of the Republic's golden age.",
    context:
      "Louis XIV sought to expand France's frontiers and resented Dutch commercial power and support for his rivals. He secretly allied with Charles II of England in the Treaty of Dover (1670). The Republic, governed without a stadtholder by Grand Pensionary Johan de Witt, had neglected its army.",
    narrative:
      "French forces crossed the Rhine in June 1672 and quickly took several provinces. Holland was saved by deliberate flooding of the polders, while De Ruyter's fleet defeated the Anglo-French navy at Solebay. Panic and anger turned on De Witt's regime, and the young William III was made stadtholder. On 20 August 1672 Johan and Cornelis de Witt were lynched by a mob in The Hague.\n\nWilliam stabilised the defence and built alliances against France. England left the war in 1674, and the Franco-Dutch War ended with the Peace of Nijmegen in 1678. William's leadership against Louis XIV later led him to invade England in 1688.",
    causes: [
      "Louis XIV's expansionist aims",
      "The secret Anglo-French Treaty of Dover",
      "A neglected Dutch army",
    ],
    consequences: [
      "Fall and murder of Johan and Cornelis de Witt",
      "William III of Orange became stadtholder",
      "End of the Republic's golden age",
    ],
    timeline: [
      ["1672-04", "War declared", "France and England attack."],
      ["1672-06-07", "Battle of Solebay", "De Ruyter checks the Anglo-French fleet."],
      ["1672-07-04", "William III made stadtholder", "Of Holland."],
      ["1672-08-20", "De Witt brothers murdered", "In The Hague."],
      ["1678-08-10", "Peace of Nijmegen", "Franco-Dutch War ends."],
    ],
    people: [
      ["johan-de-witt", "Grand Pensionary murdered in 1672"],
      ["william-iii-of-england", "Prince of Orange who became stadtholder"],
      ["louis-xiv", "King of France who led the invasion"],
    ],
    relations: [["contributed_to", "glorious-revolution", "William III's struggle against Louis XIV led to his invasion of England in 1688."]],
  },
  {
    slug: "leeuwenhoek-microorganisms",
    title: "Leeuwenhoek describes microorganisms",
    alt: ["Discovery of microorganisms", "Animalcules"],
    date: "1676-10-09",
    period: "early-modern",
    category: "science",
    region: "europe",
    location: "Delft, Dutch Republic",
    places: ["delft"],
    wiki: "Antonie van Leeuwenhoek",
    discovery: true,
    keywords: ["microscope", "animalcules", "bacteria", "Royal Society", "microbiology"],
    dateNote: "Leeuwenhoek first reported single-celled organisms in 1674; his letter of 9 October 1676 to the Royal Society describes them in detail, including what were probably bacteria.",
    summary:
      "Using single-lens microscopes he made himself, the Delft draper Antonie van Leeuwenhoek described tiny living creatures he called 'animalcules', founding the study of microorganisms.",
    overview:
      "Leeuwenhoek reported his observations in letters to the Royal Society in London. His famous letter of 9 October 1676 describes protists and bacteria in water, and was met with scepticism until other observers confirmed his findings.",
    context:
      "Robert Hooke's Micrographia (1665) had popularised the microscope, but compound microscopes of the time had limited magnification. Leeuwenhoek, a cloth merchant and city official in Delft, ground tiny lenses that could magnify more than 200 times.",
    narrative:
      "Leeuwenhoek examined rainwater, pond water, pepper infusions and later the plaque from his own teeth, describing in careful detail organisms invisible to the naked eye. He also observed sperm cells, red blood cells and the flow of blood in capillaries.\n\nThe Royal Society asked Hooke to verify his claims, which he did in 1677. Leeuwenhoek was elected a Fellow in 1680. He worked independently, never publishing a book but writing several hundred letters. Microbiology developed into a science in the nineteenth century with Louis Pasteur and Robert Koch.",
    causes: [
      "Leeuwenhoek's skill in grinding powerful single lenses",
      "Curiosity inspired by Hooke's Micrographia",
      "Correspondence with the Royal Society",
    ],
    consequences: [
      "First descriptions of single-celled organisms and bacteria",
      "Foundations of microbiology",
      "Advances in microscopy and biology",
    ],
    timeline: [
      ["1674", "First report of protists", "In lake water."],
      ["1676-10-09", "Letter to the Royal Society", "Detailed description of 'animalcules'."],
      ["1677-11", "Hooke confirms the observations", "For the Royal Society."],
      ["1680", "Elected Fellow of the Royal Society", "Recognition of his work."],
    ],
    people: [["antonie-van-leeuwenhoek", "Microscopist who described microorganisms"]],
    relations: [
      ["occurred_during", "dutch-golden-age", "Part of the Republic's scientific flowering."],
      ["related_to", "discovery-of-penicillin", "Both are landmarks in humanity's understanding of microbes."],
    ],
  },
  {
    slug: "peace-of-utrecht",
    title: "Peace of Utrecht",
    alt: ["Treaty of Utrecht"],
    date: "1713-04-11",
    period: "early-modern",
    category: "politics",
    region: "europe",
    location: "Utrecht, Dutch Republic",
    places: ["utrecht"],
    wiki: "Peace of Utrecht",
    keywords: ["War of the Spanish Succession", "Gibraltar", "Bourbon", "balance of power", "asiento"],
    summary:
      "A series of treaties signed in Utrecht ended most of the War of the Spanish Succession, confirming a Bourbon king in Spain while preventing the union of the French and Spanish crowns.",
    overview:
      "The main treaties were signed on 11 April 1713. Britain gained Gibraltar, Menorca, Newfoundland and the asiento, the right to supply enslaved Africans to Spanish America. The peace is often seen as a milestone in the idea of a European balance of power.",
    context:
      "When the childless Charles II of Spain died in 1700, he left his realms to Philip of Anjou, grandson of Louis XIV. A Grand Alliance including England, the Dutch Republic and Austria went to war to prevent French dominance.",
    narrative:
      "Negotiations at Utrecht produced separate treaties between France, Spain and the allied powers. Philip V kept the Spanish throne but renounced his claim to France. Austria gained the Spanish Netherlands, Naples and Milan in related treaties of 1714.\n\nFor the Dutch Republic, host of the congress, the peace confirmed a barrier of fortresses in the Austrian Netherlands but showed its decline as a great power. The war had left it with heavy debts, and Britain emerged as the leading maritime power.",
    causes: [
      "The War of the Spanish Succession",
      "Fear of a union of France and Spain",
      "War weariness and a change of government in Britain",
    ],
    consequences: [
      "Bourbon rule in Spain, separate from France",
      "British gains, including Gibraltar and the asiento",
      "Decline of the Dutch Republic as a great power",
    ],
    timeline: [
      ["1701", "War of the Spanish Succession begins", "Grand Alliance against France."],
      ["1713-04-11", "Main treaties signed", "At Utrecht."],
      ["1714-03-07", "Treaty of Rastatt", "France and Austria make peace."],
    ],
    relations: [
      ["related_to", "glorious-revolution", "William III's alliance against Louis XIV shaped the coalition in this war."],
      ["related_to", "atlantic-slave-trade", "The treaty granted Britain the asiento to supply enslaved Africans to Spanish America."],
    ],
  },
];
