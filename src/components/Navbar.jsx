import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScrollEvent = () => {
      setScrolled(window.scrollY > 40);
    };
    window.addEventListener("scroll", handleScrollEvent);
    return () => window.removeEventListener("scroll", handleScrollEvent);
  }, []);

  const handleScroll = (id) => {
    const section = document.getElementById(id);
    if (!section) return;

    const yOffset = -64; // Offset matches navbar height
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

  const navLinks = [
    { label: "Projects", id: "projects" },
    { label: "Experience", id: "experience" },
    { label: "Skills", id: "skills" },
  ];

  return (
    <>
      <motion.nav 
        initial={{ opacity: 0, y: -10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className={`fixed top-0 left-0 w-full z-50 h-16 transition-all duration-300 ${
          scrolled 
            ? "bg-white/97 backdrop-blur-sm border-b border-[#E5E5E5] shadow-[0_2px_20px_rgba(0,0,0,0.06)]" 
            : "bg-transparent border-b border-transparent"
        }`}
      >
        <div className="max-w-7xl mx-auto px-8 flex items-center justify-between h-full">
          <button 
            onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
            className="text-[15px] font-semibold text-[#1C1C1C] cursor-pointer"
          >
            Shreyanshu Kumar
          </button>

          {/* Center Links (Desktop) */}
          <div className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <button
                key={link.id}
                onClick={() => handleScroll(link.id)}
                className="text-[14px] text-[#555] font-medium transition-colors duration-200 hover:text-[#E23744] cursor-pointer relative after:content-[''] after:absolute after:bottom-[-2px] after:left-0 after:w-full after:h-[2px] after:bg-[#E23744] after:scale-x-0 after:origin-left after:transition-transform after:duration-250 hover:after:scale-x-100"
              >
                {link.label}
              </button>
            ))}
            
            <a
              href="/SHREYANSHU.pdf"
              target="_blank"
              rel="noreferrer"
              className="text-[14px] text-[#555] font-medium transition-colors duration-200 hover:text-[#E23744] relative after:content-[''] after:absolute after:bottom-[-2px] after:left-0 after:w-full after:h-[2px] after:bg-[#E23744] after:scale-x-0 after:origin-left after:transition-transform after:duration-250 hover:after:scale-x-100"
            >
              Resume
            </a>

            <button
              onClick={() => handleScroll("contact")}
              className="text-[14px] text-[#555] font-medium transition-colors duration-200 hover:text-[#E23744] cursor-pointer relative after:content-[''] after:absolute after:bottom-[-2px] after:left-0 after:w-full after:h-[2px] after:bg-[#E23744] after:scale-x-0 after:origin-left after:transition-transform after:duration-250 hover:after:scale-x-100"
            >
              Contact
            </button>
          </div>

          {/* Right: Hire Me Button (Desktop) */}
          <div className="hidden md:block">
            <button
              onClick={() => handleScroll("contact")}
              className="border-[1.5px] border-[#E23744] text-[#E23744] rounded-full px-[22px] py-[8px] text-[14px] font-semibold hover:bg-[#E23744] hover:text-white transition-all duration-200 cursor-pointer"
            >
              Hire Me
            </button>
          </div>

          {/* Hamburger (Mobile) */}
          <div className="md:hidden">
            <button 
              onClick={() => setOpen(!open)} 
              className="p-2 text-[#1C1C1C] cursor-pointer"
            >
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
        </div>
      </motion.nav>

      {/* Mobile Drawer */}
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "100vh" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
            className="fixed top-16 left-0 w-full z-45 md:hidden bg-white border-b border-[#E5E5E5] overflow-hidden flex flex-col justify-between py-12"
          >
            <div className="px-8 flex flex-col gap-8 items-center mt-12">
              {navLinks.map((link, idx) => (
                <motion.button
                  key={link.id}
                  onClick={() => handleScroll(link.id)}
                  initial={{ opacity: 0, y: 15 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: idx * 0.08 }}
                  className="text-[28px] font-bold text-[#1C1C1C] hover:text-[#E23744] transition-colors cursor-pointer"
                >
                  {link.label}
                </motion.button>
              ))}
              <motion.a
                href="/SHREYANSHU.pdf"
                target="_blank"
                rel="noreferrer"
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: navLinks.length * 0.08 }}
                className="text-[28px] font-bold text-[#1C1C1C] hover:text-[#E23744] transition-colors"
              >
                Resume
              </motion.a>
              <motion.button
                onClick={() => handleScroll("contact")}
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: (navLinks.length + 1) * 0.08 }}
                className="text-[28px] font-bold text-[#1C1C1C] hover:text-[#E23744] transition-colors cursor-pointer"
              >
                Contact
              </motion.button>
            </div>
            
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: (navLinks.length + 2) * 0.08 }}
              className="px-8 flex justify-center mb-16"
            >
              <button
                onClick={() => handleScroll("contact")}
                className="w-full bg-[#E23744] hover:bg-[#c92f3a] text-white font-semibold text-lg py-4 rounded-full transition-colors cursor-pointer text-center"
              >
                Hire Me
              </button>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
