export interface Guest {
  id: number;
  slug: string;
  name: string;
  title: string;
  bio: string;
  expertise: string[];
  socials: { platform: string; url: string }[];
  episodeSlugs: string[];
  image: string;
  gradient: string;
  quote?: string;
}

export const guests: Guest[] = [
  {
    id: 1,
    slug: "nikki-walton",
    name: "Nikki Walton",
    title: "Founder of CurlyNikki.com",
    bio: "Nikki Walton is the founder of CurlyNikki.com, one of the earliest and most influential natural hair blogs. A meditation teacher and author, she's dedicated her career to helping women embrace their natural beauty inside and out. Her platform has inspired millions to begin their natural hair journey and find confidence in their curls.",
    expertise: ["Natural Hair Journey", "Community Building", "Self-Acceptance", "Meditation"],
    socials: [
      { platform: "Instagram", url: "https://instagram.com/curlynikki" },
      { platform: "Website", url: "https://curlynikki.com" },
    ],
    episodeSlugs: ["embracing-your-natural-texture"],
    image: "/images/guests/nikki-walton.png",
    gradient: "from-pink-400 via-pink-500 to-rose-600",
    quote: "Your hair is your crown — wear it with pride.",
  },
  {
    id: 2,
    slug: "dr-kari-williams",
    name: "Dr. Kari Williams",
    title: "Board-Certified Trichologist",
    bio: "Dr. Kari Williams is a board-certified trichologist, licensed cosmetologist, and the founder of Mahogany Hair Revolution Salon & Trichology Clinic in Los Angeles. She specializes in scalp and hair disorders and is a sought-after expert in textured hair care. Her science-backed approach has helped thousands achieve healthier hair.",
    expertise: ["Hair Science", "Trichology", "Scalp Health", "Textured Hair Care"],
    socials: [
      { platform: "Instagram", url: "https://instagram.com/drkariwilliams" },
      { platform: "Website", url: "https://mahoganyrevolution.com" },
    ],
    episodeSlugs: ["curl-care-for-every-season"],
    image: "/images/guests/dr-kari-williams.png",
    gradient: "from-pink-500 via-fuchsia-500 to-purple-500",
    quote: "Healthy hair starts at the scalp.",
  },
  {
    id: 3,
    slug: "manes-by-mell",
    name: "Manes by Mell",
    title: "YouTube Creator & Curl Care Entrepreneur",
    bio: "Manes by Mell is a YouTube creator with over 1 million subscribers, known for her no-nonsense approach to curly hair education. She's built an empire around honest, relatable content that helps people embrace and care for their natural texture. Her authenticity and humor have made her one of the most trusted voices in the curly hair community.",
    expertise: ["Content Creation", "Entrepreneurship", "Curl Care Tips", "Brand Building"],
    socials: [
      { platform: "Instagram", url: "https://instagram.com/manesbymell" },
      { platform: "YouTube", url: "https://youtube.com/@manesbymell" },
    ],
    episodeSlugs: ["big-hair-bigger-dreams"],
    image: "/images/guests/manes-by-mell.png",
    gradient: "from-rose-400 via-pink-500 to-pink-600",
    quote: "Keep it real, keep it curly.",
  },
  {
    id: 4,
    slug: "adjoa-b-asamoah",
    name: "Adjoa B. Asamoah",
    title: "Social Impact Strategist & CROWN Act Co-Creator",
    bio: "Adjoa B. Asamoah is a social impact strategist and the co-creator of the CROWN Act, landmark legislation that prohibits race-based hair discrimination. Her advocacy has led to the passage of the CROWN Act in over 20 states and she continues to fight for hair freedom nationwide. Her work sits at the intersection of beauty, identity, and civil rights.",
    expertise: ["CROWN Act", "Hair Discrimination", "Civil Rights", "Policy Advocacy"],
    socials: [
      { platform: "Instagram", url: "https://instagram.com/adjoa.b.asamoah" },
    ],
    episodeSlugs: ["the-politics-of-natural-hair"],
    image: "/images/guests/adjoa-b-asamoah.png",
    gradient: "from-fuchsia-400 via-pink-500 to-rose-500",
    quote: "Your hair should never be a barrier to your success.",
  },
  {
    id: 5,
    slug: "candice-carty-williams",
    name: "Candice Carty-Williams",
    title: "Bestselling Author & Advocate",
    bio: "Candice Carty-Williams is the bestselling author of 'Queenie' and a passionate advocate for representation in media and the workplace. Her writing and advocacy center the experiences of Black women navigating identity and belonging. She brings a literary lens to conversations about hair, culture, and self-expression.",
    expertise: ["Workplace Culture", "Representation", "Writing", "Identity"],
    socials: [
      { platform: "Instagram", url: "https://instagram.com/candicecw_" },
    ],
    episodeSlugs: ["curly-hair-in-the-workplace"],
    image: "/images/guests/candice-carty-williams.png",
    gradient: "from-pink-400 via-rose-500 to-red-400",
    quote: "Representation isn't a nice-to-have — it's everything.",
  },
  {
    id: 6,
    slug: "kia-stephens",
    name: "Kia Stephens",
    title: "Educator & Natural Hair Advocate",
    bio: "Kia Stephens is an educator, mother, and natural hair advocate dedicated to helping parents raise confident, curl-loving kids. She creates resources and content that make natural hair care accessible and fun for families. Her approach combines practical tips with positive messaging that empowers the next generation.",
    expertise: ["Parenting", "Kids Hair Care", "Confidence Building", "Education"],
    socials: [
      { platform: "Instagram", url: "https://instagram.com/kiastephens" },
    ],
    episodeSlugs: ["raising-curly-kids-with-confidence"],
    image: "/images/guests/kia-stephens.png",
    gradient: "from-rose-500 via-pink-500 to-fuchsia-500",
    quote: "Teach them to love their curls before the world tells them not to.",
  },
];
