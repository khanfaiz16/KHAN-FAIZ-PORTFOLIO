import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { FaLinkedin, FaGithub, FaPaperPlane, FaDownload } from 'react-icons/fa';
import { personalData } from '../data/data';

const titles = [
  'Full Stack Java Developer',
  'Solution Architect & Pre-Sales',
  'React.js & Next.js Developer',
  'Founder, Pentrixa Tech'
];

const Hero = () => {
  const [text, setText] = useState('');
  const [index, setIndex] = useState(0);
  const [deleting, setDeleting] = useState(false);

  useEffect(() => {
    const full = titles[index];
    let delay = deleting ? 40 : 80;
    if (!deleting && text === full) delay = 1600;
    if (deleting && text === '') delay = 300;

    const t = setTimeout(() => {
      if (!deleting && text === full) return setDeleting(true);
      if (deleting && text === '') {
        setDeleting(false);
        return setIndex((i) => (i + 1) % titles.length);
      }
      setText(full.substring(0, text.length + (deleting ? -1 : 1)));
    }, delay);
    return () => clearTimeout(t);
  }, [text, deleting, index]);

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

            <h2 className="hero-role" aria-label={titles.join(', ')}>
              <span aria-hidden="true">{text}</span>
              <span className="typewriter-cursor" aria-hidden="true">|</span>
            </h2>

            <p className="hero-description">
              MCA student and Full Stack Java Developer who designs enterprise backends with Spring Boot
              and crafts fast, accessible interfaces in React. I turn customer requirements into working
              systems, and I founded Pentrixa Tech to help businesses build and scale digital products.
            </p>

            <div className="hero-actions">
              <a href="#contact" className="btn-gradient">
                Hire Me <FaPaperPlane />
              </a>
              <a href={personalData.cvUrl} download className="btn-glass btn-cv">
                Download CV <FaDownload />
              </a>
              <a href={personalData.linkedinUrl} target="_blank" rel="noreferrer" className="btn-glass">
                LinkedIn <FaLinkedin />
              </a>
              <a href={personalData.githubUrl} target="_blank" rel="noreferrer" className="btn-glass">
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
                src="/profile.jpg"
                alt="Khan Mohd. Faiz"
                className="profile-photo"
                width="800"
                height="940"
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
