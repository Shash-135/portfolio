import { useEffect, useState } from 'react';

const navLinks = [
  { label: 'Projects', href: '#projects' },
  { label: 'Skills', href: '#skills' },
  { label: 'Contact', href: '#contact' },
];

const stats = [
  {
    href: 'https://leetcode.com/u/shashank3010/',
    icon: 'fa-code',
    value: '1650',
    label: 'LeetCode Rating',
  },
  {
    href: 'https://www.hackerrank.com/profile/shashanktalekar3',
    icon: 'fa-medal',
    value: 'Gold',
    label: 'HackerRank Badge',
    accent: true,
  },
];

const projects = [
  {
    title: 'Synca',
    description: 'Comprehensive system architecture for real-time collaboration.',
    icon: 'fa-network-wired',
    tags: ['Python', 'Django', 'WebSockets'],
    href: 'https://github.com/Shash-135/Synca',
    cta: 'View Source',
    size: 'bento-large',
    pattern: 'pattern-grid',
  },
  {
    title: 'JalSankalp',
    description: 'Community platform for collective action.',
    icon: 'fa-users',
    tags: ['Platform', 'Social'],
    href: 'https://github.com/Shash-135/JanSankalp',
    cta: 'GitHub',
    size: 'bento-medium',
    pattern: 'pattern-circle',
  },
  {
    title: 'Gym Management System',
    description: 'Frontend implementation for a modern fitness center.',
    icon: 'fa-dumbbell',
    tags: [],
    href: 'https://github.com/Shash-135/Gym-Project',
    cta: 'Source',
    size: 'bento-large',
    pattern: 'pattern-grid',
  },
];

const skillCategories = [
  {
    title: 'Languages',
    items: [
      { prefix: 'fab', icon: 'fa-python', label: 'Python (Expert)' },
      { prefix: 'fab', icon: 'fa-java', label: 'Java' },
      { prefix: 'fas', icon: 'fa-code', label: 'C++ / C' },
      { prefix: 'fas', icon: 'fa-database', label: 'SQL (MySQL, Postgres)' },
      { prefix: 'fab', icon: 'fa-php', label: 'PHP' },
    ],
  },
  {
    title: 'Frameworks & Web',
    items: [
      { prefix: 'fas', icon: 'fa-server', label: 'Django' },
      { prefix: 'fab', icon: 'fa-node-js', label: 'Node.js / Express' },
      { prefix: 'fab', icon: 'fa-react', label: 'React.js' },
      { prefix: 'fas', icon: 'fa-fire', label: 'CodeIgniter' },
      { prefix: 'fas', icon: 'fa-layer-group', label: '.NET / JSP' },
    ],
  },
  {
    title: 'Tools & Databases',
    items: [
      { prefix: 'fab', icon: 'fa-git-alt', label: 'Git / GitHub' },
      { prefix: 'fas', icon: 'fa-leaf', label: 'MongoDB / Neo4j' },
      { prefix: 'fab', icon: 'fa-docker', label: 'Docker' },
      { prefix: 'fab', icon: 'fa-figma', label: 'Figma' },
      { prefix: 'fas', icon: 'fa-terminal', label: 'VS Code' },
    ],
  },
];

function App() {
  const [theme, setTheme] = useState(() => {
    const savedTheme = window.localStorage.getItem('theme');
    if (savedTheme) {
      return savedTheme;
    }

    return window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light';
  });
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isAboutModalOpen, setIsAboutModalOpen] = useState(false);

  useEffect(() => {
    document.documentElement.setAttribute('data-theme', theme);
    window.localStorage.setItem('theme', theme);
  }, [theme]);

  useEffect(() => {
    document.body.style.overflow = isMobileMenuOpen || isAboutModalOpen ? 'hidden' : '';

    return () => {
      document.body.style.overflow = '';
    };
  }, [isMobileMenuOpen, isAboutModalOpen]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('active');
            observer.unobserve(entry.target);
          }
        });
      },
      {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px',
      },
    );

    document.querySelectorAll('.reveal').forEach((element) => observer.observe(element));

    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    if (window.innerWidth < 1024) {
      return undefined;
    }

    const cursorDot = document.querySelector('.cursor-dot');
    const cursorOutline = document.querySelector('.cursor-outline');
    const interactables = document.querySelectorAll('a, button, .card, .theme-toggle');

    if (!cursorDot || !cursorOutline) {
      return undefined;
    }

    const handleMouseMove = (event) => {
      const { clientX, clientY } = event;

      cursorDot.style.left = `${clientX}px`;
      cursorDot.style.top = `${clientY}px`;
      cursorOutline.animate(
        {
          left: `${clientX}px`,
          top: `${clientY}px`,
        },
        { duration: 500, fill: 'forwards' },
      );
    };

    const handleHoverStart = () => cursorDot.classList.add('cursor-hover');
    const handleHoverEnd = () => cursorDot.classList.remove('cursor-hover');

    window.addEventListener('mousemove', handleMouseMove);
    interactables.forEach((element) => {
      element.addEventListener('mouseenter', handleHoverStart);
      element.addEventListener('mouseleave', handleHoverEnd);
    });

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      interactables.forEach((element) => {
        element.removeEventListener('mouseenter', handleHoverStart);
        element.removeEventListener('mouseleave', handleHoverEnd);
      });
    };
  }, []);

  useEffect(() => {
    const handleKeyDown = (event) => {
      if (event.key === 'Escape') {
        setIsMobileMenuOpen(false);
        setIsAboutModalOpen(false);
      }
    };

    document.addEventListener('keydown', handleKeyDown);
    return () => document.removeEventListener('keydown', handleKeyDown);
  }, []);

  const toggleTheme = () => {
    setTheme((currentTheme) => (currentTheme === 'light' ? 'dark' : 'light'));
  };

  const handleInternalLinkClick = (event, selector) => {
    event.preventDefault();
    setIsMobileMenuOpen(false);

    const target = document.querySelector(selector);
    if (target) {
      target.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <>
      <div className="cursor-dot" aria-hidden="true" />
      <div className="cursor-outline" aria-hidden="true" />

      <nav className="navbar">
        <div className="nav-container">
          <div className="logo">
            <svg className="nav-logo" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path
                d="M10 20C10 14.4772 14.4772 10 20 10C25.5228 10 30 14.4772 30 20C30 25.5228 25.5228 30 20 30"
                stroke="url(#logo_grad)"
                strokeWidth="4"
                strokeLinecap="round"
              />
              <path d="M10 30V20M30 10V20" stroke="url(#logo_grad)" strokeWidth="4" strokeLinecap="round" />
              <circle cx="20" cy="20" r="4" fill="url(#logo_grad)" />
              <defs>
                <linearGradient id="logo_grad" x1="10" y1="10" x2="30" y2="30" gradientUnits="userSpaceOnUse">
                  <stop stopColor="#6366F1" />
                  <stop offset="1" stopColor="#06B6D4" />
                </linearGradient>
              </defs>
            </svg>
            Shashank
          </div>

          <div className="nav-menu">
            <div className="desktop-links">
              {navLinks.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  className="nav-link"
                  onClick={(event) => handleInternalLinkClick(event, link.href)}
                >
                  {link.label}
                </a>
              ))}
            </div>

            <button type="button" className="theme-btn theme-toggle" aria-label="Toggle Theme" onClick={toggleTheme}>
              <i className={`fas ${theme === 'dark' ? 'fa-sun' : 'fa-moon'}`} />
            </button>

            <button
              type="button"
              className="theme-btn mobile-only"
              aria-label="Open Menu"
              aria-expanded={isMobileMenuOpen}
              onClick={() => setIsMobileMenuOpen((currentValue) => !currentValue)}
            >
              <i className={`fas ${isMobileMenuOpen ? 'fa-times' : 'fa-bars'}`} />
            </button>
          </div>
        </div>
      </nav>

      <div className={`mobile-menu ${isMobileMenuOpen ? 'active' : ''}`}>
        {navLinks.map((link) => (
          <a
            key={link.label}
            href={link.href}
            className="mobile-link"
            onClick={(event) => handleInternalLinkClick(event, link.href)}
          >
            {link.label}
          </a>
        ))}
      </div>

      <main>
        <section className="hero-section reveal">
          <svg className="hero-logo" viewBox="0 0 500 500" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
            <g stroke="url(#hero_grad)" strokeWidth="1.5" strokeOpacity="0.3">
              <circle cx="250" cy="250" r="200" strokeDasharray="4 4" />
              <circle cx="250" cy="250" r="160" strokeOpacity="0.1" />
              <path d="M250 50 L391 108 L391 391 L108 391 L108 108 L250 50 Z" />
              <path d="M250 150 L320 190 L320 310 L180 310 L180 190 L250 150 Z" />
              <line x1="250" y1="50" x2="250" y2="150" />
              <line x1="391" y1="108" x2="320" y2="190" />
              <line x1="391" y1="391" x2="320" y2="310" />
              <line x1="108" y1="391" x2="180" y2="310" />
              <line x1="108" y1="108" x2="180" y2="190" />
              <circle cx="250" cy="250" r="40" stroke="url(#hero_grad)" strokeWidth="3" fill="url(#hero_grad)" fillOpacity="0.1" />
              <circle cx="250" cy="250" r="10" fill="url(#hero_grad)" />
            </g>
            <circle cx="108" cy="108" r="4" fill="#06B6D4">
              <animate attributeName="opacity" values="0;1;0" dur="3s" repeatCount="indefinite" />
            </circle>
            <circle cx="391" cy="391" r="4" fill="#6366F1">
              <animate attributeName="opacity" values="0;1;0" dur="4s" repeatCount="indefinite" />
            </circle>
            <circle cx="250" cy="50" r="4" fill="#06B6D4">
              <animate attributeName="opacity" values="0;1;0" dur="5s" repeatCount="indefinite" />
            </circle>
            <defs>
              <linearGradient id="hero_grad" x1="0" y1="0" x2="500" y2="500" gradientUnits="userSpaceOnUse">
                <stop stopColor="#6366F1" />
                <stop offset="1" stopColor="#06B6D4" />
              </linearGradient>
            </defs>
          </svg>

          <div className="container hero-content">
            <div className="badge">Backend Engineer</div>
            <h1 className="hero-title">
              Architecting the
              <br />
              systems of tomorrow.
            </h1>
            <p className="hero-subtitle">
              I build scalable, reliable, and secure backend infrastructure. Specializing in Python, Django, and System Design.
            </p>
            <div className="hero-actions">
              <a href="#projects" className="btn btn-primary" onClick={(event) => handleInternalLinkClick(event, '#projects')}>
                <i className="fas fa-eye" /> View Projects
              </a>
              <a href="https://github.com/shash-135" target="_blank" rel="noreferrer" className="btn btn-secondary">
                <i className="fab fa-github" /> GitHub
              </a>
            </div>
          </div>
        </section>

        <section id="about" className="section">
          <div className="container">
            <div className="about-grid">
              <div className="about-text reveal">
                <h2 className="section-title">
                  <i className="fas fa-compass" /> The Path
                </h2>
                <p className="body-text">
                  I walk the path of the Backend. Though I began as a wanderer, exploring the lands of Android, and Web, I found my purpose in the deep structures of Logic and Data.
                </p>
                <p className="body-text">
                  Like a smith forging a blade, I temper systems to be robust, scalable, and sharp. My current focus is architecting the unseen foundations that hold the digital world together.
                </p>
                <button
                  type="button"
                  className="btn"
                  style={{ marginTop: '20px', border: '1px solid var(--brand)', color: 'var(--brand)', background: 'transparent' }}
                  onClick={() => setIsAboutModalOpen(true)}
                >
                  <i className="fas fa-terminal" /> Initialize Profile
                </button>
              </div>

              <div className="stats-grid reveal">
                {stats.map((stat) => (
                  <a key={stat.label} href={stat.href} target="_blank" rel="noreferrer" className="card stat-card">
                    <div className="stat-icon" style={stat.accent ? { color: 'gold' } : undefined}>
                      <i className={`fas ${stat.icon}`} />
                    </div>
                    <div className="stat-val">{stat.value}</div>
                    <div className="stat-label">{stat.label}</div>
                  </a>
                ))}
              </div>
            </div>
          </div>
        </section>

        <section id="projects" className="section">
          <div className="container">
            <h2 className="section-title reveal">
              <i className="fas fa-layer-group" /> Selected Work
            </h2>
            <div className="bento-grid reveal">
              {projects.map((project) => (
                <article key={project.title} className={`card ${project.size}`}>
                  <div className={`card-pattern ${project.pattern}`} />
                  <div className="card-content">
                    <div className="icon-box">
                      <i className={`fas ${project.icon}`} />
                    </div>
                    <h3>{project.title}</h3>
                    <p>{project.description}</p>
                    {project.tags.length > 0 ? (
                      <div className="tags">
                        {project.tags.map((tag) => (
                          <span key={tag}>{tag}</span>
                        ))}
                      </div>
                    ) : null}
                    <a href={project.href} target="_blank" rel="noreferrer" className="card-link">
                      {project.cta} <i className="fas fa-arrow-right" />
                    </a>
                  </div>
                  <div className="card-glow" />
                </article>
              ))}
            </div>
          </div>
        </section>

        <section id="skills" className="section">
          <div className="container">
            <h2 className="section-title reveal">
              <i className="fas fa-microchip" /> Technical Expertise
            </h2>
            <div className="skills-grid reveal">
              {skillCategories.map((category) => (
                <div key={category.title} className="skill-category">
                  <h3>{category.title}</h3>
                  <div className="skill-tags">
                    {category.items.map((item) => (
                      <span key={item.label} className="skill-pill">
                        <i className={`${item.prefix} ${item.icon}`} /> {item.label}
                      </span>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section id="contact" className="section footer reveal">
          <div className="container">
            <h2 className="footer-title">Let's build something.</h2>
            <div className="social-links">
              <a href="mailto:shashanktalekar3@gmail.com" className="social-btn">
                <i className="fas fa-envelope" /> Email
              </a>
              <a href="https://github.com/shash-135" target="_blank" rel="noreferrer" className="social-btn">
                <i className="fab fa-github" /> GitHub
              </a>
              <a href="https://www.linkedin.com/in/shashank-talekar/" target="_blank" rel="noreferrer" className="social-btn">
                <i className="fab fa-linkedin" /> LinkedIn
              </a>
            </div>
            <p className="copyright">&copy; 2025 Shashank Talekar</p>
          </div>
        </section>
      </main>

      <div
        id="about-modal"
        className={`modal-overlay ${isAboutModalOpen ? 'active' : ''}`}
        aria-hidden={!isAboutModalOpen}
        onClick={(event) => {
          if (event.target === event.currentTarget) {
            setIsAboutModalOpen(false);
          }
        }}
      >
        <div className="modal-card" role="dialog" aria-modal="true" aria-labelledby="about-modal-title">
          <button type="button" className="close-btn" aria-label="Close profile modal" onClick={() => setIsAboutModalOpen(false)}>
            <i className="fas fa-times" />
          </button>

          <div className="modal-header">
            <div className="modal-avatar">
              <i className="fas fa-user-astronaut" />
            </div>
            <div className="modal-title">
              <h2 id="about-modal-title">Shashank Talekar</h2>
              <p>Backend Engineer • Pune, India 🇮🇳</p>
            </div>
          </div>

          <div className="modal-body">
            <div className="modal-section">
              <h3>
                <i className="fas fa-graduation-cap" /> Education
              </h3>
              <div className="timeline-item">
                <span className="year">Present</span>
                <div className="timeline-content">
                  <h4>Master of Computer Applications (MCA)</h4>
                  <p>MES IMCC, Pune</p>
                </div>
              </div>
              <div className="timeline-item">
                <span className="year">Completed</span>
                <div className="timeline-content">
                  <h4>Bachelor of Computer Applications (BCA)</h4>
                  <p>New Arts, Commerce & Science College</p>
                </div>
              </div>
            </div>

            <div className="modal-section">
              <h3>
                <i className="fas fa-gamepad" /> Interests
              </h3>
              <div className="tags">
                <span>Cooking 🍳</span>
                <span>Video Games 🎮</span>
                <span>Travel ✈️</span>
              </div>
            </div>

            <div className="modal-section">
              <h3>
                <i className="fas fa-crosshairs" /> Current Objective
              </h3>
              <p className="goal-text">
                Seeking challenging <strong>Backend Roles</strong> to build scalable systems.
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
