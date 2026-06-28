import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import FlipInline from "./FlipInline";

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: (i) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: i * 0.15,
      duration: 0.8,
      ease: [0.21, 0.47, 0.32, 0.98],
    },
  }),
};

const Typewriter = ({ words, delay = 150, pause = 2000 }) => {
  const [currentWordIndex, setCurrentWordIndex] = useState(0);
  const [currentText, setCurrentText] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    let timeout;
    const currentWord = words[currentWordIndex];

    if (isDeleting) {
      timeout = setTimeout(() => {
        setCurrentText(currentWord.substring(0, currentText.length - 1));
        if (currentText.length === 0) {
          setIsDeleting(false);
          setCurrentWordIndex((prev) => (prev + 1) % words.length);
        }
      }, delay / 2);
    } else {
      timeout = setTimeout(() => {
        setCurrentText(currentWord.substring(0, currentText.length + 1));
        if (currentText.length === currentWord.length) {
          timeout = setTimeout(() => setIsDeleting(true), pause);
        }
      }, delay);
    }

    return () => clearTimeout(timeout);
  }, [currentText, isDeleting, currentWordIndex, words, delay, pause]);

  return (
    <>
      {currentText}
      <motion.span
        animate={{ opacity: [1, 0] }}
        transition={{ repeat: Infinity, duration: 0.8 }}
        className="inline-block w-[8px] h-[1em] bg-orange-500 align-middle ml-[1px]"
      />
    </>
  );
};

export default function LandingHero() {
  return (
    <section className="relative min-h-screen flex flex-col justify-center pt-24 pb-12 overflow-hidden bg-white">
      <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-12 items-center relative z-10 w-full">
        {/* LEFT COMPONENT */}
        <div className="max-w-2xl lg:pl-10">
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center gap-2 mb-6"
          >
            <span className="w-2 h-2 rounded-full bg-[#E23744] animate-pulse" />
            <span className="text-xs font-semibold text-[#E23744] uppercase tracking-widest">
              Available for work
            </span>
          </motion.div>

          <motion.h1
            initial="hidden"
            animate="visible"
            className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-black text-[#111111] tracking-tight leading-[1.05]"
          >
            <motion.div variants={fadeUp} custom={0}>
              Not just a developer. <br />
              A builder.
            </motion.div>
          </motion.h1>

          <motion.div 
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.6 }}
            className="text-lg md:text-xl font-medium text-gray-500 mt-4 tracking-normal"
          >
            Shreyanshu Kumar / <span className="text-[#E23744] font-semibold"><Typewriter words={["Engineer", "Architect", "Designer"]} delay={100} pause={2000} /></span>
          </motion.div>

          <motion.p
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5, duration: 0.6 }}
            className="text-gray-500 text-lg md:text-xl mt-6 max-w-xl leading-relaxed font-normal"
          >
            I engineer high-performance web applications with a focus on polished UI, resilient architecture, and measurable impact.
          </motion.p>

          {/* CTA Buttons */}
          <motion.div 
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6, duration: 0.6 }}
            className="mt-8 flex flex-wrap gap-4 items-center"
          >
            <a
              href="#projects"
              className="px-8 py-3.5 rounded-full bg-[#E23744] hover:bg-[#c92f3a] text-white font-semibold transition-colors duration-300 shadow-sm"
            >
              View Projects
            </a>
            <a
              href="#contact"
              className="px-8 py-3.5 rounded-full border border-gray-300 hover:border-gray-900 text-[#111111] font-medium transition-colors duration-300"
            >
              Contact Me
            </a>
          </motion.div>
        </div>

        {/* RIGHT VISUAL ELEMENT */}
        <div className="hidden lg:flex justify-center -mt-6 relative">
          <motion.div
            initial={{ y: 0 }}
            animate={{ y: [-10, 10, -10] }}
            transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
          >
            <CodeCard />
          </motion.div>
        </div>
      </div>
    </section>
  );
}

function CodeCard() {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [isHovered, setIsHovered] = useState(false);

  const handleMouseMove = (e) => {
    const rect = e.currentTarget.getBoundingClientRect();
    setMousePosition({
      x: e.clientX - rect.left,
      y: e.clientY - rect.top,
    });
  };

  return (
    <motion.div 
      initial={{ opacity: 0, scale: 0.9 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.8, delay: 0.3 }}
      className="relative w-full max-w-[380px] rotate-[2deg] hover:rotate-0 transition-transform duration-500 rounded-3xl overflow-hidden"
    >
      {/* Container for Edge Glow */}
      <div 
        onMouseMove={handleMouseMove}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
        className="rounded-3xl p-[1px] overflow-hidden group cursor-default relative bg-gray-100"
      >
        {/* Dynamic Glowing Border Behind Inner Card */}
        <motion.div
          className="absolute -inset-px z-0 pointer-events-none transition-opacity duration-300"
          animate={{ opacity: isHovered ? 1 : 0 }}
          style={{
            background: `radial-gradient(250px circle at ${mousePosition.x}px ${mousePosition.y}px, rgba(226,55,68,0.2), transparent 100%)`
          }}
        />

        <div className="relative z-10 rounded-[23px] bg-white flex flex-col p-8 overflow-hidden shadow-lg border border-gray-200">
          <div className="w-full flex justify-between items-center mb-6 relative z-10">
            <div className="flex gap-2">
              <div className="w-3 h-3 rounded-full bg-red-400"></div>
              <div className="w-3 h-3 rounded-full bg-yellow-400"></div>
              <div className="w-3 h-3 rounded-full bg-green-400"></div>
            </div>
            <div className="text-xs text-gray-400 font-mono">portfolio.jsx</div>
          </div>
          
          <div className="space-y-4 font-mono text-sm relative z-10 text-gray-600">
            <div>
              import <span className="text-gray-900 font-semibold">
                <Typewriter words={["Experience", "Innovation", "Scalability", "Design"]} delay={100} />
              </span> from <span className="text-[#E23744]">"./impact"</span>;
            </div>
            <div>
              import <span className="text-gray-900 font-semibold">
                <Typewriter words={["Code", "Logic", "State", "Velocity"]} delay={120} pause={2500} />
              </span> from <span className="text-[#E23744]">"./aesthetics"</span>;
            </div>
            <br/>
            <div className="text-gray-400">// Building the future,</div>
            <div className="text-gray-400">// one line of code at a time</div>
            <br/>
            <div className="text-[#E23744] font-medium">const <span className="text-gray-900 font-semibold">Developer</span> = <span className="text-[#E23744] font-semibold">() =&gt;</span> {'{'}</div>
            <div className="pl-4 text-gray-700">return <span className="text-gray-900 font-semibold">&lt;Masterpiece /&gt;</span>;</div>
            <div className="text-[#E23744] font-medium">{'}'}</div>
          </div>
        </div>
      </div>
    </motion.div>
  );
}
