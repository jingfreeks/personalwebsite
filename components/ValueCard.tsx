import { Book, Bulb, Target } from "@/components/Icons";

const icons = { bulb: Bulb, book: Book, target: Target } as const;

export default function ValueCard({
  icon,
  title,
  text,
}: {
  icon: keyof typeof icons;
  title: string;
  text: string;
}) {
  const Icon = icons[icon];
  return (
    <div className="glass card-glow rounded-2xl p-5">
      <span className="mb-4 flex h-11 w-11 items-center justify-center rounded-xl border border-accent/40 bg-accent/10 text-accent-light">
        <Icon size={22} />
      </span>
      <h3 className="font-heading text-lg font-semibold text-primary">{title}</h3>
      <p className="mt-1.5 text-sm leading-relaxed text-body">{text}</p>
    </div>
  );
}
