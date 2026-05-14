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

          <button>Find a store</button>
        </motion.div>

        <motion.div
          className="store-right"
          initial={{ opacity: 0, scale: 0.85 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.9 }}
          viewport={{ once: false, amount: 0.35 }}
        >
          <img
            src="/images/store-pin.png"
            alt="Store"
            className="store-pin"
          />
        </motion.div>
      </div>
      <motion.img
        src="/images/Scooty.gif"
        alt="Scooty"
        className="scooty-gif"
        initial={{ x: -280, opacity: 0 }}
        whileInView={{ x: 800, opacity: 1 }}
        transition={{ duration: 2.3, ease: "easeOut" }}
        viewport={{ once: false, amount: 0.4 }}
      />
    </section>
  );
}