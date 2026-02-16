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
  docker,
  figma,
  gcp,
  github,
  hcp,
  linkedin,
];

export default function HeroVisual() {
  return (
    <div className="relative z-20 w-[460px] h-[550px] object-cover animate-[float_6s_ease-in-out_infinite]">
      <div className="absolute inset-0 z-10 flex items-center justify-center opacity-60 scale-110 mix-blend-screen">
        <IconCloud images={techIcons} />
      </div>

      <div className="absolute right-0 top-1/2 -translate-y-1/2 w-175 h-175 bg-[#00f5d4]/10 blur-[160px] rounded-full" />

      <img
        src={myImage}
        alt="Mohammed Faijan"
        className="relative z-5 w-[460px] h-[550px] object-cover opacity-80"
      />
      <div className="absolute inset-0 bg-gradient-radial from-transparent via-[#041f2a]/40 to-[#020617] pointer-events-none" />
      <div className="absolute bottom-4 right-20 w-64 h-10 bg-black/40 blur-2xl rounded-full" />
    </div>
  );
}
