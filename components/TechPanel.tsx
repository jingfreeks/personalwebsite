import { site, whatIBuild } from "@/lib/site";
import { Check } from "@/components/Icons";

export default function TechPanel() {
  return (
    <div className="flex flex-col gap-3">
      <div className="glass rounded-2xl p-4 shadow-[0_18px_50px_-24px_rgba(22,131,255,0.6)] sm:p-5">
        <div className="mb-3 font-mono text-[11px] uppercase tracking-[0.14em] text-accent-light">What I build</div>
        <ul className="space-y-2">
          {whatIBuild.map((f) => (
            <li key={f} className="flex items-center gap-2.5 text-sm text-secondary">
              <span className="flex h-5 w-5 items-center justify-center rounded-md border border-accent/50 bg-accent/15 text-accent-light">
                <Check size={12} />
              </span>
              {f}
            </li>
          ))}
        </ul>
      </div>
      <figure className="glass rounded-2xl px-4 py-3">
        <blockquote className="font-heading text-sm font-semibold leading-snug text-primary">
          <span aria-hidden="true" className="mr-1 text-accent-light">&ldquo;</span>
          {site.quote}
          <span aria-hidden="true" className="ml-0.5 text-accent-light">&rdquo;</span>
        </blockquote>
        <figcaption className="mt-1 font-mono text-[11px] text-muted">— {site.name}</figcaption>
      </figure>
    </div>
  );
}
