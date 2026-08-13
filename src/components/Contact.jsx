import { useState, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";

gsap.registerPlugin(ScrollTrigger);

export default function Contact() {
  const [status, setStatus] = useState("");
  const containerRef = useRef(null);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus("sending...");
  
    setTimeout(() => {
      setStatus("success");
    }, 1000);
  };

  useGSAP(() => {
    // Reveal section heading
    gsap.fromTo(
      ".contact-heading",
      { opacity: 0, y: 30 },
      {
        opacity: 1,
        y: 0,
        duration: 0.8,
        ease: "power2.out",
        scrollTrigger: {
          trigger: ".contact-heading",
          start: "top 85%",
          toggleActions: "play none none reverse",
        },
      }
    );

    // Reveal form and social items
    gsap.fromTo(
      [".contact-socials-box", ".contact-form-box"],
      { opacity: 0, y: 50 },
      {
        opacity: 1,
        y: 0,
        duration: 0.8,
        ease: "power3.out",
        stagger: 0.15,
        scrollTrigger: {
          trigger: ".contact-content-grid",
          start: "top 85%",
          toggleActions: "play none none reverse",
        },
      }
    );
  }, { scope: containerRef });

  const socials = [
    {
      title: "LinkedIn",
      subtitle: "shreyanshu-gupta", 
      link: "https://www.linkedin.com/in/shreyanshu-gupta/",
      icon: (
        <svg viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5">
          <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
        </svg>
      )
    },
    {
      title: "X (Twitter)",
      subtitle: "npmshrey",
      link: "https://x.com/npmshrey",
      icon: (
        <svg viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5">
          <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
        </svg>
      )
    },
    {
      title: "Email",
      subtitle: "work.shreyanshu@gmail.com",
      link: "mailto:work.shreyanshu@gmail.com",
      icon: (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-5 h-5">
          <path d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"/>
        </svg>
      )
    },
    {
      title: "GitHub",
      subtitle: "@npmshrey",
      link: "https://github.com/npmshrey",
      icon: (
        <svg viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5">
          <path d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12"/>
        </svg>
      )
    }
  ];

  return (
    <section 
      ref={containerRef}
      id="contact" 
      className="py-24 border-t border-white/5 bg-black flex items-center relative overflow-hidden w-full"
    >
      {/* Ambient Glow */}
      <div className="absolute bottom-[-10%] left-1/2 -translate-x-1/2 w-[550px] h-[550px] rounded-full bg-[#E23744]/5 blur-[120px] pointer-events-none z-0" />

      <div className="max-w-6xl mx-auto px-8 relative z-10 w-full">
        
        {/* Section Headline */}
        <div className="contact-heading mb-16 text-left">
          <h2 className="text-[11px] font-semibold text-[#E23744] tracking-[0.2em] uppercase mb-3">
            06 // CONTACT
          </h2>
          <h3 className="text-4xl sm:text-5xl md:text-6xl font-bold leading-tight tracking-tight text-white">
            Let's <span className="font-light text-gray-400">Talk.</span>
          </h3>
        </div>

        <div className="contact-content-grid grid lg:grid-cols-12 gap-12 items-start">
          
          {/* Left Column: Socials */}
          <div className="contact-socials-box lg:col-span-5 flex flex-col w-full">
            <div className="flex flex-col border-t border-white/10">
              {socials.map((social, index) => (
                <a
                  key={index}
                  href={social.link}
                  target="_blank"
                  rel="noreferrer"
                  className="flex items-center justify-between py-5 border-b border-white/10 border-l-[3px] border-l-transparent group cursor-pointer hover:bg-white/[0.01] hover:border-l-[#E23744] hover:pl-4 transition-all duration-300"
                >
                  <div className="flex items-center gap-4">
                    <div className="w-10 h-10 bg-white/5 border border-white/10 rounded-xl flex items-center justify-center text-[#E23744] group-hover:bg-[#E23744] group-hover:text-white transition-colors duration-300">
                      {social.icon}
                    </div>
                    <span className="text-[16px] font-semibold text-white group-hover:text-[#E23744] transition-colors duration-300">
                      {social.title}
                    </span>
                  </div>
                  <span className="text-[13px] text-gray-400 group-hover:text-white transition-colors duration-300 font-mono">
                    {social.subtitle}
                  </span>
                </a>
              ))}
            </div>
          </div>
 
          {/* Right Column: Contact Form Box */}
          <div className="contact-form-box lg:col-span-7 w-full">
            <div className="glass-card p-8 relative overflow-hidden">
              <form onSubmit={handleSubmit} className="flex flex-col gap-6 w-full relative z-10">
                <div className="grid md:grid-cols-2 gap-6 w-full">
                  <div className="flex flex-col gap-1 w-full">
                    <input
                      type="text"
                      id="name"
                      name="name"
                      required
                      placeholder="Your Name"
                      className="w-full bg-white/[0.02] border border-white/10 rounded-xl px-4 py-3 text-[15px] text-white placeholder-gray-500 focus:outline-none focus:border-[#E23744] focus:bg-white/[0.04] transition-all font-medium"
                    />
                  </div>

                  <div className="flex flex-col gap-1 w-full">
                    <input
                      type="email"
                      id="email"
                      name="email"
                      required
                      placeholder="Your Email"
                      className="w-full bg-white/[0.02] border border-white/10 rounded-xl px-4 py-3 text-[15px] text-white placeholder-gray-500 focus:outline-none focus:border-[#E23744] focus:bg-white/[0.04] transition-all font-medium"
                    />
                  </div>
                </div>

                <div className="flex flex-col gap-1 w-full">
                  <textarea
                    id="message"
                    name="message"
                    required
                    placeholder="Your Message"
                    className="w-full bg-white/[0.02] border border-white/10 rounded-xl px-4 py-3 text-[15px] text-white placeholder-gray-500 focus:outline-none focus:border-[#E23744] focus:bg-white/[0.04] transition-all font-medium min-h-[140px] resize-none"
                  ></textarea>
                </div>

                <button
                  type="submit"
                  disabled={status === "sending..."}
                  className="bg-[#E23744] text-white rounded-full w-full py-4 font-semibold text-[15px] hover:bg-[#c4303b] mt-2 transition-colors duration-200 cursor-pointer text-center disabled:opacity-50"
                >
                  {status === "sending..." ? "Sending..." : "Send Message"}
                </button>

                {status === "success" && (
                  <p className="text-green-400 text-center font-semibold mt-2 text-sm">Message sent successfully! I'll get back to you soon.</p>
                )}
                {status === "error" && (
                  <p className="text-red-400 text-center font-semibold mt-2 text-sm">Oops! Something went wrong. Please try again.</p>
                )}
              </form>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
