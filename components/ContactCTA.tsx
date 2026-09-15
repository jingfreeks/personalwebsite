import Image from "next/image";
import { ArrowRight, Send } from "@/components/Icons";

export default function ContactCTA() {
  return (
    <div className="relative overflow-hidden rounded-xl border border-white/15">
      <Image src="/assets/hero/cta-mountains.jpg" alt="" fill sizes="(max-width: 1024px) 100vw, 60vw" className="object-cover" />
      <div aria-hidden="true" className="absolute inset-0 bg-gradient-to-r from-[#0b1a3a]/45 via-[#0b1a3a]/25 to-[#0b1a3a]/45" />
      <div className="relative flex flex-col gap-4 px-5 py-5 sm:flex-row sm:items-center sm:gap-5">
        <Send className="h-11 w-11 shrink-0 text-accent-light drop-shadow-[0_0_12px_rgba(77,163,255,0.9)]" strokeWidth={1.4} />
        <div className="min-w-0 flex-1">
          <h2 className="font-heading text-[1.05rem] font-bold leading-tight text-primary lg:whitespace-nowrap">Let&apos;s Build Something Great Together</h2>
          <p className="mt-1 text-[0.8rem] leading-snug text-primary/85">
            Have a project in mind or just want to say hi?{" "}
            <br className="hidden sm:block" />
            I&apos;d love to hear from you!
          </p>
        </div>
        <a
          href="#contact"
          className="plain inline-flex shrink-0 items-center gap-2 rounded-xl bg-accent px-6 py-3 text-[0.85rem] font-semibold text-white shadow-[0_0_24px_rgba(22,131,255,0.6)] transition-colors hover:bg-accent-strong"
        >
          Get In Touch <ArrowRight className="h-4 w-4" />
        </a>
      </div>
    </div>
  );
}
