// import { useEffect, useState } from "react";
// import axios from "axios";
// import AdminLayout from "../components/AdminLayout";
// import "./Contact.css";

// const Contact = () => {
//   const [contacts, setContacts] = useState([]);
//   const token = localStorage.getItem("token");

//   const fetchContacts = async () => {
//     try {
//       const res = await axios.get("http://localhost:5000/api/contact", {
//         headers: { Authorization: `Bearer ${token}` }
//       });
//       setContacts(res.data);
//     } catch (error) {
//       console.log(error);
//     }
//   };

//   useEffect(() => {
//     fetchContacts();
//   }, []);

//   const handleDelete = async (id) => {
//     try {
//       await axios.delete(
//         `http://localhost:5000/api/contact/${id}`,
//         { headers: { Authorization: `Bearer ${token}` } }
//       );
//       fetchContacts();
//     } catch (error) {
//       console.log(error);
//     }
//   };

//   return (
//     <AdminLayout>
//       <div className="contact-admin-container">
//         <h2>Contact Submissions</h2>

//         <div className="contact-list-admin">
//           {contacts.map((item) => (
//             <div key={item._id} className="contact-card-admin">

//               <div className="contact-card-header">
//                 <h4>{item.name}</h4>
//                 <button
//                   className="delete-btn"
//                   onClick={() => handleDelete(item._id)}
//                 >
//                   Delete
//                 </button>
//               </div>

//               <p className="contact-email">{item.email}</p>
//               <p className="contact-message">{item.message}</p>

//             </div>
//           ))}
//         </div>
//       </div>
//     </AdminLayout>
//   );
// };

// export default Contact;


import { useEffect, useState } from "react";
import axios from "axios";
import AdminLayout from "../components/AdminLayout";
import "./Contact.css";

const Contact = () => {
  const [contacts, setContacts] = useState([]);
  const [search, setSearch] = useState("");

  const token = localStorage.getItem("token");

  const fetchContacts = async () => {
    const res = await axios.get(
      "http://localhost:5000/api/contact",
      { headers: { Authorization: `Bearer ${token}` } }
    );
    setContacts(res.data);
  };

  useEffect(() => {
    fetchContacts();
  }, []);

  const handleDelete = async (id) => {
    await axios.delete(
      `http://localhost:5000/api/contact/${id}`,
      { headers: { Authorization: `Bearer ${token}` } }
    );
    fetchContacts();
  };

  const markRead = async (id) => {
    await axios.put(
      `http://localhost:5000/api/contact/read/${id}`,
      {},
      { headers: { Authorization: `Bearer ${token}` } }
    );
    fetchContacts();
  };

  const markReplied = async (id) => {
    await axios.put(
      `http://localhost:5000/api/contact/reply/${id}`,
      {},
      { headers: { Authorization: `Bearer ${token}` } }
    );
    fetchContacts();
  };

  const filtered = contacts.filter(
    (c) =>
      c.name.toLowerCase().includes(search.toLowerCase()) ||
      c.email.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <AdminLayout>
      <div className="contact-admin-container">
        <h2>Contact Submissions</h2>

        {/* SEARCH */}
        <input
          type="text"
          placeholder="Search by name or email..."
          className="search-input"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />

        {/* LIST */}
        <div className="contact-list">
          {filtered.map((item) => (
            <div
              key={item._id}
              className={`contact-card ${item.isRead ? "" : "unread"}`}
            >
              <div className="contact-header">
                <div>
                  <h4>{item.name}</h4>
                  <p>{item.email}</p>
                </div>

                <div className="badges">

  {item.isRead ? (
    <span className="badge read">Read</span>
  ) : (
    <span className="badge unread-badge">Unread</span>
  )}

  {item.isReplied ? (
    <span className="badge replied">Replied</span>
  ) : (
    <span className="badge not-replied">Not Replied</span>
  )}

</div>

              </div>

              <p className="message">{item.message}</p>

              <small>
                {new Date(item.createdAt).toLocaleString()}
              </small>

              <div className="contact-actions">
                {!item.isRead && (
                  <button onClick={() => markRead(item._id)}>
                    Mark Read
                  </button>
                )}

                {!item.isReplied && (
                  <button onClick={() => markReplied(item._id)}>
                    Mark Replied
                  </button>
                )}

                <button
                  className="delete-btn"
                  onClick={() => handleDelete(item._id)}
                >
                  Delete
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </AdminLayout>
  );
};

export default Contact;
