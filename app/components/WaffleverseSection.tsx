"use client";
import Link from "next/link";

import { motion } from "framer-motion";
import { ChevronLeft, ChevronRight, ArrowRight } from "lucide-react";

export default function WaffleverseSection() {
  const features = [
    {
      label: "Royal Drink",
      title: "15% OFF",
      desc: "Every beverage order at the castle.",
      color: "rgba(255, 185, 54, 0.1)"
    },
    {
      label: "Sweet Gift",
      title: "FREE",
      desc: "Seasonal sundaes on your birthdays.",
      color: "rgba(255, 255, 255, 0.4)"
    }
  ];

  return (
    <section className="waffleverse-section">
      <div className="waffleverse-grid">
        <motion.div
          className="waffleverse-copy"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: false, amount: 0.3 }}
        >
          {/* <span className="section-pill">The Waffle Verse</span> */}
          <div className="waffleverse-headline">
            <h2>Rewards</h2>
            <p className="subheading">at every visit</p>
          </div>
          <p className="waffleverse-text">
            What if your cravings unlocked a royal welcome? Earn free
            Waff-wiches, exclusive sundaes, and beverage perks every time you
            step into the castle.
          </p>

          <div className="waffleverse-features">
            {features.map((feature, i) => (
              <motion.div
                key={i}
                className="feature-card"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
              >
                <span className="feature-label">{feature.label}</span>
                <h3>{feature.title}</h3>
                <p>{feature.desc}</p>
                <div className="card-glow" />
              </motion.div>
            ))}
          </div>

          <div className="waffleverse-actions">

            <Link
              href="/royal-products"
              className="waffleverse-btn"
            >
              Join the Waffleverse
              <ArrowRight size={20} />
            </Link>
          </div>
        </motion.div>

        <motion.div
          className="waffleverse-visual"
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: false, amount: 0.3 }}
        >
          <div className="waffleverse-hero-card">
            <div className="card-bg-glow" />
            <img src="/images/menu-waffwich.png" alt="Featured Reward" className="waffleverse-main-img" />
            <div className="waffleverse-floating-badge">
              <span>Featured</span>
              <strong>Reward</strong>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
