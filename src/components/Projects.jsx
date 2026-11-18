import React from 'react';
import { FaCheckCircle, FaExternalLinkAlt, FaGithub, FaImage } from 'react-icons/fa';
import { FadeInWhenVisible } from './MotionWrapper';
import { projectsData } from '../data/data';

const Projects = () => {
  return (
    <section id="projects" className="section projects-editorial-section">
      <div className="container">
        <FadeInWhenVisible>
          <div className="section-header">
            <span className="section-badge">Portfolio Archive</span>
            <h2 className="section-title">Featured Builds</h2>
          </div>
        </FadeInWhenVisible>

        <div className="editorial-projects-grid">
          {projectsData.map((proj, idx) => (
            <FadeInWhenVisible key={proj.title} delay={idx * 0.1}>
              <article className="editorial-project-card spotlight-card">
                <div className="project-shot">
                  {proj.screenshot ? (
                    <img src={proj.screenshot} alt={`${proj.title} screenshot`} loading="lazy" />
                  ) : (
                    <div className="project-shot-placeholder" aria-hidden="true">
                      <FaImage />
                      <span>Screenshot coming soon</span>
                    </div>
                  )}
                  <span className="spec-index">0{idx + 1}</span>
                </div>

                <div className="project-main-content">
                  <div className="project-header-group">
                    <h3>{proj.title}</h3>
                    <p className="desc">{proj.description}</p>
                  </div>

                  <ul className="bullet-points">
                    {proj.points.map((pt) => (
                      <li key={pt}>
                        <FaCheckCircle className="bullet-check" />
                        <span>{pt}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="project-footer">
                  <div className="skill-chips">
                    {proj.stack.map((item) => (
                      <span key={item} className="chip">{item}</span>
                    ))}
                  </div>

                  <div className="project-action-wrapper">
                    {proj.liveLink && (
                      <a href={proj.liveLink} target="_blank" rel="noreferrer" className="btn-project-link live-btn">
                        <span>Live Project</span> <FaExternalLinkAlt />
                      </a>
                    )}
                    {proj.repoLink && (
                      <a href={proj.repoLink} target="_blank" rel="noreferrer" className="btn-project-link repo-btn">
                        <span>Source Code</span> <FaGithub />
                      </a>
                    )}
                  </div>
                </div>
              </article>
            </FadeInWhenVisible>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
