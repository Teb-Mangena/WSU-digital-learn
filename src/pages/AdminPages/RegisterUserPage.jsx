import { useState } from "react";
import "../../styles/users/AdminDashboard.css";
import { useLogout } from "../../hooks/useLogout";
import AdminHeader from "../../components/admin-Components/AdminHeader";
import AdminSidebar from "../../components/admin-Components/AdminSidebar";
import Signup from "../Signup";

const RegisterUserPage = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const { logout } = useLogout();

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <main className="web-container">
      <h1>Register a Learner</h1>
      <div className="dashboard-container">
        <AdminHeader toggleMenu={toggleMenu} />
        <div className="grid-admin-panel">
          <AdminSidebar menuOpen={menuOpen} logout={logout} />
          <div className="signup-form-cont">
            <Signup />
          </div>
        </div>
      </div>
    </main>
  );
};

export default RegisterUserPage;
