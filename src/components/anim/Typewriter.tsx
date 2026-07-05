import { useEffect, useState } from "react";

interface TypewriterProps {
  words: string[];
  className?: string;
  typeSpeed?: number;
  deleteSpeed?: number;
  holdTime?: number;
}

/** Types, holds, then deletes each word in a loop with a blinking caret. */
const Typewriter = ({ words, className, typeSpeed = 65, deleteSpeed = 35, holdTime = 2200 }: TypewriterProps) => {
  const [wordIndex, setWordIndex] = useState(0);
  const [text, setText] = useState("");
  const [deleting, setDeleting] = useState(false);

  useEffect(() => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      setText(words[0]);
      return;
    }

    const word = words[wordIndex % words.length];
    let timeout: ReturnType<typeof setTimeout>;

    if (!deleting) {
      if (text.length < word.length) {
        timeout = setTimeout(() => setText(word.slice(0, text.length + 1)), typeSpeed);
      } else {
        timeout = setTimeout(() => setDeleting(true), holdTime);
      }
    } else {
      if (text.length > 0) {
        timeout = setTimeout(() => setText(text.slice(0, -1)), deleteSpeed);
      } else {
        setDeleting(false);
        setWordIndex((i) => (i + 1) % words.length);
      }
    }

    return () => clearTimeout(timeout);
  }, [text, deleting, wordIndex, words, typeSpeed, deleteSpeed, holdTime]);

  return (
    <span className={className}>
      {text}
      <span className="animate-caret text-gold" aria-hidden="true">
        |
      </span>
    </span>
  );
};

export default Typewriter;
