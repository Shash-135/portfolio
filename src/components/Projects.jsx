import React from 'react';
import { freelanceProjects, personalProjects } from '../data/portfolioData';

export default function Projects() {
  return (
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
            {freelanceProjects.map((project) => (
              <article key={project.title} className="showcase-row reveal">
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

                  <h3 style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
                    {project.title}
                    {project.isLive && (
                      <span className="live-badge" style={{ fontSize: '0.45em', fontWeight: 600, display: 'inline-flex', alignItems: 'center', padding: '4px 10px', borderRadius: '20px', background: 'rgba(16, 185, 129, 0.1)', color: '#10b981', border: '1px solid rgba(16, 185, 129, 0.2)', textTransform: 'uppercase', letterSpacing: '0.5px' }}>
                        <span className="live-indicator" style={{ margin: 0, marginRight: '6px', width: '6px', height: '6px', position: 'relative', top: 'auto', left: 'auto' }}></span>
                        Live
                      </span>
                    )}
                  </h3>
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

                  <div className="project-links" style={{ display: 'flex', gap: '16px', flexWrap: 'wrap', marginTop: '16px' }}>
                    <a href={project.href} target="_blank" rel="noreferrer" className="card-link">
                      {project.cta} <i className="fas fa-arrow-right" />
                    </a>
                    {project.extraLinks && project.extraLinks.map((link) => (
                      <a key={link.label} href={link.href} target="_blank" rel="noreferrer" className="card-link">
                        {link.label} <i className="fas fa-external-link-alt" style={{ fontSize: '0.85em', marginLeft: '4px' }} />
                      </a>
                    ))}
                  </div>
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
              <article key={project.title} className={`showcase-row reveal ${index % 2 === 0 ? 'row-reverse' : ''}`}>
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

                  <h3 style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
                    {project.title}
                    {project.isLive && (
                      <span className="live-badge" style={{ fontSize: '0.45em', fontWeight: 600, display: 'inline-flex', alignItems: 'center', padding: '4px 10px', borderRadius: '20px', background: 'rgba(16, 185, 129, 0.1)', color: '#10b981', border: '1px solid rgba(16, 185, 129, 0.2)', textTransform: 'uppercase', letterSpacing: '0.5px' }}>
                        <span className="live-indicator" style={{ margin: 0, marginRight: '6px', width: '6px', height: '6px', position: 'relative', top: 'auto', left: 'auto' }}></span>
                        Live
                      </span>
                    )}
                  </h3>
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

                  <div className="project-links" style={{ display: 'flex', gap: '16px', flexWrap: 'wrap', marginTop: '16px' }}>
                    <a href={project.href} target="_blank" rel="noreferrer" className="card-link">
                      {project.cta} <i className="fas fa-arrow-right" />
                    </a>
                    {project.extraLinks && project.extraLinks.map((link) => (
                      <a key={link.label} href={link.href} target="_blank" rel="noreferrer" className="card-link">
                        {link.label} <i className="fas fa-external-link-alt" style={{ fontSize: '0.85em', marginLeft: '4px' }} />
                      </a>
                    ))}
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
