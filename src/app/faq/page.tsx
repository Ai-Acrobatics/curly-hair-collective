import type { Metadata } from "next";
import { FAQPageClient } from "./FAQPageClient";

const faqJsonLd = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "What is Curly Hair Collective?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Curly Hair Collective is a podcast and community platform celebrating curly hair culture through conversations with experts, advocates, and everyday queens about natural hair care, confidence, and culture.",
      },
    },
    {
      "@type": "Question",
      name: "When do new episodes come out?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "New episodes drop weekly. Subscribe to our newsletter or follow us on social media to get notified when new episodes are released.",
      },
    },
    {
      "@type": "Question",
      name: "Where can I listen to the podcast?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Curly Hair Collective will be available on Spotify, Apple Podcasts, YouTube, and Amazon Music. Follow us on your preferred platform to get notified at launch.",
      },
    },
    {
      "@type": "Question",
      name: "How can I be a guest on the podcast?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "We love hearing from the community! Send your pitch to guests@curlyhaircollective.com with your name, background, and what you'd like to discuss on the show.",
      },
    },
  ],
};

export const metadata: Metadata = {
  title: "FAQ",
  description:
    "Frequently asked questions about Curly Hair Collective — the podcast, community, merch, sponsorships, and more.",
  openGraph: {
    title: "FAQ | Curly Hair Collective",
    description: "Answers to common questions about Curly Hair Collective.",
    type: "website",
    url: "https://curlyhaircollective.com/faq",
  },
  alternates: {
    canonical: "https://curlyhaircollective.com/faq",
  },
};

export default function FAQPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }}
      />
      <FAQPageClient />
    </>
  );
}
