import React from "react";
import "./MSMEPage.css";
import usePageTitle from "../../hooks/usePageTitle";
import { Link } from "react-router-dom";

const MSMEPage = () => {
  usePageTitle("MSME Solutions");

  return (
    <main className="msme-page">

      {/* HERO */}
      <section className="msme-hero">
        <div className="msme-hero-content">
          <h1>MSME Solutions</h1>
          <p>
            Practical compliance, advisory, and financial support for
            Micro, Small and Medium Enterprises across their business lifecycle.
          </p>
        </div>
      </section>

      {/* OVERVIEW */}
<section className="msme-overview">
  <div className="msme-container">

    <h2>How We Support MSMEs</h2>
   
   <div className="msme-overview-lead">
    <p >
      MSMEs operate at the intersection of regulation, finance, and day-to-day
      business realities. Navigating this environment requires clarity,
      discipline, and timely professional guidance.
    </p>
    </div>
    
    <p className="msme-overview-text">
      Our support goes beyond routine compliance. We work with MSMEs to simplify
      regulatory requirements, strengthen financial systems, and provide
      practical advisory inputs that align with business objectives. Whether
      addressing compliance obligations, funding readiness, or operational
      decision-making, our focus remains on enabling sustainable and compliant
      growth.
    </p>

    <div className="msme-overview-focus">
      <span>Our focus areas</span>
      <p>
        Compliance clarity · Financial discipline · Business continuity ·
        Scalable advisory support
      </p>
    </div>

  </div>
</section>



      {/* SERVICE BLOCKS */}
      <section className="msme-services">
  <div className="msme-container">

    {/* SECTION HEADING */}
    <h2 className="msme-section-title">
      MSME Advisory & Compliance Services
    </h2>

    <div className="msme-service-grid">

      <div className="msme-service-card">
        <h3>MSME / Udyam Registration</h3>
        <p>
          Assistance with MSME registration, documentation review, and
          advisory on eligibility and classification to ensure correct
          compliance from the start.
        </p>
      </div>

      <div className="msme-service-card">
        <h3>Ongoing Compliance Management</h3>
        <p>
          End-to-end support for statutory filings, record maintenance,
          and regulatory updates relevant to MSME entities.
        </p>
      </div>

      <div className="msme-service-card">
        <h3>Financial & Business Advisory</h3>
        <p>
          Advisory services focused on profitability analysis, cost
          structuring, cash-flow planning, and decision support.
        </p>
      </div>

      <div className="msme-service-card">
        <h3>Funding & Credit Facilitation</h3>
        <p>
          Guidance for working capital arrangements, loan structuring,
          and preparation of financial documentation required by lenders.
        </p>
      </div>

      <div className="msme-service-card">
        <h3>Government Benefit Assistance</h3>
        <p>
          Identification of applicable incentives and support with
          applications, documentation, and compliance follow-ups.
        </p>
      </div>

      <div className="msme-service-card">
        <h3>Advisory & Issue Resolution</h3>
        <p>
          Ongoing professional support to address regulatory queries,
          operational concerns, and business compliance challenges.
        </p>
      </div>

    </div>
  </div>
</section>


      {/* OUR APPROACH */}
<section className="msme-approach">
  <div className="msme-container">
    <h2>Our Approach to MSME Advisory</h2>

    <div className="msme-approach-steps">
      <div>
        <span>01</span>
        <p>Understanding your business structure and operations</p>
      </div>
      <div>
        <span>02</span>
        <p>Identifying compliance gaps and growth opportunities</p>
      </div>
      <div>
        <span>03</span>
        <p>Designing practical and compliant solutions</p>
      </div>
      <div>
        <span>04</span>
        <p>Ongoing support as your business evolves</p>
      </div>
    </div>
  </div>
</section>

      <section className="msme-value">
  <div className="msme-container">

    <h2>What MSMEs Experience With Us</h2>

    <p className="msme-value-intro">
      Our engagement with MSMEs is designed to create clarity, stability,
      and confidence in business operations — not just short-term compliance
      completion.
    </p>

    <ul className="msme-value-list">
      <li>
        Better control over statutory and regulatory obligations through
        structured compliance management
      </li>
      <li>
        Improved financial visibility supporting informed operational and
        strategic decisions
      </li>
      <li>
        Reduced uncertainty around regulatory requirements and deadlines
      </li>
      <li>
        Consistent professional guidance aligned with business growth stages
      </li>
      <li>
        Stronger internal systems that support scalability and continuity
      </li>
    </ul>

  </div>
</section>


      {/* CTA */}
<section className="msme-cta">
  <h2>Need Professional Guidance for Your MSME?</h2>
  <p>
    Get clear, practical advice tailored to your business needs.
  </p>
  <Link to="/contact-us" className="msme-cta-btn">
    Get Consultation
  </Link>
</section>


    </main>
  );
};

export default MSMEPage;
