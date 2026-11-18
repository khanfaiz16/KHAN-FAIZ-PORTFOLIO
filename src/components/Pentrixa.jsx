import React, { useState } from 'react';
import { FaArrowRight } from 'react-icons/fa';
import { FadeInWhenVisible } from './MotionWrapper';
import { pentrixaData } from '../data/data';

const Pentrixa = () => {
  const [logoMissing, setLogoMissing] = useState(false);

  return (
    <section id="pentrixa" className="section pentrixa-section">
      <div className="container">
        <FadeInWhenVisible>
          <div className="section-header">
            <span className="section-badge">Founder</span>
            <h2 className="section-title">Pentrixa Tech</h2>
          </div>
        </FadeInWhenVisible>

        <FadeInWhenVisible delay={0.1}>
          <div className="pentrixa-card">
            <div className="pentrixa-brand">
              <div className="pentrixa-logo-slot">
                {!logoMissing ? (
                  <img
                    src={pentrixaData.logo}
                    alt={`${pentrixaData.name} logo`}
                    onError={() => setLogoMissing(true)}
                  />
                ) : (
                  <span className="pentrixa-logo-fallback">{pentrixaData.name}</span>
                )}
              </div>
              <span className="pentrixa-role">{pentrixaData.role}</span>
              <p className="pentrixa-tagline">{pentrixaData.tagline}</p>
            </div>

            <div className="pentrixa-body">
              <p className="pentrixa-summary">{pentrixaData.summary}</p>
              <ul className="pentrixa-services">
                {pentrixaData.services.map((s) => (
                  <li key={s}>{s}</li>
                ))}
              </ul>
              <a href={pentrixaData.website} target="_blank" rel="noreferrer" className="btn-gradient pentrixa-visit">
                Visit pentrixa-tech.com <FaArrowRight />
              </a>
            </div>
          </div>
        </FadeInWhenVisible>
      </div>
    </section>
  );
};

export default Pentrixa;
