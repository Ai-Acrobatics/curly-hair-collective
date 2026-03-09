"use client";

import { motion } from "framer-motion";
import { ClientShell } from "../components/ClientShell";
import { PageHeader } from "../components/PageHeader";
import { FooterSection } from "../sections/Footer";
import { FadeInUp } from "../components/FramerAnimations";
import { SparkleIcon } from "../components/Icons";

const contactMethods = [
  {
    title: "General Inquiries",
    email: "hello@curlyhaircollective.com",
    description: "Questions, feedback, or just want to say hey.",
  },
  {
    title: "Sponsorships & Partnerships",
    email: "sponsors@curlyhaircollective.com",
    description: "Brand collaborations, ad reads, and partnership opportunities.",
  },
  {
    title: "Guest Pitches",
    email: "guests@curlyhaircollective.com",
    description: "Want to be on the show? Tell us your curl story.",
  },
  {
    title: "Press & Media",
    email: "press@curlyhaircollective.com",
    description: "Interview requests, press kits, and media inquiries.",
  },
];

export function ContactPageClient() {
  return (
    <ClientShell>
      <PageHeader
        badge="Get in Touch"
        title="Let's"
        titleAccent="Connect"
        subtitle="Whether it's a partnership, a guest pitch, or you just want to share your curl story — we're all ears."
      />

      <section className="py-20 bg-pink-50">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Contact Form */}
            <FadeInUp>
              <div className="bg-white rounded-2xl p-8 shadow-lg shadow-pink-200/30">
                <h2 className="text-2xl font-bold text-pink-900 mb-6">
                  Send Us a Message
                </h2>
                <form className="space-y-5">
                  <div>
                    <label className="block text-sm font-medium text-pink-700 mb-1.5">
                      Name
                    </label>
                    <input
                      type="text"
                      placeholder="Your name"
                      className="w-full px-4 py-3 rounded-xl border border-pink-200 text-pink-900 placeholder:text-pink-300 focus:outline-none focus:ring-2 focus:ring-pink-400 focus:border-transparent"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-pink-700 mb-1.5">
                      Email
                    </label>
                    <input
                      type="email"
                      placeholder="your@email.com"
                      className="w-full px-4 py-3 rounded-xl border border-pink-200 text-pink-900 placeholder:text-pink-300 focus:outline-none focus:ring-2 focus:ring-pink-400 focus:border-transparent"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-pink-700 mb-1.5">
                      Subject
                    </label>
                    <select className="w-full px-4 py-3 rounded-xl border border-pink-200 text-pink-900 focus:outline-none focus:ring-2 focus:ring-pink-400 focus:border-transparent">
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
                      className="w-full px-4 py-3 rounded-xl border border-pink-200 text-pink-900 placeholder:text-pink-300 focus:outline-none focus:ring-2 focus:ring-pink-400 focus:border-transparent resize-none"
                    />
                  </div>
                  <motion.button
                    type="submit"
                    className="w-full gradient-pink text-white py-3.5 rounded-full font-bold text-lg shadow-lg shadow-pink-300/40"
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
                  <div className="bg-white rounded-2xl p-6 shadow-md shadow-pink-200/20 magnetic-card">
                    <div className="flex items-start gap-4">
                      <div className="w-10 h-10 gradient-pink rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                        <SparkleIcon className="w-5 h-5 text-white" />
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

              {/* Social */}
              <FadeInUp delay={0.4}>
                <div className="bg-white rounded-2xl p-6 shadow-md shadow-pink-200/20">
                  <h3 className="text-lg font-bold text-pink-900 mb-4">
                    Follow Us
                  </h3>
                  <div className="flex flex-wrap gap-3">
                    {["Instagram", "TikTok", "YouTube", "Twitter"].map(
                      (social) => (
                        <motion.a
                          key={social}
                          href="#"
                          className="bg-pink-100 text-pink-600 px-4 py-2 rounded-full text-sm font-medium hover:bg-pink-200 transition-colors"
                          whileHover={{ scale: 1.05 }}
                        >
                          {social}
                        </motion.a>
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
