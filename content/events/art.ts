import type { EventSeed } from "../types";

/** Landmark works of art. Dates follow the holding museums and the scholarly consensus summarised on Wikipedia. */
export const artEvents: EventSeed[] = [
  {
    slug: "the-last-supper",
    title: "Leonardo paints The Last Supper",
    alt: ["The Last Supper (Leonardo)", "Il Cenacolo"],
    date: "~1495",
    end: "~1498",
    period: "early-modern",
    category: "culture",
    region: "europe",
    location: "Santa Maria delle Grazie, Milan",
    places: ["milan", "santa-maria-delle-grazie"],
    wiki: "The Last Supper (Leonardo)",
    keywords: ["Leonardo da Vinci", "mural", "Renaissance", "Ludovico Sforza", "restoration"],
    summary:
      "Leonardo da Vinci painted the moment Jesus announces that one of his apostles will betray him on the refectory wall of a Milanese convent. Its experimental technique began to decay within decades.",
    overview:
      "Commissioned by Ludovico Sforza, Duke of Milan, the mural measures about 4.6 by 8.8 metres. Leonardo painted in tempera and oil on dry plaster rather than true fresco, which allowed him to work slowly but made the paint flake. A restoration completed in 1999 took more than twenty years.",
    context:
      "Leonardo had moved to Milan in the early 1480s to work for Ludovico Sforza. The Dominican convent of Santa Maria delle Grazie was being rebuilt under Sforza patronage, and paintings of the Last Supper were a traditional subject for monastic dining halls.",
    narrative:
      "Leonardo arranged the twelve apostles in four groups of three, reacting with alarm to Jesus's words, with Judas leaning back into shadow. The composition uses a single vanishing point at Jesus's head, drawing the eye to the centre.\n\nBecause the technique did not bind the paint to the wall, deterioration was noted within Leonardo's lifetime. The mural survived a door cut through its lower edge in 1652, Napoleonic troops quartered in the refectory, and an Allied bomb in August 1943 that destroyed much of the room while the wall, protected by sandbags, stood. The restoration of 1978–1999 removed centuries of overpainting.",
    causes: [
      "Ludovico Sforza's patronage of the convent",
      "The monastic tradition of Last Supper images in refectories",
      "Leonardo's interest in expression and perspective",
    ],
    consequences: [
      "One of the most reproduced religious paintings in the world",
      "A model for High Renaissance composition",
      "A cautionary example in the history of conservation",
    ],
    timeline: [
      ["~1495", "Work begins", "Leonardo starts the mural."],
      ["~1498", "Mural completed", "For Ludovico Sforza."],
      ["1943-08", "Allied bombing", "The refectory is badly damaged; the wall survives."],
      ["1999-05", "Restoration completed", "After more than twenty years."],
    ],
    people: [
      ["leonardo-da-vinci", "Painter"],
      ["ludovico-sforza", "Duke of Milan and patron"],
    ],
    relations: [["related_to", "crucifixion-of-jesus", "The mural depicts the meal that, in the Gospels, precedes Jesus's arrest and crucifixion."]],
  },
  {
    slug: "michelangelos-david",
    title: "Michelangelo's David",
    alt: ["David (Michelangelo)"],
    date: "1501",
    end: "1504-09-08",
    period: "early-modern",
    category: "culture",
    region: "europe",
    location: "Florence",
    places: ["florence", "galleria-dell-accademia"],
    wiki: "David (Michelangelo)",
    keywords: ["sculpture", "marble", "Renaissance", "Florence", "Michelangelo"],
    summary:
      "Michelangelo carved a 5-metre marble statue of the biblical hero David from a block other sculptors had abandoned. It became a symbol of the Florentine Republic.",
    overview:
      "The statue was commissioned by the works office of Florence Cathedral, but on its completion a committee of artists decided to place it in front of the Palazzo della Signoria, the seat of government. It was unveiled there on 8 September 1504. Since 1873 the original has stood in the Galleria dell'Accademia.",
    context:
      "The marble block had been quarried at Carrara decades earlier, and the sculptors Agostino di Duccio and Antonio Rossellino had both worked on it and stopped. Florence had expelled the Medici in 1494 and saw David, the underdog who defeated Goliath, as an emblem of its republic.",
    narrative:
      "Michelangelo, then in his mid-twenties, began carving in 1501. Unlike earlier statues that showed David triumphant over Goliath's head, his figure appears tense and watchful, before the fight. The proportions of the head and hands are enlarged, probably because the statue was first intended to be seen from below.\n\nMoving the finished statue from the workshop to the square took four days. It stood outdoors for more than 350 years before being moved indoors to protect it from weathering; a marble copy has occupied the original site since 1910.",
    causes: [
      "A cathedral commission for a series of Old Testament figures",
      "Florentine republican identity after the Medici's expulsion",
      "Michelangelo's growing reputation after the Pietà",
    ],
    consequences: [
      "A defining image of the High Renaissance",
      "A civic symbol of Florence",
      "Michelangelo's fame established in his twenties",
    ],
    timeline: [
      ["1501", "Michelangelo begins carving", "From an abandoned block."],
      ["1504-09-08", "Unveiled", "In front of the Palazzo della Signoria."],
      ["1873", "Moved indoors", "To the Galleria dell'Accademia."],
      ["1910", "Replica installed", "On the original site."],
    ],
    people: [["michelangelo", "Sculptor"]],
    relations: [["followed_by", "sistine-chapel-ceiling", "Four years later Pope Julius II called Michelangelo to Rome to paint the Sistine Chapel ceiling."]],
  },
  {
    slug: "mona-lisa",
    title: "Leonardo paints the Mona Lisa",
    alt: ["Mona Lisa", "La Gioconda", "La Joconde"],
    date: "~1503",
    end: "~1519",
    period: "early-modern",
    category: "culture",
    region: "europe",
    location: "Florence; later France",
    places: ["florence", "louvre"],
    wiki: "Mona Lisa",
    featured: true,
    keywords: ["Leonardo da Vinci", "portrait", "Louvre", "sfumato", "Lisa Gherardini", "Renaissance"],
    summary:
      "Leonardo da Vinci began a portrait of Lisa Gherardini, wife of a Florentine silk merchant, and kept refining it for years. It is now probably the most famous painting in the world.",
    overview:
      "The oil painting on a poplar panel measures only 77 by 53 centimetres. Leonardo never delivered it to the sitter's family and took it with him to France, where it entered the French royal collection. It has hung in the Louvre since the French Revolution, apart from wartime evacuations and a theft in 1911.",
    context:
      "Leonardo returned to Florence in 1500 after Milan fell to the French. The portrait was probably commissioned by Francesco del Giocondo; the sitter's identity is supported by a 1503 note by the Florentine official Agostino Vespucci.",
    narrative:
      "Leonardo used sfumato, a technique of soft, smoky transitions between tones built up in thin glazes, which gives the face its elusive expression. The sitter is shown half-length in front of an imaginary landscape, a format that influenced Renaissance portraiture.\n\nOn 21 August 1911 the painting was stolen from the Louvre by Vincenzo Peruggia, an Italian handyman. It was recovered in Florence in December 1913, and the publicity made it an international icon. Today it is displayed behind protective glass and is seen by millions of visitors a year.",
    causes: [
      "A portrait commission from a Florentine merchant family",
      "Leonardo's decades of study of optics and anatomy",
    ],
    consequences: [
      "A model for Renaissance portraiture",
      "Global fame, amplified by the 1911 theft",
      "A central attraction of the Louvre",
    ],
    timeline: [
      ["~1503", "Leonardo begins the portrait", "In Florence."],
      ["1516", "Leonardo moves to France", "He takes the painting with him."],
      ["1797", "Displayed at the Louvre", "After the French Revolution."],
      ["1911-08-21", "Stolen", "By Vincenzo Peruggia."],
      ["1913-12", "Recovered", "In Florence."],
    ],
    people: [
      ["leonardo-da-vinci", "Painter"],
      ["lisa-del-giocondo", "Sitter"],
    ],
    relations: [["related_to", "the-last-supper", "Leonardo's two most famous paintings."]],
  },
  {
    slug: "sistine-chapel-ceiling",
    title: "Michelangelo paints the Sistine Chapel ceiling",
    alt: ["Sistine Chapel ceiling", "The Creation of Adam"],
    date: "1508",
    end: "1512-10-31",
    period: "early-modern",
    category: "culture",
    region: "europe",
    location: "Sistine Chapel, Vatican, Rome",
    places: ["sistine-chapel", "rome"],
    wiki: "Sistine Chapel ceiling",
    featured: true,
    keywords: ["Michelangelo", "fresco", "Creation of Adam", "Pope Julius II", "Vatican", "Renaissance"],
    summary:
      "Over four years Michelangelo painted the vault of the pope's chapel with scenes from Genesis, including the Creation of Adam, transforming the art of the High Renaissance.",
    overview:
      "Commissioned by Pope Julius II, the frescoes cover more than 500 square metres. Nine central panels tell the story from the Creation to Noah, surrounded by prophets, sibyls and the ancestors of Christ. The ceiling was unveiled on 31 October 1512.",
    context:
      "Michelangelo regarded himself primarily as a sculptor and had been working on Julius II's tomb when the pope assigned him the ceiling. The chapel, built under Sixtus IV in the 1470s, already had wall frescoes by Botticelli, Perugino and others.",
    narrative:
      "Michelangelo designed his own scaffolding and painted standing, with his head tilted back, a strain he described in a satirical poem. He worked in true fresco, applying paint to wet plaster day by day. The style grew bolder as the work progressed; the later figures are larger and more dynamic.\n\nMichelangelo returned to the chapel in 1536–1541 to paint the Last Judgment on the altar wall. A restoration from 1980 to 1994 removed centuries of grime and revealed the original bright colours, which surprised many scholars.",
    causes: [
      "Pope Julius II's programme to glorify the papacy and Rome",
      "Michelangelo's reputation after the David",
    ],
    consequences: [
      "A defining achievement of Western art",
      "The Creation of Adam became one of the most reproduced images",
      "Influence on Mannerism and later painters",
    ],
    timeline: [
      ["1508-05", "Work begins", "Contract with Pope Julius II."],
      ["1510-08", "First half completed", "Scaffolding moved."],
      ["1512-10-31", "Ceiling unveiled", "Vespers held in the chapel."],
      ["1541-10", "Last Judgment completed", "On the altar wall."],
    ],
    people: [
      ["michelangelo", "Painter"],
      ["pope-julius-ii", "Pope who commissioned the frescoes"],
    ],
    relations: [["related_to", "ninety-five-theses", "Papal spending on Rome's art and buildings, including St Peter's, was financed partly by indulgences that Luther attacked."]],
  },
  {
    slug: "birth-of-venus",
    title: "Botticelli paints The Birth of Venus",
    alt: ["The Birth of Venus", "Nascita di Venere"],
    date: "~1485",
    period: "early-modern",
    category: "culture",
    region: "europe",
    location: "Florence",
    places: ["florence", "uffizi"],
    wiki: "The Birth of Venus",
    keywords: ["Sandro Botticelli", "Venus", "mythology", "Uffizi", "Renaissance", "Medici"],
    summary:
      "Sandro Botticelli painted the goddess Venus arriving on a shell, one of the first large-scale Renaissance paintings of a classical mythological subject.",
    overview:
      "The tempera painting on canvas, about 1.7 by 2.8 metres, is usually dated to the mid-1480s. It is believed to have been made for a member of the Medici family and has been in the Uffizi Gallery in Florence since 1815.",
    context:
      "Florentine humanists revived the study of classical literature and philosophy. Botticelli's subject draws on ancient poetry describing the goddess of love born from the sea and blown ashore by the winds.",
    narrative:
      "Venus stands on a scallop shell at the centre. Zephyr, the west wind, blows her toward the shore, where a figure usually identified as one of the Horae, goddesses of the seasons, waits to cover her with a cloak. The figure's pose recalls ancient statues of Venus.\n\nPaintings of nude mythological figures on this scale were unusual in fifteenth-century Italy. The work fell out of favour for centuries, but nineteenth-century critics and the Pre-Raphaelites revived Botticelli's reputation.",
    causes: [
      "The humanist revival of classical mythology in Florence",
      "Medici patronage of the arts",
    ],
    consequences: [
      "An icon of the Italian Renaissance",
      "Revived interest in Botticelli in the nineteenth century",
      "A central work of the Uffizi collection",
    ],
    timeline: [
      ["~1485", "Painted", "In Florence."],
      ["1815", "Enters the Uffizi", "Moved from the Medici villa at Castello."],
    ],
    people: [["sandro-botticelli", "Painter"]],
    relations: [["related_to", "mona-lisa", "Both masterpieces of the Florentine Renaissance."]],
  },
  {
    slug: "las-meninas",
    title: "Velázquez paints Las Meninas",
    alt: ["Las Meninas", "The Ladies-in-waiting"],
    date: "1656",
    period: "early-modern",
    category: "culture",
    region: "europe",
    location: "Royal Alcázar, Madrid",
    places: ["madrid", "museo-del-prado"],
    wiki: "Las Meninas",
    keywords: ["Diego Velázquez", "Spanish Golden Age", "Prado", "Philip IV", "portrait"],
    summary:
      "Diego Velázquez painted the young Infanta Margarita Teresa and her attendants, including himself at his easel, in a complex scene that has puzzled and fascinated viewers ever since.",
    overview:
      "The large canvas, about 3.2 by 2.8 metres, shows a room in the royal palace in Madrid. A mirror on the back wall reflects King Philip IV and Queen Mariana, apparently standing where the viewer stands. The painting is in the Museo del Prado.",
    context:
      "Velázquez was court painter to Philip IV of Spain for more than thirty years and held senior posts in the royal household. Spain's political power was declining, but its art flourished in the Golden Age.",
    narrative:
      "The scene includes the Infanta, two ladies-in-waiting (meninas), a chaperone, a bodyguard, two dwarfs, a dog, a court official in a doorway and Velázquez himself. The play of gazes and the mirror raise questions about who is the true subject of the painting.\n\nThe painting was little known outside Spain until the Prado opened to the public in 1819. Later artists studied it closely; Pablo Picasso painted 58 variations on it in 1957.",
    causes: [
      "Velázquez's position at the Spanish court",
      "A tradition of royal portraiture",
    ],
    consequences: [
      "A key work in the history of Western painting",
      "Influence on artists from Goya and Manet to Picasso",
      "Extensive debate among art historians and philosophers",
    ],
    timeline: [
      ["1656", "Painted", "In the Royal Alcázar of Madrid."],
      ["1819", "Prado opens", "The painting becomes publicly visible."],
      ["1957", "Picasso's variations", "58 paintings based on Las Meninas."],
    ],
    people: [
      ["diego-velazquez", "Painter"],
      ["philip-iv-of-spain", "King, reflected in the mirror"],
    ],
    relations: [["related_to", "guernica", "Picasso, who painted Guernica, later made dozens of variations on Las Meninas."]],
  },
  {
    slug: "girl-with-a-pearl-earring",
    title: "Vermeer paints Girl with a Pearl Earring",
    alt: ["Girl with a Pearl Earring", "Meisje met de parel"],
    date: "~1665",
    period: "early-modern",
    category: "culture",
    region: "europe",
    location: "Delft, Dutch Republic",
    places: ["delft", "mauritshuis"],
    civ: ["dutch-republic"],
    wiki: "Girl with a Pearl Earring",
    keywords: ["Johannes Vermeer", "tronie", "Mauritshuis", "Dutch Golden Age", "Delft"],
    summary:
      "Johannes Vermeer painted a girl in an exotic turban turning toward the viewer, a small canvas now among the best-loved paintings in the world.",
    overview:
      "The painting is a tronie, a Dutch study of a face or character type rather than a portrait of a named person; the model is unknown. It measures about 44 by 39 centimetres and has been in the Mauritshuis in The Hague since 1903.",
    context:
      "Vermeer worked in Delft during the Dutch Golden Age, producing only around 35 known paintings. His works are prized for their treatment of light and colour, including expensive ultramarine made from lapis lazuli.",
    narrative:
      "The girl wears a blue and yellow turban and a large drop earring, possibly glass or tin rather than a real pearl. The dark background, now plain, originally included a green curtain that has faded.\n\nThe painting was sold at auction in 1881 for a small sum and bequeathed to the Mauritshuis. A 1999 novel by Tracy Chevalier and its 2003 film adaptation spread its fame.",
    causes: [
      "The Dutch tradition of tronies",
      "Vermeer's study of light and optics",
    ],
    consequences: [
      "One of the most famous Dutch paintings",
      "A centrepiece of the Mauritshuis",
      "Popular culture adaptations",
    ],
    timeline: [
      ["~1665", "Painted", "In Delft."],
      ["1881", "Bought at auction", "By Arnoldus des Tombe."],
      ["1903", "Enters the Mauritshuis", "By bequest."],
    ],
    people: [["johannes-vermeer", "Painter"]],
    relations: [
      ["occurred_during", "dutch-golden-age", "A masterpiece of the Dutch Golden Age."],
      ["related_to", "the-night-watch", "Two of the most famous paintings of the Dutch Golden Age."],
    ],
  },
  {
    slug: "great-wave-off-kanagawa",
    title: "Hokusai's The Great Wave off Kanagawa",
    alt: ["The Great Wave", "Kanagawa oki nami ura"],
    date: "~1831",
    period: "age-of-revolutions",
    category: "culture",
    region: "east-asia",
    location: "Edo (Tokyo), Japan",
    places: ["tokyo", "mount-fuji"],
    wiki: "The Great Wave off Kanagawa",
    keywords: ["Hokusai", "ukiyo-e", "woodblock print", "Mount Fuji", "Japonisme", "Prussian blue"],
    summary:
      "Katsushika Hokusai designed a woodblock print of a towering wave about to crash over three boats, with Mount Fuji small in the distance. Printed in thousands of copies, it became the most famous image in Japanese art.",
    overview:
      "The print was published around 1831 as the first in Hokusai's series Thirty-six Views of Mount Fuji. It used Prussian blue, a synthetic pigment newly available in Japan. Impressions are held by many museums, including the British Museum and the Metropolitan Museum of Art.",
    context:
      "Ukiyo-e, 'pictures of the floating world', were colour woodblock prints produced commercially in Edo for a wide public. Hokusai was already in his seventies and a celebrated artist when the Fuji series appeared, as landscape prints gained popularity.",
    narrative:
      "A publisher's workshop produced the print: Hokusai's design was carved onto wooden blocks, one for each colour, and printed by hand. Early impressions with sharp lines are the most valued, and thousands were produced as blocks wore down.\n\nAfter Japan opened to Western trade in the 1850s, Japanese prints reached Europe and influenced artists such as Vincent van Gogh, Claude Monet and Edgar Degas, a movement known as Japonisme. Claude Debussy used the image on the cover of his orchestral work La Mer (1905).",
    causes: [
      "The popular ukiyo-e print market in Edo",
      "New interest in landscape prints",
      "The availability of Prussian blue pigment",
    ],
    consequences: [
      "An iconic image of Japanese art worldwide",
      "Influence on European art through Japonisme",
      "Widespread reproduction in modern design",
    ],
    timeline: [
      ["~1831", "Published", "In Thirty-six Views of Mount Fuji."],
      ["1854", "Japan opens to Western trade", "Prints reach Europe."],
      ["1905", "Cover of Debussy's La Mer", "The wave reaches European music."],
    ],
    people: [["hokusai", "Artist"]],
    relations: [
      ["followed_by", "meiji-restoration", "Japan's opening and the Meiji Restoration brought its art to Western attention."],
      ["related_to", "the-starry-night", "Van Gogh admired and collected Japanese prints."],
    ],
  },
  {
    slug: "the-starry-night",
    title: "Van Gogh paints The Starry Night",
    alt: ["The Starry Night", "De sterrennacht"],
    date: "1889-06",
    period: "industry-and-empire",
    category: "culture",
    region: "europe",
    location: "Saint-Rémy-de-Provence, France",
    places: ["saint-remy-de-provence", "moma"],
    wiki: "The Starry Night",
    keywords: ["Vincent van Gogh", "Post-Impressionism", "MoMA", "asylum", "night sky"],
    summary:
      "While a voluntary patient at an asylum in southern France, Vincent van Gogh painted a swirling night sky over a village, a work he himself considered a failure and that is now one of the most recognised paintings in the world.",
    overview:
      "Van Gogh painted the canvas in June 1889, based on the view from his window at the Saint-Paul-de-Mausole asylum, with an invented village and cypress tree. It has been in the Museum of Modern Art in New York since 1941.",
    context:
      "Van Gogh entered the asylum at Saint-Rémy in May 1889 after a mental health crisis in Arles. He continued to paint prolifically, completing around 150 paintings there in a year.",
    narrative:
      "The painting combines observation and memory: the morning star (Venus), the moon and stars are rendered in thick, curving brushstrokes, while a flame-like cypress rises in the foreground. In a letter to his brother Theo, van Gogh was critical of it.\n\nVan Gogh died in July 1890 having sold very few works. His reputation grew rapidly after his death, and The Starry Night became an emblem of Post-Impressionism and of the image of the tormented artist.",
    causes: [
      "Van Gogh's stay at the asylum of Saint-Rémy",
      "His experiments with colour and expressive brushwork",
    ],
    consequences: [
      "An icon of modern art",
      "Posthumous fame for van Gogh",
      "Influence on Expressionism",
    ],
    timeline: [
      ["1889-05", "Enters the asylum", "At Saint-Rémy-de-Provence."],
      ["1889-06", "Paints The Starry Night", "From his window view."],
      ["1890-07-29", "Van Gogh dies", "At Auvers-sur-Oise."],
      ["1941", "Acquired by MoMA", "New York."],
    ],
    people: [["vincent-van-gogh", "Painter"]],
    relations: [["related_to", "the-scream", "Both paintings became emblems of emotional expression in modern art."]],
  },
  {
    slug: "the-scream",
    title: "Munch paints The Scream",
    alt: ["The Scream", "Skrik"],
    date: "1893",
    period: "industry-and-empire",
    category: "culture",
    region: "europe",
    location: "Kristiania (Oslo), Norway",
    places: ["oslo", "national-museum-norway"],
    wiki: "The Scream",
    keywords: ["Edvard Munch", "Expressionism", "anxiety", "Oslo", "art theft"],
    summary:
      "Edvard Munch painted an agonised figure under a blood-red sky, an image that has come to stand for modern anxiety.",
    overview:
      "Munch made several versions between 1893 and 1910: two paintings, two pastels and lithographs. The best-known painted version of 1893 is in the National Museum in Oslo. A pastel version sold at auction in 2012 for about 120 million US dollars.",
    context:
      "Munch drew on a memory of walking at sunset near Kristiania (Oslo) when he sensed 'an infinite scream passing through nature'. The image belonged to his Frieze of Life, a cycle about love, anxiety and death.",
    narrative:
      "The figure stands on a road with a railing above a fjord, its hands raised to its face, against a sky of swirling red and orange. Munch's simplified forms and expressive colour anticipated Expressionism.\n\nVersions of The Scream were stolen twice: the National Gallery's painting in 1994, recovered within months, and the Munch Museum's version in 2004, recovered in 2006 with some damage.",
    causes: [
      "Munch's personal experience and the Frieze of Life",
      "Symbolist currents in European art",
    ],
    consequences: [
      "A universal symbol of anxiety",
      "Influence on Expressionism",
      "Widespread reproduction in popular culture",
    ],
    timeline: [
      ["1893", "First painted version", "Tempera and crayon on cardboard."],
      ["1994-02-12", "Stolen from the National Gallery", "Recovered in May."],
      ["2004-08-22", "Munch Museum version stolen", "Recovered in 2006."],
      ["2012-05-02", "Pastel sold at auction", "For about 120 million dollars."],
    ],
    people: [["edvard-munch", "Painter"]],
    relations: [],
  },
  {
    slug: "guernica",
    title: "Picasso paints Guernica",
    alt: ["Guernica (Picasso)"],
    date: "1937-05",
    end: "1937-06",
    period: "world-wars",
    category: "culture",
    region: "europe",
    location: "Paris",
    places: ["paris", "reina-sofia"],
    wiki: "Guernica (Picasso)",
    keywords: ["Pablo Picasso", "Spanish Civil War", "anti-war", "bombing", "Reina Sofía"],
    summary:
      "Pablo Picasso painted a vast black-and-white mural in response to the bombing of the Basque town of Guernica during the Spanish Civil War. It became one of the most powerful anti-war images of the twentieth century.",
    overview:
      "The painting, about 3.5 by 7.8 metres, was made in about five weeks for the Spanish Republic's pavilion at the 1937 Paris International Exposition. Picasso refused to let it go to Spain while Franco ruled; it arrived in 1981 and has been in the Museo Reina Sofía in Madrid since 1992.",
    context:
      "On 26 April 1937 aircraft of Nazi Germany's Condor Legion and Fascist Italy, supporting Franco's Nationalists, bombed Guernica. The attack on a town with no significant defences caused international outrage.",
    narrative:
      "Picasso, living in Paris, began the painting days after reports of the bombing. In fragmented, Cubist-influenced forms it shows a screaming mother with a dead child, a fallen soldier, a wounded horse, a bull and figures in flames.\n\nAfter the exhibition the painting toured to raise funds for Spanish refugees and was then lent to the Museum of Modern Art in New York. It returned to Spain in 1981, six years after Franco's death, as Picasso had stipulated.",
    causes: [
      "The bombing of Guernica on 26 April 1937",
      "The Spanish Republic's commission for the Paris Exposition",
    ],
    consequences: [
      "A universal symbol against the bombing of civilians",
      "A political emblem of the Spanish Republic",
      "Its return to Spain in 1981 marked the transition to democracy",
    ],
    timeline: [
      ["1937-04-26", "Bombing of Guernica", "By German and Italian aircraft."],
      ["1937-05", "Picasso begins the painting", "In Paris."],
      ["1937-07", "Shown at the Paris Exposition", "In the Spanish pavilion."],
      ["1981-09-10", "Returns to Spain", "After Franco's death."],
    ],
    people: [["pablo-picasso", "Painter"]],
    relations: [["related_to", "world-war-ii", "The bombing of civilians in Spain foreshadowed the air war of the Second World War."]],
  },
];
