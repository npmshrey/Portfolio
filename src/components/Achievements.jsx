import { useRef } from "react";
import { motion } from "framer-motion";

export default function Achievements() {
  const container = useRef(null);

  const hackathons = [
    {
      title: "SIH 2025",
      subtitle: "Hackathon Champion",
      image: "/images/sih2025.jpeg", 
      certificate: "View Certificate",
      link: "/images/certificates/SIH2025-Certificate.jpeg"
    },
    {
      title: "Hackstreet 2024",
      subtitle: "Winner",
      image: "/images/HackStreet2024.jpeg",
      certificate: "View Certificate",
      link: "public/images/certificates/HackStreet-Certificate.jpeg"
    },
    {
      title: "HackArCode 2024",
      subtitle: "Winner",
      image: "/images/HackArCode2024.jpeg",
      certificate: "View Certificate",
      link: "/images/certificates/HackArCode-Certificate.jpeg"
    }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 40 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.7, ease: "easeOut" } }
  };

  return (
    <section id="achievements" className="py-32 relative bg-white overflow-hidden z-10" ref={container}>
      <div className="max-w-7xl mx-auto px-6">
        
        <div className="mb-16 text-left">
          <div className="max-w-xl">
            <motion.h2 
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-sm font-semibold text-[#E23744] tracking-wider uppercase mb-3"
            >
              Accolades
            </motion.h2>
            <motion.h3 
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, delay: 0.1 }}
              className="text-4xl sm:text-5xl md:text-6xl font-black text-[#111111] tracking-tight"
            >
              Hackathon Victories.
            </motion.h3>
          </div>
        </div>

        <motion.div 
          className="grid md:grid-cols-3 gap-8"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
        >
          {hackathons.map((item, i) => (
            <motion.a 
              key={i} 
              href={item.link}
              target="_blank"
              rel="noreferrer"
              variants={itemVariants}
              className="hackathon-card group relative h-[400px] rounded-3xl bg-white border border-gray-200 border-l-4 border-l-transparent hover:border-l-[#E23744] overflow-hidden transition-all duration-500 hover:shadow-lg hover:-translate-y-1 block"
            >
              <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(226,55,68,0.02)_1px,transparent_1px)] bg-[length:24px_24px]" />
              
              <img 
                src={item.image} 
                alt={item.title}
                className="absolute inset-0 w-full h-full object-cover transition-all duration-700 ease-out group-hover:scale-110"
                onError={(e) => { 
                  e.currentTarget.style.display = 'none';
                  e.currentTarget.nextSibling.style.display = 'flex';
                }}
              />
              
              <div className="absolute inset-0 hidden flex-col items-center justify-center text-center px-4">
                <svg width="32" height="32" viewBox="0 0 24 24" fill="none" className="text-gray-400 mb-3" stroke="currentColor" strokeWidth="1.5">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
                </svg>
                <span className="text-gray-400 text-sm font-mono">[ Missing Image ]</span>
                <span className="text-gray-400 text-xs mt-2 font-mono">public{item.image}</span>
              </div>

              {/* White bottom gradient overlay to blend into the card text area */}
              <div className="absolute inset-0 bg-gradient-to-t from-white via-white/80 to-transparent opacity-100 transition-opacity duration-500" />
              
              <div className="absolute inset-0 p-8 flex flex-col justify-end z-10">
                <h4 className="text-2xl font-bold text-[#111111] group-hover:text-[#E23744] group-hover:translate-x-1 transition-all duration-300">
                  {item.title}
                </h4>
                <p className="text-gray-600 font-medium mt-1 mb-4">
                  {item.subtitle}
                </p>
                
                <div className="inline-flex items-center gap-2 text-sm text-[#E23744] font-medium border-t border-gray-150 pt-4 mt-auto opacity-0 translate-y-4 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-300 delay-75">
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M12 15l8.38-4.68a2 2 0 000-3.53l-8.38-4.68a2 2 0 00-1.76 0l-8.38 4.68a2 2 0 000 3.53L12 15z"/>
                    <path d="M14 17.5v2.81a2 2 0 01-1.11 1.79l-1.78.89a2 2 0 01-1.79 0l-1.78-.89A2 2 0 016.43 20.31V17.5"/>
                  </svg>
                  {item.certificate}
                </div>
              </div>
            </motion.a>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
