"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useState, useEffect } from "react";
import Image from "next/image";

export function LoadingScreen() {
  const [loading, setLoading] = useState(true);
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(interval);
          return 100;
        }
        return prev + Math.random() * 15 + 5;
      });
    }, 200);

    const timer = setTimeout(() => setLoading(false), 2200);
    return () => {
      clearTimeout(timer);
      clearInterval(interval);
    };
  }, []);

  return (
    <AnimatePresence>
      {loading && (
        <motion.div
          className="fixed inset-0 z-[100] flex items-center justify-center overflow-hidden"
          exit={{ opacity: 0 }}
          transition={{ duration: 0.8, ease: [0.23, 1, 0.32, 1] }}
        >
          {/* Warm cream/blush background */}
          <div
            className="absolute inset-0"
            style={{
              background:
                "linear-gradient(160deg, #FFFBF5 0%, #FDF2F8 40%, #FCE7F3 70%, #FFFBF5 100%)",
            }}
          />

          {/* Soft radial overlay */}
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,transparent_30%,rgba(253,242,248,0.6)_100%)]" />

          {/* Floating orbs — soft and muted */}
          <motion.div
            className="absolute w-64 h-64 rounded-full bg-blush/15 blur-3xl"
            animate={{
              x: [0, 60, -30, 0],
              y: [0, -40, 20, 0],
              scale: [1, 1.2, 0.9, 1],
            }}
            transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
            style={{ top: "15%", left: "20%" }}
          />
          <motion.div
            className="absolute w-48 h-48 rounded-full bg-gold-light/20 blur-3xl"
            animate={{
              x: [0, -40, 30, 0],
              y: [0, 30, -20, 0],
              scale: [1, 0.8, 1.1, 1],
            }}
            transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
            style={{ bottom: "20%", right: "15%" }}
          />

          <div className="relative text-center z-10">
            {/* Logo with entrance animation */}
            <motion.div
              initial={{ opacity: 0, scale: 0.5, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              transition={{
                duration: 0.8,
                ease: [0.23, 1, 0.32, 1],
              }}
              className="mb-8"
            >
              <motion.div
                animate={{ rotate: [0, 5, -5, 0] }}
                transition={{
                  duration: 4,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
              >
                <Image
                  src="/images/logo.png"
                  alt="Curlie Girlie Collective"
                  width={320}
                  height={80}
                  className="h-16 md:h-20 w-auto mx-auto drop-shadow-lg"
                  priority
                />
              </motion.div>
            </motion.div>

            {/* Tagline */}
            <motion.p
              className="text-gray-400 text-sm tracking-[0.2em] uppercase mt-4 mb-10"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.5, duration: 0.6 }}
            >
              Faith &middot; Hair &middot; Becoming
            </motion.p>

            {/* Premium loading bar */}
            <motion.div
              className="w-56 mx-auto"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.5 }}
            >
              <div className="h-[2px] bg-gray-200 rounded-full overflow-hidden">
                <motion.div
                  className="h-full rounded-full"
                  style={{
                    background:
                      "linear-gradient(90deg, #D4AF37, #F5E6B8, #D4AF37)",
                    backgroundSize: "200% 100%",
                    width: `${Math.min(progress, 100)}%`,
                  }}
                  animate={{
                    backgroundPosition: ["0% 0%", "200% 0%"],
                  }}
                  transition={{
                    duration: 1.5,
                    repeat: Infinity,
                    ease: "linear",
                  }}
                />
              </div>
            </motion.div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
