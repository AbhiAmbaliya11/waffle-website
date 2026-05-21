"use client";

import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";

type MenuItem = {
  title: string;
  desc: string;
  image: string;
};

type ShowstopperSectionProps = {
  menuItems: MenuItem[];
  activeMenu: number;
  setActiveMenu: React.Dispatch<React.SetStateAction<number>>;
};

export default function ShowstopperSection({
  menuItems,
  activeMenu,
  setActiveMenu,
}: ShowstopperSectionProps) {
  return (
    <section className="showstopper-section">
      <div className="showstopper-top section-title">
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: false }}
        >
          <h2>Meet The
            <span> show-stopper</span></h2>
        </motion.h2>
      </div>

      <div className="showstopper-wrap">
        <div className="showstopper-list-outer">
          <div className="showstopper-list">
            {menuItems.map((item, index) => (
              <div
                key={item.title}
                className={`showstopper-item ${activeMenu === index ? "active" : ""}`}
                onMouseEnter={() => setActiveMenu(index)}
                onClick={() => setActiveMenu(index)}
              >
                <div className="item-indicator" />
                <h3>{item.title}</h3>
              </div>
            ))}
          </div>
        </div>

        <div className="showstopper-display">
          <AnimatePresence mode="wait">
            <motion.div
              className="showstopper-display-content"
              key={activeMenu}
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -20 }}
              transition={{ duration: 0.4 }}
            >
              <div className="showstopper-image-box">
                <div className="yellow-doodle" />
                <img
                  src={menuItems[activeMenu].image}
                  alt={menuItems[activeMenu].title}
                  className="main-show-img"
                />
              </div>

              <div className="showstopper-info">
                <motion.p
                  initial={{ opacity: 0, y: 15 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.2 }}
                >
                  {menuItems[activeMenu].desc}
                </motion.p>
                <motion.div
                  initial={{ opacity: 0, y: 15 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.3 }}
                >
                  <Link href="/royal-products" className="explore-menu-btn">
                    Explore Menu
                  </Link>
                </motion.div>
              </div>
            </motion.div>
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
}
