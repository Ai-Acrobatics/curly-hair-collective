import type { Metadata } from "next";
import { ApplyPageClient } from "./ApplyPageClient";

export const metadata: Metadata = {
  title: "Apply to Be a Guest",
  description:
    "Share your story on the Curlie Girlie Collective podcast. We're looking for experts, advocates, and passionate voices in the curly hair community.",
  openGraph: {
    title: "Apply to Be a Guest | Curlie Girlie Collective",
    description:
      "Share your story on the Curlie Girlie Collective podcast.",
    type: "website",
    url: "https://curliegirliecollective.com/guests/apply",
  },
  twitter: {
    card: "summary_large_image",
    title: "Apply to Be a Guest | Curlie Girlie Collective",
    description:
      "Share your story on the Curlie Girlie Collective podcast.",
  },
  alternates: {
    canonical: "https://curliegirliecollective.com/guests/apply",
  },
};

export default function ApplyPage() {
  return <ApplyPageClient />;
}
