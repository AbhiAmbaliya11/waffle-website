"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { Menu, X, ChevronRight, ArrowRight } from "lucide-react";
import { useState } from "react";
import { usePathname } from "next/navigation";

const navItems = [
  { label: "Home", href: "/" },
  { label: "Our Journey", href: "/our-journey" },
  { label: "Royal Products", href: "/royal-products" },
  { label: "Castle Locator", href: "#locator" },
  { label: "Franchises", href: "#franchise" },
  { label: "Royal Events", href: "#events" },
  { label: "Royal Moments", href: "#moments" },
  { label: "Contact Us", href: "#contact" },
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
  const pathname = usePathname();

  return (
    <header className="site-header">
      <motion.nav
        className="desktop-nav"
        initial={{ y: -80, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.85, ease: "easeOut" }}
      >
        <motion.div
          className="nav-group"
          variants={navGroupVariants}
          initial="hidden"
          animate="visible"
        >
          {navItems.slice(0, 4).map((item) => (
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

        <div className="logo-wrap">
          <motion.img
            src="/images/logo.png"
            alt="Waffle Logo"
            className="logo"
            animate={{ rotate: [0, 6, 0], scale: [1, 1.03, 1] }}
            transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
          />
        </div>

        <motion.div
          className="nav-group"
          variants={navGroupVariants}
          initial="hidden"
          animate="visible"
        >
          {navItems.slice(4).map((item) => (
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

        <div className="mobile-brand">
          <img src="/images/logo.png" alt="Logo" className="mobile-logo" />
          <span>Royal Castle</span>
        </div>

        <button className="icon-btn" type="button">
          <ChevronRight size={28} />
        </button>
      </div>

      {open && (
        <motion.div
          className="mobile-menu"
          initial={{ x: "-100%" }}
          animate={{ x: 0 }}
          transition={{ duration: 0.4 }}
        >
          <div className="mobile-menu-top">
            <img src="/images/logo.png" alt="Logo" className="mobile-logo" />
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
                >
                  {item.label}
                  <ChevronRight size={22} />
                </Link>
              ) : (
                <a key={item.label} href={item.href}>
                  {item.label}
                  <ChevronRight size={22} />
                </a>
              )
            ))}
          </div>

          <div className="mobile-bottom">
            <p>Made to Crave.</p>
            <h3>Moments to Cherish.</h3>
            <button type="button">
              Explore Our Menu <ArrowRight size={18} />
            </button>
          </div>
        </motion.div>
      )}
    </header>
  );
}
