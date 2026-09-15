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
export const skills: { name: string; category: SkillCategory; icon?: string }[] = [
  { name: "React", category: "Frontend", icon: "react" },
  { name: "Next.js", category: "Frontend", icon: "nextdotjs" },
  { name: "TypeScript", category: "Frontend", icon: "typescript" },
  { name: "JavaScript", category: "Frontend", icon: "javascript" },
  { name: "Vite", category: "Frontend", icon: "vite" },
  { name: "Tailwind CSS", category: "Frontend", icon: "tailwindcss" },
  { name: "Redux", category: "Frontend", icon: "redux" },
  { name: "React Query", category: "Frontend", icon: "reactquery" },
  { name: "React Native", category: "Mobile", icon: "react" },
  { name: "Expo", category: "Mobile", icon: "expo" },
  { name: "React Navigation", category: "Mobile" },
  { name: "Xcode", category: "Mobile", icon: "xcode" },
  { name: "Android Studio", category: "Mobile", icon: "androidstudio" },
  { name: "Supabase", category: "Backend", icon: "supabase" },
  { name: "PostgreSQL", category: "Backend", icon: "postgresql" },
  { name: "Node.js", category: "Backend", icon: "nodedotjs" },
  { name: "Express", category: "Backend", icon: "express" },
  { name: "MongoDB", category: "Backend", icon: "mongodb" },
  { name: "Firebase", category: "Backend", icon: "firebase" },
  { name: "REST APIs", category: "Backend" },
  { name: "MySQL", category: "Backend", icon: "mysql" },
  { name: "PHP", category: "Backend", icon: "php" },
  { name: "Socket.IO", category: "Backend", icon: "socketdotio" },
  { name: "WebRTC (Agora)", category: "Backend" },
  { name: "Git / GitHub", category: "Tools", icon: "github" },
  { name: "GitHub Actions", category: "Tools", icon: "githubactions" },
  { name: "Playwright", category: "Tools", icon: "playwright" },
  { name: "Vitest / Jest", category: "Tools", icon: "vitest" },
  { name: "Postman", category: "Tools", icon: "postman" },
  { name: "VS Code", category: "Tools", icon: "visualstudiocode" },
  { name: "Claude Code", category: "Tools", icon: "anthropic" },
  { name: "Trello / JIRA", category: "Tools", icon: "trello" },
];
