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
    slug: "pastor-michael-grant",
    name: "Pastor Michael Grant",
    title: "Senior Pastor & Author",
    bio: "Pastor Michael Grant leads New Covenant Community Church in Dallas, TX, where he is known for creating a radically welcoming environment for newcomers to the faith. A published author and speaker, Pastor Michael believes that no one is ever too far gone for God's grace. He joined Sabrina and Chanelle to talk about what it really looks like to welcome people into the body of Christ — no matter where they've been or what they look like.",
    expertise: ["Pastoral Ministry", "Welcoming Newcomers", "Grace & Redemption", "Faith Community"],
    socials: [
      { platform: "Instagram", url: "https://instagram.com/pastormichaelgrant" },
      { platform: "Website", url: "https://newcovenantdallas.org" },
    ],
    episodeSlugs: ["big-hair-bigger-dreams"],
    image: "/images/guests/pastor-michael-grant.png",
    gradient: "from-pink-400 via-pink-500 to-rose-600",
    quote: "God doesn't check your resume before He lets you in. He just asks you to come as you are.",
  },
  {
    id: 2,
    slug: "denise-crawford",
    name: "Denise Crawford",
    title: "Chemo Survivor & Faith Speaker",
    bio: "Denise Crawford was diagnosed with breast cancer at 38 and lost all of her hair during chemotherapy. In the darkest season of her life, she found herself on her knees — and that's where she met Jesus. Now in remission and thriving, Denise speaks openly about how hair loss stripped away everything she thought defined her and led her straight to God. She partners with organizations like Jon Renau to help other women navigating chemo-related hair loss find both practical solutions and spiritual hope.",
    expertise: ["Cancer Survivorship", "Hair Loss & Chemo", "Faith Testimony", "Women's Ministry"],
    socials: [
      { platform: "Instagram", url: "https://instagram.com/denisecrawfordministries" },
    ],
    episodeSlugs: ["curl-care-for-every-season", "curly-hair-in-the-workplace"],
    image: "/images/guests/denise-crawford.png",
    gradient: "from-pink-500 via-fuchsia-500 to-purple-500",
    quote: "I lost my hair and found my Savior. That's a trade I'd make a thousand times over.",
  },
  {
    id: 3,
    slug: "dr-angela-ross",
    name: "Dr. Angela Ross",
    title: "Licensed Christian Therapist",
    bio: "Dr. Angela Ross is a licensed clinical psychologist and Christian counselor specializing in identity, grief, and body image — particularly for women experiencing hair loss. With over 15 years of experience, she helps her clients understand that their worth is not tied to their appearance but rooted in who God says they are. Dr. Angela brings a unique blend of clinical expertise and biblical truth to conversations about the emotional and spiritual impact of losing your hair.",
    expertise: ["Christian Counseling", "Identity & Grief", "Body Image", "Emotional Healing"],
    socials: [
      { platform: "Instagram", url: "https://instagram.com/drangelaross" },
      { platform: "Website", url: "https://faithandwholeness.com" },
    ],
    episodeSlugs: ["the-politics-of-natural-hair", "curly-hair-in-the-workplace"],
    image: "/images/guests/dr-angela-ross.png",
    gradient: "from-rose-400 via-pink-500 to-pink-600",
    quote: "Your identity was never in your hair. It was always in Him.",
  },
  {
    id: 4,
    slug: "rachel-kim",
    name: "Rachel Kim",
    title: "Jon Renau Product Specialist & Educator",
    bio: "Rachel Kim is a senior product specialist and educator at Jon Renau, one of the world's leading alternative hair brands. With deep expertise in wigs, toppers, and hair integration systems, Rachel helps women find the right solution for their unique hair loss situation — whether from alopecia, chemo, hormonal changes, or aging. A woman of faith herself, Rachel sees her work as ministry, believing that helping a woman feel like herself again is doing God's work.",
    expertise: ["Wigs & Toppers", "Alternative Hair", "Jon Renau Products", "Client Consultations"],
    socials: [
      { platform: "Instagram", url: "https://instagram.com/rachelkimhair" },
      { platform: "Website", url: "https://jonrenau.com" },
    ],
    episodeSlugs: ["curl-care-for-every-season", "embracing-your-natural-texture"],
    image: "/images/guests/rachel-kim.png",
    gradient: "from-fuchsia-400 via-pink-500 to-rose-500",
    quote: "When a woman puts on the right piece and sees herself in the mirror again — that's holy ground.",
  },
  {
    id: 5,
    slug: "tamara-wells",
    name: "Tamara Wells",
    title: "Worship Leader & Alopecia Advocate",
    bio: "Tamara Wells has been leading worship at Grace City Church in Atlanta for over a decade. When she was diagnosed with alopecia areata in her early 30s, she thought her days on stage were over. Instead, God used her hair loss journey to deepen her worship and give her a testimony that has encouraged thousands of women. Tamara now openly shares her story of losing her hair, finding confidence in Christ, and stepping back onto the platform — wig and all — with more boldness than ever before.",
    expertise: ["Worship Leading", "Alopecia Journey", "Confidence in Christ", "Public Testimony"],
    socials: [
      { platform: "Instagram", url: "https://instagram.com/tamarawellsworship" },
      { platform: "YouTube", url: "https://youtube.com/@tamarawellsworship" },
    ],
    episodeSlugs: ["big-hair-bigger-dreams", "raising-curly-kids-with-confidence"],
    image: "/images/guests/tamara-wells.png",
    gradient: "from-pink-400 via-rose-500 to-red-400",
    quote: "He didn't take my crown — He gave me a new one. And I wear it every Sunday.",
  },
  {
    id: 6,
    slug: "madison-james",
    name: "Madison James",
    title: "Alopecia Advocate & Faith Content Creator",
    bio: "Madison James was diagnosed with alopecia universalis at just 19 years old. As a college sophomore watching her hair fall out in clumps, she spiraled into anxiety and depression — until a friend invited her to church. That invitation changed everything. Now 23, Madison creates faith-centered content on social media about navigating hair loss as a young woman, trusting God's plan when life doesn't make sense, and finding beauty in the journey. She's become a voice for a generation of young women learning that their identity is in Christ, not in their hair.",
    expertise: ["Gen Z Faith", "Alopecia Awareness", "Social Media Ministry", "Young Women's Identity"],
    socials: [
      { platform: "Instagram", url: "https://instagram.com/madisonjamesfaith" },
      { platform: "TikTok", url: "https://tiktok.com/@madisonjamesfaith" },
    ],
    episodeSlugs: ["raising-curly-kids-with-confidence", "the-politics-of-natural-hair"],
    image: "/images/guests/madison-james.png",
    gradient: "from-rose-500 via-pink-500 to-fuchsia-500",
    quote: "I'm 23 and bald and saved — and honestly? I've never felt more beautiful.",
  },
];
