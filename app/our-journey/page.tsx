"use client";

import { ArrowRight, Sparkles, Compass, Trophy, Gift, Crown, Star, Zap } from "lucide-react";
import { motion } from "framer-motion";
import Footer from "../components/Footer";
import "./journey.css";

export default function OurJourneyPage() {
  return (
    <main className="journey-page">
      <section className="journey-hero">
        <div className="journey-hero-copy">
          <span className="section-pill">Our Royal Story</span>
          <h1>The Royal Story Of Waffle Castle</h1>
          <p>
            In December 2023, two long-time friends, Jignesh Jadhav and Upendra Chauhan,
            took a bold step toward their shared dream. Leaving behind stable jobs, they set
            out to create something extraordinary. With a love for waffles and big ambitions,
            they launched a roadside food cart.
          </p>
          <div className="hero-actions">
            <a href="#timeline" className="button primary">
              Explore the timeline
            </a>
            <a href="#story" className="button secondary">
              Discover the story
            </a>
          </div>
        </div>

        <div className="journey-hero-visual">
          <div className="hero-card hero-card-large">
            <div>
              <span className="hero-badge">First Spark</span>
              <h2>December 2023</h2>
              <p>
                Two longtime friends, Jignesh Jadhav and Upendra Chauhan, left stable careers
                to pursue their waffle dream. They launched a roadside food cart that quickly
                captured hearts with unique, flavorful creations.
              </p>
            </div>
            <div className="hero-number">01</div>
          </div>

          <div className="hero-card hero-card-small">
            <div className="hero-card-icon">
              <Sparkles size={28} />
            </div>
            <h3>Royal flavour in every bite</h3>
            <p>
              A premium menu, playful textures, and bold toppings turned every customer
              into a loyal fan.
            </p>
          </div>
        </div>
      </section>

      <section className="journey-milestones">
        <div className="milestone-header">
          <span className="section-pill">Our Milestones</span>
          <h2>Every waffle, every moment, a royal milestone.</h2>
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

      <section className="journey-timeline" id="timeline">
        <div className="section-headline">
          <span className="section-pill">Timeline</span>
          <h2>Milestones that shaped the castle.</h2>
          <p>
            Each chapter in our journey is built on flavour, trust, and unforgettable experiences.
          </p>
        </div>

        <div className="timeline-grid">
          <article className="timeline-card">
            <div className="timeline-dot" />
            <span className="timeline-step">December 2023</span>
            <h3>The Beginning</h3>
            <p>
              Two longtime friends, Jignesh Jadhav and Upendra Chauhan, left stable careers
              to pursue their waffle dream. They launched a roadside food cart that quickly
              captured hearts with unique, flavorful creations.
            </p>
          </article>

          <article className="timeline-card">
            <div className="timeline-dot" />
            <span className="timeline-step">Early 2024</span>
            <h3>Overwhelming Response</h3>
            <p>
              The response was instant and incredible. People couldn't get enough of their
              unique and flavorful creations. Inspired by the support, they decided to turn
              their dream into something bigger.
            </p>
          </article>

          <article className="timeline-card">
            <div className="timeline-dot" />
            <span className="timeline-step">Mid 2024</span>
            <h3>First Outlets Opening</h3>
            <p>
              Within months, they began working on opening their first outlets. The castle
              concept took shape with premium ingredients, royal presentation, and warm hospitality.
            </p>
          </article>

          <article className="timeline-card">
            <div className="timeline-dot" />
            <span className="timeline-step">2024-2025</span>
            <h3>Growth & Recognition</h3>
            <p>
              Multiple locations opened, franchise partnerships formed, and Waffle Castle
              became known for its premium waffles, innovative flavors, and exceptional service.
            </p>
          </article>
        </div>
      </section>

      <section className="journey-story" id="story">
        <div className="story-copy">
          <span className="section-pill">The Royal Story</span>
          <h2>Taste The Royal Waffle</h2>
          <p>
            From the first cart to our castle locations, every choice has been guided by the
            same promise: rich taste, premium ingredients, and a welcoming experience that
            makes every customer feel like royalty.
          </p>

          <ul className="story-list">
            <li>
              <Compass size={20} />
              <div>
                <strong>Started with a clear mission</strong>
                <p>To make waffles unforgettable for every guest.</p>
              </div>
            </li>
            <li>
              <Trophy size={20} />
              <div>
                <strong>Championing quality</strong>
                <p>Every recipe is made from scratch with thoughtful ingredients.</p>
              </div>
            </li>
            <li>
              <Gift size={20} />
              <div>
                <strong>Sharing joy</strong>
                <p>Every waffle is crafted to create a memorable moment.</p>
              </div>
            </li>
          </ul>
        </div>

        <div className="story-visual">
          <div className="story-card story-card-top">
            <span>Brand values</span>
            <p>Delight, craft, and a royal feeling in every detail.</p>
          </div>
          <div className="story-card story-card-middle">
            <span>Customer first</span>
            <p>Good taste meets warm service and bold presentation.</p>
          </div>
          <div className="story-card story-card-bottom">
            <span>Castle growth</span>
            <p>From one cart to a growing family of stores and loyal fans.</p>
          </div>
        </div>
      </section>

      <section className="journey-cta">
        <div>
          <span className="section-pill">Join the journey</span>
          <h2>Ready to taste the next royal chapter?</h2>
          <p>
            Whether you are curious about our story or eager to experience our signature
            waffles, we are always ready to welcome you.
          </p>
        </div>

        <div className="cta-actions">
          <a href="/" className="button primary">
            Visit the castle
          </a>
          <a href="#contact" className="button secondary">
            Contact the castle
          </a>
        </div>
      </section>

      <Footer />
    </main>
  );
}
