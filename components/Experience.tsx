import { experience } from "@/lib/data";
import Reveal from "@/components/Reveal";

export default function Experience() {
  return (
    <Reveal>
      <section id="experience" className="mb-16">
        <h2 className="font-heading mb-[18px] text-[22px] font-semibold">
          Work Experience
        </h2>
        <div className="overflow-hidden rounded-lg border border-divider">
          {experience.map((job, i) => (
            <div
              key={`${job.company}-${job.dates}`}
              className={`grid grid-cols-1 gap-1 px-[18px] py-3.5 text-[13px] transition-colors hover:bg-panel/50 sm:grid-cols-[110px_1.4fr_1fr] sm:items-baseline sm:gap-3.5 ${
                i !== experience.length - 1 ? "border-b border-divider" : ""
              }`}
            >
              <div className="font-mono text-muted">{job.dates}</div>
              <div>
                <span className="font-medium text-primary">{job.title}</span>
                <br />
                <span className="text-[12px] text-muted2">{job.company}</span>
              </div>
              <div className="text-muted sm:text-right">{job.location}</div>
            </div>
          ))}
        </div>
      </section>
    </Reveal>
  );
}
