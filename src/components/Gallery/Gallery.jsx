import React, { useState } from 'react';
import { X, ChevronLeft, ChevronRight } from 'lucide-react';
import './Gallery.css';

export const Lightbox = ({ images, currentIndex, isOpen, onClose, onNext, onPrev }) => {
  if (!isOpen) return null;

  return (
    <div className="lightbox-overlay fade-in">
      <button className="lightbox-close" onClick={onClose} aria-label="Close">
        <X size={32} />
      </button>
      
      <button className="lightbox-nav prev" onClick={onPrev} aria-label="Previous image">
        <ChevronLeft size={36} />
      </button>

      <div className="lightbox-content">
        <img 
          src={images[currentIndex].src} 
          alt={images[currentIndex].alt || "Gallery Image"} 
          className="lightbox-image fade-in"
          key={currentIndex} // forces re-render for animation on change
        />
      </div>

      <button className="lightbox-nav next" onClick={onNext} aria-label="Next image">
        <ChevronRight size={36} />
      </button>
    </div>
  );
};

export const MasonryGrid = ({ images }) => {
  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [currentIndex, setCurrentIndex] = useState(0);

  const openLightbox = (index) => {
    setCurrentIndex(index);
    setLightboxOpen(true);
    document.body.style.overflow = 'hidden'; // prevent scrolling
  };

  const closeLightbox = () => {
    setLightboxOpen(false);
    document.body.style.overflow = 'auto';
  };

  const nextImage = (e) => {
    e.stopPropagation();
    setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
  };

  const prevImage = (e) => {
    e.stopPropagation();
    setCurrentIndex((prevIndex) => (prevIndex - 1 + images.length) % images.length);
  };

  return (
    <>
      <div className="masonry-grid">
        {images.map((img, index) => (
          <div 
            key={index} 
            className="masonry-item fade-in" 
            style={{ animationDelay: `${(index % 5) * 0.1}s` }}
            onClick={() => openLightbox(index)}
          >
            <img src={img.src} alt={img.alt || `Portfolio ${index}`} loading="lazy" />
            <div className="masonry-overlay">
              <span>View</span>
            </div>
          </div>
        ))}
      </div>

      <Lightbox 
        images={images}
        currentIndex={currentIndex}
        isOpen={lightboxOpen}
        onClose={closeLightbox}
        onNext={nextImage}
        onPrev={prevImage}
      />
    </>
  );
};
