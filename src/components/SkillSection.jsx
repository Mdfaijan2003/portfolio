import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"

const skills = [
  {
    title: "Frontend",
    description: "Building responsive UI with React & Tailwind.",
  },
  {
    title: "Backend",
    description: "Scalable APIs with Node & Express.",
  },
  {
    title: "C++ / DSA",
    description: "Problem solving & algorithmic thinking.",
  },
  {
    title: "Database",
    description: "MongoDB & data modeling.",
  },
  {
    title: "System Design",
    description: "Architecture thinking & scalability.",
  },
  {
    title: "Cloud",
    description: "Deployment & hosting knowledge.",
  },
]

export default function SkillsSection() {
  const [active, setActive] = useState(skills[0])

  return (
    <section className="relative bg-gradient-to-b from-[#050b16] to-[#0b1f36] py-28 px-6 md:px-20">

      {/* Ambient Cyan Glow */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_30%,_rgba(34,211,238,0.08),_transparent_40%)]" />

      <div className="relative z-10 max-w-7xl mx-auto">

        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white">
            Skills
          </h2>
          <p className="text-slate-400 mt-4">
            Technologies & domains I work with
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-20 items-center">

          {/* LEFT — MACBOOK */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="relative"
          >
            {/* Laptop Shell */}
            <div className="bg-slate-900/70 backdrop-blur-xl border border-cyan-400/10 rounded-2xl shadow-[0_0_40px_rgba(0,0,0,0.6)] p-3">

              {/* Screen */}
              <div className="bg-black rounded-xl border border-white/5 overflow-hidden">

                {/* macOS Bar */}
                <div className="flex items-center gap-2 px-4 py-2 bg-slate-950">
                  <div className="w-3 h-3 bg-red-500 rounded-full" />
                  <div className="w-3 h-3 bg-yellow-500 rounded-full" />
                  <div className="w-3 h-3 bg-green-500 rounded-full" />
                  <span className="text-xs text-slate-500 ml-3">
                    preview.jsx
                  </span>
                </div>

                {/* Screen Content */}
                <div className="bg-[#020617] p-10 min-h-[260px]">
                  <AnimatePresence mode="wait">
                    <motion.div
                      key={active.title}
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -10 }}
                      transition={{ duration: 0.3 }}
                    >
                      <div className="text-xs text-cyan-400 font-mono">
                        &gt; {active.title}
                      </div>

                      <h3 className="text-2xl font-semibold text-white mt-4">
                        {active.title}
                      </h3>

                      <p className="text-slate-400 mt-3 leading-relaxed">
                        {active.description}
                      </p>
                    </motion.div>
                  </AnimatePresence>
                </div>
              </div>
            </div>

            {/* Base / Keyboard Hint */}
            <div className="mt-2 h-6 bg-slate-800 rounded-xl border border-white/5 shadow-inner" />
            <div className="w-32 h-2 bg-slate-700 rounded-full mx-auto mt-1 opacity-50" />

            {/* Neon Underglow */}
            <div className="absolute -bottom-6 left-1/2 -translate-x-1/2 w-40 h-10 bg-cyan-400/20 blur-2xl opacity-70" />
          </motion.div>

          {/* RIGHT — SKILLS GRID */}
          <div>
            <div className="grid grid-cols-2 md:grid-cols-3 gap-5">
              {skills.map((skill) => {
                const isActive = active.title === skill.title

                return (
                  <motion.div
                    key={skill.title}
                    onMouseEnter={() => setActive(skill)}
                    whileHover={{ scale: 1.05 }}
                    className={`relative cursor-pointer rounded-xl px-4 py-5 text-sm font-medium text-center transition-all
                      backdrop-blur-xl border
                      ${
                        isActive
                          ? "border-cyan-400/40 text-white bg-cyan-400/10 shadow-[0_0_18px_rgba(34,211,238,0.35)]"
                          : "border-white/10 text-slate-300 bg-slate-900/40 hover:border-cyan-400/30 hover:text-white"
                      }`}
                  >
                    {skill.title}

                    {isActive && (
                      <motion.div
                        layoutId="activeGlow"
                        className="absolute inset-0 rounded-xl border border-cyan-400/50"
                        transition={{ type: "spring", stiffness: 300, damping: 25 }}
                      />
                    )}
                  </motion.div>
                )
              })}
            </div>
          </div>

        </div>
      </div>
    </section>
  )
}