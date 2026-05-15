"use client";

import { useEffect, useRef } from "react";
import { motion } from "framer-motion";

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
          className="celebrate-left"
          initial={{ opacity: 0, x: -70 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: false }}
        >
          <h2>
            CELEBRATE <br />
            <span>with waffles</span>
          </h2>

          <p>
            Got plans? We’ve got waffles. <br />
            From <b>small parties and weddings to concerts and corporate events</b>,
            our live stations are always the crowd favourite—crispy, indulgent,
            and hard to miss.
          </p>

          <button>Host with us</button>
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
            <img src="/images/menu-waffwich.png" alt="Event" />
          </motion.div>

          <motion.div
            className="event-photo small-photo"
            initial={{ x: -80, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.9, delay: 0.2 }}
            viewport={{ once: false }}
          >
            <img src="/images/waffle-main.png" alt="Event Small" />
          </motion.div>
        </motion.div>

        <motion.img
          src="/images/Prince_1.png"
          alt="Whistle Man"
          className="whistle-man"
          initial={{ opacity: 0, y: -160, x: 120 }}
          whileInView={{ opacity: 1, y: 0, x: 0 }}
          transition={{ duration: 1, ease: "easeOut" }}
          viewport={{ once: false }}
        />
      </div>
    </section>
  );
}