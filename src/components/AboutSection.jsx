import React from "react";
import { User, Code2, Terminal, Rocket, ShieldCheck } from "lucide-react";
import { motion } from "framer-motion";

const focusAreas = [
  "Backend Architecture",
  "Algorithm Optimization",
  "Scalable Full-Stack Systems",
];

const metrics = [
  { label: "Problem Solving", value: "200+ DSA problems" },
  { label: "Build Approach", value: "Performance + Clarity" },
  { label: "Current Goal", value: "Launch-ready products" },
];

const AboutSection = () => {
  return (
    <section className="relative bg-transparent px-4 py-20 font-sans sm:px-6 lg:px-8" id="about">
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_20%_20%,rgba(34,211,238,0.14),transparent_42%),radial-gradient(circle_at_80%_70%,rgba(45,212,191,0.12),transparent_45%)]" />

      <div className="relative mx-auto max-w-6xl">
        <motion.div
          initial={{ opacity: 0, y: 18 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.4 }}
          transition={{ duration: 0.55 }}
          className="mb-10"
        >
          <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-cyan-200/30 bg-cyan-300/10 px-3 py-1 text-xs font-medium uppercase tracking-widest text-cyan-100">
            <User size={14} className="text-cyan-300" />
            <span>The Developer</span>
          </div>

          <h2 className="text-3xl font-bold tracking-tight text-white md:text-5xl">
            Engineering with <span className="bg-gradient-to-r from-cyan-300 to-teal-300 bg-clip-text text-transparent">Precision.</span>
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 gap-6 lg:grid-cols-12">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.55 }}
            className="rounded-2xl border border-cyan-200/20 bg-slate-950/50 p-6 text-slate-300 shadow-[0_18px_60px_rgba(2,8,23,0.6)] backdrop-blur-xl lg:col-span-8 lg:p-8"
          >
            <div className="space-y-5 leading-relaxed">
              <p className="text-base text-slate-100 md:text-lg">
                I&apos;m a software developer and Computer Science student at Netaji Subhash Engineering College, with a strong product-engineering mindset.
                My journey started with curiosity about how systems work under the hood and evolved into building production-grade, scalable applications.
              </p>

              <p>
                As a competitive programming enthusiast, I focus on solution quality—not just implementation speed.
                My foundation in C++ and Java helps me optimize for performance, reason about trade-offs, and prevent bottlenecks early in design.
              </p>

              <p>
                Right now, I&apos;m focused on bridging raw code with measurable business impact: robust backend architecture,
                seamless UX delivery, and launch-ready reliability across real-world projects.
              </p>
            </div>

            <div className="mt-7 grid grid-cols-1 gap-3 sm:grid-cols-3">
              {metrics.map((item) => (
                <div key={item.label} className="rounded-xl border border-white/10 bg-slate-900/60 p-3.5">
                  <p className="text-[10px] uppercase tracking-[0.18em] text-slate-400">{item.label}</p>
                  <p className="mt-1 text-sm text-cyan-100">{item.value}</p>
                </div>
              ))}
            </div>
          </motion.div>

          <motion.aside
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.55, delay: 0.05 }}
            className="rounded-2xl border border-cyan-200/20 bg-slate-950/60 p-6 shadow-xl backdrop-blur-xl lg:col-span-4"
          >
            <div className="space-y-5 font-mono text-sm">
              <div>
                <span className="text-slate-500">// Mindset</span>
                <div className="mt-1.5 flex items-center gap-2 text-emerald-300">
                  <Terminal size={14} /> Problem Solver First
                </div>
              </div>

              <div className="h-px w-full bg-white/10" />

              <div>
                <span className="text-slate-500">// Focus Areas</span>
                <div className="mt-2 space-y-2">
                  {focusAreas.map((item) => (
                    <div key={item} className="flex items-center gap-2 text-cyan-200">
                      <Code2 size={14} /> {item}
                    </div>
                  ))}
                </div>
              </div>

              <div className="h-px w-full bg-white/10" />

              <div className="space-y-2 text-slate-300">
                <div className="flex items-center gap-2">
                  <Rocket size={14} className="text-cyan-300" /> Building for real-world impact
                </div>
                <div className="flex items-center gap-2">
                  <ShieldCheck size={14} className="text-teal-300" /> Reliability-first execution
                </div>
              </div>
            </div>
          </motion.aside>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;