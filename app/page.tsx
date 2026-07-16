import Sidebar from "@/components/Sidebar";
import Hero from "@/components/Hero";
import Experience from "@/components/Experience";
import Software from "@/components/Software";
import Skills from "@/components/Skills";
import Achievements from "@/components/Achievements";
import Certificates from "@/components/Certificates";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <div className="flex min-h-screen flex-col bg-page text-primary md:flex-row">
      <Sidebar />
      <main className="min-w-0 max-w-[960px] flex-1 px-5 py-10 sm:px-8 md:px-14 md:py-12">
        <Hero />
        <Experience />
        <Software />
        <Skills />
        <Achievements />
        <Certificates />
        <Contact />
        <Footer />
      </main>
    </div>
  );
}
