import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";

import Navbar from "./components/Navbar/Navbar";
import Footer from "./components/Footer/Footer";

// HOME PAGE SECTIONS
import Hero from "./pages/Home/Hero";
import About from "./pages/Home/About";
import OurServices from "./pages/Home/OurServices";

import AboutPage from "./pages/About/AboutPage";
// import MSMEPage from "./pages/MSME/MSMEPage";
// OUR SERVICES PAGE
import OurServicesPage from "./pages/OurServices/OurServicesPage";
// import GalleryPage from "./pages/Gallery/GalleryPage";
// import NewsPage from "./pages/News/NewsPage";
// import ContactPage from "./pages/Contact/ContactPage";

// SERVICE DETAIL PAGE
import ServiceDetailPage from"./pages/OurServices/ServiceDetailPage";

import ScrollToTop from "./components/ScrollToTop/ScrollToTop";
import "./index.css";

function App() {
  return (
  <BrowserRouter>
    <Navbar />

    <Routes>
      {/* HOME PAGE */}
      <Route
        path="/"
        element={
          <>
            <Hero />
            <About />
            <OurServices />
          </>
        }
      />

      <Route path="/about-us" element={<AboutPage />} />
      {/* <Route path="/msme-solutions" element={<MSMEPage />} /> */}
     {/* OUR SERVICES (FULL PAGE) */}
     <Route path="/our-services" element={<OurServicesPage />} />
     {/* <Route path="/gallery" element={<GalleryPage />} /> */}
     {/* <Route path="/news-media" element={<NewsPage />} /> */}
     {/* <Route path="/contact" element={<ContactPage />} /> */}

     {/* SERVICE DETAILS */}
     <Route path="/our-services/:serviceSlug" element={<ServiceDetailPage />} />

    </Routes>

   <ScrollToTop /> 
   <Footer />
  </BrowserRouter>
    
  );
}

export default App;
