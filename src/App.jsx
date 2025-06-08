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
import Activity from "./pages/AdminPages/Activity";
import MyAssignments from "./pages/Student/MyAssignments";
import MyProfile from "./pages/Student/MyProfile";
import MyCourses from "./pages/Student/MyCourses";
import Quizz from "./pages/Student/Quizz";
import Documents from "./pages/AdminPages/Documents";
import PostQuizz from "./pages/AdminPages/PostQuizz";


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
              path="/upload-quiz"
              element={
                user && user.role === "admin" ? <PostQuizz /> : <Navigate to="/login" />
              }
            />

            <Route
              path="/register-user"
              element={
                user && user.role === "admin" ? <RegisterUserPage /> : <Navigate to="/login" />
              }
            />

            <Route
              path="/documents"
              element={
                user && user.role === "admin" ? <Documents /> : <Navigate to="/login" />
              }
            />

            <Route
              path="/activity"
              element={
                user && user.role === "admin" ? <Activity /> : <Navigate to="/login" />
              }
            />

            {/* STUDENT DASHBOARD */}
            <Route
              path="/my-assignments"
              element={
                user && user.role === "user" ? <MyAssignments /> : <Navigate to="/login" />
              }
            />

            <Route
              path="/my-profile"
              element={
                user && user.role === "user" ? <MyProfile /> : <Navigate to="/login" />
              }
            />

            <Route
              path="/my-courses"
              element={
                user && user.role === "user" ? <MyCourses /> : <Navigate to="/login" />
              }
            />

            <Route
              path="/quizz"
              element={
                user && user.role === "user" ? <Quizz /> : <Navigate to="/login" />
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
