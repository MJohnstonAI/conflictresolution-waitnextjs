import type { MetadataRoute } from "next";

const siteUrl =
  process.env.NEXT_PUBLIC_SITE_URL ??
  "https://conflictresolution.solutions";

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: `${siteUrl}/`,
      changeFrequency: "weekly",
      priority: 1,
      lastModified: new Date(),
    },
    {
      url: `${siteUrl}/waitlist`,
      changeFrequency: "monthly",
      priority: 0.7,
      lastModified: new Date(),
    },
    {
      url: `${siteUrl}/resources/consultation-prep`,
      changeFrequency: "monthly",
      priority: 0.6,
      lastModified: new Date(),
    },
    {
      url: `${siteUrl}/resources/academic-access`,
      changeFrequency: "monthly",
      priority: 0.6,
      lastModified: new Date(),
    },
    {
      url: `${siteUrl}/resources/clinical-toolkit`,
      changeFrequency: "monthly",
      priority: 0.6,
      lastModified: new Date(),
    },
  ];
}

