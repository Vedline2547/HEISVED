
import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Founder",
  description:
    "Meet Vedline Ochieng Odhiambo, founder of HEISVED, building at the intersection of artificial intelligence and civil engineering.",
};

export default function FounderPage() {
  return (
    <main className="min-h-screen overflow-hidden bg-[#080D18] text-white">
      <section className="mx-auto max-w-5xl px-5 py-16 sm:px-8 sm:py-20 lg:px-12 lg:py-24">
        <p className="text-xs font-semibold uppercase tracking-[0.25em] text-blue-400 sm:text-sm sm:tracking-[0.3em]">
          Meet the Founder
        </p>

        <h1 className="mt-5 text-3xl font-bold leading-tight sm:text-4xl md:text-6xl">
          Vedline Ochieng Odhiambo
        </h1>

        <p className="mt-5 text-lg leading-relaxed text-slate-300 sm:mt-6 sm:text-xl">
          Founder of HEISVED
        </p>

        <div className="mt-8 max-w-3xl space-y-5 text-base leading-8 text-slate-400 sm:mt-10 sm:space-y-6 sm:text-lg">
          <p>
            Vedline is a Civil Engineering student and AI enthusiast
            interested in bringing together artificial intelligence,
            machine learning, and engineering to solve practical problems.
          </p>

          <p>
            His interests include machine learning, large language models,
            computer vision, structural engineering, and digital
            construction.
          </p>

          <p>
            Through HEISVED, he aims to contribute to the development of
            intelligent technologies and engineering solutions, beginning
            in Africa and expanding globally.
          </p>
        </div>

        <div className="mt-10 sm:mt-12">
          <Link
            href="/contact"
            className="inline-block rounded-lg bg-blue-600 px-6 py-3.5 text-sm font-semibold transition hover:bg-blue-500 sm:text-base"
          >
            Contact HEISVED
          </Link>
        </div>
      </section>
    </main>
  );
}
