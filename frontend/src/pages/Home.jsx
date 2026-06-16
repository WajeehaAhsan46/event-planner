import React from 'react';
import { motion } from 'framer-motion';
import '../styles/App.css';
import { Link } from "react-router-dom";
import heroImg from '../assets/image/hero.jpg';
// Assets
import weddingImg from '../assets/image/wedding.jpg';
import birthdayImg from '../assets/image/birthday.jpg';
import corporateImg from '../assets/image/corporate.jpg';
import event1 from '../assets/image/event1.jpg';
import event2 from '../assets/image/event2.jpg';

const Home = () => {
  const fadeInUp = {
    initial: { opacity: 0, y: 30 },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: true },
    transition: { duration: 0.6 }
  };

  return (
    <div className="home-page">

      {/* HERO SECTION */}
      <header
  className="hero"
  id="home"
  style={{ backgroundImage: `url(${heroImg})` }}
>
  <div className="hero-overlay"></div>

  <motion.div
    className="hero-content container"
    initial={{ opacity: 0, scale: 0.9 }}
    animate={{ opacity: 1, scale: 1 }}
    transition={{ duration: 0.8 }}
  >
    <h1>
      Make Your Event <span style={{ color: '#FEBF05' }}>Unforgettable</span>
    </h1>

    <p>
      Bespoke luxury event planning for those who demand excellence.
    </p>

    <div className="hero-btns">
      <motion.button whileHover={{ scale: 1.05 }}> 
       <Link to="/booking" className="btn-primary">
  Book Now
</Link>
      </motion.button>

      <motion.button whileHover={{ scale: 1.05 }}>
        <Link to="/Services" className="btn-secondary">
      Explore Services
    </Link>
      </motion.button>
    </div>
  </motion.div>
</header>
      {/* ABOUT SECTION */}
      <section className="about container" id="about">
        <div className="events-grid">

          <motion.div {...fadeInUp} className="about-text">
            <h2 className="section-title">
              Who <span>We Are</span>
            </h2>

            <p style={{ color: '#a0a0a0', lineHeight: '1.8' }}>
              We transform your vision into reality with luxury event planning.We are a passionate and creative event planning team dedicated to turning your ideas into unforgettable experiences. With a strong focus on detail, innovation, and client satisfaction, we specialize in organizing a wide range of events, including weddings, corporate functions, and private celebrations.
            </p>

            <button className="btn-secondary">Learn More</button>
          </motion.div>

          <motion.div
            whileInView={{ opacity: 1, x: 0 }}
            initial={{ opacity: 0, x: 50 }}
            className="event-item"
          >
            <img src={event1} alt="About" />
          </motion.div>

        </div>
      </section>

      {/* SERVICES */}
      <section className="services container" id="services">
        <h2 className="section-title">
          Our <span>Services</span>
        </h2>

        <div className="services-grid">

          {[
            { title: "Wedding Planning", img: weddingImg, desc: "Luxury weddings." },
            { title: "Corporate Events", img: corporateImg, desc: "Professional events." },
            { title: "Birthday Events", img: birthdayImg, desc: "Memorable celebrations." }
          ].map((service, index) => (
            <motion.div
              key={index}
              className="glass-card service-card"
              whileHover={{ y: -10 }}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
            >
              <img src={service.img} alt={service.title} />
              <h3>{service.title}</h3>
              <p style={{ color: '#a0a0a0' }}>{service.desc}</p>
              <Link to="/booking" className="btn-primary">
  Book Now
</Link>
            </motion.div>
          ))}

        </div>
      </section>

      {/* GALLERY */}
      <section className="featured container" id="gallery">
        <h2 className="section-title">
          Latest <span>Events</span>
        </h2>

        <div className="events-grid">

          <motion.div className="event-item" whileHover={{ scale: 1.02 }}>
            <img src={event1} alt="event" />
          </motion.div>

          <motion.div className="event-item" whileHover={{ scale: 1.02 }}>
            <img src={event2} alt="event" />
          </motion.div>

        </div>
      </section>

      {/* CTA */}
      <section className="cta">
        <motion.div
          className="container"
          style={{ textAlign: 'center' }}
          whileInView={{ scale: [0.9, 1], opacity: [0, 1] }}
        >
          <h2>Ready to Plan Your Event?</h2>
          <Link to="/booking" className="btn-primary">
  Get Started
</Link>
        </motion.div>
      </section>

      {/* FOOTER */}
      <footer>
        <div className="container">
          <div className="logo">Event Planner</div>
          <p style={{ color: '#a0a0a0' }}>
            Luxury Planning. Timeless Memories.
          </p>
        </div>
      </footer>

    </div>
  );
};

export default Home;