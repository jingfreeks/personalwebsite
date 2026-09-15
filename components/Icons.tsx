import type { SVGProps } from "react";

type IconProps = SVGProps<SVGSVGElement> & { size?: number };

function Base({ size = 18, children, ...rest }: IconProps) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth={1.8}
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
      focusable="false"
      {...rest}
    >
      {children}
    </svg>
  );
}

export const ArrowRight = (p: IconProps) => (
  <Base {...p}><path d="M5 12h14" /><path d="m13 6 6 6-6 6" /></Base>
);
export const ExternalLink = (p: IconProps) => (
  <Base {...p}><path d="M14 4h6v6" /><path d="M20 4 10 14" /><path d="M18 13v5a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h5" /></Base>
);
export const Menu = (p: IconProps) => (
  <Base {...p}><path d="M4 7h16" /><path d="M4 12h16" /><path d="M4 17h16" /></Base>
);
export const Close = (p: IconProps) => (
  <Base {...p}><path d="M6 6l12 12" /><path d="M18 6 6 18" /></Base>
);
export const Check = (p: IconProps) => (
  <Base {...p}><path d="m5 12 4 4L19 6" /></Base>
);
export const Send = (p: IconProps) => (
  <Base {...p}><path d="M21 3 3 10l8 3 3 8 7-18Z" /><path d="m11 13 10-10" /></Base>
);
export const Mail = (p: IconProps) => (
  <Base {...p}><rect x="3" y="5" width="18" height="14" rx="2" /><path d="m3 7 9 6 9-6" /></Base>
);
export const Bulb = (p: IconProps) => (
  <Base {...p}><path d="M9 18h6" /><path d="M10 21h4" /><path d="M8 13a5 5 0 1 1 8 0c-1 1-1.5 2-1.5 3h-5c0-1-.5-2-1.5-3Z" /></Base>
);
export const Book = (p: IconProps) => (
  <Base {...p}><path d="M4 5a2 2 0 0 1 2-2h13v16H6a2 2 0 0 0-2 2V5Z" /><path d="M4 19a2 2 0 0 1 2-2h13" /></Base>
);
export const Target = (p: IconProps) => (
  <Base {...p}><circle cx="12" cy="12" r="9" /><circle cx="12" cy="12" r="5" /><circle cx="12" cy="12" r="1" /></Base>
);
export const Layers = (p: IconProps) => (
  <Base {...p}><path d="m12 3 9 5-9 5-9-5 9-5Z" /><path d="m3 13 9 5 9-5" /></Base>
);

/* Project category marks */
export const PosIcon = (p: IconProps) => (
  <Base {...p}><rect x="4" y="3" width="16" height="18" rx="2" /><path d="M8 8h8" /><path d="M8 12h8" /><path d="M8 16h5" /></Base>
);
export const InventoryIcon = (p: IconProps) => (
  <Base {...p}><path d="M3 9h18v11H3z" /><path d="M3 9l2-5h14l2 5" /><path d="M10 13h4" /></Base>
);
export const AccountingIcon = (p: IconProps) => (
  <Base {...p}><rect x="5" y="3" width="14" height="18" rx="2" /><path d="M8 7h8" /><path d="M8 11h2" /><path d="M14 11h2" /><path d="M8 15h2" /><path d="M14 15h2" /></Base>
);
export const FarmIcon = (p: IconProps) => (
  <Base {...p}><path d="M12 21c-4 0-7-3-7-7 0-4 4-8 7-11 3 3 7 7 7 11 0 4-3 7-7 7Z" /><path d="M12 21v-8" /><path d="m9 13 3-2 3 2" /></Base>
);

/* Social monograms — consistent, dependency-free marks */
export function SocialMark({ label }: { label: string }) {
  return (
    <span
      aria-hidden="true"
      className="inline-flex h-5 w-5 items-center justify-center rounded-[5px] border border-divider bg-surface font-mono text-[10px] font-medium leading-none text-secondary"
    >
      {label}
    </span>
  );
}
