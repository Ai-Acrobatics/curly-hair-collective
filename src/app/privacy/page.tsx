import type { Metadata } from "next";
import { PrivacyPageClient } from "./PrivacyPageClient";

export const metadata: Metadata = {
  title: "Privacy Policy",
  description:
    "Curly Hair Collective privacy policy. How we collect, use, and protect your personal information.",
  robots: { index: true, follow: true },
  alternates: {
    canonical: "https://curlyhaircollective.com/privacy",
  },
};

export default function PrivacyPage() {
  return <PrivacyPageClient />;
}
