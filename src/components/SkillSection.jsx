import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const skills = [
  {
    title: "C++ / DSA",
    description:
      "Engineering-first problem solving through strong algorithmic fundamentals.",
  },
  {
    title: "Database",
    description:
      "Crafting performant schemas and access patterns for predictable scale.",
  },
  {
    title: "System Design",
    description:
      "Turning product requirements into architecture that balances speed and reliability.",
  },
  {
    title: "Cloud",
    description:
      "Shipping and operating production workloads with secure deployment workflows.",
  },
];

export default function SkillsSection() {
  const [active, setActive] = useState(skills[0]);

  return (
    <section className="relative overflow-hidden bg-[#061120] px-4 py-20 sm:px-6 md:px-20 md:py-28">
      
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_15%_15%,rgba(125,211,252,0.2),transparent_42%),radial-gradient(circle_at_85%_80%,rgba(45,212,191,0.18),transparent_45%)]" />

      <div className="relative z-10 mx-auto max-w-7xl rounded-[1.5rem] border border-cyan-200/20 bg-slate-950/45 p-5 shadow-[0_24px_70px_rgba(15,23,42,0.8)] backdrop-blur-xl sm:rounded-[2.2rem] sm:p-8 md:p-12">
        
        <div className="mb-10 text-center sm:mb-16">
          <p className="inline-flex rounded-full border border-cyan-200/30 bg-cyan-300/10 px-3 py-1 text-[10px] uppercase tracking-[0.2em] text-cyan-100 sm:px-4 sm:text-xs sm:tracking-[0.24em]">
            Expertise Matrix
          </p>

          <h2 className="mt-4 text-2xl font-semibold leading-tight text-white sm:mt-5 sm:text-4xl md:text-5xl">
            Skills with a Product Engineering Lens
          </h2>

          <p className="mx-auto mt-3 max-w-2xl text-sm text-slate-300 sm:mt-4 sm:text-base">
            Built to deliver premium interfaces, maintainable systems, and reliable launches.
          </p>
        </div>

        <div className="grid items-start gap-10 md:grid-cols-2 md:gap-20">
          
          {/* LEFT — LAPTOP PREVIEW */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="relative order-2 md:order-1"
          >
            <div className="rounded-2xl border border-cyan-200/20 bg-slate-950/75 p-2.5 shadow-[0_0_0_1px_rgba(34,211,238,0.2)] sm:rounded-3xl sm:p-3">
              
              <div className="overflow-hidden rounded-xl border border-white/10 bg-[#010916] sm:rounded-2xl">
                
                <div className="flex items-center justify-between border-b border-white/10 bg-slate-900/85 px-3 py-2 sm:px-4">
                  <div className="flex items-center gap-1.5 sm:gap-2">
                    <div className="h-2.5 w-2.5 rounded-full bg-rose-400" />
                    <div className="h-2.5 w-2.5 rounded-full bg-amber-300" />
                    <div className="h-2.5 w-2.5 rounded-full bg-emerald-400" />
                  </div>

                  <span className="text-[10px] tracking-wide text-slate-400 sm:text-[11px]">
                    capability-preview.tsx
                  </span>
                </div>

                <div className="min-h-[220px] p-5 sm:min-h-[250px] sm:p-7 md:min-h-[290px] md:p-10">
                  <AnimatePresence mode="wait">
                    <motion.div
                      key={active.title}
                      initial={{ opacity: 0, y: 14 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -14 }}
                      transition={{ duration: 0.28 }}
                    >
                      <p className="font-mono text-[11px] text-cyan-300 sm:text-xs">
                        &gt; focus_area = "{active.title}"
                      </p>

                      <h3 className="mt-3 text-2xl font-semibold text-white sm:mt-4 sm:text-3xl">
                        {active.title}
                      </h3>

                      <p className="mt-3 text-sm leading-relaxed text-slate-300 sm:mt-4 sm:text-base">
                        {active.description}
                      </p>
                    </motion.div>
                  </AnimatePresence>
                </div>
              </div>
            </div>

            <div className="mt-3 h-4 rounded-xl border border-white/10 bg-slate-900/90 sm:h-5" />
            <div className="mx-auto mt-1 h-1.5 w-24 rounded-full bg-slate-700/70 sm:w-28" />
          </motion.div>

          {/* RIGHT — SKILLS GRID */}
          <div className="order-1 space-y-4 sm:space-y-6 md:order-2">
            
            <div className="grid grid-cols-2 gap-3 sm:gap-4 md:grid-cols-3">
              {skills.map((skill) => {
                const isActive = active.title === skill.title;

                return (
                  <motion.button
                    key={skill.title}
                    type="button"
                    onMouseEnter={() => setActive(skill)}
                    onFocus={() => setActive(skill)}
                    onClick={() => setActive(skill)}
                    whileHover={{ scale: 1.04, y: -2 }}
                    className={`rounded-xl border px-3 py-3 text-center text-xs font-medium transition-all sm:px-4 sm:py-4 sm:text-sm
                      ${
                        isActive
                          ? "border-cyan-300/60 bg-cyan-300/15 text-white shadow-[0_0_24px_rgba(45,212,191,0.35)]"
                          : "border-white/15 bg-slate-900/55 text-slate-200 hover:border-cyan-300/40 hover:text-white"
                      }`}
                  >
                    {skill.title}
                  </motion.button>
                );
              })}
            </div>

            <div className="rounded-2xl border border-white/10 bg-slate-900/60 p-4 sm:p-5">
              <p className="text-[10px] uppercase tracking-[0.18em] text-cyan-100 sm:text-xs sm:tracking-[0.2em]">
                Delivery Standard
              </p>

              <p className="mt-2 text-xs leading-relaxed text-slate-300 sm:mt-3 sm:text-sm">
                Every capability is aligned to one outcome: premium UX, engineering depth, and launch-ready execution.
              </p>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
}