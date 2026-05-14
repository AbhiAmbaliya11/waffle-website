"use client";

import { ArrowRight, Sparkles, Compass, Trophy, Gift, Crown, Star, Zap } from "lucide-react";
import { motion } from "framer-motion";
import Footer from "../components/Footer";
import "./journey.css";

export default function OurJourneyPage() {
  return (
    <main className="journey-page">
      <section className="journey-hero">
        <motion.div
          className="journey-hero-copy"
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <span className="section-pill">The Royal Heritage</span>
          <h1>The Royal Story Of <span>Waffle Castle</span></h1>
          <p>
            The story of Waffle Castle began with a single spark of passion. In December 2023,
            Jignesh Jadhav and Upendra Chauhan embarked on a quest to transform a humble
            roadside cart into a kingdom of sweetness. Every recipe we create is a
            chapter of our royal heritage.
          </p>
          <div className="hero-actions">
            <a href="#story" className="button primary">
              Our Royal Story <ArrowRight size={18} />
            </a>
            <div className="hero-stats">
              <div className="stat-item">
                <strong>2023</strong>
                <span>Est.</span>
              </div>
              <div className="stat-divider" />
              <div className="stat-item">
                <strong>Premium</strong>
                <span>Quality</span>
              </div>
            </div>
          </div>
        </motion.div>

        <motion.div
          className="journey-hero-visual-premium"
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, ease: "easeOut" }}
        >
          <div className="hero-main-wrapper">
            <img src="/images/waffle-main.png" alt="Royal Waffle" className="hero-img-main floating" />
            <div className="hero-floating-card top-right glass">
              <Crown size={24} />
              <span>Signature Craft</span>
            </div>
            <div className="hero-floating-card bottom-left glass">
              <Star size={24} />
              <span>Royal Taste</span>
            </div>
          </div>
          <div className="hero-glow-sphere" />
        </motion.div>
      </section>

      <section className="journey-milestones">
        <div className="milestone-header">
          <span className="section-pill">Our Milestones</span>
          <h2>Every Waffle, Every Moment, <span>A Royal Milestone.</span></h2>
        </div>

        <div className="milestone-timeline">
          <motion.div
            className="milestone-card milestone-card-left milestone-card-1"
            initial={{ opacity: 0, x: -60 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-150px" }}
            transition={{ duration: 0.7 }}
          >
            <div className="milestone-crown">
              <Crown size={32} />
            </div>
            <div className="milestone-content">
              <span className="milestone-year">Dec 2023</span>
              <h3>The Royal Dream Begins</h3>
              <p>Two friends, one passion, infinite possibilities. The first cart launches with bold flavors and bigger dreams.</p>
            </div>
          </motion.div>

          <div className="milestone-center-line" />

          <motion.div
            className="milestone-card milestone-card-right milestone-card-2"
            initial={{ opacity: 0, x: 60 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-150px" }}
            transition={{ duration: 0.7, delay: 0.1 }}
          >
            <div className="milestone-crown">
              <Star size={32} />
            </div>
            <div className="milestone-content">
              <span className="milestone-year">Jan 2024</span>
              <h3>The Flavor Revolution</h3>
              <p>Lines wrapped around the block. Customers crave the unique, crispy, and indulgent waffle experience.</p>
            </div>
          </motion.div>

          <motion.div
            className="milestone-card milestone-card-left milestone-card-3"
            initial={{ opacity: 0, x: -60 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-150px" }}
            transition={{ duration: 0.7, delay: 0.2 }}
          >
            <div className="milestone-crown">
              <Zap size={32} />
            </div>
            <div className="milestone-content">
              <span className="milestone-year">Apr 2024</span>
              <h3>First Castle Opens</h3>
              <p>The first outlet launches with royal ambiance, premium ingredients, and a full menu of signature creations.</p>
            </div>
          </motion.div>

          <motion.div
            className="milestone-card milestone-card-right milestone-card-4"
            initial={{ opacity: 0, x: 60 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-150px" }}
            transition={{ duration: 0.7, delay: 0.3 }}
          >
            <div className="milestone-crown">
              <Trophy size={32} />
            </div>
            <div className="milestone-content">
              <span className="milestone-year">Dec 2024</span>
              <h3>Kingdom Expansion</h3>
              <p>Multiple locations across cities. Waffle Castle becomes synonymous with premium waffles and exceptional service.</p>
            </div>
          </motion.div>

          <motion.div
            className="milestone-card milestone-card-left milestone-card-5"
            initial={{ opacity: 0, x: -60 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-150px" }}
            transition={{ duration: 0.7, delay: 0.4 }}
          >
            <div className="milestone-crown">
              <Sparkles size={32} />
            </div>
            <div className="milestone-content">
              <span className="milestone-year">2025+</span>
              <h3>The Royal Legacy</h3>
              <p>Franchise partnerships, new innovations, and a growing community of waffle lovers across the nation.</p>
            </div>
          </motion.div>
        </div>
      </section>

      <section className="journey-story" id="story">
        <motion.div
          className="story-copy"
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <span className="section-pill">The Royal Story</span>
          <h2>Taste The <span>Royal Waffle</span></h2>
          <p>
            The Royal Story of Waffle Castle is more than a business timeline; it is a
            journey of relentless pursuit. From the first roadside cart to our signature
            castle locations, we have never compromised on the 'Royal Standard'. Every
            waffle is a canvas of flavour, crafted with premium ingredients and served
            with the warmth of true hospitality.
          </p>

          <ul className="story-list">
            <motion.li
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
            >
              <Compass size={24} />
              <div>
                <strong>Defined By Purpose</strong>
                <p>Starting with a vision to redefine the waffle experience in every city.</p>
              </div>
            </motion.li>
            <motion.li
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
            >
              <Trophy size={24} />
              <div>
                <strong>Royal Craftsmanship</strong>
                <p>Only the finest ingredients and most innovative recipes earn the royal seal.</p>
              </div>
            </motion.li>
            <motion.li
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3 }}
            >
              <Gift size={24} />
              <div>
                <strong>Shared Joy</strong>
                <p>Creating memorable moments and sweet smiles with every guest we serve.</p>
              </div>
            </motion.li>
          </ul>
        </motion.div>

        <motion.div
          className="story-visual-creative"
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <div className="story-img-main-wrap">
            <img src="/images/wc-product-1.png" alt="Signature Product" className="story-img-main" />
            <div className="story-img-accent-card glass">
              <img src="/images/waffle-location.jpg" alt="Castle Ambience" className="story-img-accent" />
              <div className="accent-label">The Castle Vibe</div>
            </div>
          </div>
          <div className="story-brand-values">
            <div className="value-item"><Crown size={20} /> <span>Royal</span></div>
            <div className="value-item"><Star size={20} /> <span>Premium</span></div>
            <div className="value-item"><Zap size={20} /> <span>Flavour</span></div>
          </div>
        </motion.div>
      </section>

      <section className="journey-cta">
        <motion.div
          className="cta-container"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <div className="cta-content">
            <span className="section-pill">Join The Legacy</span>
            <h2>Ready To Taste The <span>Next Chapter?</span></h2>
            <p>
              Whether you are curious about our story or eager to experience our signature
              waffles, we are always ready to welcome you to the castle.
            </p>
            <div className="cta-actions">

              <a href="/contact-us" className="button secondary">
                Contact the castle
              </a>
            </div>
          </div>
        </motion.div>
      </section>

      <Footer />
    </main>
  );
}
