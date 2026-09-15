export type ProjectIcon = "pos" | "inventory" | "accounting" | "farm";

export type Project = {
  slug: string;
  category: string;
  name: string;
  description: string;
  tech: string[];
  icon: ProjectIcon;
  status: string;
  image: { src: string; alt: string };
  href?: string;
  hrefLabel?: string;
};

// Facts come from each project's own repository, documentation and live site.
// Previews are real captures of the applications.
export const projects: Project[] = [
  {
    slug: "tindahan-pos",
    category: "POS & Inventory",
    name: "Tindahan POS",
    description:
      "A modern POS and inventory system built for Filipino small businesses — sales, stock, customer credit (utang), staff roles and reports. Web app plus companion mobile app; v0.9.0 in production.",
    tech: ["React", "TypeScript", "Vite", "React Native", "Supabase"],
    icon: "pos",
    status: "In production",
    image: { src: "/assets/projects/tindahan-pos-dashboard.jpg", alt: "Tindahan POS admin dashboard with sales, low-stock alerts and customer credit" },
  },
  {
    slug: "inventory-management",
    category: "Warehouse Management",
    name: "Inventory Management",
    description:
      "Stock, orders and deliveries for stores on the Dells platform — sharing one Supabase backend and design system with Tindahan POS. Web app plus companion mobile app.",
    tech: ["React", "Vite", "TypeScript", "Supabase"],
    icon: "inventory",
    status: "Platform module",
    image: { src: "/assets/projects/inventory-app.jpg", alt: "Inventory Management sign-in screen — stock, orders and deliveries" },
  },
  {
    slug: "accounting-system",
    category: "Accounting System",
    name: "Accounting System",
    description:
      "A simple and powerful accounting system integrated with Tindahan POS — profit and loss, balance sheet, cash flow, receivables and payables. In development.",
    tech: ["React", "TypeScript", "PostgreSQL", "Supabase"],
    icon: "accounting",
    status: "In development",
    image: { src: "/assets/projects/accounting.jpg", alt: "Accounting system intro screen — Know exactly where your money went" },
  },
  {
    slug: "dells-farm",
    category: "Poultry & Livestock",
    name: "Dells Farm",
    description:
      "Website and online ordering for a family farm in Saloy, Davao City — free-range chickens, ducks, goats, eggs and pond fish — with a Next.js storefront and admin panel.",
    tech: ["Next.js", "TypeScript", "Supabase", "Tailwind CSS"],
    icon: "farm",
    status: "Live",
    image: { src: "/assets/projects/dells-farm.jpg", alt: "Dells Farm website — From family farm to family table" },
    href: "https://dells-farm-site.vercel.app",
    hrefLabel: "View Project",
  },
];
