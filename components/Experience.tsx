import { experience } from "@/lib/data";

export default function Experience() {
  return (
    <section id="experience" className="mb-14">
      <h2 className="mb-[18px] text-[22px] font-bold">Work Experience</h2>
      <div className="overflow-hidden rounded-[10px] bg-panel">
        {experience.map((job, i) => (
          <div
            key={`${job.company}-${job.dates}`}
            className={`grid grid-cols-1 gap-1 px-[18px] py-3.5 text-[13px] sm:grid-cols-[110px_1.4fr_1fr] sm:items-baseline sm:gap-3.5 ${
              i !== experience.length - 1 ? "border-b border-divider" : ""
            }`}
          >
            <div className="text-muted">{job.dates}</div>
            <div>
              <span className="font-semibold">{job.title}</span>
              <br />
              <span className="text-[12px] text-muted2">{job.company}</span>
            </div>
            <div className="text-muted sm:text-right">{job.location}</div>
          </div>
        ))}
      </div>
    </section>
  );
}
