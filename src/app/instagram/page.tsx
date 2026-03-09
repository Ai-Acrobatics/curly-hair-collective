import type { Metadata } from "next";
import { InstagramPageClient } from "./InstagramPageClient";

export const metadata: Metadata = {
  title: "Instagram Templates | Marketing Kit",
  description:
    "Sample Instagram posts and templates for promoting the Curlie Girlie Collective podcast. Episode announcements, scripture quotes, hair tips, and community engagement content.",
  openGraph: {
    title: "Instagram Marketing Kit | Curlie Girlie Collective",
    description:
      "Ready-to-use Instagram templates for podcast marketing, episode announcements, and community engagement.",
    type: "website",
    url: "https://curliegirliecollective.com/instagram",
  },
  alternates: {
    canonical: "https://curliegirliecollective.com/instagram",
  },
};

export default function InstagramPage() {
  return <InstagramPageClient />;
}
