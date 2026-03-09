import type { Metadata } from "next";
import { SponsorsPageClient } from "./SponsorsPageClient";

export const metadata: Metadata = {
  title: "Sponsor & Partner | Curlie Girlie Collective",
  description:
    "Partner with Curlie Girlie Collective to reach an engaged community of curly hair enthusiasts. Sponsorship packages, media kit, and partnership opportunities.",
  openGraph: {
    title: "Sponsor & Partner | Curlie Girlie Collective",
    description:
      "Partner with the #1 curly hair community. Reach engaged listeners who trust our recommendations.",
    type: "website",
    url: "https://curliegirlie.com/sponsors",
  },
  twitter: {
    card: "summary_large_image",
    title: "Sponsor & Partner | Curlie Girlie Collective",
    description:
      "Partner with the #1 curly hair community. Reach engaged listeners who trust our recommendations.",
  },
  alternates: {
    canonical: "https://curliegirlie.com/sponsors",
  },
  keywords: [
    "podcast sponsorship",
    "curly hair advertising",
    "natural hair brand partnership",
    "beauty podcast sponsor",
    "influencer collaboration",
  ],
};

export default function SponsorsPage() {
  return <SponsorsPageClient />;
}
