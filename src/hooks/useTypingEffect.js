import { useEffect, useState } from "react";

export default function useTypingEffect(text, speed = 80, onDone) {
  const [displayed, setDisplayed] = useState("");

  useEffect(() => {
    let i = 0;
    setDisplayed(""); // reset only once

    const interval = setInterval(() => {
      setDisplayed(text.slice(0, i + 1));
      i++;

      if (i === text.length) {
        clearInterval(interval);
        setTimeout(onDone, 500);
      }
    }, speed);

    return () => clearInterval(interval);
  }, [text, speed, onDone]);

  return displayed;
}
