import Hero from "@/components/Hero";
import ProjectGrid from "@/components/ProjectGrid";
import ExperienceTimeline from "@/components/ExperienceTimeline";
import SkillsPanel from "@/components/SkillsPanel";
import FocusCard from "@/components/FocusCard";
import AboutSection from "@/components/AboutSection";
import Values from "@/components/Values";
import ContactCTA from "@/components/ContactCTA";
import Contact from "@/components/Contact";

export default function Home() {
  return (
    <main className="bg-page text-primary">
      <Hero />
      <ProjectGrid />

      {/* experience + about | skills/motto, values, CTA */}
      <div className="mx-auto grid max-w-[64rem] gap-10 px-5 py-12 sm:px-8 lg:max-w-none lg:grid-cols-[38.5%_1fr] lg:gap-x-6 lg:gap-y-8 lg:px-[3%] [&>*]:min-w-0">
        <div className="flex flex-col gap-10">
          <ExperienceTimeline />
          <AboutSection />
        </div>
        <div className="flex flex-col gap-4">
          <div className="grid gap-4 lg:grid-cols-[1fr_35%] [&>*]:min-w-0">
            <SkillsPanel />
            <FocusCard />
          </div>
          <Values />
          <ContactCTA />
        </div>
      </div>

      <div className="mx-auto max-w-[64rem] px-5 pb-14 sm:px-8 lg:max-w-none lg:px-[3%]">
        <div className="rounded-2xl border border-white/10 bg-[#0b1a2e]/80 p-5 sm:p-8">
          <Contact />
        </div>
      </div>
    </main>
  );
}
