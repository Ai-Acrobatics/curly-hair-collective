"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { ClientShell } from "../components/ClientShell";
import { PageHeader } from "../components/PageHeader";
import { FooterSection } from "../sections/Footer";
import { FadeInUp, StaggerContainer, StaggerItem } from "../components/FramerAnimations";
import { guests } from "../data/guests";

export function GuestsPageClient() {
  return (
    <ClientShell>
    <main className="bg-pink-50 min-h-screen">
      <PageHeader
        badge="Our People"
        title="Meet Our"
        titleAccent="Guests"
        subtitle="The pastors, survivors, therapists, and women of faith who bring their testimonies, expertise, and hearts to every conversation."
      />

      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <StaggerContainer className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {guests.map((guest) => (
              <StaggerItem key={guest.id}>
                <Link href={`/guests/${guest.slug}`}>
                  <motion.div
                    className="group bg-white rounded-3xl overflow-hidden shadow-lg shadow-pink-200/30 hover:shadow-xl hover:shadow-pink-300/40 transition-all duration-500"
                    whileHover={{ y: -6 }}
                  >
                    <div
                      className={`h-48 bg-gradient-to-br ${guest.gradient} relative overflow-hidden`}
                    >
                      <div className="absolute inset-0 bg-black/10" />
                      <div className="absolute bottom-4 left-6 right-6">
                        <div className="flex flex-wrap gap-1.5">
                          {guest.expertise.slice(0, 3).map((tag) => (
                            <span
                              key={tag}
                              className="text-[10px] font-semibold uppercase tracking-wider bg-white/20 backdrop-blur-sm text-white px-2.5 py-1 rounded-full"
                            >
                              {tag}
                            </span>
                          ))}
                        </div>
                      </div>
                    </div>

                    <div className="p-6">
                      <h3 className="text-xl font-bold text-pink-900 mb-1 group-hover:text-pink-600 transition-colors">
                        {guest.name}
                      </h3>
                      <p className="text-pink-500 text-sm font-medium mb-3">
                        {guest.title}
                      </p>
                      <p className="text-pink-700/60 text-sm leading-relaxed line-clamp-3">
                        {guest.bio}
                      </p>

                      {guest.quote && (
                        <div className="mt-4 pt-4 border-t border-pink-100">
                          <p className="text-pink-400 text-xs italic">
                            &ldquo;{guest.quote}&rdquo;
                          </p>
                        </div>
                      )}

                      <div className="mt-4 flex items-center text-pink-500 text-sm font-semibold group-hover:text-pink-600 transition-colors">
                        View Profile
                        <svg
                          className="w-4 h-4 ml-1 group-hover:translate-x-1 transition-transform"
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
                      </div>
                    </div>
                  </motion.div>
                </Link>
              </StaggerItem>
            ))}
          </StaggerContainer>
        </div>
      </section>

      {/* Apply CTA */}
      <section className="py-20 bg-gradient-to-br from-pink-100 via-pink-50 to-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <FadeInUp>
            <h2 className="text-3xl sm:text-4xl font-black text-pink-900 mb-4">
              Want to Be a Guest?
            </h2>
            <p className="text-pink-700/60 text-lg mb-8 max-w-2xl mx-auto">
              We&apos;re always looking for women and men of faith with a heart for ministry, hair loss
              journeys, and helping others find their identity in Christ. If God has given you a testimony — we want to hear it.
            </p>
            <Link
              href="/guests/apply"
              className="inline-flex items-center gap-2 gradient-pink text-white px-8 py-4 rounded-full font-bold text-lg shadow-lg shadow-pink-300/50 hover:shadow-xl hover:shadow-pink-400/50 transition-all"
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
