"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { ClientShell } from "../components/ClientShell";
import { PageHeader } from "../components/PageHeader";
import { FooterSection } from "../sections/Footer";
import {
  StaggerContainer,
  StaggerItem,
  TiltCard,
} from "../components/FramerAnimations";
import { PlayIcon } from "../components/Icons";
import { episodes } from "../data/episodes";

export function EpisodesPageClient() {
  return (
    <ClientShell>
      <PageHeader
        badge="All Episodes"
        title="Listen &"
        titleAccent="Learn"
        subtitle="Real conversations with real curly queens. Deep dives into hair care, culture, confidence, and community."
      />

      <section className="py-20 bg-pink-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <StaggerContainer
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
            staggerDelay={0.1}
          >
            {episodes.map((episode) => (
              <StaggerItem key={episode.id}>
                <TiltCard className="group h-full">
                  <Link href={`/episodes/${episode.slug}`} className="block h-full">
                    <div className="bg-white rounded-2xl overflow-hidden shadow-lg shadow-pink-200/40 magnetic-card gradient-border h-full flex flex-col">
                      <div
                        className={`h-48 bg-gradient-to-br ${episode.gradient} relative overflow-hidden`}
                      >
                        <div className="absolute inset-0 opacity-10">
                          <div
                            className="absolute inset-0"
                            style={{
                              backgroundImage: `radial-gradient(circle at 20% 80%, white 1px, transparent 1px),
                              radial-gradient(circle at 80% 20%, white 1px, transparent 1px)`,
                              backgroundSize: "40px 40px, 60px 60px",
                            }}
                          />
                        </div>
                        <div className="absolute inset-0 flex items-center justify-center">
                          <span className="text-7xl font-black text-white/15 select-none">
                            {String(episode.id).padStart(2, "0")}
                          </span>
                        </div>
                        <div className="absolute bottom-3 left-3 flex items-center gap-2">
                          <span className="glass text-white text-xs font-medium px-3 py-1 rounded-full">
                            {episode.duration}
                          </span>
                          <span className="bg-gold/90 text-pink-900 text-xs font-bold px-3 py-1 rounded-full">
                            {episode.date}
                          </span>
                        </div>
                        <motion.div
                          className="absolute inset-0 flex items-center justify-center"
                          initial={{ opacity: 0 }}
                          whileHover={{ opacity: 1 }}
                        >
                          <div className="w-14 h-14 bg-white rounded-full flex items-center justify-center shadow-2xl">
                            <PlayIcon className="w-6 h-6 text-pink-500 ml-1" />
                          </div>
                        </motion.div>
                      </div>
                      <div className="p-6 flex-1 flex flex-col">
                        <p className="text-pink-400 text-sm font-semibold mb-1">
                          with {episode.guest}
                        </p>
                        <h3 className="text-lg font-bold text-pink-900 mb-2">
                          {episode.title}
                        </h3>
                        <p className="text-pink-700/60 text-sm leading-relaxed flex-1">
                          {episode.description}
                        </p>
                        <div className="mt-4 flex flex-wrap gap-2">
                          {episode.topics.slice(0, 2).map((topic) => (
                            <span
                              key={topic}
                              className="bg-pink-100 text-pink-600 px-3 py-1 rounded-full text-xs font-medium"
                            >
                              {topic}
                            </span>
                          ))}
                        </div>
                      </div>
                    </div>
                  </Link>
                </TiltCard>
              </StaggerItem>
            ))}
          </StaggerContainer>
        </div>
      </section>

      <FooterSection />
    </ClientShell>
  );
}
