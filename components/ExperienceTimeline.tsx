import { experience } from "@/lib/experience";
import { site } from "@/lib/site";
import { ArrowRight } from "@/components/Icons";

export default function ExperienceTimeline() {
  return (
    <section id="experience" aria-labelledby="experience-heading">
      <div className="mb-8 flex flex-wrap items-end justify-between gap-3">
        <h2 id="experience-heading" className="font-heading text-3xl font-bold text-primary sm:text-4xl">
          Work <span className="text-gradient">Experience</span>
        </h2>
        <a href={site.resumeUrl} download className="plain inline-flex items-center gap-2 text-sm font-semibold text-link hover:text-accent-light">
          View Full Resume <ArrowRight size={16} />
        </a>
      </div>
      <ol className="relative pl-8">
        <span aria-hidden="true" className="timeline-line absolute left-[7px] top-2 bottom-2 w-0.5 rounded-full" />
        {experience.map((job) => (
          <li key={`${job.company}-${job.dates}`} className="relative pb-6 last:pb-0">
            <span
              aria-hidden="true"
              className="absolute -left-8 top-1 h-4 w-4 rounded-full border-2 border-accent-light bg-page shadow-[0_0_0_4px_rgba(22,131,255,0.18),0_0_14px_rgba(34,216,255,0.6)]"
            />
            <div className="font-mono text-xs text-accent-light">{job.dates}</div>
            {job.summary ? (
              <p className="mt-1.5 text-sm leading-relaxed text-muted">{job.title}</p>
            ) : (
              <>
                <h3 className="font-heading mt-1 text-lg font-semibold text-primary">
                  {job.company}
                  {job.location && <span className="font-normal text-muted"> · {job.location}</span>}
                </h3>
                <p className="text-sm font-medium text-secondary">{job.title}</p>
                {job.description && <p className="mt-2 max-w-[60ch] text-sm leading-relaxed text-body">{job.description}</p>}
              </>
            )}
          </li>
        ))}
      </ol>
    </section>
  );
}
