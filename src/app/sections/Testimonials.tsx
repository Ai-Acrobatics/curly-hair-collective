"use client";

import { motion } from "framer-motion";
import { FadeInUp, StaggerContainer, StaggerItem } from "../components/FramerAnimations";
import { SparkleIcon } from "../components/Icons";

const testimonials = [
  {
    quote:
      "Finally a podcast that gets it. I've been natural for 5 years and I still learned so much from the first episode. This community is everything.",
    name: "Jasmine T.",
    role: "3B Curls · Listener & Curl Queen",
    gradient: "from-pink-400 to-rose-500",
  },
  {
    quote:
      "The CROWN Act episode literally made me cry. Knowing someone is fighting for our right to wear our hair at work means the world.",
    name: "Aisha M.",
    role: "4A Coils · Natural Hair Advocate",
    gradient: "from-fuchsia-400 to-pink-500",
  },
  {
    quote:
      "I always thought my hair was just 'frizzy' — this podcast helped me realize I have beautiful waves that just needed the right care. Life-changing.",
    name: "Sofia R.",
    role: "2C Waves · New to Natural",
    gradient: "from-rose-400 to-pink-500",
  },
  {
    quote:
      "My daughter and I listen together every week. The episode about raising curly kids gave us our entire wash day routine. She finally loves her hair!",
    name: "Destiny W.",
    role: "4C Coils · Curly Mom",
    gradient: "from-pink-500 to-fuchsia-500",
  },
  {
    quote:
      "The product recommendations are always spot-on. I've saved so much money since I stopped buying random products and started following the science-backed tips.",
    name: "Morgan K.",
    role: "3A Curls · Product Minimalist",
    gradient: "from-rose-500 to-pink-600",
  },
  {
    quote:
      "As a woman of color in tech, the workplace episode hit different. I've shared it with my entire team. Representation matters and this podcast proves it.",
    name: "Priya N.",
    role: "2B Waves · Tech Professional",
    gradient: "from-pink-400 to-rose-400",
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
          <span className="text-pink-400 font-semibold uppercase tracking-[0.25em] text-sm">
            Love Letters
          </span>
          <h2 className="text-4xl md:text-6xl font-black text-pink-900 mt-3">
            From the Collective
          </h2>
          <p className="text-pink-600/80 mt-5 max-w-xl mx-auto text-lg">
            Real words from real curly queens who are part of the movement.
          </p>
        </FadeInUp>

        <StaggerContainer
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
          staggerDelay={0.1}
        >
          {testimonials.map((t) => (
            <StaggerItem key={t.name}>
              <motion.div
                className="relative p-7 rounded-3xl bg-gradient-to-br from-pink-50 to-white border border-pink-100 shadow-sm group h-full flex flex-col"
                whileHover={{
                  y: -4,
                  boxShadow: "0 20px 40px rgba(224, 33, 138, 0.1)",
                }}
                transition={{ duration: 0.3 }}
              >
                {/* Quote mark */}
                <div className="absolute -top-4 -left-2 text-6xl text-pink-200 select-none leading-none">
                  &ldquo;
                </div>

                {/* Stars */}
                <div className="flex gap-0.5 mb-3 relative z-10">
                  {[1, 2, 3, 4, 5].map((star) => (
                    <SparkleIcon
                      key={star}
                      className="w-3.5 h-3.5 text-gold"
                    />
                  ))}
                </div>

                <p className="text-pink-800/75 text-sm leading-relaxed mb-5 relative z-10 flex-1">
                  &ldquo;{t.quote}&rdquo;
                </p>

                <div className="flex items-center gap-3">
                  <div
                    className={`w-10 h-10 rounded-full bg-gradient-to-br ${t.gradient} flex items-center justify-center text-white font-bold text-sm`}
                  >
                    {t.name.charAt(0)}
                  </div>
                  <div>
                    <p className="font-bold text-pink-900 text-sm">{t.name}</p>
                    <p className="text-pink-500/60 text-xs">{t.role}</p>
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
