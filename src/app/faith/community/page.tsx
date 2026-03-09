import type { Metadata } from "next";
import { CommunityPillarClient } from "./CommunityPillarClient";

export const metadata: Metadata = {
  title: "Community & Sisterhood | Curlie Girlie Collective",
  description: "Iron sharpens iron. Find your people — women who pray together, grow together, and refuse to let you walk alone.",
  openGraph: {
    title: "Community & Sisterhood | Curlie Girlie Collective",
    description: "You were never meant to do this alone.",
    type: "website",
    url: "https://curliegirliecollective.com/faith/community",
  },
  twitter: { card: "summary_large_image", title: "Community & Sisterhood | Curlie Girlie Collective", description: "You were never meant to do this alone." },
  alternates: { canonical: "https://curliegirliecollective.com/faith/community" },
};

export default function CommunityPillarPage() {
  return <CommunityPillarClient />;
}
