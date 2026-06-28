import { useRef } from "react";
import { projects } from "../data/projects";
import { motion } from "framer-motion";

export default function Projects() {
  const container = useRef(null);

  return (
    <section id="projects" className="py-32 bg-white relative w-full overflow-hidden" ref={container}>
      <div className="max-w-5xl mx-auto px-6">
        
        <div className="mb-20 md:flex justify-between items-end">
          <div className="max-w-xl">
            <motion.h2 
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-sm font-semibold text-[#E23744] tracking-widest uppercase mb-3"
            >
              Selected Work
            </motion.h2>
            <motion.h3 
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, delay: 0.1 }}
              className="text-4xl sm:text-5xl md:text-6xl font-black text-[#111111] tracking-tight"
            >
              Projects that drive impact.
            </motion.h3>
          </div>
        </div>

        <div className="space-y-24 md:space-y-32">
          {projects.map((project, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.7, ease: "easeOut" }}
              className="project-card group relative grid lg:grid-cols-12 gap-10 items-center"
            >
              {/* Image Container */}
              <div className={`lg:col-span-6 h-[260px] md:h-[340px] rounded-2xl bg-gray-50 border border-gray-200 relative overflow-hidden transition-all duration-500 hover:shadow-md ${
                i % 2 === 1 ? "lg:order-2" : "lg:order-1"
              }`}>
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(226,55,68,0.01)_1px,transparent_1px)] bg-[length:24px_24px]" />
                
                <div className="absolute inset-0 overflow-hidden rounded-2xl">
                  <img 
                    src={project.image} 
                    alt={`${project.title} preview`}
                    className="absolute inset-0 w-full h-full object-cover transition-all duration-700 ease-out group-hover:scale-105"
                    onError={(e) => { 
                      e.currentTarget.style.display = 'none';
                      e.currentTarget.nextSibling.style.display = 'flex';
                    }}
                  />
                  <div className="absolute inset-0 flex-col items-center justify-center hidden bg-gray-50">
                    <span className="text-gray-400 text-sm font-mono">[ Missing Image ]</span>
                  </div>
                </div>
              </div>

              {/* Text Container */}
              <div className={`lg:col-span-6 relative z-10 ${
                i % 2 === 1 ? "lg:order-1 lg:pr-6 lg:pl-0" : "lg:order-2 lg:pl-6"
              }`}>
                <div className="flex flex-wrap gap-2 mb-5">
                  {project.tech.map((t) => (
                    <span
                      key={t}
                      className="text-[11px] font-mono px-3 py-1 bg-transparent border border-gray-200 text-gray-700 hover:border-[#E23744] hover:text-[#E23744] transition-colors rounded-full tracking-wider uppercase font-semibold cursor-default"
                    >
                      {t}
                    </span>
                  ))}
                </div>

                <h4 className="text-2xl md:text-3xl font-black text-[#111111] mb-4 group-hover:text-[#E23744] transition-colors duration-300">
                  {project.title}
                </h4>
                
                <p className="text-base text-gray-600 mb-6 leading-relaxed">
                  {project.description}
                </p>

                <div className="mb-8 p-4 rounded-xl bg-gray-50 border border-gray-150 border-l-4 border-l-[#E23744] transition-colors">
                  <div className="text-xs text-[#E23744] uppercase tracking-widest mb-1 font-bold">Impact</div>
                  <div className="text-sm text-[#111111] font-semibold">{project.impact}</div>
                </div>

                <div className="flex flex-wrap items-center gap-4 sm:gap-6">
                  <a href={project.live} target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 text-[#E23744] font-bold group/link border-b border-[#E23744]/30 pb-0.5 hover:border-[#E23744] transition-colors">
                    <span className="text-sm">Live Preview</span>
                    <svg className="w-4 h-4 transform group-hover/link:translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                    </svg>
                  </a>
                  <a href={project.github} target="_blank" rel="noreferrer" className="text-gray-500 hover:text-[#E23744] transition-colors text-sm font-semibold">
                    GitHub Repo
                  </a>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
