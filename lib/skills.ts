export type SkillCategory = "Frontend" | "Backend" | "Mobile" | "Tools";

export const skillCategories: { id: "all" | SkillCategory; label: string }[] = [
  { id: "all", label: "All" },
  { id: "Frontend", label: "Frontend" },
  { id: "Backend", label: "Backend" },
  { id: "Mobile", label: "Mobile" },
  { id: "Tools", label: "Tools & Others" },
];

// Only technologies evidenced in shipped projects or the resume.
// `icon` is a Simple Icons slug served from /public/icons (CC0).
// Brand colours for the icon tiles (official brand hex values).
export const brandColors: Record<string, string> = {
  react: "#61DAFB", nextdotjs: "#FFFFFF", typescript: "#3178C6", javascript: "#F7DF1E", vite: "#A78BFA",
  tailwindcss: "#06B6D4", redux: "#764ABC", reactquery: "#FF4154", expo: "#FFFFFF", xcode: "#147EFB",
  androidstudio: "#3DDC84", supabase: "#3ECF8E", postgresql: "#5B8DEF", nodedotjs: "#5FA04E", express: "#FFFFFF",
  mongodb: "#47A248", firebase: "#FFA000", mysql: "#4A90C8", php: "#777BB4", socketdotio: "#FFFFFF",
  github: "#FFFFFF", githubactions: "#2088FF", playwright: "#2EAD33", vitest: "#FCC72B", postman: "#FF6C37",
  visualstudiocode: "#22A6F2", anthropic: "#D97757", trello: "#0079BF",
};

export const skills: { name: string; category: SkillCategory; icon?: string; featured?: boolean }[] = [
  { name: "React", featured: true, category: "Frontend", icon: "react" },
  { name: "Next.js", featured: true, category: "Frontend", icon: "nextdotjs" },
  { name: "TypeScript", featured: true, category: "Frontend", icon: "typescript" },
  { name: "JavaScript", featured: true, category: "Frontend", icon: "javascript" },
  { name: "Vite", featured: true, category: "Frontend", icon: "vite" },
  { name: "Tailwind CSS", category: "Frontend", icon: "tailwindcss" },
  { name: "Redux", category: "Frontend", icon: "redux" },
  { name: "React Query", category: "Frontend", icon: "reactquery" },
  { name: "React Native", featured: true, category: "Mobile", icon: "react" },
  { name: "Expo", category: "Mobile", icon: "expo" },
  { name: "React Navigation", category: "Mobile" },
  { name: "Xcode", category: "Mobile", icon: "xcode" },
  { name: "Android Studio", category: "Mobile", icon: "androidstudio" },
  { name: "Supabase", featured: true, category: "Backend", icon: "supabase" },
  { name: "PostgreSQL", featured: true, category: "Backend", icon: "postgresql" },
  { name: "Node.js", featured: true, category: "Backend", icon: "nodedotjs" },
  { name: "Express", featured: true, category: "Backend", icon: "express" },
  { name: "MongoDB", featured: true, category: "Backend", icon: "mongodb" },
  { name: "Firebase", featured: true, category: "Backend", icon: "firebase" },
  { name: "REST APIs", category: "Backend" },
  { name: "MySQL", category: "Backend", icon: "mysql" },
  { name: "PHP", category: "Backend", icon: "php" },
  { name: "Socket.IO", category: "Backend", icon: "socketdotio" },
  { name: "WebRTC (Agora)", category: "Backend" },
  { name: "Git / GitHub", featured: true, category: "Tools", icon: "github" },
  { name: "GitHub Actions", featured: true, category: "Tools", icon: "githubactions" },
  { name: "Playwright", featured: true, category: "Tools", icon: "playwright" },
  { name: "Vitest / Jest", featured: true, category: "Tools", icon: "vitest" },
  { name: "Postman", featured: true, category: "Tools", icon: "postman" },
  { name: "VS Code", featured: true, category: "Tools", icon: "visualstudiocode" },
  { name: "Claude Code", category: "Tools", icon: "anthropic" },
  { name: "Trello / JIRA", category: "Tools", icon: "trello" },
];

// Order of the featured tiles in the "All" view (rows of six, as in the design).
export const featuredOrder = [
  "React", "React Native", "Next.js", "TypeScript", "JavaScript", "Vite",
  "Node.js", "Supabase", "PostgreSQL", "Firebase", "Express", "MongoDB",
  "Git / GitHub", "GitHub Actions", "Playwright", "Vitest / Jest", "Postman", "VS Code",
];
