import type { Metadata } from "next";
import { BlogPageClient } from "./BlogPageClient";

export const metadata: Metadata = {
  title: "Blog | Curly Hair Collective",
  description:
    "Expert articles on curly hair care, natural hair science, wash day routines, product guides, and curl culture. Your go-to resource for textured hair knowledge.",
  openGraph: {
    title: "Blog | Curly Hair Collective",
    description:
      "Expert articles on curly hair care, science, and culture.",
    type: "website",
    url: "https://curlyhaircollective.com/blog",
  },
  alternates: {
    canonical: "https://curlyhaircollective.com/blog",
  },
  keywords: [
    "curly hair blog",
    "natural hair tips",
    "curl care guide",
    "wash day routine",
    "curly hair science",
    "textured hair articles",
  ],
};

export default function BlogPage() {
  return <BlogPageClient />;
}
