import { useState, useRef } from "react"
import { motion, AnimatePresence, useScroll, useTransform } from "framer-motion"

const data = {
  Academic: [
    {
      id: "btech",
      label: "B.Tech",
      title: "B.Tech in Computer Science",
      institution: "Netaji Subhash Engineering College",
      year: "2022 – Present",
      score: "CGPA: X.XX",
      details: [
        "Data Structures & Algorithms",
        "Operating Systems",
        "Database Management Systems",
        "Full Stack Development",
      ],
      image: "/certificates/btech.jpg",
    },
  ],

  Technical: [
    {
      id: "python",
      label: "Python",
      title: "Python & Flask Certification",
      institution: "Online Certification",
      year: "2024",
      score: "",
      details: ["Flask", "Backend APIs"],
      image: "/certificates/python.jpg",
    },
  ],

  Business: [
    {
      id: "finance",
      label: "Finance",
      title: "Introduction to Basics of Finance",
      institution: "Certification",
      year: "2024",
      score: "",
      details: ["Financial Statements", "Budgeting"],
      image: "/certificates/finance.jpg",
    },
  ],
}

export default function EducationSection() {
  const categories = Object.keys(data)
  const [activeCategory, setActiveCategory] = useState(categories[0])
  const [activeItem, setActiveItem] = useState(data[categories[0]][0])

  const containerRef = useRef(null)
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"],
  })

  const parallaxY = useTransform(scrollYProgress, [0, 1], [40, -40])

  const handleCategoryChange = (cat) => {
    setActiveCategory(cat)
    setActiveItem(data[cat][0])
  }

  const bgTone = {
    Academic: "bg-[radial-gradient(circle_at_20%_30%,rgba(34,211,238,0.25),transparent_60%)]",
    Technical: "bg-[radial-gradient(circle_at_20%_30%,rgba(56,189,248,0.25),transparent_60%)]",
    Business: "bg-[radial-gradient(circle_at_20%_30%,rgba(99,102,241,0.25),transparent_60%)]",
  }

  return (
    <section
      ref={containerRef}
      className="relative bg-[#030814] py-24 px-8 md:px-24 overflow-hidden"
    >
      {/* Background Tone Shift */}
      <motion.div
        key={activeCategory}
        initial={{ opacity: 0 }}
        animate={{ opacity: 0.18 }}
        transition={{ duration: 0.6 }}
        className={`absolute inset-0 ${bgTone[activeCategory]}`}
      />

      <div className="max-w-7xl mx-auto relative z-10">

        {/* LARGE TOP LABEL */}
        <div className="mb-14">
          <p className="text-xs tracking-[0.3em] text-slate-500 uppercase mb-4">
            Knowledge Architecture
          </p>

          <h2 className="text-4xl md:text-5xl font-bold text-white leading-tight">
            Structured Learning & <br />
            <span className="text-cyan-400">Professional Credentials</span>
          </h2>
        </div>

        <div className="grid md:grid-cols-[260px_1fr] gap-16">

          {/* LEFT NAVIGATION RAIL */}
          <div className="space-y-10">

            {categories.map((cat) => {
              const isActive = activeCategory === cat

              return (
                <div key={cat}>
                  <button
                    onClick={() => handleCategoryChange(cat)}
                    className="relative text-left"
                  >
                    {isActive && (
                      <motion.div
                        layoutId="categoryIndicator"
                        className="absolute -left-5 top-2 w-1 h-6 bg-cyan-400 rounded"
                      />
                    )}

                    <h3
                      className={`text-base font-semibold tracking-wide transition ${
                        isActive ? "text-white" : "text-slate-500"
                      }`}
                    >
                      {cat}
                    </h3>
                  </button>

                  {isActive && (
                    <div className="mt-4 ml-4 space-y-3">
                      {data[cat].map((item) => {
                        const activeSub = activeItem.id === item.id
                        return (
                          <button
                            key={item.id}
                            onClick={() => setActiveItem(item)}
                            className="block text-sm relative text-left"
                          >
                            {activeSub && (
                              <motion.div
                                layoutId="subIndicator"
                                className="absolute -left-4 top-1.5 w-2 h-2 bg-cyan-400 rounded-full"
                              />
                            )}

                            <span
                              className={`transition ${
                                activeSub
                                  ? "text-white"
                                  : "text-slate-500 hover:text-white"
                              }`}
                            >
                              {item.label}
                            </span>
                          </button>
                        )
                      })}
                    </div>
                  )}
                </div>
              )
            })}
          </div>

          {/* RIGHT CONTENT STAGE */}
          <div className="relative">

            <AnimatePresence mode="wait">
              <motion.div
                key={activeItem.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.4 }}
              >
                {/* Meta Info */}
                <div className="mb-8">
                  <h3 className="text-2xl font-semibold text-white">
                    {activeItem.title}
                  </h3>

                  <p className="text-cyan-400 mt-1">
                    {activeItem.institution}
                  </p>

                  <p className="text-slate-400 mt-1">
                    {activeItem.year}
                  </p>
                </div>

                {/* PARALLAX CERTIFICATE */}
                <motion.div
                  style={{ y: parallaxY }}
                  className="relative rounded-xl overflow-hidden border border-cyan-400/20 shadow-[0_25px_60px_rgba(0,0,0,0.7)]"
                >
                  <img
                    src={activeItem.image}
                    alt="Certificate"
                    className="w-full h-[380px] object-cover"
                  />

                  <div className="absolute inset-0 bg-gradient-to-tr from-transparent via-white/5 to-transparent" />
                </motion.div>

                {/* Bullet Details */}
                <ul className="mt-6 space-y-2 text-slate-400 text-sm">
                  {activeItem.details.map((d, i) => (
                    <li key={i} className="flex gap-3">
                      <span className="w-2 h-2 bg-cyan-400 rounded-full mt-1.5" />
                      {d}
                    </li>
                  ))}
                </ul>

              </motion.div>
            </AnimatePresence>

          </div>
        </div>
      </div>
    </section>
  )
}