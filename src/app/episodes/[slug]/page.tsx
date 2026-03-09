import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { episodes } from "../../data/episodes";
import { EpisodeDetailClient } from "./EpisodeDetailClient";

type Params = Promise<{ slug: string }>;

export async function generateStaticParams() {
  return episodes.map((ep) => ({ slug: ep.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Params;
}): Promise<Metadata> {
  const { slug } = await params;
  const episode = episodes.find((ep) => ep.slug === slug);
  if (!episode) return {};

  return {
    title: `${episode.title} with ${episode.guest} | Curlie Girlie Collective`,
    description: episode.longDescription.slice(0, 160),
    openGraph: {
      title: `${episode.title} | Curlie Girlie Collective`,
      description: episode.description,
      type: "article",
      url: `https://curliegirliecollective.com/episodes/${slug}`,
    },
    alternates: {
      canonical: `https://curliegirliecollective.com/episodes/${slug}`,
    },
  };
}

export default async function EpisodeDetailPage({
  params,
}: {
  params: Params;
}) {
  const { slug } = await params;
  const episode = episodes.find((ep) => ep.slug === slug);
  if (!episode) notFound();

  const episodeJsonLd = {
    "@context": "https://schema.org",
    "@type": "PodcastEpisode",
    name: episode.title,
    description: episode.longDescription,
    duration: `PT${parseInt(episode.duration)}M`,
    partOfSeries: {
      "@type": "PodcastSeries",
      name: "Curlie Girlie Collective",
      url: "https://curliegirliecollective.com",
    },
    actor: {
      "@type": "Person",
      name: episode.guest,
      description: episode.guestBio,
    },
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(episodeJsonLd) }}
      />
      <EpisodeDetailClient episode={episode} />
    </>
  );
}
