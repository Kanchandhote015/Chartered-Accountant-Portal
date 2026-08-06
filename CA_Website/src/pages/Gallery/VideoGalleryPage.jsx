// // // import React, { useState } from "react";
// // // import "./VideoGalleryPage.css";
// // // import usePageTitle from "../../hooks/usePageTitle";

// // // const videos = [
// // //   {
// // //     title: "Understanding GST Compliance in India",
// // //     embed: "https://www.youtube.com/embed/6v2L2UGZJAM",
// // //   },
// // //   {
// // //     title: "Understanding GST Compliance in India",
// // //     embed: "https://www.youtube.com/embed/6v2L2UGZJAM",
// // //   },
// // //   {
// // //     title: "Understanding GST Compliance in India",
// // //     embed: "https://www.youtube.com/embed/6v2L2UGZJAM",
// // //   },
// // // ];

// // // const VideoGalleryPage = () => {
// // //   usePageTitle("Video Gallery");

// // //   const [loadedVideos, setLoadedVideos] = useState({});

// // //   const handleLoaded = (index) => {
// // //     setLoadedVideos((prev) => ({ ...prev, [index]: true }));
// // //   };

// // //   return (
// // //     <section className="video-gallery-page">

// // //       {/* HERO */}
// // //       <section className="video-gallery-hero">
// // //         <h1>Video Gallery</h1>
// // //         <p>
// // //           Watch our seminars, knowledge sessions,
// // //           and important professional updates.
// // //         </p>
// // //       </section>

// // //       {/* VIDEOS */}
// // //       <section className="video-gallery">
// // //         <div className="video-grid">

// // //           {videos.map((video, index) => (
// // //             <div className="video-card" key={index}>

// // //               {/* SKELETON */}
// // //               {!loadedVideos[index] && (
// // //                 <div className="video-skeleton">
// // //                   <div className="skeleton-video"></div>
// // //                   <div className="skeleton-text"></div>
// // //                 </div>
// // //               )}

// // //               {/* VIDEO */}
// // //               <iframe
// // //                 src={video.embed}
// // //                 title={video.title}
// // //                 loading="lazy"
// // //                 onLoad={() => handleLoaded(index)}
// // //                 style={{ display: loadedVideos[index] ? "block" : "none" }}
// // //                 frameBorder="0"
// // //                 allowFullScreen
// // //               ></iframe>

// // //               <h3>{video.title}</h3>
// // //             </div>
// // //           ))}

// // //         </div>
// // //       </section>

// // //     </section>
// // //   );
// // // };

// // // export default VideoGalleryPage;


// // import React, { useState } from "react";
// // import Masonry from "react-masonry-css";
// // import "./VideoGalleryPage.css";
// // import usePageTitle from "../../hooks/usePageTitle";

// // const videos = [
// //   {
// //     title: "Rainforest Nature Sounds",
// //     id: "mPZkdNFkNps",
// //     description:
// //       "Relaxing mountain landscapes and peaceful natural scenery."
// //   },
// //   {
// //     title: "Rainforest Nature Sounds",
// //     id: "mPZkdNFkNps",
// //     description:
// //       "Calming ocean waves and golden sunset views."
// //   },
// //   {
// //     title: "Rainforest Nature Sounds",
// //     id: "mPZkdNFkNps",
// //     description:
// //       "Cinematic forest scenes with soothing background atmosphere."
// //   },
// //   {
// //     title: "Rainforest Nature Sounds",
// //     id: "mPZkdNFkNps",
// //     description:
// //       "Beautiful waterfall surrounded by lush greenery."
// //   },
// //   {
// //     title: "Rainforest Nature Sounds",
// //     id: "mPZkdNFkNps",
// //     description:
// //       "Aerial drone footage of snowy mountains and valleys."
// //   },
// //   {
// //     title: "Rainforest Nature Sounds",
// //     id: "mPZkdNFkNps",
// //     description:
// //       "Deep rainforest visuals with natural soundscape."
// //   },
// //   {
// //     title: "Rainforest Nature Sounds",
// //     id: "mPZkdNFkNps",
// //     description:
// //       "Golden desert sunset captured in timelapse."
// //   },
// //   {
// //     title: "Rainforest Nature Sounds",
// //     id: "mPZkdNFkNps",
// //     description:
// //       "Gentle flowing river surrounded by trees."
// //   },
// //   {
// //     title: "Rainforest Nature Sounds",
// //     id: "mPZkdNFkNps",
// //     description:
// //       "Deep rainforest visuals with natural soundscape."
// //   }
// // ];

// // const breakpointColumnsObj = {
// //   default: 3,
// //   992: 2,
// //   576: 1,
// // };

// // const VideoGalleryPage = () => {
// //   usePageTitle("Video Gallery");
// //   const [activeVideo, setActiveVideo] = useState(null);

// //   return (
// //     <section className="video-gallery-page">
// //       <section className="video-gallery-hero">
// //         <h1>Video Gallery</h1>
// //         <p>
// //           Watch our seminars, knowledge sessions,
// //           and important professional updates.
// //         </p>
// //       </section>

// //       <section className="video-gallery">
// //         <Masonry
// //           breakpointCols={breakpointColumnsObj}
// //           className="masonry-grid"
// //           columnClassName="masonry-column"
// //         >
// //           {videos.map((video, index) => (
// //             <div className="video-card" key={index}>

// //               {activeVideo === index ? (
// //                 <iframe
// //                   src={`https://www.youtube.com/embed/${video.id}?autoplay=1`}
// //                   title={video.title}
// //                   frameBorder="0"
// //                   allowFullScreen
// //                 ></iframe>
// //               ) : (
// //                 <div
// //                   className="video-thumbnail"
// //                   onClick={() => setActiveVideo(index)}
// //                 >
// //                   <img
// //                     src={`https://img.youtube.com/vi/${video.id}/maxresdefault.jpg`}
// //                     alt={video.title}
// //                   />
// //                   <div className="play-button">▶</div>
// //                 </div>
// //               )}

// //               <h3>{video.title}</h3>
// //               <p className="video-desc">{video.description}</p>

// //             </div>
// //           ))}
// //         </Masonry>
// //       </section>
// //     </section>
// //   );
// // };

// // export default VideoGalleryPage;

// import React, { useEffect, useState } from "react";
// import Masonry from "react-masonry-css";
// import "./VideoGalleryPage.css";
// import usePageTitle from "../../hooks/usePageTitle";

// const breakpointColumnsObj = {
//   default: 3,
//   992: 2,
//   576: 1,
// };

// const VideoGalleryPage = () => {
//   usePageTitle("Video Gallery");

//   const [videos, setVideos] = useState([]);
//   const [activeVideo, setActiveVideo] = useState(null);

//   useEffect(() => {
//     fetch("http://localhost:5000/api/gallery")
//       .then((res) => res.json())
//       .then((data) => {
//         const videoData = data.filter(
//           (item) => item.type === "video"
//         );
//         setVideos(videoData);
//       })
//       .catch((err) => {
//         console.error("Error fetching videos:", err);
//       });
//   }, []);

//   return (
//     <section className="video-gallery-page">

//       {/* HERO */}
//       <section className="video-gallery-hero">
//         <h1>Video Gallery</h1>
//         <p>
//           Watch our seminars, knowledge sessions,
//           and important professional updates.
//         </p>
//       </section>

//       {/* VIDEOS */}
//       <section className="video-gallery">
//         <Masonry
//           breakpointCols={breakpointColumnsObj}
//           className="masonry-grid"
//           columnClassName="masonry-column"
//         >
//           {videos.map((video, index) => (
//             <div className="video-card" key={video._id}>

//               {activeVideo === index ? (
//                 <iframe
//                   src={`https://www.youtube.com/embed/${video.url}?autoplay=1`}
//                   title={video.title}
//                   frameBorder="0"
//                   allowFullScreen
//                 ></iframe>
//               ) : (
//                 <div
//                   className="video-thumbnail"
//                   onClick={() => setActiveVideo(index)}
//                 >
//                   <img
//                     src={`https://img.youtube.com/vi/${video.url}/maxresdefault.jpg`}
//                     alt={video.title}
//                   />
//                   <div className="play-button">▶</div>
//                 </div>
//               )}

//               <h3>{video.title}</h3>
//               <p className="video-desc">{video.description}</p>

//             </div>
//           ))}
//         </Masonry>
//       </section>
//     </section>
//   );
// };

// export default VideoGalleryPage;

import React, { useEffect, useState } from "react";
import Masonry from "react-masonry-css";
import "./VideoGalleryPage.css";
import usePageTitle from "../../hooks/usePageTitle";

const breakpointColumnsObj = {
  default: 3,
  992: 2,
  576: 1,
};

const VideoGalleryPage = () => {
  usePageTitle("Video Gallery");

  const [videos, setVideos] = useState([]);
  const [activeVideo, setActiveVideo] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch("http://localhost:5000/api/gallery")
      .then((res) => res.json())
      .then((data) => {
        // Filter videos safely (case insensitive)
        const videoData = data.filter(
          (item) =>
            item.type &&
            item.type.toLowerCase() === "video" &&
            item.isDeleted === false
        );

        setVideos(videoData);
        setLoading(false);
      })
      .catch((err) => {
        console.error("Error fetching videos:", err);
        setLoading(false);
      });
  }, []);

  // Function to extract clean YouTube ID
  const getYouTubeId = (url) => {
    if (!url) return "";

    const trimmed = url.trim();

    // If full YouTube link
    if (trimmed.includes("youtube.com/watch?v=")) {
      return trimmed.split("v=")[1]?.split("&")[0];
    }

    if (trimmed.includes("youtu.be/")) {
      return trimmed.split("youtu.be/")[1];
    }

    // Otherwise assume it's already ID
    return trimmed;
  };

  return (
    <section className="video-gallery-page">

      {/* HERO */}
      <section className="video-gallery-hero">
        <h1>Video Gallery</h1>
        <p>
          Watch our seminars, knowledge sessions,
          and important professional updates.
        </p>
      </section>

      {/* VIDEOS */}
      <section className="video-gallery">

        {loading ? (
          <p style={{ textAlign: "center" }}>Loading videos...</p>
        ) : videos.length === 0 ? (
          <div style={{ textAlign: "center", padding: "60px 20px" }}>
            <h3>No videos available</h3>
            <p>Videos will appear here once uploaded by admin.</p>
          </div>
        ) : (
          <Masonry
            breakpointCols={breakpointColumnsObj}
            className="masonry-grid"
            columnClassName="masonry-column"
          >
            {videos.map((video, index) => {

              const videoId = getYouTubeId(video.url);

              return (
                <div className="video-card" key={video._id}>

                  {activeVideo === index ? (
                    <iframe
                      src={`https://www.youtube.com/embed/${videoId}?autoplay=1`}
                      title={video.title}
                      frameBorder="0"
                      allowFullScreen
                    />
                  ) : (
                    <div
                      className="video-thumbnail"
                      onClick={() => setActiveVideo(index)}
                    >
                      <img
                        src={`https://img.youtube.com/vi/${videoId}/hqdefault.jpg`}
                        alt={video.title}
                        onError={(e) => {
                          e.target.src =
                            "https://via.placeholder.com/400x250?text=Invalid+Video";
                        }}
                      />
                      <div className="play-button">▶</div>
                    </div>
                  )}

                  <h3>{video.title}</h3>
                  <p className="video-desc">{video.description}</p>

                </div>
              );
            })}
          </Masonry>
        )}
      </section>
    </section>
  );
};

export default VideoGalleryPage;
