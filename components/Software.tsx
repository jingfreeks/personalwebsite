import Image from "next/image";
import { softwareDeveloped } from "@/lib/data";
import Reveal from "@/components/Reveal";

export default function Software() {
  return (
    <Reveal>
      <section id="software" className="mb-16">
        <h2 className="font-heading mb-1.5 text-[22px] font-semibold">
          Software I&apos;ve Developed
        </h2>
        <p className="mb-[18px] text-[13px] text-muted">
          A sample of apps built across past roles.
        </p>
        <div className="grid grid-cols-[repeat(auto-fit,minmax(220px,1fr))] gap-4">
          {softwareDeveloped.map((app) => (
            <div
              key={app.title}
              className="flex flex-col gap-2 overflow-hidden rounded-lg border border-divider p-3.5 transition-all duration-200 hover:-translate-y-0.5 hover:border-accent/50"
            >
              <div className="relative h-[240px] w-full overflow-hidden rounded-md bg-sidebar">
                <Image
                  src={app.src}
                  alt={app.title}
                  fill
                  className="object-contain"
                  sizes="(max-width: 768px) 100vw, 220px"
                />
              </div>
              <div className="font-mono text-[10px] uppercase tracking-[0.08em] text-accent-light">
                {app.company}
              </div>
              <div className="font-heading text-sm font-medium">{app.title}</div>
              <div className="text-xs text-muted">{app.meta}</div>
            </div>
          ))}
        </div>
      </section>
    </Reveal>
  );
}
