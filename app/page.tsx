import Hero from "@/components/Hero";
import ProjectGrid from "@/components/ProjectGrid";
import CaseStudies from "@/components/CaseStudies";
import ExperienceTimeline from "@/components/ExperienceTimeline";
import SkillsPanel from "@/components/SkillsPanel";
import FocusCard from "@/components/FocusCard";
import AboutSection from "@/components/AboutSection";
import Values from "@/components/Values";
import Philosophy from "@/components/Philosophy";
import ContactCTA from "@/components/ContactCTA";
import Contact from "@/components/Contact";
import Reveal from "@/components/Reveal";

export default function Home() {
  return (
    <main className="bg-page text-primary">
      <Hero />
      <Reveal><ProjectGrid /></Reveal>
      <CaseStudies />
      <div className="mx-auto grid max-w-[64rem] gap-10 px-5 py-12 sm:px-8 lg:max-w-none lg:grid-cols-[38.5%_1fr_21%] lg:gap-4 lg:px-[3%] [&>*]:min-w-0">
        <Reveal><ExperienceTimeline /></Reveal>
        <Reveal><SkillsPanel /></Reveal>
        <Reveal><FocusCard /></Reveal>
      </div>
      <Reveal><AboutSection /></Reveal>
      <Reveal><Values /></Reveal>
      <Reveal><Philosophy /></Reveal>
      <Reveal><ContactCTA /></Reveal>
      <div className="mx-auto max-w-6xl px-5 pb-16 sm:px-8">
        <Contact />
      </div>
    </main>
  );
}
