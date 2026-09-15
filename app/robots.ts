import type { MetadataRoute } from "next";
import { site } from "@/lib/site";
import { blogPosts } from "@/lib/blog";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: [{ userAgent: "*", allow: "/", disallow: ["/api/", ...(blogPosts.length ? [] : ["/blog"])] }],
    sitemap: `${site.url}/sitemap.xml`,
  };
}
