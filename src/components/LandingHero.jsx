import { useRef } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";

export default function LandingHero() {
  const heroRef = useRef(null);

  useGSAP(() => {
    // Line-by-line text reveal
    gsap.fromTo(
      ".hero-line",
      { y: 100, opacity: 0 },
      {
        y: 0,
        opacity: 1,
        duration: 1.2,
        ease: "power4.out",
        stagger: 0.2,
      }
    );

    // Fade in other elements
    gsap.fromTo(
      [".hero-badge", ".hero-subtitle", ".hero-actions", ".hero-stats"],
      { y: 30, opacity: 0 },
      {
        y: 0,
        opacity: 1,
        duration: 1,
        ease: "power3.out",
        stagger: 0.15,
        delay: 0.3,
      }
    );
  }, { scope: heroRef });

  const stats = [
    { value: "3", label: "Hackathon Wins" },
    { value: "3+", label: "Projects Shipped" },
    { value: "2+", label: "Years Building" }
  ];

  const technologies = [
    { name: "React.js", logo: "/images/logos/react.png" },
    { name: "Next.js", logo: "/images/logos/nextjs.png" },
    { name: "Node.js", logo: "/images/logos/node.png" },
    { 
      name: "JavaScript", 
      icon: (
        <svg className="w-4 h-4 fill-[#F7DF1E]" viewBox="0 0 24 24">
          <path d="M0 0h24v24H0V0z"/>
          <path d="M22.03 18.5c-.01-1.42-.8-2.48-2.32-3.06-1.03-.39-1.64-.62-2.17-.94-.53-.32-.76-.65-.76-1.13 0-.71.53-1.16 1.39-1.16.82 0 1.29.42 1.49 1.03h2.25c-.2-.94-.68-1.69-1.5-2.12-.84-.45-1.92-.59-2.73-.38-.75.19-1.55.6-2 .12.4-.7 1.03-1.52.82-2.31 0 1.64.98 2.5 2.56 3.1.83.31 1.82.58 2.35.9.53.31.89.72.89 1.33 0 .86-.67 1.36-1.75 1.36-1.05 0-1.69-.52-1.91-1.42h-2.28c.07 1.04.52 1.88 1.28 2.39.83.57 2.05.75 3.12.59.93-.14 1.77-.6 2.19-1.31.49-.83.58-1.8.58-2.65zM10.2 18.68c0-.76-.37-1.29-1.06-1.59-.65-.28-1.5-.47-2.15-.66-.8-.22-1.46-.43-1.89-.71-.42-.28-.67-.68-.67-1.14 0-.83.69-1.36 1.75-1.36.93 0 1.55.43 1.83.99h2.21c-.27-1.52-1.47-2.3-3.83-2.3-1.95 0-3.32.96-3.79 2.21-.19.51-.25 1.15-.25 1.74 0 1.39.67 2.22 1.94 2.76.77.33 1.76.56 2.56.77.8.21 1.49.46 1.85.73.36.27.55.67.55 1.14 0 .75-.59 1.31-1.63 1.31-.99 0-1.57-.45-1.82-1.15H1.12c.08.97.52 1.8 1.26 2.29.75.51 1.81.71 2.79.59.99-.12 1.88-.58 2.33-1.28.46-.71.7-1.56.7-2.31z"/>
        </svg>
      )
    },
    { 
      name: "Tailwind CSS", 
      icon: (
        <svg className="w-4 h-4 fill-[#38bdf8]" viewBox="0 0 24 24">
          <path d="M12.001 4.8c-3.2 0-5.2 1.6-6 4.8 1.2-1.6 2.6-2.2 4.2-1.8.913.228 1.565.89 2.288 1.624C13.666 10.618 15.027 12 18.001 12c3.2 0 5.2-1.6 6-4.8-1.2 1.6-2.6 2.2-4.2 1.8-.913-.228-1.565-.89-2.288-1.624C16.337 6.182 14.976 4.8 12.001 4.8zm-6 7.2c-3.2 0-5.2 1.6-6 4.8 1.2-1.6 2.6-2.2 4.2-1.8.913.228 1.565.89 2.288 1.624 1.177 1.194 2.538 2.576 5.512 2.576 3.2 0 5.2-1.6 6-4.8-1.2 1.6-2.6 2.2-4.2 1.8-.913-.228-1.565-.89-2.288-1.624C10.337 13.382 8.976 12 6.001 12z"/>
        </svg>
      )
    },
    { 
      name: "MongoDB", 
      icon: (
        <svg className="w-4 h-4 fill-[#47A248]" viewBox="0 0 24 24">
          <path d="M12 .002c-1.34 0-2.68.797-2.68 2.766v.02c0 2.056.96 4.908 2.2 7.643 1.258 2.775 2.66 5.253 2.66 7.025 0 2.072-1.34 3.018-2.68 3.52v-21.03c0-.14.05-.28.16-.36l.34-.23c-.02-.02-.04-.03-.06-.03V0zm0 0c1.34 0 2.68.797 2.68 2.766v.02c0 2.056-.96 4.908-2.2 7.643-1.258 2.775-2.66 5.253-2.66 7.025 0 2.072 1.34 3.018 2.68 3.52v-21.03c0-.14-.05-.28-.16-.36l-.34-.23c.02-.02.04-.03.06-.03V0zm-1.02.8v22.06c-3.1-1.07-5.18-3.41-5.18-5.83 0-1.74.96-3.8 2.21-6.17a42.92 42.92 0 0 0 2.97-10.06zm2.04 0c3.1 1.07 5.18 3.41 5.18 5.83 0 1.74-.96 3.8-2.21 6.17a42.92 42.92 0 0 1-2.97 10.06V.8z"/>
        </svg>
      )
    },
    { name: "Git", logo: "/images/logos/git.svg" },
    { name: "Python", logo: "/images/logos/python.svg" },
    { 
      name: "Docker", 
      icon: (
        <svg className="w-4 h-4 fill-[#2496ED]" viewBox="0 0 24 24">
          <path d="M13.983 11.078h2.119c.102 0 .186-.084.186-.186V8.773c0-.102-.084-.186-.186-.186h-2.119c-.102 0-.186.084-.186.186v2.119c0 .102.084.186.186.186zM11.266 11.078h2.119c.102 0 .186-.084.186-.186V8.773c0-.102-.084-.186-.186-.186h-2.119c-.102 0-.186.084-.186.186v2.119c0 .102.084.186.186.186zM11.266 8.358h2.119c.102 0 .186-.084.186-.186V6.053c0-.102-.084-.186-.186-.186h-2.119c-.102 0-.186.084-.186.186v2.119c0 .102.084.186.186.186zM8.577 11.078h2.119c.102 0 .186-.084.186-.186V8.773c0-.102-.084-.186-.186-.186H8.577c-.102 0-.186.084-.186.186v2.119c0 .102.084.186.186.186zM8.577 8.358h2.119c.102 0 .186-.084.186-.186V6.053c0-.102-.084-.186-.186-.186H8.577c-.102 0-.186.084-.186.186v2.119c0 .102.084.186.186.186zM5.89 11.078h2.119c.102 0 .186-.084.186-.186V8.773c0-.102-.084-.186-.186-.186H5.89c-.102 0-.186.084-.186.186v2.119c0 .102.084.186.186.186zM3.203 11.078h2.119c.102 0 .186-.084.186-.186V8.773c0-.102-.084-.186-.186-.186H3.203c-.102 0-.186.084-.186.186v2.119c0 .102.084.186.186.186zM13.983 8.358h2.119c.102 0 .186-.084.186-.186V6.053c0-.102-.084-.186-.186-.186h-2.119c-.102 0-.186.084-.186.186v2.119c0 .102.084.186.186.186zM23.955 12.35c-.525-.815-1.428-1.305-2.45-1.305h-.625v-1.39c0-.102-.084-.186-.186-.186h-2.119c-.102 0-.186.084-.186.186v1.39h-1.63v2.119h6.417c.102 0 .186-.084.186-.186v-.629zM.2 13.062c.023.28.163.535.39.712.592.464 1.32.71 2.066.71h19.578c.11 0 .216-.03.312-.087.27-.162.434-.457.434-.775 0-.318-.164-.613-.434-.775-.096-.057-.202-.087-.312-.087H.311c-.064 0-.127.012-.186.035-.256.09-.41.353-.41.614v.398z"/>
        </svg>
      )
    },
    { 
      name: "Framer Motion", 
      icon: (
        <svg className="w-4 h-4 fill-white" viewBox="0 0 24 24">
          <path d="M24 0H0v12h12L24 0zM0 24h24V12H12L0 24z"/>
        </svg>
      )
    },
  ];

  return (
    <section ref={heroRef} className="relative min-h-screen flex flex-col justify-between bg-black pt-24 overflow-hidden">
      {/* Ambient Radial Glow */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_50%_-10%,rgba(167,139,250,0.12),transparent_70%)] pointer-events-none z-0" />
      
      {/* Grid background */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.03)_1px,transparent_1px)] bg-[size:80px_80px] pointer-events-none z-0" />
      
      <div className="max-w-7xl w-full mx-auto px-8 grid lg:grid-cols-2 gap-8 lg:gap-0 items-center relative z-10 flex-1">
        
        {/* Left Column */}
        <div className="flex flex-col justify-center">
          {/* Eyebrow Badge */}
          <div className="hero-badge inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/5 border border-white/10 text-xs font-medium text-gray-300 uppercase tracking-widest mb-6 w-fit select-none">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-green-500"></span>
            </span>
            Full Stack Developer
          </div>

          {/* Main Headline */}
          <h1 className="text-[clamp(44px,6.5vw,90px)] font-light text-white tracking-[-0.04em] leading-[1.05] mb-6 select-none">
            <div className="overflow-hidden py-1">
              <span className="hero-line inline-block">Not just a developer.</span>
            </div>
            <div className="overflow-hidden py-1">
              <span className="hero-line inline-block text-gray-400">A builder.</span>
            </div>
          </h1>

          {/* Subtitle */}
          <p className="hero-subtitle text-lg sm:text-xl text-gray-400 max-w-[580px] font-light leading-relaxed mb-8">
            Shreyanshu Kumar // I engineer high-performance web applications with a focus on polished UI, resilient architecture, and measurable impact. Based in Ghaziabad, India.
          </p>

          {/* CTAs */}
          <div className="hero-actions flex flex-wrap gap-4 items-center mb-10">
            <a
              href="#projects"
              className="bg-[#E23744] hover:bg-[#c4303b] text-white rounded-full px-8 py-4 font-semibold text-[15px] transition-colors duration-200 cursor-pointer shadow-[0_4px_20px_rgba(226,55,68,0.25)]"
            >
              View Projects
            </a>
            <a
              href="/SHREYANSHU.pdf"
              target="_blank"
              rel="noreferrer"
              className="glass-card hover:bg-white/10 text-white rounded-full px-8 py-4 font-medium text-[15px] transition-all duration-200"
            >
              Download Resume
            </a>
          </div>

          {/* Stats Row */}
          <div className="hero-stats flex gap-10 flex-wrap items-center">
            {stats.map((stat, idx) => (
              <div key={idx} className="flex items-center gap-10">
                <div className="flex flex-col">
                  <span className="text-[28px] font-bold text-white leading-none">
                    {stat.value}
                  </span>
                  <span className="text-[12px] text-gray-400 mt-1 font-medium whitespace-nowrap">
                    {stat.label}
                  </span>
                </div>
                {idx < stats.length - 1 && (
                  <div className="w-px h-8 bg-white/10 self-center" />
                )}
              </div>
            ))}
          </div>
        </div>

        {/* Right Column: Profile Image */}
        <div className="hidden lg:flex justify-center items-center relative">
          <div className="absolute w-[450px] h-[450px] rounded-full bg-[#E23744]/5 blur-[80px] pointer-events-none" />
          <div className="w-[clamp(280px,32vw,400px)] h-[clamp(280px,32vw,400px)] rounded-full overflow-hidden border border-white/10 bg-black group cursor-pointer relative z-10 transition-colors duration-300 hover:border-[#E23744]/40">
            <img 
              src="/images/profile.jpeg" 
              alt="Shreyanshu Kumar" 
              className="w-full h-full object-cover object-[center_top] grayscale group-hover:grayscale-0 transition-all duration-700 ease-in-out scale-105 group-hover:scale-100"
            />
          </div>
        </div>

      </div>

      {/* Continuous Marquee Ticker */}
      <div className="w-full border-t border-white/5 py-5 overflow-hidden bg-black/40 backdrop-blur-sm relative z-20 mt-12 select-none">
        <div className="animate-marquee flex gap-8 whitespace-nowrap">
          <div className="flex items-center gap-8 shrink-0">
            {technologies.map((tech, idx) => (
              <div key={idx} className="flex items-center gap-2.5 px-5 py-2 bg-white/[0.03] border border-white/10 rounded-full hover:border-[#E23744]/40 hover:bg-white/[0.05] transition-all duration-300">
                {tech.logo ? (
                  <img src={tech.logo} alt={tech.name} className="w-4 h-4 object-contain" />
                ) : (
                  tech.icon
                )}
                <span className="text-xs font-semibold tracking-wide text-gray-200">{tech.name}</span>
              </div>
            ))}
          </div>
          <div className="flex items-center gap-8 shrink-0">
            {technologies.map((tech, idx) => (
              <div key={`dup-${idx}`} className="flex items-center gap-2.5 px-5 py-2 bg-white/[0.03] border border-white/10 rounded-full hover:border-[#E23744]/40 hover:bg-white/[0.05] transition-all duration-300">
                {tech.logo ? (
                  <img src={tech.logo} alt={tech.name} className="w-4 h-4 object-contain" />
                ) : (
                  tech.icon
                )}
                <span className="text-xs font-semibold tracking-wide text-gray-200">{tech.name}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
