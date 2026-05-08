"use client";

import { motion } from "framer-motion";

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
      <div className="showstopper-top">
        <motion.h2
          initial={{ opacity: 0, y: 45 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: false }}
        >
          MEET THE <br />
          <span>show-stopper</span>
        </motion.h2>
      </div>

      <div className="showstopper-wrap">
        <motion.div
          className="showstopper-image-box"
          key={activeMenu}
          initial={{ opacity: 0, scale: 0.85, rotate: -4 }}
          animate={{ opacity: 1, scale: 1, rotate: 0 }}
          transition={{ duration: 0.45 }}
        >
          <div className="yellow-doodle" />
          <img src={menuItems[activeMenu].image} alt={menuItems[activeMenu].title} />
        </motion.div>

        <div className="showstopper-list">
          {menuItems.map((item, index) => (
            <div
              key={item.title}
              className={`showstopper-item ${activeMenu === index ? "active" : ""}`}
              onMouseEnter={() => setActiveMenu(index)}
              onClick={() => setActiveMenu(index)}
            >
              <h3>{item.title}</h3>

              {activeMenu === index && (
                <motion.p
                  initial={{ opacity: 0, y: 12 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.3 }}
                >
                  {item.desc}
                </motion.p>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
