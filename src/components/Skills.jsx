import React from 'react';
import { FaServer, FaCode, FaDatabase, FaTools } from 'react-icons/fa';

const Skills = () => {
  const categories = [
    {
      title: 'Backend Technologies',
      icon: <FaServer />,
      items: ['Java', 'Spring Boot', 'Hibernate', 'RESTful Web Services', 'Node.js', 'JDBC', 'Servlets & JSP']
    },
    {
      title: 'Frontend Technologies',
      icon: <FaCode />,
      items: ['React.js', 'JavaScript (ES6+)', 'HTML5', 'CSS3 / Modern Layouts', 'Responsive UI/UX']
    },
    {
      title: 'Database Systems',
      icon: <FaDatabase />,
      items: ['MySQL', 'SQL Queries', 'Relational Schema Design', 'CRUD Operations', 'Query Optimization']
    },
    {
      title: 'Tools & Ecosystem',
      icon: <FaTools />,
      items: ['Git', 'GitHub', 'Postman', 'Apache Tomcat', 'VS Code', 'IntelliJ IDEA']
    }
  ];

  return (
    <section id="skills" className="section">
      <div className="container">
        <div className="section-header">
          <span className="section-badge">Capabilities</span>
          <h2 className="section-title gradient-title">Technical Expertise</h2>
        </div>

        <div className="skills-grid">
          {categories.map((cat, idx) => (
            <div key={idx} className="skill-card">
              <div className="skill-header">
                <div className="skill-icon-bubble">{cat.icon}</div>
                <h3>{cat.title}</h3>
              </div>
              <div className="skill-chips">
                {cat.items.map((skill, sIdx) => (
                  <span key={sIdx} className="chip">{skill}</span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;