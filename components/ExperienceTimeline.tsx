import { experience, timeline } from "@/lib/experience";
import { site } from "@/lib/site";
import { ArrowRight } from "@/components/Icons";

export default function ExperienceTimeline() {
  return (
    <section id="experience" aria-labelledby="experience-heading">
      <div className="mb-5 flex flex-wrap items-center justify-between gap-3">
        <h2 id="experience-heading" className="font-heading text-[1.45rem] font-bold leading-none tracking-tight text-primary">
          Work <span className="text-accent-light">Experience</span>
        </h2>
        <a href={site.resumeUrl} download className="plain inline-flex items-center gap-1.5 whitespace-nowrap text-[0.75rem] font-semibold text-link hover:text-accent-light">
          View Full Resume <ArrowRight className="h-4 w-4" />
        </a>
      </div>
      <ol className="relative ml-1.5 border-l-2 border-accent/70 pl-5">
        {timeline.map((job) => (
          <li key={job.dates} className="relative grid gap-x-4 pb-5 last:pb-0 sm:grid-cols-[6.4rem_1fr]">
            <span
              aria-hidden="true"
              className="absolute -left-[1.75rem] top-1 h-3.5 w-3.5 rounded-full border-[3px] border-accent bg-primary shadow-[0_0_0_4px_rgba(22,131,255,0.25),0_0_14px_rgba(22,131,255,0.8)]"
            />
            <div className="text-[0.8rem] text-primary/85">{job.dates}</div>
            <div>
              <h3 className="font-heading text-[0.85rem] font-bold leading-snug text-primary">{job.company}</h3>
              <p className="text-[0.82rem] font-semibold text-primary/95">{job.role}</p>
              <p className="mt-0.5 text-[0.78rem] leading-snug text-primary/75">{job.text}</p>
            </div>
          </li>
        ))}
      </ol>
      <details className="group mt-5 rounded-xl border border-white/10 bg-[#0b1a2e]/70">
        <summary className="cursor-pointer list-none px-4 py-3 text-[0.8rem] font-semibold text-link marker:content-none hover:text-accent-light">
          <span className="group-open:hidden">Show full work history (12 companies)</span>
          <span className="hidden group-open:inline">Hide full work history</span>
        </summary>
        <ol className="space-y-4 border-t border-white/10 px-4 py-4">
          {experience.map((job) => (
            <li key={`${job.company}-${job.dates}`}>
              <div className="text-[0.72rem] text-accent-light">{job.dates}</div>
              {job.summary ? (
                <p className="mt-0.5 text-[0.78rem] leading-snug text-primary/75">{job.title}</p>
              ) : (
                <>
                  <h3 className="font-heading text-[0.85rem] font-bold text-primary">
                    {job.title} · {job.company}
                    {job.location && <span className="font-normal text-primary/60"> — {job.location}</span>}
                  </h3>
                  {job.description && <p className="mt-0.5 text-[0.78rem] leading-snug text-primary/75">{job.description}</p>}
                </>
              )}
            </li>
          ))}
        </ol>
      </details>
    </section>
  );
}
