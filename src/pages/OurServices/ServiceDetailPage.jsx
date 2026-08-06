import React from "react";
import { useParams, Link } from "react-router-dom";
import servicesContent from "./ServicesContent";
import "./ServiceDetailPage.css";
import usePageTitle from "../../hooks/usePageTitle";

const ServiceDetailPage = () => {
  usePageTitle("Service Details");
  const { serviceSlug } = useParams();
  const service = servicesContent[serviceSlug];

  if (!service) {
    return (
      <div className="service-not-found">
        <h2>Service Not Found</h2>
        <Link to="/our-services">← Back to Our Services</Link>
      </div>
    );
  }

  return (
    <section className="service-detail">
      {/* HERO */}
      <div className="service-hero">
        <h1>{service.title}</h1>
        <p>{service.intro}</p>
      </div>

      {/* CONTENT */}
      <div className="service-content">
        <div className="service-description">
          <h2>Overview</h2>
          <p>{service.description}</p>
        </div>

        <div className="service-highlights">
          <h2>What We Offer</h2>
          <ul>
            {service.highlights.map((item, index) => (
              <li key={index}>✔ {item}</li>
            ))}
          </ul>
        </div>

        <div className="service-cta">
          <Link to="/contact" className="cta-btn">
            Get Consultation
          </Link>
          <Link to="/our-services" className="back-btn">
            ← Back to Our Services
          </Link>
        </div>
      </div>
    </section>
  );
};

export default ServiceDetailPage;
