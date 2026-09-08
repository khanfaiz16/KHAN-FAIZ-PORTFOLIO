import React from 'react';
import { FaBolt, FaLightbulb, FaClock, FaUsers } from 'react-icons/fa';

const About = () => {
  const strengths = [
    { icon: <FaBolt />, title: 'Quick Learner', desc: 'Rapid technical absorption and tooling mastery' },
    { icon: <FaLightbulb />, title: 'Creative Thinker', desc: 'Robust problem decomposition and clean patterns' },
    { icon: <FaClock />, title: 'Punctual', desc: 'Commitment to strict delivery pipelines and milestones' },
    { icon: <FaUsers />, title: 'Team Player', desc: 'Active communicator in agile and cross-functional teams' },
  ];

  return (
    <section id="about" className="section">
      <div className="container">
        <div className="section-header">
          <span className="section-badge">Background</span>
          <h2 className="section-title">About Me</h2>
        </div>

        <div className="about-box">
          <p className="about-summary">
            I am an ambitious Full Stack Java Developer with practical exposure to developing enterprise-grade 
            applications, RESTful API design, and relational database schema architecture. Pursuing my MCA has 
            sharpened my analytical capabilities and core computer science fundamentals. I focus on developing clean, 
            testable, and scalable backend code with Spring Boot while translating requirements into intuitive, fluid React interfaces.
          </p>

          <div className="strengths-grid">
            {strengths.map((item, index) => (
              <div key={index} className="strength-card">
                <div className="strength-icon">{item.icon}</div>
                <div>
                  <h4>{item.title}</h4>
                  <p>{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;