"use client";

import { motion } from "framer-motion";
import { FadeInUp, StaggerContainer, StaggerItem } from "../components/FramerAnimations";

const pillars = [
  {
    icon: "🙏",
    title: "Faith",
    description:
      "Real conversations about coming to God, growing in faith, and finding purpose — no matter where you start.",
    gradient: "from-pink-400 to-rose-500",
    bgLight: "bg-pink-50",
  },
  {
    icon: "💇‍♀️",
    title: "Hair",
    description:
      "Expert education on wigs, toppers, hair replacement systems, and embracing every texture and journey.",
    gradient: "from-fuchsia-400 to-pink-500",
    bgLight: "bg-fuchsia-50",
  },
  {
    icon: "🦋",
    title: "Identity",
    description:
      "Who you are now vs. who you're becoming. Self-love, confidence, and reclaiming your crown.",
    gradient: "from-rose-400 to-pink-500",
    bgLight: "bg-rose-50",
  },
  {
    icon: "👯‍♀️",
    title: "Community",
    description:
      "Building a sisterhood of women who uplift, encourage, and hold space for each other.",
    gradient: "from-pink-500 to-fuchsia-500",
    bgLight: "bg-pink-50",
  },
];

export function PillarsSection() {
  return (
    <section className="py-24 gradient-pink-soft relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <FadeInUp className="text-center mb-16">
          <span className="text-pink-400 font-semibold uppercase tracking-[0.25em] text-sm font-body">
            What We Talk About
          </span>
          <h2 className="text-4xl md:text-6xl font-black text-pink-900 mt-3">
            Four Pillars. One Mission.
          </h2>
          <p className="text-pink-600/70 mt-4 max-w-2xl mx-auto text-lg font-body">
            Every episode is rooted in faith, hair education, identity, and
            community. Together, they tell the full story.
          </p>
        </FadeInUp>

        <StaggerContainer
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6"
          staggerDelay={0.12}
        >
          {pillars.map((pillar) => (
            <StaggerItem key={pillar.title}>
              <motion.div
                className="relative p-8 rounded-3xl bg-white shadow-lg shadow-pink-200/30 text-center group cursor-default overflow-hidden"
                whileHover={{
                  y: -6,
                  boxShadow: "0 25px 50px rgba(224, 33, 138, 0.15)",
                }}
                transition={{ duration: 0.4, ease: [0.23, 1, 0.32, 1] }}
              >
                {/* Hover gradient overlay */}
                <motion.div
                  className={`absolute inset-0 bg-gradient-to-br ${pillar.gradient} opacity-0 group-hover:opacity-5 transition-opacity duration-500`}
                />

                <motion.div
                  className="text-5xl mb-5"
                  whileHover={{ scale: 1.2, rotate: [0, -10, 10, 0] }}
                  transition={{ duration: 0.4 }}
                >
                  {pillar.icon}
                </motion.div>

                <h3 className="text-2xl font-black text-pink-900 mb-3">
                  {pillar.title}
                </h3>
                <p className="text-pink-700/60 text-sm leading-relaxed font-body">
                  {pillar.description}
                </p>

                {/* Bottom accent line */}
                <div
                  className={`mt-6 h-1 w-12 mx-auto rounded-full bg-gradient-to-r ${pillar.gradient} group-hover:w-20 transition-all duration-500`}
                />
              </motion.div>
            </StaggerItem>
          ))}
        </StaggerContainer>
      </div>
    </section>
  );
}
