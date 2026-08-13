import { useState, useEffect } from "react";
import { motion } from "framer-motion";

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: (i) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: i * 0.12,
      duration: 0.8,
      ease: [0.21, 0.47, 0.32, 0.98],
    },
  }),
};

const Typewriter = ({ words, delay = 100, pause = 2000 }) => {
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
        className="inline-block w-[8px] h-[1em] bg-[#E23744] align-middle ml-[2px]"
      />
    </>
  );
};

export default function LandingHero() {
  const stats = [
    { value: "3", label: "Hackathon Wins" },
    { value: "3+", label: "Projects Shipped" },
    { value: "2+", label: "Years Building" }
  ];

  return (
    <section className="relative min-h-screen flex items-center bg-white pt-16 overflow-hidden">
      {/* Subtle grid background */}
      <div className="absolute inset-0 bg-[linear-gradient(#E5E5E5_1px,transparent_1px),linear-gradient(90deg,#E5E5E5_1px,transparent_1px)] bg-[size:80px_80px] opacity-30 pointer-events-none z-0" />
      
      <div className="max-w-7xl w-full mx-auto px-8 grid lg:grid-cols-2 gap-8 lg:gap-0 items-center relative z-10 flex-1">
        
        {/* Left Column */}
        <div className="flex flex-col justify-center">
          {/* Element 1: Role label */}
          <motion.div
            custom={0}
            variants={fadeUp}
            initial="hidden"
            animate="visible"
            className="text-[11px] font-semibold text-[#E23744] uppercase tracking-[0.15em] mb-3"
          >
            Frontend focused & Backend Support Engineer
          </motion.div>
    
          {/* Element 2: Main headline */}
          <motion.h1
            custom={1}
            variants={fadeUp}
            initial="hidden"
            animate="visible"
            className="text-[clamp(48px,6vw,80px)] font-bold text-[#1C1C1C] tracking-tight leading-[1.05] letter-spacing-[-0.02em]"
          >
            Not just a developer.<br />
            A builder.
          </motion.h1>

          {/* Element 3: Typewriter Line */}
          <motion.div 
            custom={2}
            variants={fadeUp}
            initial="hidden"
            animate="visible"
            className="text-[18px] font-medium text-gray-500 mt-4 tracking-normal"
          >
            Shreyanshu Kumar / <span className="text-[#E23744] font-semibold"><Typewriter words={["Engineer", "Architect", "Designer"]} delay={100} pause={2000} /></span>
          </motion.div>

          {/* Element 4: Subtext */}
          <motion.p
            custom={3}
            variants={fadeUp}
            initial="hidden"
            animate="visible"
            className="text-[18px] text-[#666666] max-w-[580px] font-light leading-[1.7] mt-6"
          >
            I engineer high-performance web applications with a focus on polished UI, resilient architecture, and measurable impact.
          </motion.p>

          {/* Element 5: CTAs */}
          <motion.div
            custom={4}
            variants={fadeUp}
            initial="hidden"
            animate="visible"
            className="mt-10 flex flex-wrap gap-4 items-center"
          >
            <a
              href="#projects"
              className="bg-[#E23744] text-white rounded-full px-8 py-4 font-semibold text-[15px] hover:bg-[#c4303b] transition-colors duration-200 cursor-pointer"
            >
              View Projects
            </a>
            <a
              href="/SHREYANSHU.pdf"
              target="_blank"
              rel="noreferrer"
              className="border-[1.5px] border-[#1C1C1C] text-[#1C1C1C] rounded-full px-8 py-4 font-medium text-[15px] hover:bg-[#1C1C1C] hover:text-white transition-all duration-200"
            >
              Download Resume
            </a>
          </motion.div>

          {/* Element 6: Stats row */}
          <motion.div
            custom={5}
            variants={fadeUp}
            initial="hidden"
            animate="visible"
            className="mt-12 flex gap-10 flex-wrap items-center"
          >
            {stats.map((stat, idx) => (
              <div key={idx} className="flex items-center gap-10">
                <div className="flex flex-col">
                  <span className="text-[28px] font-bold text-[#1C1C1C] leading-none">
                    {stat.value}
                  </span>
                  <span className="text-[12px] text-[#999999] mt-1 font-medium whitespace-nowrap">
                    {stat.label}
                  </span>
                </div>
                {idx < stats.length - 1 && (
                  <div className="w-px h-8 bg-[#E5E5E5] self-center" />
                )}
              </div>
            ))}
          </motion.div>
        </div>

        {/* Right Column: Profile Image */}
        <div className="hidden lg:flex justify-center items-center">
          <motion.div
            custom={6}
            variants={fadeUp}
            initial="hidden"
            animate="visible"
            className="mx-auto"
          >
            <div className="w-[clamp(280px,35vw,420px)] h-[clamp(280px,35vw,420px)] rounded-full overflow-hidden border border-[#E5E5E5] bg-white group cursor-pointer">
              <img 
                src="/images/profile.jpeg" 
                alt="Shreyanshu Kumar" 
                className="w-full h-full object-cover object-[center_top] grayscale group-hover:grayscale-0 transition-all duration-700 ease-in-out"
              />
            </div>
          </motion.div>
        </div>

      </div>

      {/* Element 7: Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10">
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ repeat: Infinity, duration: 1.5, ease: "easeInOut" }}
          className="text-[#E23744] text-[20px] font-bold cursor-pointer"
          onClick={() => {
            const nextSec = document.getElementById("experience");
            if (nextSec) nextSec.scrollIntoView({ behavior: "smooth" });
          }}
        >
          ↓
        </motion.div>
      </div>
    </section>
  );
}
