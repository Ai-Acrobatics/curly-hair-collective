"use client";

import { useState } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { ClientShell } from "../components/ClientShell";
import { FooterSection } from "../sections/Footer";
import { FadeInUp } from "../components/FramerAnimations";
import { SparkleIcon } from "../components/Icons";

interface FAQ {
  question: string;
  answer: string;
  category: string;
}

const faqs: FAQ[] = [
  {
    category: "The Podcast",
    question: "What is the Curlie Girlie Collective?",
    answer:
      "The Curlie Girlie Collective is a faith-based podcast hosted by Sabrina Anderson (@fabsabstyle) and Chanelle (@createdbychanelle). We talk about faith, hair, identity, and becoming. Our core mission is simple: anybody can come to the Lord, no matter where you're at in your walk. We want to help women follow Jesus Christ and lead in their faith.",
  },
  {
    category: "The Podcast",
    question: "Who are the hosts?",
    answer:
      "Sabrina Anderson and Chanelle are both alternative hair educators at Jon Renau, one of the leading wig and topper brands. They both came to the Lord later in life and are passionate about sharing their faith journey while helping women feel confident and beautiful through alternative hair solutions.",
  },
  {
    category: "The Podcast",
    question: "Is this a Christian podcast?",
    answer:
      "Yes! We are a faith-centered podcast rooted in following Jesus Christ. But we welcome everyone — no matter where you are in your faith journey. Whether you've been walking with the Lord for decades or you're just curious, you belong here. Our heart is that anybody can come to the Lord.",
  },
  {
    category: "The Podcast",
    question: "When do new episodes come out?",
    answer:
      "New episodes drop weekly. Subscribe to our newsletter or follow us on social media to get notified when new episodes are released.",
  },
  {
    category: "The Podcast",
    question: "Where can I listen?",
    answer:
      "We'll be available on Spotify, Apple Podcasts, YouTube, and Amazon Music. Follow us on your preferred platform to get notified at launch!",
  },
  {
    category: "Faith & Hair",
    question: "What is alternative hair education?",
    answer:
      "Alternative hair includes wigs, toppers, hair extensions, and other hair solutions for women experiencing hair loss from alopecia, medical treatments, hormonal changes, aging, or other causes. As alternative hair educators at Jon Renau, Sabrina and Chanelle help women find confidence and feel beautiful through these solutions.",
  },
  {
    category: "Faith & Hair",
    question: "Do I need to be experiencing hair loss to listen?",
    answer:
      "Not at all! While we do talk about wigs, toppers, and hair journeys, our podcast is really about faith, identity, and becoming who God made you to be. If you're a woman who loves Jesus (or wants to know more about Him), this podcast is for you.",
  },
  {
    category: "Faith & Hair",
    question: "How do faith and hair connect?",
    answer:
      "For many women, their hair is deeply tied to their identity. When hair loss happens, it can shake your confidence and even your faith. We believe that walking through these seasons with God — and with community — can be transformative. Your hair journey can become a faith journey when you let God lead.",
  },
  {
    category: "Community",
    question: "How do I join the Collective?",
    answer:
      "The easiest way is to subscribe to our newsletter on the homepage. You'll get episode alerts, devotionals, encouragement, and community updates. We're also active on Instagram, TikTok, and YouTube — follow us everywhere!",
  },
  {
    category: "Community",
    question: "Is the community free?",
    answer:
      "Yes! Our podcast, blog, and newsletter are completely free. We may introduce premium content and exclusive community features in the future, but the core Collective will always be free and open to everyone.",
  },
  {
    category: "Merch",
    question: "What kind of merch do you have?",
    answer:
      "Our merch is faith-forward and designed to encourage you daily. Think 'God's Girl' tees, 'Powered by Prayer' hoodies, 'Faith Over Fear' satin bonnets, cross necklaces, Scripture affirmation cards, and more. Everything is designed to remind you of whose you are.",
  },
  {
    category: "Merch",
    question: "When does merch drop?",
    answer:
      "Our first merch collection launches alongside the podcast! Join the waitlist on our merch page to get early access and member-only discounts.",
  },
  {
    category: "Sponsorships",
    question: "How do I sponsor the podcast?",
    answer:
      "Visit our sponsors page for detailed information about our sponsorship tiers (Bronze, Gold, Platinum), audience demographics, and partnership opportunities. We work best with faith-aligned brands, alternative hair companies, beauty brands, and Christian organizations.",
  },
  {
    category: "Sponsorships",
    question: "What brands do you work with?",
    answer:
      "We partner with brands that align with our mission — faith-based organizations, alternative hair brands, beauty and wellness companies, Christian publishers, and women's ministry resources. We only promote products and services we genuinely believe in and that serve our community.",
  },
];

const categories = [...new Set(faqs.map((f) => f.category))];

function FAQItem({ faq }: { faq: FAQ }) {
  const [open, setOpen] = useState(false);

  return (
    <div className="border border-pink-100 rounded-2xl bg-white overflow-hidden transition-all duration-300 hover:shadow-sm">
      <button
        onClick={() => setOpen(!open)}
        className="w-full text-left p-5 md:p-6 flex items-center justify-between gap-4 hover:bg-pink-50/30 transition-colors"
      >
        <h3 className="text-base md:text-lg font-bold text-pink-900">
          {faq.question}
        </h3>
        <motion.div
          animate={{ rotate: open ? 180 : 0 }}
          transition={{ duration: 0.25, ease: [0.23, 1, 0.32, 1] }}
          className="flex-shrink-0 w-8 h-8 rounded-full bg-pink-50 border border-pink-100 flex items-center justify-center"
        >
          <svg
            className="w-4 h-4 text-pink-400"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M19 9l-7 7-7-7"
            />
          </svg>
        </motion.div>
      </button>
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3, ease: [0.23, 1, 0.32, 1] }}
          >
            <div className="px-5 md:px-6 pb-5 md:pb-6 border-t border-pink-50">
              <p className="text-pink-700/60 leading-relaxed pt-4 font-body">
                {faq.answer}
              </p>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

export function FAQPageClient() {
  const [activeCategory, setActiveCategory] = useState<string | null>(null);

  const filteredFaqs = activeCategory
    ? faqs.filter((f) => f.category === activeCategory)
    : faqs;

  return (
    <ClientShell>
      {/* Inline Section Header */}
      <section className="relative py-24 md:py-32 bg-white overflow-hidden">
        {/* Decorative blobs */}
        <div className="absolute top-20 -right-32 w-96 h-96 bg-pink-100/40 rounded-full blur-3xl pointer-events-none" />
        <div className="absolute bottom-10 -left-32 w-80 h-80 bg-fuchsia-100/30 rounded-full blur-3xl pointer-events-none" />

        <div className="max-w-[1280px] mx-auto px-6 md:px-12 relative">
          <FadeInUp>
            <span className="inline-flex items-center gap-2 bg-pink-50 text-pink-500 font-semibold uppercase tracking-[0.2em] text-xs px-5 py-2 rounded-full border border-pink-100 font-body mb-6">
              <SparkleIcon className="w-3 h-3 text-gold" />
              Questions?
            </span>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-black text-pink-900 tracking-tight mt-4">
              Frequently{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-pink-500 to-fuchsia-500">
                Asked
              </span>
            </h1>
            <p className="text-pink-600/60 mt-4 max-w-2xl text-lg font-body">
              Everything you need to know about the podcast, our faith,
              alternative hair, and how to get involved.
            </p>
          </FadeInUp>
        </div>
      </section>

      {/* FAQ Content */}
      <section className="py-20 md:py-24 bg-pink-50/50 relative">
        <div className="absolute top-1/3 right-0 w-72 h-72 bg-pink-100/20 rounded-full blur-3xl pointer-events-none" />
        <div className="max-w-3xl mx-auto px-6 md:px-12 relative">
          {/* Category Filter Pills */}
          <FadeInUp>
            <div className="flex flex-wrap gap-2 mb-10 md:mb-14">
              <button
                onClick={() => setActiveCategory(null)}
                className={`px-5 py-2 rounded-full text-sm font-medium transition-all duration-200 border font-body ${
                  activeCategory === null
                    ? "bg-gradient-to-r from-pink-500 to-fuchsia-500 text-white border-transparent"
                    : "bg-pink-50 text-pink-500 border-pink-100 hover:bg-pink-100"
                }`}
              >
                All
              </button>
              {categories.map((category) => (
                <button
                  key={category}
                  onClick={() =>
                    setActiveCategory(
                      activeCategory === category ? null : category
                    )
                  }
                  className={`px-5 py-2 rounded-full text-sm font-medium transition-all duration-200 border font-body ${
                    activeCategory === category
                      ? "bg-gradient-to-r from-pink-500 to-fuchsia-500 text-white border-transparent"
                      : "bg-pink-50 text-pink-500 border-pink-100 hover:bg-pink-100"
                  }`}
                >
                  {category}
                </button>
              ))}
            </div>
          </FadeInUp>

          {/* FAQ Items */}
          <div className="space-y-3">
            <AnimatePresence mode="popLayout">
              {filteredFaqs.map((faq, i) => (
                <motion.div
                  key={faq.question}
                  layout
                  initial={{ opacity: 0, y: 12 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -12 }}
                  transition={{ duration: 0.3, delay: i * 0.03 }}
                >
                  <FAQItem faq={faq} />
                </motion.div>
              ))}
            </AnimatePresence>
          </div>

          {/* Still have questions — Final CTA */}
          <FadeInUp delay={0.2}>
            <div className="mt-16 md:mt-20 border border-pink-100 rounded-3xl bg-white p-10 md:p-14 text-center">
              <SparkleIcon className="w-8 h-8 text-gold mx-auto mb-6" />
              <h3 className="text-2xl md:text-3xl font-black text-pink-900 tracking-tight">
                Still have{" "}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-pink-500 to-fuchsia-500">
                  questions?
                </span>
              </h3>
              <p className="text-pink-600/60 mt-3 max-w-md mx-auto font-body">
                We&apos;re always happy to help. Reach out and we&apos;ll get
                back to you.
              </p>
              <div className="mt-8">
                <Link
                  href="/contact"
                  className="inline-flex items-center gap-2 bg-gradient-to-r from-pink-500 to-fuchsia-500 text-white px-8 py-3.5 rounded-full font-bold hover:from-pink-600 hover:to-fuchsia-600 transition-all"
                >
                  Contact Us
                  <svg
                    className="w-4 h-4"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M17 8l4 4m0 0l-4 4m4-4H3"
                    />
                  </svg>
                </Link>
              </div>
            </div>
          </FadeInUp>
        </div>
      </section>

      <FooterSection />
    </ClientShell>
  );
}
