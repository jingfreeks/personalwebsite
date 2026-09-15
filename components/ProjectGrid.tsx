import { projects } from "@/lib/projects";
import ProjectCard from "@/components/ProjectCard";
import Link from "next/link";
import { ArrowRight } from "@/components/Icons";

export default function ProjectGrid() {
  return (
    <section id="projects" aria-labelledby="projects-heading" className="relative mx-auto max-w-[64rem] px-5 pb-6 pt-14 sm:px-8 lg:max-w-none lg:px-[3%] lg:pt-12">
      <div className="mb-6 flex flex-wrap items-end justify-between gap-4">
        <div>
          <h2 id="projects-heading" className="font-heading text-[2rem] font-bold leading-none tracking-tight text-primary sm:text-[2.2rem]">
            Featured <span className="text-accent-light">Projects</span>
          </h2>
          <p className="mt-1.5 text-[0.95rem] text-primary/85">Real projects. Real solutions. Real impact.</p>
        </div>
        <Link href="/projects" className="plain inline-flex items-center gap-2 text-[0.85rem] font-semibold text-link hover:text-accent-light">
          View All Projects <ArrowRight className="h-4 w-4" />
        </Link>
      </div>
      <div className="grid gap-3.5 sm:grid-cols-2 lg:grid-cols-4">
        {projects.map((p) => (
          <ProjectCard key={p.slug} project={p} />
        ))}
      </div>
    </section>
  );
}
