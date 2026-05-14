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
  { label: "Contact Us", href: "/contact-us" },
];

export default function Footer() {
  return (
    <footer className="footer-unique">
      {/* Melted Chocolate / Waffle Wave Top Divider */}
      <div className="footer-divider">
        <svg data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none">
          <path d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V0H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z" className="shape-fill"></path>
        </svg>
      </div>

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
              <a href="https://facebook.com" target="_blank" rel="noopener noreferrer"><FaFacebookF /></a>
              <a href="https://instagram.com" target="_blank" rel="noopener noreferrer"><FaInstagram /></a>
              <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer"><FaLinkedinIn /></a>
              <a href="https://youtube.com" target="_blank" rel="noopener noreferrer"><FaYoutube /></a>
              <a href="https://x.com" target="_blank" rel="noopener noreferrer"><FaXTwitter /></a>
            </div>
          </div>

          <div className="footer-nav-section">
            <div className="nav-col">
              <h4>Explore</h4>
              <ul className="footer-nav-list">
                {footerNavItems.slice(0, 4).map((item) => (
                  <li key={item.label}><Link href={item.href}>{item.label}</Link></li>
                ))}
              </ul>
            </div>
            <div className="nav-col">
              <h4>Company</h4>
              <ul className="footer-nav-list">
                {footerNavItems.slice(4).map((item) => (
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
          <div className="legal-links">
            <Link href="/privacy">Privacy Policy</Link>
            <Link href="/terms">Terms of Service</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}