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

// Episodes ordered: newest real-life topics first, then original faith & hair episodes
const _rawEpisodes: Episode[] = [
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
  {
    id: 7,
    slug: "anxiety-at-2am",
    title: "Anxiety at 2AM: When Your Mind Won't Shut Off",
    guest: "Sabrina & Chanelle",
    description:
      "The racing thoughts, the what-ifs, the 3am spirals. We're talking about anxiety — not as a faith failure, but as something real that God meets you in.",
    longDescription:
      "This episode gets raw. Sabrina and Chanelle share their own battles with anxiety — the sleepless nights, the panic attacks nobody saw, and the guilt of feeling like a 'bad Christian' for struggling. They talk about why the church often gets mental health wrong, why therapy and faith aren't opposites, and what it actually looks like to cast your anxieties on God when your body won't stop shaking. If you've ever felt alone at 2am wondering if something's wrong with you — this one's for you. Nothing is wrong with you. And you're not alone.",
    date: "Summer 2026",
    duration: "48 min",
    gradient: "from-purple-400 via-pink-500 to-rose-500",
    coverImage: "/images/covers/ep07-anxiety.png",
    topics: ["Anxiety", "Mental Health", "Faith & Therapy"],
    guestBio:
      "Sabrina and Chanelle open up about their personal struggles with anxiety and how faith, therapy, and community helped them find peace.",
  },
  {
    id: 8,
    slug: "the-loneliness-epidemic",
    title: "Why Am I So Lonely? The Friendship Crisis Nobody Talks About",
    guest: "Sabrina & Chanelle",
    description:
      "You have 1,000 followers and no one to call when you're crying. We talk about the loneliness epidemic hitting women in their twenties and thirties.",
    longDescription:
      "Friendships after college hit different. People move, get married, get busy — and suddenly you're eating dinner alone wondering where everyone went. Sabrina and Chanelle talk about the adult loneliness epidemic, why it's hitting young women especially hard, and how social media makes it worse by showing you the friendships everyone else seems to have. They share what the Bible says about community, how to build real friendships as an adult, and why sometimes the loneliest seasons are where God does His deepest work in your heart.",
    date: "Summer 2026",
    duration: "42 min",
    gradient: "from-pink-500 via-fuchsia-500 to-violet-500",
    coverImage: "/images/covers/ep08-loneliness.png",
    topics: ["Loneliness", "Friendship", "Community", "Social Media"],
    guestBio:
      "Sabrina and Chanelle get vulnerable about seasons of loneliness and share practical wisdom for building authentic community.",
  },
  {
    id: 9,
    slug: "dating-apps-and-gods-timing",
    title: "Delete the App? Dating, Heartbreak & Trusting God's Timeline",
    guest: "Sabrina & Chanelle",
    description:
      "The talking stages, the situationships, the 'what are we?' — and the pressure to have it figured out by 30. An honest conversation about modern dating and God's timing.",
    longDescription:
      "If you've ever cried in a parking lot after a date that went nowhere, this episode is for you. Sabrina and Chanelle dive into the mess of modern dating — the apps, the ghosting, the situationships that steal years of your life, and the pressure from family asking 'when are you getting married?' They talk about what healthy relationships actually look like, how to stop settling out of fear, and what it means to trust God's timeline when everyone around you is coupled up. Real talk, no clichés, just two women who've been through it.",
    date: "Fall 2026",
    duration: "55 min",
    gradient: "from-rose-400 via-pink-500 to-fuchsia-500",
    coverImage: "/images/covers/ep09-dating.png",
    topics: ["Dating", "Relationships", "God's Timing", "Heartbreak"],
    guestBio:
      "Sabrina and Chanelle have an unfiltered conversation about dating in the modern world and finding peace in God's perfect timing.",
  },
  {
    id: 10,
    slug: "people-pleasing-is-a-prison",
    title: "People-Pleasing Is a Prison: Learning to Say No Without Guilt",
    guest: "Sabrina & Chanelle",
    description:
      "You say yes to everything and resent everyone. We talk about why women especially struggle with people-pleasing and how boundaries are actually biblical.",
    longDescription:
      "She's the reliable one. The one who always shows up. The one who never says no. Sound familiar? Sabrina and Chanelle talk about the toxic cycle of people-pleasing — how it starts in childhood, how it shows up in friendships, work, and relationships, and how it quietly destroys you from the inside out. They explore why women are especially prone to it, what the Bible says about boundaries (yes, Jesus had them), and how to start saying no without the crushing guilt. This episode might make you uncomfortable — and that's the point.",
    date: "Fall 2026",
    duration: "46 min",
    gradient: "from-pink-400 via-rose-500 to-red-400",
    coverImage: "/images/covers/ep10-people-pleasing.png",
    topics: ["People-Pleasing", "Boundaries", "Self-Worth", "Healing"],
    guestBio:
      "Sabrina and Chanelle share their journeys from chronic people-pleasers to women who learned that 'no' is a complete sentence.",
  },
  {
    id: 11,
    slug: "burnout-generation",
    title: "The Burnout Generation: Rest Is Not Lazy, It's Holy",
    guest: "Sabrina & Chanelle",
    description:
      "You're exhausted but you can't stop. Hustle culture told you to grind — but God said rest. We talk about burnout, productivity guilt, and what Sabbath actually means.",
    longDescription:
      "Every woman in this generation is tired. Running on coffee and cortisol, wearing busyness like a badge. Sabrina and Chanelle get real about their own burnout — the season Sabrina couldn't get out of bed, the time Chanelle realized she was performing for approval instead of living. They talk about how hustle culture infiltrated the church, why rest feels lazy even though God literally commanded it, and practical ways to build Sabbath into a life that won't slow down. If you're running on empty and feel guilty for wanting to stop — listen.",
    date: "Fall 2026",
    duration: "43 min",
    gradient: "from-fuchsia-400 via-pink-500 to-rose-500",
    coverImage: "/images/covers/ep11-burnout.png",
    topics: ["Burnout", "Rest", "Hustle Culture", "Sabbath"],
    guestBio:
      "Sabrina and Chanelle share their battles with burnout and discover that rest isn't the opposite of productivity — it's the foundation of it.",
  },
  {
    id: 12,
    slug: "i-dont-know-who-i-am-anymore",
    title: "I Don't Know Who I Am Anymore: The Quarter-Life Identity Crisis",
    guest: "Sabrina & Chanelle",
    description:
      "You did everything 'right' and still feel lost. We talk about the quarter-life crisis, career confusion, and finding your identity in something that can't be taken from you.",
    longDescription:
      "You got the degree. You got the job. You did what they said would make you happy — and you feel emptier than ever. Sabrina and Chanelle talk about the quarter-life identity crisis that nobody warns you about. The moment you realize the life you built doesn't feel like yours. They share their own seasons of 'who am I?' and how God met them in the confusion — not with a five-year plan, but with a presence. If you're between 22 and 35 and feel like you're falling behind, faking it, or fundamentally lost — this is your episode.",
    date: "Fall 2026",
    duration: "50 min",
    gradient: "from-violet-400 via-pink-500 to-rose-500",
    coverImage: "/images/covers/ep12-identity.png",
    topics: ["Identity Crisis", "Purpose", "Career", "Quarter-Life"],
    guestBio:
      "Sabrina and Chanelle share vulnerably about seasons when they didn't know who they were — and how God revealed their true identity.",
  },
  {
    id: 13,
    slug: "toxic-relationships-red-flags-redemption",
    title: "Red Flags, Redemption & Why You Stayed Too Long",
    guest: "Sabrina & Chanelle",
    description:
      "We all saw the red flags. We stayed anyway. An honest conversation about toxic relationships, trauma bonds, and what God's love actually looks like.",
    longDescription:
      "This episode comes with a content warning and a whole lot of compassion. Sabrina and Chanelle talk about toxic relationships — the kind that start intoxicating and end devastating. They share their own experiences with manipulation, emotional abuse, and the shame of staying. They talk about trauma bonds, why 'just leave' is never that simple, and how God's love is the only thing powerful enough to break the cycle. If you're in it, just got out of it, or still healing from it — this episode sees you.",
    date: "Fall 2026",
    duration: "58 min",
    gradient: "from-rose-500 via-pink-500 to-fuchsia-500",
    coverImage: "/images/covers/ep13-toxic.png",
    topics: ["Toxic Relationships", "Healing", "Red Flags", "God's Love"],
    guestBio:
      "Sabrina and Chanelle create a safe space to talk about the relationships that broke them — and the God who put them back together.",
  },
  {
    id: 14,
    slug: "money-shame-and-faith",
    title: "Broke, Blessed & Stressed: The Money Conversation We Need to Have",
    guest: "Sabrina & Chanelle",
    description:
      "Rent is due, savings are empty, and prosperity gospel isn't helping. A real conversation about financial stress, stewardship, and trusting God when your bank account says otherwise.",
    longDescription:
      "Nobody talks about money in church — unless it's to ask for it. Sabrina and Chanelle break the taboo and get real about financial stress in your twenties and thirties. The student loans, the credit card debt, the 'I can't afford to go out but I'll pretend I can.' They talk about the prosperity gospel lie, what the Bible actually says about money, and practical steps toward financial peace that don't require a six-figure salary. If you've ever felt shame about your bank account, this episode will set you free.",
    date: "Winter 2026",
    duration: "44 min",
    gradient: "from-pink-400 via-fuchsia-500 to-purple-500",
    coverImage: "/images/covers/ep14-money.png",
    topics: ["Money", "Financial Stress", "Stewardship", "Prosperity Gospel"],
    guestBio:
      "Sabrina and Chanelle tackle the money taboo head-on with honesty, biblical wisdom, and zero judgment.",
  },
  {
    id: 15,
    slug: "body-image-battle",
    title: "Mirror, Mirror: The Body Image Battle Every Woman Fights",
    guest: "Sabrina & Chanelle",
    description:
      "Filters, Facetune, and a culture that profits off your insecurity. We talk about body image, the lies we believe, and what it means to be made in God's image.",
    longDescription:
      "She looks perfect online. Her skin is clear, her body is toned, her life is curated. And you? You're skipping mirrors and cropping photos. Sabrina and Chanelle go deep on body image — the disordered eating nobody admits to, the gym obsession disguised as 'health,' the way we pick ourselves apart. They talk about what 'made in God's image' actually means when you hate what you see, why healing your body image is a spiritual battle, and how to start seeing yourself the way God does.",
    date: "Winter 2026",
    duration: "47 min",
    gradient: "from-pink-500 via-rose-500 to-red-400",
    coverImage: "/images/covers/ep15-body-image.png",
    topics: ["Body Image", "Self-Worth", "Diet Culture", "Identity"],
    guestBio:
      "Sabrina and Chanelle share their honest struggles with body image and the freedom that comes from seeing yourself through God's eyes.",
  },
  {
    id: 16,
    slug: "forgiving-your-parents",
    title: "The Hardest Person to Forgive: Healing From Family Wounds",
    guest: "Sabrina & Chanelle",
    description:
      "The absent father. The critical mother. The family that broke you. We talk about forgiving the people who were supposed to protect you.",
    longDescription:
      "Some wounds don't come from strangers — they come from the people who raised you. In their most vulnerable episode yet, Sabrina and Chanelle talk about family trauma, daddy issues, generational patterns, and the weight of carrying hurt from the people who were supposed to love you best. They talk about what forgiveness actually is (and isn't), how God can heal wounds that therapy alone can't reach, and why breaking the cycle starts with you. This episode is for every woman who's ever whispered 'why wasn't I enough?' to a parent who couldn't see her worth.",
    date: "Winter 2026",
    duration: "62 min",
    gradient: "from-rose-400 via-fuchsia-500 to-pink-500",
    coverImage: "/images/covers/ep16-forgiving.png",
    topics: ["Family Wounds", "Forgiveness", "Healing", "Generational Trauma"],
    guestBio:
      "Sabrina and Chanelle share the family wounds they've carried and the healing journey that changed everything.",
  },
];

// Put the real-life topic episodes (7-16) first, then original faith & hair episodes (1-6)
export const episodes: Episode[] = [
  ..._rawEpisodes.filter((e) => e.id >= 7),
  ..._rawEpisodes.filter((e) => e.id < 7),
];
