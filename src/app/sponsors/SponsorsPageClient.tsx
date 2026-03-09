"use client";

import { motion } from "framer-motion";
import { ClientShell } from "../components/ClientShell";
import { FooterSection } from "../sections/Footer";
import {
  FadeInUp,
  StaggerContainer,
  StaggerItem,
} from "../components/FramerAnimations";
import { SparkleIcon } from "../components/Icons";

const sponsorBenefits = [
  {
    title: "Pre-Roll & Mid-Roll Ad Reads",
    description:
      "Authentic host-read ads that resonate with our faith-driven audience. Choose 15-second pre-rolls or 60-second mid-roll placements.",
    icon: "🎙️",
  },
  {
    title: "Social Media Campaigns",
    description:
      "Dedicated posts across Instagram, TikTok, and YouTube featuring your brand with genuine, heartfelt endorsements.",
    icon: "📱",
  },
  {
    title: "Newsletter Features",
    description:
      "Reach our most engaged subscribers directly in their inbox with featured brand spotlights and exclusive offers.",
    icon: "💌",
  },
  {
    title: "Co-Branded Content",
    description:
      "Collaborative blog posts, devotionals, and video content that naturally integrates your brand with our mission.",
    icon: "✨",
  },
  {
    title: "Merch Collaborations",
    description:
      "Exclusive co-branded merchandise drops and product collaborations that our community will love.",
    icon: "👑",
  },
  {
    title: "Event Access & Co-Hosting",
    description:
      "VIP presence at Collective events, live podcast recordings, and faith-centered community gatherings.",
    icon: "🎪",
  },
];

const audienceStats = [
  { value: "25-45", label: "Core Age Range" },
  { value: "95%", label: "Female Audience" },
  { value: "92%", label: "Engagement Rate" },
  { value: "80%", label: "Women of Faith" },
];

const sponsorTiers = [
  {
    name: "Bronze",
    tagline: "Get Noticed",
    price: "Contact Us",
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
      {/* Hero / Inline Section Header */}
      <section className="relative py-24 md:py-32 bg-white overflow-hidden">
        {/* Decorative blobs */}
        <div className="absolute top-20 -left-32 w-96 h-96 bg-pink-100/40 rounded-full blur-3xl pointer-events-none" />
        <div className="absolute bottom-10 -right-32 w-80 h-80 bg-fuchsia-100/30 rounded-full blur-3xl pointer-events-none" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-pink-50/50 rounded-full blur-3xl pointer-events-none" />

        <div className="max-w-[1280px] mx-auto px-6 md:px-12 relative">
          <FadeInUp>
            <span className="inline-flex items-center gap-2 bg-pink-50 text-pink-500 font-semibold uppercase tracking-[0.2em] text-xs px-5 py-2 rounded-full border border-pink-100 font-body mb-6">
              <SparkleIcon className="w-3 h-3 text-gold" />
              Partnerships
            </span>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-black text-pink-900 tracking-tight mt-4">
              Grow With{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-pink-500 to-fuchsia-500">
                The Collective
              </span>
            </h1>
            <p className="text-pink-600/60 mt-4 max-w-2xl text-lg font-body">
              Reach a faith-driven community of women who care about hair,
              identity, and walking with Jesus. Let&apos;s create something
              beautiful together.
            </p>
          </FadeInUp>
        </div>
      </section>

      {/* Audience Stats — Clean Grid */}
      <section className="py-20 md:py-24 bg-pink-50/50 relative">
        <div className="absolute top-0 right-20 w-64 h-64 bg-pink-100/30 rounded-full blur-3xl pointer-events-none" />
        <div className="max-w-[1280px] mx-auto px-6 md:px-12 relative">
          <FadeInUp>
            <div className="text-center mb-12">
              <span className="inline-flex items-center gap-2 bg-pink-50 text-pink-500 font-semibold uppercase tracking-[0.2em] text-xs px-5 py-2 rounded-full border border-pink-100 font-body mb-4">
                <SparkleIcon className="w-3 h-3 text-gold" />
                Our Audience
              </span>
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-black text-pink-900 tracking-tight mt-4">
                Who You&apos;ll Reach
              </h2>
              <p className="text-pink-600/60 max-w-2xl mx-auto mt-4 text-lg font-body">
                Our listeners are Christian women passionate about faith, beauty,
                and identity. They trust our recommendations because we keep it
                real.
              </p>
            </div>
          </FadeInUp>

          <FadeInUp delay={0.1}>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6 max-w-4xl mx-auto">
              {audienceStats.map((stat) => (
                <div
                  key={stat.label}
                  className="text-center bg-white border border-pink-100 rounded-2xl p-6 md:p-8 hover:shadow-sm transition-shadow"
                >
                  <div className="text-3xl md:text-4xl font-black text-transparent bg-clip-text bg-gradient-to-r from-pink-500 to-fuchsia-500">
                    {stat.value}
                  </div>
                  <div className="text-sm text-pink-500/70 mt-2 font-medium font-body">
                    {stat.label}
                  </div>
                </div>
              ))}
            </div>
          </FadeInUp>
        </div>
      </section>

      {/* Sponsor Benefits — Awards/List Pattern */}
      <section className="py-20 md:py-24 bg-white relative">
        <div className="absolute bottom-20 -left-20 w-72 h-72 bg-fuchsia-50/40 rounded-full blur-3xl pointer-events-none" />
        <div className="max-w-[1280px] mx-auto px-6 md:px-12 relative">
          <div className="flex items-center justify-between mb-12 md:mb-16">
            <FadeInUp>
              <span className="inline-flex items-center gap-2 bg-pink-50 text-pink-500 font-semibold uppercase tracking-[0.2em] text-xs px-5 py-2 rounded-full border border-pink-100 font-body mb-4">
                <SparkleIcon className="w-3 h-3 text-gold" />
                What We Offer
              </span>
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-black text-pink-900 tracking-tight mt-4">
                Partnership Benefits
              </h2>
              <p className="text-pink-600/60 mt-4 max-w-xl text-lg font-body">
                Everything your brand needs to connect authentically with our
                community.
              </p>
            </FadeInUp>
          </div>

          <StaggerContainer className="space-y-4" staggerDelay={0.08}>
            {sponsorBenefits.map((benefit) => (
              <StaggerItem key={benefit.title}>
                <motion.div
                  className="group border border-pink-100 rounded-2xl p-5 md:p-6 bg-white hover:bg-pink-50/30 transition-all duration-300 cursor-default"
                  whileHover={{ x: 4 }}
                >
                  <div className="flex items-center gap-4 md:gap-6">
                    <span className="text-2xl md:text-3xl flex-shrink-0">
                      {benefit.icon}
                    </span>
                    <div className="flex-1 min-w-0">
                      <h3 className="text-lg md:text-xl font-bold text-pink-900 group-hover:text-pink-700 transition-colors">
                        {benefit.title}
                      </h3>
                      <p className="text-pink-600/50 text-sm md:text-base mt-1 font-body">
                        {benefit.description}
                      </p>
                    </div>
                    <svg
                      className="w-5 h-5 text-pink-300 group-hover:text-pink-500 group-hover:translate-x-1 transition-all flex-shrink-0"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M9 5l7 7-7 7"
                      />
                    </svg>
                  </div>
                </motion.div>
              </StaggerItem>
            ))}
          </StaggerContainer>
        </div>
      </section>

      {/* Sponsorship Tiers */}
      <section className="py-20 md:py-24 bg-pink-50/50 relative">
        <div className="absolute top-10 right-10 w-80 h-80 bg-pink-100/30 rounded-full blur-3xl pointer-events-none" />
        <div className="max-w-[1280px] mx-auto px-6 md:px-12 relative">
          <FadeInUp>
            <div className="text-center mb-12 md:mb-16">
              <span className="inline-flex items-center gap-2 bg-pink-50 text-pink-500 font-semibold uppercase tracking-[0.2em] text-xs px-5 py-2 rounded-full border border-pink-100 font-body mb-4">
                <SparkleIcon className="w-3 h-3 text-gold" />
                Sponsorship Tiers
              </span>
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-black text-pink-900 tracking-tight mt-4">
                Find Your Fit
              </h2>
            </div>
          </FadeInUp>

          <StaggerContainer
            className="grid grid-cols-1 md:grid-cols-3 gap-6"
            staggerDelay={0.12}
          >
            {sponsorTiers.map((tier) => (
              <StaggerItem key={tier.name}>
                <div
                  className={`bg-white border rounded-2xl overflow-hidden h-full flex flex-col transition-all duration-300 hover:shadow-md ${
                    tier.featured
                      ? "border-pink-300 shadow-sm"
                      : "border-pink-100"
                  }`}
                >
                  <div className="p-6 md:p-8 border-b border-pink-100 relative">
                    {tier.featured && (
                      <span className="absolute top-4 right-4 bg-pink-50 text-pink-500 text-xs font-bold px-3 py-1 rounded-full border border-pink-100">
                        Recommended
                      </span>
                    )}
                    <h3 className="text-2xl font-black text-pink-900">
                      {tier.name}
                    </h3>
                    <p className="text-pink-500/60 text-sm mt-1 font-body">
                      {tier.tagline}
                    </p>
                    <div className="mt-3 text-pink-700 font-bold text-lg">
                      {tier.price}
                    </div>
                  </div>
                  <div className="p-6 md:p-8 flex-1 flex flex-col">
                    <ul className="space-y-3 flex-1">
                      {tier.features.map((feature) => (
                        <li
                          key={feature}
                          className="flex items-start gap-3 text-pink-700/70 text-sm font-body"
                        >
                          <SparkleIcon className="w-3.5 h-3.5 text-pink-400 mt-0.5 flex-shrink-0" />
                          {feature}
                        </li>
                      ))}
                    </ul>
                    <motion.a
                      href="mailto:sponsors@curliegirlie.com"
                      className={`mt-8 block text-center py-3.5 rounded-full font-bold text-sm transition-colors ${
                        tier.featured
                          ? "bg-gradient-to-r from-pink-500 to-fuchsia-500 text-white hover:from-pink-600 hover:to-fuchsia-600"
                          : "bg-pink-50 text-pink-600 border border-pink-100 hover:bg-pink-100"
                      }`}
                      whileHover={{ scale: 1.02 }}
                      whileTap={{ scale: 0.98 }}
                    >
                      Get in Touch
                    </motion.a>
                  </div>
                </div>
              </StaggerItem>
            ))}
          </StaggerContainer>
        </div>
      </section>

      {/* Ideal Partners */}
      <section className="py-20 md:py-24 bg-white relative">
        <div className="absolute bottom-0 left-1/3 w-96 h-96 bg-pink-50/60 rounded-full blur-3xl pointer-events-none" />
        <div className="max-w-[1280px] mx-auto px-6 md:px-12 relative">
          <FadeInUp>
            <div className="text-center mb-12">
              <span className="inline-flex items-center gap-2 bg-pink-50 text-pink-500 font-semibold uppercase tracking-[0.2em] text-xs px-5 py-2 rounded-full border border-pink-100 font-body mb-4">
                <SparkleIcon className="w-3 h-3 text-gold" />
                Brand Alignment
              </span>
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-black text-pink-900 tracking-tight mt-4">
                Ideal Partners
              </h2>
              <p className="text-pink-600/60 max-w-lg mx-auto mt-4 text-lg font-body">
                We work best with brands that align with our mission of faith,
                hair education, and helping women find their identity in Christ.
              </p>
            </div>
          </FadeInUp>

          <FadeInUp delay={0.1}>
            <div className="flex flex-wrap justify-center gap-3 max-w-3xl mx-auto">
              {idealPartners.map((partner) => (
                <motion.span
                  key={partner}
                  className="bg-pink-50 text-pink-500 px-5 py-2.5 rounded-full text-sm font-medium border border-pink-100 font-body"
                  whileHover={{
                    scale: 1.05,
                    backgroundColor: "#FFF1F5",
                  }}
                >
                  {partner}
                </motion.span>
              ))}
            </div>
          </FadeInUp>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-24 md:py-32 bg-pink-50/50 relative overflow-hidden">
        <div className="absolute top-0 left-1/4 w-[500px] h-[500px] bg-pink-100/30 rounded-full blur-3xl pointer-events-none" />
        <div className="absolute bottom-0 right-1/4 w-[400px] h-[400px] bg-fuchsia-100/20 rounded-full blur-3xl pointer-events-none" />
        <div className="max-w-[1280px] mx-auto px-6 md:px-12 relative">
          <FadeInUp>
            <div className="border border-pink-100 rounded-3xl bg-white p-10 md:p-16 text-center">
              <SparkleIcon className="w-8 h-8 text-gold mx-auto mb-6" />
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-black text-pink-900 tracking-tight">
                Let&apos;s Build{" "}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-pink-500 to-fuchsia-500">
                  Together
                </span>
              </h2>
              <p className="text-pink-600/60 max-w-lg mx-auto mt-4 text-lg font-body">
                Ready to reach an engaged, faith-driven community of women who
                trust our voice? Let&apos;s talk.
              </p>
              <div className="mt-10">
                <motion.a
                  href="mailto:sponsors@curliegirlie.com"
                  className="inline-flex items-center gap-2 bg-gradient-to-r from-pink-500 to-fuchsia-500 text-white px-8 py-4 rounded-full font-bold text-lg hover:from-pink-600 hover:to-fuchsia-600 transition-all"
                  whileHover={{ scale: 1.03 }}
                  whileTap={{ scale: 0.97 }}
                >
                  Let&apos;s Talk Partnership
                  <svg
                    className="w-5 h-5"
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
