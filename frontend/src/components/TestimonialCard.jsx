import React from 'react';
import { motion } from 'framer-motion';
import '../styles/Cards.css';

const TestimonialCard = ({ avatar, name, eventType, review, rating = 5 }) => {
  return (
    <motion.div 
      className="testimonial-card"
      whileHover={{ scale: 1.05 }}
    >
      <div className="stars">
        {[...Array(rating)].map((_, i) => (
          <span key={i} style={{ color: '#FEBF05' }}>★</span>
        ))}
      </div>
      <p className="review-text">"{review}"</p>
      <div className="client-info">
        <img src={avatar} alt={name} className="avatar" />
        <div>
          <h4>{name}</h4>
          <span>{eventType}</span>
        </div>
      </div>
    </motion.div>
  );
};

export default TestimonialCard;