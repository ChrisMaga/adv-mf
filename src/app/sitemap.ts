import type { MetadataRoute } from "next";
import { SITE_URL } from "@/lib/site";

export default function sitemap(): MetadataRoute.Sitemap {
  const agora = new Date();
  return [
    { url: `${SITE_URL}/`, lastModified: agora, changeFrequency: "monthly", priority: 1 },
    { url: `${SITE_URL}/previdenciario`, lastModified: agora, changeFrequency: "monthly", priority: 0.9 },
    { url: `${SITE_URL}/trabalhista`, lastModified: agora, changeFrequency: "monthly", priority: 0.9 },
    { url: `${SITE_URL}/isencoes-fiscais`, lastModified: agora, changeFrequency: "monthly", priority: 0.9 },
    { url: `${SITE_URL}/privacidade`, lastModified: agora, changeFrequency: "yearly", priority: 0.2 },
  ];
}
