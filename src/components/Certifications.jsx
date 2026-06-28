import { motion } from "framer-motion";

export default function Certifications() {
  return (
    <div id="certifications" className="w-full">
      <div className="mb-10">
        <motion.h2 
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-[11px] font-semibold text-[#E23744] tracking-[0.15em] uppercase mb-2"
        >
          Credentials
        </motion.h2>
        <motion.h3 
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, delay: 0.1 }}
          className="text-[40px] font-bold text-[#1C1C1C] leading-[1.05]"
        >
          Professional Certifications.
        </motion.h3>
      </div>

      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="flex flex-col gap-6"
      >
        <a 
          href="/Devops Certificate.pdf" 
          target="_blank" 
          rel="noreferrer"
          className="bg-white border border-[#E5E5E5] p-6 flex items-start gap-4 rounded-xl group hover:border-[#E23744] hover:border-l-[4px] transition-all duration-300 cursor-pointer block"
        >
          <div className="w-10 h-10 rounded-full bg-[#FFF8F8] flex items-center justify-center shrink-0">
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" className="text-[#E23744] block" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><path d="M12 15l8.38-4.68a2 2 0 000-3.53l-8.38-4.68a2 2 0 00-1.76 0l-8.38 4.68a2 2 0 000 3.53L12 15z"/><path d="M14 17.5v2.81a2 2 0 01-1.11 1.79l-1.78.89a2 2 0 01-1.79 0l-1.78-.89A2 2 0 016.43 20.31V17.5"/></svg>
          </div>
          <div>
            <h5 className="text-[#1C1C1C] font-semibold text-lg leading-tight group-hover:text-[#E23744] transition-colors flex items-center gap-1.5">
              Oracle Cloud Infrastructure 2025 Certified DevOps Professional
              <svg className="w-4 h-4 opacity-40 group-hover:opacity-100 transition-opacity text-[#E23744]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2.5"><path strokeLinecap="round" strokeLinejoin="round" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" /></svg>
            </h5>
            <p className="text-[#666666] text-sm mt-1.5 font-light">Validated expertise in containerised deployments, CI/CD, and Kubernetes, directly applicable to high-scale production environments.</p>
          </div>
        </a>
        
        <a 
          href="/Anthropic Certificate.pdf" 
          target="_blank" 
          rel="noreferrer"
          className="bg-white border border-[#E5E5E5] p-6 flex items-start gap-4 rounded-xl group hover:border-[#E23744] hover:border-l-[4px] transition-all duration-300 cursor-pointer block"
        >
          <div className="w-10 h-10 rounded-full bg-[#FFF8F8] flex items-center justify-center shrink-0">
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" className="text-[#E23744] block" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><path d="M12 15l8.38-4.68a2 2 0 000-3.53l-8.38-4.68a2 2 0 00-1.76 0l-8.38 4.68a2 2 0 000 3.53L12 15z"/><path d="M14 17.5v2.81a2 2 0 01-1.11 1.79l-1.78.89a2 2 0 01-1.79 0l-1.78-.89A2 2 0 016.43 20.31V17.5"/></svg>
          </div>
          <div>
            <h5 className="text-[#1C1C1C] font-semibold text-lg leading-tight group-hover:text-[#E23744] transition-colors flex items-center gap-1.5">
              Anthropic Claude Code in Action Certified
              <svg className="w-4 h-4 opacity-40 group-hover:opacity-100 transition-opacity text-[#E23744]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2.5"><path strokeLinecap="round" strokeLinejoin="round" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" /></svg>
            </h5>
            <p className="text-[#666666] text-sm mt-1.5 font-light">Proficiency in AI-assisted development workflows using the Claude Code CLI tool.</p>
          </div>
        </a>
      </motion.div>
    </div>
  );
}
