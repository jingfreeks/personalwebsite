import { achievements } from "@/lib/data";

export default function Achievements() {
  return (
    <section className="mb-14">
      <h2 className="mb-[18px] text-[22px] font-bold">Major Achievements</h2>
      <div className="grid max-w-[640px] grid-cols-[repeat(auto-fit,minmax(240px,1fr))] gap-3.5">
        {achievements.map((a) => (
          <div key={a.year} className="rounded-[10px] bg-panel p-4">
            <div className="text-xl font-bold text-accent-light">{a.year}</div>
            <div className="mt-1 text-[13px] text-body">{a.text}</div>
          </div>
        ))}
      </div>
    </section>
  );
}
