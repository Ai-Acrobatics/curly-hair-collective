import type { Metadata } from "next";
import { PrivacyPageClient } from "./PrivacyPageClient";

export const metadata: Metadata = {
  title: "Privacy Policy",
  description:
    "Curlie Girlie Collective privacy policy. How we collect, use, and protect your personal information.",
  robots: { index: true, follow: true },
  alternates: {
    canonical: "https://curliegirliecollective.com/privacy",
  },
};

export default function PrivacyPage() {
  return <PrivacyPageClient />;
}
