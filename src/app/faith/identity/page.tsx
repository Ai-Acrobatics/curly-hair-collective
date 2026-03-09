import type { Metadata } from "next";
import { IdentityPageClient } from "./IdentityPageClient";

export const metadata: Metadata = {
  title: "Identity in Christ | Curlie Girlie Collective",
  description:
    "Before you're a curl queen, you're a daughter of the King. Discover what it means to ground your identity in who God says you are — not in beauty standards, not in the world's approval.",
  openGraph: {
    title: "Identity in Christ | Curlie Girlie Collective",
    description:
      "Your worth was settled at the cross. Discover your true identity.",
    type: "website",
    url: "https://curliegirliecollective.com/faith/identity",
  },
  twitter: {
    card: "summary_large_image",
    title: "Identity in Christ | Curlie Girlie Collective",
    description: "Your worth was settled at the cross.",
  },
  alternates: {
    canonical: "https://curliegirliecollective.com/faith/identity",
  },
};

export default function IdentityPage() {
  return <IdentityPageClient />;
}
