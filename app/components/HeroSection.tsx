"use client";
import Link from "next/link";

import { motion } from "framer-motion";
import { ChevronLeft, ChevronRight, ArrowRight } from "lucide-react";

export default function HeroSection() {
  return (
    <section className="hero">
      <video
        className="hero-video"
        src="/videos/Gems_waffle-copy.mp4"
        autoPlay
        muted
        loop
        playsInline
      />

      <div className="hero-overlay" />

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
          Indulge in the rich taste of our signature Royal Waffle, crafted to perfection with premium ingredients. Crispy on the outside and soft on the inside, every bite delivers a delightful blend of flavor and texture.
        </p>

        <Link
          href="/royal-products"
          className="cta-btn flex items-center gap-2"
        >
          Explore Our Menu
          <ArrowRight size={20} />
        </Link>
      </motion.div>
    </section>
  );
}
