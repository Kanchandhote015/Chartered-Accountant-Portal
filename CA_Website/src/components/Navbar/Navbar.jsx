import React, { useState, useEffect, useRef } from "react";
import { Link, useLocation } from "react-router-dom";
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
  const [isSticky, setIsSticky] = useState(false);

  const navbarRef = useRef(null);
  const stickyPoint = useRef(0);
  const location = useLocation();

  /* CLOSE MENU */
  const closeMenu = () => setMenuOpen(false);

  /* CLOSE MENU ON ROUTE CHANGE */
  useEffect(() => {
    closeMenu();
  }, [location.pathname]);

  /* STICKY NAVBAR (FIXED LOGIC) */
  useEffect(() => {
    if (!navbarRef.current) return;

    // Capture navbar position ONCE
    stickyPoint.current = navbarRef.current.offsetTop;

    const handleScroll = () => {
      setIsSticky(window.scrollY >= stickyPoint.current);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header>
      {/* TOP BAR */}
      
      <div className="top-bar">
        <div className="top-left">
          <div className="top-contact-item">
            <FaEnvelope />
            <a href="mailto:caksassociates@gmail.com">
              caksassociates@gmail.com
            </a>
          </div>

          <span className="divider">|</span>

          <div className="top-contact-item">
            <FaPhoneAlt />
            <a href="tel:+918605534755">
              +91 8605534755
            </a>
          </div>
        </div>

        <div className="top-right">
          <span>Follow Us :</span>
          <div className="social-icons">
            <a href="https://www.facebook.com/" target="_blank" rel="noopener noreferrer">
              <FaFacebook />
            </a>
            <a href="https://www.linkedin.com/" target="_blank" rel="noopener noreferrer">
              <FaLinkedin />
            </a>
            <a href="https://www.instagram.com/" target="_blank" rel="noopener noreferrer">
              <FaInstagram />
            </a>
            <a href="https://www.youtube.com/" target="_blank" rel="noopener noreferrer">
              <FaYoutube />
            </a>
          </div>
        </div>
      </div>

      {/* ✅ DYNAMIC SPACER (PREVENTS GAP / WHITE SPACE) */}
      <div
        className="navbar-spacer"
        style={{ height: isSticky ? navbarRef.current?.offsetHeight : 0 }}
        aria-hidden="true"
      />

      {/* NAVBAR */}
      <nav ref={navbarRef} className={`navbar ${isSticky ? "sticky" : ""}`}>
        <div className="navbar-container">

          {/* LOGO */}
          <Link to="/" className="logo-link" onClick={closeMenu}>
            <div className="logo">
              <span className="logo-text">CA</span>
              <div>
                <h3>Kabra Sarda & Associates</h3>
                <p>Chartered Accountants</p>
              </div>
            </div>
          </Link>

          {/* NAV LINKS
          <ul className={`nav-links ${menuOpen ? "active" : ""}`}>
            <li><Link to="/about-us" onClick={closeMenu}>About Us</Link></li>
            <li><Link to="/msme-solutions" onClick={closeMenu}>MSME Solutions</Link></li>
            <li><Link to="/our-services" onClick={closeMenu}>Our Services</Link></li>
            <li><Link to="/gallery" onClick={closeMenu}>Gallery</Link></li>
            <li><Link to="/news-media" onClick={closeMenu}>News & Media</Link></li>
            <li><Link to="/contact-us" onClick={closeMenu}>Contact Us</Link></li>
          </ul> */}

          {/* NAV LINKS */}
<ul className={`nav-links ${menuOpen ? "active" : ""}`}>
  <li>
    <Link to="/about-us" onClick={closeMenu}>About Us</Link>
  </li>

  <li>
    <Link to="/msme-solutions" onClick={closeMenu}>MSME Solutions</Link>
  </li>

{/* OUR SERVICES DROPDOWN */}
<li className="dropdown">
  <Link to="/our-services" onClick={closeMenu}>
    Our Services ▾
  </Link>

  <ul className="dropdown-menu">

    <li>
      <Link to="/our-services/audit-assurance">Audit & Assurance</Link>
    </li>

    {/* TAXATION WITH SUB-DROPDOWN */}
    <li className="dropdown-sub">
      <Link to="/our-services/taxation-services">
        Taxation Services ▸
      </Link>

      <ul className="sub-menu">
        <li>
          <Link to="/our-services/direct-tax">
            Direct Tax
          </Link>
        </li>
        <li>
          <Link to="/our-services/indirect-tax">
            Indirect Tax
          </Link>
        </li>
      </ul>
    </li>

    <li>
      <Link to="/our-services/legal-services">Legal Services</Link>
    </li>

    <li>
      <Link to="/our-services/debt-syndication">Debt Syndication</Link>
    </li>

    <li>
      <Link to="/our-services/insolvency-bankruptcy">
        Insolvency & Bankruptcy
      </Link>
    </li>

    <li>
      <Link to="/our-services/state-incentive">
        State Incentive
      </Link>
    </li>

    <li>
      <Link to="/our-services/outsourcing">
        Outsourcing
      </Link>
    </li>

    <li>
      <Link to="/our-services/rera-compliances">
        RERA Compliance
      </Link>
    </li>

  </ul>
</li>


 <li className="dropdown">
  <Link to="/gallery" onClick={closeMenu}>
    Gallery ▾
  </Link>

  <ul className="dropdown-menu gallery-dropdown">
    <li>
      <Link to="/gallery/photos">Photo Gallery</Link>
    </li>
    <li>
      <Link to="/gallery/videos">Video Gallery</Link>
    </li>
  </ul>
</li>

  <li>
    <Link to="/news-media" onClick={closeMenu}>News & Media</Link>
  </li>

  <li>
    <Link to="/contact-us" onClick={closeMenu}>Contact Us</Link>
  </li>
</ul>


          {/* HAMBURGER */}
          <div className="hamburger" onClick={() => setMenuOpen(!menuOpen)}>
            {menuOpen ? <FaTimes /> : <FaBars />}
          </div>

        </div>
      </nav>
    </header>
  );
};

export default Navbar;
