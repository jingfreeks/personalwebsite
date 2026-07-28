import Reveal from "@/components/Reveal";

export default function About() {
  return (
    <Reveal>
      <section className="mb-16">
        <h2 className="font-heading mb-[18px] text-[22px] font-semibold">About</h2>
        <p className="max-w-[62ch] text-base leading-relaxed text-secondary">
          Software engineer with 15+ years of experience across web and
          mobile development — React on the web, React Native for
          cross-platform iOS/Android delivery. I&apos;ve built and shipped
          apps end-to-end — API integration, state management, real-time
          features, App Store and Play Store release — for clients in the
          Philippines, United States, and Saudi Arabia. I also build with AI
          coding assistants (like Claude Code) as part of my day-to-day
          workflow, which means faster delivery without cutting corners on
          review or testing. Since 2024 I&apos;ve been running an
          independent practice, and I&apos;m now taking on select freelance
          and contract engineering work.
        </p>
      </section>
    </Reveal>
  );
}
