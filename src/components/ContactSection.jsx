import React, { useState } from "react";
import { Mail, Github, Linkedin, Send, Terminal, Clock3 } from "lucide-react";
import { motion } from "framer-motion";

const ContactSection = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form submitted:", formData);
  };

  return (
    <section
      className="relative flex min-h-screen items-center justify-center overflow-hidden bg-transparent px-4 py-20 font-sans sm:px-6 lg:px-8"
      id="contact"
    >
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_15%_15%,rgba(34,211,238,0.18),transparent_42%),radial-gradient(circle_at_85%_80%,rgba(45,212,191,0.14),transparent_45%)]" />

      <div className="relative mx-auto w-full max-w-5xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.4 }}
          className="mb-14 flex flex-col items-center text-center"
        >
          <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-cyan-200/30 bg-cyan-300/10 px-3 py-1 text-xs font-medium uppercase tracking-widest text-cyan-100">
            <Terminal size={14} className="text-cyan-300" />
            <span>Initiate Connection</span>
          </div>
          <h2 className="mb-4 text-4xl font-bold tracking-tight text-white md:text-5xl">
            Let&apos;s Build <span className="text-cyan-300">Something Remarkable.</span>
          </h2>
          <p className="mx-auto max-w-xl text-slate-300">
            Available for product builds, architecture consulting, and performance-focused web experiences.
          </p>
        </motion.div>

        <div className="relative overflow-hidden rounded-2xl border border-cyan-200/20 bg-[#0a1426]/90 shadow-2xl">
          <div className="absolute left-1/2 top-0 h-px w-3/4 -translate-x-1/2 bg-gradient-to-r from-transparent via-cyan-300/50 to-transparent" />

          <div className="flex items-center justify-between border-b border-white/10 bg-[#0f1b33] px-4 py-3">
            <div className="flex items-center gap-2">
              <div className="h-3 w-3 rounded-full bg-[#FF5F56]" />
              <div className="h-3 w-3 rounded-full bg-[#FFBD2E]" />
              <div className="h-3 w-3 rounded-full bg-[#27C93F]" />
            </div>
            <div className="flex items-center gap-2 font-mono text-xs text-slate-300">
              <span className="text-cyan-300">$</span> ~/faijan/contact.ts
            </div>
            <div className="w-12" />
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2">
            <div className="border-b border-white/10 p-8 font-mono text-sm lg:border-b-0 lg:border-r lg:p-12">
              <div className="mb-8 space-y-2 text-slate-200">
                <p>
                  <span className="text-cyan-300">&gt;</span> const status = <span className="text-emerald-300">"Open to work"</span>;
                </p>
                <p>
                  <span className="text-cyan-300">&gt;</span> const responseTime = <span className="text-emerald-300">"&lt; 24 hours"</span>;
                </p>
              </div>

              <div className="mb-8 rounded-xl border border-cyan-300/20 bg-cyan-300/5 p-4 text-xs text-slate-300">
                <div className="mb-2 inline-flex items-center gap-2 text-cyan-200">
                  <Clock3 size={14} /> Typical response SLA
                </div>
                <p>I prioritize project-fit messages and usually reply within the same business day.</p>
              </div>

              <div className="space-y-6">
                <a href="mailto:hello@faijan.dev" className="group flex items-center gap-4 text-slate-300 transition-colors hover:text-white">
                  <div className="flex h-10 w-10 items-center justify-center rounded-lg border border-slate-700/50 bg-slate-800/50 transition-all group-hover:border-cyan-300/50 group-hover:bg-cyan-300/10">
                    <Mail size={18} className="text-slate-400 transition-colors group-hover:text-cyan-300" />
                  </div>
                  <div>
                    <div className="mb-1 text-xs text-slate-500">Email</div>
                    <div className="font-medium">hello@faijan.dev</div>
                  </div>
                </a>

                <a href="https://linkedin.com/in/yourusername" target="_blank" rel="noreferrer" className="group flex items-center gap-4 text-slate-300 transition-colors hover:text-white">
                  <div className="flex h-10 w-10 items-center justify-center rounded-lg border border-slate-700/50 bg-slate-800/50 transition-all group-hover:border-cyan-300/50 group-hover:bg-cyan-300/10">
                    <Linkedin size={18} className="text-slate-400 transition-colors group-hover:text-cyan-300" />
                  </div>
                  <div>
                    <div className="mb-1 text-xs text-slate-500">Network</div>
                    <div className="font-medium">LinkedIn Profile</div>
                  </div>
                </a>

                <a href="https://github.com/yourusername" target="_blank" rel="noreferrer" className="group flex items-center gap-4 text-slate-300 transition-colors hover:text-white">
                  <div className="flex h-10 w-10 items-center justify-center rounded-lg border border-slate-700/50 bg-slate-800/50 transition-all group-hover:border-cyan-300/50 group-hover:bg-cyan-300/10">
                    <Github size={18} className="text-slate-400 transition-colors group-hover:text-cyan-300" />
                  </div>
                  <div>
                    <div className="mb-1 text-xs text-slate-500">Code</div>
                    <div className="font-medium">GitHub Repository</div>
                  </div>
                </a>
              </div>
            </div>

            <div className="p-8 lg:p-12">
              <form onSubmit={handleSubmit} className="space-y-5">
                <div>
                  <label htmlFor="name" className="mb-2 block text-xs font-mono text-slate-400">
                    <span className="text-cyan-300">01.</span> Name
                  </label>
                  <input type="text" id="name" name="name" value={formData.name} onChange={handleChange} required className="w-full rounded-lg border border-slate-700/50 bg-[#0F1629] px-4 py-3 text-slate-200 placeholder-slate-500 transition-all focus:border-cyan-300 focus:outline-none focus:ring-1 focus:ring-cyan-300" placeholder="John Doe" />
                </div>

                <div>
                  <label htmlFor="email" className="mb-2 block text-xs font-mono text-slate-400">
                    <span className="text-cyan-300">02.</span> Email
                  </label>
                  <input type="email" id="email" name="email" value={formData.email} onChange={handleChange} required className="w-full rounded-lg border border-slate-700/50 bg-[#0F1629] px-4 py-3 text-slate-200 placeholder-slate-500 transition-all focus:border-cyan-300 focus:outline-none focus:ring-1 focus:ring-cyan-300" placeholder="john@example.com" />
                </div>

                <div>
                  <label htmlFor="message" className="mb-2 block text-xs font-mono text-slate-400">
                    <span className="text-cyan-300">03.</span> Message
                  </label>
                  <textarea id="message" name="message" value={formData.message} onChange={handleChange} required rows="4" className="w-full resize-none rounded-lg border border-slate-700/50 bg-[#0F1629] px-4 py-3 text-slate-200 placeholder-slate-500 transition-all focus:border-cyan-300 focus:outline-none focus:ring-1 focus:ring-cyan-300" placeholder="Tell me about your project..." />
                </div>

                <button type="submit" className="mt-6 flex w-full items-center justify-center gap-2 rounded-lg bg-cyan-300 px-6 py-3.5 font-semibold text-slate-950 transition-all hover:translate-y-[-1px] hover:bg-cyan-200">
                  <Send size={18} />
                  <span>Send Message</span>
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;