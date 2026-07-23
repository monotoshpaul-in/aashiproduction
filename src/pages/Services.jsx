import React, { useEffect } from 'react';
import { Routes, Route, Link, useLocation } from 'react-router-dom';
import './Services.css';

const servicesData = [
  { id: 'wedding', title: 'Wedding Photography', subtitle: 'A cinematic approach to your special day', cover: 'https://images.unsplash.com/photo-1519225421980-715cb0215aed?auto=format&fit=crop&w=1600&q=80' },
  { id: 'pre-wedding', title: 'Pre Wedding Photography', subtitle: 'Telling your love story before the vows', cover: 'https://images.unsplash.com/photo-1583939003579-730e3918a45a?auto=format&fit=crop&w=1600&q=80' },
  { id: 'couple', title: 'Couple Sessions', subtitle: 'Intimate and raw portraits', cover: 'https://images.unsplash.com/photo-1511285560929-80b456fea0bc?auto=format&fit=crop&w=1600&q=80' },
  { id: 'maternity', title: 'Maternity Photography', subtitle: 'Capturing the beauty of anticipation', cover: 'https://images.unsplash.com/photo-1492691527719-9d1e07e534b4?auto=format&fit=crop&w=1600&q=80' },
  { id: 'baby', title: 'Baby Photography', subtitle: 'Delicate moments of new life', cover: 'https://images.unsplash.com/photo-1519741497674-611481863552?auto=format&fit=crop&w=1600&q=80' },
  { id: 'birthday', title: 'Birthday Photography', subtitle: 'Celebrating milestones with joy', cover: 'https://images.unsplash.com/photo-1511285560929-80b456fea0bc?auto=format&fit=crop&w=1600&q=80' },
  { id: 'fashion', title: 'Fashion Photography', subtitle: 'Editorial imagery for models and brands', cover: 'https://images.unsplash.com/photo-1492691527719-9d1e07e534b4?auto=format&fit=crop&w=1600&q=80' },
  { id: 'product', title: 'Product Photography', subtitle: 'Highlighting craftsmanship and detail', cover: 'https://images.unsplash.com/photo-1583939003579-730e3918a45a?auto=format&fit=crop&w=1600&q=80' },
  { id: 'commercial', title: 'Commercial Photography', subtitle: 'Visuals that elevate your business', cover: 'https://images.unsplash.com/photo-1519225421980-715cb0215aed?auto=format&fit=crop&w=1600&q=80' },
  { id: 'event', title: 'Event Coverage', subtitle: 'Comprehensive documentation of your gatherings', cover: 'https://images.unsplash.com/photo-1519741497674-611481863552?auto=format&fit=crop&w=1600&q=80' },
];

const ServiceList = () => (
  <div className="section-padding container fade-in" style={{ marginTop: '80px' }}>
    <div className="text-center mb-60">
      <h1 className="page-header-title">Our Services</h1>
      <p className="section-description centered">Discover our specialized photography experiences.</p>
    </div>
    
    <div className="services-grid">
      {servicesData.map((srv) => (
        <Link to={`/services/${srv.id}`} className="service-overview-card" key={srv.id}>
          <div className="service-img-wrapper">
            <img src={srv.cover} alt={srv.title} />
          </div>
          <div className="service-overview-content">
            <h3>{srv.title}</h3>
            <p>{srv.subtitle}</p>
            <span className="link-arrow text-gold">Explore Package &rarr;</span>
          </div>
        </Link>
      ))}
    </div>
  </div>
);

const ServiceDetail = ({ service }) => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [service]);

  if (!service) return null;

  return (
    <div className="service-detail-page fade-in">
      <div className="service-hero">
        <img src={service.cover} alt={service.title} />
        <div className="service-hero-overlay">
          <h1 className="service-hero-title">{service.title}</h1>
          <p className="service-hero-subtitle">{service.subtitle}</p>
        </div>
      </div>

      <div className="container section-padding">
        <div className="service-layout">
          <div className="service-main-content">
            <h2 className="section-title">The Experience</h2>
            <p className="section-description">
              Our {service.title.toLowerCase()} service is designed to provide you with a seamless and luxurious experience. From the initial consultation to the final delivery of your handcrafted album, we ensure every detail is perfect. We focus on capturing genuine emotions, elegant compositions, and the unique atmosphere of your moments.
            </p>

            <h2 className="section-title" style={{ marginTop: '60px' }}>Package Inclusions</h2>
            <ul className="package-list">
              <li>Pre-session consultation and moodboarding</li>
              <li>Up to 8 hours of continuous coverage</li>
              <li>Two senior photographers</li>
              <li>High-resolution edited digital images</li>
              <li>Online private gallery for sharing</li>
              <li>Custom handcrafted heirloom album</li>
            </ul>

            <h2 className="section-title" style={{ marginTop: '60px' }}>Frequently Asked Questions</h2>
            <div className="faq-list">
              <div className="faq-item">
                <h4>How long does it take to get the photos?</h4>
                <p>We typically deliver the initial sneak peek within 48 hours, and the full gallery within 4-6 weeks.</p>
              </div>
              <div className="faq-item">
                <h4>Do you travel for shoots?</h4>
                <p>Yes, we are based in Ambikapur but available for travel worldwide.</p>
              </div>
            </div>
          </div>
          
          <div className="service-sidebar">
            <div className="booking-card">
              <h3>Book This Session</h3>
              <p>Secure your date and let us start planning your perfect shoot.</p>
              <div className="price-starting">
                <span>Starting at</span>
                <span className="price">₹45,000</span>
              </div>
              <Link to="/contact" className="btn-primary" style={{ width: '100%', textAlign: 'center' }}>Inquire Now</Link>
            </div>
          </div>
        </div>
      </div>
      
      {/* Portfolio Preview */}
      <div className="bg-off-white section-padding text-center">
        <div className="container">
          <h2 className="section-title">Featured Work</h2>
          <div className="portfolio-grid" style={{ marginTop: '40px' }}>
            <img src={service.cover} alt="Sample 1" style={{ height: '300px', objectFit: 'cover', width: '100%' }} />
            <img src="https://images.unsplash.com/photo-1511285560929-80b456fea0bc?auto=format&fit=crop&w=800&q=80" alt="Sample 2" style={{ height: '300px', objectFit: 'cover', width: '100%' }} />
            <img src="https://images.unsplash.com/photo-1492691527719-9d1e07e534b4?auto=format&fit=crop&w=800&q=80" alt="Sample 3" style={{ height: '300px', objectFit: 'cover', width: '100%' }} />
          </div>
          <Link to={`/portfolio/${service.id}`} className="btn-outline" style={{ marginTop: '40px' }}>View Full Gallery</Link>
        </div>
      </div>
    </div>
  );
};

const Services = () => {
  const location = useLocation();
  const isList = location.pathname === '/services' || location.pathname === '/services/';

  return (
    <Routes>
      <Route path="/" element={<ServiceList />} />
      {servicesData.map((srv) => (
        <Route key={srv.id} path={srv.id} element={<ServiceDetail service={srv} />} />
      ))}
    </Routes>
  );
};

export default Services;
