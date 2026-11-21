import type { EventSeed } from "../types";

export const coldWarEvents: EventSeed[] = [
  {
    slug: "nuremberg-trials",
    title: "Nuremberg trials",
    date: "1945-11-20",
    end: "1946-10-01",
    period: "cold-war",
    category: "politics",
    region: "europe",
    location: "Palace of Justice, Nuremberg, Germany",
    places: ["nuremberg"],
    wiki: "Nuremberg trials",
    keywords: ["war crimes", "crimes against humanity", "International Military Tribunal", "Göring"],
    summary:
      "An International Military Tribunal tried leading Nazi officials for crimes against peace, war crimes and crimes against humanity.",
    overview:
      "Twenty-four leaders were indicted; of the 22 tried, 12 were sentenced to death. The trials established that individuals, including heads of state, could be held criminally responsible under international law.",
    context:
      "As the war ended, the Allies debated how to punish Nazi leaders. The London Charter of August 1945, agreed by the US, UK, USSR and France, set up the tribunal and defined its crimes.",
    narrative:
      "Prosecutors presented extensive documentary and film evidence of Nazi atrocities, including the concentration and extermination camps. Defendants included Hermann Göring, Rudolf Hess and Joachim von Ribbentrop. Many argued that they had followed orders, a defence the tribunal rejected.\n\nVerdicts were delivered on 1 October 1946. Göring took his own life before his execution. Twelve subsequent trials at Nuremberg dealt with doctors, judges, industrialists and others. The principles developed there influenced the Genocide Convention and, eventually, the International Criminal Court, founded in 2002.",
    causes: [
      "The scale of Nazi crimes revealed at the war's end",
      "Allied agreement on a judicial rather than summary process",
      "The London Charter of 1945",
    ],
    consequences: [
      "Precedent for individual criminal responsibility under international law",
      "Definition of crimes against humanity",
      "Foundation for later international courts",
    ],
    timeline: [
      ["1945-08-08", "London Charter", "Tribunal established."],
      ["1945-11-20", "Trial opens", "In Nuremberg."],
      ["1946-10-01", "Verdicts delivered", "12 death sentences."],
      ["2002-07-01", "International Criminal Court", "Rome Statute in force."],
    ],
    people: [["robert-h-jackson", "Chief US prosecutor"]],
    sources: [
      { url: "https://avalon.law.yale.edu/subject_menus/imt.asp", title: "Nuremberg Trial Proceedings", publisher: "Avalon Project, Yale Law School", type: "primary_document" },
    ],
  },
  {
    slug: "partition-of-india",
    title: "Independence and Partition of India",
    alt: ["Partition of India", "Indian independence", "Creation of Pakistan"],
    date: "1947-08-14",
    end: "1947-08-15",
    period: "cold-war",
    category: "politics",
    region: "south-asia",
    location: "British India",
    places: ["delhi", "lahore"],
    wiki: "Partition of India",
    keywords: ["Indian independence", "Pakistan", "Mountbatten", "Radcliffe Line", "Nehru", "Jinnah"],
    summary:
      "British India was divided into two independent dominions, India and Pakistan. The partition triggered one of the largest mass migrations in history and terrible communal violence.",
    overview:
      "Pakistan became independent on 14 August and India on 15 August 1947. Between 10 and 20 million people were displaced, and estimates of deaths range from several hundred thousand to two million.",
    context:
      "Decades of nationalist struggle, led by the Indian National Congress and figures such as Gandhi and Nehru, had weakened British rule. The Muslim League under Muhammad Ali Jinnah demanded a separate state for Muslims. Britain, exhausted after the Second World War, decided to leave quickly.",
    narrative:
      "The last viceroy, Lord Mountbatten, brought forward the date of independence. Lawyer Cyril Radcliffe, who had never been to India, drew the borders dividing Punjab and Bengal in five weeks; they were published only after independence. Hindus and Sikhs fled to India and Muslims to Pakistan amid massacres, abductions and sexual violence.\n\nGandhi was assassinated in January 1948 by a Hindu nationalist. The dispute over Kashmir led to the first India–Pakistan war in 1947–1948. East Pakistan became independent as Bangladesh in 1971.",
    causes: [
      "The Indian independence movement",
      "Demand for a separate Muslim homeland",
      "Britain's post-war weakness and rapid withdrawal",
    ],
    consequences: [
      "Independence of India and Pakistan",
      "Mass migration and communal violence",
      "Enduring India–Pakistan conflict, including over Kashmir",
    ],
    timeline: [
      ["1940-03-23", "Lahore Resolution", "Muslim League calls for independent states."],
      ["1947-06-03", "Partition plan announced", "By Mountbatten."],
      ["1947-08-14", "Pakistan independent", "Jinnah becomes governor-general."],
      ["1947-08-15", "India independent", "Nehru's 'Tryst with Destiny' speech."],
      ["1948-01-30", "Gandhi assassinated", "In New Delhi."],
    ],
    people: [
      ["jawaharlal-nehru", "First prime minister of India"],
      ["muhammad-ali-jinnah", "Founder of Pakistan"],
      ["mahatma-gandhi", "Leader of the independence movement"],
      ["louis-mountbatten", "Last viceroy of India"],
    ],
    relations: [["related_to", "bandung-conference", "Newly independent India helped lead the movement of Asian and African states."]],
  },
  {
    slug: "dead-sea-scrolls",
    title: "Discovery of the Dead Sea Scrolls",
    date: "1946",
    end: "1956",
    period: "cold-war",
    category: "archaeology",
    region: "middle-east",
    location: "Qumran caves, West Bank",
    places: ["qumran"],
    wiki: "Dead Sea Scrolls",
    discovery: true,
    keywords: ["Qumran", "Hebrew Bible", "manuscripts", "Essenes", "Second Temple"],
    summary:
      "Bedouin shepherds found ancient scrolls in caves near the Dead Sea, beginning the discovery of the oldest known manuscripts of the Hebrew Bible.",
    overview:
      "Between 1946/47 and 1956, about 15,000 fragments from some 900 scrolls were recovered from eleven caves near Qumran. They date mostly from the third century BCE to the first century CE.",
    context:
      "The scrolls were produced during the Second Temple period, a time of diverse Jewish religious movements. Before their discovery, the oldest complete Hebrew Bible manuscripts dated to the tenth century CE.",
    narrative:
      "According to the usual account, a young shepherd searching for a lost goat threw a stone into a cave and heard pottery break. The first seven scrolls, including the Great Isaiah Scroll, reached scholars through antiquities dealers. Archaeologists and Bedouin later explored further caves.\n\nThe scrolls include biblical texts, sectarian writings such as the Community Rule, and other works. Many scholars associate them with a Jewish sect, often identified with the Essenes, at Qumran, though this is debated. Most are housed at the Shrine of the Book in Jerusalem, and digitised images are available online.",
    causes: ["Chance discovery by shepherds", "Dry desert conditions that preserved organic material"],
    consequences: [
      "Pushed back the manuscript history of the Hebrew Bible by about a thousand years",
      "Transformed understanding of Second Temple Judaism and early Christianity",
    ],
    timeline: [
      ["~-250", "Earliest scrolls copied", "Approximate date."],
      ["1947", "First scrolls reach scholars", "Discovery date c. 1946–47."],
      ["1956", "Cave 11 discovered", "Last major find."],
    ],
  },
  {
    slug: "cold-war",
    title: "The Cold War",
    date: "1947-03-12",
    end: "1991-12-26",
    period: "cold-war",
    category: "politics",
    region: "global",
    location: "Worldwide",
    places: ["berlin", "moscow", "washington-dc"],
    wiki: "Cold War",
    featured: false,
    keywords: ["superpowers", "nuclear arms race", "Iron Curtain", "containment", "NATO", "Warsaw Pact"],
    dateNote: "Historians date the start variously from 1945 to 1947; here it is anchored to the Truman Doctrine of 12 March 1947.",
    summary:
      "A geopolitical and ideological rivalry between the United States and the Soviet Union and their allies dominated world affairs for over four decades.",
    overview:
      "The Cold War never became direct war between the superpowers, but involved a nuclear arms race, the division of Europe, proxy wars in Asia, Africa and Latin America, and competition in science and space. It ended with the collapse of communist regimes in Eastern Europe and the dissolution of the USSR.",
    context:
      "The wartime alliance of the US and USSR broke down after 1945 over the future of Germany and Eastern Europe, where Soviet-backed communist governments took power. Winston Churchill described an 'iron curtain' descending across Europe in 1946.",
    narrative:
      "The US adopted a policy of containment, announced in the Truman Doctrine in 1947 and backed by the Marshall Plan. NATO was formed in 1949 and the Warsaw Pact in 1955. The USSR tested its first atomic bomb in 1949. Crises over Berlin and Cuba brought the world close to nuclear war, while the Korean and Vietnam wars and many others were fought by proxies.\n\nPeriods of détente in the 1970s were followed by renewed tension in the early 1980s. Mikhail Gorbachev's reforms from 1985, economic stagnation and popular movements in Eastern Europe led to the revolutions of 1989 and the end of the Soviet Union in 1991.",
    causes: [
      "Ideological conflict between communism and liberal capitalism",
      "Disputes over post-war Europe",
      "Mutual suspicion and the nuclear arms race",
    ],
    consequences: [
      "Division of Europe and Germany for over four decades",
      "Proxy wars and interventions worldwide",
      "Space race and rapid technological development",
      "Dissolution of the Soviet Union in 1991",
    ],
    timeline: [
      ["1947-03-12", "Truman Doctrine", "Containment policy announced."],
      ["1949-04-04", "NATO founded", "North Atlantic Treaty signed."],
      ["1962-10", "Cuban Missile Crisis", "Closest approach to nuclear war."],
      ["1989-11-09", "Fall of the Berlin Wall", "Communist rule collapses in Eastern Europe."],
      ["1991-12-26", "USSR dissolved", "End of the Cold War."],
    ],
    people: [
      ["harry-s-truman", "US president who launched containment"],
      ["joseph-stalin", "Soviet leader at the start of the Cold War"],
      ["mikhail-gorbachev", "Last leader of the Soviet Union"],
      ["ronald-reagan", "US president in the 1980s"],
    ],
    sources: [
      { url: "https://history.state.gov/milestones/1945-1952/truman-doctrine", title: "The Truman Doctrine, 1947", publisher: "Office of the Historian, U.S. Department of State", type: "government" },
    ],
  },
  {
    slug: "marshall-plan",
    title: "The Marshall Plan",
    alt: ["European Recovery Program"],
    date: "1948-04-03",
    period: "cold-war",
    category: "economy",
    region: "europe",
    location: "Western Europe",
    places: ["washington-dc"],
    wiki: "Marshall Plan",
    keywords: ["European Recovery Program", "George Marshall", "reconstruction", "containment"],
    summary:
      "The United States provided more than $13 billion in economic aid to rebuild Western Europe after the Second World War.",
    overview:
      "Proposed by Secretary of State George C. Marshall in June 1947 and signed into law on 3 April 1948, the European Recovery Program ran until 1952. The Soviet Union refused to participate and prevented Eastern European states from joining.",
    context:
      "Europe's economies were devastated, and the harsh winter of 1946–1947 caused hunger and fuel shortages. US policymakers feared that poverty would boost communist parties, especially in France and Italy.",
    narrative:
      "Aid came as grants and loans for food, fuel, machinery and raw materials, coordinated through the Organisation for European Economic Co-operation. Industrial production in participating countries rose significantly above pre-war levels by 1952.\n\nThe plan encouraged European economic cooperation, a precursor to the European Coal and Steel Community and later the European Union. It also deepened the division of Europe into Western and Soviet blocs.",
    causes: [
      "Economic devastation of post-war Europe",
      "US policy of containing communism",
      "Desire for European markets and stability",
    ],
    consequences: [
      "Rapid recovery of Western European economies",
      "Foundations of European economic integration",
      "Deepened the Cold War division of Europe",
    ],
    timeline: [
      ["1947-06-05", "Marshall's Harvard speech", "Proposal announced."],
      ["1948-04-03", "Economic Cooperation Act signed", "By President Truman."],
      ["1952", "Programme ends", "More than $13 billion distributed."],
    ],
    people: [["george-c-marshall", "US Secretary of State who proposed the plan"]],
    relations: [
      ["part_of", "cold-war", "A central instrument of the US containment strategy."],
      ["contributed_to", "maastricht-treaty", "Post-war cooperation laid groundwork for European integration."],
    ],
    sources: [
      { url: "https://history.state.gov/milestones/1945-1952/marshall-plan", title: "Marshall Plan, 1948", publisher: "Office of the Historian, U.S. Department of State", type: "government" },
    ],
  },
  {
    slug: "berlin-blockade",
    title: "Berlin Blockade and Airlift",
    alt: ["Berlin Airlift"],
    date: "1948-06-24",
    end: "1949-05-12",
    period: "cold-war",
    category: "politics",
    region: "europe",
    location: "Berlin, Germany",
    places: ["berlin"],
    wiki: "Berlin Blockade",
    keywords: ["Berlin Airlift", "Tempelhof", "Soviet blockade", "West Berlin"],
    summary:
      "The Soviet Union blocked land access to the western sectors of Berlin. The Western Allies supplied the city by air for almost eleven months.",
    overview:
      "In the Berlin Airlift, American, British and other aircraft flew more than 270,000 flights carrying over two million tonnes of supplies. The Soviets lifted the blockade on 12 May 1949.",
    context:
      "After the war, Germany and Berlin were divided into four occupation zones. Disputes over Germany's future came to a head when the Western powers introduced a new currency, the Deutsche Mark, in their zones.",
    narrative:
      "The Soviets cut road, rail and canal routes into West Berlin, hoping to force the Western Allies to abandon the city. Instead, aircraft landed at Tempelhof, Gatow and later Tegel every few minutes, carrying food, coal and other necessities. American pilot Gail Halvorsen became known as the 'Candy Bomber' for dropping sweets to children.\n\nThe blockade's failure was a propaganda defeat for the Soviet Union. In 1949, Germany was formally divided into the Federal Republic (West) and the German Democratic Republic (East), and NATO was founded.",
    causes: [
      "Disagreement over the future of Germany",
      "Introduction of the Deutsche Mark in the western zones",
      "Soviet aim to force the Allies out of Berlin",
    ],
    consequences: [
      "Western commitment to defend West Berlin",
      "Division of Germany into two states in 1949",
      "Formation of NATO",
    ],
    timeline: [
      ["1948-06-20", "Deutsche Mark introduced", "In the western zones."],
      ["1948-06-24", "Blockade begins", "Land routes closed."],
      ["1949-04-04", "NATO founded", "During the airlift."],
      ["1949-05-12", "Blockade lifted", "Airlift continues to September."],
    ],
    people: [["lucius-d-clay", "US military governor in Germany"]],
    relations: [
      ["part_of", "cold-war", "The first major crisis of the Cold War."],
      ["contributed_to", "construction-of-berlin-wall", "Berlin remained a flashpoint of the divided city."],
    ],
    sources: [
      { url: "https://history.state.gov/milestones/1945-1952/berlin-airlift", title: "The Berlin Airlift, 1948–1949", publisher: "Office of the Historian, U.S. Department of State", type: "government" },
    ],
  },
  {
    slug: "universal-declaration-of-human-rights",
    title: "Universal Declaration of Human Rights",
    date: "1948-12-10",
    period: "cold-war",
    category: "society",
    region: "global",
    location: "Palais de Chaillot, Paris",
    places: ["paris"],
    wiki: "Universal Declaration of Human Rights",
    keywords: ["human rights", "Eleanor Roosevelt", "United Nations", "UDHR"],
    summary:
      "The UN General Assembly adopted a declaration setting out, for the first time, fundamental human rights to be universally protected.",
    overview:
      "Adopted on 10 December 1948 by 48 votes to none, with eight abstentions, the UDHR's 30 articles include rights to life, liberty, freedom from torture, equality before the law, freedom of expression and education. 10 December is now Human Rights Day.",
    context:
      "The atrocities of the Second World War, including the Holocaust, convinced many that human rights needed international protection. The UN Charter referred to human rights but did not define them.",
    narrative:
      "A drafting committee chaired by Eleanor Roosevelt included René Cassin of France, Peng Chun Chang of China and Charles Malik of Lebanon, among others. They sought language acceptable across different legal, religious and political traditions.\n\nAlthough not legally binding itself, the Declaration inspired the International Covenants on Civil and Political Rights and on Economic, Social and Cultural Rights (1966), and many national constitutions. It is one of the most translated documents in the world.",
    causes: [
      "Atrocities of the Second World War and the Holocaust",
      "The founding of the United Nations",
      "International demand for common standards",
    ],
    consequences: [
      "A shared international standard for human rights",
      "Basis for binding human rights treaties",
      "Influence on national constitutions worldwide",
    ],
    timeline: [
      ["1946", "UN Commission on Human Rights created", "Chaired by Eleanor Roosevelt."],
      ["1948-12-10", "Declaration adopted", "In Paris."],
      ["1966-12-16", "International Covenants adopted", "Binding treaties."],
    ],
    people: [["eleanor-roosevelt", "Chair of the drafting committee"]],
    sources: [
      { url: "https://www.un.org/en/about-us/universal-declaration-of-human-rights", title: "Universal Declaration of Human Rights", publisher: "United Nations", type: "primary_document" },
    ],
  },
  {
    slug: "founding-of-prc",
    title: "Founding of the People's Republic of China",
    alt: ["Proclamation of the People's Republic of China", "Chinese Communist Revolution"],
    date: "1949-10-01",
    period: "cold-war",
    category: "politics",
    region: "east-asia",
    location: "Tiananmen Square, Beijing",
    places: ["tiananmen-square"],
    wiki: "Proclamation of the People's Republic of China",
    keywords: ["Mao Zedong", "Chinese Civil War", "Communist Party", "Kuomintang", "Taiwan"],
    summary:
      "After victory in the Chinese Civil War, Mao Zedong proclaimed the founding of the People's Republic of China from the Gate of Heavenly Peace in Beijing.",
    overview:
      "The proclamation on 1 October 1949 followed the defeat of Chiang Kai-shek's Nationalist government, which retreated to Taiwan. China became the world's most populous communist state.",
    context:
      "The Communists and Nationalists had fought since 1927, pausing in an uneasy alliance against Japan from 1937 to 1945. After the Japanese surrender, full-scale civil war resumed, and the Communists won decisive campaigns in 1948–1949.",
    narrative:
      "Mao declared that the Chinese people had 'stood up'. The new government carried out land reform, in which many landlords were killed, and campaigns against perceived enemies. It signed a treaty of alliance with the Soviet Union in 1950 and intervened in the Korean War.\n\nThe Republic of China government continued on Taiwan, which held China's UN seat until 1971. The relationship between Beijing and Taipei remains one of the most sensitive issues in international politics.",
    causes: [
      "Communist victory in the Chinese Civil War",
      "Nationalist government's corruption and loss of support",
      "Communist mobilisation of the rural population",
    ],
    consequences: [
      "Establishment of communist rule in mainland China",
      "Nationalist government relocated to Taiwan",
      "China became a major Cold War actor",
    ],
    timeline: [
      ["1946", "Civil war resumes", "After Japan's defeat."],
      ["1949-01-31", "Communists enter Beijing", "Peaceful handover of the city."],
      ["1949-10-01", "PRC proclaimed", "At Tiananmen."],
      ["1949-12-10", "Chiang Kai-shek leaves for Taiwan", "Nationalist retreat."],
    ],
    people: [
      ["mao-zedong", "Chairman of the Chinese Communist Party"],
      ["chiang-kai-shek", "Leader of the Nationalist government"],
    ],
    relations: [
      ["contributed_to", "cultural-revolution", "Mao's rule culminated in the upheaval of 1966–1976."],
      ["contributed_to", "korean-war", "Chinese troops intervened in Korea in 1950."],
    ],
  },
  {
    slug: "korean-war",
    title: "Korean War",
    date: "1950-06-25",
    end: "1953-07-27",
    period: "cold-war",
    category: "conflict",
    region: "east-asia",
    location: "Korean Peninsula",
    places: ["seoul", "panmunjom"],
    wiki: "Korean War",
    keywords: ["38th parallel", "Inchon", "United Nations Command", "armistice", "DMZ"],
    summary:
      "North Korea invaded South Korea, starting a war that drew in United Nations forces led by the United States and Chinese troops, and ended in an armistice that divided the peninsula.",
    overview:
      "The war killed millions, including a very large number of civilians. The armistice signed at Panmunjom on 27 July 1953 created the Korean Demilitarised Zone; no peace treaty has ever been signed.",
    context:
      "Korea, a Japanese colony since 1910, was divided at the 38th parallel in 1945 between Soviet and American occupation zones. Two rival states were established in 1948.",
    narrative:
      "North Korean forces, backed by the Soviet Union, quickly captured Seoul and pushed south to the Pusan Perimeter. The UN Security Council, boycotted by the USSR, authorised assistance to South Korea. General Douglas MacArthur's landing at Inchon in September 1950 reversed the war, and UN forces advanced toward the Chinese border.\n\nChina intervened in October 1950, driving UN forces back. The front stabilised near the 38th parallel, and two years of costly fighting continued during armistice negotiations. The Korean Peninsula remains divided.",
    causes: [
      "Division of Korea after 1945",
      "North Korean ambition to unify the peninsula by force",
      "Cold War rivalry between the superpowers",
    ],
    consequences: [
      "Millions of deaths and widespread destruction",
      "Lasting division of Korea and the DMZ",
      "Militarisation of the Cold War and US commitment to Asia",
    ],
    timeline: [
      ["1950-06-25", "North Korea invades", "War begins."],
      ["1950-09-15", "Inchon landing", "UN counteroffensive."],
      ["1950-10-19", "Chinese intervention", "Chinese troops cross the Yalu."],
      ["1953-07-27", "Armistice signed", "At Panmunjom."],
    ],
    people: [
      ["kim-il-sung", "Leader of North Korea"],
      ["douglas-macarthur", "Commander of UN forces until 1951"],
    ],
    relations: [["part_of", "cold-war", "The first major armed conflict of the Cold War."]],
    sources: [
      { url: "https://history.state.gov/milestones/1945-1952/korean-war-1", title: "The Korean War, 1950–1953", publisher: "Office of the Historian, U.S. Department of State", type: "government" },
    ],
  },
  {
    slug: "dna-double-helix",
    title: "Discovery of the DNA double helix",
    alt: ["Structure of DNA", "Watson and Crick"],
    date: "1953-04-25",
    period: "cold-war",
    category: "science",
    region: "europe",
    location: "Cambridge and London, United Kingdom",
    places: ["cambridge"],
    wiki: "Molecular Structure of Nucleic Acids: A Structure for Deoxyribose Nucleic Acid",
    keywords: ["DNA", "Rosalind Franklin", "Photo 51", "genetics", "molecular biology"],
    summary:
      "James Watson and Francis Crick published a model of DNA as a double helix, revealing how genetic information is stored and copied. Their work depended on X-ray data from Rosalind Franklin and Maurice Wilkins.",
    overview:
      "The paper appeared in Nature on 25 April 1953, alongside papers by Wilkins's and Franklin's groups. Watson, Crick and Wilkins received the Nobel Prize in 1962; Franklin had died in 1958.",
    context:
      "By the early 1950s, scientists knew DNA carried genetic information but not how. Linus Pauling, Franklin and Wilkins at King's College London, and Watson and Crick at Cambridge were all working on its structure.",
    narrative:
      "Franklin's X-ray diffraction image known as 'Photo 51', taken with her student Raymond Gosling, was shown to Watson by Wilkins without her knowledge. Watson and Crick also saw a report containing her data. Combining these with chemical rules about base pairing, they built a model of two strands wound in a helix, with bases paired A–T and C–G.\n\nThe structure suggested how DNA could replicate: each strand serves as a template for a new one. It launched molecular biology and led to genetic engineering, DNA sequencing and the Human Genome Project. Franklin's essential contribution is now widely recognised.",
    causes: [
      "Recognition that DNA carries hereditary information",
      "X-ray crystallography by Franklin, Gosling and Wilkins",
      "Model-building by Watson and Crick",
    ],
    consequences: [
      "Foundation of molecular biology",
      "Understanding of genetic replication and mutation",
      "Path to biotechnology and genome sequencing",
    ],
    timeline: [
      ["1952-05", "Photo 51 taken", "By Franklin and Gosling."],
      ["1953-04-25", "Nature papers published", "The double helix."],
      ["1962-10-18", "Nobel Prize announced", "Watson, Crick and Wilkins."],
    ],
    people: [
      ["rosalind-franklin", "Chemist whose X-ray work revealed DNA's structure"],
      ["james-watson", "Co-author of the double-helix model"],
      ["francis-crick", "Co-author of the double-helix model"],
    ],
    relations: [["contributed_to", "human-genome-project", "Knowing DNA's structure eventually made sequencing the human genome possible."]],
  },
  {
    slug: "bandung-conference",
    title: "Bandung Conference",
    alt: ["Asian–African Conference"],
    date: "1955-04-18",
    end: "1955-04-24",
    period: "cold-war",
    category: "politics",
    region: "southeast-asia",
    location: "Bandung, Indonesia",
    places: ["bandung"],
    wiki: "Bandung Conference",
    discovery: true,
    keywords: ["Non-Aligned Movement", "decolonisation", "Sukarno", "Nehru", "Third World"],
    summary:
      "Leaders of 29 Asian and African countries met in Bandung to promote cooperation and oppose colonialism, laying groundwork for the Non-Aligned Movement.",
    overview:
      "Hosted by Indonesian President Sukarno, the conference brought together leaders including Nehru, Zhou Enlai and Gamal Abdel Nasser. Its final communiqué adopted ten principles of peaceful coexistence.",
    context:
      "Many Asian countries had recently become independent, while much of Africa remained under colonial rule. Newly independent states sought to avoid being drawn into the Cold War blocs.",
    narrative:
      "Delegates represented more than half the world's population. They discussed economic cooperation, cultural exchange, human rights and self-determination, and condemned 'colonialism in all of its manifestations'. Debates revealed divisions, including over whether Soviet influence in Eastern Europe counted as colonialism.\n\nThe 'Bandung spirit' inspired the founding of the Non-Aligned Movement in Belgrade in 1961 and supported independence struggles across Africa.",
    causes: [
      "Decolonisation in Asia",
      "Desire to avoid Cold War alignment",
      "Solidarity among formerly colonised peoples",
    ],
    consequences: [
      "Ten Principles of Bandung",
      "Groundwork for the Non-Aligned Movement",
      "Encouraged African independence movements",
    ],
    timeline: [
      ["1955-04-18", "Conference opens", "In Bandung."],
      ["1955-04-24", "Final communiqué", "Ten principles adopted."],
      ["1961-09-01", "Non-Aligned Movement founded", "In Belgrade."],
    ],
    people: [
      ["sukarno", "President of Indonesia and host"],
      ["jawaharlal-nehru", "Prime minister of India"],
      ["gamal-abdel-nasser", "Leader of Egypt"],
    ],
    relations: [["contributed_to", "ghana-independence", "Anti-colonial solidarity encouraged independence movements in Africa."]],
  },
  {
    slug: "suez-crisis",
    title: "Suez Crisis",
    date: "1956-10-29",
    end: "1956-11-07",
    period: "cold-war",
    category: "conflict",
    region: "middle-east",
    location: "Suez Canal and Sinai, Egypt",
    places: ["suez-canal"],
    wiki: "Suez Crisis",
    keywords: ["Nasser", "Suez Canal", "Britain", "France", "Israel", "decolonisation"],
    summary:
      "Israel, Britain and France invaded Egypt after President Nasser nationalised the Suez Canal, but were forced to withdraw under pressure from the United States and the Soviet Union.",
    overview:
      "The crisis humiliated Britain and France, revealed the limits of their power in a world dominated by the superpowers, and led to the first UN peacekeeping force.",
    context:
      "Nasser nationalised the Anglo-French Suez Canal Company in July 1956 after the US and Britain withdrew funding for the Aswan High Dam. Britain and France saw the canal as vital, and secretly planned with Israel to regain control.",
    narrative:
      "Under the secret Protocol of Sèvres, Israel invaded Sinai on 29 October; Britain and France then demanded both sides withdraw from the canal and, when Egypt refused, bombed Egyptian airfields and landed troops at Port Said. The US, angered by the deception, applied financial pressure on Britain, while the USSR threatened intervention.\n\nA ceasefire took effect on 7 November, and a UN Emergency Force supervised the withdrawal. British Prime Minister Anthony Eden resigned in January 1957. Nasser emerged as a hero of Arab nationalism.",
    causes: [
      "Nasser's nationalisation of the Suez Canal Company",
      "Anglo-French interests in the canal",
      "Israeli security concerns",
    ],
    consequences: [
      "Withdrawal of the invading forces",
      "Decline of British and French imperial influence",
      "First UN peacekeeping force",
    ],
    timeline: [
      ["1956-07-26", "Canal nationalised", "Announced by Nasser."],
      ["1956-10-29", "Israel invades Sinai", "Crisis begins."],
      ["1956-11-06", "Anglo-French landings", "At Port Said."],
      ["1956-11-07", "Ceasefire", "Under US and UN pressure."],
    ],
    people: [
      ["gamal-abdel-nasser", "President of Egypt"],
      ["anthony-eden", "British prime minister"],
    ],
    relations: [["occurred_during", "cold-war", "Both superpowers pressured Britain and France to withdraw."]],
  },
  {
    slug: "ghana-independence",
    title: "Independence of Ghana",
    alt: ["Decolonisation of Africa", "Gold Coast independence"],
    date: "1957-03-06",
    period: "cold-war",
    category: "politics",
    region: "africa",
    location: "Accra, Ghana",
    places: ["accra"],
    wiki: "Ghana",
    keywords: ["Kwame Nkrumah", "decolonisation", "Gold Coast", "Pan-Africanism"],
    summary:
      "The Gold Coast became independent as Ghana, the first sub-Saharan African colony to gain independence from European rule after the Second World War.",
    overview:
      "Led by Kwame Nkrumah, Ghana's independence on 6 March 1957 inspired independence movements across Africa. In 1960 alone, seventeen African countries became independent.",
    context:
      "After the Second World War, African veterans, workers and intellectuals demanded self-government. Nkrumah's Convention People's Party led strikes and campaigns of 'positive action', winning elections in 1951.",
    narrative:
      "At midnight on 6 March 1957, Nkrumah declared: 'Ghana, your beloved country, is free forever.' The new state took its name from the medieval Ghana Empire. Nkrumah championed Pan-Africanism and helped found the Organisation of African Unity in 1963.\n\nHis rule became increasingly authoritarian; Ghana became a one-party state in 1964, and Nkrumah was overthrown in a military coup in 1966.",
    causes: [
      "Post-war nationalist movements in Africa",
      "Nkrumah's mass political mobilisation",
      "Weakening of British imperial power",
    ],
    consequences: [
      "First independence in post-war sub-Saharan Africa",
      "Inspired wave of African decolonisation",
      "Pan-African movement and the Organisation of African Unity",
    ],
    timeline: [
      ["1949-06-12", "Convention People's Party founded", "By Nkrumah."],
      ["1957-03-06", "Independence", "Ghana is born."],
      ["1960", "Year of Africa", "Seventeen countries gain independence."],
      ["1963-05-25", "Organisation of African Unity", "Founded in Addis Ababa."],
    ],
    people: [["kwame-nkrumah", "First prime minister and president of Ghana"]],
  },
  {
    slug: "sputnik",
    title: "Launch of Sputnik 1",
    alt: ["Sputnik", "Start of the Space Race"],
    date: "1957-10-04",
    period: "cold-war",
    category: "technology",
    region: "global",
    location: "Baikonur Cosmodrome, Kazakh SSR",
    places: ["baikonur-cosmodrome"],
    wiki: "Sputnik 1",
    keywords: ["satellite", "Space Race", "Soviet Union", "Sergei Korolev", "NASA"],
    summary:
      "The Soviet Union launched Sputnik 1, the first artificial satellite, shocking the United States and starting the Space Race.",
    overview:
      "The 58-centimetre polished sphere orbited the earth every 96 minutes, broadcasting radio pulses for three weeks. It burned up on re-entry in January 1958.",
    context:
      "Both superpowers were developing intercontinental ballistic missiles and planned satellites for the International Geophysical Year. The Soviet R-7 rocket, designed under Sergei Korolev, was the world's first ICBM.",
    narrative:
      "Sputnik's beeping signal could be picked up by amateur radio operators worldwide. In the United States, the launch caused alarm about Soviet technological superiority and missile capability. A month later, Sputnik 2 carried the dog Laika into orbit.\n\nThe US responded by creating NASA in 1958 and passing the National Defense Education Act to fund science education. The first US satellite, Explorer 1, launched in January 1958.",
    causes: [
      "Soviet missile development",
      "Cold War competition for prestige",
      "The International Geophysical Year",
    ],
    consequences: [
      "Start of the Space Race",
      "Creation of NASA",
      "Increased investment in science and education",
    ],
    timeline: [
      ["1957-10-04", "Sputnik 1 launched", "First artificial satellite."],
      ["1957-11-03", "Sputnik 2", "Carries the dog Laika."],
      ["1958-01-31", "Explorer 1", "First US satellite."],
      ["1958-07-29", "NASA created", "National Aeronautics and Space Act signed."],
    ],
    people: [["sergei-korolev", "Chief designer of the Soviet space programme"]],
    relations: [
      ["followed_by", "vostok-1", "The Soviet programme followed with the first human in space."],
      ["contributed_to", "arpanet", "Sputnik prompted the creation of ARPA, which funded the ARPANET."],
      ["part_of", "cold-war", "A defining moment of superpower technological rivalry."],
    ],
  },
  {
    slug: "cuban-revolution",
    title: "Cuban Revolution",
    date: "1953-07-26",
    end: "1959-01-01",
    period: "cold-war",
    category: "politics",
    region: "latin-america",
    location: "Cuba",
    places: ["havana"],
    wiki: "Cuban Revolution",
    keywords: ["Fidel Castro", "Che Guevara", "Batista", "26th of July Movement", "Sierra Maestra"],
    summary:
      "Fidel Castro's guerrilla movement overthrew the dictatorship of Fulgencio Batista, establishing a revolutionary government that aligned with the Soviet Union.",
    overview:
      "The revolution began with a failed attack on the Moncada Barracks on 26 July 1953 and ended when Batista fled on 1 January 1959. Cuba became a one-party communist state.",
    context:
      "Batista had seized power in a 1952 coup. His government was corrupt and repressive, and much of Cuba's economy was controlled by US interests. Inequality between Havana and the countryside was stark.",
    narrative:
      "After prison and exile in Mexico, Castro returned in 1956 aboard the yacht Granma with Che Guevara and others. Survivors waged a guerrilla war from the Sierra Maestra mountains, gaining support as Batista's forces weakened. Batista fled on New Year's Day 1959.\n\nThe new government nationalised industries and land, including US-owned properties, and executed opponents. Relations with the United States collapsed; the US imposed an embargo and backed the failed Bay of Pigs invasion in 1961. Cuba's alliance with the USSR led to the Cuban Missile Crisis.",
    causes: [
      "Batista's dictatorship and corruption",
      "Economic inequality and US economic dominance",
      "Castro's guerrilla campaign",
    ],
    consequences: [
      "Communist government in Cuba",
      "US embargo and Bay of Pigs invasion",
      "Cuba's alliance with the Soviet Union",
    ],
    timeline: [
      ["1953-07-26", "Moncada Barracks attack", "Revolution begins."],
      ["1956-12-02", "Granma lands", "Guerrilla war starts."],
      ["1959-01-01", "Batista flees", "Revolutionaries take power."],
      ["1961-04-17", "Bay of Pigs invasion", "US-backed exiles defeated."],
    ],
    people: [
      ["fidel-castro", "Leader of the revolution"],
      ["che-guevara", "Revolutionary commander"],
    ],
    relations: [["contributed_to", "cuban-missile-crisis", "Cuba's alliance with the USSR brought Soviet missiles to the island."]],
  },
  {
    slug: "vostok-1",
    title: "Yuri Gagarin's flight on Vostok 1",
    alt: ["First human in space", "Vostok 1"],
    date: "1961-04-12",
    period: "cold-war",
    category: "technology",
    region: "global",
    location: "Low Earth orbit, launched from Baikonur",
    places: ["baikonur-cosmodrome"],
    wiki: "Vostok 1",
    keywords: ["Yuri Gagarin", "spaceflight", "Soviet space programme", "cosmonaut"],
    summary:
      "Soviet cosmonaut Yuri Gagarin became the first human in space, completing one orbit of the earth in 108 minutes.",
    overview:
      "Launched on 12 April 1961, Vostok 1 confirmed Soviet leadership in the early Space Race. Gagarin ejected from the capsule and parachuted to the ground near Saratov.",
    context:
      "After Sputnik, both superpowers raced to put a human in orbit. The US Mercury programme was preparing suborbital flights.",
    narrative:
      "Gagarin's call of 'Poyekhali!' ('Let's go!') at launch became famous. The flight was automated, and he became a worldwide celebrity. Three weeks later, Alan Shepard became the first American in space on a suborbital flight.\n\nOn 25 May 1961, President John F. Kennedy committed the United States to landing a man on the moon before the end of the decade. Gagarin died in a training jet crash in 1968.",
    causes: ["Space Race following Sputnik", "Soviet rocket and capsule development"],
    consequences: [
      "First human spaceflight",
      "Kennedy's commitment to the moon landing",
      "Intensified Space Race",
    ],
    timeline: [
      ["1961-04-12", "Vostok 1", "Gagarin orbits the earth."],
      ["1961-05-05", "Freedom 7", "Alan Shepard's suborbital flight."],
      ["1961-05-25", "Kennedy's moon speech", "To Congress."],
    ],
    people: [["yuri-gagarin", "First human in space"]],
    relations: [["contributed_to", "apollo-11", "Soviet firsts spurred the US commitment to land on the moon."]],
  },
  {
    slug: "construction-of-berlin-wall",
    title: "Construction of the Berlin Wall",
    date: "1961-08-13",
    period: "cold-war",
    category: "politics",
    region: "europe",
    location: "Berlin, Germany",
    places: ["berlin-wall", "berlin"],
    wiki: "Berlin Wall",
    keywords: ["East Germany", "GDR", "Iron Curtain", "Checkpoint Charlie", "Walter Ulbricht"],
    summary:
      "East German authorities sealed the border between East and West Berlin overnight, beginning construction of a wall that divided the city for 28 years.",
    overview:
      "On 13 August 1961, barbed wire and later concrete walls were erected to stop East Germans fleeing to the West. At least 140 people were killed at the Wall during its existence.",
    context:
      "Between 1949 and 1961, about 2.7 million people left East Germany, many through Berlin, draining the country of skilled workers. The East German leader Walter Ulbricht, with Soviet approval, decided to close the border.",
    narrative:
      "Soldiers and police sealed the border in the early hours of a Sunday. Families and friends were separated overnight. Over the years the Wall became a heavily fortified system with a 'death strip', watchtowers and guards ordered to shoot.\n\nIn October 1961, US and Soviet tanks faced each other at Checkpoint Charlie. President Kennedy visited in 1963, declaring 'Ich bin ein Berliner'. The Wall became the most potent symbol of the Cold War division of Europe.",
    causes: [
      "Mass emigration from East Germany",
      "Cold War division of Germany",
      "Soviet and East German decision to stop the exodus",
    ],
    consequences: [
      "Physical division of Berlin for 28 years",
      "Deaths of people trying to cross",
      "Symbol of the Cold War",
    ],
    timeline: [
      ["1961-08-13", "Border sealed", "Wall construction begins."],
      ["1961-10-27", "Checkpoint Charlie standoff", "US and Soviet tanks face off."],
      ["1963-06-26", "Kennedy's Berlin speech", "'Ich bin ein Berliner.'"],
      ["1989-11-09", "Wall opens", "Border crossings opened."],
    ],
    people: [
      ["walter-ulbricht", "East German leader who ordered the Wall"],
      ["john-f-kennedy", "US president"],
    ],
    relations: [
      ["part_of", "cold-war", "The defining symbol of a divided Europe."],
      ["followed_by", "fall-of-the-berlin-wall", "The Wall stood until November 1989."],
    ],
  },
  {
    slug: "cuban-missile-crisis",
    title: "Cuban Missile Crisis",
    date: "1962-10-16",
    end: "1962-10-28",
    period: "cold-war",
    category: "politics",
    region: "latin-america",
    location: "Cuba, Washington and Moscow",
    places: ["havana", "washington-dc"],
    wiki: "Cuban Missile Crisis",
    keywords: ["nuclear war", "Kennedy", "Khrushchev", "blockade", "U-2"],
    summary:
      "The discovery of Soviet nuclear missiles in Cuba led to a 13-day confrontation that brought the United States and the Soviet Union closer to nuclear war than ever before.",
    overview:
      "President Kennedy announced a naval 'quarantine' of Cuba. After intense negotiations, Soviet leader Nikita Khrushchev agreed to remove the missiles; the US secretly agreed to remove its missiles from Turkey and publicly pledged not to invade Cuba.",
    context:
      "After the Bay of Pigs invasion, Cuba sought Soviet protection. Khrushchev also sought to offset US missiles deployed in Turkey and Italy, near Soviet territory.",
    narrative:
      "US U-2 reconnaissance photographs revealed missile sites on 14 October 1962, and Kennedy was briefed on 16 October. On 22 October he announced the quarantine. On 27 October — 'Black Saturday' — a U-2 was shot down over Cuba, and a Soviet submarine officer, Vasily Arkhipov, reportedly refused to agree to launch a nuclear torpedo.\n\nOn 28 October Khrushchev announced the missiles would be withdrawn. The crisis led to the Moscow–Washington hotline and the Partial Nuclear Test Ban Treaty of 1963.",
    causes: [
      "Soviet deployment of nuclear missiles in Cuba",
      "US missiles in Turkey and Italy",
      "Cuban fear of US invasion",
    ],
    consequences: [
      "Withdrawal of Soviet missiles from Cuba and US missiles from Turkey",
      "Moscow–Washington hotline",
      "Partial Nuclear Test Ban Treaty",
    ],
    timeline: [
      ["1962-10-14", "U-2 photographs missile sites", "Over Cuba."],
      ["1962-10-22", "Kennedy announces quarantine", "Televised address."],
      ["1962-10-27", "Black Saturday", "U-2 shot down."],
      ["1962-10-28", "Khrushchev agrees to withdraw", "Crisis ends."],
    ],
    people: [
      ["john-f-kennedy", "US president"],
      ["nikita-khrushchev", "Soviet leader"],
      ["fidel-castro", "Cuban leader"],
    ],
    relations: [["part_of", "cold-war", "The closest the Cold War came to nuclear war."]],
    sources: [
      { url: "https://history.state.gov/milestones/1961-1968/cuban-missile-crisis", title: "The Cuban Missile Crisis, October 1962", publisher: "Office of the Historian, U.S. Department of State", type: "government" },
    ],
  },
  {
    slug: "march-on-washington",
    title: "March on Washington",
    alt: ["I Have a Dream", "Civil rights movement"],
    date: "1963-08-28",
    period: "cold-war",
    category: "society",
    region: "north-america",
    location: "Lincoln Memorial, Washington, D.C.",
    places: ["lincoln-memorial"],
    wiki: "March on Washington for Jobs and Freedom",
    keywords: ["Martin Luther King Jr.", "civil rights", "I Have a Dream", "Civil Rights Act"],
    summary:
      "About 250,000 people marched for civil and economic rights for African Americans; Martin Luther King Jr. delivered his 'I Have a Dream' speech at the Lincoln Memorial.",
    overview:
      "The March on Washington for Jobs and Freedom was one of the largest political rallies in US history. It helped build support for the Civil Rights Act of 1964 and the Voting Rights Act of 1965.",
    context:
      "A century after emancipation, Black Americans faced segregation, disenfranchisement and violence, especially in the South. Campaigns such as the Montgomery bus boycott and the Birmingham protests had drawn national attention.",
    narrative:
      "Organised by A. Philip Randolph, Bayard Rustin and a coalition of civil rights, labour and religious groups, the march was peaceful. Speakers included John Lewis, and performers included Mahalia Jackson, who reportedly urged King to 'tell them about the dream'.\n\nThe Civil Rights Act of 1964 outlawed discrimination based on race, colour, religion, sex or national origin. The Voting Rights Act of 1965 followed the Selma marches. King was assassinated in Memphis in 1968.",
    causes: [
      "Segregation and racial discrimination",
      "Economic inequality and unemployment among Black Americans",
      "Momentum from earlier civil rights campaigns",
    ],
    consequences: [
      "Increased national support for civil rights legislation",
      "Civil Rights Act of 1964 and Voting Rights Act of 1965",
      "King's speech became one of the most famous in history",
    ],
    timeline: [
      ["1955-12-05", "Montgomery bus boycott begins", "After Rosa Parks' arrest."],
      ["1963-08-28", "March on Washington", "'I Have a Dream.'"],
      ["1964-07-02", "Civil Rights Act signed", "By Lyndon B. Johnson."],
      ["1965-08-06", "Voting Rights Act signed", "After Selma."],
    ],
    people: [
      ["martin-luther-king-jr", "Civil rights leader"],
      ["bayard-rustin", "Chief organiser of the march"],
      ["rosa-parks", "Activist whose arrest sparked the Montgomery bus boycott"],
    ],
  },
  {
    slug: "assassination-of-jfk",
    title: "Assassination of John F. Kennedy",
    date: "1963-11-22",
    period: "cold-war",
    category: "politics",
    region: "north-america",
    location: "Dealey Plaza, Dallas, Texas",
    places: ["dallas"],
    wiki: "Assassination of John F. Kennedy",
    keywords: ["JFK", "Lee Harvey Oswald", "Warren Commission", "Dallas", "Lyndon B. Johnson"],
    summary:
      "President John F. Kennedy was shot and killed while riding in a motorcade through Dallas. Lyndon B. Johnson was sworn in as president aboard Air Force One.",
    overview:
      "Kennedy was struck by rifle fire at 12:30 p.m. on 22 November 1963. Lee Harvey Oswald was arrested and charged but was himself shot dead by Jack Ruby two days later.",
    context:
      "Kennedy was preparing for his 1964 re-election campaign and visited Texas to ease divisions in the state Democratic Party.",
    narrative:
      "Shots fired from the Texas School Book Depository struck Kennedy and Texas Governor John Connally. Kennedy was pronounced dead at Parkland Hospital. The Warren Commission concluded in 1964 that Oswald acted alone.\n\nThe assassination shocked the world and fuelled lasting conspiracy theories. Johnson used the national mood to pass Kennedy's civil rights legislation.",
    causes: ["Actions of the assassin, Lee Harvey Oswald (per the Warren Commission)"],
    consequences: [
      "Lyndon B. Johnson became president",
      "Passage of civil rights legislation",
      "Enduring public debate and conspiracy theories",
    ],
    timeline: [
      ["1963-11-22", "Kennedy assassinated", "In Dallas."],
      ["1963-11-24", "Oswald shot", "By Jack Ruby."],
      ["1964-09-24", "Warren Commission report", "Presented to Johnson."],
    ],
    people: [
      ["john-f-kennedy", "35th President of the United States"],
      ["lyndon-b-johnson", "Vice president who succeeded him"],
    ],
  },
  {
    slug: "vietnam-war",
    title: "Vietnam War",
    alt: ["Fall of Saigon", "Second Indochina War"],
    date: "1955-11-01",
    end: "1975-04-30",
    period: "cold-war",
    category: "conflict",
    region: "southeast-asia",
    location: "Vietnam, Laos and Cambodia",
    places: ["saigon", "hanoi"],
    wiki: "Vietnam War",
    keywords: ["Ho Chi Minh", "Viet Cong", "Tet Offensive", "Fall of Saigon", "anti-war movement"],
    summary:
      "A long war between communist North Vietnam and its allies and South Vietnam, backed by the United States, ended with the fall of Saigon and the reunification of Vietnam under communist rule.",
    overview:
      "The war killed an estimated 1.3 to 3 million Vietnamese, as well as tens of thousands of Laotians and Cambodians and over 58,000 Americans. It deeply divided American society.",
    context:
      "After Vietnam defeated France in 1954, the Geneva Accords temporarily divided the country. The United States, fearing a 'domino effect' of communist expansion in Asia, supported the government of South Vietnam.",
    narrative:
      "US involvement escalated after the Gulf of Tonkin incident in 1964; by 1968 more than 500,000 US troops were in Vietnam. Massive bombing, defoliants such as Agent Orange and atrocities including the My Lai massacre caused enormous suffering. The Tet Offensive of 1968 shook American public confidence.\n\nThe Paris Peace Accords of 1973 led to US withdrawal. In April 1975, North Vietnamese forces captured Saigon, and Vietnam was reunified in 1976. Communist governments also took power in Laos and Cambodia, where the Khmer Rouge carried out genocide.",
    causes: [
      "Division of Vietnam after the First Indochina War",
      "Vietnamese nationalist and communist drive for reunification",
      "US policy of containment",
    ],
    consequences: [
      "Millions of deaths and widespread destruction",
      "Reunification of Vietnam under communist rule",
      "Profound impact on US politics and foreign policy",
    ],
    timeline: [
      ["1954-05-07", "Dien Bien Phu", "French defeat."],
      ["1964-08-02", "Gulf of Tonkin incident", "US escalation follows."],
      ["1968-01-30", "Tet Offensive", "Major communist offensive."],
      ["1973-01-27", "Paris Peace Accords", "US withdrawal."],
      ["1975-04-30", "Fall of Saigon", "War ends."],
    ],
    people: [
      ["ho-chi-minh", "Leader of North Vietnam"],
      ["lyndon-b-johnson", "US president who escalated the war"],
    ],
    relations: [["part_of", "cold-war", "The longest proxy war of the Cold War."]],
  },
  {
    slug: "cultural-revolution",
    title: "Cultural Revolution",
    date: "1966-05-16",
    end: "1976-10",
    period: "cold-war",
    category: "politics",
    region: "east-asia",
    location: "People's Republic of China",
    places: ["tiananmen-square"],
    wiki: "Cultural Revolution",
    keywords: ["Mao Zedong", "Red Guards", "Gang of Four", "Little Red Book", "purges"],
    summary:
      "Mao Zedong launched a mass political movement to purge 'capitalist' and traditional elements from Chinese society, leading to a decade of violence and chaos.",
    overview:
      "The Cultural Revolution began in May 1966 and ended with Mao's death and the arrest of the Gang of Four in October 1976. Estimates of deaths range from hundreds of thousands to two million or more.",
    context:
      "After the catastrophic famine of the Great Leap Forward (1959–1961), Mao's authority was weakened. He sought to reassert control and remove rivals such as Liu Shaoqi and Deng Xiaoping.",
    narrative:
      "Students formed Red Guard groups, attacking teachers, officials and 'class enemies' and destroying temples, books and historic sites. Schools and universities closed. Millions of urban youth were sent to the countryside. Factional fighting brought China close to civil war.\n\nAfter Mao's death, the Gang of Four, including his widow Jiang Qing, was arrested. In 1981 the Communist Party officially condemned the Cultural Revolution as a catastrophe. Deng Xiaoping launched economic reforms in 1978.",
    causes: [
      "Mao's desire to reassert authority after the Great Leap Forward",
      "Ideological struggle within the Communist Party",
      "Mobilisation of youth through the personality cult",
    ],
    consequences: [
      "Widespread violence, persecution and death",
      "Destruction of cultural heritage",
      "Reforms under Deng Xiaoping after 1978",
    ],
    timeline: [
      ["1966-05-16", "May 16 Notice", "Revolution launched."],
      ["1966-08-18", "First Red Guard rally", "In Tiananmen Square."],
      ["1976-09-09", "Death of Mao", "In Beijing."],
      ["1976-10-06", "Gang of Four arrested", "Revolution ends."],
    ],
    people: [
      ["mao-zedong", "Chairman of the Chinese Communist Party"],
      ["deng-xiaoping", "Purged leader who later launched reforms"],
    ],
    relations: [["followed_by", "tiananmen-square-protests", "Reform-era tensions erupted in the 1989 protests."]],
  },
  {
    slug: "apollo-11",
    title: "Apollo 11 Moon landing",
    alt: ["Moon landing", "First moon landing", "Apollo 11"],
    date: "1969-07-20",
    period: "cold-war",
    category: "exploration",
    region: "global",
    location: "Sea of Tranquility, the Moon",
    places: ["tranquility-base", "kennedy-space-center"],
    wiki: "Apollo 11",
    featured: true,
    keywords: ["Neil Armstrong", "Buzz Aldrin", "Michael Collins", "NASA", "Eagle", "Saturn V"],
    summary:
      "NASA's Apollo 11 mission landed the first humans on the Moon. Neil Armstrong and Buzz Aldrin walked on the lunar surface while Michael Collins orbited above.",
    overview:
      "The lunar module Eagle touched down at 20:17 UTC on 20 July 1969. Armstrong stepped onto the surface about six and a half hours later, saying, 'That's one small step for [a] man, one giant leap for mankind.'",
    context:
      "In 1961, after Soviet space firsts, President Kennedy set the goal of landing a man on the moon before 1970. The Apollo programme employed hundreds of thousands of people. Apollo 8 orbited the moon in December 1968.",
    narrative:
      "Apollo 11 launched on a Saturn V rocket from Kennedy Space Center on 16 July. During the descent, computer alarms and a boulder-strewn landing site forced Armstrong to take manual control, landing with limited fuel remaining. The astronauts spent about two and a half hours outside, collecting 21.5 kilograms of samples, deploying experiments and planting a US flag.\n\nThe crew returned to earth on 24 July, splashing down in the Pacific. An estimated 650 million people watched the moonwalk on television. Five more Apollo missions landed on the moon by 1972; no humans have returned since.",
    causes: [
      "The Space Race with the Soviet Union",
      "Kennedy's 1961 commitment",
      "Massive investment in the Apollo programme",
    ],
    consequences: [
      "First humans on another world",
      "Fulfilled the US goal in the Space Race",
      "Scientific samples transformed understanding of the Moon's origin",
    ],
    timeline: [
      ["1961-05-25", "Kennedy's moon goal", "Announced to Congress."],
      ["1969-07-16", "Launch", "From Kennedy Space Center."],
      ["1969-07-20", "Landing", "Eagle lands at Tranquility Base."],
      ["1969-07-24", "Splashdown", "Crew returns safely."],
    ],
    people: [
      ["neil-armstrong", "Commander; first person to walk on the Moon"],
      ["buzz-aldrin", "Lunar module pilot"],
      ["michael-collins", "Command module pilot"],
    ],
    relations: [["occurred_during", "cold-war", "The climax of the US–Soviet Space Race."]],
    sources: [
      { url: "https://www.nasa.gov/mission/apollo-11/", title: "Apollo 11", publisher: "NASA", type: "government" },
      { url: "https://airandspace.si.edu/explore/stories/apollo-missions/apollo-11-moon-landing", title: "Apollo 11: The Moon Landing", publisher: "Smithsonian National Air and Space Museum", type: "museum" },
    ],
  },
  {
    slug: "arpanet",
    title: "First ARPANET message",
    alt: ["ARPANET", "Birth of the internet"],
    date: "1969-10-29",
    period: "cold-war",
    category: "technology",
    region: "north-america",
    location: "UCLA and Stanford Research Institute, California",
    places: ["ucla"],
    wiki: "ARPANET",
    keywords: ["internet", "packet switching", "Leonard Kleinrock", "TCP/IP", "computer networks"],
    summary:
      "Researchers at UCLA sent the first message over ARPANET to the Stanford Research Institute, a precursor of the internet.",
    overview:
      "On 29 October 1969, student programmer Charley Kline attempted to type 'LOGIN'; the system crashed after 'LO'. ARPANET used packet switching and later adopted TCP/IP, the basis of the modern internet.",
    context:
      "The US Department of Defense's Advanced Research Projects Agency (ARPA), created after Sputnik, funded research to link computers at universities. Packet switching had been developed independently by Paul Baran and Donald Davies.",
    narrative:
      "By December 1969, four nodes were connected: UCLA, SRI, UC Santa Barbara and the University of Utah. Email was introduced in 1971. Vint Cerf and Bob Kahn designed TCP/IP, and ARPANET switched to it on 1 January 1983.\n\nARPANET was decommissioned in 1990 as the broader internet grew. Tim Berners-Lee's World Wide Web, built on top of the internet, transformed it into a mass medium.",
    causes: [
      "ARPA funding for computer research",
      "Packet-switching theory",
      "Desire to share computing resources",
    ],
    consequences: [
      "Birth of computer networking",
      "Development of email and TCP/IP",
      "Foundation of the internet",
    ],
    timeline: [
      ["1969-10-29", "First message", "UCLA to SRI."],
      ["1971", "First network email", "Sent by Ray Tomlinson."],
      ["1983-01-01", "Switch to TCP/IP", "Flag day."],
      ["1990", "ARPANET decommissioned", "Superseded by the internet."],
    ],
    people: [["leonard-kleinrock", "Computer scientist whose UCLA lab sent the message"]],
    relations: [["contributed_to", "world-wide-web", "The Web was built on the internet that grew from ARPANET."]],
  },
  {
    slug: "terracotta-army-discovery",
    title: "Discovery of the Terracotta Army",
    date: "1974-03-29",
    period: "cold-war",
    category: "archaeology",
    region: "east-asia",
    location: "Lintong District, Xi'an, Shaanxi, China",
    places: ["mausoleum-of-qin-shi-huang"],
    civ: ["ancient-china"],
    wiki: "Terracotta Army",
    discovery: true,
    keywords: ["Qin Shi Huang", "archaeology", "Xi'an", "tomb", "warriors"],
    summary:
      "Farmers digging a well near Xi'an uncovered fragments of life-sized terracotta soldiers, part of an army buried to guard the tomb of the First Emperor of China.",
    overview:
      "Excavations have revealed thousands of individually modelled warriors, horses and chariots in pits near the mausoleum of Qin Shi Huang, who died in 210 BCE.",
    context:
      "Ancient historian Sima Qian described the First Emperor's lavish tomb but did not mention a terracotta army. The site lay undisturbed for over two thousand years.",
    narrative:
      "Archaeologists estimate that the three main pits contain about 8,000 soldiers, 130 chariots and 670 horses. Each figure has distinctive facial features, and many were originally brightly painted. Bronze weapons found with them were still sharp.\n\nThe emperor's burial mound itself has not been excavated, partly to protect its contents. The site was inscribed as a UNESCO World Heritage Site in 1987.",
    causes: ["Accidental discovery by farmers digging a well"],
    consequences: [
      "One of the greatest archaeological finds of the twentieth century",
      "New insights into Qin military organisation and craftsmanship",
      "Major heritage site and symbol of China",
    ],
    timeline: [
      ["-210", "Death of Qin Shi Huang", "Buried near Mount Li."],
      ["1974-03-29", "Discovery", "Farmers find fragments."],
      ["1987", "UNESCO World Heritage Site", "Mausoleum of the First Qin Emperor."],
    ],
    people: [["qin-shi-huang", "First Emperor whose tomb the army guards"]],
  },
  {
    slug: "iranian-revolution",
    title: "Iranian Revolution",
    alt: ["Islamic Revolution"],
    date: "1978-01",
    end: "1979-02-11",
    period: "cold-war",
    category: "politics",
    region: "middle-east",
    location: "Iran",
    places: ["tehran"],
    wiki: "Iranian Revolution",
    keywords: ["Ayatollah Khomeini", "Shah", "Islamic Republic", "Pahlavi", "hostage crisis"],
    summary:
      "Mass protests overthrew the Shah of Iran, Mohammad Reza Pahlavi, and led to the establishment of the Islamic Republic under Ayatollah Ruhollah Khomeini.",
    overview:
      "The Shah left Iran on 16 January 1979, and Khomeini returned from exile on 1 February. The monarchy fell on 11 February, and a referendum created an Islamic Republic in April 1979.",
    context:
      "The Shah's rapid modernisation, close ties to the United States, inequality and repression by the SAVAK secret police generated broad opposition from clerics, leftists, students and the bazaar merchants.",
    narrative:
      "Protests that began in 1978 grew into strikes and demonstrations of millions. Khomeini, exiled since 1964, became the symbol of opposition. After the Shah's departure, Khomeini's supporters consolidated power over secular and leftist groups.\n\nIn November 1979, students seized the US embassy in Tehran, holding 52 Americans hostage for 444 days. Iraq invaded Iran in 1980, beginning an eight-year war.",
    causes: [
      "Authoritarian rule and repression under the Shah",
      "Economic inequality and rapid modernisation",
      "Religious opposition led by Khomeini",
    ],
    consequences: [
      "Establishment of the Islamic Republic of Iran",
      "Iran hostage crisis and break with the United States",
      "Iran–Iraq War (1980–1988)",
    ],
    timeline: [
      ["1978-01-07", "Protests begin", "In Qom."],
      ["1979-01-16", "Shah leaves Iran", "Into exile."],
      ["1979-02-01", "Khomeini returns", "From Paris."],
      ["1979-11-04", "US embassy seized", "Hostage crisis."],
    ],
    people: [
      ["ruhollah-khomeini", "Leader of the revolution"],
      ["mohammad-reza-pahlavi", "Last Shah of Iran"],
    ],
  },
  {
    slug: "chernobyl-disaster",
    title: "Chernobyl disaster",
    date: "1986-04-26",
    period: "cold-war",
    category: "disaster",
    region: "europe",
    location: "Chernobyl Nuclear Power Plant, Pripyat, Ukrainian SSR",
    places: ["chernobyl-nuclear-power-plant", "pripyat"],
    wiki: "Chernobyl disaster",
    keywords: ["nuclear accident", "radiation", "Pripyat", "RBMK reactor", "exclusion zone"],
    summary:
      "An explosion and fire at reactor No. 4 of the Chernobyl nuclear plant released large amounts of radioactive material across Europe — the worst nuclear accident in history.",
    overview:
      "The accident occurred at 1:23 a.m. on 26 April 1986 during a safety test. Thirty-one people died in the immediate aftermath, and the long-term death toll from radiation remains debated. More than 300,000 people were relocated.",
    context:
      "The RBMK reactor design had serious flaws, including instability at low power. The test was carried out in violation of safety procedures by operators under pressure.",
    narrative:
      "A power surge caused steam explosions that destroyed the reactor and exposed its core. Firefighters, many of whom later died from radiation sickness, fought the blaze. The nearby city of Pripyat was evacuated only after 36 hours. Soviet authorities initially concealed the disaster; it became known abroad when radiation was detected in Sweden.\n\nA concrete 'sarcophagus' was built over the reactor, replaced by the New Safe Confinement in 2016. The disaster undermined trust in the Soviet system and Gorbachev's glasnost policy.",
    causes: [
      "Flawed RBMK reactor design",
      "Violation of safety procedures during a test",
      "Culture of secrecy in the Soviet nuclear industry",
    ],
    consequences: [
      "Radioactive contamination across Europe",
      "Creation of the Chernobyl Exclusion Zone",
      "Damaged the credibility of the Soviet government",
    ],
    timeline: [
      ["1986-04-26", "Explosion", "At 1:23 a.m."],
      ["1986-04-27", "Pripyat evacuated", "About 49,000 residents."],
      ["1986-04-28", "Radiation detected in Sweden", "World learns of the disaster."],
      ["2016-11-29", "New Safe Confinement", "Placed over the reactor."],
    ],
    people: [["mikhail-gorbachev", "Soviet leader at the time"]],
    relations: [["contributed_to", "dissolution-of-soviet-union", "The disaster damaged trust in the Soviet state."]],
  },
  {
    slug: "tiananmen-square-protests",
    title: "Tiananmen Square protests and massacre",
    alt: ["June Fourth Incident", "1989 Tiananmen Square protests"],
    date: "1989-04-15",
    end: "1989-06-04",
    period: "cold-war",
    category: "society",
    region: "east-asia",
    location: "Tiananmen Square, Beijing",
    places: ["tiananmen-square"],
    wiki: "1989 Tiananmen Square protests and massacre",
    keywords: ["pro-democracy", "students", "Tank Man", "martial law", "June 4"],
    summary:
      "Student-led protests calling for political reform filled Tiananmen Square for seven weeks before the Chinese government sent troops and tanks, killing hundreds to possibly thousands of people.",
    overview:
      "The protests began after the death of reformist leader Hu Yaobang on 15 April 1989. Martial law was declared on 20 May, and the army cleared the square on the night of 3–4 June.",
    context:
      "Economic reforms had brought growth but also inflation and corruption. Students and intellectuals called for freedom of speech, press freedom and accountability.",
    narrative:
      "At their height, the protests drew around a million people in Beijing and spread to other cities. Students staged a hunger strike, and a 'Goddess of Democracy' statue was erected. Party leader Zhao Ziyang, who sympathised with the protesters, was purged.\n\nTroops fired on civilians in the streets around the square. The image of an unidentified man standing in front of a column of tanks on 5 June became iconic. The Chinese government has suppressed discussion of the events ever since.",
    causes: [
      "Demands for political reform and free expression",
      "Inflation and corruption during economic reform",
      "Death of Hu Yaobang",
    ],
    consequences: [
      "Violent suppression and deaths of protesters",
      "Tightened political control in China",
      "International sanctions and condemnation",
    ],
    timeline: [
      ["1989-04-15", "Hu Yaobang dies", "Mourning turns to protest."],
      ["1989-05-13", "Hunger strike begins", "In the square."],
      ["1989-05-20", "Martial law declared", "In Beijing."],
      ["1989-06-04", "Square cleared", "Troops open fire."],
    ],
    people: [["deng-xiaoping", "Paramount leader who approved the crackdown"]],
    relations: [["related_to", "fall-of-the-berlin-wall", "1989 brought mass protest against communist governments in both Asia and Europe, with very different outcomes."]],
  },
  {
    slug: "fall-of-the-berlin-wall",
    title: "Fall of the Berlin Wall",
    alt: ["Mauerfall", "Berlin Wall falls"],
    date: "1989-11-09",
    period: "cold-war",
    category: "politics",
    region: "europe",
    location: "Berlin, East and West Germany",
    places: ["berlin-wall", "brandenburg-gate"],
    wiki: "Fall of the Berlin Wall",
    featured: true,
    keywords: ["Mauerfall", "East Germany", "Revolutions of 1989", "Schabowski", "German reunification"],
    summary:
      "After a confused announcement by an East German official, crowds forced open the border crossings of the Berlin Wall, ending 28 years of division.",
    overview:
      "On the evening of 9 November 1989, government spokesman Günter Schabowski announced new travel rules, mistakenly saying they took effect 'immediately'. Thousands gathered at the crossings, and guards at Bornholmer Straße opened the gates.",
    context:
      "In 1989, reforms in the Soviet Union under Gorbachev, Hungary's opening of its border with Austria and mass protests in East German cities such as Leipzig had put enormous pressure on the East German government. Erich Honecker was forced out in October.",
    narrative:
      "Schabowski's press conference, broadcast live, was meant to announce a regulated loosening of travel. Asked when it began, he shuffled his papers and replied, 'As far as I know... immediately, without delay.' Crowds overwhelmed the guards, and by midnight East Berliners were crossing freely, celebrating with West Berliners on top of the Wall.\n\nIn the following weeks, people chipped at the Wall with hammers and chisels, and official demolition began in 1990. Communist regimes across Eastern Europe fell. Germany was reunified on 3 October 1990.",
    causes: [
      "Gorbachev's reforms and refusal to intervene militarily",
      "Mass emigration via Hungary and Czechoslovakia",
      "Peaceful protests in East Germany",
      "Schabowski's mistaken announcement",
    ],
    consequences: [
      "Opening of the border between East and West",
      "Collapse of the East German regime",
      "German reunification in 1990",
      "Symbolic end of the Cold War division of Europe",
    ],
    timeline: [
      ["1989-05-02", "Hungary dismantles border fence", "With Austria."],
      ["1989-10-09", "Leipzig demonstration", "70,000 march peacefully."],
      ["1989-10-18", "Honecker resigns", "Replaced by Egon Krenz."],
      ["1989-11-09", "Wall opens", "Border crossings overwhelmed."],
      ["1990-10-03", "German reunification", "GDR joins the Federal Republic."],
    ],
    people: [
      ["mikhail-gorbachev", "Soviet leader whose reforms made change possible"],
      ["gunter-schabowski", "Official whose announcement triggered the opening"],
      ["helmut-kohl", "West German chancellor"],
    ],
    relations: [
      ["led_to", "german-reunification", "The opening of the border made reunification possible within a year."],
      ["contributed_to", "dissolution-of-soviet-union", "The collapse of the Eastern Bloc hastened the USSR's end."],
    ],
  },
  {
    slug: "world-wide-web",
    title: "Invention of the World Wide Web",
    date: "1989-03",
    end: "1991-08-06",
    period: "cold-war",
    category: "technology",
    region: "europe",
    location: "CERN, Geneva, Switzerland",
    places: ["cern"],
    wiki: "World Wide Web",
    keywords: ["Tim Berners-Lee", "CERN", "HTML", "HTTP", "hypertext"],
    summary:
      "Tim Berners-Lee proposed and built a system of linked hypertext documents at CERN, creating the World Wide Web.",
    overview:
      "Berners-Lee submitted his proposal in March 1989. By the end of 1990 he had built the first web server, browser and website. The Web was made available publicly in August 1991, and CERN released it royalty-free in 1993.",
    context:
      "Scientists at CERN struggled to share information across different computers. The internet already connected networks, but finding and linking documents was difficult.",
    narrative:
      "Berners-Lee developed HTML, HTTP and URLs. The first website, info.cern.ch, explained the project. His colleague Robert Cailliau helped promote it. The release of the software into the public domain in April 1993 and the Mosaic browser that year led to explosive growth.\n\nBerners-Lee founded the World Wide Web Consortium (W3C) in 1994 to develop open standards. The Web transformed communication, commerce, politics and culture.",
    causes: [
      "Information-sharing problems at CERN",
      "Existing internet infrastructure",
      "Hypertext concepts developed earlier",
    ],
    consequences: [
      "Made the internet accessible to the public",
      "Transformed commerce, media and communication",
      "Open standards through the W3C",
    ],
    timeline: [
      ["1989-03", "Proposal submitted", "'Information Management: A Proposal'."],
      ["1990-12-20", "First website", "info.cern.ch."],
      ["1991-08-06", "Web publicly available", "Announced on Usenet."],
      ["1993-04-30", "Released royalty-free", "By CERN."],
    ],
    people: [["tim-berners-lee", "Inventor of the World Wide Web"]],
    sources: [
      { url: "https://home.cern/science/computing/birth-web", title: "The birth of the Web", publisher: "CERN", type: "institution" },
    ],
  },
  {
    slug: "german-reunification",
    title: "German reunification",
    date: "1990-10-03",
    period: "cold-war",
    category: "politics",
    region: "europe",
    location: "Berlin, Germany",
    places: ["berlin", "reichstag-building"],
    wiki: "German reunification",
    keywords: ["Two Plus Four Treaty", "Helmut Kohl", "GDR", "Unity Day"],
    summary:
      "The German Democratic Republic joined the Federal Republic of Germany, reuniting the country 45 years after its division.",
    overview:
      "Reunification took effect on 3 October 1990, now German Unity Day. The Two Plus Four Treaty, signed by the two German states and the four wartime Allies, restored full German sovereignty.",
    context:
      "After the Wall fell, East Germany held its first free elections in March 1990, won by parties favouring rapid unification. A monetary union introduced the Deutsche Mark in the East in July.",
    narrative:
      "Chancellor Helmut Kohl pressed for rapid unification, and Gorbachev agreed that a united Germany could remain in NATO. The Two Plus Four Treaty was signed in Moscow on 12 September 1990. At midnight on 3 October, celebrations were held at the Reichstag in Berlin.\n\nUnification brought freedom but also economic shock to the East, where many industries collapsed and unemployment rose. Differences in income and attitudes between eastern and western Germany persist.",
    causes: [
      "Fall of the Berlin Wall",
      "Collapse of the East German state",
      "Agreement of the four wartime Allies",
    ],
    consequences: [
      "A unified, sovereign Germany within NATO and the European Community",
      "Economic restructuring in the former East",
      "Shift in the European balance of power",
    ],
    timeline: [
      ["1990-03-18", "East German elections", "First free vote."],
      ["1990-07-01", "Monetary union", "Deutsche Mark in the East."],
      ["1990-09-12", "Two Plus Four Treaty", "Signed in Moscow."],
      ["1990-10-03", "Reunification", "German Unity Day."],
    ],
    people: [["helmut-kohl", "Chancellor of reunified Germany"]],
    relations: [["contributed_to", "maastricht-treaty", "A united Germany committed itself to deeper European integration."]],
  },
  {
    slug: "dissolution-of-soviet-union",
    title: "Dissolution of the Soviet Union",
    alt: ["Collapse of the USSR", "End of the Cold War"],
    date: "1991-12-26",
    period: "cold-war",
    category: "politics",
    region: "europe",
    location: "Moscow, Soviet Union",
    places: ["moscow", "kremlin"],
    wiki: "Dissolution of the Soviet Union",
    keywords: ["Gorbachev", "Yeltsin", "August coup", "Belovezha Accords", "Commonwealth of Independent States"],
    summary:
      "The Soviet Union formally ceased to exist, splitting into fifteen independent states. Mikhail Gorbachev resigned the day before.",
    overview:
      "After the failed hardline coup of August 1991, republics declared independence. The leaders of Russia, Ukraine and Belarus signed the Belovezha Accords on 8 December. On 25 December Gorbachev resigned, and the Soviet flag was lowered over the Kremlin; the USSR was formally dissolved on 26 December.",
    context:
      "Gorbachev's reforms — glasnost (openness) and perestroika (restructuring) — loosened state control but failed to fix a stagnating economy. Nationalist movements grew in the Baltic states, the Caucasus and Ukraine.",
    narrative:
      "In August 1991, hardliners detained Gorbachev and attempted to seize power. Boris Yeltsin, president of the Russian republic, rallied resistance from atop a tank outside the Russian parliament, and the coup collapsed within three days. The Communist Party was suspended.\n\nThe new states, including Russia, Ukraine and Kazakhstan, faced economic collapse and political turmoil in the 1990s. The end of the USSR marked the end of the Cold War and left the United States as the sole superpower.",
    causes: [
      "Economic stagnation and failed reforms",
      "Nationalist movements in the republics",
      "Failed August 1991 coup",
    ],
    consequences: [
      "Independence of fifteen post-Soviet states",
      "End of the Cold War",
      "Economic and political upheaval in the 1990s",
    ],
    timeline: [
      ["1985-03-11", "Gorbachev becomes leader", "Reforms begin."],
      ["1991-08-19", "August coup", "Hardliners attempt to seize power."],
      ["1991-12-08", "Belovezha Accords", "Russia, Ukraine and Belarus agree to dissolve the USSR."],
      ["1991-12-26", "USSR dissolved", "Supreme Soviet votes itself out of existence."],
    ],
    people: [
      ["mikhail-gorbachev", "Last leader of the Soviet Union"],
      ["boris-yeltsin", "President of Russia"],
    ],
    relations: [["part_of", "cold-war", "The event that ended the Cold War."]],
  },
];
