import type { Metadata } from "next";
import { FaithPageClient } from "./FaithPageClient";

export const metadata: Metadata = {
  title: "Faith | Leading Women to Jesus",
  description:
    "At Curlie Girlie Collective, we believe your hair journey is part of a bigger story. Discover how faith, identity, and beauty come together through Christ.",
  openGraph: {
    title: "Faith | Curlie Girlie Collective",
    description:
      "More than hair — leading women to Jesus through conversations about identity, purpose, and becoming who God made you to be.",
    type: "website",
    url: "https://curliegirliecollective.com/faith",
  },
  twitter: {
    card: "summary_large_image",
    title: "Faith | Curlie Girlie Collective",
    description:
      "More than hair — leading women to Jesus through conversations about identity, purpose, and becoming.",
  },
  alternates: {
    canonical: "https://curliegirliecollective.com/faith",
  },
};

export default function FaithPage() {
  return <FaithPageClient />;
}
