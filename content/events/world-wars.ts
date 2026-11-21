import type { EventSeed } from "../types";

export const worldWarEvents: EventSeed[] = [
  {
    slug: "assassination-of-franz-ferdinand",
    title: "Assassination of Archduke Franz Ferdinand",
    alt: ["Sarajevo assassination"],
    date: "1914-06-28",
    period: "world-wars",
    category: "politics",
    region: "europe",
    location: "Sarajevo, Bosnia, Austria-Hungary",
    places: ["sarajevo"],
    wiki: "Assassination of Archduke Franz Ferdinand",
    keywords: ["Gavrilo Princip", "Black Hand", "July Crisis", "Austria-Hungary", "Serbia"],
    summary:
      "Gavrilo Princip, a Bosnian Serb nationalist, shot dead the heir to the Austro-Hungarian throne and his wife Sophie in Sarajevo, setting off the crisis that led to the First World War.",
    overview:
      "On 28 June 1914, after a failed bomb attack earlier in the day, Princip fired on the royal couple's car when it took a wrong turn. Austria-Hungary blamed Serbia, and within weeks Europe was at war.",
    context:
      "Austria-Hungary had annexed Bosnia and Herzegovina in 1908, angering Serbian nationalists who wanted South Slav unity. The secret society known as the Black Hand, linked to Serbian military officers, armed a group of young Bosnian conspirators.",
    narrative:
      "Six assassins lined the route of the motorcade. Nedeljko Čabrinović threw a bomb that bounced off the archduke's car and injured others. Later, the driver mistakenly turned into a side street near Schiller's delicatessen, where Princip was standing. He shot Sophie and Franz Ferdinand, who both died within minutes.\n\nAustria-Hungary, with German backing, issued a harsh ultimatum to Serbia on 23 July. Serbia accepted most demands but not all, and Austria-Hungary declared war on 28 July. Alliance commitments and mobilisation plans drew in Russia, Germany, France and Britain within days.",
    causes: [
      "Austro-Hungarian annexation of Bosnia",
      "South Slav and Serbian nationalism",
      "The Black Hand's support for the conspirators",
    ],
    consequences: [
      "The July Crisis and Austria-Hungary's ultimatum to Serbia",
      "Outbreak of the First World War",
    ],
    timeline: [
      ["1908-10-06", "Bosnian annexation", "Austria-Hungary annexes Bosnia."],
      ["1914-06-28", "Assassination", "In Sarajevo."],
      ["1914-07-23", "Ultimatum to Serbia", "Issued by Austria-Hungary."],
      ["1914-07-28", "Austria-Hungary declares war", "The war begins."],
    ],
    people: [
      ["archduke-franz-ferdinand", "Heir to the Austro-Hungarian throne"],
      ["gavrilo-princip", "Assassin"],
    ],
    relations: [["led_to", "world-war-i", "The July Crisis following the assassination escalated into general war."]],
  },
  {
    slug: "world-war-i",
    title: "First World War",
    alt: ["World War I", "The Great War", "WWI"],
    date: "1914-07-28",
    end: "1918-11-11",
    period: "world-wars",
    category: "conflict",
    region: "global",
    location: "Europe, the Middle East, Africa and the oceans",
    places: ["western-front", "verdun"],
    wiki: "World War I",
    featured: true,
    keywords: ["trench warfare", "Western Front", "Allies", "Central Powers", "Armistice"],
    summary:
      "A global war between the Allies and the Central Powers killed around 9 million soldiers and millions of civilians, toppled four empires and redrew the map of Europe.",
    overview:
      "Fought from July 1914 to the Armistice of 11 November 1918, the war introduced industrialised killing on a new scale — machine guns, artillery, poison gas, tanks and aircraft. It ended with the defeat of Germany, Austria-Hungary, the Ottoman Empire and Bulgaria.",
    context:
      "Europe was divided into rival alliance systems: the Triple Entente of France, Russia and Britain, and the Triple Alliance of Germany, Austria-Hungary and Italy. Imperial rivalry, an arms race and nationalist tensions in the Balkans had raised the risk of a major war.",
    narrative:
      "Germany's attempt to defeat France quickly through Belgium was halted at the Marne in September 1914, and the Western Front settled into trench warfare. Battles such as Verdun and the Somme in 1916 caused hundreds of thousands of casualties for little territorial change. On the Eastern Front, Russia suffered huge losses, and revolution in 1917 took it out of the war.\n\nThe United States entered in April 1917 after German unrestricted submarine warfare. Germany's spring offensive of 1918 failed, and the Allied Hundred Days Offensive forced it to seek an armistice. The Ottoman, Austro-Hungarian, Russian and German empires all collapsed.",
    causes: [
      "Alliance systems and rapid mobilisation plans",
      "Imperial and economic rivalries",
      "Nationalism, especially in the Balkans",
      "The July Crisis following the Sarajevo assassination",
    ],
    consequences: [
      "Around 9 million military deaths and millions of civilian deaths",
      "Collapse of the German, Austro-Hungarian, Russian and Ottoman empires",
      "The Treaty of Versailles and the League of Nations",
      "Social and political upheaval across Europe",
    ],
    timeline: [
      ["1914-07-28", "War begins", "Austria-Hungary declares war on Serbia."],
      ["1914-09-06", "First Battle of the Marne", "German advance halted."],
      ["1916-07-01", "Battle of the Somme begins", "Heaviest single-day loss in British military history."],
      ["1917-04-06", "United States enters the war", "Declares war on Germany."],
      ["1918-11-11", "Armistice", "Fighting ends on the Western Front."],
    ],
    people: [
      ["wilhelm-ii", "German Emperor"],
      ["georges-clemenceau", "French prime minister from 1917"],
      ["woodrow-wilson", "US president"],
    ],
    relations: [
      ["led_to", "treaty-of-versailles", "The peace settlement imposed on Germany."],
      ["contributed_to", "october-revolution", "War losses and hardship destroyed support for the tsarist regime."],
      ["contributed_to", "spanish-flu", "Troop movements and crowded camps helped spread the pandemic."],
    ],
    sources: [
      { url: "https://history.state.gov/milestones/1914-1920/wwi", title: "American Entry into World War I, 1917", publisher: "Office of the Historian, U.S. Department of State", type: "government" },
    ],
  },
  {
    slug: "christmas-truce",
    title: "Christmas truce of 1914",
    date: "1914-12-24",
    end: "1914-12-26",
    period: "world-wars",
    category: "society",
    region: "europe",
    location: "Western Front, Belgium and France",
    places: ["western-front"],
    wiki: "Christmas truce",
    discovery: true,
    keywords: ["no man's land", "football", "soldiers", "carols", "ceasefire"],
    summary:
      "In the first winter of the war, soldiers along parts of the Western Front stopped fighting, met in no man's land, exchanged gifts and buried their dead.",
    overview:
      "The unofficial ceasefires around Christmas 1914 were widespread but not universal, mostly between British and German troops in Flanders. Commanders on both sides moved to prevent repeats.",
    context:
      "By December 1914, hopes of a short war had faded. Opposing trenches were sometimes only a short distance apart, and soldiers occasionally called out to one another.",
    narrative:
      "On Christmas Eve, German soldiers placed candles and small trees on their parapets and sang carols. British troops responded, and on Christmas Day men from both sides met to shake hands, exchange food, cigarettes and souvenirs, and bury their dead. Some letters home describe impromptu football games, though accounts vary.\n\nThe truces were not sanctioned by commanders, who later issued orders forbidding fraternisation. As the war grew more bitter, similar truces became rare. The event has come to symbolise shared humanity amid industrial war.",
    causes: [
      "Proximity of trenches and shared hardship",
      "Christmas traditions common to both sides",
      "Lull in large offensives in winter",
    ],
    consequences: [
      "Temporary ceasefires and burial of the dead",
      "Orders against fraternisation",
      "Enduring symbol of humanity in war",
    ],
    timeline: [
      ["1914-12-24", "Christmas Eve", "Carols and candles in the trenches."],
      ["1914-12-25", "Christmas Day meetings", "Soldiers meet in no man's land."],
    ],
    relations: [["occurred_during", "world-war-i", "Took place in the first winter of the war."]],
  },
  {
    slug: "battle-of-the-somme",
    title: "Battle of the Somme",
    date: "1916-07-01",
    end: "1916-11-18",
    period: "world-wars",
    category: "conflict",
    region: "europe",
    location: "Somme river, France",
    places: ["somme"],
    wiki: "Battle of the Somme",
    keywords: ["Western Front", "attrition", "Douglas Haig", "first day", "tanks"],
    summary:
      "A British and French offensive on the Somme became one of the bloodiest battles in history, with more than a million casualties.",
    overview:
      "On the first day, 1 July 1916, the British Army suffered over 57,000 casualties, including more than 19,000 killed — its worst single day. The Allies advanced only about 10 kilometres in four and a half months.",
    context:
      "The offensive was planned to break through German lines and relieve pressure on the French at Verdun, where a German offensive had begun in February 1916.",
    narrative:
      "A week-long artillery bombardment failed to destroy German barbed wire and deep dugouts. When British infantry advanced, they were cut down by machine-gun fire. The battle continued as a grinding war of attrition. Tanks were used for the first time in September 1916 at Flers-Courcelette.\n\nThe battle ended in November in rain and mud. Historians continue to debate whether it was a pointless slaughter or a necessary step that wore down the German army. It became a defining memory of the war in Britain and the Commonwealth.",
    causes: [
      "Allied strategy for a joint breakthrough on the Western Front",
      "Need to relieve the French at Verdun",
    ],
    consequences: [
      "Over a million casualties on all sides",
      "First use of tanks in warfare",
      "Lasting place in national memory, especially in Britain",
    ],
    timeline: [
      ["1916-02-21", "Battle of Verdun begins", "German offensive."],
      ["1916-07-01", "First day of the Somme", "57,000 British casualties."],
      ["1916-09-15", "First use of tanks", "At Flers-Courcelette."],
      ["1916-11-18", "Battle ends", "Little ground gained."],
    ],
    people: [["douglas-haig", "British commander-in-chief"]],
    relations: [["part_of", "world-war-i", "A major offensive on the Western Front."]],
  },
  {
    slug: "october-revolution",
    title: "October Revolution",
    alt: ["Russian Revolution", "Bolshevik Revolution"],
    date: "1917-11-07",
    period: "world-wars",
    category: "politics",
    region: "europe",
    location: "Petrograd (St Petersburg), Russia",
    places: ["saint-petersburg"],
    wiki: "October Revolution",
    keywords: ["Bolsheviks", "Lenin", "Winter Palace", "Soviet Union", "communism"],
    dateNote: "25 October 1917 in the Julian calendar then used in Russia; 7 November in the Gregorian calendar.",
    summary:
      "The Bolsheviks, led by Vladimir Lenin, seized power in Petrograd, overthrowing the Provisional Government and establishing the world's first communist state.",
    overview:
      "On the night of 25–26 October (7–8 November) 1917, Bolshevik Red Guards took key buildings and stormed the Winter Palace. A civil war followed, and in 1922 the Soviet Union was founded.",
    context:
      "The February Revolution of 1917 had forced Tsar Nicholas II to abdicate. The Provisional Government that replaced him kept Russia in the First World War amid food shortages and military defeat. The Bolsheviks promised 'peace, land and bread'.",
    narrative:
      "Under the direction of the Military Revolutionary Committee, led by Leon Trotsky, Bolshevik forces occupied bridges, stations and telegraph offices. The Winter Palace, seat of the Provisional Government, was taken in the early hours of 26 October with relatively little bloodshed. The Second Congress of Soviets approved the new government led by Lenin.\n\nThe Bolsheviks dissolved the elected Constituent Assembly, signed the Treaty of Brest-Litovsk with Germany in March 1918, and fought a brutal civil war against White forces until 1922. The tsar and his family were executed in July 1918.",
    causes: [
      "Russian losses and hardship in the First World War",
      "Weakness of the Provisional Government",
      "Bolshevik organisation and popular slogans",
    ],
    consequences: [
      "Establishment of Soviet rule",
      "Russian Civil War",
      "Founding of the USSR in 1922 and global spread of communist movements",
    ],
    timeline: [
      ["1917-03-15", "Nicholas II abdicates", "February Revolution (Julian 2 March)."],
      ["1917-04-16", "Lenin returns to Russia", "April Theses."],
      ["1917-11-07", "Bolsheviks seize power", "Julian 25 October."],
      ["1918-03-03", "Treaty of Brest-Litovsk", "Russia leaves the war."],
      ["1922-12-30", "USSR founded", "Union treaty signed."],
    ],
    people: [
      ["vladimir-lenin", "Leader of the Bolsheviks"],
      ["leon-trotsky", "Organiser of the seizure of power"],
      ["nicholas-ii-of-russia", "Last tsar, who abdicated earlier in 1917"],
    ],
    relations: [["led_to", "cold-war", "The ideological rivalry between Soviet communism and Western capitalism began here."]],
  },
  {
    slug: "halifax-explosion",
    title: "Halifax Explosion",
    date: "1917-12-06",
    period: "world-wars",
    category: "disaster",
    region: "north-america",
    location: "Halifax, Nova Scotia, Canada",
    places: ["halifax-nova-scotia"],
    wiki: "Halifax Explosion",
    discovery: true,
    keywords: ["SS Mont-Blanc", "munitions ship", "Canada", "disaster"],
    summary:
      "A French munitions ship collided with another vessel in Halifax Harbour and exploded, killing about 2,000 people in one of the largest human-made explosions before the atomic bomb.",
    overview:
      "The SS Mont-Blanc, loaded with explosives for the war in Europe, collided with the Norwegian ship SS Imo on the morning of 6 December 1917. The blast devastated the Richmond district of Halifax.",
    context:
      "Halifax was a key port for convoys carrying troops and supplies across the Atlantic during the First World War.",
    narrative:
      "After the collision, the Mont-Blanc caught fire and drifted toward the shore as crowds gathered to watch. About 20 minutes later it exploded, flattening buildings, causing a tsunami in the harbour and shattering windows for kilometres. Around 2,000 people were killed and 9,000 injured, many by flying glass.\n\nA blizzard the next day hampered rescue efforts. Aid arrived from across Canada and the United States, particularly Boston; Nova Scotia still sends Boston a Christmas tree each year in thanks.",
    causes: [
      "Collision between the Mont-Blanc and the Imo",
      "Wartime shipment of explosives through a busy harbour",
    ],
    consequences: [
      "About 2,000 deaths and widespread destruction",
      "Improvements in disaster response and eye care",
      "Lasting friendship between Halifax and Boston",
    ],
    timeline: [
      ["1917-12-06", "Collision and explosion", "At about 9:04 a.m."],
      ["1917-12-07", "Blizzard", "Hampers rescue."],
    ],
    relations: [["occurred_during", "world-war-i", "Caused by a wartime munitions shipment."]],
  },
  {
    slug: "spanish-flu",
    title: "1918 influenza pandemic",
    alt: ["Spanish flu", "Great Influenza"],
    date: "1918",
    end: "1920",
    period: "world-wars",
    category: "disaster",
    region: "global",
    location: "Worldwide",
    wiki: "Spanish flu",
    keywords: ["H1N1", "pandemic", "influenza", "public health"],
    summary:
      "An influenza pandemic infected about a third of the world's population and killed an estimated 25 to 50 million people or more.",
    overview:
      "The pandemic came in several waves from 1918 to 1920. Unusually, it killed many young, healthy adults. It was called 'Spanish' flu because neutral Spain's uncensored press reported on it widely, not because it originated there.",
    context:
      "The First World War had moved millions of soldiers and workers around the world in crowded conditions. Wartime censorship in combatant countries suppressed news of the disease.",
    narrative:
      "The most lethal wave struck in autumn 1918. Hospitals were overwhelmed, and cities closed schools, theatres and churches; some required face masks. Death rates varied widely, with especially high mortality in India, Samoa and parts of Africa.\n\nThe virus was an H1N1 influenza A strain, reconstructed by scientists in 2005 from preserved tissue samples. The pandemic shaped public health systems and remains a reference point for pandemic planning.",
    causes: [
      "A novel H1N1 influenza virus",
      "Wartime troop movements and crowding",
      "Censorship that delayed public health responses",
    ],
    consequences: [
      "Tens of millions of deaths worldwide",
      "Development of public health institutions",
      "A model for later pandemic preparedness",
    ],
    timeline: [
      ["1918-03", "First recorded wave", "Including outbreaks in US army camps."],
      ["1918-10", "Deadliest wave", "Autumn 1918."],
      ["2005", "Virus reconstructed", "From preserved samples."],
    ],
    relations: [["related_to", "covid-19-pandemic", "The 1918 pandemic was the chief historical comparison for COVID-19."]],
  },
  {
    slug: "treaty-of-versailles",
    title: "Treaty of Versailles",
    alt: ["Paris Peace Conference"],
    date: "1919-06-28",
    period: "world-wars",
    category: "politics",
    region: "europe",
    location: "Hall of Mirrors, Palace of Versailles, France",
    places: ["versailles"],
    wiki: "Treaty of Versailles",
    featured: false,
    keywords: ["reparations", "war guilt clause", "League of Nations", "Paris Peace Conference", "Big Four"],
    summary:
      "The peace treaty between the Allies and Germany assigned Germany responsibility for the war, imposed reparations and territorial losses, and created the League of Nations.",
    overview:
      "Signed on 28 June 1919 — five years to the day after the Sarajevo assassination — the treaty was negotiated without German participation. Article 231, the 'war guilt clause', became a focus of German resentment.",
    context:
      "At the Paris Peace Conference, the 'Big Four' — Woodrow Wilson, Georges Clemenceau, David Lloyd George and Vittorio Orlando — sought different aims: Wilson a new order based on his Fourteen Points, Clemenceau security against Germany, and Lloyd George a balance between punishment and stability.",
    narrative:
      "Germany lost Alsace-Lorraine to France, territory to the new Poland, and all its colonies. The Rhineland was demilitarised, and the German army was limited to 100,000 men. Reparations were later set at 132 billion gold marks in 1921. The Covenant of the League of Nations was included in the treaty, but the US Senate refused to ratify it.\n\nThe economist John Maynard Keynes criticised the terms as economically ruinous. Many Germans viewed the treaty as a 'Diktat' and blamed the democratic Weimar Republic for accepting it — grievances later exploited by Hitler. Historians debate how far the treaty itself caused the Second World War, as opposed to the failure to enforce it and the Great Depression.",
    causes: [
      "Allied victory in the First World War",
      "French demand for security and compensation",
      "Wilson's vision of a new international order",
    ],
    consequences: [
      "German territorial losses, disarmament and reparations",
      "Founding of the League of Nations",
      "Widespread German resentment exploited by nationalist movements",
    ],
    timeline: [
      ["1919-01-18", "Paris Peace Conference opens", "Without the defeated powers."],
      ["1919-06-28", "Treaty signed", "In the Hall of Mirrors."],
      ["1920-01-10", "Treaty in force", "League of Nations established."],
      ["1921-05", "Reparations fixed", "London Schedule of Payments."],
    ],
    people: [
      ["woodrow-wilson", "US president and architect of the League of Nations"],
      ["georges-clemenceau", "French prime minister"],
      ["david-lloyd-george", "British prime minister"],
    ],
    relations: [["contributed_to", "hitler-rise-to-power", "Resentment of the treaty fuelled nationalist movements in Germany."]],
    sources: [
      { url: "https://history.state.gov/milestones/1914-1920/paris-peace", title: "The Paris Peace Conference and the Treaty of Versailles", publisher: "Office of the Historian, U.S. Department of State", type: "government" },
    ],
  },
  {
    slug: "discovery-of-tutankhamun",
    title: "Discovery of Tutankhamun's tomb",
    alt: ["Discovery of the tomb of Tutankhamun", "KV62"],
    date: "1922-11-04",
    period: "world-wars",
    category: "archaeology",
    region: "middle-east",
    location: "Valley of the Kings, Luxor, Egypt",
    places: ["valley-of-the-kings"],
    civ: ["ancient-egypt"],
    wiki: "Discovery of the tomb of Tutankhamun",
    discovery: true,
    keywords: ["Howard Carter", "Lord Carnarvon", "KV62", "Egyptology", "golden mask"],
    summary:
      "Archaeologist Howard Carter's team discovered the nearly intact tomb of the young pharaoh Tutankhamun in the Valley of the Kings.",
    overview:
      "The first step of the tomb's staircase was found on 4 November 1922. The tomb, KV62, contained more than 5,000 objects, including the famous gold funerary mask.",
    context:
      "Tutankhamun ruled for about a decade in the fourteenth century BCE, after the religious upheavals of Akhenaten's reign. Most royal tombs had been robbed in antiquity. Carter had searched the valley for years with funding from Lord Carnarvon.",
    narrative:
      "When Carter first looked through a hole into the antechamber on 26 November, Carnarvon asked whether he could see anything; Carter is reported to have replied, 'Yes, wonderful things.' Clearing and recording the tomb took about a decade, with photographs by Harry Burton documenting every stage.\n\nThe discovery caused a worldwide sensation and 'Tutmania'. Lord Carnarvon's death in 1923 fuelled the legend of a 'curse'. The finds are now housed in the Grand Egyptian Museum near Giza.",
    causes: [
      "Years of systematic excavation by Howard Carter",
      "Funding by Lord Carnarvon",
      "The tomb's concealment under later debris",
    ],
    consequences: [
      "Unprecedented insight into royal burial in New Kingdom Egypt",
      "Global popular fascination with ancient Egypt",
      "Debates over the ownership of antiquities, leading Egypt to retain the finds",
    ],
    timeline: [
      ["~-1323", "Death of Tutankhamun", "Buried in the Valley of the Kings."],
      ["1922-11-04", "Staircase discovered", "Under workmen's huts."],
      ["1922-11-26", "Antechamber opened", "'Wonderful things.'"],
      ["1925-10-28", "Gold mask revealed", "Inner coffin opened."],
    ],
    people: [
      ["howard-carter", "Archaeologist who found the tomb"],
      ["tutankhamun", "Pharaoh buried in the tomb"],
    ],
  },
  {
    slug: "discovery-of-penicillin",
    title: "Discovery of penicillin",
    date: "1928-09",
    period: "world-wars",
    category: "science",
    region: "europe",
    location: "St Mary's Hospital, London",
    places: ["london"],
    wiki: "Discovery of penicillin",
    keywords: ["Alexander Fleming", "antibiotics", "Florey", "Chain", "Penicillium"],
    summary:
      "Alexander Fleming noticed that a mould contaminating a bacterial culture had killed the surrounding bacteria — the discovery of penicillin, the first antibiotic to be widely used.",
    overview:
      "Fleming published his findings in 1929, but penicillin was not developed into a practical drug until Howard Florey, Ernst Chain and colleagues at Oxford purified it in 1940. Mass production during the Second World War saved countless lives.",
    context:
      "Bacterial infections were a leading cause of death, and wounds and surgery often proved fatal. Earlier antimicrobial drugs, such as Salvarsan and the sulfonamides, had limited range.",
    narrative:
      "Returning from holiday in September 1928, Fleming found that a Penicillium mould had grown on a Staphylococcus culture and created a bacteria-free zone. He named the active substance penicillin but struggled to isolate it.\n\nAt Oxford, Florey and Chain's team, including Norman Heatley, produced enough penicillin to test in 1940–1941. American companies scaled up production, and by D-Day in 1944 there was enough for Allied troops. Fleming, Florey and Chain shared the 1945 Nobel Prize in Physiology or Medicine. Fleming also warned of antibiotic resistance.",
    causes: [
      "Fleming's research into antibacterial substances",
      "Accidental contamination of a culture plate",
      "Later wartime demand for treatments for infection",
    ],
    consequences: [
      "Beginning of the antibiotic era",
      "Dramatic reductions in deaths from bacterial infection",
      "Emerging challenge of antibiotic resistance",
    ],
    timeline: [
      ["1928-09", "Fleming observes the mould", "At St Mary's Hospital."],
      ["1929", "Findings published", "British Journal of Experimental Pathology."],
      ["1941-02-12", "First patient treated in Oxford", "Albert Alexander."],
      ["1945", "Nobel Prize", "Fleming, Florey and Chain."],
    ],
    people: [
      ["alexander-fleming", "Bacteriologist who discovered penicillin"],
      ["howard-florey", "Pathologist who led its development as a drug"],
    ],
    sources: [
      { url: "https://www.nobelprize.org/prizes/medicine/1945/summary/", title: "The Nobel Prize in Physiology or Medicine 1945", publisher: "Nobel Prize Outreach", type: "institution" },
    ],
  },
  {
    slug: "wall-street-crash",
    title: "Wall Street Crash of 1929",
    alt: ["Black Tuesday", "Stock market crash of 1929"],
    date: "1929-10-24",
    end: "1929-10-29",
    period: "world-wars",
    category: "economy",
    region: "north-america",
    location: "New York Stock Exchange, New York City",
    places: ["new-york-city"],
    wiki: "Wall Street crash of 1929",
    keywords: ["Black Thursday", "Black Tuesday", "stock market", "speculation", "Great Depression"],
    summary:
      "A collapse of share prices on the New York Stock Exchange wiped out billions of dollars and helped trigger the Great Depression.",
    overview:
      "After panic selling on 'Black Thursday', 24 October 1929, the market fell again on 'Black Monday' and 'Black Tuesday', 28–29 October. The Dow Jones index did not regain its 1929 peak until 1954.",
    context:
      "The 1920s saw rapid economic growth in the United States and a speculative boom in shares, often bought on credit ('on margin'). Industrial production and consumer demand were slowing before the crash.",
    narrative:
      "As prices fell, investors who had borrowed to buy shares were forced to sell, accelerating the decline. Bankers tried to support the market, but on 29 October record volumes of shares were traded as prices collapsed.\n\nThe crash destroyed wealth and confidence, contributing to bank failures, falling investment and mass unemployment. Economists debate how much the crash itself caused the Depression compared with banking panics, monetary policy and the gold standard.",
    causes: [
      "Speculative bubble fuelled by margin lending",
      "Slowing industrial production",
      "Overvaluation of shares",
    ],
    consequences: [
      "Massive loss of wealth and confidence",
      "Contributed to the Great Depression",
      "New financial regulation, including the SEC in 1934",
    ],
    timeline: [
      ["1929-09-03", "Dow Jones peaks", "At 381."],
      ["1929-10-24", "Black Thursday", "Panic selling."],
      ["1929-10-29", "Black Tuesday", "Record trading as prices collapse."],
      ["1932-07-08", "Market bottoms", "Dow at 41."],
    ],
    relations: [["led_to", "great-depression", "The crash was one of the triggers of the global depression."]],
  },
  {
    slug: "great-depression",
    title: "The Great Depression",
    date: "1929",
    end: "1939",
    period: "world-wars",
    category: "economy",
    region: "global",
    location: "Worldwide",
    places: ["new-york-city"],
    wiki: "Great Depression",
    keywords: ["unemployment", "New Deal", "Dust Bowl", "gold standard", "bank failures"],
    summary:
      "The worst economic downturn of the industrial era caused mass unemployment and poverty worldwide and contributed to the rise of extremist politics.",
    overview:
      "Beginning in the United States in 1929, the Depression spread around the world. World trade fell by more than half, and US unemployment reached about 25 per cent in 1933.",
    context:
      "The international economy was fragile after the First World War, burdened by war debts, reparations and the restored gold standard. Agricultural prices had been falling through the 1920s.",
    narrative:
      "Banking panics in the United States wiped out savings, and thousands of banks failed. Countries raised tariffs, such as the US Smoot–Hawley Tariff of 1930, deepening the collapse of trade. In Germany, unemployment reached about six million.\n\nGovernments responded differently. In the United States, Franklin D. Roosevelt's New Deal created public works, social security and financial reforms. Countries that left the gold standard earlier generally recovered faster. Economic desperation helped bring the Nazis to power in Germany.",
    causes: [
      "The Wall Street Crash and banking failures",
      "Fragile post-war international finance and the gold standard",
      "Protectionist trade policies",
    ],
    consequences: [
      "Mass unemployment and poverty worldwide",
      "The New Deal and new roles for government in the economy",
      "Political radicalisation, including the rise of Nazism",
    ],
    timeline: [
      ["1929-10-29", "Black Tuesday", "Stock market crash."],
      ["1930-06-17", "Smoot–Hawley Tariff", "US raises tariffs."],
      ["1931-09-21", "Britain leaves the gold standard", "Sterling floated."],
      ["1933-03-04", "Roosevelt inaugurated", "The New Deal begins."],
    ],
    people: [
      ["franklin-d-roosevelt", "US president who introduced the New Deal"],
      ["john-maynard-keynes", "Economist whose theories responded to the Depression"],
    ],
    relations: [["contributed_to", "hitler-rise-to-power", "Economic collapse greatly increased support for the Nazi party."]],
  },
  {
    slug: "salt-march",
    title: "Salt March",
    alt: ["Dandi March", "Salt Satyagraha"],
    date: "1930-03-12",
    end: "1930-04-06",
    period: "world-wars",
    category: "society",
    region: "south-asia",
    location: "Sabarmati Ashram to Dandi, Gujarat, India",
    places: ["dandi"],
    wiki: "Salt March",
    keywords: ["Mahatma Gandhi", "civil disobedience", "nonviolence", "satyagraha", "Indian independence"],
    summary:
      "Mahatma Gandhi led a 24-day, 385-kilometre march to the sea to make salt in defiance of British law, launching a mass campaign of civil disobedience.",
    overview:
      "Gandhi and 78 followers set out from Sabarmati Ashram on 12 March 1930 and reached Dandi on 5 April. On 6 April he picked up a lump of natural salt, breaking the British salt monopoly.",
    context:
      "The British Raj taxed salt and forbade Indians from producing or selling it, a burden on the poorest. The Indian National Congress had declared the goal of complete independence (Purna Swaraj) in January 1930.",
    narrative:
      "Thousands joined the march along the way, and newspapers around the world reported on it. Across India, people made salt illegally, boycotted British goods and refused to pay taxes. Over 60,000 people were arrested, including Gandhi.\n\nAt the Dharasana Salt Works in May, peaceful protesters were beaten by police, an event reported by the American journalist Webb Miller. The campaign led to the Gandhi–Irwin Pact of 1931 and established nonviolent civil disobedience as a powerful political tool, influencing later movements, including the American civil rights movement.",
    causes: [
      "British monopoly and tax on salt",
      "Congress's declaration of complete independence as its goal",
      "Gandhi's philosophy of satyagraha (truth-force)",
    ],
    consequences: [
      "Mass civil disobedience across India",
      "International attention to the independence movement",
      "Model for nonviolent protest worldwide",
    ],
    timeline: [
      ["1930-01-26", "Purna Swaraj declared", "Complete independence as the goal."],
      ["1930-03-12", "March begins", "From Sabarmati Ashram."],
      ["1930-04-06", "Salt law broken", "At Dandi."],
      ["1931-03-05", "Gandhi–Irwin Pact", "Prisoners released."],
    ],
    people: [["mahatma-gandhi", "Leader of the march"]],
    relations: [
      ["contributed_to", "partition-of-india", "The independence movement culminated in independence — and partition — in 1947."],
      ["related_to", "march-on-washington", "Gandhi's methods inspired the American civil rights movement."],
    ],
  },
  {
    slug: "hitler-rise-to-power",
    title: "Hitler appointed Chancellor of Germany",
    alt: ["Adolf Hitler's rise to power", "Machtergreifung", "Nazi seizure of power"],
    date: "1933-01-30",
    period: "world-wars",
    category: "politics",
    region: "europe",
    location: "Berlin, Germany",
    places: ["berlin"],
    wiki: "Adolf Hitler's rise to power",
    keywords: ["Nazi Party", "Weimar Republic", "Enabling Act", "Reichstag fire", "dictatorship"],
    summary:
      "President Paul von Hindenburg appointed Adolf Hitler, leader of the Nazi Party, as Chancellor. Within months, the Nazis had dismantled democracy and established a dictatorship.",
    overview:
      "Conservative politicians believed they could control Hitler in a coalition cabinet. After the Reichstag fire in February 1933 and the Enabling Act in March, Hitler ruled by decree.",
    context:
      "The Weimar Republic was destabilised by the humiliation of Versailles, the hyperinflation of 1923 and above all the Great Depression. The Nazi Party became the largest in the Reichstag in July 1932, exploiting fear of communism and promising national revival.",
    narrative:
      "Hitler did not win power through a majority vote; the Nazis' highest score in a free election was 37 per cent. He was appointed through backroom negotiations led by Franz von Papen. After the Reichstag building burned on 27 February 1933, an emergency decree suspended civil liberties. The Enabling Act of 23 March gave Hitler's government power to make laws without parliament.\n\nBy July 1933 all other parties were banned. Political opponents were sent to concentration camps such as Dachau, and Jewish Germans faced increasing persecution. After Hindenburg's death in August 1934, Hitler combined the offices of chancellor and president as Führer.",
    causes: [
      "Economic devastation of the Great Depression",
      "Resentment of the Treaty of Versailles",
      "Weakness of Weimar democracy and fear of communism",
      "Conservative elites' miscalculation that they could control Hitler",
    ],
    consequences: [
      "Destruction of German democracy",
      "Persecution of Jews and political opponents",
      "German rearmament and expansion leading to war",
    ],
    timeline: [
      ["1932-07-31", "Nazis become the largest party", "37 per cent of the vote."],
      ["1933-01-30", "Hitler appointed Chancellor", "By Hindenburg."],
      ["1933-02-27", "Reichstag fire", "Emergency decree follows."],
      ["1933-03-23", "Enabling Act", "Dictatorship established."],
      ["1934-08-02", "Death of Hindenburg", "Hitler becomes Führer."],
    ],
    people: [
      ["adolf-hitler", "Leader of the Nazi Party"],
      ["paul-von-hindenburg", "German president who appointed Hitler"],
    ],
    relations: [
      ["led_to", "the-holocaust", "Nazi ideology and power made genocide possible."],
      ["led_to", "invasion-of-poland", "Hitler's expansionist aims led to war in 1939."],
    ],
    sources: [
      { url: "https://encyclopedia.ushmm.org/content/en/article/the-nazi-rise-to-power", title: "The Nazi Rise to Power", publisher: "United States Holocaust Memorial Museum", type: "museum" },
    ],
  },
  {
    slug: "invasion-of-poland",
    title: "German invasion of Poland",
    alt: ["Invasion of Poland", "September Campaign"],
    date: "1939-09-01",
    end: "1939-10-06",
    period: "world-wars",
    category: "conflict",
    region: "europe",
    location: "Poland",
    places: ["warsaw"],
    wiki: "Invasion of Poland",
    keywords: ["Blitzkrieg", "Molotov–Ribbentrop Pact", "Westerplatte", "Soviet invasion"],
    summary:
      "Germany invaded Poland on 1 September 1939, prompting Britain and France to declare war. The Soviet Union invaded from the east on 17 September.",
    overview:
      "Poland was overwhelmed within five weeks and divided between Germany and the Soviet Union under the secret protocol of the Molotov–Ribbentrop Pact. The invasion is generally taken as the start of the Second World War in Europe.",
    context:
      "Hitler had remilitarised the Rhineland, annexed Austria and dismembered Czechoslovakia while Britain and France pursued appeasement. After the occupation of Prague in March 1939, Britain and France guaranteed Poland's independence. In August, Germany and the USSR signed a non-aggression pact.",
    narrative:
      "German forces attacked from the west, north and south, using coordinated tanks, aircraft and infantry. The Polish garrison at Westerplatte in Danzig held out for a week. Warsaw surrendered on 28 September after heavy bombing.\n\nBoth occupiers carried out mass repression. German forces murdered Polish elites and Jews, and the Soviets deported hundreds of thousands and later massacred Polish officers at Katyn in 1940. The Polish government went into exile, and Polish forces fought on with the Allies.",
    causes: [
      "Hitler's goal of territorial expansion in the East",
      "Failure of appeasement",
      "The Molotov–Ribbentrop Pact",
    ],
    consequences: [
      "British and French declarations of war on 3 September",
      "Partition and brutal occupation of Poland",
      "Start of the Second World War in Europe",
    ],
    timeline: [
      ["1939-08-23", "Molotov–Ribbentrop Pact", "Germany and USSR agree to divide Eastern Europe."],
      ["1939-09-01", "Germany invades", "Attack on Westerplatte."],
      ["1939-09-03", "Britain and France declare war", "War in Europe begins."],
      ["1939-09-17", "Soviet invasion", "From the east."],
    ],
    people: [["adolf-hitler", "German dictator who ordered the invasion"]],
    relations: [["led_to", "world-war-ii", "The invasion triggered Britain and France's declarations of war."]],
  },
  {
    slug: "world-war-ii",
    title: "Second World War",
    alt: ["World War II", "WWII", "World War 2"],
    date: "1939-09-01",
    end: "1945-09-02",
    period: "world-wars",
    category: "conflict",
    region: "global",
    location: "Europe, Asia, Africa, the Pacific and the Atlantic",
    places: ["warsaw", "stalingrad", "pearl-harbor"],
    wiki: "World War II",
    featured: true,
    keywords: ["Allies", "Axis", "Nazi Germany", "Imperial Japan", "Holocaust", "atomic bomb"],
    summary:
      "The deadliest conflict in human history, fought between the Allies and the Axis powers, killed an estimated 70 to 85 million people and reshaped the world order.",
    overview:
      "The war began in Europe with Germany's invasion of Poland and ended with Japan's formal surrender on 2 September 1945. It included the Holocaust, the first use of nuclear weapons and the deaths of more civilians than soldiers.",
    context:
      "The unresolved tensions of the First World War, the Great Depression and the rise of aggressive regimes in Germany, Italy and Japan undermined the international order. Japan had invaded Manchuria in 1931 and China in 1937.",
    narrative:
      "Germany conquered much of Europe between 1939 and 1941, including France in 1940, but failed to defeat Britain. In June 1941 it invaded the Soviet Union, opening the war's largest and bloodiest theatre. Japan's attack on Pearl Harbor in December 1941 brought the United States into the war.\n\nThe tide turned in 1942–1943 at Midway, El Alamein and Stalingrad. Allied landings in Italy and Normandy and the Soviet advance from the east led to Germany's surrender on 8 May 1945. After the atomic bombings of Hiroshima and Nagasaki and the Soviet declaration of war, Japan surrendered. The United Nations was founded, and the United States and Soviet Union emerged as rival superpowers.",
    causes: [
      "Expansionist ideologies of Nazi Germany, Fascist Italy and Imperial Japan",
      "Legacy of the First World War and the Treaty of Versailles",
      "The Great Depression",
      "Failure of collective security and appeasement",
    ],
    consequences: [
      "An estimated 70–85 million deaths, including six million Jews murdered in the Holocaust",
      "Founding of the United Nations",
      "The Cold War between the United States and the Soviet Union",
      "Decolonisation in Asia and Africa",
    ],
    timeline: [
      ["1939-09-01", "Germany invades Poland", "War begins in Europe."],
      ["1940-06-22", "France surrenders", "Armistice signed at Compiègne."],
      ["1941-06-22", "Germany invades the Soviet Union", "Operation Barbarossa."],
      ["1941-12-07", "Attack on Pearl Harbor", "United States enters the war."],
      ["1945-05-08", "Victory in Europe", "Germany surrenders."],
      ["1945-09-02", "Japan surrenders", "Aboard USS Missouri."],
    ],
    people: [
      ["winston-churchill", "British prime minister"],
      ["franklin-d-roosevelt", "US president"],
      ["joseph-stalin", "Soviet leader"],
      ["adolf-hitler", "Nazi dictator of Germany"],
    ],
    relations: [
      ["led_to", "founding-of-the-united-nations", "The Allies created the UN to prevent another world war."],
      ["led_to", "cold-war", "The war left two rival superpowers dominating the world."],
      ["contributed_to", "partition-of-india", "A weakened Britain moved quickly to leave India after the war."],
    ],
    sources: [
      { url: "https://www.nationalww2museum.org/students-teachers/student-resources/research-starters/research-starters-worldwide-deaths-world-war", title: "Research Starters: Worldwide Deaths in World War II", publisher: "The National WWII Museum", type: "museum" },
    ],
  },
  {
    slug: "attack-on-pearl-harbor",
    title: "Attack on Pearl Harbor",
    date: "1941-12-07",
    period: "world-wars",
    category: "conflict",
    region: "north-america",
    location: "Pearl Harbor, Oahu, Hawaii",
    places: ["pearl-harbor"],
    wiki: "Attack on Pearl Harbor",
    keywords: ["Imperial Japanese Navy", "USS Arizona", "day of infamy", "Pacific War"],
    summary:
      "A surprise attack by Japanese carrier aircraft on the US Pacific Fleet at Pearl Harbor killed more than 2,400 Americans and brought the United States into the Second World War.",
    overview:
      "Early on the morning of 7 December 1941, two waves of Japanese aircraft struck battleships, airfields and other targets. President Franklin D. Roosevelt called it 'a date which will live in infamy'.",
    context:
      "Japan's war in China and its occupation of French Indochina led the United States to impose an oil embargo in 1941. Japan planned to seize the resource-rich territories of Southeast Asia and sought to cripple the US fleet first.",
    narrative:
      "The attack sank or damaged eight battleships; the USS Arizona exploded, killing 1,177 crew. US aircraft carriers, however, were at sea and escaped. Japan simultaneously attacked the Philippines, Malaya, Hong Kong and other targets.\n\nThe United States declared war on Japan on 8 December, and Germany and Italy declared war on the United States on 11 December. The attack unified American public opinion behind the war. Six months later, the US victory at Midway turned the tide in the Pacific.",
    causes: [
      "Japanese expansion in China and Southeast Asia",
      "US oil embargo and economic sanctions",
      "Japan's strategy to neutralise the US Pacific Fleet",
    ],
    consequences: [
      "US entry into the Second World War",
      "Japanese conquests across Southeast Asia",
      "Internment of Japanese Americans",
    ],
    timeline: [
      ["1941-07-26", "US freezes Japanese assets", "Oil embargo follows."],
      ["1941-12-07", "Attack on Pearl Harbor", "Two waves of aircraft."],
      ["1941-12-08", "US declares war on Japan", "Roosevelt's 'infamy' speech."],
      ["1942-06-04", "Battle of Midway", "Turning point in the Pacific."],
    ],
    people: [
      ["isoroku-yamamoto", "Japanese admiral who planned the attack"],
      ["franklin-d-roosevelt", "US president"],
    ],
    relations: [["part_of", "world-war-ii", "Brought the United States into the war."]],
  },
  {
    slug: "the-holocaust",
    title: "The Holocaust",
    alt: ["Shoah"],
    date: "1941",
    end: "1945",
    period: "world-wars",
    category: "society",
    region: "europe",
    location: "German-occupied Europe",
    places: ["auschwitz", "warsaw"],
    wiki: "The Holocaust",
    keywords: ["genocide", "Auschwitz", "Final Solution", "concentration camps", "antisemitism", "Shoah"],
    dateNote: "Persecution of Jews began in 1933; systematic mass murder began in 1941.",
    summary:
      "Nazi Germany and its collaborators systematically murdered six million European Jews — about two-thirds of Europe's Jewish population — along with millions of other victims.",
    overview:
      "The Holocaust was the state-sponsored, systematic persecution and murder of Jews. It was carried out through mass shootings, ghettos, forced labour and extermination camps such as Auschwitz-Birkenau, Treblinka and Sobibor. Roma, disabled people, Soviet prisoners of war, Poles and others were also targeted.",
    context:
      "Antisemitism was central to Nazi ideology. From 1933 Jews in Germany were excluded from public life, stripped of citizenship by the Nuremberg Laws of 1935 and attacked in the Kristallnacht pogrom of November 1938.",
    narrative:
      "After the invasion of Poland, Jews were forced into ghettos. Following the invasion of the Soviet Union in June 1941, mobile killing units (Einsatzgruppen) murdered more than a million Jews by shooting, including about 33,000 at Babi Yar in two days. At the Wannsee Conference in January 1942, officials coordinated the 'Final Solution', and extermination camps with gas chambers operated in occupied Poland.\n\nAbout one million Jews were murdered at Auschwitz-Birkenau alone. Jewish resistance included the Warsaw Ghetto Uprising of 1943. Allied forces liberated the camps in 1944–1945. Perpetrators were tried at Nuremberg and later trials, and the genocide shaped international law, including the Genocide Convention of 1948.",
    causes: [
      "Nazi racial ideology and antisemitism",
      "Totalitarian control of the German state",
      "German conquest of Europe and collaboration by others",
    ],
    consequences: [
      "Murder of six million Jews and millions of others",
      "Destruction of centuries-old Jewish communities in Europe",
      "Development of international law on genocide and human rights",
    ],
    timeline: [
      ["1935-09-15", "Nuremberg Laws", "Jews stripped of citizenship."],
      ["1938-11-09", "Kristallnacht", "Nationwide pogrom."],
      ["1942-01-20", "Wannsee Conference", "Coordination of the 'Final Solution'."],
      ["1943-04-19", "Warsaw Ghetto Uprising", "Armed Jewish resistance."],
      ["1945-01-27", "Liberation of Auschwitz", "By the Soviet army."],
    ],
    people: [
      ["anne-frank", "Diarist murdered at Bergen-Belsen"],
      ["adolf-hitler", "Nazi dictator responsible for the genocide"],
    ],
    relations: [
      ["occurred_during", "world-war-ii", "The genocide was carried out under cover of war."],
      ["led_to", "nuremberg-trials", "Perpetrators were prosecuted for crimes against humanity."],
      ["contributed_to", "universal-declaration-of-human-rights", "Its horrors drove the drafting of universal human rights."],
    ],
    sources: [
      { url: "https://encyclopedia.ushmm.org/content/en/article/introduction-to-the-holocaust", title: "Introduction to the Holocaust", publisher: "United States Holocaust Memorial Museum", type: "museum" },
    ],
  },
  {
    slug: "battle-of-stalingrad",
    title: "Battle of Stalingrad",
    date: "1942-08-23",
    end: "1943-02-02",
    period: "world-wars",
    category: "conflict",
    region: "europe",
    location: "Stalingrad (Volgograd), Soviet Union",
    places: ["stalingrad"],
    wiki: "Battle of Stalingrad",
    keywords: ["Eastern Front", "Operation Uranus", "Sixth Army", "Paulus", "Volga"],
    summary:
      "The Soviet defence and encirclement of Stalingrad destroyed the German Sixth Army, a turning point of the war on the Eastern Front.",
    overview:
      "One of the largest and bloodiest battles in history, Stalingrad caused nearly two million military and civilian casualties. Field Marshal Friedrich Paulus surrendered on 31 January 1943, and the last Germans in the city surrendered on 2 February.",
    context:
      "In summer 1942, Germany launched an offensive toward the oil fields of the Caucasus. Stalingrad, an industrial city on the Volga bearing Stalin's name, became a symbolic and strategic objective.",
    narrative:
      "German bombing reduced much of the city to rubble. Soviet forces under Vasily Chuikov fought building by building, with the Volga at their backs. In November 1942, Operation Uranus struck the weaker Romanian armies on the German flanks and encircled about 300,000 Axis troops.\n\nHitler forbade a breakout, and air supply failed. Starving and freezing, the Sixth Army surrendered. Of about 91,000 prisoners, only around 5,000 ever returned to Germany. Afterwards the Red Army held the strategic initiative, advancing toward Berlin.",
    causes: [
      "German offensive toward the Caucasus oil fields",
      "Strategic and symbolic value of Stalingrad",
      "Hitler's refusal to allow retreat",
    ],
    consequences: [
      "Destruction of the German Sixth Army",
      "Turning point on the Eastern Front",
      "Boosted Allied morale worldwide",
    ],
    timeline: [
      ["1942-08-23", "Bombing of Stalingrad", "Battle begins."],
      ["1942-11-19", "Operation Uranus", "Soviet counteroffensive."],
      ["1943-01-31", "Paulus surrenders", "Southern pocket."],
      ["1943-02-02", "Battle ends", "Last German forces surrender."],
    ],
    people: [
      ["georgy-zhukov", "Soviet general who helped plan the counteroffensive"],
      ["friedrich-paulus", "Commander of the German Sixth Army"],
    ],
    relations: [["part_of", "world-war-ii", "A turning point of the Eastern Front."]],
  },
  {
    slug: "d-day",
    title: "D-Day: the Normandy landings",
    alt: ["Normandy landings", "Operation Overlord", "D-Day"],
    date: "1944-06-06",
    period: "world-wars",
    category: "conflict",
    region: "europe",
    location: "Normandy, France",
    places: ["omaha-beach", "normandy"],
    wiki: "Normandy landings",
    featured: true,
    keywords: ["Operation Overlord", "Omaha Beach", "Eisenhower", "Allied invasion", "Western Front"],
    summary:
      "Allied forces landed on five beaches in Normandy in the largest seaborne invasion in history, opening a western front against Nazi Germany.",
    overview:
      "On 6 June 1944, about 156,000 American, British, Canadian and other Allied troops landed by sea and air. The beaches were code-named Utah, Omaha, Gold, Juno and Sword.",
    context:
      "The Soviet Union had long pressed its allies to open a second front. After years of planning under General Dwight D. Eisenhower, and extensive deception operations to persuade Germany the landing would come at Calais, the invasion was launched after a weather delay.",
    narrative:
      "Airborne troops landed overnight behind the beaches. At dawn, after naval and air bombardment, troops came ashore. At Omaha Beach, American forces faced intense fire and suffered heavy casualties before breaking through. By the end of the day the Allies had a foothold, at a cost of more than 10,000 Allied casualties, including more than 4,000 dead.\n\nThe Battle of Normandy continued until late August. Paris was liberated on 25 August 1944. Combined with the Soviet advance in the east, the invasion led to Germany's surrender in May 1945.",
    causes: [
      "Need for a second front in Western Europe",
      "Allied strategy agreed at the Tehran Conference",
      "Build-up of forces in Britain",
    ],
    consequences: [
      "Opened the Western Front",
      "Liberation of France and Western Europe",
      "Contributed to Germany's defeat in 1945",
    ],
    timeline: [
      ["1943-11-28", "Tehran Conference", "Allies agree on the invasion."],
      ["1944-06-06", "D-Day landings", "Five beaches."],
      ["1944-08-25", "Liberation of Paris", "Germans surrender the city."],
      ["1945-05-08", "Victory in Europe", "Germany surrenders."],
    ],
    people: [
      ["dwight-d-eisenhower", "Supreme Allied Commander"],
      ["bernard-montgomery", "Commander of Allied ground forces"],
    ],
    relations: [["part_of", "world-war-ii", "The decisive Allied invasion of Western Europe."]],
  },
  {
    slug: "atomic-bombings",
    title: "Atomic bombings of Hiroshima and Nagasaki",
    alt: ["Hiroshima", "Nagasaki", "Little Boy", "Fat Man"],
    date: "1945-08-06",
    end: "1945-08-09",
    period: "world-wars",
    category: "conflict",
    region: "east-asia",
    location: "Hiroshima and Nagasaki, Japan",
    places: ["hiroshima", "nagasaki"],
    wiki: "Atomic bombings of Hiroshima and Nagasaki",
    keywords: ["nuclear weapons", "Manhattan Project", "Enola Gay", "hibakusha", "Japanese surrender"],
    summary:
      "The United States dropped atomic bombs on Hiroshima and Nagasaki, killing an estimated 110,000 to 210,000 people, most of them civilians. They remain the only uses of nuclear weapons in war.",
    overview:
      "The bomb 'Little Boy' destroyed Hiroshima on 6 August 1945; 'Fat Man' struck Nagasaki on 9 August. Japan announced its surrender on 15 August.",
    context:
      "The Manhattan Project had developed atomic weapons, first tested at Trinity in New Mexico on 16 July 1945. Japan had rejected the Potsdam Declaration's demand for unconditional surrender. US planners prepared for a costly invasion of Japan.",
    narrative:
      "The B-29 Enola Gay released Little Boy over Hiroshima at 8:15 a.m. The blast and firestorm destroyed most of the city. Three days later, Bockscar dropped Fat Man on Nagasaki. Many more died in the following months from burns, injuries and radiation sickness. The Soviet Union declared war on Japan on 8 August and invaded Manchuria.\n\nEmperor Hirohito announced Japan's surrender by radio on 15 August. Historians continue to debate whether the bombings were necessary to end the war and what role the Soviet entry played. Survivors, known as hibakusha, became powerful voices for nuclear disarmament.",
    causes: [
      "The Manhattan Project's development of nuclear weapons",
      "US desire to end the war without invading Japan",
      "Japan's rejection of the Potsdam Declaration",
    ],
    consequences: [
      "Mass civilian deaths and long-term radiation effects",
      "Japanese surrender and the end of the Second World War",
      "Beginning of the nuclear age and the nuclear arms race",
    ],
    timeline: [
      ["1945-07-16", "Trinity test", "First nuclear explosion."],
      ["1945-08-06", "Hiroshima bombed", "Little Boy."],
      ["1945-08-09", "Nagasaki bombed", "Fat Man."],
      ["1945-08-15", "Japan announces surrender", "Emperor's radio broadcast."],
    ],
    people: [
      ["harry-s-truman", "US president who authorised the bombings"],
      ["j-robert-oppenheimer", "Scientific director of the Los Alamos laboratory"],
    ],
    relations: [
      ["part_of", "world-war-ii", "Final strategic actions of the Pacific War."],
      ["contributed_to", "cold-war", "The nuclear age shaped the superpower rivalry."],
    ],
  },
  {
    slug: "founding-of-the-united-nations",
    title: "Founding of the United Nations",
    alt: ["UN Charter", "United Nations"],
    date: "1945-10-24",
    period: "world-wars",
    category: "politics",
    region: "global",
    location: "San Francisco and New York",
    places: ["san-francisco"],
    wiki: "Charter of the United Nations",
    keywords: ["United Nations", "Security Council", "San Francisco Conference", "collective security"],
    summary:
      "The United Nations came into existence when its Charter was ratified by a majority of signatories, including the five permanent members of the Security Council.",
    overview:
      "Delegates from 50 nations signed the UN Charter in San Francisco on 26 June 1945. It entered into force on 24 October 1945, now celebrated as United Nations Day.",
    context:
      "The League of Nations had failed to prevent the Second World War. During the war, the Allies — calling themselves the 'United Nations' — planned a new organisation at conferences including Dumbarton Oaks (1944) and Yalta (1945).",
    narrative:
      "The Charter set out goals of maintaining international peace, developing friendly relations among nations and promoting human rights. It created the General Assembly, the Security Council — where the US, USSR, UK, France and China held vetoes — the International Court of Justice and other bodies.\n\nThe UN's headquarters was established in New York. During the Cold War, vetoes often paralysed the Security Council, but the UN expanded with decolonisation and developed peacekeeping, humanitarian and development roles. Today it has 193 member states.",
    causes: [
      "Failure of the League of Nations",
      "Allied wartime planning for a post-war order",
      "Desire to prevent future world wars",
    ],
    consequences: [
      "A permanent forum for international cooperation",
      "The Universal Declaration of Human Rights (1948)",
      "UN peacekeeping and humanitarian agencies",
    ],
    timeline: [
      ["1944-08-21", "Dumbarton Oaks Conference", "Proposals drafted."],
      ["1945-06-26", "Charter signed", "In San Francisco."],
      ["1945-10-24", "Charter enters into force", "UN founded."],
    ],
    people: [["franklin-d-roosevelt", "US president who championed the UN before his death in April 1945"]],
    relations: [["led_to", "universal-declaration-of-human-rights", "The UN General Assembly adopted the Declaration in 1948."]],
    sources: [
      { url: "https://www.un.org/en/about-us/history-of-the-un", title: "History of the United Nations", publisher: "United Nations", type: "institution" },
      { url: "https://www.un.org/en/about-us/un-charter/full-text", title: "United Nations Charter (full text)", publisher: "United Nations", type: "primary_document" },
    ],
  },
];
