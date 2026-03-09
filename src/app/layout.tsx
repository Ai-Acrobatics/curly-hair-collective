import type { Metadata } from "next";
import { Playfair_Display, Inter, DM_Sans } from "next/font/google";
import "./globals.css";
import { CartProvider } from "./context/CartContext";

const playfair = Playfair_Display({
  variable: "--font-playfair",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800", "900"],
});

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

const dmSans = DM_Sans({
  variable: "--font-dm-sans",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://curliegirliecollective.com"),
  title: {
    default: "Curlie Girlie Collective | Podcast & Community",
    template: "%s | Curlie Girlie Collective",
  },
  description:
    "Celebrating curly hair culture through conversations, community, and confidence. A podcast for every curl, coil, and wave — featuring expert guests, hair care tips, and the stories that make us who we are.",
  keywords: [
    "curly hair podcast",
    "natural hair community",
    "curly hair tips",
    "coily hair",
    "wavy hair",
    "textured hair",
    "curl care",
    "natural beauty",
    "CROWN Act",
    "wash day routine",
    "curly hair products",
    "hair discrimination",
    "curl confidence",
  ],
  authors: [{ name: "Curlie Girlie Collective" }],
  creator: "Curlie Girlie Collective",
  publisher: "Curlie Girlie Collective",
  openGraph: {
    title: "Curlie Girlie Collective | Podcast & Community",
    description:
      "Celebrating curly hair culture through conversations, community, and confidence. Every curl has a story.",
    type: "website",
    locale: "en_US",
    url: "https://curliegirliecollective.com",
    siteName: "Curlie Girlie Collective",
    images: [
      {
        url: "/images/og-share.png",
        width: 1200,
        height: 630,
        alt: "Curlie Girlie Collective — Faith, Hair & Community Podcast",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Curlie Girlie Collective | Podcast & Community",
    description:
      "Celebrating curly hair culture through conversations, community, and confidence.",
    creator: "@curliegirlie",
    images: ["/images/og-share.png"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  alternates: {
    canonical: "https://curliegirliecollective.com",
  },
};

const organizationJsonLd = {
  "@context": "https://schema.org",
  "@type": "Organization",
  name: "Curlie Girlie Collective",
  url: "https://curliegirliecollective.com",
  description:
    "A podcast and community celebrating curly hair culture through conversations, community, and confidence.",
  sameAs: [
    "https://instagram.com/curliegirlie",
    "https://tiktok.com/@curliegirlie",
    "https://youtube.com/@curliegirlie",
    "https://twitter.com/curliegirlie",
  ],
  contactPoint: {
    "@type": "ContactPoint",
    email: "hello@curliegirliecollective.com",
    contactType: "customer service",
  },
};

const podcastJsonLd = {
  "@context": "https://schema.org",
  "@type": "PodcastSeries",
  name: "Curlie Girlie Collective",
  description:
    "Real conversations about curly hair culture, care, and confidence. Featuring experts, advocates, and everyday queens.",
  url: "https://curliegirliecollective.com",
  webFeed: "https://curliegirliecollective.com/episodes",
  genre: ["Beauty", "Culture", "Lifestyle", "Health"],
  inLanguage: "en",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link
          rel="alternate"
          type="application/rss+xml"
          title="Curlie Girlie Collective Podcast"
          href="https://curliegirliecollective.com/feed.xml"
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(organizationJsonLd),
          }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(podcastJsonLd),
          }}
        />
      </head>
      <body
        className={`${playfair.variable} ${inter.variable} ${dmSans.variable} antialiased`}
      >
        <CartProvider>{children}</CartProvider>
      </body>
    </html>
  );
}
