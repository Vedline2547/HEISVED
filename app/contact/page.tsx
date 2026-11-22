import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contact HEISVED",
  description:
    "Get in touch with HEISVED to discuss AI development, machine learning, civil engineering, and potential collaborations.",
};

export default function ContactPage() {
  return (
    <main className="min-h-screen overflow-hidden bg-[#080D18] text-white">
      <section className="mx-auto max-w-5xl px-5 py-16 sm:px-8 sm:py-20 lg:px-12 lg:py-24">
        <p className="text-xs font-semibold uppercase tracking-[0.25em] text-blue-400 sm:text-sm sm:tracking-[0.3em]">
          Get in Touch
        </p>

        <h1 className="mt-5 max-w-4xl text-3xl font-bold leading-tight sm:text-4xl md:text-6xl">
          Let's Build Something Intelligent.
        </h1>

        <p className="mt-6 max-w-2xl text-base leading-7 text-slate-400 sm:text-lg sm:leading-relaxed">
          Have a project, partnership opportunity, or an idea you'd like
          to explore? We'd love to hear from you.
        </p>

        <div className="mt-10 grid grid-cols-1 gap-5 sm:mt-12 sm:grid-cols-2 sm:gap-8">
          {/* Email */}
          <div className="rounded-xl border border-slate-800 bg-slate-900/40 p-6 sm:p-8">
            <h2 className="text-xl font-semibold">Email</h2>

            <p className="mt-4 text-sm leading-7 text-slate-400 sm:text-base">
              Reach us through email for enquiries and collaborations.
            </p>

            <a
              href="mailto:ochiengved@gmail.com"
              className="mt-5 inline-block break-all text-sm text-blue-400 transition hover:text-blue-300 sm:text-base"
            >
              ochiengved@gmail.com
            </a>

            <div className="mt-6">
              <a
                href="mailto:ochiengved@gmail.com?subject=HEISVED%20Enquiry"
                className="inline-block rounded-lg bg-blue-600 px-6 py-3 text-sm font-semibold transition hover:bg-blue-500 sm:text-base"
              >
                Send an Email
              </a>
            </div>
          </div>

          {/* Phone and WhatsApp */}
          <div className="rounded-xl border border-slate-800 bg-slate-900/40 p-6 sm:p-8">
            <h2 className="text-xl font-semibold">Phone / WhatsApp</h2>

            <p className="mt-4 text-sm leading-7 text-slate-400 sm:text-base">
              Contact us directly for enquiries, discussions, and
              potential collaborations.
            </p>

            <p className="mt-5 text-lg font-medium text-slate-200">
              +254 795 207 879
            </p>

            <div className="mt-6 flex flex-col gap-3 sm:flex-row sm:flex-wrap sm:gap-4">
              <a
                href="tel:+254795207879"
                className="rounded-lg bg-blue-600 px-6 py-3 text-center text-sm font-semibold transition hover:bg-blue-500 sm:text-base"
              >
                Call Us
              </a>

              <a
                href="https://wa.me/254795207879"
                target="_blank"
                rel="noopener noreferrer"
                className="rounded-lg border border-green-500 px-6 py-3 text-center text-sm font-semibold text-green-400 transition hover:bg-green-500/10 sm:text-base"
              >
                WhatsApp Us
              </a>
            </div>
          </div>
        </div>

        <div className="mt-14 border-t border-slate-800 pt-8 sm:mt-16">
          <p className="text-xs leading-6 text-slate-500 sm:text-sm">
            HEISVED — Engineering Intelligence. Building Tomorrow.
          </p>

          <p className="mt-2 text-xs text-slate-500 sm:text-sm">
            Founded in Kenya. Building for Africa and the world.
          </p>
        </div>
      </section>
    </main>
  );
}
