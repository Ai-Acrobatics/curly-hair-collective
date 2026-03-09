"use client";

import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import Image from "next/image";
import { motion } from "framer-motion";
import { ClientShell } from "../components/ClientShell";
import { PageHeader } from "../components/PageHeader";
import { FooterSection } from "../sections/Footer";
import { FadeInUp } from "../components/FramerAnimations";
import { SparkleIcon } from "../components/Icons";
import { useCart } from "../context/CartContext";

export function CheckoutClient() {
  const router = useRouter();
  const { items, cartTotal, updateQuantity, removeFromCart } = useCart();
  const [isLoading, setIsLoading] = useState(false);
  const [mounted, setMounted] = useState(false);

  const [form, setForm] = useState({
    name: "",
    email: "",
    address: "",
    city: "",
    state: "",
    zip: "",
  });

  useEffect(() => {
    setMounted(true);
  }, []);

  useEffect(() => {
    if (mounted && items.length === 0) {
      router.push("/merch");
    }
  }, [mounted, items.length, router]);

  if (!mounted || items.length === 0) {
    return null;
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);

    try {
      const res = await fetch("/api/checkout", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          items: items.map((item) => ({
            name: item.name,
            price: item.price,
            quantity: item.quantity,
            size: item.size,
          })),
          shipping: form,
        }),
      });

      const data = await res.json();

      if (data.url) {
        window.location.href = data.url;
      } else {
        alert("Something went wrong. Please try again.");
        setIsLoading(false);
      }
    } catch {
      alert("Something went wrong. Please try again.");
      setIsLoading(false);
    }
  };

  const shipping = cartTotal >= 50 ? 0 : 5.99;
  const orderTotal = cartTotal + shipping;

  return (
    <ClientShell>
      <PageHeader
        badge="Checkout"
        title="Complete Your"
        titleAccent="Order"
        subtitle="Review your items and enter shipping details to place your order."
      />

      <section className="py-20 bg-pink-50">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <form onSubmit={handleSubmit}>
            <div className="grid grid-cols-1 lg:grid-cols-5 gap-8">
              {/* Order Summary — left column */}
              <div className="lg:col-span-3">
                <FadeInUp>
                  <div className="bg-white border border-pink-100 rounded-2xl p-6 mb-8">
                    <div className="flex items-center gap-2 mb-6">
                      <span className="inline-flex items-center gap-2 bg-pink-50 text-pink-500 font-semibold uppercase tracking-[0.2em] text-xs px-4 py-1.5 rounded-full border border-pink-100">
                        <SparkleIcon className="w-3 h-3" />
                        Order Summary
                      </span>
                    </div>

                    <div className="space-y-4">
                      {items.map((item) => (
                        <div
                          key={`${item.id}-${item.size}`}
                          className="flex items-center gap-4 p-4 rounded-xl bg-pink-50/50 border border-pink-50"
                        >
                          {/* Thumbnail */}
                          <div
                            className={`w-16 h-16 rounded-xl overflow-hidden flex-shrink-0 relative ${
                              item.image
                                ? "bg-pink-50"
                                : "bg-gradient-to-br from-pink-300 to-pink-500"
                            }`}
                          >
                            {item.image ? (
                              <Image
                                src={item.image}
                                alt={item.name}
                                fill
                                className="object-cover"
                                sizes="64px"
                              />
                            ) : (
                              <div className="w-full h-full flex items-center justify-center">
                                <SparkleIcon className="w-6 h-6 text-white/30" />
                              </div>
                            )}
                          </div>

                          {/* Details */}
                          <div className="flex-1 min-w-0">
                            <h4 className="text-sm font-bold text-pink-900 truncate">
                              {item.name}
                            </h4>
                            {item.size && (
                              <p className="text-xs text-pink-400 mt-0.5">
                                Size: {item.size}
                              </p>
                            )}
                            <p className="text-sm font-bold text-gradient-pink mt-1">
                              ${item.price.toFixed(2)}
                            </p>
                          </div>

                          {/* Quantity controls */}
                          <div className="flex items-center gap-2">
                            <button
                              type="button"
                              onClick={() =>
                                updateQuantity(
                                  item.id,
                                  item.size,
                                  item.quantity - 1
                                )
                              }
                              className="w-7 h-7 rounded-full border border-pink-200 text-pink-500 flex items-center justify-center text-sm font-bold hover:bg-pink-50 transition-colors"
                            >
                              -
                            </button>
                            <span className="w-6 text-center text-sm font-bold text-pink-900">
                              {item.quantity}
                            </span>
                            <button
                              type="button"
                              onClick={() =>
                                updateQuantity(
                                  item.id,
                                  item.size,
                                  item.quantity + 1
                                )
                              }
                              className="w-7 h-7 rounded-full border border-pink-200 text-pink-500 flex items-center justify-center text-sm font-bold hover:bg-pink-50 transition-colors"
                            >
                              +
                            </button>
                          </div>

                          {/* Remove */}
                          <button
                            type="button"
                            onClick={() =>
                              removeFromCart(item.id, item.size)
                            }
                            className="text-pink-300 hover:text-pink-500 transition-colors text-xs font-semibold"
                          >
                            Remove
                          </button>
                        </div>
                      ))}
                    </div>
                  </div>
                </FadeInUp>

                {/* Shipping Form */}
                <FadeInUp delay={0.1}>
                  <div className="bg-white border border-pink-100 rounded-2xl p-6">
                    <div className="flex items-center gap-2 mb-6">
                      <span className="inline-flex items-center gap-2 bg-pink-50 text-pink-500 font-semibold uppercase tracking-[0.2em] text-xs px-4 py-1.5 rounded-full border border-pink-100">
                        <SparkleIcon className="w-3 h-3" />
                        Shipping Info
                      </span>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div className="sm:col-span-2">
                        <label className="block text-xs font-bold text-pink-900 mb-1.5">
                          Full Name
                        </label>
                        <input
                          type="text"
                          name="name"
                          value={form.name}
                          onChange={handleChange}
                          required
                          className="w-full px-4 py-3 rounded-xl border border-pink-100 text-pink-900 placeholder:text-pink-300 focus:outline-none focus:ring-2 focus:ring-pink-300 bg-pink-50/30 text-sm"
                          placeholder="Jane Doe"
                        />
                      </div>
                      <div className="sm:col-span-2">
                        <label className="block text-xs font-bold text-pink-900 mb-1.5">
                          Email
                        </label>
                        <input
                          type="email"
                          name="email"
                          value={form.email}
                          onChange={handleChange}
                          required
                          className="w-full px-4 py-3 rounded-xl border border-pink-100 text-pink-900 placeholder:text-pink-300 focus:outline-none focus:ring-2 focus:ring-pink-300 bg-pink-50/30 text-sm"
                          placeholder="jane@example.com"
                        />
                      </div>
                      <div className="sm:col-span-2">
                        <label className="block text-xs font-bold text-pink-900 mb-1.5">
                          Address
                        </label>
                        <input
                          type="text"
                          name="address"
                          value={form.address}
                          onChange={handleChange}
                          required
                          className="w-full px-4 py-3 rounded-xl border border-pink-100 text-pink-900 placeholder:text-pink-300 focus:outline-none focus:ring-2 focus:ring-pink-300 bg-pink-50/30 text-sm"
                          placeholder="123 Main St"
                        />
                      </div>
                      <div>
                        <label className="block text-xs font-bold text-pink-900 mb-1.5">
                          City
                        </label>
                        <input
                          type="text"
                          name="city"
                          value={form.city}
                          onChange={handleChange}
                          required
                          className="w-full px-4 py-3 rounded-xl border border-pink-100 text-pink-900 placeholder:text-pink-300 focus:outline-none focus:ring-2 focus:ring-pink-300 bg-pink-50/30 text-sm"
                          placeholder="Los Angeles"
                        />
                      </div>
                      <div className="grid grid-cols-2 gap-4">
                        <div>
                          <label className="block text-xs font-bold text-pink-900 mb-1.5">
                            State
                          </label>
                          <input
                            type="text"
                            name="state"
                            value={form.state}
                            onChange={handleChange}
                            required
                            className="w-full px-4 py-3 rounded-xl border border-pink-100 text-pink-900 placeholder:text-pink-300 focus:outline-none focus:ring-2 focus:ring-pink-300 bg-pink-50/30 text-sm"
                            placeholder="CA"
                          />
                        </div>
                        <div>
                          <label className="block text-xs font-bold text-pink-900 mb-1.5">
                            ZIP
                          </label>
                          <input
                            type="text"
                            name="zip"
                            value={form.zip}
                            onChange={handleChange}
                            required
                            className="w-full px-4 py-3 rounded-xl border border-pink-100 text-pink-900 placeholder:text-pink-300 focus:outline-none focus:ring-2 focus:ring-pink-300 bg-pink-50/30 text-sm"
                            placeholder="90001"
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                </FadeInUp>
              </div>

              {/* Order Total — right column */}
              <div className="lg:col-span-2">
                <FadeInUp delay={0.15}>
                  <div className="bg-white border border-pink-100 rounded-2xl p-6 sticky top-28">
                    <div className="flex items-center gap-2 mb-6">
                      <span className="inline-flex items-center gap-2 bg-pink-50 text-pink-500 font-semibold uppercase tracking-[0.2em] text-xs px-4 py-1.5 rounded-full border border-pink-100">
                        <SparkleIcon className="w-3 h-3" />
                        Total
                      </span>
                    </div>

                    <div className="space-y-3 mb-6">
                      <div className="flex justify-between text-sm">
                        <span className="text-pink-700/60">Subtotal</span>
                        <span className="font-bold text-pink-900">
                          ${cartTotal.toFixed(2)}
                        </span>
                      </div>
                      <div className="flex justify-between text-sm">
                        <span className="text-pink-700/60">Shipping</span>
                        <span className="font-bold text-pink-900">
                          {shipping === 0 ? (
                            <span className="text-green-600">FREE</span>
                          ) : (
                            `$${shipping.toFixed(2)}`
                          )}
                        </span>
                      </div>
                      {shipping > 0 && (
                        <p className="text-xs text-pink-400">
                          Free shipping on orders $50+
                        </p>
                      )}
                      <div className="border-t border-pink-100 pt-3">
                        <div className="flex justify-between">
                          <span className="font-bold text-pink-900">
                            Order Total
                          </span>
                          <span className="text-xl font-black text-gradient-pink">
                            ${orderTotal.toFixed(2)}
                          </span>
                        </div>
                      </div>
                    </div>

                    <motion.button
                      type="submit"
                      disabled={isLoading}
                      className="w-full gradient-pink text-white py-4 rounded-full font-bold text-lg shadow-xl shadow-pink-300/40 shimmer glow-pulse disabled:opacity-50 disabled:cursor-not-allowed"
                      whileHover={{ scale: isLoading ? 1 : 1.02 }}
                      whileTap={{ scale: isLoading ? 1 : 0.98 }}
                    >
                      {isLoading ? "Processing..." : "Place Order"}
                    </motion.button>

                    <div className="mt-4 grid grid-cols-3 gap-2">
                      {[
                        { label: "Secure", detail: "SSL Encrypted" },
                        { label: "Free Ship", detail: "$50+" },
                        { label: "Returns", detail: "30-day" },
                      ].map((perk) => (
                        <div
                          key={perk.label}
                          className="text-center p-2 rounded-lg bg-pink-50/50"
                        >
                          <SparkleIcon className="w-3 h-3 text-gold mx-auto mb-0.5" />
                          <p className="text-[10px] font-bold text-pink-900">
                            {perk.label}
                          </p>
                          <p className="text-[9px] text-pink-400">
                            {perk.detail}
                          </p>
                        </div>
                      ))}
                    </div>
                  </div>
                </FadeInUp>
              </div>
            </div>
          </form>
        </div>
      </section>

      <FooterSection />
    </ClientShell>
  );
}
