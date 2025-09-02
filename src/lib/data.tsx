import { MetadataRoute } from "next";
import { services } from "@/data/services"; // adjust path if needed

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = "https://www.st-aaa.com";

  // Static routes
  const routes = [
    "/",
    "/privacy-policy",
    "/terms-of-service",
  ].map((route) => ({
    url: `${baseUrl}${route}`,
    lastModified: new Date(),
    changeFrequency: "monthly",
    priority: route === "" ? 1 : 0.6,
  }));

  // Dynamic service pages
  const serviceRoutes = services.map((service) => ({
    url: `${baseUrl}/service/${service.link}`,
    lastModified: new Date(),
    changeFrequency: "weekly",
    priority: 0.8,
  }));

  return [...routes, ...serviceRoutes];
}
