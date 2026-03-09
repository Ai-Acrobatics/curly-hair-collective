"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { FadeInUp } from "../components/FramerAnimations";
import { CurlIcon } from "../components/Icons";

export function FooterSection() {
  return (
    <footer className="bg-pink-900 text-white py-16 relative overflow-hidden">
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[2px] bg-gradient-to-r from-transparent via-pink-400/50 to-transparent" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <FadeInUp>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-10">
            <div>
              <Link href="/" className="flex items-center gap-2 mb-4">
                <CurlIcon className="w-8 h-8 text-pink-300" />
                <span className="text-xl font-bold text-pink-200">
                  Curly Hair Collective
                </span>
              </Link>
              <p className="text-pink-300/60 text-sm leading-relaxed">
                Celebrating curly hair culture through conversations, community,
                and confidence.
              </p>
            </div>

            <div>
              <h3 className="font-bold text-pink-200 mb-4 tracking-wide">
                Explore
              </h3>
              <ul className="space-y-2.5 text-pink-300/60 text-sm">
                {[
                  { label: "Episodes", href: "/episodes" },
                  { label: "About", href: "/about" },
                  { label: "Blog", href: "/blog" },
                  { label: "FAQ", href: "/faq" },
                  { label: "Contact", href: "/contact" },
                ].map((link) => (
                  <li key={link.label}>
                    <motion.div whileHover={{ x: 4 }}>
                      <Link
                        href={link.href}
                        className="hover:text-pink-200 transition-colors inline-block"
                      >
                        {link.label}
                      </Link>
                    </motion.div>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h3 className="font-bold text-pink-200 mb-4 tracking-wide">
                Shop & Partner
              </h3>
              <ul className="space-y-2.5 text-pink-300/60 text-sm">
                {[
                  { label: "Merch Store", href: "/merch" },
                  { label: "Sponsors & Partners", href: "/sponsors" },
                ].map((link) => (
                  <li key={link.label}>
                    <motion.div whileHover={{ x: 4 }}>
                      <Link
                        href={link.href}
                        className="hover:text-pink-200 transition-colors inline-block"
                      >
                        {link.label}
                      </Link>
                    </motion.div>
                  </li>
                ))}
              </ul>
              <h3 className="font-bold text-pink-200 mb-4 mt-6 tracking-wide">
                Listen On
              </h3>
              <ul className="space-y-2.5 text-pink-300/60 text-sm">
                {["Spotify", "Apple Podcasts", "YouTube", "Amazon Music"].map(
                  (platform) => (
                    <li key={platform}>
                      <motion.a
                        href="#"
                        className="hover:text-pink-200 transition-colors inline-block"
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
              <h3 className="font-bold text-pink-200 mb-4 tracking-wide">
                Connect
              </h3>
              <ul className="space-y-2.5 text-pink-300/60 text-sm">
                {[
                  { name: "Instagram", href: "#" },
                  { name: "TikTok", href: "#" },
                  { name: "YouTube", href: "#" },
                  { name: "Twitter", href: "#" },
                  {
                    name: "hello@curlyhaircollective.com",
                    href: "mailto:hello@curlyhaircollective.com",
                  },
                ].map((link) => (
                  <li key={link.name}>
                    <motion.a
                      href={link.href}
                      className="hover:text-pink-200 transition-colors inline-block"
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

        <div className="mt-14 pt-8 border-t border-pink-800/50 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-pink-400/50 text-sm">
            &copy; {new Date().getFullYear()} Curly Hair Collective. All rights
            reserved.
          </p>
          <div className="flex items-center gap-4 text-pink-400/50 text-sm">
            <Link href="/privacy" className="hover:text-pink-300 transition-colors">
              Privacy
            </Link>
            <Link href="/terms" className="hover:text-pink-300 transition-colors">
              Terms
            </Link>
            <motion.span
              className="flex items-center gap-1"
              whileHover={{ scale: 1.05 }}
            >
              Made with <span className="text-pink-400 mx-1">&hearts;</span> for
              every curl
            </motion.span>
          </div>
        </div>
      </div>
    </footer>
  );
}
