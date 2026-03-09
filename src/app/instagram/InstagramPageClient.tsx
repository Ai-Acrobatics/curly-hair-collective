"use client";

import { useState } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { ClientShell } from "../components/ClientShell";
import { PageHeader } from "../components/PageHeader";
import { FooterSection } from "../sections/Footer";
import {
  FadeInUp,
  StaggerContainer,
  StaggerItem,
} from "../components/FramerAnimations";
import { SparkleIcon } from "../components/Icons";
import { instagramPosts, type InstagramPost } from "../data/instagram";

const categories = [
  "All",
  "Episode Announcement",
  "Episode Teaser",
  "Scripture Quote",
  "Faith Affirmation",
  "Hair Tip",
  "Community Engagement",
  "Behind the Scenes",
  "Listener Spotlight",
  "Merch Promo",
  "Event Announcement",
];

function PostModal({
  post,
  onClose,
}: {
  post: InstagramPost;
  onClose: () => void;
}) {
  const [copied, setCopied] = useState<string | null>(null);

  function copyToClipboard(text: string, field: string) {
    navigator.clipboard.writeText(text);
    setCopied(field);
    setTimeout(() => setCopied(null), 2000);
  }

  return (
    <motion.div
      className="fixed inset-0 z-50 flex items-center justify-center p-4"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
    >
      <div
        className="absolute inset-0 bg-black/60 backdrop-blur-sm"
        onClick={onClose}
      />
      <motion.div
        className="relative bg-white rounded-3xl shadow-2xl max-w-4xl w-full max-h-[90vh] overflow-y-auto"
        initial={{ scale: 0.95, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        exit={{ scale: 0.95, opacity: 0 }}
      >
        <button
          onClick={onClose}
          className="absolute top-4 right-4 z-10 w-10 h-10 bg-white/90 rounded-full flex items-center justify-center shadow-md hover:bg-white transition-colors"
        >
          <svg
            className="w-5 h-5 text-gray-600"
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

        <div className="grid grid-cols-1 lg:grid-cols-2">
          {/* Image side */}
          <div className="relative aspect-square bg-pink-50 rounded-t-3xl lg:rounded-l-3xl lg:rounded-tr-none overflow-hidden">
            <Image
              src={post.image}
              alt={post.caption.slice(0, 80)}
              fill
              className="object-cover"
            />
          </div>

          {/* Content side */}
          <div className="p-6 lg:p-8 space-y-5">
            <div>
              <span className="inline-flex items-center gap-1.5 bg-pink-50 text-pink-600 border border-pink-100 rounded-full px-3 py-1 text-xs font-semibold uppercase tracking-wider">
                <SparkleIcon className="w-3 h-3" />
                {post.category}
              </span>
            </div>

            {/* Caption */}
            <div>
              <div className="flex items-center justify-between mb-2">
                <h3 className="text-sm font-bold text-pink-900">Caption</h3>
                <button
                  onClick={() => copyToClipboard(post.caption, "caption")}
                  className="text-xs text-pink-500 hover:text-pink-700 font-medium transition-colors"
                >
                  {copied === "caption" ? "Copied!" : "Copy"}
                </button>
              </div>
              <p className="text-sm text-gray-600 leading-relaxed whitespace-pre-line bg-gray-50 rounded-xl p-4 border border-gray-100">
                {post.caption}
              </p>
            </div>

            {/* Hashtags */}
            <div>
              <div className="flex items-center justify-between mb-2">
                <h3 className="text-sm font-bold text-pink-900">Hashtags</h3>
                <button
                  onClick={() =>
                    copyToClipboard(post.hashtags.join(" "), "hashtags")
                  }
                  className="text-xs text-pink-500 hover:text-pink-700 font-medium transition-colors"
                >
                  {copied === "hashtags" ? "Copied!" : "Copy"}
                </button>
              </div>
              <div className="flex flex-wrap gap-1.5">
                {post.hashtags.map((tag) => (
                  <span
                    key={tag}
                    className="bg-pink-50 text-pink-500 border border-pink-100 rounded-full px-2.5 py-1 text-xs font-medium"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>

            {/* Template note */}
            <div>
              <h3 className="text-sm font-bold text-pink-900 mb-2">
                Template Notes
              </h3>
              <p className="text-sm text-gray-500 leading-relaxed bg-amber-50 rounded-xl p-4 border border-amber-100">
                {post.template}
              </p>
            </div>

            {/* Copy all */}
            <button
              onClick={() =>
                copyToClipboard(
                  `${post.caption}\n\n${post.hashtags.join(" ")}`,
                  "all"
                )
              }
              className="w-full bg-gray-900 text-white py-3 rounded-full font-bold text-sm shadow-md hover:bg-gray-800 transition-colors"
            >
              {copied === "all"
                ? "Copied to Clipboard!"
                : "Copy Caption + Hashtags"}
            </button>
          </div>
        </div>
      </motion.div>
    </motion.div>
  );
}

export function InstagramPageClient() {
  const [activeCategory, setActiveCategory] = useState("All");
  const [selectedPost, setSelectedPost] = useState<InstagramPost | null>(null);

  const filteredPosts =
    activeCategory === "All"
      ? instagramPosts
      : instagramPosts.filter((p) => p.category === activeCategory);

  return (
    <ClientShell>
      <PageHeader
        badge="Marketing Kit"
        title="Instagram"
        titleAccent="Templates"
        subtitle="Ready-to-use Instagram posts for promoting the podcast — episode drops, scripture quotes, hair tips, and community engagement content. Click any post to copy the caption and hashtags."
      />

      <main className="bg-pink-50">
        {/* Instagram Feed Preview */}
        <section className="py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            {/* Mock Instagram profile header */}
            <FadeInUp>
              <div className="bg-white rounded-3xl p-6 md:p-8 shadow-lg shadow-pink-200/20 mb-10">
                <div className="flex flex-col sm:flex-row items-center gap-6">
                  <div className="w-20 h-20 md:w-24 md:h-24 rounded-full overflow-hidden border-2 border-pink-200 flex-shrink-0">
                    <Image
                      src="/images/duo-cartoon.png"
                      alt="Sabrina & Chanelle"
                      width={96}
                      height={96}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div className="text-center sm:text-left flex-1">
                    <div className="flex items-center gap-2 justify-center sm:justify-start">
                      <h2 className="text-lg font-bold text-pink-900">
                        curliegirlie
                      </h2>
                      <svg
                        className="w-5 h-5 text-blue-500"
                        fill="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z" />
                      </svg>
                    </div>
                    <p className="text-sm text-gray-500 mt-1">
                      Faith. Hair. Becoming. A podcast by Sabrina & Chanelle.
                    </p>
                    <div className="flex items-center gap-6 mt-3 justify-center sm:justify-start text-sm">
                      <div>
                        <span className="font-bold text-pink-900">10</span>{" "}
                        <span className="text-gray-400">posts</span>
                      </div>
                      <div>
                        <span className="font-bold text-pink-900">12.4K</span>{" "}
                        <span className="text-gray-400">followers</span>
                      </div>
                      <div>
                        <span className="font-bold text-pink-900">847</span>{" "}
                        <span className="text-gray-400">following</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </FadeInUp>

            {/* Category filter pills */}
            <FadeInUp delay={0.1}>
              <div className="flex flex-wrap gap-2 mb-10 justify-center">
                {categories.map((cat) => (
                  <button
                    key={cat}
                    onClick={() => setActiveCategory(cat)}
                    className={`text-sm px-4 py-2 rounded-full font-medium transition-all ${
                      activeCategory === cat
                        ? "bg-pink-500 text-white shadow-md shadow-pink-300/50"
                        : "bg-white text-pink-600 hover:bg-pink-100 border border-pink-100"
                    }`}
                  >
                    {cat}
                  </button>
                ))}
              </div>
            </FadeInUp>

            {/* Instagram grid */}
            <StaggerContainer className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-3">
              {filteredPosts.map((post) => (
                <StaggerItem key={post.id}>
                  <motion.button
                    onClick={() => setSelectedPost(post)}
                    className="relative aspect-square w-full rounded-2xl overflow-hidden group shadow-md shadow-pink-200/20"
                    whileHover={{ y: -4 }}
                  >
                    <Image
                      src={post.image}
                      alt={post.category}
                      fill
                      className="object-cover transition-transform duration-300 group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-black/0 group-hover:bg-black/30 transition-colors flex items-center justify-center">
                      <div className="opacity-0 group-hover:opacity-100 transition-opacity text-center">
                        <SparkleIcon className="w-6 h-6 text-white mx-auto mb-1" />
                        <p className="text-white text-xs font-semibold px-2">
                          {post.category}
                        </p>
                      </div>
                    </div>
                  </motion.button>
                </StaggerItem>
              ))}
            </StaggerContainer>

            {filteredPosts.length === 0 && (
              <div className="text-center py-16">
                <p className="text-pink-400 text-lg">
                  No posts in this category yet.
                </p>
              </div>
            )}
          </div>
        </section>

        {/* Content Calendar Section */}
        <section className="py-20 bg-white">
          <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
            <FadeInUp>
              <div className="text-center mb-12">
                <span className="text-pink-400 font-semibold uppercase tracking-[0.25em] text-sm">
                  Posting Schedule
                </span>
                <h2 className="text-3xl md:text-4xl font-black text-pink-900 mt-2">
                  Weekly Content Calendar
                </h2>
                <p className="text-pink-700/60 max-w-2xl mx-auto mt-3">
                  A suggested posting schedule to keep the feed consistent and
                  engagement high.
                </p>
              </div>
            </FadeInUp>

            <StaggerContainer className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {[
                {
                  day: "Monday",
                  type: "Faith Affirmation",
                  desc: "Start the week with a scripture or affirmation post to set the tone.",
                  color: "bg-pink-50 border-pink-100",
                },
                {
                  day: "Tuesday",
                  type: "Episode Teaser",
                  desc: "Build anticipation for the upcoming episode with a teaser graphic.",
                  color: "bg-amber-50 border-amber-100",
                },
                {
                  day: "Wednesday",
                  type: "New Episode Drop",
                  desc: "Announce the new episode with the episode announcement template.",
                  color: "bg-pink-50 border-pink-100",
                },
                {
                  day: "Thursday",
                  type: "Hair Tip",
                  desc: "Share a quick curl tip tied to self-care or faith.",
                  color: "bg-amber-50 border-amber-100",
                },
                {
                  day: "Friday",
                  type: "Community Question",
                  desc: "Ask an engaging question to boost comments and conversation.",
                  color: "bg-pink-50 border-pink-100",
                },
                {
                  day: "Saturday",
                  type: "Scripture Quote",
                  desc: "End the week with a beautiful scripture card for reflection.",
                  color: "bg-amber-50 border-amber-100",
                },
                {
                  day: "Bi-Weekly",
                  type: "Listener Spotlight",
                  desc: "Feature a real listener testimonial to build community trust.",
                  color: "bg-pink-50 border-pink-100",
                },
                {
                  day: "Monthly",
                  type: "Behind the Scenes / Merch / Events",
                  desc: "Rotate between BTS content, merch promos, and event announcements.",
                  color: "bg-amber-50 border-amber-100",
                },
              ].map((item) => (
                <StaggerItem key={item.day}>
                  <div
                    className={`${item.color} border rounded-2xl p-5 flex gap-4`}
                  >
                    <div className="w-12 h-12 bg-white rounded-xl flex items-center justify-center flex-shrink-0 shadow-sm">
                      <span className="text-pink-900 font-black text-xs">
                        {item.day.slice(0, 3).toUpperCase()}
                      </span>
                    </div>
                    <div>
                      <h3 className="font-bold text-pink-900 text-sm">
                        {item.type}
                      </h3>
                      <p className="text-pink-700/50 text-xs mt-1 leading-relaxed">
                        {item.desc}
                      </p>
                    </div>
                  </div>
                </StaggerItem>
              ))}
            </StaggerContainer>
          </div>
        </section>

        {/* How to Use Section */}
        <section className="py-20">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <FadeInUp>
              <div className="text-center mb-12">
                <span className="text-pink-400 font-semibold uppercase tracking-[0.25em] text-sm">
                  How to Use
                </span>
                <h2 className="text-3xl md:text-4xl font-black text-pink-900 mt-2">
                  Using These Templates
                </h2>
              </div>
            </FadeInUp>

            <StaggerContainer className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {[
                {
                  step: "1",
                  title: "Pick a Template",
                  desc: "Browse the grid and choose a post type that fits your content calendar for the day.",
                },
                {
                  step: "2",
                  title: "Copy & Customize",
                  desc: "Click the post to view the caption and hashtags. Copy them and customize the details for your specific episode or topic.",
                },
                {
                  step: "3",
                  title: "Post & Engage",
                  desc: "Download the image, paste your caption, and post! Respond to every comment in the first hour for maximum reach.",
                },
              ].map((item) => (
                <StaggerItem key={item.step}>
                  <div className="bg-white rounded-2xl p-6 shadow-lg shadow-pink-200/20 text-center">
                    <div className="w-12 h-12 bg-pink-100 rounded-full flex items-center justify-center mx-auto mb-4">
                      <span className="text-pink-600 font-black text-lg">
                        {item.step}
                      </span>
                    </div>
                    <h3 className="font-bold text-pink-900 mb-2">
                      {item.title}
                    </h3>
                    <p className="text-pink-700/50 text-sm leading-relaxed">
                      {item.desc}
                    </p>
                  </div>
                </StaggerItem>
              ))}
            </StaggerContainer>
          </div>
        </section>
      </main>

      {/* Post detail modal */}
      <AnimatePresence>
        {selectedPost && (
          <PostModal
            post={selectedPost}
            onClose={() => setSelectedPost(null)}
          />
        )}
      </AnimatePresence>

      <FooterSection />
    </ClientShell>
  );
}
