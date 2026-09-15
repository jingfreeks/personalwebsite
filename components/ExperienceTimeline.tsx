import { experience } from "@/lib/experience";

export default function ExperienceTimeline() {
  return (
    <section id="experience" aria-labelledby="experience-heading" className="mx-auto max-w-6xl px-5 py-20 sm:px-8">
      <div className="mb-10">
        <div className="mb-2 font-mono text-[11px] uppercase tracking-[0.2em] text-accent-light">My journey</div>
        <h2 id="experience-heading" className="font-heading text-3xl font-bold text-primary sm:text-4xl">
          Work Experience
        </h2>
      </div>
      <ol className="relative border-l border-divider pl-8">
        {experience.map((job) => (
          <li key={`${job.company}-${job.dates}`} className="relative pb-9 last:pb-0">
            <span
              aria-hidden="true"
              className="absolute -left-[37px] top-1.5 h-4 w-4 rounded-full border-2 border-accent bg-page shadow-[0_0_0_4px_rgba(22,131,255,0.15)]"
            />
            <div className="font-mono text-xs text-accent-light">{job.dates}</div>
            {job.summary ? (
              <p className="mt-1 text-sm text-muted">
                {job.title} <span className="text-footer">({job.company})</span>
              </p>
            ) : (
              <>
                <h3 className="font-heading mt-1 text-lg font-semibold text-primary">{job.company}</h3>
                <p className="text-sm text-secondary">
                  {job.title}
                  {job.location && <span className="text-muted"> · {job.location}</span>}
                </p>
                {job.description && (
                  <p className="mt-2 max-w-[62ch] text-sm leading-relaxed text-body">{job.description}</p>
                )}
              </>
            )}
          </li>
        ))}
      </ol>
    </section>
  );
}
