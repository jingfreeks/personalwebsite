import { codeSnippet, focusAreas } from "@/lib/site";
import { Check } from "@/components/Icons";

export default function TechPanel() {
  return (
    <div className="glass rounded-2xl p-4 sm:p-5">
      <div className="mb-3 font-mono text-[11px] uppercase tracking-[0.14em] text-accent-light">
        Focus areas
      </div>
      <ul className="mb-4 space-y-2">
        {focusAreas.map((f) => (
          <li key={f} className="flex items-center gap-2.5 text-sm text-secondary">
            <span className="flex h-5 w-5 items-center justify-center rounded-md border border-accent/40 bg-accent/10 text-accent-light">
              <Check size={12} />
            </span>
            {f}
          </li>
        ))}
      </ul>
      <pre className="overflow-x-auto rounded-lg border border-divider bg-page/70 p-3 font-mono text-[11.5px] leading-relaxed text-secondary">
        <code>{codeSnippet.join("\n")}</code>
      </pre>
    </div>
  );
}
