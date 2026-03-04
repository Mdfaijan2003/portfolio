import React from 'react';
import { MapPin } from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-[#070B14] border-t border-slate-800/80 py-8 px-4 sm:px-6 lg:px-8 font-sans">
      <div className="max-w-5xl mx-auto flex flex-col md:flex-row items-center justify-between gap-6 text-sm text-slate-500">
        
        {/* Left: Copyright & Branding */}
        <div className="flex flex-col md:flex-row items-center gap-2 text-center md:text-left">
          <span className="text-slate-400 font-medium">© {currentYear} Mohammed Faijan.</span>
          <span className="hidden md:inline text-slate-700">|</span>
          <span>Crafted with precision.</span>
        </div>

        {/* Middle: Terminal Exit (Aesthetic) */}
        <div className="font-mono text-xs flex items-center gap-2 px-3 py-1.5 rounded-md bg-[#0B1120] border border-slate-800/80 shadow-inner group cursor-default transition-colors hover:border-slate-700">
          <span className="text-[#FF5F56]">faijan@dev</span>
          <span className="text-slate-400">:</span>
          <span className="text-[#00F0FF]">~</span>
          <span className="text-slate-400">$</span> 
          <span className="text-slate-300 group-hover:text-white transition-colors">exit</span>
        </div>

        {/* Right: Location & Status Indicator */}
        <div className="flex items-center gap-3">
          <div className="flex items-center gap-1.5 hover:text-slate-300 transition-colors">
            <MapPin size={14} className="text-slate-400" />
            <span>Kolkata, India</span>
          </div>
          
          <div className="flex items-center gap-2 bg-[#0B1120] px-2.5 py-1 rounded-full border border-slate-800/80">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#27C93F] opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-[#27C93F]"></span>
            </span>
            <span className="text-xs font-mono text-slate-400">All systems normal</span>
          </div>
        </div>

      </div>
    </footer>
  );
};

export default Footer;