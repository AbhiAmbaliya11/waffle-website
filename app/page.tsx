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
  "/images/slide-1.jpg",
  "/images/slide-2.jpg",
  "/images/slide-3.jpg",
];

const menuItems = [
  {
    title: "Waff-wiches",
    desc: "Crispy, loaded, and made for every waffle craving.",
    image: "/images/menu-waffwich.png",
  },
  {
    title: "Beverages",
    desc: "Shakes, coffees, and coolers that know exactly how to keep up with a waffle.",
    image: "/images/menu-beverages.png",
  },
  {
    title: "Sundaes",
    desc: "Creamy, crunchy, chocolatey layers built for pure indulgence.",
    image: "/images/menu-sundaes.png",
  },
  {
    title: "Cakes",
    desc: "Decadent waffle layers that rise to every occasion. Literally.",
    image: "/images/menu-cakes.png",
  },
  {
    title: "Gourmet Waffles",
    desc: "Premium waffles crafted with rich toppings and signature flavours.",
    image: "/images/menu-gourmet.png",
  },
  {
    title: "Mini Waff-wiches",
    desc: "Small in size, big on taste. Perfect for quick cravings.",
    image: "/images/menu-mini.png",
  },
  {
    title: "Take-home Favourites",
    desc: "Your favourite waffle moments packed to enjoy anywhere.",
    image: "/images/menu-takehome.png",
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
