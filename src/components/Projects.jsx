import React from 'react';
import { FaCheckCircle, FaExternalLinkAlt, FaGithub } from 'react-icons/fa';

const Projects = () => {
  const projects = [
    {
      title: 'Top Cool Service – Doorstep Appliance Repair Platform',
      description:
        'A high-performance commercial web application engineered for doorstep home appliance servicing across 15+ Mumbai & Thane suburban clusters.',
      points: [
        'Implemented interactive multi-step booking workflows, dynamic FAQ accordions, and automated dispatch via direct WhatsApp & phone APIs.',
        'Optimized technical SEO using JSON-LD LocalBusiness schema, XML sitemaps, canonical routing, and Google Search Console integration.',
        'Deployed on Vercel with an automated CI/CD pipeline, achieving 100% uptime rate and sub-second edge load latency.'
      ],
      stack: ['React.js', 'Node.js', 'Vercel', 'SEO / JSON-LD', 'CI/CD'],
      isLive: true,
      link: 'https://topcoolservice.com' // Replace with your exact deployed URL if different
    },
    {
      title: 'Hospital Management System',
      description:
        'An end-to-end clinical management portal designed to streamline doctor allocations, patient profiling, and digital appointment bookings.',
      points: [
        'Built full request-response application flow using Java Servlets, JSP, and MySQL database.',
        'Implemented patient records, doctor allocations, and schedule trackers using direct JDBC operations.',
        'Engineered standard Model-View-Controller (MVC) architecture and deployed on Apache Tomcat.'
      ],
      stack: ['Java Servlets', 'JSP', 'MySQL', 'JDBC', 'Tomcat', 'MVC Architecture'],
      isLive: false,
      link: 'https://github.com/khanfaiz' // Replace with your repository link
    },
    {
      title: 'E-Commerce Application',
      description:
        'A secure, decoupled e-commerce service handling consumer authentication, verified registration pipelines, and order flows.',
      points: [
        'Engineered stateless, secure RESTful APIs for user registration and authentication.',
        'Integrated OTP-based verification protocols to reinforce account security.',
        'Designed normalized relational schema architectures ensuring transaction integrity.'
      ],
      stack: ['Java', 'Spring Boot', 'REST APIs', 'OTP Verification', 'Hibernate', 'MySQL'],
      isLive: false,
      link: 'https://github.com/khanfaiz' // Replace with your repository link
    }
  ];

  return (
    <section id="projects" className="section">
      <div className="container">
        <div className="section-header">
          <span className="section-badge">Portfolio</span>
          <h2 className="section-title">Featured Projects</h2>
        </div>

        <div className="projects-grid">
          {projects.map((proj, idx) => (
            <div key={idx} className="project-card">
              <div className="project-body">
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

              <div className="project-footer">
                <div className="skill-chips">
                  {proj.stack.map((item, tIdx) => (
                    <span key={tIdx} className="chip">{item}</span>
                  ))}
                </div>

                <div className="project-action-wrapper">
                  {proj.isLive ? (
                    <a
                      href={proj.link}
                      target="_blank"
                      rel="noreferrer"
                      className="btn-project-link live-btn"
                    >
                      <span>Live Website</span> <FaExternalLinkAlt />
                    </a>
                  ) : (
                    <a
                      href={proj.link}
                      target="_blank"
                      rel="noreferrer"
                      className="btn-project-link repo-btn"
                    >
                      <span>View Code</span> <FaGithub />
                    </a>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;