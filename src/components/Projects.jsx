import React from 'react';
import { FaCheckCircle } from 'react-icons/fa';

const Projects = () => {
  const projects = [
    {
      title: 'Hospital Management System',
      description:
        'An end-to-end clinical automation platform engineered to streamline appointments, staff availability, and diagnostic patient profiling.',
      points: [
        'Built full request-response lifecycle with Java Servlets, JSP, and MySQL database[cite: 1].',
        'Implemented patient records, doctor allocations, and schedule trackers using direct JDBC connections[cite: 1].',
        'Followed Model-View-Controller (MVC) architectural patterns and hosted on Apache Tomcat[cite: 1].'
      ],
      stack: ['Java Servlets', 'JSP', 'MySQL', 'JDBC', 'Apache Tomcat', 'MVC Architecture']
    },
    {
      title: 'E-Commerce Application',
      description:
        'A microservices-ready commercial backend powering reliable product discovery, customer account persistence, and transactional authorization.',
      points: [
        'Engineered secure, stateless RESTful APIs for customer authentication and signup pipelines[cite: 1].',
        'Integrated robust OTP (One-Time-Password) verification service to prevent unauthorized registrations[cite: 1].',
        'Normalized relational schemas ensuring ACID guarantees and transactional efficiency.'
      ],
      stack: ['Java', 'Spring Boot', 'REST APIs', 'OTP Verification', 'Hibernate', 'MySQL']
    }
  ];

  return (
    <section id="projects" className="section">
      <div className="container">
        <div className="section-header">
          <span className="section-badge">Portfolio</span>
          <h2 className="section-title gradient-title">Featured Projects</h2>
        </div>

        <div className="projects-grid">
          {projects.map((proj, idx) => (
            <div key={idx} className="project-card">
              <div>
                <h3>{proj.title}</h3>
                <p className="desc">{proj.description}</p>
                <ul className="bullet-points">
                  {proj.points.map((pt, pIdx) => (
                    <li key={pIdx}>
                      <FaCheckCircle />
                      <span>{pt}</span>
                    </li>
                  ))}
                </ul>
              </div>
              <div className="skill-chips">
                {proj.stack.map((item, tIdx) => (
                  <span key={tIdx} className="chip">{item}</span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;