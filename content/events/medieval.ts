import type { EventSeed } from "../types";

export const medievalEvents: EventSeed[] = [
  {
    slug: "justinian-code",
    title: "Justinian's Code of Roman law",
    alt: ["Corpus Juris Civilis", "Code of Justinian"],
    date: "529",
    end: "534",
    period: "middle-ages",
    category: "politics",
    region: "europe",
    location: "Constantinople, Byzantine Empire",
    places: ["constantinople"],
    civ: ["byzantine"],
    wiki: "Corpus Juris Civilis",
    keywords: ["Roman law", "Tribonian", "Digest", "Institutes", "civil law"],
    summary:
      "The Byzantine emperor Justinian I ordered the codification of centuries of Roman law, producing the body of texts later called the Corpus Juris Civilis.",
    overview:
      "Compiled between 529 and 534 by a commission led by the jurist Tribonian, the Corpus consolidated imperial legislation and classical legal writings. Its rediscovery in medieval Italy made it the foundation of civil law systems across Europe and beyond.",
    context:
      "By the sixth century, Roman law consisted of a vast and contradictory mass of imperial decrees and juristic opinions. Justinian, who sought to restore the Roman Empire's former glory, saw legal reform as part of that renewal alongside military reconquest and building projects such as the Hagia Sophia.",
    narrative:
      "The work had four parts: the Codex, a collection of imperial constitutions (first issued in 529 and revised in 534); the Digest, excerpts from classical jurists condensed from some three million lines to around 150,000; the Institutes, a textbook for law students; and the Novellae, Justinian's later laws.\n\nIn Western Europe the Digest was largely forgotten until a manuscript resurfaced in Italy in the late eleventh century. Scholars at Bologna began teaching it, launching the revival of Roman law that shaped canon law, the legal systems of continental Europe and, through them, much of Latin America and other regions.",
    causes: [
      "Confusion and contradiction in accumulated Roman law",
      "Justinian's programme of imperial restoration",
      "Earlier codification under Theodosius II (438)",
    ],
    consequences: [
      "Preserved classical Roman jurisprudence",
      "Became the basis of the civil law tradition after its medieval revival",
      "Influenced modern legal codes, including the Napoleonic Code",
    ],
    timeline: [
      ["527", "Justinian becomes emperor", "Rules until 565."],
      ["529", "First Codex issued", "Later superseded by a revised edition."],
      ["533", "Digest and Institutes published", "Classical jurisprudence condensed."],
      ["~1088", "Teaching of law at Bologna", "Revival of Roman law in Western Europe."],
    ],
    people: [["justinian-i", "Byzantine emperor who commissioned the codification"]],
    relations: [["followed_by", "plague-of-justinian", "Justinian's ambitions were soon hit by a devastating pandemic."]],
  },
  {
    slug: "plague-of-justinian",
    title: "Plague of Justinian",
    date: "541",
    end: "549",
    period: "middle-ages",
    category: "disaster",
    region: "global",
    location: "Mediterranean world and Near East",
    places: ["constantinople"],
    civ: ["byzantine"],
    wiki: "Plague of Justinian",
    discovery: true,
    keywords: ["bubonic plague", "Yersinia pestis", "pandemic", "Procopius"],
    summary:
      "The first recorded pandemic of bubonic plague swept across the Mediterranean world, killing a large share of the population of Constantinople.",
    overview:
      "The plague reached Egypt in 541 and Constantinople in 542, then recurred in waves for two centuries. DNA from sixth-century graves has confirmed the bacterium Yersinia pestis as the cause.",
    context:
      "Justinian's empire was engaged in costly wars to reconquer Italy and North Africa. Trade networks connecting the Mediterranean to the Red Sea and Indian Ocean helped carry the disease, likely spread by rats and fleas aboard grain ships.",
    narrative:
      "The historian Procopius, an eyewitness in Constantinople, described thousands dying each day at the height of the outbreak and bodies piling up faster than they could be buried. Justinian himself fell ill but survived. Death toll estimates vary widely, and recent research has argued that some older figures were exaggerated.\n\nGenetic studies of victims from Bavaria and elsewhere published in the 2010s identified Yersinia pestis, linking this pandemic to the later Black Death. Recurrences until around 750 strained the Byzantine and Sasanian empires and may have weakened them before the Arab conquests.",
    causes: [
      "Yersinia pestis carried by rodents and fleas",
      "Dense trade and grain shipping networks",
      "Crowded urban populations",
    ],
    consequences: [
      "Major population loss in Constantinople and across the Mediterranean",
      "Strained Byzantine finances and military recruitment",
      "Recurrent outbreaks for about two centuries",
    ],
    timeline: [
      ["541", "Plague appears at Pelusium, Egypt", "First documented outbreak."],
      ["542", "Plague reaches Constantinople", "Described by Procopius."],
      ["~750", "Last major recurrence", "The first plague pandemic ends."],
    ],
    people: [["justinian-i", "Emperor who contracted and survived the plague"]],
    relations: [["related_to", "black-death", "Both pandemics were caused by Yersinia pestis."]],
  },
  {
    slug: "hijra",
    title: "The Hijra: Muhammad's migration to Medina",
    alt: ["Hijrah", "Hegira"],
    date: "622",
    period: "middle-ages",
    category: "culture",
    region: "middle-east",
    location: "Mecca to Medina, Arabia",
    places: ["mecca", "medina"],
    civ: ["islamic-caliphates"],
    wiki: "Hijrah",
    keywords: ["Islam", "Prophet Muhammad", "Islamic calendar", "Yathrib"],
    summary:
      "The Prophet Muhammad and his followers migrated from Mecca to Yathrib (Medina), where he established the first Muslim community. The year marks the start of the Islamic calendar.",
    overview:
      "Facing persecution in Mecca, Muhammad left in 622 CE for Yathrib, later called Medina, at the invitation of its clans. The Islamic Hijri calendar, introduced under the caliph Umar, counts years from this event.",
    context:
      "Muhammad began preaching monotheism in Mecca around 610. His message challenged the city's polytheistic religious practices and its leading clans, the Quraysh, who opposed and harassed his followers. Some early Muslims had already sought refuge in Abyssinia.",
    narrative:
      "Muhammad's followers left Mecca in small groups, and he followed with his companion Abu Bakr. In Medina he acted as an arbiter between rival tribes and drew up an agreement, known as the Constitution of Medina, defining the rights and duties of the community, including Jewish tribes.\n\nThe Muslim community grew in Medina and fought a series of conflicts with Mecca, including the battles of Badr (624) and Uhud (625). In 630 Muhammad entered Mecca peacefully. By his death in 632, much of Arabia had accepted Islam, and the caliphates that followed expanded rapidly beyond it.",
    causes: [
      "Persecution of early Muslims by Meccan leaders",
      "Invitation from the clans of Yathrib",
      "Threats to Muhammad's life in Mecca",
    ],
    consequences: [
      "Establishment of the first Muslim polity in Medina",
      "Start of the Islamic (Hijri) calendar",
      "Foundation for the spread of Islam across Arabia and beyond",
    ],
    timeline: [
      ["~610", "Beginning of revelation", "Muhammad begins preaching in Mecca."],
      ["622", "Hijra", "Migration to Medina."],
      ["630", "Muhammad enters Mecca", "The Kaaba is cleared of idols."],
      ["632", "Death of Muhammad", "Abu Bakr becomes the first caliph."],
    ],
    people: [
      ["muhammad", "Prophet of Islam"],
      ["abu-bakr", "Companion who accompanied Muhammad; first caliph"],
    ],
    relations: [["followed_by", "battle-of-tours", "Within a century, caliphal armies had reached western Europe."]],
  },
  {
    slug: "battle-of-tours",
    title: "Battle of Tours",
    alt: ["Battle of Poitiers (732)", "Battle of the Highway of the Martyrs"],
    date: "732",
    period: "middle-ages",
    category: "conflict",
    region: "europe",
    location: "Between Tours and Poitiers, France",
    places: ["tours"],
    civ: ["islamic-caliphates"],
    wiki: "Battle of Tours",
    dateNote: "Most sources give October 732; the exact day and even the year (some argue 733) are uncertain.",
    keywords: ["Charles Martel", "Umayyad", "Franks", "al-Andalus"],
    summary:
      "Frankish forces under Charles Martel defeated an Umayyad army from al-Andalus in central France, halting a major raid north of the Pyrenees.",
    overview:
      "The Umayyad governor Abd al-Rahman al-Ghafiqi was killed in the battle. Later European writers presented the victory as having saved Christian Europe, a view many modern historians consider exaggerated.",
    context:
      "Umayyad forces had conquered most of the Iberian Peninsula after 711 and raided into Gaul. Abd al-Rahman led an expedition that defeated Duke Odo of Aquitaine and advanced toward the wealthy abbey of St Martin at Tours.",
    narrative:
      "Charles Martel, mayor of the palace of the Frankish kingdom, assembled an army that held a strong defensive position. Accounts describe the Frankish infantry standing firm against repeated cavalry charges. Abd al-Rahman was killed, and the Umayyad army withdrew during the night.\n\nThe battle strengthened Charles Martel's authority and the position of his family, the Carolingians; his grandson was Charlemagne. Umayyad raids into Gaul continued for some years, and historians today often view the battle as one important episode in a longer frontier struggle rather than a turning point of civilisations.",
    causes: [
      "Umayyad expansion into Iberia and raids into Gaul",
      "Defeat of Odo of Aquitaine",
      "Frankish defence of the abbey and lands around Tours",
    ],
    consequences: [
      "Ended the expedition and killed its commander",
      "Strengthened Carolingian power in Francia",
      "Became a symbolic battle in later European historiography",
    ],
    timeline: [
      ["711", "Umayyad conquest of Iberia begins", "Forces cross the Strait of Gibraltar."],
      ["732", "Battle of Tours", "Charles Martel's victory."],
      ["800-12-25", "Coronation of Charlemagne", "Charles Martel's grandson becomes emperor."],
    ],
    people: [["charles-martel", "Frankish leader who won the battle"]],
    relations: [["contributed_to", "coronation-of-charlemagne", "The victory boosted the Carolingian family's rise to power."]],
  },
  {
    slug: "an-lushan-rebellion",
    title: "An Lushan Rebellion",
    date: "755-12-16",
    end: "763-02-17",
    period: "middle-ages",
    category: "conflict",
    region: "east-asia",
    location: "Northern China",
    places: ["chang-an"],
    civ: ["ancient-china"],
    wiki: "An Lushan rebellion",
    discovery: true,
    keywords: ["Tang dynasty", "Emperor Xuanzong", "Yang Guifei", "military governors"],
    summary:
      "A rebellion led by the general An Lushan devastated Tang China, captured both capitals and permanently weakened imperial authority.",
    overview:
      "Lasting from 755 to 763, the rebellion caused enormous loss of life and displacement. The Tang dynasty survived, but its central government never fully recovered control over regional military governors.",
    context:
      "Under Emperor Xuanzong, the Tang dynasty reached a cultural high point, but power on the frontiers increasingly rested with military governors (jiedushi) commanding large professional armies. An Lushan, of Sogdian and Turkic descent, controlled three northern commands.",
    narrative:
      "An Lushan rose in revolt in late 755, captured Luoyang and proclaimed himself emperor of a new Yan dynasty. In 756 his forces took Chang'an. Xuanzong fled; on the way his troops forced the execution of his favourite consort, Yang Guifei, whom they blamed for the crisis. Xuanzong abdicated in favour of his son.\n\nAn Lushan was murdered by his own son in 757, but the fighting continued under other rebel leaders until 763. The Tang recovered the capitals with help from Uyghur forces. Census figures fell drastically, though historians debate how much this reflects deaths versus the collapse of registration. The poet Du Fu wrote some of his most famous works about the war's suffering.",
    causes: [
      "Concentration of military power in frontier governors",
      "Court intrigue and rivalry with chief minister Yang Guozhong",
      "Declining central oversight under Xuanzong",
    ],
    consequences: [
      "Massive loss of life and population displacement",
      "Lasting decline of Tang central authority",
      "Greater autonomy for regional military governors",
    ],
    timeline: [
      ["755-12-16", "Rebellion begins", "An Lushan revolts in the northeast."],
      ["756", "Fall of Chang'an", "Xuanzong flees to Sichuan."],
      ["757", "An Lushan murdered", "Killed by his son An Qingxu."],
      ["763-02-17", "Rebellion ends", "Last rebel leader Shi Chaoyi dies."],
    ],
    people: [["an-lushan", "General who led the rebellion"]],
  },
  {
    slug: "founding-of-baghdad",
    title: "Founding of Baghdad",
    alt: ["Round City of Baghdad", "Madinat al-Salam"],
    date: "762",
    period: "middle-ages",
    category: "culture",
    region: "middle-east",
    location: "Baghdad, Iraq",
    places: ["baghdad"],
    civ: ["islamic-caliphates"],
    wiki: "Round city of Baghdad",
    keywords: ["Abbasid", "al-Mansur", "House of Wisdom", "Islamic Golden Age"],
    summary:
      "The Abbasid caliph al-Mansur founded a new circular capital on the Tigris, which became one of the largest cities in the world and a centre of scholarship.",
    overview:
      "Construction began in 762 of the 'Round City', officially named Madinat al-Salam, the City of Peace. Baghdad was the heart of the Abbasid Caliphate and of the intellectual flowering often called the Islamic Golden Age.",
    context:
      "The Abbasids overthrew the Umayyad dynasty in 750 and moved the centre of the caliphate from Damascus eastward to Iraq. Al-Mansur sought a capital close to trade routes and the Persian heartland, with secure access to water.",
    narrative:
      "The city was built as a circle about two kilometres across, with double walls, four gates and the caliph's palace and great mosque at the centre. Tens of thousands of workers were reportedly employed. Baghdad rapidly expanded beyond the circle into a vast metropolis.\n\nUnder caliphs such as Harun al-Rashid and al-Ma'mun, scholars in Baghdad translated Greek, Persian and Indian texts into Arabic and made advances in mathematics, astronomy, medicine and philosophy. The House of Wisdom became associated with this work, and al-Khwarizmi's writings there gave us the words 'algebra' and 'algorithm'. The Round City itself has not survived.",
    causes: [
      "Abbasid revolution and the need for a new capital",
      "Strategic location on the Tigris near trade routes",
      "Desire to distance the dynasty from Umayyad Syria",
    ],
    consequences: [
      "Baghdad became a leading world city for centuries",
      "Centre of translation and scientific scholarship",
      "Abbasid power symbolically ended with its destruction by the Mongols in 1258",
    ],
    timeline: [
      ["750", "Abbasid revolution", "The Umayyads are overthrown."],
      ["762", "Construction of the Round City begins", "Ordered by al-Mansur."],
      ["~830", "Al-Khwarizmi's work on algebra", "Written in Baghdad."],
      ["1258-02-10", "Mongol sack of Baghdad", "End of the Abbasid Caliphate in Baghdad."],
    ],
    people: [
      ["al-mansur", "Abbasid caliph who founded the city"],
      ["al-khwarizmi", "Mathematician who worked in Baghdad"],
    ],
    relations: [["followed_by", "siege-of-baghdad-1258", "The city flourished for five centuries before the Mongol conquest."]],
  },
  {
    slug: "viking-raid-on-lindisfarne",
    title: "Viking raid on Lindisfarne",
    date: "793-06-08",
    period: "middle-ages",
    category: "conflict",
    region: "europe",
    location: "Lindisfarne, Northumbria, England",
    places: ["lindisfarne"],
    wiki: "Sack of Lindisfarne",
    keywords: ["Vikings", "Norse", "monastery", "Alcuin", "Viking Age"],
    dateNote: "The Anglo-Saxon Chronicle gives 8 June; some versions read January, which scholars consider less likely.",
    summary:
      "Norse raiders attacked the monastery on Lindisfarne, an event traditionally taken as the beginning of the Viking Age in western Europe.",
    overview:
      "The raid shocked Christian Europe. The scholar Alcuin, writing from Charlemagne's court, lamented that 'never before has such terror appeared in Britain'.",
    context:
      "Lindisfarne, a tidal island off Northumbria, was home to a renowned monastery founded in 635 and associated with St Cuthbert and the Lindisfarne Gospels. Scandinavian seafarers, using advanced longships, were beginning to raid coastal sites.",
    narrative:
      "According to the Anglo-Saxon Chronicle, the raiders plundered the church, killed some monks and carried others away as slaves. Monasteries were attractive targets because they held portable treasures and were usually undefended.\n\nRaids on Britain, Ireland and the Frankish coast intensified over the following decades. By the mid-ninth century, Viking armies were overwintering and settling, leading to the Danelaw in England, Norse kingdoms in Ireland and settlement in Normandy, Iceland and beyond. The Lindisfarne community eventually left the island in 875, carrying St Cuthbert's relics.",
    causes: [
      "Development of Scandinavian longship technology",
      "Wealth of undefended coastal monasteries",
      "Political and population pressures in Scandinavia",
    ],
    consequences: [
      "Beginning of two centuries of Viking raids and settlement",
      "Profound shock to the Christian world",
      "Long-term Scandinavian influence on Britain and Ireland",
    ],
    timeline: [
      ["635", "Monastery founded", "By Saint Aidan from Iona."],
      ["793-06-08", "Viking raid", "The monastery is plundered."],
      ["865", "Great Heathen Army lands", "Viking conquest in England begins."],
    ],
    people: [["alcuin-of-york", "Scholar who wrote of the raid from Charlemagne's court"]],
  },
  {
    slug: "coronation-of-charlemagne",
    title: "Coronation of Charlemagne",
    date: "800-12-25",
    period: "middle-ages",
    category: "politics",
    region: "europe",
    location: "St Peter's Basilica, Rome",
    places: ["rome", "aachen"],
    wiki: "Charlemagne",
    keywords: ["Carolingian", "Pope Leo III", "Holy Roman Empire", "Franks"],
    summary:
      "Pope Leo III crowned the Frankish king Charlemagne as emperor of the Romans on Christmas Day, reviving the imperial title in Western Europe.",
    overview:
      "For the first time since 476, a ruler in the West held the title of emperor. The coronation linked the Frankish monarchy, the papacy and the legacy of Rome, and is seen as a foundation of the later Holy Roman Empire.",
    context:
      "Charlemagne had expanded the Frankish kingdom into a realm covering much of western and central Europe. Pope Leo III, attacked by enemies in Rome in 799, had fled to Charlemagne for protection. In Constantinople, the Byzantine throne was held by a woman, Empress Irene, which some in the West argued left the imperial office vacant.",
    narrative:
      "During Christmas Mass, as Charlemagne rose from prayer, Leo placed a crown on his head and the congregation acclaimed him emperor. His biographer Einhard later claimed Charlemagne would not have entered the church had he known the pope's intention, though historians doubt this.\n\nThe Byzantines regarded the coronation as a usurpation; recognition of Charlemagne's title came only in 812. Charlemagne's court at Aachen fostered the Carolingian Renaissance, a revival of learning, script and the copying of classical texts. His empire was divided among his grandsons by the Treaty of Verdun in 843.",
    causes: [
      "Charlemagne's conquests and dominance in Western Europe",
      "Pope Leo III's need for political protection",
      "Papal desire for a Western protector independent of Byzantium",
    ],
    consequences: [
      "Revival of the Western imperial title",
      "Close and contested relationship between emperors and popes",
      "Precedent for the Holy Roman Empire",
    ],
    timeline: [
      ["768", "Charlemagne becomes king of the Franks", "Initially jointly with his brother."],
      ["800-12-25", "Imperial coronation", "Crowned by Leo III in Rome."],
      ["814-01-28", "Death of Charlemagne", "Buried at Aachen."],
      ["843", "Treaty of Verdun", "The empire is divided in three."],
    ],
    people: [["charlemagne", "King of the Franks crowned emperor"]],
  },
  {
    slug: "east-west-schism",
    title: "East–West Schism",
    alt: ["Great Schism of 1054"],
    date: "1054-07-16",
    period: "middle-ages",
    category: "culture",
    region: "europe",
    location: "Constantinople and Rome",
    places: ["constantinople", "rome"],
    civ: ["byzantine"],
    wiki: "East–West Schism",
    keywords: ["Catholic Church", "Orthodox Church", "papal authority", "filioque"],
    summary:
      "Mutual excommunications between papal legates and the Patriarch of Constantinople symbolised a growing split between the Latin and Greek churches.",
    overview:
      "On 16 July 1054, Cardinal Humbert placed a bull of excommunication on the altar of the Hagia Sophia. Patriarch Michael Cerularius responded in kind. The division between what became the Catholic and Eastern Orthodox churches hardened over the following centuries.",
    context:
      "The Latin West and Greek East had drifted apart over language, liturgy and theology, including disputes over papal authority, the use of leavened or unleavened bread and the 'filioque' clause added to the Nicene Creed in the West.",
    narrative:
      "Pope Leo IX sent legates led by Humbert of Silva Candida to Constantinople to negotiate, but talks broke down. The excommunications were technically personal rather than of entire churches, and Leo IX had died before Humbert acted.\n\nHistorians emphasise that the schism was a process. The sack of Constantinople by the Fourth Crusade in 1204 deepened hostility far more than 1054. In 1965, Pope Paul VI and Patriarch Athenagoras I jointly lifted the mutual excommunications.",
    causes: [
      "Disputes over papal supremacy",
      "Theological disagreement, including over the filioque",
      "Linguistic and cultural divergence between East and West",
    ],
    consequences: [
      "Lasting division between Catholic and Orthodox Christianity",
      "Complicated relations during the Crusades",
      "Excommunications lifted in 1965",
    ],
    timeline: [
      ["1054-07-16", "Bull of excommunication", "Laid on the altar of Hagia Sophia."],
      ["1204-04-13", "Fourth Crusade sacks Constantinople", "Deepens the division."],
      ["1965-12-07", "Excommunications lifted", "Joint declaration by Paul VI and Athenagoras."],
    ],
    relations: [["followed_by", "first-crusade", "Byzantium nonetheless appealed to the West for help four decades later."]],
  },
  {
    slug: "battle-of-hastings",
    title: "Battle of Hastings",
    alt: ["Norman Conquest"],
    date: "1066-10-14",
    period: "middle-ages",
    category: "conflict",
    region: "europe",
    location: "Near Hastings, Sussex, England",
    places: ["battle-east-sussex"],
    wiki: "Battle of Hastings",
    featured: false,
    keywords: ["William the Conqueror", "Harold Godwinson", "Normans", "Bayeux Tapestry"],
    summary:
      "Duke William of Normandy defeated King Harold II of England, beginning the Norman Conquest that transformed English society, language and government.",
    overview:
      "The battle on 14 October 1066 lasted most of the day. Harold was killed, and William was crowned king on Christmas Day 1066. The Bayeux Tapestry tells the story in embroidered scenes.",
    context:
      "When Edward the Confessor died childless in January 1066, Harold Godwinson was crowned. William of Normandy and the Norwegian king Harald Hardrada both claimed the throne. Harold defeated Hardrada at Stamford Bridge in September, just days before William landed in the south.",
    narrative:
      "Harold's army formed a shield wall on a ridge. Norman cavalry and infantry attacked repeatedly; the Normans used feigned retreats to draw English soldiers off the ridge. Late in the day, Harold was killed — the Bayeux Tapestry famously shows a figure struck in the eye by an arrow, though its interpretation is debated.\n\nWilliam replaced the English aristocracy with Norman lords, built castles across the country and commissioned the Domesday Book in 1086, a survey of land and resources. Norman French became the language of the elite, profoundly influencing English vocabulary.",
    causes: [
      "Disputed succession after Edward the Confessor's death",
      "William's claim based on alleged promises by Edward and Harold",
      "Harold's exhausted army after Stamford Bridge",
    ],
    consequences: [
      "Norman Conquest of England",
      "Replacement of the Anglo-Saxon elite and spread of castles",
      "Lasting influence of French on the English language",
    ],
    timeline: [
      ["1066-01-05", "Death of Edward the Confessor", "Harold is crowned."],
      ["1066-09-25", "Battle of Stamford Bridge", "Harold defeats Harald Hardrada."],
      ["1066-10-14", "Battle of Hastings", "Harold is killed."],
      ["1066-12-25", "William crowned", "At Westminster Abbey."],
    ],
    people: [
      ["william-the-conqueror", "Duke of Normandy who won the battle"],
      ["harold-godwinson", "Last Anglo-Saxon king of England"],
    ],
    relations: [["followed_by", "magna-carta", "Norman and Angevin kingship later faced baronial limits in 1215."]],
  },
  {
    slug: "first-crusade",
    title: "First Crusade",
    alt: ["Siege of Jerusalem (1099)"],
    date: "1096",
    end: "1099-07-15",
    period: "middle-ages",
    category: "conflict",
    region: "middle-east",
    location: "Anatolia, Syria and Jerusalem",
    places: ["jerusalem"],
    civ: ["byzantine"],
    wiki: "First Crusade",
    keywords: ["Pope Urban II", "Council of Clermont", "Crusader states", "Seljuks"],
    summary:
      "Responding to a call by Pope Urban II, armies from Western Europe marched east and captured Jerusalem in 1099, founding the Crusader states.",
    overview:
      "The First Crusade began after Urban II's sermon at the Council of Clermont in November 1095. It ended with the capture of Jerusalem on 15 July 1099, accompanied by a massacre of the city's Muslim and Jewish inhabitants.",
    context:
      "The Byzantine emperor Alexios I Komnenos had appealed for Western help against the Seljuk Turks, who had taken much of Anatolia after the Battle of Manzikert in 1071. Urban II broadened the appeal into an armed pilgrimage to recover Jerusalem.",
    narrative:
      "A first wave, the People's Crusade, was largely destroyed in Anatolia in 1096. Along the way, crusaders massacred Jewish communities in the Rhineland. The main armies, led by nobles such as Godfrey of Bouillon, Raymond of Toulouse and Bohemond of Taranto, gathered at Constantinople and took Nicaea in 1097 and Antioch after a long siege in 1098.\n\nJerusalem fell after a siege of five weeks. The crusaders established the Kingdom of Jerusalem, the County of Edessa, the Principality of Antioch and the County of Tripoli. These states lasted in various forms until the fall of Acre in 1291.",
    causes: [
      "Byzantine appeal for help against the Seljuk Turks",
      "Pope Urban II's call at Clermont in 1095",
      "Religious devotion, promises of remission of sins and hopes of land",
    ],
    consequences: [
      "Creation of the Crusader states in the Levant",
      "Two centuries of further crusades",
      "Lasting legacy of violence and mistrust between faiths",
    ],
    timeline: [
      ["1095-11-27", "Urban II preaches at Clermont", "Call to crusade."],
      ["1096", "People's Crusade and Rhineland massacres", "Jewish communities attacked."],
      ["1098-06-03", "Capture of Antioch", "After an eight-month siege."],
      ["1099-07-15", "Jerusalem captured", "Massacre of inhabitants."],
    ],
    people: [
      ["pope-urban-ii", "Pope who launched the crusade"],
      ["alexios-i-komnenos", "Byzantine emperor who appealed for aid"],
    ],
  },
  {
    slug: "construction-of-angkor-wat",
    title: "Construction of Angkor Wat",
    date: "~1113",
    end: "~1150",
    period: "middle-ages",
    category: "culture",
    region: "southeast-asia",
    location: "Angkor, Cambodia",
    places: ["angkor"],
    civ: ["khmer"],
    wiki: "Angkor Wat",
    keywords: ["Khmer Empire", "Suryavarman II", "Vishnu", "temple", "Cambodia"],
    summary:
      "The Khmer king Suryavarman II built Angkor Wat, the largest religious monument in the world, as a temple to Vishnu.",
    overview:
      "Built in the first half of the twelfth century, Angkor Wat represents Mount Meru, home of the gods in Hindu cosmology. It later became a Buddhist site and has never been fully abandoned.",
    context:
      "The Khmer Empire, centred on Angkor, dominated much of mainland Southeast Asia from the ninth to the fifteenth centuries. Its rulers built temples to legitimise their power, supported by a vast network of reservoirs and canals.",
    narrative:
      "Angkor Wat's five towers rise from a series of terraces surrounded by a wide moat. Its galleries are carved with bas-reliefs depicting Hindu epics, including the Churning of the Ocean of Milk, and scenes of Suryavarman II's court and armies. Its unusual west-facing orientation may be linked to Vishnu or to funerary purposes.\n\nAfter Angkor was sacked by the Cham in 1177, King Jayavarman VII rebuilt the city and promoted Mahayana Buddhism; Angkor Wat later became a Theravada Buddhist temple. The site is depicted on Cambodia's national flag and was inscribed as a UNESCO World Heritage Site in 1992.",
    causes: [
      "Royal ideology linking kingship and the gods",
      "Wealth from rice agriculture and hydraulic engineering",
      "Suryavarman II's devotion to Vishnu",
    ],
    consequences: [
      "Created a masterpiece of Khmer architecture",
      "Became a national symbol of Cambodia",
      "Continues as an active Buddhist site and major heritage destination",
    ],
    timeline: [
      ["802", "Founding of the Khmer Empire", "Jayavarman II declares himself universal monarch."],
      ["~1113", "Suryavarman II begins construction", "Dates are approximate."],
      ["1177", "Cham sack of Angkor", "Followed by rebuilding under Jayavarman VII."],
      ["1992", "UNESCO World Heritage listing", "Angkor archaeological park inscribed."],
    ],
    people: [["suryavarman-ii", "Khmer king who commissioned the temple"]],
  },
  {
    slug: "founding-of-the-mongol-empire",
    title: "Founding of the Mongol Empire",
    alt: ["Genghis Khan proclaimed"],
    date: "1206",
    period: "middle-ages",
    category: "politics",
    region: "east-asia",
    location: "Onon River, Mongolia",
    places: ["karakorum"],
    civ: ["mongol-empire"],
    wiki: "Mongol Empire",
    keywords: ["Genghis Khan", "Temüjin", "kurultai", "steppe", "Pax Mongolica"],
    summary:
      "A great assembly of steppe tribes proclaimed Temüjin as Genghis Khan, uniting the Mongols and launching conquests that created the largest contiguous land empire in history.",
    overview:
      "At a kurultai in 1206, Temüjin was acclaimed universal ruler. Within decades, Mongol armies had conquered northern China, Central Asia, Persia and Russia.",
    context:
      "The Mongolian steppe was divided among rival tribes and confederations. Temüjin, after a harsh youth, rose through alliances and warfare, defeating the Tatars, Keraites and Naimans.",
    narrative:
      "Genghis Khan reorganised Mongol society, breaking up tribal loyalties by placing warriors in decimal military units and promoting commanders by merit. A legal code, the Yassa, and a messenger system bound the empire together. His campaigns against the Western Xia, the Jin dynasty and the Khwarezmian Empire were marked by mobility and extreme violence against cities that resisted.\n\nAfter his death in 1227, his successors pushed the empire to its greatest extent, from Korea to Hungary. It later divided into four khanates. The Mongol peace, or Pax Mongolica, eased travel and trade across Eurasia — the routes used by Marco Polo — but may also have helped spread the Black Death.",
    causes: [
      "Temüjin's unification of rival steppe tribes",
      "Military innovation and highly mobile cavalry",
      "Weakness and division among neighbouring states",
    ],
    consequences: [
      "Conquest of much of Eurasia within two generations",
      "Increased trade and exchange under the Pax Mongolica",
      "Destruction of cities such as Baghdad and widespread loss of life",
    ],
    timeline: [
      ["1206", "Temüjin proclaimed Genghis Khan", "At a kurultai by the Onon River."],
      ["1215", "Fall of Zhongdu (Beijing)", "Jin capital captured."],
      ["1227", "Death of Genghis Khan", "During a campaign against Western Xia."],
      ["1279", "Conquest of Song China completed", "Under Kublai Khan."],
    ],
    people: [
      ["genghis-khan", "Founder of the Mongol Empire"],
      ["kublai-khan", "Grandson who completed the conquest of China"],
    ],
    relations: [
      ["led_to", "siege-of-baghdad-1258", "Mongol expansion brought Hülegü's army to Baghdad."],
      ["contributed_to", "black-death", "Trade across the Mongol world may have helped plague spread west."],
    ],
  },
  {
    slug: "magna-carta",
    title: "Magna Carta",
    date: "1215-06-15",
    period: "middle-ages",
    category: "politics",
    region: "europe",
    location: "Runnymede, England",
    places: ["runnymede"],
    wiki: "Magna Carta",
    keywords: ["King John", "barons", "rule of law", "habeas corpus", "charter"],
    summary:
      "King John of England agreed to a charter of liberties with rebel barons at Runnymede, establishing the principle that the king was subject to the law.",
    overview:
      "The 'Great Charter' was sealed on 15 June 1215. Although Pope Innocent III annulled it within weeks, it was reissued in revised forms and became a foundational symbol of constitutional government.",
    context:
      "John had lost Normandy to France in 1204, imposed heavy taxes to fund attempts to recover it and quarrelled with the Church. After defeat at Bouvines in 1214, rebellious barons captured London and forced him to negotiate.",
    narrative:
      "The charter's 63 clauses dealt largely with feudal grievances — inheritance, taxes and the rights of the Church and of London. Clauses 39 and 40 promised that no free man would be imprisoned or dispossessed except by the lawful judgement of his peers or the law of the land, and that justice would not be sold, denied or delayed.\n\nCivil war broke out almost immediately. After John's death in 1216, the charter was reissued in the name of the young Henry III in 1216, 1217 and 1225. Centuries later, lawyers and politicians invoked Magna Carta in struggles against royal power, and it influenced the US Constitution and the Universal Declaration of Human Rights. Four copies of the 1215 charter survive.",
    causes: [
      "John's heavy taxation and military failures in France",
      "Conflict with the Church and the papacy",
      "Baronial rebellion and the capture of London",
    ],
    consequences: [
      "Established the principle that rulers are bound by law",
      "Reissued versions became part of English law",
      "Influenced later constitutional documents worldwide",
    ],
    timeline: [
      ["1214-07-27", "Battle of Bouvines", "John's allies are defeated."],
      ["1215-06-15", "Charter agreed at Runnymede", "Sealed by King John."],
      ["1215-08-24", "Annulled by Pope Innocent III", "The First Barons' War begins."],
      ["1225", "Definitive reissue", "Under Henry III."],
    ],
    people: [["king-john", "King of England who sealed the charter"]],
    relations: [["related_to", "glorious-revolution", "Later constitutional struggles in England invoked Magna Carta."]],
    sources: [
      { url: "https://www.nationalarchives.gov.uk/education/resources/magna-carta/", title: "Magna Carta", publisher: "The National Archives (UK)", type: "archive" },
      { url: "https://avalon.law.yale.edu/medieval/magframe.asp", title: "Magna Carta 1215 (translation)", publisher: "Avalon Project, Yale Law School", type: "primary_document" },
    ],
  },
  {
    slug: "siege-of-baghdad-1258",
    title: "Mongol siege of Baghdad",
    alt: ["Sack of Baghdad", "Siege of Baghdad (1258)"],
    date: "1258-01-29",
    end: "1258-02-10",
    period: "middle-ages",
    category: "conflict",
    region: "middle-east",
    location: "Baghdad, Iraq",
    places: ["baghdad"],
    civ: ["mongol-empire", "islamic-caliphates"],
    wiki: "Siege of Baghdad (1258)",
    keywords: ["Hülegü", "Abbasid Caliphate", "al-Musta'sim", "House of Wisdom"],
    summary:
      "Mongol forces under Hülegü Khan besieged and sacked Baghdad, killing the last Abbasid caliph and ending the caliphate's five centuries in the city.",
    overview:
      "After a short siege, Baghdad surrendered on 10 February 1258. The Mongols plundered the city for days, killing a vast number of inhabitants. Accounts describe libraries destroyed and books thrown into the Tigris.",
    context:
      "Hülegü, a grandson of Genghis Khan, was sent west by his brother, the Great Khan Möngke, to subdue the Islamic lands. The Abbasid caliph al-Musta'sim refused to submit, despite the caliphate's limited military power.",
    narrative:
      "Mongol armies, including Chinese siege engineers and Georgian and Armenian allies, surrounded Baghdad and breached its walls. The caliph surrendered but the city was sacked anyway. Al-Musta'sim was executed — according to tradition by being rolled in a carpet and trampled by horses, to avoid shedding royal blood.\n\nThe destruction ended the Abbasid Caliphate in Baghdad, although a line of Abbasid caliphs was later maintained in Cairo under the Mamluks. The Mamluks halted Mongol expansion at the Battle of Ain Jalut in 1260. Baghdad took centuries to recover its former importance.",
    causes: [
      "Mongol expansion into southwest Asia under Hülegü",
      "Caliph al-Musta'sim's refusal to submit",
      "Military weakness of the late Abbasid state",
    ],
    consequences: [
      "End of the Abbasid Caliphate in Baghdad",
      "Massive loss of life and cultural heritage",
      "Establishment of the Mongol Ilkhanate in Persia",
    ],
    timeline: [
      ["1256", "Hülegü destroys the Assassins' fortresses", "Including Alamut."],
      ["1258-01-29", "Siege begins", "Baghdad is surrounded."],
      ["1258-02-10", "Baghdad surrenders", "The city is sacked."],
      ["1260-09-03", "Battle of Ain Jalut", "Mamluks defeat the Mongols."],
    ],
    people: [["hulegu-khan", "Mongol commander who took Baghdad"]],
  },
  {
    slug: "founding-of-tenochtitlan",
    title: "Founding of Tenochtitlan",
    date: "~1325",
    period: "middle-ages",
    category: "politics",
    region: "latin-america",
    location: "Lake Texcoco, Valley of Mexico",
    places: ["tenochtitlan"],
    civ: ["aztec"],
    wiki: "Tenochtitlan",
    keywords: ["Mexica", "Aztec", "Lake Texcoco", "chinampas", "Mexico City"],
    dateNote: "1325 is the traditional date; sources and scholars differ.",
    summary:
      "The Mexica people founded Tenochtitlan on an island in Lake Texcoco. It grew into the capital of the Aztec Empire and one of the largest cities in the world.",
    overview:
      "According to Mexica tradition, they settled where they saw an eagle perched on a cactus, a sign from their god Huitzilopochtli. The image appears on Mexico's flag today.",
    context:
      "The Mexica were latecomers to the Valley of Mexico, a region dominated by established city-states. Pushed to marginal land, they settled on swampy islands in the lake.",
    narrative:
      "The Mexica built the city using chinampas — artificial agricultural plots made from lake mud — and causeways linking the island to the shore. In 1428 Tenochtitlan formed the Triple Alliance with Texcoco and Tlacopan, which came to dominate central Mexico.\n\nBy the early sixteenth century, Tenochtitlan may have had a population of 200,000 or more, with the Templo Mayor at its sacred centre. The Spanish conquistadors who arrived in 1519 compared it to Venice. After the conquest in 1521, Mexico City was built over its ruins.",
    causes: [
      "Mexica migration into the Valley of Mexico",
      "Exclusion from fertile lands by established city-states",
      "Religious tradition identifying the site as divinely chosen",
    ],
    consequences: [
      "Rise of the Aztec Triple Alliance",
      "Development of a major urban centre built on a lake",
      "Foundation of the site of modern Mexico City",
    ],
    timeline: [
      ["~1325", "Tenochtitlan founded", "Traditional date."],
      ["1428", "Triple Alliance formed", "With Texcoco and Tlacopan."],
      ["1521-08-13", "Fall of Tenochtitlan", "Conquered by Spanish and Indigenous allies."],
    ],
    relations: [["followed_by", "fall-of-tenochtitlan", "The city was conquered by Spanish forces and their Indigenous allies in 1521."]],
  },
  {
    slug: "mansa-musa-pilgrimage",
    title: "Mansa Musa's pilgrimage to Mecca",
    alt: ["Hajj of Mansa Musa"],
    date: "1324",
    end: "1325",
    period: "middle-ages",
    category: "culture",
    region: "africa",
    location: "Mali Empire to Cairo and Mecca",
    places: ["timbuktu", "cairo"],
    civ: ["mali-empire"],
    wiki: "Mansa Musa",
    discovery: true,
    keywords: ["Mali Empire", "gold", "Hajj", "Timbuktu", "Catalan Atlas"],
    summary:
      "Mansa Musa, ruler of the Mali Empire, travelled to Mecca with a vast caravan, spending so much gold in Cairo that chroniclers recorded its effect on prices.",
    overview:
      "Mansa Musa's hajj of 1324–1325 made Mali famous across the Islamic world and Europe. The Catalan Atlas of 1375 depicts him holding a gold nugget.",
    context:
      "Mali controlled gold-producing regions of West Africa and the trans-Saharan trade routes. Its rulers were Muslim, and Islam was spreading among merchants and elites.",
    narrative:
      "The Egyptian historian al-Umari, writing a few years later, reported that Musa's generosity in Cairo depressed the value of gold there. Accounts describe thousands of attendants and camels laden with gold, though numbers vary.\n\nOn his return, Mansa Musa brought scholars and architects, including the Andalusian poet and architect Abu Ishaq al-Sahili, associated with the Djinguereber Mosque in Timbuktu. Timbuktu developed into a centre of Islamic learning, and its manuscripts survive today.",
    causes: [
      "Religious obligation of the Hajj",
      "Mali's enormous wealth from gold and trade",
      "Desire to enhance Mali's prestige in the Islamic world",
    ],
    consequences: [
      "Spread Mali's fame to North Africa, the Middle East and Europe",
      "Brought scholars and architects to Mali",
      "Contributed to Timbuktu's growth as a centre of learning",
    ],
    timeline: [
      ["~1312", "Mansa Musa becomes ruler", "Date of accession is debated."],
      ["1324", "Arrives in Cairo", "En route to Mecca."],
      ["1375", "Catalan Atlas", "European map depicts Mansa Musa."],
    ],
    people: [["mansa-musa", "Ruler of the Mali Empire"]],
  },
  {
    slug: "black-death",
    title: "The Black Death",
    alt: ["Bubonic plague pandemic", "Great Mortality"],
    date: "1346",
    end: "1353",
    period: "middle-ages",
    category: "disaster",
    region: "global",
    location: "Eurasia and North Africa",
    places: ["caffa", "florence"],
    wiki: "Black Death",
    featured: false,
    keywords: ["plague", "Yersinia pestis", "pandemic", "medieval Europe", "flagellants"],
    summary:
      "A pandemic of plague killed an estimated 30 to 50 per cent of Europe's population, along with millions in the Middle East and North Africa.",
    overview:
      "The plague spread from Central Asia along trade routes, reaching the Black Sea by 1346 and Europe in 1347. It recurred for centuries. Ancient DNA has confirmed the bacterium Yersinia pestis as the cause.",
    context:
      "Fourteenth-century Europe was already under strain from famine, including the Great Famine of 1315–1317, and population growth. Trade networks connecting Asia, the Black Sea and the Mediterranean carried goods — and disease — rapidly.",
    narrative:
      "Genoese ships from Caffa in Crimea carried plague to Sicily in October 1347. Within months it reached Italy, France and North Africa, then spread across Europe by 1351. Victims developed swollen lymph nodes (buboes), fever and often died within days; the pneumonic form spread directly between people.\n\nThe disaster provoked religious movements such as the flagellants and violent persecution of Jewish communities, falsely blamed for poisoning wells. In the longer term, labour shortages raised wages, weakened serfdom in Western Europe and contributed to social unrest, including the English Peasants' Revolt of 1381.",
    causes: [
      "Yersinia pestis spread by fleas, rodents and human contact",
      "Trade networks across Eurasia",
      "Populations weakened by famine and crowding",
    ],
    consequences: [
      "Death of a third or more of Europe's population",
      "Persecution of Jewish communities",
      "Labour shortages that reshaped economies and weakened serfdom",
    ],
    timeline: [
      ["1346", "Plague at Caffa", "Reported during the siege of the city."],
      ["1347-10", "Plague reaches Sicily", "Arrives at Messina by ship."],
      ["1348", "Spreads across Europe", "Florence, Paris and London affected."],
      ["1381", "Peasants' Revolt in England", "Social unrest after the plague."],
    ],
    people: [["giovanni-boccaccio", "Florentine writer who described the plague in the Decameron"]],
    relations: [["related_to", "spanish-flu", "Another pandemic that killed tens of millions."]],
  },
  {
    slug: "zheng-he-voyages",
    title: "Ming treasure voyages of Zheng He",
    alt: ["Zheng He's voyages"],
    date: "1405",
    end: "1433",
    period: "middle-ages",
    category: "exploration",
    region: "east-asia",
    location: "Indian Ocean, from China to East Africa",
    places: ["nanjing", "calicut"],
    civ: ["ancient-china"],
    wiki: "Ming treasure voyages",
    discovery: true,
    keywords: ["Ming dynasty", "Zheng He", "Yongle Emperor", "treasure ships", "Indian Ocean"],
    summary:
      "Admiral Zheng He led seven enormous Ming fleets across the Indian Ocean, reaching Southeast Asia, India, Arabia and East Africa.",
    overview:
      "Between 1405 and 1433, the voyages displayed Ming power, established tributary relations and brought back exotic goods, including a giraffe from Africa. They ended abruptly after the death of their sponsor, the Yongle Emperor.",
    context:
      "The Yongle Emperor had seized the throne in 1402 and sought to legitimise his rule and extend Chinese influence. Chinese shipbuilding and navigation technology, including the compass, were highly advanced.",
    narrative:
      "The first fleet reportedly numbered more than 300 ships and some 27,000 men. Zheng He, a Muslim court eunuch, visited ports including Malacca, Calicut, Hormuz, Aden and Malindi. The size of the largest 'treasure ships' given in later sources is debated by historians.\n\nAfter Yongle's death in 1424, court officials criticised the voyages' expense. A final voyage took place in 1431–1433, after which the Ming turned inward, restricting maritime trade. The voyages preceded Portugal's arrival in the Indian Ocean by several decades.",
    causes: [
      "The Yongle Emperor's desire to project power and legitimacy",
      "Advanced Chinese shipbuilding and navigation",
      "Interest in tributary relations and trade",
    ],
    consequences: [
      "Expanded Ming diplomatic and trade contacts across the Indian Ocean",
      "Chinese communities and influence in Southeast Asian ports",
      "Ended by court policy, leaving the ocean open to later European entrants",
    ],
    timeline: [
      ["1405", "First voyage departs", "Reaches Calicut."],
      ["1414", "Giraffe brought from Bengal", "Later sent from Malindi too."],
      ["1424", "Death of the Yongle Emperor", "Support for voyages wanes."],
      ["1433", "Last voyage returns", "Zheng He likely dies on the return."],
    ],
    people: [
      ["zheng-he", "Admiral who commanded the fleets"],
      ["yongle-emperor", "Ming emperor who sponsored the voyages"],
    ],
    relations: [["followed_by", "vasco-da-gama-reaches-india", "Portuguese ships reached the same Indian ports 65 years later."]],
  },
  {
    slug: "siege-of-orleans",
    title: "Joan of Arc and the Siege of Orléans",
    alt: ["Siege of Orléans"],
    date: "1428-10-12",
    end: "1429-05-08",
    period: "middle-ages",
    category: "conflict",
    region: "europe",
    location: "Orléans, France",
    places: ["orleans"],
    wiki: "Siege of Orléans (1428–1429)",
    keywords: ["Joan of Arc", "Hundred Years' War", "Charles VII", "England", "France"],
    summary:
      "A French relief force inspired by Joan of Arc broke the English siege of Orléans, a turning point in the Hundred Years' War.",
    overview:
      "The relief of Orléans on 8 May 1429 restored French morale and led to the coronation of Charles VII at Reims. Joan was later captured, tried for heresy and burned at Rouen in 1431.",
    context:
      "The Hundred Years' War between England and France had begun in 1337. After the English victory at Agincourt in 1415 and the Treaty of Troyes (1420), English and Burgundian forces controlled much of northern France. Orléans, on the Loire, was a key obstacle to further English advance.",
    narrative:
      "Joan, a peasant girl from Domrémy who said she heard the voices of saints, convinced the dauphin Charles to send her with a relief army. Arriving in late April 1429, she helped lead attacks on the English forts around the city. The English withdrew on 8 May.\n\nFurther victories, including at Patay, opened the road to Reims, where Charles VII was crowned in July 1429. Joan was captured by Burgundians in 1430 and handed to the English. After a politically motivated trial, she was burned in 1431. A retrial annulled the verdict in 1456, and she was canonised in 1920. France finally expelled the English from most of its territory by 1453.",
    causes: [
      "English advance into the Loire valley",
      "Strategic importance of Orléans",
      "Joan of Arc's arrival and its effect on French morale",
    ],
    consequences: [
      "Turned the tide of the Hundred Years' War",
      "Coronation of Charles VII at Reims",
      "Joan became a national symbol of France",
    ],
    timeline: [
      ["1415-10-25", "Battle of Agincourt", "English victory."],
      ["1428-10-12", "Siege begins", "English forces surround Orléans."],
      ["1429-05-08", "Siege lifted", "English withdraw."],
      ["1431-05-30", "Joan burned at Rouen", "After a heresy trial."],
      ["1453", "End of the Hundred Years' War", "English lose Bordeaux."],
    ],
    people: [["joan-of-arc", "French heroine who led the relief"]],
  },
  {
    slug: "gutenberg-printing-press",
    title: "Gutenberg's printing press",
    alt: ["Gutenberg Bible", "Movable type printing"],
    date: "~1455",
    period: "middle-ages",
    category: "technology",
    region: "europe",
    location: "Mainz, Holy Roman Empire",
    places: ["mainz"],
    wiki: "Gutenberg Bible",
    featured: false,
    keywords: ["printing", "movable type", "Johannes Gutenberg", "incunabula", "literacy"],
    summary:
      "Johannes Gutenberg developed a system of metal movable-type printing in Mainz and produced the Gutenberg Bible, the first major book printed in Europe with movable type.",
    overview:
      "Completed around 1454–1455, the Gutenberg Bible was printed in an edition of perhaps 180 copies. Printing spread across Europe within decades, transforming the circulation of knowledge.",
    context:
      "Movable type had been invented earlier in East Asia — in China by Bi Sheng around 1040 and with metal type in Korea, where the Jikji was printed in 1377. In Europe, demand for books was rising with universities and urban literacy, and paper had become widely available.",
    narrative:
      "Gutenberg combined several innovations: a hand mould for casting uniform metal type, an oil-based ink and a press adapted from wine and paper presses. Financial disputes with his partner Johann Fust led to Gutenberg losing control of his workshop around 1455.\n\nBy 1500, presses had been established in more than 200 European towns, producing millions of books. Printing helped spread the ideas of the Renaissance, the Reformation and the Scientific Revolution, standardised languages and made texts cheaper and more widely available.",
    causes: [
      "Growing demand for books and documents",
      "Availability of paper in Europe",
      "Gutenberg's metalworking expertise and investment",
    ],
    consequences: [
      "Rapid spread of printing across Europe",
      "Enabled the Reformation and the Scientific Revolution",
      "Increased literacy and standardised vernacular languages",
    ],
    timeline: [
      ["~1040", "Bi Sheng's movable type", "Ceramic type in Song China."],
      ["1377", "Jikji printed in Korea", "Oldest extant book printed with metal type."],
      ["~1455", "Gutenberg Bible completed", "Printed in Mainz."],
      ["1500", "Printing in over 200 towns", "Europe's 'incunabula' era ends."],
    ],
    people: [["johannes-gutenberg", "Inventor of the European printing press"]],
    relations: [["led_to", "ninety-five-theses", "Printing allowed Luther's arguments to spread across Europe within weeks."]],
  },
  {
    slug: "fall-of-constantinople",
    title: "Fall of Constantinople",
    date: "1453-05-29",
    period: "middle-ages",
    category: "conflict",
    region: "europe",
    location: "Constantinople (Istanbul)",
    places: ["constantinople"],
    civ: ["byzantine", "ottoman"],
    wiki: "Fall of Constantinople",
    featured: true,
    keywords: ["Mehmed II", "Ottoman Empire", "Constantine XI", "Byzantine Empire", "cannon"],
    summary:
      "Ottoman forces under Sultan Mehmed II captured Constantinople after a 53-day siege, ending the Byzantine Empire.",
    overview:
      "On 29 May 1453, Ottoman troops broke through the city's ancient walls. The last Byzantine emperor, Constantine XI Palaiologos, died in the fighting. Constantinople became the Ottoman capital.",
    context:
      "By the fifteenth century, the Byzantine Empire had shrunk to little more than its capital and a few territories. The Ottomans controlled most of the surrounding lands in Anatolia and the Balkans. The young sultan Mehmed II was determined to take the city.",
    narrative:
      "Mehmed built the fortress of Rumeli Hisarı on the Bosporus to cut off aid, and his army included enormous cannon cast by the Hungarian engineer Orban. The defenders, perhaps 7,000 including Genoese and Venetian volunteers, faced an army many times larger. To bypass the chain across the Golden Horn, Mehmed had ships hauled overland on greased logs.\n\nThe final assault came in the early hours of 29 May. After the walls were breached, the city was sacked. Mehmed converted the Hagia Sophia into a mosque and made Constantinople the capital of his empire. Greek scholars who fled to Italy contributed to the Renaissance, and the loss of the city influenced European interest in finding new routes to Asia.",
    causes: [
      "Long decline of Byzantine power",
      "Ottoman expansion and Mehmed II's ambition",
      "Ottoman artillery capable of breaching the walls",
    ],
    consequences: [
      "End of the Byzantine Empire",
      "Constantinople became the Ottoman capital",
      "Migration of Greek scholars to Italy",
    ],
    timeline: [
      ["1452", "Rumeli Hisarı built", "Ottoman fortress controls the Bosporus."],
      ["1453-04-06", "Siege begins", "Ottoman bombardment."],
      ["1453-04-22", "Ships hauled into the Golden Horn", "Bypassing the chain."],
      ["1453-05-29", "City falls", "Constantine XI is killed."],
    ],
    people: [
      ["mehmed-ii", "Ottoman sultan who conquered the city"],
      ["constantine-xi-palaiologos", "Last Byzantine emperor"],
    ],
    relations: [["contributed_to", "columbus-first-voyage", "Ottoman control of eastern routes encouraged the search for sea routes to Asia."]],
  },
  {
    slug: "fall-of-granada",
    title: "Fall of Granada",
    alt: ["End of the Reconquista"],
    date: "1492-01-02",
    period: "middle-ages",
    category: "conflict",
    region: "europe",
    location: "Granada, Spain",
    places: ["granada"],
    wiki: "Fall of Granada",
    keywords: ["Reconquista", "Ferdinand and Isabella", "Nasrid", "Alhambra", "Muhammad XII"],
    summary:
      "The Nasrid Emirate of Granada surrendered to Ferdinand and Isabella, ending nearly eight centuries of Muslim rule in the Iberian Peninsula.",
    overview:
      "On 2 January 1492, Muhammad XII (Boabdil) handed over Granada and the Alhambra to the Catholic Monarchs after a ten-year war. Months later, Jews were expelled from Spain.",
    context:
      "Granada was the last Muslim state in Iberia after the Christian kingdoms' gradual conquest. The marriage of Ferdinand of Aragon and Isabella of Castile united the two largest Christian kingdoms, giving them the resources to finish the war.",
    narrative:
      "The war began in 1482. Internal divisions within the Nasrid dynasty weakened Granada, and Castilian armies took its cities one by one. The Treaty of Granada promised Muslims religious freedom and property rights.\n\nThese promises were soon broken. The Alhambra Decree of March 1492 ordered the expulsion of Jews, and Muslims were forced to convert from 1499 onward. The same year Granada fell, Isabella and Ferdinand agreed to sponsor Columbus's voyage.",
    causes: [
      "The centuries-long Christian Reconquista",
      "Union of Castile and Aragon",
      "Divisions within the Nasrid ruling family",
    ],
    consequences: [
      "End of Muslim political rule in Iberia",
      "Expulsion of Spain's Jews in 1492 and later forced conversions of Muslims",
      "Freed royal resources for overseas expansion",
    ],
    timeline: [
      ["1469", "Ferdinand and Isabella marry", "Uniting Aragon and Castile."],
      ["1482", "Granada War begins", "A decade of campaigns."],
      ["1492-01-02", "Granada surrenders", "Boabdil hands over the city."],
      ["1492-03-31", "Alhambra Decree", "Expulsion of the Jews ordered."],
    ],
    people: [["isabella-i-of-castile", "Queen of Castile, co-ruler with Ferdinand"]],
    relations: [["followed_by", "columbus-first-voyage", "The monarchs approved Columbus's expedition the same year."]],
  },
  {
    slug: "columbus-first-voyage",
    title: "Columbus's first voyage to the Americas",
    alt: ["Voyages of Christopher Columbus", "1492"],
    date: "1492-10-12",
    period: "middle-ages",
    category: "exploration",
    region: "latin-america",
    location: "The Bahamas and the Caribbean",
    places: ["san-salvador-island", "hispaniola"],
    wiki: "Voyages of Christopher Columbus",
    keywords: ["Christopher Columbus", "Santa María", "Columbian exchange", "Taíno", "New World"],
    summary:
      "Sponsored by Spain, Christopher Columbus crossed the Atlantic and landed in the Bahamas, beginning sustained contact between Europe and the Americas.",
    overview:
      "Columbus made landfall on 12 October 1492 on an island the Lucayan people called Guanahani. He believed he had reached Asia. His voyages initiated European colonisation and the Columbian Exchange, with devastating consequences for Indigenous peoples.",
    context:
      "European powers sought sea routes to Asian spices and silk. Portugal was exploring around Africa. Columbus, a Genoese navigator, proposed sailing west, underestimating the earth's circumference. After the fall of Granada, Isabella and Ferdinand agreed to fund him.",
    narrative:
      "Columbus sailed from Palos on 3 August 1492 with three ships, the Santa María, Pinta and Niña. After a stop in the Canary Islands, the crossing took about five weeks. He explored the Bahamas, Cuba and Hispaniola, where the Santa María ran aground and a fort was built.\n\nColumbus made three more voyages. Spanish colonisation of the Caribbean led to the enslavement and catastrophic decline of the Taíno and other peoples through violence, forced labour and Old World diseases. The exchange of crops, animals and diseases across the Atlantic transformed both hemispheres.",
    causes: [
      "European demand for Asian trade goods",
      "Ottoman control of eastern trade routes",
      "Spanish royal sponsorship after the fall of Granada",
    ],
    consequences: [
      "Beginning of European colonisation of the Americas",
      "Columbian Exchange of crops, animals and diseases",
      "Devastation of Indigenous Caribbean populations",
    ],
    timeline: [
      ["1492-08-03", "Departure from Palos", "Three ships set sail."],
      ["1492-10-12", "Landfall in the Bahamas", "On Guanahani."],
      ["1492-12-25", "Santa María wrecked", "Off Hispaniola."],
      ["1493-03-15", "Return to Spain", "Arrives at Palos."],
    ],
    people: [["christopher-columbus", "Genoese navigator who led the expedition"]],
    relations: [
      ["led_to", "treaty-of-tordesillas", "Spain and Portugal divided newly encountered lands."],
      ["contributed_to", "atlantic-slave-trade", "Colonisation of the Americas created demand for enslaved labour."],
    ],
  },
];
