"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { FadeInUp } from "../components/FramerAnimations";
import { SparkleIcon } from "../components/Icons";

const testimonies = [
  {
    quote:
      "I thought my hair journey was just about curls. God showed me it was about surrendering control and trusting His design for me.",
    name: "Jasmine R.",
  },
  {
    quote:
      "When I stopped chasing the world's standard of beauty and looked at what Scripture says, everything changed — my hair, my confidence, my peace.",
    name: "Denise W.",
  },
  {
    quote:
      "This community led me back to Christ. I came for curl tips and found sisters in faith.",
    name: "Taylor M.",
  },
];

const scriptureCards = [
  {
    verse: "You are fearfully and wonderfully made.",
    ref: "Psalm 139:14",
    message:
      "Every coil, curl, and wave was placed on purpose by a God who doesn't make mistakes.",
  },
  {
    verse: "She is clothed with strength and dignity.",
    ref: "Proverbs 31:25",
    message:
      "Your crown isn't just your hair — it's the confidence that comes from knowing whose you are.",
  },
  {
    verse: "He has made everything beautiful in its time.",
    ref: "Ecclesiastes 3:11",
    message:
      "Your journey to embracing your natural beauty is part of a bigger story He's writing.",
  },
];

export function FaithSection() {
  return (
    <section
      id="faith"
      className="py-24 relative overflow-hidden bg-white"
    >
      {/* Subtle warm radial accents */}
      <div
        className="absolute inset-0 opacity-40"
        style={{
          background:
            "radial-gradient(ellipse at 20% 30%, rgba(212, 175, 55, 0.08) 0%, transparent 50%), radial-gradient(ellipse at 80% 70%, rgba(253, 242, 248, 0.6) 0%, transparent 50%)",
        }}
      />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 z-10">
        {/* Section Header */}
        <div className="text-center mb-16">
          <FadeInUp>
            <span className="inline-flex items-center gap-2 bg-cream border border-gold-light/60 text-gray-500 font-semibold uppercase tracking-[0.2em] text-xs px-4 py-1.5 rounded-full mb-6">
              <SparkleIcon className="w-3 h-3 text-gold" />
              More Than Hair
            </span>
          </FadeInUp>

          <FadeInUp delay={0.1}>
            <h2 className="text-4xl md:text-5xl font-black text-gray-900 mt-4 mb-4 font-display">
              Leading Women to{" "}
              <span className="text-gradient-gold">Jesus</span>
            </h2>
          </FadeInUp>

          <FadeInUp delay={0.2}>
            <p className="text-gray-500 text-lg max-w-2xl mx-auto">
              We believe your hair journey is part of a bigger story. At Curlie
              Girlie Collective, we don&apos;t just celebrate curls — we point
              women toward the One who created them with purpose.
            </p>
          </FadeInUp>
        </div>

        {/* Mission Quote */}
        <FadeInUp delay={0.25}>
          <div className="max-w-3xl mx-auto text-center mb-20">
            <blockquote className="relative">
              <SparkleIcon className="w-8 h-8 text-gold/30 mx-auto mb-4" />
              <p className="text-2xl md:text-3xl font-display italic text-gray-900 leading-relaxed">
                &ldquo;God wants to heal us to such a degree that multitudes are
                won.&rdquo;
              </p>
              <div className="mt-4 w-16 h-0.5 bg-gold mx-auto" />
            </blockquote>
          </div>
        </FadeInUp>

        {/* Scripture Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-20">
          {scriptureCards.map((card, i) => (
            <FadeInUp key={card.ref} delay={0.3 + i * 0.1}>
              <motion.div
                className="bg-pink-50 border border-pink-100 rounded-3xl p-8 h-full"
                whileHover={{ y: -4 }}
                transition={{ duration: 0.3 }}
              >
                <p className="text-pink-900 font-display text-xl font-bold italic mb-2">
                  &ldquo;{card.verse}&rdquo;
                </p>
                <p className="text-gold font-semibold text-sm mb-4">
                  {card.ref}
                </p>
                <p className="text-gray-500 leading-relaxed">{card.message}</p>
              </motion.div>
            </FadeInUp>
          ))}
        </div>

        {/* Testimonies */}
        <div className="mb-16">
          <FadeInUp>
            <h3 className="text-center text-sm font-semibold uppercase tracking-[0.2em] text-gray-400 mb-10">
              Stories of Transformation
            </h3>
          </FadeInUp>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {testimonies.map((t, i) => (
              <FadeInUp key={t.name} delay={0.1 * i}>
                <div className="bg-white border border-gray-100 rounded-2xl p-6 shadow-sm">
                  <div className="flex gap-1 mb-3">
                    {[...Array(5)].map((_, j) => (
                      <SparkleIcon
                        key={j}
                        className="w-3.5 h-3.5 text-gold"
                      />
                    ))}
                  </div>
                  <p className="text-gray-600 italic leading-relaxed mb-4">
                    &ldquo;{t.quote}&rdquo;
                  </p>
                  <p className="text-gray-900 font-bold text-sm">{t.name}</p>
                </div>
              </FadeInUp>
            ))}
          </div>
        </div>

        {/* CTA */}
        <FadeInUp delay={0.4}>
          <div className="text-center">
            <Link
              href="/faith"
              className="inline-flex items-center gap-2 bg-gray-900 text-white px-8 py-4 rounded-full font-bold text-lg shadow-md hover:bg-gray-800 transition-colors"
            >
              <SparkleIcon className="w-5 h-5 text-gold" />
              Explore Our Faith Journey
            </Link>
            <p className="text-gray-400 text-sm mt-4">
              Discover how faith and beauty come together
            </p>
          </div>
        </FadeInUp>
      </div>
    </section>
  );
}
