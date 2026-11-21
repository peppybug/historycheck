import type { EventSeed } from "../types";

export const revolutionEvents: EventSeed[] = [
  {
    slug: "industrial-revolution",
    title: "The Industrial Revolution",
    date: "~1760",
    end: "~1840",
    period: "early-modern",
    category: "technology",
    region: "europe",
    location: "Great Britain, spreading to Europe and North America",
    places: ["manchester"],
    wiki: "Industrial Revolution",
    featured: true,
    keywords: ["factories", "steam power", "textiles", "urbanisation", "coal", "mechanisation"],
    summary:
      "Beginning in Britain, a transition from hand production to machines, factories and steam power transformed economies and daily life across the world.",
    overview:
      "Between roughly 1760 and 1840, mechanised textile production, new iron-making methods and steam engines drove sustained economic growth for the first time in history. Its effects — urbanisation, new classes and environmental change — continue to shape the modern world.",
    context:
      "Britain had abundant coal and iron ore, a large colonial trading network, capital from commerce (including the profits of slavery and colonial trade), secure property rights and a growing population. An agricultural revolution increased food production and freed labour for other work.",
    narrative:
      "Inventions such as James Hargreaves' spinning jenny, Richard Arkwright's water frame and Samuel Crompton's spinning mule transformed cotton spinning. Arkwright's Cromford Mill (1771) is often cited as a model of the factory system. Abraham Darby's use of coke in iron smelting and later improvements by Henry Cort expanded iron production, while James Watt's improved steam engine supplied power that was no longer tied to rivers.\n\nCities like Manchester grew rapidly, and many workers, including children, laboured long hours in dangerous conditions. Railways, beginning with the Stockton and Darlington (1825) and Liverpool and Manchester (1830), accelerated change. Industrialisation spread to Belgium, France, Germany, the United States and later Japan.",
    causes: [
      "Abundant coal and iron in Britain",
      "Capital and markets from global trade and empire",
      "Agricultural improvements and population growth",
      "A culture of practical innovation and patent protection",
    ],
    consequences: [
      "Sustained economic growth and rising productivity",
      "Rapid urbanisation and the rise of an industrial working class",
      "New labour movements, reforms and political ideologies",
      "The beginning of large-scale fossil-fuel use",
    ],
    timeline: [
      ["~1764", "Spinning jenny", "Invented by James Hargreaves."],
      ["1769", "Watt patents his steam engine improvement", "Separate condenser."],
      ["1771", "Cromford Mill", "Arkwright's water-powered cotton mill."],
      ["1830-09-15", "Liverpool and Manchester Railway opens", "First intercity steam railway."],
    ],
    people: [
      ["james-watt", "Engineer who improved the steam engine"],
      ["richard-arkwright", "Pioneer of the factory system"],
    ],
    relations: [["led_to", "first-opium-war", "Industrial Britain's demand for trade drove its confrontation with Qing China."]],
  },
  {
    slug: "watt-steam-engine",
    title: "James Watt's steam engine",
    alt: ["Watt steam engine", "Separate condenser"],
    date: "1769-01-05",
    period: "early-modern",
    category: "technology",
    region: "europe",
    location: "Glasgow and Birmingham, Great Britain",
    places: ["birmingham"],
    wiki: "Watt steam engine",
    keywords: ["steam power", "Boulton and Watt", "Newcomen engine", "condenser"],
    summary:
      "James Watt patented a separate condenser that made steam engines far more efficient, providing the power source of industrial Britain.",
    overview:
      "Watt's patent of 5 January 1769 addressed the waste of the earlier Newcomen engine. In partnership with Matthew Boulton from 1775, he developed engines that could drive factory machinery.",
    context:
      "Thomas Newcomen's atmospheric engine (1712) pumped water from mines but used vast amounts of coal because its cylinder was repeatedly heated and cooled. Watt, an instrument maker at the University of Glasgow, noticed this while repairing a model.",
    narrative:
      "By condensing steam in a separate vessel, Watt kept the cylinder hot, dramatically reducing fuel consumption. Boulton & Watt engines, built at the Soho Foundry near Birmingham, were installed in mines, mills and breweries. Watt also developed rotary motion, the double-acting engine and the centrifugal governor.\n\nWatt coined the term 'horsepower' to market his engines. The unit of power, the watt, is named after him. Steam engines later powered locomotives and ships, transforming transport.",
    causes: [
      "Inefficiency of the Newcomen engine",
      "Demand for power in mines and factories",
      "Watt's experiments on heat and steam",
    ],
    consequences: [
      "Efficient, flexible power for industry",
      "Foundation for steam railways and ships",
      "Accelerated the Industrial Revolution",
    ],
    timeline: [
      ["1712", "Newcomen engine", "First practical steam pumping engine."],
      ["1769-01-05", "Watt's patent", "The separate condenser."],
      ["1776", "First Boulton & Watt engines in use", "Pumping and blowing furnaces."],
    ],
    people: [
      ["james-watt", "Inventor and engineer"],
      ["matthew-boulton", "Industrialist and Watt's business partner"],
    ],
    relations: [["part_of", "industrial-revolution", "A central technology of industrialisation."]],
  },
  {
    slug: "declaration-of-independence",
    title: "United States Declaration of Independence",
    alt: ["American Revolution", "July 4, 1776"],
    date: "1776-07-04",
    period: "early-modern",
    category: "politics",
    region: "north-america",
    location: "Philadelphia, Pennsylvania",
    places: ["philadelphia"],
    wiki: "United States Declaration of Independence",
    keywords: ["Thomas Jefferson", "Continental Congress", "American Revolution", "unalienable rights"],
    summary:
      "The Second Continental Congress adopted a declaration announcing that the thirteen American colonies were independent of Britain.",
    overview:
      "Drafted largely by Thomas Jefferson, the Declaration asserted that 'all men are created equal' with unalienable rights to 'Life, Liberty and the pursuit of Happiness'. Congress voted for independence on 2 July and approved the text on 4 July 1776.",
    context:
      "After the Seven Years' War, Britain imposed taxes and controls on the colonies, provoking protest under the slogan 'no taxation without representation'. Fighting began at Lexington and Concord in April 1775.",
    narrative:
      "A committee including Jefferson, John Adams and Benjamin Franklin prepared the draft. The text lists grievances against King George III and justifies revolution by appealing to natural rights, influenced by Enlightenment thinkers such as John Locke. A passage condemning the slave trade was removed.\n\nThe ideals of equality stood in sharp contrast to the reality of slavery, which many signers, including Jefferson, practised. The war continued until British defeat at Yorktown in 1781 and the Treaty of Paris in 1783. The Declaration influenced later revolutions and independence movements worldwide.",
    causes: [
      "British taxation and control after the Seven Years' War",
      "Outbreak of war in 1775",
      "Enlightenment ideas of natural rights and consent of the governed",
    ],
    consequences: [
      "Formal break with Britain and the creation of the United States",
      "Inspired later revolutionary and independence movements",
      "Contradiction with slavery that shaped American history",
    ],
    timeline: [
      ["1765", "Stamp Act", "Colonial protests."],
      ["1775-04-19", "Lexington and Concord", "War begins."],
      ["1776-07-04", "Declaration adopted", "In Philadelphia."],
      ["1783-09-03", "Treaty of Paris", "Britain recognises independence."],
    ],
    people: [
      ["thomas-jefferson", "Principal author"],
      ["benjamin-franklin", "Member of the drafting committee"],
      ["john-adams", "Member of the drafting committee"],
    ],
    relations: [["contributed_to", "storming-of-the-bastille", "The American example and France's war debts fed the crisis in France."]],
    sources: [
      { url: "https://www.archives.gov/founding-docs/declaration-transcript", title: "Declaration of Independence: A Transcription", publisher: "U.S. National Archives", type: "archive" },
      { url: "https://avalon.law.yale.edu/18th_century/declare.asp", title: "Declaration of Independence", publisher: "Avalon Project, Yale Law School", type: "primary_document" },
    ],
  },
  {
    slug: "storming-of-the-bastille",
    title: "Storming of the Bastille",
    alt: ["French Revolution", "Bastille Day"],
    date: "1789-07-14",
    period: "age-of-revolutions",
    category: "politics",
    region: "europe",
    location: "Paris, France",
    places: ["paris"],
    wiki: "Storming of the Bastille",
    featured: true,
    keywords: ["French Revolution", "Louis XVI", "Estates-General", "Declaration of the Rights of Man"],
    summary:
      "Crowds in Paris stormed the Bastille, a royal fortress and prison, a moment that became the symbol of the French Revolution.",
    overview:
      "On 14 July 1789, Parisians seeking gunpowder and weapons attacked the Bastille. Its fall showed that royal authority had collapsed in the capital. 14 July is France's national day.",
    context:
      "France faced a severe financial crisis, worsened by its support for the American Revolution, as well as high bread prices. The Estates-General, summoned in May 1789, became a National Assembly demanding a constitution. Rumours that the king was preparing to dissolve it by force alarmed Paris.",
    narrative:
      "After Louis XVI dismissed the popular finance minister Jacques Necker on 11 July, crowds took weapons from the Invalides and then marched on the Bastille for gunpowder. After hours of fighting, the governor, Bernard-René de Launay, surrendered; he was killed and his head paraded through the streets. Only seven prisoners were inside.\n\nThe event triggered revolts across France. In August the Assembly abolished feudal privileges and adopted the Declaration of the Rights of Man and of the Citizen. The revolution radicalised: the monarchy was abolished in 1792, Louis XVI was executed in 1793, and the Terror followed before Napoleon Bonaparte seized power in 1799.",
    causes: [
      "Financial crisis and heavy debt of the French state",
      "High bread prices and economic hardship",
      "Political conflict between the king and the National Assembly",
      "Enlightenment ideas challenging absolute monarchy",
    ],
    consequences: [
      "Collapse of royal authority in Paris",
      "Abolition of feudal privileges and the Declaration of the Rights of Man",
      "Execution of the king, the Terror and Napoleon's rise",
    ],
    timeline: [
      ["1789-05-05", "Estates-General opens", "At Versailles."],
      ["1789-06-20", "Tennis Court Oath", "Deputies vow to write a constitution."],
      ["1789-07-14", "Bastille stormed", "Paris in revolt."],
      ["1789-08-26", "Declaration of the Rights of Man", "Adopted by the Assembly."],
      ["1793-01-21", "Execution of Louis XVI", "In Paris."],
    ],
    people: [
      ["louis-xvi", "King of France"],
      ["marie-antoinette", "Queen of France, executed in 1793"],
      ["maximilien-robespierre", "Revolutionary leader during the Terror"],
    ],
    relations: [
      ["contributed_to", "haitian-revolution", "Revolutionary ideals and upheaval in France spread to its Caribbean colony."],
      ["led_to", "coronation-of-napoleon", "The revolution's turmoil brought Napoleon to power."],
    ],
  },
  {
    slug: "haitian-revolution",
    title: "Haitian Revolution",
    date: "1791-08-21",
    end: "1804-01-01",
    period: "age-of-revolutions",
    category: "society",
    region: "latin-america",
    location: "Saint-Domingue (Haiti)",
    places: ["haiti"],
    wiki: "Haitian Revolution",
    keywords: ["Toussaint Louverture", "Jean-Jacques Dessalines", "slave revolt", "Saint-Domingue", "independence"],
    summary:
      "Enslaved people in the French colony of Saint-Domingue rose up, abolished slavery and founded Haiti — the only nation born from a successful revolt of the enslaved.",
    overview:
      "The revolution began in August 1791 and ended with Haiti's declaration of independence on 1 January 1804. It was the first time an enslaved population overthrew its rulers and established a state.",
    context:
      "Saint-Domingue was the world's most profitable colony, producing sugar and coffee with the labour of about half a million enslaved Africans under extreme brutality. The French Revolution's ideals of liberty and equality inspired free people of colour and the enslaved.",
    narrative:
      "The uprising began in the northern plains in August 1791, following a ceremony at Bois Caïman according to tradition. Toussaint Louverture, a formerly enslaved man, emerged as a brilliant military and political leader. France abolished slavery in its colonies in 1794, and Toussaint governed the colony, issuing a constitution in 1801.\n\nNapoleon sent a large expedition in 1802 to restore French control. Toussaint was captured and died in a French prison in 1803. Under Jean-Jacques Dessalines, the revolutionaries defeated the French army, weakened by yellow fever, and declared independence. France later forced Haiti to pay a huge indemnity in 1825, a burden that lasted for generations.",
    causes: [
      "Brutal conditions of plantation slavery",
      "Inspiration and upheaval from the French Revolution",
      "Divisions among white colonists and free people of colour",
    ],
    consequences: [
      "Abolition of slavery and independence of Haiti",
      "Inspired enslaved people and abolitionists worldwide",
      "Contributed to Napoleon's sale of Louisiana to the United States",
    ],
    timeline: [
      ["1791-08-21", "Uprising begins", "In the northern plain."],
      ["1794-02-04", "France abolishes slavery", "Decree of the National Convention."],
      ["1802", "French expedition under Leclerc", "Toussaint captured."],
      ["1803-11-18", "Battle of Vertières", "French defeated."],
      ["1804-01-01", "Independence of Haiti", "Declared by Dessalines."],
    ],
    people: [
      ["toussaint-louverture", "Leader of the revolution"],
      ["jean-jacques-dessalines", "General who declared Haitian independence"],
    ],
    relations: [
      ["contributed_to", "slavery-abolition-act", "The revolution shaped debates on abolition across the Atlantic world."],
      ["contributed_to", "latin-american-independence", "Haiti aided Simón Bolívar's independence campaigns."],
    ],
  },
  {
    slug: "rosetta-stone-discovery",
    title: "Discovery of the Rosetta Stone",
    date: "1799-07-15",
    period: "age-of-revolutions",
    category: "archaeology",
    region: "middle-east",
    location: "Rashid (Rosetta), Egypt",
    places: ["rosetta"],
    civ: ["ancient-egypt"],
    wiki: "Rosetta Stone",
    discovery: true,
    keywords: ["hieroglyphs", "Napoleon's Egyptian campaign", "British Museum", "Ptolemy V"],
    summary:
      "French soldiers found a stele carrying the same decree in hieroglyphic, Demotic and Greek scripts — the key that would unlock Egyptian hieroglyphs.",
    overview:
      "Found in July 1799 during Napoleon's invasion of Egypt, the Rosetta Stone is a fragment of a decree issued in 196 BCE for Ptolemy V. It passed to Britain under the Capitulation of Alexandria in 1801 and has been in the British Museum since 1802.",
    context:
      "Napoleon's expedition to Egypt (1798–1801) included scholars who documented Egypt's antiquities. Knowledge of how to read hieroglyphs had been lost since late antiquity.",
    narrative:
      "Soldiers rebuilding a fort near Rashid uncovered the stone, and officer Pierre-François Bouchard recognised its importance. Because the Greek text could be read, scholars realised it offered a way to decipher the other two scripts.\n\nThomas Young made early progress, but it was Jean-François Champollion who announced the decipherment of hieroglyphs in 1822, showing they combined phonetic and ideographic signs. The stone remains one of the most visited objects in the British Museum, and Egypt has called for its return.",
    causes: [
      "Napoleon's Egyptian campaign and its scholarly commission",
      "Construction work on a fort at Rashid",
    ],
    consequences: [
      "Made the decipherment of hieroglyphs possible",
      "Founded the modern discipline of Egyptology",
      "Remains at the centre of debates about cultural repatriation",
    ],
    timeline: [
      ["-196", "Decree issued", "For Ptolemy V at Memphis."],
      ["1799-07-15", "Stone found", "Near Rashid."],
      ["1802", "Arrives at the British Museum", "After the French surrender."],
      ["1822-09-27", "Champollion's announcement", "Hieroglyphs deciphered."],
    ],
    people: [["jean-francois-champollion", "Scholar who deciphered hieroglyphs"]],
    relations: [["led_to", "decipherment-of-hieroglyphs", "The trilingual text made decipherment possible."]],
  },
  {
    slug: "coronation-of-napoleon",
    title: "Coronation of Napoleon",
    alt: ["Napoleon becomes Emperor"],
    date: "1804-12-02",
    period: "age-of-revolutions",
    category: "politics",
    region: "europe",
    location: "Notre-Dame de Paris",
    places: ["paris"],
    wiki: "Coronation of Napoleon",
    keywords: ["Napoleon Bonaparte", "First French Empire", "Pope Pius VII", "Jacques-Louis David"],
    summary:
      "Napoleon Bonaparte crowned himself Emperor of the French in Notre-Dame cathedral, in the presence of Pope Pius VII.",
    overview:
      "The coronation on 2 December 1804 marked the transformation of the revolutionary republic into the First French Empire. Jacques-Louis David's enormous painting of the ceremony hangs in the Louvre.",
    context:
      "Napoleon, a general who won fame in Italy and Egypt, seized power in the coup of 18 Brumaire in 1799 and became First Consul. He introduced the Napoleonic Code in 1804. A referendum approved the creation of a hereditary empire.",
    narrative:
      "The pope anointed Napoleon, but Napoleon placed the crown on his own head, symbolising that his authority did not derive from the Church. He then crowned his wife Joséphine as empress.\n\nNapoleon's armies dominated Europe for the next decade, defeating Austria and Russia at Austerlitz in 1805 and Prussia in 1806. His invasion of Russia in 1812 was catastrophic, and he abdicated in 1814 before returning for the Hundred Days in 1815.",
    causes: [
      "Napoleon's military success and the 1799 coup",
      "Desire for stability after a decade of revolution",
      "Napoleon's ambition to found a dynasty",
    ],
    consequences: [
      "Creation of the First French Empire",
      "A decade of Napoleonic Wars across Europe",
      "Spread of the Napoleonic Code",
    ],
    timeline: [
      ["1799-11-09", "Coup of 18 Brumaire", "Napoleon takes power."],
      ["1804-03-21", "Napoleonic Code", "Civil code enacted."],
      ["1804-12-02", "Coronation", "Notre-Dame de Paris."],
      ["1805-12-02", "Battle of Austerlitz", "Major victory over Austria and Russia."],
    ],
    people: [
      ["napoleon", "Emperor of the French"],
      ["pope-pius-vii", "Pope present at the coronation"],
    ],
    relations: [
      ["led_to", "battle-of-waterloo", "A decade of Napoleonic wars ended at Waterloo."],
      ["contributed_to", "latin-american-independence", "Napoleon's invasion of Spain in 1808 triggered independence movements in Spanish America."],
    ],
  },
  {
    slug: "eruption-of-tambora",
    title: "Eruption of Mount Tambora",
    alt: ["Year Without a Summer", "1815 eruption of Mount Tambora"],
    date: "1815-04-10",
    period: "age-of-revolutions",
    category: "disaster",
    region: "southeast-asia",
    location: "Sumbawa, Indonesia",
    places: ["mount-tambora"],
    wiki: "1815 eruption of Mount Tambora",
    discovery: true,
    keywords: ["volcano", "Year Without a Summer", "climate", "famine", "Frankenstein"],
    summary:
      "The largest volcanic eruption in recorded history killed tens of thousands in Indonesia and cooled the global climate, causing the 'Year Without a Summer' in 1816.",
    overview:
      "Tambora's climactic eruption on 10–11 April 1815 ejected enormous volumes of ash and sulphur into the atmosphere. Crop failures and famine followed in Europe, North America and Asia the next year.",
    context:
      "Sumbawa, in the Dutch East Indies (then temporarily under British control), was home to several small kingdoms. Tambora had been dormant for centuries.",
    narrative:
      "Explosions were heard more than 2,000 kilometres away. Pyroclastic flows destroyed villages, including the kingdom of Tambora. Estimates of deaths in Sumbawa and Lombok from the eruption and subsequent famine and disease range from about 70,000 to over 100,000.\n\nSulphate aerosols reduced sunlight worldwide. In 1816, snow fell in June in New England, harvests failed across Europe, and grain prices soared. In Switzerland, gloomy weather kept Mary Shelley and her companions indoors at Lake Geneva, where she began writing Frankenstein.",
    causes: ["Volcanic activity in the Sunda Arc", "Build-up of magma after long dormancy"],
    consequences: [
      "Tens of thousands of deaths in Indonesia",
      "Global cooling and the Year Without a Summer",
      "Famine and food riots in Europe and elsewhere",
    ],
    timeline: [
      ["1815-04-05", "First eruption", "Large explosion heard far away."],
      ["1815-04-10", "Climactic eruption", "Pyroclastic flows."],
      ["1816", "Year Without a Summer", "Crop failures in the Northern Hemisphere."],
    ],
    people: [["mary-shelley", "Author who began Frankenstein in the cold summer of 1816"]],
  },
  {
    slug: "battle-of-waterloo",
    title: "Battle of Waterloo",
    date: "1815-06-18",
    period: "age-of-revolutions",
    category: "conflict",
    region: "europe",
    location: "Near Waterloo, Belgium",
    places: ["waterloo"],
    wiki: "Battle of Waterloo",
    keywords: ["Napoleon", "Wellington", "Blücher", "Hundred Days", "Seventh Coalition"],
    summary:
      "An Anglo-allied army under the Duke of Wellington and a Prussian army under Blücher defeated Napoleon, ending his rule and the Napoleonic Wars.",
    overview:
      "On 18 June 1815, Napoleon's French army attacked Wellington's position south of Brussels. The arrival of Prussian troops in the afternoon proved decisive. Napoleon abdicated days later and was exiled to Saint Helena.",
    context:
      "Napoleon had escaped from exile on Elba in February 1815 and returned to power in France — the Hundred Days. The powers meeting at the Congress of Vienna declared him an outlaw and mobilised armies.",
    narrative:
      "Rain delayed Napoleon's attack until late morning. Fierce fighting raged around the farms of Hougoumont and La Haye Sainte, and French cavalry charges broke against British infantry squares. As Prussian forces attacked Napoleon's right flank at Plancenoit, a final assault by the Imperial Guard was repulsed, and the French army broke.\n\nWellington called the battle 'the nearest-run thing you ever saw in your life'. Napoleon abdicated on 22 June and died on Saint Helena in 1821. The Congress of Vienna's settlement shaped European politics for decades.",
    causes: [
      "Napoleon's return from exile on Elba",
      "Coalition determination to remove him",
      "Napoleon's strategy to strike before allied armies united",
    ],
    consequences: [
      "Final defeat and exile of Napoleon",
      "End of the Napoleonic Wars",
      "A long period of relative peace among the great powers",
    ],
    timeline: [
      ["1815-02-26", "Napoleon escapes Elba", "The Hundred Days begin."],
      ["1815-06-16", "Battles of Ligny and Quatre Bras", "Preliminary engagements."],
      ["1815-06-18", "Battle of Waterloo", "Napoleon defeated."],
      ["1815-06-22", "Napoleon abdicates", "For the second time."],
    ],
    people: [
      ["napoleon", "Emperor of the French"],
      ["duke-of-wellington", "Commander of the Anglo-allied army"],
      ["gebhard-leberecht-von-blucher", "Prussian field marshal"],
    ],
    relations: [["occurred_during", "congress-of-vienna", "The battle was fought while the Congress was concluding."]],
  },
  {
    slug: "congress-of-vienna",
    title: "Congress of Vienna",
    date: "1814-09",
    end: "1815-06-09",
    period: "age-of-revolutions",
    category: "politics",
    region: "europe",
    location: "Vienna, Austrian Empire",
    places: ["vienna"],
    wiki: "Congress of Vienna",
    keywords: ["Metternich", "balance of power", "Concert of Europe", "Talleyrand"],
    summary:
      "Representatives of Europe's states redrew the continent's map after the defeat of Napoleon, establishing a balance of power that lasted decades.",
    overview:
      "Led by Austria's Klemens von Metternich, the Congress concluded its Final Act on 9 June 1815. It restored many monarchies and created the Concert of Europe, a system of great-power consultation.",
    context:
      "Napoleon's conquests had overturned borders and dynasties across Europe. After his first abdication in 1814, the victorious powers — Austria, Britain, Prussia and Russia — met with France and others to settle the peace.",
    narrative:
      "Negotiations were dominated by the great powers, with France's Talleyrand skilfully gaining a role. Russia took most of Poland, Prussia gained land in Saxony and the Rhineland, and a German Confederation replaced the Holy Roman Empire. The Netherlands absorbed the Austrian Netherlands (Belgium). The Congress also condemned the slave trade.\n\nThe settlement prioritised stability and monarchy over nationalism and liberalism, which it suppressed. It contributed to a long period without a general European war, but nationalist and liberal movements erupted repeatedly, notably in 1848.",
    causes: [
      "Defeat of Napoleon and the need to redraw borders",
      "Great-power desire to prevent French domination",
      "Restoration of legitimate monarchies",
    ],
    consequences: [
      "A new European order and balance of power",
      "The Concert of Europe and great-power diplomacy",
      "Suppression of nationalist and liberal movements",
    ],
    timeline: [
      ["1814-04-06", "Napoleon's first abdication", "Exile to Elba."],
      ["1814-09", "Congress convenes", "In Vienna."],
      ["1815-06-09", "Final Act signed", "Nine days before Waterloo."],
    ],
    people: [["klemens-von-metternich", "Austrian statesman who presided over the Congress"]],
    relations: [["led_to", "revolutions-of-1848", "Suppressed liberal and national aspirations erupted in 1848."]],
  },
  {
    slug: "latin-american-independence",
    title: "Spanish American wars of independence",
    alt: ["Latin American independence", "Simón Bolívar"],
    date: "1808",
    end: "1833",
    period: "age-of-revolutions",
    category: "politics",
    region: "latin-america",
    location: "Spanish America",
    places: ["caracas", "ayacucho"],
    wiki: "Spanish American wars of independence",
    keywords: ["Simón Bolívar", "José de San Martín", "Gran Colombia", "Battle of Ayacucho", "creoles"],
    summary:
      "Revolutionary wars across Spanish America created independent states from Mexico to Argentina, led by figures such as Simón Bolívar and José de San Martín.",
    overview:
      "Triggered by Napoleon's invasion of Spain in 1808, the conflicts lasted until the 1820s. The Battle of Ayacucho in 1824 effectively ended Spanish rule in South America.",
    context:
      "American-born elites (criollos) resented Spanish restrictions on trade and office-holding. When Napoleon deposed the Spanish king and installed his brother Joseph, local juntas formed to govern in the king's name, which soon turned to independence.",
    narrative:
      "In Mexico, the priest Miguel Hidalgo's 1810 revolt was suppressed, but independence came in 1821. In South America, Bolívar fought across Venezuela, New Granada (Colombia), Ecuador and Peru, while San Martín crossed the Andes to free Chile and then Peru. Haiti provided Bolívar with crucial support in 1816.\n\nThe wars created new republics but left many conflicts unresolved, including the status of Indigenous peoples and the enslaved, and the power of regional strongmen (caudillos). Brazil took a separate path, becoming an independent empire in 1822.",
    causes: [
      "Napoleon's invasion of Spain in 1808",
      "Creole resentment of Spanish colonial control",
      "Ideals from the American, French and Haitian revolutions",
    ],
    consequences: [
      "Independence of most of Spanish America",
      "Creation of new nations, including Gran Colombia and Mexico",
      "Long periods of political instability and caudillo rule",
    ],
    timeline: [
      ["1808", "Napoleon invades Spain", "Spanish authority collapses."],
      ["1810-09-16", "Grito de Dolores", "Hidalgo's revolt in Mexico."],
      ["1819-08-07", "Battle of Boyacá", "Bolívar liberates New Granada."],
      ["1824-12-09", "Battle of Ayacucho", "Royalist army defeated in Peru."],
    ],
    people: [
      ["simon-bolivar", "Leader of independence in northern South America"],
      ["jose-de-san-martin", "Liberator of Argentina, Chile and Peru"],
    ],
  },
  {
    slug: "decipherment-of-hieroglyphs",
    title: "Champollion deciphers hieroglyphs",
    alt: ["Decipherment of ancient Egyptian scripts"],
    date: "1822-09-27",
    period: "age-of-revolutions",
    category: "science",
    region: "europe",
    location: "Paris, France",
    places: ["paris"],
    civ: ["ancient-egypt"],
    wiki: "Decipherment of ancient Egyptian scripts",
    discovery: true,
    keywords: ["Egyptology", "Rosetta Stone", "Lettre à M. Dacier", "Coptic"],
    summary:
      "Jean-François Champollion announced that he had deciphered Egyptian hieroglyphs, making it possible to read ancient Egyptian texts for the first time in some 1,400 years.",
    overview:
      "In his 'Lettre à M. Dacier', read to the French Academy on 27 September 1822, Champollion showed that hieroglyphs combined phonetic signs with logograms. He published a fuller system in 1824.",
    context:
      "The last known hieroglyphic inscription dates to 394 CE. European scholars long believed hieroglyphs were purely symbolic. The Rosetta Stone's Greek text gave a parallel translation.",
    narrative:
      "Thomas Young had identified some phonetic values in royal names. Champollion, who knew Coptic — the last stage of the Egyptian language — compared cartouches of Ptolemy and Cleopatra, then recognised the names of pharaohs such as Ramesses and Thutmose in older inscriptions. This proved the phonetic system was used in native Egyptian names, not just for Greek rulers.\n\nThe decipherment opened up three thousand years of Egyptian history and religion, from temple inscriptions to the Book of the Dead.",
    causes: [
      "Discovery of the Rosetta Stone",
      "Champollion's knowledge of Coptic",
      "Earlier work by Thomas Young and others",
    ],
    consequences: [
      "Allowed ancient Egyptian texts to be read",
      "Founded scientific Egyptology",
      "Transformed understanding of ancient history",
    ],
    timeline: [
      ["394", "Last known hieroglyphic inscription", "At Philae."],
      ["1799-07-15", "Rosetta Stone found", "In Egypt."],
      ["1822-09-27", "Lettre à M. Dacier", "Decipherment announced."],
      ["1824", "Précis du système hiéroglyphique", "Full system published."],
    ],
    people: [["jean-francois-champollion", "Philologist who deciphered hieroglyphs"]],
    relations: [["related_to", "discovery-of-tutankhamun", "Egyptology made the later reading of royal tombs possible."]],
  },
  {
    slug: "slavery-abolition-act",
    title: "Slavery Abolition Act",
    date: "1833-08-28",
    period: "age-of-revolutions",
    category: "society",
    region: "global",
    location: "Westminster, London; British colonies",
    places: ["london"],
    wiki: "Slavery Abolition Act 1833",
    keywords: ["abolition", "William Wilberforce", "British Empire", "emancipation", "compensation"],
    summary:
      "The British Parliament passed an act abolishing slavery in most of the British Empire, freeing some 800,000 enslaved people, mainly in the Caribbean.",
    overview:
      "The act received royal assent on 28 August 1833 and took effect on 1 August 1834. Formerly enslaved people were bound to a period of 'apprenticeship', which ended in 1838. Slave owners — not the enslaved — received £20 million in compensation.",
    context:
      "Britain had abolished its slave trade in 1807 after campaigns by abolitionists such as Thomas Clarkson, William Wilberforce, Olaudah Equiano and many others. Rebellions by the enslaved, including the 1831–1832 Baptist War in Jamaica, increased pressure.",
    narrative:
      "The Jamaican rebellion led by Samuel Sharpe and its brutal suppression shocked British public opinion. After parliamentary reform in 1832, a new Parliament passed abolition. The compensation paid to owners was an enormous sum — around 40 per cent of the government's annual expenditure — and was financed by borrowing that was finally paid off in 2015.\n\nThe act did not initially apply to territories under the East India Company, Ceylon or St Helena. Apprenticeship was widely criticised and ended early, in 1838. Britain then campaigned against the slave trade internationally.",
    causes: [
      "Decades of abolitionist campaigning",
      "Rebellions by enslaved people, especially in Jamaica",
      "Parliamentary reform in 1832",
    ],
    consequences: [
      "Freedom for about 800,000 enslaved people",
      "Compensation paid to slave owners, not the enslaved",
      "Encouraged abolition movements elsewhere",
    ],
    timeline: [
      ["1807-03-25", "Slave Trade Act", "Britain bans its slave trade."],
      ["1831-12-25", "Baptist War in Jamaica", "Rebellion led by Samuel Sharpe."],
      ["1833-08-28", "Royal assent", "Abolition Act passed."],
      ["1838-08-01", "Apprenticeship ends", "Full emancipation."],
    ],
    people: [["william-wilberforce", "Parliamentary leader of the abolition campaign"]],
    relations: [["followed_by", "emancipation-proclamation", "The United States moved toward emancipation three decades later."]],
  },
  {
    slug: "first-opium-war",
    title: "First Opium War",
    date: "1839-09-04",
    end: "1842-08-29",
    period: "age-of-revolutions",
    category: "conflict",
    region: "east-asia",
    location: "Southern China",
    places: ["canton", "hong-kong"],
    civ: ["ancient-china"],
    wiki: "First Opium War",
    keywords: ["Qing dynasty", "Lin Zexu", "Treaty of Nanking", "Hong Kong", "opium trade"],
    summary:
      "Britain went to war with Qing China after Chinese officials suppressed the opium trade, forcing open Chinese ports and taking Hong Kong.",
    overview:
      "The war ended with the Treaty of Nanking (Nanjing) on 29 August 1842, the first of what Chinese historians call the 'unequal treaties'. It began China's 'century of humiliation'.",
    context:
      "British merchants smuggled opium from India into China to pay for Chinese tea, silk and porcelain. Addiction spread and silver flowed out of China. The Daoguang Emperor appointed Lin Zexu to end the trade.",
    narrative:
      "In 1839 Lin confiscated and destroyed over 20,000 chests of opium at Humen. Britain sent a naval expedition, and steam-powered warships such as the Nemesis overwhelmed Chinese defences along the coast and the Yangtze.\n\nThe Treaty of Nanking ceded Hong Kong Island to Britain, opened five treaty ports to foreign trade and required China to pay an indemnity. A second Opium War (1856–1860) brought further concessions. Hong Kong remained under British rule until 1997.",
    causes: [
      "British opium smuggling to balance its trade with China",
      "Qing efforts to suppress the opium trade",
      "Industrial Britain's push for open markets",
    ],
    consequences: [
      "Cession of Hong Kong and opening of treaty ports",
      "Beginning of the 'unequal treaties' and foreign privileges in China",
      "Weakening of Qing authority",
    ],
    timeline: [
      ["1839-06-03", "Destruction of opium at Humen", "Ordered by Lin Zexu."],
      ["1839-09-04", "First clashes", "Battle of Kowloon."],
      ["1842-08-29", "Treaty of Nanking", "Hong Kong ceded."],
      ["1997-07-01", "Hong Kong handover", "Returned to China."],
    ],
    people: [["lin-zexu", "Qing official who confronted the opium trade"]],
    relations: [["contributed_to", "xinhai-revolution", "Decades of foreign pressure eroded the Qing dynasty's legitimacy."]],
  },
  {
    slug: "revolutions-of-1848",
    title: "Revolutions of 1848",
    alt: ["Springtime of Nations"],
    date: "1848-01",
    end: "1849",
    period: "age-of-revolutions",
    category: "politics",
    region: "europe",
    location: "France, the German states, the Austrian Empire, Italy and beyond",
    places: ["paris", "vienna"],
    wiki: "Revolutions of 1848",
    keywords: ["Springtime of Nations", "liberalism", "nationalism", "Communist Manifesto", "Frankfurt Parliament"],
    summary:
      "A wave of revolutions spread across Europe, demanding constitutions, national unity and the end of feudal privileges. Most were suppressed within two years.",
    overview:
      "Starting in Sicily in January and Paris in February 1848, uprisings spread to more than fifty countries. They ended serfdom in Austria and introduced universal male suffrage in France, but conservative forces soon regained control.",
    context:
      "Economic crisis, crop failures and high food prices in 1846–1847 combined with liberal and nationalist frustration at the order created at the Congress of Vienna. In February 1848, Karl Marx and Friedrich Engels published the Communist Manifesto.",
    narrative:
      "In France, King Louis-Philippe was overthrown and the Second Republic proclaimed. In Vienna, Metternich resigned and fled. A German National Assembly met in Frankfurt to draft a constitution for a united Germany. Italians rose against Austrian rule, and Hungarians demanded autonomy.\n\nDivisions among liberals, radicals and nationalities, and the loyalty of armies to monarchs, allowed counter-revolution. Russian troops helped crush Hungary in 1849. In France, Louis-Napoléon Bonaparte was elected president and later made himself emperor. Yet the revolutions shaped the later unifications of Italy and Germany.",
    causes: [
      "Economic hardship and food crises",
      "Liberal demands for constitutions and rights",
      "Nationalist movements in Germany, Italy and Hungary",
    ],
    consequences: [
      "Abolition of serfdom in the Austrian Empire",
      "Restoration of conservative rule in most states",
      "Groundwork for Italian and German unification",
    ],
    timeline: [
      ["1848-01-12", "Uprising in Palermo", "The first revolution of the year."],
      ["1848-02-21", "Communist Manifesto published", "In London."],
      ["1848-02-24", "Louis-Philippe abdicates", "Second Republic in France."],
      ["1848-05-18", "Frankfurt Parliament convenes", "German national assembly."],
      ["1849-08-13", "Hungarian surrender at Világos", "End of the Hungarian revolution."],
    ],
    people: [["karl-marx", "Co-author of the Communist Manifesto"]],
    relations: [
      ["contributed_to", "italian-unification", "The failed 1848 revolutions shaped later Italian nationalism."],
      ["contributed_to", "unification-of-germany", "German nationalism awakened in 1848 was realised by other means in 1871."],
    ],
  },
  {
    slug: "indian-rebellion-of-1857",
    title: "Indian Rebellion of 1857",
    alt: ["Sepoy Mutiny", "First War of Independence"],
    date: "1857-05-10",
    end: "1858-11-01",
    period: "age-of-revolutions",
    category: "conflict",
    region: "south-asia",
    location: "Northern and central India",
    places: ["meerut", "delhi"],
    civ: ["mughal"],
    wiki: "Indian Rebellion of 1857",
    keywords: ["East India Company", "sepoys", "Rani of Jhansi", "Bahadur Shah Zafar", "British Raj"],
    summary:
      "A rebellion by Indian soldiers of the East India Company's army spread into a widespread uprising against British rule, ending Company rule in India.",
    overview:
      "The revolt began at Meerut on 10 May 1857 and was suppressed by 1858 with great brutality on both sides. The British Crown then took direct control of India, and the last Mughal emperor was exiled.",
    context:
      "The East India Company had expanded its rule across much of India. Annexations, land revenue policies, and perceived threats to religious practices caused resentment. The introduction of rifle cartridges rumoured to be greased with cow and pig fat offended Hindu and Muslim sepoys.",
    narrative:
      "Sepoys at Meerut killed their officers and marched to Delhi, proclaiming the elderly Mughal emperor Bahadur Shah Zafar their leader. The revolt spread to Kanpur, Lucknow, Jhansi and elsewhere, with leaders including Rani Lakshmibai of Jhansi and Nana Sahib. Massacres of British civilians at Kanpur were followed by savage British reprisals, including mass executions.\n\nThe Government of India Act 1858 transferred power from the Company to the Crown, beginning the British Raj. Bahadur Shah Zafar was exiled to Rangoon, ending the Mughal dynasty. Many Indians later remembered the rebellion as the first war of independence.",
    causes: [
      "Resentment of East India Company annexations and policies",
      "Religious grievances, including the Enfield rifle cartridges",
      "Discontent among sepoys, princes and landholders",
    ],
    consequences: [
      "End of East India Company rule; direct British Crown rule",
      "End of the Mughal dynasty",
      "Reorganisation of the army and colonial policy",
    ],
    timeline: [
      ["1857-05-10", "Revolt at Meerut", "Sepoys rise against officers."],
      ["1857-05-11", "Rebels take Delhi", "Bahadur Shah Zafar proclaimed."],
      ["1857-09-20", "British recapture Delhi", "After a long siege."],
      ["1858-08-02", "Government of India Act", "Crown rule begins."],
    ],
    people: [
      ["rani-lakshmibai", "Queen of Jhansi and a leader of the rebellion"],
      ["bahadur-shah-zafar", "Last Mughal emperor"],
    ],
    relations: [["followed_by", "salt-march", "The British Raj created in 1858 faced mass civil disobedience under Gandhi."]],
  },
  {
    slug: "carrington-event",
    title: "Carrington Event",
    alt: ["Solar storm of 1859"],
    date: "1859-09-01",
    period: "age-of-revolutions",
    category: "science",
    region: "global",
    location: "Worldwide (observed from England)",
    places: ["redhill"],
    wiki: "Carrington Event",
    discovery: true,
    keywords: ["solar flare", "geomagnetic storm", "aurora", "telegraph", "space weather"],
    summary:
      "The most intense geomagnetic storm on record produced auroras as far south as the Caribbean and disrupted telegraph systems around the world.",
    overview:
      "On 1 September 1859, astronomer Richard Carrington observed a brilliant solar flare. Within about 18 hours, a coronal mass ejection struck earth, causing a storm on 1–2 September.",
    context:
      "Scientists were only beginning to suspect links between the sun and earth's magnetic field. The electric telegraph was the era's high technology, with lines across Europe and North America.",
    narrative:
      "Carrington, sketching sunspots from his observatory at Redhill, saw two bright patches of light appear and fade within minutes — the first recorded observation of a solar flare, also seen independently by Richard Hodgson. Auroras lit up the night sky so brightly that people in the northeastern United States could reportedly read newspapers by their light.\n\nTelegraph operators reported sparks, shocks and fires, and some lines continued to operate even with batteries disconnected. Scientists today study the event as a benchmark: a storm of similar size could severely damage satellites and power grids.",
    causes: ["A powerful solar flare and coronal mass ejection"],
    consequences: [
      "Demonstrated the link between solar activity and geomagnetic storms",
      "Widespread disruption to telegraph systems",
      "Remains a reference for modern space-weather planning",
    ],
    timeline: [
      ["1859-09-01", "Flare observed", "By Carrington and Hodgson."],
      ["1859-09-02", "Geomagnetic storm", "Auroras worldwide."],
    ],
    people: [["richard-carrington", "Astronomer who observed the flare"]],
  },
  {
    slug: "origin-of-species",
    title: "Darwin publishes On the Origin of Species",
    alt: ["Theory of evolution", "Natural selection"],
    date: "1859-11-24",
    period: "age-of-revolutions",
    category: "science",
    region: "europe",
    location: "London, England",
    places: ["london", "galapagos"],
    wiki: "On the Origin of Species",
    keywords: ["Charles Darwin", "evolution", "natural selection", "HMS Beagle", "Alfred Russel Wallace"],
    summary:
      "Charles Darwin set out the theory of evolution by natural selection, transforming biology and humanity's understanding of its place in nature.",
    overview:
      "Published on 24 November 1859, the book argued that species change over generations through natural selection acting on variation. It drew on evidence gathered during Darwin's voyage on HMS Beagle (1831–1836) and decades of research.",
    context:
      "Ideas of evolution had circulated before, but there was no convincing mechanism. Geologists such as Charles Lyell had shown the earth was very old. In 1858 Alfred Russel Wallace independently arrived at the same theory, prompting a joint presentation to the Linnean Society.",
    narrative:
      "Darwin presented natural selection through examples from domestic breeding, the struggle for existence and the geographical distribution of species, including those of the Galápagos Islands. He wrote that 'endless forms most beautiful and most wonderful have been, and are being, evolved.'\n\nThe book sparked intense debate, including the 1860 Oxford evolution debate. Over the following decades evolution became widely accepted among scientists, and twentieth-century genetics provided the mechanism of inheritance, producing the modern evolutionary synthesis.",
    causes: [
      "Darwin's observations on the Beagle voyage",
      "Geological evidence of an ancient earth",
      "Wallace's independent discovery spurring publication",
    ],
    consequences: [
      "Foundation of modern biology",
      "Profound debates about religion and human origins",
      "Combined with genetics into the modern synthesis",
    ],
    timeline: [
      ["1831-12-27", "HMS Beagle departs", "Darwin aboard as naturalist."],
      ["1835-09", "Galápagos Islands visited", "Observations of finches and tortoises."],
      ["1858-07-01", "Darwin–Wallace papers presented", "At the Linnean Society."],
      ["1859-11-24", "Origin of Species published", "By John Murray."],
    ],
    people: [
      ["charles-darwin", "Naturalist and author"],
      ["alfred-russel-wallace", "Co-discoverer of natural selection"],
    ],
    relations: [["followed_by", "dna-double-helix", "The molecular basis of heredity was revealed a century later."]],
    sources: [
      { url: "https://plato.stanford.edu/entries/darwin/", title: "Darwin: From Origin of Species to Descent of Man", publisher: "Stanford Encyclopedia of Philosophy", type: "academic" },
    ],
  },
  {
    slug: "italian-unification",
    title: "Proclamation of the Kingdom of Italy",
    alt: ["Italian unification", "Risorgimento"],
    date: "1861-03-17",
    period: "age-of-revolutions",
    category: "politics",
    region: "europe",
    location: "Turin, Kingdom of Sardinia (Italy)",
    places: ["turin", "rome"],
    wiki: "Italian unification",
    keywords: ["Risorgimento", "Garibaldi", "Cavour", "Victor Emmanuel II", "Expedition of the Thousand"],
    summary:
      "After wars and revolutions led by Cavour, Garibaldi and the House of Savoy, the Kingdom of Italy was proclaimed, uniting most of the peninsula.",
    overview:
      "On 17 March 1861, Victor Emmanuel II of Sardinia became King of Italy. Venice joined in 1866 and Rome in 1870, completing unification.",
    context:
      "Italy had been divided into separate states for centuries, many under Austrian influence. The Risorgimento ('resurgence') movement, including Giuseppe Mazzini's republican nationalism, sought unity. The Kingdom of Sardinia, under prime minister Camillo Cavour, pursued it through diplomacy and alliance with France.",
    narrative:
      "In 1859, Sardinia and France defeated Austria, gaining Lombardy. Central Italian states voted to join Sardinia. In 1860, Giuseppe Garibaldi led about a thousand volunteers, the 'Redshirts', to conquer Sicily and Naples, then handed them to Victor Emmanuel.\n\nVenetia was gained after Austria's defeat by Prussia in 1866. When French troops left Rome during the Franco-Prussian War, Italian forces entered the city in 1870, and it became the capital. Sharp economic and social differences between north and south persisted.",
    causes: [
      "Nationalist movements of the Risorgimento",
      "Cavour's diplomacy and alliance with France",
      "Garibaldi's Expedition of the Thousand",
    ],
    consequences: [
      "Creation of a unified Italian state",
      "End of the Papal States' temporal power in 1870",
      "Lasting north–south divisions",
    ],
    timeline: [
      ["1859-06-24", "Battle of Solferino", "Franco-Sardinian victory over Austria."],
      ["1860-05-11", "Garibaldi lands in Sicily", "Expedition of the Thousand."],
      ["1861-03-17", "Kingdom of Italy proclaimed", "Victor Emmanuel II becomes king."],
      ["1870-09-20", "Capture of Rome", "Rome becomes the capital."],
    ],
    people: [
      ["giuseppe-garibaldi", "Military leader of the Expedition of the Thousand"],
      ["camillo-benso-count-of-cavour", "Prime minister who engineered unification"],
    ],
  },
  {
    slug: "american-civil-war",
    title: "American Civil War",
    date: "1861-04-12",
    end: "1865-05-26",
    period: "age-of-revolutions",
    category: "conflict",
    region: "north-america",
    location: "United States",
    places: ["fort-sumter", "gettysburg"],
    wiki: "American Civil War",
    keywords: ["Abraham Lincoln", "Confederacy", "slavery", "Gettysburg", "Union"],
    summary:
      "Eleven southern slave states seceded to form the Confederacy, leading to a war with the Union that ended slavery in the United States.",
    overview:
      "The war began with the Confederate attack on Fort Sumter on 12 April 1861 and effectively ended with Confederate surrenders in spring 1865. Around 620,000 to 750,000 soldiers died, making it the deadliest conflict in American history.",
    context:
      "Disputes over the expansion of slavery into western territories had intensified for decades. After Abraham Lincoln, who opposed slavery's expansion, won the 1860 election, southern states began to secede, declaring their commitment to preserving slavery.",
    narrative:
      "Early Confederate victories under generals such as Robert E. Lee were followed by Union successes in the west. Lincoln's Emancipation Proclamation in 1863 made ending slavery a war aim, and nearly 180,000 Black soldiers served in the Union Army. The Union victory at Gettysburg and the capture of Vicksburg in July 1863 were turning points.\n\nLee surrendered at Appomattox Court House on 9 April 1865. Lincoln was assassinated five days later. The Thirteenth Amendment abolished slavery in December 1865, followed by the Fourteenth and Fifteenth Amendments on citizenship and voting during Reconstruction.",
    causes: [
      "Conflict over slavery and its expansion",
      "Election of Abraham Lincoln in 1860",
      "Secession of southern states",
    ],
    consequences: [
      "Abolition of slavery by the Thirteenth Amendment",
      "Preservation of the Union",
      "Reconstruction and long struggles over civil rights",
    ],
    timeline: [
      ["1860-12-20", "South Carolina secedes", "First state to leave the Union."],
      ["1861-04-12", "Attack on Fort Sumter", "War begins."],
      ["1863-07-03", "Battle of Gettysburg ends", "Major Union victory."],
      ["1865-04-09", "Surrender at Appomattox", "Lee surrenders to Grant."],
      ["1865-12-06", "Thirteenth Amendment ratified", "Slavery abolished."],
    ],
    people: [
      ["abraham-lincoln", "President of the United States"],
      ["ulysses-s-grant", "Commanding general of the Union Army"],
      ["robert-e-lee", "Commander of the Confederate Army of Northern Virginia"],
      ["frederick-douglass", "Abolitionist leader"],
    ],
    relations: [["led_to", "march-on-washington", "The unfinished promise of emancipation drove the civil rights movement a century later."]],
  },
  {
    slug: "emancipation-proclamation",
    title: "Emancipation Proclamation",
    date: "1863-01-01",
    period: "age-of-revolutions",
    category: "society",
    region: "north-america",
    location: "Washington, D.C.",
    places: ["washington-dc"],
    wiki: "Emancipation Proclamation",
    keywords: ["Abraham Lincoln", "slavery", "freedom", "Civil War"],
    summary:
      "President Abraham Lincoln declared that all enslaved people in Confederate-held territory 'are, and henceforward shall be free'.",
    overview:
      "Issued on 1 January 1863 as a war measure, the proclamation changed the character of the Civil War and authorised the enlistment of Black soldiers. It did not apply to border states loyal to the Union.",
    context:
      "Enslaved people were already escaping to Union lines. After the Union's narrow victory at Antietam in September 1862, Lincoln issued a preliminary proclamation warning that emancipation would take effect in rebel states on 1 January.",
    narrative:
      "The proclamation relied on the president's war powers and applied only where the federal government had no immediate control, so it freed few people on the day it was issued. But as Union armies advanced, it brought freedom to millions. Around 180,000 Black men served in the Union Army and Navy.\n\nEnforcement reached Texas on 19 June 1865, a day now commemorated as Juneteenth. Permanent abolition throughout the United States came with the Thirteenth Amendment.",
    causes: [
      "Pressure from abolitionists and the actions of enslaved people",
      "Union military needs",
      "The Union victory at Antietam",
    ],
    consequences: [
      "Made the abolition of slavery a Union war aim",
      "Enabled the recruitment of Black soldiers",
      "Paved the way for the Thirteenth Amendment",
    ],
    timeline: [
      ["1862-09-22", "Preliminary proclamation", "After Antietam."],
      ["1863-01-01", "Proclamation takes effect", "In rebel-held areas."],
      ["1865-06-19", "Juneteenth", "Freedom announced in Galveston, Texas."],
    ],
    people: [["abraham-lincoln", "President who issued the proclamation"]],
    relations: [["part_of", "american-civil-war", "Issued as a war measure during the Civil War."]],
    sources: [
      { url: "https://www.archives.gov/exhibits/featured-documents/emancipation-proclamation", title: "The Emancipation Proclamation", publisher: "U.S. National Archives", type: "archive" },
    ],
  },
  {
    slug: "meiji-restoration",
    title: "Meiji Restoration",
    date: "1868-01-03",
    period: "age-of-revolutions",
    category: "politics",
    region: "east-asia",
    location: "Kyoto and Tokyo, Japan",
    places: ["kyoto", "tokyo"],
    wiki: "Meiji Restoration",
    keywords: ["Emperor Meiji", "Tokugawa shogunate", "modernisation", "samurai", "Boshin War"],
    summary:
      "Imperial rule was restored in Japan, ending over 250 years of the Tokugawa shogunate and launching rapid modernisation.",
    overview:
      "On 3 January 1868, a coup in Kyoto proclaimed the restoration of power to the young Emperor Meiji. Within decades Japan had industrialised, built a modern army and become a major power.",
    context:
      "The arrival of US Commodore Matthew Perry's 'black ships' in 1853 forced Japan to open to foreign trade. The shogunate's concessions provoked opposition, especially from the domains of Satsuma and Chōshū.",
    narrative:
      "After the proclamation, a civil war (the Boshin War) led to the shogunate's defeat by 1869. The capital moved from Kyoto to Edo, renamed Tokyo. The new government abolished the feudal domains, ended the privileges of the samurai class, introduced conscription and a national education system, and built railways and factories.\n\nThe Meiji Constitution of 1889 created a parliament under the emperor. Japan's victories over China (1894–1895) and Russia (1904–1905) made it a colonial power in East Asia.",
    causes: [
      "Forced opening of Japan by Western powers",
      "Weakness and loss of legitimacy of the shogunate",
      "Opposition from the Satsuma and Chōshū domains",
    ],
    consequences: [
      "Rapid modernisation and industrialisation",
      "Abolition of the samurai class and feudal domains",
      "Japan's emergence as an imperial power",
    ],
    timeline: [
      ["1853-07-08", "Perry's black ships arrive", "At Uraga."],
      ["1868-01-03", "Restoration proclaimed", "In Kyoto."],
      ["1871", "Domains abolished", "Replaced by prefectures."],
      ["1889-02-11", "Meiji Constitution", "Promulgated."],
    ],
    people: [["emperor-meiji", "Emperor of Japan from 1867 to 1912"]],
    relations: [["led_to", "russo-japanese-war", "Modernised Japan challenged Russia for power in East Asia."]],
  },
];
