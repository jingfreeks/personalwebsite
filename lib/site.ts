export const site = {
  name: "Lyndell Dobluis",
  fullName: "Lyndell T. Dobluis",
  firstName: "Lyndell",
  lastName: "Dobluis",
  role: "Software Developer",
  tagline: "Build · Solve · Create · Impact",
  intro:
    "I build modern and scalable web and mobile solutions that help businesses work smarter. From idea to production, I turn complex problems into simple, practical, and user-friendly systems.",
  location: "Davao City, Philippines",
  timezone: "GMT+8",
  email: "lyndell.dobluis@gmail.com",
  linkedin: "https://www.linkedin.com/in/lyndelldobluis",
  github: "https://github.com/jingfreeks",
  url: "https://portfolio-site-rho-eosin.vercel.app",
  resumeUrl: "/Lyndell_Dobluis_Resume.pdf",
  availability: ["Available for opportunities", "Open to Remote"],
  quote: "Good software creates real opportunities.",
};

export const navLinks = [
  { href: "/#home", label: "Home", id: "home" },
  { href: "/#about", label: "About", id: "about" },
  { href: "/#experience", label: "Experience", id: "experience" },
  { href: "/#projects", label: "Projects", id: "projects" },
  { href: "/#skills", label: "Skills", id: "skills" },
  { href: "/blog", label: "Blog", id: "blog" },
  { href: "/#contact", label: "Contact", id: "contact" },
];

export const socials = [
  { key: "linkedin", name: "LinkedIn", href: site.linkedin, external: true },
  { key: "github", name: "GitHub", href: site.github, external: true },
  { key: "email", name: "Email", href: `mailto:${site.email}`, external: false },
  { key: "website", name: "Website", href: site.url, external: true },
];

export const whatIBuild = [
  "Web Development",
  "Mobile App Development",
  "Business Systems",
  "Cloud & Database",
  "System Architecture",
];

export const neonSign = "Code · Optimize · Build · Deploy · Repeat";

// Every figure is verifiable: career history on this site, and the Tindahan POS
// technical documentation (v0.9.0, Sept 2026) for the automated test count.
export const stats: { value: string; label: string; icon: "calendar" | "layers" | "globe" | "shield" | "pin"; note?: string }[] = [
  { value: "15+", label: "Years Experience", icon: "calendar" },
  { value: "12", label: "Companies Worked With", icon: "layers" },
  { value: "3", label: "Countries", icon: "globe" },
  { value: "1,370+", label: "Automated Tests", icon: "shield", note: "Tindahan POS v0.9.0" },
  { value: "Philippines", label: "Open to Remote", icon: "pin" },
];

export const values = [
  { icon: "bulb", accent: "blue", title: "Problem Solver", text: "I enjoy solving real-world problems through technology." },
  { icon: "book", accent: "cyan", title: "Continuous Learner", text: "Always learning new technologies and improving my skills." },
  { icon: "target", accent: "red", title: "Make an Impact", text: "I want to create solutions that make a positive difference." },
] as const;
