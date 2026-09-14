import React from 'react';
import { FaGithub, FaLinkedin, FaEnvelope, FaWhatsapp } from 'react-icons/fa';
import { personalData } from '../data/data';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-socials">
          <a href={personalData.githubUrl} target="_blank" rel="noreferrer" aria-label="GitHub">
            <FaGithub />
          </a>
          <a href={personalData.whatsappUrl} target="_blank" rel="noreferrer" aria-label="WhatsApp">
            <FaWhatsapp />
          </a>
          <a href={`mailto:${personalData.email}`} aria-label="Email">
            <FaEnvelope />
          </a>
          <a href="https://linkedin.com" target="_blank" rel="noreferrer" aria-label="LinkedIn">
            <FaLinkedin />
          </a>
        </div>
        <p style={{ fontFamily: 'var(--font-mono)', fontSize: '0.85rem', color: 'var(--text-muted)' }}>
          © {new Date().getFullYear()} {personalData.name}. All Rights Reserved. Crafted with Vintage Engineering Standards.
        </p>
      </div>
    </footer>
  );
};

export default Footer;