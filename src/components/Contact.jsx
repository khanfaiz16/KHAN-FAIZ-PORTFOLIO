import React, { useState } from 'react';
import { FaEnvelope, FaPhoneAlt, FaMapMarkerAlt, FaPaperPlane } from 'react-icons/fa';

const Contact = () => {
  const [formData, setFormData] = useState({ 
    name: '', 
    email: '', 
    phone: '', 
    subject: '', 
    message: '' 
  });
  const [status, setStatus] = useState({ state: '', message: '' });
  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setStatus({ state: '', message: '' });

    try {
      // Replace with your Formspree endpoint ID (e.g., https://formspree.io/f/xyzabced)
      const response = await fetch('https://formspree.io/f/maeypgvn', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Accept': 'application/json'
        },
        body: JSON.stringify(formData)
      });

      if (response.ok) {
        setStatus({ state: 'success', message: 'Thank you! Your message has been sent successfully.' });
        setFormData({ name: '', email: '', phone: '', subject: '', message: '' });
      } else {
        setStatus({ state: 'error', message: 'Could not send message. Please verify your Formspree ID.' });
      }
    } catch {
      setStatus({ state: 'error', message: 'Network error. Please try again later.' });
    } finally {
      setLoading(false);
    }
  };

  return (
    <section id="contact" className="section">
      <div className="container">
        <div className="section-header">
          <span className="section-badge">Reach Out</span>
          <h2 className="section-title gradient-title">Let's Connect</h2>
        </div>

        <div className="contact-grid">
          <div className="contact-info-list">
            <div className="contact-info-card">
              <div className="contact-icon-bubble"><FaEnvelope /></div>
              <div className="contact-details">
                <span>Email</span>
                <p>khanfaiztech1609@gmail.com</p>
              </div>
            </div>

            <div className="contact-info-card">
              <div className="contact-icon-bubble"><FaPhoneAlt /></div>
              <div className="contact-details">
                <span>Phone</span>
                <p>(+91) 7385540220</p>
              </div>
            </div>

            <div className="contact-info-card">
              <div className="contact-icon-bubble"><FaMapMarkerAlt /></div>
              <div className="contact-details">
                <span>Location</span>
                <p>K.V Patil Nagar, Navjeevan, Vasai East-401208</p>
              </div>
            </div>
          </div>

          <div className="contact-form-card">
            <form onSubmit={handleSubmit}>
              <div className="form-group">
                <label>Your Name</label>
                <input 
                  type="text" 
                  name="name" 
                  value={formData.name} 
                  onChange={handleChange} 
                  required 
                  placeholder="e.g. Faiz Khan" 
                />
              </div>

              <div className="form-group">
                <label>Your Email</label>
                <input 
                  type="email" 
                  name="email" 
                  value={formData.email} 
                  onChange={handleChange} 
                  required 
                  placeholder="you@example.com" 
                />
              </div>

              <div className="form-group">
                <label>Mobile Number</label>
                <input 
                  type="tel" 
                  name="phone" 
                  value={formData.phone} 
                  onChange={handleChange} 
                  required 
                  placeholder="e.g. +91 9876543210" 
                />
              </div>

              <div className="form-group">
                <label>Subject</label>
                <input 
                  type="text" 
                  name="subject" 
                  value={formData.subject} 
                  onChange={handleChange} 
                  required 
                  placeholder="Project inquiry or job opportunity" 
                />
              </div>

              <div className="form-group">
                <label>Message</label>
                <textarea 
                  rows="5" 
                  name="message" 
                  value={formData.message} 
                  onChange={handleChange} 
                  required 
                  placeholder="Hello Faiz, I'd like to discuss a project..."
                ></textarea>
              </div>

              <button 
                type="submit" 
                className="btn-gradient" 
                style={{ width: '100%', justifyContent: 'center' }} 
                disabled={loading}
              >
                {loading ? 'Sending...' : 'Send Message'} <FaPaperPlane />
              </button>

              {status.message && (
                <div className={`status-alert ${status.state}`}>
                  {status.message}
                </div>
              )}
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;