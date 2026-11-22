import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Innovation Lab",
  description:
    "Discover HEISVED's research and development initiatives exploring AI, engineering innovation, and emerging technologies.",
};

const innovations = [
  {
    number: "01",
    title: "AI-Powered BIM",
    description:
      "Exploring how large language models and AI can interact with Building Information Modelling environments.",
    technologies: ["AI", "LLMs", "Autodesk Revit"],
  },
  {
    number: "02",
    title: "Intelligent Engineering Assistants",
    description:
      "Researching AI assistants capable of retrieving technical engineering information and supporting engineering workflows.",
    technologies: ["RAG", "LLMs", "Engineering Data"],
  },
  {
    number: "03",
    title: "Engineering Automation",
    description:
      "Investigating opportunities to automate repetitive engineering and digital construction workflows.",
    technologies: ["Python", "Automation", "BIM"],
  },
];

export default function InnovationPage() {
  return (
    <main className="min-h-screen overflow-hidden bg-[#080D18] text-white">
      <section className="px-5 py-16 sm:px-8 sm:py-20 lg:px-20 lg:py-24">
        <div className="mx-auto max-w-6xl">
          <p className="text-xs font-semibold uppercase tracking-[0.25em] text-blue-400 sm:text-sm sm:tracking-[0.3em]">
            Research & Development
          </p>

          <h1 className="mt-5 max-w-4xl text-4xl font-bold leading-tight sm:mt-6 sm:text-5xl md:text-7xl">
            Exploring What's
            <span className="block text-blue-500">
              Possible.
            </span>
          </h1>

          <p className="mt-6 max-w-2xl text-base leading-7 text-gray-400 sm:mt-7 sm:text-lg sm:leading-8">
            The HEISVED Innovation Lab explores emerging
            technologies at the intersection of artificial
            intelligence, civil engineering and digital
            construction.
          </p>

          <div className="mt-8 inline-flex rounded-full border border-blue-800 px-4 py-3 text-xs text-blue-400 sm:mt-10 sm:px-5 sm:text-sm">
            Innovation in Development
          </div>

          <div className="mt-12 grid grid-cols-1 gap-5 sm:mt-16 sm:grid-cols-2 sm:gap-6 lg:mt-20 lg:grid-cols-3">
            {innovations.map((item) => (
              <article
                key={item.number}
                className="rounded-2xl border border-gray-800 bg-[#0D1525] p-6 transition duration-300 hover:border-blue-500 sm:p-8"
              >
                <p className="text-sm font-semibold text-blue-400">
                  {item.number}
                </p>

                <h2 className="mt-4 text-xl font-bold sm:mt-5 sm:text-2xl">
                  {item.title}
                </h2>

                <p className="mt-4 text-sm leading-7 text-gray-400 sm:mt-5">
                  {item.description}
                </p>

                <div className="mt-6 flex flex-wrap gap-2 sm:mt-7">
                  {item.technologies.map((technology) => (
                    <span
                      key={technology}
                      className="rounded-full border border-gray-700 px-3 py-2 text-xs text-gray-300"
                    >
                      {technology}
                    </span>
                  ))}
                </div>

                <p className="mt-7 text-xs font-semibold uppercase tracking-widest text-blue-400 sm:mt-8">
                  Coming Soon
                </p>
              </article>
            ))}
          </div>

          <div className="mt-14 rounded-2xl border border-blue-900 bg-[#0D1525] p-6 sm:mt-20 sm:p-10 md:p-14">
            <p className="text-xs font-semibold uppercase tracking-widest text-blue-400 sm:text-sm">
              Our Vision
            </p>

            <h2 className="mt-4 text-2xl font-bold sm:mt-5 sm:text-3xl">
              Connecting Intelligence with Engineering.
            </h2>

            <p className="mt-4 max-w-2xl text-sm leading-7 text-gray-400 sm:mt-5 sm:text-base sm:leading-8">
              We believe artificial intelligence can help
              transform how engineering information is accessed,
              how designs are developed and how infrastructure
              projects are delivered.
            </p>
          </div>
        </div>
      </section>
    </main>
  );
}
