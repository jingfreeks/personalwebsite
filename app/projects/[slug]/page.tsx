import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { caseStudyProjects, projectBySlug } from "@/lib/projects";
import { site } from "@/lib/site";
import Breadcrumbs from "@/components/Breadcrumbs";
import { ArrowRight, ExternalLink } from "@/components/Icons";

type Params = { slug: string };

export const dynamicParams = false;

export function generateStaticParams(): Params[] {
  return caseStudyProjects.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({ params }: { params: Promise<Params> }): Promise<Metadata> {
  const { slug } = await params;
  const p = projectBySlug(slug);
  if (!p?.caseStudy) return {};
  const title = p.caseStudy.seoTitle ?? `${p.name} — ${p.category}`;
  const combined = `${p.summary} ${p.caseStudy.tagline}`;
  const description = p.caseStudy.seoDescription ?? (combined.length <= 160 ? combined : p.summary);
  return {
    title,
    description,
    alternates: { canonical: `/projects/${p.slug}` },
    openGraph: {
      title: `${title} | ${site.name}`,
      description,
      url: `${site.url}/projects/${p.slug}`,
      type: "article",
      images: [{ url: p.image.src, alt: p.image.alt }],
    },
    twitter: { card: "summary_large_image", title, description, images: [p.image.src] },
  };
}

function Section({ id, title, children }: { id: string; title: string; children: React.ReactNode }) {
  return (
    <section id={id} aria-labelledby={`${id}-heading`} className="mt-10">
      <h2 id={`${id}-heading`} className="font-heading text-[1.35rem] font-bold text-primary">{title}</h2>
      <div className="mt-3 space-y-3 text-[0.95rem] leading-relaxed text-primary/85">{children}</div>
    </section>
  );
}

export default async function ProjectPage({ params }: { params: Promise<Params> }) {
  const { slug } = await params;
  const p = projectBySlug(slug);
  if (!p?.caseStudy) notFound();
  const cs = p.caseStudy;
  const others = caseStudyProjects.filter((o) => o.slug !== p.slug);

  return (
    <main className="bg-page text-primary">
      <article className="mx-auto max-w-[48rem] px-5 pb-16 pt-8 sm:px-8">
        <Breadcrumbs items={[{ name: "Projects", href: "/projects" }, { name: p.name, href: `/projects/${p.slug}` }]} />

        <header className="mt-5">
          <div className="flex flex-wrap items-center gap-2">
            <span className="rounded-full border border-white/10 bg-[#0e2140] px-2.5 py-0.5 text-[0.68rem] font-medium text-primary/90">{p.category}</span>
            <span className="rounded-full border border-white/10 px-2.5 py-0.5 text-[0.68rem] text-primary/70">{p.status}</span>
          </div>
          <h1 className="font-heading mt-3 text-[2.2rem] font-bold leading-none tracking-tight text-primary sm:text-[2.6rem]">{p.name}</h1>
          <p className="mt-3 text-[1.05rem] leading-relaxed text-primary/85">{cs.tagline}</p>
          <div className="mt-4 flex flex-wrap gap-x-5 gap-y-2 text-[0.85rem] font-semibold">
            {p.href && (
              <a href={p.href} target="_blank" rel="noopener noreferrer" className="plain inline-flex items-center gap-2 text-link hover:text-accent-light">
                {p.hrefLabel ?? "Visit"} <ExternalLink className="h-4 w-4" />
              </a>
            )}
            <Link href="/#contact" className="plain inline-flex items-center gap-2 text-link hover:text-accent-light">
              Request a demo <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        </header>

        <figure className="mt-8 overflow-hidden rounded-2xl border border-white/10 bg-[#0d1626]">
          <div className="relative aspect-[16/10]">
            <Image src={cs.gallery[0].src} alt={cs.gallery[0].alt} fill priority sizes="(max-width: 768px) 100vw, 768px" className="object-cover object-left-top" />
          </div>
          <figcaption className="px-4 py-2 text-[0.75rem] text-primary/60">{cs.gallery[0].alt}</figcaption>
        </figure>

        <Section id="overview" title="Project overview">
          <p>{p.overview}</p>
          <p><strong className="font-semibold text-primary">My role:</strong> {cs.role}</p>
        </Section>
        <Section id="problem" title="Problem">{cs.problem.map((t) => <p key={t}>{t}</p>)}</Section>
        <Section id="solution" title="Solution">{cs.solution.map((t) => <p key={t}>{t}</p>)}</Section>
        <Section id="features" title="Key features">
          <ul className="list-disc space-y-1.5 pl-5">{cs.features.map((f) => <li key={f}>{f}</li>)}</ul>
        </Section>
        <Section id="technology" title="Technology">
          <dl className="grid gap-3 sm:grid-cols-2">
            {cs.technology.map((g) => (
              <div key={g.label} className="rounded-xl border border-white/10 bg-[#0b1a2e]/80 p-4">
                <dt className="text-[0.72rem] font-semibold uppercase tracking-[0.15em] text-accent-light">{g.label}</dt>
                <dd className="mt-1.5 text-[0.9rem] text-primary/90">{g.items.join(" · ")}</dd>
              </div>
            ))}
          </dl>
        </Section>
        <Section id="implementation" title="Implementation">{cs.implementation.map((t) => <p key={t}>{t}</p>)}</Section>
        <Section id="challenges" title="Challenges">
          <ul className="list-disc space-y-1.5 pl-5">{cs.challenges.map((c) => <li key={c}>{c}</li>)}</ul>
        </Section>
        <Section id="result" title="Result">{cs.result.map((t) => <p key={t}>{t}</p>)}</Section>

        {cs.gallery.length > 1 && (
          <Section id="screens" title="Screens">
            <div className="grid gap-4 sm:grid-cols-2">
              {cs.gallery.slice(1).map((g) => (
                <figure key={g.src} className="overflow-hidden rounded-xl border border-white/10 bg-[#0d1626]">
                  <div className="relative aspect-[16/10]">
                    <Image src={g.src} alt={g.alt} fill sizes="(max-width: 640px) 100vw, 380px" className="object-cover object-left-top" />
                  </div>
                  <figcaption className="px-3 py-2 text-[0.72rem] text-primary/60">{g.alt}</figcaption>
                </figure>
              ))}
            </div>
          </Section>
        )}

        <nav aria-label="More projects" className="mt-12 border-t border-white/10 pt-6 text-[0.9rem]">
          <p className="text-primary/70">More projects</p>
          <ul className="mt-2 flex flex-wrap gap-x-6 gap-y-2 font-semibold">
            {others.map((o) => (
              <li key={o.slug}>
                <Link href={`/projects/${o.slug}`} className="plain inline-flex items-center gap-1.5 text-link hover:text-accent-light">
                  {o.name} <ArrowRight className="h-4 w-4" />
                </Link>
              </li>
            ))}
            <li>
              <Link href="/projects" className="plain inline-flex items-center gap-1.5 text-link hover:text-accent-light">
                All projects <ArrowRight className="h-4 w-4" />
              </Link>
            </li>
          </ul>
        </nav>
      </article>
    </main>
  );
}
