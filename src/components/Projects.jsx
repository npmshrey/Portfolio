import { useRef } from "react";
import { projects } from "../data/projects";
import { motion } from "framer-motion";

export default function Projects() {
  const container = useRef(null);

  return (
    <section id="projects" className="py-16 md:py-24 bg-[#050505] relative w-full overflow-hidden" ref={container}>
      <div className="max-w-5xl mx-auto px-6">
        
        <div className="mb-20 md:flex justify-between items-end">
          <div className="max-w-xl">
            <motion.h2 
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-sm font-semibold text-orange-500 tracking-wider uppercase mb-3"
            >
              Selected Work
            </motion.h2>
            <motion.h3 
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, delay: 0.1 }}
              className="text-3xl sm:text-4xl md:text-5xl font-bold text-white tracking-tight"
            >
              Projects that drive <span className="text-gray-500 font-light">impact.</span>
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
              <div className="lg:col-span-6 h-[260px] md:h-[340px] rounded-2xl bg-[#111113] border border-white/5 relative overflow-hidden transition-all duration-500 group-hover:border-orange-500/30 group-hover:shadow-[0_0_30px_rgba(249,115,22,0.15)]">
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(249,115,22,0.03)_1px,transparent_1px)] bg-[length:24px_24px]" />
                
                <div className="absolute inset-0 overflow-hidden rounded-2xl">
                  <img 
                    src={project.image} 
                    alt={`${project.title} preview`}
                    className="absolute inset-0 w-full h-full object-cover grayscale opacity-50 group-hover:grayscale-0 group-hover:opacity-100 transition-all duration-700 ease-out group-hover:scale-105"
                    onError={(e) => { 
                      e.currentTarget.style.display = 'none';
                      e.currentTarget.nextSibling.style.display = 'flex';
                    }}
                  />

                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                  
                  <div className="absolute inset-0 flex-col items-center justify-center hidden">
                    <span className="text-gray-500 text-sm font-mono">[ Missing Image ]</span>
                  </div>
                </div>
              </div>


              <div className="lg:col-span-6 relative z-10 lg:pl-6">
                <div className="flex flex-wrap gap-2 mb-5">
                  {project.tech.map((t) => (
                    <span
                      key={t}
                      className="text-[11px] font-mono px-3 py-1 bg-white/5 border border-white/10 group-hover:border-orange-500/30 group-hover:text-orange-300 transition-colors text-gray-400 rounded-full tracking-wider uppercase"
                    >
                      {t}
                    </span>
                  ))}
                </div>

                <h4 className="text-2xl md:text-3xl font-bold text-white mb-4 group-hover:text-orange-400 group-hover:translate-x-1 transition-all duration-300">
                  {project.title}
                </h4>
                
                <p className="text-base text-gray-400 mb-6 leading-relaxed">
                  {project.description}
                </p>

                <div className="mb-8 p-4 rounded-xl bg-white/5 border border-white/10 border-l-2 border-l-orange-500 group-hover:bg-orange-500/5 transition-colors">
                  <div className="text-xs text-orange-400 uppercase tracking-widest mb-1 font-semibold">Impact</div>
                  <div className="text-sm text-white font-medium">{project.impact}</div>
                </div>

                <div className="flex flex-wrap items-center gap-4 sm:gap-6">
                  <a href={project.live} target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 text-white font-medium group/link border-b border-orange-500/30 pb-0.5 hover:border-orange-500 hover:text-orange-400 transition-colors">
                    <span className="text-sm">Live Preview</span>
                    <svg className="w-4 h-4 transform group-hover/link:translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                    </svg>
                  </a>
                  <a href={project.github} target="_blank" rel="noreferrer" className="text-gray-500 hover:text-orange-300 transition-colors text-sm">
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
