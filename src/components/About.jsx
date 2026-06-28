import { motion } from "framer-motion";

export default function About() {
  return (
    <section id="about" className="py-32 bg-white relative border-t border-gray-100">
      <div className="max-w-4xl mx-auto px-6 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <blockquote className="text-2xl md:text-3xl lg:text-4xl italic font-serif text-[#111111] leading-relaxed font-light">
            “I believe that great engineering is about more than just writing code—it's about architecting scalable solutions that deliver measurable value. From conceptualizing the architecture to refining the final micro-interactions, I bring a performance-driven approach to every project.”
          </blockquote>
        </motion.div>
      </div>
    </section>
  );
}
