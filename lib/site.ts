export const site = {
  name: "Lyndell Dobluis",
  fullName: "Lyndell T. Dobluis",
  firstName: "Lyndell",
  lastName: "Dobluis",
  role: "Software Developer",
  tagline: "Build • Solve • Create • Impact",
  intro:
    "I build modern and scalable web and mobile solutions that help businesses work smarter. From idea to production, I turn complex problems into simple, practical, and user-friendly systems.",
  location: "Davao City, Philippines",
  timezone: "GMT+8",
  email: "lyndell.dobluis@gmail.com",
  linkedin: "https://www.linkedin.com/in/lyndelldobluis",
  github: "https://github.com/jingfreeks",
  url: "https://portfolio-site-rho-eosin.vercel.app",
  // Set to a public PDF path (e.g. "/resume.pdf") to enable the Download Resume CTA.
  resumeUrl: undefined as string | undefined,
  availability: ["Available for opportunities", "Open to Remote"],
  quote: "Good software creates real opportunities.",
};

export const navLinks = [
  { href: "#home", label: "Home" },
  { href: "#about", label: "About" },
  { href: "#experience", label: "Experience" },
  { href: "#projects", label: "Projects" },
  { href: "#skills", label: "Skills" },
  { href: "#contact", label: "Contact" },
];

export const focusAreas = [
  "Web Development",
  "Mobile App Development",
  "Business Systems",
  "Cloud & Database",
  "System Architecture",
];

export const codeSnippet = [
  "const developer = {",
  '  name: "Lyndell Dobluis",',
  '  focus: "Build Solutions",',
  '  passion: "Technology",',
  '  impact: "Better Tomorrow",',
  "};",
];

// Every figure here is verifiable: career history on this site, and the
// Tindahan POS technical documentation (v0.9.0, Sept 2026) for test counts.
export const stats: { value: string; label: string; note?: string }[] = [
  { value: "15+", label: "Years experience" },
  { value: "12", label: "Companies worked with" },
  { value: "3", label: "Countries" },
  { value: "1,370+", label: "Automated tests", note: "Tindahan POS v0.9.0" },
];

export const values = [
  {
    icon: "bulb",
    title: "Problem Solver",
    text: "I enjoy solving real-world problems through technology.",
  },
  {
    icon: "book",
    title: "Continuous Learner",
    text: "Always learning new technologies and improving my skills.",
  },
  {
    icon: "target",
    title: "Make an Impact",
    text: "I want to create solutions that make a positive difference.",
  },
] as const;
