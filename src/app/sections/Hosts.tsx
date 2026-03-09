"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { FadeInUp, ScaleOnScroll } from "../components/FramerAnimations";
import { SparkleIcon } from "../components/Icons";

const hosts = [
  {
    name: "Sabrina Anderson",
    handle: "@fabsabstyle",
    role: "Educator @jonrenau · Curly Girl · San Diego, CA",
    bio: "JESUS, then everything else. Sabrina specializes in wigs, toppers, and hair replacement systems at Jon Renau — helping women experiencing hair loss feel beautiful and confident again. She came to the Lord later in life and hasn't looked back since.",
    badge: "Hair Expert",
    image: "/hosts/img_0811.jpg",
    cartoon: "/images/sabrina-cartoon.png",
    gradient: "from-pink-400 via-pink-500 to-rose-500",
  },
  {
    name: "Chanelle",
    handle: "@createdbychanelle",
    role: "On-Set Hairstylist · Licensed Cosmetologist · Alt. Hair Educator @jonrenau",
    bio: "God's Girl & Powered by Prayer. Chanelle is creating with purpose — as a licensed cosmetologist and alternative hair educator at Jon Renau, she brings expertise, heart, and a passion for helping women embrace who God made them to be.",
    badge: "Faith Walker",
    image: "/hosts/img_0814.jpg",
    cartoon: "/images/chanelle-cartoon.png",
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

        {/* Duo photo */}
        <FadeInUp className="mb-16">
          <div className="relative max-w-3xl mx-auto rounded-3xl overflow-hidden shadow-2xl shadow-pink-300/30">
            <Image
              src="/hosts/img_0815.jpg"
              alt="Sabrina Anderson and Chanelle — hosts of Curly Hair Collective"
              width={1200}
              height={800}
              className="w-full h-auto object-cover"
              priority
            />
            <div className="absolute inset-0 bg-gradient-to-t from-pink-900/60 via-transparent to-transparent" />
            <div className="absolute bottom-6 left-6 right-6 flex items-end justify-between">
              <div>
                <p className="text-white font-black text-2xl md:text-3xl">
                  Sabrina & Chanelle
                </p>
                <p className="text-white/80 text-sm font-body mt-1">
                  Your hosts. Your girls. Your collective.
                </p>
              </div>
              <span className="glass text-white text-xs font-bold px-4 py-1.5 rounded-full font-body hidden sm:block">
                <SparkleIcon className="w-3 h-3 inline mr-1" />
                Jon Renau Educators
              </span>
            </div>
          </div>
        </FadeInUp>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 mb-16">
          {hosts.map((host) => (
            <ScaleOnScroll key={host.name}>
              <motion.div
                className="relative rounded-3xl overflow-hidden gradient-border"
                whileHover={{ y: -4 }}
                transition={{ duration: 0.3 }}
              >
                <div className="bg-white p-8 lg:p-10 rounded-3xl">
                  {/* Host image */}
                  <div className="w-full h-80 rounded-2xl mb-6 relative overflow-hidden">
                    <Image
                      src={host.image}
                      alt={host.name}
                      fill
                      className="object-cover object-top"
                      sizes="(max-width: 1024px) 100vw, 50vw"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-pink-900/40 via-transparent to-transparent" />
                    <div className="absolute bottom-4 left-4">
                      <span className="glass text-white text-xs font-bold px-4 py-1.5 rounded-full font-body">
                        {host.handle}
                      </span>
                    </div>
                    {/* Cartoon avatar */}
                    <motion.div
                      className="absolute -bottom-2 -right-2 w-24 h-24 rounded-full overflow-hidden border-4 border-white shadow-lg"
                      whileHover={{ scale: 1.15, rotate: 5 }}
                      transition={{ type: "spring", stiffness: 300 }}
                    >
                      <Image
                        src={host.cartoon}
                        alt={`${host.name} cartoon`}
                        fill
                        className="object-cover object-top"
                      />
                    </motion.div>
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
