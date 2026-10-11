import { useEffect, useRef, useState } from "react";
import { projects } from "../data/projects";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";

gsap.registerPlugin(ScrollTrigger);

export default function Projects() {
  const containerRef = useRef(null);
  const previewRef = useRef(null);
  const [active, setActive] = useState(-1);

  useGSAP(() => {
    gsap.from(".projects-heading .line-mask > span", {
      yPercent: 110,
      duration: 1.1,
      ease: "expo.out",
      stagger: 0.1,
      scrollTrigger: { trigger: ".projects-heading", start: "top 80%" },
    });

    gsap.utils.toArray(".project-row").forEach((row) => {
      gsap.from(row, {
        clipPath: "inset(0 100% 0 0)",
        duration: 1.2,
        ease: "expo.inOut",
        scrollTrigger: { trigger: row, start: "top 88%" },
      });
    });
  }, { scope: containerRef });

  // Floating preview chases the cursor
  useEffect(() => {
    const el = previewRef.current;
    if (!el) return;
    gsap.set(el, { scale: 0 });
    const xTo = gsap.quickTo(el, "x", { duration: 0.6, ease: "power3" });
    const yTo = gsap.quickTo(el, "y", { duration: 0.6, ease: "power3" });
    const move = (e) => { xTo(e.clientX); yTo(e.clientY); };
    window.addEventListener("mousemove", move);
    return () => window.removeEventListener("mousemove", move);
  }, []);

  useEffect(() => {
    gsap.to(previewRef.current, {
      scale: active === -1 ? 0 : 1,
      rotate: active === -1 ? -8 : 0,
      duration: 0.5,
      ease: "expo.out",
    });
  }, [active]);

  return (
    <section ref={containerRef} id="projects" className="relative py-28 md:py-40 px-4 sm:px-8 border-t border-line">
      {/* Cursor-following preview (desktop) */}
      <div
        ref={previewRef}
        className="hidden md:block fixed top-0 left-0 z-[60] w-[400px] aspect-[16/10] -ml-[200px] -mt-[125px] pointer-events-none overflow-hidden border-2 border-acid"
        aria-hidden="true"
      >
        <div
          className="w-full h-full transition-transform duration-700 ease-[cubic-bezier(0.76,0,0.24,1)]"
          style={{ transform: `translateY(${-Math.max(active, 0) * 100}%)` }}
        >
          {projects.map((p) => (
            <img key={p.title} src={p.image} alt="" className="w-full h-full object-cover object-top" />
          ))}
        </div>
      </div>

      <div className="projects-heading flex flex-wrap items-end justify-between gap-6 mb-14 md:mb-20">
        <div>
          <p className="tag mb-4"><span className="text-acid">[05]</span> — Selected work</p>
          <h2 className="font-display text-[19vw] md:text-[11vw]">
            <span className="line-mask"><span className="block">Things I</span></span>
            <span className="line-mask"><span className="block">shipped<span className="font-serif-i text-acid lowercase">.</span></span></span>
          </h2>
        </div>
        <p className="max-w-xs text-bone/70 text-sm leading-relaxed">
          A few products I&apos;ve designed, engineered and pushed to production — each one built to solve a real, measurable problem.
          <span className="font-mono text-acid block mt-2">({String(projects.length).padStart(2, "0")})</span>
        </p>
      </div>

      <div className="border-t border-line" onMouseLeave={() => setActive(-1)}>
        {projects.map((project, i) => (
          <article
            key={project.title}
            onMouseEnter={() => setActive(i)}
            data-cursor="view"
            className="project-row group relative grid md:grid-cols-12 gap-6 py-8 md:py-10 border-b border-line"
          >
            <span className="md:col-span-1 font-mono text-xs text-dim pt-2">/0{i + 1}</span>

            <div className="md:col-span-7">
              <h3 className="font-display text-[14vw] md:text-[7vw] text-outline group-hover:text-acid group-hover:[-webkit-text-stroke-color:transparent] transition-all duration-500 group-hover:translate-x-4">
                {project.title}
              </h3>
              <div className="flex flex-wrap gap-2 mt-4">
                {project.tech.map((t) => (
                  <span key={t} className="chip px-3 py-1 text-dim group-hover:text-bone group-hover:border-bone/30 transition-colors">{t}</span>
                ))}
              </div>
              {/* Inline preview on touch screens */}
              <img src={project.image} alt={`${project.title} preview`} loading="lazy" className="md:hidden mt-6 w-full aspect-[16/10] object-cover object-top border border-line" />
            </div>

            <div className="md:col-span-4 flex flex-col justify-between gap-6">
              <p className="text-sm text-bone/70 leading-relaxed">{project.description}</p>
              <div>
                <p className="tag mb-1">Impact</p>
                <p className="font-serif-i text-xl leading-snug text-bone">{project.impact}</p>
              </div>
              <div className="flex gap-3">
                {project.live && project.live !== "#" && (
                  <a href={project.live} target="_blank" rel="noreferrer" className="font-mono text-[11px] font-bold uppercase tracking-[0.14em] bg-acid text-ink px-4 py-2.5 hover:bg-bone transition-colors">
                    Live ↗
                  </a>
                )}
                <a href={project.github} target="_blank" rel="noreferrer" className="font-mono text-[11px] font-bold uppercase tracking-[0.14em] border border-bone/30 px-4 py-2.5 hover:bg-bone hover:text-ink transition-colors">
                  Source ↗
                </a>
              </div>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}
