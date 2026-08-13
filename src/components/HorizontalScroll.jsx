import { useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";

gsap.registerPlugin(ScrollTrigger);

export default function HorizontalScroll() {
  const wrapperRef = useRef(null);
  const trackRef = useRef(null);

  useGSAP(
    (context) => {
      const track = trackRef.current;
      const wrapper = wrapperRef.current;

      const mm = gsap.matchMedia();

      // Desktop animation: screens >= 768px
      mm.add("(min-width: 768px)", () => {
        // Pin the wrapper and translate the track horizontally
        const tl = gsap.to(track, {
          xPercent: -75, // Since there are 4 panels, we shift by 3 of them (3 * 25% of the 400% track = 75%)
          ease: "none",
          scrollTrigger: {
            trigger: wrapper,
            pin: true,
            scrub: 1,
            start: "top top",
            end: () => `+=${window.innerHeight * 3}`, // 3 full screens of scroll
            invalidateOnRefresh: true,
          },
        });

        // Stagger panel content entrance as they scroll into view
        const panels = gsap.utils.toArray(".horizontal-panel");
        panels.forEach((panel, index) => {
          if (index === 0) return; // First panel is already in view

          gsap.fromTo(
            panel.querySelectorAll(".animate-slide-in"),
            { opacity: 0, y: 40 },
            {
              opacity: 1,
              y: 0,
              duration: 0.8,
              ease: "power2.out",
              scrollTrigger: {
                trigger: panel,
                containerAnimation: tl, // Hook animations to the horizontal timeline!
                start: "left 70%",
                toggleActions: "play none none reverse",
              },
            }
          );
        });
      });

      // Cleanup
      return () => {
        mm.revert();
        context.revert();
      };
    },
    { scope: wrapperRef }
  );

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

  const hackathons = [
    {
      title: "SIH 2025",
      subtitle: "Hackathon Champion",
      link: "/images/certificates/SIH2025-Certificate.jpeg"
    },
    {
      title: "Hackstreet 2024",
      subtitle: "Winner",
      link: "public/images/certificates/HackStreet-Certificate.jpeg"
    },
    {
      title: "HackArCode 2024",
      subtitle: "Winner",
      link: "/images/certificates/HackArCode-Certificate.jpeg"
    }
  ];

  return (
    <div ref={wrapperRef} className="relative w-full overflow-x-hidden md:overflow-visible">
      {/* Scroll Wrapper */}
      <div 
        ref={trackRef} 
        className="flex flex-col md:flex-row w-full md:w-[400vw] h-auto md:h-screen bg-black text-white relative z-10"
      >
        {/* Panel 01: About Me */}
        <section id="about" className="horizontal-panel w-full md:w-[100vw] h-auto md:h-screen shrink-0 flex items-center py-20 md:py-0 px-8 sm:px-16 md:px-24 relative border-b md:border-b-0 md:border-r border-white/5">
          {/* Ambient Glow */}
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_30%,rgba(226,55,68,0.04),transparent_50%)] pointer-events-none" />
          <div className="absolute top-10 right-10 text-[10rem] md:text-[14rem] font-bold text-white/[0.02] select-none leading-none pointer-events-none font-mono">
            01
          </div>

          <div className="max-w-4xl w-full mx-auto relative z-10">
            <h2 className="text-[11px] font-semibold text-[#E23744] tracking-[0.2em] uppercase mb-4">
              01 // PHILOSOPHY
            </h2>
            <h3 className="text-4xl sm:text-5xl md:text-6xl font-bold leading-tight tracking-tight mb-8">
              About <span className="font-light text-[#999999]">Me.</span>
            </h3>
            
            <div className="glass-card p-8 md:p-12 relative overflow-hidden group">
              <div className="absolute top-0 left-0 w-1 h-full bg-[#E23744]" />
              <blockquote className="text-xl sm:text-2xl md:text-3xl italic font-light text-gray-300 leading-relaxed mb-6">
                “I believe that great engineering is about more than just writing code—it's about architecting scalable solutions that deliver measurable value. From conceptualizing the architecture to refining the final micro-interactions, I bring a performance-driven approach to every project.”
              </blockquote>
              <div className="flex flex-wrap gap-2.5 mt-8">
                <span className="px-4 py-1.5 rounded-full text-xs font-semibold uppercase tracking-wider bg-white/5 border border-white/10 text-gray-300">Based in Ghaziabad, India</span>
                <span className="px-4 py-1.5 rounded-full text-xs font-semibold uppercase tracking-wider bg-white/5 border border-white/10 text-gray-300">Full Stack Developer</span>
                <span className="px-4 py-1.5 rounded-full text-xs font-semibold uppercase tracking-wider bg-white/5 border border-white/10 text-gray-300">Accustomed to High Scale</span>
              </div>
            </div>
          </div>
        </section>

        {/* Panel 02: Experience */}
        <section id="experience" className="horizontal-panel w-full md:w-[100vw] h-auto md:h-screen shrink-0 flex items-center py-20 md:py-0 px-8 sm:px-16 md:px-24 relative border-b md:border-b-0 md:border-r border-white/5">
          {/* Ambient Glow */}
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_80%_20%,rgba(167,139,250,0.04),transparent_50%)] pointer-events-none" />
          <div className="absolute top-10 right-10 text-[10rem] md:text-[14rem] font-bold text-white/[0.02] select-none leading-none pointer-events-none font-mono">
            02
          </div>

          <div className="max-w-5xl w-full mx-auto relative z-10">
            <h2 className="text-[11px] font-semibold text-[#E23744] tracking-[0.2em] uppercase mb-4 animate-slide-in">
              02 // CAREER
            </h2>
            <h3 className="text-4xl sm:text-5xl md:text-6xl font-bold leading-tight tracking-tight mb-8 animate-slide-in">
              Work <span className="font-light text-[#999999]">Experience.</span>
            </h3>

            <div className="grid md:grid-cols-2 gap-6 animate-slide-in">
              {/* Campus Pull */}
              <div className="glass-card p-6 md:p-8 hover:border-white/20 transition-all duration-300 flex flex-col justify-between relative group overflow-hidden">
                <div className="absolute top-0 left-0 w-full h-[2px] bg-[#E23744] transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left" />
                <div>
                  <div className="flex justify-between items-start mb-4">
                    <div>
                      <h4 className="text-lg md:text-xl font-bold text-white group-hover:text-[#E23744] transition-colors duration-300">
                        Frontend Engineer Intern
                      </h4>
                      <p className="text-sm text-gray-400 mt-1">
                        <a 
                          href="https://campuspull.in" 
                          target="_blank" 
                          rel="noreferrer" 
                          className="hover:underline hover:text-[#E23744]"
                        >
                          Campus-Pull ↗
                        </a>
                      </p>
                    </div>
                    <span className="text-xs bg-white/5 border border-white/10 px-2.5 py-1 rounded-full text-gray-400 font-mono">
                      Mar 2026 – Present
                    </span>
                  </div>
                  <p className="text-sm text-gray-400 leading-relaxed font-light mb-4">
                    Architected frontend features and real-time systems, focusing on chat, interactive tools, authentication, and global state optimization.
                  </p>
                  <ul className="text-xs text-gray-400 space-y-2 font-light list-disc list-inside">
                    <li>Built P2P chat using Socket.IO with receipts & attachments.</li>
                    <li>Developed Resources Hub dashboard with URL-synced search.</li>
                    <li>Engineered custom canvas-based client-side profile image cropper.</li>
                  </ul>
                </div>
              </div>

              {/* ML Trainee */}
              <div className="glass-card p-6 md:p-8 hover:border-white/20 transition-all duration-300 flex flex-col justify-between relative group overflow-hidden">
                <div className="absolute top-0 left-0 w-full h-[2px] bg-[#E23744] transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left" />
                <div>
                  <div className="flex justify-between items-start mb-4">
                    <div>
                      <h4 className="text-lg md:text-xl font-bold text-white group-hover:text-[#E23744] transition-colors duration-300">
                        ML Trainee
                      </h4>
                      <p className="text-sm text-gray-400 mt-1">
                        Global Infoventures (NVIDIA DGX-A100)
                      </p>
                    </div>
                    <span className="text-xs bg-white/5 border border-white/10 px-2.5 py-1 rounded-full text-gray-400 font-mono">
                      Sep 2025 – Apr 2026
                    </span>
                  </div>
                  <p className="text-sm text-gray-400 leading-relaxed font-light mb-4">
                    Worked on high-performance Machine Learning systems and deployment workflows on enterprise hardware.
                  </p>
                  <ul className="text-xs text-gray-400 space-y-2 font-light list-disc list-inside">
                    <li>Utilized NVIDIA DGX-A100 systems for training models.</li>
                    <li>Deployed containerized ML pipelines with Docker and Kubeflow.</li>
                    <li>Developed scalable multi-person face recognition systems.</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Panel 03: Skills */}
        <section id="technical-arsenal" className="horizontal-panel w-full md:w-[100vw] h-auto md:h-screen shrink-0 flex items-center py-20 md:py-0 px-8 sm:px-16 md:px-24 relative border-b md:border-b-0 md:border-r border-white/5">
          {/* Ambient Glow */}
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_70%,rgba(226,55,68,0.03),transparent_50%)] pointer-events-none" />
          <div className="absolute top-10 right-10 text-[10rem] md:text-[14rem] font-bold text-white/[0.02] select-none leading-none pointer-events-none font-mono">
            03
          </div>

          <div className="max-w-5xl w-full mx-auto relative z-10">
            <h2 className="text-[11px] font-semibold text-[#E23744] tracking-[0.2em] uppercase mb-4 animate-slide-in">
              03 // CAPABILITIES
            </h2>
            <h3 className="text-4xl sm:text-5xl md:text-6xl font-bold leading-tight tracking-tight mb-8 animate-slide-in">
              Technical <span className="font-light text-[#999999]">Arsenal.</span>
            </h3>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 animate-slide-in">
              {customCategories.map((category, idx) => (
                <div key={idx} className="glass-card p-5 flex flex-col justify-between hover:border-white/20 transition-colors duration-200">
                  <div>
                    <h4 className="text-sm font-semibold text-white uppercase tracking-wider border-b border-white/5 pb-3 mb-4">
                      {category.title}
                    </h4>
                    <div className="flex flex-wrap gap-1.5">
                      {category.skills.map((skill, j) => (
                        <span 
                          key={j} 
                          className="px-2.5 py-1 bg-white/[0.02] border border-white/5 text-gray-300 text-xs rounded-full hover:bg-[#E23744]/20 hover:border-[#E23744]/40 hover:text-white transition-all duration-200 font-mono"
                        >
                          {skill}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Panel 04: Edge & Credentials */}
        <section id="credentials" className="horizontal-panel w-full md:w-[100vw] h-auto md:h-screen shrink-0 flex items-center py-20 md:py-0 px-8 sm:px-16 md:px-24 relative border-b md:border-b-0 border-white/5">
          {/* Ambient Glow */}
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_80%,rgba(167,139,250,0.03),transparent_50%)] pointer-events-none" />
          <div className="absolute top-10 right-10 text-[10rem] md:text-[14rem] font-bold text-white/[0.02] select-none leading-none pointer-events-none font-mono">
            04
          </div>

          <div className="max-w-5xl w-full mx-auto relative z-10">
            <h2 className="text-[11px] font-semibold text-[#E23744] tracking-[0.2em] uppercase mb-4 animate-slide-in">
              04 // CREDENTIALS
            </h2>
            <h3 className="text-4xl sm:text-5xl md:text-6xl font-bold leading-tight tracking-tight mb-8 animate-slide-in">
              Accolades & <span className="font-light text-[#999999]">Credentials.</span>
            </h3>

            <div className="grid md:grid-cols-2 gap-6 animate-slide-in">
              {/* Accolades */}
              <div className="glass-card p-6 md:p-8 flex flex-col justify-between">
                <div>
                  <h4 className="text-sm font-semibold text-white uppercase tracking-wider border-b border-white/5 pb-3 mb-4 flex items-center gap-2">
                    <span className="w-1.5 h-1.5 bg-[#E23744] rounded-full animate-pulse" />
                    Hackathon Victories
                  </h4>
                  <div className="space-y-4">
                    {hackathons.map((h, i) => (
                      <a 
                        key={i} 
                        href={h.link} 
                        target="_blank" 
                        rel="noreferrer" 
                        className="flex justify-between items-center group/item hover:bg-white/[0.02] p-2 -mx-2 rounded-lg transition-colors"
                      >
                        <div>
                          <p className="text-sm font-semibold text-gray-200 group-hover/item:text-[#E23744] transition-colors">{h.title}</p>
                          <p className="text-xs text-gray-400 mt-0.5">{h.subtitle}</p>
                        </div>
                        <span className="text-xs text-[#E23744] font-medium opacity-0 group-hover/item:opacity-100 transition-opacity">
                          View Cert ↗
                        </span>
                      </a>
                    ))}
                  </div>
                </div>
              </div>

              {/* Certifications */}
              <div className="glass-card p-6 md:p-8 flex flex-col justify-between">
                <div>
                  <h4 className="text-sm font-semibold text-white uppercase tracking-wider border-b border-white/5 pb-3 mb-4 flex items-center gap-2">
                    <span className="w-1.5 h-1.5 bg-[#E23744] rounded-full animate-pulse" />
                    Professional Credentials
                  </h4>
                  <div className="space-y-4">
                    <a 
                      href="/Devops Certificate.pdf" 
                      target="_blank" 
                      rel="noreferrer"
                      className="block group/item hover:bg-white/[0.02] p-2 -mx-2 rounded-lg transition-colors"
                    >
                      <p className="text-sm font-semibold text-gray-200 group-hover/item:text-[#E23744] transition-colors">
                        OCI DevOps Professional (2025)
                      </p>
                      <p className="text-xs text-gray-400 mt-1">
                        Oracle Cloud Infrastructure Certified DevOps Professional
                      </p>
                    </a>
                    <a 
                      href="/Anthropic Certificate.pdf" 
                      target="_blank" 
                      rel="noreferrer"
                      className="block group/item hover:bg-white/[0.02] p-2 -mx-2 rounded-lg transition-colors"
                    >
                      <p className="text-sm font-semibold text-gray-200 group-hover/item:text-[#E23744] transition-colors">
                        Anthropic Claude Code Certified
                      </p>
                      <p className="text-xs text-gray-400 mt-1">
                        Anthropic Claude Code in Action Certified CLI expert
                      </p>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}
