import React from 'react';
import { FaEnvelope, FaLinkedin, FaPhone, FaGithub } from 'react-icons/fa';
import '../styles/Contact.css';

const Contact = () => (
  <section className="contact-section">
    <h2>Contact Me</h2>
    <div className="contact-links">
      <a href="mailto:your.email@example.com" className="contact-item" target="_blank" rel="noopener noreferrer">
        <FaEnvelope /> <span>Email</span>
      </a>
      <a href="https://linkedin.com/in/yourprofile" className="contact-item" target="_blank" rel="noopener noreferrer">
        <FaLinkedin /> <span>LinkedIn</span>
      </a>
      <a href="tel:+1234567890" className="contact-item">
        <FaPhone /> <span>Phone</span>
      </a>
      <a href="https://github.com/yourusername" className="contact-item" target="_blank" rel="noopener noreferrer">
        <FaGithub /> <span>GitHub</span>
      </a>
    </div>
  </section>
);

export default Contact;
