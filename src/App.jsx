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
    <div className="bg-[#050505] min-h-screen font-sans text-gray-200 overflow-x-hidden w-full max-w-[100vw]">
      <Navbar />
      <LandingHero />
      <Achievements />
      <Projects />
      <Experience />
      <Skills />
      <Certifications />
      <About />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
