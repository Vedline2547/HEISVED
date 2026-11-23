
import type { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = "https://heisved.onrender.com";

  const pages = [
    "",
    "/about",
    "/services",
    "/engineering",
    "/innovation",
    "/founder",
    "/contact",
    "/privacy",
    "/projects/breast-cancer-prediction",
    "/projects/elephant-classification",
    "/projects/solar-panel-classification",
    "/projects/resume-genie",
  ];

  return pages.map((page) => ({
    url: `${baseUrl}${page}`,
    lastModified: new Date(),
    changeFrequency: "monthly",
    priority:
      page === ""
        ? 1
        : page.startsWith("/projects/")
          ? 0.7
          : 0.8,
  }));
}
