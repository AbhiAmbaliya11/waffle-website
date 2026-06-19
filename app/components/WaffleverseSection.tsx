"use client";
import { useState } from "react";
import Link from "next/link";

import { motion, AnimatePresence } from "framer-motion";
import { ChevronLeft, ChevronRight, ArrowRight } from "lucide-react";

export default function WaffleverseSection() {
  const [activeTab, setActiveTab] = useState<"special" | "student">("special");

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
          <div className="waffleverse-headline section-title">
            <h2>Loyalty Rewards on <span>Every Visit</span></h2>
          </div>
          <p className="waffleverse-text">
            What if your cravings unlocked a royal welcome? Earn free
            Waff-wiches, exclusive sundaes, and beverage perks every time you
            step into the castle.
          </p>

          <div className="waffleverse-features">
            {/* Card 1: Special Offer Card */}
            <motion.div
              className={`special-offer-card ${activeTab === "special" ? "active" : ""}`}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              onMouseEnter={() => setActiveTab("special")}
              onClick={() => setActiveTab("special")}
            >
              <div className="special-offer-badge">On Purchase Of ₹400+</div>
              <div className="special-offer-content-row">
                <div className="special-offer-text">
                  <div className="special-offer-tag">★ SPECIAL OFFER</div>
                  <h3 className="special-offer-title">FREE Belgian Choco Mini Pancakes</h3>
                  <p className="special-offer-desc">On any purchase of ₹400 or more at the store.</p>
                </div>
              </div>
            </motion.div>

            {/* Card 2: Student Royal Offer Card */}
            <motion.div
              className={`student-offer-card ${activeTab === "student" ? "active" : ""}`}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              onMouseEnter={() => setActiveTab("student")}
              onClick={() => setActiveTab("student")}
            >
              <div className="student-offer-tag">★ STUDENT ROYAL OFFER</div>
              <h3 className="student-offer-title">Flat ₹20 OFF</h3>
              <div className="student-offer-subtitle">Mon to Fri - 11AM to 5PM</div>

              <div className="student-offer-details">
                <div className="student-offer-detail-item">Show your College / School ID at counter.</div>
                <div className="student-offer-detail-item highlight">Min. order ₹149</div>
              </div>
            </motion.div>
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
            <AnimatePresence mode="wait">
              {activeTab === "special" ? (
                <motion.div
                  key="special"
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.95 }}
                  transition={{ duration: 0.3 }}
                  className="details-box-content"
                >
                  <img
                    src="/images/Prince_1.png"
                    alt="FREE Belgian Choco Mini Pancakes"
                    className="waffleverse-main-img"
                  />
                </motion.div>
              ) : (
                <motion.div
                  key="student"
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.95 }}
                  transition={{ duration: 0.3 }}
                  className="details-box-content"
                >
                  <div className="details-box-student-badge">

                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
