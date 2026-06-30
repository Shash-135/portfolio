import React from 'react';
import { navLinks } from '../data/portfolioData';

export default function Navbar({ theme, toggleTheme, isMobileMenuOpen, setIsMobileMenuOpen }) {
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
    </>
  );
}
