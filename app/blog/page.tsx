"use client";

import { useMemo, useState } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { Search, Calendar, Clock, ArrowRight, BookOpen } from "lucide-react";
import Footer from "../components/Footer";
import { blogPosts } from "./data";
import "./blog.css";

const categories = [
  "All",
  "Waffle Science",
  "Innovation",
  "Inspiration",
  "History",
  "Behind the Scenes"
];

export default function BlogPage() {
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("All");

  // Filter posts based on search query and category
  const gridPosts = useMemo(() => {
    return blogPosts.filter((post) => {
      const matchesCategory =
        selectedCategory === "All" || post.category === selectedCategory;
      const matchesSearch =
        post.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
        post.excerpt.toLowerCase().includes(searchQuery.toLowerCase()) ||
        post.category.toLowerCase().includes(searchQuery.toLowerCase());
      return matchesCategory && matchesSearch;
    });
  }, [searchQuery, selectedCategory]);

  return (
    <main className="blog-page">
      <div className="blog-container">
        {/* Hero Banner Section */}
        <section className="blog-hero">
          <span className="section-pill">Our Blog</span>
          <h1>
            Waffle Wisdom & <span>Sweet Stories</span>
          </h1>
          <p>
            Welcome to the official Waffle Castle blog. Step inside our world of culinary craftsmanship,
            sweet history, event diaries, and secret dessert pairings.
          </p>
        </section>

        {/* Main Grid Section */}
        <section className="grid-section">
          {gridPosts.length > 0 ? (
            <motion.div className="blog-grid" layout>
              <AnimatePresence mode="popLayout">
                {gridPosts.map((post, index) => (
                  <motion.article
                    key={post.slug}
                    className="blog-card"
                    layout
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, scale: 0.9 }}
                    transition={{
                      duration: 0.5,
                      delay: index * 0.05,
                      layout: { duration: 0.3 }
                    }}
                  >
                    <div className="card-image-wrap">
                      <img src={post.image} alt={post.title} />
                      <span className="card-tag">{post.category}</span>
                    </div>
                    <div className="card-body">
                      <div className="card-meta">
                        <span className="inline-flex items-center gap-1">
                          <Calendar size={13} /> {post.date}
                        </span>
                        <span>•</span>
                        <span className="inline-flex items-center gap-1">
                          <Clock size={13} /> {post.readTime}
                        </span>
                      </div>
                      <h3>{post.title}</h3>
                      <p>{post.excerpt}</p>

                      <div className="card-footer">
                        <div className="card-author">
                          <div className="card-author-avatar">
                            {post.author.split(" ").map((n) => n[0]).join("")}
                          </div>
                          <span className="card-author-name">{post.author}</span>
                        </div>
                        <Link href={`/blog/${post.slug}`} className="card-link">
                          Read <ArrowRight size={14} />
                        </Link>
                      </div>
                    </div>
                  </motion.article>
                ))}
              </AnimatePresence>
            </motion.div>
          ) : (
            <div className="no-results">
              <BookOpen size={48} className="mx-auto mb-4 opacity-50" />
              <h3>No Articles Found</h3>
              <p>We couldn't find any articles matching your search query. Try another keyword or filter!</p>
            </div>
          )}
        </section>
      </div>
      <Footer />
    </main>
  );
}
