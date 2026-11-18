import React from 'react';
import { FaGithub, FaLinkedin, FaEnvelope, FaWhatsapp } from 'react-icons/fa';
import { personalData, pentrixaData } from '../data/data';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-socials">
          <a href={personalData.githubUrl} target="_blank" rel="noreferrer" aria-label="GitHub"><FaGithub /></a>
          <a href={personalData.linkedinUrl} target="_blank" rel="noreferrer" aria-label="LinkedIn"><FaLinkedin /></a>
          <a href={personalData.whatsappUrl} target="_blank" rel="noreferrer" aria-label="WhatsApp"><FaWhatsapp /></a>
          <a href={`mailto:${personalData.email}`} aria-label="Email"><FaEnvelope /></a>
        </div>
        <p className="footer-note">
          © {new Date().getFullYear()} {personalData.name}. All rights reserved. Founder of{' '}
          <a href={pentrixaData.website} target="_blank" rel="noreferrer">{pentrixaData.name}</a>.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
