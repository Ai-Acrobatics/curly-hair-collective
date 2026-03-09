"use client";

import { motion } from "framer-motion";
import { MagneticButton } from "../components/GsapAnimations";
import { SparkleIcon } from "../components/Icons";
import { RotatingBadge } from "../components/FramerAnimations";

export function HeroSection() {
  return (
    <section
      className="relative mesh-gradient min-h-screen flex items-center overflow-hidden noise-overlay"
      data-gsap="hero-section"
    >
      {/* Aurora effect */}
      <div className="aurora" />

      {/* Floating decorative sparkles */}
      <motion.div
        className="absolute top-20 left-[10%]"
        animate={{ y: [-10, 10, -10], rotate: [0, 180, 360] }}
        transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
      >
        <SparkleIcon className="w-6 h-6 text-gold opacity-60" />
      </motion.div>
      <motion.div
        className="absolute top-40 right-[15%]"
        animate={{ y: [10, -15, 10], rotate: [0, -180, -360] }}
        transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
      >
        <SparkleIcon className="w-10 h-10 text-gold opacity-40" />
      </motion.div>
      <motion.div
        className="absolute bottom-32 left-[25%]"
        animate={{ y: [-8, 12, -8], scale: [1, 1.3, 1] }}
        transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
      >
        <SparkleIcon className="w-5 h-5 text-white opacity-50" />
      </motion.div>
      <motion.div
        className="absolute top-[55%] right-[8%]"
        animate={{ y: [5, -20, 5], rotate: [0, 90, 0] }}
        transition={{ duration: 7, repeat: Infinity, ease: "easeInOut" }}
      >
        <SparkleIcon className="w-8 h-8 text-gold opacity-30" />
      </motion.div>

      {/* Large glowing orbs */}
      <motion.div
        className="absolute -bottom-40 -left-40 w-[500px] h-[500px] rounded-full bg-pink-400/15 blur-[100px]"
        animate={{ scale: [1, 1.2, 1], x: [0, 30, 0] }}
        transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
      />
      <motion.div
        className="absolute -top-40 -right-40 w-[600px] h-[600px] rounded-full bg-gold/10 blur-[120px]"
        animate={{ scale: [1.1, 1, 1.1], y: [0, 40, 0] }}
        transition={{ duration: 12, repeat: Infinity, ease: "easeInOut" }}
      />

      {/* Rotating badge — top right */}
      <div className="absolute top-28 right-8 lg:right-16 hidden lg:block">
        <RotatingBadge
          text="FAITH * HAIR * IDENTITY * BECOMING * "
          className="w-28 h-28 text-white/30"
        />
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-24 pb-16 z-10">
        <div className="text-center" data-gsap="hero-title">
          {/* Pill badge */}
          <motion.div
            className="inline-flex items-center gap-2 glass px-5 py-2.5 rounded-full mb-8"
            initial={{ opacity: 0, y: 20, scale: 0.9 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            transition={{ duration: 0.8, ease: [0.23, 1, 0.32, 1] }}
          >
            <motion.span
              animate={{ rotate: [0, 360] }}
              transition={{ duration: 3, repeat: Infinity, ease: "linear" }}
            >
              <SparkleIcon className="w-4 h-4 text-gold" />
            </motion.span>
            <span className="text-white/90 text-sm font-medium tracking-wide uppercase font-body">
              Faith. Hair. Becoming.
            </span>
            <motion.span
              animate={{ rotate: [360, 0] }}
              transition={{ duration: 3, repeat: Infinity, ease: "linear" }}
            >
              <SparkleIcon className="w-4 h-4 text-gold" />
            </motion.span>
          </motion.div>

          {/* Main title with split-text reveal */}
          <div className="overflow-hidden mb-3">
            <motion.h1
              className="text-5xl sm:text-7xl md:text-[6.5rem] font-black text-white tracking-tight leading-[0.95]"
              initial={{ y: "100%" }}
              animate={{ y: 0 }}
              transition={{
                duration: 1,
                delay: 0.2,
                ease: [0.23, 1, 0.32, 1],
              }}
            >
              Curlie Girlie
            </motion.h1>
          </div>
          <div className="overflow-hidden mb-6">
            <motion.h1
              className="text-5xl sm:text-7xl md:text-[6.5rem] font-black text-gradient-gold tracking-tight leading-[0.95]"
              initial={{ y: "100%" }}
              animate={{ y: 0 }}
              transition={{
                duration: 1,
                delay: 0.4,
                ease: [0.23, 1, 0.32, 1],
              }}
              style={{
                WebkitTextStroke: "1px rgba(255, 215, 0, 0.3)",
                textShadow: "0 0 60px rgba(255, 215, 0, 0.3)",
              }}
            >
              Collective
            </motion.h1>
          </div>

          <motion.p
            className="text-lg sm:text-xl md:text-2xl text-white/85 max-w-2xl mx-auto mb-12 leading-relaxed"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.7 }}
          >
            Two women. Real faith. Raw conversations about hair, identity, and
            following Jesus — no matter where you&apos;re starting from.
          </motion.p>

          {/* CTA buttons with magnetic effect */}
          <motion.div
            className="flex flex-col sm:flex-row items-center justify-center gap-5"
            id="listen"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.9 }}
          >
            <MagneticButton
              href="#episodes"
              className="bg-white text-pink-600 px-9 py-4 rounded-full font-bold text-lg shadow-xl shadow-pink-900/20 shimmer glow-pulse inline-block"
            >
              Browse Episodes
            </MagneticButton>
            <MagneticButton
              href="#community"
              className="glass text-white px-9 py-4 rounded-full font-bold text-lg hover:bg-white/15 transition-colors inline-block"
            >
              Join the Collective
            </MagneticButton>
          </motion.div>

          {/* Platform pills */}
          <motion.div
            className="mt-14 flex flex-wrap items-center justify-center gap-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.2, duration: 0.8 }}
          >
            <span className="text-white/50 text-sm">Coming soon to:</span>
            {["Spotify", "Apple Podcasts", "YouTube"].map((platform, i) => (
              <motion.span
                key={platform}
                className="glass text-white/80 text-sm font-medium px-4 py-1.5 rounded-full cursor-default"
                whileHover={{
                  scale: 1.1,
                  backgroundColor: "rgba(255,255,255,0.2)",
                }}
                initial={{ opacity: 0, x: -10 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 1.3 + i * 0.1 }}
              >
                {platform}
              </motion.span>
            ))}
          </motion.div>
        </div>
      </div>

      {/* Wave divider */}
      <div className="absolute bottom-0 left-0 right-0 z-10">
        <svg
          viewBox="0 0 1440 120"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="w-full"
        >
          <path
            d="M0 60C240 120 480 0 720 60C960 120 1200 0 1440 60V120H0V60Z"
            fill="#FFF0F5"
          />
        </svg>
      </div>
    </section>
  );
}
