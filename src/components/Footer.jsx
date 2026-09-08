import React from 'react';
import { FaLinkedin, FaGithub, FaEnvelope } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-socials">
          <a href="https://www.linkedin.com/in/mohd-faiz-khan-085555319" target="_blank" rel="noreferrer" aria-label="LinkedIn">
            <FaLinkedin />
          </a>
          <a href="https://github.com/khanfaiz16" target="_blank" rel="noreferrer" aria-label="GitHub">
            <FaGithub />
          </a>
          <a href="mailto:khanfaiztech1609@gmail.com" aria-label="Email">
            <FaEnvelope />
          </a>
        </div>
        <p style={{ color: 'var(--text-muted)', fontSize: '0.9rem' }}>
          Designed & Engineered with React by <strong style={{ color: 'var(--text-main)' }}>Khan Faiz</strong>.
        </p>
      </div>
    </footer>
  );
};

export default Footer;