import Image from "next/image";
import { neonSign, site, socials } from "@/lib/site";
import TechPanel from "@/components/TechPanel";
import { ArrowRight, Download, SocialMark } from "@/components/Icons";

function Monitor({ src, className, sizes = "300px" }: { src: string; className: string; sizes?: string }) {
  return (
    <div aria-hidden="true" className={`monitor absolute overflow-hidden ${className}`}>
      <div className="relative h-full w-full">
        <Image src={src} alt="" fill sizes={sizes} className="object-cover object-left-top opacity-90" />
        <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-page/60 to-transparent" />
      </div>
    </div>
  );
}

const portrait = {
  src: "/assets/portrait-cutout.png",
  alt: `Portrait of ${site.fullName}`,
  width: 506,
  height: 378,
};

export default function Hero() {
  return (
    <section id="home" aria-labelledby="hero-heading" className="relative overflow-hidden">
      {/* ── full-bleed command-center atmosphere ─────────────────────────── */}
      <div aria-hidden="true" className="bg-grid pointer-events-none absolute inset-0 opacity-70" />
      <div aria-hidden="true" className="pointer-events-none absolute -top-40 right-[-6%] h-[620px] w-[620px] rounded-full bg-accent/25 blur-[140px]" />
      <div aria-hidden="true" className="pointer-events-none absolute bottom-[-30%] left-[-12%] h-[460px] w-[460px] rounded-full bg-purple/15 blur-[130px]" />

      {/* lg+: workspace layer behind the portrait — monitors show real Dells Software UI */}
      <div aria-hidden="true" className="pointer-events-none absolute inset-y-0 right-0 hidden w-[64%] lg:block">
        <Monitor src="/assets/projects/tindahan-pos-dashboard.jpg" className="left-[4%] top-[17%] h-[34%] w-[38%] -rotate-[3deg]" />
        <Monitor src="/assets/projects/tindahan-pos-inventory.jpg" className="right-[24%] top-[12%] h-[30%] w-[34%] rotate-[3deg]" />
        <div className="neon absolute right-[3%] top-[10%] max-w-[22%] text-right font-mono text-xs uppercase leading-relaxed tracking-[0.18em]">
          {neonSign}
        </div>
        <div className="absolute inset-x-0 bottom-0 h-[34%] bg-gradient-to-t from-[#03090f] via-[#061426]/85 to-transparent" />
        <div className="absolute inset-x-[8%] bottom-[19%] h-px bg-gradient-to-r from-transparent via-cyan/50 to-transparent" />
      </div>

      <div className="relative mx-auto grid max-w-6xl gap-10 px-5 pb-28 pt-12 sm:px-8 lg:grid-cols-[minmax(0,1fr)_minmax(0,1fr)_240px] lg:items-end lg:gap-8 lg:pt-16">
        {/* ── copy ─────────────────────────────────────────────────────────── */}
        <div className="lg:self-center">
          <div className="mb-5 font-mono text-[11px] uppercase tracking-[0.22em] text-accent-light">{site.tagline}</div>
          <h1 id="hero-heading" className="font-heading text-[44px] font-extrabold leading-[1.02] text-primary sm:text-[58px] lg:text-[52px] xl:text-[62px]">
            <span className="block text-[0.52em] font-semibold text-secondary">Hi, I&apos;m</span>
            {site.firstName} <span className="text-gradient">{site.lastName}</span>
          </h1>
          <p className="font-heading mt-3 text-xl font-semibold text-secondary sm:text-2xl">{site.role}</p>
          <p className="mt-5 max-w-[54ch] text-base leading-relaxed text-body lg:text-[15px] xl:text-lg">{site.intro}</p>

          <div className="mt-7 flex flex-wrap gap-3">
            <a
              href="#contact"
              className="plain inline-flex items-center gap-2 whitespace-nowrap rounded-lg bg-accent-strong px-4 py-3 text-sm font-semibold text-white shadow-[0_14px_34px_-12px_rgba(22,131,255,0.9)] transition-colors hover:bg-accent"
            >
              Let&apos;s Work Together <ArrowRight size={16} />
            </a>
            <a
              href={site.resumeUrl}
              download
              className="plain inline-flex items-center gap-2 whitespace-nowrap rounded-lg border border-divider bg-panel/60 px-4 py-3 text-sm font-semibold text-primary transition-colors hover:border-accent/60"
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

        {/* ── portrait stage ────────────────────────────────────────────────── */}
        <div className="relative">
          {/* below lg: contained scene card */}
          <div className="relative mx-auto aspect-[4/3.6] w-full max-w-[560px] overflow-hidden rounded-3xl border border-divider/70 bg-gradient-to-b from-sidebar via-page to-[#02060d] glow-blue lg:hidden">
            <div aria-hidden="true" className="bg-grid absolute inset-0 opacity-60" />
            <div aria-hidden="true" className="absolute -top-16 left-1/2 h-64 w-[120%] -translate-x-1/2 rounded-full bg-accent/25 blur-[80px]" />
            <div aria-hidden="true" className="neon absolute right-5 top-5 max-w-[46%] text-right font-mono text-[11px] uppercase leading-relaxed tracking-[0.18em] sm:text-xs">
              {neonSign}
            </div>
            <Monitor src="/assets/projects/tindahan-pos-dashboard.jpg" sizes="240px" className="left-[4%] top-[22%] h-[34%] w-[42%] -rotate-[4deg]" />
            <Monitor src="/assets/projects/tindahan-pos-inventory.jpg" sizes="240px" className="right-[4%] top-[28%] h-[30%] w-[38%] rotate-[4deg]" />
            <div aria-hidden="true" className="absolute inset-x-0 bottom-0 h-[26%] bg-gradient-to-t from-[#04101d] via-[#061426]/90 to-transparent" />
            <div aria-hidden="true" className="absolute inset-x-[8%] bottom-[10%] h-px bg-gradient-to-r from-transparent via-cyan/50 to-transparent" />
            <div className="absolute inset-x-0 bottom-0 flex justify-center">
              <Image {...portrait} alt={portrait.alt} sizes="(max-width: 640px) 80vw, 460px" className="fade-bottom h-auto w-[78%] max-w-[460px] drop-shadow-[0_24px_40px_rgba(0,0,0,0.55)]" />
            </div>
          </div>

          {/* lg+: portrait standing on the full-bleed workspace */}
          <div className="relative hidden h-[500px] items-end justify-center lg:flex xl:h-[540px]">
            <div aria-hidden="true" className="absolute bottom-6 left-1/2 h-40 w-[110%] -translate-x-1/2 rounded-full bg-accent/20 blur-[70px]" />
            <Image
              {...portrait} alt={portrait.alt}
              priority
              sizes="(max-width: 1280px) 330px, 400px"
              className="fade-bottom relative h-auto w-full max-w-[420px] drop-shadow-[0_28px_48px_rgba(0,0,0,0.6)]"
            />
          </div>
        </div>

        {/* ── side column: What I Build + quote ─────────────────────────────── */}
        <div className="mx-auto w-full max-w-[560px] lg:max-w-none lg:self-end lg:pb-2">
          <TechPanel />
        </div>
      </div>
    </section>
  );
}
