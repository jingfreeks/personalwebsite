import { projects } from "@/lib/projects";
import ProjectCard from "@/components/ProjectCard";
import { site } from "@/lib/site";
import { ArrowRight } from "@/components/Icons";

export default function ProjectGrid() {
  return (
    <section id="projects" aria-labelledby="projects-heading" className="mx-auto max-w-6xl px-5 pb-8 pt-20 sm:px-8">
      <div className="mb-8 flex flex-wrap items-end justify-between gap-4">
        <div>
          <h2 id="projects-heading" className="font-heading text-3xl font-bold text-primary sm:text-4xl">
            Featured <span className="text-gradient">Projects</span>
          </h2>
          <p className="mt-2 text-muted">Real projects. Real solutions. Real impact.</p>
        </div>
        <a href={site.github} target="_blank" rel="noopener noreferrer" className="plain inline-flex items-center gap-2 text-sm font-semibold text-link hover:text-accent-light">
          View All Projects <ArrowRight size={16} />
        </a>
      </div>
      <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
        {projects.map((p) => (
          <ProjectCard key={p.slug} project={p} />
        ))}
      </div>
    </section>
  );
}
