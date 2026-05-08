"use client";

import { useEffect, useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";

export default function FranchiseSection() {
  const sectionRef = useRef<HTMLElement | null>(null);
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"],
  });

  const figureX = useTransform(scrollYProgress, [0, 1], [0, 120]);
  const figureY = useTransform(scrollYProgress, [0, 1], [-130, 0]);
  const actionX = useTransform(scrollYProgress, [0, 1], [-60, 0]);

  useEffect(() => {
    const section = sectionRef.current;
    if (!section) return;

    const handleIntersection = (entries: IntersectionObserverEntry[]) => {
      entries.forEach((entry) => {
        if (!entry.isIntersecting) return;

        try {
          const AudioContextClass = window.AudioContext ?? (window as any).webkitAudioContext;
          if (!AudioContextClass) return;

          const audioCtx = new AudioContextClass();
          const osc = audioCtx.createOscillator();
          const gain = audioCtx.createGain();

          osc.type = "triangle";
          osc.frequency.value = 440;
          gain.gain.value = 0.14;

          osc.connect(gain);
          gain.connect(audioCtx.destination);

          osc.start();
          osc.frequency.exponentialRampToValueAtTime(720, audioCtx.currentTime + 0.45);
          gain.gain.exponentialRampToValueAtTime(0.001, audioCtx.currentTime + 0.6);
          osc.stop(audioCtx.currentTime + 0.62);
        } catch (error) {
          // ignore audio errors in unsupported browsers
        }
      });
    };

    const observer = new IntersectionObserver(handleIntersection, {
      threshold: 0.35,
    });
    observer.observe(section);

    return () => observer.disconnect();
  }, []);

  return (
    <section className="franchise-section" ref={sectionRef}>
      <div className="franchise-inner">
        <motion.div
          className="franchise-copy"
          initial={{ opacity: 0, x: -60 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.9, ease: "easeOut" }}
          viewport={{ once: false, amount: 0.4 }}
        >
          <div className="franchise-label">CELEBRATE WITH WAFFLES</div>
          <h2>
            Celebrate <span>with waffles</span>
          </h2>
          <p>
            Got plans? We’ve got waffles. From small parties and weddings to
            concerts and corporate events, our live stations are always the
            crowd favourite—crispy, indulgent, and hard to miss.
          </p>
          <button type="button" className="franchise-btn">
            Host with us
          </button>
        </motion.div>

        <div className="franchise-visual">
          <motion.div
            className="visual-stack"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, ease: "easeOut" }}
            viewport={{ once: false, amount: 0.4 }}
          >
            <div className="frame-big">
              <img
                src="/images/slide-1.jpg"
                alt="Waffle event"
                className="franchise-image"
              />
            </div>
            <div className="frame-small">
              <img
                src="/images/slide-2.jpg"
                alt="Waffle crowd"
                className="franchise-image"
              />
            </div>
          </motion.div>

          <div className="action-zone">
            <div className="action-line" />
            <motion.div
              className="franchise-figure"
              style={{ x: figureX, y: figureY }}
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
              viewport={{ once: false, amount: 0.35 }}
            >
              <img src="/images/man2.svg" alt="Man celebrating" />
            </motion.div>
            <motion.div
              className="sound-pill"
              style={{ x: actionX }}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, ease: "easeOut", delay: 0.15 }}
              viewport={{ once: false, amount: 0.35 }}
            >
              sound on
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
