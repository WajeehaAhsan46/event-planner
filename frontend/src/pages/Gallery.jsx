import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import '../styles/Gallery.css';

// Importing assets
import gallery1 from '../assets/image/gallery1.jpg';
import gallery2 from '../assets/image/gallery2.jpg';
import gallery3 from '../assets/image/gallery3.jpg';
import wedding from '../assets/image/wedding.jpg';
import birthday from '../assets/image/birthday.jpg';
import corporate from '../assets/image/corporate.jpg';

const Gallery = () => {
  const [filter, setFilter] = useState('All');
  const [selectedImg, setSelectedImg] = useState(null);

  const galleryData = [
    { id: 1, img: gallery1, category: 'Weddings', title: 'Grand Royal Wedding' },
    { id: 2, img: gallery2, category: 'Corporate Events', title: 'Tech Summit 2026' },
    { id: 3, img: gallery3, category: 'Birthdays', title: 'Neon Night Bash' },
    { id: 4, img: wedding, category: 'Weddings', title: 'Beachside Union' },
    { id: 5, img: birthday, category: 'Birthdays', title: 'Garden Tea Party' },
    { id: 6, img: corporate, category: 'Corporate Events', title: 'Annual Gala Dinner' },
  ];

  const filteredImages = filter === 'All' 
    ? galleryData 
    : galleryData.filter(item => item.category === filter);

  return (
    <div className="gallery-page">
      {/* 1. HERO SECTION */}
      <motion.section 
        className="gallery-hero"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        <h1>Our Gallery</h1>
        <p>Moments we created with love and perfection</p>
      </motion.section>

      {/* 2. FILTER BAR */}
      <div className="filter-bar">
        {['All', 'Weddings', 'Birthdays', 'Corporate Events'].map((cat) => (
          <motion.button
            key={cat}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className={`filter-btn ${filter === cat ? 'active' : ''}`}
            onClick={() => setFilter(cat)}
          >
            {cat}
          </motion.button>
        ))}
      </div>

      {/* 3. MAIN GALLERY GRID */}
      <section className="gallery-container">
        <motion.div layout className="gallery-grid">
          <AnimatePresence mode="popLayout">
            {filteredImages.map((item) => (
              <motion.div
                layout
                key={item.id}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.4 }}
                className="gallery-item"
                onClick={() => setSelectedImg(item.img)}
              >
                <img src={item.img} alt={item.title} />
                <div className="overlay">
                  <span>{item.category}</span>
                  <h3>{item.title}</h3>
                  <p style={{color: '#fff', fontSize: '0.8rem'}}>View Project</p>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>
      </section>

      {/* 4. LIGHTBOX PREVIEW */}
      <AnimatePresence>
        {selectedImg && (
          <motion.div 
            className="lightbox"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setSelectedImg(null)}
          >
            <button className="close-btn" onClick={() => setSelectedImg(null)}>&times;</button>
            <motion.img 
              src={selectedImg} 
              className="lightbox-img"
              initial={{ scale: 0.8 }}
              animate={{ scale: 1 }}
              exit={{ scale: 0.8 }}
            />
          </motion.div>
        )}
      </AnimatePresence>

      {/* 5. HIGHLIGHT SECTION (ARTISTIC LAYOUT) */}
      <section className="gallery-container">
        <h2 style={{ textAlign: 'center', marginBottom: '40px', fontFamily: 'Playfair Display' }}>Featured Masterpieces</h2>
        <div style={{ display: 'flex', gap: '20px', flexWrap: 'wrap' }}>
          <motion.div 
            style={{ flex: '2 1 600px', height: '450px', position: 'relative', borderRadius: '20px', overflow: 'hidden' }}
            whileHover={{ scale: 1.02 }}
          >
            <img src={gallery1} style={{ width: '100%', height: '100%', objectFit: 'cover' }} alt="Featured" />
            <div className="overlay" style={{ opacity: 1, background: 'linear-gradient(transparent, rgba(0,0,0,0.8))', justifyContent: 'flex-end', alignItems: 'flex-start' }}>
              <h2 style={{ color: 'var(--primary-gold)' }}>The Platinum Wedding Gala</h2>
              <p>Our most ambitious project of 2025</p>
            </div>
          </motion.div>
          <motion.div 
            style={{ flex: '1 1 300px', height: '450px', position: 'relative', borderRadius: '20px', overflow: 'hidden' }}
            whileHover={{ scale: 1.02 }}
          >
            <img src={corporate} style={{ width: '100%', height: '100%', objectFit: 'cover' }} alt="Featured" />
          </motion.div>
        </div>
      </section>

      {/* 6. CALL TO ACTION */}
      <section className="cta-banner">
        <div className="cta-glow"></div>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <h2 style={{ fontSize: '2.5rem' }}>Want Your Event Featured Here?</h2>
          <p style={{ color: 'var(--text-muted)', marginTop: '10px' }}>Let's create something breathtaking together.</p>
          <motion.button 
            className="btn-gold"
            whileHover={{ scale: 1.1, boxShadow: "0 0 20px var(--primary-gold)" }}
            whileTap={{ scale: 0.9 }}
          >
            Book Your Event
          </motion.button>
        </motion.div>
      </section>
    </div>
  );
};

export default Gallery;