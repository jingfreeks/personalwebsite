import { qualifications, techStack } from "@/lib/data";
import Reveal from "@/components/Reveal";

export default function Skills() {
  return (
    <Reveal>
      <section id="skills" className="mb-16">
        <h2 className="font-heading mb-[18px] text-[22px] font-semibold">
          Skills &amp; Qualifications
        </h2>
        <div className="mb-6 grid grid-cols-[repeat(auto-fit,minmax(260px,1fr))] gap-2.5">
          {qualifications.map((q) => (
            <div
              key={q}
              className="rounded-md border border-divider px-3.5 py-3 text-[13px] text-body transition-colors hover:border-accent/50"
            >
              {q}
            </div>
          ))}
        </div>
        <div className="mb-2.5 font-mono text-[11px] uppercase tracking-[0.1em] text-accent-light">
          Tech Stack
        </div>
        <div className="flex flex-wrap gap-2">
          {techStack.map((t) => (
            <span
              key={t}
              className="rounded-full border border-divider px-3 py-[5px] font-mono text-xs text-tag transition-colors hover:border-accent/50 hover:text-primary"
            >
              {t}
            </span>
          ))}
        </div>
      </section>
    </Reveal>
  );
}
