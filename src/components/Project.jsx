import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";

const projects = [
  {
    title: "Royal Turf Web App",
    description: "Full slot booking system with payment integration.",
  },
  {
    title: "Backend Architecture App",
    description: "Node + Express scalable backend with modular structure.",
  },
  {
    title: "DSA Problem Tracker",
    description: "Custom UI to track coding problems & stats.",
  },
];

export default function Project() {
  const ref = useRef(null);

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end end"],
  });

  const height = useTransform(scrollYProgress, [0, 1], ["0%", "100%"]);
  return (
    <>
      <section ref={ref} className="relative bg-[#06121f] py-32 px-6 md:px-20">
        {/* Center Line Base */}
        <div className="absolute left-1/2 top-0 -translate-x-1/2 w-[2px] h-full bg-white/10" />

        {/* Glowing Scroll Progress Line */}
        <motion.div
          style={{ height }}
          className="absolute left-1/2 top-0 -translate-x-1/2 w-[3px] bg-cyan-400 shadow-[0_0_20px_#22d3ee]"
        />

        <div className="space-y-32">
          {projects.map((project, index) => {
            const isLeft = index % 2 === 0;

            return (
              <div
                key={index}
                className={`relative flex items-center ${
                  isLeft ? "justify-start" : "justify-end"
                }`}
              >
                {/* Dot */}
                <div className="absolute left-1/2 -translate-x-1/2 w-4 h-4 bg-cyan-400 rounded-full shadow-[0_0_15px_#22d3ee]" />

                {/* Arrow Line */}
                <div
                  className={`absolute top-1/2 ${
                    isLeft
                      ? "left-1/2 -translate-x-full -ml-2 w-[calc(50%-2rem)]"
                      : "left-1/2 ml-2 w-[calc(50%-2rem)]"
                  } h-[2px] bg-cyan-400 shadow-[0_0_10px_#22d3ee]`}
                />

                {/* Arrow Head */}
                <div
                  className={`absolute top-1/2 ${
                    isLeft
                      ? "left-[calc(50%-2rem)] -translate-y-1/2 rotate-180"
                      : "right-[calc(50%-2rem)] -translate-y-1/2"
                  }`}
                >
                  <div className="w-3 h-3 border-t-2 border-r-2 border-cyan-400 rotate-45" />
                </div>

                {/* Card */}
                <motion.div
                  initial={{ opacity: 0, x: isLeft ? -80 : 80 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.6 }}
                  className="w-full md:w-[40%] bg-slate-900/70 backdrop-blur-md border border-white/10 p-6 rounded-xl shadow-lg"
                >
                  <h3 className="text-xl font-semibold text-white">
                    {project.title}
                  </h3>
                  <p className="text-slate-400 mt-2">{project.description}</p>

                  <button className="mt-4 text-cyan-400 hover:underline">
                    View Case Study →
                  </button>
                </motion.div>
              </div>
            );
          })}
        </div>
      </section>
    </>
  );
}
