
import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "About HEISVED",
  description:
    "Learn about HEISVED, a Kenyan-founded technology company advancing artificial intelligence, machine learning, and engineering innovation.",
};

const values = [
  {
    title: "Innovation",
    description:
      "Exploring emerging technologies and developing new approaches to complex challenges.",
  },
  {
    title: "Technical Excellence",
    description:
      "Building solutions grounded in technical knowledge, research and practical application.",
  },
  {
    title: "Integrity",
    description:
      "Approaching every project with transparency, responsibility and professionalism.",
  },
  {
    title: "Impact",
    description:
      "Using technology to create meaningful solutions for businesses, communities and industries.",
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
            HEISVED is an independent technology company focused
            on artificial intelligence, machine learning and
            civil engineering innovation. We explore how
            intelligent technologies can address practical
            challenges and create new possibilities across industries.
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
                To develop intelligent, practical and innovative
                technology solutions that solve real-world
                problems through artificial intelligence,
                machine learning and engineering.
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
                intelligence and engineering work together
                to transform industries and advance technological
                innovation across Africa and beyond.
              </p>
            </div>
          </div>

          {/* Focus Areas */}
          <div className="mt-16 sm:mt-20 lg:mt-24">
            <p className="text-xs font-semibold uppercase tracking-widest text-blue-400 sm:text-sm">
              Our Focus
            </p>

            <h2 className="mt-4 text-3xl font-bold sm:mt-5 sm:text-4xl">
              Where Technology Meets Engineering
            </h2>

            <div className="mt-8 grid grid-cols-1 gap-5 sm:mt-10 sm:grid-cols-2 sm:gap-6">
              <div className="rounded-xl border border-gray-800 p-6 sm:p-8">
                <h3 className="text-xl font-bold sm:text-2xl">
                  Artificial Intelligence
                </h3>
                <p className="mt-4 text-sm leading-7 text-gray-400 sm:text-base">
                  Machine learning, intelligent applications,
                  large language models, retrieval systems
                  and computer vision.
                </p>
              </div>

              <div className="rounded-xl border border-gray-800 p-6 sm:p-8">
                <h3 className="text-xl font-bold sm:text-2xl">
                  Civil Engineering
                </h3>
                <p className="mt-4 text-sm leading-7 text-gray-400 sm:text-base">
                  Structural engineering, digital construction,
                  BIM and the exploration of intelligent
                  engineering workflows.
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

          {/* Closing */}
          <div className="mt-16 rounded-2xl border border-blue-900 bg-[#0D1525] px-6 py-10 text-center sm:mt-20 sm:px-10 sm:py-14 md:p-16 lg:mt-24">
            <h2 className="text-2xl font-bold sm:text-3xl">
              Let's Build the Future.
            </h2>

            <p className="mx-auto mt-4 max-w-xl text-sm leading-7 text-gray-400 sm:mt-5 sm:text-base sm:leading-8">
              We believe the future belongs to those who
              combine knowledge, creativity and technology
              to solve meaningful problems.
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
