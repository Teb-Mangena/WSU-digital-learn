import { Link } from "react-router-dom";

const AdminSidebar = ({ menuOpen, logout }) => {
  return (
    <div className={`sidebar ${menuOpen ? "active" : ""}`}>
      <ul>
        <li>
          <Link to="/admin-dashboard">Dashboard</Link>
        </li>
        <li>
          <Link to="/user-management">User Management</Link>
        </li>
        <li>
          <Link to="/activity">Upload Documents</Link>
        </li>
        <li>
          <Link to="/documents">Manage Documents</Link>
        </li>
        <li>
          <Link to="/register-user">Register Learners</Link>
        </li>
        <li>
          <Link to="/logout" onClick={logout}>
            Logout
          </Link>
        </li>
      </ul>
    </div>
  );
};

export default AdminSidebar;
