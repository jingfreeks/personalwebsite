import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { blogCategories, blogPosts, postBySlug } from "@/lib/blog";
import { site } from "@/lib/site";
import Breadcrumbs from "@/components/Breadcrumbs";

type Params = { slug: string };

export const dynamicParams = false;

export function generateStaticParams(): Params[] {
  return blogPosts.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({ params }: { params: Promise<Params> }): Promise<Metadata> {
  const { slug } = await params;
  const post = postBySlug(slug);
  if (!post) return {};
  return {
    title: post.title,
    description: post.description,
    alternates: { canonical: `/blog/${post.slug}` },
    openGraph: {
      title: `${post.title} | ${site.name}`,
      description: post.description,
      url: `${site.url}/blog/${post.slug}`,
      type: "article",
      publishedTime: post.publishedAt,
      modifiedTime: post.updatedAt ?? post.publishedAt,
      authors: [site.url],
    },
  };
}

export default async function BlogPostPage({ params }: { params: Promise<Params> }) {
  const { slug } = await params;
  const post = postBySlug(slug);
  if (!post) notFound();
  const category = blogCategories.find((c) => c.slug === post.category);
  const data = {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    headline: post.title,
    description: post.description,
    datePublished: post.publishedAt,
    dateModified: post.updatedAt ?? post.publishedAt,
    author: { "@id": `${site.url}/#person` },
    mainEntityOfPage: `${site.url}/blog/${post.slug}`,
  };
  return (
    <main className="bg-page text-primary">
      <article className="mx-auto max-w-[44rem] px-5 pb-16 pt-8 sm:px-8">
        <Breadcrumbs items={[{ name: "Blog", href: "/blog" }, { name: post.title, href: `/blog/${post.slug}` }]} />
        <header className="mt-5">
          <div className="text-[0.72rem] text-accent-light">
            {category?.name} · <time dateTime={post.publishedAt}>{new Date(post.publishedAt).toLocaleDateString("en-PH", { year: "numeric", month: "long", day: "numeric" })}</time>
          </div>
          <h1 className="font-heading mt-2 text-[2rem] font-bold leading-tight tracking-tight text-primary sm:text-[2.4rem]">{post.title}</h1>
          <p className="mt-3 text-[1rem] leading-relaxed text-primary/85">{post.description}</p>
        </header>
        <div className="mt-8 space-y-4 text-[1rem] leading-relaxed text-primary/90">
          {post.body.map((para, i) => <p key={i}>{para}</p>)}
        </div>
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }} />
      </article>
    </main>
  );
}
