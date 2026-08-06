import React, { useState } from "react";
import { Link } from "react-router-dom";
import {
  FaFacebook,
  FaLinkedin,
  FaInstagram,
  FaYoutube,
  FaBars,
  FaTimes,
  FaEnvelope,
  FaPhoneAlt
} from "react-icons/fa";
import "./Navbar.css";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header>
      {/* Top Bar */}
      <div className="top-bar">
        <div className="top-left">
  <div className="top-contact-item">
    <FaEnvelope />
    <span>caksassociates@gmail.com</span>
  </div>

  <span className="divider">|</span>

  <div className="top-contact-item">
    <FaPhoneAlt />
    <span>+91 8605534755</span>
  </div>
</div>

        <div className="top-right">
          <span>Follow Us :</span>
          <div className="social-icons">
            <FaFacebook />
            <FaLinkedin />
            <FaInstagram />
            <FaYoutube />
          </div>
        </div>
      </div>

      <nav className="navbar">
        <div className="navbar-container">

          {/* LEFT: Logo */}
          <div className="logo">
            <span className="logo-text">CA</span>
            <div>
              <h3>Kabra Sarda & Associates</h3>
              <p>Chartered Accountants</p>
            </div>
          </div>

          {/* RIGHT: Nav Links */}
          <ul className={`nav-links ${menuOpen ? "active" : ""}`}>
            <li><Link to="/">Home</Link></li>
            <li><Link to="/about-us">About Us</Link></li>
            <li><Link to="/msme-solutions">MSME Solutions</Link></li>

            {/* OUR SERVICES DROPDOWN (FIXED) */}
            <li className="dropdown">
              <Link to="/our-services">Our Services ▾</Link>

              <ul className="dropdown-menu">

                <li>
                  <Link to="/our-services/audit-assurance">
                    Audit & Assurance
                  </Link>
                </li>

                <li className="dropdown-sub">
                  <span>Taxation Services ▾</span>
                  <ul className="sub-menu">
                    <li>
                      <Link to="/our-services/direct-tax">Direct Tax</Link>
                    </li>
                    <li>
                      <Link to="/our-services/indirect-tax">Indirect Tax</Link>
                    </li>
                  </ul>
                </li>

                <li>
                  <Link to="/our-services/legal-services">Legal Services</Link>
                </li>

                <li>
                  <Link to="/our-services/debt-syndication">
                    Debt Syndication
                  </Link>
                </li>

                <li>
                  <Link to="/our-services/insolvency-bankruptcy">
                    Insolvency & Bankruptcy Matters
                  </Link>
                </li>

                <li>
                  <Link to="/our-services/state-incentive">
                    State Incentive
                  </Link>
                </li>

                <li>
                  <Link to="/our-services/outsourcing">Outsourcing</Link>
                </li>

                <li>
                  <Link to="/our-services/rera-compliances">
                    RERA Compliances
                  </Link>
                </li>

              </ul>
            </li>

            {/* GALLERY */}
            <li className="dropdown">
              <Link to="/gallery">Gallery ▾</Link>
              <ul className="dropdown-menu gallery">
                <li>
                  <Link to="/gallery/photo-gallery">Photo Gallery</Link>
                </li>
                <li>
                  <Link to="/gallery/photo-gallery">Video Gallery</Link>
                </li>
              </ul>
            </li>

            <li><Link to="/news-media">News & Media</Link></li>
            <li><Link to="/contact-us">Contact Us</Link></li>
          </ul>

          {/* HAMBURGER */}
          <div
            className="hamburger"
            onClick={() => setMenuOpen(!menuOpen)}
          >
            {menuOpen ? <FaTimes /> : <FaBars />}
          </div>

        </div>
      </nav>
    </header>
  );
};

export default Navbar;
