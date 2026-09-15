import Image from "next/image";
import { neonSign, site, socials } from "@/lib/site";
import TechPanel from "@/components/TechPanel";
import StatsBar from "@/components/StatsBar";
import { ArrowRight, Download, SocialMark } from "@/components/Icons";

/*
 * The backdrop is the workspace scene from the approved design (monitors,
 * portrait, neon sign, desk). Everything readable — headline, copy, buttons,
 * panels — is real HTML layered on top so it stays selectable, linkable and
 * responsive.
 */
export default function Hero() {
  return (
    <section id="home" aria-labelledby="hero-heading" className="relative overflow-hidden bg-[#020811] lg:-mt-14 lg:aspect-[1024/500]">
      {/* ── lg+: full-bleed workspace scene (design image with its baked-in UI erased) ── */}
      <div aria-hidden="true" className="pointer-events-none absolute inset-0 hidden lg:block">
        <Image src="/assets/hero/workspace.jpg" alt="" fill priority sizes="100vw" className="object-cover object-top" />
        {/* light readability gradient behind the copy */}
        <div className="absolute inset-y-0 left-0 w-[46%] bg-gradient-to-r from-[#020811]/70 via-[#020811]/35 to-transparent" />
        <div className="absolute inset-x-0 bottom-0 h-[10%] bg-gradient-to-t from-[#020811]/80 to-transparent" />
      </div>

      <div className="relative mx-auto max-w-[64rem] px-5 sm:px-8 lg:absolute lg:inset-0 lg:max-w-none lg:pl-[5.4%] lg:pr-[1.8%]">
        <div className="grid gap-10 pb-24 pt-10 lg:grid-cols-[42%_1fr_19.5%] lg:gap-4 lg:pb-0 lg:pt-[7%]">
          {/* ── copy ─────────────────────────────────────────────────────── */}
          <div>
            <div className="mb-2.5 text-[0.68rem] font-medium uppercase tracking-[0.34em] text-primary/95">
              {site.tagline} <span className="text-accent-light">›</span>
            </div>
            <h1 id="hero-heading" className="font-heading text-[2.875rem] font-bold leading-[0.98] tracking-[-0.02em] text-primary sm:text-[3.625rem] lg:text-[2.8rem]">
              <span className="block">Hi, I&rsquo;m</span>
              <span className="block">
                {site.firstName} <span className="text-accent">{site.lastName}</span>
              </span>
            </h1>
            <p className="font-heading mt-1 text-2xl font-semibold text-primary lg:text-[1.4rem]">{site.role}</p>
            <p className="mt-3 max-w-[48ch] text-[0.9375rem] leading-relaxed text-primary/90 lg:max-w-[22rem] lg:text-[0.9rem] lg:leading-[1.4]">{site.intro}</p>

            <div className="mt-4 flex flex-wrap gap-3">
              <a
                href="#contact"
                className="plain inline-flex h-11 items-center gap-2 whitespace-nowrap rounded-[10px] bg-accent px-5 text-[0.85rem] font-medium text-white shadow-[0_0_28px_rgba(22,131,255,0.55)] transition-colors hover:bg-accent-strong"
              >
                Let&apos;s Work Together <ArrowRight className="h-4 w-4" />
              </a>
              <a
                href={site.resumeUrl}
                download
                className="plain inline-flex h-11 items-center gap-2 whitespace-nowrap rounded-[10px] border border-primary/70 bg-page/30 px-4 text-[0.85rem] font-medium text-primary backdrop-blur-sm transition-colors hover:border-primary"
              >
                <Download className="h-4 w-4" /> Download Resume
              </a>
            </div>

            <ul className="mt-3.5 flex flex-wrap gap-x-5 gap-y-2 text-[0.78rem] text-primary/95">
              {site.availability.map((a) => (
                <li key={a} className="flex items-center gap-2">
                  <span className="status-dot h-2 w-2 rounded-full bg-success shadow-[0_0_10px_rgba(54,214,150,0.9)]" />
                  {a}
                </li>
              ))}
            </ul>

            <ul className="mt-4 flex flex-wrap items-center gap-2 lg:hidden" aria-label="Social links">
              {socials.map((s) => (
                <li key={s.key}>
                  <a
                    href={s.href}
                    target={s.external ? "_blank" : undefined}
                    rel={s.external ? "noopener noreferrer" : undefined}
                    aria-label={s.name}
                    className="plain inline-flex items-center gap-2 rounded-lg border border-divider bg-panel/60 px-3 py-1.5 text-xs text-secondary transition-colors hover:border-accent/60 hover:text-primary"
                  >
                    <SocialMark kind={s.key as "linkedin" | "github" | "email" | "website"} />
                    {s.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* ── below lg: scene card ─────────────────────────────────────── */}
          <div className="relative overflow-hidden rounded-3xl border border-divider/70 glow-blue lg:hidden">
            <Image
              src="/assets/hero/workspace-mobile.jpg"
              alt={`${site.fullName} at a desk with code on the monitors behind`}
              width={440}
              height={384}
              priority
              sizes="(max-width: 640px) 100vw, 560px"
              className="h-auto w-full"
            />
          </div>
          <p className="sr-only">{neonSign}</p>

          {/* middle column is the portrait in the backdrop */}
          <div aria-hidden="true" className="hidden lg:block" />

          {/* ── right column: What I build + quote ───────────────────────── */}
          <div className="lg:pt-[37%]">
            <TechPanel />
          </div>
        </div>
      </div>
      <StatsBar />
    </section>
  );
}
