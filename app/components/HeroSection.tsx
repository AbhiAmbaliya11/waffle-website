"use client";

import { motion } from "framer-motion";
import { ChevronLeft, ChevronRight, ArrowRight } from "lucide-react";

export default function HeroSection() {
  return (
    <section className="hero">
      <video
        className="hero-video"
        src="/videos/waffle-video.mp4"
        autoPlay
        muted
        loop
        playsInline
      />

      <div className="hero-overlay" />

      <button className="slider-btn left" type="button">
        <ChevronLeft />
      </button>

      <button className="slider-btn right" type="button">
        <ChevronRight />
      </button>

      <motion.div
        className="hero-content"
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
      >
        <p className="script-text">Waffle Castle</p>

        <h1>
          TASTE THE <br />
          <span>ROYAL WAFFLE</span>
        </h1>

        <p className="desc">
          Flipping golden waffles to perfection, crispy and fluffy.
        </p>

        <button className="cta-btn" type="button">
          Explore Our Menu <ArrowRight size={20} />
        </button>
      </motion.div>

      <div className="dots">
        <span className="active" />
        <span />
        <span />
        <span />
      </div>
    </section>
  );
}
