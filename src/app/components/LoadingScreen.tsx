"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useState, useEffect } from "react";
import Image from "next/image";
import { SparkleIcon } from "./Icons";

export function LoadingScreen() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 2000);
    return () => clearTimeout(timer);
  }, []);

  return (
    <AnimatePresence>
      {loading && (
        <motion.div
          className="fixed inset-0 z-[100] gradient-pink flex items-center justify-center"
          exit={{ opacity: 0, scale: 1.1 }}
          transition={{ duration: 0.6, ease: [0.23, 1, 0.32, 1] }}
        >
          <div className="text-center">
            {/* Animated logo */}
            <motion.div
              animate={{
                rotate: [0, 10, -10, 0],
                scale: [1, 1.1, 1],
              }}
              transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
              className="mb-6"
            >
              <Image
                src="/images/logo.png"
                alt="Curly Hair Collective"
                width={80}
                height={80}
                className="w-20 h-20 mx-auto"
                priority
              />
            </motion.div>

            {/* Brand name */}
            <motion.h1
              className="text-3xl font-black text-white tracking-tight"
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
            >
              Curly Hair Collective
            </motion.h1>

            {/* Loading bar */}
            <div className="mt-6 w-48 h-1 bg-white/20 rounded-full mx-auto overflow-hidden">
              <motion.div
                className="h-full bg-gold rounded-full"
                initial={{ width: "0%" }}
                animate={{ width: "100%" }}
                transition={{ duration: 1.8, ease: "easeInOut" }}
              />
            </div>

            {/* Sparkles */}
            <motion.div
              className="absolute top-1/4 left-1/4"
              animate={{ scale: [0, 1, 0], rotate: 360 }}
              transition={{ duration: 2, repeat: Infinity, delay: 0.3 }}
            >
              <SparkleIcon className="w-4 h-4 text-gold/50" />
            </motion.div>
            <motion.div
              className="absolute bottom-1/3 right-1/3"
              animate={{ scale: [0, 1, 0], rotate: -360 }}
              transition={{ duration: 2, repeat: Infinity, delay: 0.8 }}
            >
              <SparkleIcon className="w-6 h-6 text-white/30" />
            </motion.div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
