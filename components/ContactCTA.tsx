import { ArrowRight, Send } from "@/components/Icons";

export default function ContactCTA() {
  return (
    <div className="mx-auto max-w-6xl px-5 pb-8 sm:px-8">
      <div className="glass glow-blue relative overflow-hidden rounded-3xl border-accent/40 p-8 sm:p-12">
        <div aria-hidden="true" className="pointer-events-none absolute inset-0 bg-gradient-to-r from-accent/20 via-transparent to-purple/15" />
        <div aria-hidden="true" className="bg-grid pointer-events-none absolute inset-0 opacity-40" />
        <div className="relative flex flex-col items-start gap-6 md:flex-row md:items-center md:justify-between">
          <div className="flex items-start gap-4">
            <span className="hidden h-14 w-14 shrink-0 items-center justify-center rounded-2xl border border-accent/50 bg-accent/15 text-accent-light sm:flex">
              <Send size={26} />
            </span>
            <div>
              <h2 className="font-heading text-2xl font-bold text-primary sm:text-4xl">Let&apos;s Build Something Great Together</h2>
              <p className="mt-2 text-body">Have a project in mind or just want to say hi? I&apos;d love to hear from you!</p>
            </div>
          </div>
          <a
            href="#contact"
            className="plain inline-flex shrink-0 items-center gap-2 rounded-lg bg-accent-strong px-6 py-3.5 text-sm font-semibold text-white shadow-[0_14px_34px_-12px_rgba(22,131,255,0.9)] transition-colors hover:bg-accent"
          >
            Get In Touch <ArrowRight size={16} />
          </a>
        </div>
      </div>
    </div>
  );
}
