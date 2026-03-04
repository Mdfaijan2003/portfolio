import { ArrowRight, Sparkles } from "lucide-react";
import AnimatedRoles from "./AnimatedRoles";
import HeroVisual from "./HeroVisual";
import LineBorder from "./LineBorder";

const highlights = ["50+ deployments", "200+ DSA problems", "Open for freelance"];

export default function Hero() {
  return (
    <>
      <section className="relative flex flex-col items-center justify-between gap-12 px-6 pb-16 pt-4 md:flex-row md:px-16">
        <div className="max-w-xl font-mono text-white md:pl-12">
          <p className="inline-flex items-center gap-2 rounded-full border border-cyan-300/30 bg-cyan-300/10 px-4 py-1 text-xs uppercase tracking-[0.2em] text-cyan-100">
            <Sparkles className="h-3.5 w-3.5" />
            Building Digital Systems That Matter
          </p>

          <h1 className="mt-5 text-4xl font-bold leading-tight md:text-6xl">Mohammed Faijan</h1>
          <AnimatedRoles />

          <p className="mt-5 text-base leading-relaxed text-slate-300 md:text-lg">
            I build scalable web applications and backend systems driven by performance,
            clarity, and a production-first mindset.
          </p>

          <div className="mt-8 flex flex-wrap gap-4">
            <button className="group inline-flex items-center gap-2 rounded-lg bg-cyan-300 px-6 py-2.5 font-semibold text-slate-950 transition-all duration-300 hover:translate-y-[-2px] hover:shadow-[0_0_28px_rgba(45,212,191,0.5)]">
              Start a conversation
              <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
            </button>
            <button className="rounded-lg border border-cyan-300/60 px-6 py-2.5 font-semibold text-cyan-100 transition-all duration-300 hover:bg-cyan-300/10">
              View Projects
            </button>
          </div>

          <div className="mt-8 flex flex-wrap gap-3">
            {highlights.map((item) => (
              <span
                key={item}
                className="rounded-full border border-white/15 bg-slate-900/65 px-3 py-1 text-xs tracking-wide text-slate-200"
              >
                {item}
              </span>
            ))}
          </div>
        </div>

        <div className="flex justify-center">
          <HeroVisual />
        </div>
      </section>

      <LineBorder />
    </>
  );
}