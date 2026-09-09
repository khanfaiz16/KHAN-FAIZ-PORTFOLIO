import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { FaLinkedin, FaGithub, FaPaperPlane } from 'react-icons/fa';

const Hero = () => {
  const titles = [
    'Full Stack Java Developer',
    'Spring Boot Specialist',
    'React.js Developer',
    'REST API Architect'
  ];

  const [currentText, setCurrentText] = useState('');
  const [index, setIndex] = useState(0);
  const [subIndex, setSubIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    if (subIndex === titles[index].length + 1 && !isDeleting) {
      setTimeout(() => setIsDeleting(true), 1500);
      return;
    }

    if (subIndex === 0 && isDeleting) {
      setIsDeleting(false);
      setIndex((prev) => (prev + 1) % titles.length);
      return;
    }

    const timeout = setTimeout(() => {
      setSubIndex((prev) => prev + (isDeleting ? -1 : 1));
      setCurrentText(titles[index].substring(0, subIndex));
    }, isDeleting ? 40 : 80);

    return () => clearTimeout(timeout);
  }, [subIndex, index, isDeleting]);

  return (
    <section id="home" className="hero">
      <div className="container">
        <div className="hero-grid">
          <motion.div 
            className="hero-content"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <div className="hero-status-pill">
              <span className="status-ping"></span> Available for Opportunities
            </div>
            <h1 className="hero-title">
              Hi, I'm <span className="gradient-accent">Khan Mohd. Faiz</span>
            </h1>
            
            <h2 className="hero-role">
              <span>{currentText}</span>
              <span className="typewriter-cursor">|</span>
            </h2>

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
                href="https://www.linkedin.com" 
                target="_blank" 
                rel="noreferrer" 
                className="btn-glass"
              >
                LinkedIn <FaLinkedin />
              </a>
              <a 
                href="https://github.com/khanfaiz" 
                target="_blank" 
                rel="noreferrer" 
                className="btn-glass"
              >
                GitHub <FaGithub />
              </a>
            </div>
          </motion.div>

          <motion.div 
            className="hero-image-container"
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.7 }}
          >
            <div className="glowing-frame">
              <img 
                src="./profile.JPG" 
                alt="Khan Mohd. Faiz" 
                className="profile-photo"
                loading="eager"
              />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Hero;