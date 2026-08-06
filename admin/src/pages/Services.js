import { useEffect, useState, useRef } from "react";
import axios from "axios";
import AdminLayout from "../components/AdminLayout";
import "./Services.css";

const Services = () => {
  const SHORT_LIMIT = 150;
  const FULL_LIMIT = 1000;
  const [services, setServices] = useState([]);
  const [trashList, setTrashList] = useState([]);
  const [showTrash, setShowTrash] = useState(false);

  const trashRef = useRef(null);
  const topRef = useRef(null);

  const [formData, setFormData] = useState({
    title: "",
    description: "",
    fullDescription: "",
    highlights: "",
    image: "",
    icon: "audit",
    order: 0
  });

  /* ================= FETCH SERVICES ================= */
  const fetchServices = async () => {
    const res = await axios.get("http://localhost:5000/api/services");
    setServices(res.data);
  };

  const fetchTrash = async () => {
    const res = await axios.get("http://localhost:5000/api/services/trash");
    setTrashList(res.data);
  };

  useEffect(() => {
    fetchServices();
    fetchTrash();
  }, []);

  /* ================= HANDLE CHANGE ================= */
  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  /* ================= ADD SERVICE ================= */
  const handleSubmit = async (e) => {
  e.preventDefault();

  const data = new FormData();

  data.append("title", formData.title);
  data.append("description", formData.description);
  data.append("fullDescription", formData.fullDescription);
  data.append("icon", formData.icon);
  data.append("order", formData.order);

  data.append(
    "highlights",
    formData.highlights
      ? JSON.stringify(
          formData.highlights
            .split(",")
            .map(item => item.trim())
        )
      : JSON.stringify([])
  );

  if (formData.image) {
    data.append("image", formData.image);
  }

  await axios.post(
    "http://localhost:5000/api/services",
    data,
    {
      headers: {
        "Content-Type": "multipart/form-data"
      }
    }
  );

  setFormData({
    title: "",
    description: "",
    fullDescription: "",
    highlights: "",
    image: "",
    icon: "audit",
    order: 0
  });

  fetchServices();
};

  /* ================= DELETE ================= */
  const handleDelete = async (id) => {
    await axios.put(`http://localhost:5000/api/services/delete/${id}`);
    fetchServices();
    fetchTrash();
  };

  const handleRestore = async (id) => {
    await axios.put(`http://localhost:5000/api/services/restore/${id}`);
    fetchServices();
    fetchTrash();
  };

  const handlePermanentDelete = async (id) => {
    await axios.delete(`http://localhost:5000/api/services/permanent/${id}`);
    fetchTrash();
  };

  const iconOptions = [
    "audit",
    "tax",
    "legal",
    "debt",
    "bankruptcy",
    "state",
    "outsourcing",
    "rera"
  ];

  return (
    <AdminLayout>
      <div className="services-admin-container" ref={topRef}>

        {/* HEADER */}
        <div className="services-header">
          <h2>Manage Services</h2>

          <button
            className="trash-btn"
            onClick={() => {
              setShowTrash(true);
              fetchTrash();

              setTimeout(() => {
                trashRef.current?.scrollIntoView({ behavior: "smooth" });
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
            placeholder="Service Title"
            value={formData.title}
            onChange={handleChange}
            required
          />

          {/* <textarea
            name="description"
            placeholder="Short Description"
            value={formData.description}
            onChange={handleChange}
            required
          /> */}

          <textarea
  name="description"
  placeholder="Short Description"
  value={formData.description}
  maxLength={SHORT_LIMIT}
  onChange={handleChange}
  required
/>

<div className="char-counter">
  {formData.description.length}/{SHORT_LIMIT}
</div>


          {/* <textarea
            name="fullDescription"
            placeholder="Full Description"
            value={formData.fullDescription}
            onChange={handleChange}
          /> */}

          <textarea
  name="fullDescription"
  placeholder="Full Description"
  value={formData.fullDescription}
  maxLength={FULL_LIMIT}
  onChange={handleChange}
/>

<div className="char-counter">
  {formData.fullDescription.length}/{FULL_LIMIT}
</div>


          <input
            type="text"
            name="highlights"
            placeholder="Highlights (comma separated)"
            value={formData.highlights}
            onChange={handleChange}
          />

          {/* IMAGE UPLOAD */}
<label>Service Image</label>

<input
  type="file"
  accept="image/*"
  onChange={(e) => setFormData({
    ...formData,
    image: e.target.files[0]
  })}
/>

{/* Preview */}
{formData.image && typeof formData.image !== "string" && (
  <img
    src={URL.createObjectURL(formData.image)}
    alt="Preview"
    style={{ width: "120px", marginTop: "10px", borderRadius: "6px" }}
    className="image-preview"
  />
)}

          <input
            type="number"
            name="order"
            placeholder="Display Order"
            value={formData.order}
            onChange={handleChange}
          />

          <label>Select Icon</label>
          <div className="icon-selection">
            {iconOptions.map((icon) => (
              <button
                type="button"
                key={icon}
                className={`icon-btn ${formData.icon === icon ? "active-icon" : ""}`}
                onClick={() => setFormData({ ...formData, icon })}
              >
                {icon}
              </button>
            ))}
          </div>

          <button type="submit" className="add-btn">
            + Add Service
          </button>
        </form>

        {/* ACTIVE SERVICES */}
        <h3 className="services-section-title">Active Services</h3>
        <div className="services-grid-admin">
          {services.map((item) => (
            <div key={item._id} className="services-card-admin">
              <div className="services-info">
                <h4>{item.title}</h4>
                <p className="icon-tag">{item.icon}</p>
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
                    topRef.current?.scrollIntoView({ behavior: "smooth" });
                  }, 100);
                }}
              >
                ✖
              </button>
            </div>

            <div className="services-grid-admin">
              {trashList.length === 0 && <p>No deleted services</p>}

              {trashList.map((item) => (
                <div key={item._id} className="services-card-admin">
                  <div className="services-info">
                    <h4>{item.title}</h4>
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

export default Services;
