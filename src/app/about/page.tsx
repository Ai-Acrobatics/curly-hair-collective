import type { Metadata } from "next";
import { AboutPageClient } from "./AboutPageClient";

export const metadata: Metadata = {
  title: "About | Curlie Girlie Collective",
  description:
    "Meet the host and learn the story behind Curlie Girlie Collective — the podcast celebrating curly hair culture through conversations, community, and confidence.",
  openGraph: {
    title: "About | Curlie Girlie Collective",
    description:
      "Meet the host and learn the story behind Curlie Girlie Collective.",
    type: "website",
    url: "https://curliegirlie.com/about",
  },
  twitter: {
    card: "summary_large_image",
    title: "About | Curlie Girlie Collective",
    description:
      "Meet the host and learn the story behind Curlie Girlie Collective.",
  },
  alternates: {
    canonical: "https://curliegirlie.com/about",
  },
};

export default function AboutPage() {
  return <AboutPageClient />;
}
