import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

export default function Skills() {
  const [activeCategory, setActiveCategory] = useState(0);

  const customCategories = [
    {
      title: "Languages & Frontend",
      skills: ["JavaScript (ES6+)", "C/C++", "React.js", "Redux", "HTML5", "CSS3", "Tailwind CSS", "Next.js", "Framer Motion"],
    },
    {
      title: "Backend & DB",
      skills: ["Node.js", "Express", "REST APIs", "WebSockets", "MongoDB", "SQL"],
    },
    {
      title: "Core Concepts",
      skills: ["Data Structures & Algorithms", "System Design (Basics)", "OOP", "Performance Optimization", "Machine Learning"],
    },
    {
      title: "Tools & Workflows",
      skills: ["Git/GitHub", "Docker", "Vite", "Postman", "Linux", "Responsive Design"],
    }
  ];

  return (
    <section id="technical-arsenal" className="py-20 border-t border-[#E5E5E5] bg-white relative">
      <div className="max-w-7xl mx-auto px-8">
        <div className="mb-10 text-left">
          <motion.h2 
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-[11px] font-semibold text-[#E23744] tracking-[0.15em] uppercase mb-2"
          >
            Capabilities
          </motion.h2>
          <motion.h3 
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, delay: 0.1 }}
            className="text-[56px] font-bold text-[#1C1C1C] leading-[1.05]"
          >
            Technical <span className="font-light text-[#999]">Arsenal.</span>
          </motion.h3>
        </div>

        <div className="mt-10 border border-[#E5E5E5] rounded-2xl overflow-hidden grid lg:grid-cols-12 bg-white">
          
          {/* Left panel - Desktop only (hidden on mobile) */}
          <div className="hidden lg:block lg:col-span-4 border-r border-[#E5E5E5] bg-white">
            {customCategories.map((category, idx) => {
              const isActive = activeCategory === idx;
              return (
                <div
                  key={idx}
                  onClick={() => setActiveCategory(idx)}
                  onMouseEnter={() => setActiveCategory(idx)}
                  className={`px-8 py-6 border-b border-[#E5E5E5] last:border-b-0 cursor-pointer text-[17px] font-medium transition-all duration-200 ${
                    isActive 
                      ? "text-[#E23744] bg-[#FFF8F8] border-l-[4px] border-l-[#E23744] pl-[28px]" 
                      : "text-[#555] border-l-[4px] border-l-transparent hover:text-[#E23744] hover:bg-gray-50"
                  }`}
                >
                  {category.title}
                </div>
              );
            })}
          </div>

          {/* Mobile Tab Strip (visible on mobile only) */}
          <div className="lg:hidden lg:col-span-12 flex overflow-x-auto gap-2 p-4 border-b border-[#E5E5E5] scrollbar-none bg-white">
            {customCategories.map((category, idx) => {
              const isActive = activeCategory === idx;
              return (
                <button
                  key={idx}
                  onClick={() => setActiveCategory(idx)}
                  className={`px-4 py-2 rounded-full text-[13px] font-medium whitespace-nowrap border transition-all duration-200 cursor-pointer ${
                    isActive 
                      ? "bg-[#E23744] text-white border-[#E23744]" 
                      : "bg-[#F5F5F5] text-[#555] border-[#E5E5E5] hover:bg-gray-100"
                  }`}
                >
                  {category.title}
                </button>
              );
            })}
          </div>

          {/* Right panel - Skill tag cloud */}
          <div className="lg:col-span-8 p-8 bg-white flex flex-col justify-center min-h-[300px]">
            <AnimatePresence mode="wait">
              <motion.div
                key={activeCategory}
                initial={{ opacity: 0, x: 12 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -12 }}
                transition={{ duration: 0.2 }}
                className="flex flex-wrap gap-2"
              >
                {customCategories[activeCategory].skills.map((skill, j) => (
                  <span
                    key={j}
                    className="inline-block px-4 py-2 bg-[#F5F5F5] text-[#1C1C1C] text-[14px] rounded-full hover:bg-[#E23744] hover:text-white transition-all duration-200 cursor-default font-medium"
                  >
                    {skill}
                  </span>
                ))}
              </motion.div>
            </AnimatePresence>
          </div>

        </div>
      </div>
    </section>
  );
}
