import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import { useAuthContext } from "./hooks/useAuthContext";

// Pages and components
import Home from "./pages/Home";
import StudentDashboard from "./pages/StudentDashboard";
import AdminDashboard from "./pages/AdminDashboard";
import About from "./pages/About";
import Signup from "./pages/Signup";
import Login from "./pages/Login";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import LearnerGuide from "./pages/LearnerGuide";
import Reviews from "./pages/Reviews";
import Contact from "./pages/Contact";
import UserManagement from "./pages/AdminPages/UserManagement";
import RegisterUserPage from "./pages/AdminPages/RegisterUserPage";


function App() {
  const { user } = useAuthContext();

  return (
    <div className="App">
      <BrowserRouter>
        <Navbar />
        <div className="pages">
          <Routes>
            <Route index element={<Home />} />

            {/* Login Route */}
            <Route
              path="/login"
              element={
                !user ? (
                  <Login />
                ) : user.role === "admin" ? (
                  <Navigate to="/admin-dashboard" />
                ) : (
                  <Navigate to="/student-dashboard" />
                )
              }
            />

            {/* Signup - Only Admins can access */}
            <Route
              path="/signup"
              element={
                user && user.role === "admin" ? <Signup /> : <Navigate to="/login" />
              }
            />

            {/* Student Dashboard */}
            <Route
              path="/student-dashboard"
              element={
                user && user.role === "user" ? <StudentDashboard /> : <Navigate to="/login" />
              }
            />

            {/* Admin Dashboard */}
            <Route
              path="/admin-dashboard"
              element={
                user && user.role === "admin" ? <AdminDashboard /> : <Navigate to="/login" />
              }
            />

            <Route
              path="/user-management"
              element={
                user && user.role === "admin" ? <UserManagement /> : <Navigate to="/login" />
              }
            />

            <Route
              path="/register-user"
              element={
                user && user.role === "admin" ? <RegisterUserPage /> : <Navigate to="/login" />
              }
            />

            {/* Other Routes */}
            <Route path="/learner-guide" element={<LearnerGuide />} />
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/reviews" element={<Reviews />} />
          </Routes>
        </div>
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
