const stats = [
  { label: "Experience", value: "15+ yrs" },
  { label: "Companies", value: "12" },
  { label: "Countries", value: "3" },
];

export default function Hero() {
  return (
    <section id="home" className="mb-14">
      <div className="mb-2.5 text-xs uppercase tracking-[0.12em] text-accent-light">
        Software Developer &middot; Davao City, Philippines
      </div>
      <h1 className="mb-4 text-[40px] font-bold tracking-[-0.01em]">
        Lyndell T. Dobluis
      </h1>
      <p className="mb-6 max-w-[640px] text-base leading-relaxed text-secondary">
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
          className="rounded-md bg-accent px-[22px] py-[11px] text-sm font-semibold text-white"
        >
          Get in touch
        </a>
      </div>
      <div className="mt-8 grid grid-cols-1 gap-3.5 sm:grid-cols-3">
        {stats.map((stat) => (
          <div key={stat.label} className="rounded-[10px] bg-panel p-4">
            <div className="text-[11px] text-muted">{stat.label}</div>
            <div className="text-[22px] font-bold">{stat.value}</div>
          </div>
        ))}
      </div>
    </section>
  );
}
