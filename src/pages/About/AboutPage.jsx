import React from "react";
import "./AboutPage.css";
import aboutImage from "../../assets/about-us.webp";
import { FaFlagCheckered } from "react-icons/fa";
import { FaBullseye } from "react-icons/fa";
import usePageTitle from "../../hooks/usePageTitle";

const AboutPage = () => {
  usePageTitle("About Us");
  
  return (
    <section className="about-page">

      {/* HERO / INTRO */}
      <section className="about-hero">
        <h1>About Us</h1>
        <p>
          A trusted Chartered Accountancy firm delivering clarity, compliance,
          and confidence through professional excellence.
        </p>
      </section>

      {/* WHO WE ARE */}
<section className="about-who">
  <div className="about-who-box">
    
    {/* LEFT TEXT */}
    <div className="about-who-text">
      <h2>Who We Are</h2>

      <p>
        <strong>At Kabra Sarda & Associates,</strong> we are a professionally
        managed Chartered Accountancy firm committed to delivering reliable,
        ethical, and value-driven professional services. We provide
        comprehensive solutions in taxation, audit, compliance, and advisory
        services to individuals, startups, MSMEs, and corporates across diverse
        sectors.
      </p>

      <p>
        Our firm is built on the principles of integrity, transparency, and
        professionalism. We combine strong technical expertise with practical
        business understanding to help clients navigate regulatory
        complexities, ensure statutory compliance, and make informed financial
        decisions with confidence.
      </p>

      <p>
        With a client-centric approach and up-to-date knowledge of evolving
        laws and regulations, we work closely with our clients to understand
        their unique requirements and deliver customized solutions that
        support sustainable growth and long-term success.
      </p>
    </div>

    {/* RIGHT IMAGE */}
    <div className="about-who-image">
      <img
        src={aboutImage}
        alt="Chartered Accountancy Firm"
      />
    </div>

  </div>
</section>


      {/* MISSION & VISION */}
      <section className="about-mv">
        <h2>Our Mission & Vision</h2>

        <div className="mv-cards">
          <div className="mv-card mission">
            <span><FaFlagCheckered /></span>
            <h3>Our Mission</h3>
            <p>
              To deliver reliable, ethical, and high-quality professional
              services that ensure regulatory compliance, financial clarity,
              and sustainable growth.
            </p>
          </div>

          <div className="mv-card vision">
            <span><FaBullseye /></span>
            <h3>Our Vision</h3>
            <p>
              To be a trusted professional partner by creating long-term value,
              maintaining the highest ethical standards, and adapting to an
              evolving regulatory environment.
            </p>
          </div>
        </div>
      </section>

      {/* KEY STRENGTHS & CAPABILITIES */}
<section className="about-strengths-only">
  <div className="about-inner">
    <h2>Key Strengths & Capabilities</h2>

    <ul className="strengths-bullets">
      <li>
        <strong>Experienced Team:</strong> Our firm is backed by a team of highly
        skilled Chartered Accountants and article assistants with extensive
        industry experience.
      </li>

      <li>
        <strong>Technology-Driven Approach:</strong> We leverage advanced tools
        and software to ensure accuracy, efficiency, and transparency in all
        financial processes.
      </li>

      <li>
        <strong>Comprehensive Solutions:</strong> From compliance and advisory to
        financial growth strategies, we provide end-to-end solutions under one
        roof.
      </li>

      <li>
        <strong>Proactive Advisory:</strong> We stay ahead of regulatory changes
        and provide timely insights to keep clients prepared.
      </li>

      <li>
        <strong>Commitment to Client Success:</strong> Our success is measured by
        the growth and financial well-being of our clients.
      </li>
    </ul>
  </div>
</section>


      {/* WHAT WE DO + WHY CHOOSE US */}
<section className="about-work-why">
  <div className="about-inner about-work-why-grid">

    {/* LEFT: WHAT WE DO */}
    <div className="about-work">
      <h2>What We Do</h2>
      <ul className="about-list">
        <li>Audit & Assurance Services</li>
        <li>Direct & Indirect Taxation</li>
        <li>Legal & Regulatory Compliance</li>
        <li>Debt Syndication Advisory</li>
        <li>IBC Advisory Services</li>
        <li>RERA Compliance</li>
        <li>Accounting & Payroll Outsourcing</li>
      </ul>
    </div>

    {/* RIGHT: WHY CHOOSE US */}
    <div className="about-why-text">
      <h2>Why Choose Us</h2>
      <ul className="about-list">
        <li>Client-centric and solution-oriented approach</li>
        <li>Strong technical expertise with practical insights</li>
        <li>Transparent and ethical professional practices</li>
        <li>Timely and accurate execution of assignments</li>
        <li>Strong focus on regulatory compliance</li>
        <li>Commitment to long-term client relationships</li>
      </ul>
    </div>

  </div>
</section>

    </section>
  );
};

export default AboutPage;
