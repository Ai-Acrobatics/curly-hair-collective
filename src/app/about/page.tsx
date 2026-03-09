import type { Metadata } from "next";
import { AboutPageClient } from "./AboutPageClient";

export const metadata: Metadata = {
  title: "About | Curly Hair Collective",
  description:
    "Meet the host and learn the story behind Curly Hair Collective — the podcast celebrating curly hair culture through conversations, community, and confidence.",
  openGraph: {
    title: "About | Curly Hair Collective",
    description:
      "Meet the host and learn the story behind Curly Hair Collective.",
    type: "website",
    url: "https://curlyhaircollective.com/about",
  },
  alternates: {
    canonical: "https://curlyhaircollective.com/about",
  },
};

export default function AboutPage() {
  return <AboutPageClient />;
}
