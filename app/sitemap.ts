import type { MetadataRoute } from "next";
export default function sitemap(): MetadataRoute.Sitemap {
  const base = "https://farpy.com";
  return [
    { url: base + "/",       changeFrequency: "weekly",  priority: 1.0 },
    { url: base + "/how",    changeFrequency: "monthly", priority: 0.7 },
    { url: base + "/join",   changeFrequency: "monthly", priority: 0.8 },
    { url: base + "/about",  changeFrequency: "monthly", priority: 0.5 },
    { url: base + "/status", changeFrequency: "hourly",  priority: 0.3 },
  ];
}
