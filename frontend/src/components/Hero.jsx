import React from 'react';
import { motion } from 'framer-motion';
import '../styles/Hero.css';

const Hero = ({ title, subtitle, bgImage, primaryBtn, secondaryBtn }) => {
  return (
    <section 
      className="hero"
      style={{ backgroundImage: `url(${bgImage})` }}
    >
      <div className="hero-content">

        <motion.h4
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
        >
          {subtitle}
        </motion.h4>

        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4 }}
        >
          {title}
        </motion.h1>

        <motion.div
          className="hero-btns"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.6 }}
        >
          <button className="btn-primary">{primaryBtn}</button>
          <button className="btn-secondary">{secondaryBtn}</button>
        </motion.div>

      </div>
    </section>
  );
};

export default Hero;