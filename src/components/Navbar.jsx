import React, { useState, useEffect } from 'react';
import { HiMenu, HiX } from 'react-icons/hi';
import { FiArrowUpRight } from 'react-icons/fi';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('home');

  // "Contact" removed: "Let's Talk" handles the contact anchor
  const navLinks = [
    { label: 'Home', id: 'home' },
    { label: 'About', id: 'about' },
    { label: 'Skills', id: 'skills' },
    { label: 'Projects', id: 'projects' },
    { label: 'Education', id: 'education' },
  ];

  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY + 160;

      // Check contact section separately for CTA highlighting
      const contactEl = document.getElementById('contact');
      if (contactEl) {
        const cTop = contactEl.offsetTop;
        const cHeight = contactEl.offsetHeight;
        if (scrollY >= cTop && scrollY < cTop + cHeight) {
          setActiveSection('contact');
          return;
        }
      }

      for (let item of navLinks) {
        const el = document.getElementById(item.id);
        if (el) {
          const top = el.offsetTop;
          const height = el.offsetHeight;
          if (scrollY >= top && scrollY < top + height) {
            setActiveSection(item.id);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header className="navbar-wrapper">
      <div className="container nav-container">
        {/* Left: Monogram Badge & Brand */}
        <a href="#home" className="nav-brand-group" onClick={() => setIsOpen(false)}>
          <span className="brand-avatar">KF</span>
          <span className="brand-name">KHAN FAIZ</span>
        </a>

        {/* Center: Desktop Capsule Navbar */}
        <nav className="center-pill-wrapper" aria-label="Main Navigation">
          <ul className="center-pill-menu">
            {navLinks.map((item) => {
              const isActive = activeSection === item.id;
              return (
                <li key={item.id} className="pill-menu-item">
                  <a
                    href={`#${item.id}`}
                    className={`pill-menu-link ${isActive ? 'active' : ''}`}
                  >
                    {item.label}
                  </a>
                </li>
              );
            })}
          </ul>
        </nav>

        {/* Right: Primary Conversion Pill & Mobile Toggle */}
        <div className="nav-action-group">
          <a 
            href="#contact" 
            className={`nav-cta-pill desktop-only-cta ${activeSection === 'contact' ? 'cta-active' : ''}`}
          >
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

      {/* Mobile Drawer */}
      <div className={`mobile-drawer-menu ${isOpen ? 'open' : ''}`}>
        <ul className="mobile-drawer-list">
          {navLinks.map((item) => {
            const isActive = activeSection === item.id;
            return (
              <li key={item.id} className="mobile-drawer-item">
                <a
                  href={`#${item.id}`}
                  className={`mobile-drawer-link ${isActive ? 'active' : ''}`}
                  onClick={() => setIsOpen(false)}
                >
                  {item.label}
                </a>
              </li>
            );
          })}
          <li className="mobile-drawer-item mobile-cta-container">
            <a
              href="#contact"
              className="nav-cta-pill mobile-drawer-cta"
              onClick={() => setIsOpen(false)}
            >
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