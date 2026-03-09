"use client";

import { motion } from "framer-motion";
import { ClientShell } from "../components/ClientShell";
import { FooterSection } from "../sections/Footer";
import { FadeInUp } from "../components/FramerAnimations";
import { SparkleIcon } from "../components/Icons";

const contactMethods = [
  {
    title: "General Inquiries",
    email: "hello@curliegirlie.com",
    description: "Questions, feedback, or just want to say hey.",
  },
  {
    title: "Sponsorships & Partnerships",
    email: "sponsors@curliegirlie.com",
    description: "Brand collaborations, ad reads, and partnership opportunities.",
  },
  {
    title: "Guest Pitches",
    email: "guests@curliegirlie.com",
    description: "Want to be on the show? Tell us your curl story.",
  },
  {
    title: "Press & Media",
    email: "press@curliegirlie.com",
    description: "Interview requests, press kits, and media inquiries.",
  },
];

const socials = [
  { name: "Instagram", href: "https://instagram.com/curliegirlie" },
  { name: "TikTok", href: "https://tiktok.com/@curliegirlie" },
  { name: "YouTube", href: "https://youtube.com/@curliegirlie" },
  { name: "Twitter", href: "https://twitter.com/curliegirlie" },
];

export function ContactPageClient() {
  return (
    <ClientShell>
      {/* CTA-style hero header */}
      <section className="relative bg-white pt-28 pb-24 overflow-hidden">
        {/* Background blobs */}
        <div className="absolute top-10 left-[15%] w-80 h-80 bg-pink-200/25 rounded-full blur-3xl" />
        <div className="absolute bottom-10 right-[10%] w-72 h-72 bg-amber-100/25 rounded-full blur-3xl" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-pink-100/15 rounded-full blur-3xl" />

        <div className="relative max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <span className="inline-flex items-center gap-2 bg-pink-50 text-pink-500 border border-pink-100 rounded-full px-4 py-1.5 text-xs font-medium uppercase tracking-wider mb-6">
              <SparkleIcon className="w-3.5 h-3.5" />
              Get in Touch
            </span>
          </motion.div>

          <motion.h1
            className="text-4xl sm:text-5xl md:text-6xl font-black text-pink-900 mb-6 leading-tight"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.1, ease: [0.23, 1, 0.32, 1] }}
          >
            Let&apos;s{" "}
            <span className="bg-gradient-to-r from-pink-500 to-amber-400 bg-clip-text text-transparent">
              Connect
            </span>
          </motion.h1>

          <motion.p
            className="text-lg text-pink-700/70 max-w-xl mx-auto mb-10 leading-relaxed"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.25 }}
          >
            Whether it&apos;s a partnership, a guest pitch, or you just want to
            share your curl story — we&apos;re all ears.
          </motion.p>

          <motion.div
            className="flex flex-col sm:flex-row items-center justify-center gap-4"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.4 }}
          >
            <a
              href="#contact-form"
              className="inline-flex items-center gap-2 bg-gradient-to-r from-pink-500 to-amber-400 text-white px-8 py-3.5 rounded-full font-bold text-base shadow-lg shadow-pink-300/30 hover:shadow-xl hover:shadow-pink-300/40 transition-shadow"
            >
              Send a Message
            </a>
            <a
              href="mailto:hello@curliegirlie.com"
              className="inline-flex items-center gap-2 bg-white text-pink-900 border border-pink-200 px-8 py-3.5 rounded-full font-bold text-base hover:border-pink-300 hover:bg-pink-50/50 transition-colors"
            >
              Email Us Directly
            </a>
          </motion.div>

          {/* Social links as horizontal pills */}
          <motion.div
            className="flex flex-wrap items-center justify-center gap-2.5 mt-10"
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.55 }}
          >
            {socials.map((social) => (
              <a
                key={social.name}
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
                className="bg-pink-50 text-pink-500 border border-pink-100 rounded-full px-4 py-2 text-sm font-medium hover:bg-pink-100 hover:border-pink-200 transition-colors"
              >
                {social.name}
              </a>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Form + Contact Methods */}
      <section id="contact-form" className="py-20 bg-pink-50/50 relative overflow-hidden">
        {/* Background blobs */}
        <div className="absolute top-20 left-[5%] w-64 h-64 bg-pink-200/20 rounded-full blur-3xl" />
        <div className="absolute bottom-20 right-[8%] w-72 h-72 bg-amber-100/20 rounded-full blur-3xl" />

        <div className="relative max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Contact Form */}
            <FadeInUp>
              <div className="bg-white border border-pink-100 rounded-2xl p-8">
                <h2 className="text-2xl font-bold text-pink-900 mb-2">
                  Send Us a Message
                </h2>
                <p className="text-pink-700/60 text-sm mb-6">
                  Fill out the form below and we&apos;ll get back to you soon.
                </p>
                <form className="space-y-5">
                  <div>
                    <label className="block text-sm font-medium text-pink-700 mb-1.5">
                      Name
                    </label>
                    <input
                      type="text"
                      placeholder="Your name"
                      className="w-full px-4 py-3 rounded-xl bg-white border border-pink-100 text-pink-900 placeholder:text-pink-300 focus:outline-none focus:ring-2 focus:ring-pink-400/40 focus:border-pink-300 transition-colors"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-pink-700 mb-1.5">
                      Email
                    </label>
                    <input
                      type="email"
                      placeholder="your@email.com"
                      className="w-full px-4 py-3 rounded-xl bg-white border border-pink-100 text-pink-900 placeholder:text-pink-300 focus:outline-none focus:ring-2 focus:ring-pink-400/40 focus:border-pink-300 transition-colors"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-pink-700 mb-1.5">
                      Subject
                    </label>
                    <select className="w-full px-4 py-3 rounded-xl bg-white border border-pink-100 text-pink-900 focus:outline-none focus:ring-2 focus:ring-pink-400/40 focus:border-pink-300 transition-colors">
                      <option value="">Select a topic</option>
                      <option value="general">General Inquiry</option>
                      <option value="sponsor">Sponsorship</option>
                      <option value="guest">Guest Pitch</option>
                      <option value="press">Press & Media</option>
                      <option value="merch">Merch Question</option>
                      <option value="other">Other</option>
                    </select>
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-pink-700 mb-1.5">
                      Message
                    </label>
                    <textarea
                      rows={5}
                      placeholder="Tell us what's on your mind..."
                      className="w-full px-4 py-3 rounded-xl bg-white border border-pink-100 text-pink-900 placeholder:text-pink-300 focus:outline-none focus:ring-2 focus:ring-pink-400/40 focus:border-pink-300 transition-colors resize-none"
                    />
                  </div>
                  <motion.button
                    type="submit"
                    className="w-full bg-gradient-to-r from-pink-500 to-amber-400 text-white py-3.5 rounded-full font-bold text-lg shadow-lg shadow-pink-300/30 hover:shadow-xl hover:shadow-pink-300/40 transition-shadow"
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                  >
                    Send Message
                  </motion.button>
                </form>
              </div>
            </FadeInUp>

            {/* Contact Methods */}
            <div className="space-y-5">
              {contactMethods.map((method, i) => (
                <FadeInUp key={method.title} delay={i * 0.1}>
                  <div className="bg-white border border-pink-100 rounded-2xl p-6">
                    <div className="flex items-start gap-4">
                      <div className="w-10 h-10 bg-pink-50 border border-pink-100 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                        <SparkleIcon className="w-5 h-5 text-pink-500" />
                      </div>
                      <div>
                        <h3 className="text-lg font-bold text-pink-900">
                          {method.title}
                        </h3>
                        <p className="text-pink-700/55 text-sm mb-2">
                          {method.description}
                        </p>
                        <a
                          href={`mailto:${method.email}`}
                          className="text-pink-500 hover:text-pink-700 font-medium text-sm transition-colors"
                        >
                          {method.email}
                        </a>
                      </div>
                    </div>
                  </div>
                </FadeInUp>
              ))}

              {/* FAQ teaser card */}
              <FadeInUp delay={0.4}>
                <div className="bg-white border border-pink-100 rounded-2xl p-6">
                  <h3 className="text-lg font-bold text-pink-900 mb-2">
                    Quick Answers
                  </h3>
                  <p className="text-pink-700/55 text-sm mb-4">
                    Most inquiries are answered within 48 hours. For urgent press
                    requests, please email us directly.
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {["Sponsorships", "Guest Spots", "Press Kit", "Merch"].map(
                      (tag) => (
                        <span
                          key={tag}
                          className="bg-pink-50 text-pink-500 border border-pink-100 rounded-full px-3 py-1 text-xs font-medium"
                        >
                          {tag}
                        </span>
                      )
                    )}
                  </div>
                </div>
              </FadeInUp>
            </div>
          </div>
        </div>
      </section>

      <FooterSection />
    </ClientShell>
  );
}
