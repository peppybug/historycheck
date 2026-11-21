import type { EventSeed } from "../types";

/** History of the Netherlands from the Batavian Revolution to the present. */
export const netherlandsModernEvents: EventSeed[] = [
  {
    slug: "batavian-revolution",
    title: "Batavian Revolution",
    alt: ["Batavian Republic", "Fall of the Dutch Republic"],
    date: "1795-01-19",
    period: "age-of-revolutions",
    category: "politics",
    region: "europe",
    location: "Amsterdam and The Hague, Dutch Republic",
    places: ["amsterdam"],
    wiki: "Batavian Revolution",
    keywords: ["Patriots", "Batavian Republic", "French Revolutionary Wars", "William V", "sister republic"],
    summary:
      "With French revolutionary armies crossing the frozen rivers, the stadtholder William V fled to England and Dutch Patriots proclaimed the Batavian Republic.",
    overview:
      "The revolution of January 1795 ended the old Dutch Republic. The new Batavian Republic was a French satellite, but it produced the first Dutch constitution in 1798 and laid foundations for a unitary state.",
    context:
      "In the 1780s the Patriot movement had challenged the power of the House of Orange, demanding more popular participation. In 1787 a Prussian army restored William V, and many Patriots fled to France. When revolutionary France went to war with the coalition powers, its armies advanced into the Low Countries.",
    narrative:
      "In the exceptionally cold winter of 1794–1795, French troops under General Pichegru crossed the frozen rivers into the Republic. William V left for England on 18 January 1795, and Patriot revolutionary committees took power in Amsterdam and other cities; the Batavian Republic was proclaimed on 19 January. The republic paid France a large indemnity and supported an army of occupation.\n\nA series of coups produced the constitution of 1798, which abolished the old provincial sovereignty, separated church and state and proclaimed equal rights. In 1805 Napoleon reorganised the state, and in 1806 he replaced it with the Kingdom of Holland under his brother Louis.",
    causes: [
      "The Patriot movement and its suppression in 1787",
      "The French Revolutionary Wars",
      "An unusually cold winter that froze the river defences",
    ],
    consequences: [
      "End of the Dutch Republic and the stadtholderate",
      "The first Dutch constitution in 1798",
      "French domination of the Netherlands until 1813",
    ],
    timeline: [
      ["1787-09", "Prussian intervention", "William V restored; Patriots flee."],
      ["1795-01-18", "William V flees to England", "French troops advance."],
      ["1795-01-19", "Batavian Republic proclaimed", "Revolutionary committees take power."],
      ["1798-05-01", "First Dutch constitution", "A unitary state is created."],
    ],
    people: [["william-v-of-orange", "Last stadtholder of the Dutch Republic"]],
    relations: [["followed_by", "kingdom-of-holland", "Napoleon replaced the republic with a monarchy under his brother."]],
  },
  {
    slug: "kingdom-of-holland",
    title: "Kingdom of Holland",
    date: "1806-06-05",
    end: "1810-07-09",
    period: "age-of-revolutions",
    category: "politics",
    region: "europe",
    location: "The Hague and Amsterdam",
    places: ["amsterdam"],
    wiki: "Kingdom of Holland",
    keywords: ["Louis Bonaparte", "Napoleon", "Continental System", "French annexation", "surnames"],
    summary:
      "Napoleon made his brother Louis Bonaparte king of a new Kingdom of Holland, which he annexed to the French Empire four years later when Louis would not enforce French policy.",
    overview:
      "Louis tried to rule in Dutch interests, learning the language and resisting some of his brother's demands. In 1810 Napoleon forced him to abdicate and annexed the Netherlands. Napoleonic institutions, including a civil code and the registration of surnames, left a lasting mark.",
    context:
      "After 1805 Napoleon reorganised the states around France into monarchies ruled by his relatives. The Batavian Commonwealth was replaced with a kingdom under his brother Louis.",
    narrative:
      "Louis made Amsterdam his capital and the city hall on Dam Square his palace. He introduced a civil code and centralised administration. But he failed to enforce Napoleon's Continental System, the blockade of trade with Britain, on which the Dutch economy depended, and smuggling flourished.\n\nNapoleon occupied parts of the kingdom in early 1810, and Louis abdicated in favour of his son on 1 July. On 9 July Napoleon annexed the country. Under French rule, an 1811 decree required Dutch citizens to register fixed surnames. French control collapsed after Napoleon's defeat at Leipzig in 1813.",
    causes: [
      "Napoleon's reorganisation of satellite states into kingdoms",
      "Desire for tighter control of Dutch resources",
    ],
    consequences: [
      "Annexation of the Netherlands by France in 1810",
      "Lasting Napoleonic legal and administrative reforms",
      "Amsterdam's town hall became the Royal Palace",
    ],
    timeline: [
      ["1806-06-05", "Louis Bonaparte becomes king", "Kingdom of Holland created."],
      ["1808", "Amsterdam made the capital", "The town hall becomes a palace."],
      ["1810-07-01", "Louis abdicates", "Under pressure from Napoleon."],
      ["1810-07-09", "Annexation to France", "The kingdom is dissolved."],
    ],
    people: [
      ["louis-bonaparte", "King of Holland"],
      ["napoleon", "Emperor of the French"],
    ],
    relations: [
      ["occurred_during", "coronation-of-napoleon", "Part of the empire Napoleon built after his coronation."],
      ["followed_by", "kingdom-of-the-netherlands", "After Napoleon's fall, the Netherlands became an independent monarchy."],
    ],
  },
  {
    slug: "kingdom-of-the-netherlands",
    title: "Founding of the Kingdom of the Netherlands",
    alt: ["United Kingdom of the Netherlands", "William I proclaimed king"],
    date: "1815-03-16",
    period: "age-of-revolutions",
    category: "politics",
    region: "europe",
    location: "The Hague",
    places: ["the-hague", "brussels"],
    wiki: "United Kingdom of the Netherlands",
    keywords: ["William I", "House of Orange-Nassau", "Congress of Vienna", "Belgium", "monarchy"],
    summary:
      "William of Orange-Nassau, son of the last stadtholder, was proclaimed King William I of a new kingdom uniting the northern and southern Netherlands.",
    overview:
      "The great powers created the United Kingdom of the Netherlands as a buffer against France. William, who had returned in 1813 as sovereign prince, took the title of king on 16 March 1815 during Napoleon's Hundred Days. The union with the south lasted until the Belgian Revolution of 1830.",
    context:
      "After Napoleon's defeat at Leipzig in October 1813, French forces withdrew. A provisional government invited William, then in exile, to return. He landed at Scheveningen on 30 November 1813 and became sovereign prince, with a constitution adopted in 1814.",
    narrative:
      "The allied powers decided to join the former Austrian Netherlands (modern Belgium) to the north, and the Congress of Vienna confirmed the arrangement. William proclaimed himself king on 16 March 1815, as Napoleon returned to power in France. Dutch and Belgian troops fought at Waterloo under his son, the Prince of Orange.\n\nWilliam I promoted roads, canals, banks and industry, earning the nickname 'the merchant king'. But southerners resented northern dominance of government, his language policy promoting Dutch, and his religious policies, grievances that exploded in 1830.",
    causes: [
      "Napoleon's defeat and French withdrawal in 1813",
      "The great powers' wish for a strong buffer state against France",
      "Return of the House of Orange-Nassau",
    ],
    consequences: [
      "The Netherlands became a monarchy under the House of Orange-Nassau",
      "Temporary union of the northern and southern Netherlands",
      "Southern grievances that led to the Belgian Revolution",
    ],
    timeline: [
      ["1813-11-30", "William lands at Scheveningen", "Returns from exile."],
      ["1814-03-29", "Constitution adopted", "William becomes sovereign prince."],
      ["1815-03-16", "William proclaimed king", "United Kingdom of the Netherlands."],
      ["1815-06-18", "Battle of Waterloo", "Dutch and Belgian troops fight Napoleon."],
    ],
    people: [["william-i-of-the-netherlands", "First king of the Netherlands"]],
    relations: [
      ["contributed_to", "belgian-revolution", "Southern resentment of the united kingdom led to revolt in 1830."],
    ],
  },
  {
    slug: "belgian-revolution",
    title: "Belgian Revolution",
    date: "1830-08-25",
    end: "1831-07-21",
    period: "age-of-revolutions",
    category: "politics",
    region: "europe",
    location: "Brussels, United Kingdom of the Netherlands",
    places: ["brussels"],
    wiki: "Belgian Revolution",
    keywords: ["Belgium", "independence", "La Muette de Portici", "Leopold I", "London Conference"],
    summary:
      "An uprising in Brussels led the southern provinces to break away from the United Kingdom of the Netherlands and form the independent Kingdom of Belgium.",
    overview:
      "The revolt began on 25 August 1830 after a performance of the opera La Muette de Portici. Independence was declared in October, the great powers recognised it in December, and Leopold of Saxe-Coburg was sworn in as king on 21 July 1831. William I recognised Belgium only in 1839.",
    context:
      "Southerners, mostly Catholic and many French-speaking, were under-represented in government and the army and resented William I's language and education policies. Liberals and Catholics, normally opponents, united against him. The July Revolution in Paris in 1830 encouraged revolt.",
    narrative:
      "Rioting after the opera spread through Brussels. A Dutch army sent to restore order was driven out of the city in street fighting in September. A provisional government declared independence on 4 October, and a national congress adopted a liberal constitution. The London Conference of the great powers recognised Belgian independence in December 1830.\n\nIn August 1831 William launched the Ten Days' Campaign and defeated Belgian forces, but withdrew when a French army intervened. The French besieged and took the Dutch-held citadel of Antwerp in 1832. William finally accepted the Treaty of London on 19 April 1839, which recognised Belgium and guaranteed its neutrality.",
    causes: [
      "Northern dominance of government and the army",
      "William I's language, education and religious policies",
      "The July Revolution in France",
    ],
    consequences: [
      "Independence of Belgium under King Leopold I",
      "Separation of the northern and southern Netherlands",
      "Treaty of London (1839) guaranteeing Belgian neutrality",
    ],
    timeline: [
      ["1830-08-25", "Uprising in Brussels", "After a performance of La Muette de Portici."],
      ["1830-10-04", "Independence declared", "By the provisional government."],
      ["1831-07-21", "Leopold I sworn in", "First King of the Belgians."],
      ["1839-04-19", "Treaty of London", "The Netherlands recognises Belgium."],
    ],
    people: [
      ["william-i-of-the-netherlands", "King of the Netherlands"],
      ["leopold-i-of-belgium", "First King of the Belgians"],
    ],
    relations: [
      ["related_to", "revolutions-of-1848", "Part of a wider wave of liberal and national revolutions in Europe."],
      ["followed_by", "dutch-constitution-1848", "The Netherlands itself moved toward liberal reform in 1848."],
    ],
  },
  {
    slug: "dutch-constitution-1848",
    title: "The Dutch constitution of 1848",
    alt: ["Constitutional reform of 1848", "Thorbecke's constitution"],
    date: "1848-11-03",
    period: "age-of-revolutions",
    category: "politics",
    region: "europe",
    location: "The Hague, Netherlands",
    places: ["the-hague"],
    wiki: "Constitution of the Netherlands",
    keywords: ["Thorbecke", "William II", "parliamentary democracy", "ministerial responsibility", "1848"],
    summary:
      "Alarmed by the revolutions of 1848, King William II accepted a new liberal constitution drafted by Johan Rudolph Thorbecke, laying the foundations of Dutch parliamentary democracy.",
    overview:
      "Proclaimed on 3 November 1848, the constitution made ministers, not the king, responsible to parliament, introduced direct elections to the House of Representatives (with a property-based franchise) and guaranteed freedoms of assembly, education and religion.",
    context:
      "Under William I and William II, the king held considerable power. Liberals led by the Leiden professor Thorbecke had long called for reform. When revolution broke out in Paris in February 1848 and spread across Europe, William II feared for his throne.",
    narrative:
      "In March 1848 William II reportedly said he had changed from 'very conservative to very liberal in one night'. He appointed a commission chaired by Thorbecke, whose proposals were adopted and proclaimed in November. The king became inviolable, with ministers taking political responsibility, and parliament gained the right to amend legislation and to hold inquiries.\n\nThorbecke led his first government from 1849. Voting rights remained limited to men who paid a certain amount of tax; universal male suffrage followed in 1917 and women's suffrage in 1919. The 1848 constitution remains the basis of the Dutch constitutional system.",
    causes: [
      "The revolutions of 1848 across Europe",
      "Longstanding liberal demands for reform",
      "William II's fear of revolution",
    ],
    consequences: [
      "Foundation of Dutch parliamentary democracy",
      "Ministerial responsibility and a ceremonial role for the monarch",
      "Guaranteed civil liberties",
    ],
    timeline: [
      ["1848-02-24", "Revolution in Paris", "Louis-Philippe falls."],
      ["1848-03-13", "William II accepts reform", "Appoints Thorbecke's commission."],
      ["1848-11-03", "New constitution proclaimed", "Parliamentary system established."],
      ["1919", "Women's suffrage", "Women gain the right to vote."],
    ],
    people: [
      ["johan-rudolph-thorbecke", "Liberal statesman who drafted the constitution"],
      ["william-ii-of-the-netherlands", "King who accepted the reforms"],
    ],
    relations: [["related_to", "same-sex-marriage-netherlands", "Later social reforms were legislated through the parliamentary system founded in 1848."]],
  },
  {
    slug: "abolition-of-slavery-suriname",
    title: "Abolition of slavery in Suriname and the Dutch Caribbean",
    alt: ["Keti Koti", "Emancipation Day (Suriname)"],
    date: "1863-07-01",
    period: "age-of-revolutions",
    category: "society",
    region: "latin-america",
    location: "Suriname and the Dutch Antilles",
    places: ["paramaribo"],
    wiki: "Ketikoti",
    keywords: ["Keti Koti", "slavery", "Suriname", "Curaçao", "emancipation", "apology"],
    summary:
      "The Netherlands abolished slavery in Suriname and its Caribbean colonies, among the last European states to do so. The formerly enslaved were compelled to keep working on plantations for ten more years.",
    overview:
      "On 1 July 1863, about 45,000 enslaved people in Suriname and the Antilles were declared free. Slave owners received compensation; the enslaved received none. The anniversary, Keti Koti ('the chains are broken'), is commemorated each year.",
    context:
      "Dutch merchants transported an estimated 550,000 to 600,000 enslaved Africans across the Atlantic. Britain abolished slavery in its colonies in 1834 and France in 1848. Dutch abolition was delayed by debates over compensation for owners. Slavery in the Dutch East Indies was abolished in 1860.",
    narrative:
      "The emancipation law of 1862 took effect on 1 July 1863. Owners were paid compensation per person freed. In Suriname, freed people were required to sign contracts and work under state supervision until 1873. Afterwards, planters brought indentured labourers from British India and Java.\n\nIn 2021 an advisory board recommended that the Dutch state apologise. Prime Minister Mark Rutte did so on behalf of the government in December 2022, and on 1 July 2023 King Willem-Alexander apologised during the national commemoration.",
    causes: [
      "Abolitionist pressure and abolition by other European powers",
      "Resistance by enslaved people, including marronage",
      "Changing economic and moral attitudes in the Netherlands",
    ],
    consequences: [
      "Freedom for about 45,000 people, followed by ten years of compulsory labour",
      "Arrival of indentured labourers from Asia in Suriname",
      "National commemoration and an official apology in 2022–2023",
    ],
    timeline: [
      ["1814", "Dutch slave trade banned", "Slavery itself continued."],
      ["1860", "Abolition in the Dutch East Indies", "Asian colonies first."],
      ["1863-07-01", "Abolition in Suriname and the Antilles", "Keti Koti."],
      ["1873-07-01", "End of state supervision", "Compulsory labour contracts end."],
      ["2023-07-01", "Royal apology", "King Willem-Alexander apologises."],
    ],
    relations: [
      ["followed_by", "emancipation-proclamation", "The United States began emancipation in the same year."],
      ["related_to", "atlantic-slave-trade", "Dutch traders had transported hundreds of thousands of enslaved Africans."],
      ["related_to", "slavery-abolition-act", "Britain had abolished slavery in its colonies three decades earlier."],
    ],
  },
  {
    slug: "afsluitdijk",
    title: "Closure of the Zuiderzee by the Afsluitdijk",
    alt: ["Afsluitdijk", "Zuiderzee Works"],
    date: "1932-05-28",
    period: "world-wars",
    category: "technology",
    region: "europe",
    location: "Between North Holland and Friesland",
    places: ["ijsselmeer"],
    wiki: "Afsluitdijk",
    keywords: ["Zuiderzee Works", "Cornelis Lely", "IJsselmeer", "polders", "Flevoland", "hydraulic engineering"],
    summary:
      "A 32-kilometre dam closed off the Zuiderzee, an inlet of the North Sea, turning it into the freshwater IJsselmeer and protecting central Netherlands from storm floods.",
    overview:
      "The final gap was closed on 28 May 1932 and the road over the dam opened in 1933. Part of the Zuiderzee Works designed by engineer Cornelis Lely, it made possible the reclamation of large new polders, including the province of Flevoland.",
    context:
      "Plans to tame the Zuiderzee dated to the seventeenth century. Lely, as minister and engineer, drew up a detailed scheme in the 1890s. A severe flood in January 1916 and food shortages during the First World War persuaded parliament to pass the Zuiderzee Act in 1918.",
    narrative:
      "Construction began in 1927, using boulder clay dredged from the seabed and mattresses of willow branches. Workers closed the last gap on 28 May 1932, at the spot now marked by a monument. Sluices at either end discharge river water into the Wadden Sea.\n\nThe enclosed sea became the freshwater IJsselmeer, a major reservoir. The Wieringermeer polder had been drained in 1930; the Noordoostpolder followed in 1942 and the Flevoland polders in 1957 and 1968, home to new towns such as Lelystad, named after Lely. The fishing communities of the Zuiderzee lost their livelihoods.",
    causes: [
      "Centuries of flooding around the Zuiderzee",
      "The 1916 flood and wartime food shortages",
      "Cornelis Lely's engineering plan",
    ],
    consequences: [
      "Protection of the central Netherlands from storm surges",
      "Creation of the freshwater IJsselmeer",
      "Reclamation of new polders, including Flevoland",
    ],
    timeline: [
      ["1916-01-14", "Zuiderzee flood", "Prompts action."],
      ["1918-06-14", "Zuiderzee Act", "Parliament approves the works."],
      ["1932-05-28", "Final gap closed", "The Zuiderzee becomes the IJsselmeer."],
      ["1933-09-25", "Road opened", "Traffic crosses the dam."],
    ],
    people: [["cornelis-lely", "Engineer and minister who designed the Zuiderzee Works"]],
    relations: [["related_to", "delta-works", "Two of the great Dutch flood-protection projects of the twentieth century."]],
  },
  {
    slug: "german-invasion-of-the-netherlands",
    title: "German invasion of the Netherlands",
    alt: ["Battle of the Netherlands", "May 1940"],
    date: "1940-05-10",
    end: "1940-05-14",
    period: "world-wars",
    category: "conflict",
    region: "europe",
    location: "Netherlands",
    places: ["the-hague", "rotterdam"],
    wiki: "German invasion of the Netherlands",
    keywords: ["Second World War", "neutrality", "paratroopers", "Queen Wilhelmina", "occupation", "Seyss-Inquart"],
    summary:
      "Nazi Germany invaded the neutral Netherlands. After five days of fighting and the bombing of Rotterdam, the Dutch army capitulated, beginning five years of occupation.",
    overview:
      "The invasion began on 10 May 1940 as part of Germany's western offensive. Queen Wilhelmina and the government escaped to London, where they formed a government in exile. Fighting in Zeeland continued until 17 May.",
    context:
      "The Netherlands had stayed neutral in the First World War and hoped to do so again. Its army was small and poorly equipped. Germany planned to attack France through the Low Countries.",
    narrative:
      "German airborne troops landed near The Hague to capture the government and queen, but were repulsed in heavy fighting, and at bridges near Rotterdam and Moerdijk. German armoured forces advanced rapidly through the south. On 13 May Queen Wilhelmina and the cabinet left for London.\n\nOn 14 May German aircraft bombed central Rotterdam, and Germany threatened to bomb Utrecht next. The Dutch commander-in-chief, General Henri Winkelman, capitulated that evening; the formal surrender was signed on 15 May. Austrian Nazi Arthur Seyss-Inquart was appointed Reichskommissar, heading a civilian occupation regime.",
    causes: [
      "Germany's offensive against France through the Low Countries",
      "The Netherlands' weak military preparedness",
    ],
    consequences: [
      "Five years of German occupation",
      "Dutch government and royal family in exile in London",
      "Persecution and deportation of Dutch Jews",
    ],
    timeline: [
      ["1940-05-10", "Invasion begins", "Airborne landings near The Hague and Rotterdam."],
      ["1940-05-13", "Government leaves for London", "Queen Wilhelmina goes into exile."],
      ["1940-05-14", "Bombing of Rotterdam; capitulation", "Dutch army surrenders."],
      ["1940-05-29", "Seyss-Inquart takes office", "Civilian occupation regime."],
    ],
    people: [
      ["wilhelmina-of-the-netherlands", "Queen who led the government in exile"],
      ["arthur-seyss-inquart", "Reichskommissar of the occupied Netherlands"],
    ],
    relations: [
      ["part_of", "world-war-ii", "Part of Germany's western offensive of May 1940."],
      ["contributed_to", "holocaust-in-the-netherlands", "The occupation allowed the persecution and deportation of Dutch Jews."],
    ],
  },
  {
    slug: "bombing-of-rotterdam",
    title: "German bombing of Rotterdam",
    alt: ["Rotterdam Blitz"],
    date: "1940-05-14",
    period: "world-wars",
    category: "conflict",
    region: "europe",
    location: "Rotterdam, Netherlands",
    places: ["rotterdam"],
    wiki: "German bombing of Rotterdam",
    keywords: ["Luftwaffe", "aerial bombing", "Rotterdam", "reconstruction", "capitulation"],
    summary:
      "German bombers destroyed the historic centre of Rotterdam while surrender negotiations were under way, killing hundreds of people and making about 80,000 homeless.",
    overview:
      "The bombing on the afternoon of 14 May 1940 started fires that burned much of the city centre. Germany then threatened Utrecht with the same fate, and the Netherlands capitulated that evening.",
    context:
      "Dutch troops were holding the north bank of the Maas in Rotterdam against German forces. German commanders issued an ultimatum to the city's commander, and negotiations had begun when the bombers arrived.",
    narrative:
      "Signal flares intended to recall the attack were missed by most of one formation, which dropped its bombs on the centre. The resulting fires spread across the old city, destroying around 25,000 homes, churches and businesses. Estimates of the dead are commonly given as around 850.\n\nThe ruins were cleared, and after the war Rotterdam was rebuilt as a modern city rather than restored, becoming known for its architecture. Ossip Zadkine's sculpture The Destroyed City commemorates the bombing.",
    causes: [
      "Dutch resistance to the German advance in Rotterdam",
      "German pressure to force a quick surrender",
      "Failure of the recall signal for part of the attack",
    ],
    consequences: [
      "Destruction of Rotterdam's historic centre",
      "Immediate Dutch capitulation",
      "Rebuilding of Rotterdam as a modern city",
    ],
    timeline: [
      ["1940-05-14", "Ultimatum", "Negotiations begin."],
      ["1940-05-14", "Bombing at about 13:30", "Fires spread through the centre."],
      ["1940-05-14", "Capitulation", "Dutch army surrenders that evening."],
    ],
    relations: [["part_of", "german-invasion-of-the-netherlands", "The bombing that ended Dutch resistance in May 1940."]],
  },
  {
    slug: "february-strike",
    title: "The February strike",
    alt: ["Februaristaking"],
    date: "1941-02-25",
    end: "1941-02-26",
    period: "world-wars",
    category: "society",
    region: "europe",
    location: "Amsterdam and surrounding towns, Netherlands",
    places: ["amsterdam"],
    wiki: "February strike",
    discovery: true,
    keywords: ["resistance", "Amsterdam", "general strike", "persecution of Jews", "Dokwerker"],
    summary:
      "Workers in and around Amsterdam went on strike against the first round-ups of Jewish men, the first mass protest in occupied Europe against the persecution of Jews.",
    overview:
      "On 25 and 26 February 1941, tens of thousands of people stopped work in Amsterdam, Zaandam, Haarlem and other towns. German forces crushed the strike, and some of its organisers were executed. It is commemorated every year at the Dokwerker statue in Amsterdam.",
    context:
      "From late 1940 the occupiers excluded Jews from public life. After street fights in Amsterdam's Jewish quarter, German police rounded up 425 Jewish men on 22 and 23 February 1941 and deported them to Buchenwald and Mauthausen, where almost all died.",
    narrative:
      "The banned Communist Party called for a strike. On 25 February tram workers stayed home, and the strike spread to factories, shipyards and offices. Shops closed and crowds gathered in the streets. On the second day German troops and police opened fire, and the strike was broken by 27 February.\n\nThe strike did not stop the persecution: deportations began in July 1942, and about three-quarters of Dutch Jews were murdered. But it stands as a rare act of mass public solidarity with Jews in occupied Europe.",
    causes: [
      "The round-up and deportation of 425 Jewish men",
      "Growing anti-Jewish measures under the occupation",
      "Organisation by the banned Communist Party",
    ],
    consequences: [
      "Harsh German repression and executions",
      "A lasting symbol of resistance and solidarity",
      "Annual commemoration at the Dokwerker statue",
    ],
    timeline: [
      ["1941-02-22", "First round-up", "Jewish men seized in Amsterdam."],
      ["1941-02-25", "Strike begins", "Trams and workplaces stop."],
      ["1941-02-26", "Strike crushed", "German forces open fire."],
    ],
    relations: [
      ["occurred_during", "german-invasion-of-the-netherlands", "A protest under the occupation that followed the invasion."],
      ["related_to", "holocaust-in-the-netherlands", "A protest against the first deportations of Dutch Jews."],
    ],
  },
  {
    slug: "holocaust-in-the-netherlands",
    title: "The Holocaust in the Netherlands",
    alt: ["Deportation of Dutch Jews"],
    date: "1940",
    end: "1945",
    period: "world-wars",
    category: "society",
    region: "europe",
    location: "German-occupied Netherlands",
    places: ["westerbork", "anne-frank-house"],
    wiki: "The Holocaust in the Netherlands",
    keywords: ["Westerbork", "Anne Frank", "deportation", "Sobibor", "Auschwitz", "onderduikers"],
    summary:
      "About 102,000 of the roughly 140,000 Jews living in the occupied Netherlands were murdered, the highest proportion in Western Europe.",
    overview:
      "From July 1942, Jews were deported from the transit camps of Westerbork and Vught, mostly to Auschwitz and Sobibor. Around 25,000 went into hiding, among them Anne Frank and her family; roughly two-thirds of those in hiding survived.",
    context:
      "The occupation regime introduced anti-Jewish measures step by step: registration in 1941, exclusion from jobs and schools, and the yellow star in 1942. An efficient civil administration and population register, and the cooperation of Dutch police and officials, made the persecution highly effective.",
    narrative:
      "Weekly trains ran from Westerbork to the east between July 1942 and September 1944. Most of those deported to Sobibor were murdered on arrival. Some Dutch citizens hid Jews or forged papers, while others betrayed them, sometimes for a bounty. Anne Frank's family hid in the annex of a building on the Prinsengracht in Amsterdam from July 1942 until their arrest on 4 August 1944.\n\nAnne Frank died in Bergen-Belsen in early 1945. Her diary, published by her father Otto in 1947, became one of the most widely read books in the world. The Netherlands has since examined the role of its institutions, and in 2020 Prime Minister Mark Rutte apologised for the government's failures during the persecution.",
    causes: [
      "Nazi antisemitic policy and the occupation",
      "Efficient administration and population registration",
      "Collaboration of Dutch police and officials",
    ],
    consequences: [
      "Murder of about 102,000 Dutch Jews",
      "Destruction of Amsterdam's Jewish community",
      "Anne Frank's diary became a global testimony",
    ],
    timeline: [
      ["1941-01-10", "Registration of Jews ordered", "Compulsory registration."],
      ["1942-05-03", "Yellow star introduced", "Jews required to wear it."],
      ["1942-07-15", "First deportation train", "From Westerbork to Auschwitz."],
      ["1944-08-04", "Anne Frank arrested", "In the secret annex in Amsterdam."],
    ],
    people: [
      ["anne-frank", "Diarist who hid in Amsterdam"],
      ["arthur-seyss-inquart", "Reichskommissar responsible for the occupation regime"],
    ],
    relations: [["part_of", "the-holocaust", "Part of the Nazi genocide of European Jews."]],
    sources: [
      { url: "https://encyclopedia.ushmm.org/content/en/article/the-netherlands", title: "The Netherlands", publisher: "United States Holocaust Memorial Museum", type: "museum" },
    ],
  },
  {
    slug: "operation-market-garden",
    title: "Operation Market Garden",
    alt: ["Battle of Arnhem", "A Bridge Too Far"],
    date: "1944-09-17",
    end: "1944-09-25",
    period: "world-wars",
    category: "conflict",
    region: "europe",
    location: "Eindhoven, Nijmegen and Arnhem, Netherlands",
    places: ["arnhem"],
    wiki: "Operation Market Garden",
    keywords: ["airborne", "Arnhem", "Montgomery", "bridges", "Rhine", "Allied offensive"],
    summary:
      "The Allies dropped airborne troops to seize a chain of bridges across the Netherlands, hoping to cross the Rhine and end the war by Christmas. The operation failed at Arnhem.",
    overview:
      "American, British and Polish airborne divisions captured bridges at Eindhoven and Nijmegen, but the British 1st Airborne Division at Arnhem was cut off and largely destroyed. The failure left most of the western Netherlands under occupation through the Hunger Winter.",
    context:
      "After the Allied breakout from Normandy, German forces were retreating. Field Marshal Montgomery proposed a bold thrust through the Netherlands to outflank the Siegfried Line and reach Germany's industrial Ruhr.",
    narrative:
      "'Market', the largest airborne operation to that date, began on 17 September 1944; 'Garden', the advance of British XXX Corps along a single road, was to link up with the paratroopers. Unexpectedly strong German forces, including SS panzer units refitting near Arnhem, held the road and the town. A small British force reached the Arnhem road bridge but was overwhelmed after several days.\n\nAbout 2,400 survivors of the 1st Airborne Division were evacuated across the Rhine on the night of 25–26 September. In support of the operation, the Dutch government in exile called a national railway strike, to which the Germans responded with an embargo on food transport to the west.",
    causes: [
      "Allied optimism after the Normandy breakout",
      "Montgomery's plan to cross the Rhine",
      "Desire to end the war before the winter",
    ],
    consequences: [
      "Failure to cross the Rhine at Arnhem",
      "Liberation of part of the southern Netherlands",
      "The western Netherlands remained occupied through the Hunger Winter",
    ],
    timeline: [
      ["1944-09-17", "Airborne landings", "Operation begins."],
      ["1944-09-20", "Nijmegen bridge captured", "After an assault across the Waal."],
      ["1944-09-21", "Arnhem bridge lost", "British paratroopers overwhelmed."],
      ["1944-09-25", "Evacuation across the Rhine", "Survivors withdraw."],
    ],
    people: [["bernard-montgomery", "British commander who planned the operation"]],
    relations: [
      ["part_of", "world-war-ii", "An Allied offensive in the West in 1944."],
      ["contributed_to", "dutch-famine-1944", "The railway strike supporting the operation prompted a German food embargo on the west."],
    ],
  },
  {
    slug: "dutch-famine-1944",
    title: "The Hunger Winter",
    alt: ["Dutch famine of 1944–1945", "Hongerwinter"],
    date: "1944-11",
    end: "1945-05",
    period: "world-wars",
    category: "disaster",
    region: "europe",
    location: "Western Netherlands",
    places: ["amsterdam"],
    wiki: "Dutch famine of 1944–1945",
    keywords: ["Hongerwinter", "famine", "food embargo", "Operation Manna", "tulip bulbs"],
    summary:
      "During the last winter of the occupation, a German embargo, a harsh winter and the collapse of transport caused a famine in the western Netherlands that killed about 20,000 people.",
    overview:
      "Rations fell to a few hundred calories a day. People ate tulip bulbs and sugar beets and walked long distances to farms to barter for food. Allied air drops of food began in late April 1945.",
    context:
      "After the failure of Operation Market Garden, the western Netherlands remained occupied. In response to the railway strike called by the government in exile in September 1944, the Germans blocked food transport. The embargo was partly lifted in November, but canals froze in an early, severe winter.",
    narrative:
      "Food and fuel ran out in Amsterdam, Rotterdam, The Hague and other cities. Trees, furniture and even wooden parts of empty houses were burned for heat. The elderly and the very young were the most vulnerable, and estimates of deaths are around 20,000.\n\nAfter negotiations with the occupiers, Allied bombers dropped food in Operations Manna and Chowhound from 29 April 1945. Liberation followed days later. Studies of people who were in the womb during the famine have since shaped research on how prenatal conditions affect lifelong health.",
    causes: [
      "German food embargo after the railway strike",
      "An early and severe winter that froze canals",
      "Collapse of transport and fuel supplies",
    ],
    consequences: [
      "About 20,000 deaths",
      "Allied food drops in Operations Manna and Chowhound",
      "Long-term medical research on prenatal famine exposure",
    ],
    timeline: [
      ["1944-09-17", "Railway strike begins", "In support of Market Garden."],
      ["1944-11", "Famine conditions", "Rations collapse in the west."],
      ["1945-04-29", "Operation Manna begins", "Allied food drops."],
      ["1945-05-05", "Liberation", "German forces in the Netherlands surrender."],
    ],
    relations: [["followed_by", "liberation-of-the-netherlands", "The famine ended with liberation in May 1945."]],
  },
  {
    slug: "liberation-of-the-netherlands",
    title: "Liberation of the Netherlands",
    alt: ["Liberation Day", "Bevrijdingsdag"],
    date: "1945-05-05",
    period: "world-wars",
    category: "conflict",
    region: "europe",
    location: "Wageningen, Netherlands",
    places: ["wageningen"],
    wiki: "Liberation Day (Netherlands)",
    keywords: ["Liberation Day", "Canadian army", "capitulation", "Wageningen", "Remembrance Day"],
    summary:
      "German forces in the Netherlands agreed to surrender on 5 May 1945, ending five years of occupation. The date is celebrated each year as Liberation Day.",
    overview:
      "The surrender was agreed at the Hotel De Wereld in Wageningen between Canadian General Charles Foulkes and German General Johannes Blaskowitz, and formally signed there the next day. Canadian forces played the leading role in liberating the Netherlands.",
    context:
      "The south of the country had been liberated in the autumn of 1944, beginning with Maastricht on 14 September. The north and east were liberated in April 1945. The densely populated west, suffering from famine, remained under German control until the end.",
    narrative:
      "On 4 May 1945 German forces in northwest Germany, the Netherlands and Denmark surrendered to Montgomery, effective the next morning. At Wageningen on 5 May, Blaskowitz agreed the details of the capitulation in the Netherlands. Allied troops entered the western cities in the following days amid celebrations.\n\nThe Netherlands commemorates the war dead on 4 May and celebrates liberation on 5 May. Canada's role is remembered in Canadian war cemeteries and an annual gift of tulips to Ottawa, a tradition begun by Princess Juliana, who spent the war there.",
    causes: [
      "The collapse of Nazi Germany",
      "Allied advances, led by the First Canadian Army",
    ],
    consequences: [
      "End of the occupation",
      "Annual Remembrance Day (4 May) and Liberation Day (5 May)",
      "Lasting Dutch–Canadian ties",
    ],
    timeline: [
      ["1944-09-14", "Maastricht liberated", "The first Dutch city freed."],
      ["1945-04", "North and east liberated", "Canadian advance."],
      ["1945-05-05", "Capitulation agreed at Wageningen", "Liberation Day."],
      ["1945-05-06", "Surrender signed", "At the Hotel De Wereld."],
    ],
    people: [["wilhelmina-of-the-netherlands", "Queen who returned from exile"]],
    relations: [["part_of", "world-war-ii", "The end of the war in the Netherlands."]],
  },
  {
    slug: "indonesian-national-revolution",
    title: "Indonesian National Revolution",
    alt: ["Indonesian War of Independence", "Proclamation of Indonesian Independence"],
    date: "1945-08-17",
    end: "1949-12-27",
    period: "cold-war",
    category: "politics",
    region: "southeast-asia",
    location: "Indonesia (Dutch East Indies)",
    places: ["batavia", "yogyakarta"],
    wiki: "Indonesian National Revolution",
    keywords: ["Sukarno", "Hatta", "decolonisation", "police actions", "Dutch East Indies", "independence"],
    summary:
      "Sukarno and Mohammad Hatta proclaimed Indonesian independence two days after Japan's surrender. Four years of war and diplomacy followed before the Netherlands transferred sovereignty.",
    overview:
      "The Dutch sought to restore colonial rule and launched two large military offensives, which they called 'police actions'. International pressure, especially from the United States and the United Nations, led to the transfer of sovereignty on 27 December 1949.",
    context:
      "The Dutch had ruled the archipelago for over three centuries. Japan occupied the Dutch East Indies from 1942 to 1945, interning Dutch civilians and encouraging Indonesian nationalists. When Japan surrendered, nationalists moved quickly to declare independence.",
    narrative:
      "After the proclamation of 17 August 1945, a violent period known as the Bersiap saw attacks on Dutch, Indo-European and Chinese civilians and others. British and then Dutch forces arrived. Negotiations produced the Linggadjati Agreement of 1946, but the Netherlands launched major offensives in July 1947 and December 1948, capturing the republic's capital, Yogyakarta, and arresting its leaders.\n\nUN pressure and the threat of losing Marshall Plan aid forced the Dutch to the negotiating table. The Round Table Conference in The Hague led to the transfer of sovereignty in December 1949; Western New Guinea remained Dutch until 1962. A Dutch research programme published in 2022 concluded that Dutch forces used extreme violence systematically, and the government apologised. In 2023 the Dutch government said it recognised 17 August 1945 as the date of Indonesian independence.",
    causes: [
      "Indonesian nationalism and the end of the Japanese occupation",
      "Dutch determination to restore colonial rule",
      "International pressure for decolonisation",
    ],
    consequences: [
      "Independence of Indonesia",
      "End of most of the Dutch colonial empire in Asia",
      "Migration of hundreds of thousands of people to the Netherlands",
    ],
    timeline: [
      ["1945-08-17", "Independence proclaimed", "By Sukarno and Hatta."],
      ["1947-07-21", "First Dutch offensive", "'Operation Product'."],
      ["1948-12-19", "Second Dutch offensive", "Yogyakarta captured."],
      ["1949-12-27", "Transfer of sovereignty", "After the Round Table Conference."],
    ],
    people: [
      ["sukarno", "First president of Indonesia"],
      ["mohammad-hatta", "First vice-president of Indonesia"],
    ],
    relations: [
      ["occurred_during", "cold-war", "One of the first major decolonisation wars after 1945."],
      ["followed_by", "bandung-conference", "Independent Indonesia hosted the Asian–African Conference in 1955."],
      ["related_to", "dutch-east-india-company", "Dutch rule in the archipelago began with the VOC in the seventeenth century."],
    ],
  },
  {
    slug: "north-sea-flood-1953",
    title: "North Sea flood of 1953",
    alt: ["Watersnoodramp"],
    date: "1953-01-31",
    end: "1953-02-01",
    period: "cold-war",
    category: "disaster",
    region: "europe",
    location: "Zeeland, South Holland and North Brabant, Netherlands",
    places: ["zeeland"],
    wiki: "North Sea flood of 1953",
    keywords: ["Watersnoodramp", "storm surge", "Zeeland", "dikes", "Delta Works"],
    summary:
      "A storm surge combined with a spring tide breached dikes across the southwestern Netherlands on the night of 31 January 1953, killing 1,836 people.",
    overview:
      "Large parts of Zeeland, South Holland and North Brabant were flooded. The storm also killed hundreds of people in England and Belgium. The disaster led directly to the Delta Works.",
    context:
      "Many dikes in the southwest were in poor condition after the war. Engineers had warned of the danger, and plans for stronger defences existed but had not been carried out.",
    narrative:
      "A severe northwesterly storm drove water into the narrowing southern North Sea as a spring tide peaked. Dikes failed in many places during the night, when people were asleep, and warning systems were limited, especially on a Saturday night. Many villages were flooded within hours. About 70,000 people were evacuated and tens of thousands of animals drowned.\n\nAid arrived from across the Netherlands and abroad. Within weeks the government appointed the Delta Committee to plan new defences, and its recommendations became the Delta Works.",
    causes: [
      "A severe storm coinciding with a spring tide",
      "Dikes weakened by neglect and war",
      "Limited warning systems",
    ],
    consequences: [
      "1,836 deaths in the Netherlands",
      "Mass evacuation and destruction of homes and farmland",
      "The Delta Works flood-protection programme",
    ],
    timeline: [
      ["1953-01-31", "Storm surge peaks", "Dikes begin to fail overnight."],
      ["1953-02-01", "Extensive flooding", "Zeeland and South Holland worst hit."],
      ["1953", "Delta Committee appointed", "Weeks after the disaster."],
    ],
    relations: [["led_to", "delta-works", "The disaster prompted the Delta Plan to close off the southwestern estuaries."]],
  },
  {
    slug: "delta-works",
    title: "The Delta Works",
    alt: ["Deltawerken", "Delta Plan"],
    date: "1953",
    end: "1997",
    period: "cold-war",
    category: "technology",
    region: "europe",
    location: "Southwestern Netherlands",
    places: ["oosterscheldekering", "zeeland"],
    wiki: "Delta Works",
    keywords: ["storm surge barrier", "Oosterscheldekering", "Maeslantkering", "flood protection", "engineering"],
    dateNote: "The Delta Committee was appointed weeks after the 1953 flood; the Delta Act was passed in 1958, and the last major storm-surge barrier, the Maeslantkering, was completed in 1997.",
    summary:
      "After the 1953 flood, the Netherlands built a system of dams, sluices and storm-surge barriers that shortened its southwestern coastline and protected it against the sea.",
    overview:
      "The Delta Works closed or controlled the estuaries of Zeeland and South Holland. The Oosterschelde storm-surge barrier, opened in 1986, stays open in normal conditions to protect the estuary's tidal ecosystem, and closes only in storms.",
    context:
      "The 1953 flood showed that the dikes of the southwest were inadequate. The Delta Committee proposed shutting off the sea inlets, drastically shortening the length of coastline that had to be defended.",
    narrative:
      "Work began in the 1950s with smaller dams and the Hollandse IJssel storm-surge barrier (1958). The Delta Act of 1958 set out the programme. Originally, the Oosterschelde was to be closed completely, but protests from fishermen and environmentalists led to a design with gates that close only during storm surges, completed in 1986.\n\nThe Maeslantkering, two enormous swinging gates protecting Rotterdam's waterway, was completed in 1997. The works have influenced flood-protection projects around the world and continue to be adapted as sea levels rise.",
    causes: [
      "The North Sea flood of 1953",
      "The Delta Committee's recommendations",
    ],
    consequences: [
      "Shortened and strengthened coastline in the southwest",
      "Innovative storm-surge barriers that preserve ecosystems",
      "Global influence on flood-protection engineering",
    ],
    timeline: [
      ["1958", "Delta Act passed", "Programme set out in law."],
      ["1958", "Hollandse IJssel barrier completed", "The first major work."],
      ["1986-10-04", "Oosterscheldekering opened", "Storm-surge barrier with open gates."],
      ["1997-05-10", "Maeslantkering opened", "Protecting Rotterdam."],
    ],
    relations: [["related_to", "paris-agreement", "Rising sea levels from climate change keep Dutch flood defences under constant review."]],
  },
  {
    slug: "same-sex-marriage-netherlands",
    title: "World's first legal same-sex marriages",
    alt: ["Same-sex marriage in the Netherlands"],
    date: "2001-04-01",
    period: "contemporary",
    category: "society",
    region: "europe",
    location: "Amsterdam, Netherlands",
    places: ["amsterdam"],
    wiki: "Same-sex marriage in the Netherlands",
    keywords: ["LGBT rights", "marriage equality", "Job Cohen", "civil rights"],
    summary:
      "The Netherlands became the first country to allow same-sex couples to marry. Just after midnight on 1 April 2001, Amsterdam's mayor Job Cohen married four couples.",
    overview:
      "The law, passed by parliament in December 2000, opened civil marriage to same-sex couples on the same terms as opposite-sex couples, including adoption rights. Dozens of countries have since followed.",
    context:
      "The Netherlands had decriminalised homosexuality in 1811 under French rule, although discriminatory laws persisted into the twentieth century. Activists campaigned for equal marriage from the 1980s. Registered partnerships for all couples were introduced in 1998.",
    narrative:
      "After a commission recommended opening marriage to same-sex couples, the government introduced legislation, which passed the House of Representatives in September 2000 and the Senate in December. The law took effect on 1 April 2001, and Cohen officiated at the first weddings in Amsterdam's city hall.\n\nBelgium followed in 2003 and Spain and Canada in 2005. By the 2020s same-sex marriage was legal in more than thirty countries, though it remained illegal or unrecognised in many others.",
    causes: [
      "Long-running campaigns for equal rights",
      "Registered partnership law of 1998",
      "Broad political and public support",
    ],
    consequences: [
      "First country to legalise same-sex marriage",
      "Example followed by more than thirty countries",
      "Equal adoption rights for same-sex couples",
    ],
    timeline: [
      ["1998-01-01", "Registered partnerships", "Open to all couples."],
      ["2000-12-19", "Senate passes the law", "Final parliamentary approval."],
      ["2001-04-01", "First weddings", "Four couples married in Amsterdam."],
    ],
    people: [["job-cohen", "Mayor of Amsterdam who conducted the first weddings"]],
    relations: [["related_to", "universal-declaration-of-human-rights", "Part of the wider expansion of equal rights after 1948."]],
  },
];
