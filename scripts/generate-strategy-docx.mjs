import {
  Document,
  Packer,
  Paragraph,
  TextRun,
  HeadingLevel,
  AlignmentType,
  Table,
  TableRow,
  TableCell,
  WidthType,
  BorderStyle,
  ShadingType,
  PageBreak,
  TableOfContents,
  LevelFormat,
  Header,
  Footer,
  PageNumber,
  NumberFormat,
  Tab,
  TabStopType,
  TabStopPosition,
  convertInchesToTwip,
} from "docx";
import { writeFileSync, mkdirSync } from "fs";

// ── Constants ──
const PINK = "EC4899";
const PINK_DARK = "BE185D";
const PINK_LIGHT = "FDF2F8";
const PINK_MED = "F9A8D4";
const GOLD = "D4AF37";
const GOLD_LIGHT = "FEF3C7";
const WHITE = "FFFFFF";
const BLACK = "000000";
const GRAY = "6B7280";
const GRAY_LIGHT = "F3F4F6";

const PAGE_WIDTH = 12240;
const PAGE_HEIGHT = 15840;
const MARGIN = 1440;
const CONTENT_WIDTH = PAGE_WIDTH - 2 * MARGIN; // 9360

// ── Helpers ──
function heading1(text) {
  return new Paragraph({
    heading: HeadingLevel.HEADING_1,
    spacing: { before: 400, after: 200 },
    children: [
      new TextRun({
        text,
        bold: true,
        size: 36,
        color: PINK_DARK,
        font: "Calibri",
      }),
    ],
  });
}

function heading2(text) {
  return new Paragraph({
    heading: HeadingLevel.HEADING_2,
    spacing: { before: 300, after: 150 },
    children: [
      new TextRun({
        text,
        bold: true,
        size: 28,
        color: PINK,
        font: "Calibri",
      }),
    ],
  });
}

function heading3(text) {
  return new Paragraph({
    heading: HeadingLevel.HEADING_3,
    spacing: { before: 200, after: 100 },
    children: [
      new TextRun({
        text,
        bold: true,
        size: 24,
        color: GOLD,
        font: "Calibri",
      }),
    ],
  });
}

function bodyText(text, opts = {}) {
  return new Paragraph({
    spacing: { after: 120 },
    children: [
      new TextRun({
        text,
        size: 22,
        font: "Calibri",
        color: opts.color || "374151",
        bold: opts.bold || false,
        italics: opts.italics || false,
      }),
    ],
  });
}

function richParagraph(runs) {
  return new Paragraph({
    spacing: { after: 120 },
    children: runs.map(
      (r) =>
        new TextRun({
          text: r.text,
          size: r.size || 22,
          font: "Calibri",
          color: r.color || "374151",
          bold: r.bold || false,
          italics: r.italics || false,
        })
    ),
  });
}

function bulletItem(text, level = 0) {
  return new Paragraph({
    numbering: { reference: "bullets", level },
    spacing: { after: 60 },
    children: [
      new TextRun({
        text,
        size: 22,
        font: "Calibri",
        color: "374151",
      }),
    ],
  });
}

function emptyLine() {
  return new Paragraph({ spacing: { after: 120 }, children: [] });
}

function pageBreakPara() {
  return new Paragraph({ children: [new PageBreak()] });
}

function makeCell(text, opts = {}) {
  const cellChildren = [];
  if (Array.isArray(text)) {
    text.forEach((line, i) => {
      cellChildren.push(
        new Paragraph({
          spacing: { after: i < text.length - 1 ? 40 : 0 },
          children: [
            new TextRun({
              text: line,
              size: opts.size || 20,
              font: "Calibri",
              bold: opts.bold || false,
              color: opts.textColor || "374151",
            }),
          ],
        })
      );
    });
  } else {
    cellChildren.push(
      new Paragraph({
        children: [
          new TextRun({
            text: text || "",
            size: opts.size || 20,
            font: "Calibri",
            bold: opts.bold || false,
            color: opts.textColor || "374151",
          }),
        ],
      })
    );
  }
  const cellOpts = {
    children: cellChildren,
    width: { size: opts.width || 2000, type: WidthType.DXA },
    margins: {
      top: 60,
      bottom: 60,
      left: 80,
      right: 80,
    },
  };
  if (opts.shading) {
    cellOpts.shading = {
      type: ShadingType.CLEAR,
      fill: opts.shading,
    };
  }
  return new TableCell(cellOpts);
}

function makeTable(headers, rows, colWidths) {
  const totalWidth = colWidths.reduce((a, b) => a + b, 0);
  const tableRows = [];

  // Header row
  tableRows.push(
    new TableRow({
      children: headers.map((h, i) =>
        makeCell(h, {
          bold: true,
          width: colWidths[i],
          shading: PINK,
          textColor: WHITE,
          size: 20,
        })
      ),
    })
  );

  // Data rows
  rows.forEach((row, ri) => {
    tableRows.push(
      new TableRow({
        children: row.map((cell, ci) =>
          makeCell(cell, {
            width: colWidths[ci],
            shading: ri % 2 === 0 ? PINK_LIGHT : WHITE,
          })
        ),
      })
    );
  });

  return new Table({
    width: { size: CONTENT_WIDTH, type: WidthType.DXA },
    columnWidths: colWidths,
    rows: tableRows,
    borders: {
      top: { style: BorderStyle.SINGLE, size: 1, color: PINK_MED },
      bottom: { style: BorderStyle.SINGLE, size: 1, color: PINK_MED },
      left: { style: BorderStyle.SINGLE, size: 1, color: PINK_MED },
      right: { style: BorderStyle.SINGLE, size: 1, color: PINK_MED },
      insideHorizontal: {
        style: BorderStyle.SINGLE,
        size: 1,
        color: PINK_MED,
      },
      insideVertical: {
        style: BorderStyle.SINGLE,
        size: 1,
        color: PINK_MED,
      },
    },
  });
}

function dividerLine() {
  return new Paragraph({
    spacing: { before: 200, after: 200 },
    border: {
      bottom: { style: BorderStyle.SINGLE, size: 2, color: GOLD },
    },
    children: [],
  });
}

// ── SECTIONS ──

function coverPage() {
  return [
    new Paragraph({ spacing: { before: 3000 }, children: [] }),
    new Paragraph({
      alignment: AlignmentType.CENTER,
      spacing: { after: 200 },
      children: [
        new TextRun({
          text: "Curlie Girlie Collective",
          bold: true,
          size: 72,
          color: PINK,
          font: "Calibri",
        }),
      ],
    }),
    new Paragraph({
      alignment: AlignmentType.CENTER,
      spacing: { after: 100 },
      children: [
        new TextRun({
          text: "_______________",
          color: GOLD,
          size: 28,
          font: "Calibri",
        }),
      ],
    }),
    new Paragraph({
      alignment: AlignmentType.CENTER,
      spacing: { after: 300 },
      children: [
        new TextRun({
          text: "First-Year Podcast Strategy Package",
          bold: true,
          size: 36,
          color: PINK_DARK,
          font: "Calibri",
        }),
      ],
    }),
    new Paragraph({
      alignment: AlignmentType.CENTER,
      spacing: { after: 600 },
      children: [
        new TextRun({
          text: "Faith, hair, and the messy beautiful parts in between",
          italics: true,
          size: 26,
          color: GOLD,
          font: "Calibri",
        }),
      ],
    }),
    new Paragraph({
      alignment: AlignmentType.CENTER,
      spacing: { after: 100 },
      children: [
        new TextRun({
          text: "March 2026",
          size: 24,
          color: GRAY,
          font: "Calibri",
        }),
      ],
    }),
    new Paragraph({
      alignment: AlignmentType.CENTER,
      spacing: { after: 100 },
      children: [
        new TextRun({
          text: "Prepared for: Sabrina Anderson & Chanelle",
          size: 24,
          color: GRAY,
          font: "Calibri",
        }),
      ],
    }),
    pageBreakPara(),
  ];
}

function tocSection() {
  return [
    heading1("Table of Contents"),
    new TableOfContents("Table of Contents", {
      hyperlink: true,
      headingStyleRange: "1-3",
    }),
    pageBreakPara(),
  ];
}

function aboutSection() {
  return [
    heading1("About the Podcast"),
    dividerLine(),
    heading2("The Hosts"),
    richParagraph([
      { text: "Sabrina Anderson ", bold: true, color: PINK },
      { text: "(@fabsabstyle) ", italics: true, color: GRAY },
      {
        text: '- "JESUS, then everything else." Educator at Jon Renau. Curly Girl in San Diego, CA.',
      },
    ]),
    richParagraph([
      { text: "Chanelle ", bold: true, color: PINK },
      { text: "(@createdbychanelle) ", italics: true, color: GRAY },
      {
        text: '- "God\'s Girl & Powered by Prayer." On-Set Hairstylist, Licensed Cosmetologist, Alternative Hair Educator & Product Specialist at Jon Renau.',
      },
    ]),
    emptyLine(),
    heading2("Who We Are"),
    bodyText(
      "Two women in their 20s and 30s working at Jon Renau doing alternative hair education. Both came to the Lord later in life. We specialize in wigs, toppers, and hair replacement systems for people experiencing hair loss from chemo, autoimmune conditions, and alopecia."
    ),
    emptyLine(),
    heading2("Core Identity"),
    bodyText(
      '"Two friends figuring it out." This podcast is a ministry through authentic conversation. Our mission: "Anybody can come to the Lord no matter where you\'re at in your walk."'
    ),
    emptyLine(),
    heading2("Format"),
    bulletItem("Mix of co-host episodes and guest interviews"),
    bulletItem("70% co-host conversation, 30% guest interviews"),
    bulletItem("Episode Length: 35-50 minutes"),
    bulletItem('Release Schedule: Weekly (every Tuesday - "Transform Tuesday")'),
    emptyLine(),
    heading2("Tagline"),
    new Paragraph({
      alignment: AlignmentType.CENTER,
      spacing: { before: 200, after: 200 },
      children: [
        new TextRun({
          text: '"Faith, hair, and the messy beautiful parts in between"',
          italics: true,
          bold: true,
          size: 28,
          color: GOLD,
          font: "Calibri",
        }),
      ],
    }),
    emptyLine(),
    heading2("Content Pillars"),
    makeTable(
      ["Pillar", "Description"],
      [
        [
          "FAITH",
          "Testimony, devotionals, prayer, encouragement, God meets you where you are",
        ],
        [
          "HAIR",
          "Education, product knowledge, hair loss journeys, wig/topper tips",
        ],
        [
          "IDENTITY",
          "Who you're becoming, confidence, self-image, beauty beyond appearance",
        ],
        [
          "COMMUNITY",
          "Real talk, listener stories, behind-the-scenes, friendship",
        ],
      ],
      [2340, 7020]
    ),
    pageBreakPara(),
  ];
}

function audienceSection() {
  return [
    heading1("Audience Demographics"),
    dividerLine(),
    heading2("Primary Demographics"),
    makeTable(
      ["Metric", "Value"],
      [
        ["Primary Audience", "Women ages 25-45"],
        ["Gender", "82.45% Female"],
        ["Household Income", "$95,000 - $130,000"],
        ["Education", "College-educated"],
        [
          "Geography",
          "Southern Bible Belt + Urban Centers (Charlotte, Atlanta, Nashville, Dallas, Houston)",
        ],
        ["Market Size (Current)", "$7.5 - $7.9 Billion"],
        ["Market Size (Projected 2034)", "$12.6 Billion"],
        ["US Women with Alopecia", "6.8 Million"],
      ],
      [3120, 6240]
    ),
    emptyLine(),
    heading2("Primary Audience Segments"),
    makeTable(
      ["Segment", "Who They Are", "Why They Listen"],
      [
        [
          "Women experiencing hair loss",
          "Ages 25-55, chemo, alopecia, autoimmune, postpartum, PCOS",
          "Need practical help AND emotional/spiritual encouragement",
        ],
        [
          "Women exploring wigs/toppers",
          "Any age, curious about alternative hair",
          "Want education from trusted sources, not sales pitches",
        ],
        [
          "Women on a faith journey",
          "20s-40s, came to faith later or re-exploring",
          'Need to hear "you\'re not too late" from people who GET it',
        ],
        [
          "Christian women seeking community",
          "20s-40s, tired of performative faith",
          "Want authenticity, not religious performance",
        ],
      ],
      [2000, 3680, 3680]
    ),
    emptyLine(),
    heading2("Secondary Audience"),
    makeTable(
      ["Segment", "Who They Are", "Why They Listen"],
      [
        [
          "Hair professionals",
          "Stylists, salon owners, wig specialists",
          "Learning alternative hair education",
        ],
        [
          "Caregivers",
          "Husbands, mothers, friends",
          "Want to understand and support loved ones",
        ],
        [
          "Women in personal growth",
          'Anyone resonating with "becoming who I\'m meant to be"',
          "The transformation narrative is universally compelling",
        ],
      ],
      [2000, 3680, 3680]
    ),
    pageBreakPara(),
  ];
}

function avatarSection() {
  return [
    heading1('Audience Avatar - Meet "Rachel"'),
    dividerLine(),
    heading2("Demographics"),
    makeTable(
      ["Attribute", "Detail"],
      [
        ["Age", "34"],
        ["Location", "Charlotte, NC"],
        ["Marital Status", "Married with 2 kids"],
        ["Occupation", "Marketing Manager"],
        ["Household Income", "$115,000"],
        ["Diagnosis", "Alopecia Areata (18 months ago)"],
        ["Faith", "Came to faith at age 28"],
      ],
      [3120, 6240]
    ),
    emptyLine(),
    heading2("Pain Points"),
    bulletItem(
      "Identity Loss - She looks in the mirror and doesn't recognize herself"
    ),
    bulletItem(
      "Public Anxiety - Constantly worried her wig will shift or someone will notice"
    ),
    bulletItem(
      "Grief & Mourning - She is grieving the hair she used to have"
    ),
    bulletItem(
      'Spiritual Confusion - Wonders "Why would God let this happen to me?"'
    ),
    bulletItem(
      "Financial Burden - Quality wigs cost $300-$3,000+, ongoing maintenance adds up"
    ),
    bulletItem(
      "Social Stigma - Feels shame around wearing alternative hair"
    ),
    bulletItem(
      "Intimacy Concerns - Worried about vulnerability with her partner"
    ),
    emptyLine(),
    heading2("Where She Shops"),
    bulletItem("Amazon, Ulta, specialty wig retailers"),
    bulletItem("Jon Renau, Raquel Welch, Sensationnel, Outre"),
    bulletItem("BosleyMD for hair regrowth products"),
    emptyLine(),
    heading2("Faith Influencers She Follows"),
    bulletItem("Jennie Allen (IF:Gathering)"),
    bulletItem("Lysa TerKeurst (Proverbs 31 Ministries)"),
    bulletItem("Beth Moore"),
    bulletItem("Sadie Robertson Huff"),
    emptyLine(),
    heading2("Music & Media"),
    bulletItem("Lauren Daigle, CeCe Winans, K-Love, CCM"),
    bulletItem("The Bible App, She Reads Truth, Proverbs 31 podcast"),
    emptyLine(),
    heading2("Where She Finds Community"),
    bulletItem("Reddit (r/FemaleHairLoss, r/Wigs)"),
    bulletItem("Facebook private hair loss support groups"),
    bulletItem("Instagram beauty and faith accounts"),
    bulletItem("TikTok hair transformation videos"),
    bulletItem("Church small groups and women's ministry"),
    pageBreakPara(),
  ];
}

function brandVoiceSection() {
  return [
    heading1("Brand Voice & Positioning"),
    dividerLine(),
    heading2("Voice"),
    bodyText(
      "Warm, authentic, faith-forward but not preachy. We talk about Jesus the way we talk to our best friend - naturally, honestly, with love."
    ),
    emptyLine(),
    heading2("Positioning"),
    bodyText(
      "The only podcast at the intersection of faith, alternative hair, and identity. There is no other show doing what we do."
    ),
    emptyLine(),
    heading2("Differentiator"),
    bodyText(
      "The hosts ARE the audience. Sabrina and Chanelle work in the alternative hair industry AND live the faith journey every day. They are not outsiders commenting - they are insiders sharing."
    ),
    emptyLine(),
    heading2("Tone"),
    new Paragraph({
      alignment: AlignmentType.CENTER,
      spacing: { before: 200, after: 200 },
      children: [
        new TextRun({
          text: '"Like talking to your best friend at brunch after church"',
          italics: true,
          bold: true,
          size: 26,
          color: PINK,
          font: "Calibri",
        }),
      ],
    }),
    emptyLine(),
    heading2("Voice Guidelines"),
    makeTable(
      ["Context", "Tone"],
      [
        ["Podcast episodes", "Conversational, curious, empathetic"],
        ["Social media", "Playful, trendy, community-oriented"],
        ["Sponsor communications", "Professional, data-driven, partnership-focused"],
        ["Email newsletters", "Friendly, personal, value-packed"],
        ["Merch copy", "Bold, fun, empowering"],
      ],
      [3120, 6240]
    ),
    emptyLine(),
    heading2("What We Are NOT"),
    bulletItem("A prosperity gospel podcast"),
    bulletItem("A product shill"),
    bulletItem("A performance"),
    bulletItem("Judgmental or exclusive"),
    pageBreakPara(),
  ];
}

function contentCalendarSection() {
  const months = [
    {
      month: "Month 1 (Launch)",
      phase: "LAUNCH",
      episodes: [
        [
          'EP 1: "Faith, Hair & Finding Yourself"',
          "Debut episode. Sabrina and Chanelle share their stories, coming to the Lord later in life, working at Jon Renau, and the vision for the podcast.",
        ],
        [
          'EP 2: "Wigs, Toppers & God\'s Perfect Timing"',
          "Breaking down the world of alternative hair and how God uses unexpected seasons to grow our faith.",
        ],
        [
          'EP 3: "Coming to Christ When the World Says You\'re Too Late"',
          "Raw personal testimonies about finding Jesus as adults and the overwhelming grace they found.",
        ],
        [
          'EP 4: "What the Bible Really Says About Beauty"',
          "Walking through key Scriptures on beauty, identity, and being fearfully and wonderfully made.",
        ],
      ],
    },
    {
      month: "Month 2 (Establish Voice)",
      phase: "LAUNCH",
      episodes: [
        [
          'EP 5: "Hair Loss, Identity & Letting God Lead"',
          "When your hair changes, your identity feels shaken. Walking through hair loss with faith.",
        ],
        [
          'EP 6: "Leading Other Women to Jesus"',
          "How to share your faith naturally without being pushy, planting seeds in the salon chair.",
        ],
        [
          'EP 7: "My First Wig: The Story Nobody Tells You"',
          "The emotional rollercoaster of wearing alternative hair for the first time.",
        ],
        [
          'EP 8: "Real Talk - Who I Am Now vs. Who I Was"',
          "Honest conversation about transformation, growth, and becoming.",
        ],
      ],
    },
    {
      month: "Month 3 (Build Momentum)",
      phase: "LAUNCH",
      episodes: [
        [
          'EP 9: Guest - "A Survivor\'s Crown"',
          "A chemo survivor shares how hair loss led her to faith.",
        ],
        [
          'EP 10: "What Does God Think About Vanity?"',
          "Exploring the faith-beauty intersection with grace and Scripture.",
        ],
        [
          'EP 11: "Wig 101 - Beginner\'s Guide to Toppers vs. Full Wigs"',
          "Educational deep-dive from Jon Renau expertise.",
        ],
        [
          'EP 12: "Q&A - Your Questions, Our Hearts"',
          "First listener questions episode.",
        ],
      ],
    },
    {
      month: "Month 4 (First Guests)",
      phase: "GUEST INTRO",
      episodes: [
        [
          'EP 13: Guest - "From the Salon Chair to the Altar"',
          "A hair professional shares how her work became ministry.",
        ],
        [
          'EP 14: "Comparison Is a Thief"',
          "Learning to love your journey and stop scrolling through someone else's.",
        ],
        [
          'EP 15: Guest - "When Your Pastor Doesn\'t Get It"',
          "Navigating church hurt and finding healing.",
        ],
        [
          'EP 16: "The Stuff We Don\'t Post on Instagram"',
          "Real talk about the gap between online life and real life.",
        ],
      ],
    },
    {
      month: "Month 5 (More Guests)",
      phase: "GUEST INTRO",
      episodes: [
        [
          'EP 17: Guest - "My Husband\'s Reaction to My Hair Loss"',
          "A couple shares their journey through hair loss together.",
        ],
        [
          'EP 18: "Dating as a Christian Woman in 2026"',
          "Honest conversation about faith, attraction, and vulnerability.",
        ],
        [
          'EP 19: Guest - Oncologist on Emotional Aspects of Chemo',
          "Medical perspective meets compassion and faith.",
        ],
        [
          'EP 20: "Swimming, Gym, Wind - Living Life in Alternative Hair"',
          "Practical tips for active life with wigs and toppers.",
        ],
      ],
    },
    {
      month: "Month 6 (Community Building)",
      phase: "COMMUNITY",
      episodes: [
        [
          'EP 21: "I Thought God Gave Up on Me"',
          "Stories of returning to faith after walking away.",
        ],
        [
          'EP 22: "Alopecia Awareness Special"',
          "Everything you need to know about alopecia, featuring community voices.",
        ],
        [
          'EP 23: Guest - Therapist on Grief & Identity After Hair Loss',
          "Professional guidance meets spiritual encouragement.",
        ],
        [
          'EP 24: "Praying When You Don\'t Know What to Say"',
          "Practical prayer guidance for new believers.",
        ],
      ],
    },
    {
      month: "Month 7 (Sponsor Integration)",
      phase: "SPONSOR LAUNCH",
      episodes: [
        [
          'EP 25: "The Cost of Hair Loss - Financial & Emotional"',
          "Real numbers, real feelings, real solutions. First sponsored episode opportunity.",
        ],
        [
          'EP 26: Guest - Wig Influencer on Building Confidence',
          "Social media, self-image, and finding your platform.",
        ],
        [
          'EP 27: "Forgiveness Is Not a Feeling"',
          "Deep faith topic with partner brand integration.",
        ],
        [
          'EP 28: "Product Review Special - Our Holy Grail Hair Products"',
          "Honest reviews with affiliate and sponsor partnerships.",
        ],
      ],
    },
    {
      month: "Month 8 (Deepen Partnerships)",
      phase: "SPONSOR GROWTH",
      episodes: [
        [
          'EP 29: "Hair Loss at 25 - Nobody Talks About This"',
          "Young women's stories with brand partner spotlight.",
        ],
        [
          'EP 30: Guest - Worship Leader on Finding Your Voice',
          "Music, ministry, and confidence.",
        ],
        [
          'EP 31: "Explaining Your Wig to Your Kids"',
          "Parenting, honesty, and family faith.",
        ],
        [
          'EP 32: "The Bible Verses That Changed Everything"',
          "Scripture deep-dive with devotional brand partnership.",
        ],
      ],
    },
    {
      month: "Month 9 (Expansion Prep)",
      phase: "EXPANSION",
      episodes: [
        [
          'EP 33: "When God Wrecks Your Plans (And It\'s Better)"',
          "Testimony episode with growing audience.",
        ],
        [
          'EP 34: Guest - Jon Renau Product Innovation',
          "Industry insider look at what's coming in alternative hair.",
        ],
        [
          'EP 35: "Body Image After 30"',
          "Broader wellness conversation for expanded audience.",
        ],
        [
          'EP 36: "Live Q&A Special"',
          "Community engagement event recorded as episode.",
        ],
      ],
    },
    {
      month: "Month 10 (Events & Collabs)",
      phase: "EXPANSION",
      episodes: [
        [
          'EP 37: "Crown & Glory Summit Preview"',
          "Announcing the first live or virtual event.",
        ],
        [
          'EP 38: Guest Swap - Faith Podcast Collaboration',
          "Cross-promotion with a complementary faith podcast.",
        ],
        [
          'EP 39: "Anxiety, Faith & Getting Professional Help"',
          "Mental health and faith intersection.",
        ],
        [
          'EP 40: "What We\'d Tell Our 18-Year-Old Selves"',
          "Reflection episode with growing listener base.",
        ],
      ],
    },
    {
      month: "Month 11 (Reflection)",
      phase: "REFLECTION",
      episodes: [
        [
          'EP 41: "Thanksgiving - Gratitude in the Hard Seasons"',
          "Seasonal episode celebrating what God has done.",
        ],
        [
          'EP 42: Guest - Woman Who Started a Hair Loss Support Group',
          "Community leader spotlight.",
        ],
        [
          'EP 43: "Tithing When You\'re Broke - Money & Faith"',
          "Practical faith and finance conversation.",
        ],
        [
          'EP 44: "Our Listeners\' Best Stories"',
          "Community testimonials and highlights from Year 1.",
        ],
      ],
    },
    {
      month: "Month 12 (Season 2 Planning)",
      phase: "REFLECTION",
      episodes: [
        [
          'EP 45: "Christmas - The Gift of Showing Up As You Are"',
          "Holiday special about authenticity and grace.",
        ],
        [
          'EP 46: "Year 1 Reflections - What God Did"',
          "Looking back on 12 months of faith, growth, and community.",
        ],
        [
          'EP 47: "The Woman I\'m Becoming"',
          "Personal growth episode setting the stage for Season 2.",
        ],
        [
          'EP 48: "Season 2 Preview & Vision Cast"',
          "What's coming next, listener input, and casting vision for the future.",
        ],
      ],
    },
  ];

  const elements = [
    heading1("Content Strategy & 12-Month Calendar"),
    dividerLine(),
    bodyText(
      "The following calendar maps out 48 episodes across Year 1, organized into strategic phases that build audience, establish voice, introduce guests, integrate sponsors, and scale the brand."
    ),
    emptyLine(),
  ];

  // Phase overview table
  elements.push(heading2("Phase Overview"));
  elements.push(
    makeTable(
      ["Phase", "Months", "Goal"],
      [
        [
          "Launch",
          "1-3",
          "Establish voice, build consistency, launch brand",
        ],
        [
          "Guest Introduction",
          "4-5",
          "Diversify content, bring in guest perspectives",
        ],
        [
          "Community Building",
          "6",
          "Grow audience to 500+ downloads, build community",
        ],
        [
          "Sponsor Integration",
          "7-8",
          "First revenue streams, affiliate and sponsor partnerships",
        ],
        [
          "Expansion",
          "9-10",
          "Events, collaborations, cross-promotion",
        ],
        [
          "Reflection & Season 2",
          "11-12",
          "Year 1 reflection, plan Season 2, scale to 2,500+ downloads",
        ],
      ],
      [2340, 1560, 5460]
    )
  );
  elements.push(emptyLine());

  // Monthly breakdown
  months.forEach((m) => {
    elements.push(heading3(`${m.month} - ${m.phase}`));
    elements.push(
      makeTable(
        ["Episode", "Description"],
        m.episodes,
        [3120, 6240]
      )
    );
    elements.push(emptyLine());
  });

  elements.push(pageBreakPara());
  return elements;
}

function monetizationSection() {
  return [
    heading1("Monetization Roadmap"),
    dividerLine(),
    heading2("Phase 1: Audience First (Months 1-3)"),
    bodyText(
      "No monetization. Focus entirely on building an authentic audience and establishing trust. Build the email list, grow social media, and publish consistently."
    ),
    bulletItem("Build email list through landing page"),
    bulletItem("Grow Instagram and TikTok presence"),
    bulletItem("Publish 12 episodes with consistent quality"),
    bulletItem("Begin affiliate link tracking (Amazon, Jon Renau)"),
    emptyLine(),
    heading2("Phase 2: Affiliate & Merch Soft Launch (Months 4-6)"),
    bodyText(
      "Activate first revenue streams through affiliate partnerships and a soft merch launch."
    ),
    bulletItem("Jon Renau affiliate partnership (already connected through work)"),
    bulletItem("Amazon affiliate links for recommended products"),
    bulletItem("Merch waitlist and soft launch of first collection"),
    bulletItem("Digital product development: Hair Starter Kit ($17-27)"),
    emptyLine(),
    heading2("Phase 3: Sponsor Integration (Months 7-9)"),
    bodyText(
      "Introduce formal sponsorships with tiered packaging."
    ),
    emptyLine(),
    heading3("Sponsorship Tiers"),
    makeTable(
      ["Tier", "Features", "Ideal For"],
      [
        [
          "Bronze - Get Noticed",
          [
            "15-sec pre-roll on 2 episodes/month",
            "Logo on sponsors page",
            "1 social shoutout/month",
            "Monthly performance snapshot",
          ],
          "Emerging brands seeking initial exposure",
        ],
        [
          "Gold - Most Popular",
          [
            "60-sec mid-roll on all episodes",
            "Dedicated blog post / product review",
            "Homepage + sponsors page logo",
            "Newsletter feature 1x/month",
            "4-post social campaign (IG/TikTok)",
            "Custom promo code for listeners",
            "Quarterly review call",
          ],
          "Established brands seeking deep engagement",
        ],
        [
          "Platinum - Full Partnership",
          [
            "Title sponsor integration",
            "Co-branded content (video, blog, social)",
            "Exclusive co-branded merchandise",
            "VIP event access + co-hosting",
            "Full-page brand feature on website",
            "Weekly social integration",
            "Priority product sampling",
            "Dedicated account manager",
            "Monthly analytics + strategy sessions",
          ],
          "Major brands seeking title-level integration",
        ],
      ],
      [1800, 5060, 2500]
    ),
    emptyLine(),
    heading2("Phase 4: Premium Content & Events (Months 10-12)"),
    bodyText("Scale to multiple revenue streams and premium offerings."),
    bulletItem(
      'Community membership ($9.99/month) - Monthly live prayer + Q&A, private community, early episode access, exclusive "Hair Try-On" livestreams'
    ),
    bulletItem(
      'Digital product: "30 Days of Confidence" devotional ($12.99)'
    ),
    bulletItem(
      'Live events: "Crown & Glory" virtual summit or local meetup'
    ),
    bulletItem("Speaking engagements: Churches, women's conferences, hair expos"),
    bulletItem("YouTube channel with video episodes"),
    emptyLine(),
    heading2("Revenue Projections (Month 12)"),
    makeTable(
      ["Revenue Stream", "Timeline", "Est. Monthly Revenue"],
      [
        ["Affiliate links (Jon Renau, Amazon)", "Month 1+", "$200 - $500"],
        ["Sponsored episodes", "Month 6+", "$500 - $2,000/episode"],
        ["Digital product (Hair Starter Kit)", "Month 7+", "$300 - $800"],
        ["Community membership", "Month 8+", "$500 - $2,000"],
        ["YouTube ad revenue", "Month 10+", "$100 - $500"],
        ["Devotional ebook", "Month 10+", "$200 - $600"],
        ["Speaking/events", "Month 10+", "$500 - $3,000"],
        ["Merch", "Month 11+", "$300 - $1,000"],
        ["TOTAL (by Month 12)", "", "$2,600 - $10,400/mo"],
      ],
      [3120, 2340, 3900]
    ),
    pageBreakPara(),
  ];
}

function sponsorMediaKitSection() {
  return [
    heading1("Sponsor & Media Kit"),
    dividerLine(),
    heading2("Audience Overview"),
    makeTable(
      ["Metric", "Value"],
      [
        ["Core Age Range", "25-45"],
        ["Gender", "82.45% Female"],
        ["Engagement Rate", "92%"],
        ["Purchase from Recommendations", "70%"],
        ["Average Household Income", "$95K - $130K"],
        ["Education", "College-educated"],
        ["Geography", "US-based, Southern Bible Belt + Urban Centers"],
      ],
      [3120, 6240]
    ),
    emptyLine(),
    heading2("Why Partner With Curlie Girlie Collective"),
    bulletItem(
      "Authentic Influence: Our audience trusts our recommendations because we live this life"
    ),
    bulletItem(
      "Niche + Growing: The alternative hair market is projected to reach $12.6B by 2034"
    ),
    bulletItem(
      "Multi-Platform Reach: Podcast + website + social + email + events"
    ),
    bulletItem(
      "Faith-Forward Community: Deeply engaged, values-driven audience"
    ),
    emptyLine(),
    heading2("Ideal Partner Categories"),
    makeTable(
      ["Category", "Examples"],
      [
        ["Hair Care", "Wigs, toppers, extensions, shampoos, conditioners, styling products"],
        ["Beauty & Wellness", "Skincare, supplements, mental health apps, self-care"],
        ["Faith & Devotional", "Bible apps, devotionals, Christian publishers, worship brands"],
        ["Fashion", "Apparel, accessories, satin products, modest fashion"],
        ["Lifestyle", "Subscription boxes, home goods, journals, planners"],
      ],
      [2340, 7020]
    ),
    emptyLine(),
    heading2("Ad Format Specifications"),
    makeTable(
      ["Format", "Duration", "Details"],
      [
        [
          "Pre-Roll",
          "15 seconds",
          "Host-read, conversational. Brand name + tagline + CTA. Episode opening.",
        ],
        [
          "Mid-Roll",
          "60 seconds",
          "Host-read with personal endorsement. Product description + anecdote + promo code.",
        ],
        [
          "Post-Roll",
          "30 seconds",
          "Thank-you mention with CTA recap. Available as add-on.",
        ],
        [
          "Native Content",
          "Varies",
          "Full blog post (800-1200 words), product review, social carousel/reel.",
        ],
      ],
      [2000, 1560, 5800]
    ),
    emptyLine(),
    heading2("Contact"),
    bodyText("Sponsorship inquiries: sponsors@curlyhaircollective.com"),
    bodyText("General inquiries: hello@curliegirlie.com"),
    bodyText("Website: curliegirlie.com"),
    pageBreakPara(),
  ];
}

function merchSection() {
  const products = [
    [
      "1. God's Girl Tee",
      "$34.99",
      "Apparel",
      "100% organic cotton tee with 'God's Girl' in gold foil lettering. A daily reminder of whose you are. Sizes: XS-2XL. BEST SELLER.",
    ],
    [
      "2. Powered by Prayer Hoodie",
      "$64.99",
      "Apparel",
      "Oversized unisex hoodie with embroidered 'Powered by Prayer' across the chest. Cozy fleece interior, perfect for devotional mornings. Sizes: S-2XL.",
    ],
    [
      "3. Faith Over Fear Satin Bonnet",
      "$24.99",
      "Accessories",
      "Double-layered satin bonnet with 'Faith Over Fear' embroidered in gold. Protects your hair while you rest in His promises. NEW.",
    ],
    [
      "4. Curlie Girlie Cross Necklace",
      "$28.99",
      "Accessories",
      "Dainty gold-plated cross necklace with a tiny curl charm. Faith meets femininity in one beautiful piece.",
    ],
    [
      "5. Scripture Affirmation Cards",
      "$19.99",
      "Faith Essentials",
      "30 beautifully designed cards with Scripture and affirmations for identity, beauty, and faith. Perfect for wash day or quiet time.",
    ],
    [
      "6. Fearfully & Wonderfully Made Mug",
      "$18.99",
      "Lifestyle",
      "Ceramic mug with Psalm 139:14 in our signature pink gradient. Start your morning with coffee and the Word.",
    ],
    [
      "7. Pray Then Slay Cap",
      "$24.99",
      "Accessories",
      "Adjustable dad cap with 'Pray Then Slay' embroidered in gold. For the days when you need both faith and fashion.",
    ],
    [
      "8. Curlie Girlie Collective Tote",
      "$22.99",
      "Lifestyle",
      "Heavyweight canvas tote with logo and 'Faith. Hair. Identity. Becoming.' printed on the side. Carry your Bible and your bonnets.",
    ],
  ];

  return [
    heading1("Merch Line"),
    dividerLine(),
    bodyText(
      "Our merch line bridges faith and identity. Every product is designed to be a conversation starter and a daily reminder of who you are in Christ."
    ),
    emptyLine(),
    makeTable(
      ["Product", "Price", "Category", "Description"],
      products,
      [2100, 900, 1560, 4800]
    ),
    emptyLine(),
    heading2("Merch Design Guidelines"),
    bulletItem("Pink-dominant with gold accents"),
    bulletItem("Bold typography on apparel"),
    bulletItem("Empowering, faith-forward slogans"),
    bulletItem("Premium materials and packaging"),
    bulletItem(
      "Packaging: Pink tissue paper with gold foil logo stamp, branded sticker seal, thank-you card"
    ),
    pageBreakPara(),
  ];
}

function introScriptsSection() {
  return [
    heading1("Podcast Intro Scripts"),
    dividerLine(),
    heading2("Standard Intro (15-20 seconds)"),
    new Paragraph({
      spacing: { after: 40 },
      indent: { left: 400, right: 400 },
      children: [
        new TextRun({
          text: "SABRINA: ",
          bold: true,
          size: 22,
          font: "Calibri",
          color: PINK,
        }),
        new TextRun({
          text: '"Hey girl, welcome to the Curlie Girlie Collective \u2014 the podcast where faith meets hair meets everything in between. I\'m Sabrina..."',
          italics: true,
          size: 22,
          font: "Calibri",
          color: "374151",
        }),
      ],
    }),
    new Paragraph({
      spacing: { after: 40 },
      indent: { left: 400, right: 400 },
      children: [
        new TextRun({
          text: "CHANELLE: ",
          bold: true,
          size: 22,
          font: "Calibri",
          color: PINK,
        }),
        new TextRun({
          text: '"And I\'m Chanelle..."',
          italics: true,
          size: 22,
          font: "Calibri",
          color: "374151",
        }),
      ],
    }),
    new Paragraph({
      spacing: { after: 200 },
      indent: { left: 400, right: 400 },
      children: [
        new TextRun({
          text: "BOTH: ",
          bold: true,
          size: 22,
          font: "Calibri",
          color: PINK,
        }),
        new TextRun({
          text: '"And we\'re two friends figuring it out \u2014 one curl and one prayer at a time. Let\'s get into it."',
          italics: true,
          size: 22,
          font: "Calibri",
          color: "374151",
        }),
      ],
    }),
    emptyLine(),
    heading2("First Episode / Trailer Intro (45-60 seconds)"),
    new Paragraph({
      spacing: { after: 200 },
      indent: { left: 400, right: 400 },
      children: [
        new TextRun({
          text: '"Hey! If you\'ve ever looked in the mirror and wondered if God sees you \u2014 really sees you \u2014 through the hair loss, the wigs, the toppers, the tears, and the \'I don\'t even recognize myself anymore\' moments... girl, you\'re in the right place.',
          italics: true,
          size: 22,
          font: "Calibri",
          color: "374151",
        }),
      ],
    }),
    new Paragraph({
      spacing: { after: 200 },
      indent: { left: 400, right: 400 },
      children: [
        new TextRun({
          text: "We're Sabrina and Chanelle, two alternative hair educators at Jon Renau who came to the Lord later in life, and honestly? We're still figuring it out. But that's kind of the point.",
          italics: true,
          size: 22,
          font: "Calibri",
          color: "374151",
        }),
      ],
    }),
    new Paragraph({
      spacing: { after: 200 },
      indent: { left: 400, right: 400 },
      children: [
        new TextRun({
          text: "This is the Curlie Girlie Collective \u2014 where we talk about faith, hair, identity, and all the messy beautiful parts in between. Whether you're rocking your natural curls, wearing a wig and wondering if anyone can tell, or just looking for friends who get it \u2014 welcome home.\"",
          italics: true,
          size: 22,
          font: "Calibri",
          color: "374151",
        }),
      ],
    }),
    emptyLine(),
    heading2("Outro (10-15 seconds)"),
    new Paragraph({
      spacing: { after: 200 },
      indent: { left: 400, right: 400 },
      children: [
        new TextRun({
          text: '"Thanks for hanging with us, Curlie Girlies! If this episode blessed you, share it with a friend who needs to hear it. Follow us @curliegirliecollective, and remember \u2014 you are fearfully and wonderfully made. See you next week!"',
          italics: true,
          size: 22,
          font: "Calibri",
          color: "374151",
        }),
      ],
    }),
    pageBreakPara(),
  ];
}

function brainstormingSection() {
  return [
    heading1("Brainstorming Ideas"),
    dividerLine(),
    heading2("Episode Topic Ideas (25+)"),
    heading3("Faith Topics"),
    bulletItem('"I Thought God Gave Up on Me"'),
    bulletItem('"How We Found God in Our 20s/30s"'),
    bulletItem('"What Nobody Tells You About Being a New Christian"'),
    bulletItem('"Praying When You Don\'t Know What to Say"'),
    bulletItem('"When God Wrecks Your Plans (And It\'s Better)"'),
    bulletItem('"Church Hurt: Healing and Coming Back"'),
    bulletItem('"The Bible Verses That Changed Everything"'),
    bulletItem('"Forgiveness Is Not a Feeling"'),
    bulletItem('"Tithing When You\'re Broke"'),
    emptyLine(),
    heading3("Hair & Identity Topics"),
    bulletItem('"The Day I Lost My Hair"'),
    bulletItem('"Wig Shopping: What I Wish I Knew"'),
    bulletItem('"Toppers vs. Wigs: The Real Difference"'),
    bulletItem('"How to Style a Wig Like It\'s Your Real Hair"'),
    bulletItem('"Hair Loss at 25: Nobody Talks About This"'),
    bulletItem('"Explaining Your Wig to Your Kids"'),
    bulletItem('"Swimming, Gym, Wind: Living Life in Alternative Hair"'),
    bulletItem('"Alopecia Awareness: What Everyone Should Know"'),
    emptyLine(),
    heading3("Real Talk & Becoming"),
    bulletItem('"Who We Were Before We Found Faith"'),
    bulletItem('"The Friendships That Didn\'t Survive Our Growth"'),
    bulletItem('"Social Media vs. Real Life"'),
    bulletItem('"Setting Boundaries as a People Pleaser"'),
    bulletItem('"Money Mindset: What God Says About Abundance"'),
    bulletItem('"When Your Family Doesn\'t Understand Your Faith"'),
    bulletItem('"Body Image After 30"'),
    bulletItem('"What We\'d Tell Our 18-Year-Old Selves"'),
    bulletItem('"Anxiety, Faith, and Getting Professional Help"'),
    emptyLine(),
    heading3("Guest Episode Ideas"),
    bulletItem("Guest: A pastor on welcoming newcomers to faith"),
    bulletItem("Guest: An oncologist on emotional aspects of chemo"),
    bulletItem("Guest: A wig influencer on building confidence"),
    bulletItem("Guest: A woman who started a hair loss support group"),
    bulletItem("Guest: A therapist on grief and identity after hair loss"),
    bulletItem("Guest: A worship leader on finding your voice"),
    bulletItem("Guest: A husband/partner on supporting hair loss"),
    bulletItem("Guest: A young woman (teen/early 20s) navigating hair loss"),
    emptyLine(),
    heading2("Event & Community Ideas"),
    bulletItem(
      '"Crown & Glory" Virtual Summit - Full-day online event with panels, workshops, and prayer'
    ),
    bulletItem(
      "Curlie Girlie Meetup Tour - Small-group meetups in key cities (Charlotte, Atlanta, Nashville, Dallas)"
    ),
    bulletItem(
      'Monthly "Prayer & Hair" Livestream - Community prayer meeting combined with hair Q&A'
    ),
    bulletItem(
      '"30 Days of Confidence" Challenge - Daily social media challenge with Scripture and affirmations'
    ),
    bulletItem(
      "Annual Curlie Girlie Retreat - Weekend faith and wellness retreat for the community"
    ),
    bulletItem(
      'Church Women\'s Conference Partnership - "Hair, Faith & Identity" breakout sessions'
    ),
    bulletItem(
      "Hair Expo Booth - Presence at major hair/beauty trade shows with live podcast recording"
    ),
    pageBreakPara(),
  ];
}

function episodeGuideSection() {
  const episodes = [
    {
      num: 1,
      title: "Faith, Hair & Finding Yourself",
      guest: "Sabrina & Chanelle",
      duration: "45 min",
      date: "Spring 2026",
      topics: ["Faith Journey", "Introduction", "Coming to Christ"],
      desc: "In our very first episode, we share our stories \u2014 coming to the Lord later in life, working at Jon Renau, and why faith and hair are more connected than you think. Welcome to the Curlie Girlie Collective.",
    },
    {
      num: 2,
      title: "Wigs, Toppers & God's Perfect Timing",
      guest: "Sabrina & Chanelle",
      duration: "38 min",
      date: "Spring 2026",
      topics: ["Alternative Hair", "Wigs & Toppers", "Trusting God"],
      desc: "We break down the world of alternative hair \u2014 what wigs and toppers really are, who they're for, and how God uses unexpected seasons to grow our faith.",
    },
    {
      num: 3,
      title: "Coming to Christ When the World Says You're Too Late",
      guest: "Sabrina & Chanelle",
      duration: "52 min",
      date: "Spring 2026",
      topics: ["Salvation Story", "Grace", "New Beginnings"],
      desc: "We get real about finding God as adults \u2014 the doubts, the shame, and the moment everything changed. Spoiler: He was waiting for us all along.",
    },
    {
      num: 4,
      title: "What the Bible Really Says About Beauty",
      guest: "Sabrina & Chanelle",
      duration: "41 min",
      date: "Summer 2026",
      topics: ["Scripture", "Biblical Beauty", "Identity in Christ"],
      desc: "We dig into Scripture to see what God actually says about beauty, hair, and identity \u2014 and why the world's definition of beautiful doesn't match His.",
    },
    {
      num: 5,
      title: "Hair Loss, Identity & Letting God Lead",
      guest: "Sabrina & Chanelle",
      duration: "36 min",
      date: "Summer 2026",
      topics: ["Hair Loss", "Identity", "Faith Through Trials"],
      desc: "When your hair changes, your identity can feel shaken. We talk about walking through hair loss with faith and why God's plan for you is bigger than your hair.",
    },
    {
      num: 6,
      title: "Leading Other Women to Jesus",
      guest: "Sabrina & Chanelle",
      duration: "44 min",
      date: "Summer 2026",
      topics: ["Evangelism", "Women's Ministry", "Discipleship"],
      desc: "How do you share your faith without being pushy? We talk about leading by example, planting seeds, and trusting God with the harvest.",
    },
  ];

  const elements = [
    heading1("Episode Guide - First 6 Episodes"),
    dividerLine(),
  ];

  episodes.forEach((ep) => {
    elements.push(
      heading2(`Episode ${ep.num}: ${ep.title}`)
    );
    elements.push(
      richParagraph([
        { text: "Hosts: ", bold: true, color: PINK },
        { text: ep.guest },
      ])
    );
    elements.push(
      richParagraph([
        { text: "Duration: ", bold: true, color: PINK },
        { text: ep.duration },
        { text: "  |  ", color: GRAY },
        { text: "Release: ", bold: true, color: PINK },
        { text: ep.date },
      ])
    );
    elements.push(
      richParagraph([
        { text: "Topics: ", bold: true, color: PINK },
        { text: ep.topics.join(", ") },
      ])
    );
    elements.push(bodyText(ep.desc));
    elements.push(emptyLine());
  });

  elements.push(pageBreakPara());
  return elements;
}

function successMetricsSection() {
  return [
    heading1("Success Metrics - Year 1"),
    dividerLine(),
    makeTable(
      ["Metric", "3 Months", "6 Months", "12 Months"],
      [
        ["Episodes Published", "12", "24", "48-52"],
        ["Downloads/Episode", "100+", "500+", "2,500+"],
        ["Email Subscribers", "200", "750", "2,000+"],
        ["Instagram Followers", "500", "2,000", "5,000+"],
        ["Monthly Revenue", "$0", "$200-500", "$2,600-10,400"],
        ["Community Members", "0", "50", "200+"],
        ["Guest Appearances (Other Shows)", "1-2", "4-6", "10+"],
      ],
      [2800, 2186, 2187, 2187]
    ),
    emptyLine(),
    heading2("The Ministry Model"),
    bodyText(
      "This is not just a business \u2014 it is a ministry that sustains itself."
    ),
    bulletItem("Free content (podcast, social) = outreach and evangelism"),
    bulletItem("Digital products = serve people who want to go deeper"),
    bulletItem("Community = discipleship and ongoing support"),
    bulletItem("Events = in-person connection and testimony"),
    bulletItem("Revenue = funds the ministry so you can keep going"),
    emptyLine(),
    richParagraph([
      { text: "Tithe your podcast income. ", bold: true, color: PINK },
      {
        text: "This reinforces the ministry identity and keeps you grounded.",
      },
    ]),
  ];
}

// ── BUILD DOCUMENT ──
const doc = new Document({
  creator: "AI Acrobatics",
  title: "Curlie Girlie Collective - First-Year Podcast Strategy Package",
  description:
    "Comprehensive podcast strategy for the Curlie Girlie Collective",
  styles: {
    default: {
      document: {
        run: {
          font: "Calibri",
          size: 22,
        },
      },
    },
  },
  numbering: {
    config: [
      {
        reference: "bullets",
        levels: [
          {
            level: 0,
            format: LevelFormat.BULLET,
            text: "\u2022",
            alignment: AlignmentType.LEFT,
            style: {
              paragraph: {
                indent: { left: 720, hanging: 360 },
              },
            },
          },
          {
            level: 1,
            format: LevelFormat.BULLET,
            text: "\u25E6",
            alignment: AlignmentType.LEFT,
            style: {
              paragraph: {
                indent: { left: 1440, hanging: 360 },
              },
            },
          },
        ],
      },
    ],
  },
  features: {
    updateFields: true,
  },
  sections: [
    {
      properties: {
        page: {
          size: {
            width: PAGE_WIDTH,
            height: PAGE_HEIGHT,
          },
          margin: {
            top: MARGIN,
            bottom: MARGIN,
            left: MARGIN,
            right: MARGIN,
          },
        },
        titlePage: true,
      },
      headers: {
        default: new Header({
          children: [
            new Paragraph({
              alignment: AlignmentType.RIGHT,
              children: [
                new TextRun({
                  text: "Curlie Girlie Collective  |  First-Year Strategy Package",
                  size: 16,
                  color: PINK_MED,
                  font: "Calibri",
                  italics: true,
                }),
              ],
            }),
          ],
        }),
        first: new Header({
          children: [],
        }),
      },
      footers: {
        default: new Footer({
          children: [
            new Paragraph({
              alignment: AlignmentType.CENTER,
              children: [
                new TextRun({
                  text: "Curlie Girlie Collective  \u2022  ",
                  size: 16,
                  color: PINK,
                  font: "Calibri",
                }),
                new TextRun({
                  text: "Page ",
                  size: 16,
                  color: GRAY,
                  font: "Calibri",
                }),
                new TextRun({
                  children: [PageNumber.CURRENT],
                  size: 16,
                  color: GRAY,
                  font: "Calibri",
                }),
              ],
            }),
          ],
        }),
        first: new Footer({
          children: [
            new Paragraph({
              alignment: AlignmentType.CENTER,
              children: [
                new TextRun({
                  text: "curliegirlie.com  \u2022  @curliegirliecollective",
                  size: 16,
                  color: PINK_MED,
                  font: "Calibri",
                }),
              ],
            }),
          ],
        }),
      },
      children: [
        ...coverPage(),
        ...tocSection(),
        ...aboutSection(),
        ...audienceSection(),
        ...avatarSection(),
        ...brandVoiceSection(),
        ...contentCalendarSection(),
        ...monetizationSection(),
        ...sponsorMediaKitSection(),
        ...merchSection(),
        ...introScriptsSection(),
        ...brainstormingSection(),
        ...episodeGuideSection(),
        ...successMetricsSection(),
      ],
    },
  ],
});

// ── GENERATE ──
const outputDir = "/opt/agency-workspace/curly-hair-collective/docs";
const outputPath = `${outputDir}/Curlie-Girlie-Collective-Strategy.docx`;

const buffer = await Packer.toBuffer(doc);
writeFileSync(outputPath, buffer);
console.log(`Generated: ${outputPath}`);
console.log(`Size: ${(buffer.length / 1024).toFixed(1)} KB`);
