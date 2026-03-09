"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { FadeInUp } from "../../components/FramerAnimations";
import type { Guest } from "../../data/guests";
import type { Episode } from "../../data/episodes";

export function GuestDetailClient({
  guest,
  episodes,
}: {
  guest: Guest;
  episodes: Episode[];
}) {
  return (
    <main className="bg-pink-50 min-h-screen">
      {/* Hero */}
      <section
        className={`relative bg-gradient-to-br ${guest.gradient} pt-28 pb-20 overflow-hidden`}
      >
        <div className="absolute inset-0 bg-black/10" />
        <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center z-10">
          <motion.div
            className="inline-flex items-center gap-2 bg-white/20 backdrop-blur-sm px-4 py-2 rounded-full mb-6"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <span className="text-white/90 text-xs font-medium tracking-wide uppercase">
              Podcast Guest
            </span>
          </motion.div>

          <motion.h1
            className="text-4xl sm:text-5xl md:text-6xl font-black text-white mb-3 leading-tight"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.1 }}
          >
            {guest.name}
          </motion.h1>

          <motion.p
            className="text-xl text-white/80 font-medium"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.2 }}
          >
            {guest.title}
          </motion.p>
        </div>

        <div className="absolute bottom-0 left-0 right-0 z-10">
          <svg viewBox="0 0 1440 80" fill="none" className="w-full">
            <path
              d="M0 40C360 80 720 0 1080 40C1260 60 1380 50 1440 40V80H0V40Z"
              fill="#FFF0F5"
            />
          </svg>
        </div>
      </section>

      {/* Content */}
      <section className="py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            {/* Main Bio */}
            <div className="lg:col-span-2 space-y-8">
              <FadeInUp>
                <div className="bg-white rounded-3xl p-8 shadow-lg shadow-pink-200/20">
                  <h2 className="text-2xl font-bold text-pink-900 mb-4">About</h2>
                  <p className="text-pink-700/70 leading-relaxed text-lg">
                    {guest.bio}
                  </p>

                  {guest.quote && (
                    <blockquote className="mt-6 pl-6 border-l-4 border-pink-300">
                      <p className="text-pink-600 italic text-lg">
                        &ldquo;{guest.quote}&rdquo;
                      </p>
                    </blockquote>
                  )}
                </div>
              </FadeInUp>

              {/* Episodes */}
              {episodes.length > 0 && (
                <FadeInUp delay={0.1}>
                  <div className="bg-white rounded-3xl p-8 shadow-lg shadow-pink-200/20">
                    <h2 className="text-2xl font-bold text-pink-900 mb-6">
                      Episodes Featuring {guest.name.split(" ")[0]}
                    </h2>
                    <div className="space-y-4">
                      {episodes.map((ep) => (
                        <Link key={ep.slug} href={`/episodes/${ep.slug}`}>
                          <motion.div
                            className="group flex items-start gap-4 p-4 rounded-2xl hover:bg-pink-50 transition-colors"
                            whileHover={{ x: 4 }}
                          >
                            <div
                              className={`w-14 h-14 rounded-xl bg-gradient-to-br ${ep.gradient} flex-shrink-0 flex items-center justify-center`}
                            >
                              <span className="text-white font-bold text-sm">
                                EP{ep.id}
                              </span>
                            </div>
                            <div>
                              <h3 className="font-bold text-pink-900 group-hover:text-pink-600 transition-colors">
                                {ep.title}
                              </h3>
                              <p className="text-pink-700/50 text-sm mt-1">
                                {ep.duration} &middot; {ep.date}
                              </p>
                              <p className="text-pink-700/60 text-sm mt-1 line-clamp-2">
                                {ep.description}
                              </p>
                            </div>
                          </motion.div>
                        </Link>
                      ))}
                    </div>
                  </div>
                </FadeInUp>
              )}
            </div>

            {/* Sidebar */}
            <div className="space-y-6">
              <FadeInUp delay={0.2}>
                <div className="bg-white rounded-3xl p-6 shadow-lg shadow-pink-200/20">
                  <h3 className="font-bold text-pink-900 mb-4">Expertise</h3>
                  <div className="flex flex-wrap gap-2">
                    {guest.expertise.map((tag) => (
                      <span
                        key={tag}
                        className="text-xs font-semibold bg-pink-100 text-pink-600 px-3 py-1.5 rounded-full"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </FadeInUp>

              <FadeInUp delay={0.3}>
                <div className="bg-white rounded-3xl p-6 shadow-lg shadow-pink-200/20">
                  <h3 className="font-bold text-pink-900 mb-4">Connect</h3>
                  <div className="space-y-3">
                    {guest.socials.map((social) => (
                      <a
                        key={social.platform}
                        href={social.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-3 text-pink-600 hover:text-pink-800 transition-colors text-sm font-medium"
                      >
                        <span className="w-8 h-8 rounded-full bg-pink-100 flex items-center justify-center">
                          <svg
                            className="w-4 h-4"
                            fill="none"
                            stroke="currentColor"
                            viewBox="0 0 24 24"
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth={2}
                              d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
                            />
                          </svg>
                        </span>
                        {social.platform}
                      </a>
                    ))}
                  </div>
                </div>
              </FadeInUp>

              <FadeInUp delay={0.4}>
                <Link
                  href="/guests"
                  className="flex items-center justify-center gap-2 w-full bg-pink-100 text-pink-700 px-6 py-3 rounded-full font-semibold hover:bg-pink-200 transition-colors text-sm"
                >
                  <svg
                    className="w-4 h-4"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M15 19l-7-7 7-7"
                    />
                  </svg>
                  All Guests
                </Link>
              </FadeInUp>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
