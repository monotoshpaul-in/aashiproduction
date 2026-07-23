import React from 'react';
import { Link } from 'react-router-dom';
import './Home.css';

const Home = () => {
  return (
    <div className="home-page fade-in">
      {/* Hero Section */}
      <section className="hero-section">
        <div className="hero-image-wrapper">
          <img 
            src="https://images.unsplash.com/photo-1519741497674-611481863552?auto=format&fit=crop&w=2000&q=80" 
            alt="Elegant Wedding Couple" 
            className="hero-image"
          />
          <div className="hero-overlay"></div>
        </div>
        <div className="hero-content fade-in delay-200">
          <h4 className="hero-subtitle">Ambikapur, Chhattisgarh</h4>
          <h1 className="hero-title">Timeless Emotion</h1>
          <p className="hero-text">Capturing the poetry of your moments through an editorial lens.</p>
          <div className="hero-actions">
            <Link to="/portfolio" className="btn-primary">View Portfolio</Link>
            <Link to="/contact" className="btn-outline" style={{ borderColor: '#fff', color: '#fff' }}>Book Session</Link>
          </div>
        </div>
      </section>

      {/* About Preview */}
      <section className="about-preview section-padding container">
        <div className="about-grid">
          <div className="about-text-col fade-in delay-100">
            <h2 className="section-title">The Art of Storytelling</h2>
            <p className="section-description">
              We believe in the beauty of genuine moments. Our approach blends editorial elegance with raw emotion, creating a visual legacy that transcends time. Every photograph is a handcrafted piece of art, meticulously captured and curated for you.
            </p>
            <Link to="/about" className="link-arrow">Discover Our Story &rarr;</Link>
          </div>
          <div className="about-image-col fade-in delay-200">
            <img 
              src="https://images.unsplash.com/photo-1511285560929-80b456fea0bc?auto=format&fit=crop&w=1000&q=80" 
              alt="Wedding Details" 
              className="about-preview-img"
            />
          </div>
        </div>
      </section>

      {/* Featured Portfolio */}
      <section className="featured-portfolio section-padding bg-off-white">
        <div className="container">
          <div className="section-header text-center fade-in">
            <h2 className="section-title">Curated Galleries</h2>
            <p className="section-description centered">A selection of our finest work across various disciplines.</p>
          </div>
          
          <div className="portfolio-grid fade-in delay-100">
            <Link to="/portfolio/wedding" className="portfolio-item">
              <img src="https://images.unsplash.com/photo-1519225421980-715cb0215aed?auto=format&fit=crop&w=800&q=80" alt="Wedding" />
              <div className="portfolio-item-overlay">
                <h3>Wedding</h3>
              </div>
            </Link>
            <Link to="/portfolio/fashion" className="portfolio-item">
              <img src="https://images.unsplash.com/photo-1492691527719-9d1e07e534b4?auto=format&fit=crop&w=800&q=80" alt="Fashion" />
              <div className="portfolio-item-overlay">
                <h3>Fashion</h3>
              </div>
            </Link>
            <Link to="/portfolio/maternity" className="portfolio-item">
              <img src="https://images.unsplash.com/photo-1583939003579-730e3918a45a?auto=format&fit=crop&w=800&q=80" alt="Maternity" />
              <div className="portfolio-item-overlay">
                <h3>Portrait</h3>
              </div>
            </Link>
          </div>
          
          <div className="text-center" style={{ marginTop: '50px' }}>
            <Link to="/portfolio" className="btn-outline">Explore All Galleries</Link>
          </div>
        </div>
      </section>

      {/* Services Preview */}
      <section className="services-preview section-padding container">
        <div className="section-header text-center fade-in">
          <h2 className="section-title">Our Services</h2>
          <p className="section-description centered">Tailored photography experiences designed for your unique needs.</p>
        </div>
        
        <div className="services-list fade-in delay-100">
          {[
            { title: 'Wedding & Pre-Wedding', desc: 'Comprehensive coverage of your special days with an editorial approach.' },
            { title: 'Couples & Maternity', desc: 'Intimate sessions capturing the essence of your connection and new beginnings.' },
            { title: 'Fashion & Commercial', desc: 'High-end imagery for brands, products, and editorial campaigns.' }
          ].map((service, index) => (
            <div className="service-card" key={index}>
              <h3 className="service-title">{service.title}</h3>
              <p className="service-desc">{service.desc}</p>
              <Link to={`/services`} className="link-arrow text-gold">Learn More &rarr;</Link>
            </div>
          ))}
        </div>
      </section>

      {/* Call to Action */}
      <section className="cta-section fade-in">
        <div className="cta-content">
          <h2>Ready to capture your story?</h2>
          <p>Let's create something beautiful together in Ambikapur or wherever your journey takes you.</p>
          <Link to="/contact" className="btn-primary">Book Your Session</Link>
        </div>
      </section>
    </div>
  );
};

export default Home;
