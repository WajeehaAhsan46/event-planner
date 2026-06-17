import React from 'react';
import { motion } from 'framer-motion';
import '../styles/Events.css';

// Importing assets
import event1 from '../assets/image/event1.jpg';
import event2 from '../assets/image/event2.jpg';
import wedding from '../assets/image/wedding.jpg';
import birthday from '../assets/image/birthday.jpg';
import corporate from '../assets/image/corporate.jpg';

const Events = () => {
  const fadeInUp = {
    initial: { opacity: 0, y: 50 },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: true },
    transition: { duration: 0.6 }
  };

  const stats = [
    { label: "Events Completed", value: "250+" },
    { label: "Happy Clients", value: "500+" },
    { label: "Team Members", value: "20+" },
    { label: "Years Experience", value: "10+" }
  ];

  return (
    <div className="events-page">
      {/* 1. HERO SECTION */}
      <motion.section 
        className="events-hero"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
      >
        <h1>Our Events</h1>
        <p>Discover the unforgettable moments we've created</p>
      </motion.section>

      {/* 2. FEATURED EVENTS */}
      <section className="section-padding">
        <motion.h2 className="gold-title" style={{textAlign: 'center', marginBottom: '60px', fontSize: '2.5rem'}} {...fadeInUp}>
          Featured Showcases
        </motion.h2>

        <motion.div className="featured-event-card" {...fadeInUp}>
          <div className="featured-img">
            <img src={event1} alt="Luxury Wedding" />
          </div>
          <div className="featured-content">
            <span className="category-tag">Wedding</span>
            <h2>Luxury Wedding Night</h2>
            <p style={{color: 'var(--text-muted)', marginBottom: '25px'}}>
              An opulent evening at the Grand Palace, featuring hand-crafted floral arrangements and cinematic lighting design.
            </p>
            <button className="btn-gold">View Details</button>
          </div>
        </motion.div>

        <motion.div className="featured-event-card reverse" {...fadeInUp}>
          <div className="featured-img">
            <img src={event2} alt="Corporate Event" />
          </div>
          <div className="featured-content">
            <span className="category-tag">Corporate</span>
            <h2>Global Tech Summit</h2>
            <p style={{color: 'var(--text-muted)', marginBottom: '25px'}}>
              A high-stakes networking event for 1000+ attendees, integrated with cutting-edge AV technology and seamless logistics.
            </p>
            <button className="btn-gold">View Details</button>
          </div>
        </motion.div>
      </section>

      {/* 3. ALL EVENTS GRID */}
      <section className="section-padding" style={{background: '#0f1414'}}>
        <motion.h2 style={{marginBottom: '50px', textAlign: 'center'}} {...fadeInUp}>More Unforgettable Moments</motion.h2>
        <div className="event-grid">
          {[
            { title: "Midnight Gala", cat: "Corporate", img: corporate },
            { title: "Boho Chic Union", cat: "Wedding", img: wedding },
            { title: "Royal 1st Birthday", cat: "Birthday", img: birthday },
            { title: "Educational Event", cat:"Education", img:corporate}
          ].map((item, index) => (
            <motion.div 
              key={index} 
              className="small-card"
              {...fadeInUp}
              transition={{ delay: index * 0.2 }}
              whileHover={{ y: -10 }}
            >
              <img src={item.img} alt={item.title} />
              <div className="card-body">
                <span className="category-tag">{item.cat}</span>
                <h3>{item.title}</h3>
                <p style={{color: 'var(--text-muted)', fontSize: '0.9rem', margin: '10px 0'}}>
                  Tailored design and coordination for an exclusive experience.
                </p>
                <button className="btn-gold" style={{padding: '8px 20px', fontSize: '0.8rem'}}>Read More</button>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* 4. EVENT TIMELINE */}
      <section className="section-padding">
        <motion.h2 style={{textAlign: 'center', marginBottom: '80px'}} {...fadeInUp}>How We Bring It To Life</motion.h2>
        <div className="timeline-container">
          <div className="timeline-line"></div>
          {[
            { step: "01", title: "Planning Phase", desc: "Strategy and mood boards." },
            { step: "02", title: "Decoration Setup", desc: "The transformation begins." },
            { step: "03", title: "Event Execution", desc: "On-site management." },
            { step: "04", title: "Celebration", desc: "Enjoying the success." }
          ].map((step, i) => (
            <motion.div 
              key={i} 
              className="timeline-step"
              initial={{ opacity: 0, scale: 0.5 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ delay: i * 0.2 }}
              viewport={{ once: true }}
            >
              <div className="circle">{step.step}</div>
              <h4>{step.title}</h4>
              <p style={{fontSize: '0.8rem', color: 'var(--text-muted)', padding: '0 15px'}}>{step.desc}</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* 5. STATISTICS */}
      <section className="section-padding">
        <div className="stats-bar">
          {stats.map((stat, i) => (
            <motion.div 
              key={i} 
              className="stat-item"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ delay: i * 0.2 }}
            >
              <motion.h3 
                initial={{ scale: 0.5 }} 
                whileInView={{ scale: 1 }}
              >
                {stat.value}
              </motion.h3>
              <p style={{textTransform: 'uppercase', fontSize: '0.8rem', letterSpacing: '1px'}}>{stat.label}</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* 6. CALL TO ACTION */}
      <section className="section-padding" style={{textAlign: 'center'}}>
        <motion.div 
          className="cta-card"
          style={{
            background: 'linear-gradient(45deg, #1c2424, #0f1414)',
            padding: '80px 20px',
            borderRadius: '30px',
            border: '1px solid var(--gold)',
            position: 'relative',
            overflow: 'hidden'
          }}
          whileHover={{ boxShadow: "0 0 30px var(--gold-glow)" }}
        >
          <h2 style={{fontSize: '3rem', marginBottom: '20px'}}>Let's Create Your Next Big Event</h2>
          <motion.button 
            className="btn-gold" 
            style={{padding: '18px 50px', fontSize: '1.2rem'}}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
          >
            Book Now
          </motion.button>
          
          {/* Animated background glow */}
          <motion.div 
            style={{
              position: 'absolute',
              top: '-50%',
              left: '-50%',
              width: '200%',
              height: '200%',
              background: 'radial-gradient(circle, var(--gold-glow) 0%, transparent 70%)',
              zIndex: 0,
              pointerEvents: 'none'
            }}
            animate={{ 
              opacity: [0.1, 0.3, 0.1],
              scale: [1, 1.1, 1]
            }}
            transition={{ duration: 5, repeat: Infinity }}
          />
        </motion.div>
      </section>
    </div>
  );
};

export default Events;