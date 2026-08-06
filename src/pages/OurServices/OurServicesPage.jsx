import React from "react";
import { useNavigate } from "react-router-dom";
import "./OurServicesPage.css";
import usePageTitle from "../../hooks/usePageTitle";
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

const allServicesList = [
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

const OurServicesPage = () => {
  usePageTitle("Our Services");
  const navigateToService = useNavigate();

  return (
    <section className="osp-services-section">
      <div className="osp-services-container">

        <div className="osp-services-header">
          <h2>Our Services</h2>
          <p>
            Delivering trusted professional services to help businesses stay
            compliant, efficient, and future-ready.
          </p>
        </div>

        <div className="osp-services-grid">
          {allServicesList.map((service) => (
            <div className="osp-service-card" key={service.id}>
              <div className="osp-service-icon">{service.icon}</div>
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

      </div>
    </section>
  );
};

export default OurServicesPage;
