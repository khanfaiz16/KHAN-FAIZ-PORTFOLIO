import React from 'react';
import { FaComments, FaClipboardCheck, FaChalkboardTeacher, FaPuzzlePiece, FaRocket } from 'react-icons/fa';
import { strengths } from '../data/data';

const icons = [FaComments, FaClipboardCheck, FaChalkboardTeacher, FaPuzzlePiece, FaRocket];

const About = () => {
  return (
    <section id="about" className="section">
      <div className="container">
        <div className="section-header">
          <span className="section-badge">Background</span>
          <h2 className="section-title">About Me</h2>
        </div>

        <div className="about-box">
          <p className="about-summary">
            I combine deep technical work with customer-facing problem solving. I have built a full hospital ERP,
            a live commercial platform with CI/CD and technical SEO, and a secure admin portal for a pharmaceutical
            business. My goal is to design the right solution for a customer's requirements, explain it clearly,
            and then build it end to end, as a Solution Architect or Pre-Sales engineer.
          </p>

          <div className="strengths-grid">
            {strengths.map((label, i) => {
              const Icon = icons[i];
              return (
                <div key={label} className="strength-card">
                  <div className="strength-icon"><Icon /></div>
                  <div>
                    <h4>{label}</h4>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
