import { projects } from "@/lib/projects";
import ProjectCard from "@/components/ProjectCard";

export default function ProjectGrid() {
  return (
    <section id="projects" aria-labelledby="projects-heading" className="mx-auto max-w-6xl px-5 pb-8 pt-20 sm:px-8">
      <div className="mb-8">
        <h2 id="projects-heading" className="font-heading text-3xl font-bold text-primary sm:text-4xl">
          Featured <span className="text-gradient">Projects</span>
        </h2>
        <p className="mt-2 text-muted">Real projects. Real solutions. Real impact.</p>
      </div>
      <div className="grid gap-5 sm:grid-cols-2 xl:grid-cols-4">
        {projects.map((p) => (
          <ProjectCard key={p.slug} project={p} />
        ))}
      </div>
    </section>
  );
}
