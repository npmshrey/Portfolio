export default function Footer() {
  return (
    <footer className="bg-black border-t border-white/5 py-8 relative z-10 w-full">
      <div className="max-w-7xl mx-auto px-8 flex flex-col sm:flex-row justify-between items-center gap-4 text-center sm:text-left select-none">
        <p className="text-[13px] text-gray-500 font-light">
          © 2026 Shreyanshu Kumar. All rights reserved.
        </p>
        <p className="text-[13px] font-mono text-gray-500 font-light">
          Designed & built with React, GSAP, & Tailwind
        </p>
      </div>
    </footer>
  );
}
