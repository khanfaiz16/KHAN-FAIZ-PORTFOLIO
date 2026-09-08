import React from 'react';
import { FaCheckCircle, FaExternalLinkAlt, FaGithub } from 'react-icons/fa';
import { FadeInWhenVisible, TiltCard } from './MotionWrapper';

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
      link: 'https://topcoolservice.com'
    },
    {
      title: 'Hospital Management System (Enterprise ERP)',
      description:
        'Developed a full-stack hospital ERP using Java Servlets (Jakarta EE), JSP, JDBC, and MySQL on Apache Tomcat 10 following MVC architecture.',
      points: [
        'Built end-to-end modules for patient registration, doctor appointments, ward bed allocations, electronic prescriptions (EHR), and OT surgery scheduling.',
        'Engineered operational workflows for lab diagnostics, pharmacy inventory tracking, blood bank reserves, and emergency ambulance dispatch.',
        'Integrated an automated billing engine, dynamic iText PDF discharge summary generator, and session-based role-based access control (RBAC).'
      ],
      stack: ['Java Servlets', 'Jakarta EE', 'JSP', 'JDBC', 'MySQL', 'Apache Tomcat 10'],
      isLive: false,
      link: 'https://github.com/khanfaiz16/HospitalManagementSystem'
    },
    {
      title: 'AuraStore – Full-Stack E-Commerce Web Application',
      description:
        'Built a full-stack e-commerce application using React with modular custom CSS on the frontend and Java Spring Boot RESTful APIs with MySQL on the backend.',
      points: [
        'Implemented passwordless email OTP authentication and secure session management using Spring Security and JWT, along with role-based access for users and admins.',
        'Created end-to-end shopping features including product catalog filtering, cart management, checkout with email confirmations, promo coupons, and an admin management dashboard.'
      ],
      stack: ['React.js', 'Java', 'Spring Boot', 'Spring Security', 'JWT', 'MySQL', 'REST APIs', 'Email OTP'],
      isLive: false,
      link: 'https://github.com/khanfaiz16/E-COMMERCE-FULL-STACK' 
    }
  ];

  return (
    <section id="projects" className="section">
      <div className="container">
        <FadeInWhenVisible>
          <div className="section-header">
            <span className="section-badge">Portfolio</span>
            <h2 className="section-title">Featured Projects</h2>
          </div>
        </FadeInWhenVisible>

        <div className="projects-grid">
          {projects.map((proj, idx) => (
            <FadeInWhenVisible key={idx} delay={idx * 0.12}>
              <TiltCard className="project-card">
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
              </TiltCard>
            </FadeInWhenVisible>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;