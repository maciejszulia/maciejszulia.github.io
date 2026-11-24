import { useState, useEffect } from 'react';
import './App.scss';

const cvData = {
  name: "Maciej Szulia",
  title: "Mid-level Full-Stack Developer & AI Engineer",
  location: "Poland; remote, hybrid or on-site",
  email: "maciej.szulia@gmail.com",
  linkedin: "linkedin.com/in/maciej-szulia",
  github: "github.com/maciejszulia",
  gitlab: "gitlab.com/maciejszulia",
  profileText: "I write the requirements, AI agents write the code, and I accept the result on tests. That is how I built the www.agrocamping.eu booking website and the reception panel that a 40-bed accommodation business runs on: over 2,000 commits since July 2026. I also wrote Controlled Polish, a rule set that gives every sentence one meaning.",
  skills: [
    { name: "Build", items: "TypeScript, React, Next.js, Node.js, Python, SQL" },
    { name: "AI & automation", items: "Claude Code, Codex, Hermes, MCP servers, agent orchestration" },
    { name: "Run", items: "Linux, Docker, GitLab CI/CD, tests before every release" }
  ],
  experiences: [
    { period: "Jun 2015 – Present", company: "AgroCamping Olsztyn", location: "Olsztyn, Poland", role: "IT and operations", bullets: [
        "Requirements, AI agent coordination, acceptance and releases of the booking website (3 languages, own API, Stripe) and the reception panel (bookings, mail, WhatsApp, financial records)"
      ], badge: "" },
    { period: "Aug 2022 – Nov 2023", company: "CoreMedia AG project (outsourced)", location: "Remote", role: "Frontend Developer", bullets: [
        "Frontend for CoreMedia, a German enterprise CMS vendor: HTML, SCSS, JavaScript, TypeScript, FreeMarker"
      ], badge: "remote" },
    { period: "Mar 2022 – May 2022", company: "P.H.U. BELFLOOR", location: "Olsztyn, Poland", role: "Online store developer (PrestaShop)", bullets: [
        "Store front end, product templates and training of 2 employees; reference letter available"
      ], badge: "" },
    { period: "Feb 2022 – Oct 2022", company: "BEL-POL Sp. z o.o.", location: "Olsztyn, Poland", role: "Front-end Developer, E-commerce & CMS (PrestaShop)", bullets: [
        "Front-end and e-commerce work on PrestaShop: PHP, Smarty, HTML, CSS, JavaScript, MySQL"
      ], badge: "" },
    { period: "Jan 2020 – Oct 2020", company: "Pakomat.pl", location: "Olsztyn, Poland", role: "IT Executive, E-commerce & CMS", bullets: [
        "PrestaShop shop integrated with InsERT Sello"
      ], badge: "" }
  ],
  education: { degree: "Computer Science (completed); year group representative", school: "University of Warmia and Mazury in Olsztyn, Faculty of Mathematics and Computer Science", date: "2020 – 2024" },
  languages: [
    { name: "Polish", level: "Native" },
    { name: "English", level: "C1 (Cambridge FCE, 2013)" },
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
            <div className="status-dot">dostępny: zdalnie, hybrydowo albo stacjonarnie</div>
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