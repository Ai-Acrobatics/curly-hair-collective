"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { ClientShell } from "../../components/ClientShell";
import { PageHeader } from "../../components/PageHeader";
import { FooterSection } from "../../sections/Footer";
import { FadeInUp } from "../../components/FramerAnimations";
import { SparkleIcon } from "../../components/Icons";

const principles = [
  {
    number: "01",
    title: "Live It Before You Say It",
    description:
      "People watch before they listen. Your coworker notices when you stay calm during chaos. Your neighbor sees how you treat your kids at the park. Your friend clocks the way you handle a breakup with grace instead of bitterness. Before you ever open your mouth about Jesus, your life is already preaching a sermon. The most powerful evangelism is a changed life that makes people curious enough to ask why.",
    verse: "Let your light shine before others, that they may see your good deeds and glorify your Father in heaven.",
    ref: "Matthew 5:16",
  },
  {
    number: "02",
    title: "Ask Questions, Don\u2019t Lecture",
    description:
      "Nobody has ever been argued into the Kingdom. But a good question? That opens a door that preaching can\u2019t. When your friend is hurting, try \u201CWhat do you think would bring you peace right now?\u201D instead of \u201CYou just need to pray about it.\u201D When someone is questioning everything, ask \u201CWhat would it look like if there was a God who actually cared about the details of your life?\u201D Curiosity is an invitation. Lectures are a wall.",
    verse: "The purposes of a person\u2019s heart are deep waters, but one who has insight draws them out.",
    ref: "Proverbs 20:5",
  },
  {
    number: "03",
    title: "Share Your Mess, Not Just Your Message",
    description:
      "Nobody connects with perfection. They connect with \u201CI\u2019ve been there too.\u201D When you share that you struggled with anxiety before finding peace in prayer, or that your marriage almost fell apart before you surrendered it to God \u2014 that\u2019s what resonates. Vulnerability is magnetic because it tells people the truth: you don\u2019t have to be fixed before you come to Jesus. You come to Jesus to get fixed.",
    verse: "But he said to me, \u201CMy grace is sufficient for you, for my power is made perfect in weakness.\u201D",
    ref: "2 Corinthians 12:9",
  },
  {
    number: "04",
    title: "Meet People Where They Are",
    description:
      "Jesus didn\u2019t wait for people to come to the synagogue. He went to the well, the marketplace, the dinner table. Your mission field isn\u2019t just Sunday morning \u2014 it\u2019s the salon chair where you sit for three hours, the group chat that goes deep at midnight, the coffee shop where your coworker finally opens up about her divorce. Ministry happens in the margins of everyday life, in the places where people feel safe enough to be real.",
    verse: "I have become all things to all people so that by all possible means I might save some.",
    ref: "1 Corinthians 9:22",
  },
  {
    number: "05",
    title: "Plant Seeds, Don\u2019t Force Harvests",
    description:
      "You are not responsible for someone\u2019s salvation. That\u2019s the Holy Spirit\u2019s job. You\u2019re responsible for being faithful with the moment in front of you. Sometimes that means sharing your testimony. Sometimes it means just being kind when the world says to be petty. Sometimes it means praying silently for someone who has no idea you\u2019re doing it. Plant the seed. Water it with love. And trust God with the timeline.",
    verse: "I planted the seed, Apollos watered it, but God has been making it grow.",
    ref: "1 Corinthians 3:6",
  },
  {
    number: "06",
    title: "Love Without an Agenda",
    description:
      "People can smell inauthenticity from a mile away. If you\u2019re only being nice because you want to convert someone, they\u2019ll feel it \u2014 and they\u2019ll run. But when you genuinely love people with no strings attached, when you show up for them whether or not they ever step foot in a church, that\u2019s the kind of love that wrecks walls. That\u2019s the kind of love that made Jesus irresistible to the people religion had rejected.",
    verse: "We love because he first loved us.",
    ref: "1 John 4:19",
  },
];

const scenarios = [
  {
    situation: "When your coworker is going through a breakup",
    wrong:
      "\"Well, maybe God is removing him because he wasn't the one. You should pray about it and trust His plan.\"",
    better:
      "\"I'm so sorry. That's really painful. I've been through something similar and I know how heavy it feels. Can I take you to lunch this week? I just don't want you to go through this alone.\"",
    why: "Lead with empathy first. The theology can come later, when she's ready to hear it. Right now she needs to know someone sees her pain.",
  },
  {
    situation: "When your friend asks why you seem different lately",
    wrong:
      "\"I've been reading my Bible and going to church! You should come with me this Sunday — it'll change your life.\"",
    better:
      "\"Honestly? I've been working through some stuff and I started praying about it. I don't have it all figured out, but something shifted. I feel like I'm actually dealing with things instead of just surviving them. I can tell you more if you're curious.\"",
    why: "Let her pull the thread. When you leave space for curiosity, she'll ask the follow-up questions that matter most.",
  },
  {
    situation: "When someone on social media is struggling",
    wrong:
      "Commenting \"Praying for you! God is in control!\" on a post from someone you barely know.",
    better:
      "Sending a private DM: \"Hey, I saw your post and I just wanted to check on you. No advice, no judgment — I just wanted you to know someone noticed and cares. I'm here if you need to talk.\"",
    why: "Public spiritual advice often feels performative. A private, genuine message tells someone they're worth your time, not just your comment.",
  },
  {
    situation: "When you're at the salon and the conversation gets deep",
    wrong:
      "Turning a casual conversation about relationships into a full sermon about God's plan for marriage.",
    better:
      "Listening fully, then sharing: \"Girl, I used to feel that exact same way. Something that really helped me was realizing I was looking for a person to fill a space that only God could fill. It sounds cliché, but it literally changed how I see everything.\"",
    why: "The salon chair is sacred space. Women let their guard down there. Honor that vulnerability by sharing honestly, not preaching at them.",
  },
  {
    situation: "When your sister is angry at God",
    wrong:
      "\"You shouldn't be angry at God. He knows what He's doing. Everything happens for a reason.\"",
    better:
      "\"I hear you. And honestly, I think God can handle your anger. David was angry at God all through the Psalms and God still called him a man after His own heart. You don't have to pretend to be okay with Him. Just don't walk away from the conversation.\"",
    why: "Validating someone's anger at God isn't blasphemy — it's honesty. And honesty is the doorway to healing.",
  },
];

const rippleSteps = [
  {
    number: "1",
    label: "One Woman",
    description:
      "She hears an episode. Something clicks. For the first time, she considers that maybe God isn't who she thought He was.",
  },
  {
    number: "3",
    label: "Her Inner Circle",
    description:
      "She tells her sister, her best friend, her roommate. Not because she's preaching — but because she can't stop talking about what's changing inside her.",
  },
  {
    number: "12",
    label: "Her Community",
    description:
      "Her coworkers notice. Her kids notice. The women in her life start asking questions because her peace is louder than their chaos.",
  },
  {
    number: "100+",
    label: "A Movement",
    description:
      "Each woman she touches reaches her own circle. One conversation multiplies into hundreds. This is how the early church grew — not through programs, but through transformed women who couldn't keep quiet about what God did.",
  },
];

const nextSteps = [
  {
    title: "Share Your Story",
    description:
      "Your testimony is your most powerful tool. Write it, record it, or just tell us in a DM. We'll help you share it with women who need to hear it.",
    cta: "Share Your Story",
    href: "/contact",
  },
  {
    title: "Invite One Woman",
    description:
      "Think of one woman in your life who needs encouragement. Send her one episode. That's it. One link, one text, one conversation starter.",
    cta: "Browse Episodes",
    href: "/episodes",
  },
  {
    title: "Pray by Name",
    description:
      "Pick one person this week. Pray for her by name every single day. Not that she'd get saved — but that she'd feel loved, seen, and pursued by God in a way that surprises her.",
    cta: "Join Our Community",
    href: "/contact",
  },
  {
    title: "Join the Prayer Team",
    description:
      "We have a team of women who pray over every episode, every listener, and every DM we receive. If you want to be part of what God is doing behind the scenes, this is your invitation.",
    cta: "Get Connected",
    href: "/contact",
  },
];

export function OutreachPageClient() {
  return (
    <ClientShell>
      <PageHeader
        badge="Pillar 04"
        title="Reaching the"
        titleAccent="Lost"
        subtitle="Every conversation is an open door. We don't reach people through perfection — we reach them through the Christ-transformed honesty of a woman who's been there."
      />

      {/* Section 1 — We Were the Lost Ones */}
      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <FadeInUp>
            <div className="text-center mb-12">
              <span className="inline-flex items-center gap-2 bg-cream border border-gold-light/60 text-gray-500 font-semibold uppercase tracking-[0.2em] text-xs px-4 py-1.5 rounded-full mb-4">
                <SparkleIcon className="w-3 h-3 text-gold" />
                Our Story
              </span>
              <h2 className="text-3xl md:text-4xl font-black text-pink-900 mt-4 font-display">
                We Were the Lost Ones
              </h2>
            </div>
          </FadeInUp>

          <FadeInUp delay={0.1}>
            <div className="bg-pink-50 border border-pink-100 rounded-3xl p-8 md:p-10 mb-8">
              <p className="text-gray-500 text-lg leading-relaxed mb-6">
                Here&apos;s what makes this pillar personal for us: we weren&apos;t
                raised in church. We didn&apos;t grow up memorizing Bible verses or
                singing in the choir. Sabrina and Chanelle both came to Jesus as
                adults — after years of figuring life out on their own terms, after
                hitting walls that self-help books couldn&apos;t fix, after
                realizing that the emptiness they kept trying to fill with
                relationships, success, and approval had a shape that only God
                could match.
              </p>
              <p className="text-gray-500 text-lg leading-relaxed mb-6">
                So when we talk about reaching the lost, we&apos;re not talking
                about &ldquo;those people out there.&rdquo; We&apos;re talking
                about who we were. We know what it feels like to roll your eyes at
                someone quoting Scripture at you. We know the defensiveness that
                kicks in when someone says &ldquo;I&apos;ll pray for you&rdquo;
                and it feels condescending instead of caring. We know what it&apos;s
                like to be skeptical of God, hurt by religion, and not sure if any
                of it is even real.
              </p>
              <p className="text-gray-500 text-lg leading-relaxed">
                And that&apos;s exactly why God chose us for this. Because we don&apos;t
                approach the lost with judgment — we approach them with the empathy
                of someone who sat in that exact same seat. We reach because we
                were reached. We love because someone loved us first when we
                didn&apos;t deserve it and definitely didn&apos;t ask for it.
              </p>
            </div>
          </FadeInUp>

          <FadeInUp delay={0.2}>
            <div className="text-center">
              <SparkleIcon className="w-8 h-8 text-gold/40 mx-auto mb-4" />
              <blockquote className="text-2xl md:text-3xl font-display italic text-gray-900 leading-relaxed mb-3">
                &ldquo;God wants to heal us to such a degree that multitudes are
                won.&rdquo;
              </blockquote>
              <div className="w-16 h-0.5 bg-gold mx-auto" />
            </div>
          </FadeInUp>
        </div>
      </section>

      {/* Section 2 — How to Share Your Faith Without Being Weird */}
      <section className="py-20 bg-pink-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <FadeInUp>
            <div className="text-center mb-16">
              <span className="inline-flex items-center gap-2 bg-cream border border-gold-light/60 text-gray-500 font-semibold uppercase tracking-[0.2em] text-xs px-4 py-1.5 rounded-full mb-4">
                <SparkleIcon className="w-3 h-3 text-gold" />
                Practical Faith
              </span>
              <h2 className="text-3xl md:text-4xl font-black text-pink-900 mt-4 font-display">
                How to Share Your Faith
              </h2>
              <p className="text-gray-500 text-lg mt-4 max-w-2xl mx-auto">
                Without being weird about it. Six principles for sharing Jesus the
                way you&apos;d share a restaurant that changed your life — because
                it genuinely did, not because you&apos;re obligated.
              </p>
            </div>
          </FadeInUp>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {principles.map((principle, i) => (
              <FadeInUp key={principle.number} delay={0.08 * i}>
                <motion.div
                  className="bg-white border border-pink-100 rounded-3xl p-8 h-full relative overflow-hidden"
                  whileHover={{ y: -4 }}
                  transition={{ duration: 0.3 }}
                >
                  <span className="absolute top-4 right-6 text-7xl font-black text-pink-50 select-none">
                    {principle.number}
                  </span>
                  <div className="relative">
                    <h3 className="text-xl font-bold text-pink-900 mb-3">
                      {principle.title}
                    </h3>
                    <div className="w-12 h-0.5 bg-gold mb-4" />
                    <p className="text-gray-500 leading-relaxed mb-4">
                      {principle.description}
                    </p>
                    <blockquote className="text-pink-700 italic text-sm leading-relaxed mb-1">
                      &ldquo;{principle.verse}&rdquo;
                    </blockquote>
                    <p className="text-gold font-semibold text-xs">
                      — {principle.ref}
                    </p>
                  </div>
                </motion.div>
              </FadeInUp>
            ))}
          </div>
        </div>
      </section>

      {/* Section 3 — Everyday Evangelism */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <FadeInUp>
            <div className="text-center mb-16">
              <span className="inline-flex items-center gap-2 bg-cream border border-gold-light/60 text-gray-500 font-semibold uppercase tracking-[0.2em] text-xs px-4 py-1.5 rounded-full mb-4">
                <SparkleIcon className="w-3 h-3 text-gold" />
                Real Scenarios
              </span>
              <h2 className="text-3xl md:text-4xl font-black text-gray-900 mt-4 font-display">
                Everyday Evangelism
              </h2>
              <p className="text-gray-500 text-lg mt-4 max-w-2xl mx-auto">
                Real situations you&apos;ll actually face — and how to show up
                with love instead of a lecture.
              </p>
            </div>
          </FadeInUp>

          <div className="space-y-6">
            {scenarios.map((scenario, i) => (
              <FadeInUp key={i} delay={0.1 * i}>
                <motion.div
                  className="bg-pink-50 border border-pink-100 rounded-3xl p-6 md:p-8"
                  whileHover={{ y: -2 }}
                  transition={{ duration: 0.3 }}
                >
                  <h3 className="text-lg md:text-xl font-bold text-pink-900 mb-6">
                    {scenario.situation}
                  </h3>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                    <div className="bg-white rounded-2xl p-5 border border-pink-100">
                      <div className="flex items-center gap-2 mb-3">
                        <span className="w-6 h-6 rounded-full bg-pink-100 flex items-center justify-center text-pink-400 text-xs font-bold">
                          &#10005;
                        </span>
                        <span className="text-sm font-semibold text-pink-400 uppercase tracking-wide">
                          The Preachy Approach
                        </span>
                      </div>
                      <p className="text-gray-500 text-sm leading-relaxed italic">
                        {scenario.wrong}
                      </p>
                    </div>

                    <div className="bg-white rounded-2xl p-5 border border-gold-light/60">
                      <div className="flex items-center gap-2 mb-3">
                        <span className="w-6 h-6 rounded-full bg-cream flex items-center justify-center text-gold text-xs font-bold">
                          &#10003;
                        </span>
                        <span className="text-sm font-semibold text-gold uppercase tracking-wide">
                          The Better Approach
                        </span>
                      </div>
                      <p className="text-gray-500 text-sm leading-relaxed italic">
                        {scenario.better}
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-2">
                    <SparkleIcon className="w-4 h-4 text-gold mt-0.5 flex-shrink-0" />
                    <p className="text-gray-500 text-sm leading-relaxed">
                      <span className="font-semibold text-pink-900">Why it works: </span>
                      {scenario.why}
                    </p>
                  </div>
                </motion.div>
              </FadeInUp>
            ))}
          </div>
        </div>
      </section>

      {/* Section 4 — The Ripple Effect */}
      <section className="py-20 bg-pink-50">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <FadeInUp>
            <div className="text-center mb-16">
              <span className="inline-flex items-center gap-2 bg-cream border border-gold-light/60 text-gray-500 font-semibold uppercase tracking-[0.2em] text-xs px-4 py-1.5 rounded-full mb-4">
                <SparkleIcon className="w-3 h-3 text-gold" />
                Vision
              </span>
              <h2 className="text-3xl md:text-4xl font-black text-pink-900 mt-4 font-display">
                The Ripple Effect
              </h2>
              <p className="text-gray-500 text-lg mt-4 max-w-2xl mx-auto">
                You don&apos;t have to reach the whole world. You just have to
                reach one woman. And watch what God does with that.
              </p>
            </div>
          </FadeInUp>

          <div className="relative">
            {/* Connecting line */}
            <div className="absolute left-6 md:left-1/2 top-0 bottom-0 w-0.5 bg-gold/20 transform md:-translate-x-1/2 hidden md:block" />

            <div className="space-y-8">
              {rippleSteps.map((step, i) => (
                <FadeInUp key={step.number} delay={0.15 * i}>
                  <div
                    className={`flex items-start gap-6 ${
                      i % 2 === 1 ? "md:flex-row-reverse" : ""
                    }`}
                  >
                    <div className="hidden md:flex flex-1" />
                    <div className="relative z-10 flex-shrink-0">
                      <motion.div
                        className="w-14 h-14 rounded-full bg-white border-2 border-gold flex items-center justify-center shadow-lg shadow-pink-200/20"
                        whileHover={{ scale: 1.1 }}
                        transition={{ duration: 0.3 }}
                      >
                        <span className="text-xl font-black text-gold font-display">
                          {step.number}
                        </span>
                      </motion.div>
                    </div>
                    <div className="flex-1">
                      <motion.div
                        className="bg-white border border-pink-100 rounded-3xl p-6 shadow-lg shadow-pink-200/20"
                        whileHover={{ y: -4 }}
                        transition={{ duration: 0.3 }}
                      >
                        <h3 className="text-lg font-bold text-pink-900 mb-2">
                          {step.label}
                        </h3>
                        <div className="w-10 h-0.5 bg-gold mb-3" />
                        <p className="text-gray-500 leading-relaxed">
                          {step.description}
                        </p>
                      </motion.div>
                    </div>
                  </div>
                </FadeInUp>
              ))}
            </div>
          </div>

          <FadeInUp delay={0.6}>
            <div className="mt-16 text-center bg-white border border-pink-100 rounded-3xl p-8 md:p-10">
              <SparkleIcon className="w-8 h-8 text-gold/40 mx-auto mb-4" />
              <p className="text-gray-500 text-lg leading-relaxed max-w-2xl mx-auto mb-4">
                Research consistently shows that women are the primary carriers of
                faith in families. When a mother comes to Christ, there is a
                significantly higher probability that her children and household
                will follow. When a woman&apos;s life is transformed, her home is
                transformed. Her community is transformed.
              </p>
              <p className="text-pink-900 font-display font-bold text-xl">
                You are not just reaching one woman. You are reaching generations.
              </p>
            </div>
          </FadeInUp>
        </div>
      </section>

      {/* Section 5 — Your Next Step */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <FadeInUp>
            <div className="text-center mb-16">
              <span className="inline-flex items-center gap-2 bg-cream border border-gold-light/60 text-gray-500 font-semibold uppercase tracking-[0.2em] text-xs px-4 py-1.5 rounded-full mb-4">
                <SparkleIcon className="w-3 h-3 text-gold" />
                Take Action
              </span>
              <h2 className="text-3xl md:text-4xl font-black text-gray-900 mt-4 font-display">
                Your Next Step
              </h2>
              <p className="text-gray-500 text-lg mt-4 max-w-xl mx-auto">
                You don&apos;t have to do everything. Just do one thing this week.
              </p>
            </div>
          </FadeInUp>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {nextSteps.map((step, i) => (
              <FadeInUp key={step.title} delay={0.1 * i}>
                <motion.div
                  className="bg-pink-50 border border-pink-100 rounded-3xl p-8 h-full flex flex-col"
                  whileHover={{ y: -4 }}
                  transition={{ duration: 0.3 }}
                >
                  <div className="flex items-start gap-3 mb-4">
                    <SparkleIcon className="w-5 h-5 text-gold mt-1 flex-shrink-0" />
                    <h3 className="text-lg font-bold text-pink-900">
                      {step.title}
                    </h3>
                  </div>
                  <p className="text-gray-500 leading-relaxed mb-6 flex-1">
                    {step.description}
                  </p>
                  <Link
                    href={step.href}
                    className="inline-flex items-center justify-center bg-gray-900 text-white px-6 py-3 rounded-full font-semibold text-sm shadow-md hover:shadow-lg transition-shadow"
                  >
                    {step.cta}
                  </Link>
                </motion.div>
              </FadeInUp>
            ))}
          </div>
        </div>
      </section>

      {/* Final CTA */}
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
              She&apos;s waiting for someone who looks like{" "}
              <span className="bg-gradient-to-r from-gold to-amber-300 bg-clip-text text-transparent">
                you
              </span>{" "}
              to tell her about a God who loves like{" "}
              <span className="bg-gradient-to-r from-gold to-amber-300 bg-clip-text text-transparent">
                Him
              </span>
              .
            </h2>
          </FadeInUp>

          <FadeInUp delay={0.2}>
            <p className="text-pink-100/80 text-lg max-w-xl mx-auto mb-10">
              Love is the loudest sermon you&apos;ll ever preach. And the woman
              God has placed in your path is listening — not to your words, but to
              your life.
            </p>
          </FadeInUp>

          <FadeInUp delay={0.3}>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Link
                href="/episodes"
                className="bg-gold text-pink-900 px-8 py-4 rounded-full font-bold text-lg shadow-lg hover:shadow-xl transition-shadow"
              >
                Listen to Episodes
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
