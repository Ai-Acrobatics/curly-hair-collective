import type { Metadata } from "next";
import { EpisodesPageClient } from "./EpisodesPageClient";

export const metadata: Metadata = {
  title: "Episodes | Curly Hair Collective",
  description:
    "Browse all episodes of the Curly Hair Collective podcast. Real conversations with curl experts, stylists, advocates, and queens about natural hair culture, care, and confidence.",
  openGraph: {
    title: "Episodes | Curly Hair Collective",
    description:
      "Browse all episodes of the Curly Hair Collective podcast. Real conversations about natural hair culture, care, and confidence.",
    type: "website",
    url: "https://curlyhaircollective.com/episodes",
  },
  alternates: {
    canonical: "https://curlyhaircollective.com/episodes",
  },
};

export default function EpisodesPage() {
  return <EpisodesPageClient />;
}
