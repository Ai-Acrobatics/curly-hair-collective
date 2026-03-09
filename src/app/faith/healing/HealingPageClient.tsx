"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { ClientShell } from "../../components/ClientShell";
import { PageHeader } from "../../components/PageHeader";
import { FooterSection } from "../../sections/Footer";
import { FadeInUp } from "../../components/FramerAnimations";
import { SparkleIcon } from "../../components/Icons";

/* ─────────────────────────── DATA ─────────────────────────── */

const wounds = [
  {
    title: "Toxic Relationships",
    feeling:
      "You gave everything to someone who took everything from you. Now you flinch when people get close. You wonder if love always has to cost this much.",
    scripture: "He restores my soul. He leads me in paths of righteousness for his name\u2019s sake.",
    ref: "Psalm 23:3",
  },
  {
    title: "Absent Parents",
    feeling:
      "There\u2019s a chair at every table that should have been filled. You learned to stop expecting, and somewhere along the way, you started believing you weren\u2019t worth staying for.",
    scripture:
      "When my father and my mother forsake me, then the Lord will take me up.",
    ref: "Psalm 27:10",
  },
  {
    title: "Body Image & Eating Disorders",
    feeling:
      "The mirror became your enemy. Numbers on a scale became your worth. You punished your body because the world told you it wasn\u2019t right, and you believed it.",
    scripture:
      "I praise you because I am fearfully and wonderfully made; your works are wonderful, I know that full well.",
    ref: "Psalm 139:14",
  },
  {
    title: "Sexual Trauma",
    feeling:
      "Something was stolen from you that you can never get back. You carry shame that was never yours to carry. You\u2019ve spent years trying to feel safe in your own skin.",
    scripture:
      "The Lord is close to the brokenhearted and saves those who are crushed in spirit.",
    ref: "Psalm 34:18",
  },
  {
    title: "Miscarriage & Loss",
    feeling:
      "You held a future in your body and then it was gone. People say \u201Cit wasn\u2019t meant to be,\u201D and every word lands like a brick. The grief has no timeline.",
    scripture:
      "Blessed are those who mourn, for they will be comforted.",
    ref: "Matthew 5:4",
  },
  {
    title: "Church Hurt & Spiritual Abuse",
    feeling:
      "The place that was supposed to be safe became the source of your deepest wounds. Leaders you trusted used God\u2019s name to control, shame, or silence you.",
    scripture:
      "Come to me, all you who are weary and burdened, and I will give you rest.",
    ref: "Matthew 11:28",
  },
  {
    title: "Divorce & Broken Families",
    feeling:
      "The promise was \u2018til death do us part.\u2019 Now you\u2019re rebuilding an entire life from the wreckage of what was supposed to be forever. The failure feels like it\u2019s tattooed on your forehead.",
    scripture:
      "He heals the brokenhearted and binds up their wounds.",
    ref: "Psalm 147:3",
  },
  {
    title: "Career Failure & Identity Loss",
    feeling:
      "You poured years into something that collapsed. The title, the income, the purpose \u2014 gone. And now the question you can\u2019t stop asking: if I\u2019m not that, then who am I?",
    scripture:
      "For I know the plans I have for you, declares the Lord, plans to prosper you and not to harm you, plans to give you hope and a future.",
    ref: "Jeremiah 29:11",
  },
];

const testimonials = [
  {
    name: "Jasmine, 28",
    wound: "Body Image & Recovery",
    story:
      "For seven years, I counted every calorie and hated what I saw in the mirror. I thought God couldn\u2019t love a body I was destroying. But through therapy and a small group of women who actually saw me, I started to believe that my body wasn\u2019t a project to fix \u2014 it was a temple He already called good. I\u2019m not \u2018recovered.\u2019 I\u2019m recovering. And that\u2019s enough.",
  },
  {
    name: "Monique, 34",
    wound: "Healing After a Toxic Relationship",
    story:
      "He told me I was nothing without him, and for a while I believed it. After I left, I didn\u2019t even know what I liked anymore \u2014 what music, what food, what I wanted. Rebuilding myself felt like learning to walk again. But God met me in the silence. He didn\u2019t rush me. He just kept whispering, \u2018You are Mine.\u2019 And slowly, I started to believe Him more than I believed the lies.",
  },
  {
    name: "Priya, 31",
    wound: "Forgiving an Absent Father",
    story:
      "I spent my twenties angry. Every Father\u2019s Day was a reminder. Every boyfriend was an audition for the role he never played. The day I finally said \u2018I forgive you\u2019 out loud \u2014 alone in my car, ugly crying \u2014 something broke open in me. Not for him. For me. Forgiveness didn\u2019t mean what he did was okay. It meant I was done letting it write my story.",
  },
  {
    name: "Taylor, 26",
    wound: "Healing from Church Hurt",
    story:
      "My pastor told me my depression was a faith problem. That I just needed to pray harder. I left the church and almost left God. But God is not that pastor. God is not that church. It took two years, a therapist, and a house church of six women to remind me that Jesus never once shamed someone for bleeding. He healed them.",
  },
];

const toolkitItems = [
  {
    title: "Journal Prompts for Processing Pain",
    icon: "\uD83D\uDCD3",
    content: [
      "What is the wound I\u2019ve been avoiding naming? Write it down. Not for anyone else \u2014 just for you and God.",
      "When did I first start believing the lie that I\u2019m [broken / unworthy / too much / not enough]? What was happening?",
      "If my pain could speak, what would it say it needs right now?",
      "Write a letter to the person who hurt you. You never have to send it. But let the words out.",
      "What does God say about me that contradicts what my wound says about me? List both side by side.",
    ],
  },
  {
    title: "When to Seek Therapy (and Why It\u2019s Biblical)",
    icon: "\uD83E\uDE7A",
    content: [
      "Therapy is not a lack of faith. It\u2019s stewardship of the mind God gave you.",
      "Consider therapy if: you\u2019re replaying the same painful loop, your relationships keep breaking in the same pattern, you feel numb or disconnected, anxiety or sadness is affecting your daily life, or you\u2019re using food, substances, or relationships to cope.",
      "Look for a licensed counselor who integrates faith, or find a secular therapist and a separate spiritual mentor. Both paths are valid.",
      "Many therapists offer sliding-scale fees. Ask your church if they have a counseling fund. Organizations like Open Path Collective offer sessions starting at $30.",
    ],
  },
  {
    title: "Scripture Anchors for Dark Days",
    icon: "\u2693",
    content: [
      "\u201CThe Lord is close to the brokenhearted and saves those who are crushed in spirit.\u201D \u2014 Psalm 34:18 \u2014 When you feel utterly alone in your pain.",
      "\u201CHe heals the brokenhearted and binds up their wounds.\u201D \u2014 Psalm 147:3 \u2014 When the wound feels like it will never close.",
      "\u201CWeeping may stay for the night, but rejoicing comes in the morning.\u201D \u2014 Psalm 30:5 \u2014 When the darkness feels permanent.",
      "\u201CFor I am convinced that neither death nor life... nor anything else in all creation, will be able to separate us from the love of God.\u201D \u2014 Romans 8:38-39 \u2014 When shame tells you God has moved on.",
      "\u201CHe has sent me to bind up the brokenhearted, to proclaim freedom for the captives.\u201D \u2014 Isaiah 61:1 \u2014 When you feel trapped by your past.",
      "\u201CMy grace is sufficient for you, for my power is made perfect in weakness.\u201D \u2014 2 Corinthians 12:9 \u2014 When you\u2019re exhausted from pretending to be fine.",
    ],
  },
  {
    title: "How to Find a Safe Community",
    icon: "\uD83E\uDD1D",
    content: [
      "A safe community does not require you to perform healing. It holds space for your mess.",
      "Look for: people who ask questions instead of giving advice, leaders who are honest about their own struggles, groups where tears are as welcome as laughter, and spaces where doubt is not treated as sin.",
      "Start small. You don\u2019t need a megachurch \u2014 you need two or three women who will sit with you and not try to fix you.",
      "If a group makes you feel worse about yourself, that is information. Trust it. God will not lead you somewhere that shames you into shrinking.",
    ],
  },
  {
    title: "A Prayer You Can Pray Right Now",
    icon: "\uD83D\uDE4F",
    content: [
      "God, I\u2019m tired of carrying this. I\u2019m tired of pretending I\u2019m fine when I\u2019m not.",
      "You know every wound I carry \u2014 the ones I talk about and the ones I\u2019ve buried so deep I almost forgot they were there. But You didn\u2019t forget.",
      "I don\u2019t need You to fix it all right now. I just need You to be close. Meet me here \u2014 in the mess, in the questions, in the middle of the night when I can\u2019t sleep.",
      "Heal what needs to be healed. Reveal what needs to be revealed. And give me the courage to let someone in.",
      "I believe You make broken things beautiful. Start with me.",
      "In Jesus\u2019 name, Amen.",
    ],
  },
];

/* ─────────────────────────── COMPONENT ─────────────────────────── */

export function HealingPageClient() {
  return (
    <ClientShell>
      <PageHeader
        badge="Pillar 02"
        title="Healing &"
        titleAccent="Restoration"
        subtitle="God meets you in the broken places. Not to judge what fell apart, but to begin putting you back together."
      />

      {/* ── Section 1: The Wounds We Carry ── */}
      <section className="py-20 bg-pink-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <FadeInUp>
            <div className="text-center mb-16">
              <span className="inline-flex items-center gap-2 bg-cream border border-gold-light/60 text-gray-500 font-semibold uppercase tracking-[0.2em] text-xs px-4 py-1.5 rounded-full mb-4">
                <SparkleIcon className="w-3 h-3 text-gold" />
                Naming the Pain
              </span>
              <h2 className="text-3xl md:text-4xl font-black text-pink-900 mt-4 font-display">
                The Wounds We Carry
              </h2>
              <p className="text-gray-500 text-lg mt-4 max-w-2xl mx-auto">
                Healing begins with honesty. These are the things we carry in
                silence &mdash; the weight no one sees. If you see yourself here,
                know this: you are not alone, and you are not too far gone.
              </p>
            </div>
          </FadeInUp>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {wounds.map((wound, i) => (
              <FadeInUp key={wound.title} delay={0.08 * i}>
                <motion.div
                  className="bg-white border border-pink-100 rounded-3xl p-8 h-full flex flex-col"
                  whileHover={{ y: -4 }}
                  transition={{ duration: 0.3 }}
                >
                  <h3 className="text-xl font-bold text-pink-900 mb-3">
                    {wound.title}
                  </h3>
                  <div className="w-12 h-0.5 bg-gold mb-4" />
                  <p className="text-gray-500 leading-relaxed mb-6 flex-1 italic">
                    {wound.feeling}
                  </p>
                  <div className="bg-pink-50 border border-pink-100 rounded-2xl p-4">
                    <blockquote className="text-pink-700 italic text-sm leading-relaxed">
                      &ldquo;{wound.scripture}&rdquo;
                    </blockquote>
                    <p className="text-gold font-semibold text-xs mt-2">
                      &mdash; {wound.ref}
                    </p>
                  </div>
                </motion.div>
              </FadeInUp>
            ))}
          </div>
        </div>
      </section>

      {/* ── Section 2: God's Healing Isn't What You Expect ── */}
      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <FadeInUp>
            <div className="text-center mb-12">
              <span className="inline-flex items-center gap-2 bg-cream border border-gold-light/60 text-gray-500 font-semibold uppercase tracking-[0.2em] text-xs px-4 py-1.5 rounded-full mb-4">
                <SparkleIcon className="w-3 h-3 text-gold" />
                Redefining Healing
              </span>
              <h2 className="text-3xl md:text-4xl font-black text-pink-900 mt-4 font-display">
                God&apos;s Healing Isn&apos;t What You Expect
              </h2>
            </div>
          </FadeInUp>

          <div className="space-y-8">
            <FadeInUp delay={0.1}>
              <p className="text-gray-500 text-lg leading-relaxed">
                We grow up hearing that faith fixes everything. Pray hard enough
                and the pain goes away. Believe big enough and the wound closes
                overnight. But that&apos;s not how it works &mdash; and pretending
                it is has left an entire generation of women smiling in church on
                Sunday while falling apart on Monday.
              </p>
            </FadeInUp>

            <FadeInUp delay={0.15}>
              <p className="text-gray-500 text-lg leading-relaxed">
                Real healing is not a straight line. It is messy. It doubles back.
                Some days you feel free and some days the grief hits you in the
                cereal aisle at 2 PM on a Tuesday. That does not mean you are
                failing. It means you are human, and healing is doing what it
                does &mdash; working through you at its own pace, in God&apos;s
                own timing.
              </p>
            </FadeInUp>

            <FadeInUp delay={0.2}>
              <div className="relative my-12">
                <div className="absolute inset-0 flex items-center">
                  <div className="w-full border-t border-pink-100" />
                </div>
                <div className="relative flex justify-center">
                  <SparkleIcon className="w-6 h-6 text-gold bg-white px-1" />
                </div>
              </div>
              <blockquote className="text-2xl md:text-3xl font-display italic text-gray-900 text-center leading-relaxed py-4">
                &ldquo;Healing doesn&apos;t mean it never happened. It means it
                no longer controls you.&rdquo;
              </blockquote>
              <div className="relative my-12">
                <div className="absolute inset-0 flex items-center">
                  <div className="w-full border-t border-pink-100" />
                </div>
                <div className="relative flex justify-center">
                  <SparkleIcon className="w-6 h-6 text-gold bg-white px-1" />
                </div>
              </div>
            </FadeInUp>

            <FadeInUp delay={0.25}>
              <p className="text-gray-500 text-lg leading-relaxed">
                Here is what we believe: therapy and faith are not enemies. A
                counselor&apos;s office and a prayer closet can coexist. God gave
                us community, medicine, professional help, and the Holy Spirit
                &mdash; and asking for all of them is not weakness. It is wisdom.
                David cried out to God <em>and</em> ran to safety. Elijah was
                ministered to by angels <em>and</em> told to eat and sleep. Jesus
                himself withdrew from crowds when He needed rest.
              </p>
            </FadeInUp>

            <FadeInUp delay={0.3}>
              <p className="text-gray-500 text-lg leading-relaxed">
                If you have been told that your depression is a faith problem, or
                that your anxiety just needs more worship music, or that you
                should be &ldquo;over it by now&rdquo; &mdash; hear this: that
                voice is not the voice of your Father. God does not rush your
                healing, and He does not shame you for bleeding. He binds the
                wound. He stays close. He does the slow, sacred work of making
                you whole.
              </p>
            </FadeInUp>

            <FadeInUp delay={0.35}>
              <blockquote className="border-l-4 border-gold bg-pink-50 rounded-r-2xl p-6 my-8">
                <p className="text-pink-900 italic text-lg leading-relaxed">
                  &ldquo;He does not treat us as our sins deserve or repay us
                  according to our iniquities. For as high as the heavens are
                  above the earth, so great is his love for those who fear
                  him.&rdquo;
                </p>
                <p className="text-gold font-semibold text-sm mt-3">
                  &mdash; Psalm 103:10-11
                </p>
              </blockquote>
            </FadeInUp>

            <FadeInUp delay={0.4}>
              <p className="text-gray-500 text-lg leading-relaxed">
                So if you are in the middle of it &mdash; if the healing feels
                slow, if the wound still aches, if you are tired of people
                telling you to &ldquo;just trust God&rdquo; as if trust were a
                switch you flip &mdash; we want you to know: you are exactly
                where you are supposed to be. Not behind. Not broken beyond
                repair. Just in process. And God is not finished with you yet.
              </p>
            </FadeInUp>
          </div>
        </div>
      </section>

      {/* ── Section 3: Stories of Restoration ── */}
      <section className="py-20 bg-pink-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <FadeInUp>
            <div className="text-center mb-16">
              <span className="inline-flex items-center gap-2 bg-cream border border-gold-light/60 text-gray-500 font-semibold uppercase tracking-[0.2em] text-xs px-4 py-1.5 rounded-full mb-4">
                <SparkleIcon className="w-3 h-3 text-gold" />
                Real Stories
              </span>
              <h2 className="text-3xl md:text-4xl font-black text-pink-900 mt-4 font-display">
                Stories of Restoration
              </h2>
              <p className="text-gray-500 text-lg mt-4 max-w-xl mx-auto">
                These women walked through fire &mdash; and found God waiting on
                the other side.
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
                  {/* Gold sparkle rating */}
                  <div className="flex gap-1 mb-4">
                    {[...Array(5)].map((_, idx) => (
                      <SparkleIcon
                        key={idx}
                        className="w-4 h-4 text-gold"
                      />
                    ))}
                  </div>
                  <p className="text-gray-500 leading-relaxed italic flex-1 mb-6">
                    &ldquo;{t.story}&rdquo;
                  </p>
                  <div className="flex items-center gap-3 pt-4 border-t border-pink-50">
                    <div className="w-10 h-10 rounded-full bg-pink-100 flex items-center justify-center">
                      <SparkleIcon className="w-4 h-4 text-gold" />
                    </div>
                    <div>
                      <p className="font-bold text-pink-900 text-sm">
                        {t.name}
                      </p>
                      <p className="text-gray-400 text-xs">{t.wound}</p>
                    </div>
                  </div>
                </motion.div>
              </FadeInUp>
            ))}
          </div>
        </div>
      </section>

      {/* ── Section 4: Your Healing Toolkit ── */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <FadeInUp>
            <div className="text-center mb-16">
              <span className="inline-flex items-center gap-2 bg-cream border border-gold-light/60 text-gray-500 font-semibold uppercase tracking-[0.2em] text-xs px-4 py-1.5 rounded-full mb-4">
                <SparkleIcon className="w-3 h-3 text-gold" />
                Practical Resources
              </span>
              <h2 className="text-3xl md:text-4xl font-black text-pink-900 mt-4 font-display">
                Your Healing Toolkit
              </h2>
              <p className="text-gray-500 text-lg mt-4 max-w-xl mx-auto">
                Not platitudes. Not clich&eacute;s. Real tools you can use today
                to start the slow, sacred work of getting well.
              </p>
            </div>
          </FadeInUp>

          <div className="space-y-6">
            {toolkitItems.map((item, i) => (
              <FadeInUp key={item.title} delay={0.1 * i}>
                <motion.div
                  className="bg-pink-50 border border-pink-100 rounded-3xl p-8"
                  whileHover={{ y: -2 }}
                  transition={{ duration: 0.3 }}
                >
                  <div className="flex items-start gap-4">
                    <span className="text-3xl" role="img" aria-hidden="true">
                      {item.icon}
                    </span>
                    <div className="flex-1">
                      <h3 className="text-xl font-bold text-pink-900 mb-2">
                        {item.title}
                      </h3>
                      <div className="w-12 h-0.5 bg-gold mb-4" />
                      <ul className="space-y-3">
                        {item.content.map((line, idx) => (
                          <li
                            key={idx}
                            className="text-gray-500 leading-relaxed flex gap-3"
                          >
                            <SparkleIcon className="w-3 h-3 text-gold mt-1.5 flex-shrink-0" />
                            <span>{line}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </motion.div>
              </FadeInUp>
            ))}
          </div>
        </div>
      </section>

      {/* ── CTA Section ── */}
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
              Healing Starts With One{" "}
              <span className="bg-gradient-to-r from-gold to-amber-300 bg-clip-text text-transparent">
                Honest Moment
              </span>
            </h2>
          </FadeInUp>

          <FadeInUp delay={0.2}>
            <p className="text-pink-100/80 text-lg max-w-xl mx-auto mb-10">
              You don&apos;t have to have it all together. You just have to be
              willing to stop pretending. Start with an episode. Start with a
              prayer. Start with telling one person the truth.
            </p>
          </FadeInUp>

          <FadeInUp delay={0.3}>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Link
                href="/episodes"
                className="bg-gold text-pink-900 px-8 py-4 rounded-full font-bold text-lg shadow-lg hover:shadow-xl transition-shadow"
              >
                Listen to Healing Episodes
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
              &ldquo;He heals the brokenhearted and binds up their
              wounds.&rdquo; &mdash; Psalm 147:3
            </p>
          </FadeInUp>
        </div>
      </section>

      <FooterSection />
    </ClientShell>
  );
}
