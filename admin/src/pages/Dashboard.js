import { useEffect, useState } from "react";
import axios from "axios";
import AdminLayout from "../components/AdminLayout";
import "./Dashboard.css";

const Dashboard = () => {

  const [contactCount, setContactCount] = useState(0);

  useEffect(() => {
    fetchContacts();
  }, []);

  const fetchContacts = async () => {
    try {
      const token = localStorage.getItem("token");

      const res = await axios.get(
        "http://localhost:5000/api/contact",
        {
          headers: {
            Authorization: `Bearer ${token}`
          }
        }
      );

      setContactCount(res.data.length);

    } catch (error) {
      console.log("Error fetching contacts:", error);
    }
  };

  return (
    <AdminLayout>
      <div className="dashboard-container">

        <h1>Welcome Admin 👋</h1>
        <p className="dashboard-subtitle">
          This is your dashboard overview.
        </p>

        <div className="unique-card">
          <div className="card-icon">📩</div>

          <div className="card-content">
            <h3>Total Contact Submissions</h3>
            <h2>{contactCount}</h2>
          </div>

          <div className="card-glow"></div>
        </div>

      </div>
    </AdminLayout>
  );
};

export default Dashboard;