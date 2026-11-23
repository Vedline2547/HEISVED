
import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Resume Genie | AI Resume Analyzer & Career Assistant | HEISVED",
  description:
    "Discover Resume Genie, an AI-powered career assistant built with Python, LangChain, Ollama and Qwen2.5 3B. Explore AI resume analysis, ATS job matching, career coaching, cover letter generation and skills gap analysis.",
};

const technologies = [
  "Python",
  "Streamlit",
  "LangChain",
  "Ollama",
  "Qwen2.5 3B",
  "Large Language Models",
  "Prompt Engineering",
];

const features = [
  {
    number: "01",
    title: "AI Resume Analysis",
    description:
      "Uses AI to examine resume content and provide insights into its presentation and relevance.",
  },
  {
    number: "02",
    title: "ATS Job Matching",
    description:
      "Helps users assess how their resumes align with job descriptions and role requirements.",
  },
  {
    number: "03",
    title: "Career Coaching",
    description:
      "Provides AI-assisted career guidance to help users think through their professional development.",
  },
  {
    number: "04",
    title: "Cover Letter Generation",
    description:
      "Assists users in generating tailored cover letters for job applications.",
  },
  {
    number: "05",
    title: "Skills Gap Analysis",
    description:
      "Helps identify skills that may need further development based on career goals and job requirements.",
  },
];

export default function ResumeGeniePage() {
  return (
    <main className="min-h-screen overflow-hidden bg-[#080D18] text-white">

      {/* Hero */}
      <section className="relative overflow-hidden border-b border-white/10">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(59,130,246,0.16),transparent_45%)]" />

        <div className="relative mx-auto max-w-6xl px-6 py-24">

          <Link
            href="/services"
            className="mb-10 inline-flex items-center gap-2 text-sm text-blue-400 transition hover:text-cyan-300"
          >
            ← Back to Services
          </Link>

          <p className="mb-5 text-sm font-semibold uppercase tracking-[0.25em] text-cyan-400">
            AI Development · Project 04
          </p>

          <h1 className="max-w-4xl text-4xl font-bold leading-tight md:text-6xl">
            Resume Genie{" "}
            <span className="bg-gradient-to-r from-blue-400 to-cyan-300 bg-clip-text text-transparent">
              AI Career Assistant
            </span>
          </h1>

          <p className="mt-7 max-w-3xl text-lg leading-relaxed text-gray-400">
            An AI-powered career assistant designed to help users analyze
            resumes, assess job alignment, generate cover letters and
            explore career development opportunities.
          </p>

          <div className="mt-9 flex flex-wrap gap-4">

            <a
              href="http://15.188.26.4:8501/"
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-lg bg-blue-600 px-6 py-3 text-sm font-semibold transition hover:bg-blue-500"
            >
              Explore Live Application →
            </a>

            <a
              href="https://github.com/Vedline2547/Resume-genie"
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-lg border border-white/20 px-6 py-3 text-sm font-semibold transition hover:border-cyan-400 hover:text-cyan-300"
            >
              View Source Code
            </a>

          </div>
        </div>
      </section>

      {/* Overview */}
      <section className="mx-auto grid max-w-6xl gap-12 px-6 py-20 md:grid-cols-2">

        <div>
          <p className="mb-3 text-sm font-semibold uppercase tracking-widest text-blue-400">
            Project Overview
          </p>

          <h2 className="text-3xl font-bold">
            Bringing Generative AI into Career Development
          </h2>

          <p className="mt-6 leading-8 text-gray-400">
            Resume Genie explores how large language models can be used
            to support everyday career development tasks.
          </p>

          <p className="mt-5 leading-8 text-gray-400">
            Built using Python, LangChain and Ollama, the application
            integrates an LLM-based workflow to support resume analysis,
            job matching, career guidance and content generation.
          </p>

          <p className="mt-5 leading-8 text-gray-400">
            The application uses Qwen2.5 3B through Ollama, bringing
            locally hosted language model capabilities into an
            interactive Streamlit interface.
          </p>
        </div>

        <div className="rounded-2xl border border-white/10 bg-white/[0.03] p-8">

          <h3 className="text-xl font-semibold">
            Project Details
          </h3>

          <div className="mt-7 space-y-6">

            <div>
              <p className="text-sm text-gray-500">Project Category</p>
              <p className="mt-1 font-medium">
                AI Application Development
              </p>
            </div>

            <div>
              <p className="text-sm text-gray-500">AI Architecture</p>
              <p className="mt-1 font-medium">
                Large Language Model
              </p>
            </div>

            <div>
              <p className="text-sm text-gray-500">Language Model</p>
              <p className="mt-1 font-medium">Qwen2.5 3B</p>
            </div>

            <div>
              <p className="text-sm text-gray-500">LLM Runtime</p>
              <p className="mt-1 font-medium">Ollama</p>
            </div>

            <div>
              <p className="text-sm text-gray-500">Application Framework</p>
              <p className="mt-1 font-medium">Streamlit</p>
            </div>

          </div>
        </div>

      </section>

      {/* Features */}
      <section className="border-y border-white/10 bg-[#0B1220]">

        <div className="mx-auto max-w-6xl px-6 py-20">

          <p className="mb-3 text-sm font-semibold uppercase tracking-widest text-cyan-400">
            Core Capabilities
          </p>

          <h2 className="text-3xl font-bold">
            What Resume Genie Offers
          </h2>

          <p className="mt-4 max-w-2xl leading-7 text-gray-400">
            The application brings together several AI-assisted
            capabilities designed to support the job search and
            career development process.
          </p>

          <div className="mt-10 grid gap-5 md:grid-cols-2 lg:grid-cols-3">

            {features.map((feature) => (
              <div
                key={feature.number}
                className="rounded-xl border border-white/10 bg-white/[0.03] p-7 transition hover:border-blue-500/50"
              >
                <span className="text-sm font-semibold text-blue-400">
                  {feature.number}
                </span>

                <h3 className="mt-4 text-lg font-semibold">
                  {feature.title}
                </h3>

                <p className="mt-3 text-sm leading-7 text-gray-400">
                  {feature.description}
                </p>
              </div>
            ))}

          </div>
        </div>

      </section>

      {/* Technologies */}
      <section className="mx-auto max-w-6xl px-6 py-20">

        <p className="mb-3 text-sm font-semibold uppercase tracking-widest text-blue-400">
          Technology Stack
        </p>

        <h2 className="text-3xl font-bold">
          Tools & Technologies
        </h2>

        <div className="mt-8 flex flex-wrap gap-3">

          {technologies.map((technology) => (
            <span
              key={technology}
              className="rounded-full border border-blue-500/30 bg-blue-500/10 px-5 py-3 text-sm text-blue-200"
            >
              {technology}
            </span>
          ))}

        </div>
      </section>

      {/* Closing CTA */}
      <section className="border-t border-white/10 bg-[#0B1220]">

        <div className="mx-auto max-w-6xl px-6 py-16 text-center">

          <h2 className="text-3xl font-bold">
            Explore Resume Genie
          </h2>

          <p className="mx-auto mt-4 max-w-2xl text-gray-400">
            Explore the application or examine its implementation
            in the GitHub repository.
          </p>

          <div className="mt-8 flex flex-wrap justify-center gap-4">

            <a
              href="http://15.188.26.4:8501/"
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-lg bg-blue-600 px-6 py-3 text-sm font-semibold transition hover:bg-blue-500"
            >
              Live Application →
            </a>

            <a
              href="https://github.com/Vedline2547/Resume-genie"
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-lg border border-white/20 px-6 py-3 text-sm font-semibold transition hover:border-cyan-400"
            >
              GitHub Repository
            </a>

          </div>

          <div className="mt-14">
            <Link
              href="/services"
              className="text-sm text-gray-400 transition hover:text-cyan-300"
            >
              ← Explore More HEISVED Projects
            </Link>
          </div>

        </div>
      </section>

    </main>
  );
}
