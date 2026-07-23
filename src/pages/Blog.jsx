import React from 'react';
import './Blog.css';

const blogPosts = [
  {
    id: 1,
    title: 'The Art of Black and White Photography in Modern Weddings',
    date: 'October 15, 2026',
    category: 'Editorial',
    image: 'https://images.unsplash.com/photo-1519741497674-611481863552?auto=format&fit=crop&w=1200&q=80',
    excerpt: 'Why we always include monochromatic edits in our final galleries and how they capture raw emotion differently than color.'
  },
  {
    id: 2,
    title: 'Choosing the Perfect Location for Your Pre-Wedding Shoot',
    date: 'September 28, 2026',
    category: 'Guide',
    image: 'https://images.unsplash.com/photo-1583939003579-730e3918a45a?auto=format&fit=crop&w=1200&q=80',
    excerpt: 'From urban architecture to secluded natural landscapes, exploring how your environment shapes the narrative of your love story.'
  },
  {
    id: 3,
    title: 'A Minimalist Approach to Fashion Editorial',
    date: 'August 12, 2026',
    category: 'Behind the Scenes',
    image: 'https://images.unsplash.com/photo-1492691527719-9d1e07e534b4?auto=format&fit=crop&w=1200&q=80',
    excerpt: 'Stripping away the excess to focus on form, light, and the subject. A look into our recent commercial campaign in Mumbai.'
  }
];

const Blog = () => {
  return (
    <div className="blog-page fade-in">
      <div className="section-padding container text-center" style={{ marginTop: '80px', paddingBottom: '40px' }}>
        <h1 className="page-header-title">Journal</h1>
        <p className="section-description centered">Thoughts, guides, and stories from behind the lens.</p>
      </div>

      <div className="container blog-list">
        {blogPosts.map((post) => (
          <article className="blog-post-card" key={post.id}>
            <div className="blog-post-image">
              <img src={post.image} alt={post.title} />
            </div>
            <div className="blog-post-content">
              <div className="blog-post-meta">
                <span className="blog-category text-gold">{post.category}</span>
                <span className="blog-date">{post.date}</span>
              </div>
              <h2 className="blog-title">{post.title}</h2>
              <p className="blog-excerpt">{post.excerpt}</p>
              <button className="link-arrow">Read Article &rarr;</button>
            </div>
          </article>
        ))}
      </div>
    </div>
  );
};

export default Blog;
