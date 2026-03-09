"use client";

import { motion } from "framer-motion";
import { ClientShell } from "../components/ClientShell";
import { PageHeader } from "../components/PageHeader";
import { FooterSection } from "../sections/Footer";
import {
  FadeInUp,
  StaggerContainer,
  StaggerItem,
} from "../components/FramerAnimations";
import { SparkleIcon } from "../components/Icons";

const sponsorTiers = [
  {
    name: "Bronze",
    tagline: "Get Noticed",
    price: "Contact Us",
    gradient: "from-pink-300 via-pink-400 to-rose-400",
    features: [
      "Pre-roll mention (15 sec) on 2 episodes/month",
      "Logo on website sponsors page",
      "Social media shoutout (1x/month)",
      "Monthly performance report",
    ],
  },
  {
    name: "Gold",
    tagline: "Most Popular",
    price: "Contact Us",
    gradient: "from-pink-400 via-pink-500 to-rose-600",
    featured: true,
    features: [
      "Mid-roll ad read (60 sec) on all episodes",
      "Dedicated blog post feature",
      "Homepage logo placement",
      "Newsletter feature (1x/month)",
      "Social media campaign (4 posts)",
      "Custom discount code for listeners",
      "Quarterly performance review call",
    ],
  },
  {
    name: "Platinum",
    tagline: "Full Partnership",
    price: "Contact Us",
    gradient: "from-fuchsia-500 via-pink-500 to-rose-500",
    features: [
      "Title sponsor on episode series",
      "Co-branded content creation",
      "Exclusive merch collaboration",
      "VIP event access & co-hosting",
      "Full-page website feature",
      "Weekly social media integration",
      "Priority product sampling to community",
      "Dedicated account manager",
    ],
  },
];

const audienceStats = [
  { value: "25-45", label: "Core Age Range" },
  { value: "95%", label: "Female Audience" },
  { value: "92%", label: "Engagement Rate" },
  { value: "80%", label: "Women of Faith" },
];

const idealPartners = [
  "Alternative Hair Brands",
  "Christian Publishers",
  "Faith-Based Organizations",
  "Beauty & Hair Care",
  "Wellness & Self-Care",
  "Women's Ministry Resources",
  "Modest Fashion",
  "Christian Conferences & Events",
];

export function SponsorsPageClient() {
  return (
    <ClientShell>
      <PageHeader
        badge="Partnerships"
        title="Grow With"
        titleAccent="The Collective"
        subtitle="Reach a faith-driven community of women who care about hair, identity, and walking with Jesus. Let's create something beautiful together."
      />

      <section className="py-20 bg-pink-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Audience Stats */}
          <FadeInUp>
            <div className="text-center mb-4">
              <span className="text-pink-400 font-semibold uppercase tracking-[0.25em] text-sm">
                Our Audience
              </span>
              <h2 className="text-3xl md:text-4xl font-black text-pink-900 mt-2">
                Who You&apos;ll Reach
              </h2>
              <p className="text-pink-700/60 max-w-2xl mx-auto mt-3">
                Our listeners are Christian women passionate about faith, beauty, and identity.
                Many are navigating hair loss or exploring alternative hair options like wigs
                and toppers. They trust our recommendations because we keep it real.
              </p>
            </div>
          </FadeInUp>

          <FadeInUp delay={0.1}>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-20 max-w-3xl mx-auto">
              {audienceStats.map((stat) => (
                <div
                  key={stat.label}
                  className="text-center bg-white p-5 rounded-2xl shadow-md shadow-pink-200/30"
                >
                  <div className="text-2xl md:text-3xl font-black text-gradient-pink">
                    {stat.value}
                  </div>
                  <div className="text-xs text-pink-500/70 mt-1 font-medium">
                    {stat.label}
                  </div>
                </div>
              ))}
            </div>
          </FadeInUp>

          {/* Sponsorship Tiers */}
          <FadeInUp>
            <div className="text-center mb-12">
              <span className="text-pink-400 font-semibold uppercase tracking-[0.25em] text-sm">
                Sponsorship Tiers
              </span>
              <h2 className="text-3xl md:text-4xl font-black text-pink-900 mt-2">
                Find Your Fit
              </h2>
            </div>
          </FadeInUp>

          <StaggerContainer
            className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-20"
            staggerDelay={0.12}
          >
            {sponsorTiers.map((tier) => (
              <StaggerItem key={tier.name}>
                <div
                  className={`bg-white rounded-2xl overflow-hidden shadow-lg magnetic-card h-full flex flex-col ${
                    tier.featured
                      ? "ring-2 ring-pink-400 shadow-pink-300/40"
                      : "shadow-pink-200/30"
                  }`}
                >
                  <div
                    className={`bg-gradient-to-br ${tier.gradient} p-6 text-center relative`}
                  >
                    {tier.featured && (
                      <div className="absolute top-3 right-3">
                        <span className="bg-gold text-pink-900 text-xs font-bold px-3 py-1 rounded-full glow-gold">
                          Recommended
                        </span>
                      </div>
                    )}
                    <h3 className="text-2xl font-black text-white">
                      {tier.name}
                    </h3>
                    <p className="text-white/70 text-sm">{tier.tagline}</p>
                    <div className="mt-3 text-white font-bold text-lg">
                      {tier.price}
                    </div>
                  </div>
                  <div className="p-6 flex-1 flex flex-col">
                    <ul className="space-y-3 flex-1">
                      {tier.features.map((feature) => (
                        <li
                          key={feature}
                          className="flex items-start gap-2 text-pink-700/70 text-sm"
                        >
                          <SparkleIcon className="w-4 h-4 text-pink-400 mt-0.5 flex-shrink-0" />
                          {feature}
                        </li>
                      ))}
                    </ul>
                    <motion.a
                      href="mailto:sponsors@curliegirlie.com"
                      className={`mt-6 block text-center py-3 rounded-full font-bold text-sm ${
                        tier.featured
                          ? "gradient-pink text-white shadow-lg shadow-pink-300/40"
                          : "bg-pink-100 text-pink-600 hover:bg-pink-200"
                      }`}
                      whileHover={{ scale: 1.03 }}
                      whileTap={{ scale: 0.97 }}
                    >
                      Get in Touch
                    </motion.a>
                  </div>
                </div>
              </StaggerItem>
            ))}
          </StaggerContainer>

          {/* Ideal Partners */}
          <FadeInUp>
            <div className="bg-white rounded-3xl p-10 md:p-14 shadow-lg shadow-pink-200/30 text-center">
              <SparkleIcon className="w-8 h-8 text-gold mx-auto mb-4" />
              <h3 className="text-2xl md:text-3xl font-black text-pink-900 mb-3">
                Ideal Partners
              </h3>
              <p className="text-pink-700/60 max-w-lg mx-auto mb-8">
                We work best with brands that align with our mission of faith,
                hair education, and helping women find their identity in Christ.
              </p>
              <div className="flex flex-wrap justify-center gap-3">
                {idealPartners.map((partner) => (
                  <motion.span
                    key={partner}
                    className="bg-pink-100 text-pink-600 px-5 py-2.5 rounded-full text-sm font-medium"
                    whileHover={{
                      scale: 1.08,
                      backgroundColor: "#FFE4EF",
                    }}
                  >
                    {partner}
                  </motion.span>
                ))}
              </div>
              <div className="mt-10">
                <motion.a
                  href="mailto:sponsors@curliegirlie.com"
                  className="gradient-pink text-white px-8 py-4 rounded-full font-bold text-lg shadow-xl shadow-pink-300/40 inline-block shimmer"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  Let&apos;s Talk Partnership
                </motion.a>
              </div>
            </div>
          </FadeInUp>
        </div>
      </section>

      <FooterSection />
    </ClientShell>
  );
}
