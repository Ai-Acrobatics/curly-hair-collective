import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { blogPosts } from "../../data/blog";
import { BlogPostClient } from "./BlogPostClient";

type Params = Promise<{ slug: string }>;

export async function generateStaticParams() {
  return blogPosts.map((post) => ({ slug: post.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Params;
}): Promise<Metadata> {
  const { slug } = await params;
  const post = blogPosts.find((p) => p.slug === slug);
  if (!post) return {};

  return {
    title: `${post.title} | Curlie Girlie Collective Blog`,
    description: post.excerpt,
    openGraph: {
      title: post.title,
      description: post.excerpt,
      type: "article",
      url: `https://curliegirliecollective.com/blog/${slug}`,
      publishedTime: post.date,
    },
    alternates: {
      canonical: `https://curliegirliecollective.com/blog/${slug}`,
    },
  };
}

export default async function BlogPostPage({
  params,
}: {
  params: Params;
}) {
  const { slug } = await params;
  const post = blogPosts.find((p) => p.slug === slug);
  if (!post) notFound();

  const articleJsonLd = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: post.title,
    description: post.excerpt,
    datePublished: post.date,
    author: {
      "@type": "Organization",
      name: "Curlie Girlie Collective",
      url: "https://curliegirliecollective.com",
    },
    publisher: {
      "@type": "Organization",
      name: "Curlie Girlie Collective",
    },
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(articleJsonLd) }}
      />
      <BlogPostClient post={post} />
    </>
  );
}
