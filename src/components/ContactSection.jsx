import React, { useState } from 'react';
import { Mail, Github, Linkedin, Send, Terminal } from 'lucide-react';

const ContactSection = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Add your form submission logic here
    console.log('Form submitted:', formData);
  };

  return (
    <section className="min-h-screen bg-[#070B14] py-20 px-4 sm:px-6 lg:px-8 font-sans flex items-center justify-center" id="contact">
      <div className="max-w-5xl w-full mx-auto">
        
        {/* Section Header */}
        <div className="text-center mb-16 flex flex-col items-center">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-slate-700/50 bg-slate-800/30 text-xs font-medium tracking-widest text-slate-300 uppercase mb-4">
            <Terminal size={14} className="text-[#00F0FF]" />
            <span>Initiate Connection</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4 tracking-tight">
            Let's Build <span className="text-transparent bg-clip-text bg-gradient-to-r from-white to-slate-500">Something.</span>
          </h2>
          <p className="text-slate-400 max-w-xl mx-auto">
            Currently open for new opportunities. Whether you have a question or just want to say hi, I'll try my best to get back to you!
          </p>
        </div>

        {/* IDE/Terminal Window Card */}
        <div className="rounded-xl border border-slate-800/80 bg-[#0B1120] overflow-hidden shadow-2xl relative">
          
          {/* Subtle Glow Effect */}
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-3/4 h-px bg-gradient-to-r from-transparent via-[#00F0FF]/30 to-transparent"></div>

          {/* Window Header */}
          <div className="flex items-center justify-between px-4 py-3 border-b border-slate-800/80 bg-[#0F1629]">
            <div className="flex items-center gap-2">
              <div className="w-3 h-3 rounded-full bg-[#FF5F56]"></div>
              <div className="w-3 h-3 rounded-full bg-[#FFBD2E]"></div>
              <div className="w-3 h-3 rounded-full bg-[#27C93F]"></div>
            </div>
            <div className="text-xs font-mono text-slate-400 flex items-center gap-2">
              <span className="text-[#00F0FF]">$</span> ~/faijan/contact.sh
            </div>
            <div className="w-12"></div> {/* Spacer for centering */}
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2">
            
            {/* Left Column: Contact Info (Code Style) */}
            <div className="p-8 lg:p-12 border-b lg:border-b-0 lg:border-r border-slate-800/80 font-mono text-sm">
              <div className="mb-8">
                <span className="text-[#00F0FF]">&gt;</span> const status = <span className="text-[#27C93F]">"Open to work"</span>;
                <br />
                <span className="text-[#00F0FF]">&gt;</span> const responseTime = <span className="text-[#27C93F]">"&lt; 24 hours"</span>;
              </div>

              <div className="space-y-6">
                <a href="mailto:your.email@example.com" className="group flex items-center gap-4 text-slate-300 hover:text-white transition-colors">
                  <div className="w-10 h-10 rounded-lg bg-slate-800/50 flex items-center justify-center border border-slate-700/50 group-hover:border-[#00F0FF]/50 group-hover:bg-[#00F0FF]/10 transition-all">
                    <Mail size={18} className="text-slate-400 group-hover:text-[#00F0FF] transition-colors" />
                  </div>
                  <div>
                    <div className="text-xs text-slate-500 mb-1">Email</div>
                    <div className="font-medium">hello@faijan.dev</div>
                  </div>
                </a>

                <a href="https://linkedin.com/in/yourusername" target="_blank" rel="noreferrer" className="group flex items-center gap-4 text-slate-300 hover:text-white transition-colors">
                  <div className="w-10 h-10 rounded-lg bg-slate-800/50 flex items-center justify-center border border-slate-700/50 group-hover:border-[#00F0FF]/50 group-hover:bg-[#00F0FF]/10 transition-all">
                    <Linkedin size={18} className="text-slate-400 group-hover:text-[#00F0FF] transition-colors" />
                  </div>
                  <div>
                    <div className="text-xs text-slate-500 mb-1">Network</div>
                    <div className="font-medium">LinkedIn Profile</div>
                  </div>
                </a>

                <a href="https://github.com/yourusername" target="_blank" rel="noreferrer" className="group flex items-center gap-4 text-slate-300 hover:text-white transition-colors">
                  <div className="w-10 h-10 rounded-lg bg-slate-800/50 flex items-center justify-center border border-slate-700/50 group-hover:border-[#00F0FF]/50 group-hover:bg-[#00F0FF]/10 transition-all">
                    <Github size={18} className="text-slate-400 group-hover:text-[#00F0FF] transition-colors" />
                  </div>
                  <div>
                    <div className="text-xs text-slate-500 mb-1">Code</div>
                    <div className="font-medium">GitHub Repository</div>
                  </div>
                </a>
              </div>
            </div>

            {/* Right Column: The Form */}
            <div className="p-8 lg:p-12">
              <form onSubmit={handleSubmit} className="space-y-5">
                <div>
                  <label htmlFor="name" className="block text-xs font-mono text-slate-400 mb-2">
                    <span className="text-[#00F0FF]">01.</span> Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="w-full bg-[#0F1629] border border-slate-700/50 rounded-lg px-4 py-3 text-slate-200 placeholder-slate-500 focus:outline-none focus:border-[#00F0FF] focus:ring-1 focus:ring-[#00F0FF] transition-all"
                    placeholder="John Doe"
                  />
                </div>

                <div>
                  <label htmlFor="email" className="block text-xs font-mono text-slate-400 mb-2">
                    <span className="text-[#00F0FF]">02.</span> Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full bg-[#0F1629] border border-slate-700/50 rounded-lg px-4 py-3 text-slate-200 placeholder-slate-500 focus:outline-none focus:border-[#00F0FF] focus:ring-1 focus:ring-[#00F0FF] transition-all"
                    placeholder="john@example.com"
                  />
                </div>

                <div>
                  <label htmlFor="message" className="block text-xs font-mono text-slate-400 mb-2">
                    <span className="text-[#00F0FF]">03.</span> Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows="4"
                    className="w-full bg-[#0F1629] border border-slate-700/50 rounded-lg px-4 py-3 text-slate-200 placeholder-slate-500 focus:outline-none focus:border-[#00F0FF] focus:ring-1 focus:ring-[#00F0FF] transition-all resize-none"
                    placeholder="Tell me about your project..."
                  ></textarea>
                </div>

                <button
                  type="submit"
                  className="w-full flex items-center justify-center gap-2 bg-[#00F0FF] hover:bg-[#00D1E0] text-black font-semibold px-6 py-3.5 rounded-lg transition-colors mt-6"
                >
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