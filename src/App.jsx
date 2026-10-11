import { useEffect, useRef } from "react";
import Lenis from "@studio-freight/lenis";
import Navbar from "./components/Navbar";
import Cursor from "./components/Cursor";
import LandingHero from "./components/LandingHero";
import HorizontalScroll from "./components/HorizontalScroll";
import Projects from "./components/Projects";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";

gsap.registerPlugin(ScrollTrigger);

function App() {
  const progressRef = useRef(null);

  // Lenis smooth scrolling, ticked by GSAP so pinned ScrollTriggers stay in
  // lockstep with it. Exposed on window so the navbar can scroll through it.
  useEffect(() => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

    const lenis = new Lenis({ duration: 1.15, smoothWheel: true });
    window.__lenis = lenis;
    lenis.on("scroll", ScrollTrigger.update);
    const tick = (time) => lenis.raf(time * 1000);
    gsap.ticker.add(tick);
    gsap.ticker.lagSmoothing(0);

    return () => {
      gsap.ticker.remove(tick);
      lenis.destroy();
      delete window.__lenis;
    };
  }, []);

  useGSAP(() => {
    gsap.to(progressRef.current, {
      scaleX: 1,
      ease: "none",
      scrollTrigger: { trigger: document.body, start: "top top", end: "bottom bottom", scrub: 0.3 },
    });
  });

  return (
    <div className="bg-ink text-bone min-h-screen overflow-x-hidden relative">
      <div className="grain" aria-hidden="true" />
      <Cursor />

      {/* Scroll progress */}
      <div
        ref={progressRef}
        className="fixed top-0 left-0 right-0 h-[3px] bg-acid origin-left z-[80]"
        style={{ transform: "scaleX(0)" }}
        aria-hidden="true"
      />

      <Navbar />

      <main className="relative z-10">
        <LandingHero />
        <HorizontalScroll />
        <Projects />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}

export default App;
