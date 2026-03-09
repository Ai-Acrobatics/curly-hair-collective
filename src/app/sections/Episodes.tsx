"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { FadeInUp } from "../components/FramerAnimations";
import { PlayIcon, SparkleIcon } from "../components/Icons";
import { episodes } from "../data/episodes";

export function EpisodesSection() {
  return (
    <section id="episodes" className="py-24 md:py-32 bg-pink-50 relative">
      <div className="max-w-[1280px] mx-auto px-6 md:px-12">
        {/* Section Header — template style */}
        <div className="flex items-center justify-between mb-12 md:mb-16">
          <FadeInUp>
            <span className="inline-flex items-center gap-2 bg-white text-pink-500 font-semibold uppercase tracking-[0.2em] text-xs px-5 py-2 rounded-full border border-pink-100 font-body mb-4">
              <SparkleIcon className="w-3 h-3 text-gold" />
              Listen & Learn
            </span>
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-black text-pink-900 tracking-tight mt-4">
              Latest Episodes
            </h2>
            <p className="text-pink-600/60 mt-4 max-w-xl text-lg font-body">
              Real conversations about faith, hair, and becoming who God made
              you to be. New episodes dropping soon.
            </p>
          </FadeInUp>
          <Link
            href="/episodes"
            className="hidden md:inline-flex items-center gap-2 text-sm font-semibold text-pink-500 hover:text-pink-700 transition-colors"
          >
            View all episodes
            <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 17l9.2-9.2M17 17V7H7" />
            </svg>
          </Link>
        </div>

        {/* Sticky-stacking episode cards */}
        <div className="relative">
          {episodes.slice(0, 6).map((episode, index) => (
            <div
              key={episode.id}
              className="sticky"
              style={{ top: `${70 + index * 0}px`, zIndex: index + 1 }}
            >
              <Link href={`/episodes/${episode.slug}`} className="group block pt-6">
                <motion.article
                  className="overflow-hidden rounded-2xl md:rounded-3xl border border-pink-100 bg-white transition-all duration-300 hover:shadow-lg hover:-translate-y-1"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-60px" }}
                  transition={{ duration: 0.5, delay: index * 0.05 }}
                >
                  <div className="flex flex-col md:flex-row">
                    {/* Episode cover */}
                    <div className={`relative w-full md:w-80 h-52 md:h-auto bg-gradient-to-br ${episode.gradient} overflow-hidden flex-shrink-0`}>
                      {episode.coverImage && (
                        <Image
                          src={episode.coverImage}
                          alt={episode.title}
                          fill
                          className="object-cover transition-transform duration-500 group-hover:scale-105"
                          sizes="(max-width: 768px) 100vw, 320px"
                        />
                      )}
                      <div className="absolute inset-0 bg-gradient-to-t from-black/30 via-transparent to-transparent md:bg-gradient-to-r md:from-transparent md:to-transparent" />

                      {/* Play button overlay */}
                      <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                        <motion.div
                          className="w-14 h-14 bg-white rounded-full flex items-center justify-center shadow-2xl"
                          whileHover={{ scale: 1.15 }}
                        >
                          <PlayIcon className="w-6 h-6 text-pink-500 ml-0.5" />
                        </motion.div>
                      </div>
                    </div>

                    {/* Episode info */}
                    <div className="flex-1 p-5 md:p-6 flex flex-col justify-between">
                      <div>
                        <div className="flex items-center gap-3 mb-2">
                          <span className="text-pink-400 text-xs font-semibold font-body">
                            with {episode.guest}
                          </span>
                          <span className="text-pink-300">&#183;</span>
                          <span className="text-pink-400/60 text-xs font-body">{episode.duration}</span>
                        </div>
                        <h3 className="text-lg md:text-xl font-bold text-pink-900 group-hover:text-pink-600 transition-colors">
                          {episode.title}
                        </h3>
                        <p className="text-pink-700/50 text-sm mt-2 leading-relaxed line-clamp-2 font-body">
                          {episode.description}
                        </p>
                      </div>

                      {/* Tags */}
                      <div className="flex flex-wrap gap-2 mt-4">
                        {episode.topics?.slice(0, 3).map((topic: string) => (
                          <span
                            key={topic}
                            className="px-3 py-1 text-xs font-medium bg-pink-50 text-pink-500 rounded-full"
                          >
                            {topic}
                          </span>
                        ))}
                        <span className="px-3 py-1 text-xs font-bold bg-gold/10 text-gold rounded-full">
                          {episode.date}
                        </span>
                      </div>
                    </div>

                    {/* Arrow on hover */}
                    <div className="hidden md:flex items-center pr-6">
                      <svg
                        className="w-8 h-8 text-pink-300 group-hover:text-pink-500 transition-all group-hover:translate-x-1"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                        strokeWidth={1}
                      >
                        <path strokeLinecap="round" strokeLinejoin="round" d="M7 17l9.2-9.2M17 17V7H7" />
                      </svg>
                    </div>
                  </div>
                </motion.article>
              </Link>
            </div>
          ))}
        </div>

        {/* Mobile View All */}
        <div className="md:hidden mt-8 text-center">
          <Link
            href="/episodes"
            className="inline-flex items-center gap-2 px-6 py-3 text-sm font-bold border border-pink-200 text-pink-600 rounded-full hover:bg-pink-50 transition-colors"
          >
            View all episodes
            <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 17l9.2-9.2M17 17V7H7" />
            </svg>
          </Link>
        </div>
      </div>
    </section>
  );
}
