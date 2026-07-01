"use client";

import { useState, useMemo } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Trophy, Crown, Milestone, Award, ShieldCheck, Heart, ArrowRight } from "lucide-react";
import Link from "next/link";
import Footer from "../components/Footer";
import "./achievements.css";

const categories = ["All", "Awards", "Milestones"];

const achievementsData = [
  {
    id: 1,
    title: "Best Dessert Brand of the Year",
    issuer: "National Bakery & Dessert Expo",
    year: "2025",
    category: "Awards",
    description: "Awarded for exceptional waffle recipes, consistency in quality, and outstanding customer feedback across all Waffle Castle franchise outlets.",
    icon: Trophy,
  },
  {
    id: 2,
    title: "Fastest Growing QSR Chain",
    issuer: "India Food Service Forum",
    year: "2024",
    category: "Awards",
    description: "Recognized as the fastest-growing dessert QSR chain in the region, growing from a single passion project to a multi-city waffle empire.",
    icon: Crown,
  },
  {
    id: 3,
    title: "1 Million Waffles Served",
    issuer: "Royal Milestone Celebration",
    year: "2024",
    category: "Milestones",
    description: "Successfully handcrafted and served over one million crispy, golden waffles to dessert lovers, spreading sweet smiles across the kingdom.",
    icon: Milestone,
  },
  {
    id: 4,
    title: "Culinary Excellence in Desserts",
    issuer: "Grand Gourmet Awards",
    year: "2024",
    category: "Awards",
    description: "Granted for our pioneering Waffwich concept and the introduction of unique, high-quality ingredients to the street-side dessert ecosystem.",
    icon: Award,
  },
  {
    id: 5,
    title: "Eco-Friendly QSR Initiative",
    issuer: "Green Food Business Alliance",
    year: "2025",
    category: "Impact",
    description: "Honored for our commitment to sustainability by implementing plastic-free packaging, eco-friendly waffle trays, and energy-conserving bakers.",
    icon: ShieldCheck,
  },
  {
    id: 6,
    title: "Community Heart Award",
    issuer: "CSR Excellence Awards",
    year: "2025",
    category: "Impact",
    description: "Recognized for our monthly 'Sweet Smiles' program, serving free fresh waffles to local children's homes and hosting cooking workshops.",
    icon: Heart,
  },
];

export default function AchievementsPage() {
  const [activeCategory, setActiveCategory] = useState("All");

  const filteredAchievements = useMemo(() => {
    if (activeCategory === "All") return achievementsData;
    return achievementsData.filter((item) => item.category === activeCategory);
  }, [activeCategory]);

  return (
    <main className="achievements-page">
      {/* Hero Banner Section */}
      <section className="achievements-hero">
        <motion.div
          className="achievements-hero-content"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <span className="section-pill-achievement">Royal Accomplishments</span>
          <h1>
            Awards, Accolades & <span>Royal Milestones</span>
          </h1>
          <p>
            From a humble cart to a kingdom of sweetness. Explore the honors and milestones
            that define Waffle Castle's commitment to culinary excellence, growth, and community.
          </p>
        </motion.div>
      </section>

      {/* Category Filter Tabs */}
      <section className="filter-tabs-wrapper">
        <div className="filter-tabs">
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setActiveCategory(category)}
              className={`filter-btn ${activeCategory === category ? "active" : ""}`}
              type="button"
            >
              {category}
            </button>
          ))}
        </div>
      </section>

      {/* Achievements Cards Grid */}
      <section className="grid-container">
        <motion.div className="achievements-grid" layout>
          <AnimatePresence mode="popLayout">
            {filteredAchievements.map((item, index) => {
              const IconComponent = item.icon;
              return (
                <motion.article
                  key={item.id}
                  className="achievement-card"
                  layout
                  initial={{ opacity: 0, scale: 0.9, y: 20 }}
                  animate={{ opacity: 1, scale: 1, y: 0 }}
                  exit={{ opacity: 0, scale: 0.9, y: -20 }}
                  transition={{ duration: 0.5, delay: index * 0.05 }}
                >
                  <div className="card-top">
                    <div className="card-icon-wrap">
                      <IconComponent size={28} />
                    </div>
                    <span className="card-badge">{item.year}</span>
                  </div>
                  <div className="card-content">
                    <span className="card-issuer">{item.issuer}</span>
                    <h3>{item.title}</h3>
                    <p className="card-desc">{item.description}</p>
                  </div>
                </motion.article>
              );
            })}
          </AnimatePresence>
        </motion.div>
      </section>

      {/* Bottom CTA Block */}
      <section className="achievements-cta">
        <motion.div
          className="cta-container"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <div className="cta-inner">
            <h2>Ready to Taste the <span>Next Chapter?</span></h2>
            <p>
              Join the kingdom. Learn how you can partner with Waffle Castle as a franchisee
              or connect with our team to bring the royal treatment to your city.
            </p>
            <div className="cta-buttons">
              <Link href="/franchise" className="button-link primary">
                Explore Franchises <ArrowRight size={18} />
              </Link>
              <Link href="/contact-us" className="button-link secondary">
                Contact Us
              </Link>
            </div>
          </div>
        </motion.div>
      </section>

      <Footer />
    </main>
  );
}
