import type { Metadata } from "next";
import { ContactPageClient } from "./ContactPageClient";

export const metadata: Metadata = {
  title: "Contact | Curlie Girlie Collective",
  description:
    "Get in touch with the Curlie Girlie Collective team. Sponsorship inquiries, guest pitches, press, or just say hey — we'd love to hear from you.",
  openGraph: {
    title: "Contact | Curlie Girlie Collective",
    description: "Get in touch with the Curlie Girlie Collective team.",
    type: "website",
    url: "https://curliegirlie.com/contact",
  },
  alternates: {
    canonical: "https://curliegirlie.com/contact",
  },
};

export default function ContactPage() {
  return <ContactPageClient />;
}
