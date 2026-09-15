import type { Metadata } from "next";
import Link from "next/link";
import { blogCategories, blogPosts } from "@/lib/blog";
import { site } from "@/lib/site";
import Breadcrumbs from "@/components/Breadcrumbs";
import { ArrowRight } from "@/components/Icons";

const description =
  "Articles by Lyndell Dobluis on React, React Native, Supabase and building business software — POS, inventory and accounting systems — for small businesses.";

export const metadata: Metadata = {
  title: "Blog",
  description,
  alternates: { canonical: "/blog" },
  openGraph: { title: `Blog | ${site.name}`, description, url: `${site.url}/blog`, type: "website", images: ["/opengraph-image.png"] },
  // Indexable only once there is real content.
  robots: blogPosts.length ? { index: true, follow: true } : { index: false, follow: true },
};

export default function BlogPage() {
  const posts = [...blogPosts].sort((a, b) => b.publishedAt.localeCompare(a.publishedAt));
  return (
    <main className="bg-page text-primary">
      <div className="mx-auto max-w-[48rem] px-5 pb-16 pt-8 sm:px-8">
        <Breadcrumbs items={[{ name: "Blog", href: "/blog" }]} />
        <h1 className="font-heading mt-5 text-[2.2rem] font-bold leading-none tracking-tight text-primary sm:text-[2.6rem]">Blog</h1>
        <p className="mt-3 max-w-[60ch] text-[1rem] leading-relaxed text-primary/85">
          Practical notes from building web and mobile apps and business systems — what worked, what didn&apos;t, and
          how I&apos;d do it again.
        </p>

        {posts.length ? (
          <ul className="mt-10 space-y-6">
            {posts.map((p) => (
              <li key={p.slug} className="rounded-2xl border border-white/10 bg-[#0b1a2e]/80 p-5">
                <div className="text-[0.72rem] text-accent-light">
                  {blogCategories.find((c) => c.slug === p.category)?.name} · <time dateTime={p.publishedAt}>{new Date(p.publishedAt).toLocaleDateString("en-PH", { year: "numeric", month: "long", day: "numeric" })}</time>
                </div>
                <h2 className="font-heading mt-1.5 text-[1.25rem] font-bold text-primary">
                  <Link href={`/blog/${p.slug}`} className="plain hover:text-accent-light">{p.title}</Link>
                </h2>
                <p className="mt-2 text-[0.9rem] leading-relaxed text-primary/85">{p.description}</p>
              </li>
            ))}
          </ul>
        ) : (
          <div className="mt-10 rounded-2xl border border-white/10 bg-[#0b1a2e]/80 p-6">
            <h2 className="font-heading text-[1.25rem] font-bold text-primary">First articles are in progress</h2>
            <p className="mt-2 text-[0.9rem] leading-relaxed text-primary/85">Here&apos;s what I&apos;m writing about:</p>
            <ul className="mt-4 grid gap-3 sm:grid-cols-2">
              {blogCategories.map((c) => (
                <li key={c.slug} className="rounded-xl border border-white/10 p-4">
                  <h3 className="font-heading text-[0.95rem] font-bold text-primary">{c.name}</h3>
                  <p className="mt-1 text-[0.82rem] leading-snug text-primary/75">{c.description}</p>
                </li>
              ))}
            </ul>
            <Link href="/#contact" className="plain mt-6 inline-flex items-center gap-2 text-[0.85rem] font-semibold text-link hover:text-accent-light">
              Get in touch in the meantime <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        )}
      </div>
    </main>
  );
}
