import type { EventSeed } from "../types";

export const industryEmpireEvents: EventSeed[] = [
  {
    slug: "unification-of-germany",
    title: "Proclamation of the German Empire",
    alt: ["Unification of Germany"],
    date: "1871-01-18",
    period: "industry-and-empire",
    category: "politics",
    region: "europe",
    location: "Hall of Mirrors, Versailles, France",
    places: ["versailles", "berlin"],
    wiki: "Unification of Germany",
    keywords: ["Otto von Bismarck", "Franco-Prussian War", "Wilhelm I", "Prussia", "Kaiserreich"],
    summary:
      "After three wars engineered by Otto von Bismarck, King Wilhelm I of Prussia was proclaimed German Emperor in the Hall of Mirrors at Versailles.",
    overview:
      "The German Empire was proclaimed on 18 January 1871 during the siege of Paris in the Franco-Prussian War. It united the German states, excluding Austria, under Prussian leadership.",
    context:
      "After the failure of the 1848 revolutions to unify Germany, Prussia's minister-president Bismarck pursued unification through 'blood and iron'. Wars against Denmark (1864) and Austria (1866) gave Prussia dominance in northern Germany.",
    narrative:
      "Bismarck manipulated a dispute over the Spanish throne, editing the Ems Dispatch to provoke France into declaring war in July 1870. The southern German states joined Prussia, and the French were defeated at Sedan, where Napoleon III was captured. The proclamation at Versailles was a deliberate humiliation of France.\n\nThe Treaty of Frankfurt forced France to cede Alsace and most of Lorraine. French resentment over the lost provinces and the new Germany's power reshaped European diplomacy and contributed to the tensions that led to the First World War.",
    causes: [
      "German nationalism after 1848",
      "Bismarck's diplomacy and wars against Denmark, Austria and France",
      "Prussian military and industrial strength",
    ],
    consequences: [
      "Creation of a powerful German nation-state",
      "French loss of Alsace-Lorraine and lasting resentment",
      "Shifted the European balance of power",
    ],
    timeline: [
      ["1864", "Second Schleswig War", "Prussia and Austria defeat Denmark."],
      ["1866", "Austro-Prussian War", "Prussia defeats Austria."],
      ["1870-09-01", "Battle of Sedan", "Napoleon III captured."],
      ["1871-01-18", "Empire proclaimed", "In the Hall of Mirrors."],
    ],
    people: [
      ["otto-von-bismarck", "Prussian minister-president who engineered unification"],
      ["wilhelm-i", "First German Emperor"],
    ],
    relations: [["contributed_to", "world-war-i", "German power and Franco-German rivalry shaped the alliances of 1914."]],
  },
  {
    slug: "invention-of-the-telephone",
    title: "Invention of the telephone",
    date: "1876-03-07",
    period: "industry-and-empire",
    category: "technology",
    region: "north-america",
    location: "Boston, Massachusetts",
    places: ["boston"],
    wiki: "Invention of the telephone",
    keywords: ["Alexander Graham Bell", "Elisha Gray", "Antonio Meucci", "patent", "communication"],
    summary:
      "Alexander Graham Bell received a US patent for the telephone and, three days later, made the first successful call to his assistant Thomas Watson.",
    overview:
      "Bell's patent was granted on 7 March 1876. On 10 March he spoke the words 'Mr. Watson, come here, I want to see you'. The invention's credit has long been disputed, with claims for Elisha Gray and Antonio Meucci.",
    context:
      "The electric telegraph had transformed communication, and inventors were trying to transmit multiple messages or sound over wires. Bell, a teacher of the deaf with an interest in acoustics, worked on a 'harmonic telegraph'.",
    narrative:
      "Elisha Gray filed a caveat for a similar device on the same day as Bell's patent application, 14 February 1876, sparking a long legal dispute. Bell demonstrated the telephone at the Centennial Exhibition in Philadelphia that year. The Bell Telephone Company was founded in 1877.\n\nTelephone networks spread rapidly in cities, and the first transcontinental call in the United States was made in 1915. In 2002 the US House of Representatives passed a resolution recognising the work of Antonio Meucci.",
    causes: [
      "Development of electric telegraphy",
      "Research into acoustics and electromagnetism",
      "Commercial competition to improve communications",
    ],
    consequences: [
      "Real-time voice communication over distance",
      "Growth of the telecommunications industry",
      "Transformed business, social life and later the internet's infrastructure",
    ],
    timeline: [
      ["1876-02-14", "Bell's application and Gray's caveat", "Filed the same day."],
      ["1876-03-07", "Patent granted", "US Patent 174,465."],
      ["1876-03-10", "First call", "'Mr. Watson, come here.'"],
      ["1915-01-25", "First transcontinental call", "New York to San Francisco."],
    ],
    people: [["alexander-graham-bell", "Inventor who patented the telephone"]],
    relations: [["followed_by", "arpanet", "Telephone networks later carried the first computer networks."]],
  },
  {
    slug: "berlin-conference",
    title: "Berlin Conference",
    alt: ["Scramble for Africa", "Congo Conference"],
    date: "1884-11-15",
    end: "1885-02-26",
    period: "industry-and-empire",
    category: "politics",
    region: "africa",
    location: "Berlin, German Empire",
    places: ["berlin"],
    wiki: "Berlin Conference",
    keywords: ["colonialism", "Scramble for Africa", "Leopold II", "Congo Free State", "Bismarck"],
    summary:
      "European powers met in Berlin to set rules for claiming African territory, accelerating the colonial partition of the continent. No Africans were invited.",
    overview:
      "Hosted by Bismarck, the conference's General Act of 26 February 1885 recognised the Congo Free State under King Leopold II and established the principle of 'effective occupation' for colonial claims.",
    context:
      "In the early 1880s, European powers controlled only about a tenth of Africa, mostly along the coasts. Rivalries over the Congo basin and West Africa threatened conflict between Britain, France, Portugal, Belgium's king and Germany.",
    narrative:
      "Fourteen states attended, including the United States and the Ottoman Empire. The conference declared free trade in the Congo basin and on the Niger, and required that claims be backed by actual control and notification to other powers. It did not itself draw most borders, but it encouraged a rush to occupy territory.\n\nBy 1914, European powers ruled about 90 per cent of Africa; only Ethiopia and Liberia remained independent. In the Congo Free State, Leopold's regime of forced rubber collection caused atrocities and huge loss of life.",
    causes: [
      "Rivalry among European powers for African territory and resources",
      "Industrial demand for raw materials and markets",
      "Leopold II's ambitions in the Congo",
    ],
    consequences: [
      "Accelerated the Scramble for Africa",
      "Recognised the Congo Free State, where atrocities followed",
      "Borders and colonial legacies that endure today",
    ],
    timeline: [
      ["1884-11-15", "Conference opens", "In Bismarck's residence."],
      ["1885-02-26", "General Act signed", "Rules for colonial claims."],
      ["1896-03-01", "Battle of Adwa", "Ethiopia defeats Italy."],
      ["1908", "Congo Free State annexed by Belgium", "After international outcry."],
    ],
    people: [
      ["otto-von-bismarck", "Host of the conference"],
      ["leopold-ii-of-belgium", "King who gained the Congo Free State"],
    ],
    relations: [
      ["led_to", "battle-of-adwa", "Italian colonial ambitions in the Horn of Africa met Ethiopian resistance."],
      ["contributed_to", "ghana-independence", "Colonial rule established in this era was challenged by independence movements after 1945."],
    ],
  },
  {
    slug: "womens-suffrage-new-zealand",
    title: "New Zealand grants women the vote",
    alt: ["Women's suffrage in New Zealand", "Electoral Act 1893"],
    date: "1893-09-19",
    period: "industry-and-empire",
    category: "society",
    region: "oceania",
    location: "Wellington, New Zealand",
    places: ["wellington"],
    wiki: "Women's suffrage in New Zealand",
    discovery: true,
    keywords: ["Kate Sheppard", "suffrage", "Electoral Act 1893", "women's rights"],
    summary:
      "New Zealand became the first self-governing country in the world in which all women had the right to vote in parliamentary elections.",
    overview:
      "The Electoral Act received assent on 19 September 1893. Women, including Māori women, voted in the general election that November. Women could not stand for Parliament until 1919.",
    context:
      "Suffragists, led by Kate Sheppard and the Women's Christian Temperance Union, campaigned through a series of mass petitions. The 1893 petition, with nearly 32,000 signatures, was the largest presented to Parliament at the time.",
    narrative:
      "The bill passed the Legislative Council by a narrow margin after opponents' tactics backfired. Governor Lord Glasgow signed it into law. About 65 per cent of eligible women voted in the 1893 election.\n\nNew Zealand's example encouraged suffrage movements in Australia, Britain and the United States. South Australia followed in 1894 and also allowed women to stand for parliament.",
    causes: [
      "Organised suffrage campaigns and mass petitions",
      "Temperance movement activism",
      "Political shifts in the Liberal government",
    ],
    consequences: [
      "First national women's suffrage in a self-governing country",
      "Inspired suffrage movements worldwide",
      "Women's participation in national politics",
    ],
    timeline: [
      ["1891", "First major petition", "Over 9,000 signatures."],
      ["1893-07-28", "Third petition presented", "Nearly 32,000 signatures."],
      ["1893-09-19", "Electoral Act signed", "Women gain the vote."],
      ["1893-11-28", "General election", "Women vote for the first time."],
    ],
    people: [["kate-sheppard", "Leader of the suffrage campaign"]],
  },
  {
    slug: "battle-of-adwa",
    title: "Battle of Adwa",
    date: "1896-03-01",
    period: "industry-and-empire",
    category: "conflict",
    region: "africa",
    location: "Adwa, Tigray, Ethiopia",
    places: ["adwa"],
    wiki: "Battle of Adwa",
    discovery: true,
    keywords: ["Menelik II", "Taytu Betul", "Ethiopia", "Italy", "anti-colonial"],
    summary:
      "The Ethiopian army of Emperor Menelik II decisively defeated an Italian invasion force, preserving Ethiopia's independence during the Scramble for Africa.",
    overview:
      "On 1 March 1896, Ethiopian forces routed the Italian army at Adwa. The victory forced Italy to recognise Ethiopian independence and became a powerful symbol of African resistance to colonialism.",
    context:
      "Italy had established a colony in Eritrea and claimed that the 1889 Treaty of Wuchale made Ethiopia an Italian protectorate — a claim based on a discrepancy between the Italian and Amharic texts. Menelik repudiated the treaty.",
    narrative:
      "Menelik II and Empress Taytu Betul mobilised an army of perhaps 100,000, well armed with modern rifles. The Italian commander, General Oreste Baratieri, launched a poorly coordinated night advance through mountainous terrain, and his brigades became separated. The Ethiopian forces overwhelmed them one by one.\n\nThe Treaty of Addis Ababa recognised Ethiopia's full independence. Adwa inspired Pan-Africanist and anti-colonial movements. Italy invaded again under Mussolini in 1935 and occupied Ethiopia until 1941.",
    causes: [
      "Italian colonial ambitions in the Horn of Africa",
      "Dispute over the Treaty of Wuchale",
      "Menelik II's modernised and unified army",
    ],
    consequences: [
      "Preserved Ethiopian independence",
      "Italy's recognition of Ethiopian sovereignty",
      "Enduring symbol of African resistance",
    ],
    timeline: [
      ["1889-05-02", "Treaty of Wuchale", "Disputed protectorate clause."],
      ["1896-03-01", "Battle of Adwa", "Italian army defeated."],
      ["1896-10-23", "Treaty of Addis Ababa", "Italy recognises independence."],
    ],
    people: [
      ["menelik-ii", "Emperor of Ethiopia"],
      ["taytu-betul", "Empress of Ethiopia who commanded troops at Adwa"],
    ],
  },
  {
    slug: "antikythera-mechanism-discovery",
    title: "Discovery of the Antikythera mechanism",
    date: "1901",
    period: "industry-and-empire",
    category: "archaeology",
    region: "europe",
    location: "Antikythera, Greece",
    places: ["antikythera"],
    civ: ["ancient-greece"],
    wiki: "Antikythera mechanism",
    discovery: true,
    keywords: ["ancient computer", "shipwreck", "gears", "astronomy", "Hellenistic"],
    summary:
      "Sponge divers recovered corroded bronze fragments from a Roman-era shipwreck. Decades later they were revealed as an ancient Greek geared device for predicting astronomical positions.",
    overview:
      "The wreck off Antikythera dates to about the first century BCE. The mechanism's fragments were noticed among the finds in 1902; X-ray and CT studies have since revealed at least 30 interlocking bronze gears.",
    context:
      "In 1900, Greek sponge divers sheltering from a storm discovered the wreck. Its cargo included bronze and marble statues, which were salvaged in 1900–1901 in one of the first major underwater archaeological operations.",
    narrative:
      "Archaeologist Valerios Stais noticed a gear wheel embedded in a corroded lump in 1902. Derek de Solla Price's research in the 1950s–1970s, and the Antikythera Mechanism Research Project from 2005, used imaging to read inscriptions and reconstruct the gearing.\n\nThe device tracked the positions of the sun and moon, the phases of the moon, eclipse cycles and the four-year cycle of Panhellenic games. Nothing of comparable complexity is known until medieval astronomical clocks.",
    causes: ["Accidental discovery of the shipwreck by sponge divers"],
    consequences: [
      "Revealed unexpected sophistication in Hellenistic technology",
      "Advanced methods of imaging ancient artefacts",
    ],
    timeline: [
      ["~-70", "Shipwreck", "Approximate date of the wreck."],
      ["1901", "Fragments recovered", "During salvage of the wreck."],
      ["1902", "Gear identified", "By Valerios Stais."],
      ["2006", "CT imaging results published", "In Nature."],
    ],
  },
  {
    slug: "wright-brothers-first-flight",
    title: "Wright brothers' first powered flight",
    alt: ["Wright Flyer", "First flight"],
    date: "1903-12-17",
    period: "industry-and-empire",
    category: "technology",
    region: "north-america",
    location: "Kill Devil Hills, near Kitty Hawk, North Carolina",
    places: ["kitty-hawk"],
    wiki: "Wright Flyer",
    featured: false,
    keywords: ["aviation", "Orville Wright", "Wilbur Wright", "aeroplane", "Kitty Hawk"],
    summary:
      "Orville and Wilbur Wright made the first sustained, controlled flights of a powered, heavier-than-air aircraft.",
    overview:
      "On 17 December 1903, Orville flew the Wright Flyer for 12 seconds and 37 metres. The fourth flight that day, by Wilbur, lasted 59 seconds and covered 260 metres. The Flyer is displayed at the Smithsonian National Air and Space Museum.",
    context:
      "The brothers, bicycle makers from Dayton, Ohio, studied gliding pioneers such as Otto Lilienthal. Their key insight was three-axis control, including 'wing warping' to roll the aircraft.",
    narrative:
      "They built a wind tunnel to test wing shapes and designed their own lightweight engine and propellers. Kitty Hawk was chosen for its steady winds and soft sand. Few people witnessed the flights, and the achievement was not widely accepted until public demonstrations in France and the United States in 1908.\n\nAviation developed with astonishing speed. Within a decade aircraft were used in war; in 1927 Charles Lindbergh flew solo across the Atlantic; and in 1969 humans landed on the moon.",
    causes: [
      "Research by gliding pioneers",
      "The Wrights' systematic experimentation and wind tunnel",
      "Development of lightweight engines",
    ],
    consequences: [
      "Birth of powered aviation",
      "Rapid development of military and commercial aircraft",
      "Transformed travel, warfare and global connections",
    ],
    timeline: [
      ["1900", "First glider tests at Kitty Hawk", "Testing control systems."],
      ["1903-12-17", "First powered flights", "Four flights that day."],
      ["1908", "Public demonstrations", "At Le Mans and Fort Myer."],
    ],
    people: [
      ["orville-wright", "Pilot of the first flight"],
      ["wilbur-wright", "Co-inventor and pilot"],
    ],
    relations: [["followed_by", "apollo-11", "Sixty-six years separated the first powered flight and the first moon landing."]],
    sources: [
      { url: "https://airandspace.si.edu/collection-objects/1903-wright-flyer/nasm_A19610048000", title: "1903 Wright Flyer", publisher: "Smithsonian National Air and Space Museum", type: "museum" },
    ],
  },
  {
    slug: "russo-japanese-war",
    title: "Russo-Japanese War",
    date: "1904-02-08",
    end: "1905-09-05",
    period: "industry-and-empire",
    category: "conflict",
    region: "east-asia",
    location: "Manchuria, Korea and the Yellow Sea",
    places: ["port-arthur", "tsushima"],
    wiki: "Russo-Japanese War",
    keywords: ["Battle of Tsushima", "Port Arthur", "Treaty of Portsmouth", "Manchuria", "Korea"],
    summary:
      "Japan defeated Russia in a war over Manchuria and Korea, the first major victory of an Asian power over a European one in the modern era.",
    overview:
      "The war began with a Japanese attack on the Russian fleet at Port Arthur in February 1904 and ended with the Treaty of Portsmouth, brokered by US President Theodore Roosevelt, in September 1905.",
    context:
      "Both empires sought influence in Manchuria and Korea. Russia had leased Port Arthur and built the Trans-Siberian Railway; modernised Meiji Japan saw Russian expansion as a threat.",
    narrative:
      "Japanese forces besieged Port Arthur, which fell in January 1905 after enormous casualties. The Battle of Mukden in March was one of the largest land battles before the First World War. Russia's Baltic Fleet sailed around the world only to be destroyed at the Battle of Tsushima in May 1905.\n\nDefeat helped trigger the 1905 Revolution in Russia. Japan gained Port Arthur, southern Sakhalin and dominance over Korea, which it annexed in 1910. Roosevelt received the Nobel Peace Prize for mediating the treaty.",
    causes: [
      "Rival imperial ambitions in Manchuria and Korea",
      "Russian expansion in East Asia",
      "Japan's modernised military",
    ],
    consequences: [
      "Japan became a recognised great power",
      "Revolution of 1905 in Russia",
      "Japanese annexation of Korea in 1910",
    ],
    timeline: [
      ["1904-02-08", "Attack on Port Arthur", "War begins."],
      ["1905-01-02", "Port Arthur surrenders", "After a long siege."],
      ["1905-05-27", "Battle of Tsushima", "Russian fleet destroyed."],
      ["1905-09-05", "Treaty of Portsmouth", "War ends."],
    ],
    people: [
      ["togo-heihachiro", "Japanese admiral at Tsushima"],
      ["nicholas-ii-of-russia", "Russian tsar"],
    ],
    relations: [["contributed_to", "october-revolution", "Defeat weakened the tsarist regime and sparked the 1905 Revolution."]],
  },
  {
    slug: "einstein-annus-mirabilis",
    title: "Einstein's miracle year",
    alt: ["Annus mirabilis papers", "Special relativity", "E=mc²"],
    date: "1905",
    period: "industry-and-empire",
    category: "science",
    region: "europe",
    location: "Bern, Switzerland",
    places: ["bern"],
    wiki: "Annus mirabilis papers",
    keywords: ["Albert Einstein", "special relativity", "photoelectric effect", "Brownian motion", "mass–energy equivalence"],
    summary:
      "Working as a patent clerk in Bern, Albert Einstein published four papers that transformed physics, including special relativity and mass–energy equivalence.",
    overview:
      "In 1905 Einstein published in Annalen der Physik on the photoelectric effect (supporting the quantum nature of light), Brownian motion (evidence for atoms), special relativity and the equivalence of mass and energy (E = mc²).",
    context:
      "Physics faced puzzles: experiments failed to detect the 'ether' thought to carry light, and classical theory could not explain how light ejected electrons from metals. Max Planck had introduced energy quanta in 1900.",
    narrative:
      "The photoelectric paper proposed that light consists of quanta (later called photons), earning Einstein the 1921 Nobel Prize in Physics. The Brownian motion paper provided a way to confirm the existence of atoms, verified experimentally by Jean Perrin. Special relativity showed that measurements of time and space depend on the observer's motion, with the speed of light constant for all.\n\nEinstein later developed general relativity (1915), a new theory of gravity. Relativity and quantum theory became the twin foundations of modern physics.",
    causes: [
      "Unresolved problems in classical physics",
      "Planck's quantum hypothesis",
      "Einstein's independent theoretical work",
    ],
    consequences: [
      "Foundations of relativity and quantum theory",
      "Confirmation of the atomic theory of matter",
      "Mass–energy equivalence, later central to nuclear physics",
    ],
    timeline: [
      ["1905-06-09", "Photoelectric effect paper", "Published in Annalen der Physik."],
      ["1905-09-26", "Special relativity paper", "On the Electrodynamics of Moving Bodies."],
      ["1915-11-25", "General relativity", "Field equations presented."],
      ["1922-11-09", "Nobel Prize announced", "For the 1921 prize."],
    ],
    people: [["albert-einstein", "Physicist who wrote the papers"]],
    relations: [["contributed_to", "atomic-bombings", "Mass–energy equivalence underlay the physics of nuclear fission weapons."]],
  },
  {
    slug: "tunguska-event",
    title: "Tunguska event",
    date: "1908-06-30",
    period: "industry-and-empire",
    category: "disaster",
    region: "east-asia",
    location: "Podkamennaya Tunguska River, Siberia",
    places: ["tunguska"],
    wiki: "Tunguska event",
    discovery: true,
    keywords: ["meteor", "airburst", "asteroid", "Siberia", "impact"],
    summary:
      "A massive explosion over remote Siberia, probably caused by the airburst of an asteroid or comet fragment, flattened around 80 million trees.",
    overview:
      "The blast on the morning of 30 June 1908 levelled about 2,150 square kilometres of forest. It is the largest impact event in recorded history, yet left no crater.",
    context:
      "The region was sparsely inhabited by Evenki people and Russian settlers. Witnesses described a fireball and a shock wave that knocked people over dozens of kilometres away.",
    narrative:
      "Seismic and atmospheric pressure waves were recorded as far away as Britain, and night skies glowed across Europe and Asia for days. The first scientific expedition, led by Leonid Kulik, reached the site only in 1927 and found trees flattened radially but no crater.\n\nMost scientists conclude that a stony asteroid or comet fragment some tens of metres across exploded several kilometres above the ground. The event informs modern planetary defence efforts.",
    causes: ["Atmospheric entry of an asteroid or comet fragment"],
    consequences: [
      "Flattening of about 80 million trees",
      "Ongoing scientific study of impact hazards",
      "Influenced modern planetary defence",
    ],
    timeline: [
      ["1908-06-30", "Explosion", "Over the Tunguska region."],
      ["1927", "Kulik's expedition", "First scientific visit to the site."],
    ],
  },
  {
    slug: "xinhai-revolution",
    title: "Xinhai Revolution",
    alt: ["1911 Revolution", "Chinese Revolution of 1911"],
    date: "1911-10-10",
    end: "1912-02-12",
    period: "industry-and-empire",
    category: "politics",
    region: "east-asia",
    location: "Wuchang (Wuhan) and across China",
    places: ["wuhan", "nanjing"],
    civ: ["ancient-china"],
    wiki: "1911 Revolution",
    keywords: ["Sun Yat-sen", "Qing dynasty", "Republic of China", "Wuchang Uprising", "Puyi"],
    summary:
      "A revolt in Wuchang spread across China and overthrew the Qing dynasty, ending more than two thousand years of imperial rule.",
    overview:
      "The Wuchang Uprising of 10 October 1911 triggered revolts in provinces across China. The Republic of China was proclaimed on 1 January 1912, and the child emperor Puyi abdicated on 12 February.",
    context:
      "The Qing dynasty had been weakened by foreign defeats, the Taiping Rebellion and the Boxer Uprising. Revolutionary groups, including Sun Yat-sen's Tongmenghui, called for a republic and the end of Manchu rule.",
    narrative:
      "An accidental bomb explosion exposed revolutionary plans in Wuchang, forcing soldiers in the New Army to rise early. Province after province declared independence. Sun Yat-sen, abroad at the time, returned and was elected provisional president.\n\nTo secure the emperor's abdication, Sun ceded the presidency to Yuan Shikai, the powerful Qing general. Yuan's attempt to make himself emperor in 1915 failed, and China fragmented into warlord rule. The Nationalists (Kuomintang) and later the Communists fought to reunify the country.",
    causes: [
      "Qing weakness after foreign defeats and internal rebellions",
      "Revolutionary and nationalist movements",
      "Discontent within the New Army and provincial elites",
    ],
    consequences: [
      "End of imperial rule in China",
      "Founding of the Republic of China",
      "Period of warlordism and political fragmentation",
    ],
    timeline: [
      ["1911-10-10", "Wuchang Uprising", "Revolution begins."],
      ["1912-01-01", "Republic proclaimed", "Sun Yat-sen provisional president."],
      ["1912-02-12", "Puyi abdicates", "End of the Qing dynasty."],
    ],
    people: [
      ["sun-yat-sen", "Revolutionary leader and first provisional president"],
      ["puyi", "Last emperor of China"],
    ],
    relations: [["followed_by", "founding-of-prc", "Decades of conflict over China's future ended with the Communist victory in 1949."]],
  },
  {
    slug: "sinking-of-the-titanic",
    title: "Sinking of the Titanic",
    alt: ["RMS Titanic"],
    date: "1912-04-15",
    period: "industry-and-empire",
    category: "disaster",
    region: "north-america",
    location: "North Atlantic Ocean",
    places: ["titanic-wreck"],
    wiki: "Sinking of the Titanic",
    featured: false,
    keywords: ["RMS Titanic", "iceberg", "White Star Line", "lifeboats", "SOLAS"],
    summary:
      "The RMS Titanic, then the largest ship afloat, struck an iceberg on her maiden voyage and sank, killing more than 1,500 people.",
    overview:
      "Titanic struck the iceberg at 11:40 p.m. on 14 April 1912 and sank at about 2:20 a.m. on 15 April. There were lifeboats for only about half of those on board.",
    context:
      "Built in Belfast for the White Star Line, Titanic was a symbol of Edwardian technological confidence. Regulations based on ship tonnage did not require lifeboats for everyone aboard.",
    narrative:
      "Despite ice warnings, the ship was travelling near full speed. The iceberg opened several of the forward watertight compartments, more than the design could survive. Many lifeboats were launched partly empty. The liner Carpathia arrived about two hours after the sinking and rescued around 700 survivors.\n\nInquiries in the United States and Britain led to the first International Convention for the Safety of Life at Sea (SOLAS) in 1914, requiring sufficient lifeboats and 24-hour radio watches. The wreck was located in 1985 by a team led by Robert Ballard and Jean-Louis Michel.",
    causes: [
      "Collision with an iceberg at high speed",
      "Ignored or poorly relayed ice warnings",
      "Insufficient lifeboat capacity",
    ],
    consequences: [
      "More than 1,500 deaths",
      "International maritime safety reforms (SOLAS)",
      "An enduring cultural symbol of hubris",
    ],
    timeline: [
      ["1912-04-10", "Departure from Southampton", "Maiden voyage."],
      ["1912-04-14", "Iceberg struck", "At 11:40 p.m."],
      ["1912-04-15", "Titanic sinks", "At about 2:20 a.m."],
      ["1985-09-01", "Wreck located", "By Ballard and Michel."],
    ],
  },
];
