"use client";

import { useEffect, useRef, type ReactNode } from "react";

export default function Reveal({
  children,
  className = "",
}: {
  children: ReactNode;
  className?: string;
}) {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    // eslint-disable-next-line prefer-const -- assigned later, only when the early-view branch isn't taken
    let observer: IntersectionObserver | undefined;
    let revealed = false;

    const isInView = () => {
      const rect = el.getBoundingClientRect();
      return rect.top < window.innerHeight && rect.bottom > 0;
    };

    const cleanup = () => {
      observer?.disconnect();
      window.removeEventListener("scroll", checkNow);
      window.removeEventListener("hashchange", checkNow);
    };

    const reveal = () => {
      if (revealed) return;
      revealed = true;
      el.classList.add("is-visible");
      cleanup();
    };

    // A hash-link jump (or any instant scroll) can land directly on a
    // section without an intersection transition ever firing for it, so
    // scroll/hashchange are checked directly alongside the observer.
    function checkNow() {
      if (isInView()) reveal();
    }

    if (isInView()) {
      reveal();
      return;
    }

    observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) reveal();
      },
      { threshold: 0.1, rootMargin: "0px 0px -60px 0px" },
    );
    observer.observe(el);
    window.addEventListener("scroll", checkNow, { passive: true });
    window.addEventListener("hashchange", checkNow);

    return cleanup;
  }, []);

  return (
    <div ref={ref} className={`reveal ${className}`}>
      {children}
    </div>
  );
}
