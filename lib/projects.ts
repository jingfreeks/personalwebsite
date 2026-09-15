export type ProjectIcon = "pos" | "inventory" | "accounting" | "farm";

export type Project = {
  slug: string;
  category: string;
  name: string;
  description: string;
  highlights?: string[];
  tech: string[];
  icon: ProjectIcon;
  status: string;
  image?: { src: string; alt: string; width: number; height: number };
  href?: string;
  hrefLabel?: string;
};

// Descriptions are taken from each project's own repository and documentation.
export const projects: Project[] = [
  {
    slug: "tindahan-pos",
    category: "POS & Inventory",
    name: "Tindahan POS",
    description:
      "Point-of-sale and inventory system for Philippine sari-sari stores and small retailers, including customer credit (utang) management. Multi-tenant SaaS: a web app plus a companion mobile app on a shared Supabase backend, with a platform console for plans, module entitlements, MFA and audit.",
    highlights: [
      "v0.9.0 released to production — Sept 2026",
      "Technical documentation prepared for BIR accreditation",
      "1,089 web + 281 mobile automated tests, 35 pgTAP suites",
      "Staff roles, shift X/Z readings, receipts, reports, daily backups",
    ],
    tech: ["React", "TypeScript", "Vite", "React Native", "Expo", "Supabase", "PostgreSQL", "Playwright"],
    icon: "pos",
    status: "Alpha · in production",
    image: {
      src: "/assets/projects/tindahan-pos-dashboard.jpg",
      alt: "Tindahan POS admin dashboard showing sales, low-stock alerts and customer credit",
      width: 1200,
      height: 750,
    },
  },
  {
    slug: "inventory-management",
    category: "Warehouse & Stock",
    name: "Inventory Management",
    description:
      "Stock-tracking application for stores on the Dells platform — products, categories, receiving and low-stock visibility — sharing one Supabase backend and a common design system with Tindahan POS. Web app plus a companion mobile app.",
    tech: ["React", "TypeScript", "Vite", "React Native", "Expo", "Supabase", "Tailwind CSS"],
    icon: "inventory",
    status: "Platform module",
  },
  {
    slug: "accounting-system",
    category: "Business Finance",
    name: "Accounting System",
    description:
      "Business finance module for the Dells platform, designed to work from Tindahan POS sales data. Architecture and the first database migrations have shipped; the module is actively in development.",
    tech: ["React", "TypeScript", "Vite", "React Native", "Expo", "Supabase", "PostgreSQL"],
    icon: "accounting",
    status: "In development",
  },
  {
    slug: "dells-farm",
    category: "Farm & Agri-business",
    name: "Dells Farm",
    description:
      "Web presence and ordering platform for a family farm in Saloy, Davao City raising free-range chickens, ducks and goats, with a stocked fish pond. A marketing site for orders and farm visits, plus a Next.js storefront with cart, checkout and an admin panel for products, orders and customers.",
    tech: ["Next.js", "React", "TypeScript", "Vite", "Supabase", "PostgreSQL", "Tailwind CSS"],
    icon: "farm",
    status: "Live",
    href: "https://dells-farm-site.vercel.app",
    hrefLabel: "Visit site",
  },
];
