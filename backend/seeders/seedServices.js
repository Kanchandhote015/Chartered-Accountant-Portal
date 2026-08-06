const mongoose = require("mongoose");
const Service = require("../models/Service");
require("dotenv").config();

mongoose.connect(process.env.MONGO_URI)
  .then(async () => {
    console.log("MongoDB Connected for Seeding");

    // Clear old services
    await Service.deleteMany({});
    console.log("Old services removed");

    await Service.insertMany([
      {
        title: "Audit & Assurance",
        slug: "audit-assurance",
        intro: "Ensuring transparency, accuracy, and trust in financial reporting.",
        description:
          "Our Audit & Assurance services help businesses maintain credibility with stakeholders, regulators, and investors through systematic and independent examinations.",
        highlights: [
          "Statutory Audits",
          "Internal Audits",
          "Tax Audits",
          "Forensic Audits",
          "Management Audits",
        ],
        image: "/images/services/audit.webp",
        icon: "audit"
      },
      {
        title: "Taxation Services",
        slug: "taxation-services",
        intro: "Strategic tax planning and end-to-end compliance support.",
        description:
          "We offer comprehensive taxation services covering direct and indirect taxes, helping clients stay compliant while optimizing tax efficiency.",
        highlights: [
          "Income Tax Returns",
          "GST Registration & Filing",
          "Tax Planning",
          "Tax Litigation Support",
          "Advisory on Tax Laws",
        ],
        image: "/images/services/tax_services.jpg",
        icon: "tax"
      },
      {
        title: "Legal Services",
        slug: "legal-services",
        intro: "Legal clarity and compliance for sustainable business growth.",
        description:
          "Our legal services support businesses in corporate law matters, documentation, and regulatory compliance.",
        highlights: [
          "Company Law Matters",
          "Drafting Agreements",
          "Regulatory Filings",
          "Legal Advisory",
          "Compliance Management",
        ],
        image: "/images/services/legal.webp",
        icon: "legal"
      },
      {
        title: "Debt Syndication",
        slug: "debt-syndication",
        intro: "Structured financing solutions to support business expansion.",
        description:
          "We assist clients in arranging and syndicating debt from banks and financial institutions.",
        highlights: [
          "Working Capital Finance",
          "Term Loan Arrangement",
          "Project Financing",
          "Bank Negotiations",
          "Financial Structuring",
        ],
        image: "/images/services/debt.jpeg",
        icon: "debt"
      },
      {
        title: "Insolvency & Bankruptcy Matters",
        slug: "insolvency-bankruptcy",
        intro: "Expert advisory under the Insolvency & Bankruptcy Code (IBC).",
        description:
          "Our insolvency services include advisory and representation for corporates and creditors.",
        highlights: [
          "IBC Advisory Services",
          "Resolution Process Support",
          "Liquidation Assistance",
          "Representation before NCLT",
          "Creditor Advisory",
        ],
        image: "/images/services/insolvency.webp",
        icon: "bankruptcy"
      },
      {
        title: "State Incentive",
        slug: "state-incentive",
        intro: "Helping businesses avail government incentives and subsidies.",
        description:
          "We provide advisory and end-to-end assistance in availing state government incentives.",
        highlights: [
          "Industrial Subsidy Advisory",
          "Incentive Scheme Identification",
          "Application & Documentation",
          "Liaison with Authorities",
          "Compliance & Reporting",
        ],
        image: "/images/services/incentives.jpg",
        icon: "state"
      },
      {
        title: "Outsourcing Services",
        slug: "outsourcing",
        intro: "Reliable outsourcing solutions for finance and compliance.",
        description:
          "Our outsourcing services help businesses streamline accounting and payroll functions.",
        highlights: [
          "Accounting & Bookkeeping",
          "Payroll Processing",
          "Compliance Management",
          "MIS Reporting",
          "Virtual CFO Services",
        ],
        image: "/images/services/outsourcing.webp",
        icon: "outsourcing"
      },
      {
  title: "RERA Compliance",
  slug: "rera-compliances",
  intro: "End-to-end Real Estate Regulatory Authority compliance support.",
  description:
    "Complete RERA advisory, registration, reporting, and ongoing compliance services.",
  fullDescription:
    "We provide complete RERA advisory including project registration, quarterly & annual filings, compliance monitoring, and liaison with regulatory authorities to ensure smooth real estate operations.",
  image: "/images/services/rera.jpg",
  highlights: [
    "RERA Registration",
    "Quarterly & Annual Filings",
    "Project Compliance Advisory",
    "Liaison with Authorities",
    "Ongoing Compliance Support",
  ],
  icon: "rera",
},
      {
  title: "Direct Tax",
  slug: "direct-tax",
  description:
    "Comprehensive direct tax advisory and compliance services for individuals and businesses.",
  fullDescription:
    "Our Direct Tax services are designed to help individuals, firms, and corporates comply with income tax laws while optimizing their tax position in a lawful and efficient manner.",
  highlights: [
    "Income Tax Return (ITR) filing",
    "Tax planning for individuals & businesses",
    "Corporate tax compliance",
    "Tax audits and assessments",
    "Representation before tax authorities",
  ],
  image: "/images/services/direct-tax.jpg",
  icon: "tax",
  buttonText: "Know More →",
  buttonLink: "#",
  order: 9,
},

{
  title: "Indirect Tax",
  slug: "indirect-tax",
  description:
    "End-to-end advisory and compliance services under GST and other indirect tax laws.",
  fullDescription:
    "Our Indirect Tax services focus on Goods & Services Tax (GST) compliance, advisory, and litigation support to ensure smooth business operations.",
  highlights: [
    "GST registration and returns",
    "GST audit and reconciliation",
    "GST advisory & structuring",
    "Handling notices and assessments",
    "Representation before GST authorities",
  ],
  image: "/images/services/indirect-tax.webp",
  icon: "tax",
  buttonText: "Know More →",
  buttonLink: "#",
  order: 10,
},
    ]);

    console.log("Services Seeded Successfully ✅");
    process.exit();
  })
  .catch((err) => {
    console.log(err);
    process.exit(1);
  });
