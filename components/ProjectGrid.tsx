import { projects } from "@/lib/projects";
import { site } from "@/lib/site";
import ProjectCard from "@/components/ProjectCard";
import { ArrowRight } from "@/components/Icons";

export default function ProjectGrid() {
  return (
    <section id="projects" aria-labelledby="projects-heading" className="mx-auto max-w-6xl px-5 py-20 sm:px-8">
      <div className="mb-10 flex flex-wrap items-end justify-between gap-4">
        <div>
          <div className="mb-2 font-mono text-[11px] uppercase tracking-[0.2em] text-accent-light">
            Featured work
          </div>
          <h2 id="projects-heading" className="font-heading text-3xl font-bold text-primary sm:text-4xl">
            Projects That Make a <span className="text-gradient">Difference</span>
          </h2>
          <p className="mt-2 text-muted">Real projects. Real solutions. Real impact.</p>
        </div>
        <a
          href={site.github}
          target="_blank"
          rel="noopener noreferrer"
          className="plain inline-flex items-center gap-2 text-sm font-semibold text-link hover:text-accent-light"
        >
          More on GitHub <ArrowRight size={16} />
        </a>
      </div>
      <div className="grid gap-6 md:grid-cols-2">
        {projects.map((p) => (
          <ProjectCard key={p.slug} project={p} />
        ))}
      </div>
    </section>
  );
}
