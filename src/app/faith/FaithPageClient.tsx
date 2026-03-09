"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { ClientShell } from "../components/ClientShell";
import { PageHeader } from "../components/PageHeader";
import { FooterSection } from "../sections/Footer";
import { FadeInUp } from "../components/FramerAnimations";
import { SparkleIcon } from "../components/Icons";

const devotionals = [
  {
    title: "You Were Made on Purpose",
    verse: "For we are God's handiwork, created in Christ Jesus to do good works.",
    ref: "Ephesians 2:10",
    body: "Your curls aren't random. Your texture isn't an accident. The same God who placed the stars also designed every strand on your head. When you look in the mirror, you're looking at intentional craftsmanship.",
  },
  {
    title: "Stop Comparing, Start Celebrating",
    verse: "I praise you because I am fearfully and wonderfully made.",
    ref: "Psalm 139:14",
    body: "The enemy wants you to compare your 3B curls to her 4C coils, or your waves to someone's ringlets. But God didn't make you to be her — He made you to be fully, beautifully you.",
  },
  {
    title: "Your Crown Is a Testimony",
    verse: "But the very hairs of your head are all numbered.",
    ref: "Matthew 10:30",
    body: "God knows every single strand. Your hair journey — the big chops, the breakage, the growth — mirrors your faith journey. Both require patience, trust, and surrender.",
  },
  {
    title: "Beauty That Doesn't Fade",
    verse: "Your beauty should not come from outward adornment... rather, it should be that of your inner self.",
    ref: "1 Peter 3:3-4",
    body: "We love a good wash day and a perfect twist-out. But the beauty that draws people to Christ is the peace, joy, and kindness that radiates from a woman who knows whose she is.",
  },
  {
    title: "Healing Through Identity",
    verse: "He heals the brokenhearted and binds up their wounds.",
    ref: "Psalm 147:3",
    body: "Many of us carry wounds from being told our hair wasn't good enough, professional enough, beautiful enough. God wants to heal those wounds and replace every lie with His truth about who you are.",
  },
  {
    title: "Called to Lead",
    verse: "She opens her mouth with wisdom, and the teaching of kindness is on her tongue.",
    ref: "Proverbs 31:26",
    body: "When you share your curl story grounded in faith, you become a light. Every woman who sees your confidence and asks 'what's different about you?' is an open door for the Gospel.",
  },
];

const pillars = [
  {
    number: "01",
    title: "Identity in Christ",
    href: "/faith/identity",
    description:
      "Before you're a curl queen, you're a daughter of the King. We help women ground their identity in who God says they are — not in beauty standards, not in the world's approval.",
  },
  {
    number: "02",
    title: "Healing & Restoration",
    href: "/faith/healing",
    description:
      "Toxic relationships, self-hate, family wounds, church hurt. We believe God uses unexpected seasons as gateways to deeper healing and wholeness.",
  },
  {
    number: "03",
    title: "Community & Sisterhood",
    href: "/faith/community",
    description:
      "Iron sharpens iron. Our community isn't just about surface-level connection — it's about women lifting each other up, praying together, and walking out faith in real life.",
  },
  {
    number: "04",
    title: "Reaching the Lost",
    href: "/faith/outreach",
    description:
      "Every conversation is an opportunity. When women feel seen and loved in this community, the door opens for the Gospel. We exist to lead women to Jesus.",
  },
];

export function FaithPageClient() {
  return (
    <ClientShell>
      <PageHeader
        badge="Faith"
        title="Leading Women to"
        titleAccent="Jesus"
        subtitle="More than hair. More than beauty. A movement of women discovering their identity, purpose, and worth in Christ."
      />

      {/* Mission Statement */}
      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <FadeInUp>
            <SparkleIcon className="w-10 h-10 text-gold/40 mx-auto mb-6" />
          </FadeInUp>
          <FadeInUp delay={0.1}>
            <blockquote className="text-3xl md:text-4xl font-display italic text-gray-900 leading-relaxed mb-6">
              &ldquo;God wants to heal us to such a degree that multitudes are
              won.&rdquo;
            </blockquote>
          </FadeInUp>
          <FadeInUp delay={0.2}>
            <div className="w-20 h-0.5 bg-gold mx-auto mb-8" />
            <p className="text-gray-500 text-lg leading-relaxed max-w-2xl mx-auto">
              At Curlie Girlie Collective, we believe that when a woman truly
              sees herself the way God sees her — fearfully and wonderfully made —
              everything changes. Her confidence changes. Her relationships change.
              And through her testimony, others are drawn to the source of that
              transformation: Jesus Christ.
            </p>
          </FadeInUp>
        </div>
      </section>

      {/* Four Pillars */}
      <section className="py-20 bg-pink-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <FadeInUp>
            <div className="text-center mb-16">
              <span className="inline-flex items-center gap-2 bg-cream border border-gold-light/60 text-gray-500 font-semibold uppercase tracking-[0.2em] text-xs px-4 py-1.5 rounded-full mb-4">
                <SparkleIcon className="w-3 h-3 text-gold" />
                Our Foundation
              </span>
              <h2 className="text-3xl md:text-4xl font-black text-pink-900 mt-4 font-display">
                Four Pillars of Faith
              </h2>
            </div>
          </FadeInUp>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {pillars.map((pillar, i) => (
              <FadeInUp key={pillar.number} delay={0.1 * i}>
                <Link href={pillar.href} className="block h-full">
                  <motion.div
                    className="bg-white border border-pink-100 rounded-3xl p-8 h-full relative overflow-hidden group cursor-pointer"
                    whileHover={{ y: -4 }}
                    transition={{ duration: 0.3 }}
                  >
                    <span className="absolute top-4 right-6 text-7xl font-black text-pink-50 select-none">
                      {pillar.number}
                    </span>
                    <div className="relative">
                      <h3 className="text-xl font-bold text-pink-900 mb-3">
                        {pillar.title}
                      </h3>
                      <div className="w-12 h-0.5 bg-gold mb-4 group-hover:w-full transition-all duration-500" />
                      <p className="text-gray-500 leading-relaxed mb-4">
                        {pillar.description}
                      </p>
                      <span className="text-gold font-semibold text-sm inline-flex items-center gap-1 opacity-0 group-hover:opacity-100 transition-opacity">
                        Explore
                        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" /></svg>
                      </span>
                    </div>
                  </motion.div>
                </Link>
              </FadeInUp>
            ))}
          </div>
        </div>
      </section>

      {/* Devotionals */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <FadeInUp>
            <div className="text-center mb-16">
              <span className="inline-flex items-center gap-2 bg-cream border border-gold-light/60 text-gray-500 font-semibold uppercase tracking-[0.2em] text-xs px-4 py-1.5 rounded-full mb-4">
                <SparkleIcon className="w-3 h-3 text-gold" />
                Scripture & Reflection
              </span>
              <h2 className="text-3xl md:text-4xl font-black text-gray-900 mt-4 font-display">
                Curl Devotionals
              </h2>
              <p className="text-gray-500 text-lg mt-4 max-w-xl mx-auto">
                Short reflections that connect your hair journey to God&apos;s
                Word.
              </p>
            </div>
          </FadeInUp>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {devotionals.map((d, i) => (
              <FadeInUp key={d.title} delay={0.08 * i}>
                <motion.div
                  className="bg-pink-50 border border-pink-100 rounded-3xl p-6 h-full flex flex-col"
                  whileHover={{ y: -4 }}
                  transition={{ duration: 0.3 }}
                >
                  <h3 className="text-lg font-bold text-pink-900 mb-3">
                    {d.title}
                  </h3>
                  <blockquote className="text-pink-700 italic text-sm mb-1 leading-relaxed">
                    &ldquo;{d.verse}&rdquo;
                  </blockquote>
                  <p className="text-gold font-semibold text-xs mb-4">
                    — {d.ref}
                  </p>
                  <p className="text-gray-500 leading-relaxed text-sm flex-1">
                    {d.body}
                  </p>
                </motion.div>
              </FadeInUp>
            ))}
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section
        className="py-24 relative overflow-hidden"
        style={{
          background:
            "linear-gradient(160deg, #1a0a12 0%, #2d0f1e 30%, #3d1228 60%, #2d0f1e 80%, #1a0a12 100%)",
        }}
      >
        <motion.div
          className="absolute top-[20%] left-[10%] w-72 h-72 rounded-full blur-3xl"
          style={{ background: "rgba(212, 175, 55, 0.1)" }}
          animate={{
            x: [-20, 20, -20],
            y: [-10, 15, -10],
            scale: [1, 1.1, 1],
          }}
          transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
        />
        <motion.div
          className="absolute bottom-[20%] right-[15%] w-64 h-64 rounded-full blur-3xl"
          style={{ background: "rgba(236, 72, 153, 0.12)" }}
          animate={{
            x: [15, -15, 15],
            y: [10, -20, 10],
          }}
          transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
        />

        <div className="relative max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center z-10">
          <FadeInUp>
            <motion.div
              animate={{ rotate: [0, 360] }}
              transition={{
                duration: 20,
                repeat: Infinity,
                ease: "linear",
              }}
              className="inline-block mb-6"
            >
              <SparkleIcon className="w-10 h-10 text-gold" />
            </motion.div>
          </FadeInUp>

          <FadeInUp delay={0.1}>
            <h2
              className="text-3xl md:text-5xl font-black mb-6"
              style={{
                color: "#fff",
                textShadow: "0 2px 20px rgba(212, 175, 55, 0.3)",
              }}
            >
              Ready to Start Your{" "}
              <span className="bg-gradient-to-r from-gold to-amber-300 bg-clip-text text-transparent">
                Faith Journey
              </span>
              ?
            </h2>
          </FadeInUp>

          <FadeInUp delay={0.2}>
            <p className="text-pink-100/80 text-lg max-w-xl mx-auto mb-10">
              Whether you&apos;re exploring faith for the first time or
              deepening your walk with God, you belong here. Join a community of
              women who are becoming who God made them to be.
            </p>
          </FadeInUp>

          <FadeInUp delay={0.3}>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Link
                href="/episodes"
                className="bg-gold text-pink-900 px-8 py-4 rounded-full font-bold text-lg shadow-lg hover:shadow-xl transition-shadow"
              >
                Listen to Faith Episodes
              </Link>
              <Link
                href="/contact"
                className="glass text-white px-8 py-4 rounded-full font-bold text-lg"
              >
                Share Your Story
              </Link>
            </div>
          </FadeInUp>

          <FadeInUp delay={0.4}>
            <p className="text-pink-200/40 text-sm mt-8 italic">
              &ldquo;Faith. Hair. Becoming.&rdquo;
            </p>
          </FadeInUp>
        </div>
      </section>

      <FooterSection />
    </ClientShell>
  );
}
