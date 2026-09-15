import { navLinks, site, socials } from "@/lib/site";
import Link from "next/link";
import { ArrowRight, SocialMark } from "@/components/Icons";

export default function Footer() {
  return (
    <footer className="border-t border-divider/60 bg-sidebar">
      <div className="mx-auto flex max-w-6xl flex-col gap-8 px-5 py-10 sm:px-8 md:flex-row md:items-center md:justify-between">
        <div className="flex items-center gap-3">
          <span className="font-heading flex h-10 w-10 items-center justify-center rounded-lg bg-gradient-to-br from-accent to-cyan text-sm font-bold text-page">
            LD
          </span>
          <div className="leading-tight">
            <div className="font-heading text-sm font-semibold text-primary">{site.name}</div>
            <div className="font-mono text-[11px] text-muted">{site.role}</div>
          </div>
        </div>

        <nav aria-label="Footer" className="flex flex-wrap gap-x-5 gap-y-2 text-sm">
          {navLinks.map((l) => (
            <Link key={l.id} href={l.href} className="plain text-muted transition-colors hover:text-primary">
              {l.label}
            </Link>
          ))}
        </nav>

        <ul className="flex items-center gap-2" aria-label="Social links">
          {socials.map((s) => (
            <li key={s.key}>
              <a
                href={s.href}
                target={s.external ? "_blank" : undefined}
                rel={s.external ? "noopener noreferrer" : undefined}
                aria-label={s.name}
                className="plain inline-flex h-9 w-9 items-center justify-center rounded-lg border border-divider text-secondary transition-colors hover:border-accent/60 hover:text-primary"
              >
                <SocialMark kind={s.key as "linkedin" | "github" | "email" | "website"} />
              </a>
            </li>
          ))}
        </ul>
      </div>
      <div className="border-t border-divider/60">
        <div className="mx-auto flex max-w-6xl items-center justify-between px-5 py-4 sm:px-8">
          <p className="font-mono text-[11px] text-footer">&copy; 2026 {site.name}. All rights reserved.</p>
          <Link href="/#home" aria-label="Back to top" className="plain inline-flex h-9 w-9 items-center justify-center rounded-full border border-accent/50 bg-accent/10 text-accent-light transition-colors hover:bg-accent/20">
            <ArrowRight size={16} className="-rotate-90" />
          </Link>
        </div>
      </div>
    </footer>
  );
}
