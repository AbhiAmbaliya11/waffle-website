"use client";
import Link from "next/link";

import { motion } from "framer-motion";
import { ChevronLeft, ChevronRight, ArrowRight } from "lucide-react";

type SlideType = {
  image: string;
  title: string;
  subtitle: string;
};

type ImageSliderSectionProps = {
  slides: SlideType[];
  currentSlide: number;
  setCurrentSlide: React.Dispatch<React.SetStateAction<number>>;
  prevSlide: () => void;
  nextSlide: () => void;
};

export default function ImageSliderSection({
  slides,
  currentSlide,
  setCurrentSlide,
  prevSlide,
  nextSlide,
}: ImageSliderSectionProps) {
  return (
    <section className="image-slider-section">
      <div className="slider-heading section-title">
        <h2>Taste the <span>Magic of Waffles</span></h2>
      </div>

      <div className="image-slider">

        <motion.img
          key={currentSlide}
          src={slides[currentSlide].image}
          alt={slides[currentSlide].title}
          className="slider-image"
          initial={{ opacity: 0, scale: 1.08 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.7 }}
        />

        <div className="slider-content-box">
          <motion.p
            key={`sub-${currentSlide}`}
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            {slides[currentSlide].subtitle}
          </motion.p>
          <motion.h3
            key={`title-${currentSlide}`}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
          >
            {slides[currentSlide].title}
          </motion.h3>
        </div>

        <button
          type="button"
          onClick={prevSlide}
          className="image-slider-btn prev"
          aria-label="Previous Slide"
        >
          <ChevronLeft size={24} />
        </button>
        <button
          type="button"
          onClick={nextSlide}
          className="image-slider-btn next"
          aria-label="Next Slide"
        >
          <ChevronRight size={24} />
        </button>
      </div>

      <div className="image-slider-dots">
        {slides.map((_, index) => (
          <button
            key={index}
            type="button"
            onClick={() => setCurrentSlide(index)}
            className={currentSlide === index ? "active" : ""}
          />
        ))}
      </div>
    </section>
  );
}
