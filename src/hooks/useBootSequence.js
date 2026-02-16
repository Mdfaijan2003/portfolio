import { useEffect, useState } from "react"

export default function useBootSequence(onComplete) {
  const [lines, setLines] = useState([])

  const bootLines = [
    "[    0.000000] Booting Faijan OS v2.0...",
    "[    0.102341] Initializing kernel...",
    "[    0.235421] Loading portfolio modules...",
    "[    0.482341] Connecting to projects database...",
    "[    0.892341] Starting backend services...",
    "[    1.234567] Authenticating user...",
    "[    1.582341] Access granted."
  ]

  useEffect(() => {
    let i = 0

    const interval = setInterval(() => {
      setLines(prev => [...prev, bootLines[i]])
      i++

      if (i === bootLines.length) {
        clearInterval(interval)
        setTimeout(onComplete, 1200)
      }
    }, 600)

    return () => clearInterval(interval)
  }, [onComplete])

  return lines
}
