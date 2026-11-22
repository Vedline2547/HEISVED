
import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "AI & Machine Learning Services",
  description:
    "Explore HEISVED's machine learning, AI development, LLM, RAG and computer vision services for real-world challenges.",
};

const services = [
  {
    number: "01",
    title: "Machine Learning",
    description:
      "Developing predictive models and intelligent systems that transform data into actionable insights.",
    capabilities: [
      "Predictive modelling",
      "Classification and regression",
      "Model evaluation and optimization",
      "Data analysis",
    ],
  },
  {
    number: "02",
    title: "Artificial Intelligence",
    description:
      "Building AI-powered applications that automate processes and solve practical problems.",
    capabilities: [
      "AI application development",
      "Intelligent automation",
      "AI-powered workflows",
      "Custom AI solutions",
    ],
  },
  {
    number: "03",
    title: "LLMs & RAG Systems",
    description:
      "Creating intelligent knowledge assistants that retrieve information from documents and specialized knowledge bases.",
    capabilities: [
      "Retrieval-Augmented Generation",
      "Document intelligence",
      "AI chatbots",
      "Knowledge assistants",
    ],
  },
  {
    number: "04",
    title: "Computer Vision",
    description:
      "Developing systems that interpret and analyze visual information using machine learning.",
    capabilities: [
      "Image classification",
      "Object detection",
      "Visual recognition",
      "Image-based analysis",
    ],
  },
];

const projectFeatures = [
  "Radius Mean",
  "Texture Mean",
  "Perimeter Mean",
  "Smoothness Mean",
  "Compactness Mean",
];

const breastTechnologies = [
  "Python",
  "Scikit-learn",
  "Random Forest",
  "Machine Learning",
];

const elephantTechnologies = [
  "Python",
  "TensorFlow",
  "Keras",
  "MobileNetV2",
  "CNN",
  "Streamlit",
];

const solarTechnologies = [
  "Python",
  "TensorFlow",
  "Keras",
  "EfficientNet",
  "CNN",
  "Streamlit",
];

const solarCategories = [
  "Bird-drop",
  "Clean",
  "Dusty",
  "Electrical-Damage",
  "Physical-damage",
  "Snow-Covered",
];

const resumeGenieTechnologies = [
  "Python",
  "Streamlit",
  "LangChain",
  "Ollama",
  "Qwen2.5 3B",
  "LLMs",
  "Prompt Engineering",
];

export default function ServicesPage() {
  return (
    <main className="min-h-screen overflow-hidden bg-[#080D18] text-white">
      <section className="px-5 py-16 sm:px-8 sm:py-20 lg:px-20 lg:py-24">
        <div className="mx-auto max-w-6xl">
          <p className="text-xs font-semibold uppercase tracking-[0.25em] text-blue-400 sm:text-sm sm:tracking-[0.3em]">
            What We Offer
          </p>

          <h1 className="mt-5 max-w-4xl text-4xl font-bold leading-tight sm:mt-6 sm:text-5xl md:text-6xl">
            Intelligent Solutions.
            <span className="block text-blue-500">
              Real-World Impact.
            </span>
          </h1>

          <p className="mt-6 max-w-2xl text-base leading-7 text-gray-400 sm:mt-7 sm:text-lg sm:leading-8">
            HEISVED develops machine learning models,
            AI applications and intelligent systems
            designed to address real-world challenges.
          </p>

          <div className="mt-12 grid grid-cols-1 gap-5 sm:mt-16 sm:grid-cols-2 sm:gap-6 lg:mt-20">
            {services.map((service) => (
              <article
                key={service.number}
                className="rounded-2xl border border-gray-800 bg-[#0D1525] p-6 transition duration-300 hover:border-blue-500 sm:p-8"
              >
                <p className="text-sm font-semibold text-blue-400">
                  {service.number}
                </p>

                <h2 className="mt-4 text-xl font-bold sm:mt-5 sm:text-2xl">
                  {service.title}
                </h2>

                <p className="mt-4 text-sm leading-7 text-gray-400 sm:text-base">
                  {service.description}
                </p>

                <div className="mt-6 sm:mt-7">
                  <p className="mb-4 text-sm font-semibold text-gray-200">
                    Capabilities
                  </p>

                  <ul className="space-y-3">
                    {service.capabilities.map((item) => (
                      <li
                        key={item}
                        className="flex items-start gap-3 text-sm leading-6 text-gray-400"
                      >
                        <span className="mt-0.5 text-blue-500">✦</span>
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </article>
            ))}
          </div>

          {/* Featured Projects */}
          <section className="mt-20 sm:mt-28">
            <div className="mb-10">
              <p className="text-xs font-semibold uppercase tracking-[0.3em] text-blue-400 sm:text-sm">
                Our Work
              </p>

              <h2 className="mt-4 text-3xl font-bold sm:text-4xl">
                Featured Projects
              </h2>

              <p className="mt-4 max-w-2xl text-sm leading-7 text-gray-400 sm:text-base">
                Explore practical applications of machine learning
                and artificial intelligence developed through
                experimentation and engineering.
              </p>
            </div>

            {/* Project 01: Breast Cancer Prediction */}
            <article className="overflow-hidden rounded-2xl border border-gray-800 bg-[#0D1525] transition duration-300 hover:border-blue-500">
              <div className="grid grid-cols-1 lg:grid-cols-2">
                <div className="flex min-h-[280px] flex-col justify-center border-b border-gray-800 bg-gradient-to-br from-blue-950 via-[#101D35] to-[#080D18] p-8 sm:p-10 lg:border-b-0 lg:border-r">
                  <div className="mb-6 flex items-center gap-3">
                    <span className="rounded-full border border-blue-500/30 bg-blue-500/10 px-3 py-1 text-xs font-semibold text-blue-400">
                      MACHINE LEARNING
                    </span>
                    <span className="text-xs text-gray-500">
                      PROJECT 01
                    </span>
                  </div>

                  <div className="text-5xl font-bold tracking-tight text-white sm:text-6xl">
                    ML<span className="text-blue-500">.</span>
                  </div>

                  <p className="mt-4 text-sm text-gray-400">
                    Predictive modelling for healthcare insights
                  </p>
                </div>

                <div className="p-6 sm:p-9">
                  <h3 className="text-2xl font-bold sm:text-3xl">
                    Breast Cancer Prediction System
                  </h3>

                  <p className="mt-4 text-sm leading-7 text-gray-400 sm:text-base">
                    A machine learning application powered by a
                    Random Forest classifier that predicts breast
                    cancer outcomes using five diagnostic
                    measurements.
                  </p>

                  <div className="mt-7">
                    <p className="mb-3 text-sm font-semibold text-gray-200">
                      Model Input Features
                    </p>

                    <div className="flex flex-wrap gap-2">
                      {projectFeatures.map((feature) => (
                        <span
                          key={feature}
                          className="rounded-lg border border-gray-700 bg-[#080D18] px-3 py-2 text-xs text-gray-300"
                        >
                          {feature}
                        </span>
                      ))}
                    </div>
                  </div>

                  <div className="mt-7">
                    <p className="mb-3 text-sm font-semibold text-gray-200">
                      Technologies
                    </p>

                    <div className="flex flex-wrap gap-2">
                      {breastTechnologies.map((technology) => (
                        <span
                          key={technology}
                          className="text-xs font-medium text-blue-400"
                        >
                          {technology}
                        </span>
                      ))}
                    </div>
                  </div>

                  <div className="mt-8 flex flex-wrap gap-4">
                    <a
                      href="https://breast-cancer-prediction-v4pf.onrender.com"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="rounded-lg bg-blue-600 px-5 py-3 text-sm font-semibold transition hover:bg-blue-500"
                    >
                      Live Demo →
                    </a>

                    <a
                      href="https://github.com/Vedline2547/Breast-Cancer-Prediction"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="rounded-lg border border-gray-700 px-5 py-3 text-sm font-semibold text-gray-300 transition hover:border-blue-500 hover:text-white"
                    >
                      GitHub Repository
                    </a>
                  </div>

                  <p className="mt-6 text-xs leading-5 text-gray-500">
                    This project is for educational and predictive
                    modelling purposes. It is not a substitute for
                    professional medical diagnosis.
                  </p>
                </div>
              </div>
            </article>

            {/* Project 02: Elephant Classification */}
            <article className="mt-8 overflow-hidden rounded-2xl border border-gray-800 bg-[#0D1525] transition duration-300 hover:border-blue-500">
              <div className="grid grid-cols-1 lg:grid-cols-2">
                <div className="relative flex min-h-[300px] flex-col justify-center overflow-hidden border-b border-gray-800 bg-gradient-to-br from-cyan-950 via-[#101D35] to-[#080D18] p-8 sm:p-10 lg:border-b-0 lg:border-r">
                  <div className="absolute -right-12 -top-12 h-48 w-48 rounded-full border border-cyan-500/20" />
                  <div className="absolute -right-5 -top-5 h-36 w-36 rounded-full border border-blue-500/20" />

                  <div className="relative z-10">
                    <div className="mb-8 flex items-center gap-3">
                      <span className="rounded-full border border-cyan-500/30 bg-cyan-500/10 px-3 py-1 text-xs font-semibold text-cyan-400">
                        COMPUTER VISION
                      </span>
                      <span className="text-xs text-gray-500">
                        PROJECT 02
                      </span>
                    </div>

                    <div className="grid grid-cols-2 gap-3">
                      <div className="rounded-xl border border-cyan-500/30 bg-[#080D18]/70 p-4">
                        <span className="text-3xl">🐘</span>
                        <p className="mt-3 text-xs font-bold uppercase tracking-wider text-cyan-300">
                          African
                        </p>
                        <p className="mt-1 text-xs text-gray-500">
                          Elephant
                        </p>
                      </div>

                      <div className="rounded-xl border border-blue-500/30 bg-[#080D18]/70 p-4">
                        <span className="text-3xl">🐘</span>
                        <p className="mt-3 text-xs font-bold uppercase tracking-wider text-blue-300">
                          Asian
                        </p>
                        <p className="mt-1 text-xs text-gray-500">
                          Elephant
                        </p>
                      </div>
                    </div>

                    <div className="mt-5 flex items-center gap-2 text-xs text-cyan-300">
                      <span className="h-2 w-2 animate-pulse rounded-full bg-cyan-400" />
                      AI IMAGE CLASSIFICATION
                    </div>
                  </div>
                </div>

                <div className="p-6 sm:p-9">
                  <h3 className="text-2xl font-bold sm:text-3xl">
                    Elephant Species Classification
                  </h3>

                  <p className="mt-4 text-sm leading-7 text-gray-400 sm:text-base">
                    A computer vision application that uses deep
                    learning and transfer learning to classify
                    elephant images as either African or Asian
                    elephants.
                  </p>

                  <div className="mt-7">
                    <p className="mb-3 text-sm font-semibold text-gray-200">
                      Classification Categories
                    </p>

                    <div className="flex flex-wrap gap-2">
                      {["African Elephant", "Asian Elephant"].map((item) => (
                        <span
                          key={item}
                          className="rounded-lg border border-gray-700 bg-[#080D18] px-3 py-2 text-xs text-gray-300"
                        >
                          {item}
                        </span>
                      ))}
                    </div>
                  </div>

                  <div className="mt-7">
                    <p className="mb-3 text-sm font-semibold text-gray-200">
                      Technologies
                    </p>

                    <div className="flex flex-wrap gap-3">
                      {elephantTechnologies.map((technology) => (
                        <span
                          key={technology}
                          className="text-xs font-medium text-cyan-400"
                        >
                          {technology}
                        </span>
                      ))}
                    </div>
                  </div>

                  <div className="mt-8 flex flex-wrap gap-4">
                    <a
                      href="https://elephant-classification.onrender.com"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="rounded-lg bg-blue-600 px-5 py-3 text-sm font-semibold transition hover:bg-blue-500"
                    >
                      Live Demo →
                    </a>

                    <a
                      href="https://github.com/Vedline2547/Elephant-classification"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="rounded-lg border border-gray-700 px-5 py-3 text-sm font-semibold text-gray-300 transition hover:border-blue-500 hover:text-white"
                    >
                      GitHub Repository
                    </a>
                  </div>
                </div>
              </div>
            </article>

            {/* Project 03: Solar Panel Defect Classification */}
            <article className="mt-8 overflow-hidden rounded-2xl border border-gray-800 bg-[#0D1525] transition duration-300 hover:border-blue-500">
              <div className="grid grid-cols-1 lg:grid-cols-2">
                <div className="relative flex min-h-[300px] flex-col justify-center overflow-hidden border-b border-gray-800 bg-gradient-to-br from-amber-950 via-[#17243A] to-[#080D18] p-8 sm:p-10 lg:border-b-0 lg:border-r">
                  <div className="absolute -right-12 -top-12 h-48 w-48 rounded-full border border-amber-500/20" />
                  <div className="absolute -right-5 -top-5 h-36 w-36 rounded-full border border-yellow-500/20" />

                  <div className="relative z-10">
                    <div className="mb-8 flex items-center gap-3">
                      <span className="rounded-full border border-amber-500/30 bg-amber-500/10 px-3 py-1 text-xs font-semibold text-amber-400">
                        COMPUTER VISION
                      </span>
                      <span className="text-xs text-gray-500">
                        PROJECT 03
                      </span>
                    </div>

                    <div className="text-6xl">☀️</div>

                    <h3 className="mt-5 text-2xl font-bold text-white">
                      SOLAR AI
                    </h3>

                    <p className="mt-2 text-sm text-gray-400">
                      Intelligent solar panel defect detection
                    </p>

                    <div className="mt-6 flex items-center gap-2 text-xs text-amber-300">
                      <span className="h-2 w-2 animate-pulse rounded-full bg-amber-400" />
                      AI-POWERED IMAGE ANALYSIS
                    </div>
                  </div>
                </div>

                <div className="p-6 sm:p-9">
                  <h3 className="text-2xl font-bold sm:text-3xl">
                    Solar Panel Defect Classification
                  </h3>

                  <p className="mt-4 text-sm leading-7 text-gray-400 sm:text-base">
                    A deep learning application that uses an
                    EfficientNet model with transfer learning to
                    classify solar panel images into six categories,
                    helping identify different panel conditions
                    and defects.
                  </p>

                  <div className="mt-7">
                    <p className="mb-3 text-sm font-semibold text-gray-200">
                      Classification Categories
                    </p>

                    <div className="flex flex-wrap gap-2">
                      {solarCategories.map((item) => (
                        <span
                          key={item}
                          className="rounded-lg border border-gray-700 bg-[#080D18] px-3 py-2 text-xs text-gray-300"
                        >
                          {item}
                        </span>
                      ))}
                    </div>
                  </div>

                  <div className="mt-7">
                    <p className="mb-3 text-sm font-semibold text-gray-200">
                      Technologies
                    </p>

                    <div className="flex flex-wrap gap-3">
                      {solarTechnologies.map((technology) => (
                        <span
                          key={technology}
                          className="text-xs font-medium text-amber-400"
                        >
                          {technology}
                        </span>
                      ))}
                    </div>
                  </div>

                  <div className="mt-8 flex flex-wrap gap-4">
                    <a
                      href="https://solar-panel-classifier-yc0d.onrender.com"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="rounded-lg bg-blue-600 px-5 py-3 text-sm font-semibold transition hover:bg-blue-500"
                    >
                      Live Demo →
                    </a>

                    <a
                      href="https://github.com/Vedline2547/Solar-panel-defect-classification"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="rounded-lg border border-gray-700 px-5 py-3 text-sm font-semibold text-gray-300 transition hover:border-blue-500 hover:text-white"
                    >
                      GitHub Repository
                    </a>
                  </div>
                </div>
              </div>
            </article>

            {/* Project 04: Resume Genie */}
            <article className="mt-8 overflow-hidden rounded-2xl border border-gray-800 bg-[#0D1525] transition duration-300 hover:border-blue-500">
              <div className="grid grid-cols-1 lg:grid-cols-2">
                <div className="relative flex min-h-[300px] flex-col justify-center overflow-hidden border-b border-gray-800 bg-gradient-to-br from-purple-950 via-[#17203A] to-[#080D18] p-8 sm:p-10 lg:border-b-0 lg:border-r">
                  <div className="absolute -right-12 -top-12 h-48 w-48 rounded-full border border-purple-500/20" />
                  <div className="absolute -right-5 -top-5 h-36 w-36 rounded-full border border-blue-500/20" />

                  <div className="relative z-10">
                    <div className="mb-8 flex items-center gap-3">
                      <span className="rounded-full border border-purple-500/30 bg-purple-500/10 px-3 py-1 text-xs font-semibold text-purple-400">
                        AI & LLM SYSTEMS
                      </span>
                      <span className="text-xs text-gray-500">
                        PROJECT 04
                      </span>
                    </div>

                    <div className="text-5xl font-bold tracking-tight text-white sm:text-6xl">
                      RESUME<span className="text-purple-500">.</span>
                    </div>

                    <h3 className="mt-4 text-2xl font-bold">
                      GENIE
                    </h3>

                    <p className="mt-3 text-sm text-gray-400">
                      Intelligent AI-powered career assistance
                    </p>

                    <div className="mt-6 flex items-center gap-2 text-xs text-purple-300">
                      <span className="h-2 w-2 animate-pulse rounded-full bg-purple-400" />
                      POWERED BY LARGE LANGUAGE MODELS
                    </div>
                  </div>
                </div>

                <div className="p-6 sm:p-9">
                  <h3 className="text-2xl font-bold sm:text-3xl">
                    Resume Genie – AI Career Assistant
                  </h3>

                  <p className="mt-4 text-sm leading-7 text-gray-400 sm:text-base">
                    An AI-powered career assistant that leverages
                    Large Language Models to analyze resumes,
                    evaluate job compatibility, provide personalized
                    career guidance, and generate tailored
                    professional cover letters.
                  </p>

                  <div className="mt-7">
                    <p className="mb-3 text-sm font-semibold text-gray-200">
                      Key Capabilities
                    </p>

                    <div className="flex flex-wrap gap-2">
                      {[
                        "AI Resume Analysis",
                        "ATS Job Matching",
                        "Career Coaching",
                        "Cover Letter Generation",
                        "Skills Gap Analysis",
                      ].map((item) => (
                        <span
                          key={item}
                          className="rounded-lg border border-gray-700 bg-[#080D18] px-3 py-2 text-xs text-gray-300"
                        >
                          {item}
                        </span>
                      ))}
                    </div>
                  </div>

                  <div className="mt-7">
                    <p className="mb-3 text-sm font-semibold text-gray-200">
                      Technologies
                    </p>

                    <div className="flex flex-wrap gap-3">
                      {resumeGenieTechnologies.map((technology) => (
                        <span
                          key={technology}
                          className="text-xs font-medium text-purple-400"
                        >
                          {technology}
                        </span>
                      ))}
                    </div>
                  </div>

                  <div className="mt-8 flex flex-wrap gap-4">
                    <a
                      href="http://15.188.26.4:8501/"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="rounded-lg bg-blue-600 px-5 py-3 text-sm font-semibold transition hover:bg-blue-500"
                    >
                      Live Demo →
                    </a>

                    <a
                      href="https://github.com/Vedline2547/Resume-genie"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="rounded-lg border border-gray-700 px-5 py-3 text-sm font-semibold text-gray-300 transition hover:border-blue-500 hover:text-white"
                    >
                      GitHub Repository
                    </a>
                  </div>
                </div>
              </div>
            </article>
          </section>

          {/* Contact CTA */}
          <div className="mt-14 rounded-2xl border border-blue-900 bg-[#0D1525] px-6 py-10 text-center sm:mt-20 sm:px-10 sm:py-14">
            <h2 className="text-2xl font-bold sm:text-3xl">
              Have a problem we can solve?
            </h2>

            <p className="mx-auto mt-4 max-w-xl text-sm leading-7 text-gray-400 sm:text-base">
              Let's explore how artificial intelligence
              and machine learning can support your project.
            </p>

            <Link
              href="/contact"
              className="mt-7 inline-block rounded-lg bg-blue-600 px-7 py-3.5 text-sm font-medium transition hover:bg-blue-500 sm:mt-8 sm:py-4 sm:text-base"
            >
              Contact HEISVED
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
