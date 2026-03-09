"use client";

import { motion } from "framer-motion";
import { FadeInUp, ScaleOnScroll } from "../components/FramerAnimations";
import { SparkleIcon, CurlIcon } from "../components/Icons";

const hosts = [
  {
    name: "Sabrina",
    role: "Alternative Hair Educator",
    bio: "Works at John Renau specializing in wigs, toppers, and hair replacement systems for those experiencing hair loss. Came to faith later in life and never looked back.",
    badge: "Hair Expert",
    gradient: "from-pink-400 via-pink-500 to-rose-500",
  },
  {
    name: "Co-Host",
    role: "Faith & Encouragement",
    bio: "Two women. One mission. Both found God when they least expected it. Together they bring raw honesty, laughter, and the kind of encouragement that changes lives.",
    badge: "Faith Walker",
    gradient: "from-fuchsia-400 via-pink-500 to-pink-600",
  },
];

export function HostsSection() {
  return (
    <section id="about" className="py-24 bg-white relative overflow-hidden">
      {/* Subtle dot pattern */}
      <div
        className="absolute inset-0 opacity-[0.015]"
        style={{
          backgroundImage: `radial-gradient(circle, #E0218A 1px, transparent 1px)`,
          backgroundSize: "30px 30px",
        }}
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <FadeInUp className="text-center mb-16">
          <span className="text-pink-400 font-semibold uppercase tracking-[0.25em] text-sm font-body">
            Meet Your Hosts
          </span>
          <h2 className="text-4xl md:text-6xl font-black text-pink-900 mt-3">
            Two Women. One Mission.
          </h2>
          <p className="text-pink-600/70 mt-4 max-w-2xl mx-auto text-lg font-body">
            We came to the Lord later in life, and now we can&apos;t stop talking about
            it. Join us for real conversations about faith, hair, and becoming
            who you&apos;re meant to be.
          </p>
        </FadeInUp>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 mb-16">
          {hosts.map((host, i) => (
            <ScaleOnScroll key={host.name}>
              <motion.div
                className="relative rounded-3xl overflow-hidden gradient-border"
                whileHover={{ y: -4 }}
                transition={{ duration: 0.3 }}
              >
                <div className="bg-white p-8 lg:p-10 rounded-3xl">
                  {/* Host image placeholder */}
                  <div
                    className={`w-full h-64 rounded-2xl bg-gradient-to-br ${host.gradient} mb-6 relative overflow-hidden`}
                  >
                    <div className="absolute inset-0 flex items-center justify-center">
                      <motion.div
                        animate={{ rotate: [0, 5, -5, 0] }}
                        transition={{ duration: 6, repeat: Infinity }}
                      >
                        <CurlIcon className="w-20 h-20 text-white/20" />
                      </motion.div>
                    </div>
                    <div className="absolute bottom-4 left-4">
                      <span className="glass text-white text-xs font-bold px-4 py-1.5 rounded-full font-body">
                        Photo Coming Soon
                      </span>
                    </div>
                  </div>

                  <div className="flex items-center gap-3 mb-4">
                    <h3 className="text-2xl font-black text-pink-900">
                      {host.name}
                    </h3>
                    <span className="bg-gold/20 text-gold px-3 py-1 rounded-full text-xs font-bold glow-gold font-body">
                      <SparkleIcon className="w-3 h-3 inline mr-1" />
                      {host.badge}
                    </span>
                  </div>

                  <p className="text-pink-500 font-semibold text-sm mb-3 font-body">
                    {host.role}
                  </p>
                  <p className="text-pink-700/65 leading-relaxed font-body">
                    {host.bio}
                  </p>
                </div>
              </motion.div>
            </ScaleOnScroll>
          ))}
        </div>

        {/* Mission statement */}
        <FadeInUp>
          <div className="text-center max-w-3xl mx-auto">
            <blockquote className="text-2xl md:text-3xl font-black text-pink-900 italic leading-relaxed">
              &ldquo;Anybody can come to the Lord, no matter where you&apos;re at in
              your walk.&rdquo;
            </blockquote>
            <div className="mt-6 flex items-center justify-center gap-2">
              <div className="h-px w-12 bg-pink-300" />
              <SparkleIcon className="w-4 h-4 text-gold" />
              <div className="h-px w-12 bg-pink-300" />
            </div>
            <p className="mt-4 text-pink-500/70 font-body">
              The heart of everything we do
            </p>
          </div>
        </FadeInUp>
      </div>
    </section>
  );
}
