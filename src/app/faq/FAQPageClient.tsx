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
        subtitle="Everything you need to know about the podcast, our faith, alternative hair, and how to get involved."
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
