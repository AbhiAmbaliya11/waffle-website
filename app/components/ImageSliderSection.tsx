"use client";
import Link from "next/link";

import { motion } from "framer-motion";
import { ChevronLeft, ChevronRight, ArrowRight } from "lucide-react";

type ImageSliderSectionProps = {
  slides: string[];
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
        <h2>Discover Our <span>Waffle World</span></h2>
      </div>

      <div className="image-slider">

        <motion.img
          key={currentSlide}
          src={slides[currentSlide]}
          alt="Waffle Slide"
          className="slider-image"
          initial={{ opacity: 0, scale: 1.08 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.7 }}
        />

        <div className="slider-content-box">
          <p>Premium Taste</p>
          <h3>Crafted for Real Waffle Lovers</h3>
          {/* <button type="button">
            View Menu <ArrowRight size={18} />
          </button> */}
          <Link
            href="/royal-products"
            className="cta-btn flex items-center gap-2"
          >
            View Menu
            <ArrowRight size={20} />
          </Link>
        </div>
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
