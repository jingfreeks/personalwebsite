import { values } from "@/lib/site";
import ValueCard from "@/components/ValueCard";

export default function Values() {
  return (
    <section aria-labelledby="values-heading" className="grid gap-3 sm:grid-cols-3">
      <h2 id="values-heading" className="sr-only">What drives me</h2>
      {values.map((v) => (
        <ValueCard key={v.title} icon={v.icon} accent={v.accent} title={v.title} text={v.text} />
      ))}
    </section>
  );
}
