import Image from "next/image";
import { caseStudies } from "@/lib/data";
import Reveal from "@/components/Reveal";

export default function CaseStudies() {
  return (
    <Reveal>
      <section id="case-studies" className="mb-16">
        <div className="mb-2 font-mono text-[11px] uppercase tracking-[0.2em] text-accent-light">
          Client work
        </div>
        <h2 className="font-heading mb-1.5 text-3xl font-bold sm:text-4xl">
          Case Studies
        </h2>
        <p className="mb-[18px] text-[13px] text-muted">
          Selected client builds — problem, what I built, and the result.
        </p>
        <div className="flex flex-col gap-5">
          {caseStudies.map((cs) => (
            <div
              key={cs.title}
              className="grid grid-cols-1 gap-4 rounded-lg border border-divider p-4 transition-colors hover:border-accent/50 sm:grid-cols-[220px_1fr]"
            >
              <div className="relative h-[180px] w-full overflow-hidden rounded-md bg-sidebar sm:h-full">
                <Image
                  src={cs.src}
                  alt={cs.title}
                  fill
                  className="object-contain"
                  sizes="(max-width: 768px) 100vw, 220px"
                />
              </div>
              <div className="flex flex-col gap-3">
                <div className="flex items-start justify-between gap-3">
                  <div>
                    <div className="font-mono text-[10px] uppercase tracking-[0.08em] text-accent-light">
                      {cs.company}
                    </div>
                    <div className="font-heading text-base font-medium">
                      {cs.title}
                    </div>
                  </div>
                  {cs.nda && (
                    <span className="shrink-0 rounded-full border border-divider px-2.5 py-[3px] font-mono text-[10px] uppercase tracking-[0.06em] text-muted">
                      NDA
                    </span>
                  )}
                </div>
                <div className="grid grid-cols-1 gap-3 text-[13px] leading-relaxed sm:grid-cols-3">
                  <div>
                    <div className="mb-1 font-mono text-[10px] uppercase tracking-[0.08em] text-muted">
                      Problem
                    </div>
                    <p className="text-body">{cs.problem}</p>
                  </div>
                  <div>
                    <div className="mb-1 font-mono text-[10px] uppercase tracking-[0.08em] text-muted">
                      What I built
                    </div>
                    <p className="text-body">{cs.build}</p>
                  </div>
                  <div>
                    <div className="mb-1 font-mono text-[10px] uppercase tracking-[0.08em] text-muted">
                      Result
                    </div>
                    <p className="text-body">{cs.result}</p>
                  </div>
                </div>
                <div className="flex flex-wrap gap-2">
                  {cs.tech.map((t) => (
                    <span
                      key={t}
                      className="rounded-full border border-divider px-2.5 py-[3px] font-mono text-[11px] text-tag"
                    >
                      {t}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>
    </Reveal>
  );
}
