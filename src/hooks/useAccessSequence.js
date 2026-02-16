import { useEffect, useRef, useState } from "react"

export default function useAccessSequence(start, onComplete) {
  const [lines, setLines] = useState([])
  const hasStarted = useRef(false)

  const logs = [
    "✔ verifying recruiter identity...",
    "✔ validating credentials...",
    "✔ loading candidate profile...",
    "✔ compiling project index...",
    "✔ initializing dashboard...",
    "✔ access granted."
  ]

  useEffect(() => {
    if (!start || hasStarted.current) return

    hasStarted.current = true

    let i = 0

    const interval = setInterval(() => {
      setLines(prev => [...prev, logs[i]])
      i++

      if (i === logs.length) {
        clearInterval(interval)
        setTimeout(onComplete, 1000)
      }
    }, 500)

    return () => clearInterval(interval)
  }, [start, onComplete])

  return lines
}
