"use client";

import { useState } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { ClientShell } from "../components/ClientShell";
import { PageHeader } from "../components/PageHeader";
import { FooterSection } from "../sections/Footer";
import { FadeInUp } from "../components/FramerAnimations";

interface FAQ {
  question: string;
  answer: string;
  category: string;
}

const faqs: FAQ[] = [
  {
    category: "The Podcast",
    question: "What is Curly Hair Collective?",
    answer:
      "Curly Hair Collective is a podcast and community platform celebrating curly hair culture. We feature expert guests — trichologists, advocates, content creators, and everyday queens — discussing natural hair care, science, culture, and confidence.",
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
    category: "The Podcast",
    question: "How can I be a guest on the show?",
    answer:
      "We love hearing from the community! Send your pitch to guests@curlyhaircollective.com with your name, background, and what you'd like to discuss. We're looking for diverse voices across all curl types and experiences.",
  },
  {
    category: "Community",
    question: "How do I join the Collective?",
    answer:
      "The easiest way is to subscribe to our newsletter on the homepage or community page. You'll get episode alerts, exclusive curl tips, and community updates. We're also active on Instagram, TikTok, YouTube, and Twitter — follow us everywhere!",
  },
  {
    category: "Community",
    question: "Is the community free?",
    answer:
      "Yes! Our podcast, blog, and newsletter are completely free. We may introduce premium content and exclusive community features in the future, but the core Collective will always be free and open.",
  },
  {
    category: "Community",
    question: "What curl types do you cover?",
    answer:
      "All of them! From 2A waves to 4C coils and everything in between. Curly Hair Collective celebrates every texture. Our content is designed to be inclusive and relevant to the full spectrum of textured hair.",
  },
  {
    category: "Merch",
    question: "When does merch drop?",
    answer:
      "Our first merch collection launches alongside the podcast! Join the waitlist on our merch page to get early access, exclusive colorways, and member-only discounts.",
  },
  {
    category: "Merch",
    question: "Do you ship internationally?",
    answer:
      "We're starting with US shipping at launch, with international shipping coming shortly after. Subscribe to our newsletter to be notified when international shipping becomes available.",
  },
  {
    category: "Merch",
    question: "What's your return policy?",
    answer:
      "We offer hassle-free returns within 30 days of purchase for unworn, unwashed items in original packaging. Hair care products are final sale for hygiene reasons. Full details will be available on each product page.",
  },
  {
    category: "Sponsorships",
    question: "How do I sponsor the podcast?",
    answer:
      "Visit our sponsors page for detailed information about our sponsorship tiers (Bronze, Gold, Platinum), audience demographics, and partnership opportunities. Or email sponsors@curlyhaircollective.com directly.",
  },
  {
    category: "Sponsorships",
    question: "What brands do you work with?",
    answer:
      "We partner with brands that align with our values — hair care, beauty, wellness, fashion, and lifestyle companies that celebrate diversity and natural beauty. We only promote products we genuinely believe in.",
  },
  {
    category: "Sponsorships",
    question: "Do you do affiliate partnerships?",
    answer:
      "Yes, we offer affiliate and ambassador programs for brands that are a great fit for our community. All affiliate relationships are transparently disclosed in our content.",
  },
];

const categories = [...new Set(faqs.map((f) => f.category))];

function FAQItem({ faq }: { faq: FAQ }) {
  const [open, setOpen] = useState(false);

  return (
    <div className="bg-white rounded-2xl shadow-md shadow-pink-200/20 overflow-hidden">
      <button
        onClick={() => setOpen(!open)}
        className="w-full text-left p-6 flex items-center justify-between gap-4 hover:bg-pink-50/50 transition-colors"
      >
        <h3 className="text-lg font-bold text-pink-900">{faq.question}</h3>
        <motion.span
          animate={{ rotate: open ? 45 : 0 }}
          transition={{ duration: 0.2 }}
          className="text-pink-400 text-2xl flex-shrink-0 font-light"
        >
          +
        </motion.span>
      </button>
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3, ease: [0.23, 1, 0.32, 1] }}
          >
            <div className="px-6 pb-6">
              <p className="text-pink-700/65 leading-relaxed">{faq.answer}</p>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

export function FAQPageClient() {
  return (
    <ClientShell>
      <PageHeader
        badge="Questions?"
        title="Frequently"
        titleAccent="Asked"
        subtitle="Everything you need to know about the podcast, community, merch, and partnerships."
      />

      <section className="py-20 bg-pink-50">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          {categories.map((category, ci) => (
            <div key={category} className="mb-12 last:mb-0">
              <FadeInUp delay={ci * 0.05}>
                <h2 className="text-2xl font-black text-pink-900 mb-5">
                  {category}
                </h2>
              </FadeInUp>
              <div className="space-y-3">
                {faqs
                  .filter((f) => f.category === category)
                  .map((faq, i) => (
                    <FadeInUp key={faq.question} delay={ci * 0.05 + i * 0.03}>
                      <FAQItem faq={faq} />
                    </FadeInUp>
                  ))}
              </div>
            </div>
          ))}

          <FadeInUp delay={0.3}>
            <div className="mt-16 text-center bg-white rounded-3xl p-10 shadow-lg shadow-pink-200/30">
              <h3 className="text-2xl font-black text-pink-900 mb-3">
                Still have questions?
              </h3>
              <p className="text-pink-700/60 mb-6">
                We&apos;re always happy to help. Reach out and we&apos;ll get back to you.
              </p>
              <Link
                href="/contact"
                className="inline-block gradient-pink text-white px-8 py-3 rounded-full font-bold shadow-lg shadow-pink-300/40"
              >
                Contact Us
              </Link>
            </div>
          </FadeInUp>
        </div>
      </section>

      <FooterSection />
    </ClientShell>
  );
}
