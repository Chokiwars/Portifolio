import React, { useEffect } from 'react';
import HeroSection from "@/pages/Home/components/HeroSection";
import AboutMeSection from "@/pages/Home/components/AboutMeSection";
import SkillsSection from "@/pages/Home/components/SkillsSection";
import ProjectsSection from "@/pages/Home/components/ProjectsSection";
import ContactSection from "@/pages/Home/components/ContactSection";
import Header from "@/components/layout/Header";
import Footer from "@/components/ui/Footer";

export default function HomePage() {
  useEffect(() => {
    // Scroll to top on component mount
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-screen bg-gray-900">
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