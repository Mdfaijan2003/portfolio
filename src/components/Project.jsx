// import { motion, useScroll, useTransform } from "framer-motion";
// import { useRef } from "react";

// const projects = [
//   {
//     title: "Royal Turf Web App",
//     description: "Full slot booking system with payment integration.",
//   },
//   {
//     title: "Backend Architecture App",
//     description: "Node + Express scalable backend with modular structure.",
//   },
//   {
//     title: "DSA Problem Tracker",
//     description: "Custom UI to track coding problems & stats.",
//   },
// ];

// export default function Project() {
//   const ref = useRef(null);

//   const { scrollYProgress } = useScroll({
//     target: ref,
//     offset: ["start start", "end end"],
//   });

//   const height = useTransform(scrollYProgress, [0, 1], ["0%", "100%"]);
//   return (
//     <>
//       <section ref={ref} className="relative bg-[#06121f] py-32 px-6 md:px-20">
//         {/* Center Line Base */}
//         <div className="absolute left-1/2 top-0 -translate-x-1/2 w-[2px] h-full bg-white/10" />

//         {/* Glowing Scroll Progress Line */}
//         <motion.div
//           style={{ height }}
//           className="absolute left-1/2 top-0 -translate-x-1/2 w-[3px] bg-cyan-400 shadow-[0_0_20px_#22d3ee]"
//         />

//         <div className="space-y-32">
//           {projects.map((project, index) => {
//             const isLeft = index % 2 === 0;

//             return (
//               <div
//                 key={index}
//                 className={`relative flex items-center ${
//                   isLeft ? "justify-start" : "justify-end"
//                 }`}
//               >
//                 {/* Dot */}
//                 <div className="absolute left-1/2 -translate-x-1/2 w-4 h-4 bg-cyan-400 rounded-full shadow-[0_0_15px_#22d3ee]" />

//                 {/* Arrow Line */}
//                 <div
//                   className={`absolute top-1/2 ${
//                     isLeft
//                       ? "left-1/2 -translate-x-full -ml-2 w-[calc(50%-2rem)]"
//                       : "left-1/2 ml-2 w-[calc(50%-2rem)]"
//                   } h-[2px] bg-cyan-400 shadow-[0_0_10px_#22d3ee]`}
//                 />

//                 {/* Arrow Head */}
//                 <div
//                   className={`absolute top-1/2 ${
//                     isLeft
//                       ? "left-[calc(50%-2rem)] -translate-y-1/2 rotate-180"
//                       : "right-[calc(50%-2rem)] -translate-y-1/2"
//                   }`}
//                 >
//                   <div className="w-3 h-3 border-t-2 border-r-2 border-cyan-400 rotate-45" />
//                 </div>

//                 {/* Card */}
//                 <motion.div
//                   initial={{ opacity: 0, x: isLeft ? -80 : 80 }}
//                   whileInView={{ opacity: 1, x: 0 }}
//                   transition={{ duration: 0.6 }}
//                   className="w-full md:w-[40%] bg-slate-900/70 backdrop-blur-md border border-white/10 p-6 rounded-xl shadow-lg"
//                 >
//                   <h3 className="text-xl font-semibold text-white">
//                     {project.title}
//                   </h3>
//                   <p className="text-slate-400 mt-2">{project.description}</p>

//                   <button className="mt-4 text-cyan-400 hover:underline">
//                     View Case Study →
//                   </button>
//                 </motion.div>
//               </div>
//             );
//           })}
//         </div>
//       </section>
//     </>
//   );
// }


import { motion } from "framer-motion";

const projects = [
  {
    title: "Royal Turf Booking Platform",
    category: "Product + Payments",
    year: "2025",
    summary:
      "Built a full booking lifecycle with live slot inventory, secure checkout flows, and operational dashboards.",
    impact: "42% faster booking completion",
    stack: ["React", "Node.js", "MongoDB", "Razorpay"],
    tone: "from-cyan-300/25 via-teal-300/10 to-transparent",
  },
  {
    title: "Scalable Backend Architecture",
    category: "Platform Engineering",
    year: "2024",
    summary:
      "Engineered a modular Express architecture with layered services, auth boundaries, and deployment-ready observability.",
    impact: "99.9% API uptime target",
    stack: ["Node.js", "Express", "Redis", "Docker"],
     tone: "from-cyan-400/20 via-sky-300/10 to-transparent",
  },
  {
    title: "DSA Performance Tracker",
    category: "Developer Experience",
    year: "2024",
    summary:
      "Designed a focused analytics UI to monitor problem-solving consistency, topic heatmaps, and streak intelligence.",
    impact: "3x more weekly practice consistency",
    stack: ["React", "Tailwind", "Charts", "Firebase"],
    tone: "from-teal-300/20 via-cyan-300/10 to-transparent",
  },
];

export default function Project() {
  return (
    <section className="relative overflow-hidden bg-[#040b18] px-6 py-24 md:px-20 md:py-32">
      
      {/* Background Glow */}
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_15%_20%,rgba(56,189,248,0.14),transparent_40%),radial-gradient(circle_at_85%_80%,rgba(45,212,191,0.16),transparent_46%)]" />

      <div className="relative z-10 mx-auto max-w-7xl">
        
        {/* Section Header */}
        <div className="mb-14 md:mb-16">
          <p className="inline-flex rounded-full border border-cyan-200/35 bg-cyan-300/10 px-4 py-1 text-xs uppercase tracking-[0.25em] text-cyan-100">
            Case Studies
          </p>

          <h2 className="mt-5 max-w-3xl text-3xl font-semibold leading-tight text-white md:text-5xl">
            Premium product builds with measurable business outcomes.
          </h2>

          <p className="mt-4 max-w-2xl text-sm text-slate-300 md:text-base">
            Selected work spanning product engineering, platform architecture, and high-polish user experiences.
          </p>
        </div>

        {/* Grid */}
        <div className="grid gap-6 md:grid-cols-12 md:gap-7">
          {projects.map((project, index) => {
            const featured = index === 0;

            return (
              <motion.article
                key={project.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ duration: 0.6, delay: index * 0.08 }}
                className={`group relative overflow-hidden rounded-3xl border border-white/10 bg-slate-900/55 p-6 backdrop-blur-xl md:p-8 ${
                  featured ? "md:col-span-7" : "md:col-span-5"
                }`}
              >
                
                {/* Gradient Tone */}
                <div
                  className={`absolute inset-0 bg-gradient-to-br ${project.tone} opacity-80 transition-opacity duration-500 group-hover:opacity-100`}
                />

                {/* Grid Texture */}
                <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.05)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.05)_1px,transparent_1px)] bg-[size:34px_34px] opacity-[0.06]" />

                <div className="relative z-10">
                  
                  {/* Meta */}
                  <div className="flex items-center justify-between gap-3 text-xs uppercase tracking-[0.16em] text-slate-300">
                    <span>{project.category}</span>
                    <span>{project.year}</span>
                  </div>

                  {/* Title */}
                  <h3 className="mt-5 text-2xl font-semibold text-white md:text-3xl">
                    {project.title}
                  </h3>

                  {/* Summary */}
                  <p className="mt-4 text-sm leading-relaxed text-slate-200 md:text-base">
                    {project.summary}
                  </p>

                  {/* Impact Badge */}
                  <div className="mt-6 inline-flex items-center rounded-full border border-cyan-200/35 bg-cyan-300/10 px-4 py-1.5 text-xs font-medium text-cyan-100 md:text-sm">
                    {project.impact}
                  </div>

                  {/* Stack */}
                  <div className="mt-7 flex flex-wrap gap-2.5">
                    {project.stack.map((item) => (
                      <span
                        key={item}
                        className="rounded-full border border-white/15 bg-slate-950/50 px-3 py-1 text-[11px] uppercase tracking-wider text-slate-200"
                      >
                        {item}
                      </span>
                    ))}
                  </div>

                  {/* CTA */}
                  <button className="mt-8 inline-flex items-center gap-2 text-sm font-medium text-cyan-200 transition-colors hover:text-white">
                    View case study
                    <span aria-hidden>↗</span>
                  </button>
                </div>
              </motion.article>
            );
          })}
        </div>
      </div>
    </section>
  );
}