"use client";

import { useState } from "react";
import { FadeInUp } from "../components/FramerAnimations";
import { SparkleIcon } from "../components/Icons";

const testimonials = [
  {
    id: 1,
    quote:
      "I started wearing a topper after losing my hair to alopecia, and I felt so ashamed. This podcast reminded me that God sees my heart, not my hairline. I finally feel at peace with where I am.",
    name: "Jasmine T.",
    role: "Topper Wearer & Woman of Faith",
    blurColor: "bg-pink-400",
  },
  {
    id: 2,
    quote:
      "I came to Christ at 34 and thought I was too late. Hearing Sabrina and Chanelle talk about their own journeys gave me the courage to walk into church for the first time. Now I never miss a Sunday.",
    name: "Aisha M.",
    role: "New Believer & Podcast Listener",
    blurColor: "bg-fuchsia-400",
  },
  {
    id: 3,
    quote:
      "I never connected my hair journey to my faith journey until this podcast. Learning to accept my hair loss was actually learning to trust God's plan. These two women get it.",
    name: "Sofia R.",
    role: "Wig Wearer & Faith Walker",
    blurColor: "bg-rose-400",
  },
  {
    id: 4,
    quote:
      "As someone in the alternative hair industry, I've been looking for content that speaks to my faith AND my profession. Sabrina and Chanelle bring both together so beautifully. Finally, a podcast for us.",
    name: "Destiny W.",
    role: "Hair Stylist & Believer",
    blurColor: "bg-pink-500",
  },
  {
    id: 5,
    quote:
      "The way they talk about identity and beauty through a biblical lens is so refreshing. No judgment, just love. It reminded me that God made me exactly the way I'm supposed to be.",
    name: "Morgan K.",
    role: "Christian Woman & Encourager",
    blurColor: "bg-rose-500",
  },
  {
    id: 6,
    quote:
      "I've struggled with hair loss for years and felt like God forgot about me. This podcast helped me see that He was with me through it all. The encouragement from this community is unmatched.",
    name: "Priya N.",
    role: "Hair Loss Warrior & Prayer Warrior",
    blurColor: "bg-pink-300",
  },
  {
    id: 7,
    quote:
      "My daughter started losing her hair at 12. Listening to this podcast together has given us both strength and faith. We cry, we laugh, and we grow closer to God every episode.",
    name: "Tamika L.",
    role: "Mom & Faith-Forward Listener",
    blurColor: "bg-fuchsia-300",
  },
];

export function TestimonialsSection() {
  const [isPaused, setIsPaused] = useState(false);

  const duplicatedTestimonials = [...testimonials, ...testimonials];
  const duplicatedReverse = [...testimonials.slice().reverse(), ...testimonials.slice().reverse()];
  const mobileTestimonials = testimonials.slice(0, 6);

  return (
    <section className="py-24 md:py-32 bg-white relative overflow-hidden pb-0">
      {/* Bottom gradient fade */}
      <div className="absolute bottom-0 left-0 right-0 h-64 bg-gradient-to-t from-white via-white/80 to-transparent pointer-events-none z-20 hidden lg:block" />

      {/* Desktop: Double-row auto-scrolling carousel */}
      <div className="hidden lg:block pl-6 md:pl-12">
        <div className="mb-12 md:mb-16 max-w-[1280px]">
          <FadeInUp>
            <span className="inline-flex items-center gap-2 bg-pink-50 text-pink-500 font-semibold uppercase tracking-[0.2em] text-xs px-5 py-2 rounded-full border border-pink-100 font-body mb-6">
              <SparkleIcon className="w-3 h-3 text-gold" />
              Love Letters
            </span>
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-black text-pink-900 tracking-tight mt-4">
              What the Collective is saying
            </h2>
          </FadeInUp>
        </div>

        {/* Row 1 — scrolls left */}
        <div className="relative mb-6">
          <div
            className="flex gap-6 animate-scroll-left"
            onMouseEnter={() => setIsPaused(true)}
            onMouseLeave={() => setIsPaused(false)}
            style={{ animationPlayState: isPaused ? "paused" : "running" }}
          >
            {duplicatedTestimonials.map((t, index) => (
              <article
                key={`${t.id}-${index}`}
                className="relative flex-shrink-0 w-[400px] p-6 md:p-8 border border-pink-100 bg-white hover:shadow-lg transition-shadow overflow-hidden rounded-3xl"
              >
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-10 h-10 rounded-full bg-gradient-to-br from-pink-300 to-pink-500 flex items-center justify-center text-white font-bold text-sm">
                    {t.name.charAt(0)}
                  </div>
                  <div>
                    <div className="font-bold text-pink-900 text-sm">{t.name}</div>
                    <div className="text-xs text-pink-500/60">{t.role}</div>
                  </div>
                </div>
                <blockquote className="text-sm leading-relaxed font-medium text-pink-900/80 relative z-10">
                  &ldquo;{t.quote}&rdquo;
                </blockquote>
                <div className="flex gap-0.5 mt-4">
                  {[1, 2, 3, 4, 5].map((star) => (
                    <SparkleIcon key={star} className="w-3 h-3 text-gold" />
                  ))}
                </div>
                <div
                  className={`absolute -bottom-12 -right-12 w-48 h-48 ${t.blurColor} rounded-full opacity-[0.06]`}
                  style={{ filter: "blur(72px)" }}
                />
              </article>
            ))}
          </div>
        </div>

        {/* Row 2 — scrolls right */}
        <div className="relative">
          <div
            className="flex gap-6 animate-scroll-right"
            onMouseEnter={() => setIsPaused(true)}
            onMouseLeave={() => setIsPaused(false)}
            style={{ animationPlayState: isPaused ? "paused" : "running" }}
          >
            {duplicatedReverse.map((t, index) => (
              <article
                key={`reverse-${t.id}-${index}`}
                className="relative flex-shrink-0 w-[400px] p-6 md:p-8 border border-pink-100 bg-white hover:shadow-lg transition-shadow overflow-hidden rounded-3xl"
              >
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-10 h-10 rounded-full bg-gradient-to-br from-rose-300 to-fuchsia-500 flex items-center justify-center text-white font-bold text-sm">
                    {t.name.charAt(0)}
                  </div>
                  <div>
                    <div className="font-bold text-pink-900 text-sm">{t.name}</div>
                    <div className="text-xs text-pink-500/60">{t.role}</div>
                  </div>
                </div>
                <blockquote className="text-sm leading-relaxed font-medium text-pink-900/80 relative z-10">
                  &ldquo;{t.quote}&rdquo;
                </blockquote>
                <div className="flex gap-0.5 mt-4">
                  {[1, 2, 3, 4, 5].map((star) => (
                    <SparkleIcon key={star} className="w-3 h-3 text-gold" />
                  ))}
                </div>
                <div
                  className={`absolute -bottom-12 -right-12 w-48 h-48 ${t.blurColor} rounded-full opacity-[0.06]`}
                  style={{ filter: "blur(72px)" }}
                />
              </article>
            ))}
          </div>
        </div>
      </div>

      {/* Mobile: Stacked sticky cards */}
      <div className="lg:hidden max-w-[1280px] mx-auto px-6 md:px-12">
        <div className="mb-12">
          <FadeInUp>
            <span className="inline-flex items-center gap-2 bg-pink-50 text-pink-500 font-semibold uppercase tracking-[0.2em] text-xs px-5 py-2 rounded-full border border-pink-100 font-body mb-4">
              <SparkleIcon className="w-3 h-3 text-gold" />
              Love Letters
            </span>
            <h2 className="text-3xl md:text-4xl font-black text-pink-900 tracking-tight mt-4">
              What the Collective is saying
            </h2>
          </FadeInUp>
        </div>

        <div className="relative">
          {mobileTestimonials.map((t, index) => (
            <div
              key={t.id}
              className="sticky pt-6"
              style={{ top: `${70 + index * 0}px`, zIndex: index + 1 }}
            >
              <article className="relative p-6 border border-pink-100 bg-white overflow-hidden rounded-3xl shadow-sm">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-10 h-10 rounded-full bg-gradient-to-br from-pink-300 to-pink-500 flex items-center justify-center text-white font-bold text-sm">
                    {t.name.charAt(0)}
                  </div>
                  <div>
                    <div className="font-bold text-pink-900 text-sm">{t.name}</div>
                    <div className="text-xs text-pink-500/60">{t.role}</div>
                  </div>
                </div>
                <blockquote className="text-sm leading-relaxed font-medium text-pink-900/80 relative z-10">
                  &ldquo;{t.quote}&rdquo;
                </blockquote>
                <div
                  className={`absolute -bottom-12 -right-12 w-48 h-48 ${t.blurColor} rounded-full opacity-[0.06]`}
                  style={{ filter: "blur(72px)" }}
                />
              </article>
            </div>
          ))}
        </div>
      </div>

      {/* Mobile bottom gradient fade */}
      <div className="absolute bottom-0 left-0 right-0 h-40 bg-gradient-to-t from-white via-white/90 to-transparent pointer-events-none z-10 lg:hidden" />
    </section>
  );
}
