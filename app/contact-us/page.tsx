"use client";

import Footer from "../components/Footer";
import "./contact-us.css";
import { Mail, Phone, MapPin, Send, ArrowRight } from "lucide-react";
import { motion } from "framer-motion";
import { useState } from "react";

export default function ContactUsPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // For now we just show a success state – integrate with an API later.
    setSubmitted(true);
  };

  const contactInfo = [
    {
      icon: <MapPin size={28} className="icon" />, 
      title: "Our Office",
      details: "Titanium Business Park, D‑Block, 9th floor, Near Railway Under Bridge, Makarba, Ahmedabad, Gujarat 380051",
    },
    {
      icon: <Phone size={28} className="icon" />, 
      title: "Phone",
      details: "+91 95377 88817",
    },
    {
      icon: <Mail size={28} className="icon" />, 
      title: "Email",
      details: "info@wafflecastle.in",
    },
  ];

  // A simple image carousel data – you can replace with real images later.
  const carouselImages = [
    "/images/contact-1.jpg",
    "/images/contact-2.jpg",
    "/images/contact-3.jpg",
  ];

  return (
    <main className="contact-page">
      <div className="contact-container">
        {/* Hero Section */}
        <section className="contact-hero">
          <h1>Get In Touch With The Kingdom</h1>
          <p>
            Have a question, an order, or want to partner with us? Reach out – our team is ready to serve you with royal hospitality.
          </p>
        </section>

        {/* Image Slider – simple horizontal scroll with subtle motion */}
        <motion.div
          className="carousel"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.9, ease: "easeOut" }}
          style={{ display: "flex", overflowX: "auto", gap: "20px", padding: "20px 0" }}
        >
          {carouselImages.map((src, i) => (
            <motion.img
              key={i}
              src={src}
              alt={`Contact showcase ${i + 1}`}
              whileHover={{ scale: 1.03 }}
              style={{ width: "300px", height: "200px", objectFit: "cover", borderRadius: "16px" }}
            />
          ))}
        </motion.div>

        {/* Info Grid */}
        <section className="info-grid">
          {contactInfo.map((item, idx) => (
            <div className="info-card" key={idx}>
              {item.icon}
              <h3>{item.title}</h3>
              <p>{item.details}</p>
            </div>
          ))}
        </section>

        {/* Contact Form */}
        <section className="contact-form">
          {submitted ? (
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ duration: 0.5 }}
              style={{ textAlign: "center", padding: "40px 0" }}
            >
              <Send size={60} color="#f6a52a" style={{ marginBottom: "20px" }} />
              <h3 style={{ color: "#fff", marginBottom: "15px" }}>Message Sent!</h3>
              <p style={{ color: "rgba(255,248,205,0.8)" }}>
                Thanks for reaching out. Our royal team will get back to you within 24 hours.
              </p>
            </motion.div>
          ) : (
            <form onSubmit={handleSubmit}>
              <div className="form-group">
                <label>Full Name</label>
                <input
                  type="text"
                  className="form-control"
                  placeholder="Your name"
                  required
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                />
              </div>
              <div className="form-group">
                <label>Email</label>
                <input
                  type="email"
                  className="form-control"
                  placeholder="you@example.com"
                  required
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                />
              </div>
              <div className="form-group">
                <label>Phone</label>
                <input
                  type="tel"
                  className="form-control"
                  placeholder="+91 12345 67890"
                  required
                  value={formData.phone}
                  onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                />
              </div>
              <div className="form-group">
                <label>Message</label>
                <textarea
                  className="form-control"
                  placeholder="Tell us how we can help…"
                  rows={4}
                  required
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                ></textarea>
              </div>
              <button type="submit" className="submit-btn">
                Send Message <ArrowRight size={20} />
              </button>
            </form>
          )}
        </section>
      </div>
      <Footer />
    </main>
  );
}
