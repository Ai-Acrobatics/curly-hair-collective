"use client";

import { motion } from "framer-motion";
import { FadeInUp } from "../components/FramerAnimations";
import { SparkleIcon } from "../components/Icons";

export function CommunitySection() {
  return (
    <section
      id="community"
      className="py-24 mesh-gradient relative overflow-hidden noise-overlay"
    >
      <div className="aurora" />

      {/* Floating sparkles */}
      <motion.div
        className="absolute top-10 left-[20%]"
        animate={{ y: [-10, 15, -10], rotate: [0, 360] }}
        transition={{ duration: 6, repeat: Infinity }}
      >
        <SparkleIcon className="w-6 h-6 text-gold opacity-40" />
      </motion.div>
      <motion.div
        className="absolute bottom-20 right-[15%]"
        animate={{ y: [10, -12, 10], rotate: [360, 0] }}
        transition={{ duration: 8, repeat: Infinity }}
      >
        <SparkleIcon className="w-8 h-8 text-gold opacity-30" />
      </motion.div>
      <motion.div
        className="absolute top-1/2 left-[5%]"
        animate={{ scale: [1, 1.5, 1], opacity: [0.2, 0.5, 0.2] }}
        transition={{ duration: 5, repeat: Infinity }}
      >
        <SparkleIcon className="w-4 h-4 text-white" />
      </motion.div>

      <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center z-10">
        <FadeInUp>
          <motion.div
            animate={{ rotate: [0, 360] }}
            transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
            className="inline-block mb-6"
          >
            <SparkleIcon className="w-10 h-10 text-gold" />
          </motion.div>
        </FadeInUp>

        <FadeInUp delay={0.1}>
          <h2
            className="text-4xl md:text-6xl font-black text-white mb-4"
            data-gsap="heading"
          >
            Join the Collective
          </h2>
        </FadeInUp>

        <FadeInUp delay={0.2}>
          <p className="text-white/75 text-lg md:text-xl max-w-2xl mx-auto mb-12">
            Get exclusive curl tips, episode drops, and community updates
            straight to your inbox. No spam — just good vibes and great hair
            days.
          </p>
        </FadeInUp>

        <FadeInUp delay={0.3}>
          <div className="max-w-md mx-auto">
            <motion.div
              className="flex flex-col sm:flex-row gap-3 glass rounded-full p-2"
              whileHover={{ scale: 1.02 }}
              transition={{ duration: 0.3 }}
            >
              <input
                type="email"
                placeholder="your@email.com"
                className="flex-1 px-6 py-3 rounded-full bg-transparent text-white placeholder:text-white/40 focus:outline-none text-center sm:text-left"
              />
              <motion.button
                className="bg-gold text-pink-900 px-8 py-3 rounded-full font-bold shadow-lg whitespace-nowrap"
                whileHover={{
                  scale: 1.05,
                  boxShadow: "0 0 30px rgba(255, 215, 0, 0.5)",
                }}
                whileTap={{ scale: 0.95 }}
              >
                Subscribe
              </motion.button>
            </motion.div>
            <p className="text-white/40 text-sm mt-4">
              Join the movement — be one of the first.
            </p>
          </div>
        </FadeInUp>

        {/* Social links */}
        <FadeInUp delay={0.4}>
          <div className="mt-16">
            <p className="text-white/50 text-sm mb-5 uppercase tracking-[0.2em]">
              Follow the Collective
            </p>
            <div className="flex items-center justify-center gap-4">
              {[
                { name: "Instagram", href: "https://instagram.com/curliegirlie" },
                { name: "TikTok", href: "https://tiktok.com/@curliegirlie" },
                { name: "YouTube", href: "https://youtube.com/@curliegirlie" },
                { name: "Twitter", href: "https://twitter.com/curliegirlie" },
              ].map(
                (social, i) => (
                  <motion.a
                    key={social.name}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="glass text-white px-5 py-2 rounded-full text-sm font-medium"
                    whileHover={{
                      scale: 1.1,
                      backgroundColor: "rgba(255,255,255,0.2)",
                    }}
                    whileTap={{ scale: 0.95 }}
                    initial={{ opacity: 0, y: 10 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.5 + i * 0.08 }}
                  >
                    {social.name}
                  </motion.a>
                )
              )}
            </div>
          </div>
        </FadeInUp>
      </div>
    </section>
  );
}
