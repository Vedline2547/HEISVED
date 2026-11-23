
import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Engineering Services | HEISVED",
  description:
    "HEISVED provides structural engineering, BIM and digital construction solutions, and explores the integration of artificial intelligence into engineering workflows.",
};

const services = [
  {
    number: "01",
    title: "Structural Engineering",
    description:
      "Engineering solutions focused on structural analysis, design development and the application of engineering principles to the built environment.",
    capabilities: [
      "Structural Analysis",
      "Structural Design",
      "Design Development",
      "Engineering Applications",
    ],
  },
  {
    number: "02",
    title: "BIM & Digital Construction",
    description:
      "Digital engineering workflows that support building information modelling, coordinated design and more efficient construction processes.",
    capabilities: [
      "BIM Modelling",
      "Autodesk Revit",
      "Digital Design",
      "Model Coordination",
    ],
  },
  {
    number: "03",
    title: "BIM + AI Innovation",
    description:
      "Bringing artificial intelligence and machine learning into digital engineering to explore smarter design workflows, automation and engineering analysis.",
    capabilities: [
      "AI-powered BIM",
      "Engineering Automation",
      "Machine Learning",
      "Intelligent Workflows",
    ],
  },
];

const advantages = [
  {
    number: "01",
    title: "Engineering Expertise",
    description:
      "Applying engineering principles and technical thinking to practical design and construction challenges.",
  },
  {
    number: "02",
    title: "Digital Workflows",
    description:
      "Using BIM and digital tools to support better coordination, modelling and engineering processes.",
  },
  {
    number: "03",
    title: "AI-driven Innovation",
    description:
      "Exploring how artificial intelligence can improve the way engineering problems are approached and solved.",
  },
];

export default function EngineeringPage() {
  return (
    <main className="min-h-screen overflow-hidden bg-[#080D18] text-white">
      {/* Hero */}
      <section className="relative px-5 pb-20 pt-20 sm:px-8 sm:pb-28 sm:pt-28 lg:px-20">
        <div className="absolute right-0 top-10 h-72 w-72 rounded-full bg-blue-600/10 blur-[120px]" />

        <div className="relative mx-auto max-w-6xl">
          <p className="text-xs font-semibold uppercase tracking-[0.3em] text-blue-400 sm:text-sm">
            Engineering Services
          </p>

          <h1 className="mt-6 max-w-4xl text-4xl font-bold leading-tight sm:text-5xl md:text-6xl lg:text-7xl">
            Engineering the
            <span className="block text-blue-500">
              Built Environment.
            </span>
          </h1>

          <p className="mt-7 max-w-2xl text-base leading-8 text-gray-400 sm:text-lg">
            HEISVED delivers engineering-focused solutions across
            structural engineering, Building Information Modelling
            and digital construction, while exploring the
            transformative potential of artificial intelligence
            in engineering.
          </p>

          <div className="mt-10 flex flex-wrap gap-4">
            <Link
              href="/contact"
              className="rounded-lg bg-blue-600 px-7 py-3.5 text-sm font-semibold transition hover:bg-blue-500"
            >
              Discuss an Engineering Project
            </Link>

            <Link
              href="/innovation"
              className="rounded-lg border border-gray-700 px-7 py-3.5 text-sm font-semibold text-gray-300 transition hover:border-blue-500 hover:text-white"
            >
              Explore Innovation
            </Link>
          </div>
        </div>
      </section>

      {/* Services */}
      <section className="border-t border-gray-800/70 bg-[#0A1120] px-5 py-20 sm:px-8 sm:py-24 lg:px-20">
        <div className="mx-auto max-w-6xl">
          <div className="max-w-2xl">
            <p className="text-xs font-semibold uppercase tracking-[0.3em] text-blue-400">
              What We Do
            </p>

            <h2 className="mt-5 text-3xl font-bold sm:text-4xl">
              Our Engineering Services
            </h2>

            <p className="mt-5 leading-8 text-gray-400">
              We bring together engineering knowledge, digital
              technologies and emerging AI capabilities to
              address challenges in the built environment.
            </p>
          </div>

          <div className="mt-12 grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
            {services.map((service) => (
              <article
                key={service.number}
                className="group rounded-2xl border border-gray-800 bg-[#0D1525] p-7 transition duration-300 hover:-translate-y-1 hover:border-blue-500/60 sm:p-8"
              >
                <p className="text-sm font-semibold tracking-wider text-blue-400">
                  {service.number}
                </p>

                <h3 className="mt-6 text-xl font-bold sm:text-2xl">
                  {service.title}
                </h3>

                <p className="mt-5 text-sm leading-7 text-gray-400">
                  {service.description}
                </p>

                <div className="mt-7 border-t border-gray-800 pt-6">
                  <p className="mb-4 text-xs font-semibold uppercase tracking-wider text-gray-500">
                    Capabilities
                  </p>

                  <div className="flex flex-wrap gap-2">
                    {service.capabilities.map((capability) => (
                      <span
                        key={capability}
                        className="rounded-full border border-gray-700 bg-gray-900/50 px-3 py-2 text-xs text-gray-300"
                      >
                        {capability}
                      </span>
                    ))}
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* BIM + AI feature */}
      <section className="px-5 py-20 sm:px-8 sm:py-28 lg:px-20">
        <div className="mx-auto grid max-w-6xl items-center gap-12 lg:grid-cols-2 lg:gap-20">
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.3em] text-blue-400">
              Engineering Meets Artificial Intelligence
            </p>

            <h2 className="mt-5 text-3xl font-bold leading-tight sm:text-4xl lg:text-5xl">
              The Future of Engineering Is
              <span className="block text-blue-500">
                Digital and Intelligent.
              </span>
            </h2>

            <p className="mt-6 leading-8 text-gray-400">
              We see an opportunity to transform traditional
              engineering workflows by combining Building
              Information Modelling with artificial intelligence.
            </p>

            <p className="mt-5 leading-8 text-gray-400">
              Our BIM + AI direction explores intelligent
              automation, data-driven design, machine learning
              applications and smarter ways to interact with
              digital building models.
            </p>

            <Link
              href="/innovation"
              className="mt-8 inline-flex items-center gap-2 text-sm font-semibold text-blue-400 transition hover:text-blue-300"
            >
              Discover Our Innovation Approach
              <span aria-hidden="true">→</span>
            </Link>
          </div>

          <div className="rounded-2xl border border-blue-500/20 bg-gradient-to-br from-blue-950/60 to-[#0D1525] p-7 sm:p-10">
            <p className="text-xs font-semibold uppercase tracking-[0.25em] text-blue-400">
              Our Direction
            </p>

            <div className="mt-8 space-y-5">
              <div className="rounded-xl border border-gray-700/70 bg-[#080D18]/70 p-5">
                <p className="text-lg font-bold">Building Information Modelling</p>
                <p className="mt-2 text-sm leading-6 text-gray-400">
                  Digital building models, structured project
                  information and coordinated workflows.
                </p>
              </div>

              <div className="flex justify-center">
                <span className="text-2xl font-bold text-blue-400">+</span>
              </div>

              <div className="rounded-xl border border-blue-500/30 bg-blue-950/30 p-5">
                <p className="text-lg font-bold">Artificial Intelligence</p>
                <p className="mt-2 text-sm leading-6 text-gray-400">
                  Machine learning, intelligent automation and
                  data-driven engineering applications.
                </p>
              </div>

              <div className="flex justify-center">
                <span className="text-2xl font-bold text-blue-400">↓</span>
              </div>

              <div className="rounded-xl border border-blue-500/40 bg-blue-600/10 p-5 text-center">
                <p className="font-bold text-blue-300">
                  Intelligent Engineering Workflows
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Why HEISVED */}
      <section className="border-t border-gray-800/70 bg-[#0A1120] px-5 py-20 sm:px-8 sm:py-24 lg:px-20">
        <div className="mx-auto max-w-6xl">
          <div className="max-w-2xl">
            <p className="text-xs font-semibold uppercase tracking-[0.3em] text-blue-400">
              Our Approach
            </p>

            <h2 className="mt-5 text-3xl font-bold sm:text-4xl">
              Engineering Beyond Convention
            </h2>
          </div>

          <div className="mt-12 grid gap-8 md:grid-cols-3">
            {advantages.map((item) => (
              <div key={item.number} className="border-l-2 border-blue-500 pl-6">
                <p className="text-sm font-semibold text-blue-400">
                  {item.number}
                </p>

                <h3 className="mt-4 text-xl font-bold">
                  {item.title}
                </h3>

                <p className="mt-4 text-sm leading-7 text-gray-400">
                  {item.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Portfolio introduction */}
      <section className="px-5 py-20 sm:px-8 sm:py-24 lg:px-20">
        <div className="mx-auto max-w-6xl rounded-2xl border border-gray-800 bg-[#0D1525] p-7 sm:p-12">
          <p className="text-xs font-semibold uppercase tracking-[0.3em] text-blue-400">
            Our Work
          </p>

          <h2 className="mt-5 text-3xl font-bold sm:text-4xl">
            Engineering Projects & Applications
          </h2>

          <p className="mt-5 max-w-2xl leading-8 text-gray-400">
            Explore our engineering work, technical applications
            and project developments. Our portfolio will showcase
            practical applications of structural engineering,
            BIM and digital engineering technologies.
          </p>

          <p className="mt-6 text-sm text-gray-500">
            Project case studies and technical visuals will be
            added as our portfolio develops.
          </p>
        </div>
      </section>

      {/* Contact CTA */}
      <section className="border-t border-gray-800/70 bg-[#0A1120] px-5 py-20 text-center sm:px-8 sm:py-24 lg:px-20">
        <div className="mx-auto max-w-3xl">
          <p className="text-xs font-semibold uppercase tracking-[0.3em] text-blue-400">
            Let's Build Together
          </p>

          <h2 className="mt-5 text-3xl font-bold sm:text-4xl">
            Have an Engineering Project in Mind?
          </h2>

          <p className="mx-auto mt-5 max-w-xl leading-8 text-gray-400">
            Connect with HEISVED to discuss engineering,
            structural design, BIM and digital engineering
            opportunities.
          </p>

          <Link
            href="/contact"
            className="mt-9 inline-block rounded-lg bg-blue-600 px-8 py-4 text-sm font-semibold transition hover:bg-blue-500"
          >
            Contact HEISVED
          </Link>
        </div>
      </section>
    </main>
  );
}
