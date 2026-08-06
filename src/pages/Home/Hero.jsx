import React from "react";
import "./Hero.css";
import usePageTitle from "../../hooks/usePageTitle";
import { FaPhoneAlt } from "react-icons/fa";

const Hero = () => {
  usePageTitle("Home");
  return (
    <section className="hero">
      <div className="hero-container">
        <h1>
          Trusted Chartered Accountants for <br />
          Tax, Audit & Compliance
        </h1>

        <p>
          Helping individuals, startups and businesses stay compliant,
          reduce risk and grow with confidence.
        </p>

        <div className="hero-buttons">
          <a href="tel:+918605534755" className="btn-primary">
            <div className="hero-btn">
              <FaPhoneAlt />
              <span>Call Now</span>
            </div>
          </a>
          <a href="/contact" className="btn-outline">
            Get Consultation
          </a>
        </div>
      </div>
    </section>
  );
};

export default Hero;
