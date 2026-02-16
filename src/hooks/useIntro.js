import { useEffect, useState } from "react";

export default function useIntro() {
  const [showIntro, setShowIntro] = useState(() => {
    const hasSeenIntro = localStorage.getItem("seenIntro");
    return !hasSeenIntro;
  });

  useEffect(() => {
    // Effect can be removed since initialization handles the logic
  }, []);

  const finishIntro = () => {
    localStorage.setItem("seenIntro", "true");
    setShowIntro(false);
  };

  return { showIntro, finishIntro };
}
