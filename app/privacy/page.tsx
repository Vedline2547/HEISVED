
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Privacy Policy | HEISVED",
  description:
    "Learn how HEISVED collects, uses, and protects personal information submitted through its website.",
};

const sections = [
  {
    title: "1. Information We Collect",
    content:
      "When you contact HEISVED through our business enquiry form, we may collect your name, email address, selected service, and project description. If you contact us directly by email, telephone, or WhatsApp, we may also receive information you choose to share through those channels.",
  },
  {
    title: "2. How We Use Your Information",
    content:
      "We use the information you provide to respond to enquiries, understand project requirements, communicate about potential services or partnerships, and improve our business communication.",
  },
  {
    title: "3. Third-Party Services",
    content:
      "Our website uses Formspree to process business enquiry form submissions. Information submitted through the form is processed by Formspree in accordance with its own privacy policy and service terms. Email and messaging services may also process information when you contact us through those channels.",
  },
  {
    title: "4. Data Sharing",
    content:
      "HEISVED does not sell personal information. We may share information with service providers where necessary to operate our website, process enquiries, or provide requested services. We may also disclose information where required by applicable law.",
  },
  {
    title: "5. Data Retention and Security",
    content:
      "We retain enquiry information only for as long as reasonably necessary to respond to requests, maintain relevant business records, and meet applicable legal obligations. We take reasonable steps to protect information, although no method of electronic transmission or storage is completely secure.",
  },
  {
    title: "6. Your Privacy Rights",
    content:
      "Depending on applicable law, you may have rights to request access to, correction of, or deletion of your personal information, and to raise concerns about how it is handled. You can contact us using the details below to make a privacy-related request.",
  },
  {
    title: "7. External Links",
    content:
      "Our website may contain links to external websites and services. HEISVED is not responsible for the privacy practices or content of third-party websites. We encourage visitors to review their privacy policies.",
  },
  {
    title: "8. Changes to This Policy",
    content:
      "We may update this Privacy Policy as our website, services, or legal obligations change. Any revised version will be published on this page with an updated effective date.",
  },
];

export default function PrivacyPage() {
  return (
    <main className="min-h-screen bg-[#080D18] text-white">
      <section className="mx-auto max-w-4xl px-5 py-16 sm:px-8 sm:py-20 lg:px-12 lg:py-24">
        <p className="text-xs font-semibold uppercase tracking-[0.25em] text-blue-400 sm:text-sm">
          HEISVED Legal
        </p>

        <h1 className="mt-5 text-4xl font-bold sm:text-5xl md:text-6xl">
          Privacy Policy
        </h1>

        <p className="mt-6 text-base leading-8 text-slate-400 sm:text-lg">
          This Privacy Policy explains how HEISVED collects, uses,
          and protects information when you visit our website or
          contact us about our services.
        </p>

        <p className="mt-5 text-sm text-slate-500">
          Effective date: November 23, 2026
        </p>

        <div className="mt-12 space-y-10">
          {sections.map((section) => (
            <section key={section.title}>
              <h2 className="text-xl font-semibold text-blue-400 sm:text-2xl">
                {section.title}
              </h2>

              <p className="mt-4 text-sm leading-8 text-slate-400 sm:text-base">
                {section.content}
              </p>
            </section>
          ))}
        </div>

        <div className="mt-14 rounded-xl border border-slate-800 bg-slate-900/40 p-6 sm:p-8">
          <h2 className="text-xl font-semibold">
            Privacy Enquiries
          </h2>

          <p className="mt-3 text-sm leading-7 text-slate-400 sm:text-base">
            If you have questions about this Privacy Policy or
            how your information is handled, contact HEISVED.
          </p>

          <a
            href="mailto:ochiengved@gmail.com?subject=HEISVED%20Privacy%20Enquiry"
            className="mt-5 inline-block text-blue-400 transition hover:text-blue-300"
          >
            ochiengved@gmail.com
          </a>
        </div>
      </section>
    </main>
  );
}
