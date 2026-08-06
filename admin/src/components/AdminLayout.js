
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./AdminLayout.css";

const AdminLayout = ({ children }) => {
  const navigate = useNavigate();
  const [sidebarOpen, setSidebarOpen] = useState(false);

  const handleLogout = () => {
    localStorage.removeItem("token");
    localStorage.removeItem("role");
    navigate("/");
  };

  const handleNavigate = (path) => {
    navigate(path);
    setSidebarOpen(false); // auto close on mobile
  };

  return (
    <div className="admin-container">

      {/* ===== MOBILE TOP BAR ===== */}
      <div className="mobile-topbar">
        <button
  className="hamburger"
  onClick={() => setSidebarOpen(!sidebarOpen)}
>
  {sidebarOpen ? "✕" : "☰"}
</button>

        <h3>Admin Panel</h3>
      </div>

      {/* ===== SIDEBAR ===== */}
      <div className={`admin-sidebar ${sidebarOpen ? "active" : ""}`}>

        <div className="sidebar-header">
          <h2>Admin Panel</h2>
          <button
            className="close-btn"
            onClick={() => setSidebarOpen(false)}
          >
            ✕
          </button>
        </div>

        <hr />

        <p onClick={() => handleNavigate("/dashboard")}>
          Dashboard
        </p>

        <p onClick={() => handleNavigate("/services")}>
          Services
        </p>

        <p onClick={() => handleNavigate("/gallery")}>
          Gallery
        </p>

        <p onClick={() => handleNavigate("/news")}>
          News
        </p>

        <p onClick={() => handleNavigate("/contact")}>
          Contacts
        </p>

        <hr />

        <button className="logout-btn" onClick={handleLogout}>
          Logout
        </button>
      </div>

      {/* ===== MAIN CONTENT ===== */}
      <div className="admin-content">
        {children}
      </div>

    </div>
  );
};

export default AdminLayout;
