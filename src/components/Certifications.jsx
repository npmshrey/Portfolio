import { motion } from "framer-motion";

export default function Certifications() {
  return (
    <section id="certifications" className="py-16 md:py-24 bg-[#050505] relative border-t border-white/5">
      <div className="max-w-7xl mx-auto px-6">
        <div className="mb-12">
          <motion.h2 
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-sm font-semibold text-orange-500 tracking-wider uppercase mb-3"
          >
            Credentials
          </motion.h2>
          <motion.h3 
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, delay: 0.1 }}
            className="text-3xl sm:text-4xl md:text-5xl font-bold text-white tracking-tight"
          >
            Professional <span className="text-gray-500 font-light">Certifications.</span>
          </motion.h3>
        </div>

        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="grid md:grid-cols-2 gap-6"
        >
          <a 
            href="/Devops Certificate.pdf" 
            target="_blank" 
            rel="noreferrer"
            className="glass-card p-6 flex items-start gap-4 rounded-2xl group border border-white/5 hover:border-orange-500/20 transition-all cursor-pointer block"
          >
            <div className="w-10 h-10 rounded-full bg-orange-500/10 flex items-center justify-center shrink-0">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" className="text-orange-500 block" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><path d="M12 15l8.38-4.68a2 2 0 000-3.53l-8.38-4.68a2 2 0 00-1.76 0l-8.38 4.68a2 2 0 000 3.53L12 15z"/><path d="M14 17.5v2.81a2 2 0 01-1.11 1.79l-1.78.89a2 2 0 01-1.79 0l-1.78-.89A2 2 0 016.43 20.31V17.5"/></svg>
            </div>
            <div>
              <h5 className="text-white font-medium text-lg leading-tight group-hover:text-orange-400 transition-colors flex items-center gap-1.5">
                Oracle Cloud Infrastructure 2025 Certified DevOps Professional
                <svg className="w-4 h-4 opacity-40 group-hover:opacity-100 transition-opacity text-orange-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2.5"><path strokeLinecap="round" strokeLinejoin="round" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" /></svg>
              </h5>
              <p className="text-gray-400 text-sm mt-1">Validated expertise in containerised deployments, CI/CD, and Kubernetes, directly applicable to high-scale production environments.</p>
            </div>
          </a>
          
          <a 
            href="/Anthropic Certificate.pdf" 
            target="_blank" 
            rel="noreferrer"
            className="glass-card p-6 flex items-start gap-4 rounded-2xl group border border-white/5 hover:border-orange-500/20 transition-all cursor-pointer block"
          >
            <div className="w-10 h-10 rounded-full bg-orange-500/10 flex items-center justify-center shrink-0">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" className="text-orange-500 block" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><path d="M12 15l8.38-4.68a2 2 0 000-3.53l-8.38-4.68a2 2 0 00-1.76 0l-8.38 4.68a2 2 0 000 3.53L12 15z"/><path d="M14 17.5v2.81a2 2 0 01-1.11 1.79l-1.78.89a2 2 0 01-1.79 0l-1.78-.89A2 2 0 016.43 20.31V17.5"/></svg>
            </div>
            <div>
              <h5 className="text-white font-medium text-lg leading-tight group-hover:text-orange-400 transition-colors flex items-center gap-1.5">
                Anthropic Claude Code in Action Certified
                <svg className="w-4 h-4 opacity-40 group-hover:opacity-100 transition-opacity text-orange-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2.5"><path strokeLinecap="round" strokeLinejoin="round" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" /></svg>
              </h5>
              <p className="text-gray-400 text-sm mt-1">Proficiency in AI-assisted development workflows using the Claude Code CLI tool.</p>
            </div>
          </a>
        </motion.div>
      </div>
    </section>
  );
}
