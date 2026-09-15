import { Book, Bulb, Target } from "@/components/Icons";

const icons = { bulb: Bulb, book: Book, target: Target } as const;
const accents = {
  blue: "border-accent/40 bg-accent/12 text-accent-light",
  cyan: "border-green/40 bg-green/12 text-green",
  red: "border-red/40 bg-red/12 text-red",
} as const;
const glows = {
  blue: "hover:border-accent/60",
  cyan: "hover:border-green/60",
  red: "hover:border-red/60",
} as const;

export default function ValueCard({
  icon,
  accent,
  title,
  text,
}: {
  icon: keyof typeof icons;
  accent: keyof typeof accents;
  title: string;
  text: string;
}) {
  const Icon = icons[icon];
  return (
    <div className={`glass card-glow rounded-2xl p-5 ${glows[accent]}`}>
      <span className={`mb-4 flex h-11 w-11 items-center justify-center rounded-xl border ${accents[accent]}`}>
        <Icon size={22} />
      </span>
      <h3 className="font-heading text-lg font-semibold text-primary">{title}</h3>
      <p className="mt-1.5 text-sm leading-relaxed text-body">{text}</p>
    </div>
  );
}
