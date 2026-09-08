import React, { useState } from 'react';
import { HiMenu, HiX } from 'react-icons/hi';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="navbar">
      <div className="container nav-container">
        <a href="#home" className="nav-brand">
          KHAN FAIZ<span className="dot">.</span>
        </a>

        <ul className={`nav-links ${isOpen ? 'active' : ''}`}>
          <li><a href="#home" onClick={() => setIsOpen(false)}>Home</a></li>
          <li><a href="#about" onClick={() => setIsOpen(false)}>About</a></li>
          <li><a href="#skills" onClick={() => setIsOpen(false)}>Skills</a></li>
          <li><a href="#projects" onClick={() => setIsOpen(false)}>Projects</a></li>
          <li><a href="#education" onClick={() => setIsOpen(false)}>Education</a></li>
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