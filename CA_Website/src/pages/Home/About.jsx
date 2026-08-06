import React, { useEffect, useRef, useState } from "react";
import "./About.css";
import aboutImg from "../../assets/about-ca.jpg";

const About = () => {
  const imageRef = useRef(null);
  const [animate, setAnimate] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setAnimate(true);
          observer.disconnect(); // run only once
        }
      },
      { threshold: 0.3 }
    );

    if (imageRef.current) {
      observer.observe(imageRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <section className="about-section">
      <div className="about-container">

        {/* LEFT CONTENT */}
        <div className="about-content">
          <h2>Who We Are...</h2>
          <p>
            Kabra Sarda & Associates is a professionally managed Chartered
            Accountancy firm providing end-to-end solutions in taxation, audit,
            compliance, and advisory services.
          </p>

          <p>
            We work closely with individuals, startups, MSMEs, and corporates to
            ensure regulatory compliance, financial clarity, and sustainable
            growth with trust and transparency.
          </p>
        </div>

        {/* RIGHT IMAGE */}
        <div
          ref={imageRef}
          className={`about-image ${animate ? "animate" : ""}`}
        >
          <img src={aboutImg} alt="Chartered Accountant Services" />
        </div>

      </div>
    </section>
  );
};

export default About;
