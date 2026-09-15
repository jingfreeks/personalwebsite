export type ProjectIcon = "pos" | "inventory" | "accounting" | "farm";

export type Project = {
  slug: string;
  category: string;
  name: string;
  description: string;
  tech: string[];
  icon: ProjectIcon;
  status: string;
  /** short blurb shown on the card (2 lines) */
  summary: string;
  /** chips shown on the card */
  stack: string[];
  /** show a phone mockup next to the laptop */
  phone?: boolean;
  image: { src: string; alt: string };
  href?: string;
  hrefLabel?: string;
  /** fuller description for the /projects index */
  overview: string;
  /** present only when there is enough real content for a case-study page */
  caseStudy?: CaseStudy;
};

export type CaseStudy = {
  /** optional search-result title (kept under ~40 chars; " | Lyndell Dobluis" is appended) */
  seoTitle?: string;
  /** optional meta description (50–160 chars) */
  seoDescription?: string;
  tagline: string;
  problem: string[];
  solution: string[];
  features: string[];
  technology: { label: string; items: string[] }[];
  implementation: string[];
  challenges: string[];
  result: string[];
  role: string;
  gallery: { src: string; alt: string }[];
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
    summary: "A modern POS and inventory system built for Filipino small businesses.",
    stack: ["React", "TypeScript", "Supabase"],
    phone: true,
    image: { src: "/assets/projects/tindahan-pos-dashboard.jpg", alt: "Tindahan POS admin dashboard with sales, low-stock alerts and customer credit" },
    overview:
      "A cloud-based point-of-sale and inventory system for Filipino sari-sari stores and small retailers. Store owners record sales, track stock and low-stock alerts, manage customer credit (utang), give staff their own roles, and read daily reports — from a web app at the counter and a companion mobile app.",
    caseStudy: {
      seoTitle: "Tindahan POS: Sari-Sari Store POS System",
      seoDescription:
        "Tindahan POS is a POS system for sari-sari stores and small retailers in the Philippines, with sales, inventory and utang (customer credit) tracking.",
      tagline: "A POS system for sari-sari stores: sales, inventory and utang tracking.",
      problem: [
        "Most sari-sari stores and small retailers in the Philippines still run on notebooks: sales are added up by hand, customer credit (utang) is written in a ledger, and nobody knows how much stock is left until it runs out.",
        "Existing POS products are priced and designed for larger shops, assume a full-time cashier, and rarely handle utang — the credit relationship that keeps a neighbourhood store running.",
        "I run a small sari-sari store myself, so these were my own pain points before they were a product idea.",
      ],
      solution: [
        "Tindahan POS is a web application for the counter plus a companion mobile app, sharing one Supabase (PostgreSQL) backend. It is built around how a small store actually works: quick sales, credit customers, restocking, and a simple end-of-day picture.",
        "The platform is shared with the Inventory Management and Accounting modules, so a store can start with the POS and grow into stock control and bookkeeping without re-entering data.",
      ],
      features: [
        "Fast sales and checkout with product search and barcode-friendly entry",
        "Inventory with stock levels, restocking and low-stock alerts",
        "Customer credit (utang) tracking with balances and payments",
        "Staff accounts with roles and permissions per store",
        "Daily sales, top-product and stock reports",
        "Multi-store support on the Dells platform",
        "Companion mobile app for owners on the go",
      ],
      technology: [
        { label: "Web", items: ["React", "Vite", "TypeScript", "Tailwind CSS"] },
        { label: "Mobile", items: ["React Native", "Expo"] },
        { label: "Backend", items: ["Supabase", "PostgreSQL", "Row Level Security", "Supabase Auth"] },
        { label: "Quality", items: ["Vitest", "Jest", "Playwright", "pgTAP", "GitHub Actions"] },
      ],
      implementation: [
        "Database-first design: 143 migrations define the schema, and 35 pgTAP suites test the database rules directly, including Row Level Security policies that keep each store's data isolated.",
        "1,089 automated tests on the web app and 281 on the mobile app run in CI on every change (unit, integration and end-to-end with Playwright).",
        "The system is documented with BIR accreditation in mind (receipt numbering, audit trails and reports), although it is not yet BIR-accredited.",
        "Version 0.9.0 has been in production since September 2026.",
      ],
      challenges: [
        "Modelling customer credit correctly — partial payments, running balances and history — without making the checkout slower.",
        "Keeping a shared multi-store backend secure with Row Level Security while still allowing fast, simple queries for reports.",
        "Making the interface usable by store owners and helpers who have never used a POS before.",
      ],
      result: [
        "Tindahan POS v0.9.0 is live in production and used day to day in my own store, which keeps the feedback loop honest.",
        "It is the foundation of the Dells Software platform; the Inventory Management and Accounting modules build on the same data.",
        "Demos are available on request — get in touch and I'll walk you through it.",
      ],
      role: "Founder, product design, full-stack development, database design, testing and deployment.",
      gallery: [
        { src: "/assets/projects/tindahan-pos-dashboard.jpg", alt: "Tindahan POS dashboard showing sales, low-stock alerts and customer credit" },
        { src: "/assets/projects/tindahan-pos-inventory.jpg", alt: "Tindahan POS inventory screen with stock levels" },
      ],
    },
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
    summary: "Multi-store inventory system with real-time stock monitoring.",
    stack: ["React", "Vite", "Supabase"],
    image: { src: "/assets/projects/inventory-app.jpg", alt: "Inventory Management sign-in screen — stock, orders and deliveries" },
    overview:
      "Stock, purchase orders and deliveries for stores on the Dells platform. It shares the Supabase backend and design system with Tindahan POS, so stock movements from sales and restocking stay in sync without double entry. Web app plus companion mobile app; available as a platform module.",
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
    summary: "A simple and powerful accounting system integrated with POS.",
    stack: ["React", "TypeScript", "PostgreSQL"],
    image: { src: "/assets/projects/accounting.jpg", alt: "Accounting system intro screen — Know exactly where your money went" },
    overview:
      "A simple accounting system for small businesses that integrates with Tindahan POS: profit and loss, balance sheet, cash flow, receivables and payables, built on the same PostgreSQL data so sales and stock feed the books automatically. Currently in development.",
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
    summary: "Farm website and online ordering for poultry, goats, fish, ducks and eggs.",
    stack: ["Next.js", "TypeScript", "Supabase"],
    phone: true,
    image: { src: "/assets/projects/dells-farm.jpg", alt: "Dells Farm website — From family farm to family table" },
    href: "https://dells-farm-site.vercel.app",
    hrefLabel: "Visit the live site",
    overview:
      "The website and online store for Dells Farm, a family farm in Saloy, Davao City: a product catalogue of free-range chickens, ducks, goats, eggs and pond fish, online ordering for customers, and an admin panel for products and orders. Built with Next.js, TypeScript, Tailwind CSS and Supabase, and live today.",
    caseStudy: {
      tagline: "From family farm to family table — a storefront and admin panel for a Davao City farm.",
      problem: [
        "Dells Farm sold poultry, eggs, goats and pond fish through word of mouth and chat messages. Customers had no way to see what was available or place an order without messaging back and forth, and the family kept orders in their heads and on paper.",
      ],
      solution: [
        "A public website with a product catalogue and online ordering, and an admin panel where the family manages products, availability and incoming orders. Everything runs on one Supabase (PostgreSQL) backend behind a Next.js front end deployed on Vercel.",
      ],
      features: [
        "Product catalogue for chickens, ducks, goats, eggs and pond fish",
        "Online ordering for customers",
        "Admin panel for products, availability and orders",
        "Mobile-first, responsive layout",
        "Static rendering for fast loads and good search visibility",
      ],
      technology: [
        { label: "Web", items: ["Next.js", "React", "TypeScript", "Tailwind CSS"] },
        { label: "Backend", items: ["Supabase", "PostgreSQL", "Supabase Auth"] },
        { label: "Hosting", items: ["Vercel"] },
      ],
      implementation: [
        "Built as a Next.js App Router site: the storefront pages are statically rendered, while the admin panel is protected with Supabase Auth.",
        "Products and orders live in PostgreSQL with Row Level Security so only the farm's admins can change them.",
        "Deployed on Vercel with preview deployments for each change.",
      ],
      challenges: [
        "Keeping the ordering flow simple enough for customers who usually order over chat.",
        "Designing an admin panel that a non-technical family can use for daily updates.",
      ],
      result: [
        "The site is live at dells-farm-site.vercel.app and is the farm's public storefront.",
        "The same platform approach (Next.js + Supabase) is reusable for other small agri-businesses.",
      ],
      role: "Design, full-stack development and deployment.",
      gallery: [{ src: "/assets/projects/dells-farm.jpg", alt: "Dells Farm website home page — From family farm to family table" }],
    },
  },
];

export const projectBySlug = (slug: string) => projects.find((p) => p.slug === slug);
export const caseStudyProjects = projects.filter((p) => p.caseStudy);
