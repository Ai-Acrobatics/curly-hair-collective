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
  coverImage: string;
  topics: string[];
  guestBio: string;
}

export const episodes: Episode[] = [
  {
    id: 1,
    slug: "embracing-your-natural-texture",
    title: "Faith, Hair & Finding Yourself",
    guest: "Sabrina & Chanelle",
    description:
      "In our very first episode, we share our stories — coming to the Lord later in life, working at Jon Renau, and why faith and hair are more connected than you think.",
    longDescription:
      "Welcome to the Curlie Girlie Collective! In this debut episode, your hosts Sabrina Anderson (@fabsabstyle) and Chanelle (@createdbychanelle) introduce themselves and the heart behind this podcast. They share their personal journeys of coming to Christ later in life, how working as alternative hair educators at Jon Renau shaped their understanding of identity and beauty, and why they believe anybody can come to the Lord no matter where you are in your walk. This is faith, hair, identity, and becoming — all in one conversation.",
    date: "Spring 2026",
    duration: "45 min",
    gradient: "from-pink-400 via-pink-500 to-rose-600",
    coverImage: "/images/covers/ep01-natural-texture.png",
    topics: ["Faith Journey", "Introduction", "Coming to Christ"],
    guestBio:
      "Sabrina Anderson (@fabsabstyle) and Chanelle (@createdbychanelle) are alternative hair educators at Jon Renau and the co-hosts of the Curlie Girlie Collective. Both came to the Lord later in life and are passionate about helping women find their identity in Christ.",
  },
  {
    id: 2,
    slug: "curl-care-for-every-season",
    title: "Wigs, Toppers & God's Perfect Timing",
    guest: "Sabrina & Chanelle",
    description:
      "We break down the world of alternative hair — what wigs and toppers really are, who they're for, and how God uses unexpected seasons to grow our faith.",
    longDescription:
      "In this episode, Sabrina and Chanelle pull from their experience as alternative hair educators at Jon Renau to demystify the world of wigs, toppers, and hair alternatives. They talk about women dealing with hair loss from alopecia, chemo, hormonal changes, and aging — and how the shame around it keeps so many women silent. But more than the hair, they explore how God uses these unexpected seasons to deepen our trust in Him. If you or someone you love is going through hair loss, this episode is a warm hug wrapped in truth.",
    date: "Spring 2026",
    duration: "38 min",
    gradient: "from-pink-500 via-fuchsia-500 to-purple-500",
    coverImage: "/images/covers/ep02-every-season.png",
    topics: ["Alternative Hair", "Wigs & Toppers", "Trusting God"],
    guestBio:
      "Sabrina and Chanelle bring their professional expertise from Jon Renau, one of the leading alternative hair brands, to educate women on wigs, toppers, and hair solutions with grace, compassion, and faith.",
  },
  {
    id: 3,
    slug: "big-hair-bigger-dreams",
    title: "Coming to Christ When the World Says You're Too Late",
    guest: "Sabrina & Chanelle",
    description:
      "We get real about finding God as adults — the doubts, the shame, and the moment everything changed. Spoiler: He was waiting for us all along.",
    longDescription:
      "This might be the most personal episode yet. Sabrina and Chanelle open up about what it was really like to come to Jesus as adults — after years of living their own way. They talk about the guilt of feeling 'too far gone,' the people who judged them, and the overwhelming grace they found when they finally surrendered. If you've ever thought you've missed your chance with God, this episode will change your mind. Anybody can come to the Lord, no matter where you're at in your walk.",
    date: "Spring 2026",
    duration: "52 min",
    gradient: "from-rose-400 via-pink-500 to-pink-600",
    coverImage: "/images/covers/ep03-bigger-dreams.png",
    topics: ["Salvation Story", "Grace", "New Beginnings"],
    guestBio:
      "Sabrina and Chanelle share their raw, unfiltered testimonies of finding Christ later in life and discovering that God's grace has no expiration date.",
  },
  {
    id: 4,
    slug: "the-politics-of-natural-hair",
    title: "What the Bible Really Says About Beauty",
    guest: "Sabrina & Chanelle",
    description:
      "We dig into Scripture to see what God actually says about beauty, hair, and identity — and why the world's definition of beautiful doesn't match His.",
    longDescription:
      "In a world obsessed with appearance, what does the Bible actually say about beauty? Sabrina and Chanelle walk through key Scriptures — from Proverbs 31 to 1 Peter 3:3-4 to Psalm 139 — and unpack what it means to be 'fearfully and wonderfully made.' They talk about how the beauty industry, social media, and even the church can distort our view of ourselves, and how returning to God's Word resets everything. This episode is part Bible study, part heart-to-heart, and all love.",
    date: "Summer 2026",
    duration: "41 min",
    gradient: "from-fuchsia-400 via-pink-500 to-rose-500",
    coverImage: "/images/covers/ep04-politics.png",
    topics: ["Scripture", "Biblical Beauty", "Identity in Christ"],
    guestBio:
      "Sabrina and Chanelle explore the intersection of faith and beauty, bringing their unique perspectives as alternative hair professionals and women of faith.",
  },
  {
    id: 5,
    slug: "curly-hair-in-the-workplace",
    title: "Hair Loss, Identity & Letting God Lead",
    guest: "Sabrina & Chanelle",
    description:
      "When your hair changes, your identity can feel shaken. We talk about walking through hair loss with faith and why God's plan for you is bigger than your hair.",
    longDescription:
      "Hair loss can feel like losing a part of who you are. In this deeply honest episode, Sabrina and Chanelle talk with women who have faced hair loss from alopecia, medical treatments, and stress — and found their way back to confidence through faith. They share practical advice from their work at Jon Renau alongside spiritual encouragement for anyone whose identity feels shaken. The message is clear: you are not your hair, and God's plan for your life is so much bigger than what's on your head.",
    date: "Summer 2026",
    duration: "36 min",
    gradient: "from-pink-400 via-rose-500 to-red-400",
    coverImage: "/images/covers/ep05-workplace.png",
    topics: ["Hair Loss", "Identity", "Faith Through Trials"],
    guestBio:
      "Sabrina and Chanelle combine their professional expertise in alternative hair with their personal faith to encourage women navigating hair loss and identity struggles.",
  },
  {
    id: 6,
    slug: "raising-curly-kids-with-confidence",
    title: "Leading Other Women to Jesus",
    guest: "Sabrina & Chanelle",
    description:
      "How do you share your faith without being pushy? We talk about leading by example, planting seeds, and trusting God with the harvest.",
    longDescription:
      "As women who came to Christ later in life, Sabrina and Chanelle have a heart for other women who are searching. In this episode, they talk about what it looks like to share your faith naturally — through the way you live, how you treat people, and the conversations you have in the salon chair. They discuss the difference between preaching at someone and loving someone toward Jesus, and share stories of women whose lives were changed simply because someone cared enough to be real with them. This is discipleship, Curlie Girlie style.",
    date: "Summer 2026",
    duration: "44 min",
    gradient: "from-rose-500 via-pink-500 to-fuchsia-500",
    coverImage: "/images/covers/ep06-curly-kids.png",
    topics: ["Evangelism", "Women's Ministry", "Discipleship"],
    guestBio:
      "Sabrina and Chanelle share their hearts for women's ministry and how their work in the beauty industry has become a platform for sharing the love of Christ.",
  },
];
