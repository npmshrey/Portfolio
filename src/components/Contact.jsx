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
    <section id="contact" className="min-h-screen py-16 md:py-20 bg-[#050505] flex items-center relative overflow-hidden">
      <div className="absolute top-0 right-1/4 w-[500px] h-[500px] bg-orange-600/[0.04] blur-[120px] rounded-full pointer-events-none" />

      <div className="max-w-6xl mx-auto px-6 relative z-10 w-full">
        <div className="grid lg:grid-cols-2 gap-8 lg:gap-14 items-stretch">
          
          <motion.div 
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="flex flex-col h-full"
          >
            <motion.h3 variants={fadeUpVariant} className="text-2xl md:text-3xl font-bold text-white mb-6 px-1">
              Connect with Me
            </motion.h3>

            <div className="grid gap-3 md:gap-4 flex-1">
              {socials.map((social, index) => (
                <motion.a
                  key={index}
                  variants={fadeUpVariant}
                  href={social.link}
                  target="_blank"
                  rel="noreferrer"
                  className="flex items-center gap-4 bg-[#111111] border border-white/5 p-4 md:p-5 rounded-2xl hover:border-orange-500/30 transition-all duration-300 group hover:-translate-y-1 hover:shadow-[0_0_20px_rgba(249,115,22,0.1)]"
                >
                  <div className="w-12 h-12 bg-white/5 rounded-xl flex items-center justify-center group-hover:bg-orange-500/20 transition-colors duration-300">
                    {social.icon}
                  </div>
                  <div>
                    <h4 className="text-white font-bold text-base md:text-lg">{social.title}</h4>
                    <p className="text-gray-400 text-sm">{social.subtitle}</p>
                  </div>
                </motion.a>
              ))}
            </div>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, ease: "easeOut" }}
            className="h-full flex flex-col"
          >
            <div className="bg-[#111111]/80 backdrop-blur-md border border-white/5 rounded-2xl p-6 md:p-8 relative overflow-hidden flex-1 flex flex-col">
              
              <div className="absolute top-0 right-0 w-32 h-32 bg-orange-600/10 blur-[50px] rounded-full pointer-events-none" />
              
              <h2 className="text-2xl md:text-3xl font-bold text-white mb-6 md:mb-8 relative z-10 px-1">
                Let's Talk <span className="text-orange-500">.</span>
              </h2>

              <form onSubmit={handleSubmit} className="flex flex-col gap-4 md:gap-5 relative z-10 flex-1 justify-between">
                
                <div className="flex flex-col gap-1.5 md:gap-2">
                  <label htmlFor="name" className="text-gray-300 font-medium text-xs md:text-sm">
                    Your name
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    required
                    placeholder="What's your good name?"
                    className="w-full bg-[#111111] border border-white/5 rounded-xl px-4 md:px-5 py-3 md:py-3.5 text-sm md:text-base text-white placeholder-gray-600 focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-orange-500 hover:border-orange-500/50 hover:shadow-[0_0_15px_rgba(249,115,22,0.1)] transition-all font-medium"
                  />
                </div>

                <div className="flex flex-col gap-1.5 md:gap-2">
                  <label htmlFor="email" className="text-gray-300 font-medium text-xs md:text-sm">
                    Your Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    required
                    placeholder="What's your email address?"
                    className="w-full bg-[#111111] border border-white/5 rounded-xl px-4 md:px-5 py-3 md:py-3.5 text-sm md:text-base text-white placeholder-gray-600 focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-orange-500 hover:border-orange-500/50 hover:shadow-[0_0_15px_rgba(249,115,22,0.1)] transition-all font-medium"
                  />
                </div>

                <div className="flex flex-col gap-1.5 md:gap-2 flex-1">
                  <label htmlFor="message" className="text-gray-300 font-medium text-xs md:text-sm">
                    Your Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    required
                    placeholder="How can I help you?"
                    className="w-full h-full min-h-[90px] bg-[#111111] border border-white/5 rounded-xl px-4 md:px-5 py-3 md:py-3.5 text-sm md:text-base text-white placeholder-gray-600 focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-orange-500 hover:border-orange-500/50 hover:shadow-[0_0_15px_rgba(249,115,22,0.1)] transition-all font-medium resize-none overflow-auto"
                  ></textarea>
                </div>

                <button
                  type="submit"
                  disabled={status === "sending..."}
                  className="mt-2 w-full bg-orange-500 text-white font-bold text-base md:text-lg py-3.5 md:py-4 rounded-xl hover:bg-orange-600 hover:shadow-[0_0_20px_rgba(249,115,22,0.4)] transition-all duration-300 hover:-translate-y-1 disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:translate-y-0 group relative overflow-hidden shrink-0"
                >
                  <span className="relative z-10">{status === "sending..." ? "Sending..." : "Send Message"}</span>
                </button>

                {status === "success" && (
                  <p className="text-green-400 text-center font-medium mt-1 md:mt-2 text-sm">Message sent successfully! I'll get back to you soon.</p>
                )}
                {status === "error" && (
                  <p className="text-red-400 text-center font-medium mt-1 md:mt-2 text-sm">Oops! Something went wrong. Please try again.</p>
                )}

              </form>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
