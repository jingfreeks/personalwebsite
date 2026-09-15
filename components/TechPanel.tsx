import { site, whatIBuild } from "@/lib/site";
import { Globe, Layers, Shield, Code, Target } from "@/components/Icons";

const icons = [Globe, Layers, Shield, Code, Target];

export default function TechPanel() {
  return (
    <div className="flex flex-col gap-3">
      <ul className="rounded-xl border border-white/10 bg-[#0b1a2e]/85 px-2.5 py-2 shadow-[0_18px_50px_-24px_rgba(22,131,255,0.6)] backdrop-blur-md" aria-label="What I build">
        {whatIBuild.map((f, i) => {
          const Icon = icons[i % icons.length];
          return (
            <li key={f} className="flex min-w-0 items-center gap-2 whitespace-nowrap py-[0.3rem] text-[0.68rem] text-primary">
              <span className="flex h-5 w-5 shrink-0 items-center justify-center rounded-md border border-accent/50 bg-accent/12 text-accent-light">
                <Icon className="h-[0.7rem] w-[0.7rem]" />
              </span>
              {f}
            </li>
          );
        })}
      </ul>
      <figure className="rounded-xl border border-white/10 bg-[#0b1a2e]/85 px-4 pb-3 pt-2 backdrop-blur-md">
        <div aria-hidden="true" className="font-heading text-[2.6rem] font-extrabold leading-[0.9] text-accent">&ldquo;</div>
        <blockquote className="font-heading -mt-2 text-[1rem] font-semibold leading-snug text-primary">{site.quote}</blockquote>
        <figcaption className="mt-2 text-xs text-secondary">
          <span aria-hidden="true" className="mr-2 inline-block w-6 border-t border-secondary align-middle" />
          {site.name}
        </figcaption>
      </figure>
    </div>
  );
}
