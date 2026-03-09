"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import Link from "next/link";
import { CurlIcon } from "./Icons";

export function Navbar() {
  const { scrollY } = useScroll();
  const bgOpacity = useTransform(scrollY, [0, 100], [0, 0.85]);
  const borderOpacity = useTransform(scrollY, [0, 100], [0, 1]);

  return (
    <motion.nav
      className="fixed top-0 w-full z-50"
      style={{
        backgroundColor: useTransform(
          bgOpacity,
          (v) => `rgba(255, 255, 255, ${v})`
        ),
        backdropFilter: "blur(20px) saturate(180%)",
        WebkitBackdropFilter: "blur(20px) saturate(180%)",
        borderBottom: useTransform(
          borderOpacity,
          (v) => `1px solid rgba(255, 182, 211, ${v * 0.5})`
        ),
      }}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <motion.div
            className="flex items-center gap-2"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <CurlIcon className="w-8 h-8 text-pink-500" />
            <span className="text-xl font-bold text-gradient-pink">
              Curly Hair Collective
            </span>
          </motion.div>

          <div className="hidden md:flex items-center gap-8">
            {["Episodes", "About", "Community"].map((item, i) => (
              <motion.div
                key={item}
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.1 * i + 0.3 }}
              >
                <Link
                  href={`#${item.toLowerCase()}`}
                  className="text-pink-700 hover:text-pink-500 transition-colors font-medium relative group"
                >
                  {item}
                  <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-pink-400 group-hover:w-full transition-all duration-300" />
                </Link>
              </motion.div>
            ))}
            <motion.a
              href="#listen"
              className="gradient-pink text-white px-5 py-2 rounded-full font-semibold shadow-lg shadow-pink-300/50 relative overflow-hidden"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.6 }}
            >
              <span className="relative z-10">Listen Now</span>
              <motion.div
                className="absolute inset-0 bg-white/20"
                initial={{ x: "-100%" }}
                whileHover={{ x: "100%" }}
                transition={{ duration: 0.5 }}
              />
            </motion.a>
          </div>

          <div className="md:hidden">
            <a
              href="#listen"
              className="gradient-pink text-white px-4 py-2 rounded-full text-sm font-semibold"
            >
              Listen
            </a>
          </div>
        </div>
      </div>
    </motion.nav>
  );
}
