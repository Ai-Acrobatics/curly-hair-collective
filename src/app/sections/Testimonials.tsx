"use client";

import { motion } from "framer-motion";
import { FadeInUp, StaggerContainer, StaggerItem } from "../components/FramerAnimations";
import { SparkleIcon } from "../components/Icons";

const testimonials = [
  {
    quote:
      "I've been looking for a podcast that talks about hair loss without making me feel broken. This is it.",
    name: "Jasmine T.",
    role: "Listener & Curl Queen",
    emoji: "👑",
  },
  {
    quote:
      "Hearing Sabrina talk about coming to God later in life literally made me cry in my car. I needed that.",
    name: "Alyssa M.",
    role: "New Believer",
    emoji: "🙏",
  },
  {
    quote:
      "Finally someone who understands that hair isn't just hair — it's identity, it's culture, it's everything.",
    name: "Kayla R.",
    role: "Natural Hair Advocate",
    emoji: "✨",
  },
  {
    quote:
      "The wig education alone is worth it. But the faith conversations? That's what keeps me coming back.",
    name: "Denise W.",
    role: "Topper Wearer & Faith Walker",
    emoji: "💗",
  },
];

export function TestimonialsSection() {
  return (
    <section className="py-24 bg-white relative overflow-hidden">
      {/* Decorative blobs */}
      <div className="absolute top-0 right-0 w-96 h-96 rounded-full bg-pink-100/40 blur-[100px] -translate-y-1/2 translate-x-1/3" />
      <div className="absolute bottom-0 left-0 w-80 h-80 rounded-full bg-gold/10 blur-[80px] translate-y-1/3 -translate-x-1/4" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <FadeInUp className="text-center mb-16">
          <span className="text-pink-400 font-semibold uppercase tracking-[0.25em] text-sm font-body">
            What They&apos;re Saying
          </span>
          <h2 className="text-4xl md:text-6xl font-black text-pink-900 mt-3">
            Voices from the Collective
          </h2>
        </FadeInUp>

        <StaggerContainer
          className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8"
          staggerDelay={0.15}
        >
          {testimonials.map((t, i) => (
            <StaggerItem key={i}>
              <motion.div
                className="relative p-8 rounded-3xl bg-gradient-to-br from-pink-50 to-white border border-pink-100 shadow-sm group"
                whileHover={{
                  y: -4,
                  boxShadow: "0 20px 40px rgba(224, 33, 138, 0.1)",
                }}
                transition={{ duration: 0.3 }}
              >
                {/* Quote mark */}
                <div className="absolute -top-4 -left-2 text-6xl font-display text-pink-200 select-none leading-none">
                  &ldquo;
                </div>

                <p className="text-pink-800/80 text-lg leading-relaxed italic mb-6 relative z-10 font-body">
                  {t.quote}
                </p>

                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full gradient-pink flex items-center justify-center text-lg">
                    {t.emoji}
                  </div>
                  <div>
                    <p className="font-bold text-pink-900 text-sm font-body">{t.name}</p>
                    <p className="text-pink-500/70 text-xs font-body">{t.role}</p>
                  </div>
                </div>

                {/* Hover sparkle */}
                <motion.div
                  className="absolute top-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity"
                  animate={{ rotate: 360 }}
                  transition={{ duration: 8, repeat: Infinity, ease: "linear" }}
                >
                  <SparkleIcon className="w-5 h-5 text-gold/40" />
                </motion.div>
              </motion.div>
            </StaggerItem>
          ))}
        </StaggerContainer>
      </div>
    </section>
  );
}
