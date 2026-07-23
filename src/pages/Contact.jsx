import React from 'react';
import './Contact.css';

const Contact = () => {
  const handleSubmit = (e) => {
    e.preventDefault();
    // Dummy submit handler
    alert("Thank you for your inquiry. We will get back to you soon!");
  };

  return (
    <div className="contact-page fade-in">
      <div className="contact-layout">
        <div className="contact-image-col">
          <img 
            src="https://images.unsplash.com/photo-1519741497674-611481863552?auto=format&fit=crop&w=1200&q=80" 
            alt="Contact Studio" 
          />
        </div>
        <div className="contact-form-col">
          <div className="contact-form-wrapper">
            <h1 className="page-header-title" style={{ marginBottom: '10px' }}>Get in Touch</h1>
            <p className="section-description" style={{ marginBottom: '40px' }}>
              We would love to hear about your upcoming project or special day. Please fill out the form below, and we will get back to you within 24 hours.
            </p>

            <form onSubmit={handleSubmit} className="contact-form">
              <div className="form-group">
                <label htmlFor="name">Name</label>
                <input type="text" id="name" required placeholder="Jane Doe" />
              </div>
              
              <div className="form-group">
                <label htmlFor="email">Email</label>
                <input type="email" id="email" required placeholder="jane@example.com" />
              </div>

              <div className="form-group">
                <label htmlFor="service">Service of Interest</label>
                <select id="service" required>
                  <option value="">Select a service</option>
                  <option value="wedding">Wedding / Pre-Wedding</option>
                  <option value="portrait">Portrait / Couple</option>
                  <option value="commercial">Commercial / Fashion</option>
                  <option value="other">Other</option>
                </select>
              </div>

              <div className="form-group">
                <label htmlFor="date">Estimated Date (Optional)</label>
                <input type="date" id="date" />
              </div>

              <div className="form-group">
                <label htmlFor="message">Message</label>
                <textarea id="message" rows="5" required placeholder="Tell us more about your vision..."></textarea>
              </div>

              <button type="submit" className="btn-primary" style={{ width: '100%', marginTop: '20px' }}>
                Send Inquiry
              </button>
            </form>
            
            <div className="contact-direct-info">
              <p>Or reach us directly at:</p>
              <p className="text-gold">+91 9709143253 | hello@aashiproduction.com</p>
              <p>Ambikapur, Chhattisgarh, India</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
