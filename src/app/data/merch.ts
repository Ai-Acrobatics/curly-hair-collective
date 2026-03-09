export interface MerchItem {
  id: number;
  slug: string;
  name: string;
  description: string;
  price: number;
  category: "apparel" | "accessories" | "hair-care" | "lifestyle";
  gradient: string;
  badge?: string;
  sizes?: string[];
}

export const merchItems: MerchItem[] = [
  {
    id: 1,
    slug: "curl-queen-tee",
    name: "Curl Queen Tee",
    description:
      "100% organic cotton tee with our signature 'Curl Queen' design in gold foil on Barbie pink.",
    price: 34.99,
    category: "apparel",
    gradient: "from-pink-400 via-pink-500 to-rose-500",
    badge: "Best Seller",
    sizes: ["XS", "S", "M", "L", "XL", "2XL"],
  },
  {
    id: 2,
    slug: "collective-hoodie",
    name: "Collective Hoodie",
    description:
      "Oversized unisex hoodie with embroidered curl logo. Cozy fleece interior, perfect for wash day.",
    price: 64.99,
    category: "apparel",
    gradient: "from-pink-500 via-fuchsia-500 to-purple-500",
    sizes: ["S", "M", "L", "XL", "2XL"],
  },
  {
    id: 3,
    slug: "satin-bonnet-pink",
    name: "Satin Sleep Bonnet — Pink",
    description:
      "Double-layered satin bonnet to protect your curls overnight. Adjustable band, breathable fabric.",
    price: 24.99,
    category: "accessories",
    gradient: "from-rose-400 via-pink-400 to-pink-500",
    badge: "New",
  },
  {
    id: 4,
    slug: "curl-defining-cream",
    name: "Curl Defining Cream",
    description:
      "Lightweight curl cream with shea butter and argan oil. Defines curls without the crunch.",
    price: 28.99,
    category: "hair-care",
    gradient: "from-fuchsia-400 via-pink-500 to-rose-500",
    badge: "Coming Soon",
  },
  {
    id: 5,
    slug: "microfiber-towel",
    name: "Microfiber Hair Towel",
    description:
      "Ultra-soft microfiber towel that reduces frizz and breakage. Curly girl approved.",
    price: 19.99,
    category: "accessories",
    gradient: "from-pink-300 via-pink-400 to-rose-400",
  },
  {
    id: 6,
    slug: "affirmation-mug",
    name: "'Good Hair Day' Mug",
    description:
      "Ceramic mug with our signature pink gradient and 'Every Day is a Good Hair Day' message.",
    price: 18.99,
    category: "lifestyle",
    gradient: "from-rose-500 via-pink-500 to-fuchsia-500",
  },
  {
    id: 7,
    slug: "wide-tooth-comb",
    name: "Wide Tooth Detangling Comb",
    description:
      "Seamless wide-tooth comb designed for textured hair. Gentle detangling without breakage.",
    price: 14.99,
    category: "accessories",
    gradient: "from-pink-400 via-rose-500 to-red-400",
  },
  {
    id: 8,
    slug: "tote-bag",
    name: "Curly Hair Collective Tote",
    description:
      "Heavyweight canvas tote with screen-printed logo. Perfect for carrying your curl products.",
    price: 22.99,
    category: "lifestyle",
    gradient: "from-pink-500 via-pink-600 to-rose-600",
  },
];

export const merchCategories = [
  { key: "all", label: "All Products" },
  { key: "apparel", label: "Apparel" },
  { key: "accessories", label: "Accessories" },
  { key: "hair-care", label: "Hair Care" },
  { key: "lifestyle", label: "Lifestyle" },
] as const;
