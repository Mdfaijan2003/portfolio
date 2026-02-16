// import { useState } from 'react';
// import BootIntro from '@/components/BootIntro';
// import TerminalUI from '@/components/TerminalUI';

// // Your portfolio data
// const portfolioData = {
//   user: {
//     name: "Alex Developer",
//     title: "Full Stack Engineer",
//     location: "San Francisco, CA",
//     email: "alex@example.com",
//     links: [
//       { label: "github", href: "https://github.com/alexdev" },
//       { label: "linkedin", href: "https://linkedin.com/in/alexdev" },
//       { label: "resume", href: "#" }
//     ]
//   },
//   about: "Full-stack engineer with 5+ years of experience building scalable web applications. Passionate about clean code, user experience, and performance optimization. Love solving complex problems and learning new technologies.",
//   skills: {
//     languages: ["JavaScript", "TypeScript", "Python", "Go"],
//     backend: ["Node.js", "Express", "Django", "PostgreSQL", "MongoDB", "Redis"],
//     frontend: ["React", "Next.js", "Vue", "Tailwind CSS", "Redux"],
//     tooling: ["Git", "Docker", "Kubernetes", "AWS", "CI/CD", "Jest"]
//   },
//   experience: [
//     {
//       company: "Tech Corp",
//       role: "Senior Software Engineer",
//       period: "Jan 2023 → Present",
//       bullets: [
//         "Led migration to microservices architecture, improving system reliability by 40%",
//         "Reduced API response time from 500ms to 120ms through optimization",
//         "Mentored 3 junior engineers and conducted code reviews"
//       ]
//     },
//     {
//       company: "Startup Inc",
//       role: "Full Stack Developer",
//       period: "Jun 2020 → Dec 2022",
//       bullets: [
//         "Built customer dashboard from scratch serving 10k+ daily users",
//         "Implemented real-time notification system using WebSockets",
//         "Increased test coverage from 40% to 85%"
//       ]
//     }
//   ],
//   projects: [
//     {
//       name: "terminal-portfolio",
//       description: "A terminal-themed portfolio with boot sequence intro, command-driven navigation, and typing sound effects.",
//       stack: ["React", "Tailwind", "Web Audio API"],
//       links: [
//         { label: "repo", href: "https://github.com/alexdev/terminal-portfolio" },
//         { label: "live", href: "#" }
//       ]
//     },
//     {
//       name: "real-time-collab",
//       description: "Real-time collaborative document editor with operational transformation and conflict resolution.",
//       stack: ["Node", "Socket.io", "MongoDB", "React"],
//       links: [
//         { label: "repo", href: "https://github.com/alexdev/collab-editor" },
//         { label: "demo", href: "#" }
//       ]
//     },
//     {
//       name: "api-monitoring",
//       description: "Lightweight API monitoring dashboard with latency tracking, error rate alerts, and uptime metrics.",
//       stack: ["Go", "Postgres", "Redis", "Vue"],
//       links: [{ label: "repo", href: "https://github.com/alexdev/api-monitor" }]
//     }
//   ]
// };

// const bootMessages = [
//   '✓ initializing system...',
//   '✓ verifying recruiter credentials...',
//   '✓ decrypting candidate profile...',
//   '✓ loading project repository...',
//   '✓ compiling experience data...',
//   '✓ establishing secure connection...',
//   '✓ access granted. welcome.',
// ];

// export default function App() {
//   const [showTerminal, setShowTerminal] = useState(false);

//   const handleBootComplete = () => {
//     setShowTerminal(true);
//   };

//   const handleBootReplay = () => {
//     setShowTerminal(false);
//     // Small delay to allow unmounting
//     setTimeout(() => {
//       // Component will remount and replay boot
//     }, 100);
//   };

//   return (
//     <>
//       {!showTerminal ? (
//         <BootIntro
//           userName={portfolioData.user.name.toLowerCase().replace(/\s+/g, '_')}
//           bootLines={bootMessages}
//           onComplete={handleBootComplete}
//         />
//       ) : (
//         <TerminalUI
//           data={portfolioData}
//           onBootReplay={handleBootReplay}
//         />
//       )}
//     </>
//   );
// }

import { useEffect } from "react";
import Header from "./components/Header";
import Hero from "./components/Hero";

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
        </div>
      
    </div>
  );
}
