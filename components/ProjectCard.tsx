import Image from "next/image";
import type { Project, ProjectIcon } from "@/lib/projects";
import { AccountingIcon, ArrowRight, ExternalLink, FarmIcon, InventoryIcon, PosIcon } from "@/components/Icons";

const icons: Record<ProjectIcon, typeof PosIcon> = {
  pos: PosIcon,
  inventory: InventoryIcon,
  accounting: AccountingIcon,
  farm: FarmIcon,
};

export default function ProjectCard({ project }: { project: Project }) {
  const Icon = icons[project.icon];
  return (
    <article id={`project-${project.slug}`} className="glass card-glow group flex flex-col rounded-2xl p-4 hover:-translate-y-0.5 sm:p-5">
      <div className="mb-4 flex items-center gap-3">
        <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl border border-accent/40 bg-accent/12 text-accent-light">
          <Icon size={20} />
        </span>
        <span className="rounded-full border border-divider bg-page/70 px-2.5 py-1 font-mono text-[10px] uppercase tracking-[0.08em] text-secondary">
          {project.category}
        </span>
      </div>

      <h3 className="font-heading text-lg font-semibold text-primary">{project.name}</h3>
      <p className="mt-1.5 text-sm leading-relaxed text-body">{project.description}</p>

      {/* device-framed real preview (laptop + phone), pure CSS frames */}
      <div className="relative mt-4 aspect-[16/10] w-full">
        <div className="absolute inset-x-[6%] top-0 bottom-[10%] overflow-hidden rounded-t-xl border border-divider bg-[#061120] p-[3px] shadow-[0_20px_50px_-24px_rgba(22,131,255,0.6)]">
          <div className="relative h-full w-full overflow-hidden rounded-t-lg">
            <Image
              src={project.image.src}
              alt={project.image.alt}
              fill
              sizes="(max-width: 768px) 90vw, 520px"
              className="object-cover object-left-top transition-transform duration-500 group-hover:scale-[1.03]"
            />
          </div>
        </div>
        <div aria-hidden="true" className="absolute inset-x-0 bottom-[6%] h-[5%] rounded-b-xl border border-divider bg-gradient-to-b from-[#0c1c30] to-[#061120]" />
        <div aria-hidden="true" className="absolute right-[2%] bottom-0 h-[48%] w-[16%] overflow-hidden rounded-[10px] border border-divider bg-[#061120] p-[2px] shadow-[0_12px_30px_-12px_rgba(0,0,0,0.8)]">
          <div className="relative h-full w-full overflow-hidden rounded-[8px]">
            <Image src={project.image.src} alt="" fill sizes="80px" className="object-cover object-left-top" />
          </div>
        </div>
      </div>

      <ul className="mt-4 flex flex-wrap gap-1.5" aria-label="Technologies">
        {project.tech.map((t) => (
          <li key={t} className="rounded-md border border-divider bg-surface/70 px-2 py-1 font-mono text-[11px] text-tag">
            {t}
          </li>
        ))}
      </ul>

      <div className="mt-auto flex items-center justify-between pt-4">
        {project.href ? (
          <a
            href={project.href}
            target="_blank"
            rel="noopener noreferrer"
            className="plain inline-flex items-center gap-2 text-sm font-semibold text-link hover:text-accent-light"
          >
            {project.hrefLabel ?? "View Project"} <ExternalLink size={15} />
          </a>
        ) : (
          <a href="#contact" className="plain inline-flex items-center gap-2 text-sm font-semibold text-link hover:text-accent-light">
            Request a demo <ArrowRight size={15} />
          </a>
        )}
        <span className="font-mono text-[10px] text-muted">{project.status}</span>
      </div>
    </article>
  );
}
