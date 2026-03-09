"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { ClientShell } from "./components/ClientShell";
import { CurlIcon, SparkleIcon } from "./components/Icons";

export default function NotFound() {
  return (
    <ClientShell>
      <section className="relative mesh-gradient min-h-screen flex items-center overflow-hidden noise-overlay">
        <div className="aurora" />

        <motion.div
          className="absolute top-20 right-[15%]"
          animate={{ y: [-10, 15, -10], rotate: [0, 360] }}
          transition={{ duration: 7, repeat: Infinity }}
        >
          <SparkleIcon className="w-8 h-8 text-gold opacity-40" />
        </motion.div>

        <div className="relative max-w-2xl mx-auto px-4 text-center z-10">
          <motion.div
            initial={{ scale: 0, rotate: -180 }}
            animate={{ scale: 1, rotate: 0 }}
            transition={{ duration: 0.8, ease: [0.23, 1, 0.32, 1] }}
          >
            <CurlIcon className="w-24 h-24 text-white/30 mx-auto mb-6" />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.7 }}
          >
            <h1 className="text-8xl md:text-9xl font-black text-white/20 mb-2">
              404
            </h1>
            <h2 className="text-3xl md:text-4xl font-black text-white mb-4">
              This curl got <span className="text-gradient-gold">tangled</span>
            </h2>
            <p className="text-white/60 text-lg mb-10 max-w-md mx-auto">
              The page you&apos;re looking for doesn&apos;t exist. Maybe it&apos;s having a bad hair day.
            </p>
          </motion.div>

          <motion.div
            className="flex flex-col sm:flex-row items-center justify-center gap-4"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6, duration: 0.6 }}
          >
            <Link
              href="/"
              className="bg-white text-pink-600 px-8 py-3.5 rounded-full font-bold shadow-xl shimmer glow-pulse inline-block"
            >
              Go Home
            </Link>
            <Link
              href="/episodes"
              className="glass text-white px-8 py-3.5 rounded-full font-bold hover:bg-white/15 transition-colors inline-block"
            >
              Browse Episodes
            </Link>
          </motion.div>
        </div>
      </section>
    </ClientShell>
  );
}
