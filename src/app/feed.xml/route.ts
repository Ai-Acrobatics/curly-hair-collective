import { episodes } from "../data/episodes";

export async function GET() {
  const baseUrl = "https://curlyhaircollective.com";

  const items = episodes
    .map(
      (ep) => `
    <item>
      <title>${escapeXml(ep.title)}</title>
      <description>${escapeXml(ep.longDescription)}</description>
      <link>${baseUrl}/episodes/${ep.slug}</link>
      <guid isPermaLink="true">${baseUrl}/episodes/${ep.slug}</guid>
      <itunes:author>${escapeXml(ep.guest)}</itunes:author>
      <itunes:subtitle>${escapeXml(ep.description)}</itunes:subtitle>
      <itunes:summary>${escapeXml(ep.longDescription)}</itunes:summary>
      <itunes:duration>${ep.duration.replace(" min", ":00")}</itunes:duration>
      <itunes:keywords>${ep.topics.join(", ")}</itunes:keywords>
    </item>`
    )
    .join("\n");

  const feed = `<?xml version="1.0" encoding="UTF-8"?>
<rss version="2.0"
  xmlns:itunes="http://www.itunes.com/dtds/podcast-1.0.dtd"
  xmlns:content="http://purl.org/rss/1.0/modules/content/"
  xmlns:atom="http://www.w3.org/2005/Atom">
  <channel>
    <title>Curly Hair Collective</title>
    <link>${baseUrl}</link>
    <description>Celebrating curly hair culture through conversations, community, and confidence. Real conversations with experts, advocates, and everyday queens about natural hair care, culture, and confidence.</description>
    <language>en-us</language>
    <copyright>Copyright ${new Date().getFullYear()} Curly Hair Collective</copyright>
    <atom:link href="${baseUrl}/feed.xml" rel="self" type="application/rss+xml"/>
    <itunes:author>Curly Hair Collective</itunes:author>
    <itunes:summary>Real conversations about curly hair culture, care, and confidence. Featuring experts, advocates, and everyday queens.</itunes:summary>
    <itunes:owner>
      <itunes:name>Curly Hair Collective</itunes:name>
      <itunes:email>hello@curlyhaircollective.com</itunes:email>
    </itunes:owner>
    <itunes:explicit>false</itunes:explicit>
    <itunes:category text="Health &amp; Fitness">
      <itunes:category text="Alternative Health"/>
    </itunes:category>
    <itunes:category text="Society &amp; Culture"/>
    <itunes:type>episodic</itunes:type>
    ${items}
  </channel>
</rss>`;

  return new Response(feed, {
    headers: {
      "Content-Type": "application/xml; charset=utf-8",
      "Cache-Control": "s-maxage=3600, stale-while-revalidate",
    },
  });
}

function escapeXml(str: string): string {
  return str
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&apos;");
}
