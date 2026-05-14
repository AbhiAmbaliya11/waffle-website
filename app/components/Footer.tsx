
import {
  FaFacebookF,
  FaInstagram,
  FaLinkedinIn,
  FaYoutube,
  FaXTwitter,
} from "react-icons/fa6";

export default function Footer() {
  return (
    <footer className="footer-section">
      <div className="footer-top">

        <div className="footer-brand">
          <img src="/images/logo.png" alt="Waffle Logo" />

          <p>
            We see the world through <br />
            waffles.
          </p>
        </div>

        <div className="footer-links">

          <div className="footer-nav">
            <a href="#">Our Story</a>
            <a href="#">Royal Products</a>
            <a href="#">Castle Locator</a>
            <a href="#">Franchises</a>
            <a href="#">Royal Event</a>
            <a href="#">Royal Moments</a>
            <a href="#">Contact Us</a>
          </div>

          <div className="footer-contact-details">
            <h4>Contact</h4>

            <p>Email: info@wafflecastle.in</p>
            <p>Phone: +91 95377 88817</p>
            <p>Address: Ahmedabad, Gujarat</p>
          </div>
        </div>
      </div>

      <div className="footer-bottom">
        <p>© 2026 WAFFLE CASTLE. All Rights Reserved.</p>

        <div className="footer-social">

          <a
            href="https://www.facebook.com/wafflecastleofficial"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaFacebookF size={20} />
          </a>

          <a
            href="https://www.instagram.com/waffle_castle_official/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaInstagram size={20} />
          </a>

          <a
            href="https://www.linkedin.com/company/waffle-castle"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaLinkedinIn size={20} />
          </a>

          <a
            href="https://www.youtube.com/@wafflecastle"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaYoutube size={20} />
          </a>

          <a
            href="https://x.com/wafflecastle"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaXTwitter size={20} />
          </a>

        </div>
      </div>
    </footer>
  );
}