import { navLinks, site } from "@/lib/site";
import { SocialMark } from "@/components/Icons";

const socials = [
  { label: "in", name: "LinkedIn", href: site.linkedin, external: true },
  { label: "GH", name: "GitHub", href: site.github, external: true },
  { label: "@", name: "Email", href: `mailto:${site.email}`, external: false },
];

export default function Footer() {
  return (
    <footer className="border-t border-divider bg-sidebar">
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
            <a key={l.href} href={l.href} className="plain text-muted transition-colors hover:text-primary">
              {l.label}
            </a>
          ))}
        </nav>

        <ul className="flex items-center gap-2" aria-label="Social links">
          {socials.map((s) => (
            <li key={s.name}>
              <a
                href={s.href}
                target={s.external ? "_blank" : undefined}
                rel={s.external ? "noopener noreferrer" : undefined}
                aria-label={s.name}
                className="plain inline-flex h-9 w-9 items-center justify-center rounded-lg border border-divider transition-colors hover:border-accent/50"
              >
                <SocialMark label={s.label} />
              </a>
            </li>
          ))}
        </ul>
      </div>
      <div className="border-t border-divider">
        <p className="mx-auto max-w-6xl px-5 py-4 font-mono text-[11px] text-footer sm:px-8">
          &copy; 2026 {site.name}. All rights reserved.
        </p>
      </div>
    </footer>
  );
}
