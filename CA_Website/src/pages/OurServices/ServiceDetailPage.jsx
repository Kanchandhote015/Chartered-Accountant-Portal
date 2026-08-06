import { useParams, Link } from "react-router-dom";
import { useEffect, useState } from "react";
import axios from "axios";
import "./ServiceDetailPage.css";
import usePageTitle from "../../hooks/usePageTitle";

const ServiceDetailPage = () => {
  const { slug } = useParams();
  const [service, setService] = useState(null);

  usePageTitle(service?.title || "Service Details");

  useEffect(() => {
    const fetchService = async () => {
      try {
        const res = await axios.get(
          `http://localhost:5000/api/services/slug/${slug}`
        );
        setService(res.data);
      } catch (error) {
        console.log(error);
        setService(null);
      }
    };

    fetchService();
  }, [slug]);

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
        <p>{service.description}</p>
      </div>

      {/* BACK LINK BAR */}
      <div className="service-back-bar">
        <div className="service-back-container">
          <Link to="/our-services" className="service-back-link">
            ← Back to Our Services
          </Link>
        </div>
      </div>

      {/* CONTENT */}
      <div className="service-content">

        {/* OVERVIEW FULL WIDTH */}
        <div className="service-description">
          <h2>Overview</h2>
          <p>{service.fullDescription || service.description}</p>
        </div>

        {/* BELOW SECTION (2 COLUMN) */}
        <div className="service-bottom-row">

          {/* LEFT SIDE */}
          {service.highlights?.length > 0 && (
            <div className="service-highlights">
              <h2>What We Offer</h2>
              <ul>
                {service.highlights.map((item, index) => (
                  <li key={index}>✔ {item}</li>
                ))}
              </ul>
            </div>
          )}

          {/* RIGHT SIDE IMAGE */}
          {service.image && (
            <div className="service-image">
              <img
                src={`http://localhost:5000${service.image}`}
                alt={service.title}
              />
            </div>
          )}

        </div>

        {/* CTA */}
        <div className="service-cta">
          <Link to="/contact" className="cta-btn">
            Get Consultation
          </Link>
        </div>

      </div>
    </section>
  );
};

export default ServiceDetailPage;
