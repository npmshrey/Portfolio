import { motion } from "framer-motion";

export default function Skills() {
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
    <section id="skills" className="py-32 bg-white relative">
      <div className="max-w-7xl mx-auto px-6">
        <div className="mb-16 text-left">
          <motion.h2 
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-sm font-semibold text-[#E23744] tracking-wider uppercase mb-3"
          >
            Capabilities
          </motion.h2>
          <motion.h3 
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, delay: 0.1 }}
            className="text-4xl sm:text-5xl md:text-6xl font-black text-[#111111] tracking-tight"
          >
            Technical Arsenal.
          </motion.h3>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {customCategories.map((category, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="bg-white border border-gray-200 border-l-4 border-l-transparent hover:border-l-[#E23744] hover:shadow-md transition-all duration-300 flex flex-col h-full rounded-3xl p-8"
            >
              <h4 className="text-lg font-bold text-[#111111] mb-6 flex items-center gap-3">
                <span className="w-8 h-px bg-[#E23744] block"></span>
                {category.title}
              </h4>
              <div className="flex flex-wrap gap-2 mt-auto">
                {category.skills.map((skill, j) => (
                  <span
                    key={j}
                    className="px-3 py-1.5 bg-gray-100 border border-transparent text-[#111111] text-sm rounded-lg hover:bg-[#E23744] hover:text-white transition-all duration-200 cursor-default font-semibold"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
