import { Book, Bulb, Target } from "@/components/Icons";

const icons = { bulb: Bulb, book: Book, target: Target } as const;
const styles = {
  blue: { card: "border-accent/60 bg-[#08182c]/90", icon: "text-accent-light" },
  cyan: { card: "border-green/50 bg-[#071a1a]/90", icon: "text-green" },
  red: { card: "border-red/50 bg-[#1a0a14]/90", icon: "text-red" },
} as const;

export default function ValueCard({
  icon,
  accent,
  title,
  text,
}: {
  icon: keyof typeof icons;
  accent: keyof typeof styles;
  title: string;
  text: string;
}) {
  const Icon = icons[icon];
  const s = styles[accent];
  return (
    <div className={`rounded-xl border p-4 ${s.card}`}>
      <Icon className={`h-7 w-7 ${s.icon}`} />
      <h3 className="font-heading mt-3 text-[0.95rem] font-bold text-primary">{title}</h3>
      <p className="mt-1 text-[0.78rem] leading-snug text-primary/80">{text}</p>
    </div>
  );
}
