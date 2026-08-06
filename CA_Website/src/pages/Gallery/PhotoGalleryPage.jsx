// import React, { useEffect, useState } from "react";
// import Masonry from "react-masonry-css";
// import "./PhotoGalleryPage.css";
// import usePageTitle from "../../hooks/usePageTitle";

// const photos = [
//   "https://images.unsplash.com/photo-1520607162513-77705c0f0d4a?w=600&h=900&fit=crop",
//   "https://images.unsplash.com/photo-1521737604893-d14cc237f11d?w=600&h=400&fit=crop",
//   "https://images.unsplash.com/photo-1551836022-d5d88e9218df?w=600&h=800&fit=crop",
//   "https://images.unsplash.com/photo-1503387762-592deb58ef4e?w=600&h=500&fit=crop",
//   "https://images.unsplash.com/photo-1523958203904-cdcb402031fd?w=600&h=750&fit=crop",
//   "https://images.unsplash.com/photo-1497366216548-37526070297c?w=600&h=450&fit=crop",
//   "https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=600&h=850&fit=crop",
//   "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?w=600&h=550&fit=crop",
//   "https://images.unsplash.com/photo-1556761175-4b46a572b786?w=600&h=700&fit=crop",
//   "https://images.unsplash.com/photo-1492724441997-5dc865305da7?w=600&h=600&fit=crop",
//   "https://images.unsplash.com/photo-1487017159836-4e23ece2e4cf?w=600&h=900&fit=crop",
//   "https://images.unsplash.com/photo-1487017159836-4e23ece2e4cf?w=600&h=900&fit=crop",
//   // "https://images.unsplash.com/photo-1487017159836-4e23ece2e4cf?w=600&h=900&fit=crop",
//   // "https://images.unsplash.com/photo-1532619675605-1ede6c2ed2b0?w=600&h=500&fit=crop",
//   // "https://images.unsplash.com/photo-1504384308090-c894fdcc538d?w=600&h=750&fit=crop",
//   // "https://images.unsplash.com/photo-1498050108023-c5249f4df085?w=600&h=400&fit=crop",
//   // "https://images.unsplash.com/photo-1551434678-e076c223a692?w=600&h=850&fit=crop",
//   // "https://images.unsplash.com/photo-1519389950473-47ba0277781c?w=600&h=550&fit=crop",
// ];

// const breakpointColumnsObj = {
//   default: 3,
//   // 1200: 3,
//   992: 2,
//   576: 1,
// };

// const PhotoGalleryPage = () => {
//   usePageTitle("Photo Gallery");
//   const [loading, setLoading] = useState(true);

//   useEffect(() => {
//     const timer = setTimeout(() => {
//       setLoading(false);
//     }, 1000);
//     return () => clearTimeout(timer);
//   }, []);

//   return (
//     <section className="photo-gallery-page">
//       <section className="photo-gallery-hero">
//         <h1>Photo Gallery</h1>
//         <p>
//           Moments from our office, events, professional meetings,
//           and team activities.
//         </p>
//       </section>

//       <section className="photo-gallery">
//         {loading ? (
//           <div className="photo-grid">
//             {photos.map((_, index) => (
//               <div className="photo-item skeleton" key={index}></div>
//             ))}
//           </div>
//         ) : (
//           <Masonry
//             breakpointCols={breakpointColumnsObj}
//             className="masonry-grid"
//             columnClassName="masonry-column"
//           >
//             {photos.map((img, index) => (
//               <div className="photo-item" key={index}>
//                 <img src={img} alt={`Gallery ${index + 1}`} />
//               </div>
//             ))}
//           </Masonry>
//         )}
//       </section>
//     </section>
//   );
// };

// export default PhotoGalleryPage;

import React, { useEffect, useState } from "react";
import Masonry from "react-masonry-css";
import "./PhotoGalleryPage.css";
import usePageTitle from "../../hooks/usePageTitle";

const breakpointColumnsObj = {
  default: 3,
  992: 2,
  576: 1,
};

const PhotoGalleryPage = () => {
  usePageTitle("Photo Gallery");

  const [photos, setPhotos] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch("http://localhost:5000/api/gallery")
      .then((res) => res.json())
      .then((data) => {
        const photoData = data.filter(
          (item) => item.type === "photo" && item.isDeleted === false
        );
        setPhotos(photoData);
        setLoading(false);
      })
      .catch((err) => {
        console.error("Error fetching photos:", err);
        setLoading(false);
      });
  }, []);

  return (
    <section className="photo-gallery-page">

      {/* HERO */}
      <section className="photo-gallery-hero">
        <h1>Photo Gallery</h1>
        <p>
          Moments from our office, events, professional meetings,
          and team activities.
        </p>
      </section>

      {/* PHOTOS */}
      <section className="photo-gallery">
        {loading ? (
          <div className="photo-grid">
            {Array.from({ length: 6 }).map((_, index) => (
              <div className="photo-item skeleton" key={index}></div>
            ))}
          </div>
        ) : photos.length === 0 ? (
          <div className="no-photos-message">
            <h3>No photos available</h3>
            <p>Photos will appear here once uploaded by admin.</p>
          </div>
        ) : (
          <Masonry
            breakpointCols={breakpointColumnsObj}
            className="masonry-grid"
            columnClassName="masonry-column"
          >
            {photos.map((item) => (
              <div className="photo-item" key={item._id}>
                <img
                  src={
                    item.url.startsWith("http")
                      ? item.url
                      : `http://localhost:5000${item.url}`
                  }
                  alt={item.title}
                />
              </div>
            ))}
          </Masonry>
        )}
      </section>

    </section>
  );
};

export default PhotoGalleryPage;
