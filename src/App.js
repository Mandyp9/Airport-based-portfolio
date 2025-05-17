import React, { useEffect } from "react";
import Header from "./components/Header";
import HeroSection from "./components/HeroSection";
import ProjectsSection from "./components/ProjectsSection";
import SkillsSection from "./components/SkillsSection";
import AboutSection from "./components/aboutSection";
import AchievementsSection from "./components/AchievementSection";
import ContactSection from "./components/ContactSection";
import Footer from "./components/Footer";

function App() {
  useEffect(() => {
    // Select only internal hash links (like #projects, #contact, etc.)
    const internalLinks = document.querySelectorAll("a[href^='#']");

    const handleClick = (e) => {
      e.preventDefault();
      const targetId = e.currentTarget.getAttribute("href").substring(1);
      const targetElement = document.getElementById(targetId);
      if (targetElement) {
        targetElement.scrollIntoView({ behavior: "smooth" });
      }
    };

    internalLinks.forEach((link) => {
      link.addEventListener("click", handleClick);
    });

    return () => {
      internalLinks.forEach((link) => {
        link.removeEventListener("click", handleClick);
      });
    };
  }, []);

  return (
    <div>
      <Header />
      <HeroSection />
      <ProjectsSection />
      <SkillsSection />
      <AboutSection />
      <AchievementsSection />
      <ContactSection />
      <Footer />
    </div>
  );
}

export default App;
