import auditImg from "../../assets/services/audit.webp";
import taxImg from "../../assets/services/tax_services.jpg";
import legalImg from "../../assets/services/legal.webp";
import debtImg from "../../assets/services/debt.jpeg";
import insolvencyImg from "../../assets/services/insolvency.webp";
import stateImg from "../../assets/services/incentives.jpg";
import outsourcingImg from "../../assets/services/outsourcing.webp";
import reraImg from "../../assets/services/rera.jpg";
import directTaxImg from "../../assets/services/direct-tax.jpg";
import indirectTaxImg from "../../assets/services/indirect-tax.webp";


const ServicesContent = {
  "audit-assurance": {
    title: "Audit & Assurance",
    image: auditImg,
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
  },

  "taxation-services": {
    title: "Taxation Services",
    image: taxImg,
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
  },

  "legal-services": {
    title: "Legal Services",
    image: legalImg,
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
  },

  "debt-syndication": {
    title: "Debt Syndication",
    image: debtImg,
    intro: "Structured financing solutions to support business expansion.",
    description:
      "We assist clients in arranging and syndicating debt from banks and financial institutions, ensuring optimal funding structures aligned with business objectives.",
    highlights: [
      "Working Capital Finance",
      "Term Loan Arrangement",
      "Project Financing",
      "Bank Negotiations",
      "Financial Structuring",
    ],
  },

  "insolvency-bankruptcy": {
    title: "Insolvency & Bankruptcy Matters",
    image: insolvencyImg,
    intro: "Expert advisory under the Insolvency & Bankruptcy Code (IBC).",
    description:
      "Our insolvency services include advisory and representation for corporates, creditors, and stakeholders under the Insolvency & Bankruptcy Code.",
    highlights: [
      "IBC Advisory Services",
      "Resolution Process Support",
      "Liquidation Assistance",
      "Representation before NCLT",
      "Creditor Advisory",
    ],
  },

  "state-incentive": {
    title: "State Incentive",
    image: stateImg,
    intro: "Helping businesses avail government incentives and subsidies.",
    description:
      "We provide advisory and end-to-end assistance in availing state government incentives, subsidies, and industrial promotion schemes.",
    highlights: [
      "Industrial Subsidy Advisory",
      "Incentive Scheme Identification",
      "Application & Documentation",
      "Liaison with Authorities",
      "Compliance & Reporting",
    ],
  },

  "outsourcing": {
    title: "Outsourcing Services",
    image: outsourcingImg,
    intro: "Reliable outsourcing solutions for finance and compliance.",
    description:
      "Our outsourcing services help businesses streamline operations by managing accounting, payroll, and compliance functions efficiently.",
    highlights: [
      "Accounting & Bookkeeping",
      "Payroll Processing",
      "Compliance Management",
      "MIS Reporting",
      "Virtual CFO Services",
    ],
  },

  "rera-compliances": {
    title: "RERA Compliances",
    image: reraImg,
    intro: "End-to-end Real Estate Regulatory Authority compliance support.",
    description:
      "We offer complete RERA advisory and compliance services including registration, reporting, and ongoing regulatory support.",
    highlights: [
      "RERA Registration",
      "Quarterly & Annual Filings",
      "Project Compliance Advisory",
      "Liaison with RERA Authorities",
      "Ongoing Compliance Support",
    ],
  },

  "direct-tax": {
    title: "Direct Tax",
    image: directTaxImg,
    intro:"Comprehensive direct tax advisory and compliance services for individuals and businesses.",
    description: `
      Our Direct Tax services are designed to help individuals, firms,
      and corporates comply with income tax laws while optimizing their
      tax position in a lawful and efficient manner.
    `,
    highlights: [
      "Income Tax Return (ITR) filing",
      "Tax planning for individuals & businesses",
      "Corporate tax compliance",
      "Tax audits and assessments",
      "Representation before tax authorities",
    ],
  },

  "indirect-tax": {
    title: "Indirect Tax",
    image: indirectTaxImg,
    intro: "End-to-end advisory and compliance services under GST and other indirect tax laws.",
    description: `
      Our Indirect Tax services focus on Goods & Services Tax (GST)
      compliance, advisory, and litigation support to ensure smooth
      business operations.
    `,
    highlights: [
      "GST registration and returns",
      "GST audit and reconciliation",
      "GST advisory & structuring",
      "Handling notices and assessments",
      "Representation before GST authorities",
    ],
  },
};

export default ServicesContent;
