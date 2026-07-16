import { qualifications, techStack } from "@/lib/data";

export default function Skills() {
  return (
    <section id="skills" className="mb-14">
      <h2 className="mb-[18px] text-[22px] font-bold">Skills &amp; Qualifications</h2>
      <div className="mb-6 grid grid-cols-[repeat(auto-fit,minmax(260px,1fr))] gap-2.5">
        {qualifications.map((q) => (
          <div
            key={q}
            className="rounded-lg bg-panel px-3.5 py-3 text-[13px] text-body"
          >
            {q}
          </div>
        ))}
      </div>
      <div className="mb-2.5 text-[11px] uppercase tracking-[0.1em] text-accent-light">
        Tech Stack
      </div>
      <div className="flex flex-wrap gap-2">
        {techStack.map((t) => (
          <span
            key={t}
            className="rounded-full bg-divider px-3 py-[5px] text-xs text-tag"
          >
            {t}
          </span>
        ))}
      </div>
    </section>
  );
}
