import React from "react";
import { Link } from "react-router-dom";
import "./Footer.css";
import {
  FaAngleRight,
  FaHome,
  FaInfoCircle,
  FaServicestack,
  FaIndustry,
  FaEnvelope,
  FaMapMarkerAlt,
  FaPhoneAlt
} from "react-icons/fa";


const Footer = () => {
  return (
    <>
      {/* MAP SECTION – NAGPUR ONLY */}
      <section className="footer-map">
        <iframe
          title="Nagpur Office Location"
          // src="https://www.google.com/maps?q=Nagpur,Maharashtra,India&output=embed"
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3721.4006316323816!2d79.06102257352738!3d21.136448884074458!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bd4c063c73e7301%3A0x54ea3c4553cf5d7d!2sN%20Ambazari%20Rd%2C%20Nagpur%2C%20Maharashtra!5e0!3m2!1sen!2sin!4v1770013522086!5m2!1sen!2sin"
          loading="lazy"
          allowFullScreen
        ></iframe>
      </section>

      {/* MAIN FOOTER */}
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
              <li><FaAngleRight /><Link to="/our-services/insolvency-bankruptcy">IBC Advisory</Link></li>
              <li><FaAngleRight /><Link to="/our-services/rera-compliances">RERA Compliance</Link></li>
            </ul>
          </div>

          {/* QUICK LINKS */}
          <div className="footer-col">
            <h3>Quick Links</h3>
            <ul>
              <li><FaHome /><Link to="/">Home</Link></li>
              <li><FaInfoCircle /><Link to="/about">About Us</Link></li>
              <li><FaServicestack /><Link to="/our-services">Our Services</Link></li>
              <li><FaIndustry /><Link to="/msme">MSME</Link></li>
              <li><FaEnvelope /><Link to="/contact">Contact Us</Link></li>
            </ul>
          </div>

          {/* CONTACT */}
<div className="footer-col">
  <h3>Contact Us</h3>

  {/* OFFICE ADDRESS */}
  <div className="footer-contact-item">
    <FaMapMarkerAlt className="footer-icon" />
    <strong>Office Address</strong>
  </div>
  <p>
    North Ambazari Road, Near Ambazari Lake, Nagpur - 440033,
    Maharashtra, India
  </p>

  {/* PHONE */}
  <div className="footer-contact-item">
    <FaPhoneAlt className="footer-icon" />
    <strong>Phone</strong>
  </div>
  <p>+91 8935937583</p>

  {/* EMAIL */}
  <div className="footer-contact-item">
    <FaEnvelope className="footer-icon" />
    <strong>Email</strong>
  </div>
  <p>info@ksassociates.com</p>
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
