import { FormEvent, ReactNode, useEffect, useMemo, useState } from "react";

type IconName =
  | "arrow"
  | "code"
  | "layers"
  | "flow"
  | "chart"
  | "speed"
  | "mobile"
  | "people"
  | "terminal"
  | "mail"
  | "pin"
  | "copy"
  | "check"
  | "external"
  | "sun"
  | "moon"
  | "menu"
  | "close"
  | "github"
  | "linkedin"
  | "download"
  | "filter";

function Icon({ name, size = 20 }: { name: IconName; size?: number }) {
  const paths: Record<IconName, ReactNode> = {
    arrow: <><path d="M5 12h14" /><path d="m13 6 6 6-6 6" /></>,
    code: <><path d="m8 9-3 3 3 3" /><path d="m16 9 3 3-3 3" /><path d="m14 5-4 14" /></>,
    layers: <><path d="m12 2 9 5-9 5-9-5 9-5Z" /><path d="m3 12 9 5 9-5" /><path d="m3 17 9 5 9-5" /></>,
    flow: <><rect x="3" y="3" width="6" height="6" rx="1" /><rect x="15" y="15" width="6" height="6" rx="1" /><path d="M9 6h4a4 4 0 0 1 4 4v5" /></>,
    chart: <><path d="M4 19V9" /><path d="M10 19V5" /><path d="M16 19v-7" /><path d="M22 19H2" /></>,
    speed: <><path d="M20 15a8 8 0 1 0-16 0" /><path d="m12 15 4-4" /><path d="M4 19h16" /></>,
    mobile: <><rect x="7" y="2" width="10" height="20" rx="2" /><path d="M11 18h2" /></>,
    people: <><circle cx="9" cy="8" r="3" /><path d="M3 21v-2a6 6 0 0 1 12 0v2" /><path d="M16 3.2a3 3 0 0 1 0 5.6" /><path d="M19 21v-2a6 6 0 0 0-3-5.2" /></>,
    terminal: <><path d="m4 17 6-6-6-6" /><path d="M12 19h8" /></>,
    mail: <><rect x="2" y="4" width="20" height="16" rx="2" /><path d="m22 7-10 7L2 7" /></>,
    pin: <><path d="M20 10c0 5-8 12-8 12S4 15 4 10a8 8 0 1 1 16 0Z" /><circle cx="12" cy="10" r="2.5" /></>,
    copy: <><rect x="8" y="8" width="12" height="12" rx="2" /><path d="M16 8V6a2 2 0 0 0-2-2H6a2 2 0 0 0-2 2v8a2 2 0 0 0 2 2h2" /></>,
    check: <path d="m5 12 4 4L19 6" />,
    external: <><path d="M15 3h6v6" /><path d="m10 14 11-11" /><path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6" /></>,
    sun: <><circle cx="12" cy="12" r="4" /><path d="M12 2v2M12 20v2M4.93 4.93l1.42 1.42M17.66 17.66l1.41 1.41M2 12h2M20 12h2M4.93 19.07l1.42-1.42M17.66 6.34l1.41-1.41" /></>,
    moon: <path d="M21 12.8A9 9 0 1 1 11.2 3 7 7 0 0 0 21 12.8Z" />,
    menu: <><path d="M4 7h16" /><path d="M4 12h16" /><path d="M4 17h16" /></>,
    close: <><path d="m6 6 12 12" /><path d="m18 6-12 12" /></>,
    github: <><path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3.3-.4 6.8-1.6 6.8-7A5.4 5.4 0 0 0 19.3 4 5 5 0 0 0 19.2.5S18 0 15 2a13.4 13.4 0 0 0-7 0C5-.1 3.8.5 3.8.5A5 5 0 0 0 3.7 4a5.4 5.4 0 0 0-1.5 3.7c0 5.4 3.5 6.6 6.8 7A4.8 4.8 0 0 0 8 18v4" /><path d="M8 19c-3 .9-3-1.5-4-2" /></>,
    linkedin: <><rect x="3" y="9" width="4" height="12" /><path d="M5 3.5a2 2 0 1 0 0 4 2 2 0 0 0 0-4Z" /><path d="M11 21V9h4v2c1-3 6-3 6 2v8h-4v-7c0-2-2-2-2 0v7Z" /></>,
    download: <><path d="M12 3v12" /><path d="m7 10 5 5 5-5" /><path d="M5 21h14" /></>,
    filter: <><path d="M4 5h16" /><path d="M7 12h10" /><path d="M10 19h4" /></>,
  };

  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      {paths[name]}
    </svg>
  );
}

const navLinks = ["About", "Skills", "Experience", "Projects", "Contact"];

const skills = [
  { title: "Frontend Core", icon: "code" as IconName, items: ["HTML5", "CSS3", "JavaScript ES6+", "TypeScript"] },
  { title: "Frameworks", icon: "layers" as IconName, featured: true, items: ["Svelte", "SvelteKit", "Vue.js", "Nuxt.js"] },
  { title: "UI & Styling", icon: "speed" as IconName, items: ["Tailwind CSS", "Vuetify", "Responsive Design", "Component Architecture"] },
  { title: "State Management", icon: "flow" as IconName, items: ["Vuex", "Pinia", "Svelte Reactivity", "SvelteKit Stores"] },
  { title: "Mobile", icon: "mobile" as IconName, items: ["Capacitor", "Hybrid Android Apps", "Offline-first Workflows"] },
  { title: "Tools", icon: "terminal" as IconName, items: ["Git", "GitLab", "Vite", "npm", "Postman", "Chrome DevTools", "VS Code"] },
  { title: "Backend & Integration", icon: "chart" as IconName, items: ["REST APIs", "PostgreSQL", "SQL", "Multi-system Integrations"] },
  { title: "DevOps", icon: "layers" as IconName, items: ["Ubuntu", "Nginx", "AWS Fundamentals", "SSL", "SSH", "SFTP", "Deployment Management"] },
];

type Project = {
  name: string;
  short: string;
  tech: string[];
  category: string;
  role: string;
  description: string;
  highlights: string[];
  challenge: string;
  contribution: string;
  outcome: string;
  tone: string;
  featured?: boolean;
};

const projects: Project[] = [
  {
    name: "Enterprise Workflow Automation Platform",
    short: "Configurable Enterprise Interface",
    tech: ["SvelteKit", "REST APIs"],
    category: "Automation",
    role: "Lead Developer",
    description: "Led the SvelteKit frontend architecture, reusable component development, API integration, and performance-focused implementation for a configurable enterprise platform.",
    highlights: ["Reusable UI primitives", "Complex state handling", "Responsive workspaces", "API integration"],
    challenge: "Creating a flexible frontend system for complex, configurable interfaces while maintaining consistency and usability.",
    contribution: "Defined frontend patterns, built shared components, guided technical implementation, and reviewed delivery quality across the interface.",
    outcome: "A maintainable frontend foundation designed to support evolving enterprise interface requirements.",
    tone: "violet",
    featured: true,
  },
  {
    name: "Project Management & Ticketing System",
    short: "Enterprise Planning Interface",
    tech: ["SvelteKit", "TypeScript"],
    category: "Productivity",
    role: "Lead Developer",
    description: "Architected data-intensive SvelteKit interfaces with reusable planning components, advanced client-side interactions, and robust API-driven state management.",
    highlights: ["Data-rich views", "Reusable planning UI", "Advanced filtering", "State orchestration"],
    challenge: "Presenting high-density information across multiple interface modes without compromising clarity or responsiveness.",
    contribution: "Led component architecture, complex UI implementation, integration patterns, code reviews, and frontend performance refinement.",
    outcome: "A scalable interface system for clear, maintainable project planning experiences.",
    tone: "blue",
    featured: true,
  },
  {
    name: "Dynamic Reporting & Analytics Builder",
    short: "Configurable Data Visualization",
    tech: ["SvelteKit", "PostgreSQL"],
    category: "Data",
    role: "Lead Developer",
    description: "Led the SvelteKit frontend for a configurable analytics interface, including reusable visualization components, dynamic tables, filters, and output-ready views.",
    highlights: ["Configurable components", "Dynamic data views", "Complex filtering", "Accessible output UI"],
    challenge: "Keeping highly configurable, data-intensive interfaces understandable while managing dynamic rendering and state.",
    contribution: "Designed the frontend composition model, built reusable data components, integrated APIs, and guided implementation quality.",
    outcome: "A flexible and maintainable frontend foundation for configurable reporting experiences.",
    tone: "cyan",
    featured: true,
  },
  {
    name: "E-Invoicing Management Platform",
    short: "Enterprise Operations Interface",
    tech: ["SvelteKit", "REST APIs"],
    category: "Enterprise",
    role: "Lead Developer",
    description: "Engineered a SvelteKit enterprise frontend with reusable form components, clear validation states, resilient API integration, and maintainable application structure.",
    highlights: ["Reusable form system", "Validation UI", "Integration states", "Responsive data views"],
    challenge: "Communicating complex multi-system states and validation feedback through a clear, dependable interface.",
    contribution: "Led frontend architecture, API-driven state handling, component standardization, code reviews, and performance refinement.",
    outcome: "A consistent interface foundation for reliable enterprise data-management experiences.",
    tone: "indigo",
    featured: true,
  },
  {
    name: "Visual Low-Code Application Builder",
    short: "Configurable Interface Platform",
    tech: ["Vue.js", "JavaScript"],
    category: "Platform",
    role: "Lead Developer",
    description: "Led Vue.js frontend architecture for a visual builder, creating reusable UI primitives, dynamic rendering patterns, and complex configuration experiences.",
    highlights: ["Visual editing UI", "Dynamic rendering", "Component registry", "Configuration patterns"],
    challenge: "Supporting flexible interface composition while preserving predictable rendering, state behavior, and maintainable code.",
    contribution: "Architected editor patterns, reusable components, dynamic form systems, integration layers, and frontend team standards.",
    outcome: "A reusable frontend system for composing configurable application interfaces.",
    tone: "violet",
    featured: true,
  },
  {
    name: "Warehouse Automation Mobile Application",
    short: "Hybrid Mobile Operations Interface",
    tech: ["Vue.js", "Capacitor"],
    category: "Mobile",
    role: "Lead Developer",
    description: "Led a Vue.js and Capacitor mobile frontend with reusable mobile components, device integration, offline-aware states, and responsive interaction design.",
    highlights: ["Hybrid mobile UI", "Device integration", "Offline-aware states", "Reusable components"],
    challenge: "Creating reliable mobile interactions across device constraints and intermittent connectivity without exposing implementation-specific logic.",
    contribution: "Directed frontend architecture, mobile UI patterns, integration handling, performance optimization, and implementation reviews.",
    outcome: "A maintainable hybrid application foundation designed for dependable operational use.",
    tone: "green",
    featured: true,
  },
  ...[
    ["Enterprise Sales Management Portal", "Enterprise operations interface", ["Vue.js"], "Enterprise"],
    ["Project Planning Application", "Planning and delivery interface", ["Vue.js"], "Productivity"],
    ["Reusable UI Library", "Shared enterprise component system", ["Vue.js", "SvelteKit"], "Platform"],
    ["Real-Time Server Monitoring Dashboard", "Real-time data visualization interface", ["SvelteKit"], "Data"],
    ["Business Process Automation Suite", "Configurable automation interface", ["Vue.js"], "Automation"],
    ["Mobile Approval Management Application", "Responsive mobile management interface", ["SvelteKit"], "Automation"],
    ["Enterprise Data Management Platform", "Enterprise data workspace", ["Vue.js"], "Data"],
    ["Multi-System Integration Platform", "Integration management interface", ["Vue.js", "REST APIs"], "Enterprise"],
  ].map(([name, short, tech, category], index) => ({
    name: name as string,
    short: short as string,
    tech: tech as string[],
    category: category as string,
    role: "Lead Developer",
    description: `${short} engineered with reusable Vue.js or SvelteKit components, clear information architecture, API integration, and maintainable frontend patterns.`,
    highlights: ["Reusable components", "Complex UI states", "API integration", "Responsive UX"],
    challenge: "Translating complex enterprise requirements into a clear, extensible interface without exposing proprietary implementation details.",
    contribution: "Led frontend implementation, component architecture, integration patterns, code reviews, and delivery collaboration.",
    outcome: "A maintainable frontend experience designed around scalable engineering practices.",
    tone: ["blue", "indigo", "cyan", "green"][index % 4],
  })),
];

const expertise = [
  ["Enterprise Frontend Architecture", "Scalable foundations for complex, evolving web products.", "layers"],
  ["Reusable UI Component Systems", "Consistent building blocks that improve quality and delivery.", "code"],
  ["Workflow Automation Interfaces", "Human-centered experiences for complex process logic.", "flow"],
  ["Dynamic Form & Report Builders", "Flexible visual tools for configuring data and behavior.", "chart"],
  ["Data-Intensive Dashboards", "Clear, responsive interfaces for operational information.", "terminal"],
  ["Frontend Performance", "Fast, resilient experiences built through careful optimization.", "speed"],
  ["Hybrid Mobile Applications", "Reliable mobile workflows with offline-first thinking.", "mobile"],
  ["Technical Leadership", "Architecture guidance, mentoring, reviews, and team enablement.", "people"],
] as const;

function SectionHeading({ eyebrow, title, copy }: { eyebrow: string; title: string; copy?: string }) {
  return (
    <div className="section-heading reveal">
      <span className="eyebrow"><span>{eyebrow}</span></span>
      <h2>{title}</h2>
      {copy && <p>{copy}</p>}
    </div>
  );
}

function ProjectVisual({ project, compact = false }: { project: Project; compact?: boolean }) {
  return (
    <div className={`project-visual ${project.tone} ${compact ? "compact" : ""}`} aria-hidden="true">
      <div className="mock-window">
        <div className="mock-top"><span /><span /><span /><b>concept-ui / dummy-data</b></div>
        <div className="mock-body">
          <div className="mock-sidebar">
            <i className="active" /><i /><i /><i /><i />
          </div>
          <div className="mock-content">
            <div className="mock-heading"><span /><small /></div>
            {project.category === "Automation" || project.category === "Platform" ? (
              <div className="flow-canvas"><b /><b /><b /><i /><i /></div>
            ) : project.category === "Data" ? (
              <div className="chart-canvas"><i /><i /><i /><i /><i /><i /></div>
            ) : project.category === "Mobile" ? (
              <div className="phone-canvas"><span /><b /><b /><b /></div>
            ) : (
              <div className="board-canvas"><div><i /><i /><i /></div><div><i /><i /></div><div><i /><i /><i /></div></div>
            )}
          </div>
        </div>
      </div>
      <div className="visual-orb" />
    </div>
  );
}

function App() {
  const [dark, setDark] = useState(true);
  const [menuOpen, setMenuOpen] = useState(false);
  const [techFilter, setTechFilter] = useState("All");
  const [categoryFilter, setCategoryFilter] = useState("All");
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  const [copied, setCopied] = useState(false);
  const [formStatus, setFormStatus] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);

  useEffect(() => {
    document.documentElement.dataset.theme = dark ? "dark" : "light";
  }, [dark]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => entries.forEach((entry) => entry.isIntersecting && entry.target.classList.add("visible")),
      { threshold: 0.12 },
    );
    document.querySelectorAll(".reveal").forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    const close = (event: KeyboardEvent) => event.key === "Escape" && setSelectedProject(null);
    window.addEventListener("keydown", close);
    document.body.classList.toggle("modal-open", Boolean(selectedProject));
    return () => window.removeEventListener("keydown", close);
  }, [selectedProject]);

  const filteredProjects = useMemo(
    () => projects.filter((project) =>
      (techFilter === "All" || project.tech.some((tech) => tech.includes(techFilter))) &&
      (categoryFilter === "All" || project.category === categoryFilter)
    ),
    [techFilter, categoryFilter],
  );

  const copyEmail = async () => {
    await navigator.clipboard.writeText("mithiran45@gmail.com");
    setCopied(true);
    window.setTimeout(() => setCopied(false), 1800);
  };

  const submitForm = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const form = event.currentTarget;
    if (!form.checkValidity()) {
      setFormStatus("Please complete all required fields.");
      form.reportValidity();
      return;
    }

    const formData = new FormData(form);
    const name = String(formData.get("name") || "").trim();
    const email = String(formData.get("email") || "").trim();
    const subject = String(formData.get("subject") || "").trim();
    const message = String(formData.get("message") || "").trim();

    setIsSubmitting(true);
    setFormStatus("Sending your message...");

    try {
      const response = await fetch("https://formsubmit.co/ajax/mithiran45@gmail.com", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify({
          name,
          email,
          _subject: `Portfolio Contact from ${name}: ${subject}`,
          _replyto: email,
          message,
        }),
      });

      if (response.ok) {
        setFormStatus("Thank you! Your message has been sent successfully to Mithiran.");
        form.reset();
      } else {
        throw new Error("Form submission service error.");
      }
    } catch {
      // Fallback: Open email client with pre-filled details so message is never lost
      const mailtoUrl = `mailto:mithiran45@gmail.com?subject=${encodeURIComponent(
        `Portfolio Contact: ${subject} (${name})`
      )}&body=${encodeURIComponent(
        `Name: ${name}\nEmail: ${email}\n\nMessage:\n${message}`
      )}`;
      window.location.href = mailtoUrl;
      setFormStatus("Direct sending was unavailable. Opened your email client to complete sending.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="site-shell">
      <header className="nav-wrap">
        <nav className="nav container" aria-label="Main navigation">
          <a className="brand" href="#home" aria-label="Mithiran Kumar home"><span>MK</span></a>
          <div className="nav-links">
            <a href="#home">Home</a>
            {navLinks.map((link) => <a key={link} href={`#${link.toLowerCase()}`}>{link}</a>)}
          </div>
          <div className="nav-actions">
            <button className="icon-button" onClick={() => setDark(!dark)} aria-label={`Switch to ${dark ? "light" : "dark"} theme`}>
              <Icon name={dark ? "sun" : "moon"} />
            </button>
            <a className="button button-small button-outline resume-button" href="/Mithiran-Kumar-Resume.html" download>
              <Icon name="download" size={17} /> Resume
            </a>
            <button className="icon-button menu-button" onClick={() => setMenuOpen(!menuOpen)} aria-expanded={menuOpen} aria-label="Toggle navigation">
              <Icon name={menuOpen ? "close" : "menu"} />
            </button>
          </div>
        </nav>
        <div className={`mobile-nav ${menuOpen ? "open" : ""}`}>
          {["Home", ...navLinks].map((link) => <a key={link} onClick={() => setMenuOpen(false)} href={`#${link.toLowerCase()}`}>{link}</a>)}
          <a href="/Mithiran-Kumar-Resume.html" download>Download Resume <Icon name="download" size={18} /></a>
        </div>
      </header>

      <main>
        <section id="home" className="hero">
          <div className="hero-grid-bg" aria-hidden="true" />
          <div className="hero-orb orb-one" aria-hidden="true" />
          <div className="hero-orb orb-two" aria-hidden="true" />
          <div className="container hero-content">
            <div className="hero-copy">
              <div className="availability"><span /> Open to meaningful product opportunities</div>
              <p className="hero-kicker">Frontend systems · Product experience · Team leadership</p>
              <h1>I make complex software feel <em>remarkably simple.</em></h1>
              <p className="hero-description">I’m Mithiran Kumar, a Frontend Lead who turns ambitious enterprise ideas into fast, intuitive products—and helps engineering teams deliver them with confidence.</p>
              <div className="hero-actions">
                <a className="button button-primary" href="#projects">Explore selected work <Icon name="arrow" /></a>
                <a className="button button-ghost" href="#contact">Let’s work together</a>
              </div>
              <div className="hero-proof" aria-label="Career highlights">
                <div><strong>6+</strong><span>Years crafting<br />digital products</span></div>
                <div><strong>14</strong><span>Enterprise systems<br />shaped & shipped</span></div>
                <div><strong>01</strong><span>Frontend lead<br />from idea to launch</span></div>
              </div>
            </div>
            <div className="hero-stage" aria-label="Frontend engineering profile visual">
              <div className="showcase-card">
                <div className="showcase-bar">
                  <div className="showcase-brand"><span>MK</span><b>Product command</b></div>
                  <div className="showcase-avatar">MK</div>
                </div>
                <div className="showcase-body">
                  <div className="showcase-heading"><span>Interface health</span><small>Live overview</small></div>
                  <div className="showcase-metrics">
                    <div><span>Experience score</span><strong>94.8</strong><i>+12.4%</i></div>
                    <div><span>Reusable coverage</span><strong>86%</strong><i>On target</i></div>
                  </div>
                  <div className="showcase-chart">
                    <div className="chart-label"><span>Product momentum</span><b>Jan — Jun</b></div>
                    <svg viewBox="0 0 460 130" preserveAspectRatio="none" aria-hidden="true">
                      <defs><linearGradient id="chartFill" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stopColor="currentColor" stopOpacity=".28" /><stop offset="1" stopColor="currentColor" stopOpacity="0" /></linearGradient></defs>
                      <path className="chart-area" d="M0 112 C48 104 62 82 105 88 S170 110 214 69 S280 78 324 45 S398 62 460 12 L460 130 L0 130 Z" />
                      <path className="chart-line" d="M0 112 C48 104 62 82 105 88 S170 110 214 69 S280 78 324 45 S398 62 460 12" />
                    </svg>
                  </div>
                  <div className="showcase-footer"><span><i /> Systems stable</span><b>SvelteKit · Vue · TypeScript</b></div>
                </div>
              </div>
              <div className="insight-card insight-top"><span>Performance</span><strong>2.4×</strong><small>Faster interface delivery</small></div>
              <div className="insight-card insight-bottom"><span>Design systems</span><div><i /><i /><i /><i /></div><small>Built to scale</small></div>
              <div className="experience-medallion"><strong>6+</strong><span>Years of<br />product craft</span></div>
            </div>
          </div>
          <div className="container credibility-band">
            <span>Building at the intersection of</span>
            <div><b>SvelteKit</b><i /> <b>Vue.js</b><i /> <b>Enterprise UX</b><i /> <b>Frontend Architecture</b></div>
          </div>
        </section>

        <section id="about" className="section about-section">
          <div className="container">
            <SectionHeading eyebrow="01 / The approach" title="More than polished screens. Products built to last." />
            <div className="about-grid">
              <div className="about-story reveal">
                <p className="lead">I’m a frontend engineer and technical leader focused on turning complex enterprise requirements into clear, fast, and scalable product experiences.</p>
                <p>At Crayonte Technologies, I lead frontend architecture and development across workflow platforms, low-code tools, reporting systems, and mobile applications. My work spans system design, reusable UI foundations, performance, deployments, and the details that make software feel dependable.</p>
                <p>I stay close to the craft while helping teams make better technical decisions through mentoring, thoughtful reviews, and shared standards.</p>
                <div className="about-note"><Icon name="terminal" /><span><b>Current focus</b> SvelteKit architecture, enterprise UX, and frontend team enablement.</span></div>
              </div>
              <div className="stats-grid reveal">
                <div className="stat-card accent"><strong>6+</strong><span>Years building professional frontend products</span></div>
                <div className="stat-card"><strong>2020</strong><span>Started building enterprise applications</span></div>
                <div className="stat-card wide"><span className="stat-label">Currently</span><strong>Frontend Lead</strong><span>Crayonte Technologies Pvt. Limited</span></div>
                <div className="stat-card wide stack-card"><span className="stat-label">Core stack</span><div><b>SvelteKit</b><b>Vue.js</b><b>Nuxt.js</b><b>TypeScript</b></div></div>
              </div>
            </div>
          </div>
        </section>

        <section id="skills" className="section skills-section">
          <div className="container">
            <SectionHeading eyebrow="02 / Capabilities" title="A modern toolkit for ambitious digital products." copy="Practical expertise shaped by shipping and maintaining complex products—not chasing trends." />
            <div className="skills-grid">
              {skills.map((skill, index) => (
                <article className={`skill-card reveal ${skill.featured ? "featured" : ""}`} key={skill.title} style={{ transitionDelay: `${Math.min(index * 40, 200)}ms` }}>
                  <div className="skill-icon"><Icon name={skill.icon} /></div>
                  <h3>{skill.title}</h3>
                  <div className="skill-tags">{skill.items.map((item) => <span key={item}>{item}</span>)}</div>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section id="experience" className="section experience-section">
          <div className="container">
            <SectionHeading eyebrow="03 / Experience" title="From first architecture decision to confident launch." />
            <div className="experience-list">
              <div className="experience-layout">
                <div className="timeline-meta">
                  <span className="timeline-dot" />
                  <p>Jan 2020 — Present</p>
                  <small>Tamil Nadu, India</small>
                </div>
                <article className="experience-card">
                  <div className="experience-head">
                    <div><span>Crayonte Technologies Pvt. Limited</span><h3>Frontend Lead Developer</h3></div>
                    <div className="current-badge"><i /> Current position</div>
                  </div>
                  <p>Leading the architecture and delivery of sophisticated enterprise interfaces across workflow automation, low-code platforms, business operations, reporting, and mobile.</p>
                  <div className="responsibilities">
                    {[
                      "Leading frontend architecture and development",
                      "Building scalable enterprise web applications",
                      "Creating reusable component libraries",
                      "Mentoring developers and conducting code reviews",
                      "Implementing dashboards and visual builders",
                      "Optimizing application performance",
                      "Managing source control and production releases",
                      "Collaborating with cross-functional teams",
                    ].map((item) => <div key={item}><Icon name="check" size={16} /><span>{item}</span></div>)}
                  </div>
                  <div className="experience-stack"><span>SvelteKit</span><span>Vue.js</span><span>Nuxt.js</span><span>Capacitor</span><span>Frontend Architecture</span></div>
                </article>
              </div>

              <div className="experience-layout">
                <div className="timeline-meta">
                  <span className="timeline-dot previous" />
                  <p>Jun 2019 — Jan 2020</p>
                  <small>8 months</small>
                </div>
                <article className="experience-card previous-role">
                  <div className="experience-head">
                    <div><span>Betamonks · Full-time</span><h3>Junior Executive</h3><small>Backend Developer</small></div>
                    <div className="role-badge"><Icon name="terminal" size={15} /> Foundation role</div>
                  </div>
                  <p>Supported the development and maintenance of web applications through backend implementation, issue resolution, and minor change requests based on client and business requirements.</p>
                  <div className="responsibilities">
                    {[
                      "Assisted with backend application development and maintenance",
                      "Resolved minor bugs and production issues",
                      "Implemented client and business change requests",
                      "Supported API development and backend logic enhancements",
                      "Debugged issues across existing application modules",
                      "Handled code updates, testing, and deployment support",
                    ].map((item) => <div key={item}><Icon name="check" size={16} /><span>{item}</span></div>)}
                  </div>
                  <p className="experience-learning">Built a practical foundation in backend workflows, debugging, requirement analysis, and maintaining production software in a collaborative development environment.</p>
                  <div className="experience-stack"><span>Backend Development</span><span>API Development</span><span>Debugging</span><span>Production Support</span><span>Deployment</span></div>
                </article>
              </div>
            </div>
          </div>
        </section>

        <section id="projects" className="section projects-section">
          <div className="container">
            <div className="project-heading-row">
              <SectionHeading eyebrow="04 / Selected work" title="Complex products made clear, useful, and scalable." copy="A selection of platforms where architecture, product thinking, and interface craft come together." />
              <div className="project-count"><strong>{String(projects.length).padStart(2, "0")}</strong><span>Products &<br />systems</span></div>
            </div>
            <div className="filters reveal" aria-label="Project filters">
              <div className="filter-label"><Icon name="filter" size={17} /> Filter by</div>
              <div className="filter-group">
                <span>Technology</span>
                {["All", "SvelteKit", "Vue.js", "Capacitor"].map((filter) => (
                  <button key={filter} className={techFilter === filter ? "active" : ""} onClick={() => setTechFilter(filter)}>{filter === "Capacitor" ? "Mobile" : filter}</button>
                ))}
              </div>
              <div className="filter-group categories">
                <span>Category</span>
                {["All", "Automation", "Data", "Platform", "Enterprise"].map((filter) => (
                  <button key={filter} className={categoryFilter === filter ? "active" : ""} onClick={() => setCategoryFilter(filter)}>{filter}</button>
                ))}
              </div>
            </div>
            <div className="projects-grid">
              {filteredProjects.map((project, index) => (
                <article className={`project-card reveal ${index === 0 && project.featured ? "project-wide" : ""}`} key={project.name}>
                  <ProjectVisual project={project} compact={!project.featured} />
                  <div className="project-info">
                    <div className="project-meta"><span>{project.category}</span><i /><span>{project.role}</span></div>
                    <span className="project-classification">Professional Experience — Conceptual Illustration</span>
                    <h3>{project.name}</h3>
                    <h4>{project.short}</h4>
                    <p>{project.description}</p>
                    <div className="project-bottom">
                      <div className="tech-badges">{project.tech.map((tech) => <span key={tech}>{tech}</span>)}</div>
                      <button className="case-button" onClick={() => setSelectedProject(project)}>View case study <Icon name="arrow" size={18} /></button>
                    </div>
                  </div>
                </article>
              ))}
            </div>
            {filteredProjects.length === 0 && <div className="empty-state">No projects match these filters. Try another combination.</div>}
            <p className="projects-disclaimer">Professional case studies represent generalized engineering experience. Project names and visuals are illustrative and do not disclose or reproduce proprietary employer information.</p>
          </div>
        </section>

        <section className="section expertise-section">
          <div className="container">
            <SectionHeading eyebrow="05 / What I specialize in" title="Where engineering depth meets product impact." />
            <div className="expertise-grid">
              {expertise.map(([title, copy, icon], index) => (
                <article className={`expertise-card reveal expertise-${index + 1}`} key={title}>
                  <div className="expertise-icon"><Icon name={icon as IconName} /></div>
                  <h3>{title}</h3><p>{copy}</p><span className="card-index">0{index + 1}</span>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="section journey-section">
          <div className="container">
            <SectionHeading eyebrow="06 / Career journey" title="A continuous path of building, learning, and leading." />
            <div className="journey-line reveal">
              {[
                ["2016 — 2019", "B.Sc. Computer Science", "GTN Arts College"],
                ["2020", "Entered professional frontend development", "Building enterprise applications"],
                ["2020 — Now", "Expanded across modern frontend systems", "Vue.js, SvelteKit, mobile, architecture"],
                ["Present", "Frontend Lead Developer", "Leading teams and enterprise product delivery"],
              ].map(([year, title, copy], index) => (
                <div className="journey-item" key={year}>
                  <div className={`journey-node ${index === 3 ? "active" : ""}`}><span>{index + 1}</span></div>
                  <span className="journey-year">{year}</span><h3>{title}</h3><p>{copy}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section id="contact" className="section contact-section">
          <div className="contact-glow" aria-hidden="true" />
          <div className="container contact-grid">
            <div className="contact-copy reveal">
              <span className="eyebrow"><span>07 / Contact</span></span>
              <h2>Have an idea? Let’s build something <em>exceptional.</em></h2>
              <p>I’m open to senior frontend, technical leadership, and ambitious product opportunities where quality engineering matters.</p>
              <div className="contact-details">
                <div><span className="contact-icon"><Icon name="mail" /></span><span><small>Email me</small><b>mithiran45@gmail.com</b></span><button onClick={copyEmail} aria-label="Copy email"><Icon name={copied ? "check" : "copy"} size={18} /></button></div>
                <div><span className="contact-icon"><Icon name="pin" /></span><span><small>Based in</small><b>Tamil Nadu, India</b></span></div>
              </div>
              <div className="contact-socials">
                <a href="https://www.linkedin.com/in/mithiran-kumar-354988206"><Icon name="linkedin" /> LinkedIn <Icon name="external" size={15} /></a>
                <a href="https://github.com/MITHIRAN-KUMAR45"><Icon name="github" /> GitHub <Icon name="external" size={15} /></a>
              </div>
              {copied && <div className="copy-toast">Email copied to clipboard</div>}
            </div>
            <form className="contact-form reveal" onSubmit={submitForm} noValidate>
              <div className="form-header"><span>Start a conversation</span><i /></div>
              <div className="field-row">
                <label><span>Your name</span><input name="name" type="text" placeholder="What should I call you?" required /></label>
                <label><span>Email address</span><input name="email" type="email" placeholder="you@company.com" required /></label>
              </div>
              <label><span>Subject</span><input name="subject" type="text" placeholder="What would you like to discuss?" required /></label>
              <label><span>Message</span><textarea name="message" rows={5} placeholder="Tell me a little about the opportunity or idea..." required /></label>
              <button className="button button-primary submit-button" type="submit" disabled={isSubmitting}>
                {isSubmitting ? "Sending message..." : <>Send message <Icon name="arrow" /></>}
              </button>
              {formStatus && <p className="form-status" role="status">{formStatus}</p>}
            </form>
          </div>
        </section>
      </main>

      <footer>
        <div className="container footer-top">
          <a className="brand footer-brand" href="#home"><span>MK</span><b>Mithiran Kumar<small>Frontend Lead Developer</small></b></a>
          <div className="footer-links">{navLinks.map((link) => <a key={link} href={`#${link.toLowerCase()}`}>{link}</a>)}</div>
          <div className="footer-socials"><a href="https://github.com/MITHIRAN-KUMAR45" aria-label="GitHub"><Icon name="github" /></a><a href="https://www.linkedin.com/in/mithiran-kumar-354988206" aria-label="LinkedIn"><Icon name="linkedin" /></a></div>
        </div>
        <div className="container footer-bottom"><span>© {new Date().getFullYear()} Mithiran Kumar. All rights reserved.</span><span>Designed & built with passion and precision.</span></div>
      </footer>

      {selectedProject && (
        <div className="modal-backdrop" role="presentation" onMouseDown={(event) => event.target === event.currentTarget && setSelectedProject(null)}>
          <div className="case-modal" role="dialog" aria-modal="true" aria-labelledby="case-title">
            <button className="modal-close" onClick={() => setSelectedProject(null)} aria-label="Close case study"><Icon name="close" /></button>
            <ProjectVisual project={selectedProject} />
            <div className="modal-content">
              <div className="project-meta"><span>{selectedProject.category}</span><i /><span>{selectedProject.role}</span></div>
              <span className="project-classification">Professional Experience — Conceptual Illustration</span>
              <h2 id="case-title">{selectedProject.name}</h2><h3>{selectedProject.short}</h3>
              <p className="modal-intro">{selectedProject.description}</p>
              <div className="case-grid">
                <div><span>My role</span><p>{selectedProject.role} — frontend architecture, interface engineering, and delivery leadership.</p></div>
                <div><span>Technology stack</span><div className="tech-badges">{selectedProject.tech.map((tech) => <b key={tech}>{tech}</b>)}</div></div>
                <div><span>Technical challenge</span><p>{selectedProject.challenge}</p></div>
                <div><span>My contribution</span><p>{selectedProject.contribution}</p></div>
              </div>
              <div className="feature-list"><span>Key features</span><div>{selectedProject.highlights.map((item) => <b key={item}><Icon name="check" size={15} />{item}</b>)}</div></div>
              <div className="outcome"><Icon name="chart" /><span><b>Outcome & impact</b>{selectedProject.outcome}</span></div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default App;
