"use client";

import { useMemo, useState } from "react";
import { motion } from "framer-motion";
import {
  ArrowRight,
  Crown,
  Sparkles,
  Coffee,
  Cake,
  PackageOpen,
  Star,
  ThumbsUp,
} from "lucide-react";
import Footer from "../components/Footer";
import "./royal-products.css";

const categories = [
  "Waffle",
  "Mini Pancake",
  "Shakes & Beverages",
  "Waffle Stick",
  "Sizzling Sweet Deals",
  "Waffle Cake",
];

const products = [
  {
    title: "Royal Belgian Waffle",
    category: "Waffle",
    image: "/images/waffle-main.png",
    label: "Classic royal crunch",
  },
  {
    title: "Choco Blast Waffle",
    category: "Waffle",
    image: "/images/menu-waffwich.png",
    label: "Double chocolate delight",
  },
  {
    title: "Honey Almond Waffle",
    category: "Waffle",
    image: "/images/menu-gourmet.png",
    label: "Golden nutty finish",
  },
  {
    title: "Strawberry Velvet Waffle",
    category: "Waffle",
    image: "/images/menu-cakes.png",
    label: "Fresh berry indulgence",
  },
  {
    title: "Berry Mini Pancake",
    category: "Mini Pancake",
    image: "/images/menu-mini.png",
    label: "Soft stack with fresh berries",
  },
  {
    title: "Caramel Bite Mini",
    category: "Mini Pancake",
    image: "/images/menu-mini.png",
    label: "Sticky caramel drizzle",
  },
  {
    title: "Nutella Dream Mini",
    category: "Mini Pancake",
    image: "/images/menu-mini.png",
    label: "Chocolate hazelnut bliss",
  },
  {
    title: "Velvet Pink Mini",
    category: "Mini Pancake",
    image: "/images/menu-mini.png",
    label: "Fruit-forward sweetness",
  },
  {
    title: "Royal Shake",
    category: "Shakes & Beverages",
    image: "/images/menu-beverages.png",
    label: "Creamy signature shake",
  },
  {
    title: "Cold Brew Royale",
    category: "Shakes & Beverages",
    image: "/images/menu-beverages.png",
    label: "Chilled coffee luxury",
  },
  {
    title: "Mango Royal Cooler",
    category: "Shakes & Beverages",
    image: "/images/menu-beverages.png",
    label: "Tropical refreshment",
  },
  {
    title: "Bubble Tea Royale",
    category: "Shakes & Beverages",
    image: "/images/menu-beverages.png",
    label: "Fun royal sip",
  },
  {
    title: "Cinnamon Waffle Stick",
    category: "Waffle Stick",
    image: "/images/menu-waffwich.png",
    label: "Spiced crispy twist",
  },
  {
    title: "Choco Dip Stick",
    category: "Waffle Stick",
    image: "/images/menu-waffwich.png",
    label: "Dipped in dark ganache",
  },
  {
    title: "Nutty Crunch Stick",
    category: "Waffle Stick",
    image: "/images/menu-waffwich.png",
    label: "Crunchy royal texture",
  },
  {
    title: "Golden Caramel Stick",
    category: "Waffle Stick",
    image: "/images/menu-waffwich.png",
    label: "Sweet caramel glaze",
  },
  {
    title: "Royal Dessert Box",
    category: "Sizzling Sweet Deals",
    image: "/images/menu-gourmet.png",
    label: "Shareable sweet feast",
  },
  {
    title: "Sunset Berry Box",
    category: "Sizzling Sweet Deals",
    image: "/images/menu-gourmet.png",
    label: "Fruit and chocolate mashup",
  },
  {
    title: "Golden Trio Box",
    category: "Sizzling Sweet Deals",
    image: "/images/menu-gourmet.png",
    label: "Three royal flavours",
  },
  {
    title: "Caramel Delight Box",
    category: "Sizzling Sweet Deals",
    image: "/images/menu-gourmet.png",
    label: "Rich drizzle indulgence",
  },
  {
    title: "Chocolate Waffle Cake",
    category: "Waffle Cake",
    image: "/images/menu-cakes.png",
    label: "Layered chocolate royalty",
  },
  {
    title: "Berry Celebration Cake",
    category: "Waffle Cake",
    image: "/images/menu-cakes.png",
    label: "Festive berry layers",
  },
  {
    title: "Vanilla Royale Cake",
    category: "Waffle Cake",
    image: "/images/menu-cakes.png",
    label: "Soft vanilla elegance",
  },
  {
    title: "Royal Slice Cake",
    category: "Waffle Cake",
    image: "/images/menu-cakes.png",
    label: "Perfect for every party",
  },
];

const features = [
  {
    title: "Category wise royalty",
    desc: "Quickly choose from 6 premium product categories with beautiful imagery.",
    icon: <Sparkles size={24} />,
  },
  {
    title: "Fresh & premium",
    desc: "Every product is designed for flavour, presentation, and royal taste.",
    icon: <Star size={24} />,
  },
  {
    title: "Ready to share",
    desc: "Perfect for orders, parties and family cravings.",
    icon: <ThumbsUp size={24} />,
  },
];

export default function RoyalProductsPage() {
  const [activeCategory, setActiveCategory] = useState("Waffle");

  const visibleProducts = useMemo(
    () => products.filter((item) => item.category === activeCategory),
    [activeCategory]
  );

  return (
    <main className="royal-products-page">
      <section className="products-hero">
        <div className="hero-copy">
          <span className="section-pill">Royal Products</span>
          <h1>Unleash your waffle cravings with our royal menu.</h1>
          <p>
            Discover every product category from rich waffles and mini pancakes to
            sizzling sweet deals and royal cakes — crafted for indulgence.
          </p>
          <div className="category-tabs">
            {categories.map((category) => (
              <button
                key={category}
                className={category === activeCategory ? "tab active" : "tab"}
                onClick={() => setActiveCategory(category)}
                type="button"
              >
                {category}
              </button>
            ))}
          </div>
        </div>

        <motion.div
          className="hero-panel"
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, ease: "easeOut" }}
        >
          <div className="hero-badge">
            <Crown size={24} />
            <span>Top Seller</span>
          </div>
          <h2>{activeCategory} Collection</h2>
          <p>
            Select a category to view curated royal products with delicious presentation and flavor.
          </p>
          <div className="hero-blocks">
            <div className="hero-block">
              <Sparkles size={26} />
              <div>
                <h3>Premium Menu</h3>
                <p>Signature products designed for the royal palate.</p>
              </div>
            </div>
            <div className="hero-block">
              <Coffee size={26} />
              <div>
                <h3>Freshness Daily</h3>
                <p>Made fresh, served warm, and delivered with care.</p>
              </div>
            </div>
          </div>
        </motion.div>
      </section>

      <section className="product-gallery" id="products">
        <div className="gallery-header">
          <div>
            <span className="section-pill">Product Gallery</span>
            <h2>{activeCategory} items that look and taste royal.</h2>
          </div>
          <a href="#contact" className="button secondary">
            Order Now
          </a>
        </div>

        <div className="product-grid">
          {visibleProducts.map((product, index) => (
            <motion.article
              key={product.title}
              className="product-card"
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.55, delay: index * 0.08 }}
            >
              <div className="product-image">
                <img src={product.image} alt={product.title} />
              </div>
              <div className="product-copy">
                <span>{product.category}</span>
                <h3>{product.title}</h3>
                <p>{product.label}</p>
              </div>
            </motion.article>
          ))}
        </div>
      </section>

      <section className="product-benefits">
        <div className="benefits-grid">
          {features.map((feature, index) => (
            <motion.div
              className="benefit-card"
              key={feature.title}
              initial={{ opacity: 0, scale: 0.96 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true, amount: 0.4 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <div className="benefit-icon">{feature.icon}</div>
              <h3>{feature.title}</h3>
              <p>{feature.desc}</p>
            </motion.div>
          ))}
        </div>
      </section>

      <Footer />
    </main>
  );
}
