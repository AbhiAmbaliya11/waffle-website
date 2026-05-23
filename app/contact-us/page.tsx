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
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setError(null);
    try {
      const res = await fetch("/api/send-email", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ formType: "contact", ...formData }),
      });
      const data = await res.json();
      if (!res.ok) throw new Error(data.error ?? "Something went wrong");
      setSubmitted(true);
      setFormData({ name: "", email: "", phone: "", message: "" });
    } catch (err: unknown) {
      setError(err instanceof Error ? err.message : "Failed to send. Please try again.");
    } finally {
      setIsSubmitting(false);
    }
  };
const contactInfo = [
  {
    icon: <MapPin size={28} className="icon" />,
    title: "Our Office",
    details:
      "Titanium Business Park, D-Block, 9th floor, Near Railway Under Bridge, Makarba, Ahmedabad, Gujarat 380051",
  },
  {
    icon: <Phone size={28} className="icon" />,
    title: "Phone",
    details: (
      <a href="tel:+919537788817" className="contact-link">
        +91 95377 88817
      </a>
    ),
  },
  {
    icon: <Mail size={28} className="icon" />,
    title: "Email",
    details: (
      <a href="mailto:info@wafflecastle.in" className="contact-link">
        info@wafflecastle.in
      </a>
    ),
  },
];

  return (
    <main className="contact-page">
      <div className="contact-container">
        {/* Hero Section */}
        <section className="contact-hero">
          <motion.h1
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            Get In Touch With <span>The Kingdom</span>
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            Have a question, an order, or want to partner with us? Reach out – our team is ready to serve you with royal hospitality.
          </motion.p>
        </section>

        <div className="contact-grid">
          {/* Contact Details & Map */}
          <motion.aside
            className="contact-sidebar"
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <div className="info-cards">
              {contactInfo.map((item, idx) => (
                <div className="info-card-horizontal" key={idx}>
                  <div className="icon-box">{item.icon}</div>
                  <div className="card-content">
                    <h3>{item.title}</h3>
                    <p>{item.details}</p>
                  </div>
                </div>
              ))}
            </div>

            <div className="map-wrapper">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3672.484411130612!2d72.502936315423!3d23.00318532271!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x395e9b38965f9b39%3A0xe0398f398f398f39!2sTitanium%20Business%20Park!5e0!3m2!1sen!2sin!4v1652541234567!5m2!1sen!2sin"
                width="100%"
                height="300"
                style={{ border: 0, borderRadius: "24px" }}
                allowFullScreen={true}
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              ></iframe>
            </div>
          </motion.aside>

          {/* Contact Form */}
          <motion.section
            className="contact-form-wrapper"
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <div className="form-inner">
              <h2>Send us a Message</h2>
              {submitted ? (
                <motion.div
                  initial={{ scale: 0.9, opacity: 0 }}
                  animate={{ scale: 1, opacity: 1 }}
                  transition={{ duration: 0.5 }}
                  className="success-state"
                >
                  <Send size={60} color="#f6a52a" className="success-icon" />
                  <h3>Message Sent!</h3>
                  <p>
                    Thanks for reaching out. Our royal team will get back to you within 24 hours.
                  </p>
                  <button onClick={() => setSubmitted(false)} className="reset-btn">Send Another Message</button>
                </motion.div>
              ) : (
                <form onSubmit={handleSubmit}>
                  <div className="form-row">
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
                  </div>
                  <div className="form-group">
                    <label>Phone Number</label>
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
                      rows={5}
                      required
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    ></textarea>
                  </div>
                  {error && (
                    <p style={{ color: "#c0392b", marginBottom: "12px", fontSize: "14px" }}>
                      ⚠ {error}
                    </p>
                  )}
                  <button type="submit" className="submit-btn" disabled={isSubmitting}>
                    {isSubmitting ? "Sending…" : <>Send Message <ArrowRight size={20} /></>}
                  </button>
                </form>
              )}
            </div>
          </motion.section>
        </div>
      </div>
      <Footer />
    </main>
  );
}
