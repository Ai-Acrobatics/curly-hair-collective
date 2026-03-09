"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ClientShell } from "../../components/ClientShell";
import { PageHeader } from "../../components/PageHeader";
import { FooterSection } from "../../sections/Footer";
import { FadeInUp } from "../../components/FramerAnimations";

const topicOptions = [
  "Natural Hair Journey",
  "Hair Science & Trichology",
  "Kids & Family Curl Care",
  "Hair Discrimination & Advocacy",
  "Product Development / Brand Story",
  "Salon & Styling Professional",
  "Cultural Identity & Hair",
  "Workplace & Professional Hair",
  "Content Creation & Influence",
  "Other",
];

export function ApplyPageClient() {
  const [submitted, setSubmitted] = useState(false);
  const [selectedTopics, setSelectedTopics] = useState<string[]>([]);

  function toggleTopic(topic: string) {
    setSelectedTopics((prev) =>
      prev.includes(topic)
        ? prev.filter((t) => t !== topic)
        : [...prev, topic]
    );
  }

  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    // Form data would be sent to an API route
    setSubmitted(true);
  }

  return (
    <ClientShell>
    <main className="bg-pink-50 min-h-screen">
      <PageHeader
        badge="Join Us"
        title="Apply to Be"
        titleAccent="a Guest"
        subtitle="We're always looking for passionate voices in the curly hair community. Tell us your story and what you'd love to talk about."
      />

      <section className="py-20">
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
                  <svg
                    className="w-10 h-10 text-green-500"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M5 13l4 4L19 7"
                    />
                  </svg>
                </div>
                <h2 className="text-3xl font-black text-pink-900 mb-3">
                  Application Received!
                </h2>
                <p className="text-pink-700/60 text-lg max-w-md mx-auto">
                  Thank you for your interest in being a guest on Curlie Girlie Collective.
                  We&apos;ll review your application and get back to you within 2 weeks.
                </p>
              </motion.div>
            ) : (
              <motion.div
                key="form"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
              >
                {/* What we're looking for */}
                <FadeInUp>
                  <div className="bg-white rounded-3xl p-8 shadow-lg shadow-pink-200/20 mb-8">
                    <h2 className="text-2xl font-bold text-pink-900 mb-4">
                      What We&apos;re Looking For
                    </h2>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      {[
                        {
                          icon: "🎤",
                          title: "Experts & Professionals",
                          desc: "Trichologists, stylists, dermatologists, and hair care researchers",
                        },
                        {
                          icon: "📣",
                          title: "Advocates & Activists",
                          desc: "CROWN Act supporters, anti-discrimination champions, policy makers",
                        },
                        {
                          icon: "💼",
                          title: "Founders & Creators",
                          desc: "Hair care brand founders, content creators, and entrepreneurs",
                        },
                        {
                          icon: "💛",
                          title: "Community Voices",
                          desc: "Anyone with a compelling curly hair story that inspires and educates",
                        },
                      ].map((item) => (
                        <div
                          key={item.title}
                          className="flex items-start gap-3 p-4 rounded-2xl bg-pink-50"
                        >
                          <span className="text-2xl">{item.icon}</span>
                          <div>
                            <h3 className="font-bold text-pink-900 text-sm">
                              {item.title}
                            </h3>
                            <p className="text-pink-700/50 text-xs mt-0.5">
                              {item.desc}
                            </p>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                </FadeInUp>

                {/* Application Form */}
                <FadeInUp delay={0.1}>
                  <form
                    onSubmit={handleSubmit}
                    className="bg-white rounded-3xl p-8 shadow-lg shadow-pink-200/20 space-y-6"
                  >
                    <h2 className="text-2xl font-bold text-pink-900 mb-2">
                      Guest Application
                    </h2>
                    <p className="text-pink-700/50 text-sm mb-6">
                      All fields marked with * are required.
                    </p>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                      <div>
                        <label className="block text-sm font-semibold text-pink-900 mb-2">
                          Full Name *
                        </label>
                        <input
                          type="text"
                          name="name"
                          required
                          className="w-full px-4 py-3 rounded-xl border border-pink-200 focus:border-pink-400 focus:ring-2 focus:ring-pink-200 outline-none transition-all text-pink-900 placeholder:text-pink-300"
                          placeholder="Your full name"
                        />
                      </div>
                      <div>
                        <label className="block text-sm font-semibold text-pink-900 mb-2">
                          Email Address *
                        </label>
                        <input
                          type="email"
                          name="email"
                          required
                          className="w-full px-4 py-3 rounded-xl border border-pink-200 focus:border-pink-400 focus:ring-2 focus:ring-pink-200 outline-none transition-all text-pink-900 placeholder:text-pink-300"
                          placeholder="you@example.com"
                        />
                      </div>
                    </div>

                    <div>
                      <label className="block text-sm font-semibold text-pink-900 mb-2">
                        Professional Title / Role *
                      </label>
                      <input
                        type="text"
                        name="title"
                        required
                        className="w-full px-4 py-3 rounded-xl border border-pink-200 focus:border-pink-400 focus:ring-2 focus:ring-pink-200 outline-none transition-all text-pink-900 placeholder:text-pink-300"
                        placeholder="e.g., Trichologist, Hair Care Brand Founder, Natural Hair Advocate"
                      />
                    </div>

                    <div>
                      <label className="block text-sm font-semibold text-pink-900 mb-2">
                        Website or Social Media
                      </label>
                      <input
                        type="url"
                        name="website"
                        className="w-full px-4 py-3 rounded-xl border border-pink-200 focus:border-pink-400 focus:ring-2 focus:ring-pink-200 outline-none transition-all text-pink-900 placeholder:text-pink-300"
                        placeholder="https://yourwebsite.com or @yourhandle"
                      />
                    </div>

                    <div>
                      <label className="block text-sm font-semibold text-pink-900 mb-2">
                        Topics You&apos;d Like to Discuss *
                      </label>
                      <p className="text-pink-700/40 text-xs mb-3">
                        Select all that apply.
                      </p>
                      <div className="flex flex-wrap gap-2">
                        {topicOptions.map((topic) => (
                          <button
                            key={topic}
                            type="button"
                            onClick={() => toggleTopic(topic)}
                            className={`text-sm px-4 py-2 rounded-full font-medium transition-all ${
                              selectedTopics.includes(topic)
                                ? "bg-pink-500 text-white shadow-md shadow-pink-300/50"
                                : "bg-pink-50 text-pink-600 hover:bg-pink-100"
                            }`}
                          >
                            {topic}
                          </button>
                        ))}
                      </div>
                      <input
                        type="hidden"
                        name="topics"
                        value={selectedTopics.join(", ")}
                      />
                    </div>

                    <div>
                      <label className="block text-sm font-semibold text-pink-900 mb-2">
                        Tell Us Your Story *
                      </label>
                      <p className="text-pink-700/40 text-xs mb-2">
                        What makes your perspective unique? What would you share with our audience?
                      </p>
                      <textarea
                        name="story"
                        required
                        rows={5}
                        className="w-full px-4 py-3 rounded-xl border border-pink-200 focus:border-pink-400 focus:ring-2 focus:ring-pink-200 outline-none transition-all text-pink-900 placeholder:text-pink-300 resize-none"
                        placeholder="Share your curly hair journey, your expertise, and what you'd love to talk about on the show..."
                      />
                    </div>

                    <div>
                      <label className="block text-sm font-semibold text-pink-900 mb-2">
                        Previous Media Appearances
                      </label>
                      <textarea
                        name="media"
                        rows={3}
                        className="w-full px-4 py-3 rounded-xl border border-pink-200 focus:border-pink-400 focus:ring-2 focus:ring-pink-200 outline-none transition-all text-pink-900 placeholder:text-pink-300 resize-none"
                        placeholder="List any podcasts, TV shows, publications, or YouTube channels you've appeared on (optional)"
                      />
                    </div>

                    <div>
                      <label className="block text-sm font-semibold text-pink-900 mb-2">
                        How Did You Hear About Us?
                      </label>
                      <select
                        name="referral"
                        className="w-full px-4 py-3 rounded-xl border border-pink-200 focus:border-pink-400 focus:ring-2 focus:ring-pink-200 outline-none transition-all text-pink-900"
                      >
                        <option value="">Select one...</option>
                        <option value="instagram">Instagram</option>
                        <option value="tiktok">TikTok</option>
                        <option value="youtube">YouTube</option>
                        <option value="podcast">Listened to an episode</option>
                        <option value="friend">Friend / colleague</option>
                        <option value="search">Google search</option>
                        <option value="other">Other</option>
                      </select>
                    </div>

                    <div className="pt-4">
                      <button
                        type="submit"
                        className="w-full gradient-pink text-white py-4 rounded-full font-bold text-lg shadow-lg shadow-pink-300/50 hover:shadow-xl hover:shadow-pink-400/50 transition-all"
                      >
                        Submit Application
                      </button>
                      <p className="text-pink-400/50 text-xs text-center mt-3">
                        We review applications weekly and respond within 2 weeks.
                      </p>
                    </div>
                  </form>
                </FadeInUp>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </section>

      <FooterSection />
    </main>
    </ClientShell>
  );
}
