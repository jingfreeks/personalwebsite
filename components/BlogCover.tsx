import Image from "next/image";
import { PosIcon, InventoryIcon } from "@/components/Icons";
import type { BlogCover as BlogCoverData } from "@/lib/blog";

const icons = { pos: PosIcon, inventory: InventoryIcon } as const;

/**
 * A code-drawn cover for a blog post — no stock photography, so the visual
 * stays honest about what the article actually is. Same grid + icon-tile
 * language as the project card image fallback, sized as a real cover.
 */
export default function BlogCover({
  cover,
  className = "",
  sizes = "(max-width: 768px) 100vw, 704px",
  priority = false,
}: {
  cover: BlogCoverData;
  className?: string;
  sizes?: string;
  priority?: boolean;
}) {
  const Icon = icons[cover.icon];
  if (cover.image) {
    return (
      <div className={`relative overflow-hidden rounded-xl border border-white/10 bg-[#0a1626] ${className}`}>
        {/* object-position only matters where the box is narrower than the banner (thumbnails):
            keep the subject, not the title text, in frame. */}
        <Image src={cover.image} alt={cover.label} fill sizes={sizes} priority={priority} className="object-cover object-[68%_50%]" />
      </div>
    );
  }
  return (
    <div
      role="img"
      aria-label={cover.label}
      className={`bg-grid relative flex items-center justify-center overflow-hidden rounded-xl border border-white/10 bg-[#0a1626] ${className}`}
    >
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -right-10 -top-10 h-40 w-40 rounded-full bg-accent/20 blur-[70px]"
      />
      <span className="relative flex h-14 w-14 items-center justify-center rounded-2xl border border-accent/40 bg-accent/10 text-accent-light">
        <Icon size={30} />
      </span>
    </div>
  );
}
