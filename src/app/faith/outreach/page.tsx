import type { Metadata } from "next";
import { OutreachPageClient } from "./OutreachPageClient";

export const metadata: Metadata = {
  title: "Reaching the Lost | Curlie Girlie Collective",
  description: "Every conversation is an opportunity. We exist to lead women to Jesus — not through judgment, but through love that changes everything.",
  openGraph: {
    title: "Reaching the Lost | Curlie Girlie Collective",
    description: "Love is the loudest sermon you'll ever preach.",
    type: "website",
    url: "https://curliegirlie.com/faith/outreach",
  },
  twitter: { card: "summary_large_image", title: "Reaching the Lost | Curlie Girlie Collective", description: "Love is the loudest sermon you'll ever preach." },
  alternates: { canonical: "https://curliegirlie.com/faith/outreach" },
};

export default function OutreachPage() {
  return <OutreachPageClient />;
}
