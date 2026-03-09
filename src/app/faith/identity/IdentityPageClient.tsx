"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { ClientShell } from "../../components/ClientShell";
import { PageHeader } from "../../components/PageHeader";
import { FooterSection } from "../../sections/Footer";
import { FadeInUp } from "../../components/FramerAnimations";
import { SparkleIcon } from "../../components/Icons";

const lies = [
  {
    lie: "You are not enough.",
    truth:
      "You are complete in Him. Not because you got it all together, but because the One who holds all things together lives in you.",
    verse: "Colossians 2:10",
    scripture:
      "And in Christ you have been brought to fullness. He is the head over every power and authority.",
  },
  {
    lie: "You are too much.",
    truth:
      "You were never too much. You were placed in a world that wasn't ready for the fullness God put inside you. That's not your problem to shrink for.",
    verse: "Ephesians 3:20",
    scripture:
      "Now to him who is able to do immeasurably more than all we ask or imagine, according to his power that is at work within us.",
  },
  {
    lie: "If they really knew you, they'd leave.",
    truth:
      "He knew every broken piece, every hidden shame, every 3 AM thought — and He still chose the cross. He's not leaving.",
    verse: "Romans 8:38-39",
    scripture:
      "Neither death nor life, neither angels nor demons... will be able to separate us from the love of God.",
  },
  {
    lie: "Your value is in what you produce.",
    truth:
      "You are not a product. You are a person. God didn't love you for your output — He loved you before you ever did a single thing.",
    verse: "Ephesians 2:8-9",
    scripture:
      "For it is by grace you have been saved, through faith — and this is not from yourselves, it is the gift of God — not by works.",
  },
  {
    lie: "You missed your chance. It's too late.",
    truth:
      "God doesn't operate on your timeline. He's the God of the suddenly, the not-yet, and the right-on-time. Your story isn't over.",
    verse: "Isaiah 43:19",
    scripture:
      "See, I am doing a new thing! Now it springs up; do you not perceive it?",
  },
];

const identityStatements = [
  {
    declaration: "You are chosen.",
    expansion:
      "Not because you earned it, but because He wanted you. Before the foundation of the world, before you had a name or a face or a curl pattern — He looked at all of eternity and said, 'Her. I want her.'",
    verse: "1 Peter 2:9",
    scripture:
      "But you are a chosen people, a royal priesthood, a holy nation, God's special possession, that you may declare the praises of him who called you out of darkness into his wonderful light.",
  },
  {
    declaration: "You are not an accident.",
    expansion:
      "Every detail about you — the way you laugh, the texture of your hair, the way your mind works, the things that make you cry — was designed on purpose by a God who doesn't make mistakes.",
    verse: "Psalm 139:13-14",
    scripture:
      "For you created my inmost being; you knit me together in my mother's womb. I praise you because I am fearfully and wonderfully made.",
  },
  {
    declaration: "You are forgiven. Completely.",
    expansion:
      "Not partially. Not on a probationary basis. Not 'forgiven but we're watching you.' The thing you can't stop thinking about at 2 AM? He already handled it. The cross wasn't a down payment — it was paid in full.",
    verse: "Psalm 103:12",
    scripture:
      "As far as the east is from the west, so far has he removed our transgressions from us.",
  },
  {
    declaration: "You are deeply, fiercely loved.",
    expansion:
      "Not the kind of love that fades when you gain weight or lose a job or post a bad photo. The kind of love that endured a cross. The kind that says 'I'd do it again — just for you.'",
    verse: "Romans 5:8",
    scripture:
      "But God demonstrates his own love for us in this: While we were still sinners, Christ died for us.",
  },
  {
    declaration: "You have a purpose.",
    expansion:
      "Not just a vague, cosmic purpose. A real one. A specific one. The gifts you have, the pain you've walked through, the things that set your soul on fire — none of it was wasted. Every piece of your story is being woven into something beautiful.",
    verse: "Jeremiah 29:11",
    scripture:
      "For I know the plans I have for you, declares the Lord, plans to prosper you and not to harm you, plans to give you hope and a future.",
  },
  {
    declaration: "You are never alone.",
    expansion:
      "Not in the hospital room. Not in the divorce. Not in the season where nobody texts back. He is closer than your next breath, and He is not intimidated by your mess. He moves toward you, not away.",
    verse: "Deuteronomy 31:6",
    scripture:
      "Be strong and courageous. Do not be afraid or terrified because of them, for the Lord your God goes with you; he will never leave you nor forsake you.",
  },
  {
    declaration: "You are free.",
    expansion:
      "From the opinions that used to paralyze you. From the performance treadmill. From the need to prove that you belong. Jesus already settled that. You can exhale now.",
    verse: "Galatians 5:1",
    scripture:
      "It is for freedom that Christ has set us free. Stand firm, then, and do not let yourselves be burdened again by a yoke of slavery.",
  },
  {
    declaration: "You are being made new.",
    expansion:
      "Right now. In this moment. You are not a finished product and that's the beauty of it. God is not done writing your story, refining your character, or expanding your capacity. Growth is proof that you're alive.",
    verse: "2 Corinthians 5:17",
    scripture:
      "Therefore, if anyone is in Christ, the new creation has come: The old has gone, the new is here!",
  },
];

const journeySteps = [
  {
    step: 1,
    title: "Name the lies.",
    description:
      "Get a journal — a real one, not your Notes app. Write down every lie you believe about yourself. The ones you'd never say out loud. The ones that play on repeat when the room gets quiet. Naming them is the first step to disarming them. You can't fight what you won't acknowledge.",
  },
  {
    step: 2,
    title: "Find the truth that answers each lie.",
    description:
      "For every lie on your list, find a Scripture that speaks the opposite. Not a motivational quote. Not an affirmation you found on Pinterest. God's Word — because it carries authority that your feelings don't. Write the verse next to the lie. Watch how small the lie looks next to the truth.",
  },
  {
    step: 3,
    title: "Speak it out loud. Every morning. For 30 days.",
    description:
      "This is where it gets uncomfortable — and where the transformation happens. Stand in front of your mirror and declare those truths over yourself. Out loud. Your ears need to hear what your mouth is saying. Faith comes by hearing, and you need to hear yourself agreeing with God about who you are.",
  },
  {
    step: 4,
    title: "Find one woman to walk this out with.",
    description:
      "Identity work is not meant to be done alone. Find one friend, one mentor, one sister in Christ who will hold you accountable, pray with you, and remind you of the truth on the days you forget. Vulnerability in community is where the deepest healing happens.",
  },
  {
    step: 5,
    title: "Join the Collective.",
    description:
      "You don't have to figure this out by yourself. Our community is full of women who are doing this same work — dismantling lies, speaking truth, and becoming who God made them to be. We're not perfect. We're just not doing it alone anymore.",
  },
];

export function IdentityPageClient() {
  return (
    <ClientShell>
      <PageHeader
        badge="Pillar 01"
        title="Identity in"
        titleAccent="Christ"
        subtitle="Before you define yourself by your career, your relationship status, your curl pattern, or your follower count — know this: your identity was settled before you were born."
      />

      {/* Section 1: The Lies We Believe */}
      <section className="py-20 bg-pink-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <FadeInUp>
            <div className="text-center mb-16">
              <span className="inline-flex items-center gap-2 bg-cream border border-gold-light/60 text-gray-500 font-semibold uppercase tracking-[0.2em] text-xs px-4 py-1.5 rounded-full mb-4">
                <SparkleIcon className="w-3 h-3 text-gold" />
                Breaking Free
              </span>
              <h2 className="text-3xl md:text-4xl font-black text-pink-900 mt-4 font-display">
                The Lies We Believe
              </h2>
              <p className="text-gray-500 text-lg mt-4 max-w-2xl mx-auto">
                Let&apos;s be honest. Before we can walk in who God says we
                are, we have to confront who the world has told us we are. These
                are the lies that most of us carry — and the truth that dismantles
                every single one.
              </p>
            </div>
          </FadeInUp>

          <div className="space-y-6 max-w-4xl mx-auto">
            {lies.map((item, i) => (
              <FadeInUp key={item.lie} delay={0.08 * i}>
                <motion.div
                  className="bg-white border border-pink-100 rounded-3xl p-6 md:p-8"
                  whileHover={{ y: -4 }}
                  transition={{ duration: 0.3 }}
                >
                  <div className="flex flex-col md:flex-row md:items-start gap-6">
                    <div className="flex-1">
                      <p className="text-pink-400 font-display font-bold text-lg italic mb-2 line-through decoration-pink-300/60">
                        &ldquo;{item.lie}&rdquo;
                      </p>
                      <div className="w-12 h-0.5 bg-gold mb-4" />
                      <p className="text-gray-900 font-bold text-lg mb-2">
                        The Truth:
                      </p>
                      <p className="text-gray-500 leading-relaxed mb-3">
                        {item.truth}
                      </p>
                      <div className="bg-pink-50 border border-pink-100 rounded-xl p-4">
                        <p className="text-pink-700 italic text-sm leading-relaxed">
                          &ldquo;{item.scripture}&rdquo;
                        </p>
                        <p className="text-gold font-semibold text-xs mt-2">
                          — {item.verse}
                        </p>
                      </div>
                    </div>
                  </div>
                </motion.div>
              </FadeInUp>
            ))}
          </div>
        </div>
      </section>

      {/* Section 2: What God Says About You */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <FadeInUp>
            <div className="text-center mb-16">
              <span className="inline-flex items-center gap-2 bg-cream border border-gold-light/60 text-gray-500 font-semibold uppercase tracking-[0.2em] text-xs px-4 py-1.5 rounded-full mb-4">
                <SparkleIcon className="w-3 h-3 text-gold" />
                His Word Over You
              </span>
              <h2 className="text-3xl md:text-4xl font-black text-gray-900 mt-4 font-display">
                What God Says About You
              </h2>
              <p className="text-gray-500 text-lg mt-4 max-w-2xl mx-auto">
                These aren&apos;t motivational quotes. These are declarations
                backed by the authority of heaven. Read them slowly. Let them
                settle in the places where the lies used to live.
              </p>
            </div>
          </FadeInUp>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {identityStatements.map((item, i) => (
              <FadeInUp key={item.verse} delay={0.08 * i}>
                <motion.div
                  className="bg-pink-50 border border-pink-100 rounded-3xl p-6 md:p-8 h-full flex flex-col"
                  whileHover={{ y: -4 }}
                  transition={{ duration: 0.3 }}
                >
                  <div className="flex items-center gap-3 mb-4">
                    <SparkleIcon className="w-5 h-5 text-gold flex-shrink-0" />
                    <h3 className="text-xl font-bold text-pink-900 font-display">
                      {item.declaration}
                    </h3>
                  </div>
                  <p className="text-gray-500 leading-relaxed mb-4 flex-1">
                    {item.expansion}
                  </p>
                  <div className="border-t border-pink-100 pt-4">
                    <p className="text-pink-700 italic text-sm leading-relaxed">
                      &ldquo;{item.scripture}&rdquo;
                    </p>
                    <p className="text-gold font-semibold text-xs mt-2">
                      — {item.verse}
                    </p>
                  </div>
                </motion.div>
              </FadeInUp>
            ))}
          </div>
        </div>
      </section>

      {/* Section 3: Sabrina & Chanelle's Story */}
      <section className="py-20 bg-pink-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <FadeInUp>
            <div className="text-center mb-16">
              <span className="inline-flex items-center gap-2 bg-cream border border-gold-light/60 text-gray-500 font-semibold uppercase tracking-[0.2em] text-xs px-4 py-1.5 rounded-full mb-4">
                <SparkleIcon className="w-3 h-3 text-gold" />
                Our Stories
              </span>
              <h2 className="text-3xl md:text-4xl font-black text-pink-900 mt-4 font-display">
                How We Found Ourselves in Him
              </h2>
            </div>
          </FadeInUp>

          {/* Sabrina's Story */}
          <FadeInUp delay={0.1}>
            <div className="bg-white border border-pink-100 rounded-3xl p-8 md:p-10 mb-8">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-12 h-12 rounded-full bg-pink-100 flex items-center justify-center">
                  <span className="text-pink-900 font-bold font-display text-lg">
                    S
                  </span>
                </div>
                <div>
                  <h3 className="text-xl font-bold text-pink-900 font-display">
                    Sabrina&apos;s Story
                  </h3>
                  <p className="text-gray-400 text-sm">
                    Finding faith after finding &ldquo;success&rdquo;
                  </p>
                </div>
              </div>
              <div className="space-y-4 text-gray-500 leading-relaxed">
                <p>
                  For most of my twenties, I knew exactly who I was — or I thought
                  I did. I was the ambitious one. The one with the plan. The one
                  who had her five-year goals mapped out on color-coded
                  spreadsheets. My identity was wrapped up in my career title,
                  my relationship status, and whether or not people saw me as
                  someone who had it together.
                </p>
                <p>
                  And honestly? From the outside, it looked like it was working.
                  Promotions came. Relationships happened. People said things
                  like &ldquo;I don&apos;t know how you do it all.&rdquo; But
                  here&apos;s what nobody saw: I was exhausted. I was performing
                  a version of myself that required constant maintenance. Every
                  morning I woke up and put on the armor of productivity and
                  perfection — because without it, I didn&apos;t know who I was.
                </p>
                <p>
                  The unraveling happened slowly, and then all at once. A
                  relationship ended. A job I&apos;d built my identity around
                  shifted. And suddenly all the things I&apos;d used to answer the
                  question &ldquo;Who are you?&rdquo; were gone. I remember
                  sitting on my bathroom floor thinking, &ldquo;If I&apos;m not
                  those things, then who am I?&rdquo;
                </p>
                <p>
                  That&apos;s when God met me. Not with a dramatic moment or a
                  burning bush — but with a whisper. Through a friend who invited
                  me to church. Through a sermon that felt like it was written for
                  me. Through Scripture that answered questions I didn&apos;t even
                  know I was asking. For the first time in my life, I heard that
                  my worth wasn&apos;t in what I did — it was in whose I was.
                </p>
                <p className="text-pink-900 font-semibold italic">
                  Coming to faith later in life means I remember what it felt like
                  to build my house on sand. And I never want to go back. Now I
                  know: I am His before I am anything else.
                </p>
              </div>
            </div>
          </FadeInUp>

          {/* Chanelle's Story */}
          <FadeInUp delay={0.2}>
            <div className="bg-white border border-pink-100 rounded-3xl p-8 md:p-10">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-12 h-12 rounded-full bg-pink-100 flex items-center justify-center">
                  <span className="text-pink-900 font-bold font-display text-lg">
                    C
                  </span>
                </div>
                <div>
                  <h3 className="text-xl font-bold text-pink-900 font-display">
                    Chanelle&apos;s Story
                  </h3>
                  <p className="text-gray-400 text-sm">
                    From people-pleasing to purpose
                  </p>
                </div>
              </div>
              <div className="space-y-4 text-gray-500 leading-relaxed">
                <p>
                  I spent years being whoever the room needed me to be. With my
                  family, I was the peacekeeper. With my friends, I was the fun
                  one. At work, I was the agreeable one. I was so good at reading
                  what people wanted from me and becoming that person — that I
                  completely lost track of who I actually was.
                </p>
                <p>
                  People-pleasing doesn&apos;t look like weakness from the
                  outside. It looks like kindness. Flexibility. Being
                  &ldquo;easygoing.&rdquo; But underneath it was this constant,
                  gnawing fear: if I said no, if I showed the real me, if I
                  stopped making everyone comfortable — would anyone still stay?
                </p>
                <p>
                  The breaking point came when I realized I couldn&apos;t answer
                  a simple question: &ldquo;What do you want?&rdquo; Not what
                  does your mom want for you. Not what would make your friends
                  proud. What do <em>you</em> want? I had no idea. I&apos;d been
                  so busy being everything for everyone that I&apos;d become
                  nothing to myself.
                </p>
                <p>
                  A mentor told me something that changed my life: &ldquo;You
                  keep looking for your identity in other people&apos;s eyes.
                  But they&apos;re looking at a version of you that you
                  created for them. Only God sees the real you — and He&apos;s
                  the only one whose opinion gets to define you.&rdquo;
                </p>
                <p>
                  That sent me on a journey. I started reading the Bible not as a
                  religious obligation, but as a woman desperate to know who she
                  was. And what I found wrecked me — in the best way. God
                  didn&apos;t need me to perform. He didn&apos;t need me to be
                  agreeable or impressive. He already loved me. The real me. The
                  messy, unsure, still-figuring-it-out me.
                </p>
                <p className="text-pink-900 font-semibold italic">
                  I&apos;m still in recovery from people-pleasing — I probably
                  always will be. But now I have an anchor. When the old patterns
                  try to pull me back, I come back to this: I am not who they say
                  I am. I am who He says I am. And that is more than enough.
                </p>
              </div>
            </div>
          </FadeInUp>
        </div>
      </section>

      {/* Section 4: Start Your Identity Journey */}
      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <FadeInUp>
            <div className="text-center mb-16">
              <span className="inline-flex items-center gap-2 bg-cream border border-gold-light/60 text-gray-500 font-semibold uppercase tracking-[0.2em] text-xs px-4 py-1.5 rounded-full mb-4">
                <SparkleIcon className="w-3 h-3 text-gold" />
                Take the First Step
              </span>
              <h2 className="text-3xl md:text-4xl font-black text-gray-900 mt-4 font-display">
                Start Your Identity Journey
              </h2>
              <p className="text-gray-500 text-lg mt-4 max-w-2xl mx-auto">
                This isn&apos;t a 12-step program or a self-help formula.
                It&apos;s an invitation to do the slow, sacred work of letting
                God rewrite the story you&apos;ve been telling yourself.
              </p>
            </div>
          </FadeInUp>

          <div className="space-y-6">
            {journeySteps.map((item, i) => (
              <FadeInUp key={item.step} delay={0.1 * i}>
                <motion.div
                  className="bg-pink-50 border border-pink-100 rounded-3xl p-6 md:p-8"
                  whileHover={{ y: -4 }}
                  transition={{ duration: 0.3 }}
                >
                  <div className="flex items-start gap-5">
                    <div className="w-12 h-12 rounded-full bg-white border border-pink-200 flex items-center justify-center flex-shrink-0 shadow-sm">
                      <span className="text-gold font-bold font-display text-lg">
                        {item.step}
                      </span>
                    </div>
                    <div className="flex-1">
                      <h3 className="text-xl font-bold text-pink-900 mb-2 font-display">
                        {item.title}
                      </h3>
                      <p className="text-gray-500 leading-relaxed">
                        {item.description}
                      </p>
                    </div>
                  </div>
                </motion.div>
              </FadeInUp>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
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
              Ready to Discover Who{" "}
              <span className="bg-gradient-to-r from-gold to-amber-300 bg-clip-text text-transparent">
                You Really Are
              </span>
              ?
            </h2>
          </FadeInUp>

          <FadeInUp delay={0.2}>
            <p className="text-pink-100/80 text-lg max-w-xl mx-auto mb-10">
              Your identity was never meant to be assembled from the opinions of
              people who don&apos;t know your name. It was meant to be received
              from the God who gave you one. Come discover who you are in Him.
            </p>
          </FadeInUp>

          <FadeInUp delay={0.3}>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Link
                href="/episodes"
                className="bg-gold text-pink-900 px-8 py-4 rounded-full font-bold text-lg shadow-lg hover:shadow-xl transition-shadow"
              >
                Listen to Identity Episodes
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
              &ldquo;You are who He says you are. Nothing more is needed. Nothing
              less is true.&rdquo;
            </p>
          </FadeInUp>
        </div>
      </section>

      <FooterSection />
    </ClientShell>
  );
}
