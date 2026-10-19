import Header from "@/components/layout/Header";
import Footer from "@/components/ui/Footer";
import HeroSection from "@/pages/Home/components/HeroSection";
import AboutMeSection from "@/pages/Home/components/AboutMeSection";
import SkillsSection from "@/pages/Home/components/SkillsSection";
import ProjectsSection from "@/pages/Home/components/ProjectsSection";
import ContactSection from "@/pages/Home/components/ContactSection";

export default function HomePage() {
  return (
    <div className="site min-h-screen bg-paper text-ink">
      <Header />
      <main>
        <HeroSection />
        <AboutMeSection />
        <SkillsSection />
        <ProjectsSection />
        <ContactSection />
      </main>
      <Footer />
    </div>
  );
}
