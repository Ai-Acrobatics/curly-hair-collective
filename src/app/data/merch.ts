export interface MerchItem {
  id: number;
  slug: string;
  name: string;
  description: string;
  price: number;
  category: "apparel" | "accessories" | "faith-essentials" | "lifestyle";
  gradient: string;
  badge?: string;
  sizes?: string[];
}

export const merchItems: MerchItem[] = [
  {
    id: 1,
    slug: "gods-girl-tee",
    name: "God's Girl Tee",
    description:
      "100% organic cotton tee with 'God's Girl' in gold foil lettering. A daily reminder of whose you are.",
    price: 34.99,
    category: "apparel",
    gradient: "from-pink-400 via-pink-500 to-rose-500",
    badge: "Best Seller",
    sizes: ["XS", "S", "M", "L", "XL", "2XL"],
  },
  {
    id: 2,
    slug: "powered-by-prayer-hoodie",
    name: "Powered by Prayer Hoodie",
    description:
      "Oversized unisex hoodie with embroidered 'Powered by Prayer' across the chest. Cozy fleece interior, perfect for devotional mornings.",
    price: 64.99,
    category: "apparel",
    gradient: "from-pink-500 via-fuchsia-500 to-purple-500",
    sizes: ["S", "M", "L", "XL", "2XL"],
  },
  {
    id: 3,
    slug: "faith-over-fear-satin-bonnet",
    name: "Faith Over Fear Satin Bonnet",
    description:
      "Double-layered satin bonnet with 'Faith Over Fear' embroidered in gold. Protects your hair while you rest in His promises.",
    price: 24.99,
    category: "accessories",
    gradient: "from-rose-400 via-pink-400 to-pink-500",
    badge: "New",
  },
  {
    id: 4,
    slug: "curlie-girlie-cross-necklace",
    name: "Curlie Girlie Cross Necklace",
    description:
      "Dainty gold-plated cross necklace with a tiny curl charm. Faith meets femininity in one beautiful piece.",
    price: 28.99,
    category: "accessories",
    gradient: "from-fuchsia-400 via-pink-500 to-rose-500",
    badge: "Coming Soon",
  },
  {
    id: 5,
    slug: "scripture-affirmation-cards",
    name: "Scripture Affirmation Cards",
    description:
      "30 beautifully designed cards with Scripture and affirmations for identity, beauty, and faith. Perfect for wash day or quiet time.",
    price: 19.99,
    category: "faith-essentials",
    gradient: "from-pink-300 via-pink-400 to-rose-400",
  },
  {
    id: 6,
    slug: "fearfully-made-mug",
    name: "'Fearfully & Wonderfully Made' Mug",
    description:
      "Ceramic mug with Psalm 139:14 in our signature pink gradient. Start your morning with coffee and the Word.",
    price: 18.99,
    category: "lifestyle",
    gradient: "from-rose-500 via-pink-500 to-fuchsia-500",
  },
  {
    id: 7,
    slug: "pray-then-slay-cap",
    name: "Pray Then Slay Cap",
    description:
      "Adjustable dad cap with 'Pray Then Slay' embroidered in gold. For the days when you need both faith and fashion.",
    price: 24.99,
    category: "accessories",
    gradient: "from-pink-400 via-rose-500 to-red-400",
  },
  {
    id: 8,
    slug: "collective-tote",
    name: "Curlie Girlie Collective Tote",
    description:
      "Heavyweight canvas tote with our logo and 'Faith. Hair. Identity. Becoming.' printed on the side. Carry your Bible and your bonnets.",
    price: 22.99,
    category: "lifestyle",
    gradient: "from-pink-500 via-pink-600 to-rose-600",
  },
];

export const merchCategories = [
  { key: "all", label: "All Products" },
  { key: "apparel", label: "Apparel" },
  { key: "accessories", label: "Accessories" },
  { key: "faith-essentials", label: "Faith Essentials" },
  { key: "lifestyle", label: "Lifestyle" },
] as const;
