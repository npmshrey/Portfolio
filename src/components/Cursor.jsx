import { useEffect, useRef, useState } from "react";
import gsap from "gsap";

/**
 * Blend-mode cursor. A small dot tracks the pointer exactly; a larger ring
 * lags behind it. Hovering a link swells the ring; hovering anything with
 * `data-cursor="<label>"` turns it into a solid acid disc carrying the label.
 * Only mounts on fine pointers — touch devices keep their native behaviour.
 */
export default function Cursor() {
  const dotRef = useRef(null);
  const ringRef = useRef(null);
  const discRef = useRef(null);
  const [label, setLabel] = useState("");
  const [enabled] = useState(
    () => typeof window !== "undefined" && window.matchMedia("(hover: hover) and (pointer: fine)").matches
  );

  useEffect(() => {
    if (!enabled) return;
    document.body.classList.add("has-cursor");

    const dotX = gsap.quickTo(dotRef.current, "x", { duration: 0.08, ease: "power3" });
    const dotY = gsap.quickTo(dotRef.current, "y", { duration: 0.08, ease: "power3" });
    const ringX = gsap.quickTo(ringRef.current, "x", { duration: 0.45, ease: "power3" });
    const ringY = gsap.quickTo(ringRef.current, "y", { duration: 0.45, ease: "power3" });

    gsap.set([dotRef.current, ringRef.current], { opacity: 0 });
    let shown = false;
    const move = (e) => {
      if (!shown) {
        shown = true;
        gsap.set([dotRef.current, ringRef.current], { x: e.clientX, y: e.clientY });
        gsap.to([dotRef.current, ringRef.current], { opacity: 1, duration: 0.3 });
      }
      dotX(e.clientX); dotY(e.clientY);
      ringX(e.clientX); ringY(e.clientY);
    };

    const over = (e) => {
      const labelled = e.target.closest("[data-cursor]");
      const link = e.target.closest("a, button, input, textarea, [data-drag]");
      if (labelled) {
        setLabel(labelled.dataset.cursor);
        gsap.to(discRef.current, { scale: 3.2, backgroundColor: "#c8ff2e", borderColor: "#c8ff2e", duration: 0.35, ease: "power3.out" });
        gsap.to(dotRef.current, { scale: 0, duration: 0.2 });
      } else if (link) {
        setLabel("");
        gsap.to(discRef.current, { scale: 1.9, backgroundColor: "rgba(236,235,228,1)", borderColor: "rgba(236,235,228,1)", duration: 0.35, ease: "power3.out" });
        gsap.to(dotRef.current, { scale: 0, duration: 0.2 });
      } else {
        setLabel("");
        gsap.to(discRef.current, { scale: 1, backgroundColor: "rgba(236,235,228,0)", borderColor: "rgba(236,235,228,1)", duration: 0.35, ease: "power3.out" });
        gsap.to(dotRef.current, { scale: 1, duration: 0.2 });
      }
    };

    const leave = () => gsap.to([dotRef.current, ringRef.current], { opacity: 0, duration: 0.2 });
    const enter = () => gsap.to([dotRef.current, ringRef.current], { opacity: 1, duration: 0.2 });

    window.addEventListener("mousemove", move);
    document.addEventListener("mouseover", over);
    document.documentElement.addEventListener("mouseleave", leave);
    document.documentElement.addEventListener("mouseenter", enter);
    return () => {
      document.body.classList.remove("has-cursor");
      window.removeEventListener("mousemove", move);
      document.removeEventListener("mouseover", over);
      document.documentElement.removeEventListener("mouseleave", leave);
      document.documentElement.removeEventListener("mouseenter", enter);
    };
  }, [enabled]);

  if (!enabled) return null;

  return (
    <>
      <div
        ref={ringRef}
        className="fixed top-0 left-0 z-[1000] pointer-events-none w-10 h-10 -ml-5 -mt-5 flex items-center justify-center"
        style={{ mixBlendMode: label ? "normal" : "difference" }}
      >
        <div ref={discRef} className="absolute inset-0 rounded-full border border-bone" />
        <span className="relative font-mono text-[11px] font-bold tracking-[0.12em] text-ink uppercase whitespace-nowrap">
          {label}
        </span>
      </div>
      <div
        ref={dotRef}
        className="fixed top-0 left-0 z-[1001] pointer-events-none w-1.5 h-1.5 -ml-[3px] -mt-[3px] rounded-full bg-bone"
        style={{ mixBlendMode: "difference" }}
      />
    </>
  );
}
