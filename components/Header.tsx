"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { navLinks, site } from "@/lib/site";
import { Close, Menu, Send } from "@/components/Icons";

export default function Header() {
  const pathname = usePathname();
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const [active, setActive] = useState("home");

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    if (pathname !== "/") return;
    const sections = navLinks
      .map((l) => document.getElementById(l.id))
      .filter((el): el is HTMLElement => !!el);
    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((e) => e.isIntersecting)
          .sort((a, b) => a.boundingClientRect.top - b.boundingClientRect.top);
        if (visible.length) setActive(visible[0].target.id);
      },
      { rootMargin: "-20% 0px -65% 0px", threshold: 0 },
    );
    sections.forEach((s) => observer.observe(s));
    return () => observer.disconnect();
  }, [pathname]);

  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && setOpen(false);
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [open]);

  const isActive = (id: string) => (pathname === "/blog" ? id === "blog" : id === active);

  return (
    <header
      className={`sticky top-0 z-50 transition-colors duration-300 ${
        scrolled || open ? "border-b border-divider/70 bg-page/92 backdrop-blur-md" : "border-b border-transparent"
      }`}
    >
      <div className="mx-auto flex h-16 max-w-6xl items-center justify-between gap-4 px-5 sm:px-8">
        <Link href="/#home" className="plain flex items-center gap-3" aria-label="Home">
          <span className="font-heading flex h-9 w-9 items-center justify-center rounded-lg bg-gradient-to-br from-accent to-cyan text-sm font-bold text-page shadow-[0_8px_24px_-8px_rgba(22,131,255,0.9)]">
            LD
          </span>
          <span className="leading-tight">
            <span className="font-heading block whitespace-nowrap text-sm font-semibold text-primary">{site.name}</span>
            <span className="hidden font-mono text-[11px] text-muted lg:block">{site.role}</span>
          </span>
        </Link>

        <nav aria-label="Primary" className="hidden items-center gap-1 lg:flex">
          {navLinks.map((l) => {
            const on = isActive(l.id);
            return (
              <Link
                key={l.id}
                href={l.href}
                aria-current={on ? "true" : undefined}
                className={`plain relative whitespace-nowrap rounded-md px-3 py-2 text-sm transition-colors ${
                  on ? "text-primary" : "text-muted hover:text-primary"
                }`}
              >
                {l.label}
                {on && <span aria-hidden="true" className="absolute inset-x-3 -bottom-0.5 h-0.5 rounded-full bg-accent" />}
              </Link>
            );
          })}
        </nav>

        <div className="flex items-center gap-2">
          <Link
            href="/#contact"
            className="plain hidden items-center gap-2 whitespace-nowrap rounded-lg border border-accent/60 bg-accent/10 px-4 py-2 text-sm font-semibold text-primary transition-colors hover:bg-accent/20 lg:inline-flex"
          >
            Let&apos;s Talk <Send size={16} />
          </Link>
          <button
            type="button"
            className="inline-flex h-10 w-10 items-center justify-center rounded-lg border border-divider text-primary lg:hidden"
            aria-expanded={open}
            aria-controls="mobile-nav"
            aria-label={open ? "Close menu" : "Open menu"}
            onClick={() => setOpen((v) => !v)}
          >
            {open ? <Close size={20} /> : <Menu size={20} />}
          </button>
        </div>
      </div>

      <div id="mobile-nav" hidden={!open} className="border-t border-divider/70 bg-page/95 backdrop-blur-md lg:hidden">
        <nav aria-label="Mobile" className="mx-auto flex max-w-6xl flex-col px-5 py-3 sm:px-8">
          {navLinks.map((l) => (
            <Link
              key={l.id}
              href={l.href}
              onClick={() => setOpen(false)}
              className={`plain rounded-md px-3 py-3 text-base ${isActive(l.id) ? "text-primary" : "text-muted"}`}
            >
              {l.label}
            </Link>
          ))}
          <Link
            href="/#contact"
            onClick={() => setOpen(false)}
            className="plain mt-2 inline-flex items-center justify-center gap-2 rounded-lg bg-accent-strong px-4 py-3 text-sm font-semibold text-white"
          >
            Let&apos;s Talk <Send size={16} />
          </Link>
        </nav>
      </div>
    </header>
  );
}
