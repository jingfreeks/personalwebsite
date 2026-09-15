import type { Metadata } from "next";
import Link from "next/link";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { ArrowRight } from "@/components/Icons";

export const metadata: Metadata = {
  title: "Blog",
  description: "Writing from Lyndell Dobluis on building POS and business systems for Filipino small businesses, React Native, and AI-assisted development.",
};

export default function BlogPage() {
  return (
    <>
      <Header />
      <main className="bg-page text-primary">
        <section className="relative mx-auto max-w-6xl px-5 py-24 sm:px-8">
          <div aria-hidden="true" className="bg-grid pointer-events-none absolute inset-0 opacity-50" />
          <div className="relative max-w-2xl">
            <div className="mb-4 font-mono text-[11px] uppercase tracking-[0.22em] text-accent-light">Blog</div>
            <h1 className="font-heading text-4xl font-bold text-primary sm:text-5xl">
              Writing is <span className="text-gradient">coming soon</span>
            </h1>
            <p className="mt-5 text-lg leading-relaxed text-body">
              I&apos;m putting together articles on building POS and business systems for Filipino small businesses,
              shipping React Native apps end-to-end, and using AI coding assistants without cutting corners. No posts
              yet — check back soon.
            </p>
            <Link href="/contact" className="plain mt-8 inline-flex items-center gap-2 rounded-lg bg-accent-strong px-5 py-3 text-sm font-semibold text-white transition-colors hover:bg-accent">
              Get in touch in the meantime <ArrowRight size={16} />
            </Link>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
