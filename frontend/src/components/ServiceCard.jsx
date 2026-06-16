import React from 'react';
import { motion } from 'framer-motion';
import '../styles/Cards.css';

const ServiceCard = ({ image, title, description, price }) => {
  return (
    <motion.div 
      className="service-card"
      whileHover={{ y: -10, scale: 1.02 }}
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
    >
      <div className="card-img">
        <img src={image} alt={title} />
      </div>
      <div className="card-content">
        <h3>{title}</h3>
        <p>{description}</p>
        {price && <span className="price-label">Starting from {price}</span>}
        <button className="card-btn">Book Now</button>
      </div>
    </motion.div>
  );
};

export default ServiceCard;