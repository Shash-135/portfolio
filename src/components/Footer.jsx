import React from 'react';
import { contactLinks } from '../data/portfolioData';

export default function Footer() {
  return (
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
  );
}
