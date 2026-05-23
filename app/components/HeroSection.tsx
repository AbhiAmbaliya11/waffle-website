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
          Experience the rich taste of royalty at Waffle Castle, where every waffle is crafted with premium ingredients, irresistible flavors, and a touch of elegance.
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
