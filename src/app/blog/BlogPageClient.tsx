"use client";

import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import { ClientShell } from "../components/ClientShell";
import { FooterSection } from "../sections/Footer";
import {
  FadeInUp,
  StaggerContainer,
  StaggerItem,
} from "../components/FramerAnimations";
import { SparkleIcon } from "../components/Icons";
import { blogPosts } from "../data/blog";

function formatDate(dateStr: string) {
  const d = new Date(dateStr + "T00:00:00");
  return d.toLocaleDateString("en-US", {
    month: "short",
    day: "numeric",
    year: "numeric",
  });
}

export function BlogPageClient() {
  const featured = blogPosts.filter((p) => p.featured);
  const regular = blogPosts.filter((p) => !p.featured);

  return (
    <ClientShell>
      {/* Hero Section */}
      <section className="relative bg-white pt-28 pb-16 overflow-hidden">
        <div
          className="absolute inset-0"
          style={{
            background:
              "radial-gradient(ellipse at 30% 20%, rgba(212, 175, 55, 0.06) 0%, transparent 50%), radial-gradient(ellipse at 70% 80%, rgba(251, 182, 206, 0.08) 0%, transparent 50%)",
          }}
        />

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 z-10">
          <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-6 mb-2">
            <div>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
              >
                <span className="inline-flex items-center gap-2 bg-pink-50 text-pink-500 font-semibold uppercase tracking-[0.2em] text-xs px-5 py-2 rounded-full border border-pink-100">
                  <SparkleIcon className="w-3 h-3" />
                  The Blog
                </span>
              </motion.div>

              <motion.h1
                className="text-4xl sm:text-5xl md:text-6xl font-black text-pink-900 mt-5 leading-tight"
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{
                  duration: 0.8,
                  delay: 0.1,
                  ease: [0.23, 1, 0.32, 1],
                }}
              >
                Faith &{" "}
                <span className="text-gradient-gold">Hair</span>
              </motion.h1>

              <motion.p
                className="text-lg text-pink-700/60 max-w-xl mt-4"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7, delay: 0.25 }}
              >
                Devotionals, encouragement, and real talk about faith, hair
                journeys, identity, and becoming who God made you to be.
              </motion.p>
            </div>

            <motion.div
              initial={{ opacity: 0, x: 10 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="flex-shrink-0"
            >
              <Link
                href="/blog"
                className="inline-flex items-center gap-2 text-pink-500 font-semibold text-sm hover:text-pink-600 transition-colors group"
              >
                View all insights
                <svg
                  className="w-4 h-4 transition-transform group-hover:translate-x-1"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth={2}
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M17 8l4 4m0 0l-4 4m4-4H3"
                  />
                </svg>
              </Link>
            </motion.div>
          </div>
        </div>

        <div className="absolute bottom-0 left-0 right-0 z-10">
          <svg viewBox="0 0 1440 60" fill="none" className="w-full">
            <path
              d="M0 30C360 60 720 0 1080 30C1260 45 1380 38 1440 30V60H0V30Z"
              fill="#FDF2F8"
            />
          </svg>
        </div>
      </section>

      {/* Blog Content */}
      <section className="py-20 bg-pink-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Featured Post — Full-Width Hero Card */}
          {featured.length > 0 && (
            <>
              <FadeInUp>
                <span className="inline-flex items-center gap-2 bg-pink-50 text-pink-500 font-semibold uppercase tracking-[0.2em] text-xs px-5 py-2 rounded-full border border-pink-100 mb-8">
                  <SparkleIcon className="w-3 h-3" />
                  Featured
                </span>
              </FadeInUp>

              {/* First featured: full-width hero card */}
              <FadeInUp>
                <Link
                  href={`/blog/${featured[0].slug}`}
                  className="group block mb-8"
                >
                  <div className="border border-pink-100 rounded-2xl overflow-hidden bg-white hover:shadow-lg hover:shadow-pink-200/30 transition-all duration-300">
                    <div className="grid grid-cols-1 lg:grid-cols-2">
                      <div
                        className={`aspect-[3/2] lg:aspect-auto lg:min-h-[360px] bg-gradient-to-br ${featured[0].gradient} relative overflow-hidden rounded-2xl`}
                      >
                        {featured[0].image ? (
                          <Image
                            src={featured[0].image}
                            alt={featured[0].title}
                            fill
                            className="object-cover group-hover:scale-105 transition-transform duration-500"
                            sizes="(max-width: 1024px) 100vw, 50vw"
                          />
                        ) : (
                          <div className="absolute inset-0 flex items-center justify-center">
                            <SparkleIcon className="w-24 h-24 text-white/10" />
                          </div>
                        )}
                        <div className="absolute top-4 left-4 z-10">
                          <span className="bg-gold text-pink-900 text-xs font-bold px-3 py-1.5 rounded-full glow-gold">
                            Featured
                          </span>
                        </div>
                      </div>
                      <div className="p-8 lg:p-10 flex flex-col justify-center">
                        <div className="flex items-center gap-3 text-xs text-pink-400 mb-4">
                          <span className="font-medium">
                            {formatDate(featured[0].date)}
                          </span>
                          <span className="w-1 h-1 rounded-full bg-pink-300" />
                          <span className="font-medium">
                            {featured[0].readTime}
                          </span>
                          <span className="w-1 h-1 rounded-full bg-pink-300" />
                          <span className="font-semibold uppercase tracking-wider text-pink-500">
                            {featured[0].category}
                          </span>
                        </div>
                        <h2 className="text-2xl lg:text-3xl font-black text-pink-900 mb-4 group-hover:text-gradient-pink transition-colors leading-tight">
                          {featured[0].title}
                        </h2>
                        <p className="text-pink-700/60 text-base leading-relaxed mb-6 max-w-lg">
                          {featured[0].excerpt}
                        </p>
                        <span className="inline-flex items-center gap-2 text-pink-500 font-semibold text-sm group-hover:gap-3 transition-all">
                          Read Article
                          <svg
                            className="w-4 h-4"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                            strokeWidth={2}
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              d="M17 8l4 4m0 0l-4 4m4-4H3"
                            />
                          </svg>
                        </span>
                      </div>
                    </div>
                  </div>
                </Link>
              </FadeInUp>

              {/* Remaining featured posts as standard cards */}
              {featured.length > 1 && (
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-16">
                  {featured.slice(1).map((post, i) => (
                    <FadeInUp key={post.id} delay={i * 0.1}>
                      <Link
                        href={`/blog/${post.slug}`}
                        className="group block h-full"
                      >
                        <div className="border border-pink-100 rounded-2xl overflow-hidden bg-white hover:shadow-lg hover:shadow-pink-200/30 transition-all duration-300 h-full flex flex-col">
                          <div
                            className={`aspect-[3/2] bg-gradient-to-br ${post.gradient} relative overflow-hidden rounded-t-2xl`}
                          >
                            {post.image ? (
                              <Image
                                src={post.image}
                                alt={post.title}
                                fill
                                className="object-cover group-hover:scale-105 transition-transform duration-500"
                                sizes="(max-width: 768px) 100vw, 50vw"
                              />
                            ) : (
                              <div className="absolute inset-0 flex items-center justify-center">
                                <SparkleIcon className="w-16 h-16 text-white/10" />
                              </div>
                            )}
                            <div className="absolute top-4 left-4 z-10">
                              <span className="bg-gold text-pink-900 text-xs font-bold px-3 py-1.5 rounded-full glow-gold">
                                Featured
                              </span>
                            </div>
                          </div>
                          <div className="p-6 flex-1 flex flex-col">
                            <div className="flex items-center gap-3 text-xs text-pink-400 mb-3">
                              <span className="font-medium">
                                {formatDate(post.date)}
                              </span>
                              <span className="w-1 h-1 rounded-full bg-pink-300" />
                              <span className="font-medium">
                                {post.readTime}
                              </span>
                            </div>
                            <h3 className="text-xl font-bold text-pink-900 mb-3 group-hover:text-gradient-pink transition-colors leading-snug">
                              {post.title}
                            </h3>
                            <p className="text-pink-700/60 text-sm leading-relaxed flex-1">
                              {post.excerpt}
                            </p>
                            <span className="inline-flex items-center gap-2 text-pink-500 font-semibold text-sm mt-4 group-hover:gap-3 transition-all">
                              Read More
                              <svg
                                className="w-3.5 h-3.5"
                                fill="none"
                                viewBox="0 0 24 24"
                                stroke="currentColor"
                                strokeWidth={2.5}
                              >
                                <path
                                  strokeLinecap="round"
                                  strokeLinejoin="round"
                                  d="M17 8l4 4m0 0l-4 4m4-4H3"
                                />
                              </svg>
                            </span>
                          </div>
                        </div>
                      </Link>
                    </FadeInUp>
                  ))}
                </div>
              )}
            </>
          )}

          {/* All Articles — 3-Column Grid */}
          <FadeInUp>
            <div className="flex items-center justify-between mb-8">
              <span className="inline-flex items-center gap-2 bg-pink-50 text-pink-500 font-semibold uppercase tracking-[0.2em] text-xs px-5 py-2 rounded-full border border-pink-100">
                <SparkleIcon className="w-3 h-3" />
                All Articles
              </span>
            </div>
          </FadeInUp>

          <StaggerContainer
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
            staggerDelay={0.08}
          >
            {regular.map((post) => (
              <StaggerItem key={post.id}>
                <Link
                  href={`/blog/${post.slug}`}
                  className="group block h-full"
                >
                  <div className="border border-pink-100 rounded-2xl overflow-hidden bg-white hover:shadow-lg hover:shadow-pink-200/30 transition-all duration-300 h-full flex flex-col">
                    {/* Image Area */}
                    <div className="aspect-[3/2] overflow-hidden rounded-t-2xl bg-pink-50 relative">
                      {post.image ? (
                        <Image
                          src={post.image}
                          alt={post.title}
                          fill
                          className="object-cover group-hover:scale-105 transition-transform duration-500"
                          sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                        />
                      ) : (
                        <div
                          className={`w-full h-full bg-gradient-to-br ${post.gradient} relative flex items-center justify-center`}
                        >
                          <SparkleIcon className="w-12 h-12 text-white/10" />
                        </div>
                      )}
                    </div>

                    {/* Card Body */}
                    <div className="p-6 flex-1 flex flex-col">
                      {/* Meta: date + read time */}
                      <div className="flex items-center gap-3 text-xs text-pink-400 mb-3">
                        <span className="font-medium">
                          {formatDate(post.date)}
                        </span>
                        <span className="w-1 h-1 rounded-full bg-pink-300" />
                        <span className="font-medium">{post.readTime}</span>
                      </div>

                      {/* Category */}
                      <span className="text-pink-500 text-xs font-semibold uppercase tracking-wider mb-2">
                        {post.category}
                      </span>

                      {/* Title */}
                      <h3 className="text-lg font-bold text-pink-900 mb-2 group-hover:text-gradient-pink transition-colors leading-snug">
                        {post.title}
                      </h3>

                      {/* Excerpt */}
                      <p className="text-pink-700/55 text-sm leading-relaxed flex-1">
                        {post.excerpt}
                      </p>

                      {/* Read More */}
                      <span className="inline-flex items-center gap-2 text-pink-500 font-semibold text-sm mt-4 group-hover:gap-3 transition-all">
                        Read More
                        <svg
                          className="w-3.5 h-3.5"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                          strokeWidth={2.5}
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            d="M17 8l4 4m0 0l-4 4m4-4H3"
                          />
                        </svg>
                      </span>
                    </div>
                  </div>
                </Link>
              </StaggerItem>
            ))}
          </StaggerContainer>
        </div>
      </section>

      <FooterSection />
    </ClientShell>
  );
}
