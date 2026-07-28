import { services } from "@/lib/data";
import Reveal from "@/components/Reveal";

export default function Services() {
  return (
    <Reveal>
      <section id="services" className="mb-16">
        <h2 className="font-heading mb-1.5 text-[22px] font-semibold">
          Services
        </h2>
        <p className="mb-[18px] text-[13px] text-muted">
          How I can help — scoped engagements, not open-ended hours.
        </p>
        <div className="grid grid-cols-[repeat(auto-fit,minmax(260px,1fr))] gap-4">
          {services.map((service) => (
            <div
              key={service.name}
              className="flex flex-col gap-2 rounded-lg border border-divider p-4 transition-colors hover:border-accent/50"
            >
              <div className="font-heading text-base font-medium">
                {service.name}
              </div>
              <p className="text-[13px] leading-relaxed text-body">
                {service.scope}
              </p>
              <div className="mt-auto pt-2 font-mono text-xs text-accent-light">
                {service.timeline}
              </div>
            </div>
          ))}
        </div>
      </section>
    </Reveal>
  );
}
