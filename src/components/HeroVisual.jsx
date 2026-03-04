import { IconCloud } from "@/components/ui/icon-cloud";
import myImage from "@/assets/FAIJAN.png";
import nodedotjs from "@/assets/nodejs-icon-svgrepo-com.svg";
import mongodb from "@/assets/mongodb-svgrepo-com.svg";
import react from "@/assets/react-svgrepo-com.svg";
import amazonaws from "@/assets/aws-svgrepo-com.svg";
import docker from "@/assets/docker-svgrepo-com.svg";
import git from "@/assets/git-logo-svgrepo-com.svg";
import nextdotjs from "@/assets/next-svgrepo-com.svg";
import tailwindcss from "@/assets/tailwind-svgrepo-com.svg";
import codepen from "@/assets/codepen-svgrepo-com.svg";
import digitalOcean from "@/assets/digital-ocean-svgrepo-com.svg";
import figma from "@/assets/figma-svgrepo-com.svg";
import gcp from "@/assets/gcp-svgrepo-com.svg";
import github from "@/assets/github-svgrepo-com.svg";
import hcp from "@/assets/hcp-svgrepo-com.svg";
import linkedin from "@/assets/linkedin-svgrepo-com.svg";

const techIcons = [
  nodedotjs,
  mongodb,
  react,
  amazonaws,
  docker,
  git,
  nextdotjs,
  tailwindcss,
  codepen,
  digitalOcean,
  figma,
  gcp,
  github,
  hcp,
  linkedin,
];

export default function HeroVisual() {
  return (
    <div className="relative z-20 h-[560px] w-[440px] animate-[float_6s_ease-in-out_infinite]">
      <div className="absolute -right-16 top-10 h-52 w-52 rounded-full bg-cyan-300/20 blur-[80px]" />
      <div className="absolute -left-12 bottom-6 h-40 w-40 rounded-full bg-teal-300/15 blur-[80px]" />

      <div className="absolute inset-0 z-10 flex scale-110 items-center justify-center opacity-60 mix-blend-screen">
        <IconCloud images={techIcons} />
      </div>

      <div className="hero-image-frame relative z-20 h-full w-full overflow-hidden rounded-[2rem] border border-cyan-200/30 bg-slate-950/55 p-2.5 shadow-[0_20px_80px_rgba(2,8,23,0.75)] backdrop-blur-lg">
        <div className="relative h-full w-full overflow-hidden rounded-[1.6rem] border border-white/10 bg-[radial-gradient(circle_at_20%_10%,rgba(45,212,191,0.22),transparent_35%),#061120]">
          <img
            src={myImage}
            alt="Mohammed Faijan"
            className="relative z-10 h-full w-full object-cover object-top opacity-95 saturate-110"
          />
          <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(3,10,20,0)_35%,rgba(3,10,20,0.85)_100%)]" />
          <div className="absolute inset-x-8 bottom-3 h-8 rounded-full bg-black/35 blur-2xl" />
        </div>
      </div>

      <div className="pointer-events-none absolute inset-0 rounded-[2rem] border border-cyan-200/25" />
    </div>
  );
}