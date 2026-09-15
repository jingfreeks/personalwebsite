import { ArrowRight, Send } from "@/components/Icons";

export default function ContactCTA() {
  return (
    <div className="mx-auto max-w-6xl px-5 pb-8 sm:px-8">
      <div className="glass relative overflow-hidden rounded-2xl border-accent/30 p-8 sm:p-10">
        <div
          aria-hidden="true"
          className="pointer-events-none absolute inset-0 bg-gradient-to-r from-accent/15 via-transparent to-purple/10"
        />
        <div className="relative flex flex-col items-start gap-6 md:flex-row md:items-center md:justify-between">
          <div className="flex items-start gap-4">
            <span className="hidden h-12 w-12 shrink-0 items-center justify-center rounded-xl border border-accent/40 bg-accent/10 text-accent-light sm:flex">
              <Send size={22} />
            </span>
            <div>
              <h2 className="font-heading text-2xl font-bold text-primary sm:text-3xl">
                Let&apos;s Build Something Great Together
              </h2>
              <p className="mt-2 text-body">
                Have a project in mind or just want to say hi? I&apos;d love to hear from you!
              </p>
            </div>
          </div>
          <a
            href="#contact"
            className="plain inline-flex shrink-0 items-center gap-2 rounded-lg bg-accent-strong px-6 py-3 text-sm font-semibold text-white transition-colors hover:bg-accent"
          >
            Get In Touch <ArrowRight size={16} />
          </a>
        </div>
      </div>
    </div>
  );
}
