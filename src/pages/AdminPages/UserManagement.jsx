import { useEffect, useState } from "react";
import "../../styles/users/AdminDashboard.css";
import { useLogout } from "../../hooks/useLogout";
import { formatDistanceToNow } from "date-fns";
import AdminHeader from "../../components/admin-Components/AdminHeader";
import AdminSidebar from "../../components/admin-Components/AdminSidebar";

const UserManagement = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [error, setError] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [learners, setLearners] = useState(null);

  const { logout } = useLogout();

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  useEffect(() => {
    const fetchUsers = async () => {
      setIsLoading(true);

      const response = await fetch('/api/users');

      const data = await response.json();

      if (!response.ok) {
        setError(data.error);
        setIsLoading(false);
      }

      setError(data.error);
      setIsLoading(false);
      setLearners(data);
    };

    fetchUsers();
  }, []);

  return (
    <main className="web-container">
      <h1>User Management</h1>
      <div className="dashboard-container">
        <AdminHeader toggleMenu={toggleMenu} />
        <div className="grid-admin-panel">
          <AdminSidebar menuOpen={menuOpen} logout={logout} />
          <div className="grid-box-users">
          <h2>All Users</h2>
          {learners &&
            learners.map((learner) => (
              <div className="learner-list" key={learner._id}>
                <ul>
                  <li><b>Email:</b> {learner.email}</li>
                  <li><b>Name:</b> {learner.name}</li>
                  <li><b>Last Name:</b> {learner.lastName}</li>
                  <li><b>Role:</b> {learner.role}</li>
                  <li><b>Joined:</b> {formatDistanceToNow(new Date(learner.createdAt), { addSuffix: true })}</li>
                </ul>
              </div>
            ))}
            {error && <div className="error">{error}</div>}
            {isLoading && <div className="loading-spinner"></div>}
          </div>
        </div>
      </div>
    </main>
  );
};

export default UserManagement;
