import React from 'react';
import { skillCategories } from '../data/portfolioData';

export default function Skills() {
  return (
    <section id="skills" className="section">
      <div className="container">
        <h2 className="section-title reveal">
          <i className="fas fa-microchip" /> Technical Expertise
        </h2>
        <div className="skills-grid">
          {skillCategories.map((category) => (
            <div key={category.title} className="skill-category reveal">
              <h3>{category.title}</h3>
              <div className="skill-tags">
                {category.items.map((item, index) => {
                  const delayClass = `delay-${((index % 5) + 1) * 100}`;
                  return (
                    <span key={item.label} className={`skill-pill reveal ${delayClass}`}>
                      <i className={`${item.prefix} ${item.icon}`} /> {item.label}
                    </span>
                  );
                })}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
