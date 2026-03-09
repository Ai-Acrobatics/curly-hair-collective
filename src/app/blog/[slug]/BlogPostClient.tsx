"use client";

import Link from "next/link";
import Image from "next/image";
import { ClientShell } from "../../components/ClientShell";
import { PageHeader } from "../../components/PageHeader";
import { FooterSection } from "../../sections/Footer";
import { FadeInUp } from "../../components/FramerAnimations";
import type { BlogPost } from "../../data/blog";

export function BlogPostClient({ post }: { post: BlogPost }) {
  return (
    <ClientShell>
      <PageHeader
        badge={post.category}
        title={post.title}
        subtitle={`${post.readTime} · ${new Date(post.date).toLocaleDateString("en-US", { month: "long", day: "numeric", year: "numeric" })}`}
      />

      <section className="py-20 bg-pink-50">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          {post.image && (
            <FadeInUp>
              <div className="relative aspect-[16/9] rounded-2xl overflow-hidden mb-10 shadow-lg shadow-pink-200/30">
                <Image
                  src={post.image}
                  alt={post.title}
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 100vw, 768px"
                  priority
                />
              </div>
            </FadeInUp>
          )}
          <FadeInUp>
            <div className="bg-white rounded-2xl p-8 md:p-12 shadow-lg shadow-pink-200/30">
              <div className="prose prose-pink max-w-none">
                <p className="text-pink-700/70 text-lg leading-relaxed">
                  {post.excerpt}
                </p>
                <div className="mt-8 p-6 bg-pink-50 rounded-xl border border-pink-100">
                  <p className="text-pink-600 font-medium text-center">
                    Full article coming soon. Subscribe to get notified when it
                    drops!
                  </p>
                </div>
              </div>
            </div>
          </FadeInUp>

          <FadeInUp delay={0.2}>
            <div className="text-center mt-10">
              <Link
                href="/blog"
                className="inline-flex items-center gap-2 text-pink-500 hover:text-pink-700 font-semibold transition-colors"
              >
                <span>&larr;</span> All Articles
              </Link>
            </div>
          </FadeInUp>
        </div>
      </section>

      <FooterSection />
    </ClientShell>
  );
}
