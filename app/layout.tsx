
import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Navbar from "./components/Navbar";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://heisved.com"),

  title: {
    default: "HEISVED | Engineering Intelligence. Building Tomorrow.",
    template: "%s | HEISVED",
  },

  description:
    "HEISVED is a Kenyan-founded technology company delivering artificial intelligence, machine learning, custom software development, and professional engineering services across Africa and beyond.",

  keywords: [
    "HEISVED",
    "Artificial Intelligence",
    "Machine Learning",
    "AI Development",
    "Software Development",
    "Custom Software Development",
    "Structural Engineering",
    "BIM",
    "Building Information Modelling",
    "Computer Vision",
    "Large Language Models",
    "RAG Systems",
    "Engineering Innovation",
    "Technology Company in Kenya",
    "AI Company in Africa",
  ],

  applicationName: "HEISVED",

  alternates: {
    canonical: "/",
  },

  openGraph: {
    title: "HEISVED | Engineering Intelligence. Building Tomorrow.",
    description:
      "A Kenyan-founded technology company delivering AI, software development, and engineering solutions. Founded in Kenya. Building for Africa and the world.",
    url: "https://heisved.com",
    siteName: "HEISVED",
    locale: "en_KE",
    type: "website",
    images: [
      {
        url: "/heisved-logo.png",
        width: 800,
        height: 300,
        alt: "HEISVED - Engineering Intelligence. Building Tomorrow.",
      },
    ],
  },

  twitter: {
    card: "summary_large_image",
    title: "HEISVED | Engineering Intelligence",
    description:
      "AI, software development, and engineering innovation. Founded in Kenya. Building for Africa and the world.",
    images: ["/heisved-logo.png"],
  },

  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="flex min-h-full flex-col">
        <Navbar />
        {children}
      </body>
    </html>
  );
}
