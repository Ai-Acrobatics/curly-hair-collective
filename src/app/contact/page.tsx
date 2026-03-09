import type { Metadata } from "next";
import { ContactPageClient } from "./ContactPageClient";

export const metadata: Metadata = {
  title: "Contact | Curly Hair Collective",
  description:
    "Get in touch with the Curly Hair Collective team. Sponsorship inquiries, guest pitches, press, or just say hey — we'd love to hear from you.",
  openGraph: {
    title: "Contact | Curly Hair Collective",
    description: "Get in touch with the Curly Hair Collective team.",
    type: "website",
    url: "https://curlyhaircollective.com/contact",
  },
  alternates: {
    canonical: "https://curlyhaircollective.com/contact",
  },
};

export default function ContactPage() {
  return <ContactPageClient />;
}
