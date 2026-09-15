import type { Metadata } from "next";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Contact from "@/components/Contact";
import { site, socials } from "@/lib/site";
import { SocialMark } from "@/components/Icons";

export const metadata: Metadata = {
  title: "Contact",
  description: "Get in touch with Lyndell Dobluis about a web or mobile project, a demo of Tindahan POS, or freelance and contract work.",
};

export default function ContactPage() {
  return (
    <>
      <Header />
      <main className="bg-page text-primary">
        <section className="relative mx-auto max-w-6xl px-5 py-20 sm:px-8">
          <div aria-hidden="true" className="bg-grid pointer-events-none absolute inset-0 opacity-50" />
          <div className="relative grid gap-10 lg:grid-cols-[1fr_0.8fr] lg:gap-16">
            <div>
              <div className="mb-4 font-mono text-[11px] uppercase tracking-[0.22em] text-accent-light">Contact</div>
              <h1 className="font-heading text-4xl font-bold text-primary sm:text-5xl">
                Let&apos;s build something <span className="text-gradient">great together</span>
              </h1>
              <p className="mt-5 max-w-[52ch] text-lg leading-relaxed text-body">
                Have a project in mind, want a demo of Tindahan POS, or just want to say hi? I&apos;d love to hear from you.
              </p>
              <ul className="mt-6 flex flex-wrap gap-2.5" aria-label="Social links">
                {socials.map((s) => (
                  <li key={s.key}>
                    <a
                      href={s.href}
                      target={s.external ? "_blank" : undefined}
                      rel={s.external ? "noopener noreferrer" : undefined}
                      className="plain inline-flex items-center gap-2 rounded-lg border border-divider bg-panel/50 px-3 py-2 text-xs text-secondary transition-colors hover:border-accent/60 hover:text-primary"
                    >
                      <SocialMark kind={s.key as "linkedin" | "github" | "email" | "website"} /> {s.name}
                    </a>
                  </li>
                ))}
              </ul>
              <p className="mt-6 font-mono text-xs text-muted">{site.location} · {site.timezone} · {site.availability.join(" · ")}</p>
            </div>
            <div className="glass rounded-2xl p-6">
              <Contact />
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
