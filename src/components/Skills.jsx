import React from 'react';
import { FaSitemap, FaServer, FaCode, FaDatabase, FaTools } from 'react-icons/fa';
import { skillCategories } from '../data/data';

const icons = [FaSitemap, FaServer, FaCode, FaDatabase, FaTools];

const Skills = () => {
  return (
    <section id="skills" className="section">
      <div className="container">
        <div className="section-header">
          <span className="section-badge">Capabilities</span>
          <h2 className="section-title gradient-title">Technical Expertise</h2>
        </div>

        <div className="skills-grid">
          {skillCategories.map((cat, idx) => {
            const Icon = icons[idx];
            return (
              <div key={cat.title} className="skill-card">
                <div className="skill-header">
                  <div className="skill-icon-bubble"><Icon /></div>
                  <h3>{cat.title}</h3>
                </div>
                <div className="skill-chips">
                  {cat.items.map((skill) => (
                    <span key={skill} className="chip">{skill}</span>
                  ))}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Skills;
