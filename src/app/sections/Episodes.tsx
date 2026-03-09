"use client";

import { motion } from "framer-motion";
import {
  FadeInUp,
  StaggerContainer,
  StaggerItem,
  TiltCard,
} from "../components/FramerAnimations";
import { PlayIcon } from "../components/Icons";

const episodes = [
  {
    id: 1,
    title: "Embracing Your Natural Texture",
    guest: "Nikki Walton",
    description:
      "The founder of CurlyNikki.com shares her journey from relaxed to natural and how self-acceptance changed everything.",
    date: "Coming Soon",
    duration: "45 min",
    gradient: "from-pink-400 via-pink-500 to-rose-600",
  },
  {
    id: 2,
    title: "Curl Care for Every Season",
    guest: "Dr. Kari Williams",
    description:
      "A trichologist breaks down how weather, humidity, and lifestyle affect your curls — plus her holy grail product picks.",
    date: "Coming Soon",
    duration: "38 min",
    gradient: "from-pink-500 via-fuchsia-500 to-purple-500",
  },
  {
    id: 3,
    title: "Big Hair, Bigger Dreams",
    guest: "Manes by Mell",
    description:
      "From YouTube sensation to curl queen empire — how Mell built a brand by keeping it real about curly hair struggles.",
    date: "Coming Soon",
    duration: "52 min",
    gradient: "from-rose-400 via-pink-500 to-pink-600",
  },
  {
    id: 4,
    title: "The Politics of Natural Hair",
    guest: "Adjoa B. Asamoah",
    description:
      "The advocate behind the CROWN Act discusses hair discrimination, legislation, and why your curls are a civil rights issue.",
    date: "Coming Soon",
    duration: "41 min",
    gradient: "from-fuchsia-400 via-pink-500 to-rose-500",
  },
  {
    id: 5,
    title: "Curly Hair in the Workplace",
    guest: "Candice Carty-Williams",
    description:
      "Bestselling author on navigating corporate spaces with natural hair and why representation matters at every level.",
    date: "Coming Soon",
    duration: "36 min",
    gradient: "from-pink-400 via-rose-500 to-red-400",
  },
  {
    id: 6,
    title: "Raising Curly Kids with Confidence",
    guest: "Kia Stephens",
    description:
      "A mother and educator shares tips for teaching kids to love their curls from day one — wash day routines included.",
    date: "Coming Soon",
    duration: "44 min",
    gradient: "from-rose-500 via-pink-500 to-fuchsia-500",
  },
];

export function EpisodesSection() {
  return (
    <section id="episodes" className="py-24 bg-pink-50 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <FadeInUp className="text-center mb-16">
          <span className="text-pink-400 font-semibold uppercase tracking-[0.25em] text-sm">
            Listen & Learn
          </span>
          <h2
            className="text-4xl md:text-6xl font-black text-pink-900 mt-3"
            data-gsap="heading"
          >
            Latest Episodes
          </h2>
          <p className="text-pink-600/80 mt-5 max-w-xl mx-auto text-lg">
            Real conversations with real curly queens. New episodes dropping
            soon.
          </p>
        </FadeInUp>

        <StaggerContainer
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          staggerDelay={0.12}
        >
          {episodes.map((episode) => (
            <StaggerItem key={episode.id}>
              <TiltCard className="group">
                <div className="bg-white rounded-2xl overflow-hidden shadow-lg shadow-pink-200/40 magnetic-card gradient-border">
                  {/* Episode art */}
                  <div
                    className={`h-52 bg-gradient-to-br ${episode.gradient} relative overflow-hidden`}
                  >
                    {/* Animated pattern overlay */}
                    <div className="absolute inset-0 opacity-10">
                      <div
                        className="absolute inset-0"
                        style={{
                          backgroundImage: `radial-gradient(circle at 20% 80%, white 1px, transparent 1px),
                          radial-gradient(circle at 80% 20%, white 1px, transparent 1px),
                          radial-gradient(circle at 50% 50%, white 1px, transparent 1px)`,
                          backgroundSize: "40px 40px, 60px 60px, 80px 80px",
                        }}
                      />
                    </div>

                    <div className="absolute inset-0 flex items-center justify-center">
                      <motion.span
                        className="text-7xl font-black text-white/15 select-none"
                        whileHover={{ scale: 1.1, rotate: -5 }}
                      >
                        {String(episode.id).padStart(2, "0")}
                      </motion.span>
                    </div>

                    <div className="absolute bottom-3 left-3 flex items-center gap-2">
                      <span className="glass text-white text-xs font-medium px-3 py-1 rounded-full">
                        {episode.duration}
                      </span>
                      <span className="bg-gold/90 text-pink-900 text-xs font-bold px-3 py-1 rounded-full glow-gold">
                        {episode.date}
                      </span>
                    </div>

                    {/* Play button */}
                    <motion.div
                      className="absolute inset-0 flex items-center justify-center"
                      initial={{ opacity: 0 }}
                      whileHover={{ opacity: 1 }}
                    >
                      <motion.div
                        className="w-16 h-16 bg-white rounded-full flex items-center justify-center shadow-2xl cursor-pointer"
                        whileHover={{ scale: 1.15 }}
                        whileTap={{ scale: 0.9 }}
                      >
                        <PlayIcon className="w-7 h-7 text-pink-500 ml-1" />
                      </motion.div>
                    </motion.div>
                  </div>

                  <div className="p-6">
                    <p className="text-pink-400 text-sm font-semibold mb-1">
                      with {episode.guest}
                    </p>
                    <h3 className="text-xl font-bold text-pink-900 mb-2 group-hover:text-gradient-pink transition-colors">
                      {episode.title}
                    </h3>
                    <p className="text-pink-700/60 text-sm leading-relaxed">
                      {episode.description}
                    </p>
                  </div>
                </div>
              </TiltCard>
            </StaggerItem>
          ))}
        </StaggerContainer>
      </div>
    </section>
  );
}
