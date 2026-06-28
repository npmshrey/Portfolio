import { useState } from "react";
import { motion } from "framer-motion";

export default function Contact() {
  const [status, setStatus] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus("sending...");
  
    setTimeout(() => {
        setStatus("success");
    }, 1000);
  };

  const socials = [
    {
      title: "LinkedIn",
      subtitle: "shreyanshu-gupta", 
      link: "https://www.linkedin.com/in/shreyanshu-gupta/",
      icon: (
        <svg viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5 text-white">
          <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
        </svg>
      )
    },
    {
      title: "X",
      subtitle: "npmshrey",
      link: "https://x.com/npmshrey",
      icon: (
        <svg viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5 text-white">
          <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
        </svg>
      )
    },
    {
      title: "Email",
      subtitle: "work.shreyanshu@gmail.com",
      link: "mailto:work.shreyanshu@gmail.com",
      icon: (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-5 h-5 text-white">
          <path d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"/>
        </svg>
      )
    },
    {
      title: "GitHub",
      subtitle: "@npmshrey",
      link: "https://github.com/npmshrey",
      icon: (
        <svg viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5 text-white">
          <path d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12"/>
        </svg>
      )
    }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { 
      opacity: 1, 
      transition: { staggerChildren: 0.15 }
    }
  };

  const fadeUpVariant = {
    hidden: { opacity: 0, y: 40 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.7, ease: "easeOut" } }
  };

  return (
    <section id="contact" className="py-20 border-t border-[#E5E5E5] bg-white flex items-center relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-8 relative z-10 w-full">
        
        {/* Section Headline */}
        <div className="mb-10 text-left">
          <motion.h2 
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-[11px] font-semibold text-[#E23744] tracking-widest uppercase mb-2"
          >
            Get in Touch
          </motion.h2>
          <motion.h3
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, delay: 0.1 }}
            className="text-[56px] font-bold text-[#1C1C1C]"
          >
            Let's{" "}
            <span className="font-light text-[#999]">Talk</span>
            <span className="text-[#E23744]">.</span>
          </motion.h3>
        </div>

        <div className="grid lg:grid-cols-2 gap-16 mt-10 items-start">
          
          {/* Left Column: Socials */}
          <motion.div 
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="flex flex-col w-full"
          >
            <div className="flex flex-col border-t border-[#E5E5E5]">
              {socials.map((social, index) => (
                <motion.a
                  key={index}
                  variants={fadeUpVariant}
                  href={social.link}
                  target="_blank"
                  rel="noreferrer"
                  className="flex items-center justify-between py-5 border-b border-[#E5E5E5] border-l-[4px] border-l-transparent group cursor-pointer hover:translate-x-1 hover:border-l-[#E23744] hover:pl-3 transition-all duration-300"
                >
                  <div className="flex items-center gap-4">
                    <div className="w-10 h-10 bg-[#F5F5F5] rounded-xl flex items-center justify-center group-hover:bg-[#E23744] group-hover:text-white transition-colors duration-300">
                      {index === 0 && (
                        <svg viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5 text-[#E23744] group-hover:text-white transition-colors duration-300">
                          <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                        </svg>
                      )}
                      {index === 1 && (
                        <svg viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5 text-[#E23744] group-hover:text-white transition-colors duration-300">
                          <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
                        </svg>
                      )}
                      {index === 2 && (
                        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-5 h-5 text-[#E23744] group-hover:text-white transition-colors duration-300">
                          <path d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"/>
                        </svg>
                      )}
                      {index === 3 && (
                        <svg viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5 text-[#E23744] group-hover:text-white transition-colors duration-300">
                          <path d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12"/>
                        </svg>
                      )}
                    </div>
                    <span className="text-[16px] font-semibold text-[#1C1C1C] group-hover:text-[#E23744] transition-colors duration-300">
                      {social.title}
                    </span>
                  </div>
                  <span className="text-[13px] text-[#999999] font-medium">
                    {social.subtitle}
                  </span>
                </motion.a>
              ))}
            </div>
          </motion.div>

          {/* Right Column: Contact Form */}
          <motion.div 
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, ease: "easeOut" }}
            className="w-full"
          >
            <form onSubmit={handleSubmit} className="flex flex-col gap-6 w-full">
              
              <div className="flex flex-col gap-1 w-full">
                <input
                  type="text"
                  id="name"
                  name="name"
                  required
                  placeholder="Your Name"
                  className="w-full bg-transparent border-0 border-b border-[#D0D0D0] px-0 py-3 text-[15px] text-[#1C1C1C] placeholder-gray-400 focus:outline-none focus:border-[#E23744] transition-colors font-semibold"
                />
              </div>

              <div className="flex flex-col gap-1 w-full">
                <input
                  type="email"
                  id="email"
                  name="email"
                  required
                  placeholder="Your Email"
                  className="w-full bg-transparent border-0 border-b border-[#D0D0D0] px-0 py-3 text-[15px] text-[#1C1C1C] placeholder-gray-400 focus:outline-none focus:border-[#E23744] transition-colors font-semibold"
                />
              </div>

              <div className="flex flex-col gap-1 w-full">
                <textarea
                  id="message"
                  name="message"
                  required
                  placeholder="Your Message"
                  className="w-full bg-transparent border-0 border-b border-[#D0D0D0] px-0 py-3 text-[15px] text-[#1C1C1C] placeholder-gray-400 focus:outline-none focus:border-[#E23744] transition-colors font-semibold min-h-[120px] resize-none"
                ></textarea>
              </div>

              <button
                type="submit"
                disabled={status === "sending..."}
                className="bg-[#E23744] text-white rounded-full w-full py-4 font-semibold text-[15px] hover:bg-[#c4303b] mt-4 transition-colors duration-200 cursor-pointer text-center"
              >
                {status === "sending..." ? "Sending..." : "Send Message"}
              </button>

              {status === "success" && (
                <p className="text-green-600 text-center font-semibold mt-2 text-sm">Message sent successfully! I'll get back to you soon.</p>
              )}
              {status === "error" && (
                <p className="text-red-600 text-center font-semibold mt-2 text-sm">Oops! Something went wrong. Please try again.</p>
              )}

            </form>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
