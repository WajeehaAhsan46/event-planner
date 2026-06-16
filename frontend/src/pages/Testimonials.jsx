import React from 'react';
import { motion } from 'framer-motion';
import '../styles/Testimonials.css';

// Assets (Replace with your actual paths)
import client1 from '../assets/image/client1.jpg';
import client2 from '../assets/image/client2.jpg';
import client3 from '../assets/image/client3.jpg';
import client4 from '../assets/image/client4.jpg';

const Testimonials = () => {
  const fadeInUp = {
    initial: { opacity: 0, y: 40 },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: true },
    transition: { duration: 0.7 }
  };

  const reviews = [
    {
      name: "James Wilson",
      event: "Luxury Wedding",
      text: "The attention to detail was beyond my expectations. Our wedding felt like a fairytale thanks to the incredible team!",
      img: client1,
      stars: 5
    },
    {
      name: "Sophia Martinez",
      event: "Corporate Gala",
      text: "Professional, punctual, and highly creative. They transformed our annual summit into a sophisticated masterpiece.",
      img: client2,
      stars: 5
    },
    {
      name: "Emily Chen",
      event: "1st Birthday Bash",
      text: "They managed to make a children's party look elegant yet fun. Stress-free planning at its finest!",
      img: client3,
      stars: 5
    }
  ];

  const stats = [
    { label: "Happy Clients", value: "500+" },
    { label: "Events Done", value: "250+" },
    { label: "Success Rate", value: "98%" },
    { label: "Exp. Years", value: "10+" }
  ];

  return (
    <div className="testimonials-page">
      {/* 1. HERO SECTION */}
      <motion.section 
        className="test-hero"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
      >
        <h1>What Our Clients Say</h1>
        <p>Real experiences from unforgettable events we created</p>
      </motion.section>

      <div className="container">
        {/* 2. STATS SECTION */}
        <div className="stats-grid">
          {stats.map((stat, i) => (
            <motion.div 
              key={i} 
              className="stat-card"
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ delay: i * 0.1 }}
              viewport={{ once: true }}
            >
              <h2>{stat.value}</h2>
              <p style={{color: 'var(--text-muted)', fontSize: '0.9rem'}}>{stat.label}</p>
            </motion.div>
          ))}
        </div>

        {/* 3. TESTIMONIAL CARDS */}
        <div className="testimonial-grid">
          {reviews.map((rev, i) => (
            <motion.div 
              key={i} 
              className="glass-card"
              whileHover={{ y: -10, scale: 1.02 }}
              {...fadeInUp}
              transition={{ delay: i * 0.2 }}
            >
              <img src={rev.img} alt={rev.name} className="client-avatar" />
              <span className="event-tag">{rev.event}</span>
              <div className="stars">
                {"★".repeat(rev.stars)}
              </div>
              <p style={{fontStyle: 'italic', lineHeight: '1.6'}}>"{rev.text}"</p>
              <h4 style={{marginTop: '20px', color: 'var(--gold)'}}>{rev.name}</h4>
            </motion.div>
          ))}
        </div>

        {/* 4. FEATURED REVIEW */}
        <motion.div className="featured-review" {...fadeInUp}>
          <img src={client4} alt="Featured Client" className="featured-img" />
          <div className="featured-content">
            <div className="quote-icon">“</div>
            <h2 style={{color: 'var(--gold)', marginBottom: '15px'}}>A Masterclass in Event Planning</h2>
            <p style={{fontSize: '1.2rem', lineHeight: '1.8', color: '#ccc'}}>
              "Working with this team for our 25th-anniversary gala was the best decision we made. 
              They didn't just plan an event; they curated an atmosphere. Every guest was mesmerized 
              by the decor and the seamless execution."
            </p>
            <h4 style={{marginTop: '25px'}}>- Robert & Sarah Jenkins</h4>
            <p style={{fontSize: '0.8rem', color: 'var(--gold)'}}>Platinum Anniversary Event</p>
          </div>
        </motion.div>

        {/* 5. VIDEO TESTIMONIAL SECTION */}
        <motion.div style={{textAlign: 'center', marginBottom: '80px'}} {...fadeInUp}>
          <h2 style={{marginBottom: '30px'}}>Watch Their Stories</h2>
          <motion.div 
            className="video-placeholder"
            whileHover={{ scale: 1.02 }}
            style={{background: `linear-gradient(rgba(0,0,0,0.6), rgba(0,0,0,0.6)), url(${client1}) center/cover`}}
          >
            <motion.div 
              className="play-btn"
              whileHover={{ scale: 1.2 }}
            >
              ▶
            </motion.div>
          </motion.div>
          <p style={{marginTop: '20px', color: 'var(--text-muted)'}}>See the emotions and scale of our past projects.</p>
        </motion.div>
      </div>

      {/* 6. CALL TO ACTION */}
      <section className="cta-banner">
        <motion.div {...fadeInUp}>
          <h2 style={{fontSize: '2.8rem'}}>Let’s Create Your Dream Event Together</h2>
          <motion.button 
            className="btn-gold"
            whileHover={{ scale: 1.1, boxShadow: "0 0 25px var(--gold-glow)" }}
            whileTap={{ scale: 0.9 }}
          >
            Book Now
          </motion.button>
        </motion.div>
        
        {/* Animated Glow Background */}
        <motion.div 
          animate={{ opacity: [0.1, 0.3, 0.1], scale: [1, 1.2, 1] }}
          transition={{ duration: 5, repeat: Infinity }}
          style={{
            position: 'absolute',
            top: '50%',
            left: '50%',
            transform: 'translate(-50%, -50%)',
            width: '600px',
            height: '300px',
            background: 'var(--gold)',
            filter: 'blur(120px)',
            zIndex: -1
          }}
        />
      </section>
    </div>
  );
};

export default Testimonials;