import { statSync } from "node:fs";
import { join } from "node:path";
import { blogCategories, blogPosts } from "@/lib/blog";
import { site } from "@/lib/site";

// Built once at deploy time — the feed only changes when a post does.
export const dynamic = "force-static";

const escape = (s: string) =>
  s.replace(/[<>&'"]/g, (c) => ({ "<": "&lt;", ">": "&gt;", "&": "&amp;", "'": "&apos;", '"': "&quot;" })[c]!);

/** Enclosures need a byte length; read it from the built file so it can't drift. */
function enclosure(image?: string) {
  if (!image) return "";
  try {
    const { size } = statSync(join(process.cwd(), "public", image));
    const type = image.endsWith(".webp") ? "image/webp" : image.endsWith(".png") ? "image/png" : "image/jpeg";
    return `\n      <enclosure url="${site.url}${image}" length="${size}" type="${type}" />`;
  } catch {
    return "";
  }
}

export function GET() {
  const posts = [...blogPosts].sort((a, b) => b.publishedAt.localeCompare(a.publishedAt));
  const updated = posts[0]?.updatedAt ?? posts[0]?.publishedAt;
  const items = posts
    .map((p) => {
      const category = blogCategories.find((c) => c.slug === p.category)?.name ?? p.category;
      return `    <item>
      <title>${escape(p.title)}</title>
      <link>${site.url}/blog/${p.slug}</link>
      <guid isPermaLink="true">${site.url}/blog/${p.slug}</guid>
      <description>${escape(p.description)}</description>
      <category>${escape(category)}</category>
      <pubDate>${new Date(p.publishedAt).toUTCString()}</pubDate>${enclosure(p.cover.image)}
    </item>`;
    })
    .join("\n");

  const xml = `<?xml version="1.0" encoding="UTF-8"?>
<rss version="2.0" xmlns:atom="http://www.w3.org/2005/Atom">
  <channel>
    <title>${escape(`${site.name} — Blog`)}</title>
    <link>${site.url}/blog</link>
    <description>${escape("Articles on building web, mobile and business software — POS, inventory and accounting systems for small businesses.")}</description>
    <language>en</language>
    <managingEditor>${site.email} (${escape(site.fullName)})</managingEditor>${updated ? `\n    <lastBuildDate>${new Date(updated).toUTCString()}</lastBuildDate>` : ""}
    <atom:link href="${site.url}/blog/rss.xml" rel="self" type="application/rss+xml" />
${items}
  </channel>
</rss>
`;

  return new Response(xml, {
    headers: { "Content-Type": "application/rss+xml; charset=utf-8", "Cache-Control": "public, max-age=3600" },
  });
}
