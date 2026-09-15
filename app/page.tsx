import Header from "@/components/Header";
import Hero from "@/components/Hero";
import StatsBar from "@/components/StatsBar";
import ProjectGrid from "@/components/ProjectGrid";
import CaseStudies from "@/components/CaseStudies";
import ProofStrip from "@/components/ProofStrip";
import Services from "@/components/Services";
import ExperienceTimeline from "@/components/ExperienceTimeline";
import Recognition from "@/components/Recognition";
import SkillsPanel from "@/components/SkillsPanel";
import AboutSection from "@/components/AboutSection";
import QuoteCard from "@/components/QuoteCard";
import ContactCTA from "@/components/ContactCTA";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import Reveal from "@/components/Reveal";

export default function Home() {
  return (
    <>
      <Header />
      <main className="bg-page text-primary">
        <Hero />
        <StatsBar />
        <Reveal><ProjectGrid /></Reveal>
        <div className="mx-auto max-w-6xl px-5 sm:px-8">
          <CaseStudies />
          <Reveal><ProofStrip /></Reveal>
          <Services />
        </div>
        <Reveal><ExperienceTimeline /></Reveal>
        <div className="mx-auto max-w-6xl px-5 sm:px-8">
          <Recognition />
        </div>
        <Reveal><SkillsPanel /></Reveal>
        <Reveal><AboutSection /></Reveal>
        <Reveal><QuoteCard /></Reveal>
        <Reveal><ContactCTA /></Reveal>
        <div className="mx-auto max-w-6xl px-5 pb-16 sm:px-8">
          <Contact />
        </div>
      </main>
      <Footer />
    </>
  );
}
