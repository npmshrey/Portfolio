import Navbar from "./components/Navbar";
import LandingHero from "./components/LandingHero";
import Achievements from "./components/Achievements";
import Projects from "./components/Projects";
import Experience from "./components/Experience";

import Skills from "./components/Skills";
import Certifications from "./components/Certifications";
import About from "./components/About";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

function App() {
  return (
    <div className="bg-white text-[#1C1C1C] min-h-screen font-sans overflow-x-hidden">
      <Navbar />
      <LandingHero />
      <Achievements />
      <Projects />
      <Experience />
      <Skills />
      <section className="py-20 border-t border-[#E5E5E5]">
        <div className="max-w-7xl mx-auto px-8 grid lg:grid-cols-2 gap-16 items-start">
          <Certifications />
          <About />
        </div>
      </section>
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
