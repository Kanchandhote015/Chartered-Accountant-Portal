import React, { useState } from "react";
import "./OurServices.css";
import {
  FaFileInvoiceDollar,
  FaBalanceScale,
  FaGavel,
  FaMoneyCheckAlt,
  FaBuilding,
  FaHardHat,
  FaUniversity,
  FaSyncAlt,
} from "react-icons/fa";

const services = [
  {
    id: "audit-assurance",
    title: "Audit & Assurance",
    desc:
      "Comprehensive auditing and assurance services to enhance reliability and transparency of financial statements.",
    icon: <FaFileInvoiceDollar />,
  },
  {
    id: "taxation-services",
    title: "Taxation Services",
    desc:
      "Expert advisory on Direct and Indirect Taxes ensuring compliance with evolving tax laws.",
    icon: <FaBalanceScale />,
  },
  {
    id: "legal-services",
    title: "Legal Services",
    desc:
      "Professional legal and regulatory support to safeguard business interests and compliance.",
    icon: <FaGavel />,
  },
  {
    id: "debt-syndication",
    title: "Debt Syndication",
    desc:
      "Customized financing solutions for SMEs and corporates to support growth and working capital.",
    icon: <FaMoneyCheckAlt />,
  },
  {
    id: "insolvency-bankruptcy",
    title: "Insolvency & Bankruptcy",
    desc:
      "Advisory and representation under Insolvency & Bankruptcy Code (IBC) for corporates and creditors.",
    icon: <FaBuilding />,
  },
  {
    id: "rera-compliances",
    title: "RERA Compliances",
    desc:
      "Complete RERA advisory, registration, reporting, and ongoing compliance services.",
    icon: <FaHardHat />,
  },
  {
    id: "state-incentive",
    title: "State Incentives",
    desc:
      "Advisory and assistance in availing state government incentives, subsidies, and industrial schemes.",
    icon: <FaUniversity />,
  },
  {
    id: "outsourcing",
    title: "Outsourcing",
    desc:
      "End-to-end outsourcing solutions including accounting, payroll, and compliance management.",
    icon: <FaSyncAlt />,
  },
];

const OurServices = ({ isFullPage = false }) => {
  const [showMore, setShowMore] = useState(false);

  // const visibleServices = showMore ? services : services.slice(0, 6);
  const visibleServices = isFullPage
  ? services
  : showMore
  ? services
  : services.slice(0, 6);

  return (
    <section className="services-section">
      <div className="services-container">

        <div className="services-header">
          <h2>Our Services</h2>
          <p>
            Delivering trusted professional services to help businesses stay
            compliant, efficient, and future-ready.
          </p>
        </div>

        <div className="services-grid">
          {visibleServices.map((service, index) => (
            <div className="service-card" key={index}>
              <div className="service-icon">{service.icon}</div>
              <h3>{service.title}</h3>
              <p>{service.desc}</p>
<button
                className="osp-service-btn"
                onClick={() =>
                  navigateToService(`/our-services/${service.id}`)
                }
              >
                Know More →
              </button>
            </div>
          ))}
        </div>

        {/* LOAD MORE BUTTON */}
        {!isFullPage && !showMore && (
          <div className="load-more-wrapper">
            <button
              className="load-more-btn"
              onClick={() => setShowMore(true)}
            >
              Load More Services
            </button>
          </div>
        )}

      </div>
    </section>
  );
};

export default OurServices;
