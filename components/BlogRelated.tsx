import Link from "next/link";
import type { BlogPost } from "@/lib/blog";
import BlogCover from "@/components/BlogCover";
import { ArrowRight } from "@/components/Icons";

/** Shown at the bottom of an article. Renders nothing if there is nothing to relate yet. */
export default function BlogRelated({ posts }: { posts: BlogPost[] }) {
  if (!posts.length) return null;
  return (
    <nav aria-label="Related articles" className="mt-12 border-t border-white/10 pt-6">
      <p className="font-heading text-[0.95rem] font-bold text-primary">Related articles</p>
      <ul className="mt-4 grid gap-4 sm:grid-cols-2">
        {posts.map((p) => (
          <li key={p.slug}>
            <Link
              href={`/blog/${p.slug}`}
              className="plain flex gap-3 rounded-xl border border-white/10 bg-[#0b1a2e]/80 p-3 transition-colors hover:border-accent/50"
            >
              <BlogCover cover={p.cover} className="h-16 w-16 shrink-0" />
              <span className="flex min-w-0 flex-col justify-center">
                <span className="font-heading text-[0.9rem] font-semibold leading-snug text-primary">{p.title}</span>
                <span className="mt-1 inline-flex items-center gap-1 text-[0.75rem] text-link">
                  Read article <ArrowRight className="h-3.5 w-3.5" />
                </span>
              </span>
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  );
}
