import { useState } from "react";
import CommandPalette from "./CommandPalette";
import { Button } from "./ui/button";
import { PulsatingButton } from "./ui/pulsating-button";

const sections = ["about", "skills", "projects", "experience", "contact"];

export default function Header() {
  const [active, setActive] = useState("about");
  const [open, setOpen] = useState(false);

  return (
    <>
      {/* ================= DESKTOP HEADER ================= */}
      <div className="hidden md:block fixed top-0 left-0 w-full z-50 font-mono ">
        {/* Top Terminal Bar */}
        <div className="flex justify-between items-center pr-10">
          <div className="flex items-center gap-6 px-8 py-4 bg-[#081826]/80 backdrop-blur-md">
            <div className="flex gap-2">
              <span className="w-3 h-3 rounded-full bg-red-500"></span>
              <span className="w-3 h-3 rounded-full bg-yellow-400"></span>
              <span className="w-3 h-3 rounded-full bg-green-500"></span>
            </div>

            <div className="text-sm text-[#94a3b8]">
              session: <span className="text-[#00f5d4]">faijan@dev</span>
            </div>
          </div>

          <Button className="px-4 py-2 text-sm rounded-full border border-[#00f5d4] text-[#00f5d4] hover:bg-[#00f5d4] hover:text-black transition-all duration-300">
            Hire Me →
          </Button>
        </div>

        <div className="h-[2px] w-full bg-gradient-to-r from-transparent via-[#00f5d4]/40 to-transparent" />

        <div className="px-10 py-4 bg-[#06121f]/80 backdrop-blur-md">
          <div className="text-[#94a3b8] mb-4 text-sm">
            <span className="text-[#00f5d4]">$</span> open{" "}
            <span className="text-white">{active}</span>
            <span className="ml-1 animate-pulse text-[#00f5d4]">▌</span>
          </div>

          <div className="flex gap-8 text-sm">
            {sections.map((section) => (
              <button
                key={section}
                onClick={() => setActive(section)}
                className={`transition-all duration-300 ${
                  active === section
                    ? "text-[#00f5d4]"
                    : "text-[#64748b] hover:text-white"
                }`}
              >
                {active === section ? `[ ${section} ]` : section}
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* ================= MOBILE HEADER ================= */}
      <div className="md:hidden fixed top-0 left-0 w-full z-50 backdrop-blur-md bg-[#081826]/70 border-b border-white/10 font-mono">
        <div className="flex items-center justify-between px-6 h-[60px]">
          <h1 className="text-[#00f5d4] text-lg font-semibold tracking-wide">
            faijan<span className="text-[#00f5d4]">@dev</span>
          </h1>

          <div className="flex items-center gap-4">
            {/* Open Command Palette */}
            <button
              onClick={() => setOpen(true)}
              className="text-[#00f5d4] text-xl"
            >
              ⌘
            </button>

            {/* Hire Me */}
            <Button pulseColor="#00f5d4" className="px-4 py-2 text-sm rounded-full border border-[#00f5d4] text-[#00f5d4] hover:bg-[#00f5d4] hover:text-black transition-all duration-300" duration="1200">
              Hire Me →
            </Button>
          </div>
        </div>
      </div>

      {/* ================= MOBILE NAV OVERLAY ================= */}
      <CommandPalette open={open} setOpen={setOpen} />
    </>
  );
}
