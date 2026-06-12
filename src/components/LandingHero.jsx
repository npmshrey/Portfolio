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
    <section className="relative min-h-screen flex flex-col justify-center pt-12 pb-12 overflow-hidden bg-[#050505]">
      {/* Subtle glowing radial background - Orange */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[600px] bg-orange-600/[0.08] blur-[150px] rounded-full pointer-events-none" />
      
      <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-12 items-center relative z-10 w-full">
        {/* LEFT COMPONENT */}
        <div className="max-w-2xl lg:pl-10">
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full glass border border-orange-500/20 mb-8"
          >
            <span className="w-2 h-2 rounded-full bg-orange-500 animate-pulse" />
            <span className="text-xs font-medium text-orange-200 uppercase tracking-wider">
              Available for work
            </span>
          </motion.div>

          <motion.h1
            initial="hidden"
            animate="visible"
            className="text-4xl sm:text-5xl md:text-[4rem] lg:text-[4.5rem] font-extrabold tracking-tight leading-[1.1]"
          >
            <motion.div variants={fadeUp} custom={0} className="text-gray-400 font-medium text-xl md:text-2xl mb-4 tracking-normal">
              Hi, I'm Shreyanshu Kumar
            </motion.div>
            
            <motion.div variants={fadeUp} custom={1} className="text-gradient-orange pb-2 drop-shadow-[0_0_15px_rgba(249,115,22,0.3)]">
              Frontend <span className="whitespace-nowrap"><Typewriter words={["Engineer", "Architect", "Designer"]} delay={100} pause={2000} /></span>
            </motion.div>
            
            <motion.div variants={fadeUp} custom={2} className="text-white mt-1 leading-tight">
              <span className="opacity-80 mr-2">&</span>
              <span className="text-gradient mr-2 lg:mr-3">Full Stack</span>
              <span className="whitespace-nowrap"><Typewriter words={["Developer."]} delay={120} pause={2500} /></span>
            </motion.div>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5, duration: 0.6 }}
            className="text-gray-400 text-lg md:text-xl mt-8 max-w-xl leading-relaxed font-light"
          >
            I engineer high-performance web applications with a focus on polished UI, resilient architecture, and measurable impact.
          </motion.p>

          {/* CTA Buttons */}
          <motion.div 
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6, duration: 0.6 }}
            className="mt-10 flex flex-wrap gap-4 items-center"
          >
            <a
              href="#projects"
              className="group inline-flex items-center justify-center gap-2 px-6 sm:px-8 py-3.5 sm:py-4 rounded-full bg-orange-500 text-white font-semibold hover:bg-orange-400 hover:shadow-[0_0_20px_rgba(249,115,22,0.4)] hover:-translate-y-1 transition-all duration-300"
            >
              View Projects
              <svg className="group-hover:translate-x-1 transition-transform" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M5 12h14M12 5l7 7-7 7"/></svg>
            </a>
            <a
              href="#contact"
              className="inline-flex items-center justify-center px-6 sm:px-8 py-3.5 sm:py-4 rounded-full glass text-white font-medium hover:bg-orange-500/10 hover:border-orange-500/40 hover:-translate-y-1 transition-all duration-300"
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
        className="rounded-3xl p-[1px] overflow-hidden group cursor-default"
      >
        {/* Dynamic Glowing Border Behind Inner Card */}
        <motion.div
          className="absolute -inset-px z-0 pointer-events-none transition-opacity duration-300"
          animate={{ opacity: isHovered ? 1 : 0 }}
          style={{
            background: `radial-gradient(250px circle at ${mousePosition.x}px ${mousePosition.y}px, rgba(249,115,22,0.8), transparent 100%)`
          }}
        />

        <div className="relative z-10 rounded-[23px] bg-[#0c0c0e]/95 backdrop-blur-3xl flex flex-col p-8 overflow-hidden shadow-2xl border border-white/5 group-hover:border-transparent transition-colors">
          
          <div className="absolute inset-0 bg-gradient-to-tr from-orange-500/5 to-transparent pointer-events-none" />
          <div className="w-full flex justify-between items-center mb-6 relative z-10">
            <div className="flex gap-2">
              <div className="w-3 h-3 rounded-full bg-red-500/80"></div>
              <div className="w-3 h-3 rounded-full bg-yellow-500/80"></div>
              <div className="w-3 h-3 rounded-full bg-green-500/80"></div>
            </div>
            <div className="text-xs text-gray-500 font-mono">portfolio.jsx</div>
          </div>
          
          <div className="space-y-4 font-mono text-sm relative z-10">
            <div className="text-gray-400">
              import <span className="text-white">
                <Typewriter words={["Experience", "Innovation", "Scalability", "Design"]} delay={100} />
              </span> from <span className="text-orange-400">"./impact"</span>;
            </div>
            <div className="text-gray-400">
              import <span className="text-white">
                <Typewriter words={["Code", "Logic", "State", "Velocity"]} delay={120} pause={2500} />
              </span> from <span className="text-orange-400">"./aesthetics"</span>;
            </div>
            <br/>
            <div className="text-gray-400">// Building the future,</div>
            <div className="text-gray-400">// one line of code at a time</div>
            <br/>
            <div className="text-orange-300">const <span className="text-white">Developer</span> = <span className="text-orange-300">() =&gt;</span> {'{'}</div>
            <div className="pl-4 text-gray-300">return <span className="text-white">&lt;Masterpiece /&gt;</span>;</div>
            <div className="text-orange-300">{'}'}</div>
          </div>
          
          {/* Subtle Ambient Glow inside card */}
          <div className="absolute -bottom-20 -right-20 w-40 h-40 bg-orange-500/10 blur-[50px] rounded-full pointer-events-none mix-blend-screen" />
        </div>
      </div>
    </motion.div>
  );
}
