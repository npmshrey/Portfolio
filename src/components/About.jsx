import { motion } from "framer-motion";

export default function About() {
  return (
    <div id="about" className="w-full">
      <div className="mb-4">
        <motion.h2 
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-[11px] font-semibold text-[#E23744] tracking-[0.15em] uppercase"
        >
          About
        </motion.h2>
      </div>
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
      >
        <blockquote className="text-[22px] italic font-light text-[#444] leading-[1.8] border-l-[3px] border-[#E23744] pl-6 mt-4">
          “I believe that great engineering is about more than just writing code—it's about architecting scalable solutions that deliver measurable value. From conceptualizing the architecture to refining the final micro-interactions, I bring a performance-driven approach to every project.”
        </blockquote>
      </motion.div>
    </div>
  );
}
