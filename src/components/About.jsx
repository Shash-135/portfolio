import React from 'react';
import { stats, education, activities } from '../data/portfolioData';

export default function About() {
  return (
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

          <div className="stats-grid">
            {stats.map((stat, index) => {
              const CardTag = stat.href ? 'a' : 'div';
              const delayClass = `delay-${((index % 5) + 1) * 100}`;
              return (
                <CardTag
                  key={stat.label}
                  href={stat.href}
                  target={stat.href ? '_blank' : undefined}
                  rel={stat.href ? 'noreferrer' : undefined}
                  className={`card stat-card reveal ${delayClass}`}
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
        <div className="education-activities-grid">
          <div>
            <h3 className="sub-section-title reveal">
              <i className="fas fa-graduation-cap" style={{ marginRight: '8px', color: 'var(--brand)' }} /> Education
            </h3>
            <div className="timeline">
              {education.map((item, index) => {
                 const delayClass = `delay-${((index % 5) + 1) * 100}`;
                 return (
                  <div key={item.degree} className={`timeline-item reveal ${delayClass}`}>
                    <div className="year">{item.period}</div>
                    <div className="timeline-content">
                      <h4>{item.degree}</h4>
                      <p>{item.institution}</p>
                    </div>
                  </div>
                 );
              })}
            </div>
          </div>

          <div>
            <h3 className="sub-section-title reveal">
              <i className="fas fa-award" style={{ marginRight: '8px', color: 'var(--brand)' }} /> Activities & Leadership
            </h3>
            <div className="activities-list">
              {activities.map((item, index) => {
                const delayClass = `delay-${((index % 5) + 1) * 100}`;
                return (
                  <div key={item.event} className={`activity-card reveal ${delayClass}`}>
                    <div className="activity-card-header">
                      <h4>{item.event}</h4>
                      <span className="activity-badge">{item.role}</span>
                    </div>
                    <p>{item.description}</p>
                    <small className="activity-location">
                      <i className="fas fa-location-dot" /> {item.location}
                    </small>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
