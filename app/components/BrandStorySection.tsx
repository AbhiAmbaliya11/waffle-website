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
        <img src="/images/biscuit-1.png" alt="Biscuit" className="biscuit biscuit-one" />
        <img src="/images/biscuit-2.png" alt="Biscuit" className="biscuit biscuit-two" />
        <img src="/images/menu-takehome.png" alt="Biscuit" className="biscuit biscuit-three" />
      </motion.div>

      <motion.div
        className="brand-story-content"
        initial={{ opacity: 0, y: 70 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.15 }}
        viewport={{ once: false }}
      >
        <h2>
          India’s <span>No 1</span> <br />
          Waffle Brand
        </h2>

        <p>
          We didn’t just bring waffles to India—we reimagined them.
          From crispy waffle bites to indulgent sundaes and shakes,
          every creation is made for celebration, cravings, and pure joy.
        </p>

        <h3>
          With 75+ stores across India, we’ve made waffles a nationwide obsession.
        </h3>

        <Link href="/our-journey" className="full-story">
          The full story
        </Link>
      </motion.div>
    </section>
  );
}
