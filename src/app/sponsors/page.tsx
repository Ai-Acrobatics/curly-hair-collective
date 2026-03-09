import type { Metadata } from "next";
import { SponsorsPageClient } from "./SponsorsPageClient";

export const metadata: Metadata = {
  title: "Sponsor & Partner | Curly Hair Collective",
  description:
    "Partner with Curly Hair Collective to reach an engaged community of curly hair enthusiasts. Sponsorship packages, media kit, and partnership opportunities.",
  openGraph: {
    title: "Sponsor & Partner | Curly Hair Collective",
    description:
      "Partner with the #1 curly hair community. Reach engaged listeners who trust our recommendations.",
    type: "website",
    url: "https://curlyhaircollective.com/sponsors",
  },
  alternates: {
    canonical: "https://curlyhaircollective.com/sponsors",
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
