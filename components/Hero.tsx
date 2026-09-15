import Image from "next/image";
import { neonSign, site, socials } from "@/lib/site";
import TechPanel from "@/components/TechPanel";
import { ArrowRight, Download, SocialMark } from "@/components/Icons";

function Monitor({ src, alt, className }: { src: string; alt: string; className: string }) {
  return (
    <div aria-hidden="true" className={`monitor absolute overflow-hidden ${className}`}>
      <div className="relative h-full w-full">
        <Image src={src} alt={alt} fill sizes="240px" className="object-cover object-left-top opacity-90" />
        <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-page/60 to-transparent" />
      </div>
    </div>
  );
}

export default function Hero() {
  return (
    <section id="home" aria-labelledby="hero-heading" className="relative overflow-hidden">
      <div aria-hidden="true" className="bg-grid pointer-events-none absolute inset-0 opacity-70" />
      <div aria-hidden="true" className="pointer-events-none absolute -top-40 right-[-8%] h-[560px] w-[560px] rounded-full bg-accent/25 blur-[130px]" />
      <div aria-hidden="true" className="pointer-events-none absolute bottom-[-30%] left-[-12%] h-[460px] w-[460px] rounded-full bg-purple/15 blur-[130px]" />

      <div className="relative mx-auto grid max-w-6xl gap-12 px-5 pb-28 pt-12 sm:px-8 lg:grid-cols-[1.05fr_0.95fr] lg:items-center lg:pt-16">
        {/* ── Left: copy ─────────────────────────────────────────── */}
        <div>
          <div className="mb-5 font-mono text-[11px] uppercase tracking-[0.22em] text-accent-light">{site.tagline}</div>
          <h1 id="hero-heading" className="font-heading text-[44px] font-extrabold leading-[1.02] text-primary sm:text-[58px] lg:text-[66px]">
            <span className="block text-[0.52em] font-semibold text-secondary">Hi, I&apos;m</span>
            {site.firstName} <span className="text-gradient">{site.lastName}</span>
          </h1>
          <p className="font-heading mt-3 text-xl font-semibold text-secondary sm:text-2xl">{site.role}</p>
          <p className="mt-5 max-w-[54ch] text-base leading-relaxed text-body sm:text-lg">{site.intro}</p>

          <div className="mt-7 flex flex-wrap gap-3">
            <a
              href="#contact"
              className="plain inline-flex items-center gap-2 rounded-lg bg-accent-strong px-5 py-3 text-sm font-semibold text-white shadow-[0_14px_34px_-12px_rgba(22,131,255,0.9)] transition-colors hover:bg-accent"
            >
              Let&apos;s Work Together <ArrowRight size={16} />
            </a>
            <a
              href={site.resumeUrl}
              download
              className="plain inline-flex items-center gap-2 rounded-lg border border-divider bg-panel/60 px-5 py-3 text-sm font-semibold text-primary transition-colors hover:border-accent/60"
            >
              <Download size={16} /> Download Resume
            </a>
          </div>

          <ul className="mt-6 flex flex-wrap items-center gap-2.5" aria-label="Social links">
            {socials.map((s) => (
              <li key={s.key}>
                <a
                  href={s.href}
                  target={s.external ? "_blank" : undefined}
                  rel={s.external ? "noopener noreferrer" : undefined}
                  aria-label={s.name}
                  className="plain inline-flex items-center gap-2 rounded-lg border border-divider bg-panel/50 px-3 py-2 text-xs text-secondary transition-colors hover:border-accent/60 hover:text-primary"
                >
                  <SocialMark kind={s.key as "linkedin" | "github" | "email" | "website"} />
                  {s.name}
                </a>
              </li>
            ))}
          </ul>

          <ul className="mt-5 flex flex-wrap gap-x-6 gap-y-2 font-mono text-xs text-secondary">
            {site.availability.map((a) => (
              <li key={a} className="flex items-center gap-2">
                <span className="status-dot h-2 w-2 rounded-full bg-success shadow-[0_0_10px_rgba(54,214,150,0.9)]" />
                {a}
              </li>
            ))}
          </ul>
        </div>

        {/* ── Right: command-center scene ────────────────────────── */}
        <div className="relative">
          <div className="relative mx-auto aspect-[4/3.6] w-full max-w-[560px] overflow-hidden rounded-3xl border border-divider/70 bg-gradient-to-b from-sidebar via-page to-[#02060d] glow-blue">
            <div aria-hidden="true" className="bg-grid absolute inset-0 opacity-60" />
            <div aria-hidden="true" className="absolute -top-16 left-1/2 h-64 w-[120%] -translate-x-1/2 rounded-full bg-accent/25 blur-[80px]" />

            {/* neon sign */}
            <div aria-hidden="true" className="neon absolute right-5 top-5 max-w-[46%] text-right font-mono text-[11px] uppercase leading-relaxed tracking-[0.18em] sm:text-xs">
              {neonSign}
            </div>

            {/* monitors showing real Dells Software UI */}
            <Monitor src="/assets/projects/tindahan-pos-dashboard.jpg" alt="" className="left-[4%] top-[22%] h-[34%] w-[42%] -rotate-[4deg]" />
            <Monitor src="/assets/projects/tindahan-pos-inventory.jpg" alt="" className="right-[4%] top-[28%] h-[30%] w-[38%] rotate-[4deg]" />

            {/* desk */}
            <div aria-hidden="true" className="absolute inset-x-0 bottom-0 h-[26%] bg-gradient-to-t from-[#04101d] via-[#061426]/90 to-transparent" />
            <div aria-hidden="true" className="absolute inset-x-[8%] bottom-[10%] h-px bg-gradient-to-r from-transparent via-cyan/50 to-transparent" />

            {/* portrait — real photo, background removed on-device, face untouched */}
            <div className="absolute inset-x-0 bottom-0 flex justify-center">
              <Image
                src="/assets/portrait-cutout.png"
                alt={`Portrait of ${site.fullName}`}
                width={506}
                height={378}
                priority
                sizes="(max-width: 640px) 80vw, 460px"
                className="fade-bottom h-auto w-[78%] max-w-[460px] drop-shadow-[0_24px_40px_rgba(0,0,0,0.55)]"
              />
            </div>
          </div>

          {/* floating panel: overlaps the scene on large screens, stacks below on smaller ones */}
          <div className="mx-auto mt-5 w-full max-w-[560px] lg:absolute lg:-bottom-14 lg:-right-4 lg:mt-0 lg:w-[290px]">
            <TechPanel />
          </div>
        </div>
      </div>
    </section>
  );
}
