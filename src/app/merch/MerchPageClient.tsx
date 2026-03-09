"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ClientShell } from "../components/ClientShell";
import { PageHeader } from "../components/PageHeader";
import { FooterSection } from "../sections/Footer";
import { FadeInUp, TiltCard } from "../components/FramerAnimations";
import { SparkleIcon } from "../components/Icons";
import { merchItems, merchCategories } from "../data/merch";

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

      <section className="py-20 bg-pink-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Category Filter */}
          <FadeInUp>
            <div className="flex flex-wrap justify-center gap-3 mb-12">
              {merchCategories.map((cat) => (
                <motion.button
                  key={cat.key}
                  onClick={() => setActiveCategory(cat.key)}
                  className={`px-5 py-2.5 rounded-full text-sm font-semibold transition-all ${
                    activeCategory === cat.key
                      ? "gradient-pink text-white shadow-lg shadow-pink-300/40"
                      : "bg-white text-pink-600 hover:bg-pink-100 shadow-sm"
                  }`}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  {cat.label}
                </motion.button>
              ))}
            </div>
          </FadeInUp>

          {/* Products Grid */}
          <AnimatePresence mode="wait">
            <motion.div
              key={activeCategory}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.3 }}
              className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6"
            >
              {filtered.map((item) => (
                <TiltCard key={item.id} className="group">
                  <div className="bg-white rounded-2xl overflow-hidden shadow-lg shadow-pink-200/30 magnetic-card h-full flex flex-col">
                    <div
                      className={`h-48 bg-gradient-to-br ${item.gradient} relative overflow-hidden`}
                    >
                      <div className="absolute inset-0 flex items-center justify-center">
                        <SparkleIcon className="w-16 h-16 text-white/15" />
                      </div>
                      {item.badge && (
                        <div className="absolute top-3 right-3">
                          <span className="bg-gold text-pink-900 text-xs font-bold px-3 py-1 rounded-full glow-gold">
                            {item.badge}
                          </span>
                        </div>
                      )}
                    </div>
                    <div className="p-5 flex-1 flex flex-col">
                      <p className="text-pink-400 text-xs font-semibold uppercase tracking-wider mb-1">
                        {item.category.replace("-", " ")}
                      </p>
                      <h3 className="text-lg font-bold text-pink-900 mb-2">
                        {item.name}
                      </h3>
                      <p className="text-pink-700/55 text-sm leading-relaxed flex-1">
                        {item.description}
                      </p>
                      {item.sizes && (
                        <div className="mt-3 flex flex-wrap gap-1.5">
                          {item.sizes.map((size) => (
                            <span
                              key={size}
                              className="bg-pink-50 text-pink-500 px-2 py-0.5 rounded text-xs font-medium"
                            >
                              {size}
                            </span>
                          ))}
                        </div>
                      )}
                      <div className="mt-4 flex items-center justify-between">
                        <span className="text-xl font-black text-gradient-pink">
                          ${item.price.toFixed(2)}
                        </span>
                        <motion.button
                          className="gradient-pink text-white px-4 py-2 rounded-full text-sm font-semibold"
                          whileHover={{ scale: 1.05 }}
                          whileTap={{ scale: 0.95 }}
                        >
                          Coming Soon
                        </motion.button>
                      </div>
                    </div>
                  </div>
                </TiltCard>
              ))}
            </motion.div>
          </AnimatePresence>

          {/* Newsletter CTA */}
          <FadeInUp>
            <div className="mt-20 text-center bg-white rounded-3xl p-10 md:p-14 shadow-lg shadow-pink-200/30">
              <SparkleIcon className="w-8 h-8 text-gold mx-auto mb-4" />
              <h3 className="text-2xl md:text-3xl font-black text-pink-900 mb-3">
                Be the First to Shop
              </h3>
              <p className="text-pink-700/60 max-w-lg mx-auto mb-6">
                Join the waitlist and get early access to new faith-forward
                drops, exclusive designs, and member-only discounts.
              </p>
              <div className="max-w-sm mx-auto flex gap-3">
                <input
                  type="email"
                  placeholder="your@email.com"
                  className="flex-1 px-5 py-3 rounded-full border border-pink-200 text-pink-900 placeholder:text-pink-300 focus:outline-none focus:ring-2 focus:ring-pink-400"
                />
                <motion.button
                  className="gradient-pink text-white px-6 py-3 rounded-full font-bold shadow-lg"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  Notify Me
                </motion.button>
              </div>
            </div>
          </FadeInUp>
        </div>
      </section>

      <FooterSection />
    </ClientShell>
  );
}
