import React, { useEffect, useRef, useState } from "react";

const skills = [
  {
    category: "Backend",
    code: "SYS.01",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
        <rect x="3" y="4" width="18" height="6" rx="1.5" />
        <rect x="3" y="14" width="18" height="6" rx="1.5" />
        <circle cx="7" cy="7" r="1" fill="currentColor" />
        <circle cx="7" cy="17" r="1" fill="currentColor" />
        <path d="M11 7h6M11 17h6" strokeLinecap="round" />
      </svg>
    ),
    items: ["C#", "ASP.NET Core", "ASP.NET MVC", "RESTful Web API", "Entity Framework", "LINQ"],
  },
  {
    category: "Frontend",
    code: "UI.02",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
        <rect x="2.5" y="4" width="19" height="16" rx="2" />
        <path d="M2.5 9h19M8 14l-2 2 2 2M16 14l2 2-2 2M13 13l-2 6" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    ),
    items: ["HTML5", "CSS3", "JavaScript", "React.js", "Bootstrap", "jQuery"],
  },
  {
    category: "Database",
    code: "DB.03",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
        <ellipse cx="12" cy="5.5" rx="8" ry="3" />
        <path d="M4 5.5v6.5c0 1.66 3.58 3 8 3s8-1.34 8-3V5.5" />
        <path d="M4 12v6.5c0 1.66 3.58 3 8 3s8-1.34 8-3V12" />
      </svg>
    ),
    items: ["Microsoft SQL Server", "MySQL", "MongoDB"],
  },
  {
    category: "Tools & Concepts",
    code: "ARC.04",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
        <circle cx="12" cy="12" r="3" />
        <path d="M12 2v4M12 18v4M4.93 4.93l2.83 2.83M16.24 16.24l2.83 2.83M2 12h4M18 12h4M4.93 19.07l2.83-2.83M16.24 7.76l2.83-2.83" strokeLinecap="round" />
      </svg>
    ),
    items: ["Git & GitHub", "JWT Authentication", "Dependency Injection", "OOP", "DSA"],
  },
];

const projects = [
  {
    number: "01",
    name: "Employee Project Management System",
    type: "FULL-STACK ENTERPRISE WEB APP",
    accent: "#a78bfa",
    description:
      "A role-based enterprise project orchestration platform engineered for tracking sprints, team workloads, task dependencies, and secure JWT-authenticated workflows.",
    stack: ["ASP.NET Core Web API", "C#", "SQL Server", "Entity Framework", "JWT", "React"],
    visualType: "kanban",
  },
  {
    number: "02",
    name: "PublishingHouseCRM",
    type: "CRM & WORKFLOW AUTOMATION",
    accent: "#38bdf8",
    description:
      "A high-throughput customer relationship and publishing pipeline platform streamlining client acquisition, manuscript lifecycles, automated CRUD records, and REST integrations.",
    stack: ["ASP.NET MVC", "C#", "SQL Server", "Entity Framework", "JavaScript", "Bootstrap"],
    visualType: "crm",
  },
  {
    number: "03",
    name: "LabourLink",
    type: "ON-DEMAND GEOLOCATION PLATFORM",
    accent: "#34d399",
    description:
      "A real-time service marketplace connecting households and contractors with verified construction workers and skilled professionals via instant availability matching.",
    stack: ["React Native", "Expo", "MongoDB", "REST APIs", "Geolocation"],
    visualType: "mobile",
  },
];

const experience = [
  {
    role: "ASP.NET Developer",
    company: "Avant Web Tech Pvt. Ltd.",
    period: "JUL 2023 — JAN 2024",
    tag: "BACKEND & .NET ARCHITECTURE",
    detail:
      "Engineered scalable web applications using C#, ASP.NET Core/MVC, and SQL Server—designing RESTful APIs, optimizing Entity Framework queries, and strengthening backend reliability.",
  },
  {
    role: "UI Developer",
    company: "Kiya Learning",
    period: "JAN 2020 — JUN 2023",
    tag: "FRONTEND ENGINEERING",
    detail:
      "Crafted responsive, high-conversion learning interfaces with HTML5, CSS3, Bootstrap, JavaScript, and jQuery while seamlessly integrating asynchronous REST APIs.",
  },
  {
    role: "Back Office Associate",
    company: "EXL Services Pvt. Ltd.",
    period: "SEP 2018 — JAN 2020",
    tag: "OPERATIONS & DATA PRECISION",
    detail:
      "Developed operational discipline, high-accuracy data workflows, and cross-functional coordination in an enterprise BPO environment.",
  },
];

function CinematicCanvas() {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    let animationFrameId;
    let width = (canvas.width = window.innerWidth);
    let height = (canvas.height = window.innerHeight);

    const mouse = { x: -9999, y: -9999 };
    const particleCount = Math.min(55, Math.floor((width * height) / 24000));

    const particles = Array.from({ length: particleCount }, () => ({
      x: Math.random() * width,
      y: Math.random() * height,
      vx: (Math.random() - 0.5) * 0.32,
      vy: (Math.random() - 0.5) * 0.32,
      size: Math.random() * 1.7 + 0.6,
      hue: Math.random() > 0.5 ? "167, 139, 250" : "114, 228, 220",
    }));

    const onResize = () => {
      width = canvas.width = window.innerWidth;
      height = canvas.height = window.innerHeight;
    };
    const onMouseMove = (e) => {
      mouse.x = e.clientX;
      mouse.y = e.clientY;
    };

    window.addEventListener("resize", onResize);
    window.addEventListener("mousemove", onMouseMove);

    const render = () => {
      ctx.clearRect(0, 0, width, height);

      for (let i = 0; i < particles.length; i++) {
        const p = particles[i];
        p.x += p.vx;
        p.y += p.vy;

        if (p.x < 0 || p.x > width) p.vx *= -1;
        if (p.y < 0 || p.y > height) p.vy *= -1;

        const dxMouse = mouse.x - p.x;
        const dyMouse = mouse.y - p.y;
        const distMouse = Math.hypot(dxMouse, dyMouse);
        if (distMouse < 180) {
          p.x -= dxMouse * 0.008;
          p.y -= dyMouse * 0.008;
        }

        ctx.beginPath();
        ctx.arc(p.x, p.y, p.size, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(${p.hue}, 0.5)`;
        ctx.fill();

        for (let j = i + 1; j < particles.length; j++) {
          const p2 = particles[j];
          const dist = Math.hypot(p.x - p2.x, p.y - p2.y);
          if (dist < 130) {
            ctx.beginPath();
            ctx.moveTo(p.x, p.y);
            ctx.lineTo(p2.x, p2.y);
            ctx.strokeStyle = `rgba(167, 139, 250, ${(1 - dist / 130) * 0.13})`;
            ctx.lineWidth = 0.7;
            ctx.stroke();
          }
        }
      }
      animationFrameId = requestAnimationFrame(render);
    };

    render();
    return () => {
      cancelAnimationFrame(animationFrameId);
      window.removeEventListener("resize", onResize);
      window.removeEventListener("mousemove", onMouseMove);
    };
  }, []);

  return <canvas ref={canvasRef} className="particle-canvas" aria-hidden="true" />;
}

function ProjectGraphic({ type }) {
  if (type === "kanban") {
    return (
      <svg className="bespoke-svg" viewBox="0 0 420 250" fill="none">
        <defs>
          <linearGradient id="cardGrad1" x1="0" y1="0" x2="1" y2="1">
            <stop offset="0%" stopColor="#a78bfa" stopOpacity="0.35" />
            <stop offset="100%" stopColor="#1e1b2e" stopOpacity="0.1" />
          </linearGradient>
        </defs>
        <rect x="16" y="14" width="388" height="222" rx="10" fill="#12141f" stroke="rgba(255,255,255,0.16)" />
        <line x1="16" y1="42" x2="404" y2="42" stroke="rgba(255,255,255,0.1)" />
        <circle cx="32" cy="28" r="4" fill="#f87171" />
        <circle cx="46" cy="28" r="4" fill="#fbbf24" />
        <circle cx="60" cy="28" r="4" fill="#34d399" />
        <rect x="310" y="22" width="78" height="12" rx="6" fill="rgba(167,139,250,0.2)" />
        <rect x="28" y="54" width="68" height="170" rx="6" fill="#0d0f17" />
        <rect x="38" y="68" width="48" height="7" rx="3.5" fill="#a78bfa" />
        <rect x="38" y="86" width="38" height="6" rx="3" fill="rgba(255,255,255,0.18)" />
        <rect x="38" y="102" width="44" height="6" rx="3" fill="rgba(255,255,255,0.12)" />
        <rect x="38" y="118" width="32" height="6" rx="3" fill="rgba(255,255,255,0.12)" />
        {[0, 1, 2].map((col) => (
          <g key={col} transform={`translate(${108 + col * 96}, 54)`}>
            <rect width="88" height="170" rx="6" fill="rgba(255,255,255,0.025)" stroke="rgba(255,255,255,0.06)" />
            <rect x="10" y="10" width="40" height="5" rx="2.5" fill={col === 1 ? "#a78bfa" : "#72e4dc"} opacity="0.8" />
            <rect x="10" y="26" width="68" height="44" rx="5" fill="url(#cardGrad1)" stroke="rgba(167,139,250,0.3)" />
            <rect x="16" y="34" width="45" height="5" rx="2.5" fill="#fff" opacity="0.85" />
            <rect x="16" y="44" width="54" height="4" rx="2" fill="#9295a1" opacity="0.6" />
            <circle cx="22" cy="58" r="5" fill="#a78bfa" />
            <circle cx="30" cy="58" r="5" fill="#72e4dc" />
            <rect x="10" y="80" width="68" height="38" rx="5" fill="#181b28" stroke="rgba(255,255,255,0.08)" />
            <rect x="16" y="88" width="38" height="5" rx="2.5" fill="#fff" opacity="0.7" />
            <rect x="16" y="98" width="50" height="4" rx="2" fill="#9295a1" opacity="0.5" />
          </g>
        ))}
      </svg>
    );
  }

  if (type === "crm") {
    return (
      <svg className="bespoke-svg" viewBox="0 0 420 250" fill="none">
        <defs>
          <linearGradient id="areaChart" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0%" stopColor="#38bdf8" stopOpacity="0.45" />
            <stop offset="100%" stopColor="#38bdf8" stopOpacity="0" />
          </linearGradient>
        </defs>
        <rect x="16" y="14" width="388" height="222" rx="10" fill="#101522" stroke="rgba(56,189,248,0.28)" />
        {[0, 1, 2].map((i) => (
          <g key={i} transform={`translate(${28 + i * 124}, 28)`}>
            <rect width="114" height="48" rx="6" fill="#161d2e" stroke="rgba(255,255,255,0.08)" />
            <rect x="12" y="12" width="42" height="5" rx="2.5" fill="#9295a1" />
            <rect x="12" y="25" width="64" height="10" rx="3" fill={i === 0 ? "#38bdf8" : i === 1 ? "#a78bfa" : "#34d399"} />
          </g>
        ))}
        <rect x="28" y="88" width="236" height="134" rx="6" fill="#131928" stroke="rgba(255,255,255,0.07)" />
        <path d="M 40 195 Q 80 155, 115 168 T 185 130 T 250 108 L 250 208 L 40 208 Z" fill="url(#areaChart)" />
        <path d="M 40 195 Q 80 155, 115 168 T 185 130 T 250 108" stroke="#38bdf8" strokeWidth="2.5" fill="none" />
        <circle cx="185" cy="130" r="4.5" fill="#fff" stroke="#38bdf8" strokeWidth="2" />
        <circle cx="250" cy="108" r="4.5" fill="#fff" stroke="#38bdf8" strokeWidth="2" />
        <rect x="276" y="88" width="114" height="134" rx="6" fill="#131928" stroke="rgba(255,255,255,0.07)" />
        {[0, 1, 2, 3].map((row) => (
          <g key={row} transform={`translate(286, ${102 + row * 28})`}>
            <circle cx="8" cy="8" r="7" fill="rgba(56,189,248,0.22)" />
            <rect x="22" y="3" width="52" height="4.5" rx="2" fill="#e2e8f0" opacity="0.8" />
            <rect x="22" y="11" width="36" height="3.5" rx="1.5" fill="#64748b" />
          </g>
        ))}
      </svg>
    );
  }

  return (
    <svg className="bespoke-svg" viewBox="0 0 420 250" fill="none">
      <circle cx="210" cy="125" r="105" stroke="rgba(52,211,153,0.14)" strokeDasharray="4 4" />
      <circle cx="210" cy="125" r="72" stroke="rgba(52,211,153,0.24)" />
      <circle cx="210" cy="125" r="38" stroke="rgba(52,211,153,0.35)" />
      <rect x="152" y="18" width="116" height="214" rx="18" fill="#0e1618" stroke="#34d399" strokeWidth="1.5" />
      <rect x="192" y="26" width="36" height="4" rx="2" fill="rgba(255,255,255,0.25)" />
      <path d="M162 65h96M162 105h96M162 145h96M190 42v135M230 42v135" stroke="rgba(52,211,153,0.12)" />
      <circle cx="210" cy="108" r="18" fill="rgba(52,211,153,0.18)" />
      <circle cx="210" cy="108" r="6" fill="#34d399" />
      <g transform="translate(82, 68)">
        <rect width="84" height="34" rx="8" fill="#131c1e" stroke="rgba(52,211,153,0.4)" />
        <circle cx="16" cy="17" r="7" fill="#34d399" />
        <rect x="29" y="11" width="42" height="4.5" rx="2" fill="#fff" />
        <rect x="29" y="19" width="28" height="3.5" rx="1.5" fill="#34d399" />
      </g>
      <g transform="translate(256, 146)">
        <rect width="88" height="34" rx="8" fill="#131c1e" stroke="rgba(167,139,250,0.45)" />
        <circle cx="16" cy="17" r="7" fill="#a78bfa" />
        <rect x="29" y="11" width="46" height="4.5" rx="2" fill="#fff" />
        <rect x="29" y="19" width="32" height="3.5" rx="1.5" fill="#a78bfa" />
      </g>
      <rect x="164" y="186" width="92" height="30" rx="8" fill="#34d399" />
      <rect x="184" y="198" width="52" height="5" rx="2.5" fill="#071310" />
    </svg>
  );
}

function Label({ number, children }) {
  return (
    <div className="section-label">
      <span>{number}</span>
      <i />
      {children}
    </div>
  );
}

export default function App() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [active, setActive] = useState("home");
  const [scrolled, setScrolled] = useState(false);
  const [scrollY, setScrollY] = useState(0);
  const [scrollProgress, setScrollProgress] = useState(0);
  const [cursorPos, setCursorPos] = useState({ x: -500, y: -500 });

  useEffect(() => {
    const onScroll = () => {
      const y = window.scrollY;
      setScrollY(y);
      setScrolled(y > 40);

      const docHeight = document.documentElement.scrollHeight - window.innerHeight;
      setScrollProgress(docHeight > 0 ? (y / docHeight) * 100 : 0);

      const ids = ["home", "about", "skills", "work", "experience", "contact"];
      const current = ids
        .map((id) => ({ id, top: document.getElementById(id)?.getBoundingClientRect().top ?? 9999 }))
        .filter((item) => item.top <= 180)
        .sort((a, b) => b.top - a.top)[0];
      if (current) setActive(current.id);
    };

    const onMouseMove = (e) => {
      setCursorPos({ x: e.clientX, y: e.clientY });
    };

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("is-visible");
          }
        });
      },
      { threshold: 0.12 }
    );

    document.querySelectorAll(".reveal-up").forEach((el) => observer.observe(el));

    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("mousemove", onMouseMove, { passive: true });
    onScroll();

    return () => {
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("mousemove", onMouseMove);
      observer.disconnect();
    };
  }, []);

  const handleCardMove = (e) => {
    const card = e.currentTarget;
    const rect = card.getBoundingClientRect();
    const x = (e.clientX - rect.left) / rect.width - 0.5;
    const y = (e.clientY - rect.top) / rect.height - 0.5;
    card.style.setProperty("--rx", `${(-y * 6).toFixed(2)}deg`);
    card.style.setProperty("--ry", `${(x * 8).toFixed(2)}deg`);
    card.style.setProperty("--mx", `${((x + 0.5) * 100).toFixed(1)}%`);
    card.style.setProperty("--my", `${((y + 0.5) * 100).toFixed(1)}%`);
  };

  const handleCardLeave = (e) => {
    const card = e.currentTarget;
    card.style.setProperty("--rx", "0deg");
    card.style.setProperty("--ry", "0deg");
  };

  const closeMenu = () => setMenuOpen(false);
  const navItems = ["Home", "About", "Skills", "Work", "Experience", "Contact"];

  // Subtle parallax transform on the full-screen video as user scrolls down
  const videoParallaxStyle = {
    transform: `translate3d(0, ${Math.min(scrollY * 0.28, 220)}px, 0) scale(${1 + Math.min(scrollY * 0.00015, 0.08)})`,
  };

  return (
    <>
      <CinematicCanvas />
      <div
        className="cursor-spotlight"
        style={{ transform: `translate3d(${cursorPos.x - 250}px, ${cursorPos.y - 250}px, 0)` }}
        aria-hidden="true"
      />
      <div className="noise" aria-hidden="true" />
      <div className="cyber-grid" aria-hidden="true" />
      <div className="ambient ambient-one" aria-hidden="true" />
      <div className="ambient ambient-two" aria-hidden="true" />

      {/* Top Scroll Progress Bar */}
      <div className="scroll-progress-track">
        <div className="scroll-progress-bar" style={{ width: `${scrollProgress}%` }} />
      </div>

      {/* Floating Glass Navbar */}
      <header className={`navbar ${scrolled ? "navbar-scrolled" : ""}`}>
        <a className="brand" href="#home" onClick={closeMenu}>
          SK<span>.</span>
        </a>
        <button
          className="menu-toggle"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle menu"
        >
          {menuOpen ? "✕" : "☰"}
        </button>
        <nav className={menuOpen ? "nav-links nav-open" : "nav-links"}>
          {navItems.map((item) => {
            const id = item.toLowerCase();
            return (
              <a
                key={id}
                className={active === id ? "active" : ""}
                href={`#${id}`}
                onClick={closeMenu}
              >
                {item}
              </a>
            );
          })}
        </nav>
        <a className="nav-cta" href="mailto:Satk20993@gmail.com?subject=Let's%20connect">
          Let&apos;s talk <span>↗</span>
        </a>
      </header>

      <main>
        {/* FULL-BLEED WIDESCREEN CINEMATIC HERO */}
        <section className="fullscreen-hero" id="home">
          {/* Edge-to-Edge Video Layer */}
          <div className="fullscreen-video-stage" style={videoParallaxStyle}>
            <video
              className="fullscreen-video"
              autoPlay
              muted
              loop
              playsInline
              preload="auto"
              aria-label="Satish Kumar full screen cinematic introduction"
            >
              <source src="/satish-intro.mp4" type="video/mp4" />
              Your browser does not support the video element.
            </video>
          </div>

          {/* Atmospheric Film Overlays & Letterbox Vignette */}
          <div className="cinema-vignette" aria-hidden="true" />
          <div className="cinema-scanlines" aria-hidden="true" />
          <div className="cinema-bottom-fade" aria-hidden="true" />

          {/* Subtle Cinema HUD Corners */}
          <div className="cinema-hud-top section-wrap">
            <div className="eyebrow">
              <span className="status-dot" /> AVAILABLE FOR OPPORTUNITIES · INDIA
            </div>
            {/* <div className="cinema-reel-tag">
              <span className="rec-dot" /> SCENE 01 // SATISH KUMAR
            </div> */}
          </div>

          {/* Foreground Editorial Content Positioned to Keep Center-Stage Clear */}
          <div className="fullscreen-hero-content section-wrap">
            <div className="hero-editorial-block">
              <p className="hero-kicker">HELLO, I&apos;M</p>
              <h1 className="hero-title">
                Satish
                <br />
                <span>Kumar.</span>
              </h1>
              <div className="hero-role">
                .NET DEVELOPER <i>✳</i> FULL-STACK ARCHITECT
              </div>
              <p className="hero-description">
                Engineering resilient web ecosystems, high-security REST APIs, and cinematic digital experiences crafted with clean, purposeful code.
              </p>
              <div className="hero-actions">
                <a className="button button-primary" href="#work">
                  Explore my work <span>↗</span>
                </a>
                <a className="button button-ghost" href="#contact">
                  Get in touch
                </a>
              </div>
            </div>

            <div className="hero-bottom-bar">
              <a href="#about" className="scroll-cue">
                <span /> SCROLL TO EXPLORE
              </a>
              <div className="hero-meta">
                <span>GHAZIABAD, INDIA</span>
                <span>•</span>
                <span>3.6+ YEARS EXPERIENCE</span>
                <span>•</span>
                <span>C# / ASP.NET CORE / REACT</span>
              </div>
            </div>
          </div>
        </section>

        {/* KINETIC MARQUEE STRIP */}
        <section className="marquee-strip" aria-label="Core specialties">
          <div className="marquee-track">
            {[...Array(2)].map((_, idx) => (
              <div className="marquee-content" key={idx}>
                <span>ASP.NET CORE</span>
                <i>✳</i>
                <span>FULL-STACK ARCHITECTURE</span>
                <i>✳</i>
                <span>RESTFUL WEB APIS</span>
                <i>✳</i>
                <span>REACT.JS</span>
                <i>✳</i>
                <span>SQL SERVER</span>
                <i>✳</i>
                <span>ENTITY FRAMEWORK</span>
                <i>✳</i>
              </div>
            ))}
          </div>
        </section>

        {/* ABOUT SECTION */}
        <section className="section section-wrap reveal-up" id="about">
          <Label number="01">A LITTLE ABOUT ME</Label>
          <div className="about-grid">
            <h2>
              Curious mind.
              <br />
              <span>Practical builder.</span>
            </h2>
            <div className="about-text">
              <p className="large-copy">
                I&apos;m a software developer who transforms complex business logic into fast, dependable digital products.
              </p>
              <p>
                With 3.6+ years of hands-on web development experience, I specialize in C#, ASP.NET Core, ASP.NET MVC, Web API, Entity Framework, and SQL Server—pairing rock-solid backends with responsive, modern interfaces.
              </p>
              <p>
                Currently pursuing my Master of Computer Applications (MCA) at KIET Group of Institutions while continually pushing my architectural and algorithmic craft.
              </p>
              <a className="text-link" href="mailto:Satk20993@gmail.com">
                Let&apos;s connect <span>↗</span>
              </a>
            </div>
          </div>

          <div className="stats-row">
            <div className="stat-box">
              <strong>
                3.6<span>+</span>
              </strong>
              <small>YEARS IN WEB DEVELOPMENT</small>
            </div>
            <div className="stat-box">
              <strong>03</strong>
              <small>FLAGSHIP ARCHITECTURES</small>
            </div>
            <div className="stat-box">
              <strong>∞</strong>
              <small>PROBLEMS TO SOLVE</small>
            </div>
          </div>
        </section>

        {/* SKILLS SECTION */}
        <section className="section skills-section section-wrap reveal-up" id="skills">
          <Label number="02">MY TOOLKIT</Label>
          <div className="section-heading">
            <h2>
              Tools of
              <br />
              <span>the trade.</span>
            </h2>
            <p>
              Battle-tested technologies I use to architect maintainable, scalable, and secure applications.
            </p>
          </div>
          <div className="skills-grid">
            {skills.map((group) => (
              <article className="skill-card" key={group.category}>
                <div className="skill-card-glow" />
                <div className="skill-card-top">
                  <span>{group.code}</span>
                  <div className="skill-icon">{group.icon}</div>
                </div>
                <h3>{group.category}</h3>
                <div className="skill-tags">
                  {group.items.map((skill) => (
                    <span key={skill}>{skill}</span>
                  ))}
                </div>
              </article>
            ))}
          </div>
        </section>

        {/* WORK SECTION */}
        <section className="section work-section section-wrap reveal-up" id="work">
          <Label number="03">SELECTED WORK</Label>
          <div className="section-heading">
            <h2>
              Things I&apos;ve
              <br />
              <span>worked on.</span>
            </h2>
            <p>
              A curated showcase of enterprise applications and full-stack platforms engineered from database to UI.
            </p>
          </div>
          <div className="project-list">
            {projects.map((project) => (
              <article
                className="project-card"
                key={project.number}
                onMouseMove={handleCardMove}
                onMouseLeave={handleCardLeave}
                style={{ "--card-accent": project.accent }}
              >
                <div className="project-visual">
                  <div
                    className="project-visual-glow"
                    style={{ background: project.accent }}
                  />
                  <span className="project-number">ARCHIVE // {project.number}</span>
                  <div className="window-tilt-wrap">
                    <ProjectGraphic type={project.visualType} />
                  </div>
                  <span className="visual-caption">SYSTEM BLUEPRINT / {project.number}</span>
                </div>

                <div className="project-info">
                  <span className="project-type" style={{ color: project.accent }}>
                    {project.type}
                  </span>
                  <h3>{project.name}</h3>
                  <p>{project.description}</p>
                  <div className="project-stack">
                    {project.stack.map((tech) => (
                      <span key={tech}>{tech}</span>
                    ))}
                  </div>
                  <span className="project-note">● ARCHITECTURE &amp; SOURCE WALKTHROUGH ON REQUEST</span>
                </div>
              </article>
            ))}
          </div>
        </section>

        {/* EXPERIENCE SECTION */}
        <section className="section experience-section section-wrap reveal-up" id="experience">
          <Label number="04">THE JOURNEY</Label>
          <div className="section-heading">
            <h2>
              Experience
              <br />
              <span>that matters.</span>
            </h2>
            <p>
              Every milestone has sharpened how I design systems, collaborate with teams, and ship reliable software.
            </p>
          </div>
          <div className="timeline">
            {experience.map((item, index) => (
              <article className="timeline-item" key={item.company}>
                <div className="timeline-marker">
                  <span>0{index + 1}</span>
                  <div className="timeline-line" />
                </div>
                <div className="timeline-main">
                  <div className="timeline-meta-top">
                    <span className="timeline-date">{item.period}</span>
                    <span className="timeline-tag">{item.tag}</span>
                  </div>
                  <h3>{item.role}</h3>
                  <h4>{item.company}</h4>
                  <p>{item.detail}</p>
                </div>
              </article>
            ))}
          </div>

          <div className="education-card">
            <div className="edu-badge">
              <span className="project-type">ACADEMIC CREDENTIALS</span>
              <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="#a78bfa" strokeWidth="1.5">
                <path d="M22 10v6M2 10l10-5 10 5-10 5z" />
                <path d="M6 12v5c3 3 9 3 12 0v-5" />
              </svg>
            </div>
            <div>
              <h3>Master of Computer Applications (MCA)</h3>
              <p>KIET Group of Institutions · Pursuing, Expected 2027</p>
            </div>
            <div>
              <h3>Bachelor of Computer Applications (BCA)</h3>
              <p>Indira Gandhi National Open University</p>
            </div>
          </div>
        </section>

        {/* CONTACT SECTION */}
        <section className="contact-section reveal-up" id="contact">
          <div className="section-wrap contact-inner">
            <Label number="05">WHAT&apos;S NEXT?</Label>
            <p className="contact-kicker">HAVE AN IDEA OR ROLE IN MIND?</p>
            <h2>
              Let&apos;s make
              <br />
              <span>it happen.</span>
            </h2>
            <div className="contact-bottom">
              <p>
                Looking for a dedicated .NET &amp; Full-Stack Engineer to build your next product? Let&apos;s start a conversation.
              </p>
              <a
                className="button button-primary"
                href="mailto:Satk20993@gmail.com?subject=Let's%20connect"
              >
                Start a conversation <span>↗</span>
              </a>
            </div>
            <div className="contact-details">
              <a href="mailto:Satk20993@gmail.com">SATK20993@GMAIL.COM</a>
              <span>GHAZIABAD, UTTAR PRADESH, INDIA</span>
              <div className="social-links">
                <a
                  href="https://www.linkedin.com/in/satish-kumar-155b53199/"
                  target="_blank"
                  rel="noreferrer"
                >
                  LINKEDIN ↗
                </a>
                <a
                  href="https://github.com/satishkumar209"
                  target="_blank"
                  rel="noreferrer"
                >
                  GITHUB ↗
                </a>
              </div>
            </div>
          </div>
        </section>
      </main>

      <footer className="footer section-wrap">
        <a className="brand" href="#home">
          SK<span>.</span>
        </a>
        <p>DESIGNED &amp; ENGINEERED WITH CINEMATIC PRECISION.</p>
        <span>© {new Date().getFullYear()} SATISH KUMAR</span>
      </footer>
    </>
  );
}