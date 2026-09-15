import { values } from "@/lib/site";
import ValueCard from "@/components/ValueCard";

export default function Values() {
  return (
    <section aria-label="Personal values" className="mx-auto max-w-6xl px-5 pb-16 sm:px-8">
      <div className="grid gap-4 sm:grid-cols-3">
        {values.map((v) => (
          <ValueCard key={v.title} icon={v.icon} accent={v.accent} title={v.title} text={v.text} />
        ))}
      </div>
    </section>
  );
}
