import type { Metadata } from "next";
import { TermsPageClient } from "./TermsPageClient";

export const metadata: Metadata = {
  title: "Terms of Service",
  description:
    "Curlie Girlie Collective terms of service. Rules and guidelines for using our website, podcast, and community platform.",
  robots: { index: true, follow: true },
  alternates: {
    canonical: "https://curliegirlie.com/terms",
  },
};

export default function TermsPage() {
  return <TermsPageClient />;
}
