import React from 'react';
import { motion } from 'framer-motion';
import '../styles/Cards.css';

const EventCard = ({ image, title, category, description }) => {
  return (
    <motion.div 
      className="event-card"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true }}
    >
      <div className="event-img-container">
        <motion.img 
          src={image} 
          alt={title} 
          whileHover={{ scale: 1.1 }}
          transition={{ duration: 0.5 }}
        />
        <span className="category-tag">{category}</span>
      </div>
      <div className="event-info">
        <h3>{title}</h3>
        <p>{description}</p>
        <button className="text-link">View Details →</button>
      </div>
    </motion.div>
  );
};

export default EventCard;