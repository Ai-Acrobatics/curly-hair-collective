import { HeroSection } from "./sections/Hero";
import { EpisodesSection } from "./sections/Episodes";
import { AboutSection } from "./sections/About";
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
        <EpisodesSection />
        <AboutSection />
        <CommunitySection />
        <FooterSection />
      </div>
    </ClientShell>
  );
}
