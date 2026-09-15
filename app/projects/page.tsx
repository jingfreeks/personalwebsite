import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { projects } from "@/lib/projects";
import { site } from "@/lib/site";
import Breadcrumbs from "@/components/Breadcrumbs";
import { ArrowRight, ExternalLink } from "@/components/Icons";

const description =
  "Projects by Lyndell Dobluis: Tindahan POS, inventory and accounting systems for Filipino small businesses, and the Dells Farm online store.";

export const metadata: Metadata = {
  title: "Projects",
  description,
  alternates: { canonical: "/projects" },
  openGraph: { title: `Projects | ${site.name}`, description, url: `${site.url}/projects`, type: "website", images: ["/opengraph-image.png"] },
};

export default function ProjectsPage() {
  return (
    <main className="bg-page text-primary">
      <div className="mx-auto max-w-[64rem] px-5 pb-16 pt-8 sm:px-8">
        <Breadcrumbs items={[{ name: "Projects", href: "/projects" }]} />
        <h1 className="font-heading mt-5 text-[2.2rem] font-bold leading-none tracking-tight text-primary sm:text-[2.6rem]">
          Projects
        </h1>
        <p className="mt-3 max-w-[60ch] text-[1rem] leading-relaxed text-primary/85">
          Business software I&apos;ve designed and built at Dells Software for Filipino small businesses, plus a live
          storefront for a family farm. Each one is real, in use or in active development — no concept work.
        </p>

        <div className="mt-10 space-y-6">
          {projects.map((p) => (
            <article
              key={p.slug}
              id={p.slug}
              className="grid gap-5 rounded-2xl border border-white/10 bg-[#0b1a2e]/80 p-5 sm:p-6 lg:grid-cols-[1fr_20rem] lg:items-center"
            >
              <div>
                <div className="flex flex-wrap items-center gap-2">
                  <span className="rounded-full border border-white/10 bg-[#0e2140] px-2.5 py-0.5 text-[0.68rem] font-medium text-primary/90">{p.category}</span>
                  <span className="rounded-full border border-white/10 px-2.5 py-0.5 text-[0.68rem] text-primary/70">{p.status}</span>
                </div>
                <h2 className="font-heading mt-2.5 text-[1.35rem] font-bold text-primary">{p.name}</h2>
                <p className="mt-2 text-[0.9rem] leading-relaxed text-primary/85">{p.overview}</p>
                <ul className="mt-3 flex flex-wrap gap-1.5" aria-label={`${p.name} technologies`}>
                  {p.tech.map((t) => (
                    <li key={t} className="rounded-lg border border-white/10 bg-[#0e2140] px-2.5 py-1 text-[0.7rem] font-medium text-primary/90">{t}</li>
                  ))}
                </ul>
                <div className="mt-4 flex flex-wrap gap-x-5 gap-y-2 text-[0.85rem] font-semibold">
                  {p.caseStudy && (
                    <Link href={`/projects/${p.slug}`} className="plain inline-flex items-center gap-2 text-link hover:text-accent-light">
                      Read the case study <ArrowRight className="h-4 w-4" />
                    </Link>
                  )}
                  {p.href && (
                    <a href={p.href} target="_blank" rel="noopener noreferrer" className="plain inline-flex items-center gap-2 text-link hover:text-accent-light">
                      {p.hrefLabel ?? "Visit"} <ExternalLink className="h-4 w-4" />
                    </a>
                  )}
                  {!p.caseStudy && !p.href && (
                    <Link href="/#contact" className="plain inline-flex items-center gap-2 text-link hover:text-accent-light">
                      Request a demo <ArrowRight className="h-4 w-4" />
                    </Link>
                  )}
                </div>
              </div>
              <div className="overflow-hidden rounded-xl border border-white/10 bg-[#0d1626]">
                <div className="relative aspect-[16/10]">
                  <Image src={p.image.src} alt={p.image.alt} fill sizes="(max-width: 1024px) 100vw, 320px" className="object-cover object-left-top" />
                </div>
              </div>
            </article>
          ))}
        </div>

        <p className="mt-10 text-[0.9rem] text-primary/80">
          Have a similar system in mind?{" "}
          <Link href="/#contact" className="font-semibold text-link hover:text-accent-light">Let&apos;s talk about it</Link>.
        </p>
      </div>
    </main>
  );
}
