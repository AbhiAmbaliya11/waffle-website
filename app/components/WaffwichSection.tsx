"use client";

import { motion } from "framer-motion";
import Link from "next/link";

const products = [
  {
    id: 1,
    title: "Gourmet Waffles",
    script: "to die for",
    image: "/images/menu-gourmet.png",
    bgColor: "#b28f6f",
    waveColor: "#a37e5d",
  },
  {
    id: 2,
    title: "Waffwich",
    script: "fresh from",
    image: "/images/menu-waffwich.png",
    bgColor: "#3e7c33",
    waveColor: "#326928",
  },
  {
    id: 3,
    title: "Mini Waffles",
    script: "new flavor",
    image: "/images/menu-mini.png",
    bgColor: "#d92d3b",
    waveColor: "#c22230",
  },
  {
    id: 4,
    title: "Waffle Cakes",
    script: "royal offers",
    image: "/images/menu-cakes.png",
    bgColor: "#e69e38",
    waveColor: "#d48d28",
  }
];

export default function WaffwichSection() {
  return (
    <section className="waffwich-section">
      <motion.div
        className="waffwich-header"
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: false, amount: 0.3 }}
      >
        <div className="waffwich-badge">
          <img src="/images/logo.png" alt="Logo Badge" />
        </div>
        <h2>The Original Waffle Castle</h2>
        <p>
          The first waffle made to move with your cravings. Freshly baked,
          chocolate-loaded, and crafted for every hangout, midnight mood,
          celebration, and sweet escape.
        </p>
      </motion.div>

      <div className="waffwich-grid">
        {products.map((product, i) => (
          <Link key={product.id} href="/royal-products" style={{ textDecoration: 'none' }}>
            <motion.div
              className="waffwich-card"
              style={{ backgroundColor: product.bgColor }}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: i * 0.15 }}
              viewport={{ once: false, amount: 0.2 }}
            >
              <div className="waffwich-img-wrapper">
                <img src={product.image} alt={product.title} className="waffwich-img" />
              </div>

              <svg
                className="waffwich-wave"
                viewBox="0 0 1440 320"
                preserveAspectRatio="none"
              >
                <path
                  fill={product.waveColor}
                  fillOpacity="1"
                  d="M0,192L48,197.3C96,203,192,213,288,229.3C384,245,480,267,576,250.7C672,235,768,181,864,181.3C960,181,1056,235,1152,234.7C1248,235,1344,181,1392,154.7L1440,128L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"
                ></path>
              </svg>

              <div className="waffwich-card-bottom" style={{ backgroundColor: product.waveColor }}>
                <p className="waffwich-script">{product.script}</p>
                <h3>{product.title}</h3>
              </div>
            </motion.div>
          </Link>
        ))}
      </div>
    </section>
  );
}
