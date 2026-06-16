import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import '../styles/Contact.css';

const Contact = () => {
  const [activeFaq, setActiveFaq] = useState(null);

  const fadeInUp = {
    initial: { opacity: 0, y: 30 },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: true },
    transition: { duration: 0.6 }
  };

  const faqData = [
    {
      q: "What services do you offer?",
      a: "We offer end-to-end event planning, including luxury weddings, corporate galas, high-end birthday parties, and bespoke social gatherings."
    },
    {
      q: "How early should I book?",
      a: "For weddings, we recommend 6-12 months in advance. For corporate and social events, 3-6 months is usually sufficient to ensure vendor availability."
    },
    {
      q: "Do you offer custom packages?",
      a: "Absolutely. Every event is unique. We tailor our services to fit your specific vision, guest count, and budgetary requirements."
    }
  ];

  const toggleFaq = (index) => {
    setActiveFaq(activeFaq === index ? null : index);
  };

  return (
    <div className="contact-page">
      {/* 1. HERO SECTION */}
      <motion.section 
        className="contact-hero"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
      >
        <h1>Contact Us</h1>
        <p>Let's start planning your unforgettable event</p>
      </motion.section>

      <div className="container">
        {/* 2. CONTACT INFO SECTION */}
        <div className="info-grid">
          {[
            { icon: "📞", title: "Phone", detail: "+92 300 1234567" },
            { icon: "✉️", title: "Email", detail: "info@eventplanner.com" },
            { icon: "📍", title: "Location", detail: "Sahiwal, Punjab, Pakistan" }
          ].map((item, i) => (
            <motion.div 
              key={i} 
              className="info-card"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.2 }}
              viewport={{ once: true }}
            >
              <div className="icon">{item.icon}</div>
              <h3>{item.title}</h3>
              <p style={{ color: 'var(--text-muted)', marginTop: '10px' }}>{item.detail}</p>
            </motion.div>
          ))}
        </div>

        {/* 3. MAIN FORM SECTION */}
        <div className="form-section">
          <motion.div className="contact-form" {...fadeInUp}>
            <h2 style={{ marginBottom: '30px', color: 'var(--gold)' }}>Send Us a Message</h2>
            <form onSubmit={(e) => e.preventDefault()}>
              <div className="form-group">
                <label>Full Name</label>
                <input type="text" placeholder="Enter your name" />
              </div>
              <div style={{ display: 'flex', gap: '20px' }}>
                <div className="form-group" style={{ flex: 1 }}>
                  <label>Email Address</label>
                  <input type="email" placeholder="email@example.com" />
                </div>
                <div className="form-group" style={{ flex: 1 }}>
                  <label>Phone Number</label>
                  <input type="tel" placeholder="+92 300 0000000" />
                </div>
              </div>
              <div className="form-group">
                <label>Event Type</label>
                <select>
                  <option>Wedding</option>
                  <option>Corporate Event</option>
                  <option>Birthday Party</option>
                  <option>Engagement</option>
                </select>
              </div>
              <div className="form-group">
                <label>Message</label>
                <textarea rows="5" placeholder="Tell us about your dream event..."></textarea>
              </div>
              <motion.button 
                className="btn-send"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                Send Message
              </motion.button>
            </form>
          </motion.div>

          <motion.div className="form-sidebar" {...fadeInUp} transition={{ delay: 0.3 }}>
            <h2 style={{ marginBottom: '20px' }}>Frequently Asked Questions</h2>
            <div className="faq-container">
              {faqData.map((item, i) => (
                <div key={i} className="faq-item">
                  <button className="faq-question" onClick={() => toggleFaq(i)}>
                    {item.q}
                    <span>{activeFaq === i ? "−" : "+"}</span>
                  </button>
                  <AnimatePresence>
                    {activeFaq === i && (
                      <motion.div 
                        className="faq-answer"
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                      >
                        <p>{item.a}</p>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              ))}
            </div>
          </motion.div>
        </div>

        {/* 4. MAP SECTION */}
        <motion.div className="map-container" {...fadeInUp}>
          <iframe 
            title="Sahiwal Map"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d109405.02980650961!2d73.01391215!3d30.66512395!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3922b6e40467eead%3A0x103ef0674996962b!2sSahiwal%2C%20Sahiwal%20District%2C%20Punjab%2C%20Pakistan!5e0!3m2!1sen!2s!4v1714200000000!5m2!1sen!2s" 
            width="100%" 
            height="100%" 
            style={{ border: 0 }} 
            allowFullScreen="" 
            loading="lazy"
          ></iframe>
        </motion.div>
      </div>

      {/* 5. CALL TO ACTION */}
      <section className="cta-banner">
        <motion.div {...fadeInUp}>
          <h2 style={{ fontSize: '2.5rem', marginBottom: '20px' }}>Ready to Plan Your Dream Event?</h2>
          <motion.button 
            className="btn-send" 
            style={{ width: 'auto', padding: '15px 50px' }}
            whileHover={{ scale: 1.1, boxShadow: "0 0 20px var(--gold-glow)" }}
          >
            Book Now
          </motion.button>
        </motion.div>
      </section>
    </div>
  );
};

export default Contact;