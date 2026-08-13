import { useRef } from "react";
import Navbar from "./components/Navbar";
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
  const orb1Ref = useRef(null);
  const orb2Ref = useRef(null);

  useGSAP(() => {
    // Parallax background orbs
    gsap.to(orb1Ref.current, {
      y: -150,
      x: 80,
      scrollTrigger: {
        trigger: "body",
        start: "top top",
        end: "bottom bottom",
        scrub: 2,
      }
    });

    gsap.to(orb2Ref.current, {
      y: 150,
      x: -80,
      scrollTrigger: {
        trigger: "body",
        start: "top top",
        end: "bottom bottom",
        scrub: 2,
      }
    });
  });

  return (
    <div className="bg-black text-white min-h-screen font-sans overflow-x-hidden relative">
      {/* Background Parallax Orbs */}
      <div 
        ref={orb1Ref}
        className="fixed top-[20%] left-[10%] w-[350px] h-[350px] rounded-full bg-[#E23744]/5 filter blur-[120px] pointer-events-none z-0" 
      />
      <div 
        ref={orb2Ref}
        className="fixed bottom-[20%] right-[10%] w-[400px] h-[400px] rounded-full bg-[#8b5cf6]/5 filter blur-[120px] pointer-events-none z-0" 
      />

      <Navbar />
      
      <div className="relative z-10">
        <LandingHero />
        <HorizontalScroll />
        <Projects />
        <Contact />
        <Footer />
      </div>
    </div>
  );
}

export default App;
