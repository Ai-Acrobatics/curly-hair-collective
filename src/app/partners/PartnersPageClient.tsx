"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";
import { ClientShell } from "../components/ClientShell";
import { PageHeader } from "../components/PageHeader";
import { FooterSection } from "../sections/Footer";
import { FadeInUp, StaggerContainer, StaggerItem } from "../components/FramerAnimations";
import { SparkleIcon } from "../components/Icons";

const partnershipTypes = [
  {
    title: "Podcast Sponsorship",
    description: "Pre-roll, mid-roll, or title sponsorship on our episodes reaching thousands of engaged listeners.",
    icon: "🎙️",
  },
  {
    title: "Product Collaboration",
    description: "Co-create or feature your products with our community — from hair care to faith-based resources.",
    icon: "🤝",
  },
  {
    title: "Event Partnership",
    description: "Co-host live events, conferences, or workshops with us and connect directly with our audience.",
    icon: "🎪",
  },
  {
    title: "Content Sponsorship",
    description: "Sponsor a blog series, newsletter campaign, or social media feature that aligns with your brand.",
    icon: "📝",
  },
];

const whyPartner = [
  { stat: "95%", label: "Female Audience", detail: "Women 25-45 who invest in faith, beauty, and self-care" },
  { stat: "80%", label: "Women of Faith", detail: "Active in their church communities and ministries" },
  { stat: "92%", label: "Engagement Rate", detail: "Listeners who act on our recommendations" },
  { stat: "4.9★", label: "Average Rating", detail: "Across all podcast platforms" },
];

const budgetOptions = [
  "Under $1,000",
  "$1,000 – $5,000",
  "$5,000 – $15,000",
  "$15,000+",
  "Not sure yet",
];

export function PartnersPageClient() {
  const [submitted, setSubmitted] = useState(false);
  const [selectedTypes, setSelectedTypes] = useState<string[]>([]);

  function toggleType(type: string) {
    setSelectedTypes((prev) =>
      prev.includes(type) ? prev.filter((t) => t !== type) : [...prev, type]
    );
  }

  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setSubmitted(true);
  }

  return (
    <ClientShell>
      <PageHeader
        badge="Work With Us"
        title="Let's Talk"
        titleAccent="Partnership"
        subtitle="We partner with brands and organizations that align with our mission of faith, hair education, and helping women find their identity in Christ."
      />

      <main className="bg-pink-50">
        {/* Why Partner Section */}
        <section className="py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <FadeInUp>
              <div className="text-center mb-12">
                <span className="text-pink-400 font-semibold uppercase tracking-[0.25em] text-sm">
                  Why Partner With Us
                </span>
                <h2 className="text-3xl md:text-4xl font-black text-pink-900 mt-2">
                  Your Brand, Our Community
                </h2>
                <p className="text-pink-700/60 max-w-2xl mx-auto mt-3">
                  Our audience doesn&apos;t just listen — they engage, share, and act.
                  When we recommend something, our community trusts it because we only
                  partner with brands we believe in.
                </p>
              </div>
            </FadeInUp>

            <StaggerContainer className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-16">
              {whyPartner.map((item) => (
                <StaggerItem key={item.label}>
                  <div className="bg-white p-6 rounded-2xl shadow-md shadow-pink-200/20 text-center">
                    <div className="text-3xl font-black text-pink-900 mb-1">
                      {item.stat}
                    </div>
                    <div className="text-sm font-semibold text-pink-600 mb-2">
                      {item.label}
                    </div>
                    <p className="text-pink-700/50 text-xs">{item.detail}</p>
                  </div>
                </StaggerItem>
              ))}
            </StaggerContainer>

            {/* Partnership Types */}
            <FadeInUp>
              <div className="text-center mb-10">
                <h2 className="text-3xl font-black text-pink-900">
                  Ways to Partner
                </h2>
              </div>
            </FadeInUp>

            <StaggerContainer className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-16">
              {partnershipTypes.map((type) => (
                <StaggerItem key={type.title}>
                  <motion.div
                    className="bg-white rounded-2xl p-6 shadow-md shadow-pink-200/20 flex items-start gap-4"
                    whileHover={{ y: -4 }}
                  >
                    <span className="text-3xl">{type.icon}</span>
                    <div>
                      <h3 className="font-bold text-pink-900 text-lg mb-1">
                        {type.title}
                      </h3>
                      <p className="text-pink-700/60 text-sm leading-relaxed">
                        {type.description}
                      </p>
                    </div>
                  </motion.div>
                </StaggerItem>
              ))}
            </StaggerContainer>

            {/* Existing tiers CTA */}
            <FadeInUp>
              <div className="text-center mb-16">
                <p className="text-pink-700/60 mb-4">
                  Want to see detailed sponsorship packages?
                </p>
                <Link
                  href="/sponsors"
                  className="inline-flex items-center gap-2 bg-pink-100 text-pink-700 px-6 py-3 rounded-full font-semibold hover:bg-pink-200 transition-colors text-sm"
                >
                  View Sponsorship Tiers
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </Link>
              </div>
            </FadeInUp>
          </div>
        </section>

        {/* Partnership Inquiry Form */}
        <section className="py-20 bg-gradient-to-br from-pink-100 via-pink-50 to-white">
          <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
            <AnimatePresence mode="wait">
              {submitted ? (
                <motion.div
                  key="success"
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="bg-white rounded-3xl p-12 shadow-lg shadow-pink-200/20 text-center"
                >
                  <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6">
                    <svg className="w-10 h-10 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <h2 className="text-3xl font-black text-pink-900 mb-3">
                    We&apos;ll Be in Touch!
                  </h2>
                  <p className="text-pink-700/60 text-lg max-w-md mx-auto">
                    Thank you for your interest in partnering with Curlie Girlie Collective.
                    Our team will review your inquiry and respond within 3-5 business days.
                  </p>
                </motion.div>
              ) : (
                <motion.div key="form" initial={{ opacity: 0 }} animate={{ opacity: 1 }}>
                  <FadeInUp>
                    <form
                      onSubmit={handleSubmit}
                      className="bg-white rounded-3xl p-8 shadow-lg shadow-pink-200/20 space-y-6"
                    >
                      <div className="text-center mb-4">
                        <SparkleIcon className="w-6 h-6 text-gold mx-auto mb-3" />
                        <h2 className="text-2xl font-bold text-pink-900">
                          Partnership Inquiry
                        </h2>
                        <p className="text-pink-700/50 text-sm mt-1">
                          Tell us about your brand and how we can work together.
                        </p>
                      </div>

                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                        <div>
                          <label className="block text-sm font-semibold text-pink-900 mb-2">
                            Your Name *
                          </label>
                          <input
                            type="text"
                            name="name"
                            required
                            className="w-full px-4 py-3 rounded-xl border border-pink-200 focus:border-pink-400 focus:ring-2 focus:ring-pink-200 outline-none transition-all text-pink-900 placeholder:text-pink-300"
                            placeholder="Full name"
                          />
                        </div>
                        <div>
                          <label className="block text-sm font-semibold text-pink-900 mb-2">
                            Email *
                          </label>
                          <input
                            type="email"
                            name="email"
                            required
                            className="w-full px-4 py-3 rounded-xl border border-pink-200 focus:border-pink-400 focus:ring-2 focus:ring-pink-200 outline-none transition-all text-pink-900 placeholder:text-pink-300"
                            placeholder="you@company.com"
                          />
                        </div>
                      </div>

                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                        <div>
                          <label className="block text-sm font-semibold text-pink-900 mb-2">
                            Company / Brand *
                          </label>
                          <input
                            type="text"
                            name="company"
                            required
                            className="w-full px-4 py-3 rounded-xl border border-pink-200 focus:border-pink-400 focus:ring-2 focus:ring-pink-200 outline-none transition-all text-pink-900 placeholder:text-pink-300"
                            placeholder="Brand or organization name"
                          />
                        </div>
                        <div>
                          <label className="block text-sm font-semibold text-pink-900 mb-2">
                            Website
                          </label>
                          <input
                            type="url"
                            name="website"
                            className="w-full px-4 py-3 rounded-xl border border-pink-200 focus:border-pink-400 focus:ring-2 focus:ring-pink-200 outline-none transition-all text-pink-900 placeholder:text-pink-300"
                            placeholder="https://yourbrand.com"
                          />
                        </div>
                      </div>

                      <div>
                        <label className="block text-sm font-semibold text-pink-900 mb-2">
                          Partnership Type *
                        </label>
                        <p className="text-pink-700/40 text-xs mb-3">Select all that interest you.</p>
                        <div className="flex flex-wrap gap-2">
                          {partnershipTypes.map((type) => (
                            <button
                              key={type.title}
                              type="button"
                              onClick={() => toggleType(type.title)}
                              className={`text-sm px-4 py-2 rounded-full font-medium transition-all ${
                                selectedTypes.includes(type.title)
                                  ? "bg-pink-500 text-white shadow-md shadow-pink-300/50"
                                  : "bg-pink-50 text-pink-600 hover:bg-pink-100"
                              }`}
                            >
                              {type.title}
                            </button>
                          ))}
                        </div>
                        <input type="hidden" name="partnershipTypes" value={selectedTypes.join(", ")} />
                      </div>

                      <div>
                        <label className="block text-sm font-semibold text-pink-900 mb-2">
                          Budget Range
                        </label>
                        <select
                          name="budget"
                          className="w-full px-4 py-3 rounded-xl border border-pink-200 focus:border-pink-400 focus:ring-2 focus:ring-pink-200 outline-none transition-all text-pink-900"
                        >
                          <option value="">Select a range...</option>
                          {budgetOptions.map((opt) => (
                            <option key={opt} value={opt}>{opt}</option>
                          ))}
                        </select>
                      </div>

                      <div>
                        <label className="block text-sm font-semibold text-pink-900 mb-2">
                          Tell Us About Your Vision *
                        </label>
                        <p className="text-pink-700/40 text-xs mb-2">
                          What does a partnership with Curlie Girlie Collective look like for your brand?
                        </p>
                        <textarea
                          name="vision"
                          required
                          rows={5}
                          className="w-full px-4 py-3 rounded-xl border border-pink-200 focus:border-pink-400 focus:ring-2 focus:ring-pink-200 outline-none transition-all text-pink-900 placeholder:text-pink-300 resize-none"
                          placeholder="Share your goals, campaign ideas, or what drew you to our community..."
                        />
                      </div>

                      <div className="pt-4">
                        <button
                          type="submit"
                          className="w-full bg-gray-900 text-white py-4 rounded-full font-bold text-lg shadow-md hover:bg-gray-800 transition-colors"
                        >
                          Submit Inquiry
                        </button>
                        <p className="text-pink-400/50 text-xs text-center mt-3">
                          We respond to all partnership inquiries within 3-5 business days.
                        </p>
                      </div>
                    </form>
                  </FadeInUp>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        </section>
      </main>

      <FooterSection />
    </ClientShell>
  );
}
