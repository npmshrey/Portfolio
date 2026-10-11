export default function Footer() {
  const toTop = () => {
    if (window.__lenis) window.__lenis.scrollTo(0, { duration: 2 });
    else window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="relative z-10 w-full bg-acid text-ink overflow-hidden">
      <div className="px-4 sm:px-8 pt-10 flex flex-wrap justify-between gap-4 font-mono text-[11px] font-bold uppercase tracking-[0.14em]">
        <span>© 2026 Shreyanshu Kumar</span>
        <span className="hidden sm:inline">Built with React · GSAP · Tailwind</span>
        <button onClick={toTop} className="cursor-pointer hover:underline">Back to top ↑</button>
      </div>
      {/* Wordmark bleeds off the bottom edge */}
      <p className="font-display text-[21vw] leading-[0.78] text-center whitespace-nowrap translate-y-[14%] select-none" aria-hidden="true">
        Shreyanshu
      </p>
    </footer>
  );
}
