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
    slug: "i-quit-people-pleasing-and-lost-half-my-friends",
    title: "I Quit People-Pleasing and Lost Half My Friends",
    excerpt:
      "Setting boundaries felt like losing everything. But the friendships that fell away were never really holding me up — they were holding me back. Here's what God taught me about the difference between loneliness and freedom.",
    category: "Real Talk",
    readTime: "7 min read",
    date: "2026-03-08",
    gradient: "from-pink-400 via-rose-500 to-fuchsia-500",
    author: "Sabrina Anderson",
    tags: ["boundaries", "friendships", "people-pleasing", "growth"],
  },
  {
    id: 8,
    slug: "anxiety-is-not-a-lack-of-faith",
    title: "Anxiety Is Not a Lack of Faith (Stop Telling Yourself That)",
    excerpt:
      "You can love Jesus and still have panic attacks at 2am. The church doesn't always know how to hold space for mental health — but God does. A real conversation about anxiety, therapy, and trusting God at the same time.",
    category: "Mental Health",
    readTime: "9 min read",
    date: "2026-03-05",
    gradient: "from-fuchsia-400 via-pink-500 to-rose-400",
    author: "Chanelle",
    tags: ["anxiety", "mental health", "therapy", "faith"],
  },
  {
    id: 9,
    slug: "the-comparison-trap-scroll-stealing-your-peace",
    title: "The Comparison Trap: How the Scroll Is Stealing Your Peace",
    excerpt:
      "She got the promotion. She got engaged. She looks like that without trying. And you're on the couch in a bonnet wondering what you're doing wrong. Here's what God says about the highlight reel you're measuring yourself against.",
    category: "Real Talk",
    readTime: "8 min read",
    date: "2026-02-28",
    gradient: "from-rose-400 via-pink-500 to-purple-500",
    author: "Sabrina Anderson",
    tags: ["comparison", "social media", "identity", "peace"],
  },
  {
    id: 10,
    slug: "dating-in-your-late-twenties-feels-impossible",
    title: "Dating in Your Late Twenties Feels Impossible — Here's What I Wish Someone Told Me",
    excerpt:
      "The apps are exhausting. The talking stages go nowhere. And everyone keeps asking when you're settling down. An honest conversation about dating, loneliness, and trusting God's timing when your timeline feels broken.",
    category: "Relationships",
    readTime: "10 min read",
    date: "2026-02-20",
    gradient: "from-pink-500 via-fuchsia-500 to-purple-500",
    author: "Chanelle",
    tags: ["dating", "singleness", "relationships", "Gods timing"],
  },
  {
    id: 11,
    slug: "burnout-is-not-a-badge-of-honor",
    title: "Burnout Is Not a Badge of Honor: Rest Is Not Lazy, It's Biblical",
    excerpt:
      "You're running on caffeine and cortisol, calling it hustle. But God literally rested on the seventh day — and He's God. Why we glorify burnout, how it's wrecking us, and what it looks like to actually stop.",
    category: "Wellness",
    readTime: "8 min read",
    date: "2026-02-12",
    gradient: "from-rose-500 via-pink-500 to-pink-600",
    author: "Sabrina Anderson",
    tags: ["burnout", "rest", "hustle culture", "wellness"],
  },
  {
    id: 12,
    slug: "when-your-career-feels-meaningless",
    title: "When Your Career Feels Meaningless and You Don't Know Your Purpose",
    excerpt:
      "You followed the plan — degree, job, apartment — and you still feel empty. If you're wondering 'is this it?' you're not ungrateful, you're being called to something deeper. Let's talk about purpose, calling, and what God actually wants from your 9-to-5.",
    category: "Career & Purpose",
    readTime: "9 min read",
    date: "2026-02-05",
    gradient: "from-pink-400 via-rose-500 to-red-400",
    author: "Chanelle",
    tags: ["career", "purpose", "calling", "quarter-life crisis"],
  },
  {
    id: 13,
    slug: "the-friendship-breakup-nobody-talks-about",
    title: "The Friendship Breakup Nobody Talks About",
    excerpt:
      "Losing a best friend in your twenties or thirties hits different. There's no closure, no label for the grief, and nobody validates how much it hurts. How to heal from a friendship that didn't make it — and trust God with who stays.",
    category: "Relationships",
    readTime: "8 min read",
    date: "2026-01-28",
    gradient: "from-fuchsia-400 via-pink-500 to-rose-500",
    author: "Sabrina Anderson",
    tags: ["friendship", "grief", "healing", "letting go"],
  },
  {
    id: 14,
    slug: "your-body-is-not-the-enemy",
    title: "Your Body Is Not the Enemy: A Letter to the Girl Who Can't Look in the Mirror",
    excerpt:
      "Diet culture, Instagram filters, and a world that profits off your insecurity. If you've ever hated what you see, this is for you. God made your body on purpose — and He's not asking you to shrink.",
    category: "Wellness",
    readTime: "7 min read",
    date: "2026-01-20",
    gradient: "from-pink-500 via-fuchsia-500 to-purple-400",
    author: "Chanelle",
    tags: ["body image", "self-worth", "diet culture", "identity"],
  },
  {
    id: 15,
    slug: "i-stayed-too-long-in-a-toxic-relationship",
    title: "I Stayed Too Long: What God Taught Me After a Toxic Relationship",
    excerpt:
      "You knew it was wrong six months in. But you stayed because you thought love was supposed to be hard — or because you were afraid to be alone. What leaving taught me about God's protection, my worth, and what real love actually looks like.",
    category: "Relationships",
    readTime: "11 min read",
    date: "2026-01-14",
    gradient: "from-rose-400 via-pink-500 to-fuchsia-500",
    author: "Sabrina Anderson",
    tags: ["toxic relationships", "healing", "boundaries", "love"],
  },
  {
    id: 16,
    slug: "money-stress-faith-and-your-twenties",
    title: "Broke, Stressed & Blessed? Real Talk About Money, Faith, and Your Twenties",
    excerpt:
      "Rent is due, your savings account is a joke, and everyone on Instagram seems to be thriving. Let's be honest about financial stress, what the Bible actually says about money, and how to build a life without selling your soul to hustle culture.",
    category: "Real Talk",
    readTime: "8 min read",
    date: "2026-01-07",
    gradient: "from-pink-400 via-pink-500 to-rose-500",
    author: "Chanelle",
    tags: ["money", "financial stress", "twenties", "stewardship"],
  },
];

export const blogCategories = [
  "All",
  "Faith & Hair",
  "Faith",
  "Devotional",
  "Alternative Hair",
  "Real Talk",
  "Mental Health",
  "Relationships",
  "Wellness",
  "Career & Purpose",
];
