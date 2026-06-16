import React from 'react';
import { motion } from 'framer-motion';
import { useNavigate } from "react-router-dom";
import '../styles/Services.css';

// Assets
import weddingImg from '../assets/image/wedding.jpg';
import birthdayImg from '../assets/image/birthday.jpg';
import corporateImg from '../assets/image/corporate.jpg';
import engagementImg from '../assets/image/engagement.jpg';

const Services = () => {
  const navigate = useNavigate();

  const serviceList = [
    {
      title: "Wedding Planning",
      img: weddingImg,
      desc: "From venue selection to the final dance, we curate elegant weddings that tell your unique love story.",
      price: "25000"
    },
    {
      title: "Corporate Events",
      img: corporateImg,
      desc: "Sophisticated conferences, galas, and product launches designed to elevate your brand identity.",
      price: "20000"
    },
    {
      title: "Birthday Events",
      img: birthdayImg,
      desc: "Bespoke themed celebrations for all ages, ensuring a fun and stress-free experience.",
      price: "10000"
    },
    {
      title: "Engagement Parties",
      img: engagementImg,
      desc: "Intimate and romantic gatherings to celebrate your forever journey.",
      price: "15000"
    }
  ];

  return (
    <div className="services-page">

      {/* HERO */}
      <motion.section
        className="services-hero"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
      >
        <h1>Our Services</h1>
        <p>Expertly crafted events for life's most precious moments.</p>
      </motion.section>

      {/* SERVICES GRID */}
      <section className="section-container">
        <div className="services-grid">

          {serviceList.map((service, index) => (
            <motion.div
              key={index}
              className="service-card"
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              whileHover={{
                scale: 1.05,
                boxShadow: "0px 10px 30px rgba(254, 191, 5, 0.2)"
              }}
            >

              <div className="service-image">
                <img src={service.img} alt={service.title} />
              </div>

              <div className="service-content">
                <h3>{service.title}</h3>
                <p>{service.desc}</p>

                <span className="price-tag">
                  Starting from{" "}
                  <span style={{ color: "#FEBF05" }}>
                    Rs.{service.price}
                  </span>
                </span>

                <motion.button
                  className="btn-book"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  onClick={() =>
                    navigate("/booking", {
                      state: {
                        eventType: service.title,
                        price: service.price
                      }
                    })
                  }
                >
                  Book Now
                </motion.button>

              </div>
            </motion.div>
          ))}

        </div>
      </section>

      {/* WHY CHOOSE US */}
      <section className="section-container" style={{ paddingTop: 0 }}>
        <h2 style={{
          textAlign: "center",
          color: "#FEBF05",
          fontSize: "2.5rem"
        }}>
          Why Choose Us
        </h2>

        <div className="features-grid">

          {[
            { title: "Professional Planning", icon: "💎" },
            { title: "Creative Themes", icon: "🎨" },
            { title: "Budget Friendly", icon: "💰" },
            { title: "24/7 Support", icon: "📞" }
          ].map((feature, i) => (
            <motion.div
              key={i}
              className="feature-item"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.2 }}
              viewport={{ once: true }}
            >
              <div style={{ fontSize: "2rem" }}>
                {feature.icon}
              </div>
              <h4>{feature.title}</h4>
              <p style={{ color: "#aaa", fontSize: "0.85rem" }}>
                We deliver premium quality event execution.
              </p>
            </motion.div>
          ))}

        </div>
      </section>

      {/* CTA */}
      <section className="cta-section">
        <h2>Let’s Plan Something Amazing</h2>
        <p>Contact our team for custom event planning solutions.</p>

        <button className="btn-contact">
          Contact Us
        </button>
      </section>

    </div>
  );
};

export default Services;