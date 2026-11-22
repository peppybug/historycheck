import type { EventSeed } from "../types";

/** Inventions and scientific firsts not covered elsewhere. */
export const inventionEvents: EventSeed[] = [
  {
    slug: "sidereus-nuncius",
    title: "Galileo turns a telescope to the sky",
    alt: ["Sidereus Nuncius", "The Starry Messenger", "Moons of Jupiter discovered"],
    date: "1610-03-13",
    period: "early-modern",
    category: "science",
    region: "europe",
    location: "Padua and Venice, Republic of Venice",
    places: ["venice"],
    wiki: "Sidereus Nuncius",
    keywords: ["Galileo", "telescope", "Jupiter's moons", "astronomy", "Copernicus"],
    summary:
      "Galileo Galilei published the first observations made with a telescope: mountains on the Moon, countless stars and four moons circling Jupiter.",
    overview:
      "Sidereus Nuncius (The Starry Messenger), published in Venice in March 1610, reported what Galileo had seen with telescopes he built himself, magnifying about twenty times. Moons orbiting Jupiter showed that not everything circled the Earth, supporting the Copernican system.",
    context:
      "Telescopes were first patented in the Dutch Republic in 1608. Galileo, a professor at Padua, heard of the device in 1609 and built improved versions. Copernicus's heliocentric theory, published in 1543, remained controversial.",
    narrative:
      "From January 1610 Galileo observed and drew the Moon's rugged surface, contradicting the idea of perfect celestial bodies, and resolved the Milky Way into individual stars. On 7 January he noticed three 'stars' near Jupiter and, over following nights, concluded that four bodies orbited the planet. He named them the Medicean Stars after his patrons.\n\nThe book made Galileo famous and won him a post at the Medici court in Florence. His later advocacy of Copernicanism brought him into conflict with the Church, culminating in his trial in 1633.",
    causes: [
      "The invention of the telescope in the Netherlands",
      "Galileo's skill in lens grinding and observation",
      "Debates over the Copernican system",
    ],
    consequences: [
      "The birth of telescopic astronomy",
      "Strong observational support for heliocentrism",
      "Galileo's fame and later conflict with the Church",
    ],
    timeline: [
      ["1608-10", "Telescope patent application", "By Hans Lipperhey in the Dutch Republic."],
      ["1610-01-07", "Jupiter's moons observed", "Galileo sees the first of them."],
      ["1610-03-13", "Sidereus Nuncius published", "In Venice."],
    ],
    people: [["galileo-galilei", "Astronomer"]],
    relations: [
      ["related_to", "copernican-heliocentrism", "Galileo's observations supported Copernicus's sun-centred model."],
      ["contributed_to", "trial-of-galileo", "His telescopic case for Copernicanism led to his condemnation in 1633."],
    ],
  },
  {
    slug: "smallpox-vaccine",
    title: "Edward Jenner tests the first vaccine",
    alt: ["Smallpox vaccine", "Vaccination"],
    date: "1796-05-14",
    period: "age-of-revolutions",
    category: "science",
    region: "europe",
    location: "Berkeley, Gloucestershire, England",
    places: ["berkeley-gloucestershire"],
    wiki: "Smallpox vaccine",
    keywords: ["Edward Jenner", "cowpox", "smallpox", "vaccination", "James Phipps", "immunology"],
    summary:
      "The English physician Edward Jenner inoculated a boy with material from a cowpox sore and showed that it protected him against smallpox, founding vaccination.",
    overview:
      "On 14 May 1796 Jenner inoculated eight-year-old James Phipps with matter from cowpox lesions on the hand of Sarah Nelmes, a milkmaid. When Phipps was later exposed to smallpox material, he did not fall ill. Jenner published his findings in 1798.",
    context:
      "Smallpox killed hundreds of thousands of people a year in eighteenth-century Europe. Variolation, deliberate infection with smallpox material, offered protection but was risky. Country people observed that milkmaids who caught cowpox seemed immune to smallpox.",
    narrative:
      "Jenner tested the folk observation with a small series of cases, which he described in An Inquiry into the Causes and Effects of the Variolae Vaccinae (1798). The word 'vaccine' comes from the Latin vacca, cow. Vaccination spread rapidly across Europe and beyond, despite opposition.\n\nA global eradication campaign led by the World Health Organization succeeded in the twentieth century: the last natural case occurred in Somalia in 1977, and smallpox was declared eradicated in 1980, the only human disease to have been eliminated.",
    causes: [
      "The heavy toll of smallpox",
      "Folk knowledge about cowpox and milkmaids",
      "Earlier experience with variolation",
    ],
    consequences: [
      "The founding of vaccination and immunology",
      "Widespread smallpox vaccination in the nineteenth century",
      "Eradication of smallpox, declared in 1980",
    ],
    timeline: [
      ["1796-05-14", "James Phipps inoculated", "With cowpox material."],
      ["1798", "Jenner publishes his Inquiry", "Vaccination spreads."],
      ["1980-05-08", "Smallpox declared eradicated", "By the World Health Assembly."],
    ],
    people: [["edward-jenner", "Physician who developed vaccination"]],
    relations: [["related_to", "discovery-of-penicillin", "Two of the most important advances in fighting infectious disease."]],
  },
  {
    slug: "benz-patent-motorwagen",
    title: "Karl Benz patents the first practical automobile",
    alt: ["Benz Patent-Motorwagen", "Invention of the car"],
    date: "1886-01-29",
    period: "industry-and-empire",
    category: "technology",
    region: "europe",
    location: "Mannheim, German Empire",
    places: ["mannheim"],
    wiki: "Benz Patent-Motorwagen",
    keywords: ["Karl Benz", "Bertha Benz", "automobile", "internal combustion engine", "car"],
    summary:
      "Karl Benz applied for a patent on a three-wheeled vehicle powered by a petrol engine, generally regarded as the first practical automobile.",
    overview:
      "German patent 37435, filed on 29 January 1886, covered a 'vehicle powered by a gas engine'. In August 1888 Bertha Benz drove a Motorwagen about 100 kilometres from Mannheim to Pforzheim, the first long-distance car journey, demonstrating its practicality.",
    context:
      "Inventors had experimented with self-propelled vehicles for decades, including steam carriages. The four-stroke internal combustion engine developed by Nicolaus Otto in 1876 made light, compact engines possible. Gottlieb Daimler and Wilhelm Maybach were working on similar vehicles nearby.",
    narrative:
      "Benz designed the vehicle as a whole rather than adding an engine to a carriage: a single-cylinder four-stroke engine mounted at the rear, electric ignition, water cooling and a steel tube frame with three wire wheels. The first public drive took place in Mannheim in July 1886.\n\nBertha Benz, who had invested in the business, made her journey with her two sons without telling her husband, solving problems on the way. Benz & Cie. began selling cars, and by the 1900s the automobile industry was growing rapidly in Europe and the United States.",
    causes: [
      "The development of the internal combustion engine",
      "Industrial engineering expertise in Germany",
    ],
    consequences: [
      "The birth of the automobile industry",
      "Transformation of transport, cities and economies",
      "Growing dependence on oil",
    ],
    timeline: [
      ["1886-01-29", "Patent filed", "German patent 37435."],
      ["1886-07-03", "First public drive", "In Mannheim."],
      ["1888-08", "Bertha Benz's journey", "Mannheim to Pforzheim."],
    ],
    people: [
      ["carl-benz", "Engineer and inventor"],
      ["bertha-benz", "Business partner who made the first long-distance drive"],
    ],
    relations: [
      ["part_of", "industrial-revolution", "A product of the second industrial revolution."],
      ["followed_by", "wright-brothers-first-flight", "Lightweight petrol engines made both cars and powered aircraft possible."],
    ],
  },
  {
    slug: "edison-light-bulb",
    title: "Edison's long-lasting electric light bulb",
    alt: ["Incandescent light bulb", "Electric light"],
    date: "1879-10-22",
    period: "industry-and-empire",
    category: "technology",
    region: "north-america",
    location: "Menlo Park, New Jersey, United States",
    places: ["menlo-park"],
    wiki: "Incandescent light bulb",
    keywords: ["Thomas Edison", "Joseph Swan", "electricity", "carbon filament", "Pearl Street Station"],
    summary:
      "Thomas Edison's laboratory tested a carbon-filament lamp that glowed for about thirteen hours, a key step toward practical electric lighting.",
    overview:
      "Edison did not invent the light bulb: many inventors had made incandescent lamps, and Joseph Swan demonstrated a carbon-filament lamp in England in 1878–1879. Edison's achievement was a long-lasting, high-resistance lamp together with a complete system of generation and distribution.",
    context:
      "Gas lighting dominated cities in the 1870s, and arc lamps were too bright for homes. The challenge was a filament that would glow for hours without burning out, which required a good vacuum.",
    narrative:
      "Edison's team at Menlo Park tested thousands of materials. In October 1879 a carbonised cotton-thread filament lasted about 13.5 hours; later bamboo filaments lasted over a thousand hours. Edison filed a patent in November 1879 and gave a public demonstration on New Year's Eve.\n\nIn 1882 Edison opened the Pearl Street Station in New York, one of the first central power stations. In Britain, Edison and Swan merged their companies in 1883 after a patent dispute.",
    causes: [
      "Demand for safer, cleaner lighting",
      "Advances in vacuum pumps and generators",
      "Edison's industrial research laboratory",
    ],
    consequences: [
      "Electric lighting in homes and cities",
      "The growth of electric power grids",
      "The model of the industrial research laboratory",
    ],
    timeline: [
      ["1878-12", "Swan demonstrates his lamp", "In Newcastle upon Tyne."],
      ["1879-10-22", "Carbon filament test", "Lasts about 13.5 hours."],
      ["1879-12-31", "Public demonstration", "At Menlo Park."],
      ["1882-09-04", "Pearl Street Station opens", "New York."],
    ],
    people: [
      ["thomas-edison", "Inventor"],
      ["joseph-swan", "British inventor of a carbon-filament lamp"],
    ],
    relations: [["part_of", "industrial-revolution", "A product of the second industrial revolution's electrical age."]],
  },
  {
    slug: "lumiere-first-film-screening",
    title: "The Lumière brothers' first public film screening",
    alt: ["Birth of cinema", "Cinématographe"],
    date: "1895-12-28",
    period: "industry-and-empire",
    category: "technology",
    region: "europe",
    location: "Grand Café, Paris",
    places: ["paris"],
    wiki: "Auguste and Louis Lumière",
    keywords: ["cinema", "film", "Cinématographe", "Lumière", "motion pictures"],
    summary:
      "Auguste and Louis Lumière showed ten short films to a paying audience in a Paris café, an event often taken as the birth of cinema.",
    overview:
      "The screening at the Salon Indien of the Grand Café on 28 December 1895 used the Cinématographe, a device that served as camera, printer and projector. The programme of films under a minute long included Workers Leaving the Lumière Factory.",
    context:
      "Inventors in several countries were developing moving pictures. Thomas Edison's Kinetoscope (1893) allowed one person at a time to watch films through a peephole. The Lumière family ran a large photographic plate factory in Lyon.",
    narrative:
      "The Lumières patented the Cinématographe in February 1895 and held private demonstrations that year. Their first public, paid screening drew a small audience, but word spread quickly, and soon there were several shows a day.\n\nThe brothers sent camera operators around the world to film and screen. They regarded cinema as having limited commercial future and turned to colour photography, developing the Autochrome plate in 1907.",
    causes: [
      "Advances in photography and celluloid film",
      "Competition among inventors of moving pictures",
    ],
    consequences: [
      "The birth of projected cinema for audiences",
      "Rapid spread of film exhibition worldwide",
      "The beginning of the film industry",
    ],
    timeline: [
      ["1895-02-13", "Cinématographe patented", "By the Lumière brothers."],
      ["1895-03-22", "First private screening", "In Paris."],
      ["1895-12-28", "First public paid screening", "At the Grand Café."],
    ],
    people: [
      ["auguste-lumiere", "Inventor"],
      ["louis-lumiere", "Inventor"],
    ],
    relations: [],
  },
  {
    slug: "marconi-transatlantic-radio",
    title: "Marconi's first transatlantic radio signal",
    alt: ["Transatlantic wireless", "Invention of radio"],
    date: "1901-12-12",
    period: "industry-and-empire",
    category: "technology",
    region: "north-america",
    location: "Signal Hill, St. John's, Newfoundland",
    places: ["signal-hill"],
    wiki: "Invention of radio",
    keywords: ["Guglielmo Marconi", "radio", "wireless telegraphy", "Morse code", "Poldhu"],
    summary:
      "Guglielmo Marconi reported receiving the Morse letter 'S' sent by radio across the Atlantic from Cornwall to Newfoundland.",
    overview:
      "On 12 December 1901 Marconi and his assistant, using an antenna held up by a kite, said they heard three faint clicks transmitted from Poldhu in Cornwall, about 3,500 kilometres away. Some scientists doubted the claim, but in 1902 Marconi demonstrated reception across the ocean beyond doubt.",
    context:
      "Building on work by James Clerk Maxwell and Heinrich Hertz on electromagnetic waves, Marconi developed practical wireless telegraphy in the 1890s. Many scientists believed radio waves could not follow the curve of the Earth over long distances.",
    narrative:
      "Marconi's success showed that radio waves could travel far beyond the horizon, later explained by reflection from the ionosphere. His company built transatlantic stations and equipped ships with wireless; radio calls for help from the Titanic in 1912 demonstrated its importance at sea.\n\nMarconi shared the 1909 Nobel Prize in Physics with Karl Ferdinand Braun. Wireless telegraphy led to voice radio and broadcasting in the 1920s.",
    causes: [
      "Research on electromagnetic waves",
      "Commercial demand for long-distance communication",
    ],
    consequences: [
      "Transatlantic wireless communication",
      "Ship-to-shore radio and maritime safety",
      "The foundations of broadcasting",
    ],
    timeline: [
      ["1896", "Marconi's British patent", "For wireless telegraphy."],
      ["1901-12-12", "Signal reported in Newfoundland", "Sent from Poldhu, Cornwall."],
      ["1909-12-10", "Nobel Prize in Physics", "Shared with Karl Ferdinand Braun."],
    ],
    people: [["guglielmo-marconi", "Inventor"]],
    relations: [
      ["related_to", "invention-of-the-telephone", "Two inventions that transformed long-distance communication."],
      ["related_to", "sinking-of-the-titanic", "Radio distress calls from the Titanic summoned the Carpathia."],
    ],
  },
  {
    slug: "discovery-of-radium",
    title: "Marie and Pierre Curie discover radium",
    alt: ["Discovery of polonium and radium", "Radioactivity"],
    date: "1898-12-26",
    period: "industry-and-empire",
    category: "science",
    region: "europe",
    location: "Paris",
    places: ["paris"],
    wiki: "Radium",
    keywords: ["Marie Curie", "Pierre Curie", "radioactivity", "polonium", "radium", "Nobel Prize"],
    summary:
      "Marie and Pierre Curie announced the discovery of radium, a second new radioactive element after polonium, found in uranium ore.",
    overview:
      "The Curies, with Gustave Bémont, reported radium to the French Academy of Sciences on 26 December 1898, months after announcing polonium in July. Marie Curie coined the term 'radioactivity'. She became the first woman to win a Nobel Prize and the first person to win two.",
    context:
      "In 1896 Henri Becquerel discovered that uranium salts emitted rays. Marie Curie chose to study these 'uranic rays' for her doctorate and found that the ore pitchblende was more active than its uranium content explained.",
    narrative:
      "Working in a converted shed in Paris, the Curies processed tonnes of pitchblende residue to isolate tiny amounts of the new elements. Marie Curie isolated radium chloride in 1902 and pure radium metal in 1910.\n\nThe 1903 Nobel Prize in Physics went to Becquerel and the Curies; Marie Curie won the 1911 Nobel Prize in Chemistry alone. Radium was used in cancer treatment, but the dangers of radiation were poorly understood; Marie Curie died in 1934 of aplastic anaemia, probably caused by her exposure.",
    causes: [
      "Becquerel's discovery of uranium's rays",
      "Marie Curie's systematic measurements of radioactivity",
    ],
    consequences: [
      "The founding of the science of radioactivity",
      "Medical uses of radiation",
      "Two Nobel Prizes for Marie Curie",
    ],
    timeline: [
      ["1896-03", "Becquerel discovers radioactivity", "In uranium salts."],
      ["1898-07", "Polonium announced", "Named after Poland."],
      ["1898-12-26", "Radium announced", "To the Academy of Sciences."],
      ["1903-12-10", "Nobel Prize in Physics", "Shared with Becquerel."],
      ["1911-12-10", "Nobel Prize in Chemistry", "Marie Curie."],
    ],
    people: [
      ["marie-curie", "Physicist and chemist"],
      ["pierre-curie", "Physicist"],
    ],
    relations: [["related_to", "einstein-annus-mirabilis", "Part of a revolution in physics around 1900."]],
  },
];

/** Religious history: councils, reformations and turning points. */
export const faithEvents: EventSeed[] = [
  {
    slug: "siege-of-jerusalem-70",
    title: "Destruction of the Second Temple",
    alt: ["Siege of Jerusalem (70 CE)", "Fall of the Second Temple"],
    date: "70-04",
    end: "70-09",
    period: "classical-antiquity",
    category: "conflict",
    region: "middle-east",
    location: "Jerusalem, Roman Judaea",
    places: ["jerusalem"],
    wiki: "Siege of Jerusalem (70 CE)",
    keywords: ["Second Temple", "Titus", "First Jewish–Roman War", "Judaism", "Tisha B'Av", "Josephus"],
    summary:
      "Roman forces under Titus besieged and captured Jerusalem during the First Jewish–Roman War, destroying the Second Temple, the centre of Jewish worship.",
    overview:
      "The siege lasted from spring to September 70 CE. The Temple was burned in the summer; Jewish tradition commemorates its destruction, and that of the First Temple, on Tisha B'Av. The main source is the historian Josephus, who was present with the Romans.",
    context:
      "A revolt against Roman rule broke out in Judaea in 66 CE. Rival Jewish factions controlled Jerusalem. Vespasian led the Roman campaign until he became emperor in 69 and left his son Titus to take the city.",
    narrative:
      "Titus's legions broke through the city's walls one after another while famine spread inside. The Temple was set on fire and destroyed, and the city was sacked. Many inhabitants were killed or enslaved. The last rebel stronghold, Masada, fell in 73 or 74.\n\nWith Temple sacrifice ended, Judaism reorganised around prayer, study and the synagogue, led by rabbis; this Rabbinic Judaism shaped the religion ever since. The Arch of Titus in Rome, completed after his death, depicts the spoils of the Temple, including the menorah.",
    causes: [
      "The Jewish revolt against Roman rule from 66 CE",
      "Rome's determination to reassert control",
    ],
    consequences: [
      "Destruction of the Second Temple",
      "The rise of Rabbinic Judaism",
      "Growing separation between Judaism and early Christianity",
    ],
    timeline: [
      ["66", "Revolt begins", "First Jewish–Roman War."],
      ["70-04", "Siege begins", "Under Titus."],
      ["70-08", "Temple destroyed", "Commemorated on Tisha B'Av."],
      ["70-09", "City captured", "Jerusalem sacked."],
      ["~73", "Fall of Masada", "The last rebel stronghold."],
    ],
    people: [
      ["titus", "Roman commander"],
      ["josephus", "Historian of the war"],
    ],
    relations: [
      ["related_to", "fall-of-jerusalem-587-bce", "The First Temple had been destroyed by the Babylonians in 587/586 BCE."],
      ["related_to", "dead-sea-scrolls", "The scrolls were hidden in caves near Qumran around the time of the revolt."],
    ],
  },
  {
    slug: "council-of-nicaea",
    title: "First Council of Nicaea",
    alt: ["Nicene Creed", "Council of Nicaea"],
    date: "325",
    period: "classical-antiquity",
    category: "culture",
    region: "middle-east",
    location: "Nicaea (İznik, Turkey)",
    places: ["nicaea"],
    wiki: "First Council of Nicaea",
    keywords: ["Constantine", "Nicene Creed", "Arianism", "Christianity", "Easter", "ecumenical council"],
    summary:
      "Emperor Constantine summoned bishops from across the Roman Empire to Nicaea, where they agreed a creed defining Christ as 'of one substance' with God the Father.",
    overview:
      "The council, held in the summer of 325, was the first ecumenical (empire-wide) council of the Christian Church. It condemned the teaching of Arius that the Son was created, issued the original Nicene Creed and addressed the dating of Easter. Several hundred bishops attended; traditional counts give 318.",
    context:
      "Constantine had ended the persecution of Christians with the Edict of Milan in 313 and sought unity in the Church. A dispute begun in Alexandria between the priest Arius and his bishop over the nature of Christ was dividing Christians.",
    narrative:
      "Constantine opened the council and took part in its sessions. The bishops adopted a creed using the term homoousios ('of the same substance') and excommunicated Arius and supporters who refused to sign. The council also issued canons on church discipline.\n\nThe controversy did not end at Nicaea; Arianism remained influential for decades. The creed was expanded at the Council of Constantinople in 381 into the form used today in many churches as the Nicene Creed.",
    causes: [
      "The Arian controversy",
      "Constantine's wish for unity in the Church and empire",
    ],
    consequences: [
      "The Nicene Creed, still recited by many Christians",
      "A model for later ecumenical councils",
      "Closer ties between the Church and the Roman state",
    ],
    timeline: [
      ["313", "Edict of Milan", "Toleration for Christians."],
      ["325", "Council meets at Nicaea", "Creed adopted."],
      ["381", "Council of Constantinople", "Creed expanded."],
    ],
    people: [
      ["constantine-the-great", "Emperor who convened the council"],
      ["arius", "Priest whose teaching was condemned"],
    ],
    relations: [
      ["followed_by", "founding-of-constantinople", "Five years later Constantine dedicated his new capital."],
      ["related_to", "east-west-schism", "The creed's later wording, including the filioque, became a point of division between East and West."],
    ],
  },
  {
    slug: "first-revelation-of-muhammad",
    title: "Muhammad's first revelation",
    alt: ["Laylat al-Qadr", "Cave of Hira"],
    date: "~610",
    period: "middle-ages",
    category: "culture",
    region: "middle-east",
    location: "Cave of Hira, near Mecca",
    places: ["mecca", "cave-of-hira"],
    wiki: "Muhammad's first revelation",
    keywords: ["Islam", "Quran", "Gabriel", "Mecca", "Ramadan", "prophet"],
    summary:
      "According to Islamic tradition, Muhammad received the first verses of the Quran from the angel Gabriel while meditating in a cave on Mount Hira, marking the beginning of his prophethood.",
    overview:
      "Islamic tradition dates the event to around 610 CE, during the month of Ramadan, and identifies the first revealed words as the opening verses of Surah al-Alaq ('Recite!'). Muslims commemorate the night of the revelation as Laylat al-Qadr. The account comes from early Islamic biographies and hadith collections.",
    context:
      "Mecca was a trading town and the site of the Kaaba, a sanctuary then visited by pilgrims of many Arabian faiths. Muhammad, a merchant of the Quraysh tribe in his forties, was accustomed to retreat to the cave for reflection.",
    narrative:
      "The traditional accounts describe Muhammad returning shaken to his wife Khadija, who became the first person to accept his message. Revelations continued over the following 23 years and were later compiled as the Quran.\n\nMuhammad began preaching publicly in Mecca around 613. Opposition from the city's leaders led him and his followers to emigrate to Medina in 622, the Hijra, which marks year one of the Islamic calendar.",
    causes: [
      "Muhammad's practice of retreat and reflection",
      "The religious landscape of Arabia",
    ],
    consequences: [
      "The beginning of Islam",
      "The revelation of the Quran over 23 years",
      "Muhammad's public preaching in Mecca",
    ],
    timeline: [
      ["~610", "First revelation", "In the Cave of Hira."],
      ["~613", "Public preaching begins", "In Mecca."],
      ["622", "The Hijra", "Emigration to Medina."],
      ["632-06-08", "Death of Muhammad", "In Medina."],
    ],
    dateNote: "The year is traditional. Islamic sources place the revelation in Ramadan, when Muhammad was about forty; modern historians generally accept around 610 CE.",
    people: [["muhammad", "Prophet of Islam"]],
    relations: [["followed_by", "hijra", "Opposition in Mecca led to the emigration to Medina in 622."]],
  },
  {
    slug: "act-of-supremacy-1534",
    title: "Henry VIII breaks with Rome",
    alt: ["Act of Supremacy 1534", "English Reformation", "Church of England"],
    date: "1534-11",
    period: "early-modern",
    category: "culture",
    region: "europe",
    location: "London, Kingdom of England",
    places: ["london"],
    wiki: "English Reformation",
    keywords: ["Henry VIII", "Church of England", "Anne Boleyn", "Catherine of Aragon", "Reformation", "dissolution of the monasteries"],
    summary:
      "Parliament declared King Henry VIII Supreme Head of the Church in England, ending papal authority after the pope refused to annul his marriage.",
    overview:
      "The Act of Supremacy of November 1534 made the monarch head of the English church. It followed Henry's marriage to Anne Boleyn in 1533 after Archbishop Thomas Cranmer declared his first marriage, to Catherine of Aragon, void. The dissolution of the monasteries followed from 1536.",
    context:
      "Henry had sought an annulment from Pope Clement VII since 1527, hoping for a male heir. The pope, under pressure from Catherine's nephew, Emperor Charles V, refused. Meanwhile Lutheran ideas were spreading in England.",
    narrative:
      "With Thomas Cromwell managing Parliament, a series of laws cut ties with Rome: appeals to the pope were banned in 1533 and the Act of Supremacy followed. Refusing to accept it was treason; Thomas More and Bishop John Fisher were executed in 1535.\n\nHenry's church remained largely Catholic in doctrine, but under his son Edward VI it became Protestant. Mary I restored Catholicism, and Elizabeth I's settlement of 1559, including a new Act of Supremacy, established the Church of England in lasting form.",
    causes: [
      "Henry VIII's desire for an annulment and a male heir",
      "The pope's refusal under pressure from Charles V",
      "The spread of Reformation ideas",
    ],
    consequences: [
      "The Church of England, independent of Rome",
      "Dissolution of the monasteries (1536–1541)",
      "Decades of religious upheaval under Henry's children",
    ],
    timeline: [
      ["1533-01-25", "Henry marries Anne Boleyn", "In secret."],
      ["1534-11", "Act of Supremacy", "Henry becomes Supreme Head of the Church."],
      ["1535-07-06", "Execution of Thomas More", "For refusing the oath."],
      ["1536", "Dissolution of the monasteries begins", "Church lands seized."],
    ],
    people: [
      ["henry-viii", "King of England"],
      ["thomas-cromwell", "Chief minister"],
      ["anne-boleyn", "Queen of England"],
    ],
    relations: [["related_to", "ninety-five-theses", "Part of the wider European Reformation."]],
  },
  {
    slug: "council-of-trent",
    title: "Council of Trent",
    alt: ["Catholic Reformation", "Counter-Reformation"],
    date: "1545-12-13",
    end: "1563-12-04",
    period: "early-modern",
    category: "culture",
    region: "europe",
    location: "Trento, Prince-Bishopric of Trent",
    places: ["trento"],
    wiki: "Council of Trent",
    featured: true,
    keywords: ["Catholic Church", "Counter-Reformation", "Pope Paul III", "seminaries", "doctrine", "Reformation"],
    summary:
      "The Catholic Church's council at Trent answered the Protestant Reformation by defining Catholic doctrine and reforming abuses, launching the Catholic or Counter-Reformation.",
    overview:
      "Convened by Pope Paul III, the council met in 25 sessions across three periods between 1545 and 1563. It affirmed doctrines Protestants disputed, such as the seven sacraments and the authority of tradition alongside Scripture, and ordered reforms including seminaries to train priests.",
    context:
      "Martin Luther's challenge from 1517 had split Western Christianity. Emperor Charles V pressed for a council to restore unity, while popes feared one could limit their authority. Trent, in the Empire but close to Italy, was a compromise location.",
    narrative:
      "The first period (1545–1547) dealt with Scripture, original sin and justification by faith and works. Interrupted by war and plague, the council resumed in 1551–1552 and finally in 1562–1563, concluding under Pope Pius IV.\n\nIts decrees required bishops to live in their dioceses, banned the sale of indulgences for money and set up seminaries. The Roman Catechism (1566) and a standardised Missal (1570) followed. New orders such as the Jesuits spread the reformed Catholicism through education and missions. The council shaped Catholic life until the Second Vatican Council.",
    causes: [
      "The Protestant Reformation",
      "Calls for reform of clerical abuses",
      "Pressure from Emperor Charles V",
    ],
    consequences: [
      "Clear definition of Catholic doctrine",
      "Reform of clergy and training in seminaries",
      "The Counter-Reformation and Baroque religious culture",
    ],
    timeline: [
      ["1545-12-13", "Council opens", "Under Pope Paul III."],
      ["1547-01-13", "Decree on justification", "A central Protestant issue."],
      ["1563-12-04", "Council closes", "Under Pope Pius IV."],
      ["1566", "Roman Catechism published", "Implementing the council."],
    ],
    people: [
      ["pope-paul-iii", "Pope who convened the council"],
      ["charles-v", "Holy Roman Emperor who pressed for a council"],
    ],
    relations: [
      ["related_to", "second-vatican-council", "The next council to reshape Catholic practice as profoundly was Vatican II, four centuries later."],
      ["related_to", "beeldenstorm", "Calvinist iconoclasm rejected the religious images that Trent defended."],
    ],
  },
  {
    slug: "peace-of-augsburg",
    title: "Peace of Augsburg",
    alt: ["Cuius regio, eius religio"],
    date: "1555-09-25",
    period: "early-modern",
    category: "politics",
    region: "europe",
    location: "Augsburg, Holy Roman Empire",
    places: ["augsburg"],
    wiki: "Peace of Augsburg",
    keywords: ["Lutheranism", "Holy Roman Empire", "Charles V", "Ferdinand I", "religious peace"],
    summary:
      "A treaty within the Holy Roman Empire allowed each ruler to choose Lutheranism or Catholicism for his territory, ending a period of religious war in Germany.",
    overview:
      "The settlement, agreed at the Imperial Diet on 25 September 1555, is summarised by the later phrase cuius regio, eius religio ('whose realm, his religion'). It recognised Lutheranism but not Calvinism or other Protestant churches, and subjects could emigrate rather than convert.",
    context:
      "Emperor Charles V had defeated the Protestant Schmalkaldic League in 1547 but could not restore religious unity. A princely revolt in 1552 forced him to negotiate. His brother Ferdinand conducted the talks.",
    narrative:
      "The peace brought decades of relative calm to the Empire. But its terms left unresolved disputes over church lands and ecclesiastical states, and excluded the growing Calvinist movement.\n\nThese tensions contributed to the outbreak of the Thirty Years' War in 1618. The Peace of Westphalia in 1648 extended recognition to Calvinism.",
    causes: [
      "The spread of Lutheranism among German princes",
      "Charles V's failure to restore religious unity by force",
    ],
    consequences: [
      "Legal recognition of Lutheranism in the Empire",
      "Religion determined by territorial rulers",
      "Unresolved tensions that fed the Thirty Years' War",
    ],
    timeline: [
      ["1547-04-24", "Battle of Mühlberg", "Charles V defeats the Protestants."],
      ["1552", "Princes' revolt", "Forces negotiations."],
      ["1555-09-25", "Peace of Augsburg", "Agreed at the Imperial Diet."],
      ["1556", "Charles V abdicates", "Ferdinand succeeds as emperor in 1558."],
    ],
    people: [
      ["ferdinand-i", "King of the Romans who negotiated the peace"],
      ["charles-v", "Holy Roman Emperor"],
    ],
    relations: [
      ["contributed_to", "thirty-years-war", "Its exclusions and unresolved disputes fed the tensions that erupted in 1618."],
      ["related_to", "ninety-five-theses", "A settlement of the religious divisions Luther's Reformation created."],
    ],
  },
  {
    slug: "beeldenstorm",
    title: "The Beeldenstorm",
    alt: ["Iconoclastic Fury", "Iconoclasm of 1566"],
    date: "1566-08-10",
    end: "1566-10",
    period: "early-modern",
    category: "culture",
    region: "europe",
    location: "Habsburg Netherlands",
    places: ["steenvoorde", "antwerp", "utrecht"],
    wiki: "Beeldenstorm",
    featured: true,
    keywords: ["iconoclasm", "Calvinism", "hedge preaching", "Philip II", "Reformation", "Netherlands"],
    summary:
      "In the summer of 1566 crowds of Calvinists stormed churches across the Low Countries, smashing statues, paintings and altars. The outburst provoked a harsh Spanish response that led to the Dutch Revolt.",
    overview:
      "The iconoclasm began on 10 August 1566 near Steenvoorde in Flanders after an open-air 'hedge sermon'. Within weeks it spread to Antwerp, Ghent, Amsterdam, Utrecht and further north. Hundreds of churches and monasteries were stripped.",
    context:
      "Calvinism spread rapidly in the Netherlands in the 1560s despite heresy laws enforced by the Inquisition. In April 1566 lesser nobles petitioned the regent, Margaret of Parma, for moderation; that summer, Calvinist preachers drew thousands to sermons held outside the towns. A poor harvest added to unrest.",
    narrative:
      "Iconoclasts, often organised groups, removed or destroyed images they considered idolatrous, sometimes with the passive support of town authorities. On 20 August the Church of Our Lady in Antwerp was ransacked. Margaret of Parma made temporary concessions allowing Protestant preaching.\n\nPhilip II of Spain responded by sending the Duke of Alba with an army in 1567. His Council of Troubles condemned thousands, and the executions of the Counts of Egmont and Horn in 1568 helped push William of Orange into open revolt, beginning the Eighty Years' War.",
    causes: [
      "The rapid spread of Calvinism",
      "Persecution under the heresy laws",
      "Hedge preaching, economic hardship and a poor harvest",
    ],
    consequences: [
      "Destruction of much medieval religious art in the Low Countries",
      "Philip II sends the Duke of Alba",
      "The escalation into the Dutch Revolt",
    ],
    timeline: [
      ["1566-04-05", "Petition of the nobles", "Presented to Margaret of Parma."],
      ["1566-08-10", "Iconoclasm begins", "Near Steenvoorde, Flanders."],
      ["1566-08-20", "Antwerp's churches stormed", "Including the Church of Our Lady."],
      ["1567-08", "Alba arrives", "With a Spanish army."],
    ],
    people: [
      ["philip-ii-of-spain", "King whose response escalated the conflict"],
      ["duke-of-alba", "Commander sent to restore order"],
    ],
    relations: [
      ["contributed_to", "eighty-years-war", "Philip II's repression after the iconoclasm pushed the Netherlands into open revolt."],
      ["related_to", "ninety-five-theses", "Part of the wider Reformation; the iconoclasts were mostly Calvinists."],
    ],
  },
  {
    slug: "second-vatican-council",
    title: "Second Vatican Council",
    alt: ["Vatican II"],
    date: "1962-10-11",
    end: "1965-12-08",
    period: "cold-war",
    category: "culture",
    region: "europe",
    location: "St. Peter's Basilica, Vatican City",
    places: ["st-peters-basilica"],
    wiki: "Second Vatican Council",
    keywords: ["Catholic Church", "Pope John XXIII", "Pope Paul VI", "liturgy", "ecumenism", "Nostra aetate"],
    summary:
      "More than 2,000 Catholic bishops met in Rome over four sessions to bring the Church up to date, allowing Mass in local languages and opening dialogue with other Christians and other religions.",
    overview:
      "Announced by Pope John XXIII in 1959 and opened on 11 October 1962, the council continued under Pope Paul VI and closed on 8 December 1965. It produced sixteen documents. Nostra aetate (1965) rejected blaming the Jewish people collectively for the death of Jesus and expressed respect for other religions.",
    context:
      "John XXIII called for aggiornamento, 'bringing up to date', to address the modern world after two world wars and amid decolonisation and the Cold War. The previous council, Vatican I, had been cut short in 1870.",
    narrative:
      "The constitution on the liturgy, Sacrosanctum Concilium (1963), permitted the use of local languages in place of Latin and encouraged greater participation by the laity. Other documents addressed the nature of the Church, divine revelation, ecumenism, religious freedom (Dignitatis humanae) and the Church in the modern world (Gaudium et spes).\n\nImplementation transformed Catholic worship within a few years. Interpretations of the council's legacy remain debated within the Church, between those who see it as continuity and those who see a break with the past.",
    causes: [
      "Pope John XXIII's call for renewal",
      "Social and political change after the Second World War",
      "Liturgical and ecumenical movements within the Church",
    ],
    consequences: [
      "Mass celebrated in local languages",
      "New relations with other Christians, Jews and other religions",
      "Lasting debate about the council's interpretation",
    ],
    timeline: [
      ["1959-01-25", "Council announced", "By Pope John XXIII."],
      ["1962-10-11", "Council opens", "In St. Peter's Basilica."],
      ["1963-06-03", "John XXIII dies", "Paul VI continues the council."],
      ["1965-10-28", "Nostra aetate promulgated", "On relations with non-Christian religions."],
      ["1965-12-08", "Council closes", "After four sessions."],
    ],
    people: [
      ["pope-john-xxiii", "Pope who convened the council"],
      ["pope-paul-vi", "Pope who concluded it"],
    ],
    relations: [["related_to", "the-holocaust", "Nostra aetate's rejection of collective Jewish guilt came two decades after the Holocaust."]],
  },
];
