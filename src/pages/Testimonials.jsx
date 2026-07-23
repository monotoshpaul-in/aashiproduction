import React from 'react';
import './Testimonials.css';

const testimonialsData = [
  {
    id: 1,
    name: 'Sarah & James',
    type: 'Wedding Photography',
    quote: "Working with Aashi Production was an absolute dream. They didn't just take pictures; they captured the soul of our wedding day. Every time we look at our album, we are transported back to those exact feelings of joy and love. The aesthetic is beyond elegant.",
    image: 'https://images.unsplash.com/photo-1519741497674-611481863552?auto=format&fit=crop&w=800&q=80'
  },
  {
    id: 2,
    name: 'Emily Chen',
    type: 'Fashion Editorial',
    quote: "The professionalism and artistic vision brought to my fashion campaign were unparalleled. The images were crisp, cinematic, and exactly what my brand needed to stand out in a crowded market.",
    image: 'https://images.unsplash.com/photo-1492691527719-9d1e07e534b4?auto=format&fit=crop&w=800&q=80'
  },
  {
    id: 3,
    name: 'David & Lisa',
    type: 'Maternity Session',
    quote: "I was nervous about maternity photos, but the team made me feel so comfortable and beautiful. The natural light and minimal approach resulted in photos that feel timeless and deeply emotional. I will cherish these forever.",
    image: 'https://images.unsplash.com/photo-1583939003579-730e3918a45a?auto=format&fit=crop&w=800&q=80'
  }
];

const Testimonials = () => {
  return (
    <div className="testimonials-page fade-in">
      <div className="section-padding container text-center" style={{ marginTop: '80px', paddingBottom: '40px' }}>
        <h1 className="page-header-title">Kind Words</h1>
        <p className="section-description centered">Experiences shared by those we've had the honor to photograph.</p>
      </div>

      <div className="testimonials-list container">
        {testimonialsData.map((testimonial, index) => (
          <div className={`testimonial-row ${index % 2 !== 0 ? 'reversed' : ''}`} key={testimonial.id}>
            <div className="testimonial-image">
              <img src={testimonial.image} alt={testimonial.name} />
            </div>
            <div className="testimonial-content">
              <div className="quote-mark">"</div>
              <p className="testimonial-quote">{testimonial.quote}</p>
              <h3 className="testimonial-name">{testimonial.name}</h3>
              <p className="testimonial-type text-gold">{testimonial.type}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Testimonials;
