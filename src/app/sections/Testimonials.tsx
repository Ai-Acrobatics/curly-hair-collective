"use client";

import { motion } from "framer-motion";
import { FadeInUp, StaggerContainer, StaggerItem } from "../components/FramerAnimations";
import { SparkleIcon } from "../components/Icons";

const testimonials = [
  {
    quote:
      "I started wearing a topper after losing my hair to alopecia, and I felt so ashamed. This podcast reminded me that God sees my heart, not my hairline. I finally feel at peace with where I am.",
    name: "Jasmine T.",
    role: "Topper Wearer & Woman of Faith",
    gradient: "from-pink-400 to-rose-500",
  },
  {
    quote:
      "I came to Christ at 34 and thought I was too late. Hearing Sabrina and Chanelle talk about their own journeys gave me the courage to walk into church for the first time. Now I never miss a Sunday.",
    name: "Aisha M.",
    role: "New Believer & Podcast Listener",
    gradient: "from-fuchsia-400 to-pink-500",
  },
  {
    quote:
      "I never connected my hair journey to my faith journey until this podcast. Learning to accept my hair loss was actually learning to trust God's plan. These two women get it.",
    name: "Sofia R.",
    role: "Wig Wearer & Faith Walker",
    gradient: "from-rose-400 to-pink-500",
  },
  {
    quote:
      "As someone in the alternative hair industry, I've been looking for content that speaks to my faith AND my profession. Sabrina and Chanelle bring both together so beautifully. Finally, a podcast for us.",
    name: "Destiny W.",
    role: "Hair Stylist & Believer",
    gradient: "from-pink-500 to-fuchsia-500",
  },
  {
    quote:
      "The way they talk about identity and beauty through a biblical lens is so refreshing. No judgment, just love. It reminded me that God made me exactly the way I'm supposed to be.",
    name: "Morgan K.",
    role: "Christian Woman & Encourager",
    gradient: "from-rose-500 to-pink-600",
  },
  {
    quote:
      "I've struggled with hair loss for years and felt like God forgot about me. This podcast helped me see that He was with me through it all. The encouragement from this community is unmatched.",
    name: "Priya N.",
    role: "Hair Loss Warrior & Prayer Warrior",
    gradient: "from-pink-400 to-rose-400",
  },
];

export function TestimonialsSection() {
  return (
    <section className="py-24 bg-white relative overflow-hidden">
      {/* Decorative blobs */}
      <div className="absolute top-0 right-0 w-96 h-96 rounded-full bg-pink-100/40 blur-[100px] -translate-y-1/2 translate-x-1/3" />
      <div className="absolute bottom-0 left-0 w-80 h-80 rounded-full bg-gold/10 blur-[80px] translate-y-1/3 -translate-x-1/4" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <FadeInUp className="text-center mb-16">
          <span className="text-pink-400 font-semibold uppercase tracking-[0.25em] text-sm">
            Love Letters
          </span>
          <h2 className="text-4xl md:text-6xl font-black text-pink-900 mt-3">
            From the Collective
          </h2>
          <p className="text-pink-600/80 mt-5 max-w-xl mx-auto text-lg">
            Real words from real women walking in faith, beauty, and becoming.
          </p>
        </FadeInUp>

        <StaggerContainer
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
          staggerDelay={0.1}
        >
          {testimonials.map((t) => (
            <StaggerItem key={t.name}>
              <motion.div
                className="relative p-7 rounded-3xl bg-gradient-to-br from-pink-50 to-white border border-pink-100 shadow-sm group h-full flex flex-col"
                whileHover={{
                  y: -4,
                  boxShadow: "0 20px 40px rgba(224, 33, 138, 0.1)",
                }}
                transition={{ duration: 0.3 }}
              >
                {/* Quote mark */}
                <div className="absolute -top-4 -left-2 text-6xl text-pink-200 select-none leading-none">
                  &ldquo;
                </div>

                {/* Stars */}
                <div className="flex gap-0.5 mb-3 relative z-10">
                  {[1, 2, 3, 4, 5].map((star) => (
                    <SparkleIcon
                      key={star}
                      className="w-3.5 h-3.5 text-gold"
                    />
                  ))}
                </div>

                <p className="text-pink-800/75 text-sm leading-relaxed mb-5 relative z-10 flex-1">
                  &ldquo;{t.quote}&rdquo;
                </p>

                <div className="flex items-center gap-3">
                  <div
                    className={`w-10 h-10 rounded-full bg-gradient-to-br ${t.gradient} flex items-center justify-center text-white font-bold text-sm`}
                  >
                    {t.name.charAt(0)}
                  </div>
                  <div>
                    <p className="font-bold text-pink-900 text-sm">{t.name}</p>
                    <p className="text-pink-500/60 text-xs">{t.role}</p>
                  </div>
                </div>

                {/* Hover sparkle */}
                <motion.div
                  className="absolute top-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity"
                  animate={{ rotate: 360 }}
                  transition={{ duration: 8, repeat: Infinity, ease: "linear" }}
                >
                  <SparkleIcon className="w-5 h-5 text-gold/40" />
                </motion.div>
              </motion.div>
            </StaggerItem>
          ))}
        </StaggerContainer>
      </div>
    </section>
  );
}
