// Blog content model. No posts are published yet; routes and metadata are
// ready so articles can be added here without new plumbing.
export type BlogCategory = { slug: string; name: string; description: string };

export const blogCategories: BlogCategory[] = [
  { slug: "react", name: "React", description: "Performance, architecture and best practices for React applications." },
  { slug: "react-native", name: "React Native", description: "Mobile app architecture, FlatList performance and shipping to the stores." },
  { slug: "business-software", name: "Business Software", description: "Building POS, inventory, accounting and ERP-style systems for small businesses." },
  { slug: "supabase", name: "Supabase", description: "Row Level Security, authentication, database design and application security." },
];

export type BlogPost = {
  slug: string;
  title: string;
  description: string;
  category: BlogCategory["slug"];
  publishedAt: string; // ISO date
  updatedAt?: string;
  /** rendered as paragraphs */
  body: string[];
};

export const blogPosts: BlogPost[] = [];

export const postBySlug = (slug: string) => blogPosts.find((p) => p.slug === slug);
