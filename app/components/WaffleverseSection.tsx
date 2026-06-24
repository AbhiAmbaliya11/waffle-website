"use client";
import Link from "next/link";
import { motion } from "framer-motion";

export default function WaffleverseSection() {
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
            What if your cravings unlock a royal welcome?<br></br>
            Every visit brings you closer to a free signature waffle.<br></br>
            Collect 5 stamps and enjoy your royal reward on us.
          </p>

          <div className="waffleverse-cta-wrap">
            <Link href="/contact-us" className="cta-btn">
              Join Rewards
            </Link>
          </div>
        </motion.div>

        <motion.div
          className="waffleverse-features"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          viewport={{ once: false, amount: 0.3 }}
        >
          {/* Card 1: Special Offer Card */}
          <motion.div
            className="special-offer-card"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
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
            className="student-offer-card"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <div className="student-offer-tag">★ STUDENT ROYAL OFFER</div>
            <h3 className="student-offer-title">Flat ₹20 OFF</h3>
            <div className="student-offer-subtitle">Mon to Fri - 11AM to 5PM</div>

            <div className="student-offer-details">
              <div className="student-offer-detail-item">Show your College / School ID at counter.</div>
              <div className="student-offer-detail-item highlight">Min. order ₹149</div>
              <div className="student-offer-detail-item term-note">* Cannot be combined with any other offer.</div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
