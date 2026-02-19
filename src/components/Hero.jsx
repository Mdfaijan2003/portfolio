import AnimatedRoles from "./AnimatedRoles";
import HeroVisual from "./HeroVisual";
import LineBorder from "./LineBorder";

export default function Hero() {
  return (
    <>
    <section className="flex items-center justify-between p-16 ">
      {/* Left Side */}
      <div className="max-w-xl text-white font-mono pl-20">
        <h1 className="text-5xl font-bold mb-4">Mohammed Faijan</h1>

        {/* Animated Role (we'll build this next) */}
        <AnimatedRoles />

        <p className="text-lg mt-4 text-[#94a3b8]">
          I build scalable web applications and backend systems driven by
          performance, clarity, and production mindset.
        </p>

        <div className="mt-6 flex gap-4">
          <button className="bg-[#00f5d4] text-black px-6 py-2 rounded-lg font-semibold">
            Start a conversation
          </button>
          <button className="border border-[#00f5d4] text-[#00f5d4] px-6 py-2 rounded-lg font-semibold">
            View Projects
          </button>
        </div>
      </div>

      {/* Right Side */}
      <div className="flex justify-center">
        <HeroVisual />
      </div>
    </section>

    <LineBorder />
    </>
  );
}

