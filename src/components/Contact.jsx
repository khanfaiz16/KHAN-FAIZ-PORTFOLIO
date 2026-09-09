import React, { useState } from 'react';
import { 
  FaPaperPlane, 
  FaEnvelope, 
  FaPhoneAlt, 
  FaMapMarkerAlt, 
  FaWhatsapp, 
  FaCheck, 
  FaCopy 
} from 'react-icons/fa';
import { FiSend } from 'react-icons/fi';
import { FadeInWhenVisible } from './MotionWrapper';

const Contact = () => {
  const [copiedKey, setCopiedKey] = useState(null);
  const [selectedTopic, setSelectedTopic] = useState('Full-Time Role');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: 'Inquiry: Full-Time Role',
    message: ''
  });
  const [status, setStatus] = useState({ state: '', message: '' });
  const FORMSPREE_FORM_ID = "maeypgvn";

  const topics = [
    'Full-Time Role',
    'Spring Boot Backend',
    'React Full-Stack',
    'Consulting / Freelance'
  ];

  const contactInfo = [
    {
      id: 'email',
      icon: <FaEnvelope />,
      title: 'Email Address',
      value: 'khanfaiztech1609@gmail.com',
      actionType: 'copy'
    },
    {
      id: 'phone',
      icon: <FaPhoneAlt />,
      title: 'Direct Line',
      value: '+91 73855 40220',
      actionType: 'copy'
    },
    {
      id: 'location',
      icon: <FaMapMarkerAlt />,
      title: 'Location',
      value: 'All Over India',
      actionType: 'none'
    }
  ];

  const handleCopy = (id, text) => {
    navigator.clipboard.writeText(text);
    setCopiedKey(id);
    setTimeout(() => setCopiedKey(null), 2000);
  };

  const handleTopicClick = (topic) => {
    setSelectedTopic(topic);
    setFormData((prev) => ({
      ...prev,
      subject: `Inquiry: ${topic}`
    }));
  };

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.phone || !formData.message) {
      setStatus({ state: 'error', message: 'Please complete all required fields.' });
      return;
    }

    setIsSubmitting(true);
    setStatus({ state: '', message: '' });

    try {
      const response = await fetch(`https://formspree.io/f/${FORMSPREE_FORM_ID}`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Accept': 'application/json'
        },
        body: JSON.stringify({
          name: formData.name,
          email: formData.email,
          phone: formData.phone,
          subject: formData.subject,
          message: formData.message,
          topic: selectedTopic
        })
      });

      if (response.ok) {
        setStatus({ 
          state: 'success', 
          message: 'Message dispatched successfully! I will get back to you shortly.' 
        });
        setFormData({
          name: '',
          email: '',
          phone: '',
          subject: `Inquiry: ${selectedTopic}`,
          message: ''
        });
      } else {
        const result = await response.json();
        const errorMsg = result?.errors?.map((err) => err.message).join(', ') || 'Submission failed.';
        setStatus({ state: 'error', message: errorMsg });
      }
    } catch (error) {
      setStatus({ 
        state: 'error', 
        message: 'Network error occurred. Please try again or reach out on WhatsApp.' 
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="contact" className="section contact-section">
      <div className="container">
        <FadeInWhenVisible>
          <div className="section-header">
            <span className="section-badge">Get In Touch</span>
            <h2 className="section-title">Let's Build Something Dependable</h2>
          </div>
        </FadeInWhenVisible>

        <div className="contact-unified-grid">
          {/* Left Column: Direct Desk */}
          <FadeInWhenVisible delay={0.1}>
            <div className="contact-desk-column">
              <div className="status-availability-card">
                <div className="availability-indicator">
                  <span className="live-ping"></span>
                  <span className="live-label">Currently Open To Work</span>
                </div>
              </div>

              <div className="contact-quick-list">
                {contactInfo.map((item) => (
                  <div key={item.id} className="contact-interactive-card">
                    <div className="contact-icon-bubble">{item.icon}</div>
                    <div className="contact-meta-text">
                      <span className="contact-label">{item.title}</span>
                      <p className="contact-val">{item.value}</p>
                    </div>
                    {item.actionType === 'copy' && (
                      <button
                        type="button"
                        className="btn-copy-chip"
                        onClick={() => handleCopy(item.id, item.value)}
                        title="Copy to clipboard"
                      >
                        {copiedKey === item.id ? <FaCheck className="copied-icon" /> : <FaCopy />}
                      </button>
                    )}
                  </div>
                ))}
              </div>

              <div className="whatsapp-fast-track">
                <div className="wa-icon-cluster">
                  <FaWhatsapp />
                </div>
                <div className="wa-content">
                  <h4>Prefer instant chat?</h4>
                  <p>Send a direct message via WhatsApp for swift turnarounds.</p>
                </div>
                <a
                  href="https://wa.me/917385540220"
                  target="_blank"
                  rel="noreferrer"
                  className="btn-wa-launch"
                >
                  Message <FiSend />
                </a>
              </div>
            </div>
          </FadeInWhenVisible>

          {/* Right Column: Dispatch Form */}
          <FadeInWhenVisible delay={0.2}>
            <div className="contact-form-card">
              <div className="form-card-header">
                <h3>Send a Direct Dispatch</h3>
                <p>Select what you have in mind to speed up our conversation.</p>
              </div>

              <div className="topic-chips-wrapper">
                {topics.map((t) => (
                  <button
                    key={t}
                    type="button"
                    className={`topic-chip ${selectedTopic === t ? 'active' : ''}`}
                    onClick={() => handleTopicClick(t)}
                  >
                    {t}
                  </button>
                ))}
              </div>

              <form onSubmit={handleSubmit} className="contact-interactive-form">
                <div className="form-group">
                  <label htmlFor="name">Your Name *</label>
                  <input
                    id="name"
                    type="text"
                    name="name"
                    placeholder="e.g. Alex Rivera"
                    value={formData.name}
                    onChange={handleChange}
                    required
                  />
                </div>

                <div className="form-row-duo">
                  <div className="form-group">
                    <label htmlFor="email">Email Address *</label>
                    <input
                      id="email"
                      type="email"
                      name="email"
                      placeholder="name@company.com"
                      value={formData.email}
                      onChange={handleChange}
                      required
                    />
                  </div>

                  <div className="form-group">
                    <label htmlFor="phone">Mobile Number *</label>
                    <input
                      id="phone"
                      type="tel"
                      name="phone"
                      placeholder="+91 98765 43210"
                      value={formData.phone}
                      onChange={handleChange}
                      required
                    />
                  </div>
                </div>

                <div className="form-group">
                  <label htmlFor="subject">Subject</label>
                  <input
                    id="subject"
                    type="text"
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                  />
                </div>

                <div className="form-group">
                  <label htmlFor="message">Message *</label>
                  <textarea
                    id="message"
                    name="message"
                    rows="4"
                    placeholder="Briefly describe your project, tech stack requirements, or role details..."
                    value={formData.message}
                    onChange={handleChange}
                    required
                  ></textarea>
                </div>

                <button 
                  type="submit" 
                  className="btn-dispatch-send" 
                  disabled={isSubmitting}
                >
                  <span>{isSubmitting ? 'Dispatching...' : 'Send Message'}</span>
                  <FaPaperPlane className="plane-icon" />
                </button>

                {status.message && (
                  <div className={`status-alert ${status.state}`}>
                    {status.message}
                  </div>
                )}
              </form>
            </div>
          </FadeInWhenVisible>
        </div>
      </div>
    </section>
  );
};

export default Contact;