"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import { FadeInUp } from "../components/FramerAnimations";
import { SparkleIcon } from "../components/Icons";

const pillars = [
  {
    icon: "🙏",
    title: "Faith",
    description:
      "Real conversations about coming to God, growing in faith, and finding purpose — no matter where you start.",
    gradient: "from-pink-400 to-rose-500",
    number: "01",
  },
  {
    icon: "💇‍♀️",
    title: "Hair",
    description:
      "Expert education on wigs, toppers, hair replacement systems, and embracing every texture and journey.",
    gradient: "from-fuchsia-400 to-pink-500",
    number: "02",
  },
  {
    icon: "🦋",
    title: "Identity",
    description:
      "Who you are now vs. who you're becoming. Self-love, confidence, and reclaiming your crown.",
    gradient: "from-rose-400 to-pink-500",
    number: "03",
  },
  {
    icon: "👯‍♀️",
    title: "Community",
    description:
      "Building a sisterhood of women who uplift, encourage, and hold space for each other.",
    gradient: "from-pink-500 to-fuchsia-500",
    number: "04",
  },
];

export function PillarsSection() {
  const sectionRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"],
  });
  const backgroundY = useTransform(scrollYProgress, [0, 1], ["0%", "30%"]);

  return (
    <section ref={sectionRef} className="py-32 bg-white relative overflow-hidden">
      {/* Parallax background elements */}
      <motion.div
        className="absolute top-0 right-0 w-[600px] h-[600px] rounded-full bg-pink-100/30 blur-[120px]"
        style={{ y: backgroundY }}
      />
      <motion.div
        className="absolute bottom-0 left-0 w-[400px] h-[400px] rounded-full bg-gold/5 blur-[100px]"
        style={{ y: backgroundY }}
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <FadeInUp className="text-center mb-20">
          <span className="inline-flex items-center gap-2 bg-pink-50 text-pink-500 font-semibold uppercase tracking-[0.2em] text-xs px-5 py-2 rounded-full border border-pink-100 font-body">
            <SparkleIcon className="w-3 h-3 text-gold" />
            What We Talk About
          </span>
          <h2 className="text-4xl md:text-6xl lg:text-7xl font-black text-pink-900 mt-6 tracking-tight">
            Four Pillars.
            <br />
            <span className="text-gradient-pink">One Mission.</span>
          </h2>
          <p className="text-pink-600/60 mt-6 max-w-2xl mx-auto text-lg font-body leading-relaxed">
            Every episode is rooted in faith, hair education, identity, and
            community. Together, they tell the full story.
          </p>
        </FadeInUp>

        {/* Bento grid layout */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
          {pillars.map((pillar, i) => (
            <FadeInUp key={pillar.title} delay={i * 0.1}>
              <motion.div
                className={`relative p-8 lg:p-10 rounded-3xl bg-gradient-to-br from-white to-pink-50/50 border border-pink-100/60 group cursor-default overflow-hidden ${
                  i === 0 ? "md:row-span-1" : ""
                }`}
                whileHover={{
                  y: -4,
                  borderColor: "rgba(244, 114, 182, 0.3)",
                }}
                transition={{ duration: 0.4, ease: [0.23, 1, 0.32, 1] }}
              >
                {/* Large faded number */}
                <span className="absolute top-4 right-6 text-[5rem] font-black text-pink-100/40 leading-none select-none">
                  {pillar.number}
                </span>

                {/* Hover gradient overlay */}
                <motion.div
                  className={`absolute inset-0 bg-gradient-to-br ${pillar.gradient} opacity-0 group-hover:opacity-[0.03] transition-opacity duration-500`}
                />

                <div className="relative z-10 flex flex-col h-full">
                  <div className="flex items-start gap-5 mb-4">
                    <motion.div
                      className="text-4xl flex-shrink-0"
                      whileHover={{ scale: 1.2, rotate: [0, -10, 10, 0] }}
                      transition={{ duration: 0.4 }}
                    >
                      {pillar.icon}
                    </motion.div>
                    <div>
                      <h3 className="text-2xl font-black text-pink-900 mb-2">
                        {pillar.title}
                      </h3>
                      <p className="text-pink-700/55 text-sm leading-relaxed font-body">
                        {pillar.description}
                      </p>
                    </div>
                  </div>

                  {/* Bottom accent line */}
                  <div className="mt-auto pt-6">
                    <div
                      className={`h-0.5 w-16 rounded-full bg-gradient-to-r ${pillar.gradient} group-hover:w-full transition-all duration-700`}
                    />
                  </div>
                </div>
              </motion.div>
            </FadeInUp>
          ))}
        </div>
      </div>
    </section>
  );
}
