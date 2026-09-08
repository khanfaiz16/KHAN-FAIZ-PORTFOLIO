import React, { useState, useEffect } from 'react';
import { HiMenu, HiX } from 'react-icons/hi';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('home');

  useEffect(() => {
    const handleScroll = () => {
      const sections = ['home', 'about', 'skills', 'projects', 'education', 'contact'];
      const scrollY = window.scrollY + 120;

      for (let sec of sections) {
        const el = document.getElementById(sec);
        if (el) {
          const top = el.offsetTop;
          const height = el.offsetHeight;
          if (scrollY >= top && scrollY < top + height) {
            setActiveSection(sec);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className="navbar">
      <div className="container nav-container">
        <a href="#home" className="nav-brand">
          KHAN FAIZ<span className="dot">.</span>
        </a>

        <ul className={`nav-links ${isOpen ? 'active' : ''}`}>
          {['home', 'about', 'skills', 'projects', 'education'].map((item) => (
            <li key={item}>
              <a
                href={`#${item}`}
                className={activeSection === item ? 'active-link' : ''}
                onClick={() => setIsOpen(false)}
              >
                {item.charAt(0).toUpperCase() + item.slice(1)}
              </a>
            </li>
          ))}
          <li>
            <a href="#contact" className="nav-cta" onClick={() => setIsOpen(false)}>
              Let's Talk
            </a>
          </li>
        </ul>

        <button 
          className="mobile-toggle" 
          onClick={() => setIsOpen(!isOpen)} 
          aria-label="Toggle navigation"
        >
          {isOpen ? <HiX /> : <HiMenu />}
        </button>
      </div>
    </nav>
  );
};

export default Navbar;