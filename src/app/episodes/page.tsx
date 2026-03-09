import type { Metadata } from "next";
import { EpisodesPageClient } from "./EpisodesPageClient";

export const metadata: Metadata = {
  title: "Episodes | Curlie Girlie Collective",
  description:
    "Browse all episodes of the Curlie Girlie Collective podcast. Real conversations with curl experts, stylists, advocates, and queens about natural hair culture, care, and confidence.",
  openGraph: {
    title: "Episodes | Curlie Girlie Collective",
    description:
      "Browse all episodes of the Curlie Girlie Collective podcast. Real conversations about natural hair culture, care, and confidence.",
    type: "website",
    url: "https://curliegirlie.com/episodes",
  },
  twitter: {
    card: "summary_large_image",
    title: "Episodes | Curlie Girlie Collective",
    description:
      "Browse all episodes of the Curlie Girlie Collective podcast. Real conversations about natural hair culture, care, and confidence.",
  },
  alternates: {
    canonical: "https://curliegirlie.com/episodes",
  },
};

export default function EpisodesPage() {
  return <EpisodesPageClient />;
}
