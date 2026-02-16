import { useState, useEffect, useRef } from 'react';

export default function BootIntro({ onComplete, userName = 'candidate_access', bootLines = [
  '✓ verifying recruiter identity...',
  '✓ validating credentials...',
  '✓ loading candidate profile...',
  '✓ compiling project index...',
  '✓ initializing dashboard...',
  '✓ access granted.',
]}) {
  const [displayedLines, setDisplayedLines] = useState([]);
  const [currentLineIndex, setCurrentLineIndex] = useState(0);
  const [currentText, setCurrentText] = useState('');
  const [showCaret, setShowCaret] = useState(false);
  const audioContextRef = useRef(null);
  const prefersReducedMotion = typeof window !== 'undefined' && 
    window.matchMedia('(prefers-reduced-motion: reduce)').matches;

  // Initialize Web Audio API for typing sounds
  useEffect(() => {
    if (!prefersReducedMotion && typeof window !== 'undefined') {
      audioContextRef.current = new (window.AudioContext || window.webkitAudioContext)();
    }
    return () => {
      if (audioContextRef.current) {
        audioContextRef.current.close();
      }
    };
  }, [prefersReducedMotion]);

  // Play typing sound using Web Audio API
  const playTypingSound = () => {
    if (!audioContextRef.current || prefersReducedMotion) return;
    
    const context = audioContextRef.current;
    const oscillator = context.createOscillator();
    const gainNode = context.createGain();
    
    oscillator.connect(gainNode);
    gainNode.connect(context.destination);
    
    // Create mechanical keyboard sound
    oscillator.type = 'square';
    oscillator.frequency.value = 800 + Math.random() * 400;
    
    gainNode.gain.setValueAtTime(0.05, context.currentTime);
    gainNode.gain.exponentialRampToValueAtTime(0.01, context.currentTime + 0.05);
    
    oscillator.start(context.currentTime);
    oscillator.stop(context.currentTime + 0.05);
  };

  // Play completion beep
  const playCompletionBeep = () => {
    if (!audioContextRef.current || prefersReducedMotion) return;
    
    const context = audioContextRef.current;
    const oscillator = context.createOscillator();
    const gainNode = context.createGain();
    
    oscillator.connect(gainNode);
    gainNode.connect(context.destination);
    
    oscillator.type = 'sine';
    oscillator.frequency.value = 880;
    
    gainNode.gain.setValueAtTime(0.1, context.currentTime);
    gainNode.gain.exponentialRampToValueAtTime(0.01, context.currentTime + 0.2);
    
    oscillator.start(context.currentTime);
    oscillator.stop(context.currentTime + 0.2);
  };

  // Typing effect
  useEffect(() => {
    if (currentLineIndex >= bootLines.length) {
      setShowCaret(true);
      playCompletionBeep();
      const timer = setTimeout(() => {
        onComplete?.();
      }, prefersReducedMotion ? 250 : 800);
      return () => clearTimeout(timer);
    }

    const targetLine = bootLines[currentLineIndex];
    
    if (prefersReducedMotion) {
      setDisplayedLines((prev) => [...prev, targetLine]);
      setCurrentLineIndex((prev) => prev + 1);
      return;
    }

    // Random delay before starting (simulate processing)
    const delayTimer = setTimeout(() => {
      let charIndex = 0;
      const typingSpeed = 35 + Math.random() * 25; // More realistic typing speed

      const typeInterval = setInterval(() => {
        if (charIndex <= targetLine.length) {
          setCurrentText(targetLine.slice(0, charIndex));
          playTypingSound();
          charIndex++;
        } else {
          clearInterval(typeInterval);
          setDisplayedLines((prev) => [...prev, targetLine]);
          setCurrentText('');
          setCurrentLineIndex((prev) => prev + 1);
        }
      }, typingSpeed);

      return () => clearInterval(typeInterval);
    }, 180 + Math.random() * 120);

    return () => clearTimeout(delayTimer);
  }, [currentLineIndex, bootLines, onComplete, prefersReducedMotion]);

  return (
    <div className="min-h-screen flex items-center justify-center p-6 bg-gradient-to-b from-[#05070b] via-[#07090d] to-[#05070b] relative overflow-hidden">
      {/* Background radial gradients */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-[10%] left-[20%] w-[1200px] h-[700px] bg-[#33d6c9]/12 rounded-full blur-[120px]" />
        <div className="absolute top-[20%] right-[15%] w-[900px] h-[600px] bg-[#2ab3ff]/14 rounded-full blur-[120px]" />
        <div className="absolute bottom-[10%] left-[60%] w-[900px] h-[700px] bg-[#34d399]/9 rounded-full blur-[120px]" />
      </div>

      {/* Terminal Window */}
      <div className="w-full max-w-[1100px] border border-white/[0.09] bg-[rgba(14,18,28,0.78)] backdrop-blur-md rounded-[14px] overflow-hidden shadow-[0_20px_60px_rgba(0,0,0,0.55)] relative z-10">
        {/* Window Bar */}
        <div className="flex items-center gap-2.5 px-3.5 py-3 border-b border-white/[0.09] bg-gradient-to-b from-white/[0.04] to-transparent">
          <span className="w-2.5 h-2.5 rounded-full bg-[#ff5f57] opacity-90" />
          <span className="w-2.5 h-2.5 rounded-full bg-[#febc2e] opacity-90" />
          <span className="w-2.5 h-2.5 rounded-full bg-[#28c840] opacity-90" />
          <div className="ml-1.5 text-xs text-white/60 font-mono flex-1 whitespace-nowrap overflow-hidden text-ellipsis">
            {userName}@terminal
          </div>
        </div>

        {/* Boot Body */}
        <div className="relative p-4.5 min-h-[420px] bg-[rgba(10,13,20,0.85)]">
          {/* Skeleton Animation */}
          <div className="absolute inset-4.5 rounded-xl overflow-hidden opacity-65 pointer-events-none">
            <div className="h-[22%] mb-3.5 rounded-[10px] bg-gradient-to-r from-white/[0.04] via-white/[0.08] to-white/[0.04] bg-[length:240%_100%] animate-shimmer" />
            <div className="h-[18%] mb-3.5 rounded-[10px] bg-gradient-to-r from-white/[0.04] via-white/[0.08] to-white/[0.04] bg-[length:240%_100%] animate-shimmer" />
            <div className="h-[26%] mb-3.5 rounded-[10px] bg-gradient-to-r from-white/[0.04] via-white/[0.08] to-white/[0.04] bg-[length:240%_100%] animate-shimmer" />
            <div className="h-[16%] rounded-[10px] bg-gradient-to-r from-white/[0.04] via-white/[0.08] to-white/[0.04] bg-[length:240%_100%] animate-shimmer" />
          </div>

          {/* Boot Log */}
          <div className="relative z-10 p-2.5 px-3 border border-dashed border-white/[0.10] rounded-xl bg-black/[0.22] max-w-[760px]">
            {displayedLines.map((line, idx) => (
              <div
                key={idx}
                className="font-mono text-sm leading-[1.7] whitespace-pre-wrap text-white/90"
              >
                {line}
              </div>
            ))}
            {currentText && (
              <div className="font-mono text-sm leading-[1.7] whitespace-pre-wrap text-white/90">
                {currentText}
              </div>
            )}
            {showCaret && (
              <div className="inline-block w-2.5 h-4 mt-1.5 bg-[#33d6c9] rounded-[1px] opacity-95 align-baseline animate-blink" />
            )}
          </div>
        </div>
      </div>

      <style jsx>{`
        @keyframes shimmer {
          0% { background-position: 0% 0; }
          100% { background-position: 240% 0; }
        }
        @keyframes blink {
          50% { opacity: 0.25; }
        }
        .animate-shimmer {
          animation: shimmer 1.35s linear infinite;
        }
        .animate-blink {
          animation: blink 0.9s steps(1) infinite;
        }
        @media (prefers-reduced-motion: reduce) {
          .animate-shimmer, .animate-blink {
            animation: none !important;
          }
        }
      `}</style>
    </div>
  );
}