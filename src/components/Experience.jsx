import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

export default function Experience() {
  const [expandedIndex, setExpandedIndex] = useState(null);

  const experiences = [
    {
      role: "Frontend Engineer Intern",
      company: "Campus-Pull",
      period: "Feb 2026 – Present",
      description: "Architected frontend features and real-time systems, focusing on chat, interactive tools, authentication, and global state optimization.",
      achievements: [
        "Built a real-time peer-to-peer chat system using Socket.IO with unread message tracking, read receipts, and multipart file attachment support via Axios FormData requests.",
        "Developed the Resources Hub dashboard (Study Notes, Roadmaps, Interview PYQs) with URL-synchronized search using useSearchParams, debounced filters by branch, semester, and difficulty to cut redundant API calls.",
        "Engineered role-based upload, edit, and delete controls for Admin, Teacher, Alumni, and Student roles; implemented guest browsing limits with dynamic auth prompts to improve conversion.",
        "Built a custom profile image cropper using HTML5 Canvas 2D API with pointer drag-and-resize events to crop and convert images to binary blobs client-side without any third-party library.",
        "Architected global state across 16 React Context providers (Auth, Socket, Chat, Notifications, Resources) and integrated Internship and Mentorship portals with live REST APIs and admin moderation dashboards."
      ]
    },
    {
      role: "ML Trainee",
      company: "Global Infoventures (NVIDIA DGX-A100)",
      period: "September 2025 – April 2026",
      description: "Worked on high-performance Machine Learning systems and deployment workflows.",
      achievements: [
        "Worked with NVIDIA DGX-A100 systems for high-performance machine learning workloads and experimentation.",
        "Performed data preprocessing, model training, and evaluation to improve model accuracy.",
        "Deployed containerized ML pipelines utilizing Docker and Kubeflow.",
        "Developed scalable multi-person face recognition systems."
      ]
    },
    {
      role: "Web Developer",
      company: "Zidio Development",
      period: "Aug 2024 – Oct 2024",
      description: "Full-stack web development utilizing the MERN stack.",
      achievements: [
        "Architected and deployed full-stack MERN web applications.",
        "Integrated robust REST APIs to bridge frontend UI and backend services.",
      ]
    }
  ];

  return (
    <section id="experience" className="py-16 md:py-24 bg-[#050505] relative">
      <div className="max-w-4xl mx-auto px-6">
        
        <div className="mb-16">
          <motion.h2 
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-sm font-semibold text-orange-500 tracking-wider uppercase mb-3"
          >
            Career
          </motion.h2>
          <motion.h3 
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, delay: 0.1 }}
            className="text-3xl sm:text-4xl md:text-5xl font-bold text-white tracking-tight"
          >
            Professional <span className="text-gray-500 font-light">Experience.</span>
          </motion.h3>
        </div>

        <div className="space-y-12 relative before:absolute before:inset-0 before:ml-5 before:-translate-x-px md:before:mx-auto md:before:translate-x-0 before:h-full before:w-0.5 before:bg-gradient-to-b before:from-transparent before:via-orange-500/20 before:to-transparent z-10">
          {experiences.map((exp, i) => {
            const isEven = i % 2 === 0;
            const isExpanded = expandedIndex === i;

            return (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className="relative w-full flex items-start group is-active"
              >
                <div className="absolute left-5 md:left-1/2 top-8 -translate-x-1/2 w-10 h-10 rounded-full border border-white/10 bg-[#050505] text-gray-400 shadow z-10 transition-colors duration-300 group-hover:border-orange-500 group-hover:bg-orange-500/10 flex items-center justify-center">
                  <div className="w-2 h-2 bg-orange-500 rounded-full group-hover:scale-[1.8] group-hover:bg-orange-400 group-hover:shadow-[0_0_10px_rgba(249,115,22,0.8)] transition-all duration-300" />
                </div>
                
                <div 
                  onClick={() => setExpandedIndex(isExpanded ? null : i)}
                  className={`w-[calc(100%-4rem)] ml-auto md:w-[calc(50%-3rem)] glass-card rounded-2xl p-6 cursor-pointer hover:border-orange-500/20 transition-all select-none ${isEven ? "md:mr-auto md:ml-0" : "md:ml-auto md:mr-0"}`}
                >
                  <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-2">
                    <h4 className="text-xl font-bold text-white group-hover:text-orange-400 transition-colors">{exp.role}</h4>
                    <span className="text-sm font-medium text-gray-400 mt-1 sm:mt-0">{exp.period}</span>
                  </div>
                  <div className="text-orange-500/80 font-medium mb-3 group-hover:text-orange-500 transition-colors">{exp.company}</div>
                  <p className="text-gray-300 text-sm mb-2">{exp.description}</p>
                  
                  <div className="text-[11px] font-mono text-orange-400/80 uppercase tracking-widest mt-3 flex items-center gap-1.5">
                    <span>{isExpanded ? "Click to collapse" : "Click to view achievements"}</span>
                    <svg 
                      className={`w-3 h-3 transform transition-transform duration-300 ${isExpanded ? "rotate-180" : ""}`}
                      fill="none" 
                      viewBox="0 0 24 24" 
                      stroke="currentColor" 
                      strokeWidth={2.5}
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
                    </svg>
                  </div>

                  <AnimatePresence initial={false}>
                    {isExpanded && (
                      <motion.ul 
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: "auto" }}
                        exit={{ opacity: 0, height: 0 }}
                        transition={{ duration: 0.3 }}
                        className="space-y-2 mt-4 pt-4 border-t border-white/5 overflow-hidden"
                      >
                        {exp.achievements.map((achieve, j) => (
                          <li key={j} className="text-sm text-gray-500 flex items-start gap-2">
                            <span className="text-orange-500/70 mt-0.5 opacity-70">▹</span>
                            <span className="text-gray-400">{achieve}</span>
                          </li>
                        ))}
                      </motion.ul>
                    )}
                  </AnimatePresence>
                </div>
              </motion.div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
