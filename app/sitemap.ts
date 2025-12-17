import type { MetadataRoute } from "next";

const siteUrl =
  process.env.NEXT_PUBLIC_SITE_URL ??
  "https://conflictresolution-waitnextjs.vercel.app";

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
  ];
}

