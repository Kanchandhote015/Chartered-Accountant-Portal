const mongoose = require("mongoose");
require("dotenv").config();

const News = require("../models/News");

const newsData = [
  {
    tag: "Tax Update",
    title: "Key Income Tax Amendments for Businesses",
    description:
      "Recent amendments to income tax provisions may impact advance tax planning and compliance requirements for businesses and MSMEs.",
    date: "March 2026"
  },
  {
    tag: "GST",
    title: "GST Compliance Updates & Filing Deadlines",
    description:
      "Important reminders and updates related to GST returns, ITC matching, and documentation requirements.",
    date: "February 2026"
  },
  {
    tag: "MSME",
    title: "Government Initiatives Supporting MSMEs",
    description:
      "Overview of recent government schemes, incentives, and compliance relaxations introduced for MSME growth and sustainability.",
    date: "January 2026"
  },
  {
    tag: "Corporate Law",
    title: "Regulatory Changes Affecting Companies",
    description:
      "Key corporate law updates including ROC filings, director compliances, and disclosure requirements.",
    date: "January 2026"
  },
  {
    tag: "Advisory",
    title: "Practical Compliance Tips for Growing Businesses",
    description:
      "Practical insights to help businesses streamline compliance, reduce risks, and improve financial discipline.",
    date: "December 2025"
  },
  {
    tag: "Insights",
    title: "Understanding Audit & Assurance Requirements",
    description:
      "A brief overview of audit applicability, timelines, and common compliance gaps observed during audits.",
    date: "December 2025"
  }
];

const seedNews = async () => {
  try {
    await mongoose.connect(process.env.MONGO_URI);
    console.log("MongoDB Connected");

    // ⚠️ Optional: clear old news
    await News.deleteMany();

    await News.insertMany(newsData);

    console.log("News inserted successfully");
    process.exit();
  } catch (error) {
    console.log(error);
    process.exit(1);
  }
};

seedNews();
