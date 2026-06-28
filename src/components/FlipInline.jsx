import { motion, AnimatePresence } from "framer-motion";
import { useEffect, useState } from "react";

const words = ["Ideas", "Concepts", "Designs", "Code"];

export default function FlipInline() {
  const [index, setIndex] = useState(0);
  const [direction, setDirection] = useState(1);

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prev) => {
        if (direction === 1 && prev === words.length - 1) {
          setDirection(-1);
          return prev - 1;
        }
        if (direction === -1 && prev === 0) {
          setDirection(1);
          return prev + 1;
        }
        return prev + direction;
      });
    }, 2200);

    return () => clearInterval(interval);
  }, [direction]);

  return (
    <span
      className="
        relative inline-flex
        items-center
        min-w-[260px]
        h-[1.4em]
        overflow-hidden
        ml-3
        align-middle
      "
    >
      <AnimatePresence mode="wait">
        <motion.span
          key={words[index]}
          initial={{ y: "120%", opacity: 0 }}
          animate={{ y: "0%", opacity: 1 }}
          exit={{ y: "-120%", opacity: 0 }}
          transition={{ duration: 0.45, ease: "easeOut" }}
          className="
            absolute inset-0
            flex items-center
            text-[#E23744]
            font-semibold
            whitespace-nowrap
          "
        >
          {words[index]}
        </motion.span>
      </AnimatePresence>
    </span>
  );
}
