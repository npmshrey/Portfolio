import { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const navRef = useRef(null);

  useEffect(() => {
    const handleScrollEvent = () => {
      setScrolled(window.scrollY > 40);
    };
    window.addEventListener("scroll", handleScrollEvent);
    return () => window.removeEventListener("scroll", handleScrollEvent);
  }, []);

  useGSAP(() => {
    // Fade in navigation bar on load
    gsap.fromTo(navRef.current,
      { opacity: 0, y: -20 },
      { opacity: 1, y: 0, duration: 0.8, ease: "power3.out" }
    );
  }, { scope: navRef });

  const handleScroll = (id) => {
    const section = document.getElementById(id);
    if (!section) return;

    const isMobile = window.innerWidth < 768;

    if (isMobile) {
      const yOffset = -64; // Offset matches navbar height
      const y =
        section.getBoundingClientRect().top +
        window.pageYOffset +
        yOffset;

      window.scrollTo({
        top: y,
        behavior: "smooth",
      });
    } else {
      const horizontalSectionIds = ["about", "experience", "technical-arsenal", "credentials"];
      const index = horizontalSectionIds.indexOf(id);

      if (index !== -1) {
        // If it's one of the pinned horizontal panels, scroll to its corresponding y-offset within the horizontal wrapper
        const wrapper = document.getElementById("about")?.parentElement;
        const wrapperTop = wrapper 
          ? wrapper.getBoundingClientRect().top + window.pageYOffset 
          : section.getBoundingClientRect().top + window.pageYOffset;
        
        const y = wrapperTop + index * window.innerHeight;
        
        window.scrollTo({
          top: y,
          behavior: "smooth",
        });
      } else {
        const yOffset = -64;
        const y =
          section.getBoundingClientRect().top +
          window.pageYOffset +
          yOffset;

        window.scrollTo({
          top: y,
          behavior: "smooth",
        });
      }
    }

    setOpen(false);
  };

  const navLinks = [
    { label: "About", id: "about" },
    { label: "Experience", id: "experience" },
    { label: "Skills", id: "technical-arsenal" },
    { label: "Projects", id: "projects" },
  ];

  return (
    <>
      <nav 
        ref={navRef}
        className={`fixed top-0 left-0 w-full z-50 h-16 transition-all duration-300 ${
          scrolled 
            ? "bg-black/60 backdrop-blur-md border-b border-white/10 shadow-[0_4px_30px_rgba(0,0,0,0.5)]" 
            : "bg-transparent border-b border-transparent"
        }`}
      >
        <div className="max-w-7xl mx-auto px-8 flex items-center justify-between h-full">
          <button 
            onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
            className="text-[15px] font-semibold text-white hover:text-[#E23744] transition-colors duration-200 cursor-pointer"
          >
            Shreyanshu Kumar
          </button>

          {/* Center Links (Desktop) */}
          <div className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <button
                key={link.id}
                onClick={() => handleScroll(link.id)}
                className="text-[14px] text-gray-300 font-medium transition-colors duration-200 hover:text-[#E23744] cursor-pointer relative after:content-[''] after:absolute after:bottom-[-2px] after:left-0 after:w-full after:h-[2px] after:bg-[#E23744] after:scale-x-0 after:origin-left after:transition-transform after:duration-250 hover:after:scale-x-100"
              >
                {link.label}
              </button>
            ))}
            
            <a
              href="/SHREYANSHU.pdf"
              target="_blank"
              rel="noreferrer"
              className="text-[14px] text-gray-300 font-medium transition-colors duration-200 hover:text-[#E23744] relative after:content-[''] after:absolute after:bottom-[-2px] after:left-0 after:w-full after:h-[2px] after:bg-[#E23744] after:scale-x-0 after:origin-left after:transition-transform after:duration-250 hover:after:scale-x-100"
            >
              Resume
            </a>

            <button
              onClick={() => handleScroll("contact")}
              className="text-[14px] text-gray-300 font-medium transition-colors duration-200 hover:text-[#E23744] cursor-pointer relative after:content-[''] after:absolute after:bottom-[-2px] after:left-0 after:w-full after:h-[2px] after:bg-[#E23744] after:scale-x-0 after:origin-left after:transition-transform after:duration-250 hover:after:scale-x-100"
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
              className="p-2 text-white cursor-pointer"
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
      </nav>

      {/* Mobile Drawer */}
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "100vh" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
            className="fixed top-16 left-0 w-full z-40 md:hidden bg-black/95 backdrop-blur-md border-b border-white/10 overflow-hidden flex flex-col justify-between py-12"
          >
            <div className="px-8 flex flex-col gap-8 items-center mt-12">
              {navLinks.map((link, idx) => (
                <motion.button
                  key={link.id}
                  onClick={() => handleScroll(link.id)}
                  initial={{ opacity: 0, y: 15 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: idx * 0.08 }}
                  className="text-[28px] font-bold text-white hover:text-[#E23744] transition-colors cursor-pointer"
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
                className="text-[28px] font-bold text-white hover:text-[#E23744] transition-colors"
              >
                Resume
              </motion.a>
              <motion.button
                onClick={() => handleScroll("contact")}
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: (navLinks.length + 1) * 0.08 }}
                className="text-[28px] font-bold text-white hover:text-[#E23744] transition-colors cursor-pointer"
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
