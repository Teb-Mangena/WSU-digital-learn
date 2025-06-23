import { useEffect, useState } from "react";
import "../../styles/users/AdminDashboard.css";
import { useLogout } from "../../hooks/useLogout";
import { formatDistanceToNow } from "date-fns";
import AdminHeader from "../../components/admin-Components/AdminHeader";
import AdminSidebar from "../../components/admin-Components/AdminSidebar";
import { useAuthContext } from "../../hooks/useAuthContext";

const UserManagement = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [error, setError] = useState(null);
  const [success, setSuccess] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const [learners, setLearners] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [roleFilter, setRoleFilter] = useState("all");
  const [sortConfig, setSortConfig] = useState({ key: "createdAt", direction: "desc" });
  const [editingUser, setEditingUser] = useState(null);
  const [showEditModal, setShowEditModal] = useState(false);
  const { logout } = useLogout();
  const { user: currentUser } = useAuthContext();

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  useEffect(() => {
    const fetchUsers = async () => {
      setIsLoading(true);
      setError(null);
      setSuccess(null);

      try {
        const response = await fetch('https://wsu-dl-server.onrender.com/api/users', {
          headers: {
            'Authorization': `Bearer ${currentUser.token}`
          }
        });

        if (!response.ok) {
          throw new Error('Failed to fetch users');
        }
        
        const data = await response.json();
        setLearners(data);
      } catch (error) {
        setError(error.message || 'An error occurred while fetching users');
      } finally {
        setIsLoading(false);
      }
    };

    if (currentUser && currentUser.token) {
      fetchUsers();
    }
  }, [currentUser]);

  // Filter and sort users
  const filteredUsers = learners.filter(learner => {
    const matchesSearch = 
      learner.email.toLowerCase().includes(searchTerm.toLowerCase()) ||
      learner.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      (learner.lastName && learner.lastName.toLowerCase().includes(searchTerm.toLowerCase()));
    
    const matchesRole = roleFilter === "all" || learner.role === roleFilter;
    
    return matchesSearch && matchesRole;
  }).sort((a, b) => {
    if (a[sortConfig.key] < b[sortConfig.key]) {
      return sortConfig.direction === 'asc' ? -1 : 1;
    }
    if (a[sortConfig.key] > b[sortConfig.key]) {
      return sortConfig.direction === 'asc' ? 1 : -1;
    }
    return 0;
  });

  // Handle sorting
  const handleSort = (key) => {
    let direction = 'asc';
    if (sortConfig.key === key && sortConfig.direction === 'asc') {
      direction = 'desc';
    }
    setSortConfig({ key, direction });
  };

  // Handle user deletion
  const handleDelete = async (userId) => {
    if (!window.confirm("Are you sure you want to delete this user? This action cannot be undone.")) return;
    
    try {
      const response = await fetch(`https://wsu-dl-server.onrender.com/api/users/${userId}`, {
        method: 'DELETE',
        headers: {
          'Authorization': `Bearer ${currentUser.token}`
        }
      });
      
      if (!response.ok) {
        throw new Error('Failed to delete user');
      }
      
      // Remove user from local state
      setLearners(learners.filter(user => user._id !== userId));
      setSuccess('User deleted successfully');
      setTimeout(() => setSuccess(null), 3000);
    } catch (error) {
      setError(error.message || 'Failed to delete user');
    }
  };

  // Open edit modal
  const openEditModal = (user) => {
    setEditingUser(user);
    setShowEditModal(true);
  };

  // Close edit modal
  const closeEditModal = () => {
    setShowEditModal(false);
    setEditingUser(null);
  };

  // Handle form input changes
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setEditingUser({
      ...editingUser,
      [name]: value
    });
  };

  // Handle user update
  const handleUpdate = async (e) => {
    e.preventDefault();
    
    try {
      const response = await fetch(`https://wsu-dl-server.onrender.com/api/users/${editingUser._id}`, {
        method: 'PATCH',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${currentUser.token}`
        },
        body: JSON.stringify({
          name: editingUser.name,
          lastName: editingUser.lastName,
          email: editingUser.email,
          role: editingUser.role
        })
      });
      
      if (!response.ok) {
        throw new Error('Failed to update user');
      }
      
      const updatedUser = await response.json();
      
      // Update local state
      setLearners(learners.map(user => 
        user._id === editingUser._id ? updatedUser : user
      ));
      
      setSuccess('User updated successfully');
      setTimeout(() => setSuccess(null), 3000);
      closeEditModal();
    } catch (error) {
      setError(error.message || 'Failed to update user');
    }
  };

  // Reset filters
  const resetFilters = () => {
    setSearchTerm("");
    setRoleFilter("all");
    setSortConfig({ key: "createdAt", direction: "desc" });
  };

  return (
    <main className="web-container">
      <h1>User Management</h1>
      <div className="dashboard-container">
        <AdminHeader toggleMenu={toggleMenu} />
        <div className="grid-admin-panel">
          <AdminSidebar menuOpen={menuOpen} logout={logout} />
          
          <div className="admin-content">
            <div className="user-management-header">
              <h2>All Users</h2>
              
              <div className="user-controls">
                <div className="search-filter-container">
                  <input
                    type="text"
                    placeholder="Search users..."
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                    className="search-input"
                  />
                  
                  <div className="filter-group">
                    <select 
                      value={roleFilter} 
                      onChange={(e) => setRoleFilter(e.target.value)}
                      className="role-filter"
                    >
                      <option value="all">All Roles</option>
                      <option value="learner">Learner</option>
                      <option value="admin">Admin</option>
                    </select>
                    
                    <button 
                      onClick={resetFilters}
                      className="reset-filters-btn"
                    >
                      Reset Filters
                    </button>
                  </div>
                </div>
                
                <div className="results-info">
                  <span>Showing {filteredUsers.length} of {learners.length} users</span>
                </div>
              </div>
            </div>
            
            {/* Success message */}
            {success && <div className="success-message">{success}</div>}
            
            {/* Error message */}
            {error && <div className="error-message">{error}</div>}
            
            {/* Loading state */}
            {isLoading && (
              <div className="admin-loading">
                <div className="loading-spinner"></div>
                <p>Loading users...</p>
              </div>
            )}
            
            {/* Users table */}
            {!isLoading && !error && (
              <div className="scroll-container">
                <table className="users-table">
                  <thead>
                    <tr>
                      <th onClick={() => handleSort('email')}>
                        Email {sortConfig.key === 'email' && (
                          sortConfig.direction === 'asc' ? '↑' : '↓'
                        )}
                      </th>
                      <th onClick={() => handleSort('name')}>
                        Name {sortConfig.key === 'name' && (
                          sortConfig.direction === 'asc' ? '↑' : '↓'
                        )}
                      </th>
                      <th onClick={() => handleSort('lastName')}>
                        Last Name {sortConfig.key === 'lastName' && (
                          sortConfig.direction === 'asc' ? '↑' : '↓'
                        )}
                      </th>
                      <th onClick={() => handleSort('role')}>
                        Role {sortConfig.key === 'role' && (
                          sortConfig.direction === 'asc' ? '↑' : '↓'
                        )}
                      </th>
                      <th onClick={() => handleSort('createdAt')}>
                        Joined {sortConfig.key === 'createdAt' && (
                          sortConfig.direction === 'asc' ? '↑' : '↓'
                        )}
                      </th>
                      <th>Actions</th>
                    </tr>
                  </thead>
                  <tbody>
                    {filteredUsers.length === 0 ? (
                      <tr>
                        <td colSpan="6" className="no-results">
                          No users found matching your criteria
                        </td>
                      </tr>
                    ) : (
                      filteredUsers.map((learner) => (
                        <tr key={learner._id}>
                          <td>{learner.email}</td>
                          <td>{learner.name}</td>
                          <td>{learner.lastName || '-'}</td>
                          <td>
                            <span className={`role-tag ${learner.role}`}>
                              {learner.role}
                            </span>
                          </td>
                          <td>{formatDistanceToNow(new Date(learner.createdAt), { addSuffix: true })}</td>
                          <td className="actions-cell">
                            <button 
                              onClick={() => openEditModal(learner)}
                              className="edit-btn"
                            >
                              Edit
                            </button>
                            <button 
                              onClick={() => handleDelete(learner._id)}
                              className="delete-btn"
                              disabled={learner._id === currentUser.id}
                              title={learner._id === currentUser.id ? "Cannot delete your own account" : ""}
                            >
                              Delete
                            </button>
                          </td>
                        </tr>
                      ))
                    )}
                  </tbody>
                </table>
              </div>
            )}
          </div>
        </div>
      </div>

      {/* Edit User Modal */}
      {showEditModal && editingUser && (
        <div className="modal-backdrop">
          <div className="edit-modal">
            <div className="modal-header">
              <h3>Edit User: {editingUser.email}</h3>
              <button className="close-modal" onClick={closeEditModal}>
                &times;
              </button>
            </div>
            
            <form onSubmit={handleUpdate} className="edit-form">
              <div className="form-group">
                <label>Email:</label>
                <input
                  type="email"
                  name="email"
                  value={editingUser.email}
                  onChange={handleInputChange}
                  required
                />
              </div>
              
              <div className="form-group">
                <label>First Name:</label>
                <input
                  type="text"
                  name="name"
                  value={editingUser.name}
                  onChange={handleInputChange}
                  required
                />
              </div>
              
              <div className="form-group">
                <label>Last Name:</label>
                <input
                  type="text"
                  name="lastName"
                  value={editingUser.lastName || ''}
                  onChange={handleInputChange}
                />
              </div>
              
              <div className="form-group">
                <label>Role:</label>
                <select
                  name="role"
                  value={editingUser.role}
                  onChange={handleInputChange}
                  required
                >
                  <option value="user">Learner</option>
                  <option value="admin">Admin</option>
                </select>
              </div>
              
              <div className="form-actions">
                <button type="button" className="cancel-btn" onClick={closeEditModal}>
                  Cancel
                </button>
                <button type="submit" className="update-btn">
                  Update User
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </main>
  );
};

export default UserManagement;