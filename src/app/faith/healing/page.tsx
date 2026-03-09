import type { Metadata } from "next";
import { HealingPageClient } from "./HealingPageClient";

export const metadata: Metadata = {
  title: "Healing & Restoration | Curlie Girlie Collective",
  description:
    "God uses unexpected seasons — hair loss, heartbreak, identity crises — as gateways to deeper healing. You don't have to carry it alone.",
  openGraph: {
    title: "Healing & Restoration | Curlie Girlie Collective",
    description: "Broken things become beautiful in His hands.",
    type: "website",
    url: "https://curliegirliecollective.com/faith/healing",
  },
  twitter: {
    card: "summary_large_image",
    title: "Healing & Restoration | Curlie Girlie Collective",
    description: "Broken things become beautiful in His hands.",
  },
  alternates: {
    canonical: "https://curliegirliecollective.com/faith/healing",
  },
};

export default function HealingPage() {
  return <HealingPageClient />;
}
