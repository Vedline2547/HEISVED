
import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Civil & Structural Engineering",
  description:
    "Explore HEISVED's civil engineering, structural engineering, digital construction, and BIM solutions.",
};

const categories = [
  {
    number: "01",
    title: "Structural Engineering",
    description:
      "Structural analysis, design principles and engineering applications.",
    tools: ["Structural Analysis", "Design", "Engineering"],
  },
  {
    number: "02",
    title: "BIM & Digital Construction",
    description:
      "Building Information Modelling, digital design and construction workflows.",
    tools: ["Autodesk Revit", "BIM", "Digital Construction"],
  },
  {
    number: "03",
    title: "Civil Engineering",
    description:
      "Civil infrastructure, engineering design and practical technical applications.",
    tools: ["Civil Engineering", "Infrastructure", "Design"],
  },
];

export default function EngineeringPage() {
  return (
    <main className="min-h-screen overflow-hidden bg-[#080D18] text-white">
      <section className="px-5 py-16 sm:px-8 sm:py-20 lg:px-20 lg:py-24">
        <div className="mx-auto max-w-6xl">
          <p className="text-xs font-semibold uppercase tracking-[0.25em] text-blue-400 sm:text-sm sm:tracking-[0.3em]">
            Engineering Portfolio
          </p>

          <h1 className="mt-5 max-w-4xl text-4xl font-bold leading-tight sm:mt-6 sm:text-5xl md:text-6xl">
            Engineering Ideas.
            <span className="block text-blue-500">
              Practical Applications.
            </span>
          </h1>

          <p className="mt-6 max-w-2xl text-base leading-7 text-gray-400 sm:mt-7 sm:text-lg sm:leading-8">
            Explore HEISVED's civil engineering work,
            technical projects and exploration of digital
            engineering technologies.
          </p>

          <div className="mt-12 grid grid-cols-1 gap-5 sm:mt-16 sm:grid-cols-2 sm:gap-6 lg:grid-cols-3">
            {categories.map((category) => (
              <article
                key={category.number}
                className="rounded-2xl border border-gray-800 bg-[#0D1525] p-6 transition duration-300 hover:border-blue-500 sm:p-8"
              >
                <p className="text-sm font-semibold text-blue-400">
                  {category.number}
                </p>

                <h2 className="mt-4 text-xl font-bold sm:mt-5 sm:text-2xl">
                  {category.title}
                </h2>

                <p className="mt-4 text-sm leading-7 text-gray-400 sm:mt-5">
                  {category.description}
                </p>

                <div className="mt-6 flex flex-wrap gap-2 sm:mt-7">
                  {category.tools.map((tool) => (
                    <span
                      key={tool}
                      className="rounded-full border border-gray-700 px-3 py-2 text-xs text-gray-300"
                    >
                      {tool}
                    </span>
                  ))}
                </div>
              </article>
            ))}
          </div>

          <div className="mt-14 rounded-2xl border border-gray-800 bg-[#0D1525] p-6 sm:mt-20 sm:p-10">
            <h2 className="text-2xl font-bold sm:text-3xl">
              Engineering meets Artificial Intelligence
            </h2>

            <p className="mt-4 max-w-2xl text-sm leading-7 text-gray-400 sm:mt-5 sm:text-base sm:leading-8">
              HEISVED is exploring how machine learning,
              artificial intelligence and digital engineering
              can transform structural design and infrastructure
              development.
            </p>

            <Link
              href="/innovation"
              className="mt-7 inline-block text-sm font-semibold text-blue-400 transition hover:text-blue-300 sm:mt-8"
            >
              Explore our Innovation Lab →
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
