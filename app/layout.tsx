
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
  metadataBase: new URL("https://heisved.onrender.com"),

  title: {
    default: "HEISVED | AI, Software & Engineering Solutions in Kenya",
    template: "%s | HEISVED",
  },

  description:
    "HEISVED is a Kenyan technology company developing AI and machine learning solutions, custom software, structural engineering services, and BIM innovation for Africa and beyond.",

  keywords: [
    "HEISVED",
    "Artificial Intelligence Kenya",
    "Machine Learning Kenya",
    "AI Development",
    "Custom Software Development",
    "Structural Engineering",
    "BIM",
    "BIM and AI",
    "RAG Systems",
    "Computer Vision",
    "Technology Company Africa",
  ],

  openGraph: {
    title: "HEISVED | Engineering Intelligence. Building Tomorrow.",
    description:
      "A Kenyan-founded technology company developing AI, machine learning, custom software, and professional engineering solutions for Africa and beyond.",
    url: "https://heisved.onrender.com",
    siteName: "HEISVED",
    locale: "en_KE",
    type: "website",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "HEISVED – Engineering Intelligence. Building Tomorrow.",
      },
    ],
  },

  twitter: {
    card: "summary_large_image",
    title: "HEISVED | Engineering Intelligence",
    description:
      "AI, machine learning, software development, and engineering innovation from Kenya to the world.",
    images: ["/og-image.png"],
  },

  robots: {
    index: true,
    follow: true,
  },
};

const structuredData = {
  "@context": "https://schema.org",
  "@type": "Organization",
  name: "HEISVED",
  url: "https://heisved.onrender.com",
  logo: "https://heisved.onrender.com/heisved-logo.png",
  description:
    "A Kenyan-founded technology company developing artificial intelligence, machine learning, custom software, structural engineering, and BIM innovation.",
  slogan: "Engineering Intelligence. Building Tomorrow.",
  foundingLocation: {
    "@type": "Country",
    name: "Kenya",
  },
  areaServed: [
    {
      "@type": "Continent",
      name: "Africa",
    },
    {
      "@type": "Place",
      name: "Worldwide",
    },
  ],
  knowsAbout: [
    "Artificial Intelligence",
    "Machine Learning",
    "Computer Vision",
    "Large Language Models",
    "Retrieval-Augmented Generation",
    "Custom Software Development",
    "Structural Engineering",
    "Building Information Modelling",
    "BIM and AI",
  ],
  contactPoint: {
    "@type": "ContactPoint",
    contactType: "Business enquiries",
    email: "ochiengved@gmail.com",
    telephone: "+254795207879",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(structuredData).replace(/</g, "\\u003c"),
          }}
        />

        <Navbar />
        {children}
      </body>
    </html>
  );
}
