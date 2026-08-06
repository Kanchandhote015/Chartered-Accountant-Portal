// import { useEffect, useState, useRef } from "react";
// import axios from "axios";
// import AdminLayout from "../components/AdminLayout";
// import "./Gallery.css";

// const Gallery = () => { 
//   const trashRef = useRef(null);
// const topRef = useRef(null);
//   const [galleryList, setGalleryList] = useState([]);
//   const [trashList, setTrashList] = useState([]);
// const [showTrash, setShowTrash] = useState(false);
//   const [formData, setFormData] = useState({
//     title: "",
//     type: "photo",
//     image: null,
//     url: "",
//     description: ""
//   });

//   const token = localStorage.getItem("token");

//   /* =========================
//      FETCH GALLERY (ADMIN)
//   ========================= */
//   const fetchGallery = async () => {
//     try {
//       if (!token) {
//         console.log("No token found in localStorage");
//         return;
//       }

//       const res = await axios.get(
//         "http://localhost:5000/api/gallery/admin/all",
//         {
//           headers: {
//             Authorization: `Bearer ${token}`
//           }
//         }
//       );

//       console.log("ADMIN DATA:", res.data);
//       setGalleryList(res.data);

//     } catch (error) {
//       console.log(
//         "FETCH ERROR:",
//         error.response?.data || error.message
//       );
//     }
//   };

//   useEffect(() => {
//     fetchGallery();
//     fetchTrash();
//   }, [token]);

//   /* =========================
//      HANDLE INPUT CHANGE
//   ========================= */
//   const handleChange = (e) => {
//     setFormData({
//       ...formData,
//       [e.target.name]: e.target.value
//     });
//   };

//   /* =========================
//      HANDLE SUBMIT
//   ========================= */
//   const handleSubmit = async (e) => {
//     e.preventDefault();

//     try {
//       const data = new FormData();
//       data.append("title", formData.title);
//       data.append("type", formData.type);
//       data.append("description", formData.description);

//       if (formData.type === "photo") {
//         data.append("image", formData.image);
//       } else {
//         data.append("url", formData.url);
//       }

//       await axios.post(
//         "http://localhost:5000/api/gallery",
//         data,
//         {
//           headers: {
//             Authorization: `Bearer ${token}`,
//             "Content-Type": "multipart/form-data"
//           }
//         }
//       );

//       setFormData({
//         title: "",
//         type: "photo",
//         image: null,
//         url: "",
//         description: ""
//       });

//       fetchGallery();

//     } catch (error) {
//       console.log(error.response?.data || error.message);
//     }
//   };

//   /* =========================
//      SOFT DELETE
//   ========================= */
//   const handleDelete = async (id) => {
//   try {
//     await axios.patch(
//       `http://localhost:5000/api/gallery/delete/${id}`,
//       {},
//       {
//         headers: {
//           Authorization: `Bearer ${token}`
//         }
//       }
//     );

//     fetchGallery();
//     fetchTrash();

//   } catch (error) {
//     console.log(error.response?.data || error.message);
//   }
// };


//   /* =========================
//      RESTORE
//   ========================= */
//   const handleRestore = async (id) => {
//   try {
//     await axios.patch(
//       `http://localhost:5000/api/gallery/restore/${id}`,
//       {},
//       {
//         headers: {
//           Authorization: `Bearer ${token}`
//         }
//       }
//     );

//     fetchGallery();
//     fetchTrash();

//   } catch (error) {
//     console.log(error.response?.data || error.message);
//   }
// };

// const handlePermanentDelete = async (id) => {
//   try {
//     await axios.delete(
//       `http://localhost:5000/api/gallery/permanent/${id}`,
//       {
//         headers: {
//           Authorization: `Bearer ${token}`
//         }
//       }
//     );

//     fetchTrash();

//   } catch (error) {
//     console.log(error.response?.data || error.message);
//   }
// };


//   const fetchTrash = async () => {
//   try {
//     const res = await axios.get(
//       "http://localhost:5000/api/gallery/admin/trash",
//       {
//         headers: {
//           Authorization: `Bearer ${token}`
//         }
//       }
//     );

//     setTrashList(res.data);

//   } catch (error) {
//     console.log(error.response?.data || error.message);
//   }
// };


//   const photos = galleryList.filter(item => item.type === "photo");
//   const videos = galleryList.filter(item => item.type === "video");

//   return (
//     <AdminLayout>
//       <div className="gallery-admin-container">

//   <div className="gallery-header">
//     <h2>Manage Gallery</h2>

//     <button
//       className="trash-btn"
//       onClick={() => setShowTrash(!showTrash)}
//     >
//       Trash ({trashList.length})
//     </button>
//   </div>

//         {/* ================= FORM ================= */}
//         <form className="news-form" onSubmit={handleSubmit}>
//           <input
//             type="text"
//             name="title"
//             placeholder="Title"
//             value={formData.title}
//             onChange={handleChange}
//             required
//           />

//           <select
//             name="type"
//             value={formData.type}
//             onChange={handleChange}
//           >
//             <option value="photo">Photo</option>
//             <option value="video">Video</option>
//           </select>

//           {formData.type === "photo" ? (
//             <input
//               type="file"
//               accept="image/*"
//               onChange={(e) =>
//                 setFormData({
//                   ...formData,
//                   image: e.target.files[0]
//                 })
//               }
//               required
//             />
//           ) : (
//             <input
//               type="text"
//               name="url"
//               placeholder="YouTube Video ID"
//               value={formData.url}
//               onChange={handleChange}
//               required
//             />
//           )}

//           <textarea
//             name="description"
//             placeholder="Description (optional)"
//             value={formData.description}
//             onChange={handleChange}
//           />

//           <button type="submit" className="add-btn">
//             + Add Item
//           </button>
//         </form>

//         {/* ================= PHOTOS ================= */}
//         <h3 className="gallery-section-title">Photos</h3>

//         {photos.length === 0 ? (
//           <p>No photos available.</p>
//         ) : (
//           <div className="gallery-grid-admin">
//             {photos.map((item) => (
//               <div key={item._id} className="gallery-card-admin">
//                 <div className="gallery-thumb">
//                   <img
//   src={
//     item.url.startsWith("http")
//       ? item.url
//       : `http://localhost:5000${item.url}`
//   }
//   alt={item.title}
// />

//                 </div>

//                 <div className="gallery-info">
//                   <h4>{item.title}</h4>
//                   {item.isDeleted && (
//                     <span style={{ color: "red" }}>Deleted</span>
//                   )}
//                 </div>

//                 {item.isDeleted ? (
//                   <button
//                     className="restore-btn"
//                     onClick={() => handleRestore(item._id)}
//                   >
//                     Restore
//                   </button>
//                 ) : (
//                   <button
//                     className="delete-btn"
//                     onClick={() => handleDelete(item._id)}
//                   >
//                     Delete
//                   </button>
//                 )}
//               </div>
//             ))}
//           </div>
//         )}

//         {/* ================= VIDEOS ================= */}
//         <h3 className="gallery-section-title">Videos</h3>

//         {videos.length === 0 ? (
//           <p>No videos available.</p>
//         ) : (
//           <div className="gallery-grid-admin">
//             {videos.map((item) => (
//               <div key={item._id} className="gallery-card-admin">
//                 <div className="gallery-thumb">
//                   <img
//                     src={`https://img.youtube.com/vi/${item.url}/hqdefault.jpg`}
//                     alt={item.title}
//                   />
//                 </div>

//                 <div className="gallery-info">
//                   <h4>{item.title}</h4>
//                   {item.isDeleted && (
//                     <span style={{ color: "red" }}>Deleted</span>
//                   )}
//                 </div>

//                 {item.isDeleted ? (
//                   <button
//                     className="restore-btn"
//                     onClick={() => handleRestore(item._id)}
//                   >
//                     Restore
//                   </button>
//                 ) : (
//                   <button
//                     className="delete-btn"
//                     onClick={() => handleDelete(item._id)}
//                   >
//                     Delete
//                   </button>
//                 )}
//               </div>
//             ))}
//           </div>
//         )}

//         {/* ================= TRASH SECTION ================= */}
// {showTrash && (
//   <>
//     <h3 className="gallery-section-title">Trash</h3>

//     {trashList.length === 0 ? (
//       <p>No deleted items.</p>
//     ) : (
//       <div className="gallery-grid-admin">
//         {trashList.map((item) => (
//           <div key={item._id} className="gallery-card-admin">

//             <div className="gallery-thumb">
//               {item.type === "photo" ? (
//                 <img
//   src={
//     item.url.startsWith("http")
//       ? item.url
//       : `http://localhost:5000${item.url}`
//   }
//   alt={item.title}
// />

//               ) : (
//                 <img
//                   src={`https://img.youtube.com/vi/${item.url}/hqdefault.jpg`}
//                   alt={item.title}
//                 />
//               )}
//             </div>

//             <div className="gallery-info">
//               <h4>{item.title}</h4>
//               <span style={{ color: "red" }}>Deleted</span>
//             </div>

//             <div className="trash-actions">
//   <button
//     className="restore-btn"
//     onClick={() => handleRestore(item._id)}
//   >
//     Restore
//   </button>

//   <button
//     className="permanent-btn"
//     onClick={() => handlePermanentDelete(item._id)}
//   >
//     Permanently Delete
//   </button>
// </div>


//           </div>
//         ))}
//       </div>
//     )}
//   </>
// )}

//       </div>
//     </AdminLayout>
//   );
// };

// export default Gallery;


import { useEffect, useState, useRef } from "react";
import axios from "axios";
import AdminLayout from "../components/AdminLayout";
import "./Gallery.css";

const Gallery = () => {
  const trashRef = useRef(null);
  const topRef = useRef(null);

  const [galleryList, setGalleryList] = useState([]);
  const [trashList, setTrashList] = useState([]);
  const [showTrash, setShowTrash] = useState(false);

  const [formData, setFormData] = useState({
    title: "",
    type: "photo",
    image: null,
    url: "",
    description: ""
  });

  const token = localStorage.getItem("token");

  /* ================= FETCH GALLERY ================= */
  const fetchGallery = async () => {
    try {
      const res = await axios.get(
        "http://localhost:5000/api/gallery/admin/all",
        {
          headers: { Authorization: `Bearer ${token}` }
        }
      );
      setGalleryList(res.data);
    } catch (error) {
      console.log(error.response?.data || error.message);
    }
  };

  const fetchTrash = async () => {
    try {
      const res = await axios.get(
        "http://localhost:5000/api/gallery/admin/trash",
        {
          headers: { Authorization: `Bearer ${token}` }
        }
      );
      setTrashList(res.data);
    } catch (error) {
      console.log(error.response?.data || error.message);
    }
  };

  useEffect(() => {
    fetchGallery();
    fetchTrash();
  }, []);

  /* ================= HANDLE CHANGE ================= */
  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  /* ================= ADD ITEM ================= */
  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const data = new FormData();
      data.append("title", formData.title);
      data.append("type", formData.type);
      data.append("description", formData.description);

      if (formData.type === "photo") {
        data.append("image", formData.image);
      } else {
        data.append("url", formData.url);
      }

      await axios.post("http://localhost:5000/api/gallery", data, {
        headers: {
          Authorization: `Bearer ${token}`,
          "Content-Type": "multipart/form-data"
        }
      });

      setFormData({
        title: "",
        type: "photo",
        image: null,
        url: "",
        description: ""
      });

      fetchGallery();
    } catch (error) {
      console.log(error.response?.data || error.message);
    }
  };

  /* ================= DELETE ================= */
  const handleDelete = async (id) => {
    await axios.patch(
      `http://localhost:5000/api/gallery/delete/${id}`,
      {},
      { headers: { Authorization: `Bearer ${token}` } }
    );

    fetchGallery();
    fetchTrash();
  };

  const handleRestore = async (id) => {
    await axios.patch(
      `http://localhost:5000/api/gallery/restore/${id}`,
      {},
      { headers: { Authorization: `Bearer ${token}` } }
    );

    fetchGallery();
    fetchTrash();
  };

  const handlePermanentDelete = async (id) => {
    await axios.delete(
      `http://localhost:5000/api/gallery/permanent/${id}`,
      { headers: { Authorization: `Bearer ${token}` } }
    );

    fetchTrash();
  };

  const photos = galleryList.filter(item => item.type === "photo");
  const videos = galleryList.filter(item => item.type === "video");

  return (
    <AdminLayout>
      <div className="gallery-admin-container" ref={topRef}>

        {/* HEADER */}
        <div className="gallery-header">
          <h2>Manage Gallery</h2>

          <button
            className="trash-btn"
            onClick={() => {
              setShowTrash(true);
              fetchTrash();

              setTimeout(() => {
                trashRef.current?.scrollIntoView({
                  behavior: "smooth"
                });
              }, 100);
            }}
          >
            Trash ({trashList.length})
          </button>
        </div>

        {/* FORM */}
        <form className="news-form" onSubmit={handleSubmit}>
          <input
            type="text"
            name="title"
            placeholder="Title"
            value={formData.title}
            onChange={handleChange}
            required
          />

          <select
            name="type"
            value={formData.type}
            onChange={handleChange}
          >
            <option value="photo">Photo</option>
            <option value="video">Video</option>
          </select>

          {formData.type === "photo" ? (
            <input
              type="file"
              accept="image/*"
              onChange={(e) =>
                setFormData({
                  ...formData,
                  image: e.target.files[0]
                })
              }
              required
            />
          ) : (
            <input
              type="text"
              name="url"
              placeholder="YouTube Video ID"
              value={formData.url}
              onChange={handleChange}
              required
            />
          )}

          <textarea
            name="description"
            placeholder="Description (optional)"
            value={formData.description}
            onChange={handleChange}
          />

          <button type="submit" className="add-btn">
            + Add Item
          </button>
        </form>

        {/* PHOTOS */}
        <h3 className="gallery-section-title">Photos</h3>
        <div className="gallery-grid-admin">
          {photos.length === 0 && <p>No photos available.</p>}

          {photos.map(item => (
            <div key={item._id} className="gallery-card-admin">
              <div className="gallery-thumb">
                <img
                  src={
                    item.url.startsWith("http")
                      ? item.url
                      : `http://localhost:5000${item.url}`
                  }
                  alt={item.title}
                />
              </div>

              <div className="gallery-info">
                <h4>{item.title}</h4>
              </div>

              <button
                className="delete-btn"
                onClick={() => handleDelete(item._id)}
              >
                Delete
              </button>
            </div>
          ))}
        </div>

        {/* VIDEOS */}
        <h3 className="gallery-section-title">Videos</h3>
        <div className="gallery-grid-admin">
          {videos.length === 0 && <p>No videos available.</p>}

          {videos.map(item => (
            <div key={item._id} className="gallery-card-admin">
              <div className="gallery-thumb">
                <img
                  src={`https://img.youtube.com/vi/${item.url}/hqdefault.jpg`}
                  alt={item.title}
                />
              </div>

              <div className="gallery-info">
                <h4>{item.title}</h4>
              </div>

              <button
                className="delete-btn"
                onClick={() => handleDelete(item._id)}
              >
                Delete
              </button>
            </div>
          ))}
        </div>

        {/* TRASH SECTION */}
        {showTrash && (
          <div className="trash-section" ref={trashRef}>

            <div className="trash-header">
              <h3>Trash</h3>

              <button
                className="close-btn"
                onClick={() => {
                  setShowTrash(false);

                  setTimeout(() => {
                    topRef.current?.scrollIntoView({
                      behavior: "smooth"
                    });
                  }, 100);
                }}
              >
                ✖
              </button>
            </div>

            <div className="gallery-grid-admin">
              {trashList.length === 0 && <p>No deleted items</p>}

              {trashList.map(item => (
                <div key={item._id} className="gallery-card-admin">

                  <div className="gallery-thumb">
                    {item.type === "photo" ? (
                      <img
                        src={
                          item.url.startsWith("http")
                            ? item.url
                            : `http://localhost:5000${item.url}`
                        }
                        alt={item.title}
                      />
                    ) : (
                      <img
                        src={`https://img.youtube.com/vi/${item.url}/hqdefault.jpg`}
                        alt={item.title}
                      />
                    )}
                  </div>

                  <div className="gallery-info">
                    <h4>{item.title}</h4>
                    <span style={{ color: "red" }}>Deleted</span>
                  </div>

                  <div className="trash-actions">
                    <button
                      className="restore-btn"
                      onClick={() => handleRestore(item._id)}
                    >
                      Restore
                    </button>

                    <button
                      className="permanent-btn"
                      onClick={() => handlePermanentDelete(item._id)}
                    >
                      Permanently Delete
                    </button>
                  </div>

                </div>
              ))}
            </div>

          </div>
        )}

      </div>
    </AdminLayout>
  );
};

export default Gallery;
