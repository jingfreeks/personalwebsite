import { recognition } from "@/lib/data";
import Reveal from "@/components/Reveal";

export default function Recognition() {
  return (
    <Reveal>
      <section className="mb-16">
        <h2 className="font-heading mb-[18px] text-[22px] font-semibold">
          Recognition
        </h2>
        <div className="grid max-w-[720px] grid-cols-[repeat(auto-fit,minmax(220px,1fr))] gap-3.5">
          {recognition.map((r) => (
            <div
              key={r.year + r.text}
              className="rounded-lg border border-divider p-4 transition-colors hover:border-accent/50"
            >
              <div className="font-mono text-xl font-medium text-accent-light">
                {r.year}
              </div>
              <div className="mt-1 text-[13px] text-body">{r.text}</div>
              {r.link && (
                <a
                  href={r.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-2 inline-block text-xs text-link no-underline hover:underline"
                >
                  View certificate &rarr;
                </a>
              )}
            </div>
          ))}
        </div>
      </section>
    </Reveal>
  );
}
