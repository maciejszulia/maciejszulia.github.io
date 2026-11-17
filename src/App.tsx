import { useState, useEffect } from 'react';
import './App.scss';

const cvData = {
  name: "Maciej Szulia",
  title: "Mid-level Full-Stack Developer & AI Engineer",
  location: "Poland, remote or hybrid",
  email: "maciej.szulia@gmail.com",
  linkedin: "linkedin.com/in/maciej-szulia",
  github: "github.com/maciejszulia",
  gitlab: "gitlab.com/maciejszulia",
  profileText: "Mid-level full-stack developer and AI engineer. I design and run information systems that work in production: the www.agrocamping.eu booking website in three languages with its own API and Stripe payments, and a reception panel for bookings, mail and financial records. I lead a team of AI agents (Claude Code, Codex, Hermes) and check every change with tests and type checks before release. Earlier I spent over a year as a Frontend Developer on the CoreMedia project through Dev-heroes and worked on PrestaShop e-commerce. I also wrote Polszczyzna Kontrolowana, a rule set that gives every Polish sentence exactly one meaning.",
  skills: [
    { name: "Frontend", items: "TypeScript, JavaScript, React, Next.js, Astro, HTML5, CSS3, SCSS" },
    { name: "Backend & databases", items: "Node.js, Express, Prisma, Zod, REST APIs, Stripe, MySQL, SQLite, SQL, Python" },
    { name: "AI & automation", items: "Claude Code, Codex (OMX), Hermes Agent, AI agent orchestration, Claude Code skills" },
    { name: "Infrastructure", items: "Linux (runit), Docker, k3d (local Kubernetes), GitLab CI/CD, nginx, Tailscale" },
    { name: "CMS & e-commerce", items: "PrestaShop, InsERT Sello, FreeMarker, Smarty, PHP" },
    { name: "Dev tools", items: "Git, GitHub, GitLab, Jira" }
  ],
  experiences: [
    { period: "Jun 2015 – Present", company: "AgroCamping Olsztyn", location: "Olsztyn, Poland", role: "IT and operations", bullets: [
        "Design and run the booking system of an accommodation business: www.agrocamping.eu in Polish, English and German with a separate booking API (Next.js, React, TypeScript, Node.js, MySQL, Stripe)",
        "Reception panel for bookings, stays, Gmail import, WhatsApp messages and financial records (Astro, TypeScript, Express, Prisma, SQLite, Zod)",
        "Infrastructure: Linux with runit, Docker, k3d, GitLab CI/CD with a self-hosted runner, nginx, Tailscale, weekly security jobs",
        "Lead a team of AI agents (Claude Code, Codex, Hermes): split work into tasks, set acceptance criteria, review every change; lint, type checks and tests run before each release"
      ], badge: "" },
    { period: "Aug 2022 – Nov 2023", company: "Dev-heroes Sp. z o.o.", location: "CoreMedia project", role: "Frontend Developer", bullets: [
        "Frontend work on the CoreMedia project (enterprise CMS and digital experience platform, Hamburg), outsourced through Dev-heroes",
        "HTML, SCSS, JavaScript, TypeScript, FreeMarker"
      ], badge: "remote" },
    { period: "Feb 2022 – Oct 2022", company: "BEL-POL Sp. z o.o.", location: "Olsztyn, Poland", role: "Front-end Developer, E-commerce & CMS (PrestaShop)", bullets: [
        "Front-end and e-commerce work on PrestaShop, first part-time during studies, then full-time",
        "PrestaShop, PHP, Smarty, HTML, CSS, JavaScript, MySQL"
      ], badge: "" },
    { period: "Jan 2020 – Oct 2020", company: "Pakomat.pl", location: "Olsztyn, Poland", role: "IT Executive, E-commerce & CMS", bullets: [
        "Ran and developed the PrestaShop shop and its integration with InsERT Sello"
      ], badge: "" }
  ],
  education: { degree: "Computer Science (completed), general computer science", school: "University of Warmia and Mazury in Olsztyn, Faculty of Mathematics and Computer Science", date: "2020 – 2024" },
  languages: [
    { name: "Polish", level: "Native" },
    { name: "English", level: "C1" },
    { name: "German", level: "B2" }
  ]
};

function App() {
  const [darkMode, setDarkMode] = useState(() => localStorage.getItem('theme') === 'dark');

  useEffect(() => {
    document.body.classList.toggle('dark', darkMode);
  }, [darkMode]);

  const toggleTheme = () => {
    const newDark = !darkMode;
    setDarkMode(newDark);
    if (newDark) {
      document.body.classList.add('dark');
      localStorage.setItem('theme', 'dark');
    } else {
      document.body.classList.remove('dark');
      localStorage.setItem('theme', 'light');
    }
  };

  return (
    <div className="container">
      <header>
        <div className="theme-switch-wrapper">
          <button className="theme-switch" onClick={toggleTheme}>
            {darkMode ? 'Jasny' : 'Ciemny'}
          </button>
        </div>
        <div className="header-top">
          <img src="/photo.jpg" alt="zdjęcie" className="profile-photo" onError={(e) => (e.currentTarget.style.display = 'none')} />
          <div className="header-title">
            <div className="tag">✦ CV | 2026 ✦</div>
            <h1>Maciej<br /><em>Szulia</em></h1>
            <p className="subtitle">{cvData.title} | {cvData.location}</p>
          </div>
          <div className="contact-block">
            <a href={`mailto:${cvData.email}`}>{cvData.email}</a>
            <a href={`https://${cvData.linkedin}`} target="_blank">{cvData.linkedin}</a>
            <a href={`https://${cvData.github}`} target="_blank">{cvData.github}</a>
            <a href={`https://${cvData.gitlab}`} target="_blank">{cvData.gitlab}</a>
            <div className="status-dot">dostępny: zdalnie albo hybrydowo</div>
          </div>
        </div>
      </header>

      <section className="profile-section">
        <div className="section-label">▸ profile</div>
        <p className="profile-text">{cvData.profileText}</p>
      </section>

      <section>
        <div className="section-label">▸ umiejętności techniczne</div>
        <div className="skills-grid">
          {cvData.skills.map(s => (
            <div className="skill-block" key={s.name}>
              <div className="skill-block-name">{s.name}</div>
              <div className="skill-block-items">{s.items}</div>
            </div>
          ))}
        </div>
      </section>

      <section>
        <div className="section-label">▸ doświadczenie</div>
        {cvData.experiences.map(exp => (
          <div className="exp-item" key={exp.company}>
            <div className="exp-meta">
              <div className="exp-date">{exp.period}</div>
              <div className="exp-company">{exp.company}</div>
              <div className="exp-location">{exp.location}</div>
              {exp.badge && <div className="exp-badge">{exp.badge}</div>}
            </div>
            <div className="exp-content">
              <div className="exp-role">{exp.role}</div>
              <ul className="exp-bullets">
                {exp.bullets.map((b, i) => <li key={i}>{b}</li>)}
              </ul>
            </div>
          </div>
        ))}
      </section>

      <section>
        <div className="section-label">▸ wykształcenie</div>
        <div className="edu-item">
          <div><div className="edu-degree">{cvData.education.degree}</div><div className="edu-school">{cvData.education.school}</div></div>
          <div className="edu-date">{cvData.education.date}</div>
        </div>
      </section>

      <section>
        <div className="section-label">▸ języki</div>
        <div className="skills-grid" style={{ gridTemplateColumns: 'repeat(2, 200px)' }}>
          {cvData.languages.map(lang => (
            <div className="skill-block" key={lang.name}>
              <div className="skill-block-name">{lang.name}</div>
              <div className="skill-block-items">{lang.level}</div>
            </div>
          ))}
        </div>
      </section>

      <footer>
        <div>Maciej Szulia | CV</div>
        <button className="print-btn" onClick={() => window.print()}>Zapisz PDF / Drukuj</button>
      </footer>
    </div>
  );
}

export default App;