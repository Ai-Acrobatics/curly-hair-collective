import type { Metadata } from "next";
import { PartnersPageClient } from "./PartnersPageClient";

export const metadata: Metadata = {
  title: "Let's Talk Partnership",
  description:
    "Partner with Curlie Girlie Collective — a faith-centered podcast reaching women who care about hair, identity, and walking with Jesus. Sponsorships, collaborations, and brand partnerships.",
  openGraph: {
    title: "Let's Talk Partnership | Curlie Girlie Collective",
    description:
      "Partner with us to reach a faith-driven community of women.",
    type: "website",
    url: "https://curliegirliecollective.com/partners",
  },
  twitter: {
    card: "summary_large_image",
    title: "Let's Talk Partnership | Curlie Girlie Collective",
    description:
      "Partner with us to reach a faith-driven community of women.",
  },
  alternates: {
    canonical: "https://curliegirliecollective.com/partners",
  },
};

export default function PartnersPage() {
  return <PartnersPageClient />;
}
