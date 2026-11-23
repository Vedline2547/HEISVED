
import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "AI, Machine Learning & Software Development Services in Kenya",
  description:
    "Explore HEISVED's AI development, machine learning, computer vision, RAG systems and custom software development services. Building intelligent technology solutions from Kenya for Africa and beyond.",
};

const services = [
  {
    number: "01",
    title: "Machine Learning & Predictive Analytics",
    description:
      "We develop data-driven machine learning solutions that help organizations identify patterns, make informed decisions and extract meaningful insights from their data.",
    capabilities: [
      "Predictive modelling",
      "Classification and regression",
      "Model evaluation and optimization",
      "Data analysis and feature engineering",
    ],
  },
  {
    number: "02",
    title: "Artificial Intelligence Development",
    description:
      "We build AI-powered applications and intelligent systems designed to automate processes, improve workflows and address practical business challenges.",
    capabilities: [
      "AI application development",
      "Intelligent automation",
      "AI agents and workflows",
      "Custom AI integrations",
    ],
  },
  {
    number: "03",
    title: "LLMs & RAG Systems",
    description:
      "We develop intelligent knowledge systems that use large language models and retrieval-augmented generation to make organizational information more accessible and useful.",
    capabilities: [
      "Retrieval-Augmented Generation",
      "Document intelligence",
      "AI chatbots and assistants",
      "Knowledge management systems",
    ],
  },
  {
    number: "04",
    title: "Computer Vision",
    description:
      "We develop computer vision applications that interpret visual information, recognize patterns and classify images using deep learning.",
    capabilities: [
      "Image classification",
      "Object detection",
      "Visual recognition",
      "Image-based analysis",
    ],
  },
  {
    number: "05",
    title: "Custom Software Development",
    description:
      "We design and develop software applications tailored to specific business requirements, from web platforms and management systems to intelligent digital products.",
    capabilities: [
      "Web application development",
      "Business management systems",
      "API development and integration",
      "AI-powered software applications",
    ],
  },
];

const projects = [
  {
    number: "01",
    slug: "breast-cancer-prediction",
    category: "MACHINE LEARNING",
    title: "Breast Cancer Prediction System",
    description:
      "A machine learning application using a Random Forest classifier to predict breast cancer outcomes from diagnostic measurements. The project demonstrates predictive modelling, feature processing and the deployment of a machine learning model through a web application.",
    visual: "ML.",
    visualDescription: "Predictive modelling for healthcare insights",
    gradient: "from-blue-950 via-[#101D35] to-[#080D18]",
    technologies: [
      "Python",
      "Scikit-learn",
      "Random Forest",
      "Machine Learning",
    ],
    features: [
      "Radius Mean",
      "Texture Mean",
      "Perimeter Mean",
      "Smoothness Mean",
      "Compactness Mean",
    ],
    demo: "https://breast-cancer-prediction-v4pf.onrender.com",
    github: "https://github.com/Vedline2547/Breast-Cancer-Prediction",
    disclaimer:
      "This project is for educational and predictive modelling purposes. It is not a substitute for professional medical diagnosis.",
  },
  {
    number: "02",
    slug: "elephant-classification",
    category: "COMPUTER VISION",
    title: "Elephant Species Classification",
    description:
      "A deep learning application that uses convolutional neural networks and transfer learning to distinguish between African and Asian elephants from images.",
    visual: "🐘",
    visualDescription: "African and Asian elephant recognition",
    gradient: "from-cyan-950 via-[#101D35] to-[#080D18]",
    technologies: [
      "Python",
      "TensorFlow",
      "Keras",
      "MobileNetV2",
      "CNN",
      "Streamlit",
    ],
    features: ["African Elephant", "Asian Elephant"],
    demo: "https://elephant-classification.onrender.com",
    github: "https://github.com/Vedline2547/Elephant-classification",
  },
  {
    number: "03",
    slug: "solar-panel-classification",
    category: "COMPUTER VISION",
    title: "Solar Panel Defect Classification",
    description:
      "A deep learning application using an EfficientNet model and transfer learning to classify solar panel images into six condition categories, including different types of damage and surface conditions.",
    visual: "☀️",
    visualDescription: "AI-powered solar panel image analysis",
    gradient: "from-amber-950 via-[#17243A] to-[#080D18]",
    technologies: [
      "Python",
      "TensorFlow",
      "Keras",
      "EfficientNet",
      "CNN",
      "Streamlit",
    ],
    features: [
      "Bird-drop",
      "Clean",
      "Dusty",
      "Electrical-Damage",
      "Physical-damage",
      "Snow-Covered",
    ],
    demo: "https://solar-panel-classifier-yc0d.onrender.com",
    github:
      "https://github.com/Vedline2547/Solar-panel-defect-classification",
  },
  {
    number: "04",
    slug: "resume-genie",
    category: "AI & LLM SYSTEMS",
    title: "Resume Genie – AI Career Assistant",
    description:
      "An AI-powered career assistance application that uses large language models to analyze resumes, assess job compatibility, provide personalized career guidance and generate tailored cover letters.",
    visual: "RESUME.",
    visualDescription: "Intelligent AI-powered career assistance",
    gradient: "from-purple-950 via-[#17203A] to-[#080D18]",
    technologies: [
      "Python",
      "Streamlit",
      "LangChain",
      "Ollama",
      "Qwen2.5 3B",
      "LLMs",
      "Prompt Engineering",
    ],
    features: [
      "AI Resume Analysis",
      "ATS Job Matching",
      "Career Coaching",
      "Cover Letter Generation",
      "Skills Gap Analysis",
    ],
    demo: "http://15.188.26.4:8501/",
    github: "https://github.com/Vedline2547/Resume-genie",
  },
];

export default function ServicesPage() {
  return (
    <main className="min-h-screen overflow-hidden bg-[#080D18] text-white">
      {/* Hero */}
      <section className="px-5 py-20 sm:px-8 sm:py-24 lg:px-20 lg:py-28">
        <div className="mx-auto max-w-6xl">
          <p className="text-xs font-semibold uppercase tracking-[0.3em] text-blue-400 sm:text-sm">
            Our Services
          </p>

          <h1 className="mt-6 max-w-4xl text-4xl font-bold leading-tight sm:text-5xl md:text-6xl lg:text-7xl">
            Technology That
            <span className="block text-blue-500">
              Solves Real Problems.
            </span>
          </h1>

          <p className="mt-7 max-w-2xl text-base leading-8 text-gray-400 sm:text-lg">
            HEISVED develops intelligent software, machine learning
            solutions and digital systems that help businesses and
            organizations address real-world challenges.
          </p>

          <div className="mt-10 flex flex-wrap gap-4">
            <Link
              href="/contact"
              className="rounded-lg bg-blue-600 px-7 py-3.5 text-sm font-semibold transition hover:bg-blue-500"
            >
              Discuss a Project
            </Link>

            <a
              href="#services"
              className="rounded-lg border border-gray-700 px-7 py-3.5 text-sm font-semibold text-gray-300 transition hover:border-blue-500 hover:text-white"
            >
              Explore Our Services
            </a>
          </div>
        </div>
      </section>

      {/* Services */}
      <section
        id="services"
        className="border-t border-gray-800/70 bg-[#0A1120] px-5 py-20 sm:px-8 sm:py-24 lg:px-20"
      >
        <div className="mx-auto max-w-6xl">
          <div className="max-w-2xl">
            <p className="text-xs font-semibold uppercase tracking-[0.3em] text-blue-400">
              What We Do
            </p>

            <h2 className="mt-5 text-3xl font-bold sm:text-4xl">
              Solutions Built Around Your Needs
            </h2>

            <p className="mt-5 leading-8 text-gray-400">
              From intelligent applications to tailored software
              platforms, we bring together technical expertise
              and modern technologies to develop practical solutions.
            </p>
          </div>

          <div className="mt-12 grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
            {services.map((service) => (
              <article
                key={service.number}
                className="rounded-2xl border border-gray-800 bg-[#0D1525] p-7 transition duration-300 hover:-translate-y-1 hover:border-blue-500 sm:p-8"
              >
                <p className="text-sm font-semibold text-blue-400">
                  {service.number}
                </p>

                <h3 className="mt-5 text-xl font-bold sm:text-2xl">
                  {service.title}
                </h3>

                <p className="mt-5 text-sm leading-7 text-gray-400">
                  {service.description}
                </p>

                <div className="mt-7 border-t border-gray-800 pt-6">
                  <p className="mb-4 text-xs font-semibold uppercase tracking-wider text-gray-500">
                    Capabilities
                  </p>

                  <ul className="space-y-3">
                    {service.capabilities.map((item) => (
                      <li
                        key={item}
                        className="flex items-start gap-3 text-sm leading-6 text-gray-400"
                      >
                        <span className="text-blue-500">✦</span>
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Projects */}
      <section className="px-5 py-20 sm:px-8 sm:py-24 lg:px-20">
        <div className="mx-auto max-w-6xl">
          <div className="mb-12 max-w-2xl">
            <p className="text-xs font-semibold uppercase tracking-[0.3em] text-blue-400">
              Our Work
            </p>

            <h2 className="mt-5 text-3xl font-bold sm:text-4xl">
              Featured Projects
            </h2>

            <p className="mt-5 leading-8 text-gray-400">
              Explore selected applications that demonstrate
              our work across machine learning, artificial
              intelligence and computer vision.
            </p>
          </div>

          <div className="space-y-8">
            {projects.map((project) => (
              <article
                key={project.number}
                className="overflow-hidden rounded-2xl border border-gray-800 bg-[#0D1525] transition duration-300 hover:border-blue-500"
              >
                <div className="grid grid-cols-1 lg:grid-cols-2">
                  <div
                    className={`flex min-h-[280px] flex-col justify-center border-b border-gray-800 bg-gradient-to-br ${project.gradient} p-8 sm:p-10 lg:border-b-0 lg:border-r`}
                  >
                    <div className="mb-8 flex items-center gap-3">
                      <span className="rounded-full border border-blue-500/30 bg-blue-500/10 px-3 py-1 text-xs font-semibold text-blue-400">
                        {project.category}
                      </span>

                      <span className="text-xs text-gray-500">
                        PROJECT {project.number}
                      </span>
                    </div>

                    <div className="text-5xl font-bold tracking-tight text-white sm:text-6xl">
                      {project.visual}
                      {project.visual.endsWith(".") && (
                        <span className="text-blue-500"> </span>
                      )}
                    </div>

                    <p className="mt-5 text-sm text-gray-400">
                      {project.visualDescription}
                    </p>
                  </div>

                  <div className="p-6 sm:p-9">
                    <h3 className="text-2xl font-bold sm:text-3xl">
                      {project.title}
                    </h3>

                    <p className="mt-4 text-sm leading-7 text-gray-400 sm:text-base">
                      {project.description}
                    </p>

                    <div className="mt-7">
                      <p className="mb-3 text-sm font-semibold text-gray-200">
                        {project.number === "01"
                          ? "Model Input Features"
                          : project.number === "04"
                            ? "Key Capabilities"
                            : "Classification Categories"}
                      </p>

                      <div className="flex flex-wrap gap-2">
                        {project.features.map((feature) => (
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

                      <div className="flex flex-wrap gap-3">
                        {project.technologies.map((technology) => (
                          <span
                            key={technology}
                            className="text-xs font-medium text-blue-400"
                          >
                            {technology}
                          </span>
                        ))}
                      </div>
                    </div>

                    <div className="mt-8 flex flex-wrap gap-3">
                      <Link
                        href={`/projects/${project.slug}`}
                        className="rounded-lg bg-blue-600 px-5 py-3 text-sm font-semibold transition hover:bg-blue-500"
                      >
                        View Project →
                      </Link>

                      <a
                        href={project.demo}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="rounded-lg border border-gray-700 px-5 py-3 text-sm font-semibold text-gray-300 transition hover:border-blue-500 hover:text-white"
                      >
                        Live Demo
                      </a>

                      <a
                        href={project.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="rounded-lg border border-gray-700 px-5 py-3 text-sm font-semibold text-gray-300 transition hover:border-blue-500 hover:text-white"
                      >
                        GitHub Repository
                      </a>
                    </div>

                    {project.disclaimer && (
                      <p className="mt-6 text-xs leading-5 text-gray-500">
                        {project.disclaimer}
                      </p>
                    )}
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Contact CTA */}
      <section className="border-t border-gray-800/70 bg-[#0A1120] px-5 py-20 text-center sm:px-8 sm:py-24 lg:px-20">
        <div className="mx-auto max-w-3xl">
          <p className="text-xs font-semibold uppercase tracking-[0.3em] text-blue-400">
            Work With HEISVED
          </p>

          <h2 className="mt-5 text-3xl font-bold sm:text-4xl">
            Have a Challenge We Can Help Solve?
          </h2>

          <p className="mx-auto mt-5 max-w-xl leading-8 text-gray-400">
            Whether you need a machine learning solution,
            an AI-powered application or custom software,
            let's discuss how we can bring your idea to life.
          </p>

          <Link
            href="/contact"
            className="mt-9 inline-block rounded-lg bg-blue-600 px-8 py-4 text-sm font-semibold transition hover:bg-blue-500"
          >
            Start a Conversation
          </Link>
        </div>
      </section>
    </main>
  );
}
