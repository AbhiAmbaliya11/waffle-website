"use client";

import { motion } from "framer-motion";
import Link from "next/link";

export default function BrandStorySection() {
  return (
    <section className="brand-story-section">
      <motion.div
        className="brand-waffle-wrap"
        initial={{ opacity: 0, x: -80 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: false }}
      >
        <img src="/images/waffle-main.png" alt="Waffle" className="brand-main-waffle" />
      </motion.div>

      <motion.div
        className="brand-story-content section-title"
        initial={{ opacity: 0, y: 70 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.15 }}
        viewport={{ once: false }}
      >
        <h2>
          India’s <span>Royal</span> <br />
          Waffle Brand
        </h2>

        <p>
         In December 2023, two long-time friends, Jignesh Jadhav and Upendra Chauhan, took a bold step toward their shared dream. Leaving behind stable jobs, they set out to create something extraordinary. With a love for waffles and big ambitions, they launched a roadside food cart.
        </p>

        <h3>
          With 95+ stores across India, we’ve made waffles a nationwide obsession.
        </h3>

        <Link href="/our-journey" className="cta-btn white">
          The Full Story
        </Link>
      </motion.div>
    </section>
  );
}
