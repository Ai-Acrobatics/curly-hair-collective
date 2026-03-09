"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { FadeInUp } from "../components/FramerAnimations";
import Image from "next/image";

export function FooterSection() {
  return (
    <footer className="relative text-white py-16 overflow-hidden">
      {/* Dark pink gradient background */}
      <div
        className="absolute inset-0"
        style={{
          background:
            "linear-gradient(160deg, #6B1040 0%, #831843 25%, #9D174D 50%, #831843 75%, #5B0E36 100%)",
        }}
      />

      {/* Subtle mesh overlay for depth */}
      <div
        className="absolute inset-0 opacity-30"
        style={{
          background:
            "radial-gradient(ellipse at 20% 30%, rgba(212, 175, 55, 0.1) 0%, transparent 50%), radial-gradient(ellipse at 80% 70%, rgba(244, 114, 182, 0.15) 0%, transparent 50%)",
        }}
      />

      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[2px] bg-gradient-to-r from-transparent via-gold/30 to-transparent" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <FadeInUp>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-10">
            <div>
              <Link href="/" className="inline-block mb-4">
                <Image
                  src="/images/logo.png"
                  alt="Curlie Girlie Collective"
                  width={160}
                  height={36}
                  className="h-8 w-auto brightness-0 invert opacity-80"
                />
              </Link>
              <p className="text-pink-200/70 text-sm leading-relaxed italic">
                &ldquo;God wants to heal us to such a degree that multitudes are won.&rdquo;
              </p>
              <p className="text-pink-300/40 text-xs mt-3">
                Faith, hair, and becoming who God made you to be.
              </p>
            </div>

            <div>
              <h3 className="font-bold text-pink-100 mb-4 tracking-wide">
                Explore
              </h3>
              <ul className="space-y-2.5 text-pink-200/50 text-sm">
                {[
                  { label: "Episodes", href: "/episodes" },
                  { label: "Guests", href: "/guests" },
                  { label: "About", href: "/about" },
                  { label: "Blog", href: "/blog" },
                  { label: "FAQ", href: "/faq" },
                  { label: "Contact", href: "/contact" },
                ].map((link) => (
                  <li key={link.label}>
                    <motion.div whileHover={{ x: 4 }}>
                      <Link
                        href={link.href}
                        className="hover:text-white transition-colors inline-block"
                      >
                        {link.label}
                      </Link>
                    </motion.div>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h3 className="font-bold text-pink-100 mb-4 tracking-wide">
                Shop & Partner
              </h3>
              <ul className="space-y-2.5 text-pink-200/50 text-sm">
                {[
                  { label: "Merch Store", href: "/merch" },
                  { label: "Sponsors & Partners", href: "/sponsors" },
                ].map((link) => (
                  <li key={link.label}>
                    <motion.div whileHover={{ x: 4 }}>
                      <Link
                        href={link.href}
                        className="hover:text-white transition-colors inline-block"
                      >
                        {link.label}
                      </Link>
                    </motion.div>
                  </li>
                ))}
              </ul>
              <h3 className="font-bold text-pink-100 mb-4 mt-6 tracking-wide">
                Listen On
              </h3>
              <ul className="space-y-2.5 text-pink-200/50 text-sm">
                {["Spotify", "Apple Podcasts", "YouTube", "Amazon Music"].map(
                  (platform) => (
                    <li key={platform}>
                      <motion.a
                        href="#"
                        className="hover:text-white transition-colors inline-block"
                        whileHover={{ x: 4 }}
                      >
                        {platform}
                      </motion.a>
                    </li>
                  )
                )}
              </ul>
            </div>

            <div>
              <h3 className="font-bold text-pink-100 mb-4 tracking-wide">
                Connect
              </h3>
              <ul className="space-y-2.5 text-pink-200/50 text-sm">
                {[
                  { name: "Instagram", href: "https://instagram.com/curliegirlie" },
                  { name: "TikTok", href: "https://tiktok.com/@curliegirlie" },
                  { name: "YouTube", href: "https://youtube.com/@curliegirlie" },
                  { name: "Twitter", href: "https://twitter.com/curliegirlie" },
                  {
                    name: "hello@curliegirlie.com",
                    href: "mailto:hello@curliegirlie.com",
                  },
                ].map((link) => (
                  <li key={link.name}>
                    <motion.a
                      href={link.href}
                      className="hover:text-white transition-colors inline-block"
                      whileHover={{ x: 4 }}
                    >
                      {link.name}
                    </motion.a>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </FadeInUp>

        <div className="mt-14 pt-8 border-t border-pink-700/30 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-pink-300/40 text-sm">
            &copy; {new Date().getFullYear()} Curlie Girlie Collective. All rights
            reserved.
          </p>
          <div className="flex items-center gap-4 text-pink-300/40 text-sm">
            <Link href="/privacy" className="hover:text-pink-100 transition-colors">
              Privacy
            </Link>
            <Link href="/terms" className="hover:text-pink-100 transition-colors">
              Terms
            </Link>
            <motion.span
              className="flex items-center gap-1"
              whileHover={{ scale: 1.05 }}
            >
              Made with <span className="text-gold mx-1">&hearts;</span> for
              every curl
            </motion.span>
          </div>
        </div>
      </div>
    </footer>
  );
}
