import type { Metadata } from "next";
import { Playfair_Display, Inter, DM_Sans } from "next/font/google";
import "./globals.css";

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
  metadataBase: new URL("https://curlyhaircollective.com"),
  title: {
    default: "Curly Hair Collective | Podcast & Community",
    template: "%s | Curly Hair Collective",
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
  authors: [{ name: "Curly Hair Collective" }],
  creator: "Curly Hair Collective",
  publisher: "Curly Hair Collective",
  openGraph: {
    title: "Curly Hair Collective | Podcast & Community",
    description:
      "Celebrating curly hair culture through conversations, community, and confidence. Every curl has a story.",
    type: "website",
    locale: "en_US",
    url: "https://curlyhaircollective.com",
    siteName: "Curly Hair Collective",
  },
  twitter: {
    card: "summary_large_image",
    title: "Curly Hair Collective | Podcast & Community",
    description:
      "Celebrating curly hair culture through conversations, community, and confidence.",
    creator: "@curlycollective",
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
    canonical: "https://curlyhaircollective.com",
  },
};

const organizationJsonLd = {
  "@context": "https://schema.org",
  "@type": "Organization",
  name: "Curly Hair Collective",
  url: "https://curlyhaircollective.com",
  description:
    "A podcast and community celebrating curly hair culture through conversations, community, and confidence.",
  sameAs: [
    "https://instagram.com/curlyhaircollective",
    "https://tiktok.com/@curlyhaircollective",
    "https://youtube.com/@curlyhaircollective",
    "https://twitter.com/curlycollective",
  ],
  contactPoint: {
    "@type": "ContactPoint",
    email: "hello@curlyhaircollective.com",
    contactType: "customer service",
  },
};

const podcastJsonLd = {
  "@context": "https://schema.org",
  "@type": "PodcastSeries",
  name: "Curly Hair Collective",
  description:
    "Real conversations about curly hair culture, care, and confidence. Featuring experts, advocates, and everyday queens.",
  url: "https://curlyhaircollective.com",
  webFeed: "https://curlyhaircollective.com/episodes",
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
        {children}
      </body>
    </html>
  );
}
