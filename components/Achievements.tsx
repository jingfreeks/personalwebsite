import { achievements } from "@/lib/data";
import Reveal from "@/components/Reveal";

export default function Achievements() {
  return (
    <Reveal>
      <section className="mb-16">
        <h2 className="font-heading mb-[18px] text-[22px] font-semibold">
          Major Achievements
        </h2>
        <div className="grid max-w-[640px] grid-cols-[repeat(auto-fit,minmax(240px,1fr))] gap-3.5">
          {achievements.map((a) => (
            <div
              key={a.year}
              className="rounded-lg border border-divider p-4 transition-colors hover:border-accent/50"
            >
              <div className="font-mono text-xl font-medium text-accent-light">
                {a.year}
              </div>
              <div className="mt-1 text-[13px] text-body">{a.text}</div>
            </div>
          ))}
        </div>
      </section>
    </Reveal>
  );
}
