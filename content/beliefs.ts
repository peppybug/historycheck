/**
 * Belief systems and mythological figures.
 *
 * These are not dated events, so they live in their own collection and link
 * to the events in which they played a part. Mythological figures are figures
 * of religion and story, never presented as historical people.
 * Images are resolved from the Wikipedia article (lead image, then Wikidata P18).
 */
export interface BeliefSeed {
  slug: string;
  name: string;
  wiki: string;
  kind: "religion" | "branch" | "ancient-religion";
  /** Slug of the broader tradition this is a branch of. */
  parent?: string;
  /** How and when it emerged, as a label (dates are often traditional or approximate). */
  origin: string;
  /** Approximate year used only for ordering (negative = BCE). */
  sortYear: number;
  region: string;
  summary: string;
  overview: string;
  /** Short reference facts shown as a list. */
  facts: [string, string][];
  /** Events in the record where this tradition plays a part. */
  events: string[];
  /** Use the lead image of this article instead (when the main article's lead image is only a generic icon). */
  imageFrom?: string;
}

export interface DeitySeed {
  slug: string;
  name: string;
  wiki: string;
  belief: string;
  /** What the figure presides over, as a title ("God of war"). */
  domain: string;
  roman?: string;
  parents: string;
  symbols: string;
  summary: string;
  events?: string[];
}

export const beliefs: BeliefSeed[] = [
  {
    slug: "hinduism",
    name: "Hinduism",
    wiki: "Hinduism",
    // The Hinduism article's lead image is a generic religion icon.
    imageFrom: "Hindu deities",
    kind: "religion",
    origin: "Roots in the Vedic religion of the 2nd millennium BCE, South Asia",
    sortYear: -1500,
    region: "south-asia",
    summary:
      "A diverse family of traditions from South Asia with no single founder, centred on concepts such as dharma, karma and the cycle of rebirth.",
    overview:
      "Hinduism grew from the Vedic religion of the Indo-Aryan peoples and absorbed many regional traditions. Its scriptures include the Vedas and Upanishads and the epics Ramayana and Mahabharata, of which the Bhagavad Gita is part. Devotion (bhakti) to deities such as Vishnu, Shiva and the goddess Devi is central for many Hindus, while philosophical schools explore the relationship between the self (atman) and ultimate reality (brahman).",
    facts: [
      ["Founder", "None; it developed over millennia"],
      ["Scriptures", "Vedas, Upanishads, Bhagavad Gita, Ramayana, Mahabharata"],
      ["Key ideas", "Dharma, karma, samsara (rebirth), moksha (liberation)"],
      ["Places of worship", "Temples (mandir) and home shrines"],
      ["Major traditions", "Vaishnavism, Shaivism, Shaktism, Smartism"],
    ],
    events: ["construction-of-angkor-wat", "partition-of-india"],
  },
  {
    slug: "judaism",
    name: "Judaism",
    wiki: "Judaism",
    kind: "religion",
    origin: "Rooted in the religion of ancient Israel and Judah, 1st millennium BCE",
    sortYear: -1000,
    region: "middle-east",
    summary:
      "The monotheistic religion of the Jewish people, based on the covenant between God and Israel described in the Hebrew Bible.",
    overview:
      "Judaism traces its origins to the patriarch Abraham and to Moses, who in tradition received the Torah at Mount Sinai. The religion of ancient Israel centred on the Temple in Jerusalem; after the destruction of the Second Temple in 70 CE, Rabbinic Judaism reorganised religious life around prayer, the synagogue and the study of the Torah and Talmud. Judaism is the oldest of the Abrahamic religions and shaped both Christianity and Islam.",
    facts: [
      ["Key figures", "Abraham, Moses (in tradition); the rabbis of the Talmud"],
      ["Scriptures", "Hebrew Bible (Tanakh), with the Torah at its core; Talmud"],
      ["Places of worship", "Synagogue"],
      ["Holy city", "Jerusalem"],
      ["Major movements today", "Orthodox, Conservative, Reform"],
    ],
    events: ["fall-of-jerusalem-587-bce", "siege-of-jerusalem-70", "dead-sea-scrolls", "the-holocaust", "holocaust-in-the-netherlands", "second-vatican-council"],
  },
  {
    slug: "ancient-greek-religion",
    name: "Ancient Greek religion",
    wiki: "Ancient Greek religion",
    kind: "ancient-religion",
    origin: "Bronze Age roots; flourished c. 8th century BCE – 4th century CE",
    sortYear: -800,
    region: "europe",
    summary:
      "The religion of the ancient Greeks, who worshipped many gods led by Zeus from Mount Olympus, through sacrifices, festivals, oracles and myths.",
    overview:
      "Greek religion had no single holy book or church. Each city honoured the gods with temples, offerings and festivals, and great sanctuaries such as Olympia and Delphi drew worshippers from across the Greek world. The myths, known from poets such as Homer and Hesiod, told of the gods' origins, rivalries and dealings with humans. The Romans identified their own gods with the Greek ones. Traditional worship declined after the Roman Empire became Christian, and public sacrifice was banned by Theodosius I in the 390s.",
    facts: [
      ["Key texts", "Homer's Iliad and Odyssey; Hesiod's Theogony"],
      ["Worship", "Animal sacrifice, offerings, festivals, oracles"],
      ["Great sanctuaries", "Olympia (Zeus), Delphi (Apollo), the Acropolis of Athens (Athena)"],
      ["The Olympians", "Twelve principal gods said to live on Mount Olympus"],
      ["Roman counterpart", "Roman religion identified its gods with the Greek ones"],
    ],
    events: ["first-olympic-games", "trial-of-socrates", "birth-of-venus"],
  },
  {
    slug: "buddhism",
    name: "Buddhism",
    wiki: "Buddhism",
    kind: "religion",
    origin: "Founded by Siddhartha Gautama in northern India, c. 5th century BCE",
    sortYear: -450,
    region: "south-asia",
    summary:
      "A path of practice based on the teachings of the Buddha, aimed at freedom from suffering and the cycle of rebirth.",
    overview:
      "Siddhartha Gautama, known as the Buddha ('awakened one'), taught in the Ganges plain; his dates are debated, with most scholars placing his death in the 5th or early 4th century BCE. His teaching centres on the Four Noble Truths about suffering and its end, and the Noble Eightfold Path. Buddhism spread across Asia with the support of rulers such as the Mauryan emperor Ashoka and along the Silk Roads, developing into the Theravada, Mahayana and Vajrayana traditions.",
    facts: [
      ["Founder", "Siddhartha Gautama, the Buddha"],
      ["Key teachings", "Four Noble Truths, Noble Eightfold Path, nirvana"],
      ["Scriptures", "Pali Canon (Tipitaka); Mahayana sutras"],
      ["Places of worship", "Temples, monasteries, stupas"],
      ["Major traditions", "Theravada, Mahayana, Vajrayana"],
    ],
    events: ["kalinga-war", "opening-of-the-silk-road", "construction-of-angkor-wat"],
  },
  {
    slug: "christianity",
    name: "Christianity",
    wiki: "Christianity",
    kind: "religion",
    origin: "Emerged in Roman Judaea in the 1st century CE",
    sortYear: 30,
    region: "middle-east",
    summary:
      "The monotheistic religion based on the life, death and resurrection of Jesus of Nazareth, whom Christians believe to be the Son of God.",
    overview:
      "Christianity began among the followers of Jesus, a Jewish preacher crucified in Jerusalem around 30–33 CE. Spread by apostles such as Paul across the Roman Empire, it was persecuted at times until Constantine's Edict of Milan in 313, and later became the empire's official religion. Councils such as Nicaea defined its core beliefs. The Church split between East and West in 1054, and the Protestant Reformation divided Western Christianity in the 16th century. It is the world's largest religion.",
    facts: [
      ["Central figure", "Jesus of Nazareth"],
      ["Scriptures", "The Bible: Old Testament and New Testament"],
      ["Core beliefs", "The Trinity; the incarnation, death and resurrection of Jesus"],
      ["Places of worship", "Churches, chapels and cathedrals"],
      ["Major branches", "Catholic, Eastern Orthodox, Protestant, Oriental Orthodox"],
    ],
    events: ["crucifixion-of-jesus", "edict-of-milan", "council-of-nicaea", "east-west-schism", "the-last-supper"],
  },
  {
    slug: "catholicism",
    name: "Catholicism",
    wiki: "Catholic Church",
    kind: "branch",
    parent: "christianity",
    origin: "Traces its origin to the apostles; separated from the Eastern churches in 1054",
    sortYear: 1054,
    region: "europe",
    summary:
      "The largest Christian church, led by the pope as Bishop of Rome, with a hierarchy of bishops, seven sacraments and the Mass at the centre of worship.",
    overview:
      "The Catholic Church holds that it continues the church founded by Jesus, with the pope as successor of the apostle Peter. After the East–West Schism of 1054 it became the church of Western Europe. Its response to the Protestant Reformation, defined at the Council of Trent (1545–1563), shaped Catholic life for four centuries, until the Second Vatican Council (1962–1965) introduced Mass in local languages and new relations with other Christians and religions.",
    facts: [
      ["Leader", "The pope, Bishop of Rome"],
      ["Centre", "Vatican City, Rome"],
      ["Worship", "The Mass; seven sacraments"],
      ["Defining councils", "Nicaea (325), Trent (1545–1563), Vatican II (1962–1965)"],
    ],
    events: ["coronation-of-charlemagne", "east-west-schism", "first-crusade", "sistine-chapel-ceiling", "ninety-five-theses", "council-of-trent", "second-vatican-council"],
  },
  {
    slug: "eastern-orthodoxy",
    name: "Eastern Orthodoxy",
    wiki: "Eastern Orthodox Church",
    kind: "branch",
    parent: "christianity",
    origin: "The Greek-speaking churches of the East; separated from Rome in 1054",
    sortYear: 1054,
    region: "europe",
    summary:
      "The family of self-governing Orthodox churches, in communion with one another, that grew from the Christianity of the Byzantine Empire.",
    overview:
      "The Orthodox churches regard themselves as continuing the undivided church of the first seven ecumenical councils. Disputes over papal authority and the wording of the creed led to the schism with Rome in 1054. The Patriarch of Constantinople is honoured as first among equals, but each national church, such as the Russian, Greek or Serbian, governs itself. Icons and the Divine Liturgy are central to Orthodox worship.",
    facts: [
      ["Leadership", "Self-governing (autocephalous) churches; the Ecumenical Patriarch is first among equals"],
      ["Worship", "The Divine Liturgy; veneration of icons"],
      ["Historic centre", "Constantinople"],
    ],
    events: ["founding-of-constantinople", "east-west-schism", "fall-of-constantinople"],
  },
  {
    slug: "islam",
    name: "Islam",
    wiki: "Islam",
    kind: "religion",
    origin: "Arabian Peninsula, 7th century CE",
    sortYear: 610,
    region: "middle-east",
    summary:
      "The monotheistic religion taught by the Prophet Muhammad, based on the Quran, which Muslims believe is the word of God revealed to him.",
    overview:
      "According to Islamic tradition, Muhammad received his first revelation around 610 CE near Mecca. After the Hijra to Medina in 622, the Muslim community grew rapidly, and within a century the caliphates ruled from Spain to Central Asia. Islam shares its roots with Judaism and Christianity, recognising Abraham, Moses and Jesus as prophets. Disagreement over the succession to Muhammad led to the division between Sunni and Shia Muslims. Islam is the world's second-largest religion.",
    facts: [
      ["Prophet", "Muhammad"],
      ["Scriptures", "The Quran; the hadith (reports of the Prophet's words and deeds)"],
      ["Five Pillars", "Declaration of faith, prayer, almsgiving, fasting in Ramadan, pilgrimage to Mecca"],
      ["Places of worship", "Mosques"],
      ["Holy cities", "Mecca, Medina, Jerusalem"],
      ["Major branches", "Sunni, Shia"],
    ],
    events: ["first-revelation-of-muhammad", "hijra", "battle-of-tours", "founding-of-baghdad", "mansa-musa-pilgrimage", "fall-of-constantinople"],
  },
  {
    slug: "sikhism",
    name: "Sikhism",
    wiki: "Sikhism",
    kind: "religion",
    origin: "Founded by Guru Nanak in the Punjab, late 15th century",
    sortYear: 1499,
    region: "south-asia",
    summary:
      "A monotheistic religion founded by Guru Nanak and shaped by nine successive Gurus, emphasising devotion to one God, equality and service.",
    overview:
      "Guru Nanak (1469–1539) taught devotion to one formless God and rejected caste distinctions. Nine Gurus followed him; the tenth, Guru Gobind Singh, founded the Khalsa in 1699 and declared that the scripture, the Guru Granth Sahib, would be the eternal Guru. The Harmandir Sahib (Golden Temple) in Amritsar is its holiest shrine. The partition of India in 1947 divided the Punjab and displaced millions of Sikhs.",
    facts: [
      ["Founder", "Guru Nanak (1469–1539)"],
      ["Scripture", "Guru Granth Sahib"],
      ["Places of worship", "Gurdwaras, with a free communal kitchen (langar)"],
      ["Holiest shrine", "Harmandir Sahib (Golden Temple), Amritsar"],
    ],
    events: ["partition-of-india"],
  },
  {
    slug: "protestantism",
    name: "Protestantism",
    wiki: "Protestantism",
    kind: "branch",
    parent: "christianity",
    origin: "The Reformation, beginning in the Holy Roman Empire in 1517",
    sortYear: 1517,
    region: "europe",
    summary:
      "The branch of Christianity that originated in the 16th-century Reformation, rejecting papal authority and emphasising the Bible and salvation by faith.",
    overview:
      "Protestantism began with Martin Luther's challenge to the sale of indulgences in 1517 and spread through the work of reformers such as Huldrych Zwingli and John Calvin. Key principles include the authority of Scripture alone (sola scriptura) and justification by faith alone (sola fide). Protestant churches multiplied into many denominations, including Lutheran, Reformed (Calvinist), Anglican, Baptist, Methodist and Pentecostal churches.",
    facts: [
      ["Key reformers", "Martin Luther, Huldrych Zwingli, John Calvin"],
      ["Principles", "Scripture alone, faith alone, the priesthood of all believers"],
      ["Major traditions", "Lutheran, Reformed, Anglican, Baptist, Methodist, Pentecostal"],
    ],
    events: ["ninety-five-theses", "act-of-supremacy-1534", "peace-of-augsburg", "beeldenstorm", "eighty-years-war", "thirty-years-war"],
  },
];

export const deities: DeitySeed[] = [
  {
    slug: "zeus",
    name: "Zeus",
    wiki: "Zeus",
    belief: "ancient-greek-religion",
    domain: "King of the gods, god of the sky and thunder",
    roman: "Jupiter",
    parents: "Cronus and Rhea",
    symbols: "Thunderbolt, eagle, oak",
    summary:
      "The ruler of the gods on Mount Olympus, who overthrew his father Cronus and the Titans. He upheld order and justice and punished oath-breakers. His sanctuary at Olympia hosted the Olympic Games, and its gold-and-ivory statue by Phidias was one of the Seven Wonders of the Ancient World.",
    events: ["first-olympic-games"],
  },
  {
    slug: "hera",
    name: "Hera",
    wiki: "Hera",
    belief: "ancient-greek-religion",
    domain: "Queen of the gods, goddess of marriage and women",
    roman: "Juno",
    parents: "Cronus and Rhea",
    symbols: "Peacock, cow, diadem, pomegranate",
    summary:
      "Wife and sister of Zeus and protector of marriage and childbirth. In myth she is often jealous of Zeus's lovers and their children. Her great temples stood at Argos and on the island of Samos.",
  },
  {
    slug: "poseidon",
    name: "Poseidon",
    wiki: "Poseidon",
    belief: "ancient-greek-religion",
    domain: "God of the sea, earthquakes and horses",
    roman: "Neptune",
    parents: "Cronus and Rhea",
    symbols: "Trident, horse, dolphin, bull",
    summary:
      "Brother of Zeus who ruled the seas and could shake the earth. Sailors prayed to him for safe voyages. In myth he competed with Athena to be patron of Athens and lost. A temple to him stands at Cape Sounion near Athens.",
  },
  {
    slug: "demeter",
    name: "Demeter",
    wiki: "Demeter",
    belief: "ancient-greek-religion",
    domain: "Goddess of agriculture, grain and the harvest",
    roman: "Ceres",
    parents: "Cronus and Rhea",
    symbols: "Sheaf of wheat, torch, cornucopia",
    summary:
      "Goddess of the fertile earth. When Hades carried off her daughter Persephone, Demeter's grief made the land barren; Persephone's yearly return from the underworld explained the seasons. The Eleusinian Mysteries, secret rites near Athens, honoured both goddesses.",
  },
  {
    slug: "hestia",
    name: "Hestia",
    wiki: "Hestia",
    belief: "ancient-greek-religion",
    domain: "Goddess of the hearth and home",
    roman: "Vesta",
    parents: "Cronus and Rhea",
    symbols: "Hearth, fire",
    summary:
      "Eldest child of Cronus and Rhea and guardian of the household fire, which was the centre of family life and of each city's public hearth. She received the first offering at sacrifices. Some later lists of the twelve Olympians replace her with Dionysus.",
  },
  {
    slug: "hades",
    name: "Hades",
    wiki: "Hades",
    belief: "ancient-greek-religion",
    domain: "God of the underworld and the dead",
    roman: "Pluto",
    parents: "Cronus and Rhea",
    symbols: "Helm of darkness, Cerberus, sceptre",
    summary:
      "Brother of Zeus and Poseidon who ruled the realm of the dead, also called Hades. He was stern rather than evil. Because he lived beneath the earth, he is usually not counted among the Olympians. His abduction of Persephone is one of the best-known myths.",
  },
  {
    slug: "athena",
    name: "Athena",
    wiki: "Athena",
    belief: "ancient-greek-religion",
    domain: "Goddess of wisdom, crafts and strategic warfare",
    roman: "Minerva",
    parents: "Zeus (born from his head); in Hesiod, her mother was Metis",
    symbols: "Owl, olive tree, aegis, helmet and spear",
    summary:
      "Patron goddess of Athens, which was named after her. She represented intelligence, skill and disciplined warfare, in contrast to Ares. The Parthenon on the Acropolis was built as her temple in the 5th century BCE, during the age of Athenian democracy.",
    events: ["athenian-democracy"],
  },
  {
    slug: "ares",
    name: "Ares",
    wiki: "Ares",
    belief: "ancient-greek-religion",
    domain: "God of war",
    roman: "Mars",
    parents: "Zeus and Hera",
    symbols: "Spear, helmet, shield, dog, vulture",
    summary:
      "The Greek god of war, representing its violence, courage and bloodlust, unlike Athena, who stood for strategy. Greek myths often portray him unfavourably, and he had relatively few temples in Greece. The Romans honoured his counterpart Mars far more highly, as father of Romulus and a guardian of Rome.",
  },
  {
    slug: "apollo",
    name: "Apollo",
    wiki: "Apollo",
    belief: "ancient-greek-religion",
    domain: "God of music, prophecy, healing and archery",
    roman: "Apollo",
    parents: "Zeus and Leto",
    symbols: "Lyre, laurel wreath, bow and arrows",
    summary:
      "Twin brother of Artemis and god of light, music, poetry, medicine and prophecy. His oracle at Delphi, where the priestess Pythia spoke his answers, was the most famous in the Greek world and was consulted by cities before wars and colonisation.",
  },
  {
    slug: "artemis",
    name: "Artemis",
    wiki: "Artemis",
    belief: "ancient-greek-religion",
    domain: "Goddess of the hunt, wild animals and childbirth",
    roman: "Diana",
    parents: "Zeus and Leto",
    symbols: "Bow and arrows, deer, the moon",
    summary:
      "Twin sister of Apollo, a virgin huntress who protected wild places, animals and young girls, and helped women in childbirth. Her temple at Ephesus was one of the Seven Wonders of the Ancient World.",
  },
  {
    slug: "aphrodite",
    name: "Aphrodite",
    wiki: "Aphrodite",
    belief: "ancient-greek-religion",
    domain: "Goddess of love and beauty",
    roman: "Venus",
    parents: "Born from the sea foam (Hesiod); daughter of Zeus and Dione (Homer)",
    symbols: "Dove, myrtle, rose, scallop shell",
    summary:
      "Goddess of love, beauty and desire. In Hesiod's account she rose from the sea near Cyprus, an image painted by Botticelli in The Birth of Venus. In myth her promise of Helen to the Trojan prince Paris led to the Trojan War.",
    events: ["birth-of-venus"],
  },
  {
    slug: "hephaestus",
    name: "Hephaestus",
    wiki: "Hephaestus",
    belief: "ancient-greek-religion",
    domain: "God of fire, metalworking and craftsmen",
    roman: "Vulcan",
    parents: "Hera alone (Hesiod); Zeus and Hera (Homer)",
    symbols: "Hammer, anvil, tongs",
    summary:
      "The smith of the gods, who forged Zeus's thunderbolts and Achilles' armour in his workshop. He was lame and, in myth, married to Aphrodite. He was especially honoured in Athens, where his temple still stands above the ancient agora.",
  },
  {
    slug: "hermes",
    name: "Hermes",
    wiki: "Hermes",
    belief: "ancient-greek-religion",
    domain: "Messenger of the gods, god of travellers and trade",
    roman: "Mercury",
    parents: "Zeus and Maia",
    symbols: "Winged sandals, caduceus (herald's staff), traveller's hat",
    summary:
      "The swift messenger of the gods and guide of souls to the underworld. He protected travellers, merchants, shepherds and thieves. As a newborn, the myths say, he stole Apollo's cattle and invented the lyre.",
  },
  {
    slug: "dionysus",
    name: "Dionysus",
    wiki: "Dionysus",
    belief: "ancient-greek-religion",
    domain: "God of wine, festivity and theatre",
    roman: "Bacchus",
    parents: "Zeus and Semele",
    symbols: "Grapevine, ivy, thyrsus (staff), panther",
    summary:
      "God of wine, ecstasy and fertility, whose followers celebrated him in wild rites. The Dionysia festival in Athens, held in his honour, was where tragedy and comedy developed into the Greek theatre.",
  },
];
