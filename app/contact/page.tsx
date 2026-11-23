
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contact HEISVED | Let's Work Together",
  description:
    "Contact HEISVED for AI development, software solutions, engineering services, BIM innovation, partnerships, and business enquiries.",
};

export default function ContactPage() {
  return (
    <main className="min-h-screen overflow-hidden bg-[#080D18] text-white">
      <section className="mx-auto max-w-5xl px-5 py-16 sm:px-8 sm:py-20 lg:px-12 lg:py-24">
        <p className="text-xs font-semibold uppercase tracking-[0.25em] text-blue-400 sm:text-sm sm:tracking-[0.3em]">
          Contact HEISVED
        </p>

        <h1 className="mt-5 max-w-4xl text-3xl font-bold leading-tight sm:text-4xl md:text-6xl">
          Let's Build Something
          <span className="block text-blue-500">
            Intelligent.
          </span>
        </h1>

        <p className="mt-6 max-w-2xl text-base leading-7 text-slate-400 sm:text-lg sm:leading-relaxed">
          Whether you're looking for an AI solution, software
          development, engineering services, or a potential
          partnership, we'd like to hear from you. Let's discuss
          how we can bring your ideas to life.
        </p>

        {/* Business Enquiry Form */}
        <div className="mt-12 rounded-xl border border-slate-800 bg-slate-900/40 p-6 sm:p-8">
          <h2 className="text-2xl font-semibold">
            Send a Business Enquiry
          </h2>

          <p className="mt-3 text-sm leading-7 text-slate-400">
            Tell us about your project or requirements. We'll get
            back to you using the contact information you provide.
          </p>

          <form
            action="https://formspree.io/f/xkjrpvpr"
            method="POST"
            className="mt-8 space-y-6"
          >
            <input
              type="hidden"
              name="_subject"
              value="New HEISVED Business Enquiry"
            />

            <div>
              <label
                htmlFor="name"
                className="mb-2 block text-sm font-medium text-slate-300"
              >
                Full Name
              </label>
              <input
                id="name"
                type="text"
                name="name"
                placeholder="Enter your full name"
                required
                autoComplete="name"
                className="w-full rounded-lg border border-slate-700 bg-[#080D18] px-4 py-3 text-white outline-none transition placeholder:text-slate-500 focus:border-blue-500"
              />
            </div>

            <div>
              <label
                htmlFor="email"
                className="mb-2 block text-sm font-medium text-slate-300"
              >
                Email Address
              </label>
              <input
                id="email"
                type="email"
                name="email"
                placeholder="you@example.com"
                required
                autoComplete="email"
                className="w-full rounded-lg border border-slate-700 bg-[#080D18] px-4 py-3 text-white outline-none transition placeholder:text-slate-500 focus:border-blue-500"
              />
            </div>

            <div>
              <label
                htmlFor="service"
                className="mb-2 block text-sm font-medium text-slate-300"
              >
                Service Required
              </label>
              <select
                id="service"
                name="service"
                required
                defaultValue=""
                className="w-full rounded-lg border border-slate-700 bg-[#080D18] px-4 py-3 text-white outline-none transition focus:border-blue-500"
              >
                <option value="" disabled>
                  Select a service
                </option>
                <option value="Machine Learning and AI">
                  Machine Learning & AI
                </option>
                <option value="AI Application Development">
                  AI Application Development
                </option>
                <option value="LLMs and RAG Systems">
                  LLMs & RAG Systems
                </option>
                <option value="Computer Vision">
                  Computer Vision
                </option>
                <option value="Custom Software Development">
                  Custom Software Development
                </option>
                <option value="Structural Engineering">
                  Structural Engineering
                </option>
                <option value="BIM and Digital Construction">
                  BIM & Digital Construction
                </option>
                <option value="BIM and AI Innovation">
                  BIM + AI Innovation
                </option>
                <option value="Partnership">
                  Partnership
                </option>
                <option value="Other">
                  Other
                </option>
              </select>
            </div>

            <div>
              <label
                htmlFor="message"
                className="mb-2 block text-sm font-medium text-slate-300"
              >
                Project Description
              </label>
              <textarea
                id="message"
                name="message"
                rows={6}
                required
                placeholder="Tell us about your project, objectives, requirements, or enquiry..."
                className="w-full resize-y rounded-lg border border-slate-700 bg-[#080D18] px-4 py-3 text-white outline-none transition placeholder:text-slate-500 focus:border-blue-500"
              />
            </div>

            <button
              type="submit"
              className="w-full rounded-lg bg-blue-600 px-6 py-3 font-semibold transition hover:bg-blue-500 sm:w-auto"
            >
              Submit Enquiry →
            </button>
          </form>
        </div>

        {/* Direct Contact Options */}
        <div className="mt-10 grid grid-cols-1 gap-5 sm:grid-cols-2 sm:gap-8">
          <div className="rounded-xl border border-slate-800 bg-slate-900/40 p-6 sm:p-8">
            <h2 className="text-xl font-semibold">Email Enquiries</h2>

            <p className="mt-4 text-sm leading-7 text-slate-400 sm:text-base">
              Reach out to discuss projects, business enquiries,
              partnerships, or general questions.
            </p>

            <a
              href="mailto:ochiengved@gmail.com"
              className="mt-5 inline-block break-all text-sm text-blue-400 transition hover:text-blue-300 sm:text-base"
            >
              ochiengved@gmail.com
            </a>

            <div className="mt-6">
              <a
                href="mailto:ochiengved@gmail.com?subject=HEISVED%20Business%20Enquiry"
                className="inline-block rounded-lg bg-blue-600 px-6 py-3 text-sm font-semibold transition hover:bg-blue-500 sm:text-base"
              >
                Send an Email
              </a>
            </div>
          </div>

          <div className="rounded-xl border border-slate-800 bg-slate-900/40 p-6 sm:p-8">
            <h2 className="text-xl font-semibold">Phone / WhatsApp</h2>

            <p className="mt-4 text-sm leading-7 text-slate-400 sm:text-base">
              Prefer a direct conversation? Contact us to discuss
              your requirements and potential opportunities.
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
