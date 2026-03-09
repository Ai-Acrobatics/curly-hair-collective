import type { Metadata } from "next";
import { HeroSection } from "./sections/Hero";
import { EpisodesSection } from "./sections/Episodes";
import { HostsSection } from "./sections/Hosts";
import { PillarsSection } from "./sections/Pillars";
import { TestimonialsSection } from "./sections/Testimonials";
import { CommunitySection } from "./sections/Community";
import { FooterSection } from "./sections/Footer";
import { MarqueeStrip } from "./sections/MarqueeStrip";
import { ClientShell } from "./components/ClientShell";

export const metadata: Metadata = {
  title: "Curlie Girlie Collective | Faith, Hair & Community Podcast",
  description:
    "Celebrating curly hair culture through faith-centered conversations, community, and confidence. A podcast for every curl, coil, and wave — hosted by Sabrina Anderson & Chanelle.",
  openGraph: {
    title: "Curlie Girlie Collective | Faith, Hair & Community Podcast",
    description:
      "Celebrating curly hair culture through faith-centered conversations, community, and confidence.",
    type: "website",
    url: "https://curliegirlie.com",
    images: [
      {
        url: "https://curliegirliecollective.com/images/og-share.png",
        width: 1200,
        height: 630,
        alt: "Curlie Girlie Collective — Faith, Hair & Community Podcast",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Curlie Girlie Collective | Faith, Hair & Community Podcast",
    description:
      "Celebrating curly hair culture through faith-centered conversations, community, and confidence.",
    images: ["https://curliegirliecollective.com/images/og-share.png"],
  },
  alternates: {
    canonical: "https://curliegirlie.com",
  },
};

export default function Home() {
  return (
    <ClientShell>
      <div className="min-h-screen bg-pink-50 relative">
        <HeroSection />
        <MarqueeStrip />
        <PillarsSection />
        <EpisodesSection />
        <HostsSection />
        <TestimonialsSection />
        <CommunitySection />
        <FooterSection />
      </div>
    </ClientShell>
  );
}
