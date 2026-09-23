import "./Footer.css";
import logo from "../assets/milo-miso-logo.svg";

export default function Footer() {
  return (
    <footer className="site-footer">
      <div className="footer-container">

        {/* =================================
            MAIN FOOTER
        ================================= */}
        <div className="footer-main">

          {/* QUICK LINKS */}
          <div className="footer-column">
            <h3>Quick links</h3>

            <div className="footer-links-grid">
              <div className="footer-link-column">
                <a href="/">Home</a>
                <a href="#about">About Us</a>
                <a href="#services">Services</a>
              </div>

              <div className="footer-link-column">
                <a href="#team">Our team</a>
                <a href="#contact">Contact</a>
              </div>
            </div>
          </div>

          {/* NEWSLETTER */}
          <div className="footer-column footer-newsletter">
            <h3>Subscribe our newsletter</h3>

            <form className="newsletter-form">
              <div className="newsletter-input">
                <span className="mail-icon">✉</span>

                <input
                  type="email"
                  placeholder="Email Address"
                  aria-label="Email Address"
                />
              </div>

              <button type="submit">
                Subscribe
              </button>
            </form>
          </div>

          {/* SOCIAL MEDIA */}
          <div className="footer-column footer-social">
            <h3>Social media</h3>

            <div className="social-links">
              <a href="#" aria-label="Facebook">
                f
              </a>

              <a href="#" aria-label="Instagram">
                ◎
              </a>

              <a href="#" aria-label="X">
                𝕏
              </a>

              <a href="#" aria-label="YouTube">
                ▶
              </a>
            </div>
          </div>

        </div>

        {/* =================================
            DIVIDER
        ================================= */}
        <div className="footer-divider"></div>

        {/* =================================
            SUB FOOTER
        ================================= */}
        <div className="footer-bottom">

          {/* LEFT */}
          <div className="footer-brand-group">
            <img
              src={logo}
              alt="Milo & Miso"
              className="footer-logo"
            />

            <span className="footer-copyright">
              Copyright © All rights reserved.
            </span>
          </div>

          {/* RIGHT */}
          <a
            href="https://ralphjayguevarra.me"
            target="_blank"
            rel="noreferrer"
            className="footer-designed"
          >
            Designed by Ralph Jay Guevarra
          </a>

        </div>

      </div>
    </footer>
  );
}