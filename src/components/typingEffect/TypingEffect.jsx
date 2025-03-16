import { useState, useEffect } from "react";

const TypingEffect = ({ text, speed = 100, delay = 0, className = "" }) => {
  const [displayText, setDisplayText] = useState("");
  const [index, setIndex] = useState(0);
  const [startTyping, setStartTyping] = useState(false);
  const [isTypingDone, setIsTypingDone] = useState(false);

  useEffect(() => {
    const delayTimeout = setTimeout(() => {
      setStartTyping(true);
    }, delay);
    return () => clearTimeout(delayTimeout);
  }, [delay]);

  useEffect(() => {
    if (startTyping && index < text.length) {
      const timeout = setTimeout(() => {
        setDisplayText((prev) => prev + text[index]);
        setIndex(index + 1);
      }, speed);
      return () => clearTimeout(timeout);
    } else if (index === text.length) {
      setIsTypingDone(true);
    }
  }, [index, text, speed, startTyping]);

  return (
    <span className={`${className} ${isTypingDone ? "cursor-hidden" : ""}`}>
      {displayText}
    </span>
  );
};

export default TypingEffect;
