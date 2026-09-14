import React from 'react';
import { FaCheckCircle, FaExternalLinkAlt, FaGithub } from 'react-icons/fa';
import { FadeInWhenVisible, TiltCard } from './MotionWrapper';
import { projectsData } from '../data/data';

const Projects = () => {
  return (
    <section id="projects" className="section projects-editorial-section">
      <div className="container">
        <FadeInWhenVisible>
          <div className="section-header">
            <span className="section-badge">Portfolio Archive</span>
            <h2 className="section-title">Featured Architectural Builds</h2>
          </div>
        </FadeInWhenVisible>

        <div className="editorial-projects-grid">
          {projectsData.map((proj, idx) => (
            <FadeInWhenVisible key={idx} delay={idx * 0.12}>
              <TiltCard className="editorial-project-card">
                {/* Top Blueprint Spec Label */}
                <div className="project-card-meta">
                  <span className="spec-index">SPEC. 0{idx + 1}</span>
                  <span className="spec-line-rule"></span>
                </div>

                <div className="project-main-content">
                  <div className="project-header-group">
                    <h3>{proj.title}</h3>
                    <p className="desc">{proj.description}</p>
                  </div>

                  <ul className="bullet-points">
                    {proj.points.map((pt, pIdx) => (
                      <li key={pIdx}>
                        <FaCheckCircle className="bullet-check" />
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
                    {proj.liveLink && (
                      <a
                        href={proj.liveLink}
                        target="_blank"
                        rel="noreferrer"
                        className="btn-project-link live-btn"
                      >
                        <span>Live Project</span> <FaExternalLinkAlt />
                      </a>
                    )}
                    {proj.repoLink && (
                      <a
                        href={proj.repoLink}
                        target="_blank"
                        rel="noreferrer"
                        className="btn-project-link repo-btn"
                      >
                        <span>Source Code</span> <FaGithub />
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