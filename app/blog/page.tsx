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

  // Dynamic description computed from existing blog data and user selection/search
  const dynamicDescription = useMemo(() => {
    if (searchQuery) {
      return (
        <>
          Showing <strong className="highlight">{gridPosts.length}</strong> {gridPosts.length === 1 ? "article" : "articles"} matching &ldquo;{searchQuery}&rdquo; out of our <strong className="highlight">{blogPosts.length}</strong> total chronicles. Find your next sweet craving!
        </>
      );
    }

    const categoryPosts = blogPosts.filter((post) => post.category === selectedCategory);
    const count = categoryPosts.length;

    switch (selectedCategory) {
      case "Waffle Science":
        return (
          <>
            Explore the physics and chemistry of baking. Currently featuring <strong className="highlight">{count}</strong> scientific guides covering gluten structure, leavening techniques, and the optimal iron temperature for that perfect crisp.
          </>
        );
      case "Innovation":
        return (
          <>
            Discover how we push culinary boundaries. Read about the journey of our signature <strong className="highlight">Waffwich</strong> and how we're reimagining sweet and savory waffle concepts.
          </>
        );
      case "Inspiration":
        return (
          <>
            Get inspired with expert styling and topping guides. Explore <strong className="highlight">{count}</strong> masterclasses on chocolate layering, fruit pairings, and creating royal dessert experiences.
          </>
        );
      case "History":
        return (
          <>
            Journey through the rich origin stories of waffles. Tracing the evolution from ancient Greek <strong className="highlight">obelios</strong> to traditional street food in Brussels and Liège.
          </>
        );
      case "Behind the Scenes":
        return (
          <>
            Go behind the scenes of our operations. Discover what it takes to serve hundreds of fresh, hot waffles with our <strong className="highlight">live counter catering</strong> at royal events.
          </>
        );
      case "All":
      default:
        const totalMin = blogPosts.reduce((acc, p) => acc + parseInt(p.readTime), 0);
        return (
          <>
            Welcome to the official Waffle Castle blog. Step inside our world of culinary craftsmanship, sweet history, and dessert pairings. We have <strong className="highlight">{blogPosts.length}</strong> articles across <strong className="highlight">{categories.length - 1}</strong> categories, totaling over <strong className="highlight">{totalMin} minutes</strong> of read time.
          </>
        );
    }
  }, [selectedCategory, searchQuery, gridPosts.length]);

  return (
    <main className="blog-page">
      <div className="blog-container">
        {/* Hero Banner Section */}
        <section className="blog-hero">
          <span className="section-pill">Our Blog</span>
          <h1>
            Waffle Wisdom & <span>Sweet Stories</span>
          </h1>
          <p>{dynamicDescription}</p>
        </section>

        {/* Controls: Search and Filters */}
        <section className="blog-controls">
          <div className="search-wrapper">
            <Search className="search-icon-inside" size={20} />
            <input
              type="text"
              placeholder="Search articles..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="search-input"
            />
          </div>
          <div className="filter-categories">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setSelectedCategory(category)}
                className={`filter-tab ${selectedCategory === category ? "active" : ""}`}
              >
                {category}
              </button>
            ))}
          </div>
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
