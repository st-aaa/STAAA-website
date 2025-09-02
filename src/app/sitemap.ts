// app/sitemap.ts
import { MetadataRoute } from "next";

// Example: fetch your dynamic content (services, blog, etc.)
async function getServices() {
  // Replace with your database or API call
  return [
    { slug: "business-formation", updatedAt: "2025-09-01" },
    { slug: "compliance-services", updatedAt: "2025-08-28" },
    { slug: "financial-services", updatedAt: "2025-08-25" },
  ];
}

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const baseUrl = "https://www.st-aaa.com";

  const services = await getServices();

  return [
    {
      url: baseUrl,
      lastModified: new Date(),
      changeFrequency: "weekly",
      priority: 1,
    },
    {
      url: `${baseUrl}/about`,
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 0.6,
    },
    {
      url: `${baseUrl}/contact`,
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 0.6,
    },
    // Dynamically add services
    ...services.map((service) => ({
      url: `${baseUrl}/services/${service.slug}`,
      lastModified: new Date(service.updatedAt),
      changeFrequency: "weekly",
      priority: 0.8,
    })),
  ];
}
