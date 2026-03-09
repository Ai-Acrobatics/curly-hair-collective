"use client";

import { ClientShell } from "../components/ClientShell";
import { PageHeader } from "../components/PageHeader";
import { FooterSection } from "../sections/Footer";
import { FadeInUp } from "../components/FramerAnimations";

const sections = [
  {
    title: "Information We Collect",
    content: [
      "Email address (when you subscribe to our newsletter or contact us)",
      "Name (when you submit a contact form or sign up for events)",
      "Usage data (pages visited, time on site, referral source) via privacy-respecting analytics",
      "Device and browser information for site optimization",
    ],
  },
  {
    title: "How We Use Your Information",
    content: [
      "Send you podcast episode notifications and newsletter updates (only if you opt in)",
      "Respond to your inquiries and support requests",
      "Improve our website, content, and user experience",
      "Process merch orders and communicate about your purchases",
      "Share anonymized, aggregated data with sponsors (never individual data)",
    ],
  },
  {
    title: "Information Sharing",
    content: [
      "We never sell your personal information to third parties",
      "We share anonymized audience demographics with sponsors (age ranges, engagement rates — never individual data)",
      "We use trusted service providers for email delivery, payments, and hosting who are bound by data protection agreements",
      "We may disclose information if required by law or to protect our rights",
    ],
  },
  {
    title: "Cookies & Tracking",
    content: [
      "We use essential cookies for site functionality",
      "We use privacy-respecting analytics to understand traffic patterns",
      "We do not use invasive tracking pixels or cross-site trackers",
      "You can disable cookies in your browser settings at any time",
    ],
  },
  {
    title: "Your Rights",
    content: [
      "Access the personal data we hold about you",
      "Request correction or deletion of your data",
      "Unsubscribe from emails at any time (link in every email)",
      "Opt out of analytics tracking",
      "Request a copy of your data in a portable format",
    ],
  },
  {
    title: "Data Security",
    content: [
      "We use industry-standard encryption (HTTPS/TLS) for all data transmission",
      "Email lists are stored with encrypted, access-controlled providers",
      "We regularly review and update our security practices",
      "In the event of a data breach, we will notify affected users within 72 hours",
    ],
  },
  {
    title: "Children's Privacy",
    content: [
      "Our services are not directed to children under 13",
      "We do not knowingly collect personal information from children",
      "If you believe a child has provided us with personal data, please contact us for removal",
    ],
  },
  {
    title: "Contact Us",
    content: [
      "For privacy-related questions or data requests, email us at privacy@curliegirlie.com",
      "We aim to respond to all privacy requests within 30 days",
    ],
  },
];

export function PrivacyPageClient() {
  return (
    <ClientShell>
      <PageHeader
        badge="Legal"
        title="Privacy"
        titleAccent="Policy"
        subtitle="Your privacy matters to us. Here's how we handle your information."
      />

      <section className="py-20 bg-pink-50">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <FadeInUp>
            <p className="text-pink-700/60 text-sm mb-10">
              Last updated: March 2026
            </p>
          </FadeInUp>

          {sections.map((section, i) => (
            <FadeInUp key={section.title} delay={i * 0.05}>
              <div className="bg-white rounded-2xl p-6 md:p-8 shadow-md shadow-pink-200/20 mb-5">
                <h2 className="text-xl font-bold text-pink-900 mb-4">
                  {section.title}
                </h2>
                <ul className="space-y-2">
                  {section.content.map((item, j) => (
                    <li
                      key={j}
                      className="text-pink-700/65 text-sm leading-relaxed flex items-start gap-2"
                    >
                      <span className="text-pink-400 mt-1.5 flex-shrink-0">
                        &bull;
                      </span>
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </FadeInUp>
          ))}
        </div>
      </section>

      <FooterSection />
    </ClientShell>
  );
}
