import { site } from "@/lib/site";

export default function Philosophy() {
  return (
    <section aria-label="Personal philosophy" className="mx-auto max-w-6xl px-5 pb-16 sm:px-8">
      <figure className="glass glow-blue relative overflow-hidden rounded-3xl px-6 py-14 text-center sm:px-12 sm:py-20">
        <div aria-hidden="true" className="bg-grid pointer-events-none absolute inset-0 opacity-50" />
        <div aria-hidden="true" className="pointer-events-none absolute -right-24 -top-24 h-72 w-72 rounded-full bg-accent/25 blur-[100px]" />
        <div aria-hidden="true" className="pointer-events-none absolute -bottom-28 -left-20 h-64 w-64 rounded-full bg-cyan/15 blur-[100px]" />
        <blockquote className="relative">
          <span aria-hidden="true" className="font-heading block text-6xl leading-none text-accent">&ldquo;</span>
          <p className="font-heading mx-auto max-w-[22ch] text-3xl font-bold leading-tight text-primary sm:text-5xl">{site.quote}</p>
        </blockquote>
        <figcaption className="relative mt-6 font-mono text-sm text-muted">— {site.name}</figcaption>
      </figure>
    </section>
  );
}
