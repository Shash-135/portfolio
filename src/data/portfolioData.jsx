import React from 'react';

export const navLinks = [
  { label: 'Projects', href: '#projects' },
  { label: 'Skills', href: '#skills' },
  { label: 'Contact', href: '#contact' },
];

export const stats = [
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

export const contactLinks = [
  { label: 'Email', href: 'mailto:shashanktalekar3@gmail.com', prefix: 'fas', icon: 'fa-envelope' },
  { label: 'Phone', href: 'tel:+918668902342', prefix: 'fas', icon: 'fa-phone' },
  { label: 'Website', href: 'https://shashank-connect.vercel.app/', prefix: 'fas', icon: 'fa-globe' },
  { label: 'GitHub', href: 'https://github.com/Shash-135', prefix: 'fab', icon: 'fa-github' },
  { label: 'LinkedIn', href: 'https://www.linkedin.com/in/shashank-talekar/', prefix: 'fab', icon: 'fa-linkedin' },
];

export const freelanceProjects = [
  {
    title: 'Mic Masters',
    isLive: true,
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

export const personalProjects = [
  {
    title: 'JalSankalp',
    isLive: true,
    accent: 'Smart Water Pump Monitoring',
    description: 'A multi-platform system (Admin Dashboard, Villager Portal, Operator Mobile App) supporting real-time pump monitoring and complaint management.',
    details: [
      'Designed role-based authentication using OTP login and JWT sessions for secure multi-user access.',
      'Developed REST APIs for pump lifecycle tracking, complaint workflows, and analytics reporting.',
      'Engineered an offline-first data synchronization system enabling reliable field operations in low-connectivity environments.',
      'Integrated QR-based identification system to streamline field operations and reduce manual effort.',
    ],
    icon: 'fa-droplet',
    tags: ['React', 'Node.js', 'React Native', 'MySQL', 'JWT'],
    href: 'https://github.com/Shash-135/JalSankalp',
    cta: 'GitHub',
    extraLinks: [
      { label: 'Admin Dashboard', href: 'https://jalsankalp-admin.vercel.app' },
      { label: 'Villager Portal', href: 'https://jalsankalp-villager.vercel.app' },
      { label: 'Operator App', href: 'https://github.com/Shash-135/JalSankalp/releases' }
    ],
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

export const skillCategories = [
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

export const education = [
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

export const activities = [
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
