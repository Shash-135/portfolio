import React from 'react';

export default function Hero() {
  const handleInternalLinkClick = (event, selector) => {
    event.preventDefault();
    const target = document.querySelector(selector);
    if (target) {
      target.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
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
  );
}
