import { stats } from "@/lib/site";

export default function StatsBar() {
  return (
    <div className="relative z-10 mx-auto -mt-12 max-w-6xl px-5 sm:px-8">
      <ul
        aria-label="Key figures"
        className="glass grid grid-cols-2 divide-y divide-divider rounded-2xl sm:grid-cols-4 sm:divide-x sm:divide-y-0"
      >
        {stats.map((s) => (
          <li key={s.label} className="px-5 py-5">
            <div className="font-heading text-2xl font-bold text-primary sm:text-3xl">{s.value}</div>
            <div className="mt-1 text-sm text-muted">{s.label}</div>
            {s.note && <div className="mt-1 font-mono text-[10px] text-footer">{s.note}</div>}
          </li>
        ))}
      </ul>
    </div>
  );
}
