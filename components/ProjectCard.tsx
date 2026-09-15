import Image from "next/image";
import Link from "next/link";
import type { Project, ProjectIcon } from "@/lib/projects";
import { AccountingIcon, ArrowRight, FarmIcon, InventoryIcon, PosIcon } from "@/components/Icons";

const tiles: Record<ProjectIcon, string> = {
  pos: "from-[#1f9d5a] to-[#0f6b3c]",
  inventory: "from-[#8b5cf6] to-[#5b21b6]",
  accounting: "from-[#2f7cf6] to-[#1d4ed8]",
  farm: "from-[#22a55b] to-[#15803d]",
};

const icons: Record<ProjectIcon, typeof PosIcon> = {
  pos: PosIcon,
  inventory: InventoryIcon,
  accounting: AccountingIcon,
  farm: FarmIcon,
};

function Laptop({ project }: { project: Project }) {
  return (
    <div className="relative mt-3">
      {/* screen */}
      <div className="overflow-hidden rounded-t-[10px] border border-white/15 bg-[#0d1626] p-[3px] pb-0">
        <div className="relative aspect-[16/10] w-full overflow-hidden rounded-t-[7px] bg-[#f4f7fb]">
          <Image
            src={project.image.src}
            alt={project.image.alt}
            fill
            sizes="(max-width: 640px) 90vw, (max-width: 1024px) 45vw, 22vw"
            className="object-cover object-left-top"
          />
        </div>
      </div>
      {/* base */}
      <div aria-hidden="true" className="-mx-[5%] h-[0.55rem] rounded-b-[8px] bg-gradient-to-b from-[#c9d3e0] to-[#8d9bb0] shadow-[0_10px_24px_-10px_rgba(0,0,0,0.8)]" />
      {/* phone */}
      {project.phone && (
        <div aria-hidden="true" className="absolute -right-[2%] -bottom-[2%] w-[22%] overflow-hidden rounded-[10px] border-[2px] border-[#dfe6f0] bg-[#0d1626] p-[2px] shadow-[0_14px_30px_-10px_rgba(0,0,0,0.85)]">
          <div className="relative aspect-[9/17] w-full overflow-hidden rounded-[7px] bg-[#f4f7fb]">
            <Image src={project.image.src} alt="" fill sizes="90px" className="object-cover object-left-top" />
          </div>
        </div>
      )}
    </div>
  );
}

export default function ProjectCard({ project }: { project: Project }) {
  const Icon = icons[project.icon];
  return (
    <article
      id={`project-${project.slug}`}
      className="group flex flex-col rounded-2xl border border-white/10 bg-[#0b1a2e]/80 p-4 shadow-[0_24px_60px_-30px_rgba(22,131,255,0.45)] backdrop-blur-md transition-transform hover:-translate-y-0.5 sm:p-4"
    >
      <div className="flex items-start gap-2.5">
        <span className={`flex h-[2.9rem] w-[2.9rem] shrink-0 items-center justify-center rounded-xl bg-gradient-to-br text-white shadow-[0_10px_24px_-10px_rgba(0,0,0,0.8)] ${tiles[project.icon]}`}>
          <Icon className="h-6 w-6" />
        </span>
        <div className="min-w-0">
          <span className="inline-block rounded-full border border-white/10 bg-[#0e2140] whitespace-nowrap px-2.5 py-0.5 text-[0.62rem] font-medium text-primary/90">
            {project.category}
          </span>
          <h3 className="font-heading mt-1 min-h-[2.3em] text-[0.95rem] font-bold leading-tight tracking-tight text-primary">{project.name}</h3>
        </div>
      </div>

      <p className="mt-2.5 min-h-[3.9em] text-[0.78rem] leading-snug text-primary/85">{project.summary}</p>
      <p className="sr-only">{project.description}</p>

      <Laptop project={project} />

      <ul className="mt-4 flex flex-wrap gap-1.5" aria-label="Technologies">
        {project.stack.map((t) => (
          <li key={t} className="rounded-lg border border-white/10 bg-[#0e2140] px-2.5 py-1 text-[0.68rem] font-medium text-primary/90">
            {t}
          </li>
        ))}
      </ul>

      <div className="mt-auto pt-3.5">
        {project.caseStudy ? (
          <Link
            href={`/projects/${project.slug}`}
            className="plain inline-flex items-center gap-2 whitespace-nowrap text-[0.85rem] font-semibold text-link transition-colors hover:text-accent-light"
          >
            View Project <ArrowRight className="h-4 w-4" />
          </Link>
        ) : (
          <a
            href="#contact"
            className="plain inline-flex items-center gap-2 whitespace-nowrap text-[0.85rem] font-semibold text-link transition-colors hover:text-accent-light"
          >
            Request a demo <ArrowRight className="h-4 w-4" />
          </a>
        )}
      </div>
    </article>
  );
}
