import { useState, useEffect } from 'react';
import './App.scss';

const cvData = {
  name: "Maciej Szulia",
  title: "Mid Front-end / Full-stack Developer",
  location: "Olsztyn, Poland · remote only",
  phone: "+48 662 398 126",
  email: "maciej.szulia@gmail.com",
  linkedin: "linkedin.com/in/maciej-szulia",
  github: "github.com/maciejszulia",
  profileText: "Front-end and full-stack developer with commercial experience across enterprise CMS, e-commerce and agile software teams. Worked remotely as a mid developer at CoreMedia GmbH – a leading German content management company – building components in TypeScript, React and Java. Strong foundation in computer science from university studies covering algorithms, databases, networking and operating systems. Entrepreneurial mindset backed by 10+ years running an independent business. Currently returning to full-time remote development.",
  skills: [
    { name: "Frontend", items: "TypeScript, JavaScript, React, HTML5, CSS3, SCSS" },
    { name: "Backend & databases", items: "Java, Spring, REST APIs, MySQL, PostgreSQL, Python, SQL" },
    { name: "CMS & e-commerce", items: "CoreMedia Content Cloud, PrestaShop, InsERT Sello, SEO" },
    { name: "Infrastructure", items: "Linux (Ubuntu, Debian, Arch, RHEL), Docker, AWS, Bash, Nginx, networking" },
    { name: "CS fundamentals", items: "Algorithms & data structures, computer architecture, operating systems, computer networks" },
    { name: "Dev tools", items: "Git, Bitbucket, Jira, VSCode, GitHub Copilot, CI/CD" }
  ],
  experiences: [
    { period: "Aug 2022 – Nov 2023", company: "CoreMedia GmbH", location: "Hamburg, Germany", role: "Mid Front-end / Full-stack Developer", bullets: [
        "Developed front-end components within CoreMedia Content Cloud CMS using TypeScript, React and SCSS",
        "Collaborated with international agile team via Jira, Bitbucket and regular code reviews",
        "Worked with Java/Spring backend services and REST APIs in a full-stack capacity",
        "Used Docker for local development environments and contributed to CI/CD pipelines",
        "Leveraged GitHub Copilot to accelerate delivery and maintain code quality"
      ], badge: "remote" },
    { period: "Feb 2022 – Dec 2022", company: "BEL-POL Sp. z o.o.", location: "Olsztyn, Poland", role: "Junior Front-end Developer & CMS Administrator", bullets: [
        "Built and maintained front-end components using HTML5, CSS and SCSS",
        "Managed PrestaShop CMS including configuration, plugins and database operations",
        "Contributed to SEO improvements and digital product delivery"
      ], badge: "" },
    { period: "Jun 2022 – Aug 2022", company: "Dev-Heroes Sp. z o.o.", location: "Wrocław, Poland", role: "Intern Full-stack / Front-end Developer", bullets: [
        "Internship alongside university studies – worked on front-end and full-stack tasks",
        "Used Java, SCSS and Git in a fully remote agile environment"
      ], badge: "remote · intern" },
    { period: "Jan 2020 – Mar 2021", company: "Pakomat.pl", location: "Olsztyn, Poland", role: "IT Executive & E-commerce Administrator", bullets: [
        "Managed e-commerce infrastructure including PrestaShop and InsERT Sello",
        "Maintained backend systems, databases and order processing pipelines"
      ], badge: "" },
    { period: "Jun 2015 – Present", company: "AgroCamping Olsztyn", location: "Self-employed", role: "Business Owner & Operations Manager", bullets: [
        "Founded and independently managed an agritourism and camping business for 10+ years",
        "Managed all digital systems, online presence and customer communication"
      ], badge: "self-employed" }
  ],
  careerBreakNote: "Career break (late 2023 – present) · Family caregiving responsibilities",
  education: { degree: "Computer Science (Informatyka)", school: "Uniwersytet Warmińsko-Mazurski w Olsztynie", date: "2017 – ongoing" },
  languages: [
    { name: "Polish", level: "Native" },
    { name: "English", level: "B2/C1 – technical fluency" }
  ]
};

function App() {
  const [darkMode, setDarkMode] = useState(false);

  useEffect(() => {
    const saved = localStorage.getItem('theme') === 'dark';
    setDarkMode(saved);
    if (saved) document.body.classList.add('dark');
    else document.body.classList.remove('dark');
  }, []);

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
            {darkMode ? '☀️ Jasny' : '🌙 Ciemny'}
          </button>
        </div>
        <div className="header-top">
          <img src="/photo.jpg" alt="zdjęcie" className="profile-photo" onError={(e) => (e.currentTarget.style.display = 'none')} />
          <div className="header-title">
            <div className="tag">✦ CV · 2025 ✦</div>
            <h1>Maciej<br /><em>Szulia</em></h1>
            <p className="subtitle">{cvData.title} — {cvData.location}</p>
          </div>
          <div className="contact-block">
            <a href={`tel:${cvData.phone}`}>📞 {cvData.phone}</a>
            <a href={`mailto:${cvData.email}`}>✉️ {cvData.email}</a>
            <a href={`https://${cvData.linkedin}`} target="_blank">🔗 {cvData.linkedin}</a>
            <a href={`https://${cvData.github}`} target="_blank">🐙 {cvData.github}</a>
            <div className="status-dot">🟢 dostępny · tylko zdalnie</div>
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
        <div className="break-notice">📌 {cvData.careerBreakNote}</div>
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
        <div>Maciej Szulia · CV · Olsztyn</div>
        <button className="print-btn" onClick={() => window.print()}>💾 Zapisz PDF / Drukuj</button>
      </footer>
    </div>
  );
}

export default App;