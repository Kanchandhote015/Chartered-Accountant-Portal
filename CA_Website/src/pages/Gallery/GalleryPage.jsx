// // import React, { useEffect, useState } from "react";
// // import { Link } from "react-router-dom";
// // import "./GalleryPage.css";
// // import usePageTitle from "../../hooks/usePageTitle";

// // const GalleryPage = () => {
// //   usePageTitle("Gallery");

// //   const [loading, setLoading] = useState(true);

// //   useEffect(() => {
// //     const timer = setTimeout(() => {
// //       setLoading(false);
// //     }, 1500); // simulate loading delay

// //     return () => clearTimeout(timer);
// //   }, []);

// //   return (
// //     <section className="gallery-page">

// //       {/* HERO */}
// //       <section className="services-hero gallery-hero">
// //         <h1>Gallery</h1>
// //         <p>
// //           Explore moments from our professional journey, events, and client
// //           engagements through photos and videos.
// //         </p>
// //       </section>

// //       {/* CONTENT */}
// //       <section className="gallery-main">
// //         <div className="gallery-container">

// //           {/* PHOTO GALLERY */}
// //           <div className="gallery-section-block photo-gallery">
// //             <h2>Photos</h2>
// //             <p>
// //               A glimpse into our office environment, professional events,
// //               team activities, and client interactions.
// //             </p>

// //             <div className="gallery-preview">
// //               {loading
// //                 ? Array.from({ length: 3 }).map((_, i) => (
// //                     <div className="gallery-skeleton" key={i}></div>
// //                   ))
// //                 : (
// //                   <>
// //                     <img src="https://images.unsplash.com/photo-1520607162513-77705c0f0d4a" alt="Office" />
// //                     <img src="https://images.unsplash.com/photo-1521737604893-d14cc237f11d" alt="Team" />
// //                     <img src="https://images.unsplash.com/photo-1551836022-d5d88e9218df" alt="Meeting" />
// //                   </>
// //                 )}
// //             </div>

// //             <Link to="/gallery/photos" className="gallery-btn">
// //               View Photo Gallery →
// //             </Link>
// //           </div>

// //           {/* VIDEO GALLERY */}
// //           <div className="gallery-section-block">
// //             <h2>Videos</h2>
// //             <p>
// //               Watch recordings from seminars, knowledge sessions,
// //               professional insights, and important firm updates.
// //             </p>

// //             <div className="gallery-preview">
// //               {loading
// //                 ? Array.from({ length: 3 }).map((_, i) => (
// //                     <div className="gallery-skeleton video" key={i}></div>
// //                   ))
// //                 : (
// //                   <>
// //                     <div className="video-thumb">▶ Seminar Highlights</div>
// //                     <div className="video-thumb">▶ GST Awareness Session</div>
// //                     <div className="video-thumb">▶ Client Advisory Talk</div>
// //                   </>
// //                 )}
// //             </div>

// //             <div className="video-btn">
// //               <Link to="/gallery/videos" className="gallery-btn">
// //                 View Video Gallery →
// //               </Link>
// //             </div>
// //           </div>

// //         </div>
// //       </section>

// //     </section>
// //   );
// // };

// // export default GalleryPage;

// import React, { useEffect, useState } from "react";
// import { Link } from "react-router-dom";
// import "./GalleryPage.css";
// import usePageTitle from "../../hooks/usePageTitle";

// const GalleryPage = () => {
//   usePageTitle("Gallery");

//   const [loading, setLoading] = useState(true);
//   const [galleryData, setGalleryData] = useState([]);

//   useEffect(() => {
//     fetch("http://localhost:5000/api/gallery")
//       .then((res) => res.json())
//       .then((data) => {
//         setGalleryData(data);
//         setLoading(false);
//       })
//       .catch((err) => {
//         console.error("Error fetching gallery:", err);
//         setLoading(false);
//       });
//   }, []);

//   const photoPreview = galleryData
//     .filter((item) => item.type === "photo")
//     .slice(0, 3);

//   const videoPreview = galleryData
//     .filter((item) => item.type === "video")
//     .slice(0, 3);

//   return (
//     <section className="gallery-page">

//       {/* HERO */}
//       <section className="services-hero gallery-hero">
//         <h1>Gallery</h1>
//         <p>
//           Explore moments from our professional journey, events, and client
//           engagements through photos and videos.
//         </p>
//       </section>

//       {/* CONTENT */}
//       <section className="gallery-main">
//         <div className="gallery-container">

//           {/* PHOTO GALLERY */}
//           <div className="gallery-section-block photo-gallery">
//             <h2>Photos</h2>
//             <p>
//               A glimpse into our office environment, professional events,
//               team activities, and client interactions.
//             </p>

//             <div className="gallery-preview">
//               {loading
//                 ? Array.from({ length: 3 }).map((_, i) => (
//                     <div className="gallery-skeleton" key={i}></div>
//                   ))
//                 : photoPreview.map((item) => (
//                     <img
//                       key={item._id}
//                       src={item.url}
//                       alt={item.title}
//                     />
//                   ))}
//             </div>

//             <Link to="/gallery/photos" className="gallery-btn">
//               View Photo Gallery →
//             </Link>
//           </div>

//           {/* VIDEO GALLERY */}
//           <div className="gallery-section-block">
//             <h2>Videos</h2>
//             <p>
//               Watch recordings from seminars, knowledge sessions,
//               professional insights, and important firm updates.
//             </p>

//             {/* <div className="gallery-preview">
//               {loading
//                 ? Array.from({ length: 3 }).map((_, i) => (
//                     <div className="gallery-skeleton video" key={i}></div>
//                   ))
//                 : videoPreview.map((item) => (
//                     <div key={item._id} className="video-thumb">
//                       ▶ {item.title}
//                     </div>
//                   ))}
//             </div> */}

//             <div className="gallery-preview">
//   {loading
//     ? Array.from({ length: 3 }).map((_, i) => (
//         <div className="gallery-skeleton video" key={i}></div>
//       ))
//     : videoPreview.map((item) => {
//         const cleanId = item.url?.trim();

//         return (
//           <div key={item._id} className="video-preview-thumb">
//             <img
//               src={`https://img.youtube.com/vi/${cleanId}/hqdefault.jpg`}
//               alt={item.title}
//               onError={(e) => {
//                 e.target.src =
//                   "https://via.placeholder.com/400x250?text=Video";
//               }}
//             />
//             <div className="preview-play">▶</div>
//           </div>
//         );
//       })}
// </div>


//             <div className="video-btn">
//               <Link to="/gallery/videos" className="gallery-btn">
//                 View Video Gallery →
//               </Link>
//             </div>
//           </div>

//         </div>
//       </section>

//     </section>
//   );
// };

// export default GalleryPage;


import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import "./GalleryPage.css";
import usePageTitle from "../../hooks/usePageTitle";

const GalleryPage = () => {
  usePageTitle("Gallery");

  const [loading, setLoading] = useState(true);
  const [galleryData, setGalleryData] = useState([]);
  const [activeVideo, setActiveVideo] = useState(null); // for inline video play

  useEffect(() => {
    fetch("http://localhost:5000/api/gallery")
      .then((res) => res.json())
      .then((data) => {
        setGalleryData(data);
        setLoading(false);
      })
      .catch((err) => {
        console.error("Error fetching gallery:", err);
        setLoading(false);
      });
  }, []);

  const photoPreview = galleryData
    .filter((item) => item.type === "photo")
    .slice(0, 3);

  const videoPreview = galleryData
    .filter((item) => item.type === "video")
    .slice(0, 3);

  return (
    <section className="gallery-page">

      {/* HERO */}
      <section className="services-hero gallery-hero">
        <h1>Gallery</h1>
        <p>
          Explore moments from our professional journey, events, and client
          engagements through photos and videos.
        </p>
      </section>

      {/* CONTENT */}
      <section className="gallery-main">
        <div className="gallery-container">

          {/* PHOTO GALLERY */}
          <div className="gallery-section-block photo-gallery">
            <h2>Photos</h2>
            <p>
              A glimpse into our office environment, professional events,
              team activities, and client interactions.
            </p>

            <div className="gallery-preview">
              {loading
                ? Array.from({ length: 3 }).map((_, i) => (
                    <div className="gallery-skeleton" key={i}></div>
                  ))
                : photoPreview.map((item) => (
                    <img
                      key={item._id}
                      src={
                        item.url.startsWith("http")
                          ? item.url
                          : `http://localhost:5000${item.url}`
                      }
                      alt={item.title}
                    />
                  ))}
            </div>

            <Link to="/gallery/photos" className="gallery-btn">
              View Photo Gallery →
            </Link>
          </div>

          {/* VIDEO GALLERY */}
          <div className="gallery-section-block">
            <h2>Videos</h2>
            <p>
              Watch recordings from seminars, knowledge sessions,
              professional insights, and important firm updates.
            </p>

            <div className="gallery-preview">
              {loading
                ? Array.from({ length: 3 }).map((_, i) => (
                    <div className="gallery-skeleton video" key={i}></div>
                  ))
                : videoPreview.map((item, index) => {
                    const cleanId = item.url?.trim();

                    return (
                      <div key={item._id} className="video-preview-thumb">

                        {activeVideo === index ? (
                          <iframe
                            src={`https://www.youtube.com/embed/${cleanId}?autoplay=1`}
                            title={item.title}
                            frameBorder="0"
                            allow="autoplay; encrypted-media"
                            allowFullScreen
                          ></iframe>
                        ) : (
                          <div
                            className="thumbnail-wrapper"
                            onClick={() => setActiveVideo(index)}
                          >
                            <img
                              src={`https://img.youtube.com/vi/${cleanId}/hqdefault.jpg`}
                              alt={item.title}
                              onError={(e) => {
                                e.target.src =
                                  "https://via.placeholder.com/400x250?text=Video";
                              }}
                            />
                            <div className="preview-play">▶</div>
                          </div>
                        )}

                      </div>
                    );
                  })}
            </div>

            <div className="video-btn">
              <Link to="/gallery/videos" className="gallery-btn">
                View Video Gallery →
              </Link>
            </div>
          </div>

        </div>
      </section>

    </section>
  );
};

export default GalleryPage;