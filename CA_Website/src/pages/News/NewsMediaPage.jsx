import React from "react";
import axios from "axios";
import { useState, useEffect } from "react";
import "./NewsMediaPage.css";
import usePageTitle from "../../hooks/usePageTitle";

const NewsMediaPage = () => {
  usePageTitle("News & Media");

const [newsList, setNewsList] = useState([]);

useEffect(() => {
  const fetchNews = async () => {
    try {
      const res = await axios.get("http://localhost:5000/api/news");
      setNewsList(res.data);
    } catch (err) {
      console.log(err);
    }
  };

  fetchNews();
}, []);

  return (
    <main className="news-page">

      {/* HERO */}
      <section className="news-hero">
        <h1>News & Media</h1>
        <p>
          Updates, insights, and regulatory developments relevant to businesses,
          MSMEs, and professionals.
        </p>
      </section>

      {/* INTRO */}
      <section className="news-intro">
        <div className="news-container">
          <h2>Stay Informed. Stay Compliant.</h2>
          <p>
            Our News & Media section keeps you updated on important changes in
            taxation, compliance, corporate laws, and financial regulations.
            We curate relevant updates so you can make informed business
            decisions with confidence.
          </p>
        </div>
      </section>

      {/* NEWS GRID */}
      <section className="news-list">
  <div className="news-container news-grid">
    {newsList.map((news) => (
      <article className="news-card" key={news._id}>
        <span className="news-tag">{news.tag}</span>
        <h3>{news.title}</h3>
        <p>{news.description}</p>
        <span className="news-date">
          {news.date}
        </span>
      </article>
    ))}
  </div>
</section>


<section className="news-editorial">
  <div className="news-container">
    <h2>Our Editorial Philosophy</h2>

    <p className="editorial-lead">
      In an environment where regulatory information is constant and often overwhelming, clarity matters more than volume.
    </p>

    <div className="editorial-content">
      <p>
        Our News & Media updates are curated with a single objective — to help
        businesses and professionals understand what truly matters. We do not
        replicate notifications or circulate generic summaries. Instead, we
        focus on context, applicability, and real-world impact.
      </p>

      <p>
        Each update is reviewed from a practitioner’s perspective, keeping in
        mind compliance responsibilities, operational implications, and
        decision-making relevance. This ensures that our clients are not just
        informed, but prepared.
      </p>

      <p>
        Through this approach, we aim to bridge the gap between regulatory
        language and practical business understanding.
      </p>
    </div>
  </div>
</section>


    </main>
  );
};

export default NewsMediaPage;
