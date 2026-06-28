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
    <section id="experience" className="py-20 border-t border-[#E5E5E5] max-w-4xl mx-auto px-6 relative bg-white">
      <div>
        
        <div className="mb-10">
          <motion.h2 
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-[11px] font-semibold text-[#E23744] tracking-[0.15em] uppercase mb-2"
          >
            Career
          </motion.h2>
          <motion.h3 
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, delay: 0.1 }}
            className="text-[56px] font-bold text-[#1C1C1C] leading-[1.05]"
          >
            Professional <span className="font-light text-[#999]">Experience.</span>
          </motion.h3>
        </div>

        <div className="relative before:absolute before:left-0 before:top-0 before:w-[2px] before:h-full before:bg-[#E5E5E5] ml-4 md:ml-6">
          {experiences.map((exp, i) => {
            const isExpanded = expandedIndex === i;

            return (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className="relative pl-10 mb-10 w-full group"
              >
                {/* Red dot on timeline node (top-[28px]) */}
                <div className="absolute left-[-5px] top-[28px] w-3 h-3 rounded-full bg-[#E23744] border-2 border-white z-10 transition-transform group-hover:scale-125" />
                
                <div 
                  onClick={() => setExpandedIndex(isExpanded ? null : i)}
                  className="w-full bg-white border border-[#E5E5E5] rounded-xl p-6 cursor-pointer hover:border-[#E23744] hover:border-l-[4px] transition-all duration-300 select-none"
                >
                  <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-2">
                    <h4 className="text-[20px] font-bold text-[#1C1C1C] group-hover:text-[#E23744] transition-colors duration-300">{exp.role}</h4>
                    <span className="text-[13px] text-[#999] mt-1 sm:mt-0 font-medium">{exp.period}</span>
                  </div>
                  <div className="text-[14px] text-[#E23744] font-medium mb-3">{exp.company}</div>
                  <p className="text-[#666666] text-sm mb-2">{exp.description}</p>
                  
                  <div className="text-[11px] font-semibold text-[#E23744] uppercase tracking-widest mt-3 flex items-center gap-1.5 cursor-pointer">
                    <span>{isExpanded ? "Click to collapse" : "Click to view achievements"}</span>
                    <svg 
                      className={`w-3.5 h-3.5 text-[#E23744] transform transition-transform duration-300 ${isExpanded ? "rotate-180" : ""}`}
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
                        className="space-y-2 mt-4 pt-4 border-t border-[#E5E5E5] overflow-hidden"
                      >
                        {exp.achievements.map((achieve, j) => (
                          <li key={j} className="text-sm text-gray-600 flex items-start gap-2">
                            <span className="text-[#E23744] mt-0.5 font-semibold">▹</span>
                            <span>{achieve}</span>
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
