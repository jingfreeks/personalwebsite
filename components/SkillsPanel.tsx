"use client";

import { useState } from "react";
import { skillCategories, skills, type SkillCategory } from "@/lib/skills";

function abbr(name: string) {
  const clean = name.replace(/\(.*?\)/g, "").trim();
  const parts = clean.split(/[\s/.-]+/).filter(Boolean);
  return parts.length > 1 ? (parts[0][0] + parts[1][0]).toUpperCase() : clean.slice(0, 2).toUpperCase();
}

export default function SkillsPanel() {
  const [filter, setFilter] = useState<"all" | SkillCategory>("all");
  const groups = skillCategories.filter((c) => c.id !== "all") as { id: SkillCategory; label: string }[];
  const shown = filter === "all" ? groups : groups.filter((g) => g.id === filter);

  return (
    <section id="skills" aria-labelledby="skills-heading" className="mx-auto max-w-6xl px-5 py-20 sm:px-8">
      <div className="mb-8 flex flex-wrap items-end justify-between gap-4">
        <div>
          <div className="mb-2 font-mono text-[11px] uppercase tracking-[0.2em] text-accent-light">Tech stack</div>
          <h2 id="skills-heading" className="font-heading text-3xl font-bold text-primary sm:text-4xl">
            Skills &amp; Technologies
          </h2>
        </div>
        <div className="flex flex-wrap gap-1.5" role="group" aria-label="Filter skills by category">
          {skillCategories.map((c) => {
            const on = filter === c.id;
            return (
              <button
                key={c.id}
                type="button"
                aria-pressed={on}
                onClick={() => setFilter(c.id)}
                className={`rounded-lg border px-3 py-1.5 text-sm transition-colors ${
                  on
                    ? "border-accent-strong bg-accent-strong text-white"
                    : "border-divider text-muted hover:border-accent/50 hover:text-primary"
                }`}
              >
                {c.label}
              </button>
            );
          })}
        </div>
      </div>

      <div className="glass rounded-2xl p-5 sm:p-6">
        <div className="space-y-7">
          {shown.map((g) => (
            <div key={g.id}>
              <h3 className="mb-3 font-mono text-[11px] uppercase tracking-[0.14em] text-muted">{g.label}</h3>
              <ul className="grid grid-cols-2 gap-2.5 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6">
                {skills
                  .filter((s) => s.category === g.id)
                  .map((s) => (
                    <li
                      key={s.name}
                      className="card-glow flex items-center gap-2.5 rounded-xl border border-divider bg-surface/50 px-3 py-2.5"
                    >
                      <span
                        aria-hidden="true"
                        className="flex h-8 w-8 shrink-0 items-center justify-center rounded-lg border border-accent/30 bg-accent/10 font-mono text-[11px] font-medium text-accent-light"
                      >
                        {abbr(s.name)}
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
