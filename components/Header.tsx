"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
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
        scrolled || open ? "border-b border-divider/70 bg-page/92 backdrop-blur-md" : "border-b border-transparent bg-transparent"
      }`}
    >
      <div className="mx-auto flex h-16 max-w-6xl items-center justify-between gap-4 px-5 sm:px-8 lg:h-14 lg:max-w-none lg:pl-[5.4%] lg:pr-[3%]">
        <Link href="/#home" className="plain flex items-center gap-3">
          <Image
            src="/assets/logo-mark-dark.png"
            alt=""
            width={230}
            height={256}
            priority
            className="h-11 w-auto drop-shadow-[0_0_12px_rgba(22,131,255,0.5)] lg:h-[2.9rem]"
          />
          <span className="leading-tight">
            <span className="font-heading block whitespace-nowrap text-[0.85rem] font-semibold text-primary">{site.name}</span>
            <span className="block text-[0.68rem] text-secondary">{site.role}</span>
          </span>
        </Link>

        <nav aria-label="Primary" className="hidden items-center gap-1 rounded-xl bg-[#0b1a2e]/70 px-3 py-1 backdrop-blur-sm lg:flex">
          {navLinks.map((l) => {
            const on = isActive(l.id);
            return (
              <Link
                key={l.id}
                href={l.href}
                aria-current={on ? "true" : undefined}
                className={`plain relative whitespace-nowrap rounded-md px-3.5 py-1.5 text-[0.76rem] font-medium transition-colors ${
                  on ? "text-primary" : "text-secondary hover:text-primary"
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
            className="plain hidden items-center gap-2 whitespace-nowrap rounded-xl border border-accent/80 bg-page/40 px-5 py-2 text-[0.78rem] font-medium text-primary shadow-[0_0_18px_rgba(22,131,255,0.45)] transition-colors hover:bg-accent/20 lg:inline-flex"
          >
            Let&apos;s Talk <Send className="h-4 w-4" />
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
            Let&apos;s Talk <Send className="h-4 w-4" />
          </Link>
        </nav>
      </div>
    </header>
  );
}
