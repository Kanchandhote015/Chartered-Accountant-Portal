// import { useEffect, useState } from "react";
// import axios from "axios";
// import AdminLayout from "../components/AdminLayout";
// import "./News.css";

// const News = () => {
//   const [newsList, setNewsList] = useState([]);
//   const [form, setForm] = useState({
//     title: "",
//     description: "",
//     tag: "",
//     date: "",
//   });

//   const token = localStorage.getItem("token");

//   const fetchNews = async () => {
//     const res = await axios.get("http://localhost:5000/api/news");
//     setNewsList(res.data);
//   };

//   useEffect(() => {
//     fetchNews();
//   }, []);

//   const handleChange = (e) => {
//     setForm({ ...form, [e.target.name]: e.target.value });
//   };

//   const addNews = async () => {
//     if (!form.title || !form.description) return;

//     await axios.post(
//       "http://localhost:5000/api/news",
//       form,
//       {
//         headers: {
//           Authorization: `Bearer ${token}`,
//         },
//       }
//     );

//     setForm({
//       title: "",
//       description: "",
//       tag: "",
//       date: "",
//     });

//     fetchNews();
//   };

//   const deleteNews = async (id) => {
//     await axios.delete(
//       `http://localhost:5000/api/news/${id}`,
//       {
//         headers: {
//           Authorization: `Bearer ${token}`,
//         },
//       }
//     );

//     fetchNews();
//   };

//   return (
//     <AdminLayout>
//       <div className="news-admin-container">

//         <h2>Manage News</h2>

//         {/* Form */}
//         <div className="news-form">
//           <input
//             name="title"
//             placeholder="News Title"
//             value={form.title}
//             onChange={handleChange}
//           />

//           <input
//             name="tag"
//             placeholder="Category Tag (e.g GST)"
//             value={form.tag}
//             onChange={handleChange}
//           />

//           <input
//             name="date"
//             placeholder="Date (e.g March 2026)"
//             value={form.date}
//             onChange={handleChange}
//           />

//           <textarea
//             name="description"
//             placeholder="News Description"
//             value={form.description}
//             onChange={handleChange}
//             rows="4"
//           />

//           <button onClick={addNews} className="add-btn">
//             + Add News
//           </button>
//         </div>

//         {/* News List */}
//         <div className="news-list-admin">
//           {newsList.map((news) => (
//             <div key={news._id} className="news-card-admin">
//               <div>
//                 <h4>{news.title}</h4>
//                 <p>{news.tag} | {news.date}</p>
//               </div>

//               <button
//                 onClick={() => deleteNews(news._id)}
//                 className="delete-btn"
//               >
//                 Delete
//               </button>
//             </div>
//           ))}
//         </div>

//       </div>
//     </AdminLayout>
//   );
// };

// export default News;


import { useEffect, useState, useRef } from "react";
import axios from "axios";
import AdminLayout from "../components/AdminLayout";
import "./News.css";

const News = () => {
  const [newsList, setNewsList] = useState([]);
  const [trashList, setTrashList] = useState([]);
  const [showTrash, setShowTrash] = useState(false);

  const trashRef = useRef(null);

  const [form, setForm] = useState({
    title: "",
    description: "",
    tag: "",
    date: "",
  });

  const token = localStorage.getItem("token");

  /* ================= FETCH ACTIVE NEWS ================= */
  const fetchNews = async () => {
    const res = await axios.get("http://localhost:5000/api/news");
    setNewsList(res.data);
  };

  /* ================= FETCH TRASH NEWS ================= */
  const fetchTrash = async () => {
    const res = await axios.get(
      "http://localhost:5000/api/news/trash",
      {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      }
    );
    setTrashList(res.data);
  };

  useEffect(() => {
    fetchNews();
  }, []);

  /* ================= HANDLE CHANGE ================= */
  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  /* ================= ADD NEWS ================= */
  const addNews = async () => {
    if (!form.title || !form.description) return;

    await axios.post(
      "http://localhost:5000/api/news",
      form,
      {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      }
    );

    setForm({
      title: "",
      description: "",
      tag: "",
      date: "",
    });

    fetchNews();
  };

  /* ================= SOFT DELETE ================= */
  const deleteNews = async (id) => {
    await axios.put(
      `http://localhost:5000/api/news/delete/${id}`,
      {},
      {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      }
    );

    fetchNews();
    fetchTrash();
  };

  /* ================= RESTORE ================= */
  const restoreNews = async (id) => {
    await axios.put(
      `http://localhost:5000/api/news/restore/${id}`,
      {},
      {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      }
    );

    fetchNews();
    fetchTrash();
  };

  /* ================= PERMANENT DELETE ================= */
  const permanentDelete = async (id) => {
    await axios.delete(
      `http://localhost:5000/api/news/permanent/${id}`,
      {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      }
    );

    fetchTrash();
  };

  /* ================= TOGGLE TRASH ================= */
  const handleTrashToggle = async () => {
    if (!showTrash) {
      await fetchTrash();
      setShowTrash(true);

      setTimeout(() => {
        trashRef.current?.scrollIntoView({ behavior: "smooth" });
      }, 100);
    } else {
      setShowTrash(false);
    }
  };

  return (
    <AdminLayout>
      <div className="news-admin-container">

        <div className="news-header">
          <h2>Manage News</h2>

          <button
            className="trash-btn"
            onClick={handleTrashToggle}
          >
            Trash ({trashList.length})
          </button>
        </div>

        {/* ================= FORM ================= */}
        <div className="news-form">
          <input
            name="title"
            placeholder="News Title"
            value={form.title}
            onChange={handleChange}
          />

          <input
            name="tag"
            placeholder="Category Tag (e.g GST)"
            value={form.tag}
            onChange={handleChange}
          />

          <input
            name="date"
            placeholder="Date (e.g March 2026)"
            value={form.date}
            onChange={handleChange}
          />

          <textarea
            name="description"
            placeholder="News Description"
            value={form.description}
            onChange={handleChange}
            rows="4"
          />

          <button onClick={addNews} className="add-btn">
            + Add News
          </button>
        </div>

        {/* ================= ACTIVE NEWS ================= */}
        <div className="news-list-admin">
          {newsList.map((news) => (
            <div key={news._id} className="news-card-admin">
              <div>
                <h4>{news.title}</h4>
                <p>{news.tag} | {news.date}</p>
              </div>

              <button
                onClick={() => deleteNews(news._id)}
                className="delete-btn"
              >
                Delete
              </button>
            </div>
          ))}
        </div>

        {/* ================= TRASH SECTION ================= */}
        {showTrash && (
          <div ref={trashRef} className="trash-section">

            <div className="trash-header">
              <h3>Trash</h3>
              <button
                className="close-trash"
                onClick={() => setShowTrash(false)}
              >
                ✕
              </button>
            </div>

            <div className="news-list-admin">
              {trashList.length === 0 && <p>No news in trash.</p>}

              {trashList.map((news) => (
                <div key={news._id} className="news-card-admin">
                  <div>
                    <h4>{news.title}</h4>
                  </div>

                  <div className="trash-actions">
                    <button
                      className="restore-btn"
                      onClick={() => restoreNews(news._id)}
                    >
                      Restore
                    </button>

                    <button
                      className="permanent-btn"
                      onClick={() => permanentDelete(news._id)}
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

export default News;
