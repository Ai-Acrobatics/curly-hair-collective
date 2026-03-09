"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { ClientShell } from "../components/ClientShell";
import { PageHeader } from "../components/PageHeader";
import { FooterSection } from "../sections/Footer";
import {
  FadeInUp,
  StaggerContainer,
  StaggerItem,
  TiltCard,
} from "../components/FramerAnimations";
import { SparkleIcon } from "../components/Icons";
import { blogPosts } from "../data/blog";

export function BlogPageClient() {
  const featured = blogPosts.filter((p) => p.featured);
  const regular = blogPosts.filter((p) => !p.featured);

  return (
    <ClientShell>
      <PageHeader
        badge="The Blog"
        title="Faith &"
        titleAccent="Hair"
        subtitle="Devotionals, encouragement, and real talk about faith, hair journeys, identity, and becoming who God made you to be."
      />

      <section className="py-20 bg-pink-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Featured Posts */}
          {featured.length > 0 && (
            <>
              <FadeInUp>
                <span className="text-pink-400 font-semibold uppercase tracking-[0.25em] text-sm">
                  Featured
                </span>
                <h2 className="text-3xl font-black text-pink-900 mt-2 mb-8">
                  Must-Read Articles
                </h2>
              </FadeInUp>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
                {featured.map((post, i) => (
                  <FadeInUp key={post.id} delay={i * 0.1}>
                    <TiltCard className="group h-full">
                      <Link href={`/blog/${post.slug}`} className="block h-full">
                        <div className="bg-white rounded-2xl overflow-hidden shadow-lg shadow-pink-200/40 magnetic-card h-full flex flex-col">
                          <div
                            className={`h-56 bg-gradient-to-br ${post.gradient} relative overflow-hidden`}
                          >
                            <div className="absolute inset-0 flex items-center justify-center">
                              <SparkleIcon className="w-20 h-20 text-white/10" />
                            </div>
                            <div className="absolute top-4 left-4">
                              <span className="bg-gold text-pink-900 text-xs font-bold px-3 py-1 rounded-full glow-gold">
                                Featured
                              </span>
                            </div>
                            <div className="absolute bottom-4 left-4 flex items-center gap-2">
                              <span className="glass text-white text-xs font-medium px-3 py-1 rounded-full">
                                {post.readTime}
                              </span>
                              <span className="glass text-white text-xs font-medium px-3 py-1 rounded-full">
                                {post.category}
                              </span>
                            </div>
                          </div>
                          <div className="p-6 flex-1 flex flex-col">
                            <h3 className="text-xl font-bold text-pink-900 mb-3 group-hover:text-gradient-pink transition-colors">
                              {post.title}
                            </h3>
                            <p className="text-pink-700/60 text-sm leading-relaxed flex-1">
                              {post.excerpt}
                            </p>
                            <div className="mt-4">
                              <span className="text-pink-500 font-semibold text-sm">
                                Read More &rarr;
                              </span>
                            </div>
                          </div>
                        </div>
                      </Link>
                    </TiltCard>
                  </FadeInUp>
                ))}
              </div>
            </>
          )}

          {/* All Posts */}
          <FadeInUp>
            <h2 className="text-3xl font-black text-pink-900 mb-8">
              All Articles
            </h2>
          </FadeInUp>

          <StaggerContainer
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
            staggerDelay={0.08}
          >
            {regular.map((post) => (
              <StaggerItem key={post.id}>
                <TiltCard className="group h-full">
                  <Link href={`/blog/${post.slug}`} className="block h-full">
                    <div className="bg-white rounded-2xl overflow-hidden shadow-md shadow-pink-200/30 magnetic-card h-full flex flex-col">
                      <div
                        className={`h-36 bg-gradient-to-br ${post.gradient} relative overflow-hidden`}
                      >
                        <div className="absolute bottom-3 left-3 flex items-center gap-2">
                          <span className="glass text-white text-xs font-medium px-3 py-1 rounded-full">
                            {post.readTime}
                          </span>
                        </div>
                      </div>
                      <div className="p-5 flex-1 flex flex-col">
                        <span className="text-pink-400 text-xs font-semibold uppercase tracking-wider mb-1">
                          {post.category}
                        </span>
                        <h3 className="text-lg font-bold text-pink-900 mb-2">
                          {post.title}
                        </h3>
                        <p className="text-pink-700/55 text-sm leading-relaxed flex-1">
                          {post.excerpt}
                        </p>
                        <motion.span
                          className="text-pink-500 font-semibold text-sm mt-3 inline-block"
                          whileHover={{ x: 4 }}
                        >
                          Read More &rarr;
                        </motion.span>
                      </div>
                    </div>
                  </Link>
                </TiltCard>
              </StaggerItem>
            ))}
          </StaggerContainer>
        </div>
      </section>

      <FooterSection />
    </ClientShell>
  );
}
