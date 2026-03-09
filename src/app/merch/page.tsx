import type { Metadata } from "next";
import { MerchPageClient } from "./MerchPageClient";

export const metadata: Metadata = {
  title: "Merch | Curlie Girlie Collective",
  description:
    "Shop the Curlie Girlie Collective merch collection. Curl Queen tees, satin bonnets, hair care essentials, and lifestyle goods that celebrate your natural texture.",
  openGraph: {
    title: "Merch | Curlie Girlie Collective",
    description:
      "Shop the official Curlie Girlie Collective merch. Apparel, accessories, and hair care for every curl type.",
    type: "website",
    url: "https://curliegirlie.com/merch",
  },
  twitter: {
    card: "summary_large_image",
    title: "Merch | Curlie Girlie Collective",
    description:
      "Shop the official Curlie Girlie Collective merch. Apparel, accessories, and hair care for every curl type.",
  },
  alternates: {
    canonical: "https://curliegirlie.com/merch",
  },
  keywords: [
    "curly hair merch",
    "natural hair apparel",
    "curl queen shirt",
    "satin bonnet",
    "curly hair products",
    "natural hair accessories",
  ],
};

export default function MerchPage() {
  return <MerchPageClient />;
}
