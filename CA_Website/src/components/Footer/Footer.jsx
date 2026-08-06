import React from "react";
import { Link, useLocation } from "react-router-dom";
import "./Footer.css";
import {
  FaAngleRight,
  FaHome,
  FaInfoCircle,
  FaServicestack,
  FaIndustry,
  FaEnvelope,
  FaAccessibleIcon,
  FaIdCard,
  FaMapMarkerAlt,
  FaPhoneAlt
} from "react-icons/fa";

const Footer = () => {
  const location = useLocation();

  const showMap = 
    location.pathname === "/" ||
    location.pathname === "/contact-us";

  return (
    <>
      {/* MAP SECTION */}
      {showMap && ( 
      <section className="footer-map">
        <iframe
          title="Nagpur Office Location"
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3721.4006316323816!2d79.06102257352738!3d21.136448884074458!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bd4c063c73e7301%3A0x54ea3c4553cf5d7d!2sN%20Ambazari%20Rd%2C%20Nagpur%2C%20Maharashtra!5e0!3m2!1sen!2sin!4v1770013522086!5m2!1sen!2sin"
          loading="lazy"
          allowFullScreen
        />
      </section>
      )}

      {/* FOOTER */}
      <footer className="footer">
        <div className="footer-container">

          {/* ABOUT */}
          <div className="footer-col">
            <h3>About Us</h3>
            <p>
              Kabra Sarda & Associates is a Chartered Accountancy firm
              providing Audit, Taxation, Legal, and Advisory services with
              a client-focused approach.
            </p>
          </div>

          {/* OUR SERVICES */}
          <div className="footer-col">
            <h3>Our Services</h3>
            <ul>
              <li><FaAngleRight /><Link to="/our-services/audit-assurance">Audit & Assurance</Link></li>
              <li><FaAngleRight /><Link to="/our-services/taxation-services">Taxation Services</Link></li>
              <li><FaAngleRight /><Link to="/our-services/legal-services">Legal Services</Link></li>
              <li><FaAngleRight /><Link to="/our-services/debt-syndication">Debt Syndication</Link></li>
              <li><FaAngleRight /><Link to="/our-services/insolvency-bankruptcy">Insolvency & Bankruptcy</Link></li>
              <li><FaAngleRight /><Link to="/our-services/state-incentive">State Incentive</Link></li>
              <li><FaAngleRight /><Link to="/our-services/outsourcing">Outsourcing</Link></li>
              <li><FaAngleRight /><Link to="/our-services/rera-compliances">RERA Compliance</Link></li>
            </ul>
          </div>

          {/* QUICK LINKS */}
          <div className="footer-col">
            <h3>Quick Links</h3>
            <ul>
              <li><FaHome /><Link to="/">Home</Link></li>
              <li><FaInfoCircle /><Link to="/about-us">About Us</Link></li>
              <li><FaIndustry /><Link to="/msme-solutions">MSME</Link></li>
              <li><FaAccessibleIcon /><Link to="/our-services">Our Services</Link></li>
              <li><FaIdCard /><Link to="/gallery">Gallery</Link></li>
              <li><FaServicestack /><Link to="/news-media">News & Media</Link></li>
              <li><FaEnvelope /><Link to="/contact-us">Contact Us</Link></li>
            </ul>
          </div>

          {/* CONTACT */}
<div className="footer-col">
  <h3>Contact Us</h3>

  <div className="footer-contact-row">

    {/* LEFT COLUMN – ADDRESS */}
    <div className="footer-contact-col address-col">
      <div className="footer-contact-block">
        <FaMapMarkerAlt className="footer-icon" />
        <div>
          <strong>Office Address</strong>
          <p>
            North Ambazari Road, Near Ambazari Lake,<br />
            Nagpur – 440033, Maharashtra, India
          </p>
        </div>
      </div>
    </div>

    {/* RIGHT COLUMN – PHONE + EMAIL */}
   <div className="footer-contact-col contact-col">
  <div className="footer-contact-block">
    <FaPhoneAlt className="footer-icon" />
    <div>
      <strong>Phone</strong>
      <p>
        <a href="tel:+918605534755" className="footer-contact-link">
          +91 8605534755
        </a>
      </p>
    </div>
  </div>

  <div className="footer-contact-block">
    <FaEnvelope className="footer-icon" />
    <div>
      <strong>Email</strong>
      <p className="mail">
        <a href="mailto:info@ksassociates.com" className="footer-contact-link">
          info@ksassociates.com
        </a>
      </p>
    </div>
  </div>
</div>


  </div>
</div>



        </div>
      </footer>

      {/* COPYRIGHT */}
      <section className="footer-bottom">
        <p>
          © 2025 Kabra Sarda & Associates – Chartered Accountants.
          All Rights Reserved | Designed by <span>KDigiWorld</span>
        </p>
      </section>
    </>
  );
};

export default Footer;
