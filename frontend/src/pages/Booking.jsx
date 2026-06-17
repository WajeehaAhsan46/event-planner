const API = import.meta.env.VITE_API_URL || "http://localhost:5000";

import React, { useState, useEffect } from "react";
import axios from "axios";
import { motion } from "framer-motion";
import { useLocation } from "react-router-dom";
import "../styles/Booking.css";

const Booking = () => {
  const location = useLocation();
  const prefilled = location.state || {};

  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    phone: "",
    eventType: prefilled.eventType || "",
    eventDate: "",
    guests: "",
    venue: "",
    budget: prefilled.price || "",
    message: "",
  });

  const [errors, setErrors] = useState({});
  const [bookings, setBookings] = useState([]);
  const [editingId, setEditingId] = useState(null);

  // ================= FETCH =================
  useEffect(() => {
    const loadBookings = async () => {
      try {
        const res = await axios.get(`${API}/api/bookings`);
        setBookings(res.data);
      } catch (error) {
        console.log("GET ERROR:", error.message);
      }
    };

    loadBookings();
  }, []);

  // ================= HANDLE CHANGE =================
  const handleChange = (e) => {
    const { name, value } = e.target;

    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));

    setErrors((prev) => ({
      ...prev,
      [name]: "",
    }));
  };

  // ================= VALIDATION =================
  const validateForm = () => {
    let newErrors = {};

    if (!formData.fullName.trim()) newErrors.fullName = "Full Name is required";
    if (!formData.email.trim()) newErrors.email = "Email is required";
    else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email))
      newErrors.email = "Invalid email format";

    if (!formData.phone.trim()) newErrors.phone = "Phone is required";
    else if (!/^03\d{9}$/.test(formData.phone))
      newErrors.phone = "Use format 03XXXXXXXXX";

    if (!formData.eventType) newErrors.eventType = "Select event type";
    if (!formData.eventDate) newErrors.eventDate = "Select date";
    if (!formData.guests) newErrors.guests = "Enter guests";
    if (!formData.venue.trim()) newErrors.venue = "Enter venue";
    if (!formData.budget) newErrors.budget = "Select budget";
    if (!formData.message.trim()) newErrors.message = "Add message";

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  // ================= SUBMIT (FIXED) =================
  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!validateForm()) return;

    try {
      let res;

      // SAFE CLEAN DATA (IMPORTANT FIX)
      const cleanData = {
        fullName: formData.fullName?.trim(),
        email: formData.email?.trim(),
        phone: formData.phone?.trim(),
        eventType: formData.eventType,
        eventDate: formData.eventDate,
        guests: String(formData.guests),
        venue: formData.venue?.trim(),
        budget: formData.budget,
        message: formData.message?.trim(),
      };

      if (editingId) {
        res = await axios.put(`${API}/api/bookings/${editingId}`, cleanData);

        setBookings((prev) =>
          prev.map((b) => (b._id === editingId ? res.data : b))
        );

        setEditingId(null);
      } else {
        res = await axios.post(`${API}/api/bookings`, cleanData);

        setBookings((prev) => [...prev, res.data]);
      }

      setFormData({
        fullName: "",
        email: "",
        phone: "",
        eventType: "",
        eventDate: "",
        guests: "",
        venue: "",
        budget: "",
        message: "",
      });

      alert("Booking Saved Successfully!");
    } catch (error) {
      console.log("FULL ERROR:", error);
      console.log("RESPONSE:", error.response?.data);
      alert("Request failed — check backend / console");
    }
  };

  // ================= EDIT (FIXED) =================
  const handleEdit = (b) => {
    setFormData({
      fullName: b.fullName || "",
      email: b.email || "",
      phone: b.phone || "",
      eventType: b.eventType || "",
      eventDate: b.eventDate || "",
      guests: b.guests || "",
      venue: b.venue || "",
      budget: b.budget || "",
      message: b.message || "",
    });

    setEditingId(b._id);
  };

  // ================= DELETE =================
  const handleDelete = async (id) => {
    try {
      await axios.delete(`${API}/api/bookings/${id}`);
      setBookings((prev) => prev.filter((b) => b._id !== id));
    } catch (error) {
      console.log("DELETE ERROR:", error.message);
    }
  };

  return (
    <div className="booking-page">

      <motion.div className="booking-container">
        <h1>
          Book Your <span>{formData.eventType || "Event"}</span>
        </h1>

        <form onSubmit={handleSubmit}>

          <div className="form-grid">

            <div className="form-group">
              <label>Full Name</label>
              <input name="fullName" value={formData.fullName} onChange={handleChange} />
              <span className="error">{errors.fullName}</span>
            </div>

            <div className="form-group">
              <label>Email</label>
              <input name="email" value={formData.email} onChange={handleChange} />
              <span className="error">{errors.email}</span>
            </div>

            <div className="form-group">
              <label>Phone</label>
              <input name="phone" value={formData.phone} onChange={handleChange} />
              <span className="error">{errors.phone}</span>
            </div>

            <div className="form-group">
              <label>Event Type</label>
              <select name="eventType" value={formData.eventType} onChange={handleChange}>
                <option value="">Select Event Type</option>
                <option>Wedding Planning</option>
                <option>Corporate Events</option>
                <option>Birthday Events</option>
                <option>Engagement Parties</option>
              </select>
              <span className="error">{errors.eventType}</span>
            </div>

            <div className="form-group">
              <label>Date</label>
              <input type="date" name="eventDate" value={formData.eventDate} onChange={handleChange} />
              <span className="error">{errors.eventDate}</span>
            </div>

            <div className="form-group">
              <label>Guests</label>
              <input name="guests" value={formData.guests} onChange={handleChange} />
              <span className="error">{errors.guests}</span>
            </div>

            <div className="form-group">
              <label>Venue</label>
              <input name="venue" value={formData.venue} onChange={handleChange} />
              <span className="error">{errors.venue}</span>
            </div>

            <div className="form-group">
              <label>Budget</label>
              <input name="budget" value={formData.budget} onChange={handleChange} />
              <span className="error">{errors.budget}</span>
            </div>

          </div>

          <div className="form-group">
            <label>Message</label>
            <textarea name="message" value={formData.message} onChange={handleChange} />
            <span className="error">{errors.message}</span>
          </div>

          <button className="submit-btn" type="submit">
            {editingId ? "Update Booking" : "Submit Booking"}
          </button>

        </form>
      </motion.div>

      <div className="table-container">

        <h2>My Bookings</h2>

        <table>
          <thead>
            <tr>
              <th>Name</th>
              <th>Event</th>
              <th>Date</th>
              <th>Guests</th>
              <th>Venue</th>
              <th>Actions</th>
            </tr>
          </thead>

          <tbody>
            {bookings.map((b) => (
              <tr key={b._id}>
                <td>{b.fullName}</td>
                <td>{b.eventType}</td>
                <td>{b.eventDate}</td>
                <td>{b.guests}</td>
                <td>{b.venue}</td>
                <td>
                  <button className="edit-btn" onClick={() => handleEdit(b)}>Edit</button>
                  <button className="delete-btn" onClick={() => handleDelete(b._id)}>Cancel</button>
                </td>
              </tr>
            ))}
          </tbody>

        </table>

      </div>

    </div>
  );
};

export default Booking;
