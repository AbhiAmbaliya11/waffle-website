"use client";

import { useEffect, useState } from "react";
import HeroSection from "./components/HeroSection";
import FranchiseSection from "./components/FranchiseSection";
import CelebrateSection from "./components/CelebrateSection";
import ImageSliderSection from "./components/ImageSliderSection";
import WaffwichSection from "./components/WaffwichSection";
import RotatingMenuSection from "./components/RotatingMenuSection";
import BrandStorySection from "./components/BrandStorySection";
import ShowstopperSection from "./components/ShowstopperSection";
import WaffleverseSection from "./components/WaffleverseSection";
import StoreSection from "./components/StoreSection";
import Footer from "./components/Footer";
import "./home.css";

const slides = [
  {
    image: "/images/image-slider-1.jpg",
    title: "Rich Chocolate Overload",
    subtitle: "Sweet Indulgence",
  },
  {
    image: "/images/image-slider-2.jpg",
    title: "Fresh Berry Bliss",
    subtitle: "Fruity Feast",
  },
  {
    image: "/images/image-slider-3.jpg",
    title: "Classic Golden Maple",
    subtitle: "Timeless Classic",
  },
];

const menuItems = [
  {
    title: "Waffle",
    desc: "Crispy, loaded, and made for every waffle craving.",
    image: "/images/wc-1.png",
  },
  {
    title: "Mini Pancake",
    desc: "Soft, fluffy bite-sized pancakes served with premium toppings.",
    image: "/images/wc-2.png",
  },
  {
    title: "Shakes and Beverages",
    desc: "Thick shakes, refreshing coolers, and royal brews.",
    image: "/images/wc-3.png",
  },
  {
    title: "Waffle Stick",
    desc: "Freshly baked waffles on a stick, perfect for on-the-go indulgence.",
    image: "/images/wc-4.png",
  },
  {
    title: "Sizzling Sweet Deals",
    desc: "Exclusive combos and dessert boxes for the ultimate sweet feast.",
    image: "/images/wc-5.png",
  },
  {
    title: "Waffle Cake",
    desc: "Decadent layered waffle cakes that rise to every royal occasion.",
    image: "/images/wc-6.png",
  },
];

export default function Home() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [activeMenu, setActiveMenu] = useState(1);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 3000);

    return () => clearInterval(timer);
  }, []);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % slides.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev === 0 ? slides.length - 1 : prev - 1));
  };

  return (
    <main className="home">
      <HeroSection />
      <ImageSliderSection
        slides={slides}
        currentSlide={currentSlide}
        setCurrentSlide={setCurrentSlide}
        prevSlide={prevSlide}
        nextSlide={nextSlide}
      />
      <WaffwichSection />
      <RotatingMenuSection />
      <BrandStorySection />
      <ShowstopperSection
        menuItems={menuItems}
        activeMenu={activeMenu}
        setActiveMenu={setActiveMenu}
      />
      <WaffleverseSection />
      <CelebrateSection />
      <StoreSection />
      <Footer />
    </main>
  );
}
