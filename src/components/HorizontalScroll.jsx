import { useRef } from "react";
import { motion } from "framer-motion";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";

gsap.registerPlugin(ScrollTrigger);

const categories = [
  {
    title: "Languages & Frontend",
    style: "bg-acid text-ink border-acid",
    skills: ["JavaScript (ES6+)", "C/C++", "React.js", "Redux", "HTML5", "CSS3", "Tailwind CSS", "Next.js", "Framer Motion"],
  },
  {
    title: "Backend & DB",
    style: "bg-bone text-ink border-bone",
    skills: ["Node.js", "Express", "REST APIs", "WebSockets", "MongoDB", "SQL"],
  },
  {
    title: "Core Concepts",
    style: "bg-hot text-ink border-hot",
    skills: ["DSA", "System Design", "OOP", "Performance", "Machine Learning"],
  },
  {
    title: "Tools & Workflows",
    style: "bg-ink text-bone border-bone/50",
    skills: ["Git/GitHub", "Docker", "Vite", "Postman", "Linux", "Responsive Design"],
  },
];

// Scatter the stickers on a jittered 3-column grid, in a shuffled order so the
// categories mix. Deterministic, so the pile looks the same on every load.
const allSkills = categories.flatMap((c) =>
  c.skills.map((s, si) => ({ label: s, style: c.style, lead: si === 0 }))
);
const stickers = allSkills.map((_, k) => {
  const item = allSkills[(k * 7) % allSkills.length];
  const col = k % 3;
  const row = Math.floor(k / 3);
  const rows = Math.ceil(allSkills.length / 3);
  return {
    ...item,
    // The right column hangs from the right edge so long labels never spill out
    pos: col === 2
      ? { right: `${2 + ((k * 13) % 5)}%` }
      : { left: `${2 + col * 33 + ((k * 13) % 6)}%` },
    top: 2 + row * (88 / rows) + ((k * 5) % 4),
    rotate: (((k * 37) % 11) - 5) * 2.4,
    size: item.lead ? "text-sm sm:text-2xl px-4 sm:px-5 py-2.5 sm:py-3" : "text-[10px] sm:text-sm px-3 sm:px-3.5 py-1.5 sm:py-2",
  };
});

const hackathons = [
  { title: "SIH 2025", subtitle: "Champion", link: "/images/certificates/SIH2025-Certificate.jpeg" },
  { title: "Hackstreet 2024", subtitle: "Winner", link: "/images/certificates/HackStreet-Certificate.jpeg" },
  { title: "HackArCode 2024", subtitle: "Winner", link: "/images/certificates/HackArCode-Certificate.jpeg" },
];

const certs = [
  { title: "OCI DevOps Pro", subtitle: "Oracle Cloud · 2025", link: "/Devops Certificate.pdf" },
  { title: "Claude Code", subtitle: "Anthropic · Certified", link: "/Anthropic Certificate.pdf" },
];

function PanelHead({ num, kicker, title, accent }) {
  return (
    <div className="mb-8 lg:mb-10">
      <p className="tag mb-3 animate-slide-in">
        <span className="text-acid">[{num}]</span> — {kicker}
      </p>
      <h2 className="font-display text-[15vw] lg:text-[7.5vw] animate-slide-in">
        {title} <span className="font-serif-i text-acid">{accent}</span>
      </h2>
    </div>
  );
}

export default function HorizontalScroll() {
  const wrapperRef = useRef(null);
  const trackRef = useRef(null);
  const pileRef = useRef(null);

  useGSAP(
    () => {
      const mm = gsap.matchMedia();

      mm.add("(min-width: 1024px)", () => {
        const tl = gsap.to(trackRef.current, {
          xPercent: -75, // 4 panels on a 400vw track → slide by 3 of them
          ease: "none",
          scrollTrigger: {
            trigger: wrapperRef.current,
            pin: true,
            scrub: 1,
            start: "top top",
            end: () => `+=${window.innerHeight * 3}`,
            invalidateOnRefresh: true,
          },
        });

        gsap.to(".hs-progress", {
          scaleX: 1,
          ease: "none",
          scrollTrigger: { trigger: wrapperRef.current, start: "top top", end: () => `+=${window.innerHeight * 3}`, scrub: true },
        });

        // Big ghost numerals drift against the scroll for parallax depth
        gsap.utils.toArray(".ghost-num").forEach((el) => {
          gsap.fromTo(el, { xPercent: 30 }, {
            xPercent: -30,
            ease: "none",
            scrollTrigger: { trigger: el.parentElement, containerAnimation: tl, start: "left right", end: "right left", scrub: true },
          });
        });

        gsap.utils.toArray(".horizontal-panel").forEach((panel, index) => {
          if (index === 0) return;
          gsap.fromTo(
            panel.querySelectorAll(".animate-slide-in"),
            { opacity: 0, y: 60, rotate: 2 },
            {
              opacity: 1, y: 0, rotate: 0, duration: 0.9, ease: "expo.out", stagger: 0.08,
              scrollTrigger: { trigger: panel, containerAnimation: tl, start: "left 65%", toggleActions: "play none none reverse" },
            }
          );
        });
      });

      return () => mm.revert();
    },
    { scope: wrapperRef }
  );

  const panel = "horizontal-panel w-full lg:w-screen h-auto lg:h-screen shrink-0 flex items-center py-24 lg:py-0 px-4 sm:px-8 lg:px-16 relative overflow-hidden border-b lg:border-b-0 lg:border-r border-line";
  const ghost = "ghost-num absolute -bottom-[0.12em] right-0 font-display text-[45vw] lg:text-[32vw] text-outline opacity-[0.12] select-none pointer-events-none leading-none";

  return (
    <div ref={wrapperRef} className="relative w-full overflow-x-hidden lg:overflow-visible">
      {/* Panel progress */}
      <div className="hidden lg:block absolute bottom-6 left-16 right-16 z-20 h-px bg-line">
        <div className="hs-progress h-full bg-acid origin-left" style={{ transform: "scaleX(0)" }} />
      </div>

      <div ref={trackRef} className="flex flex-col lg:flex-row w-full lg:w-[400vw] h-auto lg:h-screen relative z-10">
        {/* ── 01 About ─────────────────────────────────────── */}
        <section id="about" className={panel}>
          <span className={ghost}>01</span>
          <div className="max-w-6xl w-full mx-auto relative z-10">
            <p className="tag mb-8"><span className="text-acid">[01]</span> — Philosophy</p>
            <p className="text-[8vw] lg:text-[3.6vw] leading-[1.08] tracking-tight font-medium">
              Great engineering is more than writing code — it&apos;s{" "}
              <span className="font-serif-i text-acid">architecting</span> scalable solutions that deliver{" "}
              <span className="bg-bone text-ink px-2">measurable value.</span> From the first diagram to the last{" "}
              <span className="font-serif-i">micro-interaction,</span> I build for performance.
            </p>
            <div className="flex flex-wrap gap-2.5 mt-10">
              {["Ghaziabad, India", "Full stack developer", "Built for high scale"].map((t) => (
                <span key={t} className="chip px-4 py-2 text-dim">{t}</span>
              ))}
            </div>
          </div>
        </section>

        {/* ── 02 Experience ────────────────────────────────── */}
        <section id="experience" className={panel}>
          <span className={ghost}>02</span>
          <div className="max-w-6xl w-full mx-auto relative z-10">
            <PanelHead num="02" kicker="Career" title="Work" accent="history." />

            <div className="grid lg:grid-cols-2 gap-6 animate-slide-in">
              <article className="brut-card p-6 md:p-8">
                <span className="absolute -top-4 -right-3 rotate-6 bg-acid text-ink font-mono text-[11px] font-bold uppercase tracking-[0.14em] px-3 py-1.5">
                  ● Now
                </span>
                <p className="tag mb-4">Sep 2026 — Present</p>
                <h3 className="font-display text-4xl md:text-5xl leading-[0.95] mb-2">Full Stack AI Engineer</h3>
                <p className="font-serif-i text-2xl text-acid mb-4">Digibuggy</p>
                <p className="text-sm text-bone/70 leading-relaxed">
                  Building full stack AI-powered products end to end — from model integration through to the interfaces they ship in.
                </p>
              </article>

              <article className="brut-card p-6 md:p-8">
                <p className="tag mb-4">Mar 2026 — Aug 2026</p>
                <h3 className="font-display text-4xl md:text-5xl leading-[0.95] mb-2">Frontend Engineer Intern</h3>
                <a href="https://campuspull.in" target="_blank" rel="noreferrer" className="font-serif-i text-2xl text-acid mb-4 inline-block hover:underline">
                  Campus-Pull ↗
                </a>
                <ul className="text-sm text-bone/70 space-y-2">
                  {[
                    "P2P chat on Socket.IO with read receipts & attachments",
                    "Resources Hub dashboard with URL-synced search",
                    "Custom canvas-based client-side profile image cropper",
                  ].map((li) => (
                    <li key={li} className="flex gap-3"><span className="text-acid font-mono">→</span>{li}</li>
                  ))}
                </ul>
              </article>
            </div>
          </div>
        </section>

        {/* ── 03 Skills (draggable sticker pile) ───────────── */}
        <section id="technical-arsenal" className={panel}>
          <span className={ghost}>03</span>
          <div className="max-w-7xl w-full mx-auto relative z-10 grid lg:grid-cols-12 gap-8 items-center">
            <div className="lg:col-span-4">
              <PanelHead num="03" kicker="Capabilities" title="Tool" accent="kit." />
              <ul className="space-y-3 animate-slide-in">
                {categories.map((c) => (
                  <li key={c.title} className="flex items-center gap-3 font-mono text-xs uppercase tracking-[0.12em]">
                    <span className={`w-4 h-4 border ${c.style}`} /> {c.title}
                  </li>
                ))}
              </ul>
              <p className="tag mt-8 animate-slide-in">↳ Go on, throw them around.</p>
            </div>

            <div
              ref={pileRef}
              data-cursor="drag"
              className="lg:col-span-8 relative h-[70vh] lg:h-[68vh] border border-dashed border-line animate-slide-in"
            >
              {stickers.map((s) => (
                <motion.span
                  key={s.label}
                  drag
                  dragConstraints={pileRef}
                  dragElastic={0.15}
                  dragTransition={{ bounceStiffness: 300, bounceDamping: 18 }}
                  whileDrag={{ scale: 1.12, rotate: 0, zIndex: 50 }}
                  whileHover={{ scale: 1.05 }}
                  data-drag
                  initial={{ rotate: s.rotate }}
                  className={`absolute select-none touch-none cursor-grab active:cursor-grabbing border rounded-full font-mono font-bold uppercase tracking-[0.06em] whitespace-nowrap shadow-[4px_4px_0_0_rgba(0,0,0,0.6)] ${s.style} ${s.size}`}
                  style={{ ...s.pos, top: `${s.top}%` }}
                >
                  {s.label}
                </motion.span>
              ))}
            </div>
          </div>
        </section>

        {/* ── 04 Credentials ───────────────────────────────── */}
        <section id="credentials" className={panel}>
          <span className={ghost}>04</span>
          <div className="max-w-6xl w-full mx-auto relative z-10">
            <PanelHead num="04" kicker="Credentials" title="Trophy" accent="shelf." />

            <div className="grid lg:grid-cols-2 gap-10 animate-slide-in">
              {[{ head: "Hackathon victories", rows: hackathons }, { head: "Certifications", rows: certs }].map((group) => (
                <div key={group.head}>
                  <p className="tag mb-3">{group.head}</p>
                  <div className="border-t border-line">
                    {group.rows.map((r) => (
                      <a
                        key={r.title}
                        href={r.link}
                        target="_blank"
                        rel="noreferrer"
                        data-cursor="open"
                        className="group relative flex items-end justify-between gap-4 py-4 border-b border-line overflow-hidden"
                      >
                        <span className="absolute inset-0 bg-acid translate-y-full group-hover:translate-y-0 transition-transform duration-400 ease-[cubic-bezier(0.16,1,0.3,1)]" />
                        <span className="relative font-display text-3xl md:text-4xl group-hover:text-ink transition-all duration-300 group-hover:translate-x-3">
                          {r.title}
                        </span>
                        <span className="relative font-serif-i text-lg text-dim group-hover:text-ink transition-colors duration-300 pr-2 whitespace-nowrap">
                          {r.subtitle}
                        </span>
                      </a>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}
