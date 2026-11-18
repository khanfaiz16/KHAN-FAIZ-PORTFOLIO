import React, { useState, useEffect } from 'react';
import { HiMenu, HiX } from 'react-icons/hi';
import { FiArrowUpRight } from 'react-icons/fi';
import { navLinks, personalData } from '../data/data';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('home');

  useEffect(() => {
    const handleScroll = () => {
      const y = window.scrollY + 160;
      const contactEl = document.getElementById('contact');
      if (contactEl && y >= contactEl.offsetTop && y < contactEl.offsetTop + contactEl.offsetHeight) {
        setActiveSection('contact');
        return;
      }
      for (const item of navLinks) {
        const el = document.getElementById(item.id);
        if (el && y >= el.offsetTop && y < el.offsetTop + el.offsetHeight) {
          setActiveSection(item.id);
          break;
        }
      }
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header className="navbar-wrapper">
      <div className="container nav-container">
        <a href="#home" className="nav-brand-group" onClick={() => setIsOpen(false)}>
          <span className="brand-avatar">{personalData.initials}</span>
          <span className="brand-name">{personalData.shortName}</span>
        </a>

        <nav className="center-pill-wrapper" aria-label="Main Navigation">
          <ul className="center-pill-menu">
            {navLinks.map((item) => (
              <li key={item.id} className="pill-menu-item">
                <a href={`#${item.id}`} className={`pill-menu-link ${activeSection === item.id ? 'active' : ''}`}>
                  {item.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>

        <div className="nav-action-group">
          <a href="#contact" className={`nav-cta-pill desktop-only-cta ${activeSection === 'contact' ? 'cta-active' : ''}`}>
            <span>Let's Talk</span>
            <FiArrowUpRight className="cta-arrow" />
          </a>

          <button
            type="button"
            className="mobile-toggle-btn"
            onClick={() => setIsOpen((prev) => !prev)}
            aria-label="Toggle Navigation Menu"
            aria-expanded={isOpen}
          >
            {isOpen ? <HiX /> : <HiMenu />}
          </button>
        </div>
      </div>

      <div className={`mobile-drawer-menu ${isOpen ? 'open' : ''}`}>
        <ul className="mobile-drawer-list">
          {navLinks.map((item) => (
            <li key={item.id} className="mobile-drawer-item">
              <a
                href={`#${item.id}`}
                className={`mobile-drawer-link ${activeSection === item.id ? 'active' : ''}`}
                onClick={() => setIsOpen(false)}
              >
                {item.label}
              </a>
            </li>
          ))}
          <li className="mobile-drawer-item mobile-cta-container">
            <a href="#contact" className="nav-cta-pill mobile-drawer-cta" onClick={() => setIsOpen(false)}>
              <span>Let's Talk</span>
              <FiArrowUpRight className="cta-arrow" />
            </a>
          </li>
        </ul>
      </div>
    </header>
  );
};

export default Navbar;
