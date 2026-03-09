"use client";

import { useMemo, useEffect } from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { ClientShell } from "../../components/ClientShell";
import { FooterSection } from "../../sections/Footer";
import { SparkleIcon } from "../../components/Icons";
import { useCart } from "../../context/CartContext";

function generateOrderNumber() {
  const chars = "ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789";
  let result = "CGC-";
  for (let i = 0; i < 8; i++) {
    result += chars.charAt(Math.floor(Math.random() * chars.length));
  }
  return result;
}

export default function CheckoutSuccessPage() {
  const { clearCart } = useCart();
  const orderNumber = useMemo(() => generateOrderNumber(), []);

  useEffect(() => {
    clearCart();
  }, [clearCart]);

  return (
    <ClientShell>
      <section className="relative bg-white pt-28 pb-20 overflow-hidden min-h-[70vh] flex items-center">
        {/* Background radial */}
        <div
          className="absolute inset-0"
          style={{
            background:
              "radial-gradient(ellipse at 50% 30%, rgba(212, 175, 55, 0.08) 0%, transparent 60%), radial-gradient(ellipse at 50% 70%, rgba(251, 182, 206, 0.1) 0%, transparent 60%)",
          }}
        />

        {/* Floating sparkles */}
        {[...Array(6)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute"
            style={{
              top: `${15 + i * 12}%`,
              left: `${10 + i * 15}%`,
            }}
            animate={{
              y: [-8, 8, -8],
              rotate: [0, 360],
              opacity: [0.15, 0.35, 0.15],
            }}
            transition={{
              duration: 4 + i,
              repeat: Infinity,
              ease: "easeInOut",
              delay: i * 0.5,
            }}
          >
            <SparkleIcon className="w-4 h-4 text-gold" />
          </motion.div>
        ))}

        <div className="relative max-w-2xl mx-auto px-4 sm:px-6 lg:px-8 text-center z-10">
          {/* Animated checkmark */}
          <motion.div
            initial={{ scale: 0, rotate: -180 }}
            animate={{ scale: 1, rotate: 0 }}
            transition={{ type: "spring", stiffness: 200, damping: 15, delay: 0.2 }}
            className="w-20 h-20 rounded-full bg-gradient-to-br from-pink-400 to-rose-500 flex items-center justify-center mx-auto mb-8 shadow-xl shadow-pink-300/40"
          >
            <svg
              className="w-10 h-10 text-white"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth={3}
            >
              <motion.path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M5 13l4 4L19 7"
                initial={{ pathLength: 0 }}
                animate={{ pathLength: 1 }}
                transition={{ duration: 0.5, delay: 0.6 }}
              />
            </svg>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            <span className="inline-flex items-center gap-2 bg-pink-50 text-pink-500 font-semibold uppercase tracking-[0.2em] text-xs px-5 py-2 rounded-full border border-pink-100 mb-6">
              <SparkleIcon className="w-3.5 h-3.5" />
              Order Confirmed
              <SparkleIcon className="w-3.5 h-3.5" />
            </span>
          </motion.div>

          <motion.h1
            className="text-4xl sm:text-5xl font-black text-pink-900 mb-4 leading-tight"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.5 }}
          >
            Thank You,{" "}
            <span className="text-gradient-pink">Queen!</span>
          </motion.h1>

          <motion.p
            className="text-lg text-pink-700/60 max-w-lg mx-auto mb-8"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.7 }}
          >
            Your order has been placed and is being prepared with love.
            You will receive a confirmation email shortly.
          </motion.p>

          <motion.div
            className="bg-white border border-pink-100 rounded-2xl p-6 mb-10 inline-block"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: 0.9 }}
          >
            <p className="text-xs font-semibold text-pink-400 uppercase tracking-wider mb-1">
              Order Number
            </p>
            <p className="text-2xl font-black text-pink-900 tracking-wider">
              {orderNumber}
            </p>
          </motion.div>

          <motion.div
            className="flex flex-col sm:flex-row gap-4 justify-center"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 1.1 }}
          >
            <Link href="/merch">
              <motion.span
                className="inline-block gradient-pink text-white px-8 py-4 rounded-full font-bold text-lg shadow-xl shadow-pink-300/40 shimmer"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                Continue Shopping
              </motion.span>
            </Link>
            <Link href="/">
              <motion.span
                className="inline-block bg-white text-pink-900 px-8 py-4 rounded-full font-bold text-lg border border-pink-100 hover:bg-pink-50 transition-colors"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                Back to Home
              </motion.span>
            </Link>
          </motion.div>
        </div>
      </section>

      <FooterSection />
    </ClientShell>
  );
}
