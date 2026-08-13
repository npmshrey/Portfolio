import { useRef } from "react";
import { projects } from "../data/projects";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";

gsap.registerPlugin(ScrollTrigger);

export default function Projects() {
  const containerRef = useRef(null);

  const glowColors = [
    "rgba(167, 139, 250, 0.08)", // Violet
    "rgba(59, 130, 246, 0.08)",  // Blue
    "rgba(16, 185, 129, 0.08)",  // Green
    "rgba(249, 115, 22, 0.08)",  // Orange
  ];

  useGSAP(() => {
    // Reveal section heading
    gsap.fromTo(
      ".projects-heading",
      { opacity: 0, y: 30 },
      {
        opacity: 1,
        y: 0,
        duration: 0.8,
        ease: "power2.out",
        scrollTrigger: {
          trigger: ".projects-heading",
          start: "top 85%",
          toggleActions: "play none none reverse",
        },
      }
    );

    // Reveal project cards with stagger
    gsap.fromTo(
      ".project-grid-card",
      { opacity: 0, y: 50 },
      {
        opacity: 1,
        y: 0,
        duration: 0.8,
        ease: "power3.out",
        stagger: 0.15,
        scrollTrigger: {
          trigger: ".project-grid",
          start: "top 85%",
          toggleActions: "play none none reverse",
        },
      }
    );
  }, { scope: containerRef });

  return (
    <section 
      ref={containerRef}
      id="projects" 
      className="py-24 border-t border-white/5 bg-black relative w-full overflow-hidden" 
    >
      <div className="max-w-6xl mx-auto px-8">
        
        {/* Section Heading */}
        <div className="projects-heading mb-16 text-left">
          <h2 className="text-[11px] font-semibold text-[#E23744] tracking-[0.2em] uppercase mb-3">
            05 // SELECTED WORK
          </h2>
          <h3 className="text-4xl sm:text-5xl md:text-6xl font-bold leading-tight tracking-tight text-white">
            Projects that <span className="font-light text-gray-400">drive impact.</span>
          </h3>
        </div>

        {/* Project Grid */}
        <div className="project-grid grid md:grid-cols-2 gap-8 w-full">
          {projects.map((project, i) => {
            const projectNumber = `0${i + 1}`;
            return (
              <div 
                key={i} 
                className="project-grid-card glass-card glass-card-hover group relative flex flex-col justify-between overflow-hidden p-8"
              >
                {/* Radial Glow Backdrop */}
                <div 
                  className="absolute inset-0 pointer-events-none transition-opacity duration-500 opacity-60 group-hover:opacity-100"
                  style={{
                    background: `radial-gradient(circle at 50% 20%, ${glowColors[i % glowColors.length]}, transparent 65%)`
                  }}
                />

                <div className="relative z-10">
                  {/* Card Header */}
                  <div className="flex justify-between items-center mb-6">
                    <span className="text-[11px] font-mono text-[#E23744] uppercase tracking-widest font-bold">
                      PROJECT {projectNumber}
                    </span>
                    <span className="text-xl text-gray-400 group-hover:text-white group-hover:translate-x-1 group-hover:-translate-y-1 transition-all duration-300 font-light select-none">
                      ↗
                    </span>
                  </div>

                  {/* Preview Image */}
                  <div className="aspect-[16/10] rounded-xl border border-white/5 overflow-hidden mb-6 relative bg-white/[0.01]">
                    <img 
                      src={project.image} 
                      alt={`${project.title} preview`}
                      className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-700 ease-out"
                      onError={(e) => { 
                        e.currentTarget.style.display = 'none';
                        e.currentTarget.nextSibling.style.display = 'flex';
                      }}
                    />
                    <div className="absolute inset-0 flex flex-col items-center justify-center hidden bg-white/[0.01]">
                      <span className="text-gray-600 text-xs font-mono select-none">[ Preview Image ]</span>
                    </div>
                  </div>

                  {/* Title & Description */}
                  <h4 className="text-2xl font-bold text-white mb-3 group-hover:text-[#E23744] transition-colors duration-300">
                    {project.title}
                  </h4>
                  <p className="text-sm text-gray-400 leading-relaxed font-light mb-6">
                    {project.description}
                  </p>

                  {/* Tech stack */}
                  <div className="flex flex-wrap gap-2 mb-6">
                    {project.tech.map((t) => (
                      <span
                        key={t}
                        className="border border-white/10 bg-white/[0.01] rounded-full px-3 py-1 text-xs text-gray-300 hover:border-[#E23744] hover:text-[#E23744] transition-all font-mono"
                      >
                        {t}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Impact Stat (bottom-pinned) */}
                <div className="relative z-10 mt-auto border-t border-white/5 pt-5 flex flex-col justify-between h-fit gap-4">
                  <div className="border-l-2 border-[#E23744] pl-4 py-1">
                    <p className="text-xs text-gray-400 uppercase tracking-widest font-semibold mb-1">Key Impact</p>
                    <p className="text-sm text-white font-medium">{project.impact}</p>
                  </div>

                  {/* Action links */}
                  <div className="flex gap-6 items-center mt-2">
                    <a 
                      href={project.live} 
                      target="_blank" 
                      rel="noreferrer" 
                      className="text-xs font-bold text-[#E23744] hover:underline"
                    >
                      Live Demo
                    </a>
                    <a 
                      href={project.github} 
                      target="_blank" 
                      rel="noreferrer" 
                      className="text-xs font-bold text-gray-400 hover:text-white transition-colors"
                    >
                      Source Code
                    </a>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
