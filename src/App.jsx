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
    value: '1691',
    label: 'LeetCode Rating',
  },
  {
    href: 'https://www.hackerrank.com/profile/shashanktalekar3',
    icon: 'fa-medal',
    value: 'Gold',
    label: 'HackerRank Badge',
    accent: true,
  },
  {
    icon: 'fa-graduation-cap',
    value: '9.35',
    label: 'MCA CGPA',
  },
  {
    icon: 'fa-university',
    value: '9.02',
    label: 'BCA CGPA',
  },
];

const contactLinks = [
  { label: 'Email', href: 'mailto:shashanktalekar3@gmail.com', prefix: 'fas', icon: 'fa-envelope' },
  { label: 'Phone', href: 'tel:+918668902342', prefix: 'fas', icon: 'fa-phone' },
  { label: 'Website', href: 'https://shashank-connect.vercel.app/', prefix: 'fas', icon: 'fa-globe' },
  { label: 'GitHub', href: 'https://github.com/Shash-135', prefix: 'fab', icon: 'fa-github' },
  { label: 'LinkedIn', href: 'https://www.linkedin.com/in/shashank-talekar/', prefix: 'fab', icon: 'fa-linkedin' },
];

const freelanceProjects = [
  {
    title: 'Mic Masters',
    accent: 'Public Speaking Academy',
    description: 'A premium, responsive website built for a public speaking academy to handle client onboarding, courses, and student inquiries.',
    details: [
      'Built a fast, responsive user interface using React to optimize client-side load time and interactivity.',
      'Integrated Firebase for secure hosting, database management, and structured student inquiry collection.',
      'Designed a sleek, high-conversion UI matching the branding of the academy, boosting user engagement.',
      'Optimized site assets and metadata for search engine indexing (SEO) and modern web performance.',
    ],
    icon: 'fa-microphone',
    tags: ['React', 'Firebase', 'CSS3', 'Freelance'],
    href: 'https://mic-masters.vercel.app/',
    cta: 'Visit Live Site',
    image: '/project-images/micmasters.png',
    imageLabel: 'Mic Masters project image',
    imageNote: 'Add a screenshot for Mic Masters in public/project-images/micmasters.png',
    mockup: (
      <div className="project-mockup micmasters-mockup">
        <div className="mockup-header">
          <span className="dot red"></span>
          <span className="dot yellow"></span>
          <span className="dot green"></span>
          <span className="mockup-title">mic-masters.vercel.app</span>
        </div>
        <div className="mockup-body">
          <div className="mockup-mic-hero">
            <i className="fas fa-microphone-lines mic-pulse-icon"></i>
            <span className="mockup-mic-logo">MIC MASTERS</span>
            <p className="mockup-mic-tag">Master the Art of Speaking</p>
          </div>
          <div className="mockup-course-list">
            <span className="course-item">🎤 Public Speaking 101</span>
            <span className="course-item">💼 Business Pitching</span>
          </div>
        </div>
      </div>
    ),
  },
];

const personalProjects = [
  {
    title: 'JalSankalp',
    accent: 'Smart Water Pump Monitoring',
    description: 'A multi-platform system (Admin Dashboard, Villager Portal, Operator Mobile App) supporting real-time pump monitoring and complaint management.',
    details: [
      'Designed role-based authentication using OTP login and JWT sessions for secure multi-user access.',
      'Developed REST APIs for pump lifecycle tracking, complaint workflows, and analytics reporting.',
      'Engineered an offline-first data synchronization system enabling reliable field operations in low-connectivity environments.',
      'Integrated QR-based identification system to streamline field operations and reduce manual effort.',
    ],
    icon: 'fa-droplet',
    tags: ['React', 'Node.js', 'React Native', 'MongoDB', 'JWT'],
    href: 'https://github.com/Shash-135/JalSankalp',
    cta: 'GitHub',
    image: '/project-images/jalsankalp.png',
    imageLabel: 'JalSankalp project image',
    imageNote: 'Add a screenshot for JalSankalp in public/project-images/jalsankalp.png',
    mockup: (
      <div className="project-mockup jalsankalp-mockup">
        <div className="mockup-header">
          <span className="dot red"></span>
          <span className="dot yellow"></span>
          <span className="dot green"></span>
          <span className="mockup-title">jalsankalp.in/dashboard</span>
        </div>
        <div className="mockup-body">
          <div className="mockup-stat-row">
            <div className="mockup-stat-card">
              <span className="label">Flow Rate</span>
              <span className="val text-cyan">42 L/s</span>
            </div>
            <div className="mockup-stat-card">
              <span className="label">Alerts</span>
              <span className="val text-red">0</span>
            </div>
          </div>
          <div className="mockup-chart">
            <div className="bar" style={{ height: '40%' }}></div>
            <div className="bar" style={{ height: '65%' }}></div>
            <div className="bar" style={{ height: '50%' }}></div>
            <div className="bar" style={{ height: '85%' }}></div>
            <div className="bar" style={{ height: '70%' }}></div>
          </div>
        </div>
      </div>
    ),
  },
  {
    title: 'Synca',
    accent: 'PG/Hostel Booking Platform',
    description: 'Developed a full-stack accommodation booking platform using Django for students and property owners.',
    details: [
      'Designed service-layer architecture to modularize business logic and improve maintainability.',
      'Implemented booking workflows, availability tracking, and owner dashboards.',
      'Built responsive UI using Django Templates and Bootstrap.',
    ],
    icon: 'fa-home',
    tags: ['Django', 'Bootstrap', 'Python'],
    href: 'https://github.com/Shash-135/Synca',
    cta: 'View Source',
    image: '/project-images/synca.jpg',
    imageLabel: 'Synca project image',
    imageNote: 'Add a screenshot for Synca in public/project-images/synca.png',
    mockup: (
      <div className="project-mockup synca-mockup">
        <div className="mockup-header">
          <span className="dot red"></span>
          <span className="dot yellow"></span>
          <span className="dot green"></span>
          <span className="mockup-title">synca.com/explore</span>
        </div>
        <div className="mockup-body">
          <div className="mockup-room-card">
            <div className="room-img-placeholder">
              <i className="fas fa-home"></i>
            </div>
            <div className="room-info">
              <span className="room-name">Premium PG Room</span>
              <span className="room-price">₹8,500/mo</span>
              <span className="room-badge">Available</span>
            </div>
          </div>
        </div>
      </div>
    ),
  },
];

const skillCategories = [
  {
    title: 'Languages & DSA',
    items: [
      { prefix: 'fab', icon: 'fa-js', label: 'JavaScript' },
      { prefix: 'fab', icon: 'fa-js', label: 'TypeScript' },
      { prefix: 'fab', icon: 'fa-python', label: 'Python (Expert)' },
      { prefix: 'fab', icon: 'fa-java', label: 'Java' },
      { prefix: 'fas', icon: 'fa-code', label: 'C++ / C' },
      { prefix: 'fas', icon: 'fa-database', label: 'SQL (MySQL, Postgres)' },
      { prefix: 'fab', icon: 'fa-php', label: 'PHP' },
    ],
  },
  {
    title: 'Frontend & Web',
    items: [
      { prefix: 'fab', icon: 'fa-react', label: 'React.js' },
      { prefix: 'fab', icon: 'fa-react', label: 'React Native' },
      { prefix: 'fas', icon: 'fa-server', label: 'Django' },
      { prefix: 'fab', icon: 'fa-node-js', label: 'Node.js / Express' },
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
      { prefix: 'fas', icon: 'fa-envelope-open-text', label: 'Postman' },
      { prefix: 'fab', icon: 'fa-jira', label: 'Jira' },
    ],
  },
  {
    title: 'Concepts & Architecture',
    items: [
      { prefix: 'fas', icon: 'fa-cloud', label: 'REST APIs' },
      { prefix: 'fas', icon: 'fa-key', label: 'JWT Authentication' },
    ],
  },
];

const education = [
  {
    degree: 'Master of Computer Applications (MCA)',
    institution: 'MES Institute of Management, Pune',
    period: '2025 – 2027',
  },
  {
    degree: 'Bachelor of Computer Applications (BCA)',
    institution: 'New Arts Commerce & Science College',
    period: '2022 – 2025',
  },
];

const activities = [
  {
    role: 'Organising Team Member',
    event: 'Navonmesh Hackathon',
    description: 'Developed teamwork and leadership skills by managing participants and addressing technical needs.',
    location: 'MES IMCC',
  },
  {
    role: 'Volunteer Panel Manager',
    event: 'IC2TMA Conference',
    description: 'Managed panel logistics and assisted researchers in seamlessly presenting their papers.',
    location: 'MES IMCC',
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

  useEffect(() => {
    document.documentElement.setAttribute('data-theme', theme);
    window.localStorage.setItem('theme', theme);
  }, [theme]);

  useEffect(() => {
    document.body.style.overflow = isMobileMenuOpen ? 'hidden' : '';

    return () => {
      document.body.style.overflow = '';
    };
  }, [isMobileMenuOpen]);

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
                d="M28 12H18C14 12 12 15 12 19C12 23 15 25 19 25H21"
                stroke="url(#s_grad_1)"
                strokeWidth="5"
                strokeLinecap="round"
              />
              <path
                d="M19 25H21C25 25 28 27 28 31C28 35 25 38 21 38H12"
                stroke="url(#s_grad_2)"
                strokeWidth="5"
                strokeLinecap="round"
              />
              <defs>
                <linearGradient id="s_grad_1" x1="12" y1="12" x2="28" y2="25" gradientUnits="userSpaceOnUse">
                  <stop stopColor="#6366F1" />
                  <stop offset="1" stopColor="#818CF8" />
                </linearGradient>
                <linearGradient id="s_grad_2" x1="12" y1="25" x2="28" y2="38" gradientUnits="userSpaceOnUse">
                  <stop stopColor="#818CF8" />
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
            <div className="hero-grid">
              <div className="hero-text-block">
                <div className="badge">Full-Stack Developer</div>
                <h1 className="hero-title">
                  Shashank Talekar
                  <br />
                  Full-Stack Developer building practical systems.
                </h1>
                <p className="hero-subtitle">
                  Versatile Full-Stack Developer and MCA student with a 9.35 CGPA and a strong algorithmic mindset.
                </p>
                <div className="hero-actions">
                  <a href="#projects" className="btn btn-primary" onClick={(event) => handleInternalLinkClick(event, '#projects')}>
                    <i className="fas fa-eye" /> View Projects
                  </a>
                  <a href="/Shashank_Resume.pdf" target="_blank" rel="noreferrer" className="btn btn-secondary">
                    <i className="fas fa-file-arrow-down" /> Resume
                  </a>
                  <a href="https://github.com/shash-135" target="_blank" rel="noreferrer" className="btn btn-secondary">
                    <i className="fab fa-github" /> GitHub
                  </a>
                </div>
              </div>

              <div className="hero-image-block">
                <div className="hero-avatar-wrapper">
                  <img src="/profile.jpg" alt="Shashank Talekar" className="hero-avatar" />
                </div>
              </div>
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
                  I build secure, multi-user platforms from scratch and keep my work centered on clean architecture, DSA, and shipping practical software.
                </p>
                <p className="body-text">
                  My portfolio focuses on the projects and skills that matter most: full-stack applications, real-time monitoring systems, and booking platforms.
                </p>
              </div>

              <div className="stats-grid reveal">
                {stats.map((stat) => {
                  const CardTag = stat.href ? 'a' : 'div';
                  return (
                    <CardTag
                      key={stat.label}
                      href={stat.href}
                      target={stat.href ? '_blank' : undefined}
                      rel={stat.href ? 'noreferrer' : undefined}
                      className="card stat-card"
                    >
                      <div className="stat-icon" style={stat.accent ? { color: 'gold' } : undefined}>
                        <i className={`fas ${stat.icon}`} />
                      </div>
                      <div className="stat-val">{stat.value}</div>
                      <div className="stat-label">{stat.label}</div>
                    </CardTag>
                  );
                })}
              </div>
            </div>

            {/* Education & Activities Block */}
            <div className="education-activities-grid reveal">
              <div>
                <h3 className="sub-section-title">
                  <i className="fas fa-graduation-cap" style={{ marginRight: '8px', color: 'var(--brand)' }} /> Education
                </h3>
                <div className="timeline">
                  {education.map((item) => (
                    <div key={item.degree} className="timeline-item">
                      <div className="year">{item.period}</div>
                      <div className="timeline-content">
                        <h4>{item.degree}</h4>
                        <p>{item.institution}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              <div>
                <h3 className="sub-section-title">
                  <i className="fas fa-award" style={{ marginRight: '8px', color: 'var(--brand)' }} /> Activities & Leadership
                </h3>
                <div className="activities-list">
                  {activities.map((item) => (
                    <div key={item.event} className="activity-card">
                      <div className="activity-card-header">
                        <h4>{item.event}</h4>
                        <span className="activity-badge">{item.role}</span>
                      </div>
                      <p>{item.description}</p>
                      <small className="activity-location">
                        <i className="fas fa-location-dot" /> {item.location}
                      </small>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        <section id="projects" className="section">
          <div className="container">
            <h2 className="section-title reveal">
              <i className="fas fa-layer-group" /> Selected Work
            </h2>

            {/* Live & Client Projects */}
            <div className="project-category-block reveal">
              <h3 className="category-title">
                <span className="live-indicator" aria-hidden="true"></span> Live & Client Projects
              </h3>
              <div className="showcase-rows">
                {freelanceProjects.map((project, index) => (
                  <article key={project.title} className="showcase-row">
                    <div className="showcase-image-wrapper">
                      {project.image ? (
                        <img
                          src={project.image}
                          alt={project.title}
                          className="project-screenshot"
                          onError={(e) => {
                            e.currentTarget.style.display = 'none';
                            const fallback = e.currentTarget.parentElement.querySelector('.project-mockup-fallback');
                            if (fallback) fallback.style.display = 'flex';
                          }}
                        />
                      ) : null}
                      <div
                        className="project-mockup-fallback"
                        style={{
                          display: project.image ? 'none' : 'flex',
                          width: '100%',
                          height: '100%',
                        }}
                      >
                        {project.mockup ? (
                          project.mockup
                        ) : (
                          <div className="project-art-copy">
                            <span>{project.imageLabel}</span>
                            <small>{project.imageNote}</small>
                          </div>
                        )}
                      </div>
                    </div>

                    <div className="showcase-content">
                      <div className="showcase-topline">
                        <span className="showcase-accent">{project.accent}</span>
                        <div className="icon-box">
                          <i className={`fas ${project.icon}`} />
                        </div>
                      </div>

                      <h3>{project.title}</h3>
                      <p className="showcase-description">{project.description}</p>

                      <ul className="showcase-points">
                        {project.details.map((detail) => (
                          <li key={detail}>{detail}</li>
                        ))}
                      </ul>

                      <div className="tags">
                        {project.tags.map((tag) => (
                          <span key={tag}>{tag}</span>
                        ))}
                      </div>

                      <a href={project.href} target="_blank" rel="noreferrer" className="card-link">
                        {project.cta} <i className="fas fa-arrow-right" />
                      </a>
                    </div>
                  </article>
                ))}
              </div>
            </div>

            {/* Academic & Personal Projects */}
            <div className="project-category-block reveal" style={{ marginTop: '80px' }}>
              <h3 className="category-title">Academic & Personal Projects</h3>
              <div className="showcase-rows">
                {personalProjects.map((project, index) => (
                  <article key={project.title} className={`showcase-row ${index % 2 === 0 ? 'row-reverse' : ''}`}>
                    <div className="showcase-image-wrapper">
                      {project.image ? (
                        <img
                          src={project.image}
                          alt={project.title}
                          className="project-screenshot"
                          onError={(e) => {
                            e.currentTarget.style.display = 'none';
                            const fallback = e.currentTarget.parentElement.querySelector('.project-mockup-fallback');
                            if (fallback) fallback.style.display = 'flex';
                          }}
                        />
                      ) : null}
                      <div
                        className="project-mockup-fallback"
                        style={{
                          display: project.image ? 'none' : 'flex',
                          width: '100%',
                          height: '100%',
                        }}
                      >
                        {project.mockup ? (
                          project.mockup
                        ) : (
                          <div className="project-art-copy">
                            <span>{project.imageLabel}</span>
                            <small>{project.imageNote}</small>
                          </div>
                        )}
                      </div>
                    </div>

                    <div className="showcase-content">
                      <div className="showcase-topline">
                        <span className="showcase-accent">{project.accent}</span>
                        <div className="icon-box">
                          <i className={`fas ${project.icon}`} />
                        </div>
                      </div>

                      <h3>{project.title}</h3>
                      <p className="showcase-description">{project.description}</p>

                      <ul className="showcase-points">
                        {project.details.map((detail) => (
                          <li key={detail}>{detail}</li>
                        ))}
                      </ul>

                      <div className="tags">
                        {project.tags.map((tag) => (
                          <span key={tag}>{tag}</span>
                        ))}
                      </div>

                      <a href={project.href} target="_blank" rel="noreferrer" className="card-link">
                        {project.cta} <i className="fas fa-arrow-right" />
                      </a>
                    </div>
                  </article>
                ))}
              </div>
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
            <div className="social-links contact-links" style={{ marginBottom: '18px', flexWrap: 'wrap' }}>
              {contactLinks.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  target={link.href.startsWith('http') ? '_blank' : undefined}
                  rel={link.href.startsWith('http') ? 'noreferrer' : undefined}
                  className="social-btn"
                >
                  <i className={`${link.prefix} ${link.icon}`} /> {link.label}
                </a>
              ))}
            </div>
            <p className="copyright">&copy; 2026 Shashank Talekar</p>
          </div>
        </section>
      </main>
    </>
  );
}

export default App;