import React, { useState, useEffect } from 'react';
import { NavLink, Routes, Route, Navigate, useLocation } from 'react-router-dom';
import { MasonryGrid } from '../components/Gallery/Gallery';
import './Portfolio.css';

// Dummy data for different categories
const categories = [
  { id: 'wedding', label: 'Wedding', cover: 'https://images.unsplash.com/photo-1519225421980-715cb0215aed?auto=format&fit=crop&w=1600&q=80' },
  { id: 'pre-wedding', label: 'Pre Wedding', cover: 'https://images.unsplash.com/photo-1583939003579-730e3918a45a?auto=format&fit=crop&w=1600&q=80' },
  { id: 'couple', label: 'Couple', cover: 'https://images.unsplash.com/photo-1511285560929-80b456fea0bc?auto=format&fit=crop&w=1600&q=80' },
  { id: 'maternity', label: 'Maternity', cover: 'https://images.unsplash.com/photo-1492691527719-9d1e07e534b4?auto=format&fit=crop&w=1600&q=80' },
  { id: 'baby-shoot', label: 'Baby Shoot', cover: 'https://images.unsplash.com/photo-1519741497674-611481863552?auto=format&fit=crop&w=1600&q=80' },
  { id: 'fashion', label: 'Fashion', cover: 'https://images.unsplash.com/photo-1492691527719-9d1e07e534b4?auto=format&fit=crop&w=1600&q=80' },
  { id: 'product', label: 'Product', cover: 'https://images.unsplash.com/photo-1511285560929-80b456fea0bc?auto=format&fit=crop&w=1600&q=80' },
  { id: 'events', label: 'Events', cover: 'https://images.unsplash.com/photo-1519225421980-715cb0215aed?auto=format&fit=crop&w=1600&q=80' },
];

const generateDummyImages = (categoryId) => {
  // Using different orientations to show off the masonry layout
  return [
    { src: `https://images.unsplash.com/photo-1519741497674-611481863552?auto=format&fit=crop&w=800&q=80`, alt: `${categoryId} 1` },
    { src: `https://images.unsplash.com/photo-1492691527719-9d1e07e534b4?auto=format&fit=crop&w=800&h=1200&q=80`, alt: `${categoryId} 2` },
    { src: `https://images.unsplash.com/photo-1511285560929-80b456fea0bc?auto=format&fit=crop&w=800&h=1000&q=80`, alt: `${categoryId} 3` },
    { src: `https://images.unsplash.com/photo-1583939003579-730e3918a45a?auto=format&fit=crop&w=800&q=80`, alt: `${categoryId} 4` },
    { src: `https://images.unsplash.com/photo-1519225421980-715cb0215aed?auto=format&fit=crop&w=800&h=1100&q=80`, alt: `${categoryId} 5` },
    { src: `https://images.unsplash.com/photo-1519741497674-611481863552?auto=format&fit=crop&w=800&q=80`, alt: `${categoryId} 6` },
    { src: `https://images.unsplash.com/photo-1511285560929-80b456fea0bc?auto=format&fit=crop&w=800&q=80`, alt: `${categoryId} 7` },
    { src: `https://images.unsplash.com/photo-1492691527719-9d1e07e534b4?auto=format&fit=crop&w=800&h=1000&q=80`, alt: `${categoryId} 8` },
  ];
};

const GalleryCategory = ({ category }) => {
  const images = generateDummyImages(category.id);
  
  return (
    <div className="gallery-category fade-in">
      <div className="gallery-cover">
        <img src={category.cover} alt={category.label} />
        <div className="gallery-cover-overlay">
          <h2>{category.label}</h2>
        </div>
      </div>
      <div className="container">
        <MasonryGrid images={images} />
      </div>
    </div>
  );
};

const Portfolio = () => {
  const location = useLocation();
  
  // Scroll to top on category change
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location]);

  return (
    <div className="portfolio-page">
      <div className="portfolio-nav-wrapper">
        <div className="container">
          <h1 className="page-header-title text-center">Portfolio</h1>
          <nav className="portfolio-nav">
            {categories.map((cat) => (
              <NavLink 
                key={cat.id} 
                to={`/portfolio/${cat.id}`}
                className={({ isActive }) => isActive ? 'active' : ''}
              >
                {cat.label}
              </NavLink>
            ))}
          </nav>
        </div>
      </div>

      <div className="portfolio-content">
        <Routes>
          <Route path="/" element={<Navigate to="/portfolio/wedding" replace />} />
          {categories.map((cat) => (
            <Route 
              key={cat.id} 
              path={cat.id} 
              element={<GalleryCategory category={cat} />} 
            />
          ))}
        </Routes>
      </div>
    </div>
  );
};

export default Portfolio;
