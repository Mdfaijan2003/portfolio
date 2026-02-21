

import { useEffect } from "react";
import Header from "./components/Header";
import Hero from "./components/Hero";
import LineBorder from "./components/LineBorder";
import Project from "./components/Project";
import SkillsSection from "./components/SkillSection";
import EducationSection from "./components/EducationSection";

export default function App() {
  useEffect(() => {
    const handleClick = (e) => {
      const ripple = document.createElement("span");

      ripple.className = "fluid-ripple";
      ripple.style.left = `${e.clientX}px`;
      ripple.style.top = `${e.clientY}px`;

      document.body.appendChild(ripple);

      setTimeout(() => {
        ripple.remove();
      }, 1200);
    };

    window.addEventListener("click", handleClick);

    return () => window.removeEventListener("click", handleClick);
  }, []);
  return (
    <div className="relative min-h-screen overflow-hidden">
      {/* Moving Light Effect */}
      <div className="animated-light" />

      {/* Your Content */}
        <Header />

        <div className="relative z-10 pt-[100px]">
          {/* Your sections will go here */}
          <Hero />
          <Project />
          <SkillsSection />
          <EducationSection />
        </div>
      
    </div>
  );
}
