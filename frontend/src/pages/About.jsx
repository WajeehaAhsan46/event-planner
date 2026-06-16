import React from 'react';
import { motion } from 'framer-motion';
import '../styles/About.css';

// ✅ ALL IMAGES 
import aboutBg from '../assets/image/about-bg.jpg';
import storyImg from '../assets/image/story.jpg';
import team1 from '../assets/image/team1.jpg';
import team2 from '../assets/image/team2.jpg';
import team3 from '../assets/image/team3.jpg';

const About = () => {

  const fadeInUp = {
    hidden: { opacity: 0, y: 40 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } }
  };

  const stagger = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { staggerChildren: 0.2 } }
  };

  return (
    <div className="about-page">

      {/* HERO */}
      <section
        className="about-hero"
        style={{ backgroundImage: `url(${aboutBg})` }}
      >
        <div className="hero-overlay"></div>

        <motion.div
          className="hero-content"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
        >
          <h1>About Us</h1>
          <p>We create unforgettable event experiences</p>
        </motion.div>
      </section>

      {/* STORY */}
     <section className="section-padding">
  <div className="story-grid">

    {/* LEFT TEXT */}
    <motion.div 
      className="story-text"
      variants={fadeInUp} 
      initial="hidden" 
      whileInView="visible"
    >
      <h2 className="gold-title">Our Story</h2>
      <p> 
       Our journey is built on a refined vision of redefining event experiences through elegance, precision, and creativity. What began as a dedicated pursuit of excellence has evolved into a distinguished event planning brand known for delivering sophisticated and memorable celebrations.
      </p>
      <button className="btn-luxury">Learn More</button>
    </motion.div>

    {/* RIGHT IMAGE */}
    <motion.div 
      className="story-image"
      variants={fadeInUp} 
      initial="hidden" 
      whileInView="visible"
    >
      <img src={storyImg} alt="story" className="story-img" />
    </motion.div>

  </div>
</section>

      {/* TEAM */}
      <section className="section-padding dark-bg">
        <h2 className="gold-title center">Our Team</h2>

        <motion.div
          className="team-grid"
          variants={stagger}
          initial="hidden"
          whileInView="visible"
        >
          {[team1, team2, team3].map((img, i) => (
            <motion.div key={i} className="team-card" variants={fadeInUp}>
              <img src={img} alt="team" />
              <h4>Team Member</h4>
              <span>Designer</span>
            </motion.div>
          ))}
        </motion.div>
      </section>

    </div>
  );
};

export default About;