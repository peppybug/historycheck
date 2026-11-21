export const periods = [
  {
    slug: "ancient-world",
    name: "Ancient World",
    startYear: -3500,
    endYear: -800,
    description:
      "From the first cities and writing systems in Mesopotamia and Egypt to the Bronze Age empires of the Near East, the Indus Valley and Shang China.",
  },
  {
    slug: "classical-antiquity",
    name: "Classical Antiquity",
    startYear: -800,
    endYear: 500,
    description:
      "The age of Greek city-states, Persia, the Maurya and Han empires, and Rome — when many of the world's enduring philosophies, religions and legal traditions took shape.",
  },
  {
    slug: "middle-ages",
    name: "Middle Ages",
    startYear: 500,
    endYear: 1500,
    description:
      "A thousand years spanning the Byzantine Empire, the rise of Islam, Tang and Song China, the Mongol conquests, West African empires and the Mesoamerican city-states.",
  },
  {
    slug: "early-modern",
    name: "Early Modern",
    startYear: 1500,
    endYear: 1789,
    description:
      "Oceanic exploration, the Reformation, the Scientific Revolution and the gunpowder empires — and the beginning of European colonialism and the Atlantic slave trade.",
  },
  {
    slug: "age-of-revolutions",
    name: "Age of Revolutions",
    startYear: 1789,
    endYear: 1870,
    description:
      "Political revolutions in France, Haiti and Latin America, the spread of industrialisation, and new ideas of nationhood, rights and abolition.",
  },
  {
    slug: "industry-and-empire",
    name: "Industry & Empire",
    startYear: 1870,
    endYear: 1914,
    description:
      "Electrification, mass production and new imperial rivalries, from the Scramble for Africa to the modernisation of Meiji Japan.",
  },
  {
    slug: "world-wars",
    name: "Era of the World Wars",
    startYear: 1914,
    endYear: 1945,
    description:
      "Two global wars, revolution in Russia, economic collapse and the Holocaust — three decades that reshaped the international order.",
  },
  {
    slug: "cold-war",
    name: "Cold War",
    startYear: 1945,
    endYear: 1991,
    description:
      "Rivalry between the United States and the Soviet Union, decolonisation across Africa and Asia, the space race, and the end of the division of Europe.",
  },
  {
    slug: "contemporary",
    name: "Contemporary",
    startYear: 1991,
    endYear: 2030,
    description:
      "Globalisation, the internet, new conflicts and pandemics: the recent history that still shapes daily life.",
  },
] as const;

export const categories = [
  { slug: "politics", name: "Political developments", description: "States, revolutions, treaties, reforms and changes of power." },
  { slug: "conflict", name: "Wars & conflicts", description: "Battles, wars, sieges and the violence that redrew borders." },
  { slug: "science", name: "Scientific discoveries", description: "Breakthroughs in understanding the natural world." },
  { slug: "technology", name: "Technology & invention", description: "Tools, machines and systems that changed how people live and work." },
  { slug: "exploration", name: "Exploration & contact", description: "Voyages, expeditions and encounters between distant peoples." },
  { slug: "culture", name: "Culture & religion", description: "Belief, art, architecture and ideas." },
  { slug: "society", name: "Society & rights", description: "Movements for freedom, equality and human rights — and their denial." },
  { slug: "economy", name: "Economy & trade", description: "Markets, trade routes, companies and financial crises." },
  { slug: "disaster", name: "Disasters & pandemics", description: "Natural catastrophes, epidemics and industrial accidents." },
  { slug: "archaeology", name: "Archaeological finds", description: "Discoveries that reopened chapters of the distant past." },
] as const;

export const regions = [
  { slug: "europe", name: "Europe" },
  { slug: "middle-east", name: "Middle East & North Africa" },
  { slug: "africa", name: "Sub-Saharan Africa" },
  { slug: "south-asia", name: "South Asia" },
  { slug: "east-asia", name: "East Asia" },
  { slug: "southeast-asia", name: "Southeast Asia" },
  { slug: "north-america", name: "North America" },
  { slug: "latin-america", name: "Latin America & Caribbean" },
  { slug: "oceania", name: "Oceania" },
  { slug: "global", name: "Global" },
] as const;

export const civilizations = [
  {
    slug: "ancient-egypt",
    name: "Ancient Egypt",
    wiki: "Ancient Egypt",
    region: "middle-east",
    startYear: -3100,
    endYear: -30,
    dateLabel: "c. 3100 – 30 BCE",
    description:
      "A civilisation of the lower Nile that endured for three thousand years, known for its pharaonic state, monumental architecture, hieroglyphic writing and elaborate beliefs about the afterlife.",
  },
  {
    slug: "mesopotamia",
    name: "Mesopotamia",
    wiki: "Mesopotamia",
    region: "middle-east",
    startYear: -3500,
    endYear: -539,
    dateLabel: "c. 3500 – 539 BCE",
    description:
      "The land between the Tigris and Euphrates, home to Sumer, Akkad, Babylon and Assyria — where cities, writing and written law first appeared.",
  },
  {
    slug: "indus-valley",
    name: "Indus Valley Civilisation",
    wiki: "Indus Valley Civilisation",
    region: "south-asia",
    startYear: -3300,
    endYear: -1300,
    dateLabel: "c. 3300 – 1300 BCE",
    description:
      "A Bronze Age urban culture of planned cities such as Harappa and Mohenjo-daro, with standardised weights, drainage systems and a script that remains undeciphered.",
  },
  {
    slug: "ancient-china",
    name: "Imperial China",
    wiki: "History of China",
    region: "east-asia",
    startYear: -1600,
    endYear: 1912,
    dateLabel: "c. 1600 BCE – 1912 CE",
    description:
      "From the Shang dynasty's oracle bones through the Qin unification and the Han, Tang, Song, Ming and Qing dynasties — one of the world's longest continuous state traditions.",
  },
  {
    slug: "ancient-greece",
    name: "Ancient Greece",
    wiki: "Ancient Greece",
    region: "europe",
    startYear: -800,
    endYear: -146,
    dateLabel: "c. 800 – 146 BCE",
    description:
      "A world of rival city-states that produced democracy in Athens, the Olympic Games, drama, philosophy and the Hellenistic kingdoms that followed Alexander.",
  },
  {
    slug: "ancient-rome",
    name: "Ancient Rome",
    wiki: "Ancient Rome",
    region: "europe",
    startYear: -753,
    endYear: 476,
    dateLabel: "753 BCE (traditional) – 476 CE",
    description:
      "A city-state that became a republic and then an empire spanning the Mediterranean, leaving lasting legacies in law, language, engineering and government.",
  },
  {
    slug: "persia",
    name: "Achaemenid Persia",
    wiki: "Achaemenid Empire",
    region: "middle-east",
    startYear: -550,
    endYear: -330,
    dateLabel: "550 – 330 BCE",
    description:
      "Founded by Cyrus the Great, the first Persian Empire stretched from the Balkans to the Indus and governed its diverse peoples through satrapies and royal roads.",
  },
  {
    slug: "maurya",
    name: "Maurya Empire",
    wiki: "Maurya Empire",
    region: "south-asia",
    startYear: -322,
    endYear: -185,
    dateLabel: "c. 322 – 185 BCE",
    description:
      "The first empire to unite most of the Indian subcontinent, remembered above all for Ashoka, whose edicts promoted dharma after the Kalinga War.",
  },
  {
    slug: "byzantine",
    name: "Byzantine Empire",
    wiki: "Byzantine Empire",
    region: "europe",
    startYear: 330,
    endYear: 1453,
    dateLabel: "330 – 1453",
    description:
      "The eastern continuation of the Roman Empire, governed from Constantinople for over a thousand years and a bridge between the ancient and medieval worlds.",
  },
  {
    slug: "islamic-caliphates",
    name: "Islamic Caliphates",
    wiki: "Caliphate",
    region: "middle-east",
    startYear: 632,
    endYear: 1258,
    dateLabel: "632 – 1258",
    description:
      "The Rashidun, Umayyad and Abbasid caliphates, which spread from Arabia to Spain and Central Asia and fostered a golden age of scholarship centred on Baghdad.",
  },
  {
    slug: "mongol-empire",
    name: "Mongol Empire",
    wiki: "Mongol Empire",
    region: "east-asia",
    startYear: 1206,
    endYear: 1368,
    dateLabel: "1206 – 1368",
    description:
      "The largest contiguous land empire in history, forged by Genghis Khan and his successors, linking China, Persia and Russia across the Eurasian steppe.",
  },
  {
    slug: "mali-empire",
    name: "Mali Empire",
    wiki: "Mali Empire",
    region: "africa",
    startYear: 1235,
    endYear: 1670,
    dateLabel: "c. 1235 – 1670",
    description:
      "A West African empire enriched by gold and trans-Saharan trade, whose cities such as Timbuktu became centres of Islamic learning.",
  },
  {
    slug: "aztec",
    name: "Aztec Empire",
    wiki: "Aztec Empire",
    region: "latin-america",
    startYear: 1428,
    endYear: 1521,
    dateLabel: "1428 – 1521",
    description:
      "The Triple Alliance of Tenochtitlan, Texcoco and Tlacopan, which dominated central Mexico until the Spanish conquest.",
  },
  {
    slug: "inca",
    name: "Inca Empire",
    wiki: "Inca Empire",
    region: "latin-america",
    startYear: 1438,
    endYear: 1533,
    dateLabel: "c. 1438 – 1533",
    description:
      "Tawantinsuyu, the largest empire of the pre-Columbian Americas, ruled from Cusco along the Andes with roads, terraces and a knotted-cord record system called khipu.",
  },
  {
    slug: "ottoman",
    name: "Ottoman Empire",
    wiki: "Ottoman Empire",
    region: "middle-east",
    startYear: 1299,
    endYear: 1922,
    dateLabel: "c. 1299 – 1922",
    description:
      "A Turkish dynasty that took Constantinople in 1453 and ruled across southeastern Europe, the Middle East and North Africa for six centuries.",
  },
  {
    slug: "dutch-republic",
    name: "Dutch Republic",
    wiki: "Dutch Republic",
    region: "europe",
    startYear: 1588,
    endYear: 1795,
    dateLabel: "1588 – 1795",
    description:
      "The Republic of the Seven United Netherlands, a federation of provinces that broke from Spanish rule and became Europe's leading commercial and maritime power in the seventeenth century.",
  },
  {
    slug: "mughal",
    name: "Mughal Empire",
    wiki: "Mughal Empire",
    region: "south-asia",
    startYear: 1526,
    endYear: 1857,
    dateLabel: "1526 – 1857",
    description:
      "An empire founded by Babur that governed much of the Indian subcontinent, famed for its administration, painting and architecture, including the Taj Mahal.",
  },
  {
    slug: "khmer",
    name: "Khmer Empire",
    wiki: "Khmer Empire",
    region: "southeast-asia",
    startYear: 802,
    endYear: 1431,
    dateLabel: "802 – 1431",
    description:
      "A Southeast Asian empire centred on Angkor, whose hydraulic engineering and temple complexes made it one of the largest pre-industrial urban areas.",
  },
] as const;
