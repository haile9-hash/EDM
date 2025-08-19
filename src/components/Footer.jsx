import React from "react";
import { FaFacebookF, FaTelegramPlane, FaTiktok } from "react-icons/fa";
import "../styles/Footer.css";

function Footer() {
  return (
    <footer className="footer">
      <div className="footer-container">
        {/* Left Column */}
        <div className="footer-section about">
          <h3>Enate Debremarkos Children Village</h3>
          <p>
            Dedicated to transforming the lives of vulnerable children in Ethiopia through love, care, and education.
          </p>
        </div>

        {/* Middle Column */}
        <div className="footer-section links">
          <h4>Quick Links</h4>
          <ul>
            <li><a href="/donate">Donate</a></li>
            <li><a href="/about">About Us</a></li>
            <li><a href="/story">Our Story</a></li>
            <li><a href="/contact">Contact</a></li>
          </ul>
        </div>

        {/* Right Column */}
        <div className="footer-section contact">
          <h4>Connect With Us</h4>
          <div className="social-icons">
            <a href="https://t.me/enatdm" target="_blank" rel="noreferrer">
              <FaTelegramPlane />
            </a>
            <a href="https://www.tiktok.com/@yourtiktokusername" target="_blank" rel="noreferrer">
              <FaTiktok />
            </a>
            <a href="https://www.facebook.com/betremariam.zeleke.1/" target="_blank" rel="noreferrer">
              <FaFacebookF />
            </a>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="footer-bottom">
        <p>
          &copy; {new Date().getFullYear()} Enate Debremarkos Children Village. All rights reserved.
        </p>
        <p>
          Design &amp; Developed by{" "}
          <a
            href="https://t.me/codebiruh"
            target="_blank"
            rel="noreferrer"
            className="footer-codebiruh"
          >
            CODEBIRUH
          </a>
        </p>
      </div>
    </footer>
  );
}

export default Footer;
