export interface Episode {
  id: number;
  slug: string;
  title: string;
  guest: string;
  description: string;
  longDescription: string;
  date: string;
  duration: string;
  gradient: string;
  topics: string[];
  guestBio: string;
}

export const episodes: Episode[] = [
  {
    id: 1,
    slug: "embracing-your-natural-texture",
    title: "Embracing Your Natural Texture",
    guest: "Nikki Walton",
    description:
      "The founder of CurlyNikki.com shares her journey from relaxed to natural and how self-acceptance changed everything.",
    longDescription:
      "In this debut episode, we sit down with Nikki Walton — the visionary behind CurlyNikki.com, one of the internet's first and most beloved natural hair communities. Nikki opens up about her transition from relaxed to natural hair, the emotional journey of self-acceptance, and how embracing her curls led to a movement that's inspired millions. We talk product picks, mindset shifts, and why natural hair is so much more than just hair.",
    date: "Coming Soon",
    duration: "45 min",
    gradient: "from-pink-400 via-pink-500 to-rose-600",
    topics: ["Natural Hair Journey", "Self-Acceptance", "Community Building"],
    guestBio:
      "Nikki Walton is the founder of CurlyNikki.com, one of the earliest and most influential natural hair blogs. A meditation teacher and author, she's dedicated her career to helping women embrace their natural beauty inside and out.",
  },
  {
    id: 2,
    slug: "curl-care-for-every-season",
    title: "Curl Care for Every Season",
    guest: "Dr. Kari Williams",
    description:
      "A trichologist breaks down how weather, humidity, and lifestyle affect your curls — plus her holy grail product picks.",
    longDescription:
      "Board-certified trichologist Dr. Kari Williams brings the science to curly hair care. In this episode, we dive deep into how seasonal changes, humidity levels, and even your diet affect your curl pattern and hair health. Dr. Williams shares her professional tips for adapting your routine throughout the year, debunks common hair myths, and reveals her holy grail product recommendations for every curl type.",
    date: "Coming Soon",
    duration: "38 min",
    gradient: "from-pink-500 via-fuchsia-500 to-purple-500",
    topics: ["Hair Science", "Seasonal Care", "Product Recommendations"],
    guestBio:
      "Dr. Kari Williams is a board-certified trichologist, licensed cosmetologist, and the founder of Mahogany Hair Revolution Salon & Trichology Clinic in Los Angeles. She specializes in scalp and hair disorders and is a sought-after expert in textured hair care.",
  },
  {
    id: 3,
    slug: "big-hair-bigger-dreams",
    title: "Big Hair, Bigger Dreams",
    guest: "Manes by Mell",
    description:
      "From YouTube sensation to curl queen empire — how Mell built a brand by keeping it real about curly hair struggles.",
    longDescription:
      "Mell, known to millions as Manes by Mell, joins us to share her incredible journey from frustrated curly girl to YouTube sensation and curl care entrepreneur. We talk about the raw, honest content that made her famous, the business of building a hair care brand, and why authenticity is the ultimate superpower in the beauty industry. Plus, Mell shares her best-kept curly hair secrets.",
    date: "Coming Soon",
    duration: "52 min",
    gradient: "from-rose-400 via-pink-500 to-pink-600",
    topics: ["Entrepreneurship", "Content Creation", "Curl Care Tips"],
    guestBio:
      "Manes by Mell is a YouTube creator with over 1 million subscribers, known for her no-nonsense approach to curly hair education. She's built an empire around honest, relatable content that helps people embrace and care for their natural texture.",
  },
  {
    id: 4,
    slug: "the-politics-of-natural-hair",
    title: "The Politics of Natural Hair",
    guest: "Adjoa B. Asamoah",
    description:
      "The advocate behind the CROWN Act discusses hair discrimination, legislation, and why your curls are a civil rights issue.",
    longDescription:
      "In one of our most important episodes, we're joined by Adjoa B. Asamoah — the powerhouse advocate behind the CROWN Act (Creating a Respectful and Open World for Natural Hair). Adjoa shares stories of hair discrimination in schools and workplaces, explains the legislative journey of the CROWN Act, and makes the case for why natural hair protection is a civil rights imperative. This conversation will change how you think about your curls.",
    date: "Coming Soon",
    duration: "41 min",
    gradient: "from-fuchsia-400 via-pink-500 to-rose-500",
    topics: ["CROWN Act", "Hair Discrimination", "Civil Rights", "Legislation"],
    guestBio:
      "Adjoa B. Asamoah is a social impact strategist and the co-creator of the CROWN Act, landmark legislation that prohibits race-based hair discrimination. Her advocacy has led to the passage of the CROWN Act in over 20 states.",
  },
  {
    id: 5,
    slug: "curly-hair-in-the-workplace",
    title: "Curly Hair in the Workplace",
    guest: "Candice Carty-Williams",
    description:
      "Bestselling author on navigating corporate spaces with natural hair and why representation matters at every level.",
    longDescription:
      "Bestselling author Candice Carty-Williams opens up about her experiences navigating corporate and creative spaces with natural hair. We discuss the unspoken 'hair codes' in professional settings, the emotional labor of hair policing, and why representation at every level of an organization matters. Candice shares personal stories, hard-won wisdom, and her vision for a future where all hair textures are celebrated in the workplace.",
    date: "Coming Soon",
    duration: "36 min",
    gradient: "from-pink-400 via-rose-500 to-red-400",
    topics: ["Workplace Culture", "Representation", "Professional Natural Hair"],
    guestBio:
      "Candice Carty-Williams is the bestselling author of 'Queenie' and a passionate advocate for representation in media and the workplace. Her writing and advocacy center the experiences of Black women navigating identity and belonging.",
  },
  {
    id: 6,
    slug: "raising-curly-kids-with-confidence",
    title: "Raising Curly Kids with Confidence",
    guest: "Kia Stephens",
    description:
      "A mother and educator shares tips for teaching kids to love their curls from day one — wash day routines included.",
    longDescription:
      "Parent, educator, and curl enthusiast Kia Stephens joins us for a heartfelt conversation about raising children who love their natural hair from day one. We cover age-appropriate curl care routines, how to handle bullying and microaggressions, the importance of diverse representation in children's media, and practical wash day tips that make the process fun for the whole family. This episode is a must-listen for every curly parent.",
    date: "Coming Soon",
    duration: "44 min",
    gradient: "from-rose-500 via-pink-500 to-fuchsia-500",
    topics: ["Parenting", "Kids Hair Care", "Confidence Building", "Wash Day"],
    guestBio:
      "Kia Stephens is an educator, mother, and natural hair advocate dedicated to helping parents raise confident, curl-loving kids. She creates resources and content that make natural hair care accessible and fun for families.",
  },
];
