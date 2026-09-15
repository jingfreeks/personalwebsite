import Image from "next/image";
import { site } from "@/lib/site";
import { Users } from "@/components/Icons";

export default function AboutSection() {
  return (
    <section id="about" aria-labelledby="about-heading" className="mx-auto max-w-6xl px-5 pb-8 pt-20 sm:px-8">
      <div className="grid gap-8 lg:grid-cols-[1fr_0.9fr] lg:items-center lg:gap-14">
        <div>
          <div className="mb-3 flex items-center gap-3">
            <span className="flex h-10 w-10 items-center justify-center rounded-xl border border-accent/40 bg-accent/12 text-accent-light">
              <Users size={20} />
            </span>
            <h2 id="about-heading" className="font-heading text-3xl font-bold text-primary sm:text-4xl">About Me</h2>
          </div>
          <div className="space-y-4 text-base leading-relaxed text-body">
            <p>
              Hi, I&apos;m <strong className="text-primary">{site.name}</strong>, a software developer based in the
              Philippines with 15+ years across web and mobile development. I love building practical, modern solutions
              that help businesses grow — React on the web, React Native on mobile, shipped end-to-end from API
              integration to App Store and Play Store release, for clients in the Philippines, United States and Saudi Arabia.
            </p>
            <p>
              I&apos;m the founder of <strong className="text-primary">Dells Software</strong>, where we build systems for
              Filipino small businesses — Tindahan POS, Inventory Management, Accounting and the Dells Farm platform. I also
              own and run a small sari-sari store, which keeps me close to the day-to-day realities of running a business,
              not just building software for one. I work with AI coding assistants as part of my daily workflow — faster
              delivery without cutting corners on review and testing.
            </p>
            <p>
              I&apos;m always open to new opportunities, collaborations and exciting projects. Let&apos;s build something
              great together!
            </p>
          </div>
        </div>

        <figure className="glass glow-blue relative overflow-hidden rounded-2xl">
          <div className="relative aspect-[4/3]">
            <Image
              src="/assets/projects/tindahan-pos-dashboard.jpg"
              alt="Tindahan POS dashboard — one of the business systems built at Dells Software"
              fill
              sizes="(max-width: 1024px) 100vw, 520px"
              className="object-cover object-left-top opacity-55"
            />
            <div aria-hidden="true" className="absolute inset-0 bg-gradient-to-t from-page via-page/70 to-page/20" />
            <div aria-hidden="true" className="bg-grid absolute inset-0 opacity-40" />
          </div>
          <figcaption className="absolute inset-x-0 bottom-0 p-6 sm:p-8">
            <p className="font-heading text-2xl font-bold leading-snug text-primary sm:text-3xl">
              Discipline today,<br />better solutions tomorrow.
            </p>
            <div className="mt-3 h-0.5 w-12 rounded-full bg-accent" />
            <p className="mt-3 font-mono text-[11px] uppercase tracking-[0.18em] text-accent-light">Build · Learn · Grow</p>
          </figcaption>
        </figure>
      </div>
    </section>
  );
}
