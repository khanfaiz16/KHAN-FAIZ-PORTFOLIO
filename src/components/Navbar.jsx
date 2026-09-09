import React, { useState, useEffect } from 'react';
import { HiMenu, HiX } from 'react-icons/hi';
import { FiArrowUpRight } from 'react-icons/fi';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('home');

  // Your exact original fields
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

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header className="navbar-wrapper">
      <div className="container nav-container">
        {/* Left: Brand Badge & Title */}
        <a href="#home" className="nav-brand-group">
          <span className="brand-avatar">KF</span>
          <span className="brand-name">KHAN FAIZ</span>
        </a>

        {/* Center: Floating Rounded Capsule with your original fields */}
        <nav className="center-pill-wrapper">
          <ul className={`center-pill-menu ${isOpen ? 'active' : ''}`}>
            {navLinks.map((item) => {
              const isActive = activeSection === item.id;
              return (
                <li key={item.id} className="pill-menu-item">
                  <a
                    href={`#${item.id}`}
                    className={`pill-menu-link ${isActive ? 'active' : ''}`}
                    onClick={() => setIsOpen(false)}
                  >
                    {item.label}
                  </a>
                </li>
              );
            })}
          </ul>
        </nav>

        {/* Right: Rounded CTA Button */}
        <div className="nav-action-group">
          <a href="#contact" className="nav-cta-pill">
            <span>Let's Talk</span>
            <FiArrowUpRight className="cta-arrow" />
          </a>

          <button
            className="mobile-toggle-btn"
            onClick={() => setIsOpen(!isOpen)}
            aria-label="Toggle navigation"
          >
            {isOpen ? <HiX /> : <HiMenu />}
          </button>
        </div>
      </div>
    </header>
  );
};

export default Navbar;