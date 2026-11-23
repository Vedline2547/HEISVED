
import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "About HEISVED | Technology & Engineering Innovation",
  description:
    "Discover HEISVED, a Kenyan-founded technology company delivering artificial intelligence, software development, engineering services, and digital innovation.",
};

const values = [
  {
    title: "Innovation",
    description:
      "Exploring emerging technologies and developing forward-thinking approaches to practical challenges.",
  },
  {
    title: "Technical Excellence",
    description:
      "Building solutions grounded in technical knowledge, continuous learning, research, and practical application.",
  },
  {
    title: "Integrity",
    description:
      "Approaching our work with transparency, responsibility, and professionalism.",
  },
  {
    title: "Impact",
    description:
      "Using technology and engineering to create meaningful solutions for businesses, communities, and industries.",
  },
];

export default function AboutPage() {
  return (
    <main className="min-h-screen overflow-hidden bg-[#080D18] text-white">
      <section className="px-5 py-16 sm:px-8 sm:py-20 lg:px-20 lg:py-24">
        <div className="mx-auto max-w-6xl">
          <p className="text-xs font-semibold uppercase tracking-[0.25em] text-blue-400 sm:text-sm sm:tracking-[0.3em]">
            About HEISVED
          </p>

          <h1 className="mt-5 max-w-4xl text-4xl font-bold leading-tight sm:mt-6 sm:text-5xl md:text-7xl">
            Technology Driven.
            <span className="block text-blue-500">
              Innovation Focused.
            </span>
          </h1>

          <p className="mt-6 max-w-3xl text-base leading-7 text-gray-400 sm:mt-8 sm:text-lg sm:leading-9">
            HEISVED is an independent technology company founded
            in Kenya, focused on artificial intelligence, software
            development, and engineering innovation. We develop
            intelligent technology solutions and provide
            engineering-focused services, bringing together
            technical expertise and emerging technologies to
            address practical challenges.
          </p>

          {/* Mission and Vision */}
          <div className="mt-16 grid grid-cols-1 gap-5 sm:mt-20 sm:grid-cols-2 sm:gap-6 lg:mt-24">
            <div className="rounded-2xl border border-gray-800 bg-[#0D1525] p-6 sm:p-9">
              <p className="text-xs font-semibold uppercase tracking-widest text-blue-400 sm:text-sm">
                Our Mission
              </p>

              <h2 className="mt-4 text-2xl font-bold sm:mt-5 sm:text-3xl">
                Building Solutions That Matter.
              </h2>

              <p className="mt-4 text-sm leading-7 text-gray-400 sm:mt-5 sm:text-base sm:leading-8">
                To develop intelligent, practical, and innovative
                solutions through artificial intelligence,
                software development, and engineering services
                that address real-world problems and create
                meaningful value.
              </p>
            </div>

            <div className="rounded-2xl border border-gray-800 bg-[#0D1525] p-6 sm:p-9">
              <p className="text-xs font-semibold uppercase tracking-widest text-blue-400 sm:text-sm">
                Our Vision
              </p>

              <h2 className="mt-4 text-2xl font-bold sm:mt-5 sm:text-3xl">
                Shaping Tomorrow Through Technology.
              </h2>

              <p className="mt-4 text-sm leading-7 text-gray-400 sm:mt-5 sm:text-base sm:leading-8">
                To contribute to a future where artificial
                intelligence, software, and engineering work
                together to transform industries and advance
                technological innovation across Africa and
                beyond.
              </p>
            </div>
          </div>

          {/* Focus Areas */}
          <div className="mt-16 sm:mt-20 lg:mt-24">
            <p className="text-xs font-semibold uppercase tracking-widest text-blue-400 sm:text-sm">
              Our Focus
            </p>

            <h2 className="mt-4 text-3xl font-bold sm:mt-5 sm:text-4xl">
              Technology Meets Engineering.
            </h2>

            <p className="mt-5 max-w-3xl text-sm leading-7 text-gray-400 sm:text-base sm:leading-8">
              Our work brings together intelligent software
              technologies and engineering expertise across
              three key areas.
            </p>

            <div className="mt-8 grid grid-cols-1 gap-5 sm:mt-10 sm:grid-cols-2 lg:grid-cols-3">
              <div className="rounded-xl border border-gray-800 bg-[#0D1525] p-6 sm:p-8">
                <h3 className="text-xl font-bold sm:text-2xl">
                  Artificial Intelligence & Software
                </h3>

                <p className="mt-4 text-sm leading-7 text-gray-400 sm:text-base">
                  Machine learning, intelligent applications,
                  large language models, RAG systems, computer
                  vision, automation, and custom software development.
                </p>
              </div>

              <div className="rounded-xl border border-gray-800 bg-[#0D1525] p-6 sm:p-8">
                <h3 className="text-xl font-bold sm:text-2xl">
                  Structural Engineering
                </h3>

                <p className="mt-4 text-sm leading-7 text-gray-400 sm:text-base">
                  Structural analysis, design, and engineering
                  solutions grounded in technical principles
                  and practical applications.
                </p>
              </div>

              <div className="rounded-xl border border-gray-800 bg-[#0D1525] p-6 sm:p-8">
                <h3 className="text-xl font-bold sm:text-2xl">
                  BIM & Digital Construction
                </h3>

                <p className="mt-4 text-sm leading-7 text-gray-400 sm:text-base">
                  Building Information Modelling, digital
                  construction workflows, and the integration
                  of AI with engineering technologies.
                </p>
              </div>
            </div>
          </div>

          {/* Values */}
          <div className="mt-16 sm:mt-20 lg:mt-24">
            <p className="text-xs font-semibold uppercase tracking-widest text-blue-400 sm:text-sm">
              What Guides Us
            </p>

            <h2 className="mt-4 text-3xl font-bold sm:mt-5 sm:text-4xl">
              Our Core Values
            </h2>

            <div className="mt-8 grid grid-cols-1 gap-5 sm:mt-10 sm:grid-cols-2 lg:grid-cols-4">
              {values.map((value) => (
                <div
                  key={value.title}
                  className="rounded-xl border border-gray-800 bg-[#0D1525] p-6 sm:p-7"
                >
                  <h3 className="text-lg font-semibold sm:text-xl">
                    {value.title}
                  </h3>

                  <p className="mt-4 text-sm leading-7 text-gray-400">
                    {value.description}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* Our Foundation */}
          <div className="mt-16 rounded-2xl border border-blue-900 bg-[#0D1525] px-6 py-10 text-center sm:mt-20 sm:px-10 sm:py-14 md:p-16 lg:mt-24">
            <p className="text-xs font-semibold uppercase tracking-widest text-blue-400 sm:text-sm">
              Our Foundation
            </p>

            <h2 className="mt-4 text-2xl font-bold sm:text-3xl">
              Built in Africa. Looking Beyond.
            </h2>

            <p className="mx-auto mt-4 max-w-xl text-sm leading-7 text-gray-400 sm:mt-5 sm:text-base sm:leading-8">
              Founded in Kenya, HEISVED is driven by the ambition
              to contribute to Africa's technological advancement
              while developing solutions with global relevance.
            </p>

            <Link
              href="/contact"
              className="mt-7 inline-block rounded-lg bg-blue-600 px-7 py-3.5 text-sm font-medium transition hover:bg-blue-500 sm:mt-8 sm:py-4 sm:text-base"
            >
              Get in Touch
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
