"use client";

import { use, useMemo } from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { 
  ArrowLeft, 
  Calendar, 
  Clock, 
  Link2,
  ArrowRight
} from "lucide-react";
import {
  FaFacebookF,
  FaInstagram,
  FaLinkedinIn,
  FaXTwitter,
} from "react-icons/fa6";
import Footer from "../../components/Footer";
import { blogPosts } from "../data";
import "../blog.css";

interface PageProps {
  params: Promise<{ slug: string }>;
}

export default function BlogPostPage({ params }: PageProps) {
  // In Next.js 15+/16, params is a Promise. We resolve it using React's use() hook.
  const resolvedParams = use(params);
  const slug = resolvedParams.slug;

  // Find the current blog post
  const post = useMemo(() => {
    return blogPosts.find((p) => p.slug === slug);
  }, [slug]);

  // Find 2 related posts (excluding current post)
  const relatedPosts = useMemo(() => {
    if (!post) return [];
    return blogPosts
      .filter((p) => p.slug !== post.slug)
      .slice(0, 2);
  }, [post]);

  // Handle case where post is not found
  if (!post) {
    return (
      <main className="blog-page">
        <div className="blog-container text-center py-20">
          <h2 className="text-2xl font-bold mb-4">Article Not Found</h2>
          <p className="mb-8">The royal chronicles do not contain this article.</p>
          <Link href="/blog" className="blog-back-btn">
            <ArrowLeft size={16} /> Return to Blog
          </Link>
        </div>
        <Footer />
      </main>
    );
  }

  return (
    <main className="blog-detail-page">
      <div className="blog-container">
        {/* Back Link */}
        <Link href="/blog" className="blog-back-btn">
          <ArrowLeft size={16} /> Back to Chronicles
        </Link>

        <article className="article-wrapper">
          {/* Header */}
          <header className="article-header">
            <span className="section-pill">{post.category}</span>
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              {post.title}
            </motion.h1>

            <div className="article-header-meta">
              <div className="article-author-card">
                <div className="article-author-avatar">
                  {post.author.split(" ").map((n) => n[0]).join("")}
                </div>
                <div className="article-author-info">
                  <h4>{post.author}</h4>
                  <span>{post.authorRole}</span>
                </div>
              </div>

              <span className="article-meta-item">
                <Calendar size={16} /> {post.date}
              </span>

              <span className="article-meta-item">
                <Clock size={16} /> {post.readTime}
              </span>
            </div>
          </header>

          {/* Banner Image */}
          <motion.div 
            className="article-banner"
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8 }}
          >
            <img src={post.image} alt={post.title} />
          </motion.div>

          {/* Body Content */}
          <div className="article-body-wrapper">
            <div 
              className="article-content"
              dangerouslySetInnerHTML={{ __html: post.content }}
            />

            {/* Footer / Share actions */}
            <footer className="article-footer">
              <div className="article-share-links">
                <span>Share this article:</span>
                <button className="share-btn" title="Share on Facebook" type="button">
                  <FaFacebookF size={16} />
                </button>
                <button className="share-btn" title="Share on X" type="button">
                  <FaXTwitter size={16} />
                </button>
                <button className="share-btn" title="Share on Instagram" type="button">
                  <FaInstagram size={16} />
                </button>
                <button className="share-btn" title="Share on LinkedIn" type="button">
                  <FaLinkedinIn size={16} />
                </button>
                <button className="share-btn" title="Copy Link" type="button">
                  <Link2 size={16} />
                </button>
              </div>
            </footer>
          </div>
        </article>

        {/* Read Next Section */}
        {relatedPosts.length > 0 && (
          <section className="related-section">
            <h2>Read Next</h2>
            <div className="blog-grid">
              {relatedPosts.map((rPost) => (
                <article key={rPost.slug} className="blog-card">
                  <div className="card-image-wrap">
                    <img src={rPost.image} alt={rPost.title} />
                    <span className="card-tag">{rPost.category}</span>
                  </div>
                  <div className="card-body">
                    <div className="card-meta">
                      <span className="inline-flex items-center gap-1">
                        <Calendar size={13} /> {rPost.date}
                      </span>
                      <span>•</span>
                      <span className="inline-flex items-center gap-1">
                        <Clock size={13} /> {rPost.readTime}
                      </span>
                    </div>
                    <h3>{rPost.title}</h3>
                    <p>{rPost.excerpt}</p>
                    <div className="card-footer">
                      <div className="card-author">
                        <div className="card-author-avatar">
                          {rPost.author.split(" ").map((n) => n[0]).join("")}
                        </div>
                        <span className="card-author-name">{rPost.author}</span>
                      </div>
                      <Link href={`/blog/${rPost.slug}`} className="card-link">
                        Read <ArrowRight size={14} />
                      </Link>
                    </div>
                  </div>
                </article>
              ))}
            </div>
          </section>
        )}
      </div>
      <Footer />
    </main>
  );
}
