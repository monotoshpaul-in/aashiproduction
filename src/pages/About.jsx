import React from 'react';
import './About.css';

const About = () => {
  return (
    <div className="about-page fade-in">
      {/* Hero Section */}
      <section className="about-hero">
        <img 
          src="https://images.unsplash.com/photo-1519741497674-611481863552?auto=format&fit=crop&w=2000&q=80" 
          alt="Aashi Production Photographer" 
          className="about-hero-img"
        />
        <div className="about-hero-overlay">
          <h1 className="hero-title">Our Story</h1>
        </div>
      </section>

      {/* Photographer Story */}
      <section className="story-section section-padding container">
        <div className="story-grid">
          <div className="story-text">
            <h2 className="section-title">The Visionary Behind the Lens</h2>
            <h3 className="story-subtitle text-gold">Capturing life's most precious moments with authenticity and grace.</h3>
            <p className="section-description">
              At Aashi Production, photography is more than just taking pictures; it's about preserving the feeling, the atmosphere, and the unspoken words of a moment. With over a decade of experience in editorial and wedding photography, our lead photographer has honed a unique style that blends fine art aesthetics with documentary storytelling.
            </p>
            <p className="section-description">
              Based in the heart of Ambikapur, Chhattisgarh, our studio is dedicated to creating timeless heirlooms for families, couples, and brands. We travel across the country to document love stories and editorial campaigns, always with the same passion and meticulous attention to detail.
            </p>
          </div>
          <div className="story-image">
            <img 
              src="https://images.unsplash.com/photo-1583939003579-730e3918a45a?auto=format&fit=crop&w=800&q=80" 
              alt="Behind the scenes" 
            />
          </div>
        </div>
      </section>

      {/* Philosophy / Vision */}
      <section className="philosophy-section section-padding bg-off-white text-center">
        <div className="container">
          <h2 className="section-title">Our Philosophy</h2>
          <p className="philosophy-text">
            "We don't just photograph subjects; we photograph the way they make us feel. Every image should be a testament to the beauty of human connection."
          </p>
        </div>
      </section>

      {/* Team / Studio */}
      <section className="studio-section section-padding container">
        <div className="section-header text-center mb-60">
          <h2 className="section-title">The Studio & Team</h2>
          <p className="section-description centered">A collective of passionate creatives dedicated to your visual legacy.</p>
        </div>
        
        <div className="team-grid">
          <div className="team-card">
            <img src="https://images.unsplash.com/photo-1511285560929-80b456fea0bc?auto=format&fit=crop&w=800&q=80" alt="Studio Space" />
            <h3>Our Creative Space</h3>
            <p>Designed for comfort and inspiration.</p>
          </div>
          <div className="team-card">
            <img src="https://images.unsplash.com/photo-1492691527719-9d1e07e534b4?auto=format&fit=crop&w=800&q=80" alt="Equipment" />
            <h3>State of the Art Gear</h3>
            <p>We use industry-leading equipment for uncompromising quality.</p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;
