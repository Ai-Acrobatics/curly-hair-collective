import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { merchItems } from "../../data/merch";
import { MerchDetailClient } from "./MerchDetailClient";

type Params = Promise<{ slug: string }>;

export async function generateStaticParams() {
  return merchItems.map((item) => ({ slug: item.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Params;
}): Promise<Metadata> {
  const { slug } = await params;
  const item = merchItems.find((m) => m.slug === slug);
  if (!item) return {};

  return {
    title: `${item.name} | Curly Hair Collective Merch`,
    description: item.description,
    openGraph: {
      title: `${item.name} — $${item.price.toFixed(2)}`,
      description: item.description,
      type: "website",
      url: `https://curlyhaircollective.com/merch/${slug}`,
    },
    alternates: {
      canonical: `https://curlyhaircollective.com/merch/${slug}`,
    },
  };
}

export default async function MerchDetailPage({
  params,
}: {
  params: Params;
}) {
  const { slug } = await params;
  const item = merchItems.find((m) => m.slug === slug);
  if (!item) notFound();

  const productJsonLd = {
    "@context": "https://schema.org",
    "@type": "Product",
    name: item.name,
    description: item.description,
    brand: {
      "@type": "Brand",
      name: "Curly Hair Collective",
    },
    offers: {
      "@type": "Offer",
      price: item.price.toFixed(2),
      priceCurrency: "USD",
      availability: item.badge === "Coming Soon"
        ? "https://schema.org/PreOrder"
        : "https://schema.org/InStock",
    },
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(productJsonLd) }}
      />
      <MerchDetailClient item={item} />
    </>
  );
}
