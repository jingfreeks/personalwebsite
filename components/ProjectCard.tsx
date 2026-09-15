import Image from "next/image";
import type { Project, ProjectIcon } from "@/lib/projects";
import {
  AccountingIcon,
  Check,
  ExternalLink,
  FarmIcon,
  InventoryIcon,
  PosIcon,
} from "@/components/Icons";

const icons: Record<ProjectIcon, typeof PosIcon> = {
  pos: PosIcon,
  inventory: InventoryIcon,
  accounting: AccountingIcon,
  farm: FarmIcon,
};

export default function ProjectCard({ project }: { project: Project }) {
  const Icon = icons[project.icon];
  return (
    <article className="glass card-glow group flex flex-col overflow-hidden rounded-2xl hover:-translate-y-0.5">
      <div className="relative aspect-[16/10] overflow-hidden border-b border-divider bg-page/60">
        {project.image ? (
          <Image
            src={project.image.src}
            alt={project.image.alt}
            width={project.image.width}
            height={project.image.height}
            sizes="(max-width: 1024px) 100vw, 560px"
            className="h-full w-full object-cover object-top transition-transform duration-500 group-hover:scale-[1.03]"
          />
        ) : (
          <div className="bg-grid flex h-full w-full items-center justify-center">
            <span className="flex h-20 w-20 items-center justify-center rounded-2xl border border-accent/40 bg-accent/10 text-accent-light">
              <Icon size={36} />
            </span>
          </div>
        )}
        <span className="absolute left-3 top-3 rounded-full border border-divider bg-page/80 px-2.5 py-1 font-mono text-[10px] uppercase tracking-[0.08em] text-secondary backdrop-blur">
          {project.category}
        </span>
      </div>

      <div className="flex flex-1 flex-col gap-3 p-5">
        <div className="flex items-start justify-between gap-3">
          <h3 className="font-heading text-lg font-semibold text-primary">{project.name}</h3>
          <span className="shrink-0 rounded-full border border-divider px-2.5 py-1 font-mono text-[10px] text-muted">
            {project.status}
          </span>
        </div>
        <p className="text-sm leading-relaxed text-body">{project.description}</p>
        {project.highlights && (
          <ul className="space-y-1.5">
            {project.highlights.map((h) => (
              <li key={h} className="flex items-start gap-2 text-[13px] text-secondary">
                <span className="mt-0.5 text-accent-light"><Check size={14} /></span>
                {h}
              </li>
            ))}
          </ul>
        )}
        <ul className="flex flex-wrap gap-1.5" aria-label="Technologies">
          {project.tech.map((t) => (
            <li
              key={t}
              className="rounded-md border border-divider bg-surface/60 px-2 py-1 font-mono text-[11px] text-tag"
            >
              {t}
            </li>
          ))}
        </ul>
        <div className="mt-auto pt-2">
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
            <span className="font-mono text-xs text-muted">Private build · not publicly deployed</span>
          )}
        </div>
      </div>
    </article>
  );
}
