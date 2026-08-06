import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";

import Navbar from "./components/Navbar/Navbar";
import Footer from "./components/Footer/Footer";
import Hero from "./pages/Home/Hero";
import About from "./pages/Home/About";
import OurServices from "./pages/Home/OurServices";
import AboutPage from "./pages/About/AboutPage";
import MSMEPage from "./pages/MSME/MSMEPage";
import OurServicesPage from "./pages/OurServices/OurServicesPage";
import GalleryPage from "./pages/Gallery/GalleryPage";
import PhotoGalleryPage from "./pages/Gallery/PhotoGalleryPage";
import VideoGalleryPage from "./pages/Gallery/VideoGalleryPage";
import NewsMediaPage from "./pages/News/NewsMediaPage";
import ContactPage from "./pages/Contact/ContactPage";

// SERVICE DETAIL PAGE
import ServiceDetailPage from"./pages/OurServices/ServiceDetailPage";
import ScrollToTop from "./components/ScrollToTop/ScrollToTop";

import "./index.css";

function App() {
  return (
  <BrowserRouter>

    <Navbar />
    <ScrollToTop />
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
      <Route path="/msme-solutions" element={<MSMEPage />} />
     <Route path="/our-services" element={<OurServicesPage />} />
     <Route path="/gallery" element={<GalleryPage />} />
     <Route path="/gallery/photos" element={<PhotoGalleryPage />}/>
     <Route path="/gallery/videos" element={<VideoGalleryPage />}/>
     <Route path="/news-media" element={<NewsMediaPage />} />
     <Route path="/contact-us" element={<ContactPage />} />

     {/* SERVICE DETAILS */}
     <Route path="/our-services/:slug" element={<ServiceDetailPage />} />

    </Routes>

   <ScrollToTop /> 
   <Footer />
  </BrowserRouter>
    
  );
}

export default App;
