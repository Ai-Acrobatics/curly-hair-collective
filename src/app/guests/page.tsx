import type { Metadata } from "next";
import { GuestsPageClient } from "./GuestsPageClient";

export const metadata: Metadata = {
  title: "Our Guests",
  description:
    "Meet the incredible experts, advocates, and curl queens who have graced the Curlie Girlie Collective podcast. From trichologists to CROWN Act creators.",
  openGraph: {
    title: "Our Guests | Curlie Girlie Collective",
    description:
      "Meet the incredible experts and advocates who have been on the show.",
    type: "website",
    url: "https://curliegirlie.com/guests",
  },
  twitter: {
    card: "summary_large_image",
    title: "Our Guests | Curlie Girlie Collective",
    description:
      "Meet the incredible experts and advocates who have been on the show.",
  },
  alternates: {
    canonical: "https://curliegirlie.com/guests",
  },
};

export default function GuestsPage() {
  return <GuestsPageClient />;
}
