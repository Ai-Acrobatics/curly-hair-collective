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
  image?: string;
}

export const blogPosts: BlogPost[] = [
  {
    id: 1,
    slug: "finding-god-through-your-hair-journey",
    title: "Finding God Through Your Hair Journey",
    excerpt:
      "Hair loss, wigs, toppers — what if your hair journey is actually a faith journey? How surrendering control over our appearance can bring us closer to God.",
    category: "Faith & Hair",
    readTime: "8 min read",
    date: "2026-03-01",
    gradient: "from-pink-400 via-pink-500 to-rose-500",
    featured: true,
    image: "/images/blog/finding-god-through-your-hair-journey.png",
  },
  {
    id: 2,
    slug: "what-the-bible-says-about-beauty",
    title: "What the Bible Says About Beauty",
    excerpt:
      "From Proverbs 31 to 1 Peter 3:3-4, Scripture has a lot to say about beauty, identity, and where our worth really comes from. Let's dig in together.",
    category: "Faith",
    readTime: "6 min read",
    date: "2026-02-22",
    gradient: "from-fuchsia-400 via-pink-500 to-rose-500",
    featured: true,
    image: "/images/blog/what-the-bible-says-about-beauty.png",
  },
  {
    id: 3,
    slug: "wash-day-prayers",
    title: "Wash Day Prayers: Turning Your Routine into Worship",
    excerpt:
      "What if your wash day was also a prayer day? Practical ways to invite God into the quiet, ordinary moments of caring for your hair.",
    category: "Devotional",
    readTime: "5 min read",
    date: "2026-02-15",
    gradient: "from-pink-500 via-fuchsia-500 to-purple-500",
    image: "/images/blog/wash-day-prayers.png",
  },
  {
    id: 4,
    slug: "wigs-toppers-and-gods-plan",
    title: "Wigs, Toppers & God's Plan for Your Confidence",
    excerpt:
      "Alternative hair isn't about hiding — it's about freedom. How wigs and toppers can be part of God's plan for you to walk boldly in your identity.",
    category: "Alternative Hair",
    readTime: "7 min read",
    date: "2026-02-08",
    gradient: "from-rose-400 via-pink-500 to-pink-600",
    image: "/images/blog/top-5-protective-styles.png",
  },
  {
    id: 5,
    slug: "coming-to-christ-later-in-life",
    title: "Coming to Christ Later in Life: It's Never Too Late",
    excerpt:
      "Both Sabrina and Chanelle found the Lord later in life. If you think you've missed your window, this one's for you. God's timing is always perfect.",
    category: "Faith",
    readTime: "6 min read",
    date: "2026-02-01",
    gradient: "from-pink-400 via-rose-500 to-red-400",
    image: "/images/blog/identity-in-christ-not-your-hair.png",
  },
  {
    id: 6,
    slug: "hair-loss-and-trusting-god",
    title: "When Hair Loss Shakes Your Identity: Trusting God Through It",
    excerpt:
      "Losing your hair can feel like losing yourself. But what if it's an invitation to find your true identity in Christ? A devotional for women in the middle of it.",
    category: "Devotional",
    readTime: "9 min read",
    date: "2026-01-25",
    gradient: "from-rose-500 via-pink-500 to-fuchsia-500",
    image: "/images/blog/curl-typing-is-a-scam.png",
  },
];

export const blogCategories = [
  "All",
  "Faith & Hair",
  "Faith",
  "Devotional",
  "Alternative Hair",
  "Identity",
];
