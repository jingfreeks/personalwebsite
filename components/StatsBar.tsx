import { stats } from "@/lib/site";
import { Calendar, Globe, Layers, Pin, Shield } from "@/components/Icons";

const icons = { calendar: Calendar, layers: Layers, globe: Globe, shield: Shield, pin: Pin };

export default function StatsBar() {
  return (
    <div className="relative z-10 mx-auto -mt-10 max-w-6xl px-5 sm:px-8 lg:mt-6">
      <ul
        aria-label="Key figures"
        className="glass-strong glow-blue grid grid-cols-2 gap-y-1 rounded-2xl p-2 sm:grid-cols-3 lg:grid-cols-5"
      >
        {stats.map((s) => {
          const Icon = icons[s.icon];
          return (
            <li key={s.label} className="flex items-center gap-3 rounded-xl px-4 py-4">
              <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl border border-accent/40 bg-accent/12 text-accent-light">
                <Icon size={20} />
              </span>
              <div className="min-w-0">
                <div className="font-heading text-xl font-bold leading-tight text-primary sm:text-2xl">{s.value}</div>
                <div className="text-xs text-muted sm:text-sm">{s.label}</div>
                {s.note && <div className="font-mono text-[10px] text-footer">{s.note}</div>}
              </div>
            </li>
          );
        })}
      </ul>
    </div>
  );
}
