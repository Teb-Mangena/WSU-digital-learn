import { useState } from "react";
import "../../styles/users/AdminDashboard.css";
import { useLogout } from "../../hooks/useLogout";
import AdminHeader from "../../components/admin-Components/AdminHeader";
import AdminSidebar from "../../components/admin-Components/AdminSidebar";

const SubmittedQuiz = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const { logout } = useLogout();

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <main className="web-container">
      <h1>Track Learners Progress</h1>
      <div className="dashboard-container">
        <AdminHeader toggleMenu={toggleMenu} />
        <div className="grid-admin-panel">
          <AdminSidebar menuOpen={menuOpen} logout={logout} />
          <div className="Admin Content">
            <h2>Learners Progress</h2>
          </div>
        </div>
      </div>
    </main>
  );
};

export default SubmittedQuiz;
