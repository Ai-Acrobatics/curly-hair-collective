"use client";

import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { useCart } from "../context/CartContext";
import { SparkleIcon } from "../components/Icons";

export function CartDrawer() {
  const { items, isOpen, closeCart, removeFromCart, updateQuantity, cartTotal } =
    useCart();

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          className="fixed inset-0 z-[60]"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
        >
          {/* Backdrop */}
          <div
            className="absolute inset-0 bg-black/30 backdrop-blur-sm"
            onClick={closeCart}
          />

          {/* Drawer */}
          <motion.aside
            className="absolute right-0 top-0 h-full w-full max-w-md bg-white shadow-2xl flex flex-col border-l border-pink-100"
            initial={{ x: "100%" }}
            animate={{ x: 0 }}
            exit={{ x: "100%" }}
            transition={{ type: "spring", damping: 25, stiffness: 200 }}
          >
            {/* Header */}
            <div className="flex items-center justify-between px-6 py-4 border-b border-pink-100">
              <h2 className="text-lg font-bold text-pink-900">Your Cart</h2>
              <button
                onClick={closeCart}
                className="text-gray-400 hover:text-gray-600 transition-colors p-1"
                aria-label="Close cart"
              >
                <svg
                  className="w-5 h-5"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              </button>
            </div>

            {/* Items */}
            {items.length === 0 ? (
              <div className="flex-1 flex flex-col items-center justify-center gap-4 px-6 text-center">
                <SparkleIcon className="w-12 h-12 text-gold" />
                <p className="text-pink-900 font-semibold text-lg">
                  Your cart is empty
                </p>
                <p className="text-gray-500 text-sm">
                  Browse our merch and add something cute!
                </p>
                <button
                  onClick={closeCart}
                  className="mt-2 px-6 py-2 rounded-full border border-pink-200 text-pink-900 font-semibold hover:bg-pink-50 transition-colors text-sm"
                >
                  Continue Shopping
                </button>
              </div>
            ) : (
              <>
                <ul className="flex-1 overflow-y-auto divide-y divide-pink-50 px-6">
                  {items.map((item) => {
                    const key = `${item.id}-${item.size ?? "default"}`;
                    return (
                      <li key={key} className="flex gap-4 py-4">
                        {/* Thumbnail */}
                        {item.image ? (
                          <div className="relative w-20 h-20 flex-shrink-0 rounded-lg overflow-hidden bg-pink-50">
                            <Image
                              src={item.image}
                              alt={item.name}
                              fill
                              className="object-cover"
                              sizes="80px"
                            />
                          </div>
                        ) : (
                          <div className="w-20 h-20 flex-shrink-0 rounded-lg bg-pink-50 flex items-center justify-center">
                            <SparkleIcon className="w-6 h-6 text-gold" />
                          </div>
                        )}

                        {/* Details */}
                        <div className="flex-1 min-w-0">
                          <p className="font-semibold text-pink-900 text-sm truncate">
                            {item.name}
                          </p>
                          {item.size && (
                            <p className="text-xs text-gray-500 mt-0.5">
                              Size: {item.size}
                            </p>
                          )}
                          <p className="text-sm font-bold text-gold mt-1">
                            ${(item.price * item.quantity).toFixed(2)}
                          </p>

                          {/* Quantity controls */}
                          <div className="flex items-center gap-2 mt-2">
                            <button
                              onClick={() =>
                                updateQuantity(
                                  item.id,
                                  item.size,
                                  item.quantity - 1
                                )
                              }
                              className="w-6 h-6 rounded-full border border-pink-200 flex items-center justify-center text-pink-900 hover:bg-pink-50 transition-colors text-xs"
                              aria-label="Decrease quantity"
                            >
                              -
                            </button>
                            <span className="text-sm font-medium text-gray-700 w-5 text-center">
                              {item.quantity}
                            </span>
                            <button
                              onClick={() =>
                                updateQuantity(
                                  item.id,
                                  item.size,
                                  item.quantity + 1
                                )
                              }
                              className="w-6 h-6 rounded-full border border-pink-200 flex items-center justify-center text-pink-900 hover:bg-pink-50 transition-colors text-xs"
                              aria-label="Increase quantity"
                            >
                              +
                            </button>

                            <button
                              onClick={() => removeFromCart(item.id, item.size)}
                              className="ml-auto text-gray-400 hover:text-red-500 transition-colors"
                              aria-label="Remove item"
                            >
                              <svg
                                className="w-4 h-4"
                                fill="none"
                                stroke="currentColor"
                                viewBox="0 0 24 24"
                              >
                                <path
                                  strokeLinecap="round"
                                  strokeLinejoin="round"
                                  strokeWidth={2}
                                  d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16"
                                />
                              </svg>
                            </button>
                          </div>
                        </div>
                      </li>
                    );
                  })}
                </ul>

                {/* Footer */}
                <div className="border-t border-pink-100 px-6 py-4 space-y-3">
                  <div className="flex items-center justify-between">
                    <span className="font-semibold text-pink-900">Total</span>
                    <span className="text-lg font-bold text-gold">
                      ${cartTotal.toFixed(2)}
                    </span>
                  </div>

                  <Link
                    href="/checkout"
                    onClick={closeCart}
                    className="block w-full text-center bg-gray-900 text-white py-3 rounded-full font-semibold shadow-md hover:bg-gray-800 transition-colors text-sm"
                  >
                    Checkout
                  </Link>

                  <button
                    onClick={closeCart}
                    className="block w-full text-center py-2 text-pink-900 font-semibold hover:text-pink-700 transition-colors text-sm"
                  >
                    Continue Shopping
                  </button>
                </div>
              </>
            )}
          </motion.aside>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
