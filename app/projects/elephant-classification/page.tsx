
import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Elephant Species Classification",
  description:
    "Explore HEISVED's computer vision project for classifying African and Asian elephants using deep learning.",
};

const technologies = [
  "Python",
  "TensorFlow",
  "Keras",
  "MobileNetV2",
  "Convolutional Neural Networks",
  "Streamlit",
];

const classes = [
  {
    number: "01",
    name: "African Elephant",
    description:
      "One of the two elephant species targeted by the image classification model.",
  },
  {
    number: "02",
    name: "Asian Elephant",
    description:
      "The second species the model is designed to recognize from images.",
  },
];

export default function ElephantClassificationPage() {
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
            Computer Vision · Project 02
          </p>

          <h1 className="max-w-4xl text-4xl font-bold leading-tight md:text-6xl">
            Elephant Species{" "}
            <span className="bg-gradient-to-r from-blue-400 to-cyan-300 bg-clip-text text-transparent">
              Classification
            </span>
          </h1>

          <p className="mt-7 max-w-3xl text-lg leading-relaxed text-gray-400">
            A deep learning computer vision application designed to classify
            elephant images into African and Asian elephant categories.
          </p>

          <div className="mt-9 flex flex-wrap gap-4">
            <a
              href="https://elephant-classification.onrender.com"
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-lg bg-blue-600 px-6 py-3 text-sm font-semibold transition hover:bg-blue-500"
            >
              Explore Live Application →
            </a>

            <a
              href="https://github.com/Vedline2547/Elephant-classification"
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
            Bringing Computer Vision to Wildlife Classification
          </h2>

          <p className="mt-6 leading-8 text-gray-400">
            This project explores the use of deep learning and computer
            vision to distinguish between African and Asian elephants
            using image data.
          </p>

          <p className="mt-5 leading-8 text-gray-400">
            The development process involved experimenting with
            Convolutional Neural Networks and transfer learning approaches
            to build an image classification model.
          </p>

          <p className="mt-5 leading-8 text-gray-400">
            The trained model is integrated into an interactive application
            where users can submit an image and obtain a predicted
            elephant category.
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
              <p className="text-sm text-gray-500">Approach</p>
              <p className="mt-1 font-medium">
                Deep Learning & Image Classification
              </p>
            </div>

            <div>
              <p className="text-sm text-gray-500">Model Architecture</p>
              <p className="mt-1 font-medium">
                CNN & MobileNetV2
              </p>
            </div>

            <div>
              <p className="text-sm text-gray-500">Deployment</p>
              <p className="mt-1 font-medium">Render</p>
            </div>
          </div>
        </div>

      </section>

      {/* Classification Classes */}
      <section className="border-y border-white/10 bg-[#0B1220]">
        <div className="mx-auto max-w-6xl px-6 py-20">

          <p className="mb-3 text-sm font-semibold uppercase tracking-widest text-cyan-400">
            Classification Categories
          </p>

          <h2 className="text-3xl font-bold">
            Two Elephant Species
          </h2>

          <p className="mt-4 max-w-2xl leading-7 text-gray-400">
            The classification application focuses on distinguishing
            between two elephant species.
          </p>

          <div className="mt-10 grid gap-6 md:grid-cols-2">

            {classes.map((item) => (
              <div
                key={item.number}
                className="rounded-2xl border border-white/10 bg-white/[0.03] p-8 transition hover:border-blue-500/50"
              >
                <span className="text-sm font-semibold text-blue-400">
                  {item.number}
                </span>

                <h3 className="mt-4 text-2xl font-bold">
                  {item.name}
                </h3>

                <p className="mt-4 leading-7 text-gray-400">
                  {item.description}
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
            Explore the Project
          </h2>

          <p className="mx-auto mt-4 max-w-2xl text-gray-400">
            Try the deployed classification application or explore
            the source code behind the project.
          </p>

          <div className="mt-8 flex flex-wrap justify-center gap-4">

            <a
              href="https://elephant-classification.onrender.com"
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-lg bg-blue-600 px-6 py-3 text-sm font-semibold transition hover:bg-blue-500"
            >
              Live Application →
            </a>

            <a
              href="https://github.com/Vedline2547/Elephant-classification"
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
