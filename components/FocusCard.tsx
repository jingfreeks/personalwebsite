import Image from "next/image";

export default function FocusCard() {
  return (
    <aside aria-label="Motto" className="relative min-h-[16rem] overflow-hidden rounded-2xl border border-white/10 lg:min-h-0 lg:h-full">
      <Image src="/assets/hero/focus-card.jpg" alt="" fill sizes="(max-width: 1024px) 100vw, 22vw" className="object-cover" />
      <div aria-hidden="true" className="absolute inset-0 bg-gradient-to-t from-[#020811]/85 via-[#020811]/25 to-transparent" />
      <div className="absolute inset-x-0 bottom-0 p-4">
        <p className="font-heading text-[1.25rem] font-semibold leading-tight text-primary">
          Discipline today,
          <br />
          better solutions tomorrow.
        </p>
        <span aria-hidden="true" className="mt-3 block h-0.5 w-10 rounded-full bg-accent" />
        <p className="mt-6 text-[0.62rem] font-semibold uppercase tracking-[0.35em] text-primary/90">Build · Learn · Grow</p>
      </div>
    </aside>
  );
}
