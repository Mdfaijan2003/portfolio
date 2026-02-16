"use client"

import { useState, useEffect } from "react"
import {
  TypingAnimation,
} from "@/components/ui/typing-animation"

const roles = [
  "Software Engineer",
  "Full Stack Developer",
  "Backend Specialist",
  "Cloud Engineer",
  "Problem Solver",
]

export default function AnimatedRoles() {
  const [index, setIndex] = useState(0)

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prev) => (prev + 1) % roles.length)
    }, 3000) // change every 3s

    return () => clearInterval(interval)
  }, [])

  return (
    <div className="text-2xl md:text-3xl font-mono text-[#00f5d4] mt-2">
      <TypingAnimation
        key={roles[index]}
        duration={60}
        className="inline"
      >
        {roles[index]}
      </TypingAnimation>

      {/* Blinking Cursor */}
      <span className="ml-1 animate-pulse text-white">▌</span>
    </div>
  )
}
