
import React from "react";
import { Link } from "react-router-dom";
import "../styles/Footer.css";

const quickLinks = [
  { label: "Home", path: "/" },
  { label: "About Us", path: "/about" },
  { label: "Courses", path: "/courses" },
  { label: "Services", path: "/services" },
  { label: "Projects", path: "/projects" },
  { label: "Internship", path: "/internship" },
  { label: "Contact", path: "/contact" },
];

const services = [
  "Website Development",
  "App Development",
  "Digital Marketing",
  "Data Science",
  "Video Editing",
  "IT Training",
];

function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="ks-footer">
      {/* MAIN FOOTER */}
      <div className="ks-footer-main">
        <div className="ks-footer-container">
          <div className="ks-footer-grid">
            {/* BRAND */}
            <div className="ks-footer-brand">
              <Link
                to="/"
                className="ks-footer-logo"
                aria-label="KSquare Softtech home"
              >
                <span className="ks-footer-logo-mark">K</span>

                <span className="ks-footer-logo-text">
                  <strong>KSQUARE</strong>
                  <span>SOFTTECH</span>
                </span>
              </Link>

              <p className="ks-footer-tagline">
                Learn Skills. Build Careers.
              </p>

              <p className="ks-footer-description">
                We help businesses grow with modern digital solutions
                and empower students through practical IT training
                and career-focused learning.
              </p>

              <div className="ks-footer-socials">
                <a
                  href="https://www.instagram.com/"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Instagram"
                >
                  IG
                </a>

                <a
                  href="https://www.linkedin.com/"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="LinkedIn"
                >
                  in
                </a>

                <a
                  href="https://www.facebook.com/"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Facebook"
                >
                  f
                </a>

                <a
                  href="https://www.youtube.com/"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="YouTube"
                >
                  ▶
                </a>
              </div>
            </div>

            {/* QUICK LINKS */}
            <div className="ks-footer-column">
              <h3>Quick Links</h3>

              <ul>
                {quickLinks.map((item) => (
                  <li key={item.label}>
                    <Link to={item.path}>
                      <span aria-hidden="true">↗</span>
                      {item.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* SERVICES */}
            <div className="ks-footer-column">
              <h3>Our Services</h3>

              <ul>
                {services.map((service) => (
                  <li key={service}>
                    <Link to="/services">
                      <span aria-hidden="true">↗</span>
                      {service}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* CONTACT */}
            <div className="ks-footer-column ks-footer-contact">
              <h3>Get In Touch</h3>

              <div className="ks-footer-contact-item">
                <span className="ks-footer-contact-icon">☎</span>

                <div>
                  <span className="ks-footer-contact-label">
                    Call Us
                  </span>

                  <a href="tel:+917010798196">
                    +91 70107 98196
                  </a>
                </div>
              </div>

              <div className="ks-footer-contact-item">
                <span className="ks-footer-contact-icon">@</span>

                <div>
                  <span className="ks-footer-contact-label">
                    Email Us
                  </span>

                  <a href="mailto:info@ksquaresofttech.org">
                    info@ksquaresofttech.org
                  </a>
                </div>
              </div>

              <div className="ks-footer-contact-item">
                <span className="ks-footer-contact-icon">⌖</span>

                <div>
                  <span className="ks-footer-contact-label">
                    Our Location
                  </span>

                  <p>Coimbatore, Tamil Nadu, India</p>
                </div>
              </div>

              <a
                className="ks-footer-whatsapp"
                href="https://wa.me/917010798196"
                target="_blank"
                rel="noopener noreferrer"
              >
                Chat on WhatsApp
                <span aria-hidden="true">↗</span>
              </a>
            </div>
          </div>

          {/* NEWSLETTER / CTA */}
          <div className="ks-footer-cta">
            <div>
              <span className="ks-footer-cta-label">
                HAVE A PROJECT IN MIND?
              </span>

              <h3>Let's build something great together.</h3>

              <p>
                Tell us about your idea. Let's find the right solution.
              </p>
            </div>

            <Link to="/contact" className="ks-footer-cta-button">
              Contact Our Team
              <span aria-hidden="true">↗</span>
            </Link>
          </div>
        </div>
      </div>

      {/* BOTTOM BAR */}
      <div className="ks-footer-bottom">
        <div className="ks-footer-container ks-footer-bottom-inner">
          <p>
            © {currentYear} <strong>KSquare Softtech</strong>.
            All rights reserved.
          </p>

          <p className="ks-footer-bottom-tagline">
            Learn Skills. Build Careers.
          </p>

          <Link to="/" className="ks-footer-back-top">
            Back to top ↑
          </Link>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
