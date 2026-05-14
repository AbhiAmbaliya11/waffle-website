"use client";

import { useState } from "react";
import Footer from "../components/Footer";
import "./franchise.css";

const benefits = [
  {
    title: "Proven Business Model",
    desc: "Scalable and profitable, ensuring consistent growth and success.",
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 18L9 11.25l4.306 4.307a11.95 11.95 0 015.814-5.519l2.74-1.22m0 0l-5.94-2.28m5.94 2.28l-2.28 5.941" />
      </svg>
    )
  },
  {
    title: "Strong Brand Identity",
    desc: "Known for “Taste the Royal Waffle,” synonymous with quality and indulgence.",
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" d="M11.48 3.499a.562.562 0 011.04 0l2.125 5.111a.563.563 0 00.475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 00-.182.557l1.285 5.385a.562.562 0 01-.84.61l-4.725-2.885a.563.563 0 00-.586 0L6.982 20.54a.562.562 0 01-.84-.61l1.285-5.386a.562.562 0 00-.182-.557l-4.204-3.602a.563.563 0 01.321-.988l5.518-.442a.563.563 0 00.475-.345L11.48 3.5z" />
      </svg>
    )
  },
  {
    title: "Wide Appeal",
    desc: "Waffles, mini pancakes, and shakes attract all age groups, ensuring steady footfall.",
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" d="M15 19.128a9.38 9.38 0 002.625.372 9.337 9.337 0 004.121-.952 4.125 4.125 0 00-7.533-2.493M15 19.128v-.003c0-1.113-.285-2.16-.786-3.07M15 19.128v.106A12.318 12.318 0 018.624 21c-2.331 0-4.512-.645-6.374-1.766l-.001-.109a6.375 6.375 0 0111.964-3.07M12 6.375a3.375 3.375 0 11-6.75 0 3.375 3.375 0 016.75 0zm8.25 2.25a2.625 2.625 0 11-5.25 0 2.625 2.625 0 015.25 0z" />
      </svg>
    )
  },
  {
    title: "High ROI",
    desc: "Low setup costs and high margins make it a highly lucrative business opportunity.",
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v12m-3-2.818l.879.659c1.171.879 3.07.879 4.242 0 1.172-.879 1.172-2.303 0-3.182C13.536 12.219 12.768 12 12 12c-.725 0-1.45-.22-2.003-.659-1.106-.879-1.106-2.303 0-3.182s2.9-.879 4.006 0l.415.33M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
    )
  }
];

const testimonials = [
  {
    text: "I absolutely love the waffles at Waffle Castle — the taste is truly unforgettable. It’s soft, warm, and simply melts in your mouth.",
    author: "Payal Prajapati",
    role: "Happy Customer",
    initial: "P"
  },
  {
    text: "Kunafa waffle 🧇 loved it ❤️ mast go once and test it. The franchise support is exceptional and the community response has been amazing.",
    author: "HeMansu Patel",
    role: "Local Reviewer",
    initial: "H"
  },
  {
    text: "Waffle was so delicious and excellent in quality. The proven model really works and the ROI is visible from month one.",
    author: "Krishna Patel",
    role: "Waffle Enthusiast",
    initial: "K"
  }
];

export default function FranchisePage() {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    city: "",
    investment: "",
    message: ""
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    // Simulate API call
    setTimeout(() => {
      setIsSubmitting(false);
      setSubmitted(true);
      setFormData({ name: "", phone: "", email: "", city: "", investment: "", message: "" });

      // Reset success message after 5 seconds
      setTimeout(() => setSubmitted(false), 5000);
    }, 1500);
  };

  return (
    <>
      <main className="franchise-page">
        <div className="franchise-container">

          <div className="franchise-hero">
            <h1>Become a <span>Franchise Partner</span></h1>
            <p>Join Waffle Castle's expanding royal kingdom. Bring the magic of premium desserts to your city with our proven, highly profitable franchise model.</p>
          </div>

          <div className="franchise-layout">

            {/* Left Column: Benefits */}
            <div className="benefits-section">
              <h2>Why Partner With Us?</h2>
              <div className="benefits-grid">
                {benefits.map((benefit, index) => (
                  <div className="benefit-card" key={index}>
                    <div className="benefit-icon">
                      {benefit.icon}
                    </div>
                    <h3>{benefit.title}</h3>
                    <p>{benefit.desc}</p>
                  </div>
                ))}
              </div>

              <div style={{ marginTop: '40px' }}>
                <p style={{ color: 'rgba(255, 248, 205, 0.8)', lineHeight: 1.6, fontSize: '1.05rem' }}>
                  At Waffle Castle, every waffle we serve carries a story of passion, quality, and dedication. Our franchise owners are more than business partners — they are part of the Waffle Castle family. With their hard work and creativity, they help bring the magic of our brand to new communities.
                </p>
              </div>
            </div>

            {/* Right Column: Application Form */}
            <div className="application-section">
              <div className="form-wrapper">
                <div className="form-header">
                  <h2>Apply For Franchise</h2>
                  <p>Fill in your details and our team will connect with you soon.</p>
                </div>

                {submitted ? (
                  <div style={{ padding: '40px 20px', textAlign: 'center', background: 'rgba(246, 165, 42, 0.1)', borderRadius: '16px', border: '1px solid rgba(246, 165, 42, 0.3)' }}>
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="#f6a52a" style={{ width: 60, height: 60, margin: '0 auto 15px' }}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                    <h3 style={{ color: '#f6a52a', marginBottom: '10px', fontSize: '1.5rem' }}>Application Received!</h3>
                    <p style={{ color: 'rgba(255, 248, 205, 0.8)' }}>Thank you for your interest. Our franchise team will get in touch with you within 48 hours.</p>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit}>
                    <div className="form-group">
                      <label htmlFor="name">Full Name *</label>
                      <input type="text" id="name" name="name" className="form-control" placeholder="John Doe" required value={formData.name} onChange={handleChange} />
                    </div>

                    <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '20px' }}>
                      <div className="form-group">
                        <label htmlFor="phone">Phone Number *</label>
                        <input type="tel" id="phone" name="phone" className="form-control" placeholder="+91 9876543210" required value={formData.phone} onChange={handleChange} />
                      </div>
                      <div className="form-group">
                        <label htmlFor="email">Email Address *</label>
                        <input type="email" id="email" name="email" className="form-control" placeholder="john@example.com" required value={formData.email} onChange={handleChange} />
                      </div>
                    </div>

                    <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '20px' }}>
                      <div className="form-group">
                        <label htmlFor="city">City of Interest *</label>
                        <input type="text" id="city" name="city" className="form-control" placeholder="e.g. Mumbai" required value={formData.city} onChange={handleChange} />
                      </div>
                      <div className="form-group">
                        <label htmlFor="investment">Investment Capacity *</label>
                        <select id="investment" name="investment" className="form-control" required value={formData.investment} onChange={handleChange}>
                          <option value="" disabled>Select Amount</option>
                          <option value="10-15">₹10L - ₹15L</option>
                          <option value="15-20">₹15L - ₹20L</option>
                          <option value="20-25">₹20L - ₹25L</option>
                          <option value="25+">Above ₹25L</option>
                        </select>
                      </div>
                    </div>

                    <div className="form-group">
                      <label htmlFor="message">Any Questions / Message (Optional)</label>
                      <textarea id="message" name="message" className="form-control" placeholder="Tell us about your background or why you'd like to partner with us..." value={formData.message} onChange={handleChange}></textarea>
                    </div>

                    <button type="submit" className="submit-btn" disabled={isSubmitting}>
                      {isSubmitting ? 'Submitting...' : 'Submit Application'}
                      {!isSubmitting && (
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" style={{ width: 20, height: 20 }}>
                          <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
                        </svg>
                      )}
                    </button>
                  </form>
                )}
              </div>
            </div>

          </div>

          {/* Testimonials Section */}
          <div className="testimonials-section">
            <h2>Straight From The Fam</h2>
            <div className="testimonials-grid">
              {testimonials.map((test, index) => (
                <div className="testimonial-card" key={index}>
                  <svg className="quote-icon" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
                  </svg>
                  <p className="testimonial-text">"{test.text}"</p>
                  <div className="testimonial-author">
                    <div className="author-avatar">{test.initial}</div>
                    <div className="author-info">
                      <h4>{test.author}</h4>
                      <p>{test.role}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

        </div>
      </main>
      <Footer />
    </>
  );
}
