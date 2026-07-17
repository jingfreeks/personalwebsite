const stats = [
  { label: "Experience", value: "15+ yrs" },
  { label: "Companies", value: "12" },
  { label: "Countries", value: "3" },
];

export default function Hero() {
  return (
    <section id="home" className="mb-16">
      <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-divider px-3 py-1 font-mono text-[11px] text-secondary">
        <span className="status-dot h-1.5 w-1.5 rounded-full bg-accent" />
        Open to new opportunities
      </div>
      <div className="mb-3 font-mono text-xs uppercase tracking-[0.14em] text-accent-light">
        Software Developer &middot; Davao City, Philippines
      </div>
      <h1 className="font-heading mb-4 text-[42px] font-semibold tracking-[-0.02em]">
        Lyndell T. Dobluis
      </h1>
      <p className="mb-7 max-w-[62ch] text-base leading-relaxed text-secondary">
        Software engineer with 15+ years of experience across web and mobile
        development, specializing in React Native applications for
        cross-platform iOS/Android delivery. Proven track record building
        apps end-to-end — from API integration, state management, and
        real-time features to App Store/Play Store release — for clients in
        the Philippines, United States, and Saudi Arabia. Strong background
        in Firebase, Redux, WebRTC/Socket.io, REST API design, and Agile
        delivery, with experience leading development efforts and
        collaborating directly with backend teams and stakeholders across
        time zones. Since 2024, has been running an independent small
        business while staying current with mobile development, and is now
        returning to software engineering full-time.
      </p>
      <div className="flex gap-3">
        <a
          href="#contact"
          className="rounded-md bg-accent px-[22px] py-[11px] text-sm font-semibold text-white transition-colors hover:bg-accent-light"
        >
          Get in touch
        </a>
      </div>
      <div className="mt-9 grid grid-cols-1 gap-3.5 sm:grid-cols-3">
        {stats.map((stat) => (
          <div
            key={stat.label}
            className="rounded-lg border border-divider bg-panel/40 p-4 transition-colors hover:border-accent/50"
          >
            <div className="font-mono text-[11px] text-muted">{stat.label}</div>
            <div className="font-heading text-[22px] font-semibold">{stat.value}</div>
          </div>
        ))}
      </div>
    </section>
  );
}
