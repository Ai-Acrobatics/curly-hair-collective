"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { ClientShell } from "../../components/ClientShell";
import { PageHeader } from "../../components/PageHeader";
import { FooterSection } from "../../sections/Footer";
import { FadeInUp } from "../../components/FramerAnimations";
import { PlayIcon, SparkleIcon } from "../../components/Icons";
import type { Episode } from "../../data/episodes";

export function EpisodeDetailClient({ episode }: { episode: Episode }) {
  return (
    <ClientShell>
      <PageHeader
        badge={`Episode ${String(episode.id).padStart(2, "0")}`}
        title={episode.title}
        subtitle={`with ${episode.guest} · ${episode.duration}`}
      />

      <section className="py-20 bg-pink-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Play Banner */}
          <FadeInUp>
            <div
              className={`bg-gradient-to-br ${episode.gradient} rounded-3xl p-8 md:p-12 text-center relative overflow-hidden mb-12`}
            >
              <div className="absolute inset-0 opacity-10">
                <div
                  className="absolute inset-0"
                  style={{
                    backgroundImage: `radial-gradient(circle at 30% 70%, white 1px, transparent 1px),
                    radial-gradient(circle at 70% 30%, white 1px, transparent 1px)`,
                    backgroundSize: "50px 50px, 70px 70px",
                  }}
                />
              </div>
              <div className="relative z-10">
                <motion.div
                  className="w-20 h-20 bg-white rounded-full flex items-center justify-center mx-auto mb-6 shadow-2xl cursor-pointer"
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                >
                  <PlayIcon className="w-9 h-9 text-pink-500 ml-1" />
                </motion.div>
                <p className="text-white/80 text-sm font-medium">
                  Episode dropping soon — stay tuned!
                </p>
              </div>
            </div>
          </FadeInUp>

          {/* Episode Description */}
          <FadeInUp delay={0.1}>
            <div className="bg-white rounded-2xl p-8 md:p-10 shadow-lg shadow-pink-200/30 mb-8">
              <h2 className="text-2xl font-bold text-pink-900 mb-4">
                About This Episode
              </h2>
              <p className="text-pink-700/70 leading-relaxed text-lg">
                {episode.longDescription}
              </p>

              <div className="mt-6 flex flex-wrap gap-2">
                {episode.topics.map((topic) => (
                  <span
                    key={topic}
                    className="bg-pink-100 text-pink-600 px-4 py-2 rounded-full text-sm font-medium"
                  >
                    {topic}
                  </span>
                ))}
              </div>
            </div>
          </FadeInUp>

          {/* Guest Bio */}
          <FadeInUp delay={0.2}>
            <div className="bg-white rounded-2xl p-8 md:p-10 shadow-lg shadow-pink-200/30 mb-8">
              <div className="flex items-center gap-3 mb-4">
                <SparkleIcon className="w-5 h-5 text-gold" />
                <h2 className="text-2xl font-bold text-pink-900">
                  About {episode.guest}
                </h2>
              </div>
              <p className="text-pink-700/70 leading-relaxed">
                {episode.guestBio}
              </p>
            </div>
          </FadeInUp>

          {/* Back link */}
          <FadeInUp delay={0.3}>
            <div className="text-center">
              <Link
                href="/episodes"
                className="inline-flex items-center gap-2 text-pink-500 hover:text-pink-700 font-semibold transition-colors"
              >
                <span>&larr;</span> All Episodes
              </Link>
            </div>
          </FadeInUp>
        </div>
      </section>

      <FooterSection />
    </ClientShell>
  );
}
