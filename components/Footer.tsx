import { navLinks, site, socials } from "@/lib/site";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight, SocialMark } from "@/components/Icons";

export default function Footer() {
  return (
    <footer className="border-t border-white/10 bg-[#050d18]">
      <div className="mx-auto flex max-w-[64rem] flex-col gap-6 px-5 py-8 sm:px-8 lg:max-w-none lg:flex-row lg:items-center lg:justify-between lg:gap-4 lg:px-[3%]">
        <div className="flex items-center gap-3">
          <Image src="/assets/logo-mark-dark.png" alt="" width={230} height={256} className="h-11 w-auto" />
          <div className="leading-tight">
            <div className="font-heading whitespace-nowrap text-[0.95rem] font-semibold text-primary">{site.name}</div>
            <div className="whitespace-nowrap text-[0.72rem] text-secondary">{site.role}</div>
          </div>
        </div>

        <nav aria-label="Footer" className="flex flex-wrap gap-x-4 gap-y-2 whitespace-nowrap text-[0.74rem] lg:shrink-0">
          {navLinks.map((l) => (
            <Link key={l.id} href={l.href} className="plain text-primary/85 transition-colors hover:text-primary">
              {l.label}
            </Link>
          ))}
        </nav>

        <ul className="flex items-center gap-3" aria-label="Social links">
          {socials.map((s) => (
            <li key={s.key}>
              <a
                href={s.href}
                target={s.external ? "_blank" : undefined}
                rel={s.external ? "noopener noreferrer" : undefined}
                aria-label={s.name}
                className="plain inline-flex h-8 w-8 items-center justify-center text-primary transition-colors hover:text-accent-light [&_span]:h-6 [&_span]:w-6 [&_svg]:h-6 [&_svg]:w-6"
              >
                <SocialMark kind={s.key as "linkedin" | "github" | "email" | "website"} />
              </a>
            </li>
          ))}
        </ul>

        <p className="whitespace-nowrap text-[0.72rem] leading-snug text-secondary">
          &copy; 2026 {site.name}.
          <br />
          All rights reserved.
        </p>

        <Link
          href="/#home"
          aria-label="Back to top"
          className="plain inline-flex h-11 w-11 items-center justify-center rounded-full border border-accent/70 bg-page/40 text-accent-light shadow-[0_0_16px_rgba(22,131,255,0.4)] transition-colors hover:bg-accent/20"
        >
          <ArrowRight className="h-4 w-4 -rotate-90" />
        </Link>
      </div>
    </footer>
  );
}
