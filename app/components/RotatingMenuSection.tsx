"use client";

import { motion } from "framer-motion";

const rotatingItems = [
  "Waffle Crisps",
  "Waff-wich",
  "Sundaes",
  "Cakes",
  "Ice-cream Waff-wich",
  "Coffee",
  "Shakes",
  "Waffle Crisps",
  "Waff-wich",
  "Sundaes",
  "Cakes",
  "Ice-cream Waff-wich",
  "Coffee",
  "Shakes",
];

export default function RotatingMenuSection() {
  return (
    <section className="rotating-menu-section">
      <div className="rotating-text-bar">
        <div className="rotating-track">
          {rotatingItems.map((item, index) => (
            <span key={index}>
              {item} <b>✹</b>
            </span>
          ))}
        </div>
      </div>

      <motion.img
        src="/images/Darbaan.png"
        alt="Waffle Girl"
        className="waffle-girl"
        initial={{ opacity: 0, y: -80, rotate: 8 }}
        whileInView={{ opacity: 1, y: 0, rotate: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: false }}
      />
    </section>
  );
}
