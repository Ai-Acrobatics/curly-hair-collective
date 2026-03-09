import Link from "next/link";

const episodes = [
  {
    id: 1,
    title: "Embracing Your Natural Texture",
    guest: "Nikki Walton",
    description:
      "The founder of CurlyNikki.com shares her journey from relaxed to natural and how self-acceptance changed everything.",
    date: "Coming Soon",
    duration: "45 min",
  },
  {
    id: 2,
    title: "Curl Care for Every Season",
    guest: "Dr. Kari Williams",
    description:
      "A trichologist breaks down how weather, humidity, and lifestyle affect your curls — plus her holy grail product picks.",
    date: "Coming Soon",
    duration: "38 min",
  },
  {
    id: 3,
    title: "Big Hair, Bigger Dreams",
    guest: "Manes by Mell",
    description:
      "From YouTube sensation to curl queen empire — how Mell built a brand by keeping it real about curly hair struggles.",
    date: "Coming Soon",
    duration: "52 min",
  },
  {
    id: 4,
    title: "The Politics of Natural Hair",
    guest: "Adjoa B. Asamoah",
    description:
      "The advocate behind the CROWN Act discusses hair discrimination, legislation, and why your curls are a civil rights issue.",
    date: "Coming Soon",
    duration: "41 min",
  },
  {
    id: 5,
    title: "Curly Hair in the Workplace",
    guest: "Candice Carty-Williams",
    description:
      "Bestselling author on navigating corporate spaces with natural hair and why representation matters at every level.",
    date: "Coming Soon",
    duration: "36 min",
  },
  {
    id: 6,
    title: "Raising Curly Kids with Confidence",
    guest: "Kia Stephens",
    description:
      "A mother and educator shares tips for teaching kids to love their curls from day one — wash day routines included.",
    date: "Coming Soon",
    duration: "44 min",
  },
];

function SparkleIcon({ className }: { className?: string }) {
  return (
    <svg
      className={className}
      viewBox="0 0 24 24"
      fill="currentColor"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path d="M12 0L14.59 8.41L23 11L14.59 13.59L12 22L9.41 13.59L1 11L9.41 8.41L12 0Z" />
    </svg>
  );
}

function CurlIcon({ className }: { className?: string }) {
  return (
    <svg
      className={className}
      viewBox="0 0 40 40"
      fill="none"
      stroke="currentColor"
      strokeWidth="2.5"
      strokeLinecap="round"
    >
      <path d="M8 8C12 8 14 12 14 16C14 20 10 22 8 20C6 18 8 14 12 14C16 14 18 18 18 22C18 26 14 28 12 26C10 24 12 20 16 20C20 20 22 24 22 28C22 32 18 34 16 32" />
    </svg>
  );
}

export default function Home() {
  return (
    <div className="min-h-screen bg-pink-50">
      {/* Navigation */}
      <nav className="fixed top-0 w-full z-50 bg-white/80 backdrop-blur-md border-b border-pink-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <div className="flex items-center gap-2">
              <CurlIcon className="w-8 h-8 text-pink-500" />
              <span className="text-xl font-bold text-pink-600">
                Curly Hair Collective
              </span>
            </div>
            <div className="hidden md:flex items-center gap-8">
              <Link
                href="#episodes"
                className="text-pink-700 hover:text-pink-500 transition-colors font-medium"
              >
                Episodes
              </Link>
              <Link
                href="#about"
                className="text-pink-700 hover:text-pink-500 transition-colors font-medium"
              >
                About
              </Link>
              <Link
                href="#community"
                className="text-pink-700 hover:text-pink-500 transition-colors font-medium"
              >
                Community
              </Link>
              <a
                href="#listen"
                className="gradient-pink text-white px-5 py-2 rounded-full font-semibold hover:opacity-90 transition-opacity shadow-lg shadow-pink-300/50"
              >
                Listen Now
              </a>
            </div>
            {/* Mobile menu button */}
            <div className="md:hidden">
              <a
                href="#listen"
                className="gradient-pink text-white px-4 py-2 rounded-full text-sm font-semibold"
              >
                Listen
              </a>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative gradient-hero min-h-screen flex items-center overflow-hidden">
        {/* Decorative elements */}
        <div className="absolute inset-0 overflow-hidden">
          <SparkleIcon className="absolute top-20 left-[10%] w-6 h-6 text-gold opacity-60 animate-pulse" />
          <SparkleIcon className="absolute top-40 right-[15%] w-8 h-8 text-gold opacity-40 animate-pulse" />
          <SparkleIcon className="absolute bottom-32 left-[25%] w-5 h-5 text-gold opacity-50 animate-pulse" />
          <SparkleIcon className="absolute top-[60%] right-[30%] w-7 h-7 text-gold opacity-30 animate-pulse" />
          <div className="absolute -bottom-20 -left-20 w-80 h-80 rounded-full bg-pink-400/20 blur-3xl" />
          <div className="absolute -top-20 -right-20 w-96 h-96 rounded-full bg-pink-300/20 blur-3xl" />
        </div>

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-24 pb-16">
          <div className="text-center">
            <div className="inline-flex items-center gap-2 bg-white/20 backdrop-blur-sm px-4 py-2 rounded-full mb-8 animate-fade-in-up">
              <SparkleIcon className="w-4 h-4 text-gold" />
              <span className="text-white/90 text-sm font-medium tracking-wide uppercase">
                New Podcast Launching Soon
              </span>
              <SparkleIcon className="w-4 h-4 text-gold" />
            </div>

            <h1 className="text-5xl sm:text-6xl md:text-8xl font-black text-white mb-6 tracking-tight animate-fade-in-up animate-delay-100">
              Curly Hair
              <br />
              <span className="text-gold drop-shadow-lg">Collective</span>
            </h1>

            <p className="text-lg sm:text-xl md:text-2xl text-white/90 max-w-2xl mx-auto mb-10 leading-relaxed animate-fade-in-up animate-delay-200">
              Celebrating curly hair culture through conversations, community,
              and confidence. Every curl has a story.
            </p>

            <div
              className="flex flex-col sm:flex-row items-center justify-center gap-4 animate-fade-in-up animate-delay-300"
              id="listen"
            >
              <a
                href="#episodes"
                className="bg-white text-pink-600 px-8 py-4 rounded-full font-bold text-lg hover:bg-pink-50 transition-colors shadow-xl shadow-pink-900/20 shimmer"
              >
                Browse Episodes
              </a>
              <a
                href="#community"
                className="border-2 border-white/50 text-white px-8 py-4 rounded-full font-bold text-lg hover:bg-white/10 transition-colors backdrop-blur-sm"
              >
                Join the Collective
              </a>
            </div>

            {/* Platform links */}
            <div className="mt-12 flex items-center justify-center gap-6 animate-fade-in-up animate-delay-400">
              <span className="text-white/60 text-sm">Coming soon to:</span>
              <div className="flex items-center gap-4">
                {["Spotify", "Apple Podcasts", "YouTube"].map((platform) => (
                  <span
                    key={platform}
                    className="text-white/80 text-sm font-medium bg-white/10 px-3 py-1 rounded-full backdrop-blur-sm"
                  >
                    {platform}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Wave divider */}
        <div className="absolute bottom-0 left-0 right-0">
          <svg
            viewBox="0 0 1440 120"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M0 60C240 120 480 0 720 60C960 120 1200 0 1440 60V120H0V60Z"
              fill="#FFF0F5"
            />
          </svg>
        </div>
      </section>

      {/* Episodes Section */}
      <section id="episodes" className="py-20 bg-pink-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <span className="text-pink-400 font-semibold uppercase tracking-widest text-sm">
              Listen & Learn
            </span>
            <h2 className="text-4xl md:text-5xl font-black text-pink-900 mt-3">
              Latest Episodes
            </h2>
            <p className="text-pink-600 mt-4 max-w-xl mx-auto text-lg">
              Real conversations with real curly queens. New episodes dropping
              soon.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {episodes.map((episode, index) => (
              <div
                key={episode.id}
                className="group bg-white rounded-2xl overflow-hidden shadow-lg shadow-pink-200/50 hover:shadow-xl hover:shadow-pink-300/50 transition-all duration-300 hover:-translate-y-1"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                {/* Episode art placeholder */}
                <div className="h-48 gradient-pink relative overflow-hidden">
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="text-center">
                      <span className="text-6xl font-black text-white/20">
                        {String(episode.id).padStart(2, "0")}
                      </span>
                    </div>
                  </div>
                  <div className="absolute bottom-3 left-3 flex items-center gap-2">
                    <span className="bg-white/20 backdrop-blur-sm text-white text-xs font-medium px-3 py-1 rounded-full">
                      {episode.duration}
                    </span>
                    <span className="bg-gold/80 text-pink-900 text-xs font-bold px-3 py-1 rounded-full">
                      {episode.date}
                    </span>
                  </div>
                  {/* Play button overlay */}
                  <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                    <div className="w-14 h-14 bg-white rounded-full flex items-center justify-center shadow-lg">
                      <svg
                        className="w-6 h-6 text-pink-500 ml-1"
                        fill="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path d="M8 5v14l11-7z" />
                      </svg>
                    </div>
                  </div>
                </div>

                <div className="p-6">
                  <p className="text-pink-400 text-sm font-semibold mb-1">
                    with {episode.guest}
                  </p>
                  <h3 className="text-xl font-bold text-pink-900 mb-2 group-hover:text-pink-600 transition-colors">
                    {episode.title}
                  </h3>
                  <p className="text-pink-700/70 text-sm leading-relaxed">
                    {episode.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            {/* Host image placeholder */}
            <div className="relative">
              <div className="w-full aspect-square max-w-md mx-auto rounded-3xl gradient-pink-soft overflow-hidden relative">
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="text-center p-8">
                    <CurlIcon className="w-24 h-24 text-pink-400 mx-auto mb-4" />
                    <p className="text-pink-500 font-medium text-lg">
                      Host Photo Coming Soon
                    </p>
                  </div>
                </div>
                {/* Decorative frame */}
                <div className="absolute -inset-2 border-2 border-pink-200 rounded-3xl -z-10" />
                <div className="absolute -inset-4 border border-pink-100 rounded-3xl -z-20" />
              </div>
              {/* Floating badge */}
              <div className="absolute -bottom-4 -right-4 lg:right-4 bg-gold text-pink-900 px-6 py-3 rounded-full font-bold shadow-lg">
                <SparkleIcon className="w-4 h-4 inline mr-2" />
                Curl Queen
              </div>
            </div>

            <div>
              <span className="text-pink-400 font-semibold uppercase tracking-widest text-sm">
                Meet Your Host
              </span>
              <h2 className="text-4xl md:text-5xl font-black text-pink-900 mt-3 mb-6">
                Every Curl
                <br />
                <span className="text-pink-500">Has a Story</span>
              </h2>
              <div className="space-y-4 text-pink-700/80 text-lg leading-relaxed">
                <p>
                  Welcome to Curly Hair Collective — the podcast where we
                  celebrate the beauty, science, and culture of textured hair.
                </p>
                <p>
                  From wash day routines to workplace politics, from curl
                  patterns to confidence journeys — we&apos;re here to have the
                  conversations that matter to every curly, coily, and wavy
                  queen.
                </p>
                <p>
                  Because your hair isn&apos;t just hair. It&apos;s identity.
                  It&apos;s heritage. It&apos;s a whole vibe.
                </p>
              </div>
              <div className="mt-8 flex flex-wrap gap-3">
                {[
                  "Curly Hair Tips",
                  "Natural Beauty",
                  "Self-Love",
                  "Culture",
                  "Community",
                ].map((tag) => (
                  <span
                    key={tag}
                    className="bg-pink-100 text-pink-600 px-4 py-2 rounded-full text-sm font-medium"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Community / Newsletter Section */}
      <section id="community" className="py-20 gradient-hero relative overflow-hidden">
        <div className="absolute inset-0">
          <SparkleIcon className="absolute top-10 left-[20%] w-6 h-6 text-gold opacity-40 animate-pulse" />
          <SparkleIcon className="absolute bottom-20 right-[15%] w-8 h-8 text-gold opacity-30 animate-pulse" />
        </div>

        <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <SparkleIcon className="w-10 h-10 text-gold mx-auto mb-6" />
          <h2 className="text-4xl md:text-5xl font-black text-white mb-4">
            Join the Collective
          </h2>
          <p className="text-white/80 text-lg md:text-xl max-w-2xl mx-auto mb-10">
            Get exclusive curl tips, episode drops, and community updates
            straight to your inbox. No spam — just good vibes and great hair
            days.
          </p>

          <div className="max-w-md mx-auto">
            <div className="flex flex-col sm:flex-row gap-3">
              <input
                type="email"
                placeholder="your@email.com"
                className="flex-1 px-6 py-4 rounded-full bg-white/20 backdrop-blur-sm border border-white/30 text-white placeholder:text-white/50 focus:outline-none focus:ring-2 focus:ring-gold focus:border-transparent text-center sm:text-left"
              />
              <button className="bg-gold text-pink-900 px-8 py-4 rounded-full font-bold hover:bg-gold-light transition-colors shadow-lg whitespace-nowrap">
                Subscribe
              </button>
            </div>
            <p className="text-white/50 text-sm mt-4">
              Join 0 curl lovers (and counting)
            </p>
          </div>

          {/* Social links */}
          <div className="mt-16">
            <p className="text-white/60 text-sm mb-4 uppercase tracking-widest">
              Follow the Collective
            </p>
            <div className="flex items-center justify-center gap-4">
              {[
                { name: "Instagram", href: "#" },
                { name: "TikTok", href: "#" },
                { name: "YouTube", href: "#" },
                { name: "Twitter", href: "#" },
              ].map((social) => (
                <a
                  key={social.name}
                  href={social.href}
                  className="bg-white/10 backdrop-blur-sm text-white px-5 py-2 rounded-full text-sm font-medium hover:bg-white/20 transition-colors border border-white/20"
                >
                  {social.name}
                </a>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-pink-900 text-white py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div>
              <div className="flex items-center gap-2 mb-4">
                <CurlIcon className="w-8 h-8 text-pink-300" />
                <span className="text-xl font-bold text-pink-200">
                  Curly Hair Collective
                </span>
              </div>
              <p className="text-pink-300/70 text-sm leading-relaxed">
                Celebrating curly hair culture through conversations, community,
                and confidence.
              </p>
            </div>

            <div>
              <h3 className="font-bold text-pink-200 mb-4">Listen On</h3>
              <ul className="space-y-2 text-pink-300/70 text-sm">
                <li>
                  <a href="#" className="hover:text-pink-200 transition-colors">
                    Spotify
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-pink-200 transition-colors">
                    Apple Podcasts
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-pink-200 transition-colors">
                    YouTube
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-pink-200 transition-colors">
                    Amazon Music
                  </a>
                </li>
              </ul>
            </div>

            <div>
              <h3 className="font-bold text-pink-200 mb-4">Connect</h3>
              <ul className="space-y-2 text-pink-300/70 text-sm">
                <li>
                  <a href="#" className="hover:text-pink-200 transition-colors">
                    Instagram
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-pink-200 transition-colors">
                    TikTok
                  </a>
                </li>
                <li>
                  <a
                    href="mailto:hello@curlyhaircollective.com"
                    className="hover:text-pink-200 transition-colors"
                  >
                    hello@curlyhaircollective.com
                  </a>
                </li>
              </ul>
            </div>
          </div>

          <div className="mt-12 pt-8 border-t border-pink-800 flex flex-col sm:flex-row items-center justify-between gap-4">
            <p className="text-pink-400/60 text-sm">
              &copy; {new Date().getFullYear()} Curly Hair Collective. All
              rights reserved.
            </p>
            <div className="flex items-center gap-1 text-pink-400/60 text-sm">
              Made with{" "}
              <span className="text-pink-400 mx-1">&hearts;</span> for every
              curl
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
