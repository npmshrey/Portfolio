import { useState, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";

const navLinks = [
  { label: "About", id: "about" },
  { label: "Experience", id: "experience" },
  { label: "Skills", id: "technical-arsenal" },
  { label: "Projects", id: "projects" },
  { label: "Contact", id: "contact" },
];

// The four panels of HorizontalScroll live inside one pinned wrapper, so on
// desktop their document position is the wrapper's top plus one viewport
// height of scroll per panel.
const horizontalSectionIds = ["about", "experience", "technical-arsenal", "credentials"];

function scrollToY(y) {
  if (window.__lenis) window.__lenis.scrollTo(y, { duration: 1.6 });
  else window.scrollTo({ top: y, behavior: "smooth" });
}

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const navRef = useRef(null);

  useGSAP(() => {
    gsap.fromTo(navRef.current, { yPercent: -100 }, { yPercent: 0, duration: 1, ease: "expo.out", delay: 2.9 });
  }, { scope: navRef });

  const handleScroll = (id) => {
    const section = document.getElementById(id);
    if (!section) return;
    setOpen(false);

    const index = horizontalSectionIds.indexOf(id);
    if (window.innerWidth >= 1024 && index !== -1) {
      // While pinned, the wrapper sits at the viewport top, so measure from
      // GSAP's pin-spacer, whose document position never moves.
      const wrapper = section.parentElement.parentElement;
      const anchor = wrapper.parentElement?.classList.contains("pin-spacer") ? wrapper.parentElement : wrapper;
      const wrapperTop = anchor.getBoundingClientRect().top + window.scrollY;
      scrollToY(wrapperTop + index * window.innerHeight);
    } else {
      scrollToY(section.getBoundingClientRect().top + window.scrollY - 64);
    }
  };

  return (
    <>
      <nav
        ref={navRef}
        className={`fixed top-0 left-0 w-full z-[95] px-4 sm:px-8 h-16 flex items-center justify-between text-bone transition-colors lg:mix-blend-difference lg:bg-transparent lg:border-transparent lg:backdrop-blur-none ${
          open ? "bg-transparent border-b border-transparent" : "bg-ink/85 backdrop-blur-md border-b border-line"
        }`}
      >
        <button
          onClick={() => scrollToY(0)}
          className={`font-display text-2xl leading-none cursor-pointer transition-colors ${open ? "text-ink" : ""}`}
          aria-label="Back to top"
        >
          SK<span className="font-serif-i text-xl align-top">©</span>
        </button>

        <div className="hidden md:flex items-center gap-8">
          {navLinks.map((link, i) => (
            <button
              key={link.id}
              onClick={() => handleScroll(link.id)}
              className="group font-mono text-[11px] uppercase tracking-[0.14em] cursor-pointer flex items-start gap-1 overflow-hidden h-4"
            >
              <span className="text-[9px] opacity-50">0{i + 1}</span>
              <span className="relative block">
                <span className="block transition-transform duration-300 group-hover:-translate-y-full">{link.label}</span>
                <span className="absolute left-0 top-full block transition-transform duration-300 group-hover:-translate-y-full">{link.label}</span>
              </span>
            </button>
          ))}
        </div>

        <a
          href="/SHREYANSHU.pdf"
          target="_blank"
          rel="noreferrer"
          className="hidden md:inline-block font-mono text-[11px] font-bold uppercase tracking-[0.14em] border border-bone px-4 py-2 hover:bg-bone hover:text-ink transition-colors"
        >
          Résumé ↗
        </a>

        <button
          onClick={() => setOpen(!open)}
          className={`md:hidden font-mono text-[11px] font-bold uppercase tracking-[0.14em] cursor-pointer ${open ? "text-ink" : ""}`}
          aria-expanded={open}
        >
          {open ? "Close ✕" : "Menu ☰"}
        </button>
      </nav>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ clipPath: "inset(0 0 100% 0)" }}
            animate={{ clipPath: "inset(0 0 0% 0)" }}
            exit={{ clipPath: "inset(0 0 100% 0)" }}
            transition={{ duration: 0.7, ease: [0.76, 0, 0.24, 1] }}
            className="fixed inset-0 z-[94] md:hidden bg-acid text-ink flex flex-col justify-between pt-24 pb-10 px-4"
          >
            <div className="flex flex-col">
              {[...navLinks, { label: "Résumé", href: "/SHREYANSHU.pdf" }].map((link, idx) => (
                <div key={link.label} className="overflow-hidden border-b border-ink/20">
                  <motion.div
                    initial={{ y: "110%" }}
                    animate={{ y: 0 }}
                    transition={{ delay: 0.25 + idx * 0.06, duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
                  >
                    {link.href ? (
                      <a href={link.href} target="_blank" rel="noreferrer" className="flex items-baseline justify-between py-2 font-display text-[15vw]">
                        {link.label} <span className="font-mono text-xs">↗</span>
                      </a>
                    ) : (
                      <button onClick={() => handleScroll(link.id)} className="w-full flex items-baseline justify-between py-2 font-display text-[15vw] text-left cursor-pointer">
                        {link.label} <span className="font-mono text-xs">0{idx + 1}</span>
                      </button>
                    )}
                  </motion.div>
                </div>
              ))}
            </div>
            <p className="font-mono text-[11px] uppercase tracking-[0.14em]">work.shreyanshu@gmail.com</p>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
