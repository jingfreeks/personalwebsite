import Image from "next/image";
import { site, stats, whatIBuild, values } from "@/lib/site";
import { projects } from "@/lib/projects";
import { experience } from "@/lib/experience";
import { skills } from "@/lib/skills";
import { caseStudies } from "@/lib/data";

/*
 * Pixel-faithful homepage: the supplied design image is the visual, with a
 * transparent interaction layer of real links positioned by percentage
 * (coordinates authored against the 1024×1536 design). The real content is
 * rendered visually-hidden underneath so the page stays indexable and
 * readable by assistive technology.
 */

type Hotspot = { id: string; label: string; href: string; l: number; t: number; w: number; h: number; external?: boolean; download?: boolean };

const CONTACT = "/contact";
const RESUME = site.resumeUrl;

const hotspots: Hotspot[] = [
  // header navigation
  { id: "nav-home", label: "Home", href: "#top", l: 28.6, t: 1.0, w: 4.4, h: 2.4 },
  { id: "nav-about", label: "About", href: "#about", l: 34.0, t: 1.0, w: 4.7, h: 2.4 },
  { id: "nav-experience", label: "Experience", href: "#experience", l: 39.2, t: 1.0, w: 6.4, h: 2.4 },
  { id: "nav-projects", label: "Projects", href: "#projects", l: 46.5, t: 1.0, w: 5.4, h: 2.4 },
  { id: "nav-skills", label: "Skills", href: "#skills", l: 52.6, t: 1.0, w: 4.8, h: 2.4 },
  { id: "nav-blog", label: "Blog", href: "/blog", l: 57.3, t: 1.0, w: 4.4, h: 2.4 },
  { id: "nav-contact", label: "Contact", href: "#contact", l: 61.8, t: 1.0, w: 6.0, h: 2.4 },
  { id: "talk", label: "Let's Talk", href: CONTACT, l: 84.5, t: 0.6, w: 12, h: 3.4 },
  // hero
  { id: "work", label: "Let's Work Together", href: CONTACT, l: 5.4, t: 20.1, w: 17.8, h: 3.1 },
  { id: "resume", label: "Download Resume (PDF)", href: RESUME, l: 23.4, t: 20.1, w: 15.5, h: 3.1, download: true },
  // projects
  { id: "view-all-projects", label: "View all projects on GitHub", href: site.github, l: 85.5, t: 34.8, w: 11.5, h: 1.8, external: true },
  { id: "project-tindahan", label: "Tindahan POS — request a demo", href: CONTACT, l: 2.8, t: 37.6, w: 22.8, h: 18.8 },
  { id: "project-inventory", label: "Inventory Management — request a demo", href: CONTACT, l: 26.8, t: 37.6, w: 22.8, h: 18.8 },
  { id: "project-accounting", label: "Accounting System — request a demo", href: CONTACT, l: 50.7, t: 37.6, w: 22.8, h: 18.8 },
  { id: "project-farm", label: "Dells Farm — visit the live site", href: "https://dells-farm-site.vercel.app", l: 74.5, t: 37.6, w: 22.8, h: 18.8, external: true },
  // experience / skills
  { id: "view-resume", label: "View full resume (PDF)", href: RESUME, l: 30.6, t: 58, w: 9.6, h: 1.6, download: true },
  { id: "view-skills", label: "View all skills (resume PDF)", href: RESUME, l: 68.4, t: 58, w: 8.8, h: 1.6, download: true },
  // about / cta
  { id: "learn-more", label: "Learn more (resume PDF)", href: RESUME, l: 2.8, t: 88.8, w: 13.8, h: 2.4, download: true },
  { id: "get-in-touch", label: "Get In Touch", href: CONTACT, l: 79.8, t: 89.1, w: 15.3, h: 2.9 },
  // footer socials + back to top
  { id: "footer-linkedin", label: "LinkedIn", href: site.linkedin, l: 60.6, t: 95.8, w: 3.0, h: 2.2, external: true },
  { id: "footer-github", label: "GitHub", href: site.github, l: 64.5, t: 95.8, w: 3.0, h: 2.2, external: true },
  { id: "footer-email", label: "Email", href: `mailto:${site.email}`, l: 68.4, t: 95.8, w: 3.0, h: 2.2 },
  { id: "footer-website", label: "Website", href: site.url, l: 72.1, t: 95.8, w: 3.0, h: 2.2, external: true },
  { id: "backtop", label: "Back to top", href: "#top", l: 94, t: 95.7, w: 4.2, h: 3 },
];

// Vertical anchors so in-page navigation scrolls to the right region of the design.
const markers = [
  { id: "projects", t: 34 },
  { id: "experience", t: 57 },
  { id: "skills", t: 57 },
  { id: "about", t: 77 },
  { id: "contact", t: 86.5 },
];

export default function Home() {
  return (
    <main id="top" className="bg-[#020811] text-primary">
      <div className="relative mx-auto w-full max-w-[1024px]" style={{ aspectRatio: "1024 / 1536" }}>
        <Image
          src="/design/portfolio-design.png"
          alt="Lyndell Dobluis — Software Developer portfolio design: hero with portrait, featured projects, work experience, skills, about, and contact"
          width={1024}
          height={1536}
          priority
          sizes="(max-width: 1024px) 100vw, 1024px"
          className="block h-auto w-full select-none"
          draggable={false}
        />

        {markers.map((m) => (
          <span key={m.id} id={m.id} aria-hidden="true" className="absolute left-0 h-px w-px" style={{ top: `${m.t}%` }} />
        ))}

        {hotspots.map((h) => (
          <a
            key={h.id}
            href={h.href}
            aria-label={h.label}
            title={h.label}
            download={h.download ? "" : undefined}
            target={h.external ? "_blank" : undefined}
            rel={h.external ? "noopener noreferrer" : undefined}
            className="absolute z-10 block rounded-[10px] outline-none focus-visible:shadow-[0_0_0_2px_#22d8ff,0_0_20px_#1683ff]"
            style={{ left: `${h.l}%`, top: `${h.t}%`, width: `${h.w}%`, height: `${h.h}%` }}
          />
        ))}
      </div>

      {/* Real content for search engines and assistive technology */}
      <article className="sr-only">
        <h1>Hi, I&apos;m {site.name} — {site.role}</h1>
        <p>{site.tagline}. {site.intro}</p>
        <p>{site.availability.join(". ")}. Based in {site.location} ({site.timezone}).</p>
        <ul>{stats.map((s) => <li key={s.label}>{s.value} {s.label}{s.note ? ` (${s.note})` : ""}</li>)}</ul>
        <h2>What I build</h2>
        <ul>{whatIBuild.map((w) => <li key={w}>{w}</li>)}</ul>
        <p>&ldquo;{site.quote}&rdquo; — {site.name}</p>

        <section>
          <h2>Featured Projects</h2>
          <p>Real projects. Real solutions. Real impact.</p>
          {projects.map((p) => (
            <article key={p.slug}>
              <h3>{p.name} — {p.category}</h3>
              <p>{p.description}</p>
              <p>Technologies: {p.tech.join(", ")}. Status: {p.status}.</p>
              {p.href && <a href={p.href}>View project</a>}
            </article>
          ))}
          <h3>Client work</h3>
          {caseStudies.map((c) => (
            <article key={c.title}>
              <h4>{c.title} ({c.company})</h4>
              <p>Problem: {c.problem}</p>
              <p>What I built: {c.build}</p>
              <p>Result: {c.result}</p>
            </article>
          ))}
        </section>

        <section>
          <h2>Work Experience</h2>
          {experience.map((e) => (
            <article key={`${e.company}-${e.dates}`}>
              <h3>{e.dates}{e.company ? ` — ${e.company}` : ""}</h3>
              <p>{e.title}{e.location ? `, ${e.location}` : ""}</p>
              {e.description && <p>{e.description}</p>}
            </article>
          ))}
          <a href={RESUME}>Download resume (PDF)</a>
        </section>

        <section>
          <h2>Skills &amp; Technologies</h2>
          {(["Frontend", "Backend", "Mobile", "Tools"] as const).map((cat) => (
            <p key={cat}><strong>{cat}:</strong> {skills.filter((s) => s.category === cat).map((s) => s.name).join(", ")}</p>
          ))}
        </section>

        <section>
          <h2>About Me</h2>
          <p>
            Hi, I&apos;m {site.name}, a software developer based in the Philippines with 15+ years across web and mobile
            development. I&apos;m the founder of Dells Software, where we build systems for Filipino small businesses —
            Tindahan POS, Inventory Management, Accounting and the Dells Farm platform — and I also own and run a small
            sari-sari store. I work with AI coding assistants as part of my daily workflow.
          </p>
          <ul>{values.map((v) => <li key={v.title}><strong>{v.title}:</strong> {v.text}</li>)}</ul>
        </section>

        <section>
          <h2>Let&apos;s Build Something Great Together</h2>
          <p>Have a project in mind or just want to say hi? I&apos;d love to hear from you!</p>
          <p><a href={CONTACT}>Get in touch</a> · <a href={`mailto:${site.email}`}>{site.email}</a> · <a href={site.linkedin}>LinkedIn</a> · <a href={site.github}>GitHub</a></p>
        </section>
      </article>
    </main>
  );
}
