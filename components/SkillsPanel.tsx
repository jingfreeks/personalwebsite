"use client";

import { useState } from "react";
import { skillCategories, skills, type SkillCategory } from "@/lib/skills";
import { BrandIcon } from "@/components/Icons";

function abbr(name: string) {
  const parts = name.replace(/\(.*?\)/g, "").trim().split(/[\s/.-]+/).filter(Boolean);
  return parts.length > 1 ? (parts[0][0] + parts[1][0]).toUpperCase() : name.slice(0, 2).toUpperCase();
}

export default function SkillsPanel() {
  const [filter, setFilter] = useState<"all" | SkillCategory>("all");
  const groups = skillCategories.filter((c) => c.id !== "all") as { id: SkillCategory; label: string }[];
  const shown = filter === "all" ? groups : groups.filter((g) => g.id === filter);

  return (
    <section id="skills" aria-labelledby="skills-heading">
      <div className="mb-6 flex flex-wrap items-end justify-between gap-3">
        <h2 id="skills-heading" className="font-heading text-3xl font-bold text-primary sm:text-4xl">
          Skills &amp; <span className="text-gradient">Technologies</span>
        </h2>
        <div className="flex flex-wrap gap-1.5" role="group" aria-label="Filter skills by category">
          {skillCategories.map((c) => {
            const on = filter === c.id;
            return (
              <button
                key={c.id}
                type="button"
                aria-pressed={on}
                onClick={() => setFilter(c.id)}
                className={`rounded-lg border px-3 py-1.5 text-xs font-medium transition-colors ${
                  on ? "border-accent-strong bg-accent-strong text-white" : "border-divider text-muted hover:border-accent/60 hover:text-primary"
                }`}
              >
                {c.label}
              </button>
            );
          })}
        </div>
      </div>

      <div className="glass glow-blue rounded-2xl p-4 sm:p-5">
        <div className="space-y-6">
          {shown.map((g) => (
            <div key={g.id}>
              <h3 className="mb-3 font-mono text-[11px] uppercase tracking-[0.14em] text-muted">{g.label}</h3>
              <ul className="grid grid-cols-2 gap-2 sm:grid-cols-3">
                {skills
                  .filter((s) => s.category === g.id)
                  .map((s) => (
                    <li key={s.name} className="card-glow flex items-center gap-2.5 rounded-xl border border-divider/80 bg-surface/60 px-3 py-2.5">
                      <span aria-hidden="true" className="flex h-8 w-8 shrink-0 items-center justify-center rounded-lg border border-accent/30 bg-page/70 text-accent-light">
                        {s.icon ? <BrandIcon slug={s.icon} size={17} /> : <span className="font-mono text-[10px] font-medium">{abbr(s.name)}</span>}
                      </span>
                      <span className="text-sm text-secondary">{s.name}</span>
                    </li>
                  ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
