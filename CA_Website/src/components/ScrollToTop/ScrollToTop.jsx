// import React, { useEffect } from "react";
// import { FaArrowUp } from "react-icons/fa";
// import { useLocation } from "react-router-dom";
// import "./ScrollToTop.css";

// const ScrollToTop = () => {
//   const { pathname } = useLocation();

//   // 1. Automatically scroll to top when the URL/route changes
//   useEffect(() => {
//     window.scrollTo(0, 0);
//   }, [pathname]);

//   // 2. Manual scroll function for the button
//   const scrollUp = () => {
//     window.scrollTo({
//       top: 0,
//       behavior: "smooth",
//     });
//   };

//   return (
//     <button className="scroll-to-top" onClick={scrollUp}>
//       <FaArrowUp />
//     </button>
//   );
// };

// export default ScrollToTop;

import React, { useEffect, useState } from "react";
import { FaArrowUp } from "react-icons/fa";
import { useLocation } from "react-router-dom";
import "./ScrollToTop.css";

const ScrollToTop = () => {
  const { pathname } = useLocation();
  const [showButton, setShowButton] = useState(false);

  // Scroll to top when route changes
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  // Show button after scrolling down
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 150) {   // 👈 adjust this value
        setShowButton(true);
      } else {
        setShowButton(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollUp = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <button
      className={`scroll-to-top ${showButton ? "show" : ""}`}
      onClick={scrollUp}
    >
      <FaArrowUp />
    </button>
  );
};

export default ScrollToTop;
