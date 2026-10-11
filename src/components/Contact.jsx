import { useState, useRef, useEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";

gsap.registerPlugin(ScrollTrigger);

const socials = [
  { title: "LinkedIn", subtitle: "shreyanshu-gupta", link: "https://www.linkedin.com/in/shreyanshu-gupta/" },
  { title: "X / Twitter", subtitle: "@npmshrey", link: "https://x.com/npmshrey" },
  { title: "GitHub", subtitle: "@npmshrey", link: "https://github.com/npmshrey" },
  { title: "Email", subtitle: "work.shreyanshu@gmail.com", link: "mailto:work.shreyanshu@gmail.com" },
];

function Magnetic({ children, strength = 0.4 }) {
  const ref = useRef(null);
  useEffect(() => {
    const el = ref.current;
    if (!el || !window.matchMedia("(pointer: fine)").matches) return;
    const xTo = gsap.quickTo(el, "x", { duration: 0.8, ease: "elastic.out(1, 0.4)" });
    const yTo = gsap.quickTo(el, "y", { duration: 0.8, ease: "elastic.out(1, 0.4)" });
    const move = (e) => {
      const r = el.getBoundingClientRect();
      xTo((e.clientX - (r.left + r.width / 2)) * strength);
      yTo((e.clientY - (r.top + r.height / 2)) * strength);
    };
    const reset = () => { xTo(0); yTo(0); };
    el.addEventListener("mousemove", move);
    el.addEventListener("mouseleave", reset);
    return () => {
      el.removeEventListener("mousemove", move);
      el.removeEventListener("mouseleave", reset);
    };
  }, [strength]);
  return <div ref={ref} className="inline-block">{children}</div>;
}

export default function Contact() {
  const [status, setStatus] = useState("");
  const containerRef = useRef(null);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus("sending...");
    setTimeout(() => setStatus("success"), 1000);
  };

  useGSAP(() => {
    gsap.from(".contact-heading .line-mask > span", {
      yPercent: 110,
      duration: 1.1,
      ease: "expo.out",
      stagger: 0.1,
      scrollTrigger: { trigger: ".contact-heading", start: "top 80%" },
    });
    gsap.from(".contact-block", {
      y: 60,
      opacity: 0,
      duration: 1,
      ease: "expo.out",
      stagger: 0.12,
      scrollTrigger: { trigger: ".contact-grid", start: "top 85%" },
    });
  }, { scope: containerRef });

  const field = "w-full bg-transparent border-0 border-b border-bone/25 px-0 py-4 text-lg text-bone placeholder-dim focus:outline-none focus:border-acid transition-colors";

  return (
    <section ref={containerRef} id="contact" className="relative py-28 md:py-40 px-4 sm:px-8 border-t border-line overflow-hidden">
      <div className="contact-heading relative flex flex-wrap items-end justify-between gap-8 mb-16 md:mb-24">
        <div>
          <p className="tag mb-4"><span className="text-acid">[06]</span> — Contact</p>
          <h2 className="font-display text-[20vw] md:text-[13vw]">
            <span className="line-mask"><span className="block">Let&apos;s make</span></span>
            <span className="line-mask"><span className="block">
              <span className="font-serif-i text-acid">something</span> <span className="text-outline">loud.</span>
            </span></span>
          </h2>
        </div>

        <Magnetic>
          <a
            href="mailto:work.shreyanshu@gmail.com"
            className="w-36 h-36 md:w-44 md:h-44 rounded-full bg-acid text-ink flex flex-col items-center justify-center font-mono text-xs font-bold uppercase tracking-[0.14em] hover:bg-bone transition-colors"
          >
            <span className="text-3xl leading-none mb-1">✺</span>
            Say hello
          </a>
        </Magnetic>
      </div>

      <div className="contact-grid grid lg:grid-cols-12 gap-14">
        <div className="contact-block lg:col-span-5 border-t border-line">
          {socials.map((s) => (
            <a
              key={s.title}
              href={s.link}
              target="_blank"
              rel="noreferrer"
              className="group relative flex items-center justify-between py-6 border-b border-line overflow-hidden"
            >
              <span className="absolute inset-0 bg-bone origin-bottom scale-y-0 group-hover:scale-y-100 transition-transform duration-500 ease-[cubic-bezier(0.16,1,0.3,1)]" />
              <span className="relative font-display text-3xl md:text-4xl group-hover:text-ink group-hover:translate-x-3 transition-all duration-300">
                {s.title}
              </span>
              <span className="relative font-mono text-xs text-dim group-hover:text-ink transition-colors pr-3 truncate max-w-[55%] text-right">
                {s.subtitle} ↗
              </span>
            </a>
          ))}
        </div>

        <form onSubmit={handleSubmit} className="contact-block lg:col-span-7 flex flex-col gap-4">
          <p className="tag">Or drop a line —</p>
          <div className="grid md:grid-cols-2 gap-4">
            <input type="text" name="name" required placeholder="Your name" className={field} />
            <input type="email" name="email" required placeholder="Your email" className={field} />
          </div>
          <textarea name="message" required placeholder="Tell me about the project…" className={`${field} min-h-[140px] resize-none`} />

          <button
            type="submit"
            disabled={status === "sending..."}
            className="group relative mt-6 overflow-hidden border border-bone py-6 font-display text-3xl md:text-4xl cursor-pointer disabled:opacity-50"
          >
            <span className="absolute inset-0 bg-acid -translate-x-full group-hover:translate-x-0 transition-transform duration-500 ease-[cubic-bezier(0.16,1,0.3,1)]" />
            <span className="relative group-hover:text-ink transition-colors">
              {status === "sending..." ? "Sending…" : "Send it →"}
            </span>
          </button>

          {status === "success" && (
            <p className="font-mono text-xs uppercase tracking-[0.14em] text-acid">✓ Message sent — I&apos;ll get back to you soon.</p>
          )}
          {status === "error" && (
            <p className="font-mono text-xs uppercase tracking-[0.14em] text-hot">Something went wrong. Please try again.</p>
          )}
        </form>
      </div>
    </section>
  );
}
