"use client";

import { motion } from "framer-motion";

export default function WaffleverseSection() {
  return (
    <section className="waffleverse-section">
      <div className="waffleverse-inner">
        <motion.div
          className="waffleverse-copy"
          initial={{ opacity: 0, x: -60 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.85, ease: "easeOut" }}
          viewport={{ once: false, amount: 0.3 }}
        >
          <span className="section-pill">The Waffle Verse</span>
          <div className="waffleverse-headline">
            <h2>Rewards</h2>
            <p className="subheading">at every visit</p>
          </div>
          <p className="waffleverse-text">
            What if your cravings unlocked a royal welcome? Earn free
            Waff-wiches, exclusive sundaes, and beverage perks every time you
            step into the castle.
          </p>

          <div className="waffleverse-actions">
            <button type="button" className="waffleverse-btn">
              Join the Waffleverse
            </button>   
          </div>

          <div className="waffleverse-stats">
            <div>
              <strong>15%</strong>
              <span>off drinks</span>
            </div>
            <div>
              <strong>FREE</strong>
              <span>seasonal sundaes</span>
            </div>
            <div>
              <strong>Instant</strong>
              <span>reward points</span>
            </div>
          </div>
        </motion.div>

        <motion.div
          className="waffleverse-visual"
          initial={{ opacity: 0, x: 60 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.85, ease: "easeOut" }}
          viewport={{ once: false, amount: 0.3 }}
        >
          <div className="visual-frame">
            <div className="frame-deco frame-light" />
            <div className="frame-deco frame-dark" />
            <img
              src="/images/menu-beverages.png"
              alt="Royal beverage"
              className="hero-cup cup-one"
            />
            <img
              src="/images/menu-sundaes.png"
              alt="Royal sundae"
              className="hero-cup cup-two"
            />
            <div className="visual-badge">Royal Treats</div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
