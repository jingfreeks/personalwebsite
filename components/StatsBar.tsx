import { stats } from "@/lib/site";
import { Calendar, Globe, Layers, Pin, Shield } from "@/components/Icons";

const icons = { calendar: Calendar, layers: Layers, globe: Globe, shield: Shield, pin: Pin };

export default function StatsBar() {
  const tiles = stats.filter((s) => s.icon !== "pin");
  return (
    <div className="relative z-10 mx-auto -mt-16 max-w-[64rem] px-5 sm:px-8 lg:absolute lg:inset-x-0 lg:bottom-[4.5%] lg:mt-0 lg:max-w-none lg:pl-[5.4%] lg:pr-[21.3%]">
      <ul
        aria-label="Key figures"
        className="grid grid-cols-2 divide-divider/70 rounded-xl border border-white/10 bg-[#0b1a2e]/90 shadow-[0_24px_60px_-20px_rgba(22,131,255,0.5)] backdrop-blur-md lg:grid-cols-4 lg:divide-x"
      >
        {tiles.map((s) => {
          const Icon = icons[s.icon];
          return (
            <li key={s.label} title={s.note} className="flex items-center gap-4 px-5 py-4 lg:gap-3.5 lg:px-6 lg:py-2.5">
              <span className="text-accent">
                <Icon className="h-8 w-8 lg:h-[1.9rem] lg:w-[1.9rem]" strokeWidth={1.6} />
              </span>
              <div className="min-w-0">
                <div className="font-heading text-[1.375rem] font-bold leading-none text-primary">{s.value}</div>
                <div className="mt-1 whitespace-nowrap text-[0.8rem] text-primary/90">{s.label}</div>
                
              </div>
            </li>
          );
        })}
      </ul>
    </div>
  );
}
