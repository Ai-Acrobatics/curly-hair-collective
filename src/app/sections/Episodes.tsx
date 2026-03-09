"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import {
  FadeInUp,
  StaggerContainer,
  StaggerItem,
  TiltCard,
} from "../components/FramerAnimations";
import { PlayIcon } from "../components/Icons";
import { episodes } from "../data/episodes";

export function EpisodesSection() {
  return (
    <section id="episodes" className="py-24 bg-pink-50 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <FadeInUp className="text-center mb-16">
          <span className="text-pink-400 font-semibold uppercase tracking-[0.25em] text-sm">
            Listen & Learn
          </span>
          <h2
            className="text-4xl md:text-6xl font-black text-pink-900 mt-3"
            data-gsap="heading"
          >
            Latest Episodes
          </h2>
          <p className="text-pink-600/80 mt-5 max-w-xl mx-auto text-lg">
            Real conversations with real curly queens. New episodes dropping
            soon.
          </p>
        </FadeInUp>

        <StaggerContainer
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          staggerDelay={0.12}
        >
          {episodes.slice(0, 6).map((episode) => (
            <StaggerItem key={episode.id}>
              <TiltCard className="group">
                <Link href={`/episodes/${episode.slug}`} className="block">
                  <div className="bg-white rounded-2xl overflow-hidden shadow-lg shadow-pink-200/40 magnetic-card gradient-border">
                    <div
                      className={`h-52 bg-gradient-to-br ${episode.gradient} relative overflow-hidden`}
                    >
                      {episode.coverImage && (
                        <Image
                          src={episode.coverImage}
                          alt={episode.title}
                          fill
                          className="object-cover"
                          sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                        />
                      )}
                      <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent" />

                      <div className="absolute bottom-3 left-3 flex items-center gap-2">
                        <span className="glass text-white text-xs font-medium px-3 py-1 rounded-full">
                          {episode.duration}
                        </span>
                        <span className="bg-gold/90 text-pink-900 text-xs font-bold px-3 py-1 rounded-full glow-gold">
                          {episode.date}
                        </span>
                      </div>

                      <motion.div
                        className="absolute inset-0 flex items-center justify-center"
                        initial={{ opacity: 0 }}
                        whileHover={{ opacity: 1 }}
                      >
                        <motion.div
                          className="w-16 h-16 bg-white rounded-full flex items-center justify-center shadow-2xl cursor-pointer"
                          whileHover={{ scale: 1.15 }}
                          whileTap={{ scale: 0.9 }}
                        >
                          <PlayIcon className="w-7 h-7 text-pink-500 ml-1" />
                        </motion.div>
                      </motion.div>
                    </div>

                    <div className="p-6">
                      <p className="text-pink-400 text-sm font-semibold mb-1">
                        with {episode.guest}
                      </p>
                      <h3 className="text-xl font-bold text-pink-900 mb-2 group-hover:text-gradient-pink transition-colors">
                        {episode.title}
                      </h3>
                      <p className="text-pink-700/60 text-sm leading-relaxed">
                        {episode.description}
                      </p>
                    </div>
                  </div>
                </Link>
              </TiltCard>
            </StaggerItem>
          ))}
        </StaggerContainer>

        <FadeInUp>
          <div className="text-center mt-12">
            <Link
              href="/episodes"
              className="inline-block gradient-pink text-white px-8 py-3 rounded-full font-bold shadow-lg shadow-pink-300/40 shimmer"
            >
              View All Episodes
            </Link>
          </div>
        </FadeInUp>
      </div>
    </section>
  );
}
