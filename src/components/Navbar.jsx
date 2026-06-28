import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScrollEvent = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScrollEvent);
    return () => window.removeEventListener("scroll", handleScrollEvent);
  }, []);

  const handleScroll = (id) => {
    const section = document.getElementById(id);
    if (!section) return;

    const yOffset = -80; 
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
        initial={{ y: -100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
        className={`fixed top-0 left-0 w-full z-50 bg-white border-b border-gray-100 transition-shadow duration-300 ${
          scrolled ? "shadow-sm border-gray-200" : ""
        }`}
      >
        <div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
          <button 
            onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
            className="text-base font-medium text-[#111111] hover:text-[#E23744] transition-colors cursor-pointer"
          >
            Shreyanshu Kumar
          </button>

          <div className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <button
                key={link.id}
                onClick={() => handleScroll(link.id)}
                className="text-gray-600 hover:text-[#E23744] transition-colors cursor-pointer"
              >
                {link.label}
              </button>
            ))}
            
            <a
              href="/SHREYANSHU.pdf"
              target="_blank"
              rel="noreferrer"
              className="text-gray-600 hover:text-[#E23744] transition-colors font-medium"
            >
              Resume
            </a>

            <button
              onClick={() => handleScroll("contact")}
              className="text-gray-600 hover:text-[#E23744] transition-colors cursor-pointer"
            >
              Contact
            </button>

            <button
              onClick={() => handleScroll("contact")}
              className="px-5 py-2 rounded-full bg-[#E23744] hover:bg-[#c92f3a] text-white text-sm font-semibold transition-colors cursor-pointer"
            >
              Hire Me
            </button>
          </div>

          <div className="md:hidden">
            <button 
              onClick={() => setOpen(!open)} 
              className="p-2 text-gray-600 hover:text-[#E23744] transition-colors cursor-pointer"
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

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="fixed top-16 left-0 w-full z-40 md:hidden bg-white border-b border-gray-200 overflow-hidden"
          >
            <div className="px-6 py-8 flex flex-col gap-6 items-center">
              {navLinks.map((link) => (
                <button
                  key={link.id}
                  onClick={() => handleScroll(link.id)}
                  className="text-xl font-medium text-gray-600 hover:text-[#E23744] transition-colors cursor-pointer"
                >
                  {link.label}
                </button>
              ))}
              <a
                href="/SHREYANSHU.pdf"
                target="_blank"
                rel="noreferrer"
                className="text-xl font-medium text-gray-600 hover:text-[#E23744] transition-colors font-medium"
              >
                Resume
              </a>
              <button
                onClick={() => handleScroll("contact")}
                className="text-xl font-medium text-gray-600 hover:text-[#E23744] transition-colors cursor-pointer"
              >
                Contact
              </button>
              <button
                onClick={() => handleScroll("contact")}
                className="mt-4 px-10 py-3 flex items-center justify-center rounded-full bg-[#E23744] hover:bg-[#c92f3a] text-white font-semibold text-lg transition-colors w-[200px] cursor-pointer"
              >
                Hire Me
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
