"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import { navLinks } from "@/lib/data";

export default function Sidebar() {
  const [active, setActive] = useState(navLinks[0].href);

  useEffect(() => {
    const sections = navLinks
      .map((link) => document.querySelector(link.href))
      .filter((el): el is Element => !!el);

    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((entry) => entry.isIntersecting)
          .sort((a, b) => a.boundingClientRect.top - b.boundingClientRect.top);
        if (visible.length > 0) {
          setActive(`#${visible[0].target.id}`);
        }
      },
      { rootMargin: "-15% 0px -70% 0px", threshold: 0 },
    );

    sections.forEach((section) => observer.observe(section));
    return () => observer.disconnect();
  }, []);

  return (
    <nav className="flex w-full shrink-0 flex-col gap-8 bg-sidebar px-5 py-8 md:w-[220px]">
      <div className="flex items-center gap-2.5">
        <Image
          src="/assets/portrait.jpg"
          alt="Portrait of Lyndell T. Dobluis"
          width={40}
          height={40}
          className="h-10 w-10 rounded-full border-2 border-accent object-cover"
        />
        <div className="font-heading text-[13px] font-semibold leading-tight">
          Lyndell
          <br />
          Dobluis
        </div>
      </div>

      <div className="flex flex-col gap-0.5 text-[13px]">
        {navLinks.map((link) => {
          const isActive = active === link.href;
          return (
            <a
              key={link.href}
              href={link.href}
              className={`plain border-l-2 px-3 py-2.5 transition-colors duration-200 ${
                isActive
                  ? "border-accent text-primary"
                  : "border-transparent text-muted2 hover:border-divider hover:text-primary"
              }`}
            >
              {link.label}
            </a>
          );
        })}
      </div>

      <div className="mt-auto flex flex-col gap-1.5 font-mono text-xs">
        <a
          href="https://www.linkedin.com/in/lyndelldobluis"
          target="_blank"
          rel="noopener noreferrer"
          className="plain text-muted2 transition-colors hover:text-accent-light"
        >
          LinkedIn ↗
        </a>
        <a
          href="https://www.facebook.com/lyndell.dobluis"
          target="_blank"
          rel="noopener noreferrer"
          className="plain text-muted2 transition-colors hover:text-accent-light"
        >
          Facebook ↗
        </a>
      </div>
    </nav>
  );
}
