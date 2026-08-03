import { motion } from "framer-motion";

export default function About() {
  return (
    <section id="about" className="py-20 border-t border-[#E5E5E5] bg-white relative w-full overflow-hidden">
      <div className="max-w-4xl mx-auto px-8">
        <div className="mb-10 text-left">
          <motion.h2 
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-[11px] font-semibold text-[#E23744] tracking-[0.15em] uppercase mb-2"
          >
            Philosophy
          </motion.h2>
          <motion.h3 
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, delay: 0.1 }}
            className="text-[56px] font-bold text-[#1C1C1C] leading-[1.05]"
          >
            About <span className="font-light text-[#999]">Me.</span>
          </motion.h3>
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
    </section>
  );
}
//there is something which create later 