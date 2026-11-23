
import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Breast Cancer Prediction Using Machine Learning | HEISVED",
  description:
    "Explore HEISVED's breast cancer prediction application built with Python, Scikit-learn and a Random Forest classifier. Discover the machine learning approach and interactive demo.",
};

const inputs = [
  "Radius Mean",
  "Texture Mean",
  "Perimeter Mean",
  "Smoothness Mean",
  "Compactness Mean",
];

const technologies = [
  "Python",
  "Scikit-learn",
  "Random Forest",
  "Machine Learning",
];

export default function BreastCancerPredictionPage() {
  return (
    <main className="min-h-screen overflow-hidden bg-[#080D18] text-white">

      {/* Hero Section */}
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
            Machine Learning · Project 01
          </p>

          <h1 className="max-w-4xl text-4xl font-bold leading-tight md:text-6xl">
            Breast Cancer{" "}
            <span className="bg-gradient-to-r from-blue-400 to-cyan-300 bg-clip-text text-transparent">
              Prediction System
            </span>
          </h1>

          <p className="mt-7 max-w-3xl text-lg leading-relaxed text-gray-400">
            An interactive machine learning application that uses diagnostic
            measurements and a Random Forest classifier to generate breast
            cancer predictions.
          </p>

          <div className="mt-9 flex flex-wrap gap-4">

            <a
              href="https://breast-cancer-prediction-v4pf.onrender.com"
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-lg bg-blue-600 px-6 py-3 text-sm font-semibold transition hover:bg-blue-500"
            >
              Explore Live Application →
            </a>

            <a
              href="https://github.com/Vedline2547/Breast-Cancer-Prediction"
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-lg border border-white/20 px-6 py-3 text-sm font-semibold transition hover:border-cyan-400 hover:text-cyan-300"
            >
              View Source Code
            </a>

          </div>
        </div>
      </section>

      {/* Project Overview */}
      <section className="mx-auto grid max-w-6xl gap-12 px-6 py-20 md:grid-cols-2">

        <div>
          <p className="mb-3 text-sm font-semibold uppercase tracking-widest text-blue-400">
            Project Overview
          </p>

          <h2 className="text-3xl font-bold">
            Applying Machine Learning to Healthcare Data
          </h2>

          <p className="mt-6 leading-8 text-gray-400">
            This project explores the application of supervised machine
            learning in breast cancer prediction. It uses diagnostic
            measurements as input features and a Random Forest classifier
            trained to identify patterns in the data.
          </p>

          <p className="mt-5 leading-8 text-gray-400">
            The project demonstrates how machine learning models can be
            integrated into an interactive application, making predictive
            modelling accessible through a simple user interface.
          </p>
        </div>

        <div className="rounded-2xl border border-white/10 bg-white/[0.03] p-8">

          <h3 className="text-xl font-semibold">
            Project Details
          </h3>

          <div className="mt-7 space-y-6">

            <div>
              <p className="text-sm text-gray-500">Model</p>
              <p className="mt-1 font-medium">
                Random Forest Classifier
              </p>
            </div>

            <div>
              <p className="text-sm text-gray-500">
                Number of Estimators
              </p>
              <p className="mt-1 font-medium">500 Trees</p>
            </div>

            <div>
              <p className="text-sm text-gray-500">
                Application Type
              </p>
              <p className="mt-1 font-medium">
                Machine Learning Prediction
              </p>
            </div>

            <div>
              <p className="text-sm text-gray-500">Deployment</p>
              <p className="mt-1 font-medium">Render</p>
            </div>

          </div>
        </div>

      </section>

      {/* Input Features */}
      <section className="border-y border-white/10 bg-[#0B1220]">

        <div className="mx-auto max-w-6xl px-6 py-20">

          <p className="mb-3 text-sm font-semibold uppercase tracking-widest text-cyan-400">
            Model Inputs
          </p>

          <h2 className="text-3xl font-bold">
            Diagnostic Measurements
          </h2>

          <p className="mt-4 max-w-2xl leading-7 text-gray-400">
            The application uses five diagnostic measurements as input
            features for its prediction process.
          </p>

          <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">

            {inputs.map((input, index) => (
              <div
                key={input}
                className="rounded-xl border border-white/10 bg-white/[0.03] p-6 transition hover:border-blue-500/50"
              >
                <span className="text-sm font-semibold text-blue-400">
                  0{index + 1}
                </span>

                <h3 className="mt-3 font-semibold">
                  {input}
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

      {/* Medical Disclaimer */}
      <section className="mx-auto max-w-6xl px-6 pb-16">

        <div className="rounded-xl border border-amber-400/20 bg-amber-400/5 p-6">

          <h3 className="font-semibold text-amber-300">
            Important Medical Disclaimer
          </h3>

          <p className="mt-3 text-sm leading-7 text-gray-400">
            This project is intended for educational and machine learning
            demonstration purposes only. It is not a clinically validated
            diagnostic tool and must not be used as a substitute for
            professional medical advice, diagnosis, or treatment.
          </p>

        </div>
      </section>

      {/* Closing Section */}
      <section className="border-t border-white/10 bg-[#0B1220]">

        <div className="mx-auto max-w-6xl px-6 py-16 text-center">

          <h2 className="text-3xl font-bold">
            Explore the Project
          </h2>

          <p className="mx-auto mt-4 max-w-2xl text-gray-400">
            Explore the deployed application or examine the implementation
            in the project's GitHub repository.
          </p>

          <div className="mt-8 flex flex-wrap justify-center gap-4">

            <a
              href="https://breast-cancer-prediction-v4pf.onrender.com"
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-lg bg-blue-600 px-6 py-3 text-sm font-semibold transition hover:bg-blue-500"
            >
              Live Application →
            </a>

            <a
              href="https://github.com/Vedline2547/Breast-Cancer-Prediction"
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
