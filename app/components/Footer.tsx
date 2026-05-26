import Link from "next/link";
import {
  FaFacebookF,
  FaInstagram,
  FaLinkedinIn,
  FaYoutube,
  FaXTwitter,
} from "react-icons/fa6";

const footerNavItems = [
  { label: "Home", href: "/" },
  { label: "Our Journey", href: "/our-journey" },
  { label: "Royal Products", href: "/royal-products" },
  { label: "Castle Locator", href: "/castle-locator" },
  { label: "Franchises", href: "/franchise" },
  { label: "Royal Events", href: "/royal-events" },
  { label: "Blog", href: "/blog" },
  { label: "Contact Us", href: "/contact-us" },
  { label: "Achievements", href: "/achievements" },
];

export default function Footer() {
  return (
    <footer className="footer-unique">
      {/* Melted Chocolate / Waffle Wave Top Divider */}


      <div className="footer-container">
        <div className="footer-grid">
          <div className="footer-brand-section">
            <Link href="/" className="footer-logo-link">
              <img src="/images/logo.png" alt="Waffle Castle Logo" className="footer-logo-large" />
            </Link>
            <p className="brand-pitch">
              Crafting royal moments through the art of perfectly crispy waffles.
              Join our kingdom of sweetness and experience luxury in every bite.
            </p>
            <div className="footer-social-unique">
              <a href="https://www.facebook.com/wafflecastleofficial" target="_blank" rel="noopener noreferrer"><FaFacebookF /></a>
              <a href="https://www.instagram.com/waffle_castle_official/" target="_blank" rel="noopener noreferrer"><FaInstagram /></a>
              <a href="https://www.linkedin.com/company/waffle-castle-official/" target="_blank" rel="noopener noreferrer"><FaLinkedinIn /></a>
              <a href="https://www.youtube.com/@WaffleCastle" target="_blank" rel="noopener noreferrer"><FaYoutube /></a>
              <a href="https://x.com/Waffle_castle" target="_blank" rel="noopener noreferrer"><FaXTwitter /></a>
            </div>
          </div>

          <div className="footer-nav-section">
            <div className="nav-col">
              <h4>Explore</h4>
              <ul className="footer-nav-list">
                {footerNavItems.slice(0, 5).map((item) => (
                  <li key={item.label}><Link href={item.href}>{item.label}</Link></li>
                ))}
              </ul>
            </div>
            <div className="nav-col">
              <h4>Company</h4>
              <ul className="footer-nav-list">
                {footerNavItems.slice(5).map((item) => (
                  <li key={item.label}><Link href={item.href}>{item.label}</Link></li>
                ))}
              </ul>
            </div>
          </div>

          <div className="footer-cta-section">
            <div className="cta-box">
              <h3>Join the Kingdom</h3>
              <p>Subscribe for royal offers and new menu launches.</p>
              <form className="footer-subscribe">
                <input type="email" placeholder="Your email" />
                <button type="submit">Join</button>
              </form>
            </div>
            <div className="footer-contact-info">
              <p>Email: <a href="mailto:info@wafflecastle.in">info@wafflecastle.in</a></p>
              <p>Phone: <a href="tel:+919537788817">+91 95377 88817</a></p>
            </div>
          </div>
        </div>

        <div className="footer-legal">
          <p>© 2026 WAFFLE CASTLE. Designed for Royalty.</p>
        </div>
      </div>
    </footer>
  );
}