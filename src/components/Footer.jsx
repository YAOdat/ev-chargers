import React from "react";
import { Link } from "react-router-dom";
import { FaFacebook, FaTwitter, FaInstagram } from "react-icons/fa";
import "../style/footer.css";

function Footer() {
  return (
    <footer className="footer-container">
      <div className="footer-content">
        <div className="footer-section">
          <h3 className="footer-section-title">Contact Us</h3>
          <p className="footer-section-info">
            Address: Industrial Area 17, Sharjah, UAE
          </p>
          <p className="footer-section-info">
            Phone Number: +971 501 679 410
          </p>
          <p className="footer-section-info">Email: info@mevcharger.com</p>
        </div>
        <div className="footer-section">
          <h3 className="footer-section-title">Links</h3>
          <ul className="footer-section-links">
            <li className="footer-section-link">
              <Link to="/">Home</Link>
            </li>
            <li className="footer-section-link">
              <Link to="/about">About</Link>
            </li>
            <li className="footer-section-link">
              <Link to="/chargers">Products</Link>
            </li>
            <li className="footer-section-link">
              <Link to="/contact">Contact</Link>
            </li>
          </ul>
        </div>
        <div className="footer-section">
          <h3 className="footer-section-title">Follow Us</h3>
          <div className="footer-social-media">
            <a href="#" className="footer-social-media-link">
              <FaFacebook />
            </a>
            <a href="#" className="footer-social-media-link">
              <FaTwitter />
            </a>
            <a href="#" className="footer-social-media-link">
              <FaInstagram />
            </a>
          </div>
        </div>
      </div>
      <div className="footer-bottom">
        <p className="footer-bottom-text">© 2023 MEV Charger. All rights reserved.</p>
      </div>
    </footer>
  );
}

export default Footer;
