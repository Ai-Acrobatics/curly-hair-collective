"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { ClientShell } from "../../components/ClientShell";
import { PageHeader } from "../../components/PageHeader";
import { FooterSection } from "../../sections/Footer";
import { FadeInUp } from "../../components/FramerAnimations";
import { SparkleIcon } from "../../components/Icons";
import { useCart } from "../../context/CartContext";
import type { MerchItem } from "../../data/merch";

export function MerchDetailClient({ item }: { item: MerchItem }) {
  const { addToCart } = useCart();
  const [selectedSize, setSelectedSize] = useState<string | undefined>(
    item.sizes?.[0]
  );
  const [quantity, setQuantity] = useState(1);
  const [showAdded, setShowAdded] = useState(false);

  const handleAddToCart = () => {
    if (item.badge === "Coming Soon") return;
    if (item.sizes && !selectedSize) return;

    addToCart({
      id: item.id,
      slug: item.slug,
      name: item.name,
      price: item.price,
      quantity,
      size: selectedSize,
      image: item.image,
    });
    setShowAdded(true);
    setTimeout(() => setShowAdded(false), 2000);
  };

  return (
    <ClientShell>
      <PageHeader
        badge={item.category.replace("-", " ")}
        title={item.name}
        subtitle={`$${item.price.toFixed(2)} · ${item.category.replace("-", " ")}`}
      />

      <section className="py-20 bg-pink-50">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            {/* Product Image */}
            <FadeInUp>
              <div
                className={`aspect-square rounded-3xl relative overflow-hidden gradient-border ${item.image ? "bg-pink-50" : `bg-gradient-to-br ${item.gradient}`}`}
              >
                {item.image ? (
                  <Image
                    src={item.image}
                    alt={item.name}
                    fill
                    className="object-cover rounded-3xl"
                    sizes="(max-width: 768px) 100vw, 50vw"
                  />
                ) : (
                  <div className="absolute inset-0 flex items-center justify-center">
                    <SparkleIcon className="w-24 h-24 text-white/15" />
                  </div>
                )}
                {item.badge && (
                  <div className="absolute top-4 right-4 z-10">
                    <span className="bg-gold text-pink-900 text-sm font-bold px-4 py-1.5 rounded-full shadow-lg">
                      {item.badge}
                    </span>
                  </div>
                )}
              </div>
            </FadeInUp>

            {/* Product Info */}
            <div>
              <FadeInUp>
                <p className="text-pink-400 text-sm font-semibold uppercase tracking-wider mb-2">
                  {item.category.replace("-", " ")}
                </p>
                <h2 className="text-3xl font-black text-pink-900 mb-4">
                  {item.name}
                </h2>
                <p className="text-3xl font-black text-gradient-pink mb-6">
                  ${item.price.toFixed(2)}
                </p>
              </FadeInUp>

              <FadeInUp delay={0.1}>
                <p className="text-pink-700/65 text-lg leading-relaxed mb-8">
                  {item.description}
                </p>
              </FadeInUp>

              {/* Size Selector */}
              {item.sizes && (
                <FadeInUp delay={0.15}>
                  <div className="mb-8">
                    <p className="text-sm font-bold text-pink-900 mb-3">
                      Size
                    </p>
                    <div className="flex flex-wrap gap-2">
                      {item.sizes.map((size) => (
                        <motion.button
                          key={size}
                          onClick={() => setSelectedSize(size)}
                          className={`w-12 h-12 rounded-xl border-2 font-semibold text-sm transition-colors ${
                            selectedSize === size
                              ? "border-pink-500 bg-pink-500 text-white"
                              : "border-pink-200 text-pink-700 hover:border-pink-500 hover:bg-pink-50"
                          }`}
                          whileHover={{ scale: 1.05 }}
                          whileTap={{ scale: 0.95 }}
                        >
                          {size}
                        </motion.button>
                      ))}
                    </div>
                  </div>
                </FadeInUp>
              )}

              {/* Quantity Selector */}
              <FadeInUp delay={0.17}>
                <div className="mb-8">
                  <p className="text-sm font-bold text-pink-900 mb-3">
                    Quantity
                  </p>
                  <div className="inline-flex items-center gap-1 bg-white border border-pink-100 rounded-full p-1">
                    <motion.button
                      type="button"
                      onClick={() => setQuantity((q) => Math.max(1, q - 1))}
                      className="w-10 h-10 rounded-full flex items-center justify-center text-pink-500 font-bold text-lg hover:bg-pink-50 transition-colors"
                      whileTap={{ scale: 0.9 }}
                    >
                      -
                    </motion.button>
                    <span className="w-10 text-center text-lg font-bold text-pink-900">
                      {quantity}
                    </span>
                    <motion.button
                      type="button"
                      onClick={() => setQuantity((q) => q + 1)}
                      className="w-10 h-10 rounded-full flex items-center justify-center text-pink-500 font-bold text-lg hover:bg-pink-50 transition-colors"
                      whileTap={{ scale: 0.9 }}
                    >
                      +
                    </motion.button>
                  </div>
                </div>
              </FadeInUp>

              {/* Add to Cart Button */}
              <FadeInUp delay={0.2}>
                <div className="relative">
                  <motion.button
                    onClick={handleAddToCart}
                    className="w-full gradient-pink text-white py-4 rounded-full font-bold text-lg shadow-xl shadow-pink-300/40 shimmer glow-pulse"
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                  >
                    {item.badge === "Coming Soon"
                      ? "Join Waitlist"
                      : `Add to Cart — $${(item.price * quantity).toFixed(2)}`}
                  </motion.button>

                  {/* Added confirmation toast */}
                  <AnimatePresence>
                    {showAdded && (
                      <motion.div
                        initial={{ opacity: 0, y: 10, scale: 0.9 }}
                        animate={{ opacity: 1, y: -10, scale: 1 }}
                        exit={{ opacity: 0, y: -20, scale: 0.9 }}
                        className="absolute -top-2 left-1/2 -translate-x-1/2 -translate-y-full"
                      >
                        <div className="bg-green-500 text-white text-sm font-bold px-5 py-2.5 rounded-full shadow-lg flex items-center gap-2">
                          <svg
                            className="w-4 h-4"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                            strokeWidth={3}
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              d="M5 13l4 4L19 7"
                            />
                          </svg>
                          Added!
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>

                {/* View Cart link */}
                <AnimatePresence>
                  {showAdded && (
                    <motion.div
                      initial={{ opacity: 0, height: 0 }}
                      animate={{ opacity: 1, height: "auto" }}
                      exit={{ opacity: 0, height: 0 }}
                      className="mt-3 text-center"
                    >
                      <Link
                        href="/checkout"
                        className="text-pink-500 hover:text-pink-700 font-semibold text-sm transition-colors"
                      >
                        View Cart & Checkout &rarr;
                      </Link>
                    </motion.div>
                  )}
                </AnimatePresence>
              </FadeInUp>

              <FadeInUp delay={0.25}>
                <div className="mt-8 grid grid-cols-3 gap-4">
                  {[
                    { label: "Free Shipping", detail: "Orders $50+" },
                    { label: "Easy Returns", detail: "30-day policy" },
                    { label: "Curl Approved", detail: "By the Collective" },
                  ].map((perk) => (
                    <div
                      key={perk.label}
                      className="text-center p-3 rounded-xl bg-white shadow-sm"
                    >
                      <SparkleIcon className="w-4 h-4 text-gold mx-auto mb-1" />
                      <p className="text-xs font-bold text-pink-900">
                        {perk.label}
                      </p>
                      <p className="text-xs text-pink-400">{perk.detail}</p>
                    </div>
                  ))}
                </div>
              </FadeInUp>
            </div>
          </div>

          <FadeInUp delay={0.3}>
            <div className="text-center mt-12">
              <Link
                href="/merch"
                className="inline-flex items-center gap-2 text-pink-500 hover:text-pink-700 font-semibold transition-colors"
              >
                <span>&larr;</span> All Products
              </Link>
            </div>
          </FadeInUp>
        </div>
      </section>

      <FooterSection />
    </ClientShell>
  );
}
