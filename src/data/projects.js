export const projects = [
  // ── Production work (Digibuggy) ──────────────────────────────
  // No public repo for client work, so `github` is omitted and the row
  // shows only the live-site link.
  {
    title: "DGB India",
    production: true,
    company: "Digibuggy",
    description: "Website for an enterprise infrastructure provider: GPU servers, storage, networking and backup systems, organised by industry (VFX, AI/ML, trading, architecture, media) with case studies and a hardware catalogue.",
    impact: "Live at dgbindia.com, with an interactive NAS configurator and an admin panel for managing site content.",
    tech: ["Next.js", "React", "NAS Configurator", "Admin Panel"],
    live: "https://dgbindia.com/",
    image: "/images/dgbindia-preview.png",
  },
  {
    title: "NASTOWN",
    production: true,
    company: "Digibuggy",
    description: "Storefront for a NAS (network-attached storage) retailer: a NAS configurator with GST-inclusive pricing, a NAS finder with savings calculator, use-case pages, NAS rental, a blog and WhatsApp quote requests.",
    impact: "Live at nastown.com, helping buyers choose, price and order the right NAS for a business serving 10K+ customers.",
    tech: ["React", "NAS Configurator", "ROI Calculator", "Blog CMS", "Admin Panel"],
    live: "https://nastown.com/",
    image: "/images/nastown-preview.png",
  },
  {
    title: "AyurNutri",
    description: "AI-powered diet and nutrition system. Drastically improved patient onboarding by automating diet plan generation and monitoring.",
    impact: "Reduced diet planning downtime from 45 min to < 30 sec.",
    tech: ["React", "Tailwind CSS", "Node.js", "Express.js", "MongoDB", "WebSocket", "Redux", "AI Integration"],
    live: "https://ayur-nutri-bice.vercel.app/",
    github: "https://github.com/Shreyanshu-Gupta/AyurNutri",
    image: "/images/ayurnutri-preview.png",
  },
  {
    title: "WanderLust",
    description: "A full-stack property rental booking platform supporting property hosting, listing management, ratings, reviews, destination-based exploration, and category-based filtering.",
    impact: "Implemented secure authentication using Passport.js/JWT with HTTP-only cookies, integrated MongoDB operations, and designed responsive Next.js/React frontend interfaces.",
    tech: ["Next.js", "React.js", "Node.js", "Express.js", "MongoDB", "Passport.js", "JWT"],
    live: "#",
    github: "https://github.com/npmshrey/WanderLust",
    image: "/images/wanderlust-preview-v2.png",
  },
  {
    title: "Lane Violation System",
    description: "Automated traffic law enforcement system utilizing computer vision for dynamic lane violation tracking and automated ticketing.",
    impact: "Achieved 87%+ detection accuracy across lighting conditions.",
    tech: ["Python", "OpenCV", "Computer Vision", "Machine Learning", "SMTP"],
    live: "#",
    github: "https://github.com/Shreyanshu-Gupta/Lane-Violation",
    image: "/images/lane-preview.png", 
  }
];

/*
export const commentedProjects = [
  {
    title: "Netflix Clone",
    description: "A fully responsive streaming platform clone featuring user authentication, seamless API integration with TMDB for real-time movie data, and dynamic trailer playback.",
    impact: "Built a highly performant and visually identical frontend experience simulating a production-level video-on-demand platform.",
    tech: ["React", "Firebase", "Redux", "TMDB API", "CSS/Tailwind"],
    live: "https://netflix-clone-gamma-eight-71.vercel.app/",
    github: "https://github.com/Shreyanshu-Gupta/netflix-clone.git",
    image: "/images/netflix-preview.jpg",
  }
];
*/

