import { Suspense, lazy, useEffect } from "react";
import { motion } from "framer-motion";
import Header from "./components/Header";
import Footer from "./components/Footer";
import SectionLoader from "./components/SectionLoader";
import AboutSection from "./components/AboutSection";

const Hero = lazy(() => import("./components/Hero"));
const Project = lazy(() => import("./components/Project"));
const SkillsSection = lazy(() => import("./components/SkillSection"));
const EducationSection = lazy(() => import("./components/EducationSection"));
const ContactSection = lazy(() => import("./components/ContactSection"));

const reveal = {
  hidden: { opacity: 0, y: 36 },
  visible: { opacity: 1, y: 0 },
};

function RevealSection({ children }) {
  return (
    <motion.div
      variants={reveal}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className="section-wrap"
    >
      {children}
    </motion.div>
  );
}

export default function App() {
  useEffect(() => {
    const handleClick = (e) => {
      const ripple = document.createElement("span");
      ripple.className = "fluid-ripple";
      ripple.style.left = `${e.clientX}px`;
      ripple.style.top = `${e.clientY}px`;
      document.body.appendChild(ripple);
      setTimeout(() => ripple.remove(), 1200);
    };

    window.addEventListener("click", handleClick);
    return () => window.removeEventListener("click", handleClick);
  }, []);

  return (
    <div className="relative min-h-screen overflow-hidden">
      <div className="animated-light" />
      <div className="ambient-grid" />

      <Header />
      <main className="relative z-10 pt-[90px] md:pt-[100px]">
        <Suspense fallback={<SectionLoader label="Loading hero" />}>
          <RevealSection>
            <Hero />
          </RevealSection>
        </Suspense>

        <Suspense fallback={<SectionLoader label="Loading about" />}>
          <RevealSection>
            <AboutSection />
          </RevealSection>
        </Suspense>
        <Suspense fallback={<SectionLoader label="Loading projects" />}>
          <RevealSection>
            <Project />
          </RevealSection>
        </Suspense>

        <Suspense fallback={<SectionLoader label="Loading skills" />}>
          <RevealSection>
            <SkillsSection />
          </RevealSection>
        </Suspense>

        <Suspense fallback={<SectionLoader label="Loading education" />}>
          <RevealSection>
            <EducationSection />
          </RevealSection>
        </Suspense>

        <Suspense fallback={<SectionLoader label="Loading contact" />}>
          <RevealSection>
            <ContactSection />
          </RevealSection>
        </Suspense>
      </main>

      <div className="relative z-10">
        <Footer />
      </div>
    </div>
  );
}
