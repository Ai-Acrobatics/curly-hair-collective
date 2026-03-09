"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { ClientShell } from "../components/ClientShell";
import { PageHeader } from "../components/PageHeader";
import { FooterSection } from "../sections/Footer";
import { FadeInUp } from "../components/FramerAnimations";
import { SparkleIcon } from "../components/Icons";
import { merchItems, merchCategories } from "../data/merch";

function ArrowUpRight({ className }: { className?: string }) {
  return (
    <svg
      className={className}
      width="20"
      height="20"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <line x1="7" y1="17" x2="17" y2="7" />
      <polyline points="7 7 17 7 17 17" />
    </svg>
  );
}

export function MerchPageClient() {
  const [activeCategory, setActiveCategory] = useState("all");

  const filtered =
    activeCategory === "all"
      ? merchItems
      : merchItems.filter((item) => item.category === activeCategory);

  return (
    <ClientShell>
      <PageHeader
        badge="Official Merch"
        title="Rep Your"
        titleAccent="Faith"
        subtitle="Faith-forward apparel, accessories, and essentials that celebrate who you are in Christ. Every purchase supports the Collective."
      />

      <section className="py-24 bg-pink-50/50 relative overflow-hidden">
        {/* Background decorative blobs */}
        <div className="absolute top-20 -left-32 w-96 h-96 bg-pink-200/20 rounded-full blur-3xl pointer-events-none" />
        <div className="absolute bottom-20 -right-32 w-80 h-80 bg-rose-200/15 rounded-full blur-3xl pointer-events-none" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
          {/* Section Title with Pill Badge */}
          <FadeInUp>
            <div className="text-center mb-16">
              <span className="inline-flex items-center gap-2 bg-pink-50 text-pink-500 font-semibold uppercase tracking-[0.2em] text-xs px-5 py-2 rounded-full border border-pink-100 mb-6">
                <SparkleIcon className="w-3.5 h-3.5" />
                Shop the Collection
              </span>
              <h2 className="text-3xl md:text-4xl font-black text-pink-900 mt-4">
                Faith-Forward <span className="text-gradient-pink">Essentials</span>
              </h2>
              <p className="text-pink-700/50 mt-3 max-w-xl mx-auto text-sm leading-relaxed">
                Every piece is designed with purpose, crafted with love, and rooted in identity.
              </p>
            </div>
          </FadeInUp>

          {/* Category Filter */}
          <FadeInUp>
            <div className="flex flex-wrap justify-center gap-3 mb-14">
              {merchCategories.map((cat) => (
                <motion.button
                  key={cat.key}
                  onClick={() => setActiveCategory(cat.key)}
                  className={`px-5 py-2.5 rounded-full text-xs font-semibold uppercase tracking-wider transition-all duration-300 ${
                    activeCategory === cat.key
                      ? "gradient-pink text-white shadow-lg shadow-pink-300/40"
                      : "bg-white text-pink-600 hover:bg-pink-100/80 border border-pink-100"
                  }`}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  {cat.label}
                </motion.button>
              ))}
            </div>
          </FadeInUp>

          {/* Products Grid — sticky stacking on mobile */}
          <AnimatePresence mode="wait">
            <motion.div
              key={activeCategory}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.3 }}
              className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6"
            >
              {filtered.map((item, index) => (
                <motion.div
                  key={item.id}
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.4, delay: index * 0.06 }}
                  className="group sticky sm:static"
                  style={{ top: `${100 + index * 16}px` }}
                >
                  <Link href={`/merch/${item.slug}`}>
                      <div className="bg-white rounded-2xl overflow-hidden border border-pink-100 hover:border-pink-200 transition-all duration-500 h-full flex flex-col relative hover:shadow-lg hover:shadow-pink-100/50">
                        {/* Subtle color blob overlay */}
                        <div className="absolute -top-10 -right-10 w-32 h-32 bg-pink-200/20 rounded-full blur-2xl pointer-events-none group-hover:bg-pink-300/25 transition-colors duration-500" />

                        {/* Hover arrow */}
                        <div className="absolute top-4 right-4 z-20 opacity-0 group-hover:opacity-100 transition-all duration-300 translate-x-1 -translate-y-1 group-hover:translate-x-0 group-hover:translate-y-0">
                          <div className="w-8 h-8 rounded-full bg-pink-500 text-white flex items-center justify-center shadow-lg shadow-pink-300/40">
                            <ArrowUpRight className="w-4 h-4" />
                          </div>
                        </div>

                        {/* Image area */}
                        <div
                          className={`h-56 relative overflow-hidden ${item.image ? "bg-pink-50/50" : `bg-gradient-to-br ${item.gradient}`}`}
                        >
                          {item.image ? (
                            <Image
                              src={item.image}
                              alt={item.name}
                              fill
                              className="object-cover group-hover:scale-105 transition-transform duration-700 ease-out"
                            />
                          ) : (
                            <div className="absolute inset-0 flex items-center justify-center">
                              <SparkleIcon className="w-16 h-16 text-white/15" />
                            </div>
                          )}
                          {item.badge && (
                            <div className="absolute top-3 left-3 z-10">
                              <span className="inline-flex items-center bg-gold text-pink-900 text-[10px] font-bold uppercase tracking-wider px-3 py-1 rounded-full">
                                {item.badge}
                              </span>
                            </div>
                          )}
                        </div>

                        {/* Content */}
                        <div className="p-5 flex-1 flex flex-col relative">
                          <p className="text-pink-400 text-[10px] font-semibold uppercase tracking-[0.15em] mb-1.5">
                            {item.category.replace("-", " ")}
                          </p>
                          <h3 className="text-base font-bold text-pink-900 mb-2 group-hover:text-pink-700 transition-colors">
                            {item.name}
                          </h3>
                          <p className="text-pink-700/45 text-sm leading-relaxed flex-1 line-clamp-2">
                            {item.description}
                          </p>

                          {item.sizes && (
                            <div className="mt-3 flex flex-wrap gap-1.5">
                              {item.sizes.map((size) => (
                                <span
                                  key={size}
                                  className="bg-pink-50 text-pink-400 px-2 py-0.5 rounded text-[10px] font-medium border border-pink-100/50"
                                >
                                  {size}
                                </span>
                              ))}
                            </div>
                          )}

                          <div className="mt-4 flex items-center justify-between pt-3 border-t border-pink-50">
                            <span className="text-lg font-black text-gradient-pink">
                              ${item.price.toFixed(2)}
                            </span>
                            <span className="text-[10px] font-semibold uppercase tracking-wider text-pink-300 group-hover:text-pink-500 transition-colors">
                              Coming Soon
                            </span>
                          </div>
                        </div>
                      </div>
                    </Link>
                </motion.div>
              ))}
            </motion.div>
          </AnimatePresence>

          {/* Newsletter CTA */}
          <FadeInUp>
            <div className="mt-24 text-center bg-white rounded-3xl p-10 md:p-14 border border-pink-100 relative overflow-hidden">
              {/* Decorative blob */}
              <div className="absolute -top-16 -right-16 w-48 h-48 bg-pink-100/40 rounded-full blur-3xl pointer-events-none" />
              <div className="absolute -bottom-16 -left-16 w-40 h-40 bg-rose-100/30 rounded-full blur-3xl pointer-events-none" />

              <div className="relative">
                <span className="inline-flex items-center gap-2 bg-pink-50 text-pink-500 font-semibold uppercase tracking-[0.2em] text-xs px-5 py-2 rounded-full border border-pink-100 mb-6">
                  <SparkleIcon className="w-3.5 h-3.5" />
                  Early Access
                </span>
                <h3 className="text-2xl md:text-3xl font-black text-pink-900 mb-3">
                  Be the First to Shop
                </h3>
                <p className="text-pink-700/50 max-w-lg mx-auto mb-8 text-sm leading-relaxed">
                  Join the waitlist and get early access to new faith-forward
                  drops, exclusive designs, and member-only discounts.
                </p>
                <div className="max-w-sm mx-auto flex gap-3">
                  <input
                    type="email"
                    placeholder="your@email.com"
                    className="flex-1 px-5 py-3 rounded-full border border-pink-100 text-pink-900 placeholder:text-pink-300 focus:outline-none focus:ring-2 focus:ring-pink-300 bg-pink-50/50 text-sm"
                  />
                  <motion.button
                    className="gradient-pink text-white px-6 py-3 rounded-full font-bold text-sm shadow-lg shadow-pink-300/30"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    Notify Me
                  </motion.button>
                </div>
              </div>
            </div>
          </FadeInUp>
        </div>
      </section>

      <FooterSection />
    </ClientShell>
  );
}
