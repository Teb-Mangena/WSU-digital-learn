import { useState } from "react";
import { Link } from "react-router-dom";
import "../styles/users/AdminDashboard.css";
import { useLogout } from "../hooks/useLogout";

const DashBoard = () => {
    const [menuOpen, setMenuOpen] = useState(false);
  
    const {logout} = useLogout();
  
    const toggleMenu = () => {
      setMenuOpen(!menuOpen);
    };
  
    const LogoutUser = () => {
      logout();
    }

  return ( 
    <>
            <div className="dashboard-container">
        <header className="header">
          <div className="hamburger-admin" onClick={toggleMenu}>☰</div>
        </header>

        <div className="grid-admin-panel">
          {/* Sidebar */}
        <div className={`sidebar ${menuOpen ? "active" : ""}`}>
          <ul>
            <li>
              <Link to="/admin-dashboard">Dashboard</Link>
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
          <h2>Main</h2>
        </div>
        </div>
      </div>
    </>
   );
}
 
export default DashBoard;