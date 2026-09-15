import { site } from "@/lib/site";

export default function QuoteCard() {
  return (
    <div className="mx-auto max-w-6xl px-5 pb-20 sm:px-8">
      <figure className="glass relative overflow-hidden rounded-2xl px-6 py-10 text-center sm:px-12 sm:py-14">
        <div aria-hidden="true" className="bg-grid pointer-events-none absolute inset-0 opacity-50" />
        <div
          aria-hidden="true"
          className="pointer-events-none absolute -right-20 -top-20 h-64 w-64 rounded-full bg-accent/20 blur-[90px]"
        />
        <div
          aria-hidden="true"
          className="pointer-events-none absolute -bottom-24 -left-16 h-56 w-56 rounded-full bg-cyan/10 blur-[90px]"
        />
        <blockquote className="relative">
          <span aria-hidden="true" className="font-heading block text-5xl leading-none text-accent">&ldquo;</span>
          <p className="font-heading mx-auto max-w-[24ch] text-2xl font-semibold text-primary sm:text-3xl">
            {site.quote}
          </p>
        </blockquote>
        <figcaption className="relative mt-5 font-mono text-xs text-muted">— {site.name}</figcaption>
      </figure>
    </div>
  );
}
