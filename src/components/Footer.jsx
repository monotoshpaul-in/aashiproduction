import React from 'react';
import { Link } from 'react-router-dom';
import { Mail, Phone, MapPin } from 'lucide-react';
import './Footer.css';

const Footer = () => {
  return (
    <footer className="footer bg-charcoal">
      <div className="container footer-container">
        <div className="footer-brand">
          <h2 className="brand-logo footer-logo">AASHI PRODUCTION</h2>
          <p className="footer-tagline">
            Capturing timeless moments with elegance and emotion. Based in Ambikapur, Chhattisgarh.
          </p>
        </div>

        <div className="footer-links-container">
          <div className="footer-nav">
            <h4 className="footer-title">Quick Links</h4>
            <ul>
              <li><Link to="/">Home</Link></li>
              <li><Link to="/portfolio">Portfolio</Link></li>
              <li><Link to="/services">Services</Link></li>
              <li><Link to="/about">About</Link></li>
              <li><Link to="/contact">Contact</Link></li>
            </ul>
          </div>

          <div className="footer-contact">
            <h4 className="footer-title">Contact</h4>
            <ul>
              <li>
                <a href="tel:+919709143253" className="contact-item">
                  <Phone size={18} /> +91 9709143253
                </a>
              </li>
              <li>
                <a href="mailto:hello@aashiproduction.com" className="contact-item">
                  <Mail size={18} /> hello@aashiproduction.com
                </a>
              </li>
              <li>
                <div className="contact-item">
                  <MapPin size={18} /> Ambikapur, Chhattisgarh, India
                </div>
              </li>
            </ul>
          </div>
        </div>
      </div>

      <div className="footer-bottom container">
        <div className="social-links">
          <a href="#" aria-label="Instagram">
             <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
               <rect width="20" height="20" x="2" y="2" rx="5" ry="5"></rect>
               <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
               <line x1="17.5" x2="17.51" y1="6.5" y2="6.5"></line>
             </svg>
          </a>
          <a href="#" aria-label="Facebook">
             <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
               <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"></path>
             </svg>
          </a>
          <a href="https://wa.me/919709143253" aria-label="WhatsApp" className="whatsapp-link">
             <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z"></path>
             </svg>
          </a>
        </div>
        <p className="copyright">
          &copy; {new Date().getFullYear()} Aashi Production. All rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
