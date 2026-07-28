import { experience } from "@/lib/data";
import Reveal from "@/components/Reveal";

export default function Experience() {
  return (
    <Reveal>
      <section id="experience" className="mb-16">
        <h2 className="font-heading mb-[18px] text-[22px] font-semibold">
          Experience
        </h2>
        <div className="overflow-hidden rounded-lg border border-divider">
          {experience.map((job, i) => (
            <div
              key={`${job.company}-${job.dates}`}
              className={`px-[18px] py-3.5 text-[13px] transition-colors hover:bg-panel/50 ${
                i !== experience.length - 1 ? "border-b border-divider" : ""
              } ${
                job.summary
                  ? "flex flex-col gap-1 sm:flex-row sm:items-baseline sm:gap-3.5"
                  : "grid grid-cols-1 gap-1 sm:grid-cols-[110px_1.4fr_1fr] sm:items-baseline sm:gap-3.5"
              }`}
            >
              {job.summary ? (
                <>
                  <div className="font-mono text-muted sm:w-[110px] sm:shrink-0">
                    {job.dates}
                  </div>
                  <div className="text-muted2">
                    {job.title}
                    <span className="text-muted"> ({job.company})</span>
                  </div>
                </>
              ) : (
                <>
                  <div className="font-mono text-muted">{job.dates}</div>
                  <div>
                    <span className="font-medium text-primary">{job.title}</span>
                    <br />
                    <span className="text-[12px] text-muted2">{job.company}</span>
                  </div>
                  <div className="text-muted sm:text-right">{job.location}</div>
                </>
              )}
            </div>
          ))}
        </div>
      </section>
    </Reveal>
  );
}
