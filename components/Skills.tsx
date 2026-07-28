import { techStack } from "@/lib/data";
import Reveal from "@/components/Reveal";

export default function Skills() {
  return (
    <Reveal>
      <section id="skills" className="mb-16">
        <h2 className="font-heading mb-[18px] text-[22px] font-semibold">
          Tech Stack
        </h2>
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
