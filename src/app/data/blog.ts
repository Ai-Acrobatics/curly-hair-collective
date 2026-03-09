export interface BlogPost {
  id: number;
  slug: string;
  title: string;
  excerpt: string;
  category: string;
  readTime: string;
  date: string;
  gradient: string;
  featured?: boolean;
}

export const blogPosts: BlogPost[] = [
  {
    id: 1,
    slug: "ultimate-wash-day-routine",
    title: "The Ultimate Wash Day Routine for Every Curl Type",
    excerpt:
      "From 2A waves to 4C coils, we break down the perfect wash day routine tailored to your specific curl pattern. Products, techniques, and timing included.",
    category: "Hair Care",
    readTime: "8 min read",
    date: "2026-03-01",
    gradient: "from-pink-400 via-pink-500 to-rose-500",
    featured: true,
  },
  {
    id: 2,
    slug: "crown-act-explained",
    title: "The CROWN Act Explained: What It Means for Your Rights",
    excerpt:
      "A comprehensive guide to the CROWN Act — what it covers, where it's been passed, and how it protects against hair discrimination in schools and workplaces.",
    category: "Culture",
    readTime: "6 min read",
    date: "2026-02-22",
    gradient: "from-fuchsia-400 via-pink-500 to-rose-500",
    featured: true,
  },
  {
    id: 3,
    slug: "protein-moisture-balance",
    title: "Protein vs. Moisture: Finding Your Curl's Balance",
    excerpt:
      "Is your hair feeling mushy or straw-like? Understanding the protein-moisture balance is the key to bouncy, defined curls.",
    category: "Hair Science",
    readTime: "5 min read",
    date: "2026-02-15",
    gradient: "from-pink-500 via-fuchsia-500 to-purple-500",
  },
  {
    id: 4,
    slug: "curly-hair-myths-debunked",
    title: "10 Curly Hair Myths We Need to Stop Believing",
    excerpt:
      "From 'you can't brush curly hair' to 'curly hair doesn't grow long' — we're debunking the most persistent myths about textured hair.",
    category: "Education",
    readTime: "7 min read",
    date: "2026-02-08",
    gradient: "from-rose-400 via-pink-500 to-pink-600",
  },
  {
    id: 5,
    slug: "protective-styles-guide",
    title: "Protective Styles That Actually Protect Your Hair",
    excerpt:
      "Not all protective styles are created equal. Learn which styles truly protect your curls and which might be doing more harm than good.",
    category: "Hair Care",
    readTime: "6 min read",
    date: "2026-02-01",
    gradient: "from-pink-400 via-rose-500 to-red-400",
  },
  {
    id: 6,
    slug: "ingredients-to-avoid",
    title: "Ingredients to Avoid: A Curly Girl's Guide to Reading Labels",
    excerpt:
      "Sulfates, silicones, parabens — what should you actually avoid? A science-backed guide to understanding hair product ingredients.",
    category: "Hair Science",
    readTime: "9 min read",
    date: "2026-01-25",
    gradient: "from-rose-500 via-pink-500 to-fuchsia-500",
  },
];

export const blogCategories = [
  "All",
  "Hair Care",
  "Culture",
  "Hair Science",
  "Education",
  "Lifestyle",
];
