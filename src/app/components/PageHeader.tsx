"use client";

import { motion } from "framer-motion";
import { SparkleIcon } from "./Icons";

export function PageHeader({
  badge,
  title,
  titleAccent,
  subtitle,
}: {
  badge: string;
  title: string;
  titleAccent?: string;
  subtitle: string;
}) {
  return (
    <section className="relative mesh-gradient pt-28 pb-20 overflow-hidden noise-overlay">
      <div className="aurora" />

      <motion.div
        className="absolute top-20 left-[10%]"
        animate={{ y: [-10, 10, -10], rotate: [0, 360] }}
        transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
      >
        <SparkleIcon className="w-5 h-5 text-gold opacity-50" />
      </motion.div>
      <motion.div
        className="absolute top-32 right-[12%]"
        animate={{ y: [8, -12, 8], rotate: [0, -180, -360] }}
        transition={{ duration: 7, repeat: Infinity, ease: "easeInOut" }}
      >
        <SparkleIcon className="w-7 h-7 text-gold opacity-30" />
      </motion.div>

      <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center z-10">
        <motion.div
          className="inline-flex items-center gap-2 glass px-4 py-2 rounded-full mb-6"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <SparkleIcon className="w-3.5 h-3.5 text-gold" />
          <span className="text-white/80 text-xs font-medium tracking-wide uppercase">
            {badge}
          </span>
          <SparkleIcon className="w-3.5 h-3.5 text-gold" />
        </motion.div>

        <motion.h1
          className="text-4xl sm:text-5xl md:text-6xl font-black text-white mb-4 leading-tight"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.1, ease: [0.23, 1, 0.32, 1] }}
        >
          {title}
          {titleAccent && (
            <>
              <br />
              <span className="text-gradient-gold">{titleAccent}</span>
            </>
          )}
        </motion.h1>

        <motion.p
          className="text-lg text-white/70 max-w-2xl mx-auto"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.3 }}
        >
          {subtitle}
        </motion.p>
      </div>

      <div className="absolute bottom-0 left-0 right-0 z-10">
        <svg viewBox="0 0 1440 80" fill="none" className="w-full">
          <path
            d="M0 40C360 80 720 0 1080 40C1260 60 1380 50 1440 40V80H0V40Z"
            fill="#FFF0F5"
          />
        </svg>
      </div>
    </section>
  );
}
