"use client";

import { motion } from "framer-motion";
import {
  FadeInUp,
  ScaleOnScroll,
  ParallaxSection,
} from "../components/FramerAnimations";
import { CurlIcon, SparkleIcon } from "../components/Icons";

const stats = [
  { value: "50+", label: "Episodes Planned" },
  { value: "20+", label: "Expert Guests" },
  { value: "100%", label: "Curl Confidence" },
];

export function AboutSection() {
  return (
    <section id="about" className="py-24 bg-white relative overflow-hidden">
      {/* Subtle background pattern */}
      <div
        className="absolute inset-0 opacity-[0.02]"
        style={{
          backgroundImage: `radial-gradient(circle, #E0218A 1px, transparent 1px)`,
          backgroundSize: "30px 30px",
        }}
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
          {/* Host image — with parallax & scale on scroll */}
          <ScaleOnScroll>
            <div className="relative" data-gsap="scale-up">
              <div className="w-full aspect-square max-w-lg mx-auto rounded-3xl gradient-pink-soft overflow-hidden relative gradient-border">
                <div className="absolute inset-0 flex items-center justify-center bg-gradient-to-br from-pink-100 via-pink-50 to-white">
                  <div className="text-center p-8">
                    <motion.div
                      animate={{ rotate: [0, 5, -5, 0] }}
                      transition={{
                        duration: 4,
                        repeat: Infinity,
                        ease: "easeInOut",
                      }}
                    >
                      <CurlIcon className="w-28 h-28 text-pink-300 mx-auto mb-4" />
                    </motion.div>
                    <p className="text-pink-400 font-medium text-lg">
                      Host Photo Coming Soon
                    </p>
                  </div>
                </div>
              </div>

              {/* Floating badge */}
              <motion.div
                className="absolute -bottom-5 right-4 lg:right-8 bg-gold text-pink-900 px-7 py-3.5 rounded-full font-bold shadow-xl glow-gold"
                animate={{ y: [-3, 3, -3] }}
                transition={{
                  duration: 3,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
              >
                <SparkleIcon className="w-4 h-4 inline mr-2" />
                Curl Queen
              </motion.div>

              {/* Decorative floating elements */}
              <motion.div
                className="absolute -top-6 -left-6 w-16 h-16 rounded-full bg-pink-200/50 blur-sm"
                data-gsap="parallax"
                data-speed="0.3"
                animate={{ scale: [1, 1.2, 1] }}
                transition={{
                  duration: 4,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
              />
              <motion.div
                className="absolute top-1/3 -right-4 w-10 h-10 rounded-full bg-gold/30 blur-sm"
                data-gsap="parallax"
                data-speed="0.5"
              />
            </div>
          </ScaleOnScroll>

          {/* Text content */}
          <div>
            <FadeInUp>
              <span className="text-pink-400 font-semibold uppercase tracking-[0.25em] text-sm">
                Meet Your Host
              </span>
            </FadeInUp>

            <FadeInUp delay={0.1}>
              <h2
                className="text-4xl md:text-6xl font-black text-pink-900 mt-3 mb-6 leading-tight"
                data-gsap="heading"
              >
                Every Curl
                <br />
                <span className="text-gradient-pink">Has a Story</span>
              </h2>
            </FadeInUp>

            <FadeInUp delay={0.2}>
              <div className="space-y-4 text-pink-700/75 text-lg leading-relaxed">
                <p data-gsap="text-reveal">
                  Welcome to Curly Hair Collective — the podcast where we
                  celebrate the beauty, science, and culture of textured hair.
                </p>
                <p>
                  From wash day routines to workplace politics, from curl
                  patterns to confidence journeys — we&apos;re here to have the
                  conversations that matter to every curly, coily, and wavy
                  queen.
                </p>
                <p>
                  Because your hair isn&apos;t just hair. It&apos;s identity.
                  It&apos;s heritage. It&apos;s a whole vibe.
                </p>
              </div>
            </FadeInUp>

            {/* Stats row */}
            <FadeInUp delay={0.3}>
              <div className="mt-10 grid grid-cols-3 gap-4">
                {stats.map((stat) => (
                  <div
                    key={stat.label}
                    className="text-center p-4 rounded-2xl bg-pink-50/80"
                  >
                    <div className="text-2xl md:text-3xl font-black text-gradient-pink">
                      {stat.value}
                    </div>
                    <div className="text-xs text-pink-500/70 mt-1 font-medium">
                      {stat.label}
                    </div>
                  </div>
                ))}
              </div>
            </FadeInUp>

            {/* Topic tags */}
            <FadeInUp delay={0.4}>
              <div className="mt-8 flex flex-wrap gap-3">
                {[
                  "Curly Hair Tips",
                  "Natural Beauty",
                  "Self-Love",
                  "Culture",
                  "Community",
                  "CROWN Act",
                ].map((tag, i) => (
                  <motion.span
                    key={tag}
                    className="bg-pink-100 text-pink-600 px-4 py-2 rounded-full text-sm font-medium cursor-default"
                    whileHover={{
                      scale: 1.08,
                      backgroundColor: "#FFE4EF",
                    }}
                    initial={{ opacity: 0, x: -10 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.5 + i * 0.05 }}
                  >
                    {tag}
                  </motion.span>
                ))}
              </div>
            </FadeInUp>
          </div>
        </div>
      </div>
    </section>
  );
}
