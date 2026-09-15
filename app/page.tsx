import Hero from "@/components/Hero";
import StatsBar from "@/components/StatsBar";
import ProjectGrid from "@/components/ProjectGrid";
import CaseStudies from "@/components/CaseStudies";
import ExperienceTimeline from "@/components/ExperienceTimeline";
import SkillsPanel from "@/components/SkillsPanel";
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
      <StatsBar />
      <Reveal><ProjectGrid /></Reveal>
      <CaseStudies />
      <div className="mx-auto grid max-w-6xl gap-12 px-5 py-20 sm:px-8 lg:grid-cols-[1.1fr_0.9fr] lg:gap-14">
        <Reveal><ExperienceTimeline /></Reveal>
        <Reveal><SkillsPanel /></Reveal>
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
