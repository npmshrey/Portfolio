import { useEffect, useRef, useState } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";

gsap.registerPlugin(ScrollTrigger);

const TECH = [
  "React.js", "Next.js", "TypeScript", "Node.js", "Tailwind CSS", "Framer Motion",
  "GSAP", "MongoDB", "PostgreSQL", "Docker", "Python", "Socket.IO", "REST APIs", "Git",
];

const STATS = [
  { val: "3×", label: "Hackathon winner" },
  { val: "3+", label: "Projects shipped" },
  { val: "2+", label: "Years building" },
];

const FIRST = "SHREYANSHU".split("");
const FACE_LETTER = 5; // the "A"

function useIstClock() {
  const fmt = () =>
    new Intl.DateTimeFormat("en-GB", { timeZone: "Asia/Kolkata", hour: "2-digit", minute: "2-digit", second: "2-digit" }).format(new Date());
  const [time, setTime] = useState(fmt);
  useEffect(() => {
    const id = setInterval(() => setTime(fmt()), 1000);
    return () => clearInterval(id);
  }, []);
  return time;
}

export default function LandingHero() {
  const rootRef = useRef(null);
  const loaderRef = useRef(null);
  const counterRef = useRef(null);
  const nameRef = useRef(null);
  const tapesRef = useRef(null);
  const [loadDone, setLoadDone] = useState(false);
  const time = useIstClock();

  // ── Loader: count to 100, then wipe the panel up ─────────────────
  useGSAP(() => {
    const counter = { v: 0 };
    const tl = gsap.timeline({
      onStart: () => requestAnimationFrame(() => window.__lenis?.stop()),
      onComplete: () => {
        window.__lenis?.start();
        window.__lenis?.scrollTo(0, { immediate: true });
        setLoadDone(true);
      },
    });
    tl.from(".loader-line", { yPercent: 110, duration: 0.6, ease: "power3.out", stagger: 0.08 })
      .to(counter, {
        v: 100,
        duration: 1.6,
        ease: "power2.inOut",
        onUpdate: () => {
          if (counterRef.current) counterRef.current.textContent = String(Math.round(counter.v)).padStart(3, "0");
        },
      }, 0.2)
      .to(".loader-bar", { scaleX: 1, duration: 1.6, ease: "power2.inOut" }, 0.2)
      .to(loaderRef.current, { clipPath: "inset(0 0 100% 0)", duration: 0.9, ease: "expo.inOut" }, "+=0.15");
  }, { scope: rootRef });

  // ── Hero entrance + scroll choreography ──────────────────────────
  useGSAP(() => {
    if (!loadDone) return;

    gsap.timeline()
      .from(".hero-letter", { yPercent: 115, rotate: 6, duration: 1.1, ease: "expo.out", stagger: 0.045 })
      .from(".hero-fade", { y: 24, opacity: 0, duration: 0.8, ease: "power3.out", stagger: 0.06 }, 0.45);

    // Name drifts apart as you leave the hero
    gsap.to(".hero-name", {
      yPercent: -30,
      letterSpacing: "0.04em",
      ease: "none",
      scrollTrigger: { trigger: rootRef.current, start: "top top", end: "bottom top", scrub: true },
    });
    // Tapes slide against each other with scroll on top of their own loop
    gsap.to(".tape-a", { xPercent: -12, ease: "none", scrollTrigger: { trigger: tapesRef.current, start: "top bottom", end: "bottom top", scrub: true } });
    gsap.to(".tape-b", { xPercent: 12, ease: "none", scrollTrigger: { trigger: tapesRef.current, start: "top bottom", end: "bottom top", scrub: true } });
  }, { scope: rootRef, dependencies: [loadDone] });

  // ── Photo seen through the letters ───────────────────────────────
  // Every letter carries the same photo as a text-clipped background, offset
  // by the letter's own position so together they read as one continuous
  // image. Sizes live in CSS variables; JS only measures the layout.
  useEffect(() => {
    const h1 = nameRef.current;
    if (!h1) return;
    const measure = () => {
      const box = h1.getBoundingClientRect();
      const masks = h1.querySelectorAll(".line-mask");
      masks.forEach((mask) => {
        const r = mask.getBoundingClientRect();
        mask.firstElementChild.style.setProperty("--l", `${r.left - box.left}px`);
        mask.firstElementChild.style.setProperty("--t", `${r.top - box.top}px`);
      });
      // Centre the face on the "A" rather than the gap between letters
      const a = masks[FACE_LETTER].getBoundingClientRect();
      h1.style.setProperty("--lh", `${a.height}px`);
      h1.style.setProperty("--cx", `${a.left + a.width / 2 - box.left}px`);
      h1.style.setProperty("--cy", `${a.top + a.height / 2 - box.top}px`);
    };
    measure();
    const ro = new ResizeObserver(measure);
    ro.observe(h1);
    document.fonts?.ready.then(measure);

    if (!window.matchMedia("(pointer: fine)").matches) return () => ro.disconnect();
    const pos = { x: 0, y: 0 };
    const apply = () => {
      h1.style.setProperty("--px", `${pos.x}px`);
      h1.style.setProperty("--py", `${pos.y}px`);
    };
    const onMove = (e) => {
      gsap.to(pos, {
        x: (e.clientX / window.innerWidth - 0.5) * -40,
        y: (e.clientY / window.innerHeight - 0.5) * -24,
        duration: 1.2,
        ease: "power3.out",
        overwrite: true,
        onUpdate: apply,
      });
    };
    window.addEventListener("mousemove", onMove);
    return () => {
      ro.disconnect();
      window.removeEventListener("mousemove", onMove);
    };
  }, []);

  // Letters kick when hovered
  const kick = (e) => {
    gsap.fromTo(e.currentTarget, { yPercent: 0 }, { yPercent: -14, duration: 0.18, ease: "power2.out", yoyo: true, repeat: 1 });
  };

  return (
    <div ref={rootRef}>
      {/* ══ LOADER ══════════════════════════════════════════════ */}
      <div
        ref={loaderRef}
        className="fixed inset-0 z-[999] bg-acid text-ink flex flex-col justify-between p-6 sm:p-10"
        style={{ clipPath: "inset(0 0 0 0)" }}
        aria-hidden={loadDone}
      >
        <div className="flex justify-between font-mono text-[11px] sm:text-xs uppercase tracking-[0.14em]">
          <span className="line-mask"><span className="loader-line block">Shreyanshu Kumar — Portfolio</span></span>
          <span className="line-mask"><span className="loader-line block">©2026</span></span>
        </div>
        <div className="max-w-xl">
          <span className="line-mask"><span className="loader-line block font-serif-i text-3xl sm:text-5xl leading-[1.05]">Turning coffee into</span></span>
          <span className="line-mask"><span className="loader-line block font-serif-i text-3xl sm:text-5xl leading-[1.05]">production-ready software</span></span>
          <span className="line-mask"><span className="loader-line block font-serif-i text-3xl sm:text-5xl leading-[1.05]">since 2024.</span></span>
        </div>
        <div>
          <div className="loader-bar h-[2px] bg-ink origin-left mb-4" style={{ transform: "scaleX(0)" }} />
          <div className="flex items-end justify-between">
            <span className="font-mono text-xs uppercase tracking-[0.14em]">Loading experience</span>
            <span ref={counterRef} className="font-display text-[28vw] sm:text-[18vw] leading-[0.78]">000</span>
          </div>
        </div>
      </div>

      {/* ══ HERO ════════════════════════════════════════════════ */}
      <section
        id="home"
        className="relative min-h-[100svh] flex flex-col justify-between overflow-hidden pt-24 pb-8 px-4 sm:px-8"
      >
        {/* Grid lines */}
        <div className="absolute inset-0 pointer-events-none grid grid-cols-4 sm:grid-cols-6 px-4 sm:px-8" aria-hidden="true">
          {Array.from({ length: 6 }).map((_, i) => (
            <div key={i} className={`border-l border-white/[0.05] ${i >= 4 ? "hidden sm:block" : ""}`} />
          ))}
        </div>

        {/* Meta row */}
        <div className="relative z-20 grid grid-cols-2 sm:grid-cols-4 gap-4 tag">
          <span className="hero-fade">Full stack developer</span>
          <span className="hero-fade hidden sm:block">Ghaziabad, IN · {time} IST</span>
          <span className="hero-fade hidden sm:block">SIH&apos;25 Champion</span>
          <span className="hero-fade flex items-center gap-2 justify-end">
            <span className="w-2 h-2 rounded-full bg-acid blink" /> Available for work
          </span>
        </div>

        {/* Giant name */}
        <div className="relative my-auto pt-10 pointer-events-none">
          <h1
            ref={nameRef}
            className="hero-name photo-type font-display text-[33vw] sm:text-[17vw] grid grid-cols-5 justify-items-center sm:flex sm:justify-between pointer-events-auto"
            data-cursor="hi!"
            aria-label="Shreyanshu Kumar"
          >
            {FIRST.map((ch, i) => (
              <span key={i} className="line-mask" aria-hidden="true">
                <span className="hero-letter inline-block" onMouseEnter={kick}>{ch}</span>
              </span>
            ))}
          </h1>

          <div className="flex flex-col-reverse lg:flex-row lg:items-end justify-between gap-6 mt-3 pointer-events-auto">
            <div className="max-w-md">
              <p className="hero-fade text-bone/80 text-base sm:text-lg leading-snug">
                <span className="font-serif-i text-2xl sm:text-3xl text-bone">Full-stack developer</span>{" "}
                building production-grade apps with polished UI, resilient architecture and measurable impact.
              </p>
              <div className="hero-fade flex flex-wrap gap-3 mt-6">
                <a href="#projects" className="group relative overflow-hidden bg-acid text-ink font-mono text-xs font-bold uppercase tracking-[0.14em] px-6 py-4">
                  <span className="relative z-10">See the work ↘</span>
                  <span className="absolute inset-0 bg-bone translate-y-full group-hover:translate-y-0 transition-transform duration-300 ease-out" />
                </a>
                <a href="/SHREYANSHU.pdf" target="_blank" rel="noreferrer" className="border border-bone/30 font-mono text-xs font-bold uppercase tracking-[0.14em] px-6 py-4 hover:bg-bone hover:text-ink transition-colors duration-300">
                  Résumé ↗
                </a>
              </div>
            </div>

            <div className="flex items-end gap-6 sm:gap-10">
              {STATS.map((s) => (
                <div key={s.label} className="hero-fade">
                  <p className="font-display text-5xl sm:text-6xl text-acid">{s.val}</p>
                  <p className="tag mt-1">{s.label}</p>
                </div>
              ))}
              <span className="hero-fade hidden lg:block font-display text-[7vw] text-outline">KUMAR</span>
            </div>
          </div>
        </div>
      </section>

      {/* ══ CROSSING TAPES ══════════════════════════════════════ */}
      <div ref={tapesRef} className="relative h-44 sm:h-56 overflow-hidden my-4" aria-hidden="true">
        <div className="absolute left-[-5%] right-[-5%] top-1/2 -translate-y-1/2 rotate-[3deg] bg-bone py-3 sm:py-4 overflow-hidden">
          <div className="tape-b">
            <div className="marquee-rev">
              {[...TECH, ...TECH].map((t, i) => (
                <span key={i} className="font-display text-3xl sm:text-5xl text-ink/25 mx-5 whitespace-nowrap">{t}</span>
              ))}
            </div>
          </div>
        </div>
        <div className="absolute left-[-5%] right-[-5%] top-1/2 -translate-y-1/2 -rotate-[3deg] bg-acid py-3 sm:py-4 overflow-hidden shadow-[0_20px_40px_-10px_rgba(0,0,0,0.6)]">
          <div className="tape-a">
            <div className="marquee">
              {[...TECH, ...TECH].map((t, i) => (
                <span key={i} className="font-display text-3xl sm:text-5xl text-ink mx-5 whitespace-nowrap flex items-center gap-10">
                  {t} <span className="text-2xl">✺</span>
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
