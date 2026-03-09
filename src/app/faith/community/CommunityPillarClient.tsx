"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { ClientShell } from "../../components/ClientShell";
import { PageHeader } from "../../components/PageHeader";
import { FooterSection } from "../../sections/Footer";
import { FadeInUp } from "../../components/FramerAnimations";
import { SparkleIcon } from "../../components/Icons";

/* ------------------------------------------------------------------ */
/*  Data                                                               */
/* ------------------------------------------------------------------ */

const lonelinessCards = [
  {
    emoji: "🏙",
    title: "The New-City Reset",
    body: "You moved for the job, the relationship, or just a fresh start. But six months in, your contacts list is full and your Friday nights are empty. Making friends as an adult feels like a skill nobody taught you.",
  },
  {
    emoji: "🎓",
    title: "The Post-College Drift",
    body: "Your group chat went silent. Everyone scattered to different time zones and different seasons of life. The friendships that felt effortless now take effort nobody seems to have.",
  },
  {
    emoji: "💔",
    title: "The Post-Breakup Rebuild",
    body: "You lost more than a partner — you lost the mutual friends, the couples' dinners, the person who was supposed to be your person. Starting over socially while grieving is exhausting.",
  },
  {
    emoji: "⛪",
    title: "The Church Hurt",
    body: "You showed up looking for family and found cliques. The small group felt performative. The vulnerability was one-sided. You left wondering if real Christian community even exists.",
  },
  {
    emoji: "🏠",
    title: "The Work-From-Home Fog",
    body: "Your commute is twelve steps. Your coworkers are Slack avatars. Days blur together, and you realize the last real conversation you had was with a barista three days ago.",
  },
];

const principles = [
  {
    number: 1,
    title: "It Is Not Good to Be Alone",
    scripture: "Then the LORD God said, 'It is not good that the man should be alone; I will make him a helper fit for him.'",
    reference: "Genesis 2:18",
    body: "From the very beginning, God designed us for relationship. Isolation is not holy independence — it is the opposite of how we were made to live.",
  },
  {
    number: 2,
    title: "Few and Deep Over Many and Shallow",
    scripture: "Two are better than one, because they have a good reward for their toil. For if they fall, one will lift up his fellow.",
    reference: "Ecclesiastes 4:9-10",
    body: "It is not about having 100 friends — it is about having 3 who know your real story. The ones who will sit with you on the floor when everything falls apart.",
  },
  {
    number: 3,
    title: "Honesty Over Performance",
    scripture: "Therefore, confess your sins to one another and pray for one another, that you may be healed.",
    reference: "James 5:16",
    body: "Real community means taking off the mask. Not the curated version of your life, but the honest, unfiltered, 'this is where I actually am' version.",
  },
  {
    number: 4,
    title: "Showing Up When It Costs You",
    scripture: "Bear one another's burdens, and so fulfill the law of Christ.",
    reference: "Galatians 6:2",
    body: "The 2 a.m. phone call. The meal dropped off without being asked. The friend who drives across town when you cannot get out of bed. That is the Gospel with legs.",
  },
  {
    number: 5,
    title: "Accountability That Feels Like Love",
    scripture: "Faithful are the wounds of a friend; profuse are the kisses of an enemy.",
    reference: "Proverbs 27:6",
    body: "A real sister will tell you the truth even when it is uncomfortable — not to control you, but because she loves the woman God is making you into more than she loves keeping the peace.",
  },
  {
    number: 6,
    title: "Praying When Words Fail",
    scripture: "Likewise the Spirit helps us in our weakness. For we do not know what to pray for as we ought.",
    reference: "Romans 8:26",
    body: "Sometimes the most powerful thing you can do for a friend is sit beside her and say, 'I do not know what to say, but I am not leaving.' Presence is prayer.",
  },
];

const offerings = [
  {
    icon: "🎧",
    title: "Podcast Listening Parties",
    description: "Every new episode drops with a live listening thread. React in real time, share your takes, and hear what hit different for other women in the community.",
  },
  {
    icon: "🙏",
    title: "Prayer Request Threads",
    description: "Drop your prayer request — big or small — and watch real women rally around you. No judgment, no advice unless you ask, just women who will carry it to the throne with you.",
  },
  {
    icon: "📅",
    title: "Monthly Challenges",
    description: "30-day scripture challenges, gratitude journals, self-care resets. Each month brings a new theme that the whole community tackles together. Accountability with zero shame.",
  },
  {
    icon: "📍",
    title: "Local Meetups",
    description: "We are building something real — city by city. Brunch, worship nights, curl care workshops. If there is not a meetup near you yet, you might be the one to start it.",
    badge: "Coming Soon",
  },
  {
    icon: "💻",
    title: "Online Small Groups",
    description: "Six to eight women, one Zoom link, honest conversation. These groups go deeper than Sunday morning surface-level. Apply for a group that fits your season of life.",
  },
  {
    icon: "✨",
    title: "Sister Spotlights",
    description: "Every month we celebrate a woman from the community — her story, her growth, her testimony. Because every woman here deserves to be seen.",
  },
];

const testimonials = [
  {
    name: "Jasmine T.",
    age: 34,
    location: "Atlanta, GA",
    quote: "After my divorce, I did not just lose my marriage — I lost my entire friend group. The Collective gave me women who showed up without me having to explain my whole backstory first. They just said 'we are here' and meant it.",
    context: "Found community after divorce",
  },
  {
    name: "Alyssa R.",
    age: 21,
    location: "Houston, TX",
    quote: "I am the only believer in my friend group at college. I felt like I was faking it everywhere — too Christian for my friends, too 'worldly' for church people. This community was the first place I could just be me without a disclaimer.",
    context: "College student who found belonging",
  },
  {
    name: "Tasha M.",
    age: 38,
    location: "Chicago, IL",
    quote: "Being a stay-at-home mom is beautiful and isolating at the same time. I needed adult conversation that was not about nap schedules. The prayer threads became my lifeline — I finally had women who could see me as more than 'just a mom.'",
    context: "Mom who found her voice again",
  },
  {
    name: "Keisha D.",
    age: 29,
    location: "Denver, CO",
    quote: "I left the church after a really painful experience with leadership. I thought I was done. But the women here showed me that church hurt does not have to mean God hurt. They were patient with my questions and never pushed me. I am finding my way back on my own terms.",
    context: "Healing from church hurt",
  },
];

const connectOptions = [
  {
    title: "Listen to the Podcast",
    description: "Start with our most-loved episodes on faith, identity, and sisterhood. Available wherever you listen.",
    cta: "Browse Episodes",
    href: "/episodes",
  },
  {
    title: "Follow on Instagram",
    description: "Daily encouragement, behind-the-scenes, and community polls. Our DMs are always open.",
    cta: "Follow Us",
    href: "https://instagram.com/curliegirlie",
  },
  {
    title: "Join the Email List",
    description: "Weekly devotionals, community updates, and first access to events. No spam — just substance.",
    cta: "Subscribe",
    href: "/subscribe",
  },
  {
    title: "Attend a Virtual Event",
    description: "Worship nights, Q&A sessions, and small group kickoffs. Your camera can be off — just show up.",
    cta: "See Events",
    href: "/events",
  },
];

/* ------------------------------------------------------------------ */
/*  Component                                                          */
/* ------------------------------------------------------------------ */

export function CommunityPillarClient() {
  return (
    <ClientShell>
      <PageHeader
        badge="Pillar 03"
        title="Community &"
        titleAccent="Sisterhood"
        subtitle="You were never meant to do this alone. Find your people — women who pray together, grow together, and refuse to let you walk alone."
      />

      {/* ── Section 1: Why We Need Each Other ── */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <FadeInUp>
            <div className="text-center mb-16">
              <span className="inline-flex items-center gap-2 bg-cream border border-gold-light/60 text-gray-500 font-semibold uppercase tracking-[0.2em] text-xs px-4 py-1.5 rounded-full mb-4">
                <SparkleIcon className="w-3 h-3 text-gold" />
                The Loneliness Epidemic
              </span>
              <h2 className="text-3xl md:text-4xl font-black text-pink-900 mt-4 font-display">
                Why We Need Each Other
              </h2>
              <p className="text-gray-500 text-lg mt-4 max-w-2xl mx-auto">
                61% of young adults report feeling seriously lonely. Not
                &ldquo;I&nbsp;wish I had plans this weekend&rdquo; lonely —
                deeply, achingly alone. And the women who look the most
                connected are often the most isolated.
              </p>
            </div>
          </FadeInUp>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {lonelinessCards.map((card, i) => (
              <FadeInUp key={card.title} delay={0.08 * i}>
                <motion.div
                  className="bg-pink-50 border border-pink-100 rounded-3xl p-6 h-full flex flex-col"
                  whileHover={{ y: -4 }}
                  transition={{ duration: 0.3 }}
                >
                  <span className="text-3xl mb-4 block">{card.emoji}</span>
                  <h3 className="text-lg font-bold text-pink-900 mb-2">
                    {card.title}
                  </h3>
                  <p className="text-gray-500 leading-relaxed text-sm flex-1">
                    {card.body}
                  </p>
                </motion.div>
              </FadeInUp>
            ))}
          </div>

          <FadeInUp delay={0.5}>
            <p className="text-center text-gray-500 text-lg mt-12 max-w-2xl mx-auto leading-relaxed">
              If any of those hit close to home — you are not broken and you are
              not needy. You are human. And God has something better for you
              than doing life in the margins.
            </p>
          </FadeInUp>
        </div>
      </section>

      {/* ── Section 2: What Biblical Community Actually Looks Like ── */}
      <section className="py-20 bg-pink-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <FadeInUp>
            <div className="text-center mb-16">
              <span className="inline-flex items-center gap-2 bg-cream border border-gold-light/60 text-gray-500 font-semibold uppercase tracking-[0.2em] text-xs px-4 py-1.5 rounded-full mb-4">
                <SparkleIcon className="w-3 h-3 text-gold" />
                Beyond the Instagram Version
              </span>
              <h2 className="text-3xl md:text-4xl font-black text-pink-900 mt-4 font-display">
                What Biblical Community Actually Looks Like
              </h2>
              <p className="text-gray-500 text-lg mt-4 max-w-2xl mx-auto">
                Not matching Bible-cover aesthetics and brunch photos.
                Real community is messier, harder, and infinitely more
                life-giving than the highlight reel.
              </p>
            </div>
          </FadeInUp>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {principles.map((p, i) => (
              <FadeInUp key={p.number} delay={0.1 * i}>
                <motion.div
                  className="bg-white border border-pink-100 rounded-3xl p-8 h-full relative overflow-hidden"
                  whileHover={{ y: -4 }}
                  transition={{ duration: 0.3 }}
                >
                  <span className="absolute top-4 right-6 text-7xl font-black text-pink-50 select-none">
                    {String(p.number).padStart(2, "0")}
                  </span>
                  <div className="relative">
                    <h3 className="text-xl font-bold text-pink-900 mb-3">
                      {p.title}
                    </h3>
                    <div className="w-12 h-0.5 bg-gold mb-4" />
                    <blockquote className="text-pink-700 italic text-sm mb-1 leading-relaxed">
                      &ldquo;{p.scripture}&rdquo;
                    </blockquote>
                    <p className="text-gold font-semibold text-xs mb-4">
                      — {p.reference}
                    </p>
                    <p className="text-gray-500 leading-relaxed">
                      {p.body}
                    </p>
                  </div>
                </motion.div>
              </FadeInUp>
            ))}
          </div>
        </div>
      </section>

      {/* ── Section 3: Meet the Collective ── */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <FadeInUp>
            <div className="text-center mb-16">
              <span className="inline-flex items-center gap-2 bg-cream border border-gold-light/60 text-gray-500 font-semibold uppercase tracking-[0.2em] text-xs px-4 py-1.5 rounded-full mb-4">
                <SparkleIcon className="w-3 h-3 text-gold" />
                What We Offer
              </span>
              <h2 className="text-3xl md:text-4xl font-black text-pink-900 mt-4 font-display">
                Meet the Collective
              </h2>
              <p className="text-gray-500 text-lg mt-4 max-w-2xl mx-auto">
                This is not a fanbase. It is not a following. It is a family —
                messy, real, and rooted in something bigger than all of us.
                Here is how we show up for each other.
              </p>
            </div>
          </FadeInUp>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {offerings.map((item, i) => (
              <FadeInUp key={item.title} delay={0.08 * i}>
                <motion.div
                  className="bg-pink-50 border border-pink-100 rounded-3xl p-6 h-full flex flex-col"
                  whileHover={{ y: -4 }}
                  transition={{ duration: 0.3 }}
                >
                  <div className="flex items-center gap-3 mb-4">
                    <span className="text-2xl">{item.icon}</span>
                    <h3 className="text-lg font-bold text-pink-900">
                      {item.title}
                    </h3>
                    {item.badge && (
                      <span className="bg-cream border border-gold-light/60 text-gray-500 text-[10px] font-semibold uppercase tracking-wider px-2.5 py-0.5 rounded-full">
                        {item.badge}
                      </span>
                    )}
                  </div>
                  <p className="text-gray-500 leading-relaxed text-sm flex-1">
                    {item.description}
                  </p>
                </motion.div>
              </FadeInUp>
            ))}
          </div>
        </div>
      </section>

      {/* ── Section 4: Sister Spotlights ── */}
      <section className="py-20 bg-pink-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <FadeInUp>
            <div className="text-center mb-16">
              <span className="inline-flex items-center gap-2 bg-cream border border-gold-light/60 text-gray-500 font-semibold uppercase tracking-[0.2em] text-xs px-4 py-1.5 rounded-full mb-4">
                <SparkleIcon className="w-3 h-3 text-gold" />
                Real Stories
              </span>
              <h2 className="text-3xl md:text-4xl font-black text-pink-900 mt-4 font-display">
                Sister Spotlights
              </h2>
              <p className="text-gray-500 text-lg mt-4 max-w-xl mx-auto">
                Real women. Real seasons. Real community changing real lives.
              </p>
            </div>
          </FadeInUp>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {testimonials.map((t, i) => (
              <FadeInUp key={t.name} delay={0.1 * i}>
                <motion.div
                  className="bg-white border border-pink-100 rounded-3xl p-8 h-full flex flex-col"
                  whileHover={{ y: -4 }}
                  transition={{ duration: 0.3 }}
                >
                  <SparkleIcon className="w-6 h-6 text-gold/40 mb-4" />
                  <blockquote className="text-gray-600 italic leading-relaxed flex-1 mb-6">
                    &ldquo;{t.quote}&rdquo;
                  </blockquote>
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="font-bold text-pink-900 text-sm">
                        {t.name}
                      </p>
                      <p className="text-gray-400 text-xs">
                        {t.age} &middot; {t.location}
                      </p>
                    </div>
                    <span className="bg-pink-100 text-pink-600 text-[10px] font-semibold uppercase tracking-wider px-3 py-1 rounded-full">
                      {t.context}
                    </span>
                  </div>
                </motion.div>
              </FadeInUp>
            ))}
          </div>
        </div>
      </section>

      {/* ── Section 5: Join Us ── */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <FadeInUp>
            <div className="text-center mb-16">
              <span className="inline-flex items-center gap-2 bg-cream border border-gold-light/60 text-gray-500 font-semibold uppercase tracking-[0.2em] text-xs px-4 py-1.5 rounded-full mb-4">
                <SparkleIcon className="w-3 h-3 text-gold" />
                Get Connected
              </span>
              <h2 className="text-3xl md:text-4xl font-black text-pink-900 mt-4 font-display">
                Ways to Join Us
              </h2>
              <p className="text-gray-500 text-lg mt-4 max-w-xl mx-auto">
                There is no wrong door. Pick whatever feels right and know that
                you are already welcome.
              </p>
            </div>
          </FadeInUp>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {connectOptions.map((opt, i) => (
              <FadeInUp key={opt.title} delay={0.1 * i}>
                <motion.div
                  className="bg-pink-50 border border-pink-100 rounded-3xl p-6 h-full flex flex-col text-center"
                  whileHover={{ y: -4 }}
                  transition={{ duration: 0.3 }}
                >
                  <h3 className="text-lg font-bold text-pink-900 mb-2">
                    {opt.title}
                  </h3>
                  <p className="text-gray-500 text-sm leading-relaxed flex-1 mb-4">
                    {opt.description}
                  </p>
                  <Link
                    href={opt.href}
                    className="inline-block bg-gray-900 text-white text-sm font-semibold px-6 py-2.5 rounded-full hover:bg-gray-800 transition-colors"
                  >
                    {opt.cta}
                  </Link>
                </motion.div>
              </FadeInUp>
            ))}
          </div>
        </div>
      </section>

      {/* ── CTA: You Belong Here ── */}
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
              className="text-3xl md:text-5xl font-black mb-6 font-display"
              style={{
                color: "#fff",
                textShadow: "0 2px 20px rgba(212, 175, 55, 0.3)",
              }}
            >
              You belong here.{" "}
              <span className="bg-gradient-to-r from-gold to-amber-300 bg-clip-text text-transparent">
                Exactly as you are.
              </span>
            </h2>
          </FadeInUp>

          <FadeInUp delay={0.2}>
            <p className="text-pink-100/80 text-lg max-w-xl mx-auto mb-10">
              Not the polished version. Not the version that has it all figured
              out. You — right now, in this season, with all your questions and
              all your mess. There is a seat at this table with your name on it.
            </p>
          </FadeInUp>

          <FadeInUp delay={0.3}>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Link
                href="/subscribe"
                className="bg-gold text-pink-900 px-8 py-4 rounded-full font-bold text-lg shadow-lg hover:shadow-xl transition-shadow"
              >
                Join the Collective
              </Link>
              <Link
                href="/contact"
                className="glass text-white px-8 py-4 rounded-full font-bold text-lg"
              >
                Reach Out to Us
              </Link>
            </div>
          </FadeInUp>

          <FadeInUp delay={0.4}>
            <p className="text-pink-200/40 text-sm mt-8 italic">
              &ldquo;Iron sharpens iron, and one woman sharpens
              another.&rdquo; — Proverbs 27:17
            </p>
          </FadeInUp>
        </div>
      </section>

      <FooterSection />
    </ClientShell>
  );
}
