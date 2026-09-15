import Image from "next/image";
import { caseStudies } from "@/lib/data";

export default function CaseStudies() {
  return (
    <section id="case-studies" aria-labelledby="client-work-heading" className="mx-auto max-w-6xl px-5 pb-6 sm:px-8">
      <div className="mb-5 flex flex-wrap items-end justify-between gap-3">
        <div>
          <div className="mb-1 font-mono text-[11px] uppercase tracking-[0.2em] text-accent-light">Client work</div>
          <h2 id="client-work-heading" className="font-heading text-2xl font-bold text-primary sm:text-3xl">
            Shipped for clients
          </h2>
        </div>
        <p className="text-sm text-muted">Selected client builds — expand a card for the problem and what I built.</p>
      </div>
      <div className="grid gap-5 sm:grid-cols-3">
        {caseStudies.map((cs) => (
          <article key={cs.title} className="glass card-glow flex flex-col rounded-2xl p-4 hover:-translate-y-0.5">
            <div className="relative mb-3 aspect-[16/10] overflow-hidden rounded-xl border border-divider bg-page/60">
              <Image src={cs.src} alt={cs.title} fill sizes="(max-width: 640px) 90vw, 340px" className="object-contain p-2" />
              {cs.nda && (
                <span className="absolute right-2 top-2 rounded-full border border-divider bg-page/80 px-2 py-0.5 font-mono text-[10px] uppercase tracking-[0.06em] text-muted backdrop-blur">
                  NDA
                </span>
              )}
            </div>
            <div className="font-mono text-[10px] uppercase tracking-[0.08em] text-accent-light">{cs.company}</div>
            <h3 className="font-heading mt-0.5 text-base font-semibold text-primary">{cs.title}</h3>
            <p className="mt-1.5 text-[13px] leading-relaxed text-body">{cs.result}</p>
            <details className="group mt-2 text-[13px]">
              <summary className="cursor-pointer list-none font-semibold text-link hover:text-accent-light">
                <span className="group-open:hidden">Problem &amp; what I built →</span>
                <span className="hidden group-open:inline">Hide details ↑</span>
              </summary>
              <div className="mt-2 space-y-2 text-body">
                <p><span className="font-mono text-[10px] uppercase tracking-[0.08em] text-muted">Problem — </span>{cs.problem}</p>
                <p><span className="font-mono text-[10px] uppercase tracking-[0.08em] text-muted">Built — </span>{cs.build}</p>
              </div>
            </details>
            <ul className="mt-auto flex flex-wrap gap-1.5 pt-3" aria-label="Technologies">
              {cs.tech.map((t) => (
                <li key={t} className="rounded-md border border-divider bg-surface/70 px-2 py-1 font-mono text-[11px] text-tag">{t}</li>
              ))}
            </ul>
          </article>
        ))}
      </div>
    </section>
  );
}
