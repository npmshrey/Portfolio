import { useRef } from "react";
import { projects } from "../data/projects";
import { motion } from "framer-motion";

export default function Projects() {
  const container = useRef(null);

  return (
    <section id="projects" className="py-20 border-t border-[#E5E5E5] bg-white relative w-full overflow-hidden" ref={container}>
      <div className="max-w-5xl mx-auto px-8">
        
        <div className="mb-10 text-left">
          <div className="max-w-xl">
            <motion.h2 
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-[11px] font-semibold text-[#E23744] tracking-widest uppercase mb-2"
            >
              Selected Work
            </motion.h2>
            <motion.h3 
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, delay: 0.1 }}
              className="text-[56px] font-bold text-[#1C1C1C] leading-[1.05]"
            >
              Projects that <span className="font-light text-[#999]">drive impact.</span>
            </motion.h3>
          </div>
        </div>

        <div className="flex flex-col">
          {projects.map((project, i) => {
            const projectNumber = `0${i + 1}`;
            return (
              <div key={i}>
                <motion.div
                  initial={{ opacity: 0, y: 40 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-100px" }}
                  transition={{ duration: 0.7, ease: "easeOut" }}
                  className="project-card group relative grid lg:grid-cols-12 gap-8 items-center py-16"
                >
                  {/* Image Container */}
                  <div className={`lg:col-span-6 aspect-[4/3] rounded-2xl border border-[#E5E5E5] overflow-hidden relative ${
                    i % 2 === 1 ? "lg:order-last" : "lg:order-first"
                  }`}>
                    <img 
                      src={project.image} 
                      alt={`${project.title} preview`}
                      className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-700 ease-out"
                      onError={(e) => { 
                        e.currentTarget.style.display = 'none';
                        e.currentTarget.nextSibling.style.display = 'flex';
                      }}
                    />
                    <div className="absolute inset-0 flex-col items-center justify-center hidden bg-gray-50">
                      <span className="text-gray-400 text-sm font-mono">[ Missing Image ]</span>
                    </div>
                  </div>

                  {/* Text Container */}
                  <div className="lg:col-span-6 relative z-10">
                    <div className="text-[11px] font-semibold text-[#E23744] uppercase tracking-[0.15em] mb-3">
                      {projectNumber}
                    </div>

                    <h4 className="text-[32px] font-bold text-[#1C1C1C] leading-tight">
                      {project.title}
                    </h4>
                    
                    <p className="text-[15px] text-[#666666] leading-relaxed mt-3 mb-4">
                      {project.description}
                    </p>

                    <div className="flex flex-wrap gap-2 mb-5">
                      {project.tech.map((t) => (
                        <span
                          key={t}
                          className="border border-[#D0D0D0] rounded-full px-3 py-1 text-[12px] text-[#555] hover:border-[#E23744] hover:text-[#E23744] transition-colors font-medium cursor-default"
                        >
                          {t}
                        </span>
                      ))}
                    </div>

                    <div className="border-l-[3px] border-[#E23744] pl-4 bg-[#FFF8F8] py-3 rounded-r-lg mt-4 mb-6 text-[14px]">
                      <div className="text-[14px] text-[#1C1C1C] font-semibold">{project.impact}</div>
                    </div>

                    <div className="flex flex-wrap items-center gap-4 sm:gap-6">
                      <a href={project.live} target="_blank" rel="noreferrer" className="inline-flex items-center gap-1.5 text-[#E23744] font-bold group/link border-b border-[#E23744]/20 pb-0.5 hover:border-[#E23744] transition-colors">
                        <span className="text-sm">Live Preview</span>
                        <span className="text-sm transform group-hover/link:translate-x-1 transition-transform">→</span>
                      </a>
                      <a href={project.github} target="_blank" rel="noreferrer" className="text-gray-500 hover:text-[#E23744] transition-colors text-sm font-semibold">
                        GitHub Repo
                      </a>
                    </div>
                  </div>
                </motion.div>
                {i < projects.length - 1 && (
                  <hr className="border-[#E5E5E5]" />
                )}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
