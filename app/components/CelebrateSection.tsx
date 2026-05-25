"use client";
import Link from "next/link";

import { useEffect, useRef } from "react";

import { motion } from "framer-motion";
import { ChevronLeft, ChevronRight, ArrowRight, Gift } from "lucide-react";

export default function CelebrateSection() {
  const eventSectionRef = useRef<HTMLElement | null>(null);

  useEffect(() => {
    const audio = new Audio("/audio/whistle.mp3");
    audio.volume = 0.5;
    audio.preload = "auto";

    const playPending = { current: false };

    const tryPlayAudio = () => {
      if (!audio) return;
      const playPromise = audio.play();
      if (playPromise && typeof playPromise.catch === "function") {
        playPromise.catch(() => {
          playPending.current = true;
        });
      }
    };

    const unlockAudio = () => {
      if (!audio) return;
      audio.play().catch(() => { });
      playPending.current = false;
      document.removeEventListener("pointerdown", unlockAudio);
      document.removeEventListener("keydown", unlockAudio);
    };

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            audio.currentTime = 0;
            tryPlayAudio();
          } else {
            audio.pause();
            audio.currentTime = 0;
          }
        });
      },
      { threshold: 0.45 }
    );

    if (eventSectionRef.current) {
      observer.observe(eventSectionRef.current);
    }

    document.addEventListener("pointerdown", unlockAudio, { once: true });
    document.addEventListener("keydown", unlockAudio, { once: true });

    return () => {
      observer.disconnect();
      document.removeEventListener("pointerdown", unlockAudio);
      document.removeEventListener("keydown", unlockAudio);
    };
  }, []);

  return (
    <section className="celebrate-section" ref={eventSectionRef}>
      <div className="celebrate-content">
        <motion.div
          className="celebrate-left section-title"
          initial={{ opacity: 0, x: -70 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: false }}
        >
          <div className="celebrate-pill">
            BIRTHDAY ROYAL PRIVILEGE
          </div>

          <h2>
            FREE Signature Waffle on
            <span> Your Birthday</span>
          </h2>

          <p>
            On any purchase of ₹199+. Also receive your exclusive{" "}
            <span className="highlight-crown">Waffle King / Queen Crown</span> - wear it,
            celebrate it, flaunt it!
            <span className="availability-tag">
              *(As per availability)
            </span>
          </p>
        </motion.div>

        <motion.div
          className="celebrate-images"
          initial={{ opacity: 0, scale: 0.8 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.9 }}
          viewport={{ once: false }}
        >
          <motion.div
            className="event-photo main-photo"
            initial={{ x: 100, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.9 }}
            viewport={{ once: false }}
          >
            <img src="/images/birthday-waffle.png" alt="Free Signature Waffle" />
          </motion.div>

          {/* <motion.div
            className="event-photo small-photo"
            initial={{ x: -80, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.9, delay: 0.2 }}
            viewport={{ once: false }}
          >
            <img src="/images/menu-cakes.png" alt="Waffle Birthday Celebration" />
          </motion.div> */}
        </motion.div>

        {/* <motion.img
          src="/images/Prince_1.png"
          alt="Royal Prince"
          className="whistle-man"
          initial={{ opacity: 0, y: -160, x: 120 }}
          whileInView={{ opacity: 1, y: 0, x: 0 }}
          transition={{ duration: 1, ease: "easeOut" }}
          viewport={{ once: false }}
        /> */}
      </div>
    </section>
  );
}