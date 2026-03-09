import { HeroSection } from "./sections/Hero";
import { EpisodesSection } from "./sections/Episodes";
import { HostsSection } from "./sections/Hosts";
import { PillarsSection } from "./sections/Pillars";
import { TestimonialsSection } from "./sections/Testimonials";
import { CommunitySection } from "./sections/Community";
import { FooterSection } from "./sections/Footer";
import { MarqueeStrip } from "./sections/MarqueeStrip";
import { ClientShell } from "./components/ClientShell";

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
