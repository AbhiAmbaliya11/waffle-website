"use client";

import { useState } from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { TrendingUp, Sparkles, Users, Coins, Trophy, Award } from "lucide-react";
import Footer from "../components/Footer";
import "./franchise.css";

const iconMap = {
  TrendingUp,
  Sparkles,
  Users,
  Coins,
  Trophy,
  Award
};

const systemSupports = {
  left: [
    "Grand Opening Event Planning & Guidelines Support",
    "Registration Support With Online Delivery Channel",
    "Access Of Food Training Module",
    "Social Media Support",
    "Ground Marketing Support",
    "Raw Material Setup & Kitchen Staff Training Support"
  ],
  right: [
    "Marketing Guidelines & Sales Grow Up Guidelines",
    "POS Billing Software",
    "Regular Food Innovation",
    "Standard Layout Given By Company",
    "Regular Virtual Audits & Quality Review",
    "Calculation Sheets Of Food Cost, Daily Consumption Tracker, P&L Report Formats"
  ]
};

const whyWaffleItems = [
  {
    title: "Proven Business Model",
    desc: "Scalable and highly profitable layout designed for consistent growth and franchise success.",
    iconName: "TrendingUp",
    colSpan: "bento-col-2",
    badge: "Scalable & Profitable",
    pills: ["High ROI", "Quick Payback", "Optimized Costs"]
  },
  {
    title: "Strong Brand Identity",
    desc: "Built on our signature motto: “Taste the Royal Waffle” — representing quality, flavor, and trust.",
    iconName: "Sparkles",
    colSpan: "bento-col-1",
    badge: "Premium Brand",
    pills: ["Royal Taste", "Elite Standards"]
  },
  {
    title: "Wide Appeal",
    desc: "Delightful variety of waffles, mini pancakes, and premium shakes that satisfy all age demographics.",
    iconName: "Users",
    colSpan: "bento-col-1",
    badge: "Universal Love",
    pills: ["For All Ages", "Diverse Menu"]
  },
  {
    title: "Affordable Investment",
    desc: "Lower setup costs coupled with strong product margins create a high-yielding, low-risk business venture.",
    iconName: "Coins",
    colSpan: "bento-col-2",
    badge: "High Margin Return",
    pills: ["Low Setup Capital", "High Profit Margin", "Premium Kitchen Setup"]
  },
  {
    title: "Market Leadership",
    desc: "Standing out at the cutting edge of the booming dessert café and indulgence-food sector.",
    iconName: "Trophy",
    colSpan: "bento-col-1",
    badge: "Dessert Pioneer",
    pills: ["Trend Setter", "Niche Leader"]
  },
  {
    title: "Proven Success",
    desc: "Outlets launched in Dec 2024 generated rapid traction and overwhelming customer rating support.",
    iconName: "Award",
    colSpan: "bento-col-1",
    badge: "Two Outlets Live",
    pills: ["Launched Dec 2024", "4.8+ Star Rating"]
  }
];

export default function FranchisePage() {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    contactNo: "",
    city: "",
    state: "",
    planToStart: ""
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setTimeout(() => {
      setIsSubmitting(false);
      setSubmitted(true);
      setFormData({
        firstName: "",
        lastName: "",
        email: "",
        contactNo: "",
        city: "",
        state: "",
        planToStart: ""
      });
      setTimeout(() => setSubmitted(false), 5000);
    }, 1500);
  };

  const fadeInUp = {
    initial: { opacity: 0, y: 30 },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: true },
    transition: { duration: 0.6 }
  };

  return (
    <>
      <main className="franchise-page">
        {/* --- Royal Hero Section --- */}
        <section className="hero-royal">
          <div className="container">
            <motion.div
              className="hero-content"
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 1 }}
            >
              <span className="section-subtitle">The Royal Invitation</span>
              <h2 className="section-title">Bring The Taste Of <span className="highlight">Magic To Your City</span></h2>
              <p>At Waffle Castle, we provide a proven and scalable business model backed by expert support and a strong brand foundation. Here’s why we’re the perfect partner for your franchise journey.</p>
              <div style={{ display: 'flex', gap: '20px', justifyContent: 'center' }}>
                <button
                  className="submit-royal"
                  style={{ width: 'auto', padding: '18px 40px' }}
                  onClick={() => {
                    document.getElementById("form-section")?.scrollIntoView({ behavior: "smooth" });
                  }}
                >
                  Apply Now
                </button>
              </div>
            </motion.div>
          </div>

          <div className="hero-visuals">
            <motion.div
              className="floating-product"
              style={{ top: '20%', left: '10%' }}
              animate={{ y: [0, -30, 0] }}
              transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
            >
              <Image src="/images/Prince_1.png" alt="Waffle" width={220} height={220} />
            </motion.div>
            <motion.div
              className="floating-product"
              style={{ bottom: '15%', right: '10%' }}
              animate={{ y: [0, 40, 0] }}
              transition={{ duration: 7, repeat: Infinity, ease: "easeInOut" }}
            >
              <Image src="/images/Darbaan.png" alt="Mini Waffle" width={200} height={200} />
            </motion.div>
          </div>
        </section>

        {/* --- Why Waffle Castle Section --- */}
        <section className="container">
          <div style={{ textAlign: 'center', marginBottom: '50px' }}>
            <span className="section-subtitle">The Advantages</span>
            <motion.h2 className="section-title" {...fadeInUp}>
              Why <span className="highlight">Waffle Castle?</span>
            </motion.h2>
          </div>
          <div className="why-bento-grid">
            {whyWaffleItems.map((item, index) => {
              const IconComponent = iconMap[item.iconName as keyof typeof iconMap];
              return (
                <motion.div
                  key={index}
                  className={`bento-card ${item.colSpan}`}
                  {...fadeInUp}
                  transition={{ delay: index * 0.08, duration: 0.5 }}
                >
                  <div className="bento-card-header">
                    <div className="bento-icon-wrapper">
                      {IconComponent && <IconComponent size={24} strokeWidth={2} />}
                    </div>
                    <span className="number-badge">{String(index + 1).padStart(2, '0')}</span>
                  </div>
                  <div className="bento-card-body">
                    {item.badge && <span className="bento-badge">{item.badge}</span>}
                    <h3>{item.title}</h3>
                    <p>{item.desc}</p>
                    {item.pills && (
                      <div className="bento-extra-content">
                        {item.pills.map((pill, pIdx) => (
                          <span
                            key={pIdx}
                            className={pIdx === 0 && item.colSpan === "bento-col-2" ? "bento-pill-highlight" : "bento-pill"}
                          >
                            {pill}
                          </span>
                        ))}
                      </div>
                    )}
                  </div>
                </motion.div>
              );
            })}
          </div>
        </section>

        {/* --- Application Form Section --- */}
        <section id="form-section" className="form-section">
          <div className="container">
            <motion.div
              className="glass-form-wrapper"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              <div style={{ textAlign: 'center', marginBottom: '50px' }}>
                <span className="section-subtitle">Application</span>
                <h2 className="section-title">Apply For <span className="highlight">Franchise</span></h2>
                <p style={{ color: 'rgba(43, 18, 6, 0.7)' }}>Fill in your details and our team will connect with you soon.</p>
              </div>

              {submitted ? (
                <div style={{ textAlign: 'center', padding: '40px' }}>
                  <h3 className="script-text" style={{ fontSize: '2.5rem' }}>Application Received!</h3>
                  <p>Our team will get in touch with you within 48 hours.</p>
                </div>
              ) : (
                <form onSubmit={handleSubmit}>
                  <div className="form-grid">
                    <div className="form-group">
                      <label>First Name *</label>
                      <input type="text" name="firstName" className="form-input" placeholder="John" required value={formData.firstName} onChange={handleChange} />
                    </div>
                    <div className="form-group">
                      <label>Last Name *</label>
                      <input type="text" name="lastName" className="form-input" placeholder="Doe" required value={formData.lastName} onChange={handleChange} />
                    </div>
                  </div>

                  <div className="form-grid">
                    <div className="form-group">
                      <label>Email Address *</label>
                      <input type="email" name="email" className="form-input" placeholder="john@example.com" required value={formData.email} onChange={handleChange} />
                    </div>
                    <div className="form-group">
                      <label>Contact No *</label>
                      <input type="tel" name="contactNo" className="form-input" placeholder="+91 98765 43210" required value={formData.contactNo} onChange={handleChange} />
                    </div>
                  </div>

                  <div className="form-grid">
                    <div className="form-group">
                      <label>City *</label>
                      <input type="text" name="city" className="form-input" placeholder="e.g. Mumbai" required value={formData.city} onChange={handleChange} />
                    </div>
                    <div className="form-group">
                      <label>State *</label>
                      <input type="text" name="state" className="form-input" placeholder="e.g. Maharashtra" required value={formData.state} onChange={handleChange} />
                    </div>
                  </div>

                  <div className="form-group">
                    <label>Plan to Start Within *</label>
                    <div className="radio-row">
                      {["Immediately", "1 Month", "Not Decided Yet"].map((option) => (
                        <label key={option} className="radio-item">
                          <input
                            type="radio"
                            name="planToStart"
                            value={option}
                            checked={formData.planToStart === option}
                            onChange={handleChange}
                            required
                          />
                          <span>{option}</span>
                        </label>
                      ))}
                    </div>
                  </div>

                  <div className="">
                    <button type="submit" className="submit-royal" disabled={isSubmitting}>
                      {isSubmitting ? "Submitting..." : "Submit Application"}
                    </button>
                  </div>
                </form>
              )}
            </motion.div>
          </div>
        </section>

        {/* --- Wall of Love Section --- */}
        <section className="wall-of-love">
          <div className="container">
            <div className="love-grid">
              <div className="video-showcase">
                <motion.div className="video-wrap" {...fadeInUp}>
                  <video src="/videos/waffle-video.mp4" autoPlay muted loop />
                </motion.div>
                <motion.div className="video-wrap" {...fadeInUp} transition={{ delay: 0.2 }}>
                  <video src="/videos/waffle-video.mp4" autoPlay muted loop />
                </motion.div>
              </div>
              <motion.div className="love-content" {...fadeInUp}>
                <span className="section-subtitle">Our Passion</span>
                <h2 className="section-title" style={{ textAlign: 'left' }}>Made With Love, <br /><span className="highlight">Reviewed With Heart.</span></h2>
                <div style={{ marginTop: '30px', fontSize: '1.1rem', opacity: 0.8, lineHeight: 1.8 }}>
                  <p>At Waffle Castle, every waffle we serve carries a story of passion, quality, and dedication. From the first batter poured on the griddle to the final drizzle of chocolate, our goal has always been to create moments that people remember.</p>
                  <p style={{ marginTop: '20px' }}>Our franchise owners are more than business partners — they are part of the Waffle Castle family. With their hard work, creativity, and commitment to excellence, they help bring the magic of our brand to new cities and communities.</p>
                </div>
              </motion.div>
            </div>

            <div className="google-reviews-panel">
              <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '40px' }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '15px' }}>
                  <Image src="/images/logo.png" alt="Google" width={60} height={60} />
                  <div>
                    <h4 style={{ fontSize: '1.5rem' }}>Waffle Castle</h4>
                    <span style={{ color: 'var(--royal-gold)' }}>★★★★★ 1,011 Google reviews</span>
                  </div>
                </div>
                <button className="premium-card" style={{ padding: '12px 25px' }}>Write a Review</button>
              </div>
              <div className="why-grid">
                {[
                  { name: "Payal Prajapati", initial: "P", text: "I absolutely love the waffles at Waffle Castle — the taste is truly unforgettable." },
                  { name: "HeMansu Patel", initial: "H", text: "Kunafa waffle loved it. The franchise support is exceptional." },
                  { name: "Krishna Patel", initial: "K", text: "Waffle was so delicious and excellent in quality. The proven model really works." }
                ].map((rev, i) => (
                  <div key={i} className="review-card-modern">
                    <div style={{ display: 'flex', gap: '10px', marginBottom: '15px' }}>
                      <div className="avatar">{rev.initial}</div>
                      <div>
                        <strong>{rev.name}</strong>
                        <p style={{ fontSize: '0.8rem', opacity: 0.5 }}>Google Review</p>
                      </div>
                    </div>
                    <p style={{ fontSize: '0.95rem', opacity: 0.8 }}>"{rev.text}"</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* --- System & Supports Section --- */}
        <section className="support-ecosystem">
          <div className="container">
            <div style={{ textAlign: 'center', marginBottom: '50px' }}>
              <span className="section-subtitle">Our Support</span>
              <motion.h2 className="section-title" {...fadeInUp}>
                Support <span className="highlight">Ecosystem</span>
              </motion.h2>
            </div>
            <div className="support-circular-layout">
              <div>
                {systemSupports.left.map((item, i) => (
                  <motion.div key={i} className="premium-card support-bubble" {...fadeInUp} transition={{ delay: i * 0.1 }}>
                    {item}
                  </motion.div>
                ))}
              </div>
              <div className="support-center-logo">
                <div className="logo-ring"></div>
                <Image src="/images/logo.png" alt="Waffle Castle" width={250} height={250} />
              </div>
              <div>
                {systemSupports.right.map((item, i) => (
                  <motion.div key={i} className="premium-card support-bubble" {...fadeInUp} transition={{ delay: i * 0.1 }}>
                    {item}
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* --- Ongoing & Location Support --- */}
        <section className="container">
          <div className="love-grid partnership-section">
            <motion.div {...fadeInUp}>
              <span className="section-subtitle">Partnership</span>
              <h3 className="section-title" style={{ textAlign: 'left', fontSize: '2.5rem' }}>Ongoing <span className="highlight">Support</span></h3>
              <div className="why-grid" style={{ gridTemplateColumns: '1fr 1fr', marginTop: '30px' }}>
                {["Marketing Expertise", "Performance Monitoring", "Training & Development", "Customer Engagement"].map((item, i) => (
                  <div key={i} className="premium-card" style={{ padding: '20px' }}>
                    <strong>{item}</strong>
                  </div>
                ))}
              </div>
            </motion.div>
            <motion.div {...fadeInUp}>
              <span className="section-subtitle">Real Estate</span>
              <h3 className="section-title" style={{ textAlign: 'left', fontSize: '2.5rem' }}>Location <span className="highlight">Success</span></h3>
              <div className="premium-card" style={{ marginTop: '30px' }}>
                <p>We provide full assistance in finding and securing the perfect location for your castle.</p>
                <ul style={{ marginTop: '20px', listStyle: 'none', display: 'grid', gap: '15px' }}>
                  <li>🏰 <strong>High Footfall Areas:</strong> Malls, High Streets.</li>
                  <li>🏰 <strong>Ground Floor:</strong> Maximum visibility.</li>
                  <li>🏰 <strong>Feasibility Check:</strong> Professional site audit.</li>
                </ul>
              </div>
            </motion.div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
