
import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Solar Panel Defect Classification",
  description:
    "Explore HEISVED's computer vision project using deep learning to classify solar panel conditions and defects.",
};

const technologies = [
  "Python",
  "TensorFlow",
  "Keras",
  "EfficientNet",
  "Convolutional Neural Networks",
  "Streamlit",
];

const classes = [
  "Bird-drop",
  "Clean",
  "Dusty",
  "Electrical-Damage",
  "Physical-damage",
  "Snow-Covered",
];

export default function SolarPanelClassificationPage() {
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
            Computer Vision · Project 03
          </p>

          <h1 className="max-w-4xl text-4xl font-bold leading-tight md:text-6xl">
            Solar Panel{" "}
            <span className="bg-gradient-to-r from-blue-400 to-cyan-300 bg-clip-text text-transparent">
              Defect Classification
            </span>
          </h1>

          <p className="mt-7 max-w-3xl text-lg leading-relaxed text-gray-400">
            A deep learning computer vision application designed to
            classify solar panel images into different condition and
            defect categories.
          </p>

          <div className="mt-9 flex flex-wrap gap-4">
            <a
              href="https://solar-panel-classifier-yc0d.onrender.com"
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-lg bg-blue-600 px-6 py-3 text-sm font-semibold transition hover:bg-blue-500"
            >
              Explore Live Application →
            </a>

            <a
              href="https://github.com/Vedline2547/Solar-panel-defect-classification"
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
            Applying AI to Solar Panel Inspection
          </h2>

          <p className="mt-6 leading-8 text-gray-400">
            This project explores the use of computer vision and deep
            learning for identifying different solar panel conditions
            from images.
          </p>

          <p className="mt-5 leading-8 text-gray-400">
            The classification system uses an EfficientNet-based
            architecture to learn visual patterns associated with
            different panel conditions and defect categories.
          </p>

          <p className="mt-5 leading-8 text-gray-400">
            The trained model is integrated into a Streamlit application,
            allowing users to submit solar panel images and obtain
            predicted classifications.
          </p>
        </div>

        <div className="rounded-2xl border border-white/10 bg-white/[0.03] p-8">

          <h3 className="text-xl font-semibold">
            Project Details
          </h3>

          <div className="mt-7 space-y-6">
            <div>
              <p className="text-sm text-gray-500">Project Category</p>
              <p className="mt-1 font-medium">Computer Vision</p>
            </div>

            <div>
              <p className="text-sm text-gray-500">Model Architecture</p>
              <p className="mt-1 font-medium">EfficientNet</p>
            </div>

            <div>
              <p className="text-sm text-gray-500">Dataset</p>
              <p className="mt-1 font-medium">885 Images</p>
            </div>

            <div>
              <p className="text-sm text-gray-500">Training Images</p>
              <p className="mt-1 font-medium">708 Images</p>
            </div>

            <div>
              <p className="text-sm text-gray-500">Validation Images</p>
              <p className="mt-1 font-medium">177 Images</p>
            </div>

            <div>
              <p className="text-sm text-gray-500">Deployment</p>
              <p className="mt-1 font-medium">Render</p>
            </div>
          </div>
        </div>

      </section>

      {/* Classification Categories */}
      <section className="border-y border-white/10 bg-[#0B1220]">
        <div className="mx-auto max-w-6xl px-6 py-20">

          <p className="mb-3 text-sm font-semibold uppercase tracking-widest text-cyan-400">
            Classification Categories
          </p>

          <h2 className="text-3xl font-bold">
            Six Solar Panel Conditions
          </h2>

          <p className="mt-4 max-w-2xl leading-7 text-gray-400">
            The model is designed to classify solar panel images
            into six distinct categories.
          </p>

          <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">

            {classes.map((item, index) => (
              <div
                key={item}
                className="rounded-xl border border-white/10 bg-white/[0.03] p-6 transition hover:border-blue-500/50"
              >
                <span className="text-sm font-semibold text-blue-400">
                  0{index + 1}
                </span>

                <h3 className="mt-3 font-semibold">
                  {item}
                </h3>
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
            Explore the Project
          </h2>

          <p className="mx-auto mt-4 max-w-2xl text-gray-400">
            Explore the deployed solar panel classification
            application or examine its implementation on GitHub.
          </p>

          <div className="mt-8 flex flex-wrap justify-center gap-4">

            <a
              href="https://solar-panel-classifier-yc0d.onrender.com"
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-lg bg-blue-600 px-6 py-3 text-sm font-semibold transition hover:bg-blue-500"
            >
              Live Application →
            </a>

            <a
              href="https://github.com/Vedline2547/Solar-panel-defect-classification"
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
