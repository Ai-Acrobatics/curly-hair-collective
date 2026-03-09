"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import Image from "next/image";
import { ClientShell } from "../components/ClientShell";
import { FooterSection } from "../sections/Footer";
import { FadeInUp, StaggerContainer, StaggerItem } from "../components/FramerAnimations";
import { guests } from "../data/guests";

export function GuestsPageClient() {
  return (
    <ClientShell>
    <main className="bg-pink-50 min-h-screen">
      {/* Inline Section Header */}
      <section className="pt-32 pb-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <FadeInUp>
            <div className="flex flex-col items-center text-center">
              <span className="inline-flex items-center gap-2 bg-pink-50 text-pink-500 font-semibold uppercase tracking-[0.2em] text-xs px-5 py-2 rounded-full border border-pink-100 mb-6">
                <svg className="w-3.5 h-3.5" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
                </svg>
                Our People
              </span>
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black text-pink-900 mb-4 tracking-tight">
                Meet Our{" "}
                <span className="bg-gradient-to-r from-pink-500 via-rose-400 to-pink-600 bg-clip-text text-transparent">
                  Guests
                </span>
              </h1>
              <p className="text-pink-700/60 text-lg sm:text-xl max-w-2xl leading-relaxed">
                The pastors, survivors, therapists, and women of faith who bring their testimonies, expertise, and hearts to every conversation.
              </p>
            </div>
          </FadeInUp>
        </div>
      </section>

      {/* Guest Cards Grid */}
      <section className="pb-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <StaggerContainer className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {guests.map((guest) => (
              <StaggerItem key={guest.id}>
                <Link href={`/guests/${guest.slug}`}>
                  <motion.div
                    className="group relative bg-white rounded-2xl overflow-hidden border border-pink-100 hover:border-pink-200 transition-all duration-500"
                    whileHover={{ y: -4 }}
                  >
                    {/* Subtle color blob overlay */}
                    <div className="absolute -top-12 -right-12 w-40 h-40 rounded-full bg-gradient-to-br from-pink-200/30 to-rose-200/20 blur-2xl group-hover:scale-125 transition-transform duration-700" />
                    <div className="absolute -bottom-8 -left-8 w-32 h-32 rounded-full bg-gradient-to-tr from-fuchsia-200/20 to-pink-100/30 blur-2xl group-hover:scale-110 transition-transform duration-700" />

                    {/* Guest Image or Gradient Header */}
                    {guest.image ? (
                      <div className="relative h-48 overflow-hidden">
                        <Image
                          src={guest.image}
                          alt={guest.name}
                          fill
                          className="object-cover object-top"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-white/80 via-transparent to-transparent" />
                      </div>
                    ) : (
                      <div
                        className={`h-2 bg-gradient-to-r ${guest.gradient}`}
                      />
                    )}

                    <div className="relative p-6">
                      {/* Expertise Tags */}
                      <div className="flex flex-wrap gap-1.5 mb-4">
                        {guest.expertise.slice(0, 3).map((tag) => (
                          <span
                            key={tag}
                            className="text-[10px] font-semibold uppercase tracking-wider text-pink-500 bg-pink-50 px-2.5 py-1 rounded-full border border-pink-100"
                          >
                            {tag}
                          </span>
                        ))}
                      </div>

                      {/* Name & Title */}
                      <h3 className="text-xl font-bold text-pink-900 mb-1 group-hover:text-pink-600 transition-colors duration-300">
                        {guest.name}
                      </h3>
                      <p className="text-pink-500 text-sm font-medium mb-3">
                        {guest.title}
                      </p>
                      <p className="text-pink-700/50 text-sm leading-relaxed line-clamp-3">
                        {guest.bio}
                      </p>

                      {/* Quote */}
                      {guest.quote && (
                        <div className="mt-4 pt-4 border-t border-pink-100">
                          <p className="text-pink-400 text-xs italic leading-relaxed">
                            &ldquo;{guest.quote}&rdquo;
                          </p>
                        </div>
                      )}

                      {/* Hover Arrow CTA */}
                      <div className="mt-5 flex items-center justify-between">
                        <span className="text-pink-500 text-sm font-semibold group-hover:text-pink-600 transition-colors duration-300">
                          View Profile
                        </span>
                        <span className="inline-flex items-center justify-center w-8 h-8 rounded-full bg-pink-50 border border-pink-100 group-hover:bg-pink-500 group-hover:border-pink-500 transition-all duration-300">
                          <svg
                            className="w-4 h-4 text-pink-500 group-hover:text-white group-hover:translate-x-0.5 transition-all duration-300"
                            fill="none"
                            stroke="currentColor"
                            viewBox="0 0 24 24"
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth={2}
                              d="M9 5l7 7-7 7"
                            />
                          </svg>
                        </span>
                      </div>
                    </div>
                  </motion.div>
                </Link>
              </StaggerItem>
            ))}
          </StaggerContainer>
        </div>
      </section>

      {/* Awards/List Pattern - Guest Directory */}
      <section className="pb-24">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <FadeInUp>
            <div className="mb-8">
              <span className="inline-flex items-center gap-2 bg-pink-50 text-pink-500 font-semibold uppercase tracking-[0.2em] text-xs px-5 py-2 rounded-full border border-pink-100 mb-4">
                <svg className="w-3.5 h-3.5" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M4 6h16M4 12h16M4 18h16" stroke="currentColor" strokeWidth="2" strokeLinecap="round" fill="none" />
                </svg>
                Guest Directory
              </span>
              <h2 className="text-3xl sm:text-4xl font-black text-pink-900 tracking-tight">
                All Guests at a Glance
              </h2>
            </div>
          </FadeInUp>

          <div className="border border-pink-100 rounded-2xl overflow-hidden bg-white">
            {guests.map((guest, index) => (
              <Link key={guest.id} href={`/guests/${guest.slug}`}>
                <motion.div
                  className={`group flex items-center justify-between px-6 py-5 hover:bg-pink-50/60 transition-colors duration-300 ${
                    index !== guests.length - 1 ? "border-b border-pink-100" : ""
                  }`}
                  whileHover={{ x: 4 }}
                  transition={{ duration: 0.2 }}
                >
                  <div className="flex items-center gap-4 min-w-0">
                    {/* Color dot from gradient */}
                    <span className={`flex-shrink-0 w-3 h-3 rounded-full bg-gradient-to-br ${guest.gradient}`} />
                    <div className="min-w-0">
                      <h3 className="text-base font-bold text-pink-900 group-hover:text-pink-600 transition-colors duration-300 truncate">
                        {guest.name}
                      </h3>
                      <p className="text-pink-500/70 text-sm truncate">
                        {guest.title}
                      </p>
                    </div>
                  </div>
                  <span className="flex-shrink-0 ml-4 inline-flex items-center justify-center w-8 h-8 rounded-full border border-pink-100 group-hover:bg-pink-500 group-hover:border-pink-500 transition-all duration-300">
                    <svg
                      className="w-4 h-4 text-pink-400 group-hover:text-white group-hover:translate-x-0.5 transition-all duration-300"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M9 5l7 7-7 7"
                      />
                    </svg>
                  </span>
                </motion.div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Apply CTA */}
      <section className="py-20 bg-gradient-to-br from-pink-100 via-pink-50 to-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <FadeInUp>
            <span className="inline-flex items-center gap-2 bg-white text-pink-500 font-semibold uppercase tracking-[0.2em] text-xs px-5 py-2 rounded-full border border-pink-100 mb-6">
              <svg className="w-3.5 h-3.5" viewBox="0 0 24 24" fill="currentColor">
                <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
              </svg>
              Join Us
            </span>
            <h2 className="text-3xl sm:text-4xl font-black text-pink-900 mb-4 tracking-tight">
              Want to Be a Guest?
            </h2>
            <p className="text-pink-700/60 text-lg mb-8 max-w-2xl mx-auto leading-relaxed">
              We&apos;re always looking for women and men of faith with a heart for ministry, hair loss
              journeys, and helping others find their identity in Christ. If God has given you a testimony — we want to hear it.
            </p>
            <Link
              href="/guests/apply"
              className="inline-flex items-center gap-2 gradient-pink text-white px-8 py-4 rounded-full font-bold text-lg shadow-lg shadow-pink-300/50 hover:shadow-xl hover:shadow-pink-400/50 hover:scale-105 transition-all duration-300"
            >
              Apply to Be a Guest
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </Link>
          </FadeInUp>
        </div>
      </section>

      <FooterSection />
    </main>
    </ClientShell>
  );
}
