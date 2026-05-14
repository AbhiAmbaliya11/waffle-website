"use client";

import { motion } from "framer-motion";

export default function StoreSection() {
  return (
    <section className="store-section">
      <div className="store-wrap">
        <motion.div
          className="store-left"
          initial={{ opacity: 0, x: -80 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: false, amount: 0.35 }}
        >
          <h2>
            AROUND <br />
            <span>the corner</span>
          </h2>

          <p>
            Thinking about waffles? <br />
            Or maybe a sundae... or a shake? Good news—there’s a Waffle Castle
            store nearby with options.
          </p>

          <button className="find-store-btn">Find a store</button>
        </motion.div>

        <motion.div
          className="store-right"
          initial={{ opacity: 0, scale: 0.85 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.9 }}
          viewport={{ once: false, amount: 0.35 }}
        >
          <div className="store-img-frame">
            <img
              src="/images/waffle-location.jpg"
              alt="Store"
              className="store-pin"
            />
          </div>
        </motion.div>
      </div>

      <motion.div
        className="delivery-container"
        initial={{ x: "-20%", opacity: 1 }}
        whileInView={{ x: "120%", opacity: 1 }}
        transition={{ duration: 6, repeat: Infinity, ease: "linear" }}
      >
        <div className="scooty-wrapper">
          <img src="/images/Scooty.gif" alt="Delivery Scooty" className="scooty-gif" />
          <img src="/images/menu-mini.png" alt="Waffle Cargo" className="waffle-cargo" />
        </div>
      </motion.div>
    </section>
  );
}