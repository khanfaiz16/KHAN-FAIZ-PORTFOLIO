import React from 'react';
import { FadeInWhenVisible } from './MotionWrapper';
import { educationData } from '../data/data';

const Education = () => {
  return (
    <section id="education" className="section">
      <div className="container">
        <FadeInWhenVisible>
          <div className="section-header">
            <span className="section-badge">Academic Background</span>
            <h2 className="section-title">Educational Milestones</h2>
          </div>
        </FadeInWhenVisible>

        <div className="timeline-container">
          {educationData.map((edu, idx) => (
            <FadeInWhenVisible key={edu.degree} delay={idx * 0.1}>
              <div className="timeline-node">
                <span className="timeline-glow-marker"></span>
                <div className="timeline-card spotlight-card">
                  <span className="timeline-badge">{edu.period}</span>
                  <h3>{edu.degree}</h3>
                  <h4>{edu.institution}</h4>
                  <p className="timeline-result">{edu.result}</p>
                </div>
              </div>
            </FadeInWhenVisible>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Education;
