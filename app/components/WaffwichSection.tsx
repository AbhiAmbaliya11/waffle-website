"use client";

import { motion } from "framer-motion";

export default function WaffwichSection() {
  return (
    <section className="waffwich-section">
      <motion.div
        className="waffwich-content"
        initial={{ opacity: 0, y: 80 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.9 }}
        viewport={{ once: false, amount: 0.35 }}
      >
        <motion.h2
          initial={{ opacity: 0, scale: 0.85 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.9 }}
          viewport={{ once: false }}
        >
          The <br />
          Original <br />
          Waffle <br />
          Castle
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 45 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, delay: 0.25 }}
          viewport={{ once: false }}
        >
          The first waffle made to move with your cravings. Freshly baked,
          chocolate-loaded, and crafted for every hangout, midnight mood,
          celebration, and sweet escape.
        </motion.p>
      </motion.div>
    </section>
  );
}
