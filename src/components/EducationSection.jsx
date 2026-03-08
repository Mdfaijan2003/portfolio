import { useState, useRef } from "react"
import { motion, AnimatePresence, useScroll, useTransform } from "framer-motion"

const data = {
  Academic: [
    {
      id: 1,
      label: "B.Tech",
      title: "B.Tech in Computer Science",
      institution: "Netaji Subhash Engineering College",
      year: "2022 – Present",
      details: [
        "Data Structures & Algorithms",
        "Operating Systems",
        "Database Management Systems",
        "Full Stack Development",
        "Machine Learning",
        "Cloud Computing",
        "Cryptography",
        "System Design",
      ],
      image: "/certificates/btech.jpg",
    },
    {
      id: 2,
      label: "12th Standard",
      title: "12th Standard | Higher Secondary Education",
      institution: "The Crescent School - West Bengal Board",
      year: "2020 – 2022",
      details: [
        "Proficiency in Mathematics",
        "Science Fundamentals",
        "Physics Enthusiast",
        "Hands on laboratory skills",
        "Problem Solving",
        "Critical Thinking",
        "English Language Skills",
      ],
      image: "/certificates/12th.jpg",
    },
    {
      id: 3,
      label: "10th Standard",
      title: "10th Standard | Secondary Education",
      institution: "St. Soldier Convent High School - West Bengal Board",
      year: "2019 – 2020",
      details: [
        "Proficiency in Mathematics",
        "Science Fundamentals",
        "Effective Communication",
        "Problem Solving",
        "Critical Thinking",
        "English Language Skills",
      ],
      image: "/certificates/10th.jpg",
    },
  ],

  Technical: [
    {
      id: 4,
      label: "C++",
      title: "C++ Programming Certification",
      institution: "YouTube - CodeWithHarry",
      year: "2023",
      details: ["Competitive Programming", "Object-Oriented Programming", "Data Structures"],
      image: "/certificates/cpp.jpg",
    },
    {
      id: 5,
      label: "C",
      title: "C Programming Certification",
      institution: "Netaji Subhash Engineering College",
      year: "2023",
      details: ["Procedural Programming", "Memory Management", "System Programming"],
      image: "/certificates/c.jpg",
    },
    {
      id: 6,
      label: "JavaScript",
      title: "JavaScript Programming Certification",
      institution: "Udemy - Hitesh Choudhary",
      year: "2024 - Present",
      details: ["Web Development", "Backend Development", "Object-Oriented Programming", "Data Structures"],
      image: "/certificates/js.jpg",
    },
    {
      id: 7,
      label: "HTML & CSS",
      title: "HTML & CSS Programming Certification",
      institution: "Udemy - Hitesh Choudhary",
      year: "2024",
      details: ["Web Development", "Web Design", "Responsive Design", "Flexbox & Grid"],
      image: "/certificates/html-css.jpg",
    },
    {
      id: 8,
      label: "React",
      title: "React Programming Certification",
      institution: "Udemy - Hitesh Choudhary",
      year: "2025",
      details: ["Web Development", "Component Based Architecture", "Hooks & State Management", "Responsive Design"],
      image: "/certificates/react.jpg",
    },
    {
      id: 9,
      label: "TailwindCSS",
      title: "TailwindCSS Programming Certification",
      institution: "Udemy - Hitesh Choudhary",
      year: "2025",
      details: ["Web Development", "Utility-First CSS", "Responsive Design", "Custom Configuration"],
      image: "/certificates/tailwindcss.jpg",
    },
    {
      id: 10,
      label: "Next.js",
      title: "Next.js Programming Certification",
      institution: "Udemy - Hitesh Choudhary",
      year: "2025",
      details: ["Web Development", "Server Side Rendering", "API Routes", "Static Site Generation"],
      image: "/certificates/nextjs.jpg",
    },
    {
      id: 11,
      label: "Node.js",
      title: "Node.js Programming Certification",
      institution: "Udemy - Hitesh Choudhary",
      year: "2025",
      details: ["Backend Development", "API Development", "Authentication", "Database Integration"],
      image: "/certificates/nodejs.jpg",
    },
    {
      id: 12,
      label: "MongoDB",
      title: "MongoDB Programming Certification",
      institution: "Udemy - Hitesh Choudhary",
      year: "2025",
      details: ["NoSQL Databases", "Data Modeling", "Aggregation Pipeline", "Performance Optimization"],
      image: "/certificates/mongodb.jpg",
    },
    {
      id: 13,
      label: "Python",
      title: "Python & Flask Certification",
      institution: "Online Certification",
      year: "2024",
      details: ["Flask Framework", "Backend APIs", "Database Integration"],
      image: "/certificates/python.jpg",
    },
  ],

  "Data Structure & Algorithm": [
    {
      id: 14,
      label: "LeetCode",
      title: "LeetCode: 200+ Problems Solved",
      institution: "LeetCode",
      year: "2023 - Present",
      details: [
        "Data Structures Implementation",
        "Algorithm Optimization",
        "Problem Solving Patterns",
      ],
      image: "/certificates/leetcode.jpg",
    },
    {
      id: 15,
      label: "TakeUForward",
      title: "TUF: Striver A2Z DSA Series",
      institution: "TakeUForward",
      year: "2023 - 2024",
      details: [
        "Comprehensive DSA Coverage",
        "Interview Preparation",
        "Competitive Programming",
      ],
      image: "/certificates/tuf.jpg",
    },
  ],

  Business: [
    {
      id: 16,
      label: "Finance",
      title: "Introduction to Basics of Finance",
      institution: "SimpliLearn",
      year: "2024",
      details: ["Financial Statements", "Budgeting", "Investment Basics"],
      image: "../assets/certificate introduction to basics of finanace.svg",
    },
    {
      id: 17,
      label: "Critical Thinking",
      title: "Introduction to Critical Thinking",
      institution: "Certification",
      year: "2024",
      details: ["Critical Analysis", "Problem Solving", "Decision Making"],
      image: "../assets/Critical thinking udemy.svg",
    },
    {
      id: 18,
      label: "Digital Marketing",
      title: "Introduction to Digital Marketing",
      institution: "Certification",
      year: "2025",
      details: ["Digital Marketing", "SEO", "Content Marketing", "Social Media Strategy"],
      image: "../assets/UC-40.5htr.svg",
    },
    {
      id: 19,
      label: "QuickBooks",
      title: "Mastering QuickBooks",
      institution: "Certification",
      year: "2025",
      details: ["Accounting", "Bookkeeping", "Financial Reporting", "Payroll Management"],
      image: "../assets/UC-180.5hr.svg",
    },
    {
      id: 20,
      label: "Entrepreneurship",
      title: "Entrepreneurship and Business Management",
      institution: "Udemy",
      year: "2024",
      details: ["Business Strategy", "Startup Fundamentals", "Management Principles"],
      image: "../assets/udemy 3.5.svg",
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
    Technical: "bg-[radial-gradient(circle_at_20%_30%,rgba(56,189,248,0.22),transparent_60%)]",
    "Data Structure & Algorithm": "bg-[radial-gradient(circle_at_20%_30%,rgba(45,212,191,0.2),transparent_60%)]",
    Business: "bg-[radial-gradient(circle_at_20%_30%,rgba(34,211,238,0.18),transparent_60%)]",
    default: "bg-[radial-gradient(circle_at_20%_30%,rgba(34,211,238,0.2),transparent_60%)]",
  }

  return (
    <section
      ref={containerRef}
      className="relative bg-transparent py-24 px-8 md:px-24 overflow-hidden"
    >
      {/* Background Tone Shift */}
      <motion.div
        key={activeCategory}
        initial={{ opacity: 0 }}
        animate={{ opacity: 0.18 }}
        transition={{ duration: 0.6 }}
        className={`absolute inset-0 ${bgTone[activeCategory] || bgTone.default}`}
      />

      <div className="max-w-7xl mx-auto relative z-10">

        {/* LARGE TOP LABEL */}
        <div className="mb-14">
          <p className="text-xs tracking-[0.3em] text-slate-500 uppercase mb-4">
            Knowledge Architecture
          </p>

          <h2 className="text-4xl md:text-5xl font-bold text-white leading-tight">
            Structured Learning & <br />
            <span className="text-cyan-300">Professional Credentials</span>
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
                        className="absolute -left-5 top-2 w-1 h-6 bg-cyan-300 rounded"
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
                                className="absolute -left-4 top-1.5 w-2 h-2 bg-cyan-300 rounded-full"
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

                  <p className="text-cyan-300 mt-1">
                    {activeItem.institution}
                  </p>

                  <p className="text-slate-400 mt-1">
                    {activeItem.year}
                  </p>
                </div>

                {/* PARALLAX CERTIFICATE */}
                <motion.div
                  style={{ y: parallaxY }}
                  className="relative rounded-xl overflow-hidden border border-cyan-300/20 shadow-[0_25px_60px_rgba(0,0,0,0.7)]"
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
                      <span className="w-2 h-2 bg-cyan-300 rounded-full mt-1.5" />
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