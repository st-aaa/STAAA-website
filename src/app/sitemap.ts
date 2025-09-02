import { MetadataRoute } from "next";
import { services, Service } from "@/lib/data"; // adjust path if needed

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = "https://www.st-aaa.com";

  // Static routes
  const routes: MetadataRoute.Sitemap = [
    "/",
    "/privacy-policy",
    "/terms-of-service",
  ].map((route) => ({
    url: `${baseUrl}${route}`,
    lastModified: new Date(),
    changeFrequency: "monthly" as const, // literal type
    priority: route === "/" ? 1 : 0.6,
  }));

  // Dynamic service pages
  const serviceRoutes: MetadataRoute.Sitemap = services.map((service: Service) => ({
    url: `${baseUrl}${service.link}`, // service.link already has /service/slug
    lastModified: new Date(),
    changeFrequency: "weekly" as const, // literal type
    priority: 0.8,
  }));

  return [...routes, ...serviceRoutes];
}
