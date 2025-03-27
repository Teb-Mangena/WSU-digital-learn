import { useState } from "react";
import { Link } from "react-router-dom";
import "../styles/users/AdminDashboard.css";
import Signup from "./Signup";
import { useLogout } from "../hooks/useLogout";

const AdminDashboard = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [openRegister, setOpenRegister] = useState(false);

  const {logout} = useLogout();

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  const handleRegUser = () => {
    setOpenRegister(!openRegister);
  };

  const LogoutUser = () => {
    logout();
  }

  return (
    <main className="web-container">
      <h1>Admin Dashboard</h1>

      <div className="dashboard-container">
        <header className="header">
          <div className="hamburger-admin" onClick={toggleMenu}>☰</div>
        </header>

        <div className="grid-admin-panel">
          {/* Sidebar */}
        <div className={`sidebar ${menuOpen ? "active" : ""}`}>
          <ul>
            <li>
              <Link to="/dashboard">Dashboard</Link>
            </li>
            <li>
              <Link to="/user-management">User Management</Link>
            </li>
            <li>
              <Link to="/reports">Reports</Link>
            </li>
            <li>
              <Link to="/settings">Settings</Link>
            </li>
            <li>
              <Link to="/logout" onClick={LogoutUser}>Logout</Link>
            </li>
          </ul>
        </div>

        {/* Main Content */}
        <div className="main-content">
          <div className="card">
            <h2>Welcome, Admin!</h2>
            <p>Manage users, view reports, and configure settings from this dashboard.</p>
          </div>
          <div className="card">
            <h2>Recent Activity</h2>
            <p>See the latest updates and actions taken on the platform.</p>
          </div>
        </div>
        </div>

        {/* Register User Section */}
        <div className="register-user">
            {openRegister && <Signup />}
            <button className="reg-user" onClick={handleRegUser}>
            {openRegister ? 'Close Form' : 'Signup a Learner'}
          </button>
        </div>
      </div>
    </main>
  );
};

export default AdminDashboard;
