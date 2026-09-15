"use client";

import { useEffect, useState } from "react";
import { navLinks, site } from "@/lib/site";
import { Close, Menu, Send } from "@/components/Icons";

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const [active, setActive] = useState(navLinks[0].href);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    const sections = navLinks
      .map((l) => document.querySelector(l.href))
      .filter((el): el is Element => !!el);
    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((e) => e.isIntersecting)
          .sort((a, b) => a.boundingClientRect.top - b.boundingClientRect.top);
        if (visible.length) setActive(`#${visible[0].target.id}`);
      },
      { rootMargin: "-20% 0px -65% 0px", threshold: 0 },
    );
    sections.forEach((s) => observer.observe(s));
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && setOpen(false);
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [open]);

  return (
    <header
      className={`sticky top-0 z-50 transition-colors duration-300 ${
        scrolled || open ? "border-b border-divider bg-page/92 backdrop-blur-md" : "border-b border-transparent"
      }`}
    >
      <div className="mx-auto flex h-16 max-w-6xl items-center justify-between gap-4 px-5 sm:px-8">
        <a href="#home" className="plain flex items-center gap-3" aria-label="Back to top">
          <span className="font-heading flex h-9 w-9 items-center justify-center rounded-lg bg-gradient-to-br from-accent to-cyan text-sm font-bold text-page">
            LD
          </span>
          <span className="leading-tight">
            <span className="font-heading block whitespace-nowrap text-sm font-semibold text-primary">{site.name}</span>
            <span className="hidden font-mono text-[11px] text-muted lg:block">{site.role}</span>
          </span>
        </a>

        <nav aria-label="Primary" className="hidden items-center gap-0.5 md:flex lg:gap-1">
          {navLinks.map((l) => {
            const isActive = active === l.href;
            return (
              <a
                key={l.href}
                href={l.href}
                aria-current={isActive ? "true" : undefined}
                className={`plain relative whitespace-nowrap rounded-md px-2.5 py-2 text-sm transition-colors lg:px-3 ${
                  isActive ? "text-primary" : "text-muted hover:text-primary"
                }`}
              >
                {l.label}
                {isActive && (
                  <span
                    aria-hidden="true"
                    className="absolute inset-x-3 -bottom-0.5 h-0.5 rounded-full bg-accent"
                  />
                )}
              </a>
            );
          })}
        </nav>

        <div className="flex items-center gap-2">
          <a
            href="#contact"
            className="plain hidden items-center gap-2 whitespace-nowrap rounded-lg border border-accent/50 bg-accent/10 px-4 py-2 text-sm font-semibold text-primary transition-colors hover:bg-accent/20 md:inline-flex"
          >
            Let&apos;s Talk <Send size={16} />
          </a>
          <button
            type="button"
            className="inline-flex h-10 w-10 items-center justify-center rounded-lg border border-divider text-primary md:hidden"
            aria-expanded={open}
            aria-controls="mobile-nav"
            aria-label={open ? "Close menu" : "Open menu"}
            onClick={() => setOpen((v) => !v)}
          >
            {open ? <Close size={20} /> : <Menu size={20} />}
          </button>
        </div>
      </div>

      <div
        id="mobile-nav"
        hidden={!open}
        className="border-t border-divider bg-page/95 backdrop-blur-md md:hidden"
      >
        <nav aria-label="Mobile" className="mx-auto flex max-w-6xl flex-col px-5 py-3 sm:px-8">
          {navLinks.map((l) => (
            <a
              key={l.href}
              href={l.href}
              onClick={() => setOpen(false)}
              className={`plain rounded-md px-3 py-3 text-base ${
                active === l.href ? "text-primary" : "text-muted"
              }`}
            >
              {l.label}
            </a>
          ))}
          <a
            href="#contact"
            onClick={() => setOpen(false)}
            className="plain mt-2 inline-flex items-center justify-center gap-2 rounded-lg bg-accent-strong px-4 py-3 text-sm font-semibold text-white"
          >
            Let&apos;s Talk <Send size={16} />
          </a>
        </nav>
      </div>
    </header>
  );
}
