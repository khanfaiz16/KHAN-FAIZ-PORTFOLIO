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
            <FadeInWhenVisible key={idx} delay={idx * 0.15}>
              {/* Added explicit bottom margin wrapper to guarantee the gap */}
              <div className="timeline-node" style={{ marginBottom: '5rem' }}>
                <span className="timeline-glow-marker"></span>
                <div className="timeline-card spotlight-card">
                  <span className="timeline-badge">{edu.period}</span>
                  <h3>{edu.degree}</h3>
                  <h4>{edu.institution}</h4>
                  <p>{edu.description}</p>
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