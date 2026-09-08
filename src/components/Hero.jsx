import React from 'react';
import { FaLinkedin, FaGithub, FaPaperPlane } from 'react-icons/fa';

const Hero = () => {
  return (
    <section id="home" className="hero">
      <div className="container">
        <div className="hero-grid">
          <div className="hero-content">
            <div className="hero-status-pill">
              <span className="status-ping"></span> Available for Full Stack Opportunities
            </div>
            <h1 className="hero-title">
              Hi, I'm <span className="gradient-accent">Khan Mohd. Faiz</span>
            </h1>
            <h2 className="hero-role">Full Stack Java Developer</h2>
            <p className="hero-description">
              Master of Computer Applications (MCA) scholar focused on engineering 
              high-concurrency enterprise backends using Java and Spring Boot, paired with sleek, 
              responsive, and accessible front-end architectures in React.js.
            </p>
            <div className="hero-actions">
              <a href="#contact" className="btn-gradient">
                Hire Me <FaPaperPlane />
              </a>
              <a 
                href="https://www.linkedin.com/in/mohd-faiz-khan-085555319" 
                target="_blank" 
                rel="noreferrer" 
                className="btn-glass"
              >
                LinkedIn <FaLinkedin />
              </a>
              <a 
                href="https://github.com/khanfaiz16" 
                target="_blank" 
                rel="noreferrer" 
                className="btn-glass"
              >
                GitHub <FaGithub />
              </a>
            </div>
          </div>

          <div className="hero-image-container">
            <div className="glowing-frame">
              <img src="./profile.JPG" alt="Khan Mohd. Faiz" className="profile-photo" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;