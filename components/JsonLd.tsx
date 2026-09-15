import { site, socials } from "@/lib/site";
import { projects } from "@/lib/projects";

export default function JsonLd() {
  const person = {
    "@type": "Person",
    "@id": `${site.url}/#person`,
    name: site.fullName,
    alternateName: site.name,
    url: site.url,
    image: `${site.url}/assets/hero/workspace-mobile.jpg`,
    jobTitle: "Software Developer",
    description: site.intro,
    email: `mailto:${site.email}`,
    address: { "@type": "PostalAddress", addressLocality: "Davao City", addressCountry: "PH" },
    worksFor: { "@type": "Organization", name: "Dells Software", founder: { "@id": `${site.url}/#person` } },
    knowsAbout: ["React", "React Native", "Next.js", "TypeScript", "Supabase", "PostgreSQL", "Node.js", "Point of sale systems", "Inventory management"],
    sameAs: socials.filter((s) => s.external && s.key !== "website").map((s) => s.href),
  };
  const website = {
    "@type": "WebSite",
    "@id": `${site.url}/#website`,
    url: site.url,
    name: `${site.name} — Software Developer`,
    publisher: { "@id": `${site.url}/#person` },
    inLanguage: "en",
  };
  const page = {
    "@type": "ProfilePage",
    "@id": `${site.url}/#page`,
    url: site.url,
    name: `${site.name} — Full Stack Web & Mobile Developer`,
    isPartOf: { "@id": `${site.url}/#website` },
    mainEntity: { "@id": `${site.url}/#person` },
  };
  const apps = projects.map((p) => ({
    "@type": "SoftwareApplication",
    name: p.name,
    applicationCategory: "BusinessApplication",
    description: p.description,
    author: { "@id": `${site.url}/#person` },
    ...(p.href ? { url: p.href } : {}),
  }));
  const data = { "@context": "https://schema.org", "@graph": [person, website, page, ...apps] };
  return <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }} />;
}
