"use client";

import { ClientShell } from "../components/ClientShell";
import { PageHeader } from "../components/PageHeader";
import { FooterSection } from "../sections/Footer";
import { FadeInUp } from "../components/FramerAnimations";

const sections = [
  {
    title: "Acceptance of Terms",
    text: "By accessing and using Curlie Girlie Collective's website, podcast, and related services, you agree to be bound by these Terms of Service. If you do not agree to these terms, please do not use our services.",
  },
  {
    title: "Use of Services",
    text: "You may use our website, podcast, and community features for personal, non-commercial purposes. You agree not to misuse our services, interfere with their operation, or attempt to access them using methods other than the provided interface.",
  },
  {
    title: "User Content & Community",
    text: "When you submit content (comments, stories, feedback), you grant us a non-exclusive license to use it in connection with our services. You retain ownership of your content. All community interactions must be respectful, inclusive, and free from discrimination, harassment, or hate speech. We reserve the right to remove content that violates these guidelines.",
  },
  {
    title: "Intellectual Property",
    text: "All content on Curlie Girlie Collective — including podcast episodes, blog articles, graphics, logos, and branding — is protected by copyright and trademark law. You may not reproduce, distribute, or create derivative works without our written permission, except for personal use and sharing via provided social links.",
  },
  {
    title: "Merchandise",
    text: "All merchandise purchases are subject to our return and exchange policy. Products are sold as-is. We make reasonable efforts to display accurate colors and descriptions, but we cannot guarantee that your device's display accurately reflects actual product colors. Shipping times are estimates and may vary.",
  },
  {
    title: "Sponsorship & Advertising",
    text: "Sponsored content and advertisements are clearly disclosed. Product recommendations reflect honest opinions but may include affiliate relationships. We are not responsible for third-party products or services featured on our platform.",
  },
  {
    title: "Newsletter & Communications",
    text: "By subscribing to our newsletter, you consent to receive periodic emails about episodes, articles, merch, and community updates. You can unsubscribe at any time using the link in every email. We will never share your email address with third parties for their marketing purposes.",
  },
  {
    title: "Disclaimer",
    text: "Content provided by Curlie Girlie Collective is for informational and entertainment purposes only. Hair care advice should not replace professional consultation. We are not liable for any outcomes resulting from following advice shared on our platform. Individual results may vary.",
  },
  {
    title: "Limitation of Liability",
    text: "Curlie Girlie Collective shall not be liable for any indirect, incidental, or consequential damages arising from your use of our services. Our total liability for any claim related to our services shall not exceed the amount you have paid to us in the past 12 months.",
  },
  {
    title: "Changes to Terms",
    text: "We may update these terms from time to time. Material changes will be communicated via email or a notice on our website. Continued use of our services after changes constitutes acceptance of the updated terms.",
  },
  {
    title: "Contact",
    text: "For questions about these terms, contact us at legal@curliegirliecollective.com.",
  },
];

export function TermsPageClient() {
  return (
    <ClientShell>
      <PageHeader
        badge="Legal"
        title="Terms of"
        titleAccent="Service"
        subtitle="The guidelines that keep our community beautiful."
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
                <h2 className="text-xl font-bold text-pink-900 mb-3">
                  {section.title}
                </h2>
                <p className="text-pink-700/65 text-sm leading-relaxed">
                  {section.text}
                </p>
              </div>
            </FadeInUp>
          ))}
        </div>
      </section>

      <FooterSection />
    </ClientShell>
  );
}
