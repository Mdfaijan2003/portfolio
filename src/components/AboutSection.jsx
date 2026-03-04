import React from 'react';
import { User, Code2, Terminal } from 'lucide-react';

const AboutSection = () => {
  return (
    <section className="bg-[#070B14] py-24 px-4 sm:px-6 lg:px-8 font-sans" id="about">
      <div className="max-w-5xl mx-auto">
        
        {/* Section Header */}
        <div className="mb-12">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-slate-700/50 bg-slate-800/30 text-xs font-medium tracking-widest text-slate-300 uppercase mb-4">
            <User size={14} className="text-[#00F0FF]" />
            <span>The Developer</span>
          </div>
          <h2 className="text-3xl md:text-4xl font-bold text-white tracking-tight">
            Engineering with <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#00F0FF] to-blue-500">Precision.</span>
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-start">
          
          {/* Main Text Content */}
          <div className="md:col-span-8 space-y-6 text-slate-400 leading-relaxed">
            <p className="text-lg text-slate-300">
              I'm a software developer and student at Calcutta High School with a relentless drive for product engineering. While my journey started with a deep curiosity for how systems work under the hood, it quickly evolved into a passion for building production-grade, scalable applications.
            </p>
            <p>
              As a Competitive Programming enthusiast, I don't just write code—I engineer solutions. My foundation in C++ and Java taught me to optimize for performance and solve complex algorithmic bottlenecks. I bring that exact same rigorous, logical approach to full-stack web development, ensuring that the applications I build are not just functional, but fundamentally sound.
            </p>
            <p>
              Right now, my focus is on bridging the gap between raw code and measurable real-world impact. Whether I'm architecting real-time online auction systems, building crowdsourced civic issue platforms, or preparing to compete in the Smart India Hackathon (SIH) 2025, my goal remains the same: to deliver premium user experiences backed by robust, launch-ready architectures.
            </p>
          </div>

          {/* Right Column: Quick Stats / Vibe */}
          <div className="md:col-span-4 rounded-xl border border-slate-800/80 bg-[#0B1120] p-6 shadow-xl">
            <div className="font-mono text-sm space-y-4">
              <div>
                <span className="text-slate-500">// Mindset</span>
                <div className="text-[#27C93F] mt-1 flex items-center gap-2">
                  <Terminal size={14} /> Problem Solver First
                </div>
              </div>
              <div className="h-px w-full bg-slate-800/80"></div>
              <div>
                <span className="text-slate-500">// Focus Areas</span>
                <div className="text-[#00F0FF] mt-1 flex items-center gap-2">
                  <Code2 size={14} /> Backend Architecture
                </div>
                <div className="text-[#00F0FF] mt-1 flex items-center gap-2">
                  <Code2 size={14} /> Algorithm Optimization
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default AboutSection;