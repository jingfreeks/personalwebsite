import type { MetadataRoute } from "next";
import { site } from "@/lib/site";
import { caseStudyProjects } from "@/lib/projects";
import { blogPosts } from "@/lib/blog";

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date();
  return [
    { url: site.url, lastModified: now, changeFrequency: "monthly", priority: 1, images: [`${site.url}/opengraph-image.png`] },
    { url: `${site.url}/projects`, lastModified: now, changeFrequency: "monthly", priority: 0.9 },
    ...caseStudyProjects.map((p) => ({
      url: `${site.url}/projects/${p.slug}`,
      lastModified: now,
      changeFrequency: "monthly" as const,
      priority: 0.8,
      images: [`${site.url}${p.image.src}`, ...(p.caseStudy?.gallery ?? []).map((g) => `${site.url}${g.src}`)].filter(
        (v, i, a) => a.indexOf(v) === i,
      ),
    })),
    ...(blogPosts.length ? [{ url: `${site.url}/blog`, lastModified: now, changeFrequency: "weekly" as const, priority: 0.7 }] : []),
    ...blogPosts.map((p) => ({
      url: `${site.url}/blog/${p.slug}`,
      lastModified: new Date(p.updatedAt ?? p.publishedAt),
      changeFrequency: "monthly" as const,
      priority: 0.6,
      ...(p.cover.image ? { images: [`${site.url}${p.cover.image}`] } : {}),
    })),
  ];
}
