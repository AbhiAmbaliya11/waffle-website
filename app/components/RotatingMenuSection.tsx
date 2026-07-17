"use client";

import { motion } from "framer-motion";

const rotatingItems = [
  "Waffle",
  "Mini Pancake",
  "Shakes & Beverages",
  "Waffle Stick",
  "Royal Sweet Deals",
  "Waffle Cake",
  "Waffle",
  "Mini Pancake",
  "Shakes & Beverages",
  "Waffle Stick",
  "Royal Sweet Deals",
  "Waffle Cake",
];

const repeatingItems = Array(6).fill(rotatingItems).flat();

export default function RotatingMenuSection() {
  return (
    <section className="rotating-menu-section">
      <div className="wavy-marquee-container">
        <svg
          viewBox="0 0 1440 320"
          className="wavy-marquee-svg"
          xmlns="http://www.w3.org/2000/svg"
        >
          <defs>
            <path
              id="wave-path"
              d="M -100,160 Q 185,105 470,160 T 1040,160 T 1610,160"
              fill="none"
            />
          </defs>
          <use href="#wave-path" className="wavy-ribbon-bg" fill="none" />
          <text className="wavy-marquee-text" dy="12">
            <textPath href="#wave-path" startOffset="0%">
              {repeatingItems.map((item, index) => (
                <tspan key={index}>
                  {item} <tspan className="star-separator">✹</tspan>{" "}
                </tspan>
              ))}
              <animate
                attributeName="startOffset"
                from="0%"
                to="-100%"
                dur="45s"
                repeatCount="indefinite"
              />
            </textPath>
          </text>
        </svg>
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
