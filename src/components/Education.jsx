import React from 'react';

const Education = () => {
  const education = [
    {
      degree: 'Master of Computer Applications (MCA)',
      school: 'Viva Institute Of Technology, Mumbai University',
      period: '2025 - 2027',
      description: 'Specializing in distributed computing, enterprise application patterns, cloud computing, and advanced data structures.'
    },
    {
      degree: 'Bachelor of Science (Information Technology)',
      school: 'Mahendra Laxman Mhatre Vyavsayik Vidyalaya, Mumbai University',
      period: '2022 - 2025',
      description: 'Comprehensive study of object-oriented concepts, relational database systems, algorithms, operating systems, and web stacks.'
    }
  ];

  return (
    <section id="education" className="section">
      <div className="container">
        <div className="section-header">
          <span className="section-badge">Milestones</span>
          <h2 className="section-title">Academic Journey</h2>
        </div>

        <div className="timeline-container">
          {education.map((item, idx) => (
            <div key={idx} className="timeline-node">
              <div className="timeline-glow-marker"></div>
              <div className="timeline-card">
                <span className="timeline-badge">{item.period}</span>
                <h3>{item.degree}</h3>
                <h4>{item.school}</h4>
                <p>{item.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Education;