
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
    default: "HEISVED | Engineering Intelligence",
    template: "%s | HEISVED",
  },

  description:
    "HEISVED is a Kenyan-founded technology company developing artificial intelligence, machine learning, and engineering solutions for Africa and beyond.",

  keywords: [
    "HEISVED",
    "Artificial Intelligence",
    "Machine Learning",
    "Civil Engineering",
    "Structural Engineering",
    "BIM",
    "Computer Vision",
    "LLMs",
    "RAG Systems",
    "Engineering Innovation",
    "Kenya Technology Company",
  ],

  applicationName: "HEISVED",

  openGraph: {
    title: "HEISVED | Engineering Intelligence",
    description:
      "Engineering Intelligence. Building Tomorrow. Exploring AI, machine learning, and engineering innovation.",
    siteName: "HEISVED",
    locale: "en_KE",
    type: "website",
  },

  twitter: {
    card: "summary_large_image",
    title: "HEISVED | Engineering Intelligence",
    description: "Engineering Intelligence. Building Tomorrow.",
  },

  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({ children }: LayoutProps<"/">) {
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
