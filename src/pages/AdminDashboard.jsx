import { useState } from "react";
import { useLogout } from "../hooks/useLogout";
import AdminSidebar from "../components/admin-Components/AdminSidebar";
import AdminHeader from "../components/admin-Components/AdminHeader";
import AdminMainContent from "../components/admin-Components/AdminMainContent";
import "../styles/users/AdminDashboard.css";

const AdminDashboard = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const { logout } = useLogout();

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <main className="web-container">
      <h1>Admin Dashboard</h1>
      <div className="dashboard-container">
        <AdminHeader toggleMenu={toggleMenu} />
        <div className="grid-admin-panel">
          <AdminSidebar menuOpen={menuOpen} logout={logout} />
          <AdminMainContent />
        </div>
      </div>
    </main>
  );
};

export default AdminDashboard;
