import { useState } from "react"
import { motion } from "framer-motion"

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
    <section className="bg-[#06121f] py-32 px-6 md:px-20">
      <div className="grid md:grid-cols-2 gap-20 items-center">

        {/* LEFT PANEL */}
        <motion.div
          key={active.title}
          initial={{ opacity: 0, rotateY: -10 }}
          animate={{ opacity: 1, rotateY: 0 }}
          transition={{ duration: 0.5 }}
          className="bg-slate-900/70 backdrop-blur-md border border-white/10 rounded-2xl p-10 shadow-xl"
        >
          <h2 className="text-3xl font-semibold text-white">
            {active.title}
          </h2>
          <p className="text-slate-400 mt-4">
            {active.description}
          </p>
        </motion.div>

        {/* RIGHT GRID */}
        <div>
          <h2 className="text-4xl font-bold text-white mb-10">
            Skills
          </h2>

          <div className="grid grid-cols-2 md:grid-cols-3 gap-6">
            {skills.map((skill) => (
              <div
                key={skill.title}
                onMouseEnter={() => setActive(skill)}
                className="cursor-pointer text-center py-4 border border-white/10 rounded-xl text-slate-300 hover:text-white hover:border-cyan-400 hover:shadow-[0_0_15px_#22d3ee] transition-all"
              >
                {skill.title}
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  )
}
