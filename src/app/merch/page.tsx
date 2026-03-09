import type { Metadata } from "next";
import { MerchPageClient } from "./MerchPageClient";

export const metadata: Metadata = {
  title: "Merch | Curly Hair Collective",
  description:
    "Shop the Curly Hair Collective merch collection. Curl Queen tees, satin bonnets, hair care essentials, and lifestyle goods that celebrate your natural texture.",
  openGraph: {
    title: "Merch | Curly Hair Collective",
    description:
      "Shop the official Curly Hair Collective merch. Apparel, accessories, and hair care for every curl type.",
    type: "website",
    url: "https://curlyhaircollective.com/merch",
  },
  alternates: {
    canonical: "https://curlyhaircollective.com/merch",
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
