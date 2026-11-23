
"use client";

import { useEffect } from "react";
import Link from "next/link";

const services = [
  {
    number: "01",
    title: "Machine Learning",
    description:
      "Predictive modelling, intelligent classification, and data-driven systems that turn information into actionable insights.",
    tag: "AI & DATA",
  },
  {
    number: "02",
    title: "AI Development",
    description:
      "Intelligent applications, AI-powered solutions, and automation systems designed to address practical challenges.",
    tag: "INTELLIGENT SYSTEMS",
  },
  {
    number: "03",
    title: "LLMs & RAG",
    description:
      "Knowledge assistants, document intelligence, and conversational systems powered by large language models.",
    tag: "GENERATIVE AI",
  },
  {
    number: "04",
    title: "Computer Vision",
    description:
      "Visual intelligence solutions for image classification, object detection, and automated inspection.",
    tag: "VISION AI",
  },
  {
    number: "05",
    title: "Custom Software",
    description:
      "Purpose-built software applications and digital platforms tailored to business and operational needs.",
    tag: "SOFTWARE DEVELOPMENT",
  },
];

const engineeringAreas = [
  [
    "01",
    "Structural Engineering",
    "Structural analysis, design, and engineering solutions.",
  ],
  [
    "02",
    "BIM & Digital Construction",
    "Building Information Modelling and digital project workflows.",
  ],
  [
    "03",
    "BIM + AI Innovation",
    "Exploring intelligent automation and AI-powered BIM workflows.",
  ],
];

export default function Home() {
  useEffect(() => {
    document.documentElement.classList.add("reveal-ready");

    const elements = document.querySelectorAll("[data-reveal]");

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("is-visible");
            observer.unobserve(entry.target);
          }
        });
      },
      {
        threshold: 0.12,
        rootMargin: "0px 0px -40px 0px",
      }
    );

    elements.forEach((element) => observer.observe(element));

    return () => {
      observer.disconnect();
      document.documentElement.classList.remove("reveal-ready");
    };
  }, []);

  return (
    <main className="min-h-screen overflow-hidden bg-[#080D18] text-white">
      {/* HERO */}
      <section className="tech-glow relative flex min-h-[650px] items-center px-5 py-20 sm:px-8 md:min-h-[700px] md:px-12 md:py-28 lg:px-20">
        <div className="tech-grid absolute inset-0 opacity-70" />

        <div className="pointer-events-none absolute right-[-120px] top-10 h-[350px] w-[350px] rounded-full bg-blue-600/10 blur-[120px] md:h-[450px] md:w-[450px]" />

        <div className="pointer-events-none absolute bottom-0 left-[-100px] h-[250px] w-[250px] rounded-full bg-cyan-500/10 blur-[100px] md:h-[300px] md:w-[300px]" />

        <div className="relative mx-auto grid w-full max-w-7xl items-center gap-14 lg:grid-cols-2 lg:gap-16">
          {/* Hero text */}
          <div data-reveal className="min-w-0">
            <div className="fade-up inline-flex max-w-full items-center gap-2 rounded-full border border-blue-500/30 bg-blue-500/10 px-3 py-2 sm:gap-3 sm:px-4">
              <span className="pulse-blue h-2 w-2 shrink-0 rounded-full bg-blue-400" />

              <span className="text-[10px] font-semibold uppercase tracking-[0.12em] text-blue-300 sm:text-xs sm:tracking-[0.2em]">
                Artificial Intelligence × Engineering
              </span>
            </div>

            <h1 className="fade-up-delay mt-7 text-4xl font-bold leading-[1.12] tracking-tight sm:text-5xl md:text-6xl lg:text-7xl">
              Engineering
              <span className="block">Intelligence.</span>

              <span className="gradient-text glow-text mt-2 block">
                Building Tomorrow.
              </span>
            </h1>

            <p className="fade-up-late mt-6 max-w-xl text-base leading-7 text-slate-400 sm:mt-8 sm:text-lg sm:leading-8">
              We develop intelligent technology solutions through
              artificial intelligence, machine learning, software
              development, and engineering innovation — creating
              possibilities for Africa and beyond.
            </p>

            <div className="fade-up-late mt-8 flex flex-col gap-3 sm:mt-10 sm:flex-row sm:flex-wrap sm:gap-4">
              <Link
                href="/services"
                className="rounded-lg bg-blue-600 px-6 py-4 text-center text-sm font-semibold shadow-lg shadow-blue-600/20 transition duration-300 hover:-translate-y-1 hover:bg-blue-500 hover:shadow-blue-500/40 sm:px-7 sm:text-base"
              >
                Explore Our Services →
              </Link>

              <Link
                href="/engineering"
                className="rounded-lg border border-slate-700 px-6 py-4 text-center text-sm font-semibold transition duration-300 hover:-translate-y-1 hover:border-blue-500 hover:text-blue-400 sm:px-7 sm:text-base"
              >
                Explore Engineering
              </Link>
            </div>

            <p className="mt-8 text-xs text-slate-500 sm:mt-10 sm:text-sm">
              Founded in Kenya. Building for Africa and the world.
            </p>
          </div>

          {/* Animated technology visual */}
          <div
            data-reveal
            className="relative mx-auto flex aspect-square w-full max-w-[320px] items-center justify-center sm:max-w-md"
          >
            <div className="rotate-slow absolute inset-6 rounded-full border border-blue-500/20 border-dashed sm:inset-8" />

            <div className="rotate-reverse absolute inset-12 rounded-full border border-cyan-400/20 sm:inset-16" />

            <div className="absolute inset-20 rounded-full border border-blue-500/30 sm:inset-24" />

            <div className="absolute h-48 w-48 rounded-full bg-blue-600/20 blur-[80px] sm:h-64 sm:w-64" />

            <div className="float relative z-10 flex h-36 w-36 items-center justify-center rounded-3xl border border-blue-400/40 bg-[#101C32]/90 shadow-2xl shadow-blue-900/40 backdrop-blur-xl sm:h-48 sm:w-48">
              <div className="text-center">
                <div className="text-2xl font-bold tracking-widest sm:text-4xl">
                  HEIS<span className="text-blue-500">VED</span>
                </div>

                <div className="mt-2 text-[9px] uppercase tracking-[0.2em] text-slate-400 sm:mt-3 sm:text-xs sm:tracking-[0.3em]">
                  Intelligence in Motion
                </div>
              </div>
            </div>

            <div className="float-delayed absolute right-0 top-10 rounded-xl border border-blue-500/30 bg-[#101C32]/90 px-3 py-2 shadow-xl shadow-blue-900/20 backdrop-blur-xl sm:top-16 sm:px-4 sm:py-3">
              <p className="text-[10px] text-slate-400 sm:text-xs">
                Artificial Intelligence
              </p>
              <p className="mt-1 text-sm font-semibold text-blue-400 sm:text-base">
                AI / ML
              </p>
            </div>

            <div className="float absolute bottom-10 left-0 rounded-xl border border-cyan-500/30 bg-[#101C32]/90 px-3 py-2 shadow-xl shadow-cyan-900/20 backdrop-blur-xl sm:bottom-16 sm:px-4 sm:py-3">
              <p className="text-[10px] text-slate-400 sm:text-xs">
                Engineering
              </p>
              <p className="mt-1 text-sm font-semibold text-cyan-400 sm:text-base">
                Digital Innovation
              </p>
            </div>

            <div className="pulse-blue absolute bottom-3 right-12 h-3 w-3 rounded-full bg-blue-400 sm:right-16 sm:bottom-5" />

            <div className="pulse-blue absolute left-12 top-3 h-2 w-2 rounded-full bg-cyan-400 sm:left-16 sm:top-5" />
          </div>
        </div>
      </section>

      {/* SERVICES */}
      <section className="relative bg-[#0D1525] px-5 py-20 sm:px-8 md:px-12 md:py-24 lg:px-20">
        <div className="pointer-events-none absolute right-0 top-0 h-80 w-80 rounded-full bg-blue-600/5 blur-[100px]" />

        <div className="relative mx-auto max-w-7xl">
          <div
            data-reveal
            className="flex flex-col justify-between gap-5 md:flex-row md:items-end"
          >
            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.25em] text-blue-400 sm:text-sm">
                What We Do
              </p>

              <h2 className="mt-4 text-3xl font-bold sm:text-4xl md:text-5xl">
                Technology With Purpose.
              </h2>
            </div>

            <Link
              href="/services"
              className="text-sm font-semibold text-blue-400 transition hover:translate-x-1 hover:text-blue-300"
            >
              View All Services →
            </Link>
          </div>

          <p
            data-reveal
            className="mt-6 max-w-2xl text-sm leading-7 text-slate-400 sm:text-base sm:leading-8"
          >
            We combine intelligent technologies, software development,
            and technical expertise to develop solutions that address
            practical challenges.
          </p>

          <div className="mt-10 grid gap-5 sm:mt-14 sm:grid-cols-2 lg:grid-cols-3">
            {services.map((service) => (
              <div
                key={service.number}
                data-reveal
                className="glow-border group rounded-xl border border-slate-800 bg-[#080D18] p-6 sm:p-7"
              >
                <div className="flex items-center justify-between">
                  <span className="text-sm font-semibold text-blue-500">
                    {service.number}
                  </span>

                  <span className="text-xs text-slate-600">HEISVED</span>
                </div>

                <h3 className="mt-7 text-lg font-semibold transition group-hover:text-blue-400 sm:mt-10 sm:text-xl">
                  {service.title}
                </h3>

                <p className="mt-4 text-sm leading-7 text-slate-400">
                  {service.description}
                </p>

                <p className="mt-6 border-t border-slate-800 pt-5 text-xs font-semibold tracking-widest text-blue-400">
                  {service.tag}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ENGINEERING */}
      <section className="relative overflow-hidden px-5 py-20 sm:px-8 md:px-12 md:py-24 lg:px-20">
        <div className="tech-grid absolute inset-0 opacity-30" />

        <div className="relative mx-auto grid max-w-7xl items-center gap-10 lg:grid-cols-2 lg:gap-12">
          <div data-reveal>
            <p className="text-xs font-semibold uppercase tracking-[0.25em] text-blue-400 sm:text-sm">
              Engineering Services
            </p>

            <h2 className="mt-5 text-3xl font-bold leading-tight sm:text-4xl md:text-5xl">
              Engineering Ideas Into Reality.
            </h2>

            <p className="mt-6 text-sm leading-7 text-slate-400 sm:text-base sm:leading-8">
              We provide engineering-focused services in structural
              engineering and Building Information Modelling, while
              exploring how artificial intelligence can enhance
              engineering design, analysis, and digital construction
              workflows.
            </p>

            <Link
              href="/engineering"
              className="mt-8 inline-block rounded-lg border border-blue-500/50 px-6 py-3 text-sm font-semibold text-blue-400 transition hover:bg-blue-500/10 sm:mt-9 sm:text-base"
            >
              Explore Engineering →
            </Link>
          </div>

          <div
            data-reveal
            className="rounded-2xl border border-slate-800 bg-[#0D1525]/90 p-5 backdrop-blur-xl sm:p-8 md:p-10"
          >
            <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
              {engineeringAreas.map(([number, title, description]) => (
                <div
                  key={number}
                  data-reveal
                  className="glow-border rounded-xl border border-slate-800 bg-[#080D18] p-5 sm:p-6"
                >
                  <p className="text-3xl font-bold text-blue-400">
                    {number}
                  </p>

                  <h3 className="mt-4 font-semibold">{title}</h3>

                  <p className="mt-2 text-sm leading-6 text-slate-500">
                    {description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* INNOVATION */}
      <section className="relative overflow-hidden bg-[#0D1525] px-5 py-20 sm:px-8 md:px-12 md:py-24 lg:px-20">
        <div className="absolute right-[-100px] top-[-100px] h-96 w-96 rounded-full bg-blue-600/10 blur-[100px]" />

        <div
          data-reveal
          className="relative mx-auto max-w-7xl rounded-2xl border border-blue-500/20 bg-gradient-to-br from-blue-950/40 to-[#080D18] p-6 sm:p-8 md:p-16"
        >
          <p className="text-xs font-semibold uppercase tracking-[0.25em] text-blue-400 sm:text-sm">
            Innovation Lab
          </p>

          <h2 className="mt-5 max-w-3xl text-3xl font-bold sm:text-4xl md:text-5xl">
            Where Artificial Intelligence Meets Engineering.
          </h2>

          <p className="mt-6 max-w-2xl text-sm leading-7 text-slate-400 sm:text-base sm:leading-8">
            We explore AI-powered Building Information Modelling,
            intelligent engineering assistants, intelligent automation,
            and applied AI research to investigate new ways of solving
            practical challenges.
          </p>

          <div className="mt-8 flex flex-col items-start gap-3 sm:mt-9 sm:flex-row sm:flex-wrap sm:items-center sm:gap-5">
            <span className="rounded-full border border-blue-500/40 bg-blue-500/10 px-5 py-2 text-sm font-semibold text-blue-400">
              Research & Development
            </span>
          </div>

          <Link
            href="/innovation"
            className="mt-8 inline-block text-sm font-semibold text-blue-400 transition hover:translate-x-1 hover:text-blue-300 sm:mt-9 sm:text-base"
          >
            Discover Our Innovation Lab →
          </Link>
        </div>
      </section>

      {/* ABOUT */}
      <section className="relative px-5 py-20 text-center sm:px-8 md:px-12 md:py-24">
        <div className="pointer-events-none absolute left-1/2 top-1/2 h-72 w-72 -translate-x-1/2 -translate-y-1/2 rounded-full bg-blue-600/10 blur-[100px]" />

        <div data-reveal className="relative">
          <p className="text-xs font-semibold uppercase tracking-[0.25em] text-blue-400 sm:text-sm">
            Who We Are
          </p>

          <h2 className="mt-5 text-3xl font-bold sm:text-4xl md:text-5xl">
            Introducing HEISVED.
          </h2>

          <p className="mx-auto mt-6 max-w-3xl text-base leading-7 text-slate-400 sm:mt-7 sm:text-lg sm:leading-8">
            A Kenyan-founded technology company focused on artificial
            intelligence, software development, and engineering innovation.
            We are building intelligent solutions with the ambition to
            contribute to Africa&apos;s technological advancement and beyond.
          </p>

          <Link
            href="/about"
            className="mt-8 inline-block text-sm font-semibold text-blue-400 transition hover:translate-x-1 hover:text-blue-300 sm:mt-9 sm:text-base"
          >
            Learn More About Us →
          </Link>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="border-t border-slate-800 bg-[#060B14] px-5 py-12 sm:px-8 md:px-12 lg:px-20">
        <div className="mx-auto grid max-w-7xl gap-10 sm:grid-cols-2 lg:grid-cols-4">
          {/* Company */}
          <div>
            <Link href="/" className="text-2xl font-bold tracking-wider">
              HEIS<span className="text-blue-500">VED</span>.
            </Link>

            <p className="mt-4 max-w-xs text-sm leading-7 text-slate-400">
              Engineering Intelligence. Building Tomorrow.
              Developing intelligent technology and engineering solutions
              for Africa and beyond.
            </p>
          </div>

          {/* Explore */}
          <div>
            <h3 className="font-semibold text-white">Explore</h3>

            <div className="mt-5 flex flex-col gap-3 text-sm text-slate-400">
              <Link href="/about" className="transition hover:text-blue-400">
                About Us
              </Link>

              <Link href="/services" className="transition hover:text-blue-400">
                Services
              </Link>

              <Link
                href="/engineering"
                className="transition hover:text-blue-400"
              >
                Engineering
              </Link>

              <Link
                href="/innovation"
                className="transition hover:text-blue-400"
              >
                Innovation Lab
              </Link>

              <Link href="/founder" className="transition hover:text-blue-400">
                Founder
              </Link>
            </div>
          </div>

          {/* Contact */}
          <div>
            <h3 className="font-semibold text-white">Get in Touch</h3>

            <div className="mt-5 flex flex-col gap-3 text-sm text-slate-400">
              <a
                href="mailto:ochiengved@gmail.com"
                className="break-all transition hover:text-blue-400"
              >
                ochiengved@gmail.com
              </a>

              <a
                href="https://wa.me/254795207879"
                target="_blank"
                rel="noopener noreferrer"
                className="transition hover:text-blue-400"
              >
                WhatsApp
              </a>

              <Link
                href="/contact"
                className="transition hover:text-blue-400"
              >
                Contact Us →
              </Link>
            </div>
          </div>

          {/* Location */}
          <div>
            <h3 className="font-semibold text-white">Our Foundation</h3>

            <p className="mt-5 text-sm leading-7 text-slate-400">
              Founded in Kenya.
              <br />
              Building for Africa and the world.
            </p>
          </div>
        </div>

        <div className="mx-auto mt-12 max-w-7xl border-t border-slate-800 pt-6">
          <p className="text-xs text-slate-500">
            © 2026 HEISVED. All rights reserved.
          </p>
        </div>
      </footer>
    </main>
  );
}
