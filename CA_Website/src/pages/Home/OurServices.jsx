// import React, { useState } from "react";
// import { useNavigate } from "react-router-dom";
// import "./OurServices.css";
// import {
//   FaFileInvoiceDollar,
//   FaBalanceScale,
//   FaGavel,
//   FaMoneyCheckAlt,
//   FaBuilding,
//   FaHardHat,
//   FaUniversity,
//   FaSyncAlt,
// } from "react-icons/fa";

// const services = [
//   {
//     id: "audit-assurance",
//     title: "Audit & Assurance",
//     desc:
//       "Comprehensive auditing and assurance services to enhance reliability and transparency of financial statements.",
//     icon: <FaFileInvoiceDollar />,
//   },
//   {
//     id: "taxation-services",
//     title: "Taxation Services",
//     desc:
//       "Expert advisory on Direct and Indirect Taxes ensuring compliance with evolving tax laws.",
//     icon: <FaBalanceScale />,
//   },
//   {
//     id: "legal-services",
//     title: "Legal Services",
//     desc:
//       "Professional legal and regulatory support to safeguard business interests and compliance.",
//     icon: <FaGavel />,
//   },
//   {
//     id: "debt-syndication",
//     title: "Debt Syndication",
//     desc:
//       "Customized financing solutions for SMEs and corporates to support growth and working capital.",
//     icon: <FaMoneyCheckAlt />,
//   },
//   {
//     id: "insolvency-bankruptcy",
//     title: "Insolvency & Bankruptcy",
//     desc:
//       "Advisory and representation under Insolvency & Bankruptcy Code (IBC) for corporates and creditors.",
//     icon: <FaBuilding />,
//   },
//   {
//     id: "rera-compliances",
//     title: "RERA Compliances",
//     desc:
//       "Complete RERA advisory, registration, reporting, and ongoing compliance services.",
//     icon: <FaHardHat />,
//   },
//   {
//     id: "state-incentive",
//     title: "State Incentives",
//     desc:
//       "Advisory and assistance in availing state government incentives, subsidies, and industrial schemes.",
//     icon: <FaUniversity />,
//   },
//   {
//     id: "outsourcing",
//     title: "Outsourcing",
//     desc:
//       "End-to-end outsourcing solutions including accounting, payroll, and compliance management.",
//     icon: <FaSyncAlt />,
//   },
// ];

// const OurServices = ({ isFullPage = false }) => {
//   const [showMore, setShowMore] = useState(false);
//   const navigate = useNavigate();

//   const visibleServices = isFullPage
//     ? services
//     : showMore
//     ? services
//     : services.slice(0, 6);

//   return (
//     <section className="services-section">
//       <div className="services-container">

//         <div className="services-header">
//           <h2>Our Services</h2>
//           <p>
//             Delivering trusted professional services to help businesses stay
//             compliant, efficient, and future-ready.
//           </p>
//         </div>

//         <div className="services-grid">
//           {visibleServices.map((service) => (
//             <div className="service-card" key={service.id}>
//               <div className="service-icon">{service.icon}</div>
//               <h3>{service.title}</h3>
//               <p>{service.desc}</p>

//               <button
//                 className="service-btn"
//                 onClick={() => navigate(`/our-services/${service.id}`)}
//               >
//                 Know More →
//               </button>
//             </div>
//           ))}
//         </div>

//         {/* LOAD MORE BUTTON */}
//         {/* LOAD MORE / SHOW LESS BUTTON */}
// {!isFullPage && (
//   <div className="load-more-wrapper">
//     <button
//       className="load-more-btn"
//       onClick={() => setShowMore(!showMore)}
//     >
//       {showMore ? "Hide Services" : "Load More Services"}
//     </button>
//   </div>
// )}


//       </div>
//     </section>
//   );
// };

// export default OurServices;


import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
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

const iconMap = {
  audit: <FaFileInvoiceDollar />,
  tax: <FaBalanceScale />,
  legal: <FaGavel />,
  debt: <FaMoneyCheckAlt />,
  bankruptcy: <FaBuilding />,
  rera: <FaHardHat />,
  state: <FaUniversity />,
  outsourcing: <FaSyncAlt />,
};

const OurServices = ({ isFullPage = false }) => {
  const [services, setServices] = useState([]);
  const [showMore, setShowMore] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    fetchServices();
  }, []);

  const fetchServices = async () => {
    try {
      const res = await axios.get(
        "http://localhost:5000/api/services"
      );
      setServices(res.data);
    } catch (error) {
      console.log(error);
    }
  };

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
          {visibleServices.map((service) => (
            <div className="service-card" key={service._id}>
              <div className="service-icon">
                {iconMap[service.icon] || <FaFileInvoiceDollar />}
              </div>

              <h3>{service.title}</h3>
              <p>{service.description}</p>

              <button
                className="service-btn"
                onClick={() =>
                  navigate(`/our-services/${service.slug}`)
                }
              >
                Know More →
              </button>
            </div>
          ))}
        </div>

        {!isFullPage && (
          <div className="load-more-wrapper">
            <button
              className="load-more-btn"
              onClick={() => setShowMore(!showMore)}
            >
              {showMore ? "Hide Services" : "Load More Services"}
            </button>
          </div>
        )}

      </div>
    </section>
  );
};

export default OurServices;
