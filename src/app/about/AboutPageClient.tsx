"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { ClientShell } from "../components/ClientShell";
import { PageHeader } from "../components/PageHeader";
import { FooterSection } from "../sections/Footer";
import { FadeInUp, ScaleOnScroll } from "../components/FramerAnimations";
import { SparkleIcon } from "../components/Icons";

const values = [
  {
    title: "Authenticity",
    description:
      "We keep it real. No filters, no gatekeeping — just honest conversations about the curly hair experience.",
    icon: "heart",
  },
  {
    title: "Community",
    description:
      "Every curl type is welcome here. We're building a space where curly, coily, and wavy queens uplift each other.",
    icon: "people",
  },
  {
    title: "Education",
    description:
      "Knowledge is power. We bring in experts, scientists, and stylists to help you understand and love your hair.",
    icon: "book",
  },
  {
    title: "Empowerment",
    description:
      "Your curls are your crown. We're here to celebrate natural beauty and fight for the right to wear your hair proudly.",
    icon: "crown",
  },
];

const timeline = [
  {
    year: "2024",
    title: "The Idea",
    description:
      "Born from a frustration with one-size-fits-all hair advice and a desire to create space for real curl talk.",
  },
  {
    year: "2025",
    title: "Building the Collective",
    description:
      "Assembling an incredible lineup of guests, building our community platform, and designing the brand identity.",
  },
  {
    year: "2026",
    title: "Launch",
    description:
      "The Curlie Girlie Collective podcast launches with our first season of episodes, merch, and community events.",
  },
];

export function AboutPageClient() {
  return (
    <ClientShell>
      <PageHeader
        badge="Our Story"
        title="Every Curl"
        titleAccent="Has a Story"
        subtitle="Including ours. Learn about the mission, the team, and the movement behind Curlie Girlie Collective."
      />

      <section className="py-20 bg-pink-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Mission */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center mb-24">
            <ScaleOnScroll>
              <div className="w-full aspect-[3/4] max-w-lg mx-auto rounded-3xl overflow-hidden relative gradient-border shadow-2xl shadow-pink-300/30">
                <Image
                  src="/hosts/img_0815.jpg"
                  alt="Sabrina Anderson and Chanelle — hosts of Curlie Girlie Collective"
                  fill
                  className="object-cover object-top"
                  sizes="(max-width: 1024px) 100vw, 50vw"
                  priority
                />
                <div className="absolute inset-0 bg-gradient-to-t from-pink-900/50 via-transparent to-transparent" />
                <div className="absolute bottom-6 left-6">
                  <p className="text-white font-black text-xl">Sabrina & Chanelle</p>
                  <p className="text-white/80 text-sm">Jon Renau Educators · San Diego, CA</p>
                </div>
              </div>
            </ScaleOnScroll>

            <div>
              <FadeInUp>
                <span className="text-pink-400 font-semibold uppercase tracking-[0.25em] text-sm">
                  The Mission
                </span>
                <h2 className="text-3xl md:text-5xl font-black text-pink-900 mt-3 mb-6">
                  More Than a <span className="text-gradient-pink">Podcast</span>
                </h2>
              </FadeInUp>
              <FadeInUp delay={0.1}>
                <div className="space-y-4 text-pink-700/75 text-lg leading-relaxed">
                  <p>
                    Curlie Girlie Collective started with two women who found God
                    later in life — and couldn&apos;t stop talking about it.
                    Sabrina and Chanelle work together at Jon Renau as
                    alternative hair educators, helping women experiencing hair
                    loss feel beautiful and confident again.
                  </p>
                  <p>
                    But this podcast is about more than hair. It&apos;s about
                    faith, identity, and becoming who you&apos;re meant to be.
                    It&apos;s raw conversations about following Jesus — no matter
                    where you&apos;re starting from.
                  </p>
                  <p>
                    Our mission is simple: anybody can come to the Lord, no
                    matter where you&apos;re at in your walk. We&apos;re here to
                    encourage, uplift, and build a ministry through authentic
                    conversation.
                  </p>
                </div>
              </FadeInUp>
            </div>
          </div>

          {/* Values */}
          <FadeInUp>
            <div className="text-center mb-12">
              <span className="text-pink-400 font-semibold uppercase tracking-[0.25em] text-sm">
                What We Stand For
              </span>
              <h2 className="text-3xl md:text-5xl font-black text-pink-900 mt-3">
                Our Values
              </h2>
            </div>
          </FadeInUp>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-24">
            {values.map((value, i) => (
              <FadeInUp key={value.title} delay={i * 0.1}>
                <div className="bg-white rounded-2xl p-8 shadow-lg shadow-pink-200/30 magnetic-card h-full">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="w-10 h-10 gradient-pink rounded-full flex items-center justify-center">
                      <SparkleIcon className="w-5 h-5 text-white" />
                    </div>
                    <h3 className="text-xl font-bold text-pink-900">
                      {value.title}
                    </h3>
                  </div>
                  <p className="text-pink-700/65 leading-relaxed">
                    {value.description}
                  </p>
                </div>
              </FadeInUp>
            ))}
          </div>

          {/* Timeline */}
          <FadeInUp>
            <div className="text-center mb-12">
              <span className="text-pink-400 font-semibold uppercase tracking-[0.25em] text-sm">
                The Journey
              </span>
              <h2 className="text-3xl md:text-5xl font-black text-pink-900 mt-3">
                Our Timeline
              </h2>
            </div>
          </FadeInUp>

          <div className="max-w-2xl mx-auto">
            {timeline.map((item, i) => (
              <FadeInUp key={item.year} delay={i * 0.15}>
                <div className="flex gap-6 mb-10 last:mb-0">
                  <div className="flex flex-col items-center">
                    <div className="w-12 h-12 gradient-pink rounded-full flex items-center justify-center text-white font-bold text-sm shadow-lg">
                      {item.year}
                    </div>
                    {i < timeline.length - 1 && (
                      <div className="w-0.5 flex-1 bg-pink-200 mt-2" />
                    )}
                  </div>
                  <div className="pb-8">
                    <h3 className="text-xl font-bold text-pink-900 mb-2">
                      {item.title}
                    </h3>
                    <p className="text-pink-700/65 leading-relaxed">
                      {item.description}
                    </p>
                  </div>
                </div>
              </FadeInUp>
            ))}
          </div>
        </div>
      </section>

      <FooterSection />
    </ClientShell>
  );
}
