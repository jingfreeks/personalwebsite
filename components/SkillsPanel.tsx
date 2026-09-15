"use client";

import { useState } from "react";
import { brandColors, featuredOrder, skillCategories, skills, type SkillCategory } from "@/lib/skills";
import { ArrowRight } from "@/components/Icons";

function abbr(name: string) {
  const parts = name.replace(/\(.*?\)/g, "").trim().split(/[\s/.-]+/).filter(Boolean);
  return parts.length > 1 ? (parts[0][0] + parts[1][0]).toUpperCase() : name.slice(0, 2).toUpperCase();
}

export default function SkillsPanel() {
  const [filter, setFilter] = useState<"all" | SkillCategory>("all");
  const [showAll, setShowAll] = useState(false);
  const byName = new Map(skills.map((s) => [s.name, s]));
  const items =
    filter === "all"
      ? showAll
        ? skills
        : featuredOrder.map((n) => byName.get(n)!).filter(Boolean)
      : skills.filter((s) => s.category === filter);
  const rows: (typeof skills)[] = [];
  for (let i = 0; i < items.length; i += 6) rows.push(items.slice(i, i + 6));

  return (
    <section id="skills" aria-labelledby="skills-heading">
      <div className="mb-4 flex flex-wrap items-center justify-between gap-3">
        <h2 id="skills-heading" className="font-heading text-[1.45rem] font-bold leading-none tracking-tight text-primary">
          Skills &amp; Technologies
        </h2>
        <button
          type="button"
          onClick={() => { setFilter("all"); setShowAll((v) => !v); }}
          aria-expanded={showAll}
          className="inline-flex items-center gap-1.5 whitespace-nowrap text-[0.75rem] font-semibold text-link hover:text-accent-light"
        >
          {showAll ? "Show Fewer Skills" : "View All Skills"} <ArrowRight className="h-4 w-4" />
        </button>
      </div>

      <div className="mb-3 flex gap-1 overflow-x-auto rounded-xl border border-white/10 bg-[#0b1a2e]/80 p-1" role="group" aria-label="Filter skills by category">
        {skillCategories.map((c) => {
          const on = filter === c.id;
          return (
            <button
              key={c.id}
              type="button"
              aria-pressed={on}
              onClick={() => setFilter(c.id)}
              className={`flex-1 whitespace-nowrap rounded-lg px-2 py-1.5 text-[0.72rem] font-medium transition-colors ${
                on ? "bg-accent-strong text-white shadow-[0_0_16px_rgba(22,131,255,0.6)]" : "text-primary/80 hover:text-primary"
              }`}
            >
              {c.label}
            </button>
          );
        })}
      </div>

      <div className="space-y-2">
        {rows.map((row, i) => (
          <ul key={i} className="grid grid-cols-3 gap-y-3 rounded-xl border border-white/10 bg-[#0b1a2e]/80 px-1.5 py-3 sm:grid-cols-6">
            {row.map((s) => (
              <li key={s.name} className="flex flex-col items-center gap-1.5 text-center">
                <span
                  aria-hidden="true"
                  className="flex h-8 w-8 items-center justify-center"
                  style={s.icon ? { color: brandColors[s.icon] ?? "#93a7bd" } : undefined}
                >
                  {s.icon ? (
                    <span
                      className="icon-mask h-7 w-7"
                      style={{ WebkitMaskImage: `url(/icons/${s.icon}.svg)`, maskImage: `url(/icons/${s.icon}.svg)` }}
                    />
                  ) : (
                    <span className="flex h-8 w-8 items-center justify-center rounded-lg bg-white/10 font-mono text-[0.6rem] font-semibold text-primary">
                      {abbr(s.name)}
                    </span>
                  )}
                </span>
                <span className="text-[0.6rem] leading-tight text-primary/90">{s.name}</span>
              </li>
            ))}
          </ul>
        ))}
      </div>
    </section>
  );
}
