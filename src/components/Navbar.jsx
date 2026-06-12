import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

const links = [
  { label: "Projects", id: "projects" },
  { label: "Experience", id: "experience" },
  { label: "Skills", id: "skills" },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [hoveredIndex, setHoveredIndex] = useState(null);

  useEffect(() => {
    const handleScrollEvent = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScrollEvent);
    return () => window.removeEventListener("scroll", handleScrollEvent);
  }, []);

  const handleScroll = (id) => {
    const section = document.getElementById(id);
    if (!section) return;

    const yOffset = -100; 
    const y =
      section.getBoundingClientRect().top +
      window.pageYOffset +
      yOffset;

    window.scrollTo({
      top: y,
      behavior: "smooth",
    });

    setOpen(false);
  };

  return (
    <>
      <motion.nav 
        initial={{ y: -100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
        className="fixed top-6 left-1/2 -translate-x-1/2 z-50 hidden md:flex items-center py-2 px-3 rounded-full glass min-w-max border border-white/10 text-sm font-medium transition-all duration-300"
        style={{
          backgroundColor: scrolled ? "rgba(5, 5, 5, 0.8)" : "rgba(25, 25, 25, 0.3)",
          borderColor: scrolled ? "rgba(249, 115, 22, 0.2)" : "rgba(255, 255, 255, 0.1)",
          boxShadow: scrolled ? "0 10px 30px -10px rgba(249,115,22,0.15)" : "none"
        }}
      >
        <div className="flex items-center gap-1">
          {links.map((link, idx) => (
            <button
              key={link.id}
              onClick={() => handleScroll(link.id)}
              onMouseEnter={() => setHoveredIndex(idx)}
              onMouseLeave={() => setHoveredIndex(null)}
              className="relative px-5 py-2.5 text-gray-300 hover:text-white transition-colors rounded-full whitespace-nowrap"
            >
              {hoveredIndex === idx && (
                <motion.div
                  layoutId="nav-pill"
                  className="absolute inset-0 bg-orange-500/20 rounded-full border border-orange-500/30"
                  transition={{ type: "spring", stiffness: 400, damping: 30 }}
                />
              )}
              <span className="relative z-10">{link.label}</span>
            </button>
          ))}
          
          <a
            href="/SHREYANSHU.pdf"
            target="_blank"
            rel="noreferrer"
            onMouseEnter={() => setHoveredIndex(links.length)}
            onMouseLeave={() => setHoveredIndex(null)}
            className="relative px-5 py-2.5 text-gray-300 hover:text-white transition-colors rounded-full whitespace-nowrap"
          >
             {hoveredIndex === links.length && (
                <motion.div
                  layoutId="nav-pill"
                  className="absolute inset-0 bg-orange-500/20 rounded-full border border-orange-500/30"
                  transition={{ type: "spring", stiffness: 400, damping: 30 }}
                />
              )}
            <span className="relative z-10">Resume</span>
          </a>
        </div>
      </motion.nav>

      <motion.div 
        initial={{ y: -100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1], delay: 0.1 }}
        className="fixed top-6 right-6 z-50 hidden md:block"
      >
        <button
          onClick={() => handleScroll("contact")}
          className="relative group px-6 py-2.5 rounded-full bg-orange-500 text-white text-sm font-semibold overflow-hidden transition-all hover:scale-105 shadow-xl hover:shadow-[0_0_20px_rgba(249,115,22,0.4)]"
        >
          <span className="absolute inset-0 bg-orange-400 translate-y-[100%] group-hover:translate-y-0 transition-transform duration-300 ease-out" />
          <span className="relative z-10">Contact</span>
        </button>
      </motion.div>

      <nav className="fixed top-0 w-full z-50 md:hidden bg-[#050505]/80 backdrop-blur-md border-b border-orange-500/10 transition-colors duration-300">
        <div className="px-6 h-16 flex items-center justify-end text-white">
          <button onClick={() => setOpen(!open)} className="p-2 -mr-2 text-gray-300 hover:text-orange-400 transition-colors active:scale-95">
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              {open ? (
                <>
                  <line x1="18" y1="6" x2="6" y2="18"></line>
                  <line x1="6" y1="6" x2="18" y2="18"></line>
                </>
              ) : (
                <>
                  <line x1="3" y1="12" x2="21" y2="12"></line>
                  <line x1="3" y1="6" x2="21" y2="6"></line>
                  <line x1="3" y1="18" x2="21" y2="18"></line>
                </>
              )}
            </svg>
          </button>
        </div>
      </nav>
      
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="fixed top-16 left-0 w-full z-40 md:hidden bg-[#050505] border-b border-orange-500/10 overflow-hidden"
          >
            <div className="px-6 py-8 flex flex-col gap-6 items-center">
              {links.map((link, i) => (
                <motion.a
                  key={link.id}
                  href={`#${link.id}`}
                  onClick={() => setOpen(false)}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: i * 0.1 }}
                  className="text-2xl font-medium text-gray-400 hover:text-orange-400 transition-colors"
                >
                  {link.label}
                </motion.a>
              ))}
              <motion.a
                href="/SHREYANSHU.pdf"
                target="_blank"
                rel="noreferrer"
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: links.length * 0.1 }}
                className="text-2xl font-medium text-gray-400 hover:text-orange-400 transition-colors"
              >
                Resume
              </motion.a>
              <motion.a
                href="#contact"
                onClick={() => setOpen(false)}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: (links.length + 1) * 0.1 }}
                className="mt-6 px-10 py-4 flex items-center justify-center rounded-full bg-orange-500 text-white font-semibold text-lg hover:scale-105 transition-transform w-[250px]"
              >
                Contact
              </motion.a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
