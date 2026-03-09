import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { guests } from "../../data/guests";
import { episodes } from "../../data/episodes";
import { GuestDetailClient } from "./GuestDetailClient";

type Params = Promise<{ slug: string }>;

export function generateStaticParams() {
  return guests.map((guest) => ({ slug: guest.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Params;
}): Promise<Metadata> {
  const { slug } = await params;
  const guest = guests.find((g) => g.slug === slug);
  if (!guest) return {};

  return {
    title: `${guest.name} — ${guest.title}`,
    description: guest.bio.slice(0, 160),
    openGraph: {
      title: `${guest.name} | Curlie Girlie Collective Guest`,
      description: guest.bio.slice(0, 160),
      type: "profile",
      url: `https://curliegirlie.com/guests/${slug}`,
    },
    alternates: {
      canonical: `https://curliegirlie.com/guests/${slug}`,
    },
  };
}

export default async function GuestDetailPage({
  params,
}: {
  params: Params;
}) {
  const { slug } = await params;
  const guest = guests.find((g) => g.slug === slug);
  if (!guest) notFound();

  const guestEpisodes = episodes.filter((ep) =>
    guest.episodeSlugs.includes(ep.slug)
  );

  const personJsonLd = {
    "@context": "https://schema.org",
    "@type": "Person",
    name: guest.name,
    jobTitle: guest.title,
    description: guest.bio,
    url: `https://curliegirlie.com/guests/${slug}`,
    sameAs: guest.socials.map((s) => s.url),
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(personJsonLd) }}
      />
      <GuestDetailClient guest={guest} episodes={guestEpisodes} />
    </>
  );
}
