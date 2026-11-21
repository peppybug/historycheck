import type { EventSeed } from "../types";

export const earlyModernEvents: EventSeed[] = [
  {
    slug: "treaty-of-tordesillas",
    title: "Treaty of Tordesillas",
    date: "1494-06-07",
    period: "early-modern",
    category: "politics",
    region: "global",
    location: "Tordesillas, Castile (Spain)",
    places: ["tordesillas"],
    wiki: "Treaty of Tordesillas",
    keywords: ["Spain", "Portugal", "line of demarcation", "colonialism", "Brazil"],
    summary:
      "Spain and Portugal divided the lands outside Europe between them along a line 370 leagues west of the Cape Verde islands.",
    overview:
      "Signed on 7 June 1494, the treaty gave Spain lands west of the line and Portugal lands to the east. It explains why Brazil became Portuguese while most of Latin America became Spanish.",
    context:
      "After Columbus's return in 1493, Pope Alexander VI issued bulls granting Spain lands west of a line in the Atlantic. Portugal, which had pioneered exploration down the African coast, objected, and the two crowns negotiated directly.",
    narrative:
      "The treaty moved the papal line further west, to 370 leagues west of Cape Verde. Because the coast of Brazil lay east of this line, Pedro Álvares Cabral's landing there in 1500 gave Portugal a claim in South America. The location of the line in Asia was disputed until the Treaty of Zaragoza in 1529.\n\nThe treaty ignored the rights of the peoples who actually lived in these lands and was never recognised by other European powers such as England, France and the Netherlands, which later challenged Iberian claims.",
    causes: [
      "Columbus's voyage and Spanish claims in the Atlantic",
      "Portuguese exploration along Africa toward Asia",
      "Papal bulls of 1493 favouring Spain",
    ],
    consequences: [
      "Portuguese claim to Brazil",
      "Framework for Iberian colonial empires",
      "Rejected by other European powers seeking colonies",
    ],
    timeline: [
      ["1493-05-04", "Papal bull Inter caetera", "Grants Spain lands to the west."],
      ["1494-06-07", "Treaty signed", "Line moved to 370 leagues west of Cape Verde."],
      ["1500-04-22", "Cabral reaches Brazil", "Claimed for Portugal."],
      ["1529-04-22", "Treaty of Zaragoza", "Line extended to the Pacific side."],
    ],
    relations: [["followed_by", "vasco-da-gama-reaches-india", "Portugal pursued its eastern sphere toward India."]],
  },
  {
    slug: "vasco-da-gama-reaches-india",
    title: "Vasco da Gama reaches India by sea",
    alt: ["Portuguese discovery of the sea route to India"],
    date: "1498-05-20",
    period: "early-modern",
    category: "exploration",
    region: "south-asia",
    location: "Calicut (Kozhikode), India",
    places: ["calicut"],
    wiki: "Portuguese discovery of the sea route to India",
    keywords: ["Portugal", "spice trade", "Cape of Good Hope", "Indian Ocean"],
    summary:
      "Portuguese navigator Vasco da Gama sailed around Africa and reached Calicut, opening a direct sea route from Europe to Asia.",
    overview:
      "Arriving on 20 May 1498, da Gama's expedition established Portugal's access to the Indian Ocean spice trade, bypassing Venetian and Ottoman intermediaries.",
    context:
      "Portuguese sailors had been working down the African coast throughout the fifteenth century. In 1488 Bartolomeu Dias rounded the Cape of Good Hope. The Indian Ocean was already a thriving trading world linking East Africa, Arabia, India and Southeast Asia.",
    narrative:
      "Da Gama left Lisbon in July 1497 with four ships. After rounding the Cape, he visited ports in East Africa, and at Malindi obtained a pilot who guided him across the ocean to Calicut. Negotiations with the Zamorin, Calicut's ruler, were difficult, as Portuguese trade goods impressed few.\n\nThe voyage nonetheless returned with spices worth many times its cost. Portugal soon sent armed fleets, establishing fortified trading posts at Goa, Malacca and Hormuz and seeking to control trade by force. This marked the beginning of European colonial presence in Asia.",
    causes: [
      "Portuguese search for direct access to Asian spices",
      "Decades of Portuguese navigation along Africa",
      "Ottoman and Venetian control of overland and Red Sea routes",
    ],
    consequences: [
      "Direct maritime trade between Europe and Asia",
      "Portuguese armed trading empire in the Indian Ocean",
      "Start of European colonial involvement in South Asia",
    ],
    timeline: [
      ["1488", "Dias rounds the Cape of Good Hope", "Proves Africa can be circumnavigated."],
      ["1497-07-08", "Da Gama leaves Lisbon", "Four ships."],
      ["1498-05-20", "Arrival at Calicut", "Sea route to India achieved."],
      ["1510", "Portuguese capture Goa", "Under Afonso de Albuquerque."],
    ],
    people: [["vasco-da-gama", "Portuguese navigator who led the voyage"]],
    relations: [["related_to", "dutch-east-india-company", "Later European companies competed for the same Asian trade."]],
  },
  {
    slug: "ninety-five-theses",
    title: "Martin Luther's Ninety-five Theses",
    alt: ["Protestant Reformation"],
    date: "1517-10-31",
    period: "early-modern",
    category: "culture",
    region: "europe",
    location: "Wittenberg, Saxony (Germany)",
    places: ["wittenberg"],
    wiki: "Ninety-five Theses",
    featured: false,
    keywords: ["Reformation", "indulgences", "Catholic Church", "Protestantism"],
    summary:
      "Martin Luther challenged the sale of indulgences in a set of theses for academic debate, sparking the Protestant Reformation.",
    overview:
      "On 31 October 1517, Luther sent his Ninety-five Theses to the Archbishop of Mainz. Tradition says he also posted them on the door of the Castle Church in Wittenberg, though this is debated. Printed copies spread rapidly.",
    context:
      "The Church was raising funds to rebuild St Peter's Basilica in Rome through indulgences — remissions of punishment for sin. The preacher Johann Tetzel's aggressive sales in Germany offended Luther, a monk and theology professor.",
    narrative:
      "The theses questioned the theological basis for indulgences and the pope's authority over purgatory. Thanks to the printing press, they circulated across Germany within weeks. Luther developed his ideas into a broader critique: salvation by faith alone, the authority of Scripture over Church tradition and the priesthood of all believers.\n\nExcommunicated in 1521 and declared an outlaw at the Diet of Worms, Luther was protected by Elector Frederick of Saxony and translated the New Testament into German. The Reformation split Western Christianity and contributed to more than a century of religious conflict.",
    causes: [
      "Sale of indulgences to fund St Peter's Basilica",
      "Long-standing criticism of Church corruption",
      "Printing press enabling rapid spread of ideas",
    ],
    consequences: [
      "Protestant Reformation and division of Western Christianity",
      "Wars of religion across Europe",
      "Catholic Counter-Reformation, including the Council of Trent",
    ],
    timeline: [
      ["1517-10-31", "Theses sent", "To Archbishop Albrecht of Mainz."],
      ["1521-01-03", "Luther excommunicated", "By Pope Leo X."],
      ["1521-04", "Diet of Worms", "Luther refuses to recant."],
      ["1545-12-13", "Council of Trent opens", "Catholic response to the Reformation."],
    ],
    people: [["martin-luther", "Theologian who wrote the theses"]],
    relations: [["contributed_to", "thirty-years-war", "Religious division set the stage for Europe's wars of religion."]],
  },
  {
    slug: "magellan-circumnavigation",
    title: "Magellan–Elcano circumnavigation",
    alt: ["First circumnavigation of the globe"],
    date: "1519-09-20",
    end: "1522-09-06",
    period: "early-modern",
    category: "exploration",
    region: "global",
    location: "Atlantic, Pacific and Indian Oceans",
    places: ["strait-of-magellan"],
    wiki: "Magellan expedition",
    keywords: ["Ferdinand Magellan", "Juan Sebastián Elcano", "Pacific Ocean", "Victoria"],
    summary:
      "A Spanish expedition led by Ferdinand Magellan, and completed by Juan Sebastián Elcano, became the first to sail around the world.",
    overview:
      "Five ships and about 270 men left Spain in 1519. Only one ship, the Victoria, returned in 1522 with 18 survivors. Magellan himself was killed in the Philippines in 1521.",
    context:
      "Spain sought a western route to the Spice Islands (Moluccas), which might fall within its zone under the Treaty of Tordesillas. Magellan, a Portuguese navigator, offered his services to the Spanish crown.",
    narrative:
      "The fleet crossed the Atlantic, wintered in Patagonia, survived a mutiny and found the strait at the tip of South America now named after Magellan. The Pacific crossing took over three months, and many crew died of scurvy and starvation.\n\nIn the Philippines, Magellan was killed at the Battle of Mactan in April 1521 by forces led by the local chief Lapulapu. Elcano led the remaining ship west across the Indian Ocean and around Africa. The voyage proved the vast size of the Pacific and that the world's oceans were connected.",
    causes: [
      "Spanish search for a western route to the Spice Islands",
      "Rivalry with Portugal under the Treaty of Tordesillas",
      "Magellan's navigational ambition",
    ],
    consequences: [
      "First circumnavigation of the globe",
      "Revealed the true scale of the Pacific Ocean",
      "Led to Spanish colonisation of the Philippines from 1565",
    ],
    timeline: [
      ["1519-09-20", "Departure from Sanlúcar de Barrameda", "Five ships."],
      ["1520-11", "Passage through the strait", "Into the Pacific."],
      ["1521-04-27", "Magellan killed at Mactan", "Philippines."],
      ["1522-09-06", "Victoria returns to Spain", "18 survivors."],
    ],
    people: [
      ["ferdinand-magellan", "Commander of the expedition"],
      ["juan-sebastian-elcano", "Navigator who completed the voyage"],
      ["lapulapu", "Mactan chief whose forces killed Magellan"],
    ],
  },
  {
    slug: "fall-of-tenochtitlan",
    title: "Fall of Tenochtitlan",
    alt: ["Spanish conquest of the Aztec Empire"],
    date: "1521-08-13",
    period: "early-modern",
    category: "conflict",
    region: "latin-america",
    location: "Tenochtitlan (Mexico City)",
    places: ["tenochtitlan"],
    civ: ["aztec"],
    wiki: "Fall of Tenochtitlan",
    keywords: ["Hernán Cortés", "Moctezuma II", "Cuauhtémoc", "Tlaxcala", "smallpox"],
    summary:
      "Spanish conquistadors and tens of thousands of Indigenous allies captured Tenochtitlan after a siege, ending the Aztec Empire.",
    overview:
      "The city fell on 13 August 1521 after a 75-day siege, with the capture of the last emperor, Cuauhtémoc. Smallpox, introduced from Europe, had already killed many of the city's people.",
    context:
      "Hernán Cortés landed in Mexico in 1519 and allied with peoples hostile to the Aztecs, especially the Tlaxcalans. He entered Tenochtitlan and took Moctezuma II hostage. In 1520 the Spanish were driven out, suffering heavy losses on the 'Noche Triste'.",
    narrative:
      "Cortés regrouped with his allies, built brigantines to control Lake Texcoco and cut the city's causeways and water supply. The defenders, led by Cuauhtémoc, fought street by street while suffering from famine and disease. The smallpox epidemic of 1520 had killed Moctezuma's successor, Cuitláhuac.\n\nAfter the fall, the Spanish built Mexico City on the ruins and established the Viceroyalty of New Spain. The conquest was achieved largely with Indigenous allies, whose role is emphasised in modern historiography. The population of central Mexico collapsed over the following century due to epidemics, violence and forced labour.",
    causes: [
      "Spanish ambitions for wealth and conquest",
      "Alliances with peoples opposed to Aztec rule",
      "Smallpox epidemic devastating the population",
    ],
    consequences: [
      "End of the Aztec Empire",
      "Founding of New Spain and Mexico City on the ruins",
      "Catastrophic decline of Indigenous populations",
    ],
    timeline: [
      ["1519-11-08", "Cortés enters Tenochtitlan", "Meets Moctezuma II."],
      ["1520-06-30", "Noche Triste", "Spanish driven out of the city."],
      ["1521-05-26", "Siege begins", "Causeways cut."],
      ["1521-08-13", "City falls", "Cuauhtémoc captured."],
    ],
    people: [
      ["hernan-cortes", "Spanish conquistador who led the conquest"],
      ["moctezuma-ii", "Aztec emperor at the time of Spanish arrival"],
      ["cuauhtemoc", "Last Aztec emperor, who led the defence"],
    ],
    relations: [["followed_by", "battle-of-cajamarca", "A similar pattern of conquest followed in the Andes."]],
  },
  {
    slug: "first-battle-of-panipat",
    title: "First Battle of Panipat",
    alt: ["Founding of the Mughal Empire"],
    date: "1526-04-21",
    period: "early-modern",
    category: "conflict",
    region: "south-asia",
    location: "Panipat, near Delhi, India",
    places: ["panipat"],
    civ: ["mughal"],
    wiki: "First Battle of Panipat",
    keywords: ["Babur", "Ibrahim Lodi", "Mughal Empire", "gunpowder", "Delhi Sultanate"],
    summary:
      "Babur, a Timurid prince from Central Asia, defeated Sultan Ibrahim Lodi of Delhi, laying the foundation of the Mughal Empire.",
    overview:
      "On 21 April 1526, Babur's smaller army used field artillery and cavalry tactics to defeat the much larger Lodi army. Ibrahim Lodi was killed.",
    context:
      "Babur, a descendant of Timur and Genghis Khan, had lost his homeland in Ferghana and established himself in Kabul. The Lodi dynasty of the Delhi Sultanate faced internal revolt, and some nobles invited Babur to intervene.",
    narrative:
      "Babur arranged carts chained together as a barrier, with gunners and matchlock men behind, and used cavalry to attack the flanks. The Lodi army, including war elephants, was thrown into confusion by gunfire. Babur recorded the battle in his memoir, the Baburnama.\n\nBabur took Delhi and Agra, and his victory over Rajput forces at Khanwa in 1527 consolidated his rule. Under his grandson Akbar, the Mughal Empire became one of the largest and wealthiest states in the world.",
    causes: [
      "Babur's ambition after losing Central Asian lands",
      "Weakness and internal divisions of the Lodi sultanate",
      "Babur's use of gunpowder weapons and mobile tactics",
    ],
    consequences: [
      "End of the Lodi dynasty",
      "Foundation of the Mughal Empire",
      "Spread of gunpowder warfare in South Asia",
    ],
    timeline: [
      ["1504", "Babur captures Kabul", "Base for his campaigns."],
      ["1526-04-21", "Battle of Panipat", "Ibrahim Lodi killed."],
      ["1527-03-16", "Battle of Khanwa", "Babur defeats the Rajput confederacy."],
      ["1556", "Akbar becomes emperor", "Mughal golden age begins."],
    ],
    people: [["babur", "Founder of the Mughal Empire"]],
    relations: [["followed_by", "construction-of-taj-mahal", "Babur's dynasty built the Taj Mahal a century later."]],
  },
  {
    slug: "battle-of-cajamarca",
    title: "Capture of Atahualpa at Cajamarca",
    alt: ["Battle of Cajamarca", "Spanish conquest of the Inca Empire"],
    date: "1532-11-16",
    period: "early-modern",
    category: "conflict",
    region: "latin-america",
    location: "Cajamarca, Peru",
    places: ["cajamarca"],
    civ: ["inca"],
    wiki: "Battle of Cajamarca",
    keywords: ["Francisco Pizarro", "Atahualpa", "Inca", "conquistadors", "ransom room"],
    summary:
      "Francisco Pizarro's small Spanish force ambushed and captured the Inca emperor Atahualpa, beginning the Spanish conquest of the Inca Empire.",
    overview:
      "On 16 November 1532, about 170 Spaniards attacked Atahualpa's retinue in the plaza of Cajamarca, killing thousands. Atahualpa paid a vast ransom in gold and silver but was executed in 1533.",
    context:
      "The Inca Empire had just emerged from a civil war between the half-brothers Atahualpa and Huáscar, and epidemics of European diseases had spread ahead of the Spanish. Pizarro had reconnoitred the coast in earlier expeditions.",
    narrative:
      "Atahualpa agreed to meet the Spanish in Cajamarca's plaza. When a friar presented him with a breviary and he rejected it, the Spanish opened fire with guns and cannon and charged with cavalry. Atahualpa was seized.\n\nHe offered to fill a room with gold and twice with silver. The ransom was paid, but the Spanish executed him in July 1533. They captured Cusco later that year. Inca resistance continued for decades, ending with the capture of Túpac Amaru at Vilcabamba in 1572.",
    causes: [
      "Spanish ambition for gold and conquest",
      "Inca civil war between Atahualpa and Huáscar",
      "European epidemics weakening the empire",
    ],
    consequences: [
      "Fall of the Inca Empire",
      "Spanish colonial rule in the Andes",
      "Massive extraction of silver, including later from Potosí",
    ],
    timeline: [
      ["1532-11-16", "Atahualpa captured", "At Cajamarca."],
      ["1533-07-26", "Atahualpa executed", "Despite the ransom."],
      ["1533-11-15", "Spanish enter Cusco", "The Inca capital."],
      ["1572", "Fall of Vilcabamba", "Túpac Amaru executed."],
    ],
    people: [
      ["francisco-pizarro", "Spanish conquistador"],
      ["atahualpa", "Last Sapa Inca of the empire"],
    ],
  },
  {
    slug: "copernican-heliocentrism",
    title: "Copernicus publishes De revolutionibus",
    alt: ["Copernican heliocentrism", "On the Revolutions of the Heavenly Spheres"],
    date: "1543",
    period: "early-modern",
    category: "science",
    region: "europe",
    location: "Nuremberg, Holy Roman Empire",
    places: ["frombork"],
    wiki: "De revolutionibus orbium coelestium",
    keywords: ["heliocentrism", "Nicolaus Copernicus", "Scientific Revolution", "astronomy"],
    summary:
      "Nicolaus Copernicus published his model of a sun-centred universe, challenging the earth-centred cosmology that had dominated for over a millennium.",
    overview:
      "De revolutionibus orbium coelestium was printed in Nuremberg in 1543, the year Copernicus died. It placed the sun near the centre of the universe with the earth as one of the planets orbiting it.",
    context:
      "European astronomy followed Ptolemy's geocentric model, which used complex epicycles to predict planetary positions. Copernicus, a canon at Frombork in Poland, developed his alternative over decades, circulating a short outline around 1514.",
    narrative:
      "Copernicus argued that the earth rotates daily on its axis and orbits the sun annually, explaining the apparent retrograde motion of planets more naturally. His model still used circular orbits and epicycles. An unsigned preface by the theologian Andreas Osiander presented it as a mathematical hypothesis rather than a physical truth.\n\nThe book's influence grew slowly. Later astronomers — Tycho Brahe, Johannes Kepler and Galileo — built on and tested it. In 1616 the Catholic Church placed it on the Index of Forbidden Books pending corrections.",
    causes: [
      "Problems and complexity of the Ptolemaic system",
      "Renaissance revival of ancient astronomical ideas",
      "Decades of Copernicus's own calculations",
    ],
    consequences: [
      "Launched the Copernican Revolution in astronomy",
      "Provided the basis for Kepler's laws and Galileo's work",
      "Challenged established religious and philosophical authority",
    ],
    timeline: [
      ["~1514", "Commentariolus circulated", "Copernicus outlines his theory."],
      ["1543", "De revolutionibus published", "Copernicus dies the same year."],
      ["1609", "Kepler's Astronomia nova", "Elliptical orbits."],
      ["1616", "Book placed on the Index", "Pending correction."],
    ],
    people: [["nicolaus-copernicus", "Astronomer who proposed the heliocentric model"]],
    relations: [["led_to", "trial-of-galileo", "Galileo's defence of Copernicanism led to his trial."]],
    sources: [
      { url: "https://plato.stanford.edu/entries/copernicus/", title: "Nicolaus Copernicus", publisher: "Stanford Encyclopedia of Philosophy", type: "academic" },
    ],
  },
  {
    slug: "spanish-armada",
    title: "Defeat of the Spanish Armada",
    alt: ["Spanish Armada"],
    date: "1588-07",
    end: "1588-09",
    period: "early-modern",
    category: "conflict",
    region: "europe",
    location: "English Channel and North Sea",
    places: ["gravelines"],
    wiki: "Spanish Armada",
    keywords: ["Elizabeth I", "Philip II", "Francis Drake", "fireships", "Gravelines"],
    summary:
      "A Spanish fleet sent by Philip II to invade England was harried by the English navy, scattered by fireships and wrecked by storms on its return.",
    overview:
      "The Armada of about 130 ships sailed in 1588 to escort an army from the Spanish Netherlands across the Channel. After the Battle of Gravelines, it was forced north around Scotland and Ireland, where many ships were lost.",
    context:
      "Protestant England under Elizabeth I supported the Dutch revolt against Spain and English privateers attacked Spanish shipping. The execution of the Catholic Mary, Queen of Scots, in 1587 helped push Philip II to invade.",
    narrative:
      "The Armada entered the Channel in late July (dates in English sources follow the Julian calendar, ten days behind the Gregorian used in Spain). English ships, faster and better armed with long-range guns, harassed it. At Calais, English fireships broke the Armada's formation, and the Battle of Gravelines followed.\n\nUnable to rendezvous with the Duke of Parma's army, the Armada sailed home around the British Isles, where storms wrecked many ships off Ireland and Scotland. The defeat secured Protestant England, though the Anglo-Spanish War continued until 1604.",
    causes: [
      "Religious conflict between Catholic Spain and Protestant England",
      "English support for the Dutch revolt and privateering",
      "Execution of Mary, Queen of Scots",
    ],
    consequences: [
      "Prevented a Spanish invasion of England",
      "Boosted English national identity and naval confidence",
      "The war continued until the Treaty of London in 1604",
    ],
    timeline: [
      ["1587-02-08", "Execution of Mary, Queen of Scots", "Spurs Spanish invasion plans."],
      ["1588-05", "Armada sails from Lisbon", "About 130 ships."],
      ["1588-08-08", "Battle of Gravelines", "Gregorian date; Armada formation broken."],
      ["1604", "Treaty of London", "Ends the Anglo-Spanish War."],
    ],
    people: [
      ["elizabeth-i", "Queen of England"],
      ["philip-ii-of-spain", "King of Spain who launched the Armada"],
      ["francis-drake", "English vice-admiral"],
    ],
  },
  {
    slug: "battle-of-sekigahara",
    title: "Battle of Sekigahara",
    date: "1600-10-21",
    period: "early-modern",
    category: "conflict",
    region: "east-asia",
    location: "Sekigahara, Mino Province, Japan",
    places: ["sekigahara"],
    wiki: "Battle of Sekigahara",
    keywords: ["Tokugawa Ieyasu", "shogunate", "samurai", "Edo period", "Ishida Mitsunari"],
    summary:
      "Tokugawa Ieyasu defeated a coalition of western lords, securing control of Japan and leading to the Tokugawa shogunate, which ruled for over 250 years.",
    overview:
      "On 21 October 1600, about 160,000 samurai fought in the largest battle of feudal Japan. Defections from the western army to Ieyasu's side decided the outcome.",
    context:
      "After the death of Toyotomi Hideyoshi in 1598, who had unified Japan, power struggles broke out among his regents. Ieyasu, the most powerful daimyo, was opposed by a coalition led by Ishida Mitsunari.",
    narrative:
      "The battle was fought in fog in a narrow valley. Kobayakawa Hideaki, who had secretly agreed to support Ieyasu, hesitated until midday before attacking his own allies. Other western lords followed, and the coalition collapsed. Ishida was captured and executed.\n\nIn 1603 the emperor appointed Ieyasu shogun. The Tokugawa shogunate, based in Edo (Tokyo), brought a long era of peace, strict social order and, from the 1630s, restrictions on foreign contact known as sakoku. It lasted until 1868.",
    causes: [
      "Power vacuum after Toyotomi Hideyoshi's death",
      "Rivalry between Tokugawa Ieyasu and Ishida Mitsunari",
      "Shifting loyalties among daimyo",
    ],
    consequences: [
      "Tokugawa Ieyasu became shogun in 1603",
      "Over 250 years of Tokugawa rule (the Edo period)",
      "Relative peace and isolation from foreign influence",
    ],
    timeline: [
      ["1598-09-18", "Death of Hideyoshi", "Succession struggle begins."],
      ["1600-10-21", "Battle of Sekigahara", "Ieyasu victorious."],
      ["1603", "Ieyasu becomes shogun", "Tokugawa shogunate founded."],
      ["1868-01-03", "Meiji Restoration", "End of the shogunate."],
    ],
    people: [["tokugawa-ieyasu", "Victor who founded the Tokugawa shogunate"]],
    relations: [["followed_by", "meiji-restoration", "The shogunate founded after Sekigahara lasted until 1868."]],
  },
  {
    slug: "dutch-east-india-company",
    title: "Founding of the Dutch East India Company",
    alt: ["VOC", "Vereenigde Oostindische Compagnie"],
    date: "1602-03-20",
    period: "early-modern",
    category: "economy",
    region: "southeast-asia",
    location: "Amsterdam, Dutch Republic; Batavia (Jakarta)",
    places: ["amsterdam", "batavia"],
    wiki: "Dutch East India Company",
    keywords: ["VOC", "joint-stock company", "spice trade", "colonialism", "Indonesia"],
    summary:
      "The Dutch Republic chartered the VOC, a trading company with powers to wage war and govern territory, which became a model for the joint-stock corporation.",
    overview:
      "Founded on 20 March 1602, the VOC dominated the Asian spice trade for much of the seventeenth century. It issued tradable shares, contributing to the development of the Amsterdam stock exchange.",
    context:
      "Dutch merchants had begun sailing to Asia in the 1590s, competing among themselves and with Portugal. The States General merged these companies into a single enterprise with a monopoly on Dutch trade east of the Cape of Good Hope.",
    narrative:
      "The VOC could maintain armies, build forts, sign treaties and coin money. Under Jan Pieterszoon Coen, it founded Batavia (Jakarta) in 1619 as its Asian headquarters. It seized control of nutmeg production in the Banda Islands in 1621, killing or enslaving much of the population.\n\nThe company operated across Asia, from Japan (Dejima) to South Africa (Cape Colony, 1652). Its profits were immense in the seventeenth century, but corruption and competition led to decline. It was dissolved in 1799, and its territories became the Dutch East Indies.",
    causes: [
      "Competition among Dutch traders in Asia",
      "Rivalry with Portugal and England",
      "Demand for spices in Europe",
    ],
    consequences: [
      "Dutch dominance of the spice trade",
      "Pioneered tradable corporate shares",
      "Colonial rule and violence in Indonesia and beyond",
    ],
    timeline: [
      ["1602-03-20", "VOC chartered", "By the States General."],
      ["1619", "Batavia founded", "VOC headquarters in Asia."],
      ["1621", "Conquest of the Banda Islands", "Control of nutmeg."],
      ["1799-12-31", "VOC dissolved", "Assets taken over by the state."],
    ],
    people: [["jan-pieterszoon-coen", "Governor-General who founded Batavia"]],
  },
  {
    slug: "founding-of-jamestown",
    title: "Founding of Jamestown",
    date: "1607-05-14",
    period: "early-modern",
    category: "exploration",
    region: "north-america",
    location: "Jamestown, Virginia",
    places: ["jamestown"],
    wiki: "Jamestown, Virginia",
    keywords: ["Virginia Company", "Powhatan", "John Smith", "Pocahontas", "tobacco"],
    summary:
      "English colonists sponsored by the Virginia Company established Jamestown, the first permanent English settlement in North America.",
    overview:
      "The settlement on the James River survived starvation, disease and conflict with the Powhatan Confederacy. Tobacco cultivation made it profitable and shaped the colony's reliance on forced labour.",
    context:
      "England sought to compete with Spain in the Americas. Earlier attempts, including Roanoke in the 1580s, had failed. The land was home to the Powhatan Confederacy, led by Wahunsenacah (Chief Powhatan).",
    narrative:
      "About 104 men and boys landed in May 1607. The site was swampy, and many died of disease and starvation; the winter of 1609–1610 was called 'the Starving Time'. Captain John Smith's leadership and trade with the Powhatan helped the colony survive its early years.\n\nJohn Rolfe introduced a sweeter tobacco strain around 1612, which became a lucrative export. In 1619 the first representative assembly met, and the first recorded enslaved Africans arrived in the colony. Conflicts with the Powhatan escalated into wars in 1622 and 1644.",
    causes: [
      "English rivalry with Spain in the Americas",
      "Commercial investment by the Virginia Company",
      "Search for profitable resources",
    ],
    consequences: [
      "First permanent English colony in North America",
      "Expansion of tobacco plantations and enslaved labour",
      "Displacement of Powhatan peoples",
    ],
    timeline: [
      ["1607-05-14", "Jamestown founded", "Settlers land on the James River."],
      ["1609", "The Starving Time", "Most colonists die."],
      ["1614", "Marriage of Pocahontas and John Rolfe", "A period of peace."],
      ["1619", "First General Assembly; arrival of enslaved Africans", "Two defining events."],
    ],
    people: [
      ["john-smith", "Colonial leader"],
      ["pocahontas", "Powhatan woman who married John Rolfe"],
    ],
    relations: [["related_to", "atlantic-slave-trade", "Jamestown became one of the first English colonies to use enslaved African labour."]],
  },
  {
    slug: "atlantic-slave-trade",
    title: "The transatlantic slave trade",
    alt: ["Atlantic slave trade", "Middle Passage"],
    date: "C16",
    end: "1867",
    period: "early-modern",
    category: "society",
    region: "global",
    location: "Africa, the Atlantic, the Americas and Europe",
    places: ["elmina-castle", "goree"],
    wiki: "Atlantic slave trade",
    keywords: ["slavery", "Middle Passage", "plantations", "abolition", "triangular trade"],
    summary:
      "Over roughly three and a half centuries, European traders forcibly transported about 12.5 million enslaved Africans across the Atlantic to the Americas.",
    overview:
      "The trade, which grew from the sixteenth century and peaked in the eighteenth, supplied labour for plantations producing sugar, tobacco, cotton and coffee. Around 1.8 million people are estimated to have died during the Middle Passage alone.",
    context:
      "Portuguese traders began taking enslaved Africans to Europe and Atlantic islands in the fifteenth century. Colonisation of the Americas and the collapse of Indigenous populations created demand for labour that European powers met through the trade in captive Africans.",
    narrative:
      "Ships sailed from Europe to West and Central Africa with manufactured goods, exchanged them for captives taken in wars or raids, and carried those captives across the Atlantic in brutal conditions. Enslaved people were sold in Brazil, the Caribbean, North America and Spanish America, where they and their descendants were held in hereditary bondage.\n\nThe Trans-Atlantic Slave Trade Database records over 36,000 voyages. Enslaved people resisted constantly, through revolts, flight and the preservation of culture. Abolition movements — and the Haitian Revolution — led Britain to ban the trade in 1807 and the United States in 1808. The last known voyages ended in the 1860s; Brazil abolished slavery in 1888.",
    causes: [
      "Demand for labour on American plantations",
      "Collapse of Indigenous populations in the Americas",
      "Profits for European merchants, states and their partners",
    ],
    consequences: [
      "Death and suffering of millions of Africans",
      "Creation of African diasporas across the Americas",
      "Lasting legacies of racism and inequality",
    ],
    timeline: [
      ["1526", "Early direct voyages from Africa to the Americas", "Under Portuguese and Spanish flags."],
      ["D1780", "Peak of the trade", "Tens of thousands of captives per year."],
      ["1807-03-25", "British Slave Trade Act", "Britain abolishes its trade."],
      ["1888-05-13", "Brazil abolishes slavery", "The last country in the Americas to do so."],
    ],
    people: [["olaudah-equiano", "Formerly enslaved writer and abolitionist"]],
    relations: [
      ["led_to", "haitian-revolution", "The brutality of plantation slavery provoked the revolt of the enslaved in Saint-Domingue."],
      ["led_to", "slavery-abolition-act", "Abolitionist campaigns arose in response to the trade."],
    ],
    sources: [
      { url: "https://www.slavevoyages.org/", title: "Trans-Atlantic Slave Trade Database", publisher: "SlaveVoyages (Rice University and partners)", type: "database" },
    ],
  },
  {
    slug: "thirty-years-war",
    title: "Thirty Years' War",
    date: "1618-05-23",
    end: "1648-10-24",
    period: "early-modern",
    category: "conflict",
    region: "europe",
    location: "Central Europe",
    places: ["prague"],
    wiki: "Thirty Years' War",
    keywords: ["Defenestration of Prague", "Holy Roman Empire", "Habsburgs", "Gustavus Adolphus"],
    summary:
      "A series of wars, rooted in religious conflict within the Holy Roman Empire, drew in most European powers and devastated the German lands.",
    overview:
      "Beginning with the Defenestration of Prague in 1618 and ending with the Peace of Westphalia in 1648, the war killed millions through fighting, famine and disease. Some regions lost a third or more of their population.",
    context:
      "The Peace of Augsburg (1555) had let rulers choose between Lutheranism and Catholicism, but tensions persisted, especially with the rise of Calvinism. Habsburg efforts to enforce Catholicism in Bohemia provoked revolt.",
    narrative:
      "Protestant nobles in Prague threw two imperial officials from a castle window in 1618. The Bohemian revolt was crushed at the Battle of White Mountain in 1620, but the war widened as Denmark, Sweden under Gustavus Adolphus, and later Catholic France entered against the Habsburgs. Mercenary armies lived off the land, causing widespread devastation.\n\nThe war increasingly became a struggle for political power among European states, as Catholic France supported Protestant powers against the Catholic Habsburgs. It ended through lengthy negotiations in Westphalia.",
    causes: [
      "Religious divisions within the Holy Roman Empire",
      "Habsburg attempts to impose Catholicism in Bohemia",
      "Rivalry between France, Sweden and the Habsburgs",
    ],
    consequences: [
      "Massive loss of life in Central Europe",
      "Peace of Westphalia reshaped European politics",
      "Weakened Habsburg imperial authority in Germany",
    ],
    timeline: [
      ["1618-05-23", "Defenestration of Prague", "Bohemian revolt begins."],
      ["1620-11-08", "Battle of White Mountain", "Bohemian rebels defeated."],
      ["1631-05-20", "Sack of Magdeburg", "One of the war's worst atrocities."],
      ["1648-10-24", "Peace of Westphalia", "War ends."],
    ],
    people: [["gustavus-adolphus", "King of Sweden who intervened for the Protestants"]],
    relations: [["led_to", "peace-of-westphalia", "Exhaustion and stalemate brought the powers to negotiate."]],
  },
  {
    slug: "peace-of-westphalia",
    title: "Peace of Westphalia",
    date: "1648-10-24",
    period: "early-modern",
    category: "politics",
    region: "europe",
    location: "Osnabrück and Münster, Westphalia",
    places: ["munster"],
    wiki: "Peace of Westphalia",
    keywords: ["sovereignty", "Thirty Years' War", "Dutch independence", "treaty"],
    summary:
      "A set of treaties signed in Münster and Osnabrück ended the Thirty Years' War and the Eighty Years' War between Spain and the Dutch Republic.",
    overview:
      "The peace confirmed the independence of the Dutch Republic and Switzerland, extended religious toleration to Calvinists and strengthened the autonomy of the German states. It is often cited as a foundation of the modern system of sovereign states, though historians debate this.",
    context:
      "By the 1640s, all sides were exhausted. Negotiations began in 1643 with delegations from across Europe meeting in two Westphalian cities — Catholics in Münster and Protestants in Osnabrück.",
    narrative:
      "The Peace of Münster between Spain and the Dutch Republic was ratified in May 1648; the treaties of Osnabrück and Münster ending the Thirty Years' War were signed on 24 October. France and Sweden gained territory, and the princes of the Empire gained the right to make alliances.\n\nThe idea of 'Westphalian sovereignty' — non-interference in the internal affairs of states — became central to international relations theory, although many scholars argue the treaties themselves did not establish it in the way later theorists claimed.",
    causes: [
      "Exhaustion after three decades of war",
      "Military stalemate among the major powers",
      "Diplomatic efforts led by France, Sweden and the Empire",
    ],
    consequences: [
      "End of the Thirty Years' War and the Eighty Years' War",
      "Recognition of Dutch and Swiss independence",
      "A reference point for the principle of state sovereignty",
    ],
    timeline: [
      ["1643", "Negotiations open", "In Münster and Osnabrück."],
      ["1648-05-15", "Peace of Münster ratified", "Spain recognises the Dutch Republic."],
      ["1648-10-24", "Treaties signed", "Thirty Years' War ends."],
    ],
    sources: [
      { url: "https://avalon.law.yale.edu/17th_century/westphal.asp", title: "Treaty of Westphalia (text)", publisher: "Avalon Project, Yale Law School", type: "primary_document" },
    ],
  },
  {
    slug: "trial-of-galileo",
    title: "Trial of Galileo",
    alt: ["Galileo affair"],
    date: "1633-06-22",
    period: "early-modern",
    category: "science",
    region: "europe",
    location: "Rome",
    places: ["rome"],
    wiki: "Galileo affair",
    keywords: ["Galileo Galilei", "Inquisition", "heliocentrism", "telescope", "Dialogue"],
    summary:
      "The Roman Inquisition found Galileo Galilei 'vehemently suspect of heresy' for defending the Copernican theory and sentenced him to house arrest for life.",
    overview:
      "On 22 June 1633, Galileo was forced to abjure his support for heliocentrism. His Dialogue Concerning the Two Chief World Systems was banned. He spent his remaining years under house arrest near Florence.",
    context:
      "Galileo's telescopic discoveries from 1609 — Jupiter's moons, the phases of Venus — supported the Copernican model. In 1616 the Church declared heliocentrism 'formally heretical' and warned Galileo not to hold or defend it.",
    narrative:
      "In 1632 Galileo published his Dialogue, presenting the Copernican and Ptolemaic systems through characters. Its defender of the traditional view, Simplicio, was seen as mocking Pope Urban VIII, who had previously been sympathetic to Galileo. He was summoned to Rome and tried.\n\nUnder house arrest, Galileo wrote Two New Sciences (1638), foundational to physics. The ban on his Dialogue was lifted in 1835. In 1992, Pope John Paul II acknowledged that the Church had erred in its treatment of Galileo.",
    causes: [
      "Galileo's public defence of Copernicanism",
      "The 1616 decree against heliocentrism",
      "The perceived mockery of Pope Urban VIII",
    ],
    consequences: [
      "Galileo's house arrest and the banning of his book",
      "Became a lasting symbol of conflict between science and authority",
      "Formal acknowledgement of error by the Church in 1992",
    ],
    timeline: [
      ["1610", "Sidereus Nuncius", "Galileo publishes telescopic discoveries."],
      ["1616-02-26", "Galileo warned", "Ordered to abandon Copernicanism."],
      ["1632", "Dialogue published", "In Florence."],
      ["1633-06-22", "Abjuration and sentence", "House arrest for life."],
    ],
    people: [
      ["galileo-galilei", "Astronomer and physicist tried by the Inquisition"],
      ["pope-urban-viii", "Pope at the time of the trial"],
    ],
    relations: [["followed_by", "newton-principia", "Newton's physics later provided a mechanism for the sun-centred system."]],
    sources: [
      { url: "https://plato.stanford.edu/entries/galileo/", title: "Galileo Galilei", publisher: "Stanford Encyclopedia of Philosophy", type: "academic" },
    ],
  },
  {
    slug: "construction-of-taj-mahal",
    title: "Construction of the Taj Mahal",
    date: "1632",
    end: "1653",
    period: "early-modern",
    category: "culture",
    region: "south-asia",
    location: "Agra, India",
    places: ["agra"],
    civ: ["mughal"],
    wiki: "Taj Mahal",
    featured: false,
    keywords: ["Shah Jahan", "Mumtaz Mahal", "Mughal architecture", "mausoleum"],
    summary:
      "The Mughal emperor Shah Jahan built a white marble mausoleum in Agra for his wife Mumtaz Mahal, one of the masterpieces of world architecture.",
    overview:
      "Construction began around 1632, after Mumtaz Mahal died in childbirth in 1631. The main mausoleum was completed around 1643 and the wider complex around 1653.",
    context:
      "Under Shah Jahan, the Mughal Empire was at the height of its wealth. Mughal architecture blended Persian, Timurid and Indian traditions, seen in earlier tombs such as Humayun's Tomb in Delhi.",
    narrative:
      "Around 20,000 artisans worked on the complex, which includes gardens, a mosque and a guest house. The mausoleum is built of white marble inlaid with semi-precious stones in floral designs and Quranic calligraphy. The chief architect is generally identified as Ustad Ahmad Lahauri.\n\nShah Jahan was deposed by his son Aurangzeb in 1658 and spent his last years confined in Agra Fort, reportedly able to view the Taj. He was buried beside Mumtaz Mahal. The Taj Mahal became a UNESCO World Heritage Site in 1983.",
    causes: [
      "Death of Mumtaz Mahal in 1631",
      "Mughal imperial wealth and patronage",
      "Tradition of monumental garden tombs",
    ],
    consequences: [
      "Created one of the world's most celebrated buildings",
      "Symbol of Mughal artistic achievement",
      "Major site of Indian heritage and tourism",
    ],
    timeline: [
      ["1631", "Death of Mumtaz Mahal", "In Burhanpur."],
      ["1632", "Construction begins", "In Agra on the Yamuna."],
      ["~1643", "Mausoleum completed", "Wider complex continues."],
      ["1983", "UNESCO World Heritage Site", "Inscribed."],
    ],
    people: [
      ["shah-jahan", "Mughal emperor who commissioned the Taj"],
      ["mumtaz-mahal", "Empress for whom it was built"],
    ],
  },
  {
    slug: "execution-of-charles-i",
    title: "Execution of Charles I",
    alt: ["English Civil War"],
    date: "1649-01-30",
    period: "early-modern",
    category: "politics",
    region: "europe",
    location: "Banqueting House, Whitehall, London",
    places: ["london"],
    wiki: "Execution of Charles I",
    keywords: ["English Civil War", "Oliver Cromwell", "regicide", "Commonwealth", "Parliament"],
    summary:
      "After his defeat in the English Civil War, King Charles I was tried for treason by a parliamentary court and beheaded outside the Banqueting House in London.",
    overview:
      "Charles I's execution on 30 January 1649 was the first time an English king had been tried and executed by his own subjects. England became a republic, the Commonwealth, until the monarchy was restored in 1660.",
    context:
      "Conflict between Charles and Parliament over taxation, religion and royal authority erupted into civil war in 1642. Parliament's New Model Army, with Oliver Cromwell as a leading commander, defeated the royalists. Charles's attempts to restart the war through alliances led the army to purge Parliament and bring him to trial.",
    narrative:
      "A High Court of Justice was created to try the king, who refused to recognise its authority. He was convicted of being a 'tyrant, traitor, murderer and public enemy'. Fifty-nine commissioners signed the death warrant. On a cold January day, Charles reportedly wore two shirts so that he would not shiver and appear afraid.\n\nThe monarchy and House of Lords were abolished. Cromwell later ruled as Lord Protector. After his death, Charles II was restored in 1660, and surviving regicides were executed or fled.",
    causes: [
      "Conflict over royal authority and parliamentary rights",
      "Religious disputes, including over church governance",
      "Charles's defeat and continued intrigue during the Civil War",
    ],
    consequences: [
      "Abolition of the monarchy and creation of the Commonwealth",
      "Rule of Oliver Cromwell as Lord Protector",
      "Restoration of the monarchy in 1660",
    ],
    timeline: [
      ["1642-08-22", "Civil War begins", "Charles raises his standard at Nottingham."],
      ["1645-06-14", "Battle of Naseby", "Decisive parliamentary victory."],
      ["1649-01-30", "Execution", "Charles beheaded at Whitehall."],
      ["1660-05-29", "Restoration", "Charles II returns to London."],
    ],
    people: [
      ["charles-i-of-england", "King of England, Scotland and Ireland"],
      ["oliver-cromwell", "Parliamentary commander and later Lord Protector"],
    ],
    relations: [["followed_by", "glorious-revolution", "The struggle between Crown and Parliament resumed in 1688."]],
  },
  {
    slug: "newton-principia",
    title: "Newton publishes the Principia",
    alt: ["Philosophiæ Naturalis Principia Mathematica"],
    date: "1687-07-05",
    period: "early-modern",
    category: "science",
    region: "europe",
    location: "London, England",
    places: ["london"],
    wiki: "Philosophiæ Naturalis Principia Mathematica",
    keywords: ["Isaac Newton", "gravity", "laws of motion", "Royal Society", "Edmond Halley"],
    summary:
      "Isaac Newton set out his laws of motion and universal gravitation, providing a single mathematical framework for motion on earth and in the heavens.",
    overview:
      "Published on 5 July 1687 with the support of Edmond Halley, the Principia explained Kepler's planetary laws, tides and the motion of comets. It is one of the most important works in the history of science.",
    context:
      "Building on Copernicus, Kepler and Galileo, natural philosophers sought physical explanations for planetary motion. In 1684 Halley visited Newton at Cambridge to ask about the orbit produced by an inverse-square force; Newton had already worked it out.",
    narrative:
      "In three books, Newton presented his three laws of motion and the law of universal gravitation, showing that the same force that makes an apple fall keeps the moon in orbit. The Royal Society approved publication, but Halley paid for the printing himself.\n\nThe Principia faced criticism, notably from Leibniz and Huygens, who objected to gravity acting at a distance. Over the eighteenth century, Newtonian mechanics became the foundation of physics, until Einstein's relativity revealed its limits at extreme speeds and gravitational fields.",
    causes: [
      "The Copernican model and Kepler's laws of planetary motion",
      "Galileo's work on motion",
      "Halley's 1684 question and encouragement",
    ],
    consequences: [
      "Foundation of classical mechanics",
      "Became a model for the Enlightenment's confidence in reason",
      "Remained the basis of physics until Einstein",
    ],
    timeline: [
      ["1684", "Halley visits Newton", "Prompts the work."],
      ["1687-07-05", "Principia published", "In Latin, in London."],
      ["1905", "Special relativity", "Einstein begins to revise Newtonian physics."],
    ],
    people: [
      ["isaac-newton", "Author of the Principia"],
      ["edmond-halley", "Astronomer who financed publication"],
    ],
    relations: [["followed_by", "einstein-annus-mirabilis", "Einstein's work later extended and revised Newtonian physics."]],
    sources: [
      { url: "https://plato.stanford.edu/entries/newton-principia/", title: "Newton's Philosophiae Naturalis Principia Mathematica", publisher: "Stanford Encyclopedia of Philosophy", type: "academic" },
    ],
  },
  {
    slug: "glorious-revolution",
    title: "Glorious Revolution",
    date: "1688-11",
    end: "1689-12",
    period: "early-modern",
    category: "politics",
    region: "europe",
    location: "England",
    places: ["london"],
    wiki: "Glorious Revolution",
    keywords: ["William III", "James II", "Bill of Rights 1689", "constitutional monarchy"],
    summary:
      "The Catholic King James II was deposed and replaced by his Protestant daughter Mary II and her husband William of Orange, leading to the Bill of Rights of 1689.",
    overview:
      "William landed at Torbay in November 1688 with a Dutch army. James fled to France. Parliament offered the throne jointly to William and Mary on condition that they accept limits on royal power.",
    context:
      "James II, who came to the throne in 1685, promoted Catholics to office and claimed the right to suspend laws. The birth of his son in June 1688 raised fears of a Catholic dynasty, and seven leading figures invited William to intervene.",
    narrative:
      "In England the revolution was largely bloodless, as much of James's army defected. In Scotland and Ireland, however, it led to war, including the Jacobite rising and the Williamite War in Ireland, culminating in the Battle of the Boyne in 1690.\n\nThe Bill of Rights of 1689 barred Catholics from the throne, prohibited the monarch from suspending laws or levying taxes without Parliament, and guaranteed free elections and freedom of speech in Parliament. It became a model for later constitutional documents, including the US Bill of Rights.",
    causes: [
      "James II's Catholic policies and claims to royal power",
      "Birth of a Catholic male heir in 1688",
      "Invitation to William of Orange from English nobles",
    ],
    consequences: [
      "Bill of Rights limiting royal power",
      "Establishment of parliamentary supremacy",
      "Wars in Ireland and Scotland",
    ],
    timeline: [
      ["1688-06-10", "Birth of James Francis Edward Stuart", "Catholic heir born."],
      ["1688-11-05", "William lands at Torbay", "With a Dutch army."],
      ["1688-12-23", "James II flees to France", "Abdication assumed."],
      ["1689-12-16", "Bill of Rights enacted", "Royal assent given."],
    ],
    people: [
      ["william-iii-of-england", "Prince of Orange who became king"],
      ["james-ii-of-england", "Deposed Catholic king"],
    ],
    relations: [["contributed_to", "declaration-of-independence", "English constitutional ideas shaped American revolutionary arguments."]],
  },
];
