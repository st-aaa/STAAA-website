import { MetadataRoute } from "next";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      {
        userAgent: "*",
        allow: "/",
      },
      // Uncomment if you have private routes
      // { userAgent: "*", disallow: "/admin/" },
      // { userAgent: "*", disallow: "/api/" },
    ],
    sitemap: "https://www.st-aaa.com/sitemap.xml",
  };
}
