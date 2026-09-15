import { values } from "@/lib/site";
import ValueCard from "@/components/ValueCard";

export default function AboutSection() {
  return (
    <section id="about" aria-labelledby="about-heading" className="mx-auto max-w-6xl px-5 py-20 sm:px-8">
      <div className="grid gap-10 lg:grid-cols-[1fr_1fr] lg:gap-14">
        <div>
          <div className="mb-2 font-mono text-[11px] uppercase tracking-[0.2em] text-accent-light">About me</div>
          <h2 id="about-heading" className="font-heading text-3xl font-bold text-primary sm:text-4xl">
            A little more about me
          </h2>
          <div className="mt-5 space-y-4 text-base leading-relaxed text-body">
            <p>
              I&apos;m a software developer based in Davao City, Philippines, with 15+ years across web
              and mobile development — React on the web, React Native for cross-platform iOS/Android.
              I build products and systems, not just code: from API integration and real-time features
              to App Store and Play Store release, for clients in the Philippines, United States and
              Saudi Arabia.
            </p>
            <p>
              In 2024 I founded <strong className="text-primary">Dells Software</strong>, where I build
              business systems for Filipino small retailers — Tindahan POS, Inventory Management and an
              Accounting module — on React, Vite, Expo and Supabase. I also own and run a small
              sari-sari store, which keeps me close to the day-to-day realities of running a business,
              not just building software for one.
            </p>
            <p>
              I work with AI coding assistants as part of my daily workflow — faster delivery without
              cutting corners on review and testing. I&apos;m always open to new opportunities,
              collaborations and interesting projects. Let&apos;s build something great together.
            </p>
          </div>
        </div>
        <div className="grid gap-4 sm:grid-cols-3 lg:grid-cols-1">
          {values.map((v) => (
            <ValueCard key={v.title} icon={v.icon} title={v.title} text={v.text} />
          ))}
        </div>
      </div>
    </section>
  );
}
