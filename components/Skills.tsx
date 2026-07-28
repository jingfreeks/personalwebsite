import { skillGroups } from "@/lib/data";
import Reveal from "@/components/Reveal";

export default function Skills() {
  return (
    <Reveal>
      <section id="skills" className="mb-16">
        <h2 className="font-heading mb-[18px] text-[22px] font-semibold">
          Tech Stack
        </h2>
        <div className="flex flex-col gap-5">
          {skillGroups.map((group) => (
            <div key={group.category}>
              <div className="mb-0.5 font-heading text-sm font-medium text-primary">
                {group.category}
              </div>
              <p className="mb-2.5 text-[13px] text-muted">{group.description}</p>
              <div className="flex flex-wrap gap-2">
                {group.items.map((item) => (
                  <span
                    key={item}
                    className="rounded-full border border-divider px-3 py-[5px] font-mono text-xs text-tag transition-colors hover:border-accent/50 hover:text-primary"
                  >
                    {item}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>
    </Reveal>
  );
}
