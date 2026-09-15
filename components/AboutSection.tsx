import { site } from "@/lib/site";
import { ArrowRight, Users } from "@/components/Icons";

export default function AboutSection() {
  return (
    <section id="about" aria-labelledby="about-heading">
      <div className="mb-4 flex items-center gap-3">
        <span className="flex h-11 w-11 items-center justify-center rounded-full border-2 border-accent-light text-accent-light">
          <Users className="h-6 w-6" />
        </span>
        <h2 id="about-heading" className="font-heading text-[1.45rem] font-bold leading-none tracking-tight text-primary">About Me</h2>
      </div>
      <div className="space-y-3 text-[0.8rem] leading-relaxed text-primary/85">
        <p>
          Hi, I&apos;m <strong className="font-semibold text-primary">{site.name}</strong>, a software developer based in the
          Philippines. I love building practical and modern solutions that help businesses grow. I&apos;m the founder of{" "}
          <strong className="font-semibold text-primary">Dells Software</strong>, where we create systems like Tindahan POS,
          Inventory Management, Accounting System, and Farm Management. I also run a small sari-sari store, and I use AI
          coding assistants daily to ship faster without skipping review and testing.
        </p>
        <p>I&apos;m always open to new opportunities, collaborations, and exciting projects. Let&apos;s build something great together!</p>
      </div>
      <a
        href={site.resumeUrl}
        download
        className="plain mt-5 inline-flex items-center gap-2 rounded-xl border border-accent/70 bg-page/40 px-6 py-2.5 text-[0.85rem] font-semibold text-primary shadow-[0_0_18px_rgba(22,131,255,0.35)] transition-colors hover:bg-accent/15"
      >
        Download My Resume <ArrowRight className="h-4 w-4" />
      </a>
    </section>
  );
}
