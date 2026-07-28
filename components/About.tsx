import Reveal from "@/components/Reveal";

export default function About() {
  return (
    <Reveal>
      <section className="mb-16">
        <h2 className="font-heading mb-[18px] text-[22px] font-semibold">About</h2>
        <p className="max-w-[62ch] text-base leading-relaxed text-secondary">
          Software engineer with 15+ years of experience across web and mobile
          development, specializing in React Native for cross-platform
          iOS/Android delivery. I&apos;ve built and shipped apps end-to-end —
          API integration, state management, real-time features, App Store
          and Play Store release — for clients in the Philippines, United
          States, and Saudi Arabia. Since 2024 I&apos;ve been running an
          independent practice, and I&apos;m now taking on select freelance
          and contract engineering work.
        </p>
      </section>
    </Reveal>
  );
}
