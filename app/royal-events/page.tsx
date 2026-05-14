"use client";

import { useState } from "react";
import Footer from "../components/Footer";
import "./events.css";
import { motion } from "framer-motion";
import { Camera, Heart, Music, Moon, Star, CalendarDays } from "lucide-react";

export default function RoyalEventsPage() {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    eventType: "Table Reservation",
    message: "",
  });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  const moments = [
    {
      title: "Instagrammable Setups",
      desc: "Every corner of our kingdom is designed to look as good as our waffles taste.",
      icon: <Camera size={28} />,
    },
    {
      title: "Made with Love",
      desc: "Our waffles come loaded with rich toppings, smooth sauces, and bold flavors.",
      icon: <Heart size={28} />,
    },
    {
      title: "Music Always Playing",
      desc: "Good vibes and great tunes to complement every bite of your royal dessert.",
      icon: <Music size={28} />,
    },
    {
      title: "Open Late Nights",
      desc: "Midnight cravings? The castle doors stay open late for your sweet tooth.",
      icon: <Moon size={28} />,
    },
    {
      title: "Royal Service",
      desc: "Experience top-tier hospitality where every guest is treated like royalty.",
      icon: <Star size={28} />,
    },
    {
      title: "Crispy Every Time",
      desc: "Flipping golden waffles to perfection, crispy on the outside, fluffy inside.",
      icon: <Star size={28} />,
    },
  ];

  return (
    <main className="events-page">
      <div className="events-container">
        
        {/* Hero Section */}
        <section className="events-hero">
          <motion.h1
            initial={{ opacity: 0, y: -30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            We didn’t open a café.<br />
            <span>We built a <span className="accent">kingdom.</span></span>
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            When you step into Waffle Castle, you’re entering a world where every moment is savored. 
            From casual gatherings to late-night cravings, every waffle is part of a celebration.
          </motion.p>
        </section>

        {/* The Royal Experience / Moments Gallery */}
        <section className="moments-section">
          <div className="section-header">
            <h2>The Royal <span>Experience</span></h2>
            <p style={{ color: "rgba(255,248,205,0.7)", fontSize: "1.1rem" }}>
              Make Every Moment Delicious at Waffle Castle
            </p>
          </div>
          
          <div className="moments-grid">
            {moments.map((moment, index) => (
              <div className="moment-card" key={index}>
                <div className="moment-icon">{moment.icon}</div>
                <h3>{moment.title}</h3>
                <p>{moment.desc}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Event Spotlight */}
        <section className="spotlight-section">
          <div className="section-header">
            <h2>Past <span>Events</span></h2>
          </div>
          
          <div className="spotlight-card">
            <div className="spotlight-content">
              <span className="spotlight-badge">March 2026 Spotlight</span>
              <h3>Royal Crown Creator Collab</h3>
              <p>
                This March, Waffle Castle hosted an exclusive creator collaboration event, bringing together talented food and lifestyle creators for a royal experience. From indulgent waffle tastings to high-energy content creation, the event turned into a celebration of creativity and community.
              </p>
              <div className="spotlight-tags">
                <span>#RoyalWaffleDay</span>
                <span>#CreatorCollab</span>
                <span>#FoodCreators</span>
                <span>#WaffleCastle</span>
              </div>
            </div>
            <div className="spotlight-image">
              {/* Using a placeholder or generic image from existing assets */}
              <img src="/images/menu-cakes.png" alt="Creator Collab Event" />
            </div>
          </div>
        </section>

        {/* Reservation Form */}
        <section className="reservation-section">
          <div className="reservation-grid">
            {/* Left Info Content */}
            <motion.div 
              className="reservation-info"
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <h2>Reserve Your <br /><span>Royal Spot</span></h2>
              <p>
                Whether you want to lock in your seat for an upcoming event, ask about a concert night, or just find out what’s dropping next — drop us a note. The castle doors are always open.
              </p>
              
              <ul className="brand-points">
                <li>
                  <Star size={20} className="point-icon" />
                  <span>Multiple locations across India — Find your nearest castle</span>
                </li>
                <li>
                  <Heart size={20} className="point-icon" />
                  <span>Tag @wafflecastle.in to be featured on our Royal Moments wall</span>
                </li>
                <li>
                  <CalendarDays size={20} className="point-icon" />
                  <span>We'll get back within 24 hours of your submission</span>
                </li>
              </ul>
            </motion.div>

            {/* Right Form Content */}
            <motion.div 
              className="reservation-form-container"
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <div className="reservation-form">
                {submitted ? (
                  <div className="success-state">
                    <CalendarDays size={60} color="#f6a52a" className="success-icon" />
                    <h3>Request Received!</h3>
                    <p>
                      The castle doors are open. Our team will get back to you within 24 hours to confirm your reservation.
                    </p>
                    <button onClick={() => setSubmitted(false)} className="reset-btn">Send Another Request</button>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit}>
                    <div className="form-row">
                      <div className="form-group">
                        <label>Full Name</label>
                        <input 
                          type="text" 
                          className="form-control" 
                          placeholder="Enter your name" 
                          required 
                          value={formData.name}
                          onChange={(e) => setFormData({...formData, name: e.target.value})}
                        />
                      </div>
                      <div className="form-group">
                        <label>Phone Number</label>
                        <input 
                          type="tel" 
                          className="form-control" 
                          placeholder="Enter your phone" 
                          required 
                          value={formData.phone}
                          onChange={(e) => setFormData({...formData, phone: e.target.value})}
                        />
                      </div>
                    </div>

                    <div className="form-row">
                      <div className="form-group">
                        <label>Email Address</label>
                        <input 
                          type="email" 
                          className="form-control" 
                          placeholder="Enter your email" 
                          required 
                          value={formData.email}
                          onChange={(e) => setFormData({...formData, email: e.target.value})}
                        />
                      </div>
                      <div className="form-group">
                        <label>Reservation Type</label>
                        <select 
                          className="form-control"
                          value={formData.eventType}
                          onChange={(e) => setFormData({...formData, eventType: e.target.value})}
                        >
                          <option>Table Reservation</option>
                          <option>Private Party</option>
                          <option>Concert Night Query</option>
                          <option>Creator Collab</option>
                        </select>
                      </div>
                    </div>

                    <div className="form-group">
                      <label>Message / Special Requests</label>
                      <textarea 
                        className="form-control" 
                        placeholder="Tell us about your royal gathering..."
                        rows={4}
                        value={formData.message}
                        onChange={(e) => setFormData({...formData, message: e.target.value})}
                      ></textarea>
                    </div>

                    <button type="submit" className="submit-btn">
                      Reserve My Spot
                    </button>
                  </form>
                )}
              </div>
            </motion.div>
          </div>
        </section>

      </div>
      <Footer />
    </main>
  );
}
