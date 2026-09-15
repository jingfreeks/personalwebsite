import Image from "next/image";
import { site } from "@/lib/site";
import TechPanel from "@/components/TechPanel";
import { ArrowRight, SocialMark } from "@/components/Icons";

const socials = [
  { label: "in", name: "LinkedIn", href: site.linkedin, external: true },
  { label: "GH", name: "GitHub", href: site.github, external: true },
  { label: "@", name: "Email", href: `mailto:${site.email}`, external: false },
];

export default function Hero() {
  return (
    <section id="home" aria-labelledby="hero-heading" className="relative overflow-hidden">
      {/* command-center atmosphere: grid + soft glows (decorative) */}
      <div aria-hidden="true" className="bg-grid pointer-events-none absolute inset-0 opacity-60" />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -top-32 right-[-10%] h-[520px] w-[520px] rounded-full bg-accent/20 blur-[120px]"
      />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute bottom-[-20%] left-[-10%] h-[420px] w-[420px] rounded-full bg-purple/10 blur-[120px]"
      />

      <div className="relative mx-auto grid max-w-6xl gap-12 px-5 pb-28 pt-14 sm:px-8 lg:grid-cols-[1.1fr_0.9fr] lg:items-center lg:pt-20">
        <div>
          <div className="mb-5 font-mono text-[11px] uppercase tracking-[0.2em] text-accent-light">
            {site.tagline}
          </div>
          <h1
            id="hero-heading"
            className="font-heading text-[42px] font-extrabold leading-[1.05] text-primary sm:text-[56px] lg:text-[64px]"
          >
            <span className="block text-[0.55em] font-semibold text-secondary">Hi, I&apos;m</span>
            {site.firstName} <span className="text-gradient">{site.lastName}</span>
          </h1>
          <p className="font-heading mt-3 text-xl font-semibold text-secondary sm:text-2xl">
            {site.role}
          </p>
          <p className="mt-5 max-w-[56ch] text-base leading-relaxed text-body sm:text-lg">
            {site.intro}
          </p>

          <div className="mt-7 flex flex-wrap gap-3">
            <a
              href="#contact"
              className="plain inline-flex items-center gap-2 rounded-lg bg-accent-strong px-5 py-3 text-sm font-semibold text-white shadow-[0_12px_30px_-12px_rgba(22,131,255,0.8)] transition-colors hover:bg-accent"
            >
              Let&apos;s Work Together <ArrowRight size={16} />
            </a>
            {site.resumeUrl ? (
              <a
                href={site.resumeUrl}
                download
                className="plain inline-flex items-center gap-2 rounded-lg border border-input-border px-5 py-3 text-sm font-semibold text-primary transition-colors hover:border-accent/50"
              >
                Download Resume
              </a>
            ) : (
              <a
                href="#projects"
                className="plain inline-flex items-center gap-2 rounded-lg border border-input-border px-5 py-3 text-sm font-semibold text-primary transition-colors hover:border-accent/50"
              >
                See my work
              </a>
            )}
          </div>

          <ul className="mt-6 flex flex-wrap gap-x-6 gap-y-2 font-mono text-xs text-secondary">
            {site.availability.map((a) => (
              <li key={a} className="flex items-center gap-2">
                <span className="status-dot h-2 w-2 rounded-full bg-success" />
                {a}
              </li>
            ))}
          </ul>

          <ul className="mt-6 flex items-center gap-3" aria-label="Social links">
            {socials.map((s) => (
              <li key={s.name}>
                <a
                  href={s.href}
                  target={s.external ? "_blank" : undefined}
                  rel={s.external ? "noopener noreferrer" : undefined}
                  aria-label={s.name}
                  className="plain inline-flex items-center gap-2 rounded-lg border border-divider px-3 py-2 text-xs text-muted transition-colors hover:border-accent/50 hover:text-primary"
                >
                  <SocialMark label={s.label} />
                  {s.name}
                </a>
              </li>
            ))}
          </ul>
        </div>

        {/* Portrait + technical panel. Order on mobile: text, portrait, panel. */}
        <div className="flex flex-col gap-5 lg:relative">
          <figure className="glass relative mx-auto w-full max-w-[420px] overflow-hidden rounded-2xl p-3 shadow-[0_30px_80px_-30px_rgba(22,131,255,0.5)]">
            <div className="relative overflow-hidden rounded-xl">
              <Image
                src="/assets/portrait.jpg"
                alt={`Portrait of ${site.fullName}`}
                width={506}
                height={378}
                priority
                sizes="(max-width: 1024px) 90vw, 420px"
                className="h-auto w-full"
              />
              <div
                aria-hidden="true"
                className="pointer-events-none absolute inset-0 bg-gradient-to-t from-page/70 via-transparent to-transparent"
              />
            </div>
            <figcaption className="mt-3 flex items-center justify-between px-1 font-mono text-[11px] text-muted">
              <span>{site.fullName}</span>
              <span>{site.location} · {site.timezone}</span>
            </figcaption>
          </figure>
          <div className="mx-auto w-full max-w-[420px] lg:absolute lg:-bottom-16 lg:-right-6 lg:max-w-[300px]">
            <TechPanel />
          </div>
        </div>
      </div>
    </section>
  );
}
