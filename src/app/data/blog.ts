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
  author?: string;
  tags?: string[];
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
  {
    id: 7,
    slug: "your-big-chop-is-a-spiritual-act",
    title: "Your Big Chop Is a Spiritual Act",
    excerpt:
      "Cutting off damaged hair is more than a style decision — it's an act of faith. Letting go of what no longer serves you spiritually and physically opens the door to new growth, new purpose, and a deeper walk with God.",
    category: "faith-journey",
    readTime: "7 min read",
    date: "2026-03-08",
    gradient: "from-pink-400 via-rose-500 to-fuchsia-500",
    author: "Sabrina Anderson",
    tags: ["big chop", "faith", "new beginnings", "natural hair"],
  },
  {
    id: 8,
    slug: "5-prayers-for-your-wash-day-routine",
    title: "5 Prayers for Your Wash Day Routine",
    excerpt:
      "What if your wash day became your worship day? Here are five short, real prayers — one for each step from clarifying to the final reveal — to turn your hair routine into holy ground.",
    category: "faith-journey",
    readTime: "5 min read",
    date: "2026-03-05",
    gradient: "from-fuchsia-400 via-pink-500 to-rose-400",
    author: "Chanelle",
    tags: ["wash day", "prayer", "self-care", "routine"],
  },
  {
    id: 9,
    slug: "when-instagram-makes-you-hate-your-curls",
    title: "When Instagram Makes You Hate Your Curls: A Faith Perspective",
    excerpt:
      "The scroll is stealing your peace. Comparison culture on social media can make you question the very curls God gave you. Here's how to protect your identity in Christ and reclaim your feed.",
    category: "culture",
    readTime: "8 min read",
    date: "2026-02-28",
    gradient: "from-rose-400 via-pink-500 to-purple-500",
    author: "Sabrina Anderson",
    tags: ["social media", "comparison", "identity", "mental health"],
  },
  {
    id: 10,
    slug: "from-relaxer-to-redeemed",
    title: "From Relaxer to Redeemed: My Natural Hair Testimony",
    excerpt:
      "For years I chased straight hair and approval. Going natural wasn't just a hair decision — it was the beginning of finding my identity in Christ. This is my testimony of relaxers, redemption, and real freedom.",
    category: "faith-journey",
    readTime: "10 min read",
    date: "2026-02-20",
    gradient: "from-pink-500 via-fuchsia-500 to-purple-500",
    author: "Chanelle",
    tags: ["testimony", "relaxer", "transition", "redemption"],
  },
  {
    id: 11,
    slug: "the-crown-act-and-gods-design",
    title: "The CROWN Act & God's Design: Why Your Hair Is Political and Sacred",
    excerpt:
      "Hair discrimination is real, and the CROWN Act matters. But beyond legislation, your hair carries divine purpose. Exploring the intersection of advocacy, justice, and biblical identity.",
    category: "culture",
    readTime: "9 min read",
    date: "2026-02-12",
    gradient: "from-rose-500 via-pink-500 to-pink-600",
    author: "Sabrina Anderson",
    tags: ["CROWN Act", "advocacy", "discrimination", "justice"],
  },
  {
    id: 12,
    slug: "dating-while-natural",
    title: "Dating While Natural: Confidence That Comes From Christ, Not Compliments",
    excerpt:
      "Your worth isn't determined by who swipes right or who compliments your twist-out. Real confidence in the dating world starts with knowing who you are in Christ — curls and all.",
    category: "lifestyle",
    readTime: "6 min read",
    date: "2026-02-05",
    gradient: "from-pink-400 via-rose-500 to-red-400",
    author: "Chanelle",
    tags: ["dating", "confidence", "relationships", "identity"],
  },
  {
    id: 13,
    slug: "how-to-start-a-curl-care-small-group-at-your-church",
    title: "How to Start a Curl Care Small Group at Your Church",
    excerpt:
      "Ministry meets natural hair community. This step-by-step guide shows you how to launch a small group at your church that combines curl care, fellowship, and faith — reaching women where they are.",
    category: "community",
    readTime: "7 min read",
    date: "2026-01-28",
    gradient: "from-fuchsia-400 via-pink-500 to-rose-500",
    author: "Sabrina Anderson",
    tags: ["small group", "church", "ministry", "community"],
  },
  {
    id: 14,
    slug: "protective-styles-for-the-working-woman-of-faith",
    title: "Protective Styles for the Working Woman of Faith",
    excerpt:
      "You need styles that last through Monday meetings and Wednesday Bible study. Here are professional protective styles paired with devotional thoughts for the busy woman balancing career and calling.",
    category: "hair-care",
    readTime: "6 min read",
    date: "2026-01-20",
    gradient: "from-pink-500 via-fuchsia-500 to-purple-400",
    author: "Chanelle",
    tags: ["protective styles", "work", "professional", "busy woman"],
  },
  {
    id: 15,
    slug: "what-proverbs-31-actually-says-about-beauty",
    title: "What Proverbs 31 Actually Says About Beauty (It's Not What You Think)",
    excerpt:
      "She's been misquoted, misused, and turned into an impossible standard. But the Proverbs 31 woman is about strength, dignity, and wisdom — not perfection. Here's what that looks like for modern curly-haired women of faith.",
    category: "faith-journey",
    readTime: "8 min read",
    date: "2026-01-14",
    gradient: "from-rose-400 via-pink-500 to-fuchsia-500",
    author: "Sabrina Anderson",
    tags: ["Proverbs 31", "beauty", "strength", "wisdom"],
  },
  {
    id: 16,
    slug: "raising-curly-haired-daughters-in-a-straight-hair-world",
    title: "Raising Curly-Haired Daughters in a Straight-Hair World",
    excerpt:
      "Your little girl is watching how you talk about your hair — and hers. For young moms navigating media messages and playground comments, here's how to teach your daughter that God made her curls beautiful and on purpose.",
    category: "community",
    readTime: "7 min read",
    date: "2026-01-07",
    gradient: "from-pink-400 via-pink-500 to-rose-500",
    author: "Chanelle",
    tags: ["parenting", "daughters", "kids", "natural hair kids"],
  },
];

export const blogCategories = [
  "All",
  "Faith & Hair",
  "Faith",
  "Devotional",
  "Alternative Hair",
  "Identity",
  "faith-journey",
  "culture",
  "lifestyle",
  "community",
  "hair-care",
];
