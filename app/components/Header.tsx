"use client";

import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, ChevronRight, ArrowRight } from "lucide-react";
import { useState, useEffect, useRef } from "react";
import { createPortal } from "react-dom";
import { usePathname } from "next/navigation";

const navItems = [
  { label: "Home", href: "/" },
  { label: "Our Journey", href: "/our-journey" },
  { label: "Royal Products", href: "/royal-products" },
  { label: "Castle Locator", href: "/castle-locator" },
  { label: "Franchises", href: "/franchise" },
  { label: "Royal Events", href: "/royal-events" },
  { label: "Blog", href: "/blog" },
  { label: "Contact Us", href: "/contact-us" },
];

const navGroupVariants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.08,
      delayChildren: 0.2,
    },
  },
};

const navItemVariants = {
  hidden: { opacity: 0, y: -16 },
  visible: { opacity: 1, y: 0 },
};

const isActiveLink = (pathname: string, href: string) => {
  if (href === "/") return pathname === "/";
  if (!href.startsWith("/")) return false;
  return pathname === href || pathname.startsWith(href);
};

export default function Header() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [mounted, setMounted] = useState(false);
  const pathname = usePathname();

  // Wait for client mount so createPortal has access to document.body
  useEffect(() => {
    setMounted(true);
  }, []);

  // Track scroll position to apply background on header
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    handleScroll();
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Lock body scroll while mobile sidebar is open
  useEffect(() => {
    if (open) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  // Close sidebar on route change
  useEffect(() => {
    setOpen(false);
  }, [pathname]);

  if (pathname?.startsWith("/admin")) {
    return null;
  }

  const mobileMenu = (
    <AnimatePresence>
      {open && (
        <motion.div
          className="mobile-menu"
          initial={{ x: "-100%" }}
          animate={{ x: 0 }}
          exit={{ x: "-100%" }}
          transition={{ duration: 0.4, ease: "easeOut" }}
        >
          <div className="mobile-menu-top">
            <Link href="/" onClick={() => setOpen(false)}>
              <img src="/images/logo.png" alt="Logo" className="mobile-logo" />
            </Link>
            <button onClick={() => setOpen(false)} className="icon-btn" type="button">
              <X size={30} />
            </button>
          </div>

          <div className="mobile-links">
            {navItems.map((item) => (
              item.href.startsWith("/") ? (
                <Link
                  key={item.label}
                  href={item.href}
                  className={isActiveLink(pathname, item.href) ? "active" : ""}
                  onClick={() => setOpen(false)}
                >
                  {item.label}
                  <ChevronRight size={22} />
                </Link>
              ) : (
                <a key={item.label} href={item.href} onClick={() => setOpen(false)}>
                  {item.label}
                  <ChevronRight size={22} />
                </a>
              )
            ))}
          </div>

          <div className="mobile-bottom">
            <p>Made to Crave.</p>
            <h3>Moments to Cherish.</h3>
            <Link href="/royal-products" className="mobile-bottom-button">
              Explore Our Menu <ArrowRight size={18} />
            </Link>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );

  return (
    <>
      <header className={`site-header${scrolled ? " scrolled" : ""}`}>
        <motion.nav
          className="desktop-nav-wrapper"
          initial={{ y: -80, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.85, ease: "easeOut" }}
        >
          <Link href="/" className="logo-wrap">
            <motion.img
              src="/images/logo.png"
              alt="Waffle Logo"
              className="logo"
              animate={{ rotate: [0, 6, 0], scale: [1, 1.03, 1] }}
              transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
            />
          </Link>

          <motion.div
            className="nav-group"
            variants={navGroupVariants}
            initial="hidden"
            animate="visible"
          >
            {navItems.map((item) => (
              <motion.div
                key={item.label}
                variants={navItemVariants}
                whileHover={{ y: -3, scale: 1.05 }}
                whileTap={{ scale: 0.98 }}
              >
                {item.href.startsWith("/") ? (
                  <Link
                    href={item.href}
                    className={isActiveLink(pathname, item.href) ? "active" : ""}
                  >
                    {item.label}
                  </Link>
                ) : (
                  <a href={item.href}>{item.label}</a>
                )}
              </motion.div>
            ))}
          </motion.div>
        </motion.nav>

        <div className="mobile-header">
          <button onClick={() => setOpen(true)} className="icon-btn" type="button">
            <Menu size={28} />
          </button>

          <Link href="/" className="mobile-brand">
            <img src="/images/logo.png" alt="Logo" className="mobile-logo" />
          </Link>

          <Link href="/contact-us" className="icon-btn">
            <ChevronRight size={28} />
          </Link>
        </div>
      </header>

      {/* Render mobile menu at document.body level via portal so it is never
          clipped by the header's stacking/containing-block context */}
      {mounted && createPortal(mobileMenu, document.body)}
    </>
  );
}
