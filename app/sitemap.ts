import type { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  const base = "https://farpy.com";
  return [
    { url: `${base}/`,          changeFrequency: "weekly",  priority: 0.8 },
    { url: `${base}/join`,      changeFrequency: "monthly", priority: 0.5 },
    { url: `${base}/status`,    changeFrequency: "daily",   priority: 0.6 },
    { url: `${base}/about`,     changeFrequency: "yearly",  priority: 0.3 },
    { url: `${base}/jobs`,      changeFrequency: "monthly", priority: 0.3 },
    { url: `${base}/press`,     changeFrequency: "yearly",  priority: 0.2 },
    { url: `${base}/download`,  changeFrequency: "monthly", priority: 0.5 },
    { url: `${base}/how`,       changeFrequency: "monthly", priority: 0.4 },
    { url: `${base}/privacy`,   changeFrequency: "yearly",  priority: 0.1 },
    { url: `${base}/terms`,     changeFrequency: "yearly",  priority: 0.1 },
  ];
}